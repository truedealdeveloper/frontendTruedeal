import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vietnam Tour Packages | TrueDeal4U',
  description: 'Explore Vietnam\'s stunning landscapes, rich culture and delicious cuisine. Visit Hanoi, Ha Long Bay, Ho Chi Minh City with our expertly crafted Vietnam tour packages.',
  keywords: 'vietnam tours, vietnam holiday packages, vietnam travel packages, hanoi tours, ha long bay, ho chi minh city',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function VietnamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 