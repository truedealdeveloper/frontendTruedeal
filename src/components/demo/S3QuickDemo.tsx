'use client';

import React from 'react';
import { S3Image } from '@/components/ui/S3Image';
import { useS3ImageSequence } from '@/hooks/useS3Images';

/**
 * Quick demo using your exact S3 URLs
 * This can be imported and used immediately in any component
 */
export function S3QuickDemo() {
    // Your exact URLs
    const singaporeImage = "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/singapore/1.webp";
    const singaporeVideo = "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/video/singaporeBG.mp4";

    // Banner images 1-10 with preloading
    const bannerBaseUrl = "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png";
    const bannerUrls = Array.from({ length: 10 }, (_, i) =>
        bannerBaseUrl.replace('1.png', `${i + 1}.png`)
    );

    const { stats, progress } = useS3ImageSequence(bannerBaseUrl, 10, {
        preload: true,
        onLoad: (url) => console.log('Loaded banner:', url),
        onError: (url, error) => console.error('Failed to load banner:', url, error),
    });

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">S3 Images - Ready to Use!</h2>
                <p className="text-gray-600">Your AWS S3 images loading fast with optimization</p>
            </div>

            {/* Single Singapore Image */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Singapore Main Image</h3>
                <div className="w-full max-w-md mx-auto aspect-video">
                    <S3Image
                        src={singaporeImage}
                        alt="Singapore Main"
                        fill
                        className="rounded-lg object-cover"
                        priority
                        fadeIn
                        onLoad={() => console.log('Singapore image loaded!')}
                    />
                </div>
            </div>

            {/* Video Background */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Singapore Background Video</h3>
                <div className="relative h-64 rounded-lg overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                        onLoadedData={() => console.log('Singapore video loaded!')}
                    >
                        <source src={singaporeVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h4 className="text-white text-xl font-bold">Singapore Video Background</h4>
                    </div>
                </div>
            </div>

            {/* Banner Sequence with Progress */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Banner Images (1-10) with Preloading</h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-sm text-gray-600 text-center">
                    Progress: {Math.round(progress)}% | Loaded: {stats.loaded}/{stats.total} |
                    Loading: {stats.loading} | Failed: {stats.failed}
                </p>

                {/* Banner Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {bannerUrls.map((url, index) => (
                        <div key={index} className="aspect-square">
                            <S3Image
                                src={url}
                                alt={`Singapore Banner ${index + 1}`}
                                fill
                                className="rounded-lg object-cover hover:scale-105 transition-transform"
                                lazy={index > 2} // First 3 load immediately
                                fadeIn
                                onLoad={() => console.log(`Banner ${index + 1} loaded`)}
                                onError={(error) => console.error(`Banner ${index + 1} error:`, error)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Usage Instructions */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">How to Use in Your Components</h3>
                <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                        <strong>Replace existing Image:</strong>
                        <code className="block mt-1 text-xs bg-gray-100 p-2 rounded">
                            {`<S3Image src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/singapore/1.webp" alt="Singapore" fill className="object-cover" />`}
                        </code>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                        <strong>For banner sequences:</strong>
                        <code className="block mt-1 text-xs bg-gray-100 p-2 rounded">
                            {`const urls = Array.from({length: 10}, (_, i) => \`https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/\${i+1}.png\`)`}
                        </code>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                        <strong>With preloading:</strong>
                        <code className="block mt-1 text-xs bg-gray-100 p-2 rounded">
                            {`const { stats } = useS3Images(urls, { preload: true })`}
                        </code>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default S3QuickDemo;