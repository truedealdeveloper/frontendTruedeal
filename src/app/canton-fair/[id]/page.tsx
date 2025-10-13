"use client";

import React, { use, useMemo, useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { cantonFairPackages } from "../data";
import { notFound } from "next/navigation";
import { Calendar, Check, MapPin, Star, X, Clock, Plane, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { PageWrapper } from "@/components/page-wrapper";
import { useMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

// Lazy load the booking modal
const BookingFormModal = dynamic(() =>
    import('@/app/components/BookingFormModal').then(m => m.BookingFormModal),
    { ssr: false }
);

interface PageProps {
    params: Promise<{ id: string }>
}

function useInView<T extends HTMLElement>(rootMargin = "200px"): [React.RefObject<T>, boolean] {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current || inView) return;
        const el = ref.current;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            });
        }, { root: null, rootMargin, threshold: 0.01 });
        obs.observe(el as Element);
        return () => obs.disconnect();
    }, [inView, rootMargin]);

    return [ref, inView];
}

export default function CantonFairPackagePage({ params }: PageProps) {
    const { id } = use(params);
    const pkg = useMemo(
        () => Object.values(cantonFairPackages).find(p => p.id === id),
        [id]
    );
    const isMobile = useMobile();

    const mobileHeroSrc = '/UGCImages/china/horizontal/1.webp';
    const desktopHeroSrc = pkg?.images?.[0] || '/UGCImages/china/horizontal/1.webp';

    if (!pkg) {
        notFound();
    }

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(1);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [expandedDays, setExpandedDays] = useState<number[]>([1]);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const dayRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const scrollToDay = useCallback((dayNumber: number) => {
        setSelectedDay(dayNumber);
        setExpandedDays((prev) => (prev.includes(dayNumber) ? prev : [...prev, dayNumber]));
        requestAnimationFrame(() => {
            const el = dayRefs.current[dayNumber];
            if (!el) return;
            const navbarOffsetPx = isMobile ? 120 : 90;
            const y = el.getBoundingClientRect().top + window.scrollY - navbarOffsetPx;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    }, [isMobile]);

    const [overviewMountRef] = useInView<HTMLDivElement>("300px");

    const description = pkg?.description || "";
    const truncatedDescription = description.length > 300 ? `${description.substring(0, 300)}...` : description;

    const toggleDayExpansion = useCallback((dayNumber: number) => {
        setExpandedDays((prev) => prev.includes(dayNumber) ? prev.filter((d) => d !== dayNumber) : [...prev, dayNumber]);
    }, []);

    const quickFacts = useMemo(() => ([
        { label: "Duration", value: `${pkg?.days} Days / ${pkg?.nights} Nights`, icon: Calendar },
        { label: "Location", value: "Guangzhou, China", icon: MapPin },
        { label: "Fair Phase", value: "Phase 1", icon: Building },
        { label: "Rating", value: "4.8 / 5", icon: Star },
    ]), [pkg?.days, pkg?.nights]);

    const faqs = useMemo(() => ([
        {
            question: "What is included in the package?",
            answer: "The package includes round-trip flights from Delhi via Hong Kong, hotel accommodation, daily breakfast, Indian dinner, airport transfers, Pearl River Cruise, exhibition entry passes, and all taxes."
        },
        {
            question: "Do I need a visa for China?",
            answer: "Yes, Indian citizens need a Chinese visa. Required documents include a valid passport (6 months validity), visa application form, photographs, flight/hotel bookings, and business registration documents if applicable."
        },
        {
            question: "What products are featured in Phase 1?",
            answer: "Phase 1 focuses on electronics, household electrical appliances, vehicles and spare parts, machinery, hardware tools, and building materials."
        },
        {
            question: "How far is the hotel from the exhibition center?",
            answer: "Days Inn by Wyndham Guangzhou is located 22 KMs from the Canton Fair Complex with convenient transportation access."
        },
        {
            question: "Is single room accommodation available?",
            answer: `Yes, single room supplement is available for ₹${pkg.singleRoomSupplement?.toLocaleString('en-IN')} extra per person.`
        }
    ]), [pkg.singleRoomSupplement]);

    return (
        <PageWrapper>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative h-[50vh] md:h-[70vh] w-full">
                    <Image
                        src={isMobile ? mobileHeroSrc : desktopHeroSrc}
                        alt={pkg.packageName}
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-end">
                        <div className="container mx-auto px-4 pb-8 md:pb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-4xl"
                            >
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                    {pkg.packageName}
                                </h1>
                                <div className="flex flex-wrap gap-4 text-white/90 text-sm md:text-base">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <span>{pkg.days}D / {pkg.nights}N</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        <span>Guangzhou, China</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        <span>Oct 14-18, 2025</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Sticky Booking Bar */}
                <div className="sticky top-16 md:top-20 z-30 bg-white shadow-md">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-red-600">
                                    ₹{pkg.amount.toLocaleString('en-IN')}
                                </span>
                                <span className="text-gray-600">per person</span>
                                {(pkg.id.includes('phase-2') || pkg.id.includes('phase-3')) && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white animate-pulse">
                                        Save ₹5,000 Online!
                                    </span>
                                )}
                            </div>
                            <Button
                                onClick={() => setIsBookingModalOpen(true)}
                                size="lg"
                                className="w-full md:w-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold px-8"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Overview */}
                            <Card className="p-6 md:p-8" ref={overviewMountRef}>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Overview</h2>
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed">
                                        {showFullDescription ? description : truncatedDescription}
                                    </p>
                                    {description.length > 300 && (
                                        <button
                                            onClick={() => setShowFullDescription(!showFullDescription)}
                                            className="text-red-600 hover:text-red-700 font-medium mt-2"
                                        >
                                            {showFullDescription ? 'Read Less' : 'Read More'}
                                        </button>
                                    )}
                                </div>
                            </Card>

                            {/* Quick Facts */}
                            <Card className="p-6 md:p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Quick Facts</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {quickFacts.map((fact, index) => {
                                        const Icon = fact.icon;
                                        return (
                                            <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                                <Icon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-gray-900">{fact.label}</p>
                                                    <p className="text-gray-600 text-sm">{fact.value}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>

                            {/* Canton Fair Details */}
                            {pkg.additionalInfo?.fairDetails && (
                                <Card className="p-6 md:p-8 bg-gradient-to-br from-red-50 to-orange-50">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Exhibition Details</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Calendar className="w-5 h-5 text-red-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Exhibition Dates</p>
                                                <p className="text-gray-700">{pkg.additionalInfo.fairDetails.exhibitionDates}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-red-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Timings</p>
                                                <p className="text-gray-700">{pkg.additionalInfo.fairDetails.timings}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-red-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Venue</p>
                                                <p className="text-gray-700">{pkg.additionalInfo.fairDetails.venue}</p>
                                                <p className="text-sm text-gray-600">{pkg.additionalInfo.fairDetails.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Building className="w-5 h-5 text-red-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Product Focus</p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {pkg.additionalInfo.fairDetails.focus.map((item, index) => (
                                                        <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-red-200">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            )}

                            {/* Day-by-Day Itinerary */}
                            <Card className="p-6 md:p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Day-by-Day Itinerary</h2>

                                {/* Day Chips */}
                                <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b">
                                    {pkg.itinerary.map((day) => (
                                        <button
                                            key={day.day}
                                            onClick={() => scrollToDay(day.day)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDay === day.day
                                                ? 'bg-red-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            Day {day.day}
                                        </button>
                                    ))}
                                </div>

                                {/* Itinerary Days */}
                                <div className="space-y-6">
                                    {pkg.itinerary.map((day) => {
                                        const isExpanded = expandedDays.includes(day.day);
                                        return (
                                            <div
                                                key={day.day}
                                                ref={(el) => { dayRefs.current[day.day] = el; }}
                                                className="border border-gray-200 rounded-lg overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleDayExpansion(day.day)}
                                                    className="w-full p-4 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-start gap-4"
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm">
                                                                {day.day}
                                                            </span>
                                                            <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                                                {day.title}
                                                            </h3>
                                                        </div>
                                                        <p className="text-sm text-gray-600 ml-11">{day.date}</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        {isExpanded ? (
                                                            <FaMinus className="w-5 h-5 text-red-600" />
                                                        ) : (
                                                            <FaPlus className="w-5 h-5 text-gray-400" />
                                                        )}
                                                    </div>
                                                </button>

                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="border-t border-gray-200"
                                                    >
                                                        <div className="p-4 md:p-6 bg-gray-50">
                                                            {day.image && (
                                                                <div className="relative h-48 md:h-64 mb-4 rounded-lg overflow-hidden">
                                                                    <Image
                                                                        src={day.image}
                                                                        alt={day.title}
                                                                        fill
                                                                        className="object-cover"
                                                                        sizes="(max-width: 768px) 100vw, 66vw"
                                                                    />
                                                                </div>
                                                            )}
                                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                                {day.description}
                                                            </p>
                                                            {day.activities && day.activities.length > 0 && (
                                                                <div>
                                                                    <h4 className="font-semibold text-gray-900 mb-3">Activities:</h4>
                                                                    <ul className="space-y-2">
                                                                        {day.activities.map((activity, idx) => (
                                                                            <li key={idx} className="flex items-start gap-2">
                                                                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                                                <span className="text-gray-700">{activity}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>

                            {/* Inclusions & Exclusions */}
                            <Card className="p-6 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center gap-2">
                                            <Check className="w-6 h-6" />
                                            Inclusions
                                        </h3>
                                        <ul className="space-y-3">
                                            {pkg.inclusions.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center gap-2">
                                            <X className="w-6 h-6" />
                                            Exclusions
                                        </h3>
                                        <ul className="space-y-3">
                                            {pkg.exclusions.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>

                            {/* Flight Details */}
                            {pkg.flightDetails && (
                                <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                                        <Plane className="w-8 h-8 text-blue-600" />
                                        Flight Details
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-white rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Airline</p>
                                                <p className="font-semibold text-gray-900">{pkg.flightDetails.airline}</p>
                                            </div>
                                            <div className="p-4 bg-white rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Route</p>
                                                <p className="font-semibold text-gray-900">{pkg.flightDetails.route}</p>
                                            </div>
                                            <div className="p-4 bg-white rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Duration</p>
                                                <p className="font-semibold text-gray-900">{pkg.flightDetails.duration}</p>
                                            </div>
                                            <div className="p-4 bg-white rounded-lg">
                                                <p className="text-sm text-gray-600 mb-1">Cabin Classes</p>
                                                <p className="font-semibold text-gray-900">{pkg.flightDetails.cabinClasses.join(', ')}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {pkg.flightDetails.flights.map((flight, index) => (
                                                <div key={index} className="p-4 bg-white rounded-lg border-l-4 border-blue-500">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-lg">{flight.flightNumber}</p>
                                                            <p className="text-sm text-gray-600">{flight.date}</p>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <div className="text-center">
                                                                <p className="font-bold text-gray-900">{flight.departure}</p>
                                                                <p className="text-sm text-gray-600">{flight.departureTime}</p>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="w-12 h-px bg-gray-300"></div>
                                                                <Plane className="w-5 h-5 text-blue-600 mx-2" />
                                                                <div className="w-12 h-px bg-gray-300"></div>
                                                            </div>
                                                            <div className="text-center">
                                                                <p className="font-bold text-gray-900">{flight.arrival}</p>
                                                                <p className="text-sm text-gray-600">{flight.arrivalTime}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            )}

                            {/* Hotel Details */}
                            <Card className="p-6 md:p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Accommodation</h2>
                                <div className="space-y-4">
                                    {pkg.hotelDetails.map((hotel, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-start gap-3 mb-3">
                                                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-lg">{hotel.hotel}</h3>
                                                    <p className="text-gray-600">{hotel.city}</p>
                                                </div>
                                            </div>
                                            {hotel.description && (
                                                <p className="text-gray-700 text-sm mb-2">{hotel.description}</p>
                                            )}
                                            {hotel.distance && (
                                                <p className="text-sm text-red-600 font-medium">📍 {hotel.distance}</p>
                                            )}
                                        </div>
                                    ))}
                                    {pkg.singleRoomSupplement && (
                                        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                            <p className="text-sm text-gray-700">
                                                <strong>Single Room Supplement:</strong> ₹{pkg.singleRoomSupplement.toLocaleString('en-IN')} Extra
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </Card>

                            {/* FAQ Section */}
                            <Card className="p-6 md:p-8">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                                {openFaq === index ? (
                                                    <FaMinus className="text-red-600 w-4 h-4 flex-shrink-0" />
                                                ) : (
                                                    <FaPlus className="text-gray-400 w-4 h-4 flex-shrink-0" />
                                                )}
                                            </button>
                                            {openFaq === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="px-4 py-4 bg-gray-50 border-t border-gray-200"
                                                >
                                                    <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-6">
                                {/* Price Card */}
                                <Card className="p-6">
                                    <div className="text-center mb-6">
                                        <p className="text-gray-600 mb-2">Starting from</p>
                                        <p className="text-4xl font-bold text-red-600">
                                            ₹{pkg.amount.toLocaleString('en-IN')}
                                        </p>
                                        <p className="text-sm text-gray-600">per person</p>
                                    </div>
                                    <Button
                                        onClick={() => setIsBookingModalOpen(true)}
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold py-6"
                                        size="lg"
                                    >
                                        Book This Package
                                    </Button>
                                    <p className="text-xs text-center text-gray-500 mt-3">
                                        Best price guaranteed • Instant confirmation
                                    </p>
                                </Card>

                                {/* Highlights */}
                                {pkg.additionalInfo?.highlights && (
                                    <Card className="p-6">
                                        <h3 className="font-bold text-lg mb-4 text-gray-900">Package Highlights</h3>
                                        <ul className="space-y-3">
                                            {pkg.additionalInfo.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm">
                                                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                )}

                                {/* Contact Card */}
                                <Card className="p-6 bg-gradient-to-br from-red-50 to-orange-50">
                                    <h3 className="font-bold text-lg mb-4 text-gray-900">Need Help?</h3>
                                    <p className="text-sm text-gray-700 mb-4">
                                        Our travel experts are here to help you plan your perfect Canton Fair trip.
                                    </p>
                                    <Link href="/contact-us">
                                        <Button variant="outline" className="w-full">
                                            Contact Us
                                        </Button>
                                    </Link>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Form Modal */}
                {isBookingModalOpen && (
                    <BookingFormModal
                        isOpen={isBookingModalOpen}
                        onClose={() => setIsBookingModalOpen(false)}
                        destinationName={pkg.packageName}
                    />
                )}
            </div>
        </PageWrapper>
    );
}
