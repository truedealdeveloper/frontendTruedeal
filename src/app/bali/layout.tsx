import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bali Tour Packages | TrueDeal4U',
  description: 'Discover amazing Bali tour packages with TrueDeal4U. Explore beaches, temples, culture, and adventure activities with our customized Bali holiday packages.',
  keywords: 'bali tour packages, bali holidays, bali travel packages, indonesia tours'
}

export default function BaliLayout({
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