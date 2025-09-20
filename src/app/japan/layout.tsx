import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Japan Tour Packages | TrueDeal4U',
  description: 'Experience the best of Japan with our comprehensive tour packages. Visit Tokyo Skytree, Mount Fuji, Disneyland Tokyo, Universal Studios Osaka, and explore ancient temples. Perfect blend of tradition and modernity.',
  keywords: 'japan tours, japan packages, tokyo skytree, mount fuji, disneyland tokyo, universal studios osaka, fushimi inari taisha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Japan Cultural Tour Packages',
    description: 'Experience the best of Japan with our comprehensive tour packages. Visit Tokyo Skytree, Mount Fuji, Disneyland Tokyo, Universal Studios Osaka, and explore ancient temples.',
    images: [
      {
        url: '/IMAGES/japan/1/1.webp',
        width: 1200,
        height: 630,
        alt: 'Japan Tour Package'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japan Tour Packages | TrueDeal4U',
    description: 'Experience the best of Japan with our comprehensive tour packages. Visit Tokyo Skytree, Mount Fuji, Disneyland Tokyo, Universal Studios Osaka, and explore ancient temples.',
    images: ['/IMAGES/japan/1/1.webp']
  }
}

export default function JapanLayout({
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