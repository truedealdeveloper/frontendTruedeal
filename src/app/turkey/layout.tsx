import { Metadata } from 'next'
import { turkeyPackages } from './data'

// Helper function to get package-specific metadata
function getPackageMetadata(pathname: string) {
  // Extract package ID from pathname if it exists
  const packageId = pathname.split('/').pop();
  const pkg = packageId && turkeyPackages[packageId];

  if (pkg) {
    return {
      title: `${pkg.packageName} | TrueDeal4U`,
      description: pkg.description,
      image: pkg.images[0] // Use first image from package's image array
    };
  }

  // Default metadata for /turkey route
  return {
    title: 'Turkey Tour Packages | TrueDeal4U',
    description: 'Experience the best of Turkey with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping.',
    image: 'https://www.truedeal4u.com/UGCImages/turkey/turkey1/1.png'
  };
}

// Generate metadata based on current route
export function generateMetadata({ pathname }: { pathname: string }): Metadata {
  const meta = getPackageMetadata(pathname);

  return {
    title: meta.title,
    description: meta.description,
    keywords: 'turkey tours, turkey packages, marina bay sands, universal studios turkey, gardens by the bay',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title
        }
      ],
      siteName: 'TrueDeal4U',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.image],
      site: '@truedeal4u',
    }
  }
}

export default function TurkeyLayout({
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