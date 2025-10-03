'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import { singaporePackages, SingaporePackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Dancing_Script, Playfair_Display } from 'next/font/google';

// Lazy load heavy components
const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.div })));
const TripPlanRequest = lazy(() => import('../../components/TripPlanRequest'));

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });


export default function SingaporePackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const packages = Object.values(singaporePackages);
    const totalPages = Math.ceil(packages.length / 3);
    const [isMuted, setIsMuted] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    // Preload critical LCP image for mobile immediately
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png';
            link.fetchPriority = 'high';
            link.crossOrigin = 'anonymous';
            // Add immediately without waiting
            document.head.appendChild(link);

            // Also create an image object to force immediate loading
            const img = new window.Image();
            img['fetchPriority'] = 'high';
            img.src = 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png';

            return () => {
                if (document.head.contains(link)) {
                    document.head.removeChild(link);
                }
            };
        }
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Only load video on desktop and with longer delay
        if (!isMobile) {
            const timer = setTimeout(() => {
                setVideoLoaded(true);
            }, 2000); // Increased delay to not block LCP
            return () => clearTimeout(timer);
        }

        return () => window.removeEventListener('resize', checkMobile);
    }, [isMobile]);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const toggleMute = () => {
        if (isMobile) return; // Disable audio controls on mobile

        const audio = document.getElementById('singaporeAudio') as HTMLAudioElement;
        const video = document.getElementById('singaporeVideo') as HTMLVideoElement;
        if (audio && video) {
            if (isMuted) {
                audio.muted = false;
                video.muted = true;
                audio.play().catch(() => { }); // Handle autoplay restrictions
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
        package: SingaporePackage;
    }) => {
        const [showDates, setShowDates] = useState(false);

        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                <Image
                    src={pkg.images[0]}
                    alt={pkg.packageName}
                    fill
                    className={`object-cover transition-transform duration-500 ${isMobile ? '' : 'group-hover:scale-105'}`}
                    sizes="(max-width: 480px) 300px, (max-width: 768px) 350px, (max-width: 1280px) 400px, 450px"
                    priority={currentPage === 0} // Only prioritize first page images
                    loading={currentPage === 0 ? "eager" : "lazy"}
                    quality={isMobile ? 70 : 85}
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

                    <Link href={`/singapore/${pkg.id}`}>
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

    const singaporeHighlights = [
        {
            title: "Modern City",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png",
            description: "Experience the ultra-modern cityscape and architecture"
        },
        {
            title: "Theme Parks",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/2.png",
            description: "Enjoy Universal Studios and other attractions"
        },
        {
            title: "Cultural Heritage",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/3.png",
            description: "Explore diverse cultural neighborhoods"
        },
        {
            title: "Shopping Paradise",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/4.png",
            description: "World-class shopping on Orchard Road"
        },
        {
            title: "Gardens & Nature",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/5.png",
            description: "Visit Gardens by the Bay and nature parks"
        },
        {
            title: "Culinary Delights",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/6.png",
            description: "Savor local cuisine at hawker centers"
        },
        {
            title: "Marina Bay Sands",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/7.png",
            description: "Iconic landmark with stunning city views"
        },
        {
            title: "Sentosa Island",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/8.png",
            description: "Beach resort destination with attractions"
        },
        {
            title: "Merlion Park",
            image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/9.png",
            description: "Singapore's iconic symbol and landmark"
        },

    ];

    const faqs = [
        {
            question: "What is the best time to visit Singapore?",
            answer: "Singapore is a year-round destination. However, October to October typically has the best weather with less rainfall."
        },
        {
            question: "Do Indians need a visa for Singapore?",
            answer: "Yes, Indian citizens need a visa to enter Singapore. The process is relatively straightforward and can be done online."
        },
        {
            question: "What are the must-visit attractions?",
            answer: "Popular attractions include Gardens by the Bay, Universal Studios, Marina Bay Sands, Sentosa Island, and Singapore Zoo."
        },
        {
            question: "Is Singapore expensive to visit?",
            answer: "Singapore can be relatively expensive, but there are options for all budgets, especially for food at hawker centers."
        }
    ] as const;

    return (
        <div className="min-h-screen">
            {/* Hero Section with Optimized Media */}
            <div className={`relative h-[60vh] md:h-[100vh] w-full overflow-hidden ${isMobile ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600' : ''}`}>
                {/* Conditional Audio for Desktop Only */}
                {!isMobile && (
                    <audio
                        id="singaporeAudio"
                        loop
                        muted
                        className="hidden"
                        preload="none"
                    >
                        <source src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/audio/singapore.mp3" type="audio/mp3" />
                    </audio>
                )}

                {/* Audio Control Button - Desktop Only */}
                {!isMobile && (
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
                )}

                {/* Conditional Video for Desktop, Optimized Image for Mobile */}
                {!isMobile && videoLoaded ? (
                    <video
                        id="singaporeVideo"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        poster="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png"
                        preload="none"
                        onError={() => setVideoLoaded(false)}
                    >
                        <source
                            src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/video/singaporeBG.mp4"
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <Image
                        src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/banner/1.png"
                        alt="Singapore Background"
                        fill
                        className="object-cover"
                        priority={true}
                        fetchPriority="high"
                        sizes="100vw"
                        quality={isMobile ? 50 : 85}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AArcB4cE5E1gAAAAASUVORK5CYII="
                    />
                )}

                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        {isMobile ? (
                            // Simple static content for mobile to avoid blocking main thread
                            <h1 className="text-4xl md:text-7xl font-bold mb-6">
                                <span className={`block font-dancing-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                    Welcome to
                                </span>
                                <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                    Singapore
                                </span>
                            </h1>
                        ) : (
                            // Animated content for desktop
                            <Suspense fallback={
                                <h1 className="text-4xl md:text-7xl font-bold mb-6">
                                    <span className={`block font-dancing-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                        Welcome to
                                    </span>
                                    <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                        Singapore
                                    </span>
                                </h1>
                            }>
                                <MotionDiv
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-4xl md:text-7xl font-bold mb-6"
                                >
                                    <span className={`block font-dancing-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                        Welcome to
                                    </span>
                                    <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                        Singapore
                                    </span>
                                </MotionDiv>
                            </Suspense>
                        )}

                        <div className="space-y-4">
                            <p className="text-xl md:text-2xl text-white/90 font-light">
                                Where tradition meets tomorrow
                            </p>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <span className="text-yellow-300">Modern City</span>
                                <span className="text-blue-300">Rich Culture</span>
                                <span className="text-green-300">Amazing Food</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Singapore Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Singapore Packages
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
                                        .map((singaporePkg) => (
                                            <PackageCard key={singaporePkg.id} package={singaporePkg} />
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

            {/* Singapore Highlights Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                Experience the Magic of Singapore
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {singaporeHighlights.map((highlight, index) => (
                                <div
                                    key={highlight.title}
                                    className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]"
                                >
                                    <Image
                                        src={highlight.image}
                                        alt={highlight.title}
                                        fill
                                        className={`object-cover transition-transform duration-700 ${isMobile ? '' : 'group-hover:scale-110'}`}
                                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 350px"
                                        loading={index < 3 ? "eager" : "lazy"}
                                        quality={isMobile ? 70 : 85}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                                        <p className={`text-sm text-white/90 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300'}`}>
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                        Discover Singapore
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Singapore, a dynamic city-state where tradition meets modernity, offers visitors an unforgettable blend of cultural experiences, world-class attractions, and culinary delights.
                    </p>
                    <p>
                        Our Singapore tour packages include visits to iconic locations like Gardens by the Bay, Universal Studios Singapore, and Marina Bay Sands, combining entertainment with cultural experiences.
                    </p>
                    <p>
                        Experience the rich multicultural heritage through visits to Little India, Chinatown, and Arab Street, while enjoying the citys famous hawker centers and modern shopping districts.
                    </p>
                </div>
            </div>

            <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
                <TripPlanRequest />
            </Suspense>
        </div>
    );
} 