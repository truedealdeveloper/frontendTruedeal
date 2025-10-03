'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { keralaPackages, keralaPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Dancing_Script, Playfair_Display } from 'next/font/google';
import { useMobile } from '@/hooks/use-mobile';
import { useImagePreloader, useScrollOptimization, useRenderTime } from '@/hooks/use-performance';

// Lazy load heavy components
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
    ssr: false,
    loading: () => <div className="animate-pulse" />
});

const MotionH1 = dynamic(() => import('framer-motion').then(mod => mod.motion.h1), {
    ssr: false,
    loading: () => <h1 className="animate-pulse" />
});

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), {
    ssr: false,
    loading: () => <p className="animate-pulse" />
});

const MotionSpan = dynamic(() => import('framer-motion').then(mod => mod.motion.span), {
    ssr: false,
    loading: () => <span className="animate-pulse" />
});

const TripPlanRequest = dynamic(() => import('../../components/TripPlanRequest'), {
    ssr: false,
    loading: () => <div className="h-32 animate-pulse bg-gray-200 rounded-lg" />
});

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

export default function KeralaPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const isMobile = useMobile();

    // Performance optimizations
    useRenderTime('KeralaPackages');
    useScrollOptimization();

    // Preload critical images
    const criticalImages = useMemo(() => [
        '/webImage/kerala/mobile/kerala1.jpg',
        '/UGCImages/kerala/keralaa/backwater.png',
        '/UGCImages/kerala/keralaa/tea.png',
        '/UGCImages/kerala/keralaa/ayurveda.png'
    ], []);
    useImagePreloader(criticalImages);

    const packages = useMemo(() => Object.values(keralaPackages), []);
    const totalPages = useMemo(() => Math.ceil(packages.length / 3), [packages.length]);

    // Register service worker for caching
    useEffect(() => {
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
            navigator.serviceWorker.register('/sw.js')
                .catch(console.error);
        }
    }, []);

    // Optimize video loading - faster on mobile for better UX
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldLoadVideo(true);
        }, isMobile ? 800 : 1000); // Faster video loading on mobile

        return () => clearTimeout(timer);
    }, [isMobile]);

    const handlePrevPage = useCallback(() => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    }, []);

    const handleNextPage = useCallback(() => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    }, [totalPages]);

    const toggleMute = useCallback(() => {
        const audio = document.getElementById('keralaAudio') as HTMLAudioElement;
        const video = document.getElementById('keralaVideo') as HTMLVideoElement;

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
    }, [isMuted]);

    const PackageCard = ({
        package: pkg
    }: {
        package: keralaPackage;
    }) => {
        const [showDates, setShowDates] = useState(false);
        const [showCities, setShowCities] = useState(false);
        const [imageLoaded, setImageLoaded] = useState(false);

        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                {/* Background Image with loading optimization */}
                <div className="relative w-full h-full">
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                    <Image
                        src={pkg.images[0]}
                        alt={pkg.packageName}
                        fill
                        className={`object-cover group-hover:scale-105 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        sizes="(max-width: 768px) 300px, (max-width: 1280px) 50vw, 33vw"
                        loading="lazy"
                        quality={isMobile ? 60 : 75}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>

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
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h2 className="text-lg md:text-xl font-bold mb-2">
                        {pkg.packageName}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-xs md:text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-[#00f6ff] w-3 h-3" />
                            <span>{pkg.days}D/{pkg.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-[#00f6ff] w-3 h-3" />
                            <span>{pkg.hotelDetails[0].city}</span>
                        </div>
                        {pkg.departureDates && (
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-[#00f6ff] w-3 h-3" />
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
                                <FaCalendarAlt className="text-[#00f6ff] w-3 h-3" />
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
                    <Link href={`/kerala/${pkg.id}`} prefetch={false}>
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

    const keralaHighlights = useMemo(() => [
        {
            title: "Backwater Cruises",
            image: "/UGCImages/kerala/keralaa/backwater.png",
            description: "Experience serene backwater cruises through palm-fringed lagoons and canals"
        },
        {
            title: "Tea Plantations",
            image: "/UGCImages/kerala/keralaa/tea.png",
            description: "Explore lush green tea gardens and learn about tea processing in Munnar"
        },
        {
            title: "Ayurveda & Wellness",
            image: "/UGCImages/kerala/keralaa/ayurveda.png",
            description: "Rejuvenate with authentic Ayurvedic treatments and traditional healing"
        },
        {
            title: "Spice Plantations",
            image: "/UGCImages/kerala/keralaa/spice.png",
            description: "Discover aromatic spice gardens with cardamom, pepper, and cinnamon"
        },
        {
            title: "Kerala Cuisine",
            image: "/UGCImages/kerala/keralaa/cuisines.png",
            description: "Savor authentic Kerala dishes with coconut, curry leaves, and fresh seafood"
        },
        {
            title: "Cultural Heritage",
            image: "/UGCImages/kerala/keralaa/cultural2.png",
            description: "Experience rich cultural traditions including Kathakali dance and temple festivals"
        }
    ], []);

    const faqs = useMemo(() => [
        {
            question: "What is the best time to visit Kerala?",
            answer: "The best time to visit Kerala is from October to March when the weather is pleasant and cool. Monsoon season (October-October) is also beautiful but expect rainfall."
        },
        {
            question: "What activities can I do in Kerala?",
            answer: "Kerala offers backwater cruises, houseboat stays, tea plantation tours, wildlife safaris, Ayurvedic treatments, beach relaxation, and cultural performances."
        },
        {
            question: "Which are the must-visit places in Kerala?",
            answer: "Must-visit places include Alleppey backwaters, Munnar hill station, Kochi historic city, Thekkady wildlife sanctuary, and Kovalam beaches."
        },
        {
            question: "What are the famous Kerala dishes to try?",
            answer: "Try Kerala fish curry, appam with stew, puttu and kadala curry, karimeen fry, and traditional Kerala sadya served on banana leaf."
        }
    ], []);

    return (
        <div className="min-h-screen">
            {/* Critical resource hints and inline CSS */}
            <style jsx>{`
                /* Critical CSS inlined for faster FCP */
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                /* Critical hero styles */
                .hero-container {
                    position: relative;
                    height: 60vh;
                    width: 100%;
                    overflow: hidden;
                }
                
                @media (min-width: 768px) {
                    .hero-container {
                        height: 100vh;
                    }
                }
                
                /* Optimize layout shifts */
                .packages-grid {
                    min-height: 450px;
                }
                
                /* GPU acceleration for smooth animations */
                .gpu-accelerated {
                    transform: translateZ(0);
                    will-change: transform;
                }
            `}</style>

            {/* Hero Section with optimized video */}
            <div className="hero-container gpu-accelerated">
                {/* Optimized audio - available on all devices */}
                {shouldLoadVideo && (
                    <audio
                        id="keralaAudio"
                        loop
                        muted
                        preload="none"
                        className="hidden"
                    >
                        <source src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Kerala/audio.mpeg" type="audio/mp3" />
                    </audio>
                )}

                {/* Audio control button - show when audio is available */}
                {shouldLoadVideo && (
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

                {/* Background image always loads first */}
                <Image
                    src="/UGCImages/kerala/kerala/1.png"
                    alt="Kerala Paradise"
                    fill
                    className="object-cover"
                    priority
                    quality={isMobile ? 75 : 90}
                    sizes="100vw"
                />

                {/* Video overlay - loads after image */}
                {shouldLoadVideo && (
                    <video
                        id="keralaVideo"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload={isMobile ? "none" : "metadata"}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoadedData={() => setVideoLoaded(true)}
                        onCanPlayThrough={() => setVideoLoaded(true)}
                    >
                        <source src="https://truedeal-assets.s3.eu-north-1.amazonaws.com/Kerala/kerala.mp4" type="video/mp4" />
                    </video>
                )}

                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <MotionH1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold mb-6"
                        >
                            <span className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 ${dancingScript.className}`}>
                                Discover
                            </span>
                            <span className={`block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent mt-2 ${playfair.className}`}>
                                God&apos;s Own Country
                            </span>
                        </MotionH1>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="space-y-4"
                        >
                            <MotionP
                                className="text-xl md:text-2xl text-white/90 font-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                Experience the perfect blend of
                            </MotionP>
                            <div className="flex justify-center gap-4 text-lg md:text-xl">
                                <MotionSpan
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                    className="text-[#00f6ff]"
                                >
                                    Serene Backwaters
                                </MotionSpan>
                                <MotionSpan
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                    className="text-cyan-300"
                                >
                                    Lush Hill Stations
                                </MotionSpan>
                                <MotionSpan
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2.1, duration: 0.5 }}
                                    className="text-blue-300"
                                >
                                    Ancient Traditions
                                </MotionSpan>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </div>

            {/* Kerala Packages Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Our Kerala Packages
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
                                <div className="packages-grid flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0 gpu-accelerated">
                                    {packages
                                        .slice(currentPage * 3, (currentPage * 3) + 3)
                                        .map((keralaPkg) => (
                                            <PackageCard key={keralaPkg.id} package={keralaPkg} />
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

            {/* Kerala Highlights Section - Lazy loaded */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-7xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                Experience the Magic of Kerala
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keralaHighlights.map((highlight, index) => (
                                <MotionDiv
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]"
                                >
                                    <Image
                                        src={highlight.image}
                                        alt={highlight.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                        quality={isMobile ? 60 : 75}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                                        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </MotionDiv>
                            ))}
                        </div>
                    </MotionDiv>
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
            <div className="max-w-4xl mx-auto mt-16 prose prose-lg px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Discover Kerala
                    </span>
                </h2>
                <div className="text-gray-600 space-y-4">
                    <p>
                        Kerala, rightly called &quot;God&apos;s Own Country,&quot; offers an enchanting blend of serene backwaters, misty hill stations, pristine beaches, and rich cultural heritage. The backwaters of Alleppey and Kumarakom provide a unique experience of cruising through palm-fringed lagoons in traditional houseboats.
                    </p>
                    <p>
                        The hill stations of Munnar, Wayanad, and Thekkady offer breathtaking views of tea plantations, spice gardens, and wildlife sanctuaries. Experience the therapeutic benefits of authentic Ayurvedic treatments, witness the vibrant Kathakali performances, and savor the delicious Kerala cuisine.
                    </p>
                    <p>
                        Our Kerala tour packages include comfortable stays in premium resorts, houseboat accommodations, and authentic cultural experiences that showcase the true essence of this beautiful state.
                    </p>
                </div>
            </div>

            {/* Lazy loaded Trip Plan Request */}
            <TripPlanRequest />

            {/* Performance optimization styles */}
            <style jsx global>{`
                /* Optimize font loading */
                @font-face {
                    font-family: 'Dancing Script';
                    font-display: swap;
                }
                @font-face {
                    font-family: 'Playfair Display';
                    font-display: swap;
                }
                
                /* Reduce layout shift */
                .aspect-ratio-16-9 {
                    aspect-ratio: 16 / 9;
                }
                
                /* Optimize scroll performance */
                .smooth-scroll {
                    scroll-behavior: smooth;
                }
                
                /* Optimize transforms */
                .gpu-acceleration {
                    transform: translateZ(0);
                    will-change: transform;
                }
            `}</style>
        </div>
    );
}