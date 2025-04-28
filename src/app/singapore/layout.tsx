import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Singapore Tour Packages | TrueDeal4U',
  description: 'Experience the best of Singapore with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping. Perfect blend of modernity and tradition.',
  keywords: 'singapore tours, singapore packages, marina bay sands, universal studios singapore, gardens by the bay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Singapore and Malaysia Tour Packages',
    description: 'Experience the best of Singapore and Malaysia with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping.',
    images: [
      {
        url: '/UGCImages/singapore/dayWise/1.png',
        width: 1200,
        height: 630,
        alt: 'Singapore Tour Package'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Singapore Tour Packages | TrueDeal4U',
    description: 'Experience the best of Singapore with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping.',
    images: ['/UGCImages/singapore/dayWise/1.png']
  }
}

export default function SingaporeLayout({
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