import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Australia Tour Packages | TrueDeal4U',
  description: 'Discover Australia\'s iconic destinations with our curated tour packages. Experience the Sydney Opera House, Great Barrier Reef, Melbourne\'s culture, and stunning beaches. Customized Australian adventures for unforgettable memories.',
  keywords: 'australia tour packages, sydney tours, melbourne tours, great barrier reef, australian holidays',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
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