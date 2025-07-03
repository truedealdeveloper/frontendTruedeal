'use client';

import { use, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { keralaPackages } from '../data';
import { notFound } from 'next/navigation';
import {
    Calendar, Check, MapPin, Star, Users, X, Camera, Phone
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookingFormModal } from '@/app/components/BookingFormModal';
import { useScroll } from "framer-motion";
import { Poppins } from 'next/font/google';
import { PageWrapper } from '@/components/page-wrapper';
import { useMobile } from '@/hooks/use-mobile';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

interface PageProps {
    params: Promise<{ id: string; }>
}

export default function KeralaPackagePage({ params }: PageProps) {
    const { id } = use(params);
    const keralaPkg = Object.values(keralaPackages).find(p => p.id === id);

    if (!keralaPkg) {
        notFound();
    }

    const isMobile = useMobile();

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedDay, setSelectedDay] = useState(1);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [expandedDays, setExpandedDays] = useState<number[]>([1]);
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
    const cultureScrollRef = useRef<HTMLDivElement>(null);

    useScroll();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) =>
                prev === (keralaPkg?.images?.length || 1) - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [keralaPkg?.images?.length]);

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

    // Calculate truncated description for "Read More" functionality
    const description = keralaPkg.description || "";
    const truncatedDescription = description.length > 300
        ? `${description.substring(0, 300)}...`
        : description;

    // Function to toggle day expansion
    const toggleDayExpansion = (dayNumber: number) => {
        setExpandedDays(prev =>
            prev.includes(dayNumber)
                ? prev.filter(d => d !== dayNumber)
                : [...prev, dayNumber]
        );
    };

    // Add this new function to get all images from itinerary and package
    const getAllImages = () => {
        const itineraryImages = keralaPkg.itinerary.map(day => day.image).filter(Boolean);
        const packageImages = keralaPkg.images || [];
        const sightseeingImages = keralaPkg.sightseeingSpots?.map(spot => spot.image) || [];
        const cultureImages = keralaPkg.culture?.map(item => item.image) || [];
        return [...new Set([...packageImages, ...itineraryImages, ...sightseeingImages, ...cultureImages])];
    };

    // Add these gallery navigation functions
    const nextImage = () => {
        setCurrentGalleryIndex((prev) =>
            prev === getAllImages().length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setCurrentGalleryIndex((prev) =>
            prev === 0 ? getAllImages().length - 1 : prev - 1
        );
    };

    // Add this function after the getAllImages function
    const scrollToDay = (dayNumber: number) => {
        const dayElement = document.getElementById(`day-${dayNumber}`);
        if (dayElement) {
            dayElement.scrollIntoView({ behavior: 'smooth' });
            // Expand the day if it's not already expanded
            if (!expandedDays.includes(dayNumber)) {
                toggleDayExpansion(dayNumber);
            }
        }
    };

    return (
        <PageWrapper>
            <div className={`relative ${poppins.className}`}>
                {/* Hero Section */}
                <div className="relative h-[70vh] w-full">
                    <Image
                        src={keralaPkg?.images?.[currentImageIndex] || '/webImage/kerala/mobile/kerala1.jpg'}
                        alt={keralaPkg.packageName}
                        fill
                        className="object-cover brightness-[0.85]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-12">
                        <div className="max-w-7xl w-full pl-0 md:pl-12 relative top-8 md:top-12">
                            {/* Rating display */}
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(4.8) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                                ))}
                                <span className="ml-2 text-white font-medium">4.8/5 (52 reviews)</span>
                            </div>

                            {/* Package name */}
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{keralaPkg.packageName}</h1>

                            {/* Location */}
                            <div className="flex items-center text-white mb-6">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span className="text-lg">Kerala, India</span>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-4 mb-12">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition rounded-full px-8"
                                    onClick={() => setIsBookingModalOpen(true)}
                                >
                                    Book Now
                                </Button>
                                {!isMobile && (
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white rounded-full px-8"
                                        onClick={() => setIsGalleryModalOpen(true)}
                                    >
                                        <Camera className="h-4 w-4 mr-2" /> View All Photos
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information bar */}
                <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white">
                    <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 md:w-auto">
                                <Calendar className="h-6 w-6 mr-3" />
                            </div>
                            <div>
                                <div className="text-sm opacity-80">Duration</div>
                                <div className="font-medium text-sm md:text-base">{keralaPkg.days} days / {keralaPkg.nights} nights</div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 md:w-auto">
                                <MapPin className="h-6 w-6 mr-3" />
                            </div>
                            <div>
                                <div className="text-sm opacity-80">Location</div>
                                <div className="font-medium text-sm md:text-base">Kerala</div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 md:w-auto">
                                <Users className="h-6 w-6 mr-3" />
                            </div>
                            <div>
                                <div className="text-sm opacity-80">Group Size</div>
                                <div className="font-medium text-sm md:text-base">Max 15 people</div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 md:w-auto">
                                <Star className="h-6 w-6 mr-3 text-yellow-400 fill-yellow-400" />
                            </div>
                            <div>
                                <div className="text-sm opacity-80">Rating</div>
                                <div className="font-medium text-sm md:text-base">4.8/5 (52 reviews)</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content with Tabs */}
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Package Details with Tabs */}
                        <div className="lg:col-span-2 min-w-0">
                            {/* Make tabs sticky on scroll */}
                            <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm -mx-4 px-4">
                                <div className="max-w-full">
                                    <Tabs defaultValue="overview" className="w-full">
                                        <TabsList className="w-full bg-gray-100 p-0 my-4 rounded-lg overflow-x-auto flex no-scrollbar">
                                            <TabsTrigger
                                                value="overview"
                                                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white py-2 px-4 md:py-3 md:px-6 flex-shrink-0"
                                            >
                                                Overview
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="itinerary"
                                                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white py-2 px-4 md:py-3 md:px-6 flex-shrink-0"
                                            >
                                                Itinerary
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="accommodation"
                                                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white py-2 px-4 md:py-3 md:px-6 flex-shrink-0"
                                            >
                                                Accommodation
                                            </TabsTrigger>
                                        </TabsList>

                                        {/* Tab Content sections */}
                                        <TabsContent value="overview" className="mt-0">
                                            {/* Package Highlights */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Package Highlights</h2>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    {[
                                                        { icon: "🚤", title: "Backwater Cruises", desc: "Traditional houseboat experience in Alleppey" },
                                                        { icon: "🍃", title: "Tea Plantations", desc: "Scenic tea gardens of Munnar" },
                                                        { icon: "🏨", title: "Premium Hotels", desc: `${keralaPkg.nights} nights accommodation` },
                                                        { icon: "🚗", title: "Airport Transfers", desc: "Convenient transport included" },
                                                        { icon: "🌿", title: "Ayurveda Spa", desc: "Traditional wellness treatments" },
                                                        { icon: "🦅", title: "Wildlife Safari", desc: "Periyar National Park exploration" },
                                                    ].map((highlight, index) => (
                                                        <Card key={index} className="p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
                                                            <div className="text-3xl mb-2">{highlight.icon}</div>
                                                            <h3 className="font-medium">{highlight.title}</h3>
                                                            <p className="text-sm text-gray-600">{highlight.desc}</p>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* About This Package */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">About This Package</h2>
                                                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="p-6">
                                                            <div className="prose max-w-none">
                                                                <p>
                                                                    {showFullDescription ? description : truncatedDescription}
                                                                </p>
                                                                {description.length > 300 && (
                                                                    <Button
                                                                        variant="link"
                                                                        className="p-0 h-auto text-green-600"
                                                                        onClick={() => setShowFullDescription(!showFullDescription)}
                                                                    >
                                                                        {showFullDescription ? "Show Less" : "Read More ↓"}
                                                                    </Button>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="relative h-full min-h-[250px] md:min-h-0">
                                                            <Image
                                                                src={keralaPkg?.images?.[1] || '/webImage/kerala/mobile/kerala2.jpg'}
                                                                alt="About Kerala"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Experiences You'll Love */}
                                            {keralaPkg.experiences && (
                                                <div className="mb-10">
                                                    <h2 className="text-2xl font-bold mb-6">Experiences You&apos;ll Love</h2>
                                                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                                        {keralaPkg.experiences.map((experience, index) => (
                                                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm">
                                                                <div className="relative h-48">
                                                                    <Image
                                                                        src={experience.image}
                                                                        alt={experience.title}
                                                                        fill
                                                                        className="object-cover hover:scale-105 transition duration-500"
                                                                    />
                                                                </div>
                                                                <div className="p-4">
                                                                    <h3 className="font-medium text-center">{experience.title}</h3>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Gallery */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                                                    {(keralaPkg?.images || []).slice(0, 6).map((img, i) => (
                                                        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                                            <Image
                                                                src={img}
                                                                alt={`Kerala destination image ${i + 1}`}
                                                                fill
                                                                className="object-cover hover:scale-105 transition duration-500"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <Button variant="outline" className="text-sm">
                                                        View All Photos ({keralaPkg?.images?.length || 0})
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Available Departures From */}
                                            {keralaPkg.departureCities && (
                                                <div className="mb-10">
                                                    <h2 className="text-2xl font-bold mb-6">Available Departures From:</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {keralaPkg.departureCities.map((departure, index) => (
                                                            <Card key={index} className="border border-gray-200">
                                                                <div className="p-4 flex justify-between items-center">
                                                                    <div>
                                                                        <h3 className="font-bold text-lg">{departure.city}</h3>
                                                                        <p className="text-sm text-gray-500">Available</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-bold text-[#017ae3] text-lg">
                                                                            ₹{departure.price.toLocaleString('en-IN')}
                                                                        </p>
                                                                        <p className="text-sm text-gray-500">per person</p>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* What's Included */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div>
                                                        <h3 className="text-lg font-medium mb-4 flex items-center">
                                                            <Check className="h-5 w-5 mr-2 text-[#017ae3]" />
                                                            Included in Your Package
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {keralaPkg.inclusions?.map((item, i) => (
                                                                <li key={i} className="flex">
                                                                    <Check className="h-5 w-5 mr-3 text-[#017ae3] flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h3 className="text-lg font-medium mb-4 flex items-center">
                                                            <X className="h-5 w-5 mr-2 text-red-500" />
                                                            Not Included
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {keralaPkg.exclusions?.map((item, i) => (
                                                                <li key={i} className="flex">
                                                                    <X className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="itinerary" className="mt-0">
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>

                                                {/* Day navigation buttons */}
                                                <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 no-scrollbar">
                                                    {keralaPkg.itinerary.map((day, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => {
                                                                setSelectedDay(day.day);
                                                                scrollToDay(day.day);
                                                            }}
                                                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDay === day.day
                                                                ? "bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white"
                                                                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                                                }`}
                                                        >
                                                            Day {day.day}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Timeline view with collapsible content */}
                                                <div className="relative pb-6">
                                                    <div className="absolute left-4 md:left-[3.5rem] top-0 bottom-0 w-0.5 bg-[#017ae3]"></div>

                                                    <div className="space-y-6">
                                                        {keralaPkg.itinerary.map((day, i) => {
                                                            const isExpanded = expandedDays.includes(day.day);

                                                            return (
                                                                <div
                                                                    key={i}
                                                                    id={`day-${day.day}`}
                                                                    className="relative pl-12 md:pl-20 scroll-mt-24"
                                                                >
                                                                    {/* Day number marker */}
                                                                    <div
                                                                        className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center text-white font-bold z-10 cursor-pointer"
                                                                        onClick={() => toggleDayExpansion(day.day)}
                                                                    >
                                                                        {day.day}
                                                                    </div>

                                                                    {/* Content card */}
                                                                    <div
                                                                        className={`bg-white rounded-xl shadow-sm overflow-hidden ${selectedDay === day.day ? 'ring-2 ring-[#017ae3]/20' : ''}`}
                                                                        onClick={() => toggleDayExpansion(day.day)}
                                                                    >
                                                                        {/* Add image section */}
                                                                        {day.image && (
                                                                            <div className="relative h-48 w-full">
                                                                                <Image
                                                                                    src={day.image}
                                                                                    alt={`Day ${day.day} - ${day.title}`}
                                                                                    fill
                                                                                    className="object-cover"
                                                                                />
                                                                            </div>
                                                                        )}

                                                                        <div className="p-5">
                                                                            <div className="flex justify-between items-center">
                                                                                <h3 className="text-lg font-bold">Day {day.day}: {day.title}</h3>
                                                                                <button
                                                                                    className="text-gray-400 hover:text-gray-600"
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        toggleDayExpansion(day.day);
                                                                                    }}
                                                                                >
                                                                                    {isExpanded ? (
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                                                                        </svg>
                                                                                    ) : (
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                                        </svg>
                                                                                    )}
                                                                                </button>
                                                                            </div>

                                                                            {isExpanded && (
                                                                                <>
                                                                                    <p className="text-gray-700 mt-3 mb-4">{day.description}</p>
                                                                                </>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="accommodation" className="mt-0">
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Your Accommodations</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {keralaPkg.hotelDetails.map((hotel, index) => (
                                                        <Card key={index} className="overflow-hidden border-0 shadow-md">
                                                            <div className="p-4">
                                                                <h3 className="font-bold text-lg">{hotel.hotel}</h3>
                                                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                                                    <MapPin className="h-3 w-3 mr-1" />
                                                                    <span>{hotel.city}</span>
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex">
                                                                        {[...Array(4)].map((_, i) => (
                                                                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                                                        ))}
                                                                    </div>
                                                                    <span className="text-sm font-medium">{hotel.roomType}</span>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* FAQ Section in Accommodation Tab */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                                                <Accordion type="single" collapsible className="w-full">
                                                    {[
                                                        {
                                                            question: "What is the hotel check-in and check-out time?",
                                                            answer: "Standard check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in or late check-out may be available upon request, subject to availability."
                                                        },
                                                        {
                                                            question: "Is breakfast included at all hotels?",
                                                            answer: "Yes, daily breakfast is included at all hotels in this package."
                                                        },
                                                        {
                                                            question: "Are the hotels near major attractions?",
                                                            answer: "Yes, we select hotels that offer convenient access to major attractions like tea gardens, backwaters, and wildlife sanctuaries in Kerala."
                                                        },
                                                        {
                                                            question: "Is the houseboat accommodation safe?",
                                                            answer: "Absolutely! Our houseboats are well-maintained with safety equipment, experienced crew, and all modern amenities while maintaining traditional charm."
                                                        },
                                                    ].map((faq, index) => (
                                                        <AccordionItem key={index} value={`faq-${index}`}>
                                                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                                            <AccordionContent>
                                                                <p className="text-gray-600">{faq.answer}</p>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <Card className="border-0 shadow-lg overflow-hidden">
                                    <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-6 text-white">
                                        <div className="text-3xl font-bold mb-1">₹{keralaPkg.amount?.toLocaleString('en-IN')}</div>
                                        <div className="flex items-baseline">
                                            <span className="text-xl line-through text-white/80">₹{Math.round(keralaPkg.amount * 1.2).toLocaleString('en-IN')}</span>
                                            <span className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded">Save 20%</span>
                                        </div>
                                        <div className="text-sm mt-1">per person, based on double occupancy</div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div className="flex justify-between border-b pb-3">
                                            <div className="font-medium">Duration:</div>
                                            <div>{keralaPkg.nights} nights / {keralaPkg.days} days</div>
                                        </div>

                                        <div className="flex justify-between border-b pb-3">
                                            <div className="font-medium">Availability:</div>
                                            <div className="text-[#017ae3]">Available</div>
                                        </div>

                                        <div className="flex justify-between border-b pb-3">
                                            <div className="font-medium">Group Size:</div>
                                            <div>Max 15 people</div>
                                        </div>

                                        <div className="flex justify-between border-b pb-3 mb-4">
                                            <div className="font-medium">Languages:</div>
                                            <div>English, Hindi, Malayalam</div>
                                        </div>

                                        <Button
                                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition text-lg py-6"
                                            onClick={() => setIsBookingModalOpen(true)}
                                        >
                                            Book Now
                                        </Button>

                                        <a
                                            href="tel:+919310271488"
                                            className="mt-4 bg-blue-50 hover:bg-blue-100 transition-colors p-4 rounded-md flex items-center cursor-pointer no-underline"
                                        >
                                            <Phone className="h-5 w-5 text-[#017ae3] mr-3 flex-shrink-0" />
                                            <div>
                                                <div className="font-medium text-blue-800">Need assistance with booking?</div>
                                                <div className="flex items-center text-[#017ae3]">
                                                    <span className="font-semibold">+91 9310 271 488</span>
                                                    <span className="ml-2 text-xs bg-[#017ae3] text-white px-2 py-0.5 rounded-full">Tap to call</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </Card>

                                {/* Weather Widget */}
                                <Card className="border-0 shadow-lg mt-6 overflow-hidden">
                                    <div className="p-4 border-b">
                                        <h3 className="font-bold text-lg">Weather in Kerala</h3>
                                    </div>
                                    <div className="p-6 grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-amber-500 mb-1">Sunrise</div>
                                            <div className="font-medium">6:00 AM</div>
                                        </div>
                                        <div>
                                            <div className="text-amber-500 mb-1">Sunset</div>
                                            <div className="font-medium">6:30 PM</div>
                                        </div>
                                        <div>
                                            <div className="text-blue-500 mb-1">Humidity</div>
                                            <div className="font-medium">75%</div>
                                        </div>
                                        <div>
                                            <div className="text-[#00f6ff] mb-1">Wind</div>
                                            <div className="font-medium">5 km/h</div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Additional sections for culture, sightseeing spots, local food */}
                    {keralaPkg.sightseeingSpots && keralaPkg.sightseeingSpots.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">Must-Visit Sightseeing Spots</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {keralaPkg.sightseeingSpots.map((spot, index) => (
                                    <Card key={index} className="overflow-hidden border-0 shadow-lg">
                                        <div className="relative h-48">
                                            <Image
                                                src={spot.image}
                                                alt={spot.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg mb-2">{spot.name}</h3>
                                            <p className="text-gray-600 text-sm">{spot.description}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Local Food Section */}
                    {keralaPkg.localFood && keralaPkg.localFood.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">Taste of Kerala</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {keralaPkg.localFood.map((food, index) => (
                                    <Card key={index} className="overflow-hidden border-0 shadow-lg">
                                        <div className="flex">
                                            <div className="relative w-1/3 h-32">
                                                <Image
                                                    src={food.image}
                                                    alt={food.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="p-4 w-2/3">
                                                <h3 className="font-bold text-lg mb-2">{food.name}</h3>
                                                <p className="text-gray-600 text-sm mb-2">{food.description}</p>
                                                {food.where && (
                                                    <p className="text-[#017ae3] text-xs font-medium">{food.where}</p>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Culture Section */}
                    {keralaPkg.culture && keralaPkg.culture.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">Kerala Culture & Heritage</h2>
                            <div
                                ref={cultureScrollRef}
                                className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar"
                            >
                                {keralaPkg.culture.map((item, index) => (
                                    <Card key={index} className="flex-shrink-0 w-80 overflow-hidden border-0 shadow-lg">
                                        <div className="relative h-48">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Booking Bar */}
                {isMobile && !isBookingModalOpen && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between z-[9999]">
                        <div>
                            <div className="text-sm">Per Person</div>
                            <div className="font-bold text-xl">₹{keralaPkg?.amount?.toLocaleString('en-IN')}</div>
                        </div>
                        <Button
                            className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition"
                            onClick={() => setIsBookingModalOpen(true)}
                        >
                            Book Now
                        </Button>
                    </div>
                )}

                {/* Booking Modal */}
                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={keralaPkg?.packageName}
                    price={keralaPkg?.amount}
                    dates={`${keralaPkg?.dateStart} - ${keralaPkg?.dateEnd}`}
                />

                {/* Gallery Modal */}
                {isGalleryModalOpen && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
                        <div className="relative w-full max-w-[90vh] mx-auto">
                            <button
                                onClick={() => setIsGalleryModalOpen(false)}
                                className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all"
                                aria-label="Close gallery"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            <div className="relative aspect-square w-full">
                                <Image
                                    src={getAllImages()[currentGalleryIndex] || '/webImage/kerala/mobile/kerala1.jpg'}
                                    alt={`Gallery image ${currentGalleryIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div>

                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <button
                                    onClick={previousImage}
                                    className="bg-black/30 hover:bg-black/50 p-2 rounded-full ml-2 md:ml-4 text-white transition-all"
                                    aria-label="Previous image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <button
                                    onClick={nextImage}
                                    className="bg-black/30 hover:bg-black/50 p-2 rounded-full mr-2 md:mr-4 text-white transition-all"
                                    aria-label="Next image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm md:text-base">
                                {currentGalleryIndex + 1} / {getAllImages().length}
                            </div>
                        </div>
                    </div>
                )}

                <style jsx global>{`
                    /* Prevent horizontal scroll */
                    html, body {
                        overflow-x: hidden;
                        max-width: 100vw;
                    }
                    
                    /* Container constraints */
                    * {
                        box-sizing: border-box;
                    }
                    
                    .no-scrollbar {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;  /* Chrome, Safari, Opera */
                    }
                    
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    
                    .animate-scroll {
                        animation: scroll 50s linear infinite;
                    }
                    
                    .line-clamp-3 {
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    
                    /* Mobile responsive containers */
                    @media (max-width: 768px) {
                        .container, .max-w-7xl {
                            max-width: 100vw;
                            padding-left: 1rem;
                            padding-right: 1rem;
                        }
                    }
                `}</style>
            </div>
        </PageWrapper>
    );
} 