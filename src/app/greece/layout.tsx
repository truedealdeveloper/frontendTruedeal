import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Greece Tour Packages | TrueDeal4U',
    description: 'Experience the best of Greece with our comprehensive tour packages. Visit Athens, Santorini, Mykonos and more. Perfect blend of history, culture and stunning landscapes.',
    keywords: 'greece tours, greece packages, athens, santorini, mykonos',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    openGraph: {
        title: 'Greece Tour Packages',
        description: 'Experience the best of Greece with our comprehensive tour packages. Visit Athens, Santorini, Mykonos and more. Perfect blend of history, culture and stunning landscapes.',
        images: [
            {
                url: '/UGCImages/greece/santorini/1.png',
                width: 1200,
                height: 630,
                alt: 'Greece Tour Package'
            }
        ],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Greece Tour Packages | TrueDeal4U',
        description: 'Experience the best of Greece with our comprehensive tour packages. Visit Athens, Santorini, Mykonos and more. Perfect blend of history, culture and stunning landscapes.',
        images: ['/UGCImages/greece/santorini/1.png']
    }
}

export default function GreeceLayout({
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
