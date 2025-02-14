import { Metadata } from 'next'
import { destinationData } from './page'

// Helper function to generate metadata for a specific destination
function getDestinationMetadata(destination: string) {
  const destinationInfo = destinationData[destination.toLowerCase()]
  
  if (!destinationInfo) {
    return {
      title: 'Destination Not Found | TrueDeal Holidays',
      description: 'The requested destination could not be found.'
    }
  }

  return {
    title: `${destinationInfo.name} Tour Packages | TrueDeal Holidays`,
    description: destinationInfo.description,
    images: destinationInfo.galleryImages[0], // Use first gallery image as OG image
    price: destinationInfo.price,
    packages: destinationInfo.packages
  }
}

type Props = {
  children: React.ReactNode,
  params: { destination: string }
}

// Metadata generation function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = params.destination
  const meta = getDestinationMetadata(destination)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://truedeal4u.com'
  const canonicalUrl = `${baseUrl}/destinations/${destination}`
  const ogImage = meta.images ? `${baseUrl}${meta.images}` : `${baseUrl}/images/default-og.jpg`

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      destination,
      'travel packages',
      'holiday packages',
      'tour packages',
      'international tours',
      'vacation packages',
      'TrueDeal Holidays',
      meta.title,
    ],
    authors: [{ name: 'TrueDeal Holidays' }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: 'TrueDeal Holidays',
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: meta.title,
      }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [ogImage],
      creator: '@truedealholidays',
      site: '@truedealholidays',
    },
    other: {
      'price': meta.price?.toString() || 'Contact for price',
      'available-packages': meta.packages?.toString() || '0',
      ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? {
        'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      } : {})
    }
  }
}

// Layout component
export default function DestinationLayout({
  children,
  params,
}: Props) {
  return (
    <>
      {/* Add any layout elements here if needed */}
      {children}
    </>
  )
}

// Generate static paths for all destinations
export async function generateStaticParams() {
  return Object.keys(destinationData).map((destination) => ({
    destination: destination.toLowerCase(),
  }))
} 