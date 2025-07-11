export const metadata = {
    title: 'Dubai Tour Packages | City of Gold | TrueDeal Travel',
    description: 'Explore Dubai with our comprehensive tour packages. Experience luxury shopping, desert safaris, modern architecture, and world-class attractions in the City of Gold.',
    keywords: 'Dubai, tour packages, Burj Khalifa, desert safari, luxury shopping, Dubai Mall, UAE, modern city, gold souk',
    openGraph: {
        title: 'Dubai Tour Packages | City of Gold',
        description: 'Discover the glamour of Dubai with our curated tour packages featuring iconic landmarks, luxury experiences, and desert adventures.',
        images: ['/UGCImages/dubai/dubai-og.jpg'],
    },
};

export default function DubaiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 