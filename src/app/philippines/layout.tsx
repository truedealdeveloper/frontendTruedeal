export const metadata = {
    title: 'Philippines Tour Packages | Tropical Paradise | TrueDeal Travel',
    description: 'Explore Philippines with our comprehensive tour packages. Experience pristine beaches, tropical islands, rich culture, and adventure activities in the Pearl of the Orient Seas.',
    keywords: 'Philippines, tour packages, beaches, islands, Boracay, Palawan, Manila, Cebu, tropical paradise, adventure',
    openGraph: {
        title: 'Philippines Tour Packages | Tropical Paradise',
        description: 'Discover the beauty of Philippines with our curated tour packages featuring pristine beaches, tropical islands, and rich cultural experiences.',
        images: ['/webImage/Philippines/1/philippines-og.jpg'],
    },
};

export default function PhilippinesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 