/**
 * AWS S3 Configuration and URL Utilities
 * Base configuration for TrueDeal S3 bucket
 */

export const S3_CONFIG = {
    baseUrl: 'https://truedeal-assets.s3.eu-north-1.amazonaws.com',
    bucketName: 'truedeal-assets',
    region: 'eu-north-1',
} as const;

/**
 * S3 folder structure based on the provided URLs
 */
export const S3_FOLDERS = {
    SINGAPORE: {
        VIDEO: 'Singapore/video',
        IMAGES: 'Singapore/singapore',
        BANNER: 'Singapore/banner',
    },
    // Add more countries/folders as needed
} as const;

/**
 * Utility function to generate S3 URL
 * @param folder - S3 folder path
 * @param filename - Image filename
 * @returns Complete S3 URL
 */
export function getS3Url(folder: string, filename: string): string {
    return `${S3_CONFIG.baseUrl}/${folder}/${filename}`;
}

/**
 * Utility function to generate multiple S3 URLs with sequential numbering
 * @param folder - S3 folder path
 * @param baseName - Base filename without number
 * @param extension - File extension
 * @param count - Number of images (1 to count)
 * @returns Array of S3 URLs
 */
export function getS3UrlSequence(
    folder: string,
    baseName: string,
    extension: string,
    count: number
): string[] {
    return Array.from({ length: count }, (_, i) =>
        getS3Url(folder, `${baseName}${i + 1}.${extension}`)
    );
}

/**
 * Predefined S3 URLs for Singapore assets
 */
export const SINGAPORE_ASSETS = {
    video: {
        backgroundVideo: getS3Url(S3_FOLDERS.SINGAPORE.VIDEO, 'singaporeBG.mp4'),
    },
    images: {
        mainImage: getS3Url(S3_FOLDERS.SINGAPORE.IMAGES, '1.webp'),
    },
    banners: getS3UrlSequence(S3_FOLDERS.SINGAPORE.BANNER, '', 'png', 10),
} as const;

/**
 * Check if URL is an S3 URL
 * @param url - URL to check
 * @returns boolean
 */
export function isS3Url(url: string): boolean {
    return url.startsWith(S3_CONFIG.baseUrl);
}

/**
 * Extract S3 key from full URL
 * @param url - Full S3 URL
 * @returns S3 key (path without base URL)
 */
export function getS3Key(url: string): string {
    if (!isS3Url(url)) {
        throw new Error('URL is not a valid S3 URL');
    }
    return url.replace(`${S3_CONFIG.baseUrl}/`, '');
}

/**
 * Image optimization parameters for S3 images
 */
export const S3_IMAGE_CONFIG = {
    quality: 85,
    formats: ['image/webp', 'image/avif'],
    sizes: {
        thumbnail: 150,
        small: 320,
        medium: 640,
        large: 1200,
        xlarge: 1920,
    },
    placeholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
} as const;