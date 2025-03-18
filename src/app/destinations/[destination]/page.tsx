'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Camera, Calendar, Phone, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { GalleryModal } from '@/app/package/[id]/gallery-modal';
import { BookingFormModal } from '../../components/BookingFormModal';
import Trending from '@/app/components/homepage/Trending';
import Destinations from '@/app/components/homepage/Destinations';
import Shimmer from '@/components/ui/shimmer';
import Domestic from '@/app/components/homepage/Domestic';
import Europe from '@/app/components/homepage/Europe';
import Gallery from '@/app/components/homepage/Gallery';
import ExoticDestinations from '@/app/components/homepage/Exotic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CurrencyExchange from '../../components/forex/ForexLive';
import Sponsors from "../../components/Ad/Sponsers";
import ReviewsGlimpse from '@/app/components/homepage/ReviewsGlimpse';
import FixedDepartures from '@/app/fixedDeparture/page';
// import ChardhamYatra from '@/app/chardhamYatra/page';
import BannerCarousel from '../../components/valentine/page';
import Indonesia from '@/app/indonesia/page';
import { destinationData } from '../destinationData';
import type { DestinationDetails } from '../destinationData';

// Update the type guard function
function hasVariants(data: DestinationDetails | null): data is DestinationDetails & { variants: { id: string; name: string; }[] } {
    return Boolean(data?.variants?.length);
}

const getDestinationDetails = (destinationSlug: string): DestinationDetails => {
    const destination = destinationData[destinationSlug.toLowerCase()];

    if (!destination) {
        throw new Error(`Destination ${destinationSlug} not found`);
    }

    return destination;
};

