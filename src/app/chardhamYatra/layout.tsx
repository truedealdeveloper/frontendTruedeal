import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chardham Yatra by Helicopter 2025 | TrueDeal Travel',
    description: 'Book your divine Chardham Yatra helicopter packages for 2025. Visit Kedarnath, Badrinath, Gangotri, and Yamunotri with our VIP darshan services. Packages starting from ₹1,15,000.',
    keywords: 'chardham yatra, helicopter service, kedarnath, badrinath, gangotri, yamunotri, VIP darshan, pilgrimage tour, religious tourism, himalayan temples',
    openGraph: {
        title: 'Chardham Yatra by Helicopter 2025 | TrueDeal Travel',
        description: 'Experience the divine journey to four sacred shrines of Uttarakhand with our premium helicopter services. VIP darshan arrangements, comfortable stays, and expert guidance.',
        images: [
            {
                url: 'https://www.truedeal4u.com/UGCImages/chardham/dodham/10.webp',
                width: 1200,
                height: 630,
                alt: 'Chardham Yatra Services',
            }
        ],
        type: 'website',
        locale: 'en_IN',
        siteName: 'TrueDeal Travel',
        url: 'https://www.truedeal4u.com/chardhamYatra',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chardham Yatra by Helicopter 2025 | TrueDeal Travel',
        description: 'Book your divine Chardham Yatra helicopter packages. Packages starting from ₹1,15,000. VIP darshan and comfortable stays included.',
        images: ['https://www.truedeal4u.com/UGCImages/chardham/dodham/10.webp'],
        site: '@truedeal4u',
    },
    alternates: {
        canonical: 'https://truedeal4u.com/chardhamYatra',
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

export default function ChardhamLayout({
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