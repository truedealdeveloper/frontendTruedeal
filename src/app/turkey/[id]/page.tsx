'use client';

import { use, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { turkeyPackages } from '../data';
import { notFound, usePathname } from 'next/navigation';
import { 
  Calendar, MapPin, Star, Users, X, Camera,
  Phone,
  Check,
  ChevronUp,
  ChevronDown,
  Building2,
  Utensils,
  Hotel,
  Plane,
  Palmtree,
  Landmark,
  Sun,
  Sunset,
  Droplets,
  Wind,
  Share2,
  ImageIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookingFormModal } from '@/app/components/BookingFormModal';
import {  useScroll} from "framer-motion";
import { Poppins } from 'next/font/google';
import {PageWrapper} from '@/components/page-wrapper';
import { useMobile } from '@/hooks/use-mobile';
import TurkeyPackages from '../page';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

interface PageProps {
    params: Promise<{ id: string; }>
}

export default function TurkeyPackagePage({ params }: PageProps) {
    const { id } = use(params);
    const turkeyPkg = Object.values(turkeyPackages).find(p => p.id === id);
    const isMobile = useMobile();
    const pathname = usePathname();

    if (!turkeyPkg) {
        notFound();
    }

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedDay, setSelectedDay] = useState(1);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [expandedDays, setExpandedDays] = useState<number[]>([1]);
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

    const overviewRef = useRef<HTMLDivElement>(null);
    const itineraryRef = useRef<HTMLDivElement>(null);
    const inclusionsRef = useRef<HTMLDivElement>(null);
    const exclusionsRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLDivElement>(null);
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

            for (const section of sections) {
                if (section.ref.current) {
                    const rect = section.ref.current.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
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
                prev === (turkeyPkg?.images?.length || 1) - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [turkeyPkg?.images?.length]);

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
    const description = turkeyPkg.description || "";
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
        const itineraryImages = turkeyPkg.itinerary.map(day => day.image);
        const packageImages = turkeyPkg.images || [];
        return [...new Set([...packageImages, ...itineraryImages])];
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

    // Add this function to handle Instagram story sharing
    const handleShareToInstagram = () => {
        // Get the full URL of the current page
        const fullUrl = `${window.location.origin}${pathname}`;
        
        // Instagram story sharing URL with mention
        const instagramUrl = `instagram://story-camera?text=${encodeURIComponent(fullUrl)}&hashtags=TurkeyJourney,TRExplorer&mention=itstruedeal`;
        
        // Fallback URL for desktop or if Instagram app is not installed
        const webUrl = `https://www.instagram.com/itstruedeal`;
        
        try {
            window.location.href = instagramUrl;
            // If Instagram app is not installed, this will fail and catch block will execute
            setTimeout(() => {
                window.location.href = webUrl;
            }, 2000);
        } catch {
            window.location.href = webUrl;
        }
    };

    // Add this function to handle gallery view
    const openGallery = (index: number = 0) => {
        setCurrentGalleryIndex(index);
        setIsGalleryModalOpen(true);
    };

    return (
        <PageWrapper>
            <div className={`relative ${poppins.className}`}>
                {/* Hero Section */}
                <div className="relative h-[70vh] w-full">
                    <Image
                        src={turkeyPkg?.images?.[currentImageIndex] || '/default-image.jpg'}
                        alt={turkeyPkg.packageName}
                        fill
                        className="object-cover brightness-[0.85]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                        <div className="max-w-7xl w-full pl-0 md:pl-12  relative top-12">
                            {/* Rating display */}
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(4.8) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                                ))}
                                <span className="ml-2 text-white font-medium">4.8/5 (58 reviews)</span>
                            </div>
                            
                            {/* Package name */}
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{turkeyPkg.packageName}</h1>
                            
                            {/* Location */}
                            <div className="flex items-center text-white mb-6">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span className="text-lg">Turkey</span>
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
                                <div className="font-medium text-sm md:text-base">{turkeyPkg.days} days / {turkeyPkg.nights} nights</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 md:w-auto">
                                <MapPin className="h-6 w-6 mr-3" />
                            </div>
                            <div>
                                <div className="text-sm opacity-80">Location</div>
                                <div className="font-medium text-sm md:text-base">Entire Turkey</div>
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 md:w-auto">
                                <Users className="h-6 w-6 mr-3" />
                            </div>
                            <div>
                                <div className="text-sm opacity-80">Group Size</div>
                                <div className="font-medium text-sm md:text-base">Max 20 people</div>
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
                        <div className="lg:col-span-2">
                            {/* Make tabs sticky on scroll */}
                            <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                                <div className="max-w-7xl mx-auto px-4">
                                    <Tabs defaultValue="overview" className="w-full">
                                        <TabsList className="w-full bg-gray-100 my-4 rounded-lg overflow-x-auto flex no-scrollbar">
                                            <TabsTrigger 
                                                value="overview"
                                                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff]  data-[state=active]:text-white  flex-shrink-0"
                                            >
                                                Overview
                                            </TabsTrigger>
                                            
                                            <TabsTrigger 
                                                value="itinerary"
                                                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white  flex-shrink-0"
                                            >
                                                Itinerary
                                            </TabsTrigger>
                                            <TabsTrigger 
                                                value="accommodation"
                                                className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#017ae3] data-[state=active]:to-[#00f6ff] data-[state=active]:text-white flex-shrink-0"
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
                                                        { icon: <Building2 className="h-6 w-6 text-blue-600" />, title: "Complete Turkey", desc: "Experience the entire country" },
                                                        { icon: <Utensils className="h-6 w-6 text-blue-600" />, title: "Local Cuisine", desc: "Experience Turkey's food culture" },
                                                        { icon: <Hotel className="h-6 w-6 text-blue-600" />, title: "Quality Hotels", desc: `${turkeyPkg.nights} nights accommodation` },
                                                        { icon: <Plane className="h-6 w-6 text-blue-600" />, title: "Airport Transfers", desc: "Convenient transport included" },
                                                        { icon: <Palmtree className="h-6 w-6 text-blue-600" />, title: "Island Visits", desc: "Explore beautiful beaches and more" },
                                                        { icon: <Landmark className="h-6 w-6 text-blue-600" />, title: "Cultural Tours", desc: "Unique historical experiences" },
                                                    ].map((highlight, index) => (
                                                        <Card key={index} className="p-4 border border-gray-100 shadow-sm hover:shadow-md transition group">
                                                            <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                                                                {highlight.icon}
                                                            </div>
                                                            <h3 className="font-medium text-gray-900">{highlight.title}</h3>
                                                            <p className="text-sm text-gray-600 mt-1">{highlight.desc}</p>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* About This Package */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Discover Entire Turkey</h2>
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
                                                                src={turkeyPkg?.images?.[1] || '/default-image.jpg'}
                                                                alt="About Turkey"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Available Dates & Flights */}
                                            {turkeyPkg.batchDetails && (
                                                <div className="mb-10">
                                                    <h2 className="text-2xl font-bold mb-6">Available Dates & Flights</h2>
                                                    
                                                    {/* Current Batch Alert */}
                                                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                                                        <div className="flex items-center">
                                                            <svg className="h-5 w-5 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="font-medium text-amber-800">
                                                                Only {turkeyPkg.batchDetails.remainingSlots} slots remaining for {turkeyPkg.batchDetails.currentBatch} batch!
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Monthly Batches */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                        {turkeyPkg.batchDetails.monthlyBatches.map((batch, index) => (
                                                            <Card key={index} className="border border-gray-200">
                                                                <div className="p-4">
                                                                    <div className="flex justify-between items-center mb-3">
                                                                        <h3 className="font-bold text-lg">{batch.month} 2025</h3>
                                                                        <span className="text-sm text-gray-500">
                                                                            {batch.availableSeats} seats left
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex gap-2">
                                                                        {batch.dates.map((date, i) => (
                                                                            <span
                                                                                key={i}
                                                                                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                                                                            >
                                                                                {date}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        ))}
                                                    </div>

                                                    {/* Flight Details */}
                                                    {turkeyPkg.flightDetails && (
                                                        <div className="space-y-4">
                                                            <h3 className="text-xl font-semibold mb-4">Flight Information</h3>
                                                            
                                                            {/* Delhi to Turkey */}
                                                            <Card className="overflow-hidden">
                                                                <div className="bg-gradient-to-r from-[#017ae3]/10 to-[#00f6ff]/10 p-4">
                                                                    <div className="flex items-center justify-between mb-2">
                                                                        <h3 className="font-semibold text-lg">Direct Flight</h3>
                                                                        <span className="text-sm text-gray-600">{turkeyPkg.flightDetails.airlines[0].duration}</span>
                                                                    </div>
                                                                    <div className="text-sm text-gray-600">{turkeyPkg.flightDetails.airlines[0].name}</div>
                                                                </div>
                                                                <div className="p-6">
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="text-center flex-1">
                                                                            <div className="text-lg font-bold">{turkeyPkg.flightDetails.airlines[0].departureCity}</div>
                                                                            <div className="text-sm text-gray-500">Departure</div>
                                                                        </div>
                                                                        
                                                                        <div className="flex-1 px-4 flex items-center justify-center">
                                                                            <div className="w-full relative">
                                                                                <div className="absolute w-full top-1/2 h-0.5 bg-gray-200"></div>
                                                                                <Plane className="h-5 w-5 text-blue-600 relative -top-[10px] animate-pulse" />
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="text-center flex-1">
                                                                            <div className="text-lg font-bold">{turkeyPkg.flightDetails.airlines[0].arrivalCity}</div>
                                                                            <div className="text-sm text-gray-500">Arrival</div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className="mt-4 pt-4 border-t">
                                                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                                                            <div className="flex items-center">
                                                                                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                                                                <span>Direct Flight Available</span>
                                                                            </div>
                                                                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                                                                {turkeyPkg.flightDetails.airlines[0].duration} Duration
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Experiences You'll Love */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Experiences You&apos;ll Love</h2>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                                    {turkeyPkg.experiences.map((experience, index) => (
                                                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm group">
                                                            <div className="relative h-48">
                                                                <Image
                                                                    src={experience.image}
                                                                    alt={experience.title}
                                                                    fill
                                                                    className="object-cover transition duration-500 group-hover:scale-105"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                            </div>
                                                            <div className="p-4">
                                                                <h3 className="font-medium text-center">{experience.title}</h3>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Share Your Journey */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Share Your Journey</h2>
                                                <div className="bg-gradient-to-r from-[#017ae3]/10 to-[#00f6ff]/10 rounded-xl p-6 md:p-8">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                                        <div>
                                                            <h3 className="text-xl font-bold mb-3">Create Memories Together</h3>
                                                            <p className="text-gray-600 mb-4">
                                                                Tag your photos with <span className="font-semibold text-[#017ae3]">#TurkeyJourney</span> or <span className="font-semibold text-[#017ae3]">#TRExplorer</span> on social media and join our travel community. Your photos might be featured on our social channels!
                                                            </p>
                                                            <div className="flex space-x-4">
                                                                <Button className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition"
                                                                    onClick={handleShareToInstagram}
                                                                >
                                                                    <Share2 className="h-4 w-4 mr-2" />
                                                                    Share Now
                                                                </Button>
                                                                <Button variant="outline" onClick={() => openGallery(0)}>
                                                                    <ImageIcon className="h-4 w-4 mr-2" />
                                                                    View Gallery
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            {[1,2,3,4,5].map((num) => (
                                                                <div key={num} className="relative aspect-square rounded-lg overflow-hidden group">
                                                                    <Image
                                                                        src={`/UGCImages/turkey/turkey2/${num}.png`}
                                                                        alt={`User shared photo ${num}`}
                                                                        fill
                                                                        className="object-cover transition duration-300 group-hover:scale-110"
                                                                    />
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Gallery */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                    {(turkeyPkg?.images || []).slice(0, 6).map((img, i) => (
                                                        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                                            <Image
                                                                src={img}
                                                                alt={`Turkey destination image ${i + 1}`}
                                                                fill
                                                                className="object-cover hover:scale-105 transition duration-500"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <Button 
                                                        variant="outline" 
                                                        className="text-sm"
                                                        onClick={() => openGallery(0)}
                                                    >
                                                        View All Photos ({turkeyPkg?.images?.length || 0})
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* What's Included */}
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                                        <h3 className="text-lg font-medium mb-4 flex items-center text-green-600">
                                                            <Check className="h-6 w-6 mr-2 text-green-600" />
                                                            Included in Your Package
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {turkeyPkg.inclusions?.map((item, i) => (
                                                                <li key={i} className="flex">
                                                                    <div className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center mr-3 flex-shrink-0">
                                                                        <Check className="h-3 w-3 text-green-600" />
                                                                    </div>
                                                                    <span className="text-gray-700">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        
                                                        {/* Added image for inclusions */}
                                                        <div className="mt-6 relative h-40 rounded-lg overflow-hidden">
                                                            <Image 
                                                                src={turkeyPkg?.images?.[2] || '/default-image.jpg'}
                                                                alt="Included services"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                                <span className="text-white font-medium text-sm">All services included in your package</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                                        <h3 className="text-lg font-medium mb-4 flex items-center text-red-600">
                                                            <X className="h-6 w-6 mr-2 text-red-600" />
                                                            Not Included
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {turkeyPkg.exclusions?.map((item, i) => (
                                                                <li key={i} className="flex">
                                                                    <div className="h-5 w-5 rounded-full bg-red-50 flex items-center justify-center mr-3 flex-shrink-0">
                                                                        <X className="h-3 w-3 text-red-600" />
                                                                    </div>
                                                                    <span className="text-gray-700">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        
                                                        {/* Added image for exclusions */}
                                                        <div className="mt-6 relative h-40 rounded-lg overflow-hidden">
                                                            <Image 
                                                                src={turkeyPkg?.images?.[3] || '/default-image.jpg'}
                                                                alt="Additional expenses"
                                                                fill
                                                                className="object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                                <span className="text-white font-medium text-sm">Additional expenses to consider</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Flight Details Section */}
                                            {turkeyPkg.flightDetails && (
                                                <div className="mb-10">
                                                    <h2 className="text-2xl font-bold mb-6">Flight Information</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        {turkeyPkg.flightDetails.airlines.map((flight, index) => (
                                                            <Card key={index} className="overflow-hidden">
                                                                <div className="bg-gradient-to-r from-[#017ae3]/10 to-[#00f6ff]/10 p-4">
                                                                    <div className="flex items-center justify-between mb-2">
                                                                        <h3 className="font-semibold text-lg">Direct Flight</h3>
                                                                        <span className="text-sm text-gray-600">{flight.duration}</span>
                                                                    </div>
                                                                    <div className="text-sm text-gray-600">{flight.name}</div>
                                                                </div>
                                                                <div className="p-6">
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="text-center flex-1">
                                                                            <div className="text-lg font-bold">{flight.departureCity}</div>
                                                                            <div className="text-sm text-gray-500">Departure</div>
                                                                        </div>
                                                                        
                                                                        <div className="flex-1 px-4 flex items-center justify-center">
                                                                            <div className="w-full relative">
                                                                                <div className="absolute w-full top-1/2 h-0.5 bg-gray-200"></div>
                                                                                <Plane className="h-5 w-5 text-blue-600 relative -top-[10px] animate-pulse" />
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div className="text-center flex-1">
                                                                            <div className="text-lg font-bold">{flight.arrivalCity}</div>
                                                                            <div className="text-sm text-gray-500">Arrival</div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className="mt-4 pt-4 border-t">
                                                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                                                            <div className="flex items-center">
                                                                                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                                                                <span>Direct Flight Available</span>
                                                                            </div>
                                                                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                                                                {flight.duration} Duration
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        ))}
                                                    </div>
                                                    
                                                    {/* Additional Flight Information */}
                                                    <div className="mt-6 bg-gray-50 rounded-xl p-6">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                            <div className="flex items-start space-x-3">
                                                                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                                    <Check className="h-4 w-4 text-green-600" />
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-medium">Direct Flights</h4>
                                                                    <p className="text-sm text-gray-600">No layovers, straight to your destination</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="flex items-start space-x-3">
                                                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                                                    <Plane className="h-4 w-4 text-blue-600" />
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-medium">Major Airlines</h4>
                                                                    <p className="text-sm text-gray-600">Flying with trusted carriers</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="flex items-start space-x-3">
                                                                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                                                    <Calendar className="h-4 w-4 text-amber-600" />
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-medium">Flexible Dates</h4>
                                                                    <p className="text-sm text-gray-600">Multiple departure options</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </TabsContent>
                                        
                                        <TabsContent value="itinerary" className="mt-0">
                                            <div className="mb-10">
                                                <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>
                                                
                                                {/* Day navigation buttons */}
                                                <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 no-scrollbar">
                                                    {turkeyPkg.itinerary.map((day, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => {
                                                                setSelectedDay(day.day);
                                                                if (!expandedDays.includes(day.day)) {
                                                                    toggleDayExpansion(day.day);
                                                                }
                                                            }}
                                                            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                                                selectedDay === day.day
                                                                    ? "bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white shadow-md"
                                                                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                                            }`}
                                                        >
                                                            Day {day.day}
                                                        </button>
                                                    ))}
                                                </div>
                                                
                                                {/* Timeline view with collapsible content */}
                                                <div className="relative pb-6">
                                                    {/* Timeline vertical line */}
                                                    <div className="absolute left-4 md:left-[3.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#017ae3] to-[#00f6ff]"></div>
                                                    
                                                    {/* Timeline content */}
                                                    <div className="space-y-6">
                                                        {turkeyPkg.itinerary.map((day, i) => {
                                                            const isExpanded = expandedDays.includes(day.day);
                                                            
                                                            return (
                                                                <div key={i} className="relative pl-12 md:pl-20">
                                                                    {/* Day number marker */}
                                                                    <div 
                                                                        className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center text-white font-bold z-10 cursor-pointer shadow-md"
                                                                        onClick={() => toggleDayExpansion(day.day)}
                                                                    >
                                                                        {day.day}
                                                                    </div>
                                                                    
                                                                    {/* Content card */}
                                                                    <div 
                                                                        className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${selectedDay === day.day ? 'ring-2 ring-[#017ae3]/20 shadow-md' : ''}`}
                                                                        onClick={() => toggleDayExpansion(day.day)}
                                                                    >
                                                                        {/* Add image section */}
                                                                        <div className="relative h-48 w-full">
                                                                            <Image
                                                                                src={day.image}
                                                                                alt={`Day ${day.day} - ${day.title}`}
                                                                                fill
                                                                                className="object-cover"
                                                                            />
                                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                                                <div className="text-sm font-medium bg-[#017ae3]/80 inline-block px-2 py-1 rounded-md backdrop-blur-sm">Day {day.day}</div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="p-5">
                                                                            <div className="flex justify-between items-center">
                                                                                <h3 className="text-lg font-bold">{day.title}</h3>
                                                                                <button 
                                                                                    className="text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors"
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        toggleDayExpansion(day.day);
                                                                                    }}
                                                                                >
                                                                                    {isExpanded ? (
                                                                                        <ChevronUp className="h-5 w-5" />
                                                                                    ) : (
                                                                                        <ChevronDown className="h-5 w-5" />
                                                                                    )}
                                                                                </button>
                                                                            </div>
                                                                            
                                                                            {isExpanded && (
                                                                                <>
                                                                                    <p className="text-gray-700 mt-3 mb-4">{day.description}</p>
                                                                                    
                                                                                    <div>
                                                                                        <h4 className="text-[#017ae3] font-medium mb-2">Activities:</h4>
                                                                                        <div className="space-y-2">
                                                                                            {day.title.split(' • ').map((activity, j) => (
                                                                                                <div key={j} className="flex items-center">
                                                                                                    <div className="h-5 w-5 rounded-full bg-[#e6f7ff] flex items-center justify-center mr-3 flex-shrink-0">
                                                                                                        <Check className="h-3 w-3 text-blue-600" />
                                                                                                    </div>
                                                                                                    <span className="text-gray-700 text-sm">{activity}</span>
                                                                                                </div>
                                                                                            ))}
                                                                                        </div>
                                                                                    </div>
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
                                                    {turkeyPkg.hotelDetails.map((hotel, index) => (
                                                        <Card key={index} className="overflow-hidden border-0 shadow-md">
                                                            <div className="p-4">
                                                                <h3 className="font-bold text-lg">{hotel.hotel}</h3>
                                                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                                                    <MapPin className="h-3 w-3 mr-1" />
                                                                    <span>{hotel.city}</span>
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex">
                                                                        {[...Array(5)].map((_, i) => (
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
                                                            question: "Are the hotels centrally located?",
                                                            answer: "Yes, we select hotels that offer convenient access to major attractions and public transportation."
                                                        },
                                                        {
                                                            question: "Can I request a specific room type?",
                                                            answer: "Yes, you can request specific room preferences such as king bed, twin beds, or connecting rooms during booking. We'll do our best to accommodate your preferences based on availability."
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
                                <Card className="border-0 shadow-xl overflow-hidden">
                                    <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-6 text-white">
                                        <div className="text-3xl font-bold mb-1">₹{turkeyPkg.amount?.toLocaleString('en-IN')}</div>
                                        <div className="flex items-baseline">
                                            <span className="text-xl line-through text-white/80">₹{Math.round(turkeyPkg.amount * 1.3).toLocaleString('en-IN')}</span>
                                            <span className="ml-2 bg-white/20 backdrop-blur-sm text-white text-sm px-2 py-1 rounded">Save 30%</span>
                                        </div>
                                        <div className="text-sm mt-1">per person, based on double occupancy</div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div className="flex justify-between border-b pb-3">
                                            <div className="font-medium">Duration:</div>
                                            <div>{turkeyPkg.nights} nights / {turkeyPkg.days} days</div>
                                        </div>
                                        
                                        <div className="flex justify-between border-b pb-3">
                                            <div className="font-medium">Availability:</div>
                                            <div className="text-green-600 font-medium">Available</div>
                                        </div>
                                        
                                        <div className="flex justify-between border-b pb-3">
                                            <div className="font-medium">Group Size:</div>
                                            <div>Max 12 people</div>
                                        </div>
                                        
                                        <div className="flex justify-between border-b pb-3 mb-4">
                                            <div className="font-medium">Languages:</div>
                                            <div>English, Mandarin</div>
                                        </div>

                                        <Button 
                                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition text-lg py-6 shadow-lg"
                                            onClick={() => setIsBookingModalOpen(true)}
                                        >
                                            Book Now
                                        </Button>

                                        <a 
                                            href="tel:+919919111911" 
                                            className="mt-4 bg-blue-50 hover:bg-blue-100 transition-colors p-4 rounded-md flex items-center cursor-pointer no-underline"
                                        >
                                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                                                <Phone className="h-5 w-5 text-blue-600" />
                                            </div>
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
                                
                                {/* Weather Widget */}
                                <Card className="border-0 shadow-lg mt-6 overflow-hidden">
                                    <div className="p-4 border-b">
                                        <h3 className="font-bold text-lg">Weather in Turkey</h3>
                                    </div>
                                    <div className="p-6 grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-amber-500 mb-1 flex items-center">
                                                <Sun className="h-4 w-4 mr-1" /> Sunrise
                                            </div>
                                            <div className="font-medium">6:15 AM</div>
                                        </div>
                                        <div>
                                            <div className="text-amber-500 mb-1 flex items-center">
                                                <Sunset className="h-4 w-4 mr-1" /> Sunset
                                            </div>
                                            <div className="font-medium">6:30 PM</div>
                                        </div>
                                        <div>
                                            <div className="text-blue-500 mb-1 flex items-center">
                                                <Droplets className="h-4 w-4 mr-1" /> Humidity
                                            </div>
                                            <div className="font-medium">75%</div>
                                        </div>
                                        <div>
                                            <div className="text-blue-500 mb-1 flex items-center">
                                                <Wind className="h-4 w-4 mr-1" /> Wind
                                            </div>
                                            <div className="font-medium">10 km/h</div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Booking Bar */}
                {isMobile && (
                    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between z-[9999]">
                        <div>
                            <div className="text-sm">Per Person</div>
                            <div className="font-bold text-xl">₹{turkeyPkg?.amount?.toLocaleString('en-IN')}</div>
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
                    destinationName={turkeyPkg?.packageName}
                    price={turkeyPkg?.amount}
                    dates={`${turkeyPkg?.dateStart} - ${turkeyPkg?.dateEnd}`}
                />

                {/* Gallery Modal */}
                {isGalleryModalOpen && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
                        <div className="relative w-full max-w-[90vh] mx-auto">
                            {/* Close button */}
                            <button 
                                onClick={() => setIsGalleryModalOpen(false)}
                                className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 p-2 rounded-full transition-all"
                                aria-label="Close gallery"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            
                            {/* Main image */}
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
                            
                            {/* Navigation buttons */}
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
                            
                            {/* Image counter */}
                            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm md:text-base">
                                {currentGalleryIndex + 1} / {getAllImages().length}
                            </div>

                            {/* Thumbnail strip */}
                            <div className="absolute bottom-12 left-0 right-0">
                                <div className="flex justify-center gap-2 overflow-x-auto px-4 no-scrollbar">
                                    {getAllImages().map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentGalleryIndex(idx)}
                                            className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                                                currentGalleryIndex === idx ? 'ring-2 ring-white' : 'opacity-50'
                                            }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='mt-[50px]'>
                    <TurkeyPackages />
                </div>

                <style jsx global>{`
                    .no-scrollbar {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;  /* Chrome, Safari, Opera */
                    }
                `}</style>
            </div>
        </PageWrapper>
    );
}