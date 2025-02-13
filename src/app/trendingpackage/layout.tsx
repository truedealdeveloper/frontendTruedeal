import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trending Travel Packages | TrueDeal',
    description: 'Discover our most popular and trending travel packages. Explore exotic destinations, European tours, and exclusive holiday deals at the best prices.',
    keywords: [
        'trending travel packages',
        'popular holiday deals',
        'exotic destinations',
        'European tours',
        'vacation packages',
        'TrueDeal travel',
        'best travel deals'
    ],
    openGraph: {
        title: 'Trending Travel Packages | TrueDeal',
        description: 'Explore our most popular travel packages and holiday deals. Find your dream vacation at the best prices.',
        type: 'website',
        siteName: 'TrueDeal',
        locale: 'en_US',
        images: [
            {
                url: '/images/trending-packages-og.jpg',
                width: 1200,
                height: 630,
                alt: 'TrueDeal Trending Travel Packages'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trending Travel Packages | TrueDeal',
        description: 'Explore our most popular travel packages and holiday deals. Find your dream vacation at the best prices.',
        images: ['/images/trending-packages-og.jpg'],
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
    verification: {
        google: 'your-google-verification-code',
    },
    alternates: {
        canonical: 'https://truedeal.com/trendingpackage',
    }
};

export default function TrendingPackageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            
            
                <div className="flex-grow">
                    {children}
                </div>
            
        </div>
    );
} 