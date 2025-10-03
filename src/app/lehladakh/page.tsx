'use client';

import { useState } from 'react';
import Link from 'next/link';
import { lehladakhPackages, withoutFlightPackages, LehladakhPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function LehladakhPackages() {
    const [currentPageWithFlight, setCurrentPageWithFlight] = useState(0);
    const [currentPageNoFlight, setCurrentPageNoFlight] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    const packagesWithFlight = Object.values(lehladakhPackages);
    const packagesWithoutFlight = Object.values(withoutFlightPackages);

    const totalPagesWithFlight = Math.ceil(packagesWithFlight.length / 3);
    const totalPagesNoFlight = Math.ceil(packagesWithoutFlight.length / 3);

    const handlePrevPageWithFlight = () => {
        setCurrentPageWithFlight(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPageWithFlight = () => {
        setCurrentPageWithFlight(prev => prev < totalPagesWithFlight - 1 ? prev + 1 : prev);
    };

    const handlePrevPageNoFlight = () => {
        setCurrentPageNoFlight(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPageNoFlight = () => {
        setCurrentPageNoFlight(prev => prev < totalPagesNoFlight - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('lehladakhAudio') as HTMLAudioElement;
        const video = document.getElementById('lehladakhVideo') as HTMLVideoElement;
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
        package: pkg,
        withFlight = true
    }: {
        package: LehladakhPackage;
        withFlight?: boolean;
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
                    {!withFlight && (
                        <div className="mt-2 bg-blue-500 text-white px-4 py-1.5 rounded-full shadow-lg text-sm">
                            Without Flights
                        </div>
                    )}
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
                                {pkg.departureDates.map((departure: { date: string }, index: number) => (
                                    <div key={index} className="text-sm">
                                        {departure.date}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <Link href={`/lehladakh/${pkg.id}`}>
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

    const lehladakhHighlights = [
        {
            title: "Pangong Lake",
            image: "/UGCImages/LADAKH/leh/1.png",
            description: "Visit the stunning blue waters of Pangong Lake"
        },
        {
            title: "Monasteries",
            image: "/UGCImages/LADAKH/leh/2.png",
            description: "Explore ancient Buddhist monasteries and culture"
        },
        {
            title: "Nubra Valley",
            image: "/UGCImages/LADAKH/leh/3.png",
            description: "Experience the unique desert landscape and double-humped camels"
        },
        {
            title: "Khardung La",
            image: "/UGCImages/LADAKH/leh/4.png",
            description: "Visit one of the world's highest motorable passes"
        },
        {
            title: "Local Culture",
            image: "/UGCImages/LADAKH/leh/5.png",
            description: "Immerse yourself in Ladakhi culture and traditions"
        },
        {
            title: "Adventure Sports",
            image: "/UGCImages/LADAKH/leh/6.png",
            description: "Experience river rafting and mountain biking"
        }
    ];

    const faqs = [
        {
            question: "What is the best time to visit Leh Ladakh?",
            answer: "The best time to visit Leh Ladakh is from October to October when the weather is most favorable and all passes are open."
        },
        {
            question: "Do I need special permits to visit Leh Ladakh?",
            answer: "Yes, Indian tourists need Inner Line Permits for certain areas. Foreign tourists need Protected Area Permits (PAP) for restricted areas."
        },
        {
            question: "How to deal with altitude sickness?",
            answer: "Take 1-2 days to acclimatize, stay hydrated, avoid alcohol, and don't over-exert yourself in the first few days."
        },
        {
            question: "What are the must-visit attractions?",
            answer: "Key attractions include Pangong Lake, Nubra Valley, Khardung La Pass, Shanti Stupa, and various monasteries like Thiksey and Hemis."
        }
    ] as const;

    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <audio
                    id="lehladakhAudio"
                    loop
                    muted
                    autoPlay
                    className="hidden"
                >
                    <source src="/UGCImages/leh/leh.mp3" type="audio/mp3" />
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
                    id="lehladakhVideo"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/UGCImages/leh/leh/6.webp"
                    preload="metadata"
                    onError={(e) => {
                        const fallbackImage = e.currentTarget.parentElement?.querySelector('img');
                        if (fallbackImage) {
                            fallbackImage.style.display = 'block';
                        }
                    }}
                >
                    <source
                        src="/UGCImages/leh/leh.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Fallback image */}
                <Image
                    src="/UGCImages/leh/leh/6.webp"
                    alt="Leh Ladakh Background"
                    fill
                    className="object-cover hidden"
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
                            <span className={`block font-dancing-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                Welcome to
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                Leh Ladakh
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
                                The Land of High Passes and Beautiful Mountains
                            </motion.p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-yellow-300"
                                >
                                    Mountains
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Rivers
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-green-300"
                                >
                                    Lakes
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* With Flights Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            With Flights Fixed Departures
                        </span>
                    </h2>
                    <div className="relative">
                        {/* Navigation Controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
                            <Button
                                onClick={handlePrevPageWithFlight}
                                disabled={currentPageWithFlight === 0}
                                variant="outline"
                                className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -ml-5 shadow-lg"
                            >
                                <FaChevronLeft className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
                            <Button
                                onClick={handleNextPageWithFlight}
                                disabled={currentPageWithFlight === totalPagesWithFlight - 1}
                                variant="outline"
                                className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -mr-5 shadow-lg"
                            >
                                <FaChevronRight className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Packages Grid */}
                        <div className="overflow-x-auto -mx-4 px-4 md:overflow-x-visible">
                            <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                {packagesWithFlight
                                    .slice(currentPageWithFlight * 3, (currentPageWithFlight * 3) + 3)
                                    .map((pkg) => (
                                        <PackageCard
                                            key={pkg.id}
                                            package={pkg}
                                            withFlight={true}
                                        />
                                    ))}
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="mt-6 flex justify-center items-center gap-2 md:hidden">
                            <Button
                                onClick={handlePrevPageWithFlight}
                                disabled={currentPageWithFlight === 0}
                                variant="outline"
                                className="rounded-full w-8 h-8 p-0"
                            >
                                <FaChevronLeft className="w-3 h-3" />
                            </Button>
                            <span className="text-sm text-gray-500">
                                {currentPageWithFlight + 1} / {totalPagesWithFlight}
                            </span>
                            <Button
                                onClick={handleNextPageWithFlight}
                                disabled={currentPageWithFlight === totalPagesWithFlight - 1}
                                variant="outline"
                                className="rounded-full w-8 h-8 p-0"
                            >
                                <FaChevronRight className="w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Without Flights Section */}
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Without Flights Fixed Departures
                        </span>
                    </h2>
                    <div className="relative">
                        {/* Navigation Controls */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
                            <Button
                                onClick={handlePrevPageNoFlight}
                                disabled={currentPageNoFlight === 0}
                                variant="outline"
                                className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -ml-5 shadow-lg"
                            >
                                <FaChevronLeft className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
                            <Button
                                onClick={handleNextPageNoFlight}
                                disabled={currentPageNoFlight === totalPagesNoFlight - 1}
                                variant="outline"
                                className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -mr-5 shadow-lg"
                            >
                                <FaChevronRight className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Packages Grid */}
                        <div className="overflow-x-auto -mx-4 px-4 md:overflow-x-visible">
                            <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                {packagesWithoutFlight
                                    .slice(currentPageNoFlight * 3, (currentPageNoFlight * 3) + 3)
                                    .map((pkg) => (
                                        <PackageCard
                                            key={pkg.id}
                                            package={pkg}
                                            withFlight={false}
                                        />
                                    ))}
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="mt-6 flex justify-center items-center gap-2 md:hidden">
                            <Button
                                onClick={handlePrevPageNoFlight}
                                disabled={currentPageNoFlight === 0}
                                variant="outline"
                                className="rounded-full w-8 h-8 p-0"
                            >
                                <FaChevronLeft className="w-3 h-3" />
                            </Button>
                            <span className="text-sm text-gray-500">
                                {currentPageNoFlight + 1} / {totalPagesNoFlight}
                            </span>
                            <Button
                                onClick={handleNextPageNoFlight}
                                disabled={currentPageNoFlight === totalPagesNoFlight - 1}
                                variant="outline"
                                className="rounded-full w-8 h-8 p-0"
                            >
                                <FaChevronRight className="w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Highlights Section */}
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
                                Experience the Magic of Ladakh
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {lehladakhHighlights.map((highlight, index) => (
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
                        Discover Leh Ladakh
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Leh Ladakh, often called the Land of High Passes. It is a region where ancient monasteries perch on rugged cliffs, crystal-clear lakes mirror snow-capped peaks, and the culture remains as pristine as its landscapes.
                    </p>
                    <p>
                        Our Leh Ladakh tour packages include visits to iconic locations like Pangong Lake, Nubra Valley, and ancient monasteries, combining adventure with cultural experiences.
                    </p>
                    <p>
                        Experience the rich Buddhist heritage, marvel at the dramatic landscapes, and interact with the warm-hearted Ladakhi people while enjoying local cuisine and traditional hospitality.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
} 