export default function DestinationDetails() {
    const params = useParams();
    const { destination } = params;
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [destinationData, setDestinationData] = useState<DestinationDetails | null>(null);
    const [error] = useState<string | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
    // Add this new state for managing the packages dropdown
    const [showPackages, setShowPackages] = useState(false);
    // First, add a state to track the active tab value
    const [activeTab, setActiveTab] = useState<string>('');
    // Inside your component, add this new state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        try {
            const data = getDestinationDetails(destination as string);
            setDestinationData(data);
        } catch {
            // Handle the error appropriately without using the error object
        }
    }, [destination]);

    useEffect(() => {
        if (hasVariants(destinationData)) {
            const initialTabId = destinationData.variants[0].id;
            setActiveTab(initialTabId);
            setSelectedVariant(initialTabId);
        }
    }, [destinationData]);

    // Add this useEffect for auto-sliding
    useEffect(() => {
        if (!destinationData?.galleryImages?.length) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === (destinationData?.galleryImages?.length - 1) ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [destinationData?.galleryImages?.length]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!destinationData) {
        return <Shimmer />;
    }

    if (destination === 'finland' && hasVariants(destinationData)) {
        return (
            <div className="min-h-screen bg-gray-50 mt-10">
                <main className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-4 py-2 rounded-full text-sm font-medium mt-2">
                                {destinationData.variants.length} Packages Available
                            </div>
                        </div>
                    </div>

                    <Tabs
                        value={activeTab || destinationData.variants[0].id}
                        defaultValue={destinationData.variants[0].id}
                        className="mb-8"
                        onValueChange={(value) => {
                            setActiveTab(value);
                            setSelectedVariant(value);
                        }}
                    >
                        {/* Mobile View Packages Dropdown */}
                        <div className="md:hidden relative mb-4">
                            <Button
                                onClick={() => setShowPackages(!showPackages)}
                                className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full flex items-center justify-between px-4 py-3"
                            >
                                <span>
                                    {destinationData.variants.find(v => v.id === activeTab)?.name || 'Available Packages'}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`transition-transform duration-300 ${showPackages ? 'rotate-180' : ''}`}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </Button>

                            {showPackages && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-50 overflow-hidden">
                                    {destinationData.variants.map((variant) => (
                                        <button
                                            key={variant.id}
                                            onClick={() => {
                                                setActiveTab(variant.id);
                                                setSelectedVariant(variant.id);
                                                setShowPackages(false);
                                            }}
                                            className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200
                                            ${activeTab === variant.id
                                                    ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white'
                                                    : 'hover:bg-gray-50 text-gray-700'
                                                }
                                        `}
                                        >
                                            {variant.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Desktop View Tabs */}
                        <div className="hidden md:block">
                            <TabsList className="flex w-full overflow-x-auto scrollbar-hide space-x-2 p-1 bg-gray-100/80 rounded-full px-1">
                                {destinationData.variants.map((variant, index) => (
                                    <TabsTrigger
                                        key={variant.id}
                                        value={variant.id}
                                        className={`flex-none w-auto px-4 py-2 text-sm rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white transition-all duration-300 hover:bg-gray-200 whitespace-nowrap ${index === 0 ? 'ml-1' : ''}`}
                                        style={{ minWidth: 'max-content' }}
                                    >
                                        {variant.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {/* Tab Content */}
                        {destinationData.variants.map((variant) => (
                            <TabsContent
                                key={variant.id}
                                value={variant.id}
                                className="max-h-[85vh] overflow-y-auto custom-scrollbar relative"
                            >
                                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
                                    <div className="relative w-full h-[400px]">
                                        {destinationData.galleryImages.map((image, index) => (
                                            <Image
                                                key={image}
                                                src={image}
                                                alt={`${destinationData.name} - Image ${index + 1}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                                className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                priority={index === 0}
                                                quality={100}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setIsGalleryOpen(true)}
                                        className="absolute bottom-4 left-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                                    >
                                        <Camera className="w-4 h-4" />
                                        View Gallery
                                    </button>
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl w-full max-w-[280px] md:max-w-xs mx-4 md:mx-0">
                                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-2">
                                            <Calendar className="w-4 h-4" />
                                            {variant.duration.days} Days / {variant.duration.nights} Nights
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold mb-1">₹{variant.price.toLocaleString()}</div>
                                        <div className="text-xs md:text-sm text-gray-600 mb-4">Per Person</div>
                                        <Button
                                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white mb-4 transition-all duration-500 text-sm md:text-base"
                                            onClick={() => {
                                                setSelectedVariant(variant.id);
                                                setIsBookingModalOpen(true);
                                            }}
                                        >
                                            Book Now
                                        </Button>
                                        <div className="text-center">
                                            <div className="text-xs md:text-sm font-medium mb-1">Need Help?</div>
                                            <div className="text-xs text-gray-600 mb-2">
                                                Our Destination expert will be happy to help resolve your queries
                                            </div>
                                            <div className="flex items-center justify-center gap-2 text-[#017ae3] font-medium text-sm">
                                                <Phone className="w-4 h-4" />
                                                +91 9310271488
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
                                    <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                        {variant.name}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4 text-[#017ae3]" />
                                            {variant.name}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4 text-[#017ae3]" />
                                            {variant.duration.nights} Nights
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4 text-[#017ae3]" />
                                            {variant.duration.days} Days
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Overview</h2>
                                            <p className="text-gray-600 leading-relaxed">{variant.description}</p>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Day Wise Itinerary</h2>
                                            <div className="space-y-6 md:space-y-8">
                                                {variant.itinerary.map((day) => (
                                                    <div key={`${day.day}-${day.title}`} className="flex gap-3 md:gap-4 group">
                                                        <div className="flex-shrink-0 relative">
                                                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full mt-2 group-hover:shadow-lg transition-all duration-300"></div>
                                                            <div className="absolute top-5 bottom-0 left-1 md:left-1.5 w-0.5 bg-gradient-to-b from-[#017ae3] to-transparent"></div>
                                                        </div>
                                                        <div className="group-hover:translate-x-2 transition-transform duration-300">
                                                            <div className="text-xs md:text-sm text-gray-500">Day {day.day}</div>
                                                            <div className="font-medium text-sm md:text-base text-gray-900">{day.title}</div>
                                                            <div className="text-xs md:text-sm text-gray-600 mt-1">{day.description}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Inclusions</h2>
                                            <div className="space-y-2">
                                                {destinationData.inclusions.map((inclusion, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                                        {inclusion}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Exclusions</h2>
                                            <div className="space-y-2">
                                                {destinationData.exclusions.map((exclusion, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                                        <XCircle className="w-4 h-4 text-red-600" />
                                                        {exclusion}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Cancellation Policy</h2>
                                            <div className="space-y-2">
                                                {destinationData.cancellationPolicy.map((policy, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                                                        {policy}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>

                    <GalleryModal
                        isOpen={isGalleryOpen}
                        onClose={() => setIsGalleryOpen(false)}
                        images={destinationData.galleryImages}
                    />

                    <BookingFormModal
                        isOpen={isBookingModalOpen}
                        onClose={() => setIsBookingModalOpen(false)}
                        destinationName={
                            selectedVariant
                                ? `${destinationData.name} - ${destinationData.variants.find(v => v.id === selectedVariant)?.name}`
                                : destinationData.name
                        }
                    />
                </main>

                <Trending />
                <Destinations />
                {/* <HappyCustomers /> */}
                <Domestic />
                <ExoticDestinations />
                <Europe />
                {/* <HappyCustomers /> */}
                <Gallery />
                <style jsx global>{`
                    .custom-scrollbar {
                        scrollbar-width: thin;
                        scrollbar-color: #00f6ff #f3f4f6;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #f3f4f6;
                        border-radius: 10px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: linear-gradient(45deg, #017ae3, #00f6ff);
                        border-radius: 10px;
                        transition: all 0.3s ease;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: linear-gradient(45deg, #00f6ff, #017ae3);
                    }

                    @media (max-width: 768px) {
                        .custom-scrollbar {
                            max-height: 75vh;
                        }
                    }

                    /* Add these new styles */
                    .package-dropdown-enter {
                        opacity: 0;
                        transform: translateY(-10px);
                    }

                    .package-dropdown-enter-active {
                        opacity: 1;
                        transform: translateY(0);
                        transition: opacity 200ms, transform 200ms;
                    }

                    .package-dropdown-exit {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .package-dropdown-exit-active {
                        opacity: 0;
                        transform: translateY(-10px);
                        transition: opacity 200ms, transform 200ms;
                    }

                    /* Overlay styles for mobile */
                    @media (max-width: 768px) {
                        .overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background-color: rgba(0, 0, 0, 0.5);
                            z-index: 40;
                        }
                    }

                    /* Add these new styles for the image transition */
                    .image-transition-enter {
                        opacity: 0;
                    }
                    .image-transition-enter-active {
                        opacity: 1;
                        transition: opacity 1000ms ease-in-out;
                    }
                    .image-transition-exit {
                        opacity: 1;
                    }
                    .image-transition-exit-active {
                        opacity: 0;
                        transition: opacity 1000ms ease-in-out;
                    }
                `}</style>
            </div>
        );
    }

    if (destination === 'phillipines' && destinationData.variants) {
        return (
            <div className="min-h-screen bg-gray-50 mt-10">
                <main className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-4 py-2 rounded-full text-sm font-medium">
                                {destinationData?.variants?.length || 0} Packages Available
                            </div>

                        </div>
                    </div>

                    <Tabs
                        value={activeTab || (destinationData?.variants?.[0]?.id || '')}
                        defaultValue={destinationData?.variants?.[0]?.id || ''}
                        className="mb-8"
                        onValueChange={(value) => {
                            setActiveTab(value);
                            setSelectedVariant(value);
                        }}
                    >
                        {/* Mobile View Packages Dropdown */}
                        <div className="md:hidden relative mb-4">
                            <Button
                                onClick={() => setShowPackages(!showPackages)}
                                className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-full flex items-center justify-between px-4 py-3"
                            >
                                <span>
                                    {destinationData?.variants?.find(v => v.id === activeTab)?.name || 'Available Packages'}
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`transition-transform duration-300 ${showPackages ? 'rotate-180' : ''}`}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </Button>

                            {showPackages && destinationData?.variants && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-50 overflow-hidden">
                                    {destinationData.variants.map((variant) => (
                                        <button
                                            key={variant.id}
                                            onClick={() => {
                                                setActiveTab(variant.id);  // Update the active tab
                                                setSelectedVariant(variant.id);
                                                setShowPackages(false);
                                            }}
                                            className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200
                                            ${activeTab === variant.id
                                                    ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white'
                                                    : 'hover:bg-gray-50 text-gray-700'
                                                }
                                        `}
                                        >
                                            {variant.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Desktop View Tabs */}
                        <div className="hidden md:block">
                            <TabsList className="flex w-full overflow-x-auto scrollbar-hide space-x-2 p-1 bg-gray-100/80 rounded-full px-1">
                                {destinationData?.variants?.map((variant, index) => (
                                    <TabsTrigger
                                        key={variant.id}
                                        value={variant.id}
                                        className={`flex-none w-auto px-4 py-2 text-sm rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white transition-all duration-300 hover:bg-gray-200 whitespace-nowrap ${index === 0 ? 'ml-1' : ''}`}
                                        style={{ minWidth: 'max-content' }}
                                    >
                                        {variant.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {/* Tab Content */}
                        {destinationData?.variants?.map((variant) => (
                            <TabsContent
                                key={variant.id}
                                value={variant.id}
                                className="max-h-[85vh] overflow-y-auto custom-scrollbar relative"
                            >
                                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
                                    <div className="relative w-full h-[400px]">
                                        {destinationData.galleryImages.map((image, index) => (
                                            <Image
                                                key={image}
                                                src={image}
                                                alt={`${destinationData.name} - Image ${index + 1}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                                className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                priority={index === 0}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => setIsGalleryOpen(true)}
                                        className="absolute bottom-4 left-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                                    >
                                        <Camera className="w-4 h-4" />
                                        View Gallery
                                    </button>
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl w-full max-w-[280px] md:max-w-xs mx-4 md:mx-0">
                                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-2">
                                            <Calendar className="w-4 h-4" />
                                            {variant.duration.days} Days / {variant.duration.nights} Nights
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold mb-1">₹{variant.price.toLocaleString()}</div>
                                        <div className="text-xs md:text-sm text-gray-600 mb-4">Per Person</div>
                                        <Button
                                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white mb-4 transition-all duration-500 text-sm md:text-base"
                                            onClick={() => {
                                                setSelectedVariant(variant.id);
                                                setIsBookingModalOpen(true);
                                            }}
                                        >
                                            Book Now
                                        </Button>
                                        <div className="text-center">
                                            <div className="text-xs md:text-sm font-medium mb-1">Need Help?</div>
                                            <div className="text-xs text-gray-600 mb-2">
                                                Our Destination expert will be happy to help resolve your queries
                                            </div>
                                            <div className="flex items-center justify-center gap-2 text-[#017ae3] font-medium text-sm">
                                                <Phone className="w-4 h-4" />
                                                +91 9310271488
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
                                    <h1 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                                        {variant.name}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-6 md:mb-8 text-xs md:text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4 text-[#017ae3]" />
                                            {variant.name}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4 text-[#017ae3]" />
                                            {variant.duration.nights} Nights
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4 text-[#017ae3]" />
                                            {variant.duration.days} Days
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Overview</h2>
                                            <p className="text-gray-600 leading-relaxed">{variant.description}</p>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Day Wise Itinerary</h2>
                                            <div className="space-y-6 md:space-y-8">
                                                {variant.itinerary.map((day) => (
                                                    <div key={`${day.day}-${day.title}`} className="flex gap-3 md:gap-4 group">
                                                        <div className="flex-shrink-0 relative">
                                                            <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full mt-2 group-hover:shadow-lg transition-all duration-300"></div>
                                                            <div className="absolute top-5 bottom-0 left-1 md:left-1.5 w-0.5 bg-gradient-to-b from-[#017ae3] to-transparent"></div>
                                                        </div>
                                                        <div className="group-hover:translate-x-2 transition-transform duration-300">
                                                            <div className="text-xs md:text-sm text-gray-500">Day {day.day}</div>
                                                            <div className="font-medium text-sm md:text-base text-gray-900">{day.title}</div>
                                                            <div className="text-xs md:text-sm text-gray-600 mt-1">{day.description}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Inclusions</h2>
                                            <div className="space-y-2">
                                                {destinationData.inclusions.map((inclusion, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                                        {inclusion}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Exclusions</h2>
                                            <div className="space-y-2">
                                                {destinationData.exclusions.map((exclusion, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                                        <XCircle className="w-4 h-4 text-red-600" />
                                                        {exclusion}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section>
                                            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Cancellation Policy</h2>
                                            <div className="space-y-2">
                                                {destinationData.cancellationPolicy.map((policy, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                                                        {policy}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>

                    <GalleryModal
                        isOpen={isGalleryOpen}
                        onClose={() => setIsGalleryOpen(false)}
                        images={destinationData.galleryImages}
                    />

                    <BookingFormModal
                        isOpen={isBookingModalOpen}
                        onClose={() => setIsBookingModalOpen(false)}
                        destinationName={
                            selectedVariant
                                ? `${destinationData.name} - ${destinationData.variants.find(v => v.id === selectedVariant)?.name}`
                                : destinationData.name
                        }
                    />
                </main>

            <Destinations />
                <Trending />
            <BannerCarousel />  
            <FixedDepartures />
            {/* <ChardhamYatra /> */}
            <Indonesia />
            <Domestic />
            <ExoticDestinations />
            <Europe />
            {/* <HappyCustomers /> */}
            <CurrencyExchange />
            <Gallery />
            {/* <WallOfLove /> */}
            <Sponsors />
            <ReviewsGlimpse />
                
                <style jsx global>{`
                    .custom-scrollbar {
                        scrollbar-width: thin;
                        scrollbar-color: #00f6ff #f3f4f6;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #f3f4f6;
                        border-radius: 10px;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: linear-gradient(45deg, #017ae3, #00f6ff);
                        border-radius: 10px;
                        transition: all 0.3s ease;
                    }
                    
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: linear-gradient(45deg, #00f6ff, #017ae3);
                    }

                    @media (max-width: 768px) {
                        .custom-scrollbar {
                            max-height: 75vh;
                        }
                    }

                    /* Add these new styles */
                    .package-dropdown-enter {
                        opacity: 0;
                        transform: translateY(-10px);
                    }

                    .package-dropdown-enter-active {
                        opacity: 1;
                        transform: translateY(0);
                        transition: opacity 200ms, transform 200ms;
                    }

                    .package-dropdown-exit {
                        opacity: 1;
                        transform: translateY(0);
                    }

                    .package-dropdown-exit-active {
                        opacity: 0;
                        transform: translateY(-10px);
                        transition: opacity 200ms, transform 200ms;
                    }

                    /* Overlay styles for mobile */
                    @media (max-width: 768px) {
                        .overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background-color: rgba(0, 0, 0, 0.5);
                            z-index: 40;
                        }
                    }

                    /* Add these new styles for the image transition */
                    .image-transition-enter {
                        opacity: 0;
                    }
                    .image-transition-enter-active {
                        opacity: 1;
                        transition: opacity 1000ms ease-in-out;
                    }
                    .image-transition-exit {
                        opacity: 1;
                    }
                    .image-transition-exit-active {
                        opacity: 0;
                        transition: opacity 1000ms ease-in-out;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 mt-10">
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="relative rounded-3xl overflow-hidden mb-8 shadow-xl">
                    <div className="relative w-full h-[400px]">
                        {destinationData.galleryImages.map((image, index) => (
                            <Image
                                key={image}
                                src={image}
                                alt={`${destinationData.name} - Image ${index + 1}`}
                                width={1400}
                                height={400}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                priority={index === 0}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsGalleryOpen(true)}
                        className="absolute bottom-4 left-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                        <Camera className="w-4 h-4" />
                        View Gallery
                    </button>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-xs">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4" />
                            Available Packages: {destinationData.packages}
                        </div>
                        <div className="text-2xl font-bold mb-1">₹{destinationData.price?.toLocaleString() ?? 'Contact for price'}</div>
                        <div className="text-sm text-gray-600 mb-4">Per Person</div>
                        <Button
                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white mb-4 transition-all duration-500"
                            onClick={() => setIsBookingModalOpen(true)}
                        >
                            Book Now
                        </Button>
                        <div className="text-center">
                            <div className="text-sm font-medium mb-1">Need Help?</div>
                            <div className="text-xs text-gray-600 mb-2">
                                Our Destination expert will be happy to help resolve your queries
                            </div>
                            <div className="flex items-center justify-center gap-2 text-[#017ae3] font-medium">
                                <Phone className="w-4 h-4" />
                                +91 9310271488
                            </div>
                        </div>
                    </div>
                </div>

                <GalleryModal
                    isOpen={isGalleryOpen}
                    onClose={() => setIsGalleryOpen(false)}
                    images={destinationData.galleryImages}
                />

                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={destinationData.name}
                />

                <div className="bg-white rounded-2xl shadow-lg p-8 max-h-[85vh] overflow-y-auto custom-scrollbar relative">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">
                        {destinationData.name}
                    </h1>
                    <div className="flex items-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4 text-[#017ae3]" />
                            {destinationData.name}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-[#017ae3]" />
                            {destinationData.duration?.nights ?? '-'} Nights
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-[#017ae3]" />
                            {destinationData.duration?.days ?? '-'} Days
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed">{destinationData.description}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Day Wise Itinerary</h2>
                            <div className="space-y-8">
                                {destinationData.itinerary?.map((day) => (
                                    <div key={`${day.day}-${day.title}`} className="flex gap-4 group">
                                        <div className="flex-shrink-0 relative">
                                            <div className="w-3 h-3 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full mt-2 group-hover:shadow-lg transition-all duration-300"></div>
                                            <div className="absolute top-5 bottom-0 left-1.5 w-0.5 bg-gradient-to-b from-[#017ae3] to-transparent"></div>
                                        </div>
                                        <div className="group-hover:translate-x-2 transition-transform duration-300">
                                            <div className="text-sm text-gray-500">Day {day.day}</div>
                                            <div className="font-medium text-gray-900">{day.title}</div>
                                            <div className="text-sm text-gray-600 mt-1">{day.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Inclusions</h2>
                            <div className="space-y-2">
                                {destinationData.inclusions.map((inclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        {inclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Exclusions</h2>
                            <div className="space-y-2">
                                {destinationData.exclusions.map((exclusion, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <XCircle className="w-4 h-4 text-red-600" />
                                        {exclusion}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-6">Cancellation Policy</h2>
                            <div className="space-y-2">
                                {destinationData.cancellationPolicy.map((policy, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                                        {policy}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Indonesia />
            <Trending />
            <Destinations />
            <BannerCarousel />  
            <FixedDepartures />
            {/* <ChardhamYatra /> */}
            <Domestic />
            <ExoticDestinations />
            <Europe />
            {/* <HappyCustomers /> */}
            <CurrencyExchange />
            <Gallery />
            {/* <WallOfLove /> */}
            <Sponsors />
            <ReviewsGlimpse />

        </div>
    );
}

