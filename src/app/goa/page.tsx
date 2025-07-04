'use client';

import { useState } from 'react';
import Link from 'next/link';
import { goaPackages, goaPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function GoaPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(goaPackages);
    const totalPages = Math.ceil(packages.length / 3);
    const [isMuted, setIsMuted] = useState(true);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('goaAudio') as HTMLAudioElement;
        const video = document.getElementById('goaVideo') as HTMLVideoElement;
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
        package: goaPackage;
    }) => {
        const [showDates, setShowDates] = useState(false);
        const [showCities, setShowCities] = useState(false);

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
                    <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] px-4 py-1.5 rounded-full shadow-lg">
                        <span className="line-through text-sm mr-2 text-white">
                            ₹{(pkg.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold text-white">
                            ₹{pkg.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1 text-white">onwards</span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {pkg.packageName}
                    </h2>

                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-[#00f6ff]" />
                            <span>{pkg.days}D/{pkg.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-[#00f6ff]" />
                            <span>{pkg.hotelDetails[0].city}</span>
                        </div>
                        {pkg.departureDates && (
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-[#00f6ff]" />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowDates(!showDates);
                                        setShowCities(false);
                                    }}
                                    className="hover:text-[#00f6ff] transition-colors"
                                >
                                    View Dates
                                </button>
                            </div>
                        )}
                        {pkg.departureCities && (
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-[#00f6ff]" />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowCities(!showCities);
                                        setShowDates(false);
                                    }}
                                    className="hover:text-[#00f6ff] transition-colors"
                                >
                                    Departure Cities
                                </button>
                            </div>
                        )}
                    </div>

                    {showDates && pkg.departureDates && (
                        <div
                            className="absolute bottom-full left-0 right-0 bg-black/90 p-4 rounded-t-lg max-h-[200px] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-[#00f6ff] font-semibold mb-2">Departure Dates</h3>
                            <div className="space-y-2">
                                {pkg.departureDates.map((departure, index) => (
                                    <div key={index} className="text-sm flex justify-between">
                                        <span>{departure.date}</span>
                                        {departure.price && (
                                            <span className="text-[#00f6ff]">₹{departure.price.toLocaleString('en-IN')}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {showCities && pkg.departureCities && (
                        <div
                            className="absolute bottom-full left-0 right-0 bg-black/90 p-4 rounded-t-lg max-h-[200px] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-[#00f6ff] font-semibold mb-2">Departure Cities</h3>
                            <div className="space-y-2">
                                {pkg.departureCities.map((departure, index) => (
                                    <div key={index} className="text-sm flex justify-between">
                                        <span>{departure.city}</span>
                                        <span className="text-[#00f6ff] font-semibold">₹{departure.price.toLocaleString('en-IN')}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <Link href={`/goa/${pkg.id}`}>
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

    const goaHighlights = [
        {
            title: "Pristine Beaches",
            image: "/UGCImages/goa/sight/2.png",
            description: "Experience stunning beaches from bustling Baga to serene Palolem"
        },
        {
            title: "Portuguese Heritage",
            image: "/UGCImages/goa/sight/1.png",
            description: "Explore UNESCO World Heritage churches and colonial architecture"
        },
        {
            title: "Water Sports & Adventure",
            image: "/UGCImages/goa/exp/1.png",
            description: "Enjoy thrilling water sports, parasailing, and jet skiing"
        },
        {
            title: "Vibrant Nightlife",
            image: "/UGCImages/goa/exp/2.png",
            description: "Experience world-famous beach parties and live music venues"
        },
        {
            title: "Goan Cuisine",
            image: "/UGCImages/goa/food/1.png",
            description: "Savor authentic Goan dishes with Portuguese and Konkani influences"
        },
        {
            title: "Spice Plantations",
            image: "/UGCImages/goa/exp/4.png",
            description: "Discover aromatic spice gardens and traditional farming methods"
        }
    ];

    const faqs = [
        {
            question: "What is the best time to visit Goa?",
            answer: "The best time to visit Goa is from November to February when the weather is pleasant and cool. This is peak tourist season with perfect conditions for beach activities."
        },
        {
            question: "What activities can I do in Goa?",
            answer: "Goa offers beach relaxation, water sports, heritage tours, spice plantation visits, river cruises, beach parties, shopping at flea markets, and Ayurvedic treatments."
        },
        {
            question: "Which are the must-visit places in Goa?",
            answer: "Must-visit places include Baga Beach, Old Goa churches, Fort Aguada, Palolem Beach, Anjuna Flea Market, Dudhsagar Falls, and Mandovi River cruise."
        },
        {
            question: "What are the famous Goan dishes to try?",
            answer: "Try Goan fish curry rice, pork vindaloo, bebinca, prawn balchão, chicken cafreal, and fresh seafood platters at beach shacks."
        }
    ] as const;

    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <audio
                    id="goaAudio"
                    loop
                    muted
                    autoPlay
                    className="hidden"
                >
                    <source src="/UGCImages/goa/goa.mp3" type="audio/mp3" />
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
                    id="goaVideo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/UGCImages/goa/goa.mp4" type="video/mp4" />
                    <Image
                        src="/UGCImages/goa/goa/1.png"
                        alt="Goa Paradise"
                        fill
                        className="object-cover"
                        priority
                    />
                </video>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6"
                        >
                            <span className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                Discover
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                Beach Paradise
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
                                    className="text-[#00f6ff]"
                                >
                                    Pristine Beaches
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-cyan-300"
                                >
                                    Vibrant Nightlife
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Rich Heritage
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Goa Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Goa Packages
                        </span>
                    </h2>
                    <div className="relative">
                        <div className="relative">
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

                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                    {packages
                                        .slice(currentPage * 3, (currentPage * 3) + 3)
                                        .map((goaPkg) => (
                                            <PackageCard key={goaPkg.id} package={goaPkg} />
                                        ))}
                                </div>
                            </div>

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

            {/* Goa Highlights Section */}
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
                                Experience the Magic of Goa
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {goaHighlights.map((highlight, index) => (
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
            <div className="max-w-3xl mx-auto mt-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Frequently Asked Questions
                    </span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq: { question: string; answer: string }, index: number) => (
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
            <div className="max-w-4xl mx-auto mt-16 prose prose-lg px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Discover Goa
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Goa, India&apos;s favorite beach destination, offers an enchanting blend of pristine beaches, vibrant nightlife, rich Portuguese heritage, and endless adventure. From the bustling beaches of North Goa like Baga and Calangute to the serene shores of South Goa like Palolem and Colva, each beach has its unique charm.
                    </p>
                    <p>
                        The Old Goa heritage sites showcase 450 years of Portuguese influence with magnificent churches like Basilica of Bom Jesus and Se Cathedral. Experience thrilling water sports, explore spice plantations, enjoy river cruises, and immerse yourself in the laid-back Goan lifestyle.
                    </p>
                    <p>
                        Our Goa tour packages include comfortable stays in beachfront resorts, heritage tours, water sports activities, and authentic culinary experiences that showcase the true essence of this tropical paradise.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
} 