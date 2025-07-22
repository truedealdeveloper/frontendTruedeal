import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kailash Mansarovar Yatra Packages | TrueDeal4U',
    description: 'Experience the sacred Kailash Mansarovar Yatra with our comprehensive tour packages. Choose from overland and helicopter options. Complete spiritual journey to the abode of Lord Shiva.',
    keywords: 'kailash mansarovar yatra, mount kailash tour, mansarovar yatra packages, kailash parikrama, tibet tour, spiritual journey',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    openGraph: {
        title: 'Kailash Mansarovar Yatra Packages',
        description: 'Experience the sacred Kailash Mansarovar Yatra with our comprehensive tour packages. Choose from overland and helicopter options. Complete spiritual journey to the abode of Lord Shiva.',
        images: [
            {
                url: '/UGCImages/mansarovar/main1.webp',
                width: 1200,
                height: 630,
                alt: 'Kailash Mansarovar Yatra Package'
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kailash Mansarovar Yatra Packages | TrueDeal4U',
        description: 'Experience the sacred Kailash Mansarovar Yatra with our comprehensive tour packages. Choose from overland and helicopter options. Complete spiritual journey to the abode of Lord Shiva.',
        images: ['/UGCImages/mansarovar/main1.webp']
    }
}

export default function MansarovarYatraLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
} 