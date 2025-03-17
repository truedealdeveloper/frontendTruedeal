'use client';

import { use, useState, useEffect, useRef } from 'react';
import { indochinaPackages } from '../data';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import { BookingFormModal } from '@/app/components/BookingFormModal';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
// import IndochinaPackages from '../page';
// import IndochinaBanner from '@/app/components/homepage/IndochinaBanner';

interface PageProps {
    params: Promise<{ id: string; }>
}

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function IndochinaPackagePage({ params }: PageProps) {
    const { id } = use(params);
    const indochinaPkg = Object.values(indochinaPackages).find(p => p.id === id);

    if (!indochinaPkg) {
        notFound();
    }

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
                prev === (indochinaPkg?.images?.length || 1) - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [indochinaPkg?.images?.length]);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, tabId: string) => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(tabId);
    };

    const useAutoScroll = (scrollRef: React.RefObject<HTMLDivElement>, duration: number = 40000) => {
        useEffect(() => {
            if (!scrollRef.current) return;
            
            const scrollElement = scrollRef.current;
            let animationFrameId: number;
            let startTime: number;
            
            const scroll = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                
                if (scrollElement) {
                    const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
                    const newPosition = (progress % duration) / duration * scrollWidth;
                    scrollElement.scrollLeft = newPosition;
                }
                
                animationFrameId = requestAnimationFrame(scroll);
            };
            
            animationFrameId = requestAnimationFrame(scroll);
            
            return () => {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
            };
        }, [duration, scrollRef]);
    };

    useAutoScroll(cultureScrollRef, 50000);

    return (
        <div className={`min-h-screen bg-gray-50 ${poppins.className} relative`}>
            {/* Hero Section */}
            <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentImageIndex}
                        src={indochinaPkg?.images?.[currentImageIndex] || '/default-image.jpg'}
                        alt={indochinaPkg.packageName}
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
                                    {indochinaPkg.packageName}
                                </h1>
                                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-base md:text-lg">
                                    <span className="flex items-center gap-3">
                                        <FaCalendarAlt className="text-[#00f6ff]" />
                                        <span>{indochinaPkg.dateStart} - {indochinaPkg.dateEnd}</span>
                                    </span>
                                    <span className="flex items-center gap-3">
                                        <FaClock className="text-[#00f6ff]" />
                                        <span>{indochinaPkg.days}D/{indochinaPkg.nights}N</span>
                                    </span>
                                </div>
                            </motion.div>
                            
                            <Button
                                className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white px-6 py-3 md:px-8 md:py-6 text-lg rounded-lg shadow-lg transform transition hover:scale-105"
                                onClick={() => setIsBookingModalOpen(true)}
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
                className="sticky top-0 z-50 bg-white border-b shadow-lg mt-0"
            >
                <div className="container mx-auto">
                    <div className="overflow-x-auto scrollbar-hide">
                        <Tabs value={activeTab} className="w-full">
                            <TabsList className="w-full h-14 flex space-x-4 md:space-x-8 min-w-max px-4">
                                {[
                                    { id: 'overview', label: 'Overview', ref: overviewRef },
                                    { id: 'itinerary', label: 'Itinerary', ref: itineraryRef },
                                    { id: 'inclusions', label: 'Inclusions', ref: inclusionsRef },
                                    { id: 'exclusions', label: 'Exclusions', ref: exclusionsRef },
                                    { id: 'other', label: 'Other Info', ref: otherRef }
                                ].map(tab => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        onClick={() => scrollToSection(tab.ref, tab.id)}
                                        className={`px-4 py-2 text-sm md:text-base whitespace-nowrap border-b-2 transition-all duration-300 ${
                                            activeTab === tab.id
                                                ? 'border-[#017ae3] text-[#017ae3] font-semibold'
                                                : 'border-transparent text-gray-600 hover:text-[#017ae3]'
                                        }`}
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                {/* Overview Section */}
                <div ref={overviewRef} className="scroll-mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#017ae3] border-b pb-4">
                                    About This Package
                                </h2>

                                <p className="text-gray-600 mb-6">{indochinaPkg.description}</p>

                                {/* Tour Summary Box */}
                                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                                    <h3 className="text-lg font-semibold mb-4">Tour Overview</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {indochinaPkg.tourSummary?.map((day, index) => (
                                            <div key={index} className="flex gap-2">
                                                <span className="text-[#017ae3] font-medium whitespace-nowrap">Day {index + 1}:</span>
                                                <span className="text-gray-600">{day.replace(/^Day \d+: /, '')}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tour Details Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {indochinaPkg.groupDetails && (
                                        <>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Duration</h4>
                                                <p>{indochinaPkg.groupDetails.duration}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Accommodation</h4>
                                                <p>{indochinaPkg.groupDetails.rooms}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Group Size</h4>
                                                <p>{indochinaPkg.groupDetails.pax}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-semibold mb-2">Cost Basis</h4>
                                                <p>{indochinaPkg.groupDetails.costBasis}</p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {indochinaPkg.departureDates && (
                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold mb-4">Departure Dates</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {indochinaPkg.departureDates.map((departure, index) => (
                                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                    <div className="text-gray-700">{departure.date}</div>
                                                    {departure.availability && (
                                                        <div className="text-sm text-gray-500 mt-1">
                                                            Availability: {departure.availability}
                                                        </div>
                                                    )}
                                                    {departure.price && (
                                                        <div className="text-sm text-[#017ae3] mt-1">
                                                            Price: ₹{departure.price.toLocaleString('en-IN')}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Price Card in sidebar */}
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                                <div className="text-center mb-4">
                                    {indochinaPkg.amount && (
                                        <>
                                            <p className="text-gray-500 line-through">₹{(indochinaPkg.amount * 1.2).toLocaleString('en-IN')}/-</p>
                                            <p className="text-3xl font-bold text-[#017ae3]">₹{indochinaPkg.amount.toLocaleString('en-IN')}/-</p>
                                        </>
                                    )}
                                    <p className="text-sm text-gray-500">per person</p>
                                </div>
                                <Button
                                    className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white font-bold py-3 rounded-lg transition-all duration-300"
                                    onClick={() => setIsBookingModalOpen(true)}
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Itinerary Section */}
                <div ref={itineraryRef} className="scroll-mt-16 mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Detailed Itinerary</h2>
                        <div className="space-y-6">
                            {indochinaPkg.itinerary.map((day, index) => (
                                <div key={index} className="group">
                                    <div
                                        className="flex items-center gap-4 cursor-pointer bg-gradient-to-r from-[#017ae3]/5 to-[#00f6ff]/5 p-4 rounded-lg hover:from-[#017ae3]/10 hover:to-[#00f6ff]/10 transition-colors"
                                        onClick={() => setOpenDay(openDay === index ? null : index)}
                                    >
                                        <div className="flex-shrink-0 w-24">
                                            <div className="text-sm text-[#017ae3]">Day {day.day}</div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-semibold text-gray-800">{day.title}</h3>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <svg
                                                className={`w-6 h-6 text-[#017ae3] transform transition-transform duration-300 ${openDay === index ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {openDay === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-2 pl-28 pr-4 py-4">
                                                    <p className="text-gray-600">{day.description}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Inclusions Section */}
                <div ref={inclusionsRef} className="scroll-mt-16 mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Tour Inclusions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {indochinaPkg.inclusions?.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-green-500 text-xl">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Exclusions Section */}
                <div ref={exclusionsRef} className="scroll-mt-16 mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Tour Exclusions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {indochinaPkg.exclusions?.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                                    <span className="text-red-500 text-xl">✕</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Other Information Section */}
                <div ref={otherRef} className="scroll-mt-16 mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Other Information</h2>
                        
                        {indochinaPkg.additionalInfo && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Highlights */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Highlights</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <ul className="list-disc list-inside space-y-2">
                                            {indochinaPkg.additionalInfo.highlights.map((highlight, index) => (
                                                <li key={index} className="text-gray-700">{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Cuisine */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Local Cuisine</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <ul className="list-disc list-inside space-y-2">
                                            {indochinaPkg.additionalInfo.cuisine.map((item, index) => (
                                                <li key={index} className="text-gray-700">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Hotels */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Hotels</h3>
                                    <div className="space-y-4">
                                        {indochinaPkg.hotelDetails.map((hotel, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-bold text-lg mb-1">{hotel.city}</h4>
                                                <p className="text-gray-600">{hotel.hotel}</p>
                                                <p className="text-gray-500 text-sm">{hotel.roomType}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visa Information */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold">Visa Information</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-700 mb-2"><strong>Requirement:</strong> {indochinaPkg.additionalInfo.visaInfo.requirement}</p>
                                        <p className="text-gray-700 mb-2"><strong>Duration:</strong> {indochinaPkg.additionalInfo.visaInfo.duration}</p>
                                        <p className="text-gray-700 mb-2"><strong>Cost:</strong> {indochinaPkg.additionalInfo.visaInfo.cost}</p>
                                        <h4 className="font-semibold mt-4 mb-2">Required Documents:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            {indochinaPkg.additionalInfo.visaInfo.documents.map((doc, index) => (
                                                <li key={index} className="text-gray-700">{doc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sightseeing Activities Section */}
                <div className="mt-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">Popular Sightseeing Spots</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {indochinaPkg.sightseeingSpots?.map((spot, index) => (
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
                            {indochinaPkg.localFood?.map((food, index) => (
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
                        <h2 className="text-2xl font-bold mb-6 text-[#017ae3] border-b pb-4">vietnamnese Culture & Traditions</h2>
                        <div 
                            ref={cultureScrollRef}
                            className="overflow-x-hidden relative"
                        >
                            <div className="flex gap-6 animate-scroll">
                                {[...indochinaPkg.culture, ...indochinaPkg.culture]?.map((item, index) => (
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
                destinationName={indochinaPkg.packageName}
                price={indochinaPkg.amount}
                dates={`${indochinaPkg.dateStart} - ${indochinaPkg.dateEnd}`}
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

            {/* Add this style at the bottom of your component */}
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            {/* <IndochinaBanner />   */}
                {/* <div className='mt-[50px]'> */}
            {/* <IndochinaPackages /> */}
            {/* </div> */}
        </div>
    );
} 