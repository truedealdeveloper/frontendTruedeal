'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';
import Link from 'next/link';
import { baliPackages, type BaliPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute, FaPlane } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load heavy components only when needed
const TripPlanRequest = dynamic(() => import('../../components/TripPlanRequest'), {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />
});

const BaliReviews = dynamic(() =>
    import('./BaliReviews').then(mod => ({ default: mod.BaliReviews })), {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />
});

// Lazy load the booking modal only when needed
const BookingFormModal = dynamic(() =>
    import('@/app/components/BookingFormModal').then(m => m.BookingFormModal),
    { ssr: false }
);

// Type for flight sector information
interface FlightSector {
    from: string;
    to: string;
    flight: string;
    depart: string;
    arrive: string;
}

// Type for flights information
interface FlightsInfo {
    marketingAirline: string;
    fromCity: string;
    baggage: string;
    notes?: string;
    sectors: FlightSector[];
    fixedDepartureDates: string;
}

// Extended package type with flights
interface BaliPackageWithFlights extends BaliPackage {
    flights?: FlightsInfo;
}

export default function BaliPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedPackageName, setSelectedPackageName] = useState<string>('');
    const [isMuted, setIsMuted] = useState(true);

    // Memoize expensive calculations
    const { packagesWithFlights, packagesWithoutFlights, totalPages } = useMemo(() => {
        const packages = Object.values(baliPackages) as BaliPackageWithFlights[];
        const withFlightsIds = [
            'bali-fixed-departure-with-flights',
            'bali-fixed-departure',
            'bali-diwali-ex-bom'
        ];
        const withFlights = withFlightsIds
            .map((id) => packages.find((p) => p.id === id))
            .filter(Boolean) as BaliPackageWithFlights[];
        const withoutFlights = packages.filter((p) => !withFlightsIds.includes(p.id));

        return {
            packagesWithFlights: withFlights,
            packagesWithoutFlights: withoutFlights,
            totalPages: Math.ceil(withoutFlights.length / 3)
        };
    }, []);

    // Memoize current page packages to avoid recalculation
    const currentPagePackages = useMemo(() => {
        return packagesWithoutFlights.slice(currentPage * 3, (currentPage * 3) + 3);
    }, [packagesWithoutFlights, currentPage]);

    // Memoize static data
    const baliHighlights = useMemo(() => [
        {
            title: "Culture & Traditions",
            image: "/UGCImages/bali/Bali Banner/baliHome/1.png",
            description: "Experience traditional Balinese ceremonies, dance performances, and local customs"
        },
        {
            title: "Cuisine & Dining",
            image: "/UGCImages/bali/Bali Banner/baliHome/2.png",
            description: "Savor authentic Indonesian dishes, fresh seafood, and local delicacies"
        },
        {
            title: "Sacred Temples",
            image: "/UGCImages/bali/Bali Banner/baliHome/3.png",
            description: "Visit ancient temples like Tanah Lot, Uluwatu, and Ulun Danu Beratan"
        },
        {
            title: "Nature & Landscapes",
            image: "/UGCImages/bali/Bali Banner/baliHome/4.png",
            description: "Explore stunning rice terraces, volcanoes, and tropical forests"
        },
        {
            title: "Beach Paradise",
            image: "/UGCImages/bali/Bali Banner/baliHome/5.png",
            description: "Relax on pristine beaches and enjoy world-class water sports"
        },
        {
            title: "Wellness & Spa",
            image: "/UGCImages/bali/Bali Banner/baliHome/6.png",
            description: "Indulge in traditional Balinese spa treatments and yoga retreats"
        }
    ], []);

    const faqs = useMemo(() => [
        {
            question: "What is the best time to visit Bali?",
            answer: "The best time to visit Bali is from May to September when the weather is dry and less humid. December is peak season with higher prices, while January sees more rainfall."
        },
        {
            question: "What activities can I do in Bali?",
            answer: "Bali offers numerous activities including scuba diving, snorkeling, surfing, temple visits, mountain trekking, rice terrace tours, and traditional dance performances."
        },
        {
            question: "Which temples should I visit in Bali?",
            answer: "Must-visit temples include Uluwatu Temple (famous for sunset views and Kecak dance), Tanah Lot Temple, and Ulun Danu Temple."
        },
        {
            question: "What adventure activities are available?",
            answer: "You can enjoy mountain biking, trekking Mount Batur, white water rafting, parasailing, canyon tubing, and various water sports."
        }
    ], []);

    // Memoize event handlers to prevent unnecessary re-renders
    const handlePrevPage = useCallback(() => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    }, []);

    const handleNextPage = useCallback(() => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    }, [totalPages]);

    const toggleMute = useCallback(() => {
        const audio = document.getElementById('baliAudio') as HTMLAudioElement;
        const video = document.getElementById('baliVideo') as HTMLVideoElement;
        if (audio && video) {
            if (isMuted) {
                // When unmuting
                audio.muted = false;
                video.muted = true; // Keep video muted
                audio.play(); // Ensure audio plays
                audio.volume = 0.5; // Set volume to 50%
            } else {
                // When muting
                audio.muted = true;
                audio.pause(); // Pause the audio
            }
            setIsMuted(!isMuted);
        }
    }, [isMuted]);

    const handleEnquireNow = useCallback((packageName: string) => {
        setSelectedPackageName(packageName);
        setIsBookingModalOpen(true);
    }, []);

    const PackageCard = memo(({
        package: baliPackage,
        showFlightsBadge = false,
        onEnquireNow
    }: {
        package: BaliPackageWithFlights,
        showFlightsBadge?: boolean,
        onEnquireNow: (packageName: string) => void
    }) => {
        const renderFixedDates = useCallback((raw?: string) => {
            if (!raw) return null;
            const parts = raw.split('|').map((p) => p.trim()).filter(Boolean);
            return (
                <div className="mt-1 text-xs leading-relaxed text-white/90">
                    {parts.map((line, idx) => (
                        <div key={idx}>{line}</div>
                    ))}
                </div>
            );
        }, []);

        const renderRoute = useCallback(() => {
            const flights = baliPackage.flights;
            if (!flights) return null;
            // Extract first sector as origin for a simple route label
            const first = flights.sectors?.[0];
            const from = flights.fromCity || first?.from || 'India';
            const to = 'Bali';
            return (
                <div className="text-xs text-white/95 font-medium">
                    {from} → {to}
                </div>
            );
        }, [baliPackage.flights]);

        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                {/* Background Image */}
                <Image
                    src={baliPackage.images[0]}
                    alt={baliPackage.packageName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                {/* Price Tag */}
                <div className="absolute top-3 left-0 z-10">
                    <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                        <span className="line-through text-sm mr-2">
                            ₹{(baliPackage.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold">
                            ₹{baliPackage.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1">onwards</span>
                    </div>
                </div>

                {/* Flights Badge */}
                {(showFlightsBadge || baliPackage.flights) && (
                    <>
                        {/* Desktop/Tablet: top-right */}
                        <div className="hidden md:block absolute top-3 right-3 z-10">
                            <div className="bg-white/95 text-gray-900 px-2.5 py-1 rounded-full shadow flex items-center gap-2">
                                <FaPlane className="text-[#017ae3] w-4 h-4" />
                                <span className="text-xs font-semibold whitespace-nowrap">With Flights</span>
                            </div>
                        </div>
                        {/* Mobile: placed a bit lower to avoid price chip overlap */}
                        <div className="md:hidden absolute top-14 left-3 z-10">
                            <div className="bg-white/95 text-gray-900 px-2 py-0.5 rounded-full shadow flex items-center gap-1.5">
                                <FaPlane className="text-[#017ae3] w-3.5 h-3.5" />
                                <span className="text-[10px] font-semibold whitespace-nowrap">With Flights</span>
                            </div>
                        </div>
                    </>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {baliPackage.packageName}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{baliPackage.days}D/{baliPackage.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-yellow-400" />
                            <span>{baliPackage.hotelDetails[0].city}</span>
                        </div>
                        {!baliPackage.flights ? (
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-yellow-400" />
                                <span>{baliPackage.dateStart}</span>
                            </div>
                        ) : (
                            <div className="col-span-2">
                                <div className="flex items-start gap-2">
                                    <FaCalendarAlt className="mt-0.5 text-yellow-400" />
                                    <div className="w-full">
                                        {renderRoute()}
                                        {renderFixedDates(baliPackage.flights?.fixedDepartureDates || baliPackage.dateStart)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <Link href={`/bali/${baliPackage.id}`} className="flex-1">
                            <Button
                                variant="outline"
                                className="w-full bg-white/10"
                            >
                                View Details
                            </Button>
                        </Link>
                        <Button
                            onClick={() => onEnquireNow(baliPackage.packageName)}
                            className="flex-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500 shadow-lg hover:shadow-xl"
                        >
                            Enquire Now
                        </Button>
                    </div>
                </div>
            </div>
        );
    });

    // Set display name for the memoized component
    PackageCard.displayName = 'PackageCard';

    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                {/* Preload critical hero video */}
                <link rel="preload" as="video" href="/UGCImages/bali/balii.mp4" type="video/mp4" />

                {/* Add audio element */}
                <audio
                    id="baliAudio"
                    loop
                    muted
                    preload="none"
                    className="hidden"
                >
                    <source src="/UGCImages/bali/Bali Banner/baliMobile/bali.mp3" type="audio/mp3" />
                </audio>

                {/* Add audio control button */}
                <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 text-white shadow-lg"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                    {isMuted ? (
                        <FaVolumeMute className="w-6 h-6" />
                    ) : (
                        <FaVolumeUp className="w-6 h-6" />
                    )}
                </button>

                <video
                    id="baliVideo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/UGCImages/bali/balii.mp4" type="video/mp4" />
                    {/* Fallback image in case video fails to load */}
                    <Image
                        src="/UGCImages/bali/bali.jpg"
                        alt="Bali Paradise"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                </video>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6"
                        >
                            <span className="block bg-gradient-to-r from-yellow-300 via-pink-200 to-yellow-300 bg-clip-text text-transparent font-serif mt-10 sm:text-3xl md:text-4xl lg:text-5xl">
                                Discover Paradise
                            </span>
                            <span className="block bg-gradient-to-r from-blue-400 via-teal-300 to-blue-400 bg-clip-text text-transparent mt-2">
                                in Bali
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="space-y-4"
                        >
                            <motion.p
                                className="text-xl md:text-2xl text-white/90 font-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                Experience the perfect blend of
                            </motion.p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-yellow-300"
                                >
                                    Culture
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Adventure
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-green-300"
                                >
                                    Relaxation
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    {/* <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Bali Packages
                        </span>
                    </h2> */}
                    {/* With Flights */}
                    {packagesWithFlights.length > 0 && (
                        <div className="mb-10">
                            <div className="flex flex-col items-center mb-4">
                                <div className="flex items-center gap-2">
                                    <FaPlane className="text-[#017ae3] w-5 h-5" />
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                        Fixed Departures With Flights
                                    </h3>
                                </div>
                                {/* <div className="mt-2">
                                    <span className="inline-block rounded-full bg-blue-50 text-[#017ae3] px-3 py-1 text-xs md:text-sm font-semibold tracking-wide">With Flights</span>
                                </div> */}
                            </div>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                    {packagesWithFlights.map((baliPkg) => (
                                        <PackageCard
                                            key={baliPkg.id}
                                            package={baliPkg}
                                            showFlightsBadge
                                            onEnquireNow={handleEnquireNow}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Without Flights (Land Only) */}
                    <div className="relative ">
                        <div className="flex flex-col items-center mb-4">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">Fixed Departures (Without Flights)</h3>
                            <div className="mt-2">
                                <span className="inline-block rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs md:text-sm font-semibold tracking-wide">Land Only • No Flights</span>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Navigation Controls */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
                                <Button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 0}
                                    variant="outline"
                                    className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -ml-5 shadow-lg"
                                >
                                    <FaChevronLeft className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
                                <Button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages - 1}
                                    variant="outline"
                                    className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -mr-5 shadow-lg"
                                >
                                    <FaChevronRight className="w-4 h-4" />
                                </Button>
                            </div>

                            {/* Packages Grid */}
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                    {currentPagePackages.map((baliPkg) => (
                                        <PackageCard
                                            key={baliPkg.id}
                                            package={baliPkg}
                                            onEnquireNow={handleEnquireNow}
                                        />
                                    ))}
                                </div>
                            </div>                            {/* Mobile Navigation */}
                            <div className="mt-3 flex justify-center items-center gap-2 md:hidden">
                                <Button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 0}
                                    variant="outline"
                                    className="rounded-full w-8 h-8 p-0"
                                >
                                    <FaChevronLeft className="w-3 h-3" />
                                </Button>
                                <span className="text-sm text-gray-500">
                                    {currentPage + 1} / {Math.max(1, Math.ceil(packagesWithoutFlights.length / 3))}
                                </span>
                                <Button
                                    onClick={handleNextPage}
                                    disabled={currentPage === Math.ceil(packagesWithoutFlights.length / 3) - 1}
                                    variant="outline"
                                    className="rounded-full w-8 h-8 p-0"
                                >
                                    <FaChevronRight className="w-3 h-3" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bali Highlights Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                Experience the Magic of Bali
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {baliHighlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]"
                                >
                                    <Image
                                        src={highlight.image}
                                        alt={highlight.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                        quality={75}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                                        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Packages Section */}


            <TripPlanRequest />
            <BaliReviews />

            {/* FAQ Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                Frequently Asked Questions
                            </span>
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <button
                                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    >
                                        <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                                        <div className="ml-4 flex-shrink-0">
                                            {openFaq === index ? (
                                                <FaMinus className="text-blue-500 w-5 h-5" />
                                            ) : (
                                                <FaPlus className="text-gray-400 w-5 h-5" />
                                            )}
                                        </div>
                                    </button>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 py-5 bg-blue-50 border-t border-blue-100"
                                        >
                                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Discover Bali Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                Discover Bali
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Immerse yourself in the enchanting beauty and rich culture of Bali, where every moment becomes a treasured memory
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100"
                        >
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Beach Paradise</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The golden beaches in Bali are a surfer&apos;s paradise. With pristine waters and endless coastline, you&apos;ll be spoilt for choice in beach activities and water sports.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
                        >
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7.707-3.707a1 1 0 00-1.414-1.414L8 11.172 6.707 9.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Adventure & Nature</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trek Mount Batur, explore Tegallalang Rice Terraces, visit Bali Safari and Marine Park, or go mountain biking through stunning landscapes and paddy fields.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
                        >
                            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Spiritual Serenity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Find peace at sacred temples like Uluwatu, Ulun Danu, and Tanah Lot. These serene spots offer spiritual tranquility and breathtaking architectural beauty.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Booking Form Modal */}
            {isBookingModalOpen && (
                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={selectedPackageName || 'Bali'}
                />
            )}
        </div>
    );
} 