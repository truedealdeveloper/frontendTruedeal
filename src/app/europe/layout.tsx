import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Europe Tour Packages | TrueDeal4U',
    description: 'Discover amazing Europe tour packages with TrueDeal4U. Explore historic cities, cultural landmarks, scenic railways, and romantic destinations across European countries.',
    keywords: 'europe tour packages, europe holidays, europe travel packages, european tours, paris tours, switzerland tours, italy tours',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    }
}

export default function EuropeLayout({
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
