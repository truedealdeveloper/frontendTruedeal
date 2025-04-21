'use client';

import { useState } from 'react';
import Link from 'next/link';
import { australiaPackages, AustraliaPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function AustraliaPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(australiaPackages);
    const totalPages = Math.ceil(packages.length / 3);
    const [isMuted, setIsMuted] = useState(true);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('australiaAudio') as HTMLAudioElement;
        const video = document.getElementById('australiaVideo') as HTMLVideoElement;
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

    const australiaHighlights = [
        {
            title: "Natural Wonders",
            image: "/UGCImages/australia/Main/barrier.jpg",
            description: "Explore the Great Barrier Reef and Uluru"
        },
        {
            title: "Wildlife Adventures",
            image: "/UGCImages/australia/Main/funa.jpg",
            description: "Meet kangaroos, koalas, and unique Australian fauna"
        },
        {
            title: "City Life",
            image: "/UGCImages/australia/Main/sydney.jpg",
            description: "Experience Sydney's harbor and Melbourne's culture"
        },
        {
            title: "Beach Paradise",
            image: "/UGCImages/australia/Main/beach.jpg",
            description: "Relax on world-famous beaches"
        },
        {
            title: "Outback Experience",
            image: "/UGCImages/australia/Main/outback.jpg",
            description: "Discover the rugged beauty of the Australian outback"
        },
        {
            title: "Food & Wine",
            image: "/UGCImages/australia/Main/cuisine.jpg",
            description: "Savor Australian cuisine and world-class wines"
        }
    ];

    const faqs = [
        {
            question: "What's the best time to visit Australia?",
            answer: "December to February (summer) is ideal for beach activities, while June to August (winter) is perfect for visiting the outback and northern regions."
        },
        {
            question: "Do I need a visa to visit Australia?",
            answer: "Yes, all visitors need a valid visa to enter Australia. The type of visa depends on your nationality and purpose of visit."
        },
        {
            question: "What activities can I do in Australia?",
            answer: "Australia offers snorkeling at the Great Barrier Reef, surfing at Gold Coast, hiking in the Blue Mountains, city tours in Sydney and Melbourne, and wildlife encounters."
        },
        {
            question: "Is Australia safe for tourists?",
            answer: "Australia is generally very safe for tourists, with excellent healthcare and emergency services. Just be aware of sun safety and follow local guidelines for beach and wildlife encounters."
        }
    ];

    const PackageCard = ({ 
        package: pkg
    }: { 
        package: AustraliaPackage;
    }) => {
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
                            <span>{pkg.dateStart}</span>
                        </div>
                    </div>
                    <Link href={`/australiaPackages/${pkg.id}`}>
                        <Button className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500">
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
                    id="australiaAudio"
                    loop
                    muted
                    autoPlay
                    className="hidden"
                >
                    <source src="/UGCImages/australia/australiaAudio.mp3" type="audio/mp3" />
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
                    id="australiaVideo"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/UGCImages/australia/australiaBG.mp4" type="video/mp4" />
                    <Image
                        src="/UGCImages/australia/australia.jpg"
                        alt="Australia"
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
                                Experience the Magic of 
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                Australia
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
                                Where dreams meet the outback
                            </motion.p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-yellow-300"
                                >
                                    Natural Wonders
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Coastal Beauty
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-green-300"
                                >
                                    Urban Adventures
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Australia Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Australia Packages
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
                                        .map((australiaPkg) => (
                                            <PackageCard key={australiaPkg.id} package={australiaPkg} />
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

            {/* Australia Highlights Section */}
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
                                Experience the Beauty of Australia
                            </span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {australiaHighlights.map((highlight, index) => (
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
                        Discover Australia
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Australia, a land of endless possibilities, offers a unique blend of natural wonders, vibrant cities, and rich cultural experiences.
                    </p>
                    <p>
                        Our Australia tour packages include visits to iconic locations like the Sydney Opera House, Great Barrier Reef, and Uluru, combining urban adventures with natural exploration.
                    </p>
                    <p>
                        Experience the Australian way of life through beach culture, wildlife encounters, and world-class dining in cosmopolitan cities.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
} 