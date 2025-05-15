import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leh Ladakh Tour Packages | TrueDeal4U',
  description: 'Experience the best of Leh Ladakh with our comprehensive tour packages. Visit Leh Ladakh, enjoy world-class shopping. Perfect blend of modernity and tradition.',
  keywords: 'leh ladakh tours, leh ladakh packages, leh ladakh, ladakh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Leh Ladakh Tour Packages',
    description: 'Experience the best of Leh Ladakh with our comprehensive tour packages. Visit Leh Ladakh, enjoy world-class shopping. Perfect blend of modernity and tradition.',
    images: [
      {
        url: '/UGCImages/lehladakh/dayWise/1.png',
        width: 1200,
        height: 630,
        alt: 'Leh Ladakh Tour Package'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leh Ladakh Tour Packages | TrueDeal4U',
    description: 'Experience the best of Leh Ladakh with our comprehensive tour packages. Visit Leh Ladakh, enjoy world-class shopping. Perfect blend of modernity and tradition.',
    images: ['/UGCImages/lehladakh/dayWise/1.png']
  }
}

export default function LehLadakhLayout({
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