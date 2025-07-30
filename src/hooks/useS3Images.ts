'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface ImageCache {
    [url: string]: {
        loaded: boolean;
        error: boolean;
        timestamp: number;
    };
}

interface UseS3ImagesOptions {
    preload?: boolean;
    cacheTimeout?: number; // in milliseconds
    onLoad?: (url: string) => void;
    onError?: (url: string, error: string) => void;
}

export function useS3Images(
    urls: string[],
    options: UseS3ImagesOptions = {}
) {
    const {
        preload = false,
        cacheTimeout = 30 * 60 * 1000, // 30 minutes default
        onLoad,
        onError,
    } = options;

    const [loadingStates, setLoadingStates] = useState<{ [url: string]: boolean }>({});
    const [loadedStates, setLoadedStates] = useState<{ [url: string]: boolean }>({});
    const [errorStates, setErrorStates] = useState<{ [url: string]: boolean }>({});
    const [progress, setProgress] = useState(0);

    const cacheRef = useRef<ImageCache>({});
    const loadingRef = useRef<{ [url: string]: boolean }>({});

    // Preload a single image
    const preloadImage = useCallback((url: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            // Check cache first
            const cached = cacheRef.current[url];
            if (cached && Date.now() - cached.timestamp < cacheTimeout) {
                if (cached.loaded) {
                    setLoadedStates(prev => ({ ...prev, [url]: true }));
                    onLoad?.(url);
                    resolve();
                    return;
                }
                if (cached.error) {
                    setErrorStates(prev => ({ ...prev, [url]: true }));
                    onError?.(url, 'Cached error');
                    reject(new Error('Cached error'));
                    return;
                }
            }

            // Skip if already loading
            if (loadingRef.current[url]) {
                resolve();
                return;
            }

            loadingRef.current[url] = true;
            setLoadingStates(prev => ({ ...prev, [url]: true }));

            const img = new Image();

            img.onload = () => {
                loadingRef.current[url] = false;
                cacheRef.current[url] = {
                    loaded: true,
                    error: false,
                    timestamp: Date.now(),
                };

                setLoadingStates(prev => ({ ...prev, [url]: false }));
                setLoadedStates(prev => ({ ...prev, [url]: true }));
                setErrorStates(prev => ({ ...prev, [url]: false }));

                onLoad?.(url);
                resolve();
            };

            img.onerror = () => {
                loadingRef.current[url] = false;
                cacheRef.current[url] = {
                    loaded: false,
                    error: true,
                    timestamp: Date.now(),
                };

                setLoadingStates(prev => ({ ...prev, [url]: false }));
                setLoadedStates(prev => ({ ...prev, [url]: false }));
                setErrorStates(prev => ({ ...prev, [url]: true }));

                const error = `Failed to load image: ${url}`;
                onError?.(url, error);
                reject(new Error(error));
            };

            // Start loading
            img.src = url;
        });
    }, [cacheTimeout, onLoad, onError]);

    // Preload all images
    const preloadAll = useCallback(async () => {
        const validUrls = urls.filter(url => url && typeof url === 'string');
        if (validUrls.length === 0) return;

        let completed = 0;
        setProgress(0);

        const loadPromises = validUrls.map(async (url) => {
            try {
                await preloadImage(url);
            } catch (error) {
                // Continue loading other images even if one fails
                console.warn(`Failed to preload image: ${url}`, error);
            } finally {
                completed++;
                setProgress((completed / validUrls.length) * 100);
            }
        });

        await Promise.allSettled(loadPromises);
    }, [urls, preloadImage]);

    // Effect to start preloading if enabled
    useEffect(() => {
        if (preload && urls.length > 0) {
            preloadAll();
        }
    }, [preload, preloadAll, urls.length]);

    // Cleanup cache on unmount
    useEffect(() => {
        return () => {
            // Clear loading states
            loadingRef.current = {};
        };
    }, []);

    // Get stats
    const stats = {
        total: urls.length,
        loaded: Object.values(loadedStates).filter(Boolean).length,
        loading: Object.values(loadingStates).filter(Boolean).length,
        failed: Object.values(errorStates).filter(Boolean).length,
        progress,
        isComplete: urls.length > 0 && Object.values(loadedStates).filter(Boolean).length === urls.length,
    };

    return {
        loadingStates,
        loadedStates,
        errorStates,
        progress,
        stats,
        preloadImage,
        preloadAll,
    };
}

// Hook for preloading a sequence of S3 images (like banner images 1-10)
export function useS3ImageSequence(
    baseUrl: string,
    count: number,
    options: UseS3ImagesOptions = {}
) {
    const urls = Array.from({ length: count }, (_, i) =>
        baseUrl.replace(/(\d+)(\.\w+)$/, `${i + 1}$2`)
    );

    return useS3Images(urls, options);
}

// Hook for single S3 image with retry logic
export function useS3Image(url: string, options: UseS3ImagesOptions = {}) {
    const result = useS3Images([url], options);

    return {
        isLoading: result.loadingStates[url] || false,
        isLoaded: result.loadedStates[url] || false,
        hasError: result.errorStates[url] || false,
        preload: () => result.preloadImage(url),
    };
}

// Context for global S3 image cache management
export class S3ImageCache {
    private static instance: S3ImageCache;
    private cache: ImageCache = {};
    private readonly maxCacheSize = 100;
    private readonly defaultTimeout = 30 * 60 * 1000; // 30 minutes

    static getInstance(): S3ImageCache {
        if (!S3ImageCache.instance) {
            S3ImageCache.instance = new S3ImageCache();
        }
        return S3ImageCache.instance;
    }

    set(url: string, loaded: boolean, error: boolean = false): void {
        // Clean old entries if cache is full
        if (Object.keys(this.cache).length >= this.maxCacheSize) {
            this.cleanup();
        }

        this.cache[url] = {
            loaded,
            error,
            timestamp: Date.now(),
        };
    }

    get(url: string, timeout: number = this.defaultTimeout): ImageCache[string] | null {
        const entry = this.cache[url];
        if (!entry) return null;

        // Check if entry is expired
        if (Date.now() - entry.timestamp > timeout) {
            delete this.cache[url];
            return null;
        }

        return entry;
    }

    clear(): void {
        this.cache = {};
    }

    private cleanup(): void {
        const entries = Object.entries(this.cache);

        // Sort by timestamp and remove oldest entries
        entries
            .sort(([, a], [, b]) => a.timestamp - b.timestamp)
            .slice(0, Math.floor(this.maxCacheSize * 0.3)) // Remove 30% of oldest
            .forEach(([url]) => delete this.cache[url]);
    }

    getStats() {
        const entries = Object.values(this.cache);
        return {
            total: entries.length,
            loaded: entries.filter(e => e.loaded).length,
            failed: entries.filter(e => e.error).length,
            oldestTimestamp: Math.min(...entries.map(e => e.timestamp)),
            newestTimestamp: Math.max(...entries.map(e => e.timestamp)),
        };
    }
}