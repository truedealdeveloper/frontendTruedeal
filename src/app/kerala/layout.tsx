export const metadata = {
    title: 'Kerala Tour Packages | God\'s Own Country | TrueDeal Travel',
    description: 'Explore Kerala with our comprehensive tour packages. Experience backwaters, hill stations, beaches, and Ayurveda in God\'s Own Country.',
    keywords: 'Kerala, tour packages, backwaters, Munnar, Alleppey, Kochi, houseboat, Ayurveda, spices',
    openGraph: {
        title: 'Kerala Tour Packages | God\'s Own Country',
        description: 'Discover the beauty of Kerala with our curated tour packages featuring backwaters, hill stations, and cultural experiences.',
        images: ['/webImage/kerala/mobile/kerala-og.jpg'],
    },
};

export default function KeralaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 