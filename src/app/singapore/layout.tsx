import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Singapore Tour Packages | TrueDeal4U',
  description: 'Experience the best of Singapore with our comprehensive tour packages. Visit Gardens by the Bay, Universal Studios, Marina Bay Sands, and enjoy world-class shopping. Perfect blend of modernity and tradition.',
  keywords: 'singapore tours, singapore packages, marina bay sands, universal studios singapore, gardens by the bay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
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