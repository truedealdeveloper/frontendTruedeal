'use client';

import { useState } from 'react';
import Link from 'next/link';
import { thailandPackages, ThailandPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import TripPlanRequest to avoid SSR issues
const TripPlanRequest = dynamic(() => import('../../components/TripPlanRequest'), {
    ssr: false
});

export default function ThailandPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Add error handling for data loading
    const packages = Object.values(thailandPackages || {});
    const totalPages = packages.length > 0 ? Math.ceil(packages.length / 3) : 1;

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const PackageCard = ({ package: thailandPackage }: { package: ThailandPackage }) => {
        if (!thailandPackage) return null;

        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                {/* Background Image */}
                <Image
                    src={thailandPackage.images?.[0] || '/UGCImages/web/thailand/1.webp'}
                    alt={thailandPackage.packageName || 'Thailand Package'}
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
                            ₹{(thailandPackage.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold">
                            ₹{thailandPackage.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1">onwards</span>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {thailandPackage.packageName || 'Thailand Package'}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{thailandPackage.days || 0}D/{thailandPackage.nights || 0}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-yellow-400" />
                            <span>{thailandPackage.hotelDetails?.[0]?.city || 'Thailand'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>{thailandPackage.dateStart || 'Available'}</span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/thailand/${thailandPackage.id}`}>
                        <Button
                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                        >
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        );
    };

    const faqs = [
        {
            question: "What is the best time to visit Thailand?",
            answer: "The best time to visit Thailand is from November to February when the weather is cool and dry. December is peak season with higher prices, while March to May can be hot and humid."
        },
        {
            question: "What activities can I do in Thailand?",
            answer: "Thailand offers numerous activities including island hopping, temple visits, floating markets, elephant encounters, Thai cooking classes, water sports, and vibrant nightlife."
        },
        {
            question: "Which temples should I visit in Thailand?",
            answer: "Must-visit temples include Grand Palace and Wat Pho in Bangkok, Wat Arun (Temple of Dawn), and Wat Chalong in Phuket."
        },
        {
            question: "What adventure activities are available?",
            answer: "You can enjoy zip-lining, rock climbing, scuba diving, snorkeling, kayaking, white water rafting, and various water sports at the islands."
        }
    ];

    const thailandHighlights = [
        {
            title: "Cultural Heritage",
            image: "/UGCImages/web/thailand/7.webp",
            description: "Explore ancient temples, royal palaces, and traditional Thai architecture"
        },
        {
            title: "Thai Cuisine",
            image: "/UGCImages/web/thailand/1.webp",
            description: "Savor authentic Thai dishes, street food, and tropical fruits"
        },
        {
            title: "Golden Temples",
            image: "/UGCImages/web/thailand/11.webp",
            description: "Visit magnificent temples like Grand Palace, Wat Pho, and Wat Arun"
        },
        {
            title: "Natural Beauty",
            image: "/UGCImages/web/thailand/3.webp",
            description: "Discover pristine beaches, tropical islands, and lush landscapes"
        },
        {
            title: "Island Paradise",
            image: "/UGCImages/web/thailand/8.webp",
            description: "Relax on stunning beaches and enjoy crystal-clear waters"
        },
        {
            title: "Adventure & Fun",
            image: "/UGCImages/web/thailand/5.webp",
            description: "Experience exciting water sports, elephant shows, and theme parks"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Image */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <Image
                    src="/UGCImages/web/thailand/1.webp"
                    alt="Thailand Paradise"
                    fill
                    className="object-cover brightness-[0.85]"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6"
                        >
                            <span className="block bg-gradient-to-r from-yellow-300 via-orange-200 to-red-300 bg-clip-text text-transparent font-serif mt-10 sm:text-3xl md:text-4xl lg:text-5xl">
                                Land of Smiles
                            </span>
                            <span className="block bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 bg-clip-text text-transparent mt-2">
                                Thailand
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
                                    Beaches
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Thailand Packages
                        </span>
                    </h2>
                    <div className="relative">
                        <div className="relative">
                            {/* Navigation Controls */}
                            {packages.length > 3 && (
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
                                    {packages && packages.length > 0 ? (
                                        packages
                                            .slice(currentPage * 3, (currentPage * 3) + 3)
                                            .map((thailandPkg) => (
                                                <PackageCard key={thailandPkg?.id || Math.random()} package={thailandPkg} />
                                            ))
                                    ) : (
                                        <div className="col-span-3 text-center py-8">
                                            <p className="text-gray-500">No packages available at the moment.</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Navigation */}
                            {packages.length > 0 && (
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

            {/* Thailand Highlights Section */}
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
                                Experience the Magic of Thailand
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {thailandHighlights.map((highlight, index) => (
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

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Frequently Asked Questions
                    </span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <span className="font-medium">{faq.question}</span>
                                {openFaq === index ? (
                                    <FaMinus className="flex-shrink-0 text-gray-400" />
                                ) : (
                                    <FaPlus className="flex-shrink-0 text-gray-400" />
                                )}
                            </button>
                            {openFaq === index && (
                                <div className="px-6 py-4 bg-gray-50">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Information */}
            <div className="max-w-4xl mx-auto mt-16 prose prose-lg">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Discover Thailand
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Thailand offers pristine beaches, vibrant culture, and warm hospitality that makes it a perfect destination for travelers seeking both adventure and relaxation.
                    </p>
                    <p>
                        From the bustling streets of Bangkok with its golden temples and floating markets to the tropical paradise of Phuket and Pattaya with crystal-clear waters and white sandy beaches.
                    </p>
                    <p>
                        These packages include serene temple visits, exciting water sports, elephant encounters, and cultural shows where you can immerse yourself in Thai traditions and hospitality.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
}