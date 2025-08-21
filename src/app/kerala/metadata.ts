import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kerala Tour Packages - God\'s Own Country | TrueDeal',
    description: 'Explore Kerala with our curated tour packages. Experience backwaters, hill stations, tea plantations, and authentic culture. Best prices and customizable itineraries.',
    keywords: 'Kerala tours, backwater cruises, Munnar packages, Alleppey houseboats, Kerala holidays, God\'s own country, tea plantations, Ayurveda tours',
    openGraph: {
        title: 'Kerala Tour Packages - Experience God\'s Own Country',
        description: 'Discover the beauty of Kerala with our exclusive tour packages. Backwaters, hill stations, and cultural experiences await.',
        images: ['/webImage/kerala/mobile/kerala1.jpg'],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kerala Tour Packages - God\'s Own Country',
        description: 'Experience Kerala\'s serene backwaters, lush hill stations, and rich culture with our curated tour packages.',
        images: ['/webImage/kerala/mobile/kerala1.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    other: {
        'preload': '/webImage/kerala/mobile/kerala1.jpg as image',
        'dns-prefetch': '//fonts.googleapis.com',
        'preconnect': 'https://fonts.gstatic.com',
    }
};
