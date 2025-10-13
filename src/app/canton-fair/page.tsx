'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';
import Link from 'next/link';
import { cantonFairPackages, type CantonFairPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaPlane, FaHotel } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

// Lazy load heavy components
const TripPlanRequest = dynamic(() => import('../../components/TripPlanRequest'), {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />
});

// Lazy load the booking modal
const BookingFormModal = dynamic(() =>
    import('@/app/components/BookingFormModal').then(m => m.BookingFormModal),
    { ssr: false }
);

export default function CantonFairPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedPackageName, setSelectedPackageName] = useState<string>('');

    // Memoize expensive calculations
    const { packagesArray, totalPages } = useMemo(() => {
        const packages = Object.values(cantonFairPackages) as CantonFairPackage[];
        return {
            packagesArray: packages,
            totalPages: Math.ceil(packages.length / 3)
        };
    }, []);

    // Memoize current page packages
    const currentPagePackages = useMemo(() => {
        return packagesArray.slice(currentPage * 3, (currentPage * 3) + 3);
    }, [packagesArray, currentPage]);

    // Memoize static data
    const cantonFairHighlights = useMemo(() => [
        {
            title: "Canton Fair Complex",
            image: "/UGCImages/china/horizontal/1.webp",
            description: "World's largest trade fair complex with cutting-edge facilities"
        },
        {
            title: "Electronics & Tech",
            image: "/UGCImages/china/horizontal/2.webp",
            description: "Latest electronics and high-tech products from manufacturers"
        },
        {
            title: "Pearl River Cruise",
            image: "/UGCImages/china/horizontal/3.webp",
            description: "Scenic evening cruise with stunning city skyline views"
        },
        {
            title: "Business Networking",
            image: "/UGCImages/china/horizontal/4.webp",
            description: "Connect with thousands of Chinese manufacturers and suppliers"
        },
        {
            title: "Guangzhou City",
            image: "/UGCImages/china/horizontal/5.webp",
            description: "Experience the vibrant culture and modern architecture"
        },
        {
            title: "Industrial Products",
            image: "/UGCImages/china/horizontal/6.webp",
            description: "Machinery, hardware tools, and building materials showcase"
        }
    ], []);

    const faqs = useMemo(() => [
        {
            question: "What is Canton Fair?",
            answer: "Canton Fair, officially known as the China Import and Export Fair, is China's largest trade fair held in Guangzhou. Phase 1 focuses on electronics, household appliances, machinery, hardware tools, and building materials."
        },
        {
            question: "What are the exhibition dates and timings?",
            answer: "Canton Fair Phase 1 runs from October 15-19, 2025, with daily timings from 09:30 AM to 06:00 PM. You'll have 3 full days to explore the exhibition."
        },
        {
            question: "Do I need a visa for China?",
            answer: "Yes, Indian citizens need a Chinese visa. Required documents include a valid passport, visa application form, photographs, flight/hotel bookings, and business registration documents if applying for a business visa."
        },
        {
            question: "What is included in the package?",
            answer: "The package includes round-trip flights from Delhi, hotel accommodation, daily breakfast, Indian dinner, airport transfers, Pearl River Cruise, exhibition entry passes, and all taxes."
        },
        {
            question: "How far is the hotel from the exhibition center?",
            answer: "Days Inn by Wyndham Guangzhou is located 22 KMs from the China Import and Export Fair Complex, with convenient transportation access."
        }
    ], []);

    // Memoize event handlers
    const handlePrevPage = useCallback(() => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    }, []);

    const handleNextPage = useCallback(() => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    }, [totalPages]);

    const handleEnquireNow = useCallback((packageName: string) => {
        setSelectedPackageName(packageName);
        setIsBookingModalOpen(true);
    }, []);

    const PackageCard = memo(({
        package: pkg,
        onEnquireNow
    }: {
        package: CantonFairPackage;
        onEnquireNow: (packageName: string) => void;
    }) => {
        const [showDates, setShowDates] = useState(false);

        // Check if this is Phase 2 or Phase 3 for special offer badge
        const hasOffer = pkg.id.includes('phase-2') || pkg.id.includes('phase-3');

        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                <Image
                    src={pkg.images[0]}
                    alt={pkg.packageName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                {/* Special Offer Badge */}
                {hasOffer && (
                    <div className="absolute top-3 right-3 z-10">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                            <span className="text-white font-bold text-xs">
                                Book Online & Get ₹5,000 OFF
                            </span>
                        </div>
                    </div>
                )}

                {/* Price Tag */}
                <div className="absolute top-3 left-0 z-10">
                    <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] px-4 py-1.5 rounded-r-full shadow-lg">
                        <span className="text-white font-bold text-lg">
                            ₹{pkg.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-white text-sm ml-1">per person</span>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">
                        {pkg.packageName}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-cyan-400" />
                            <span>{pkg.days}D/{pkg.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-cyan-400" />
                            <span>{pkg.hotelDetails[0].city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-cyan-400" />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowDates(!showDates);
                                }}
                                className="hover:text-cyan-400 transition-colors"
                            >
                                View Dates
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdBusinessCenter className="text-cyan-400" />
                            <span>Trade Fair</span>
                        </div>
                    </div>

                    {showDates && pkg.departureDates && (
                        <div
                            className="absolute bottom-full left-0 right-0 bg-black/90 p-4 rounded-t-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-cyan-400 font-semibold mb-2">Departure Dates</h3>
                            <div className="space-y-2">
                                {pkg.departureDates.map((departure, index) => (
                                    <div key={index} className="text-sm">
                                        {departure.date} - {departure.availability}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <Link href={`/canton-fair/${pkg.id}`} className="flex-1">
                            <Button
                                variant="outline"
                                className="w-full bg-white/10 hover:bg-white/20"
                            >
                                View Details
                            </Button>
                        </Link>
                        <Button
                            onClick={() => onEnquireNow(pkg.packageName)}
                            className="flex-1 bg-gradient-to-r from-[#ffffff] to-[#5dfaff] hover:opacity-90 text-gray-800 transition-all duration-500 shadow-lg hover:shadow-xl"
                        >
                            Enquire Now
                        </Button>
                    </div>
                </div>
            </div>
        );
    });

    PackageCard.displayName = 'PackageCard';

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <Image
                    src="https://static.tildacdn.com/tild6630-6130-4631-a635-616537663438/canton_fair_2024.jpeg"
                    alt="Canton Fair Guangzhou"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6"
                        >
                            <span className={`block font-dancing-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                Experience
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-2 ${playfair.className}`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)' }}>
                                Canton Fair 2025
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
                                China&apos;s Largest Trade Fair - Phase 1,2,3
                            </motion.p>
                            <div className="flex flex-wrap justify-center gap-4 text-base md:text-lg">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-cyan-300 flex items-center gap-2"
                                >
                                    <MdBusinessCenter /> Electronics & Tech
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-blue-300 flex items-center gap-2"
                                >
                                    <FaPlane /> Direct from Delhi
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-yellow-300 flex items-center gap-2"
                                >
                                    <FaHotel /> Premium Stay
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Fair Information Banner */}
            <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <FaCalendarAlt className="text-4xl mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-1">Exhibition Dates</h3>
                            <p className="text-sm">October 15 – 19, 2025</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <FaClock className="text-4xl mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-1">Timings</h3>
                            <p className="text-sm">09:30 AM – 06:00 PM (Daily)</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <IoLocationSharp className="text-4xl mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-1">Venue</h3>
                            <p className="text-sm">Canton Fair Complex, Guangzhou</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Canton Fair Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        <div className="flex flex-col items-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mb-3">
                                Our Canton Fair Packages
                            </h3>
                            <p className="text-gray-600 text-center max-w-2xl">
                                Explore the best trade fair packages with comfortable accommodation,
                                direct flights, and complete exhibition access
                            </p>
                        </div>
                        <div className="relative">
                            {/* Navigation Controls */}
                            {totalPages > 1 && (
                                <>
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
                                </>
                            )}

                            {/* Packages Grid */}
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                    {currentPagePackages.map((pkg) => (
                                        <PackageCard
                                            key={pkg.id}
                                            package={pkg}
                                            onEnquireNow={handleEnquireNow}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Navigation */}
                            {totalPages > 1 && (
                                <div className="mt-6 flex justify-center items-center gap-2 md:hidden">
                                    <Button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 0}
                                        variant="outline"
                                        className="rounded-full w-8 h-8 p-0"
                                    >
                                        <FaChevronLeft className="w-3 h-3" />
                                    </Button>
                                    <span className="text-sm text-gray-500">
                                        {currentPage + 1} / {totalPages}
                                    </span>
                                    <Button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages - 1}
                                        variant="outline"
                                        className="rounded-full w-8 h-8 p-0"
                                    >
                                        <FaChevronRight className="w-3 h-3" />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Canton Fair Highlights Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                What Makes Canton Fair Special
                            </span>
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            The China Import and Export Fair is a comprehensive international trading event
                            with the longest history, highest level, and largest scale in China
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cantonFairHighlights.map((highlight, index) => (
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

            {/* Why Visit Section */}
            <div className="bg-gray-50 py-16">
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
                                Why Visit Canton Fair Phase?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Connect with thousands of manufacturers and discover cutting-edge products
                            at the world&apos;s most comprehensive trade fair
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-xl flex items-center justify-center mb-6">
                                <MdBusinessCenter className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Products</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Phase 1 focuses on electronics, household appliances, vehicles and spare parts,
                                machinery, hardware tools, and building materials from leading Chinese manufacturers.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Access</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Meet face-to-face with factory owners and decision-makers. Build lasting business
                                relationships and negotiate directly with suppliers to get the best deals.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Package</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enjoy hassle-free travel with flights, accommodation, meals, and exhibition access
                                all included. Focus on business while we handle all the logistics.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <TripPlanRequest />

            {/* FAQ Section */}
            <div className="bg-white py-16">
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
                                    className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <button
                                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    >
                                        <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                                        <div className="ml-4 flex-shrink-0">
                                            {openFaq === index ? (
                                                <FaMinus className="text-cyan-500 w-5 h-5" />
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
                                            className="px-6 py-5 bg-white border-t border-gray-200"
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

            {/* Booking Form Modal */}
            {isBookingModalOpen && (
                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={selectedPackageName || 'Canton Fair 2025'}
                />
            )}
        </div>
    );
}
