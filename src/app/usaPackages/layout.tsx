import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'USA Tour Packages | TrueDeal4U',
  description: 'Discover America\'s iconic destinations with our curated tour packages. Experience New York, Washington DC, Los Angeles, the Grand Canyon, and more. Customized USA adventures for unforgettable memories.',
  keywords: 'usa tour packages, new york tours, washington dc tours, grand canyon, american holidays',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function USALayout({
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