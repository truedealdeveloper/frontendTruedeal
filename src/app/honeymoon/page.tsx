'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';
import Link from 'next/link';
import { honeymoonPackages, type HoneymoonPackage } from './data';
import { FaCalendarAlt, FaClock, FaPlus, FaMinus, FaHeart } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

// Lazy load heavy components only when needed
const TripPlanRequest = dynamic(() => import('../../components/TripPlanRequest'), {
    ssr: false,
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg" />
});

// Lazy load the booking modal only when needed
const BookingFormModal = dynamic(() =>
    import('@/app/components/BookingFormModal').then(m => m.BookingFormModal),
    { ssr: false }
);

export default function HoneymoonPackages() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedPackageName, setSelectedPackageName] = useState<string>('');

    // Separate Maldives and Bali packages
    const { maldivesPackages, baliPackages } = useMemo(() => {
        const packages = Object.values(honeymoonPackages) as HoneymoonPackage[];
        const maldives = packages.filter(pkg => pkg.id.includes('maldives'));
        const bali = packages.filter(pkg => pkg.id.includes('bali'));
        return {
            maldivesPackages: maldives,
            baliPackages: bali
        };
    }, []);

    // Memoize static data
    const honeymoonHighlights = useMemo(() => [
        {
            title: "Romantic Beach Escapes",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
            description: "Crystal-clear waters and pristine white sand beaches perfect for romantic moments"
        },
        {
            title: "Private Dining Experiences",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            description: "Candlelit dinners under the stars with your loved one"
        },
        {
            title: "Couple Spa Retreats",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
            description: "Rejuvenating spa treatments designed for couples"
        },
        {
            title: "Water Villas",
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
            description: "Luxury overwater accommodations with stunning ocean views"
        },
        {
            title: "Sunset Cruises",
            image: "https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
            description: "Romantic sailing adventures watching breathtaking sunsets"
        },
        {
            title: "Cultural Experiences",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            description: "Explore rich traditions and create memories together"
        }
    ], []);

    const faqs = useMemo(() => [
        {
            question: "What makes these destinations perfect for honeymoon?",
            answer: "Both Maldives and Bali offer stunning natural beauty, luxury accommodations, romantic activities, and privacy perfect for newlyweds. From overwater villas to private beach dinners, these destinations are designed for romance."
        },
        {
            question: "What is the best time to visit?",
            answer: "For Maldives: November to April offers the best weather with calm seas and sunshine. For Bali: April to October provides dry weather ideal for beach activities and sightseeing."
        },
        {
            question: "Are visa requirements easy for Indians?",
            answer: "Yes! Maldives offers free visa on arrival for 30 days. Bali offers visa on arrival for Indians at approximately ₹2,500 (IDR 500,000) for 30 days."
        },
        {
            question: "What's included in the packages?",
            answer: "Our packages include accommodation, daily breakfast, airport transfers, romantic dinners, couple spa sessions, and various activities. Specific inclusions vary by package - check individual package details."
        },
        {
            question: "Can we customize the itinerary?",
            answer: "Absolutely! We can customize any package to match your preferences. Contact us to discuss your dream honeymoon and we'll create a perfect itinerary for you."
        }
    ], []);

    const handleEnquireNow = useCallback((packageName: string) => {
        setSelectedPackageName(packageName);
        setIsBookingModalOpen(true);
    }, []);

    const PackageCard = memo(({
        package: pkg,
        onEnquireNow
    }: {
        package: HoneymoonPackage;
        onEnquireNow: (packageName: string) => void;
    }) => {
        const [showDates, setShowDates] = useState(false);

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

                {/* Price Tag with Heart */}
                <div className="absolute top-3 left-0 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                        <FaHeart className="text-white text-sm" />
                        <span className="line-through text-sm mr-2">
                            ₹{(pkg.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold text-white">
                            ₹{pkg.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm">pp</span>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {pkg.packageName}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-pink-400" />
                            <span>{pkg.days}D/{pkg.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-pink-400" />
                            <span>{pkg.hotelDetails[0].city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-pink-400" />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowDates(!showDates);
                                }}
                                className="hover:text-pink-400 transition-colors"
                            >
                                Flexible Dates
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <Link href={`/honeymoon/${pkg.id}`} className="flex-1">
                            <Button
                                variant="outline"
                                className="w-full bg-white/10 hover:bg-white/20"
                            >
                                View Details
                            </Button>
                        </Link>
                        <Button
                            onClick={() => onEnquireNow(pkg.packageName)}
                            className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white transition-all duration-500 shadow-lg hover:shadow-xl"
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
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                {/* Background Image */}
                <Image
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=85"
                    alt="Honeymoon Paradise"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6"
                        >
                            <span className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                Your Dream Honeymoon
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-2 ${playfair.className}`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)' }}>
                                Awaits in Paradise
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
                                Create Memories That Last Forever
                            </motion.p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl flex-wrap">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-pink-300 flex items-center gap-2"
                                >
                                    <FaHeart /> Maldives
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-rose-300 flex items-center gap-2"
                                >
                                    <FaHeart /> Bali
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-red-300 flex items-center gap-2"
                                >
                                    <FaHeart /> Romance
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Honeymoon Packages Section */}
            <div className="bg-gradient-to-b from-rose-50 to-pink-50 py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${dancingScript.className}`}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
                                Our Romantic Packages
                            </span>
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Specially curated honeymoon packages starting from just ₹40,000 per person
                        </p>
                    </motion.div>

                    {/* Maldives Packages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h4 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${dancingScript.className}`}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                                Maldives Packages
                            </span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {maldivesPackages.map((honeymoonPkg) => (
                                <PackageCard
                                    key={honeymoonPkg.id}
                                    package={honeymoonPkg}
                                    onEnquireNow={handleEnquireNow}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Bali Packages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${dancingScript.className}`}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
                                Bali Packages
                            </span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {baliPackages.map((honeymoonPkg) => (
                                <PackageCard
                                    key={honeymoonPkg.id}
                                    package={honeymoonPkg}
                                    onEnquireNow={handleEnquireNow}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Honeymoon Highlights Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${dancingScript.className}`}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
                                Experience Romance Like Never Before
                            </span>
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            From pristine beaches to intimate dinners, every moment is designed for love
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {honeymoonHighlights.map((highlight, index) => (
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

            <TripPlanRequest />

            {/* FAQ Section */}
            <div className="bg-gradient-to-b from-rose-50 to-pink-50 py-16">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${dancingScript.className}`}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
                                Frequently Asked Questions
                            </span>
                        </h2>
                        <p className="text-center text-gray-600 mb-12">
                            Everything you need to know about your dream honeymoon
                        </p>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <button
                                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-pink-50 transition-colors duration-200"
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    >
                                        <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                                        <div className="ml-4 flex-shrink-0">
                                            {openFaq === index ? (
                                                <FaMinus className="text-pink-500 w-5 h-5" />
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
                                            className="px-6 py-5 bg-pink-50 border-t border-pink-100"
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

            {/* Why Choose Us Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dancingScript.className}`}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
                                Why Choose TrueDeal for Your Honeymoon?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We understand that your honeymoon is the beginning of your journey together. Let us make it extraordinary.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100"
                        >
                            <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-6">
                                <FaHeart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Romantic Experiences</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every detail is crafted for romance - from candlelit beach dinners to private sunset cruises, creating unforgettable moments together.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-2xl border border-rose-100"
                        >
                            <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Best Price Guarantee</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Premium honeymoon packages starting from ₹40,000 per person. Luxury experiences at unbeatable prices with complete transparency.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-100"
                        >
                            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Dedicated support throughout your journey. Our team ensures your honeymoon is stress-free and magical from start to finish.
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
                    destinationName={selectedPackageName || 'Honeymoon'}
                />
            )}
        </div>
    );
}
