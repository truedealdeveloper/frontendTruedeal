'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { isS3Url, S3_IMAGE_CONFIG } from '@/lib/s3-config';

interface S3ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    priority?: boolean;
    quality?: number;
    sizes?: string;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    onLoad?: () => void;
    onError?: (error: string) => void;
    lazy?: boolean;
    fadeIn?: boolean;
    fallbackSrc?: string;
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    objectPosition?: string;
}

export function S3Image({
    src,
    alt,
    width,
    height,
    fill = false,
    className,
    priority = false,
    quality = S3_IMAGE_CONFIG.quality,
    sizes,
    placeholder = 'blur',
    blurDataURL = S3_IMAGE_CONFIG.placeholder,
    onLoad,
    onError,
    lazy = true,
    fadeIn = true,
    fallbackSrc,
    objectFit = 'cover',
    objectPosition = 'center',
    ...props
}: S3ImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);
    const [isInView, setIsInView] = useState(!lazy || priority);
    const imgRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!lazy || priority || isInView) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px',
                threshold: 0.1,
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [lazy, priority, isInView]);

    // Handle image load
    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    // Handle image error with fallback
    const handleError = () => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
            return;
        }

        setHasError(true);
        onError?.(`Failed to load image: ${src}`);
    };

    // Validate S3 URL
    const isValidS3Url = isS3Url(currentSrc);

    if (!isValidS3Url && !fallbackSrc) {
        console.warn(`S3Image: ${currentSrc} is not a valid S3 URL. Consider using regular Image component.`);
    }

    // Determine container classes
    const containerClasses = cn(
        'relative overflow-hidden',
        fadeIn && !isLoaded && 'animate-pulse bg-gray-200',
        className
    );

    // Determine image classes
    const imageClasses = cn(
        'transition-opacity duration-500',
        fadeIn && !isLoaded && 'opacity-0',
        fadeIn && isLoaded && 'opacity-100',
        !fadeIn && 'opacity-100',
        objectFit === 'contain' && 'object-contain',
        objectFit === 'cover' && 'object-cover',
        objectFit === 'fill' && 'object-fill',
        objectFit === 'none' && 'object-none',
        objectFit === 'scale-down' && 'object-scale-down'
    );

    // Error state
    if (hasError) {
        return (
            <div
                ref={imgRef}
                className={cn(
                    containerClasses,
                    'flex items-center justify-center bg-gray-100 text-gray-400'
                )}
                style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
            >
                <div className="text-center p-4">
                    <svg
                        className="mx-auto h-8 w-8 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <p className="text-xs">Image not available</p>
                </div>
            </div>
        );
    }

    // Don't render image until it's in view (for lazy loading)
    if (!isInView) {
        return (
            <div
                ref={imgRef}
                className={cn(containerClasses, 'bg-gray-200')}
                style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
            />
        );
    }

    return (
        <div
            ref={imgRef}
            className={containerClasses}
            style={fill ? { position: 'absolute', inset: 0 } : undefined}
        >
            <Image
                src={currentSrc}
                alt={alt}
                width={fill ? undefined : width}
                height={fill ? undefined : height}
                fill={fill}
                priority={priority}
                quality={quality}
                sizes={sizes || (fill ? '100vw' : `${width}px`)}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                className={imageClasses}
                style={{
                    objectPosition,
                }}
                onLoad={handleLoad}
                onError={handleError}
                {...props}
            />

            {/* Loading overlay */}
            {fadeIn && !isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
        </div>
    );
}

// Convenience components for common use cases
export function S3Avatar({
    src,
    alt,
    size = 40,
    className,
    ...props
}: Omit<S3ImageProps, 'width' | 'height'> & { size?: number }) {
    return (
        <S3Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={cn('rounded-full', className)}
            objectFit="cover"
            {...props}
        />
    );
}

export function S3Banner({
    src,
    alt,
    className,
    ...props
}: Omit<S3ImageProps, 'fill'>) {
    return (
        <S3Image
            src={src}
            alt={alt}
            fill
            className={cn('w-full h-full', className)}
            priority
            objectFit="cover"
            {...props}
        />
    );
}

export function S3Thumbnail({
    src,
    alt,
    size = 150,
    className,
    ...props
}: Omit<S3ImageProps, 'width' | 'height'> & { size?: number }) {
    return (
        <S3Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={cn('rounded-lg', className)}
            objectFit="cover"
            lazy
            {...props}
        />
    );
}