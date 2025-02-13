import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fixed Departure Tours 2024-25 | Group Tours | TrueDeal Travel',
    description: 'Book guaranteed fixed departure group tours for 2024-25. International & domestic tour packages with flights, hotels, and sightseeing included. Best prices guaranteed.',
    keywords: 'fixed departure tours, group tours, international tours, domestic tours, holiday packages, tour packages with flights, guaranteed departures, TrueDeal Travel',
    openGraph: {
        title: 'Fixed Departure Tours 2024-25 | Group Tours | TrueDeal Travel',
        description: 'Join our guaranteed departure group tours to popular destinations worldwide. All-inclusive packages with flights, accommodation, and guided tours.',
        images: [
            {
                url: 'https://www.truedeal4u.com/UGCImages/fixedDeparture/banner.jpg',
                width: 1200,
                height: 630,
                alt: 'Fixed Departure Tours',
            }
        ],
        type: 'website',
        locale: 'en_IN',
        siteName: 'TrueDeal Travel',
        url: 'https://www.truedeal4u.com/fixedDeparture',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fixed Departure Tours 2024-25 | Group Tours | TrueDeal Travel',
        description: 'Book guaranteed fixed departure group tours with TrueDeal Travel. International & domestic packages with best prices guaranteed.',
        images: ['https://www.truedeal4u.com/UGCImages/fixedDeparture/banner.jpg'],
        site: '@truedeal4u',
    },
    alternates: {
        canonical: 'https://truedeal4u.com/fixedDeparture',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    authors: [{ name: 'TrueDeal Travel' }],
    generator: 'Next.js',
    applicationName: 'TrueDeal Travel',
    referrer: 'origin-when-cross-origin',
    creator: 'TrueDeal Travel',
    publisher: 'TrueDeal Travel',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function FixedDepartureLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
} 