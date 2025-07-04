import { Metadata } from 'next'
import { goaPackages } from '../data'

interface LayoutProps {
    params: Promise<{ id: string }>
    children: React.ReactNode
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const goaPkg = Object.values(goaPackages).find(p => p.id === id);

    if (!goaPkg) {
        return {
            title: 'Package Not Found | TrueDeal Travel',
            description: 'The requested Goa package could not be found.'
        };
    }

    // Create a detailed description from package data
    const metaDescription = `${goaPkg.description} Starting from ₹${goaPkg.amount.toLocaleString('en-IN')} for ${goaPkg.days} days / ${goaPkg.nights} nights. Includes ${goaPkg.inclusions.slice(0, 3).join(', ')} and more.`;

    return {
        title: `${goaPkg.packageName} | Starting ₹${goaPkg.amount.toLocaleString('en-IN')} | TrueDeal Travel`,
        description: metaDescription,
        keywords: [
            goaPkg.packageName,
            'Goa tour package',
            'Goa holidays',
            'beach vacation Goa',
            `${goaPkg.days} days Goa trip`,
            'North Goa South Goa',
            'Goa sightseeing',
            'water sports Goa',
            'Portuguese heritage',
            'TrueDeal Travel',
            `₹${goaPkg.amount} Goa package`
        ].join(', '),
        formatDetection: {
            email: false,
            address: false,
            telephone: false
        },
        openGraph: {
            title: `${goaPkg.packageName} | Starting ₹${goaPkg.amount.toLocaleString('en-IN')}`,
            description: metaDescription,
            images: [
                {
                    url: `https://www.truedeal4u.com${goaPkg.images[0]}`,
                    width: 1200,
                    height: 630,
                    alt: `${goaPkg.packageName} - Beautiful Goa beaches and experiences`,
                }
            ],
            type: 'website',
            url: `https://www.truedeal4u.com/goa/${id}`,
            siteName: 'TrueDeal Travel',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${goaPkg.packageName} | Starting ₹${goaPkg.amount.toLocaleString('en-IN')}`,
            description: metaDescription,
            images: [`https://www.truedeal4u.com${goaPkg.images[0]}`]
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