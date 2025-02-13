import type { Metadata } from 'next';
import { groupToursData } from '@/data/groupTours';


export async function generateMetadata({ params }: { params: { destination: string } }): Promise<Metadata> {
  const tourData = groupToursData[params.destination];
  
  if (!tourData) {
    return {
      title: 'Tour Not Found - TrueDeal Holidays',
      description: 'The requested tour could not be found.',
    };
  }

  return {
    title: `${tourData.name} - TrueDeal Holidays`,
    description: tourData.description,
    openGraph: {
      title: `${tourData.name} - TrueDeal Holidays`,
      description: tourData.description,
      images: [tourData.galleryImages[0]],
    },
  };
}

export default function GroupTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow">
        {children}
      </div>
      
    </div>
  );
} 