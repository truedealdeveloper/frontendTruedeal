import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://www.truedeal4u.com'),
    title: 'Goa Tour Packages | Beach Paradise & Portuguese Heritage | TrueDeal Travel',
    description: 'Discover Goa with our curated tour packages. Experience pristine beaches, vibrant nightlife, Portuguese heritage, water sports, and authentic Goan cuisine. Book your perfect Goa getaway today!',
    keywords: [
        'Goa tour packages',
        'Goa holidays',
        'North Goa beaches',
        'South Goa beaches',
        'Baga beach',
        'Calangute beach',
        'Palolem beach',
        'Anjuna beach',
        'Portuguese heritage',
        'Old Goa churches',
        'Goa water sports',
        'Goa nightlife',
        'Goa casino',
        'Goan cuisine',
        'beach resorts Goa',
        'Goa honeymoon packages',
        'Goa family packages',
        'Panaji',
        'Margao',
        'Dudhsagar Falls',
        'Goa travel deals'
    ].join(', '),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.truedeal4u.com/goa',
        siteName: 'TrueDeal',
        title: 'Goa Tour Packages | Beach Paradise & Portuguese Heritage | TrueDeal Travel',
        description: 'Experience the magic of Goa with our comprehensive tour packages featuring stunning beaches, rich Portuguese heritage, vibrant culture, and exciting water sports.',
        images: [
            {
                url: 'https://www.truedeal4u.com/UGCImages/goa/goa/1.png',
                width: 1200,
                height: 630,
                alt: 'Beautiful Goa Beach - TrueDeal Travel Packages',
            }
        ],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://www.truedeal4u.com/goa',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Goa Tour Packages | Beach Paradise & Portuguese Heritage',
        description: 'Experience the magic of Goa with our comprehensive tour packages featuring stunning beaches, rich Portuguese heritage, and vibrant culture.',
        site: '@truedeal4u',
        creator: '@truedeal4u',
        images: ['https://www.truedeal4u.com/UGCImages/goa/goa/1.png'],
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function GoaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 