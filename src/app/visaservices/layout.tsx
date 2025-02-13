import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Visa Services | TrueDeal Travel',
    description: 'Apply for visas to destinations worldwide. Professional visa assistance for tourism, business travel to countries across Asia, Europe, Americas, Middle East and more.',
    keywords: [
        'visa services',
        'visa application',
        'travel visa',
        'tourist visa',
        'business visa',
        'visa assistance',
        'international travel',
        'passport services',
        'visa processing',
        'visa requirements'
    ],
    openGraph: {
        title: 'Visa Services | TrueDeal Travel',
        description: 'Professional visa assistance for tourism and business travel worldwide. Easy visa application process with expert guidance.',
        images: [
            {
                url: '/images/visa-services.jpg', // You'll need to add this image
                width: 1200,
                height: 630,
                alt: 'TrueDeal Visa Services'
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Visa Services | TrueDeal Travel',
        description: 'Professional visa assistance for tourism and business travel worldwide. Easy visa application process with expert guidance.',
        images: ['/images/visa-services.jpg'], // You'll need to add this image
    }
}

export default function VisaServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
} 