'use client';

import { useState } from 'react';
import Link from 'next/link';
import { japanPackages, JapanPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });


export default function JapanPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(japanPackages);
    const totalPages = Math.ceil(packages.length / 3);
    const [isMuted, setIsMuted] = useState(true);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('japanAudio') as HTMLAudioElement;
        const video = document.getElementById('japanVideo') as HTMLVideoElement;
        if (audio && video) {
            if (isMuted) {
                audio.muted = false;
                video.muted = true;
                audio.play();
                audio.volume = 0.5;
            } else {
                audio.muted = true;
                audio.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    const PackageCard = ({
        package: pkg
    }: {
        package: JapanPackage;
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

                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                <div className="absolute top-3 left-0 z-10">
                    <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                        <span className="line-through text-sm mr-2">
                            ₹{(pkg.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold">
                            ₹{pkg.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1">onwards</span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {pkg.packageName}
                    </h2>

                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{pkg.days}D/{pkg.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-yellow-400" />
                            <span>{pkg.hotelDetails[0].city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowDates(!showDates);
                                }}
                                className="hover:text-yellow-400 transition-colors"
                            >
                                View Dates
                            </button>
                        </div>
                    </div>

                    {showDates && pkg.departureDates && (
                        <div
                            className="absolute bottom-full left-0 right-0 bg-black/90 p-4 rounded-t-lg max-h-[200px] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-yellow-400 font-semibold mb-2">Departure Dates</h3>
                            <div className="space-y-2">
                                {pkg.departureDates.map((departure, index) => (
                                    <div key={index} className="text-sm">
                                        {departure.date}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <Link href={`/japan/${pkg.id}`}>
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

    const japanHighlights = [
        {
            title: "Tokyo Skytree",
            image: "/UGCImages/japan/sight/1.png",
            description: "Experience the tallest tower in Japan with stunning city views"
        },
        {
            title: "Mount Fuji",
            image: "/UGCImages/japan/sight/2.png",
            description: "Visit the iconic symbol of Japan and its natural beauty"
        },
        {
            title: "Disneyland Tokyo",
            image: "/UGCImages/japan/sight/3.png",
            description: "Enjoy magical moments at the happiest place on earth"
        },
        {
            title: "Universal Studios Osaka",
            image: "/UGCImages/japan/sight/4.png",
            description: "Experience thrilling rides and world-class entertainment"
        },
        {
            title: "Fushimi Inari Taisha",
            image: "/UGCImages/japan/sight/5.png",
            description: "Walk through thousands of vermillion torii gates"
        },
        {
            title: "Traditional Culture",
            image: "/UGCImages/japan/sight/6.png",
            description: "Immerse yourself in ancient temples and traditional architecture"
        }
    ];

    const faqs = [
        {
            question: "What is the best time to visit Japan?",
            answer: "The best times to visit Japan are during spring (March-May) for cherry blossoms and autumn (September-November) for fall colors. Weather is pleasant and crowds are manageable."
        },
        {
            question: "Do Indians need a visa for Japan?",
            answer: "Yes, Indian citizens need a visa to enter Japan. The process requires submitting documents to the Japanese embassy or consulate."
        },
        {
            question: "What are the must-visit attractions?",
            answer: "Popular attractions include Tokyo Skytree, Mount Fuji, Disneyland Tokyo, Universal Studios Osaka, Fushimi Inari Taisha, and traditional temples in Kyoto."
        },
        {
            question: "Is Japan expensive to visit?",
            answer: "Japan can be moderately expensive, but there are budget-friendly options available. Our packages include accommodation and major attractions to help manage costs."
        }
    ] as const;

    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <audio
                    id="japanAudio"
                    loop
                    muted
                    autoPlay
                    className="hidden"
                >
                    <source src="/UGCImages/japan/audio/japan.mp3" type="audio/mp3" />
                </audio>

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
                    id="japanVideo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/UGCImages/japan/japan1.mp4" type="video/mp4" />
                    {/* Fallback image in case video fails to load */}
                    <Image
                        src="/UGCImages/japan/japan.png"
                        alt="Japan Paradise"
                        fill
                        className="object-cover"
                        priority
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
                            <span className={`block font-dancing-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                Welcome to
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-2 ${playfair.className}`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)' }}>
                                Japan
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
                                The Land of the Rising Sun
                            </motion.p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-yellow-300"
                                >
                                    Cherry Blossoms
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Ancient Temples
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-green-300"
                                >
                                    Sushi & Ramen
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Japan Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Japan Packages
                        </span>
                    </h2>
                    <div className="relative">
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
                                    {packages
                                        .slice(currentPage * 3, (currentPage * 3) + 3)
                                        .map((japanPkg) => (
                                            <PackageCard key={japanPkg.id} package={japanPkg} />
                                        ))}
                                </div>
                            </div>

                            {/* Mobile Navigation */}
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
                        </div>
                    </div>
                </div>
            </div>

            {/* Japan Highlights Section */}
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
                                Experience the Magic of Japan
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {japanHighlights.map((highlight, index) => (
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
                        Discover Japan
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Japan, the Land of the Rising Sun, offers a perfect blend of ancient traditions and cutting-edge modernity. From the bustling streets of Tokyo to the serene temples of Kyoto, experience a country where every corner tells a story.
                    </p>
                    <p>
                        Our Japan tour packages include visits to iconic locations like Tokyo Skytree, Mount Fuji, Disneyland Tokyo, and Universal Studios Osaka, combining entertainment with cultural experiences.
                    </p>
                    <p>
                        Experience the rich cultural heritage through visits to ancient temples, traditional gardens, and historic districts, while enjoying world-class cuisine and modern attractions.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
} 