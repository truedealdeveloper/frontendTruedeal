import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Turkey Tour Packages | TrueDeal4U',
  description: 'Experience the best of Turkey with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping. Perfect blend of modernity and tradition.',
  keywords: 'turkey tours, turkey packages, marina bay sands, universal studios turkey, gardens by the bay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Turkey Tour Packages',
    description: 'Experience the best of Turkey with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping.',
    images: [
      {
        url: 'https://www.truedeal4u.com/UGCImages/turkey/turkey1/1.png',
        width: 1200,
        height: 630,  
        alt: 'Turkey Tour Package'
      }
    ],
    siteName: 'TrueDeal4U',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkey Tour Packages | TrueDeal',
    description: 'Experience the best of Turkey with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping.',
    images: ['https://www.truedeal4u.com/UGCImages/turkey/turkey1/1.png'],
    site: '@yourtwitterhandle',
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