export const metadata = {
    title: 'Goa Tour Packages | Beach Paradise & Portuguese Heritage | TrueDeal Travel',
    description: 'Discover Goa with our curated tour packages. Experience pristine beaches, vibrant nightlife, Portuguese heritage, water sports, and authentic Goan cuisine.',
    keywords: 'Goa, tour packages, beaches, North Goa, South Goa, Baga, Calangute, Palolem, Portuguese heritage, water sports, nightlife, Old Goa',
    openGraph: {
        title: 'Goa Tour Packages | Beach Paradise & Portuguese Heritage',
        description: 'Experience the magic of Goa with our comprehensive tour packages featuring stunning beaches, rich heritage, and vibrant culture.',
        images: ['/webImage/goa/mobile/goa-og.jpg'],
    },
};

export default function GoaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 