import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Goa Tour Packages | Beaches | Water Sports | Nightlife | Sightseeing',
    description: 'Experience the best of Goa with our comprehensive tour packages. Explore pristine beaches, vibrant nightlife, Portuguese heritage, and thrilling water sports. Perfect blend of relaxation and adventure.',
    keywords: 'goa tour packages, goa holidays, beach vacation goa, north goa south goa, goa sightseeing, water sports goa',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    openGraph: {
        title: 'Goa Tour Packages | Beaches | Water Sports | Nightlife | Sightseeing',
        description: 'Experience the best of Goa with our comprehensive tour packages. Explore pristine beaches, vibrant nightlife, Portuguese heritage, and thrilling water sports.',
        images: [
            {
                url: '/UGCImages/goa/goa/1.png',
                width: 1200,
                height: 630,
                alt: 'Goa Tour Package'
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Goa Tour Packages | Beaches | Water Sports | Nightlife | Sightseeing',
        description: 'Experience the best of Goa with our comprehensive tour packages. Explore pristine beaches, vibrant nightlife, Portuguese heritage, and thrilling water sports.',
        images: ['/UGCImages/goa/goa/1.png']
    }
}

export default function GoaPackageLayout({
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