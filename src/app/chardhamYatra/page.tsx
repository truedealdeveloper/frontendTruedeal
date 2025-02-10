'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPlane, FaCalendarAlt, FaClock, FaWhatsapp, FaPhone, FaSuitcase, FaHeartbeat, FaMobile, FaInfoCircle } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { chardhamData, ChardhamPackage } from './data';
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookingFormModal } from '@/app/components/BookingFormModal';

import { usePathname } from 'next/navigation';

const GlobalStyles = () => (
    <style jsx global>{`
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        .animate-blink {
            animation: blink 1s infinite;
        }
    `}</style>
);

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible || pathname !== '/chardhamYatra') return null;

    return (
        <div className="fixed bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 z-40 bg-white rounded-full shadow-xl 
            py-1.5 sm:py-2 px-4 sm:px-6 border border-gray-100 hover:shadow-2xl transition-all duration-300
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:animate-shine before:rounded-full overflow-hidden w-[90%] sm:w-auto max-w-[320px] sm:max-w-none">
            <div className="flex items-center justify-between sm:gap-4 relative">
                <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Book Now Starting from</span>
                <Link 
                    href="/chardhamYatra/ekdham-same-day-tour"
                    className="text-blue-600 font-semibold whitespace-nowrap group flex items-center gap-1 text-sm sm:text-base"
                >
                    ₹1,15,000
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>
        </div>
    );
};

