import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MICE Services | Corporate Events & Conferences | Truedeal Travels",
  description: "Specialized MICE services for corporate meetings, incentives, conferences, and events across India. Create memorable experiences that drive business results.",
  keywords: "MICE, corporate events, business meetings, conferences, incentive travel, event management, corporate travel",
  openGraph: {
    title: "MICE Services | Corporate Events & Conferences | Truedeal Travels",
    description: "Specialized MICE services for corporate meetings, incentives, conferences, and events across India. Create memorable experiences that drive business results.",
    url: "https://truedeal.com/mice",
    siteName: "Truedeal Travels",
    images: [
      {
        url: "/UGCImages/mice/Almaty-3.jpeg",
        width: 1200,
        height: 630,
        alt: "Corporate Event Planning by Truedeal Travels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MICE Services | Corporate Events & Conferences | Truedeal Travels",
    description: "Specialized MICE services for corporate meetings, incentives, conferences, and events across India. Create memorable experiences that drive business results.",
    images: ["/UGCImages/mice/Almaty-3.jpeg"],
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