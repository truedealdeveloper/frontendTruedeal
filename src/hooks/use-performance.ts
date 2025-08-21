import { useEffect, useState } from 'react';

interface PerformanceMetrics {
    fcp: number | null; // First Contentful Paint
    lcp: number | null; // Largest Contentful Paint
    cls: number | null; // Cumulative Layout Shift
    fid: number | null; // First Input Delay
    ttfb: number | null; // Time to First Byte
}

export function usePerformance() {
    const [metrics, setMetrics] = useState<PerformanceMetrics>({
        fcp: null,
        lcp: null,
        cls: null,
        fid: null,
        ttfb: null
    });

    useEffect(() => {
        // Only run performance monitoring in production and on client side
        if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
            return;
        }

        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                // First Contentful Paint
                if (entry.name === 'first-contentful-paint') {
                    setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
                }

                // Largest Contentful Paint
                if (entry.entryType === 'largest-contentful-paint') {
                    setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
                }

                // Cumulative Layout Shift
                if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                    setMetrics(prev => ({
                        ...prev,
                        cls: (prev.cls || 0) + (entry as any).value
                    }));
                }

                // First Input Delay
                if (entry.entryType === 'first-input') {
                    setMetrics(prev => ({
                        ...prev,
                        fid: (entry as any).processingStart - entry.startTime
                    }));
                }
            });
        });

        // Observe paint timing
        try {
            observer.observe({ type: 'paint', buffered: true });
            observer.observe({ type: 'largest-contentful-paint', buffered: true });
            observer.observe({ type: 'layout-shift', buffered: true });
            observer.observe({ type: 'first-input', buffered: true });
        } catch (e) {
            // Some browsers might not support all entry types
            console.warn('Performance observer not fully supported:', e);
        }

        // Get navigation timing for TTFB
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0) {
            const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
            setMetrics(prev => ({
                ...prev,
                ttfb: navEntry.responseStart - navEntry.requestStart
            }));
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return metrics;
}

// Hook for measuring component render performance
export function useRenderTime(componentName: string) {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            const startTime = performance.now();

            return () => {
                const endTime = performance.now();
                console.log(`${componentName} render time: ${endTime - startTime}ms`);
            };
        }
    });
}

// Hook for preloading critical images
export function useImagePreloader(images: string[]) {
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    useEffect(() => {
        const preloadImage = (src: string) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    setLoadedImages(prev => new Set(prev).add(src));
                    resolve();
                };
                img.onerror = reject;
                img.src = src;
            });
        };

        // Preload first 3 images immediately, others with delay
        const priorityImages = images.slice(0, 3);
        const deferredImages = images.slice(3);

        // Load priority images immediately
        priorityImages.forEach(src => preloadImage(src).catch(console.warn));

        // Load deferred images after a delay
        const timer = setTimeout(() => {
            deferredImages.forEach(src => preloadImage(src).catch(console.warn));
        }, 2000);

        return () => clearTimeout(timer);
    }, [images]);

    return loadedImages;
}

// Hook for optimizing scroll performance
export function useScrollOptimization() {
    useEffect(() => {
        let ticking = false;

        const optimizeScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Add scroll-based optimizations here
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizeScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', optimizeScroll);
        };
    }, []);
}
