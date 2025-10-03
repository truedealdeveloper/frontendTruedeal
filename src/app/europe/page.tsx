'use client';

import { useState } from 'react';
import Link from 'next/link';
import { europePackages, EuropePackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';

export default function EuropePackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(europePackages);
    const totalPages = Math.ceil(packages.length / 3);
    const [isMuted, setIsMuted] = useState(true);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('europeAudio') as HTMLAudioElement;
        const video = document.getElementById('europeVideo') as HTMLVideoElement;
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

    const PackageCard = ({ package: europePackage }: { package: EuropePackage }) => {
        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                <Image
                    src={europePackage.images[0]}
                    alt={europePackage.packageName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />
                <div className="absolute top-3 left-0 z-10">
                    <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                        <span className="line-through text-sm mr-2">
                            ₹{(europePackage.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold">
                            ₹{europePackage.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1">onwards</span>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {europePackage.packageName}
                    </h2>
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{europePackage.days}D/{europePackage.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-yellow-400" />
                            <span>{europePackage.hotelDetails[0].city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>{europePackage.dateStart}</span>
                        </div>
                    </div>
                    <Link href={`/europe/${europePackage.id}`}>
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
            question: "What is the best time to visit Europe?",
            answer: "The best time to visit Europe is from May to October when the weather is pleasant and most tourist attractions are open. Spring (April-June) and early autumn (October-October) offer mild weather and fewer crowds."
        },
        {
            question: "Do Indians need a visa for Europe?",
            answer: "Yes, Indians need a Schengen visa to visit most European countries. The visa allows travel to 26 European countries for up to 90 days within a 180-day period."
        },
        {
            question: "What are the must-visit European destinations?",
            answer: "Popular destinations include Paris (France), Rome (Italy), Amsterdam (Netherlands), Swiss Alps (Switzerland), Prague (Czech Republic), and Barcelona (Spain). Each offers unique culture, history, and experiences."
        },
        {
            question: "What currency is used in Europe?",
            answer: "Most European Union countries use the Euro (EUR). However, some countries like the UK use Pound Sterling, Switzerland uses Swiss Franc, and Czech Republic uses Czech Koruna."
        }
    ];

    const europeHighlights = [
        {
            title: "Historic Architecture",
            image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
            description: "Explore medieval castles, Gothic cathedrals, and Renaissance palaces across Europe"
        },
        {
            title: "Art & Museums",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
            description: "Visit world-famous museums like the Louvre, Vatican Museums, and Uffizi Gallery"
        },
        {
            title: "Alpine Adventures",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            description: "Experience breathtaking mountain scenery, skiing, and scenic train journeys"
        },
        {
            title: "Culinary Delights",
            image: "https://images.unsplash.com/photo-1753442362081-30738fed58f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dpdHplcmxhbmQlMjBmb29kfGVufDB8fDB8fHww",
            description: "Savor authentic European cuisine from Chicken to desserts"
        },
        {
            title: "Romantic Cities",
            image: "https://images.unsplash.com/photo-1650538230322-069d33d0fdbe?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Experience the romance of Paris, Venice, Prague, and other enchanting cities"
        },
        {
            title: "Cultural Heritage",
            image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop",
            description: "Discover rich cultural traditions, festivals, and local customs"
        }
    ];

    return (
        <div className="min-h-screen">
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <audio id="europeAudio" loop muted autoPlay className="hidden">
                    <source src="https://www.soundjay.com/misc/sounds/magic-chime-02.mp3" type="audio/mp3" />
                </audio>
                <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 text-white shadow-lg"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                    {isMuted ? <FaVolumeMute className="w-6 h-6" /> : <FaVolumeUp className="w-6 h-6" />}
                </button>
                <video id="europeVideo" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/video/europee.mp4" type="video/mp4" />
                    <Image src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1200&h=800&fit=crop" alt="Europe Paradise" fill className="object-cover" priority />
                </video>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-7xl font-bold mb-6">
                            <span className="block bg-gradient-to-r from-yellow-300 via-pink-200 to-yellow-300 bg-clip-text text-transparent font-serif mt-10 sm:text-3xl md:text-4xl lg:text-5xl">
                                Discover the Magic
                            </span>
                            <span className="block bg-gradient-to-r from-blue-400 via-teal-300 to-blue-400 bg-clip-text text-transparent mt-2">
                                of Europe
                            </span>
                        </motion.h1>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="space-y-4">
                            <motion.p className="text-xl md:text-2xl text-white/90 font-light" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                                Experience the perfect blend of
                            </motion.p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.5 }} className="text-yellow-300">History</motion.span>
                                <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.5 }} className="text-blue-300">Culture</motion.span>
                                <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.1, duration: 0.5 }} className="text-green-300">Romance</motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">Our Europe Packages</span>
                    </h2>
                    <div className="relative">
                        <div className="relative">
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
                                <Button onClick={handlePrevPage} disabled={currentPage === 0} variant="outline" className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -ml-5 shadow-lg">
                                    <FaChevronLeft className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
                                <Button onClick={handleNextPage} disabled={currentPage === totalPages - 1} variant="outline" className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -mr-5 shadow-lg">
                                    <FaChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                                    {packages.slice(currentPage * 3, (currentPage * 3) + 3).map((europePkg) => (
                                        <PackageCard key={europePkg.id} package={europePkg} />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-3 flex justify-center items-center gap-2 md:hidden">
                                <Button onClick={handlePrevPage} disabled={currentPage === 0} variant="outline" className="rounded-full w-8 h-8 p-0">
                                    <FaChevronLeft className="w-3 h-3" />
                                </Button>
                                <span className="text-sm text-gray-500">{currentPage + 1} / {totalPages}</span>
                                <Button onClick={handleNextPage} disabled={currentPage === totalPages - 1} variant="outline" className="rounded-full w-8 h-8 p-0">
                                    <FaChevronRight className="w-3 h-3" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">Experience the Wonders of Europe</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {europeHighlights.map((highlight, index) => (
                                <motion.div key={highlight.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]">
                                    <Image src={highlight.image} alt={highlight.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                                        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{highlight.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                                <span className="font-medium">{faq.question}</span>
                                {openFaq === index ? <FaMinus className="flex-shrink-0 text-gray-400" /> : <FaPlus className="flex-shrink-0 text-gray-400" />}
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
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">Discover Europe</span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>Europe offers an incredible diversity of experiences, from the romantic streets of Paris to the stunning Alpine landscapes of Switzerland. Each country has its own unique culture, cuisine, and historical treasures waiting to be explored.</p>
                    <p>Our Europe Tour Packages include visits to iconic landmarks like the Eiffel Tower, Colosseum, Swiss Alps, and charming canals of Amsterdam. Experience world-class museums, savor authentic local cuisine, and create unforgettable memories across multiple countries.</p>
                    <p>Whether you&apos;re seeking romance in Venice, adventure in the Swiss mountains, or cultural immersion in historic cities, our carefully crafted itineraries ensure you experience the very best of Europe with comfort and convenience.</p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
}
