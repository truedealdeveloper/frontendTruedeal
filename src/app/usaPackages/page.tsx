'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usaPackages, USAPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function USAPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(usaPackages);
    const totalPages = Math.ceil(packages.length / 3);
    const [isMuted, setIsMuted] = useState(true);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('usaAudio') as HTMLAudioElement;
        const video = document.getElementById('usaVideo') as HTMLVideoElement;
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

    const usaHighlights = [
        {
            title: "City Experiences",
            image: "/UGCImages/usa/Main/cities.jpg",
            description: "Explore vibrant cities like New York, LA, and Chicago"
        },
        {
            title: "National Parks",
            image: "/UGCImages/usa/Main/parks.jpg",
            description: "Discover America's stunning natural wonders"
        },
        {
            title: "Cultural Diversity",
            image: "/UGCImages/usa/Main/culture.jpg",
            description: "Experience the melting pot of American cultures"
        },
        {
            title: "Entertainment",
            image: "/UGCImages/usa/Main/entertainment.jpg",
            description: "Enjoy world-class shows, theme parks, and attractions"
        },
        {
            title: "Historic Sites",
            image: "/UGCImages/usa/Main/history.jpg",
            description: "Visit landmarks from America's rich history"
        },
        {
            title: "Food & Dining",
            image: "/UGCImages/usa/Main/food.jpg",
            description: "Savor diverse American cuisine from coast to coast"
        }
    ];

    const faqs = [
        {
            question: "What's the best time to visit the USA?",
            answer: "The best time varies by region. Summer (June-August) is great for northern states, while spring (March-May) and fall (September-November) are ideal for most regions. Winter is perfect for ski destinations and southern states."
        },
        {
            question: "Do I need a visa to visit the USA?",
            answer: "Most visitors require a visa or ESTA (Electronic System for Travel Authorization) to enter the USA. ESTA is available for citizens of Visa Waiver Program countries for stays up to 90 days."
        },
        {
            question: "What activities can I do in the USA?",
            answer: "The USA offers endless activities: city sightseeing, national park exploration, theme parks, shopping, museums, sports events, outdoor adventures, beach relaxation, and culinary experiences."
        },
        {
            question: "Is the USA safe for tourists?",
            answer: "The USA is generally safe for tourists, but like any destination, it's important to stay aware of your surroundings, especially in large cities. Follow local guidelines and check travel advisories before your trip."
        }
    ];

    const PackageCard = ({ 
        package: pkg
    }: { 
        package: USAPackage;
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
                    <h3 className="text-2xl font-bold mb-2">
                        {pkg.packageName}
                    </h3>
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

                    {/* Departure Dates Popup - Vietnam Style */}
                    {showDates && pkg.departureDates && (
                        <div 
                            className="absolute bottom-full left-0 right-0 bg-black/90 p-4 rounded-t-lg max-h-[200px] overflow-y-auto z-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h4 className="text-yellow-400 font-semibold mb-2 flex justify-between">
                                <span>Departure Dates</span>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowDates(false);
                                    }}
                                    className="text-white hover:text-yellow-400"
                                >
                                    ✕
                                </button>
                            </h4>
                            <div className="space-y-2">
                                {pkg.departureDates.map((departure, index) => (
                                    <div key={index} className="text-sm">
                                        <span>{departure.date}</span>
                                        {departure.availability && (
                                            <span className="ml-2 text-xs">
                                                {departure.availability === 'Sold Out' 
                                                    ? '(Sold Out)' 
                                                    : departure.availability === 'Limited' 
                                                        ? '(Limited Seats)' 
                                                        : ''}
                                            </span>
                                        )}
                                        {departure.price && (
                                            <span className="block text-sm text-yellow-400 mt-0.5">
                                                Price: ₹{departure.price.toLocaleString('en-IN')}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <Link href={`/usaPackages/${pkg.id}`}>
                        <Button className="w-full bg-gradient-to-r from-[#d10023] to-[#2a4bfd] hover:from-[#2a4bfd] hover:to-[#d10023] text-white transition-all duration-500">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <div className="relative h-[60vh] md:h-[100vh] overflow-hidden">
                <audio
                    id="usaAudio"
                    loop
                    muted
                    autoPlay
                    className="hidden"
                >
                    <source src="/UGCImages/usa/usaAudio.mp3" type="audio/mp3" />
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
                    id="usaVideo"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/UGCImages/usa/usaBG.mp4" type="video/mp4" />
                    <Image
                        src="/UGCImages/usa/usa.jpg"
                        alt="USA"
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
                                Discover the Magic of 
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#d10023] to-[#2a4bfd] bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                United States of America
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
                                From coast to coast, experience the American dream
                            </motion.p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-red-300"
                                >
                                    Iconic Cities
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-white"
                                >
                                    Natural Wonders
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Cultural Heritage
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* USA Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d10023] to-[#2a4bfd]">
                            Our USA Packages
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
                                        .map((usaPkg) => (
                                            <PackageCard key={usaPkg.id} package={usaPkg} />
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

            {/* USA Highlights Section */}
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
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d10023] to-[#2a4bfd]">
                                Experience the Beauty of America
                            </span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {usaHighlights.map((highlight, index) => (
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
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d10023] to-[#2a4bfd]">
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
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d10023] to-[#2a4bfd]">
                        Discover America
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        The United States of America, a land of boundless opportunity and diversity, offers an unparalleled travel experience combining natural beauty, urban excitement, and cultural significance.
                    </p>
                    <p>
                        Our USA tour packages include visits to iconic locations like the Statue of Liberty, Grand Canyon, Golden Gate Bridge, and the White House, blending city exploration with natural wonders.
                    </p>
                    <p>
                        Experience American life through its diverse cuisine, sporting events, entertainment venues, and the warm hospitality of people from various cultural backgrounds across this vast nation.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
} 