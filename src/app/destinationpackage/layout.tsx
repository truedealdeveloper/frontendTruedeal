import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Packages | TrueDeal Tourism',
  description: 'Explore our curated collection of travel packages for domestic and international destinations. Find the perfect holiday package with TrueDeal Tourism.',
  keywords: 'travel packages, holiday packages, tour packages, domestic tours, international tours, TrueDeal Tourism',
}

export default function DestinationPackageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
} 