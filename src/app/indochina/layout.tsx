import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indochina Tour Packages | TrueDeal4U',
  description: 'Journey through Vietnam, Cambodia and Laos with our Indochina tour packages. Explore ancient temples, vibrant cities and stunning landscapes. Experience the rich cultural heritage of Southeast Asia.',
  keywords: 'indochina tours, vietnam cambodia tours, laos tours, southeast asia packages, angkor wat tours',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
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