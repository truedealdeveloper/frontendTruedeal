export const metadata = {
    title: 'Rajasthan Tour Packages | Royal Heritage | TrueDeal Travel',
    description: 'Explore Royal Rajasthan with our comprehensive tour packages. Experience forts, palaces, desert safaris, and rich cultural heritage.',
    keywords: 'Rajasthan, tour packages, Jaipur, Jodhpur, Jaisalmer, Udaipur, desert safari, forts, palaces, heritage',
    openGraph: {
        title: 'Rajasthan Tour Packages | Royal Heritage',
        description: 'Discover the royal heritage of Rajasthan with our curated tour packages featuring majestic forts, desert adventures, and cultural experiences.',
        images: ['/UGCImages/rajasthan/1.png'],
    },
};

export default function RajasthanLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 