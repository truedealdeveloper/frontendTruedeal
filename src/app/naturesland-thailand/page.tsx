'use client';

import { useState } from 'react';
import Link from 'next/link';
import { thailandPackages, thailandPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function ThailandPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(thailandPackages);
    const totalPages = Math.ceil(packages.length / 3);

    // Debug logging
    console.log('Total packages:', packages.length);
    console.log('Package data:', packages.map(pkg => ({ id: pkg.id, name: pkg.packageName, firstImage: pkg.images?.[0] })));
    console.log('Images exist check:', packages.map(pkg => ({
        id: pkg.id,
        hasImages: !!pkg.images,
        imageCount: pkg.images?.length || 0,
        firstImage: pkg.images?.[0] || 'NO IMAGE'
    })));

    // Test specific image path
    console.log('Testing image path:', 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp');
    const [isMuted, setIsMuted] = useState(true);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('thailandAudio') as HTMLAudioElement;
        const video = document.getElementById('thailandVideo') as HTMLVideoElement;
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

    const PackageCard = ({ package: pkg }: { package: thailandPackage }) => {
        const [showDates, setShowDates] = useState(false);

        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                <Image
                    src={pkg.images?.[0] || 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp'}
                    alt={pkg.packageName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"

                    onError={(setError) => {
                        console.error('Image failed to load:', pkg.images?.[0]);
                        console.error('Package ID:', pkg.id);
                        console.error('Available images:', pkg.images);
                        console.error('Error event:', setError);
                    }}
                    onLoad={() => {
                        console.log('Image loaded successfully:', pkg.images?.[0]);
                    }}
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
                    <h2 className="text-2xl font-bold mb-2">{pkg.packageName}</h2>
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
                                    <div key={index} className="text-sm">{departure.date}</div>
                                ))}
                            </div>
                        </div>
                    )}
                    <Link href={`/naturesland-thailand/${pkg.id}`}>
                        <Button className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500">
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
            answer: "The best time to visit Thailand is from November to March when the weather is cool and dry. April to June can be hot, while July to October is the rainy season."
        },
        {
            question: "What activities can I do in Thailand?",
            answer: "Thailand offers numerous activities including temple visits, island hopping, snorkeling, diving, elephant sanctuaries, cooking classes, and traditional Thai massage."
        },
        {
            question: "Which temples should I visit in Thailand?",
            answer: "Must-visit temples include Wat Pho (Reclining Buddha), Grand Palace (Emerald Buddha), Wat Arun (Temple of Dawn), and Doi Suthep in Chiang Mai."
        },
        {
            question: "What adventure activities are available?",
            answer: "You can enjoy zip-lining, rock climbing at Railay Beach, jungle trekking, white water rafting, and various water sports like jet skiing and parasailing."
        }
    ] as const;

    return (
        <div className="min-h-screen">
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <audio id="thailandAudio" loop muted autoPlay className="hidden">
                    <source src="/UGCImages/thailand/thailand.mp3" type="audio/mp3" />
                </audio>
                <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 text-white shadow-lg"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                    {isMuted ? <FaVolumeMute className="w-6 h-6" /> : <FaVolumeUp className="w-6 h-6" />}
                </button>
                <video id="thailandVideo" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/Videos/thai.mp4" type="video/mp4" />
                    <Image src="/UGCImages/thailand/thailand.jpg" alt="Thailand Paradise" fill className="object-cover" priority />
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
                            <span className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                Land of Smiles
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-orange-100 to-red-100 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
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
                                    Ancient Temples
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Tropical Islands
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-green-300"
                                >
                                    Rich Culture
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
                            {/* Debug: Test basic image loading */}
                            {/* <div className="mb-4 p-4 bg-yellow-100 rounded">
                                <p>Debug: Testing basic image:</p>
                                <img src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp" alt="Test Thailand Image" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                            </div> */}

                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                    {packages
                                        .slice(currentPage * 3, (currentPage * 3) + 3)
                                        .map((thailandPkg) => (
                                            <PackageCard key={thailandPkg.id} package={thailandPkg} />
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



            <div className="max-w-3xl mx-auto mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Frequently Asked Questions
                    </span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq: { question: string; answer: string }, index: number) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
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

            <div className="max-w-4xl mx-auto mt-16 prose prose-lg">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Discover Thailand
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        The beaches in Thailand are something to look forward to, as the golden sandy beaches and crystal-clear waters are perfect for beach lovers and water sports enthusiasts. You are basically spoilt for choices in the activities available.
                    </p>
                    <p>
                        Moving on to the cultural side, the Thailand Tour Packages consist of visits to magnificent temples like Wat Pho and Grand Palace, exploring floating markets, experiencing traditional Thai massages, and immersing yourself in the vibrant street food culture.
                    </p>
                    <p>
                        These packages include some serene spots like the Grand Palace, Wat Arun temple, and Doi Suthep temple where you can take in all the spirituality and serenity, while also experiencing the bustling energy of Bangkok&apos;s markets and nightlife.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
}
