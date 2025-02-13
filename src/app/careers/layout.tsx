import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Careers at TrueDeal4U - Join Our Team | TrueDeal4U Travel Agency",
    description: "Join our dynamic team at TrueDeal4U. We're looking for passionate individuals who want to revolutionize the travel industry. Apply now and be part of our journey.",
    keywords: "careers, jobs, employment, travel jobs, tourism careers, TrueDeal4U careers, job opportunities, travel industry jobs",
    openGraph: {
        title: "Careers at TrueDeal4U - Join Our Team | TrueDeal4U Travel Agency",
        description: "Join our dynamic team at TrueDeal4U. We're looking for passionate individuals who want to revolutionize the travel industry. Apply now and be part of our journey.",
        url: "https://truedeal4u.com/careers",
        siteName: "TrueDeal4U",
        images: [
            {
                url: "https://truedeal4u.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "TrueDeal4U Careers",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at TrueDeal4U - Join Our Team | TrueDeal4U Travel Agency",
        description: "Join our dynamic team at TrueDeal4U. We're looking for passionate individuals who want to revolutionize the travel industry. Apply now and be part of our journey.",
        images: ["https://truedeal4u.com/og-image.jpg"],
    },
    alternates: {
        canonical: "https://truedeal4u.com/careers",
    },
}

export default function CareersLayout({
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