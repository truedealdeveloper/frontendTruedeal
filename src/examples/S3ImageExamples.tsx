'use client';

import React from 'react';
import { S3Image, S3Banner, S3Thumbnail, S3Avatar } from '@/components/ui/S3Image';
import { useS3Images, useS3Image } from '@/hooks/useS3Images';
import { SINGAPORE_ASSETS, getS3Url, getS3UrlSequence, S3_FOLDERS } from '@/lib/s3-config';

/**
 * Example 1: Basic S3Image usage with your provided URLs
 */
export function BasicS3ImageExample() {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic S3 Images</h3>

            {/* Single Singapore image */}
            <div className="w-64 h-48">
                <S3Image
                    src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/singapore/1.webp"
                    alt="Singapore Image"
                    fill
                    className="rounded-lg"
                    priority
                />
            </div>

            {/* Using predefined constants */}
            <div className="w-64 h-48">
                <S3Image
                    src={SINGAPORE_ASSETS.images.mainImage}
                    alt="Singapore Main"
                    fill
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}

/**
 * Example 2: Banner images (1-10) with sequence loading
 */
export function BannerSequenceExample() {
    const bannerUrls = getS3UrlSequence(S3_FOLDERS.SINGAPORE.BANNER, '', 'png', 10);
    const { stats, progress, preloadAll } = useS3Images(bannerUrls, {
        preload: true,
        onLoad: (url) => console.log('Loaded:', url),
        onError: (url, error) => console.error('Failed to load:', url, error),
    });

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Singapore Banner Sequence (1-10)</h3>

            {/* Progress indicator */}
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="text-sm text-gray-600">
                Loaded: {stats.loaded}/{stats.total} | Loading: {stats.loading} | Failed: {stats.failed}
            </p>

            {/* Grid of banner images */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {bannerUrls.map((url, index) => (
                    <div key={index} className="aspect-square">
                        <S3Image
                            src={url}
                            alt={`Banner ${index + 1}`}
                            fill
                            className="rounded-lg"
                            lazy={index > 2} // Only first 3 images load immediately
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={preloadAll}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Preload All Banners
            </button>
        </div>
    );
}

/**
 * Example 3: Video background with S3 video URL
 */
export function VideoBackgroundExample() {
    return (
        <div className="relative h-96 overflow-hidden rounded-lg">
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={SINGAPORE_ASSETS.video.backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">Singapore Experience</h2>
            </div>
        </div>
    );
}

/**
 * Example 4: Gallery with lazy loading and error handling
 */
export function S3GalleryExample() {
    const galleryUrls = [
        ...getS3UrlSequence(S3_FOLDERS.SINGAPORE.BANNER, '', 'png', 5),
        SINGAPORE_ASSETS.images.mainImage,
    ];

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">S3 Gallery with Lazy Loading</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {galleryUrls.map((url, index) => (
                    <div key={index} className="aspect-video">
                        <S3Image
                            src={url}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            className="rounded-lg hover:scale-105 transition-transform"
                            lazy
                            fadeIn
                            fallbackSrc="/images/fallback.jpg" // Local fallback
                            onLoad={() => console.log(`Gallery image ${index + 1} loaded`)}
                            onError={(error) => console.error(`Gallery image ${index + 1} error:`, error)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * Example 5: Convenience components (Avatar, Banner, Thumbnail)
 */
export function ConvenienceComponentsExample() {
    return (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold">Convenience Components</h3>

            {/* S3Avatar */}
            <div className="flex items-center space-x-4">
                <S3Avatar
                    src={SINGAPORE_ASSETS.images.mainImage}
                    alt="User Avatar"
                    size={64}
                />
                <span>User with S3 Avatar</span>
            </div>

            {/* S3Banner for hero sections */}
            <div className="h-64 relative">
                <S3Banner
                    src={getS3Url(S3_FOLDERS.SINGAPORE.BANNER, '1.png')}
                    alt="Hero Banner"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                        Hero Section with S3Banner
                    </h2>
                </div>
            </div>

            {/* S3Thumbnail grid */}
            <div className="grid grid-cols-4 gap-4">
                {getS3UrlSequence(S3_FOLDERS.SINGAPORE.BANNER, '', 'png', 4).map((url, index) => (
                    <S3Thumbnail
                        key={index}
                        src={url}
                        alt={`Thumbnail ${index + 1}`}
                        size={120}
                    />
                ))}
            </div>
        </div>
    );
}

/**
 * Example 6: Advanced usage with single image hook
 */
export function SingleImageHookExample() {
    const { isLoading, isLoaded, hasError, preload } = useS3Image(
        SINGAPORE_ASSETS.images.mainImage,
        {
            onLoad: (url) => console.log('Single image loaded:', url),
            onError: (url, error) => console.error('Single image error:', url, error),
        }
    );

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Single Image Hook Example</h3>

            <div className="flex items-center space-x-4">
                <button
                    onClick={preload}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                    disabled={isLoading}
                >
                    {isLoading ? 'Preloading...' : 'Preload Image'}
                </button>

                <span className={`px-2 py-1 rounded text-sm ${isLoaded ? 'bg-green-100 text-green-800' :
                    hasError ? 'bg-red-100 text-red-800' :
                        isLoading ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                    }`}>
                    {isLoaded ? 'Loaded' : hasError ? 'Error' : isLoading ? 'Loading' : 'Ready'}
                </span>
            </div>

            <div className="w-64 h-48">
                <S3Image
                    src={SINGAPORE_ASSETS.images.mainImage}
                    alt="Single Image"
                    fill
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}

/**
 * Example 7: How to integrate with existing components
 */
export function IntegratedExample() {
    // This shows how you can easily replace existing image URLs
    const existingImageArray = [
        // Old local images
        // "/UGCImages/singapore/1.webp",
        // "/UGCImages/singapore/2.webp",

        // New S3 images
        getS3Url(S3_FOLDERS.SINGAPORE.IMAGES, '1.webp'),
        ...getS3UrlSequence(S3_FOLDERS.SINGAPORE.BANNER, '', 'png', 3),
    ];

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Integration with Existing Components</h3>

            {/* Simulate existing gallery component structure */}
            <div className="grid grid-cols-2 gap-4">
                {existingImageArray.map((src, index) => (
                    <div key={index} className="aspect-video">
                        {/* Simply replace Image with S3Image */}
                        <S3Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * Main example component showcasing all features
 */
export default function S3ImageExamples() {
    return (
        <div className="max-w-6xl mx-auto p-6 space-y-12">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">S3 Image Implementation Examples</h1>
                <p className="text-gray-600">
                    Fast, optimized image loading from AWS S3 with caching, lazy loading, and error handling
                </p>
            </div>

            <BasicS3ImageExample />
            <BannerSequenceExample />
            <VideoBackgroundExample />
            <S3GalleryExample />
            <ConvenienceComponentsExample />
            <SingleImageHookExample />
            <IntegratedExample />
        </div>
    );
}