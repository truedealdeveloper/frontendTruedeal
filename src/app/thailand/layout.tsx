import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Thailand Tour Packages | Best Thailand Holiday Packages from India',
    description: 'Explore amazing Thailand tour packages from India. Visit Bangkok, Pattaya with our best Thailand holiday packages. Book your Thailand trip now!',
    keywords: 'Thailand tour packages, Thailand holiday packages, Bangkok Pattaya tour, Thailand packages from India, Thailand trip',
    openGraph: {
        title: 'Thailand Tour Packages | Best Thailand Holiday Packages',
        description: 'Explore amazing Thailand tour packages from India. Visit Bangkok, Pattaya with our best Thailand holiday packages.',
        images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'],
    },
}

export default function ThailandLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
