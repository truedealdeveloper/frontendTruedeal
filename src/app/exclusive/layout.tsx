import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exclusive Forex Services | Truedeal',
    description: 'Access exclusive forex trading services and live market updates with Truedeal.',
};

export default function ExclusiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen">
            {children}
        </section>
    );
} 