const TypewriterText = () => {
    const [text, setText] = useState('');
    const destinations = ['Badrinath', 'Kedarnath', 'Gangotri', 'Yamunotri'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [typingSpeed] = useState(150);

    useEffect(() => {
        const currentDestination = destinations[currentIndex];
        let timer: NodeJS.Timeout;

        if (isTyping) {
            if (text.length < currentDestination.length) {
                timer = setTimeout(() => {
                    setText(currentDestination.slice(0, text.length + 1));
                }, typingSpeed);
            } else {
                timer = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); // Wait before erasing
            }
        } else {
            if (text.length > 0) {
                timer = setTimeout(() => {
                    setText(currentDestination.slice(0, text.length - 1));
                }, 100); // Erasing speed
            } else {
                setCurrentIndex((prev) => (prev + 1) % destinations.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timer);
    }, [text, isTyping, currentIndex]);

    return (
        <div className="inline-flex items-center">
            <span className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {text}
            </span>
            <span className="w-[2px] sm:w-[3px] h-6 sm:h-8 bg-yellow-400 ml-1 animate-blink drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></span>
        </div>
    );
};

export default function ChardhamYatra() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const packages = Object.values(chardhamData);
    
    // Calculate items per page based on screen size
    const itemsPerPage = {
        mobile: 1,
        desktop: 3
    };

    const totalPages = Math.ceil(packages.length / itemsPerPage.desktop);
    const mobileTotalPages = Math.ceil(packages.length / itemsPerPage.mobile);

    // Add useEffect to handle window resize
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Get current items
    const getVisibleItems = (isMobile: boolean) => {
        const perPage = isMobile ? itemsPerPage.mobile : itemsPerPage.desktop;
        const start = currentPage * perPage;
        return packages.slice(start, start + perPage);
    };

    // Add countdown timer state
    const [timeLeft, setTimeLeft] = useState({
        days: 15,
        hours: 8,
        minutes: 45,
        seconds: 0
    });

    // Timer logic
    useEffect(() => {
        // Get stored end time or set new one
        const storedEndTime = localStorage.getItem('earlyBirdEndTime');
        const endTime = storedEndTime ? parseInt(storedEndTime) : Date.now() + (15 * 24 * 60 * 60 * 1000);
        
        if (!storedEndTime) {
            localStorage.setItem('earlyBirdEndTime', endTime.toString());
        }

        const timer = setInterval(() => {
            const now = Date.now();
            const difference = endTime - now;

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    useEffect(() => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            console.log('Video element found:', videoElement);
            videoElement.addEventListener('error', (e) => {
                console.error('Video error:', e);
            });
        } else {
            console.warn('Video element not found');
        }
    }, []);

    return (
        <div className="min-h-screen">
            <GlobalStyles />
            {/* Hero Section with Video Background */}
            <section className="relative h-screen">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/Assets/HeroSectionImages/chardhamBg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Add SVG overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/Assets/HeroSectionImages/Chardham.svg"
                        alt="Chardham Yatra 2025"
                        width={600}
                        height={200}
                        className="w-auto h-auto max-w-[80%] md:max-w-[600px] mb-10"
                        priority
                    />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-base sm:text-xl md:text-2xl mb-8 max-w-3xl mt-36 relative top-10">
                        <span>Experience the divine journey to</span>
                        <TypewriterText />
                    </div>
                    <Button 
                        onClick={() => setIsBookingModalOpen(true)}
                        className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg mt-6 sm:mt-10"
                    >
                        Book Your Journey Now
                    </Button>
                </div>

                {/* Add image slider below video */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent overflow-hidden">
                    <div className="container mx-auto px-4 ">
                        <div className="relative">
                            {/* Add gradient overlays */}
                            {/* <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black/80 to-transparent"></div> */}
                            {/* <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black/80 to-transparent"></div> */}
                            
                            <div 
                                className="flex gap-4"
                                style={{
                                    animation: 'slideRightToLeft 30s linear infinite',
                                    width: 'max-content'
                                }}
                            >
                                {/* First set of images */}
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                                    <div 
                                        key={`first-${index}`}
                                        className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden transform hover:scale-110 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                    >
                                        <Image
                                            src={`/UGCImages/chardham/Chardham/${index}.webp`}
                                            alt={`Chardham View ${index}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                                    <div 
                                        key={`second-${index}`}
                                        className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden transform hover:scale-110 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                    >
                                        <Image
                                            src={`/UGCImages/chardham/Chardham/${index}.webp`}
                                            alt={`Chardham View ${index}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <style jsx>{`
                            @keyframes slideRightToLeft {
                                0% {
                                    transform: translateX(0);
                                }
                                100% {
                                    transform: translateX(-50%);
                                }
                            }
                            
                            /* Add smooth pause on hover */
                            div:hover > div {
                                animation-play-state: paused;
                                transition: all 0.5s ease;
                            }
                        `}</style>
                    </div>
                </div>
            </section>

            {/* Add after the Hero section */}
            {/* <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <PackageCTA />
                </div>
            </section> */}

            {/* Early Bird Offer Section */}
            <section className="relative bg-gradient-to-r from-[#017ae3] to-[#00f6ff] overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 animate-float-medium"></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-float-fast"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-8 md:py-12 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                        {/* Left side content */}
                        <div className="text-white text-center md:text-left space-y-4 max-w-xl">
                            <div className="inline-block animate-bounce-slow">
                                <span className="bg-white/20 text-white text-sm md:text-base px-4 py-1 rounded-full">
                                    Limited Time Offer
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Early Bird Special
                                <span className="block text-xl md:text-2xl font-normal mt-2 text-white/90">
                                    Book now and save up to
                                </span>
                                <span className="text-4xl md:text-6xl font-bold text-yellow-300 transition-all duration-700 hover:text-yellow-200">
                                    20% OFF
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-white/80">
                                on all Chardham packages for the 2025 season
                            </p>
                        </div>

                        {/* Right side CTA */}
                        <div className="w-full md:w-auto animate-fade-in-up">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                                <div className="text-white text-center mb-4">
                                    <p className="text-sm uppercase tracking-wider mb-1">Offer Ends Soon</p>
                                    <div className="flex gap-4 justify-center text-white font-mono bg-white/10 p-4 rounded-xl">
                                        <div className="bg-white/10 px-3 py-2 rounded-lg">
                                            <span className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
                                            <span className="text-xs block mt-1">DAYS</span>
                                        </div>
                                        <div className="bg-white/10 px-3 py-2 rounded-lg">
                                            <span className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                                            <span className="text-xs block mt-1">HOURS</span>
                                        </div>
                                        <div className="bg-white/10 px-3 py-2 rounded-lg">
                                            <span className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                                            <span className="text-xs block mt-1">MINS</span>
                                        </div>
                                        <div className="bg-white/10 px-3 py-2 rounded-lg">
                                            <span className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                                            <span className="text-xs block mt-1">SECS</span>
                                        </div>
                                    </div>
                                </div>
                                <Button 
                                    onClick={() => setIsBookingModalOpen(true)}
                                    className="w-full bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 text-lg rounded-xl 
                                        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                                        relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Book at Special Price</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-transparent 
                                        transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <div className="bg-white shadow-md py-4 sticky top-0 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {['Packages', 'Gallery', 'FAQs', 'Reviews', 'Contact'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="whitespace-nowrap px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Photos Gallery */}
            <section id="gallery" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Glimpses of Chardham
                        </span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* First 8 images */}
                        {[...Array(8)].map((_, i) => (
                            <div 
                                key={i} 
                                className="relative cursor-pointer group"
                                onClick={() => setSelectedImage(i)}
                            >
                                <div className="relative h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={`/UGCImages/chardham/Chardham/${i + 1}.webp`}
                                    alt={`Chardham Gallery ${i + 1}`}
                                    fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                                </div>
                            </div>
                        ))}

                        {/* "+14 More Photos" Card */}
                        <div 
                            className="relative cursor-pointer group col-span-2 md:col-span-4"
                            onClick={() => setSelectedImage(8)}
                        >
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <Image
                                    src="/UGCImages/chardham/dodham/1.webp"
                                    alt="More Chardham Photos"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-white text-2xl font-bold mb-2">+14 More</p>
                                        <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm">
                                            Click to view all
                                        </span>
                    </div>
                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {selectedImage !== null && (
                    <div 
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
                            {/* Close button */}
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <IoMdClose size={32} />
                            </button>

                            {/* Main image */}
                            <div className="relative h-[70vh]">
                                <Image
                                    src={selectedImage < 8 
                                        ? `/UGCImages/chardham/Chardham/${selectedImage + 1}.webp`
                                        : `/UGCImages/chardham/dodham/${selectedImage - 7}.webp`
                                    }
                                    alt={`Chardham Gallery ${selectedImage + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Navigation buttons */}
                            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(prev => prev === 0 ? 21 : prev! - 1);
                                    }}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full ml-4 transition-colors"
                                >
                                    <IoIosArrowBack size={24} />
                                </button>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(prev => prev === 21 ? 0 : prev! + 1);
                                    }}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full mr-4 transition-colors"
                                >
                                    <IoIosArrowForward size={24} />
                                </button>
                            </div>

                            {/* Image counter */}
                            <div className="absolute -bottom-10 left-0 right-0 text-center text-white">
                                {selectedImage + 1} / 22
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Packages Section */}
            <section id="packages" className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Chardham Yatra
                            <p className="text-sm text-gray-500 mt-1 underline">Fixed Departures</p>
                        </span>
                    </h1>
                    
                    {/* Chardham Cards with Navigation */}
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button 
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                            aria-label="Previous"
                        >
                            <IoIosArrowBack size={24} />
                        </button>
                        
                        <button 
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
                            aria-label="Next"
                        >
                            <IoIosArrowForward size={24} />
                        </button>

                        {/* Desktop View */}
                        <div className="hidden md:block">
                            <div className="flex justify-center gap-6">
                                {getVisibleItems(false).map((package_: ChardhamPackage) => (
                                    <div 
                                        key={package_.id}
                                        className="relative group h-[450px] w-[300px] md:w-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        {/* Background Image */}
                                        <Image 
                                            src={package_.images?.[0] || '/default-destination-image.jpg'} 
                                            alt={package_.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                        />
                                        
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                                        {/* Price Tag */}
                                        {package_.amount && (
                                            <div className="absolute top-3 left-0 z-10">
                                                <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                                                    <span className="line-through text-sm mr-2">
                                                        ₹{package_.amount * 1.2 >= 1000 ? (package_.amount * 1.2).toLocaleString('en-IN') : package_.amount * 1.2}/-
                                                    </span>
                                                    <span className="font-bold">
                                                        ₹{package_.amount >= 1000 ? package_.amount.toLocaleString('en-IN') : package_.amount}/-
                                                    </span>
                                                    <span className="text-sm ml-1">onwards</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            {/* Title */}
                                            <h2 className="text-2xl font-bold mb-2">
                                                {package_.name}
                                            </h2>

                                            {/* Details Grid */}
                                            <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                                                <div className="flex items-center gap-2">
                                                    <FaClock className="text-yellow-400" />
                                                    <span>{package_.days}D/{package_.nights}N</span>
                                                </div>
                                                {package_.flightFrom && (
                                                    <div className="flex items-center gap-2">
                                                        <FaPlane className="text-yellow-400" />
                                                        <span>{package_.flightFrom}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-yellow-400" />
                                                    <span>{package_.dateStart}</span>
                                                </div>
                                            </div>

                                            {/* View Details Button */}
                                            <Link href={`/chardhamYatra/${package_.id}`}>
                                                <Button
                                                    className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                                                >
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden">
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="flex gap-6 min-w-min">
                                    {packages.map((package_: ChardhamPackage) => (
                                        <div 
                                            key={package_.id}
                                            className="relative group h-[450px] w-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
                                        >
                                            {/* Background Image */}
                                            <Image 
                                                src={package_.images?.[0] || '/default-destination-image.jpg'} 
                                                alt={package_.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                                            />
                                            
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                                            {/* Price Tag */}
                                            {package_.amount && (
                                                <div className="absolute top-3 left-0 z-10">
                                                    <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                                                        <span className="line-through text-sm mr-2">
                                                            ₹{package_.amount * 1.2 >= 1000 ? (package_.amount * 1.2).toLocaleString('en-IN') : package_.amount * 1.2}/-
                                                        </span>
                                                        <span className="font-bold">
                                                            ₹{package_.amount >= 1000 ? package_.amount.toLocaleString('en-IN') : package_.amount}/-
                                                        </span>
                                                        <span className="text-sm ml-1">onwards</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                {/* Title */}
                                                <h2 className="text-2xl font-bold mb-2">
                                                    {package_.name}
                                                </h2>

                                                {/* Details Grid */}
                                                <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <FaClock className="text-yellow-400" />
                                                        <span>{package_.days}D/{package_.nights}N</span>
                                                    </div>
                                                    {package_.flightFrom && (
                                                        <div className="flex items-center gap-2">
                                                            <FaPlane className="text-yellow-400" />
                                                            <span>{package_.flightFrom}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex items-center gap-2">
                                                        <FaCalendarAlt className="text-yellow-400" />
                                                        <span>{package_.dateStart}</span>
                                                    </div>
                                                </div>

                                                {/* View Details Button */}
                                                <Link href={`/chardhamYatra/${package_.id}`}>
                                                    <Button
                                                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                                                    >
                                                        View Details
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Pagination Controls */}
                        <div className="mt-6">
                            {/* Desktop pagination dots */}
                            <div className="hidden md:flex justify-center gap-2">
                                {[...Array(isMobile ? mobileTotalPages : totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-2 rounded-full transition-all ${
                                            currentPage === index ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
                                        }`}
                                        onClick={() => setCurrentPage(index)}
                                        aria-label={`Go to page ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Mobile pagination controls */}
                            <div className="md:hidden flex justify-center items-center gap-2">
                                <Button 
                                    onClick={handlePrev} 
                                    disabled={currentPage === 0}
                                    variant="outline"
                                    className="rounded-full w-8 h-8 p-0"
                                >
                                    <IoIosArrowBack className="w-3 h-3" />
                                </Button>
                                <span className="text-sm text-gray-500">
                                    {currentPage + 1} / {isMobile ? mobileTotalPages : totalPages}
                                </span>
                                <Button 
                                    onClick={handleNext} 
                                    disabled={currentPage === (isMobile ? mobileTotalPages - 1 : totalPages - 1)}
                                    variant="outline"
                                    className="rounded-full w-8 h-8 p-0"
                                >
                                    <IoIosArrowForward className="w-3 h-3" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                Common Questions
                            </span>
                        </h2>

                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                {
                                    question: "What are the different helicopter packages available?",
                                    answer: "We offer five distinct packages: 1) Chardham Yatra (5N/6D) covering all four dhams, 2) Same-day Dodham Tour for Kedarnath & Badrinath, 3) Dodham Ex-Sersi Tour, 4) 4-Days Dodham Tour with comfortable stays, and 5) Ekdham Same Day Tour for visiting any one shrine."
                                },
                                {
                                    question: "What's included in the helicopter packages?",
                                    answer: "Our packages typically include helicopter transfers, VIP darshan arrangements, meals as per itinerary, accommodation where applicable, local transport, and all taxes. The Chardham package includes 5 nights accommodation, while same-day tours include necessary shuttle services and one meal."
                                },
                                {
                                    question: "When is the best time for Chardham Yatra?",
                                    answer: "Our helicopter services operate from early May to late June. The temples remain open during this period with favorable weather conditions for helicopter operations."
                                },
                                {
                                    question: "What are the departure points for different packages?",
                                    answer: "Most tours depart from Sahastradhara Helidrome in Dehradun. The Dodham Ex-Sersi tour starts from Sersi Helipad. Specific departure times and locations are provided in your booking confirmation."
                                },
                                {
                                    question: "How long does darshan take at each temple?",
                                    answer: "Darshan times vary: Kedarnath (2 hours), Badrinath (1-1.5 hours), Gangotri (3 hours including road trip), and Yamunotri (5.5 hours including trek). VIP darshan arrangements help optimize these timings."
                                },
                                {
                                    question: "What about medical facilities and altitude concerns?",
                                    answer: "While basic medical support is available, we recommend a health check-up before the yatra due to high altitudes: Kedarnath (3,583m), Badrinath (3,133m), Gangotri (3,100m), and Yamunotri (3,293m)."
                                }
                            ].map((faq, index) => (
                                <AccordionItem 
                                    key={index} 
                                    value={`item-${index}`}
                                    className="bg-white rounded-lg border border-gray-200"
                                >
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                        <span className="text-left font-medium">{faq.question}</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 text-gray-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <div className="mt-8 text-center">
                            <Button
                                onClick={() => setIsBookingModalOpen(true)}
                                className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-6 py-2 rounded-lg
                                    hover:shadow-lg transition-all duration-300"
                            >
                                Have more questions? Contact us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                What Our Pilgrims Say
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Real experiences from our divine journey travelers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: '1',
                                author: "Rajesh Kumar",
                                location: "Delhi",
                                rating: 5,
                                date: "May 2024",
                                content: "The helicopter service made our Chardham Yatra incredibly convenient. VIP darshan arrangements were perfect, and the staff was very professional. The entire journey was smooth and spiritually fulfilling. Highly recommended!",
                                booked: "Chardham Complete Package",
                                images: [
                                    "/UGCImages/chardham/Chardham/1.webp",
                                    "/UGCImages/chardham/Chardham/2.webp",
                                    "/UGCImages/chardham/Chardham/3.webp"
                                ]
                            },
                            {
                                id: '2',
                                author: "Priya Sharma",
                                location: "Mumbai",
                                rating: 5,
                                date: "June 2024",
                                content: "Excellent service! The 4-day Dodham tour was well-organized. The accommodations were comfortable and the helicopter rides were smooth. The team took care of everything, making our pilgrimage truly memorable. A truly spiritual experience.",
                                booked: "Dodham 4 Days Tour",
                                images: [
                                    "/UGCImages/chardham/Chardham/4.webp",
                                    "/UGCImages/chardham/Chardham/5.webp",
                                    "/UGCImages/chardham/Chardham/6.webp"
                                ]
                            },
                            {
                                id: '3',
                                author: "Amit Patel",
                                location: "Ahmedabad",
                                rating: 5,
                                date: "May 2024",
                                content: "Same day Dodham tour was perfect for our schedule. Everything was timely and well-managed. The darshan experience was divine and hassle-free. The helicopter service was excellent and the staff was very helpful.",
                                booked: "Same Day Dodham Tour",
                                images: [
                                    "/UGCImages/chardham/dodham/1.webp",
                                    "/UGCImages/chardham/dodham/2.webp",
                                    "/UGCImages/chardham/dodham/3.webp"
                                ]
                            }
                        ].map((review) => (
                            <div
                                key={review.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Image Grid */}
                                <div className="grid grid-cols-3 gap-1 h-48">
                                    {review.images.map((image, index) => (
                                        <div key={index} className="relative h-48">
                                            <Image
                                                src={image}
                                                alt={`${review.author}'s trip photo ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="font-semibold text-lg">{review.author}</h3>
                                            <p className="text-gray-500 text-sm">{review.location}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-green-500 font-medium mr-1">
                                                {review.rating}
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-500">
                                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2">
                                        Booked: {review.booked}
                                    </p>
                                    <p className="text-gray-800 line-clamp-3 mb-4">
                                        {review.content}
                                    </p>
                                    <p className="text-gray-500 text-sm">{review.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            onClick={() => setIsBookingModalOpen(true)}
                            className="px-8 py-3 rounded-lg font-semibold text-white 
                                bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3]
                                transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Book Your Divine Journey
                        </Button>
                    </div>
                </div>
            </section>

            {/* Need Help Planning Section */}
            <section id="contact" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-8 animate-fade-in-down">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Need Help Planning Your Journey?
                            </h2>
                            <p className="text-gray-600">
                                Our travel experts are available to assist you with your pilgrimage planning
                            </p>
                        </div>
                        
                        {/* Contact Options */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: <FaWhatsapp className="w-6 h-6" />,
                                    title: "WhatsApp",
                                    action: () => window.open('https://wa.me/+919911179796'),
                                    buttonText: "Message Us",
                                    delay: "delay-[200ms]"
                                },
                                {
                                    icon: <FaPhone className="w-6 h-6" />,
                                    title: "Phone",
                                    action: () => window.open('tel:+919911179796'),
                                    buttonText: "Call Now",
                                    delay: "delay-[400ms]"
                                },
                                {
                                    icon: <FaCalendarAlt className="w-6 h-6" />,
                                    title: "Book Online",
                                    action: () => setIsBookingModalOpen(true),
                                    buttonText: "Book Now",
                                    delay: "delay-[600ms]"
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 
                                        hover:shadow-md transition-all duration-300 transform hover:-translate-y-1
                                        animate-fade-in-up ${item.delay}`}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-4 text-gray-600 transform transition-all duration-300 hover:scale-110">
                                                {item.icon}
                                            </div>
                                        <h3 className="text-lg font-medium mb-4 text-gray-800">
                                            {item.title}
                                        </h3>
                                        <Button 
                                            onClick={item.action}
                                            className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] 
                                                text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg"
                                        >
                                            {item.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                       
                    </div>
                </div>
            </section>

            {/* Local Cuisine Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Temple Prasad
                        </span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                temple: "Kedarnath Temple",
                                dishes: [
                                    "Kedarnath Special Prasad",
                                    "Pahadi Thali",
                                    "Bal Bhog Prasad",
                                    "Local Garhwali Dishes"
                                ],
                                image: "/UGCImages/chardham/Chardham/1.webp"
                            },
                            {
                                temple: "Badrinath Temple",
                                dishes: [
                                    "Badri Prasad",
                                    "Tulsi Bhog",
                                    "Mahaprasad",
                                    "Traditional Sweets"
                                ],
                                image: "/UGCImages/chardham/Chardham/2.webp"
                            },
                            {
                                temple: "Gangotri Temple",
                                dishes: [
                                    "Gangajal Prasad",
                                    "Garhwali Cuisine",
                                    "Local Mountain Herbs",
                                    "Sacred Offerings"
                                ],
                                image: "/UGCImages/chardham/Chardham/3.webp"
                            },
                            {
                                temple: "Yamunotri Temple",
                                dishes: [
                                    "Prasad Rice",
                                    "Khichdi Prasad",
                                    "Hot Spring Cooked Food",
                                    "Local Delicacies"
                                ],
                                image: "/UGCImages/chardham/Chardham/4.webp"
                            }
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={item.image}
                                        alt={`${item.temple} Cuisine`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-3">{item.temple}</h3>
                                    <ul className="space-y-2">
                                        {item.dishes.map((dish, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                                {dish}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Must-Visit Attractions */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Must-Visit Attractions
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "Kedarnath Region",
                                attractions: [
                                    { title: "Kedarnath Temple", description: "Ancient shrine at 3,583m altitude" },
                                    { title: "Vasuki Tal", description: "Sacred high-altitude lake at 14,200 ft" },
                                    { title: "Bhairav Temple", description: "Guardian deity temple" }
                                ],
                                image: "/UGCImages/chardham/dodham/1.webp"
                            },
                            {
                                name: "Badrinath Region",
                                attractions: [
                                    { title: "Badrinath Temple", description: "Sacred shrine of Lord Vishnu" },
                                    { title: "Mana Village", description: "Last Indian village before Tibet border" },
                                    { title: "Tapt Kund", description: "Natural hot water spring" }
                                ],
                                image: "/UGCImages/chardham/dodham/2.webp"
                            },
                            {
                                name: "Gangotri Region",
                                attractions: [
                                    { title: "Gangotri Temple", description: "Source temple of River Ganges" },
                                    { title: "Gaumukh Glacier", description: "Actual source of the River Ganges" },
                                    { title: "Kedartal", description: "High-altitude glacial lake" }
                                ],
                                image: "/UGCImages/chardham/dodham/3.webp"
                            },
                            {
                                name: "Yamunotri Region",
                                attractions: [
                                    { title: "Yamunotri Temple", description: "Source temple of River Yamuna" },
                                    { title: "Surya Kund", description: "Hot water spring near temple" },
                                    { title: "Divya Shila", description: "Sacred rock pillar" }
                                ],
                                image: "/UGCImages/chardham/dodham/4.webp"
                            }
                        ].map((region, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                        <Image
                                            src={region.image}
                                            alt={region.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 md:w-3/5">
                                        <h3 className="text-xl font-semibold mb-4">{region.name}</h3>
                                        <div className="space-y-4">
                                            {region.attractions.map((attraction, i) => (
                                                <div key={i} className="border-l-4 border-blue-500 pl-4">
                                                    <h4 className="font-semibold">{attraction.title}</h4>
                                                    <p className="text-gray-600 text-sm">{attraction.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Travel Information */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Essential Travel Information
                        </span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* VIP Darshan & Flight Operations */}
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <FaPlane className="text-blue-500" />
                                Flight Operations & VIP Darshan
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>VIP Darshans are subject to temple authorities and State government orders</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Passengers may be shuffled between helicopters to manage weight distribution for safe flying</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Fixed departure timings apply, subject to weather conditions</p>
                                </li>
                            </ul>
                        </div>

                        {/* Baggage Policy */}
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <FaSuitcase className="text-blue-500" />
                                Baggage Policy
                            </h3>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                                <p className="font-medium text-blue-900">Maximum Allowance: 5 kg per passenger</p>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Duffle bags will be provided by our team on arrival day</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Excess baggage charge: INR 500 per kg</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Suitcases and large travel bags are not permitted</p>
                                </li>
                            </ul>
                        </div>

                        {/* Medical & Weather Advisory */}
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <FaHeartbeat className="text-blue-500" />
                                Health & Weather Considerations
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-2">Altitude Information</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>Kedarnath: 3,583m</li>
                                        <li>Badrinath: 3,133m</li>
                                        <li>Gangotri: 3,100m</li>
                                        <li>Yamunotri: 3,293m</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 mb-2">Recommendations</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Medical check-up before travel</li>
                                        <li>• Carry necessary medications</li>
                                        <li>• Pack warm clothing</li>
                                        <li>• Wear comfortable attire</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Communication & Connectivity */}
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <FaMobile className="text-blue-500" />
                                Network Connectivity
                            </h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-600">Best network providers in the region:</p>
                                <div className="flex gap-4 mt-2">
                                    {['BSNL', 'Airtel', 'Jio'].map((provider) => (
                                        <span key={provider} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                                            {provider}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Special Notes */}
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <FaInfoCircle className="text-blue-500" />
                                Additional Information
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Infants below 2 years (max 12 kg) travel free with valid ID proof</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>Temple timings may vary by season; our team plans accordingly</p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <p>One airport transfer provided each way (Airport-Hotel or Hotel-Hotel)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Explore Sacred Destinations
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { 
                                title: "Chardham Complete Package",
                                description: "5 Nights 6 Days covering all four dhams",
                                price: "₹2,30,000",
                                link: "/chardhamYatra/CHARDHAM-5n6d"
                            },
                            { 
                                title: "Same Day Dodham Tour",
                                description: "Visit Kedarnath & Badrinath in one day",
                                price: "₹1,15,000",
                                link: "/chardhamYatra/dodham-helicopter-tour-same-day"
                            },
                            { 
                                title: "Dodham Ex-Sersi Tour",
                                description: "Convenient tour starting from Sersi",
                                price: "₹3,50,000",
                                link: "/chardhamYatra/dodham-ex-sersi-helicopter-tour"
                            },
                            { 
                                title: "4 Days Dodham Tour",
                                description: "Comfortable 4-day pilgrimage experience",
                                price: "₹1,35,000",
                                link: "/chardhamYatra/dodham-4-days-helicopter-tour"
                            },
                            { 
                                title: "Ekdham Same Day Tour",
                                description: "Choose any one dham for a day visit",
                                price: "₹1,15,000",
                                link: "/chardhamYatra/ekdham-same-day-tour"
                            }
                        ].map((item, index) => (
                            <Link 
                                key={index}
                                href={item.link}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                            >
                                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    {item.description}
                                </p>
                                <p className="text-blue-600 font-semibold">
                                    Starting from {item.price}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form Modal */}
            <BookingFormModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                destinationName="Chardham Yatra"
            />

            <FloatingCTA />
        </div>
    );
} 

