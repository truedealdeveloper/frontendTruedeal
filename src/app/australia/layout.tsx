import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Australia Tour Packages | TrueDeal4U',
  description: 'Book your dream Australian vacation with TrueDeal4U. Explore Sydney, Melbourne, Gold Coast and more with our tailored Australia tour packages.',
  keywords: 'australia tour packages, australia holidays, australian vacation packages'
}

export default function AustraliaLayout({
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