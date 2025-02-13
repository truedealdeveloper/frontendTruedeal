import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trending Destinations | TrueDeal Holidays',
  description: 'Explore our curated selection of trending travel destinations. Find the perfect holiday package for your next adventure with TrueDeal Holidays.',
  keywords: 'trending destinations, travel packages, holiday deals, Almaty, Baku, Vietnam, Shimla, Bali, TrueDeal Holidays',
};

export default function TrendingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 