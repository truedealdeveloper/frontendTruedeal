import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Almaty Tour Packages | Kazakhstan Tours | TrueDeal4U',
  description: 'Explore Almaty with TrueDeal4U\'s comprehensive Kazakhstan tour packages. Experience the beauty of Central Asia with our customized Almaty tours.',
  keywords: 'almaty tours, kazakhstan tour packages, almaty travel packages'
}

export default function AlmatyLayout({
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