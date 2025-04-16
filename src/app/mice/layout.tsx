import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MICE Services | Corporate Events & Conferences | Truedeal Travels",
  description: "Specialized MICE services for corporate meetings, incentives, conferences, and events across India. Create memorable experiences that drive business results.",
  keywords: "MICE, corporate events, business meetings, conferences, incentive travel, event management, corporate travel",
  metadataBase: new URL('https://truedeal.com'),
  openGraph: {
    title: "MICE Services | Corporate Events & Conferences | Truedeal Travels",
    description: "Specialized MICE services for corporate meetings, incentives, conferences, and events across India. Create memorable experiences that drive business results.",
    url: "https://truedeal.com/mice",
    siteName: "Truedeal Travels",
    images: [{
      url: "/UGCImages/Mice/Almaty-3.jpeg",
      width: 1200,
      height: 630,
      alt: "Corporate Event Planning by Truedeal Travels",
      type: "image/jpeg",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MICE Services | Corporate Events & Conferences | Truedeal Travels",
    description: "Specialized MICE services for corporate meetings, incentives, conferences, and events across India. Create memorable experiences that drive business results.",
    images: {
      url: "/UGCImages/Mice/Almaty-3.jpeg",
      alt: "Corporate Event Planning by Truedeal Travels",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function MICELayout({
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