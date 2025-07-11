'use client';

import { useState } from 'react';
import Link from 'next/link';
import { philippinesPackages, philippinesPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TripPlanRequest from '../../components/TripPlanRequest';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function PhilippinesPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(philippinesPackages);
    const totalPages = Math.ceil(packages.length / 3);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const PackageCard = ({
        package: pkg
    }: {
        package: philippinesPackage;
    }) => {
        const [showDates, setShowDates] = useState(false);
        const [showCities, setShowCities] = useState(false);

        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                {/* Background Image */}
                <Image
                    src={pkg.images[0]}
                    alt={pkg.packageName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                {/* Price Tag */}
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

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {pkg.packageName}
                    </h2>

                    {/* Details Grid */}
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

                    {/* Departure Dates Popup */}
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

                    {/* Departure Cities Popup */}
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

                    {/* View Details Button */}
                    <Link href={`/philippines/${pkg.id}`}>
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

    const philippinesHighlights = [
        {
            title: "Tropical Beaches",
            image: "/webImage/Philippines/1/1.webp",
            description: "Pristine white sand beaches with crystal clear turquoise waters"
        },
        {
            title: "Island Hopping",
            image: "/webImage/Philippines/1/2.webp",
            description: "Explore multiple tropical islands with snorkeling and diving"
        },
        {
            title: "Underground River",
            image: "/webImage/Philippines/1/3.webp",
            description: "UNESCO World Heritage limestone cave system in Palawan"
        },
        {
            title: "Spanish Heritage",
            image: "/webImage/Philippines/1/4.webp",
            description: "Historic Intramuros and colonial architecture in Manila"
        },
        {
            title: "Filipino Cuisine",
            image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png",
            description: "Authentic adobo, lechon, and tropical fruits"
        },
        {
            title: "Marine Life",
            image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png",
            description: "Rich underwater biodiversity perfect for diving enthusiasts"
        }
    ];

    const faqs = [
        {
            question: "What is the best time to visit Philippines?",
            answer: "The best time to visit Philippines is from November to April during the dry season when the weather is perfect for beach activities and island hopping."
        },
        {
            question: "Do Indian citizens need a visa for Philippines?",
            answer: "Indian citizens can get visa on arrival for stays up to 30 days, or apply for an e-visa online before travel."
        },
        {
            question: "What activities can I do in Philippines?",
            answer: "Philippines offers island hopping, snorkeling, diving, underground river tours, beach activities, cultural tours, and adventure sports."
        },
        {
            question: "Which are the must-visit places in Philippines?",
            answer: "Must-visit places include Boracay's White Beach, Palawan's Underground River, Manila's Intramuros, Cebu, and El Nido."
        }
    ] as const;

    return (
        <div className="min-h-screen">
            {/* Hero Section with Image */}
            <div className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden">
                <Image
                    src="/Assets/DestinationsImage/dubaiImage.jpeg"
                    alt="Philippines Paradise"
                    fill
                    className="object-cover"
                    priority
                />
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
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                Pearl of the Orient Seas
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
                                    Island Adventures
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

            {/* Philippines Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Philippines Packages
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
                                        .map((philippinesPkg) => (
                                            <PackageCard key={philippinesPkg.id} package={philippinesPkg} />
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

            {/* Philippines Highlights Section */}
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
                                Experience the Magic of Philippines
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {philippinesHighlights.map((highlight, index) => (
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
                        Discover Philippines
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Philippines, known as the &quot;Pearl of the Orient Seas,&quot; offers an enchanting archipelago of over 7,000 islands with pristine beaches, crystal-clear waters, and rich cultural heritage. From the world-famous White Beach of Boracay to the underground rivers of Palawan, each destination offers unique experiences.
                    </p>
                    <p>
                        Manila showcases Spanish colonial architecture in Intramuros, while Palawan boasts UNESCO World Heritage sites and incredible marine biodiversity. Experience island hopping adventures, snorkeling in coral reefs, and authentic Filipino hospitality.
                    </p>
                    <p>
                        Our Philippines tour packages include comfortable stays in beach resorts, domestic flights between islands, and authentic cultural experiences that showcase the warmth and beauty of this tropical paradise.
                    </p>
                </div>
            </div>

            <TripPlanRequest />
        </div>
    );
} 