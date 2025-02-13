import { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Indonesia Tour Packages 2024 | TrueDeal Travel',
  description: 'Book your dream Indonesia vacation packages for 2024. Explore Bali, Jakarta, Lombok, and more with our customized tour packages. Packages starting from ₹25,000.',
  keywords: 'indonesia tour packages, bali packages, indonesia holiday packages, jakarta tours, lombok island, indonesia tourism, beach vacation, island hopping',
  openGraph: {
    title: 'Indonesia Tour Packages 2024 | TrueDeal Travel',
    description: 'Experience the beauty of Indonesia with our premium travel packages. Customized itineraries, comfortable stays, and expert local guides.',
    images: [
      {
        url: 'https://www.truedeal4u.com/UGCImages/indonesia/bali/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Indonesia Tour Packages',
      }
    ],
    type: 'website',
    locale: 'en_IN',
    siteName: 'TrueDeal Travel',
    url: 'https://www.truedeal4u.com/indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indonesia Tour Packages 2024 | TrueDeal Travel',
    description: 'Book your dream Indonesia vacation packages. Packages starting from ₹25,000. Customized itineraries and expert guidance included.',
    images: ['https://www.truedeal4u.com/UGCImages/indonesia/bali/1.jpg'],
    site: '@truedeal4u',
  },
  alternates: {
    canonical: 'https://truedeal4u.com/indonesia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: 'TrueDeal Travel' }],
  generator: 'Next.js',
  applicationName: 'TrueDeal Travel',
  referrer: 'origin-when-cross-origin',
  creator: 'TrueDeal Travel',
  publisher: 'TrueDeal Travel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function IndonesiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      
      <div className="flex-1">
        {children}
      </div>
      <Toaster />
      
    </div>
  );
} 