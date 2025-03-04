'use client';

import { useState } from 'react';
import Link from 'next/link';
import { baliPackages, BaliPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';

export default function BaliPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(baliPackages);
    const totalPages = Math.ceil(packages.length / 3);
    const [isMuted, setIsMuted] = useState(true);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        const audio = document.getElementById('baliAudio') as HTMLAudioElement;
        const video = document.getElementById('baliVideo') as HTMLVideoElement;
        if (audio && video) {
            if (isMuted) {
                // When unmuting
                audio.muted = false;
                video.muted = true; // Keep video muted
                audio.play(); // Ensure audio plays
                audio.volume = 0.5; // Set volume to 50%
            } else {
                // When muting
                audio.muted = true;
                audio.pause(); // Pause the audio
            }
            setIsMuted(!isMuted);
        }
    };

    const PackageCard = ({ package: baliPackage }: { package: BaliPackage }) => {
        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                {/* Background Image */}
                <Image 
                    src={baliPackage.images[0]} 
                    alt={baliPackage.packageName}
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
                            ₹{(baliPackage.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold">
                            ₹{baliPackage.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1">onwards</span>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {baliPackage.packageName}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{baliPackage.days}D/{baliPackage.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-yellow-400" />
                            <span>{baliPackage.hotelDetails[0].city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>{baliPackage.dateStart}</span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/bali/${baliPackage.id}`}>
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
            question: "What is the best time to visit Bali?",
            answer: "The best time to visit Bali is from May to July when the weather is dry and less humid. December is peak season with higher prices, while January sees more rainfall."
        },
        {
            question: "What activities can I do in Bali?",
            answer: "Bali offers numerous activities including scuba diving, snorkeling, surfing, temple visits, mountain trekking, rice terrace tours, and traditional dance performances."
        },
        {
            question: "Which temples should I visit in Bali?",
            answer: "Must-visit temples include Uluwatu Temple (famous for sunset views and Kecak dance), Tanah Lot Temple, and Ulun Danu Temple."
        },
        {
            question: "What adventure activities are available?",
            answer: "You can enjoy mountain biking, trekking Mount Batur, white water rafting, parasailing, canyon tubing, and various water sports."
        }
    ];

    const baliHighlights = [
        {
            title: "Culture & Traditions",
            image: "/UGCImages/bali/baliHomepage/baliCulture.jpg",
            description: "Experience traditional Balinese ceremonies, dance performances, and local customs"
        },
        {
            title: "Cuisine & Dining",
            image: "/UGCImages/bali/baliHomepage/cuisine.png",
            description: "Savor authentic Indonesian dishes, fresh seafood, and local delicacies"
        },
        {
            title: "Sacred Temples",
            image: "/UGCImages/bali/baliHomepage/landscape.jpg",
            description: "Visit ancient temples like Tanah Lot, Uluwatu, and Ulun Danu Beratan"
        },
        {
            title: "Nature & Landscapes",
            image: "/UGCImages/bali/baliHomepage/nature.jpg",
            description: "Explore stunning rice terraces, volcanoes, and tropical forests"
        },
        {
            title: "Beach Paradise",
            image: "/UGCImages/bali/baliHomepage/beach.jpg",
            description: "Relax on pristine beaches and enjoy world-class water sports"
        },
        {
            title: "Wellness & Spa",
            image: "/UGCImages/bali/baliHomepage/spa.jpg",
            description: "Indulge in traditional Balinese spa treatments and yoga retreats"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Video */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                {/* Add audio element */}
                <audio
                    id="baliAudio"
                    loop
                    muted
                    autoPlay
                    className="hidden"
                >
                    <source src="/UGCImages/bali/Bali Banner/baliMobile/bali.mp3" type="audio/mp3" />
                </audio>

                {/* Add audio control button */}
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
                    id="baliVideo"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/UGCImages/bali/balii.mp4" type="video/mp4" />
                    {/* Fallback image in case video fails to load */}
                    <Image
                        src="/UGCImages/bali/bali.jpg"
                        alt="Bali Paradise"
                        fill
                        className="object-cover"
                        priority
                    />
                </video>
                <div className="absolute inset-0 bg-black/40" /> {/* Slightly reduced opacity for better video visibility */}
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6"
                        >
                            <span className="block bg-gradient-to-r from-yellow-300 via-pink-200 to-yellow-300 bg-clip-text text-transparent font-serif mt-10 sm:text-3xl md:text-4xl lg:text-5xl">
                                Discover Paradise
                            </span>
                            <span className="block bg-gradient-to-r from-blue-400 via-teal-300 to-blue-400 bg-clip-text text-transparent mt-2">
                                in Bali
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
                                    Relaxation
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
                            Our Bali Packages
                        </span>
                    </h2>
                    <div className="relative ">
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
                                        .map((baliPkg) => (
                                            <PackageCard key={baliPkg.id} package={baliPkg} />
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

            {/* Bali Highlights Section */}
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
                                Experience the Magic of Bali
                            </span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {baliHighlights.map((highlight, index) => (
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

            {/* Packages Section */}
           

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
                        Discover Bali
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        The beaches in Bali are something to look forward to, as the golden shaded beaches and water are fairly land for the surfers. You are basically spoilt for choices in the activities available.
                    </p>
                    <p>
                        Moving on to the land, the Bali Tour Package consist of a trek in Mount Batur, visit the Tegallalang Rice Terraces and being amidst the animals in the Bali safari and marine parks, mountain biking in the landscapes and the paddy fields.
                    </p>
                    <p>
                        These packages include some serene spots like the Uluwatu temple, Ulun Danu temple and Tanah lot temple where you can take in all the spirituality and serenity as well.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
} 