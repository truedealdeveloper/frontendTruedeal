import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Turkey Tour Packages | TrueDeal4U',
  description: 'Experience the best of Turkey with our comprehensive tour packages. Visit Istanbul, Cappadocia, Pamukkale, and explore ancient ruins. Perfect blend of history, culture and natural beauty.',
  keywords: 'turkey tours, turkey packages, istanbul tours, cappadocia tours, pamukkale tours, turkish riviera, turkey holiday packages',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Turkey Tour Packages',
    description: 'Experience the best of Turkey with our comprehensive tour packages. Visit Istanbul, Cappadocia, Pamukkale, and explore ancient ruins. Perfect blend of history, culture and natural beauty.',
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
    description: 'Experience the best of Turkey with our comprehensive tour packages. Visit Istanbul, Cappadocia, Pamukkale, and explore ancient ruins. Perfect blend of history, culture and natural beauty.',
    images: ['https://www.truedeal4u.com/UGCImages/turkey/turkey1/1.png'],
    site: '@truedeal4u',
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