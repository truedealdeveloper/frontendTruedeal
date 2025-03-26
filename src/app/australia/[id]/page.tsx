'use client';

import { use, useState, useEffect, useRef } from 'react';
import { australiaPackages } from '../data';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaClock, FaMinus, FaPlus } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import { BookingFormModal } from '@/app/components/BookingFormModal';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import AustraliaPackages from '../page';

interface PageProps {
    params: Promise<{ id: string; }>
}

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function AustraliaPackagePage({ params }: PageProps) {
    const { id } = use(params);
    const australiaPkg = Object.values(australiaPackages).find(p => p.id === id);

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openDay, setOpenDay] = useState<number | null>(null);
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);

    const overviewRef = useRef<HTMLDivElement>(null);
    const itineraryRef = useRef<HTMLDivElement>(null);
    const inclusionsRef = useRef<HTMLDivElement>(null);
    const exclusionsRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const cultureScrollRef = useRef<HTMLDivElement>(null);

    if (!australiaPkg) {
        notFound();
    }

    useScroll();

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'overview', ref: overviewRef },
                { id: 'itinerary', ref: itineraryRef },
                { id: 'inclusions', ref: inclusionsRef },
                { id: 'exclusions', ref: exclusionsRef },
                { id: 'other', ref: otherRef }
            ];

            setShowFloatingCTA(window.scrollY > 200);

            for (const section of sections) {
                if (section.ref.current) {
                    const rect = section.ref.current.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveTab(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) =>
                prev === (australiaPkg?.images?.length || 1) - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [australiaPkg?.images?.length]);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, tabId: string) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(tabId);
    };

    return (
        <div className={`min-h-screen bg-gray-50 ${poppins.className} relative`}>
            {/* Hero Section */}
            <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentImageIndex}
                        src={australiaPkg?.images?.[currentImageIndex] || '/default-image.jpg'}
                        alt={australiaPkg.packageName}
                        className="absolute w-full h-full object-cover object-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
                
                {/* Hero Content */}
                <div className="container mx-auto relative h-full">
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <motion.div
                                className="text-white max-w-3xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
                                    {australiaPkg.packageName}
                                </h1>
                                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-base md:text-lg">
                                    <span className="flex items-center gap-3">
                                        <FaCalendarAlt className="text-[#00f6ff]" />
                                        <span>{australiaPkg.dateStart} - {australiaPkg.dateEnd}</span>
                                    </span>
                                    <span className="flex items-center gap-3">
                                        <FaClock className="text-[#00f6ff]" />
                                        <span>{australiaPkg.days}D/{australiaPkg.nights}N</span>
                                    </span>
                                </div>
                            </motion.div>
                            
                            <Button
                                onClick={() => setIsBookingModalOpen(true)}
                                className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white px-6 py-3 md:px-8 md:py-6 text-lg rounded-lg shadow-lg transform transition hover:scale-105"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Tabs Navigation */}
            <div 
                ref={tabsRef}
                className="sticky top-0 z-20 bg-white shadow-md"
            >
                <div className="container mx-auto px-4">
                    <Tabs value={activeTab} className="w-full">
                        <TabsList className="flex w-full overflow-x-auto space-x-4 p-0">
                            <TabsTrigger
                                value="overview"
                                onClick={() => scrollToSection(overviewRef, 'overview')}
                                className={`flex-1 py-4 ${activeTab === 'overview' ? 'border-b-2 border-blue-500' : ''}`}
                            >
                                Overview
                            </TabsTrigger>
                            <TabsTrigger
                                value="itinerary"
                                onClick={() => scrollToSection(itineraryRef, 'itinerary')}
                                className={`flex-1 py-4 ${activeTab === 'itinerary' ? 'border-b-2 border-blue-500' : ''}`}
                            >
                                Itinerary
                            </TabsTrigger>
                            <TabsTrigger
                                value="inclusions"
                                onClick={() => scrollToSection(inclusionsRef, 'inclusions')}
                                className={`flex-1 py-4 ${activeTab === 'inclusions' ? 'border-b-2 border-blue-500' : ''}`}
                            >
                                Inclusions
                            </TabsTrigger>
                            <TabsTrigger
                                value="exclusions"
                                onClick={() => scrollToSection(exclusionsRef, 'exclusions')}
                                className={`flex-1 py-4 ${activeTab === 'exclusions' ? 'border-b-2 border-blue-500' : ''}`}
                            >
                                Exclusions
                            </TabsTrigger>
                            <TabsTrigger
                                value="other"
                                onClick={() => scrollToSection(otherRef, 'other')}
                                className={`flex-1 py-4 ${activeTab === 'other' ? 'border-b-2 border-blue-500' : ''}`}
                            >
                                Other Info
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Overview Section */}
                <div ref={overviewRef} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Overview</h2>
                    <p className="text-gray-700 mb-6">{australiaPkg.description}</p>
                    
                    {/* Group Details */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Group Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600">Group Size: {australiaPkg.groupDetails.pax}</p>
                                <p className="text-gray-600">Room Type: {australiaPkg.groupDetails.rooms}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Duration: {australiaPkg.groupDetails.duration}</p>
                                <p className="text-gray-600">Cost Basis: {australiaPkg.groupDetails.costBasis}</p>
                            </div>
                        </div>
                    </div>

                    {/* Hotels */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h3 className="text-xl font-semibold mb-4">Hotels</h3>
                        <div className="grid gap-4">
                            {australiaPkg.hotelDetails.map((hotel, index) => (
                                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                                    <h4 className="font-semibold">{hotel.city}</h4>
                                    <p className="text-gray-600">{hotel.hotel}</p>
                                    <p className="text-gray-500 text-sm">{hotel.roomType}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div ref={itineraryRef} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
                    <div className="space-y-4">
                        {australiaPkg.itinerary.map((day, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                                    onClick={() => setOpenDay(openDay === index ? null : index)}
                                >
                                    <span className="font-medium">Day {day.day}: {day.title}</span>
                                    {openDay === index ? (
                                        <FaMinus className="flex-shrink-0 text-gray-400" />
                                    ) : (
                                        <FaPlus className="flex-shrink-0 text-gray-400" />
                                    )}
                                </button>
                                {openDay === index && (
                                    <div className="px-6 py-4 bg-gray-50">
                                        <p className="text-gray-600">{day.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inclusions Section */}
                <div ref={inclusionsRef} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Inclusions</h2>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <ul className="list-disc list-inside space-y-2">
                            {australiaPkg.inclusions.map((inclusion, index) => (
                                <li key={index} className="text-gray-700">{inclusion}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Exclusions Section */}
                <div ref={exclusionsRef} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Exclusions</h2>
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <ul className="list-disc list-inside space-y-2">
                            {australiaPkg.exclusions.map((exclusion, index) => (
                                <li key={index} className="text-gray-700">{exclusion}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Other Information Section */}
                <div ref={otherRef} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Other Information</h2>
                    {australiaPkg.additionalInfo && (
                        <div className="space-y-6">
                            {/* Highlights */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {australiaPkg.additionalInfo.highlights.map((highlight, index) => (
                                        <li key={index} className="text-gray-700">{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Best Time to Visit */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                                <p className="text-gray-700">{australiaPkg.additionalInfo.bestTimeToVisit}</p>
                            </div>

                            {/* Cuisine */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-semibold mb-4">Local Cuisine</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {australiaPkg.additionalInfo.cuisine.map((item, index) => (
                                        <li key={index} className="text-gray-700">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visa Information */}
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-semibold mb-4">Visa Information</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-700"><strong>Requirement:</strong> {australiaPkg.additionalInfo.visaInfo.requirement}</p>
                                    <p className="text-gray-700"><strong>Processing Time:</strong> {australiaPkg.additionalInfo.visaInfo.duration}</p>
                                    <p className="text-gray-700"><strong>Cost:</strong> {australiaPkg.additionalInfo.visaInfo.cost}</p>
                                    <div className="mt-4">
                                        <h4 className="font-semibold mb-2">Required Documents:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            {australiaPkg.additionalInfo.visaInfo.documents.map((doc, index) => (
                                                <li key={index} className="text-gray-700">{doc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sightseeing Activities Section */}
                <div className="mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Popular Sightseeing Spots</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {australiaPkg.sightseeingSpots?.map((spot, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-lg">
                                    <Image
                                        src={spot.image}
                                        alt={spot.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                        <div className="p-4 text-white">
                                            <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                                            <p className="text-sm opacity-90">{spot.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Local Food & Restaurants Section */}
                <div className="mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Famous Local Cuisine</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {australiaPkg.localFood?.map((food, index) => (
                                <div key={index} className="flex gap-4 items-center bg-gray-50 rounded-lg p-4">
                                    <Image
                                        src={food.image}
                                        alt={food.name}
                                        width={120}
                                        height={120}
                                        className="rounded-lg object-cover"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
                                        <p className="text-gray-600 text-sm">{food.description}</p>
                                        {food.where && (
                                            <p className="text-sm text-[#017ae3] mt-2">
                                                <IoLocationSharp className="inline mr-1" />
                                                {food.where}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Culture & Traditions Section */}
                <div className="mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Australian Culture & Traditions</h2>
                        <div 
                            ref={cultureScrollRef}
                            className="overflow-x-hidden relative"
                        >
                            <div className="flex gap-6 animate-scroll">
                                {[...australiaPkg.culture, ...australiaPkg.culture]?.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex-none w-[300px] md:w-[400px]"
                                    >
                                        <div className="relative h-[250px] mb-4">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="rounded-lg object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <BookingFormModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                destinationName={australiaPkg.packageName}
                price={australiaPkg.amount}
                dates={`${australiaPkg.dateStart} - ${australiaPkg.dateEnd}`}
            />

            {/* Floating CTA */}
            <AnimatePresence>
                {showFloatingCTA && (
                    <motion.div
                        className="fixed bottom-20 right-4 z-50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <Button
                            onClick={() => setIsBookingModalOpen(true)}
                            className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-3 rounded-full shadow-lg"
                        >
                            Book Now
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Styles */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <div className='mt-[50px]'>
                <AustraliaPackages />
            </div>
        </div>
    );
} 