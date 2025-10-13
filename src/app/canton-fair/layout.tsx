import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Canton Fair 2025 Packages | China Trade Fair Tours from Delhi',
    description: 'Explore Canton Fair 2025 Phase 1 packages from Delhi. Visit China\'s largest trade fair featuring electronics, machinery, hardware, and building materials. Book your trade fair tour now!',
    keywords: 'Canton Fair 2025, China Trade Fair, Guangzhou Exhibition, Canton Fair Phase 1, Trade Fair Packages, China Business Tour, Electronics Exhibition, Canton Fair from Delhi',
    openGraph: {
        title: 'Canton Fair 2025 Packages from Delhi - China Trade Fair Tours',
        description: 'Experience Canton Fair 2025 Phase 1 - China\'s largest trade fair. Book complete packages with flights, accommodation, and exhibition access.',
        images: ['/UGCImages/china/horizontal/1.webp'],
        type: 'website',
    },
};

export default function CantonFairLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
