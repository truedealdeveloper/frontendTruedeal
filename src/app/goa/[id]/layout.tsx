import { Metadata } from 'next'
import { goaPackages } from '../data'



export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const goaPkg = Object.values(goaPackages).find(p => p.id === id);

    if (!goaPkg) {
        return {
            title: 'Package Not Found | TrueDeal4U',
            description: 'The requested Goa package could not be found.'
        };
    }

    return {
        title: `${goaPkg.packageName} | TrueDeal4U`,
        description: `${goaPkg.description} Starting from ₹${goaPkg.amount.toLocaleString('en-IN')} for ${goaPkg.days} days / ${goaPkg.nights} nights. Book your perfect Goa getaway today!`,
        keywords: `${goaPkg.packageName}, goa tour packages, goa holidays, beach vacation goa, ${goaPkg.days} days goa trip, north goa south goa`,
        formatDetection: {
            email: false,
            address: false,
            telephone: false
        },
        openGraph: {
            title: `${goaPkg.packageName} | TrueDeal4U`,
            description: `${goaPkg.description} Starting from ₹${goaPkg.amount.toLocaleString('en-IN')} for ${goaPkg.days} days / ${goaPkg.nights} nights. Book your perfect Goa getaway today!`,
            images: [
                {
                    url: '/UGCImages/goa/goa/1.png',
                    width: 1200,
                    height: 630,
                    alt: `${goaPkg.packageName} - Goa Tour Package`
                }
            ],
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${goaPkg.packageName} | TrueDeal4U`,
            description: `${goaPkg.description} Starting from ₹${goaPkg.amount.toLocaleString('en-IN')} for ${goaPkg.days} days / ${goaPkg.nights} nights. Book your perfect Goa getaway today!`,
            images: ['/UGCImages/goa/goa/1.png']
        }
    };
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