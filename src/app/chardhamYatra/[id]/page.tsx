'use client';

import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import { chardhamData } from '../data';
import { notFound } from 'next/navigation';
import {
    Calendar, Check, MapPin, Star, Users, X, Camera, Phone,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookingFormModal } from '@/app/components/BookingFormModal';
import { useScroll } from "framer-motion";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

interface PageProps {
    params: Promise<{ id: string; }>
}

export default function ChardhamYatraPackagePage({ params }: PageProps) {
    const { id } = use(params);

    const chardhamPkg = Object.values(chardhamData).find(p => p.id === id);

    if (!chardhamPkg) {
        notFound();
    }

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedDay, setSelectedDay] = useState(1);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [expandedDays, setExpandedDays] = useState<number[]>([1]);
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

    useScroll();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) =>
                prev === (chardhamPkg?.images?.length || 1) - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [chardhamPkg?.images?.length]);

    // Calculate truncated description for "Read More" functionality
    const description = chardhamPkg.description || "";
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

    // Add this new function to get all images from itinerary
    const getAllImages = () => {
        const packageImages = chardhamPkg.images || [];
        return [...new Set([...packageImages])];
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

    // Generate experiences from existing data
    const experiences = [
        { title: "Helicopter Darshan", image: chardhamPkg.images?.[0] || "/UGCImages/chardham/Chardham/1.webp" },
        { title: "VIP Temple Access", image: chardhamPkg.images?.[1] || "/UGCImages/chardham/Chardham/2.webp" },
        { title: "Sacred Rituals", image: chardhamPkg.images?.[2] || "/UGCImages/chardham/Chardham/3.webp" },
        { title: "Mountain Views", image: chardhamPkg.images?.[3] || "/UGCImages/chardham/Chardham/4.webp" },
        { title: "Spiritual Journey", image: chardhamPkg.images?.[4] || "/UGCImages/chardham/Chardham/5.webp" },
        { title: "Holy Dips", image: chardhamPkg.images?.[5] || "/UGCImages/chardham/Chardham/6.webp" },
    ];

    // Generate hotel details if not available
    const hotelDetails = chardhamPkg.hotelDetails || [
        { city: "Barkot (Naugaon)", hotel: `Hotel Mount Memory, Royal Hotel and Restaurant, Shivam Palace (Yamunotri Ji), Or Similar`, roomType: "Standard Budget Hotels" },
        { city: "Uttarkashi", hotel: `Hotel K.P Residency, Oakland Camping, Hotel Divine Palace, Atulya, Or Similar`, roomType: "Standard to Deluxe" },
        {
            city: "Guptkashi", hotel: `Hotel Raj Palace, Hotel Shivaye, Hotel Panchwati, Or Similar`, roomType: "Standard"
        },
        { city: "Pandukeshwar / Badrinath", hotel: `Hotel Neelkanth, Charan Paduka, Or Similar`, roomType: "Standard Pilgrim Hotels" },
        {
            city: "Pipalkoti / Chamoli", hotel: `Heaven Hotel Comfort Inn, New Indarlok, Hotel Brahma Kamal, Hotel Uday Palace, Or Similar`, roomType: "Mid-Range Comfort"
        },
    ];

    return (
        <div className={`relative ${poppins.className}`}>
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full">
                <Image
                    src={chardhamPkg?.images?.[currentImageIndex] || '/default-image.jpg'}
                    alt={chardhamPkg.name}
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
                            <span className="ml-2 text-white font-medium">4.8/5 (67 reviews)</span>
                        </div>

                        {/* Package name */}
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{chardhamPkg.name}</h1>

                        {/* Location */}
                        <div className="flex items-center text-white mb-6">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span className="text-lg">Chardham Yatra</span>
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
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 backdrop-blur-sm border-white/20 text-white rounded-full px-8"
                                onClick={() => setIsGalleryModalOpen(true)}
                            >
                                <Camera className="h-4 w-4 mr-2" /> View All Photos
                            </Button>
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
                            <div className="font-medium text-sm md:text-base">{chardhamPkg.days} days / {chardhamPkg.nights} nights</div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 md:w-auto">
                            <MapPin className="h-6 w-6 mr-3" />
                        </div>
                        <div>
                            <div className="text-sm opacity-80">Location</div>
                            <div className="font-medium text-sm md:text-base">Uttarakhand</div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 md:w-auto">
                            <Users className="h-6 w-6 mr-3" />
                        </div>
                        <div>
                            <div className="text-sm opacity-80">Group Size</div>
                            <div className="font-medium text-sm md:text-base">Group Tour</div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 md:w-auto">
                            <Star className="h-6 w-6 mr-3 text-yellow-400 fill-yellow-400" />
                        </div>
                        <div>
                            <div className="text-sm opacity-80">Rating</div>
                            <div className="font-medium text-sm md:text-base">4.8/5 (67 reviews)</div>
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
                                        {chardhamPkg.id === "chardham-bhakti-yatra-package" && (
                                            <TabsTrigger
                                                value="accommodation"
                                                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white py-2 px-4 md:py-3 md:px-6 flex-shrink-0"
                                            >
                                                Accommodation
                                            </TabsTrigger>
                                        )}
                                    </TabsList>

                                    {/* Tab Content sections */}
                                    <TabsContent value="overview" className="mt-0">
                                        {/* Package Highlights */}
                                        <div className="mb-10">
                                            <h2 className="text-2xl font-bold mb-6">Package Highlights</h2>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {[
                                                    { icon: "🚁", title: "Helicopter Travel", desc: "Skip long treks with helicopter service" },
                                                    { icon: "🕉️", title: "VIP Darshan", desc: "Priority access at all temples" },
                                                    { icon: "🏨", title: "Quality Hotels", desc: `${chardhamPkg.nights} nights accommodation` },
                                                    { icon: "🚕", title: "All Transfers", desc: "Airport and ground transfers included" },
                                                    { icon: "🏔️", title: "Sacred Shrines", desc: "Visit all four holy dhams" },
                                                    { icon: "🙏", title: "Spiritual Guide", desc: "Expert guidance throughout" },
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
                                                                    className="p-0 h-auto text-[#017ae3]"
                                                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                                                >
                                                                    {showFullDescription ? "Show Less" : "Read More ↓"}
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="relative h-full min-h-[250px] md:min-h-0">
                                                        <Image
                                                            src={chardhamPkg?.images?.[1] || '/default-image.jpg'}
                                                            alt="About Chardham"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Experiences You'll Love */}
                                        <div className="mb-10">
                                            <h2 className="text-2xl font-bold mb-6">Experiences You&apos;ll Love</h2>
                                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                                {experiences.map((experience, index) => (
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

                                        {/* Gallery */}
                                        <div className="mb-10">
                                            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                                                {(chardhamPkg?.images || []).slice(0, 6).map((img, i) => (
                                                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                                        <Image
                                                            src={img}
                                                            alt={`Chardham destination image ${i + 1}`}
                                                            fill
                                                            className="object-cover hover:scale-105 transition duration-500"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-4 text-center">
                                                <Button variant="outline" className="text-sm">
                                                    View All Photos ({chardhamPkg?.images?.length || 0})
                                                </Button>
                                            </div>
                                        </div>

                                        {/* What's Included */}
                                        <div className="mb-10">
                                            <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-lg font-medium mb-4 flex items-center">
                                                        <Check className="h-5 w-5 mr-2 text-green-500" />
                                                        Included in Your Package
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {chardhamPkg.inclusions?.map((item, i) => (
                                                            <li key={i} className="flex">
                                                                <Check className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
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
                                                        {chardhamPkg.exclusions?.map((item, i) => (
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
                                            {chardhamPkg.itinerary && chardhamPkg.itinerary.length > 1 && (
                                                <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 no-scrollbar">
                                                    {chardhamPkg.itinerary.map((day, i) => (
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
                                            )}

                                            {/* Timeline view with collapsible content */}
                                            <div className="relative pb-6">
                                                {chardhamPkg.itinerary && chardhamPkg.itinerary.length > 1 && (
                                                    <div className="absolute left-4 md:left-[3.5rem] top-0 bottom-0 w-0.5 bg-[#017ae3]"></div>
                                                )}

                                                <div className="space-y-6">
                                                    {chardhamPkg.itinerary?.map((day, i) => {
                                                        const isExpanded = expandedDays.includes(day.day);

                                                        return (
                                                            <div
                                                                key={i}
                                                                id={`day-${day.day}`}
                                                                className={`relative ${chardhamPkg.itinerary && chardhamPkg.itinerary.length > 1 ? 'pl-12 md:pl-20' : ''} scroll-mt-24`}
                                                            >
                                                                {/* Day number marker */}
                                                                {chardhamPkg.itinerary && chardhamPkg.itinerary.length > 1 && (
                                                                    <div
                                                                        className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center text-white font-bold z-10 cursor-pointer"
                                                                        onClick={() => toggleDayExpansion(day.day)}
                                                                    >
                                                                        {day.day}
                                                                    </div>
                                                                )}

                                                                {/* Content card */}
                                                                <div
                                                                    className={`bg-white rounded-xl shadow-sm overflow-hidden ${selectedDay === day.day ? 'ring-2 ring-[#017ae3]/20' : ''}`}
                                                                    onClick={() => toggleDayExpansion(day.day)}
                                                                >
                                                                    {/* Add image section if available */}
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
                                                                            {chardhamPkg.itinerary && chardhamPkg.itinerary.length > 1 && (
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
                                                                            )}
                                                                        </div>

                                                                        {(isExpanded || (chardhamPkg.itinerary && chardhamPkg.itinerary.length === 1)) && (
                                                                            <p className="text-gray-700 mt-3 mb-4">{day.description}</p>
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

                                    {chardhamPkg.id === "chardham-bhakti-yatra-package" && (
                                        <TabsContent value="accommodation" className="mt-0">
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Your Accommodations</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {hotelDetails.map((hotel, index) => (
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
                                                            question: "What is the helicopter weight limit?",
                                                            answer: "Maximum 5 kg baggage per passenger is allowed. Excess baggage charges apply for overweight luggage."
                                                        },
                                                        {
                                                            question: "Are VIP darshans guaranteed?",
                                                            answer: "VIP darshans are arranged as per temple authorities and government guidelines. Priority access is provided wherever possible."
                                                        },
                                                        {
                                                            question: "What happens in case of bad weather?",
                                                            answer: "Helicopter operations are subject to weather conditions. In case of cancellation due to weather, alternative arrangements or rescheduling will be provided."
                                                        },
                                                        {
                                                            question: "Is medical support available during the tour?",
                                                            answer: "Basic medical support is available, but we recommend carrying personal medicines and having a medical check-up before the journey due to high altitudes."
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
                                    )}
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Card className="border-0 shadow-lg overflow-hidden">
                                <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-6 text-white">
                                    <div className="text-3xl font-bold mb-1">₹{chardhamPkg.amount?.toLocaleString('en-IN')}</div>
                                    <div className="flex items-baseline">
                                        <span className="text-xl line-through text-white/80">₹{Math.round((chardhamPkg.amount || 0) * 1.3).toLocaleString('en-IN')}</span>
                                        <span className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded">Save 30%</span>
                                    </div>
                                    <div className="text-sm mt-1">per person, based on sharing</div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between border-b pb-3">
                                        <div className="font-medium">Duration:</div>
                                        <div>{chardhamPkg.nights} nights / {chardhamPkg.days} days</div>
                                    </div>

                                    <div className="flex justify-between border-b pb-3">
                                        <div className="font-medium">Departure:</div>
                                        <div>{chardhamPkg.flightFrom || 'Dehradun'}</div>
                                    </div>

                                    <div className="flex justify-between border-b pb-3">
                                        <div className="font-medium">Season:</div>
                                        <div>{chardhamPkg.dateStart} - {chardhamPkg.dateEnd}</div>
                                    </div>

                                    <div className="flex justify-between border-b pb-3 mb-4">
                                        <div className="font-medium">Group:</div>
                                        <div>{chardhamPkg.groupDetails?.pax || 'Group Tour'}</div>
                                    </div>

                                    <Button
                                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition text-lg py-6"
                                        onClick={() => setIsBookingModalOpen(true)}
                                    >
                                        Book Now
                                    </Button>

                                    <a
                                        href="tel:+919919111911"
                                        className="mt-4 bg-blue-50 hover:bg-blue-100 transition-colors p-4 rounded-md flex items-center cursor-pointer no-underline"
                                    >
                                        <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium text-blue-800">Need assistance with booking?</div>
                                            <div className="flex items-center text-blue-600">
                                                <span className="font-semibold">+91 9919 111 911</span>
                                                <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Tap to call</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Card>

                            {/* Important Info Widget */}
                            <Card className="border-0 shadow-lg mt-6 overflow-hidden">
                                <div className="p-4 border-b">
                                    <h3 className="font-bold text-lg">Important Information</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start">
                                        <div className="text-orange-500 mr-3 mt-1">⚠️</div>
                                        <div>
                                            <div className="font-medium">Baggage Limit</div>
                                            <div className="text-sm text-gray-600">5kg per person maximum</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-blue-500 mr-3 mt-1">🚁</div>
                                        <div>
                                            <div className="font-medium">Weather Dependent</div>
                                            <div className="text-sm text-gray-600">Subject to weather conditions</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-green-500 mr-3 mt-1">✅</div>
                                        <div>
                                            <div className="font-medium">VIP Access</div>
                                            <div className="text-sm text-gray-600">Priority darshan included</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Booking Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between z-[9999]">
                <div>
                    <div className="text-sm">Per Person</div>
                    <div className="font-bold text-xl">₹{chardhamPkg?.amount?.toLocaleString('en-IN')}</div>
                </div>
                <Button
                    className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition"
                    onClick={() => setIsBookingModalOpen(true)}
                >
                    Book Now
                </Button>
            </div>

            {/* Booking Modal */}
            <BookingFormModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                destinationName={chardhamPkg?.name}
                price={chardhamPkg?.amount}
                dates={`${chardhamPkg?.dateStart} - ${chardhamPkg?.dateEnd}`}
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
                                src={getAllImages()[currentGalleryIndex]}
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
    );
} 