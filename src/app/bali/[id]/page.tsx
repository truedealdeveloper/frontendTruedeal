"use client";

import React, { use, useMemo, useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { baliPackages, type BaliPackage } from "../data";
import { notFound } from "next/navigation";
import { Calendar, Check, MapPin, Star, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { PageWrapper } from "@/components/page-wrapper";
import { useMobile } from "@/hooks/use-mobile";
import { BaliReviews } from "../BaliReviews";
import Link from "next/link";
import { motion } from 'framer-motion';

// Type for flight sector information
interface FlightSector {
    from: string;
    to: string;
    flight: string;
    depart: string;
    arrive: string;
}

// Type for flights information
interface FlightsInfo {
    marketingAirline: string;
    fromCity: string;
    baggage: string;
    notes?: string;
    sectors: FlightSector[];
    fixedDepartureDates: string;
}

// Extended package type with flights
interface BaliPackageWithFlights extends BaliPackage {
    flights?: FlightsInfo;
}

// Lazy load the booking modal only when needed to reduce initial JS
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

export default function BaliPackagePage({ params }: PageProps) {
    const { id } = use(params);
    const baliPkg = useMemo(
        () => Object.values(baliPackages).find(p => p.id === id) as BaliPackageWithFlights | undefined,
        [id]
    );
    const isMobile = useMobile();

    const mobileHeroSrc = (baliPkg?.mobileImages?.[0]) || 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-mobile/1.png';
    const desktopHeroSrc = baliPkg?.images?.[0] || 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-desktop/1.png';

    if (!baliPkg) {
        notFound();
    }

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(1);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [expandedDays, setExpandedDays] = useState<number[]>([1]);
    const dayRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const scrollToDay = useCallback((dayNumber: number) => {
        setSelectedDay(dayNumber);
        setExpandedDays((prev) => (prev.includes(dayNumber) ? prev : [...prev, dayNumber]));
        requestAnimationFrame(() => {
            const el = dayRefs.current[dayNumber];
            if (!el) return;
            const navbarOffsetPx = isMobile ? 120 : 90; // approximate header + sticky chips height
            const y = el.getBoundingClientRect().top + window.scrollY - navbarOffsetPx;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    }, [isMobile]);

    const [overviewMountRef] = useInView<HTMLDivElement>("300px");

    const description = baliPkg?.description || "";
    const truncatedDescription = description.length > 300 ? `${description.substring(0, 300)}...` : description;

    const toggleDayExpansion = useCallback((dayNumber: number) => {
        setExpandedDays((prev) => prev.includes(dayNumber) ? prev.filter((d) => d !== dayNumber) : [...prev, dayNumber]);
    }, []);

    const quickFacts = useMemo(() => ([
        { label: "Duration", value: `${baliPkg?.days} Days / ${baliPkg?.nights} Nights`, icon: Calendar },
        { label: "Location", value: "Bali, Indonesia", icon: MapPin },
        // { label: "Group Size", value: "Max 15", icon: Users },
        { label: "Rating", value: "4.8 / 5", icon: Star },
    ]), [baliPkg?.days, baliPkg?.nights]);

    const faqs = useMemo(() => ([
        {
            question: "What is the best time to visit Bali?",
            answer: "April to October is typically the dry season and best for outdoor activities, though Bali is a year-round destination.",
        },
        {
            question: "Do Indians need a visa for Bali?",
            answer: "Indonesia offers Visa on Arrival for many nationalities including Indians; requirements can change, so confirm before travel.",
        },
        {
            question: "What are the must-visit attractions?",
            answer: "Uluwatu Temple, Ubud rice terraces, Tanah Lot, Nusa Penida, waterfalls, and local markets are popular.",
        },
        {
            question: "Is vegetarian food available?",
            answer: "Yes, Bali has wide vegetarian and vegan options, especially in Ubud and Seminyak.",
        },
    ]), []);

    return (
        <PageWrapper>
            <div className={`relative`}>
                <header className={`relative w-full ${isMobile ? '' : 'md:max-w-[1898px] md:mx-auto'}`} style={{ minHeight: isMobile ? '348px' : '492px' }}>
                    {/* Preload hero image variants to reduce LCP load delay on production with unoptimized images */}
                    <link rel="preload" as="image" href={mobileHeroSrc} media="(max-width: 767px)" />
                    <link rel="preload" as="image" href={desktopHeroSrc} media="(min-width: 768px)" />
                    {isMobile ? (
                        <>
                            <Image
                                src={mobileHeroSrc}
                                alt={baliPkg?.packageName || 'Bali package'}
                                fill
                                className="object-cover"
                                priority
                                // Hint browser to fetch hero quickly
                                fetchPriority="high"
                                quality={70}
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </>
                    ) : (
                        <>
                            <Image
                                src={desktopHeroSrc}
                                alt={baliPkg?.packageName || 'Bali package'}
                                fill
                                className="object-cover brightness-[0.85]"
                                // Desktop header is above the fold on large screens
                                priority={true}
                                fetchPriority="high"
                                quality={70}
                                sizes="(max-width: 767px) 100vw, 1898px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </>
                    )}

                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-12">
                        <div className="max-w-7xl w-full pl-0 md:pl-12 relative top-4 md:top-12">
                            <div className="flex items-center mb-3 text-white drop-shadow">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(4.8) ? 'text-yellow-400 fill-yellow-400' : 'text-white/40'}`} />
                                ))}
                                <span className="ml-2 font-medium">4.8/5 (89 reviews)</span>
                            </div>

                            <h1 className="text-3xl leading-tight md:text-6xl font-bold text-white mb-2 md:mb-4">{baliPkg?.packageName}</h1>

                            <p className="flex items-center text-white/95 mb-4 md:mb-6">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span className="text-lg">Bali, Indonesia</span>
                            </p>

                            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-12">
                                <Button
                                    size="sm"
                                    className="rounded-full px-5 md:px-8 bg-gradient-to-r from-[#17b1ff] to-[#00f6ff] hover:opacity-90 transition shadow-md"
                                    aria-label="Book Bali tour"
                                    onClick={() => setIsBookingModalOpen(true)}
                                >
                                    Book Now
                                </Button>

                                <div className="flex md:hidden w-full gap-2">
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">{baliPkg?.days} Days / {baliPkg?.nights} Nights</span>
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">Bali</span>
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">Max 15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
                    <div className="mx-3 mb-3 rounded-full shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border border-black/5">
                        <div className="flex items-center justify-between px-3 py-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-3 py-1 rounded-full">₹{baliPkg?.amount?.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="tel:+919310271488"><Button size="sm" variant="outline" className="rounded-full">Call</Button></a>
                                <Button size="sm" className="rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]" onClick={() => setIsBookingModalOpen(true)}>Enquire</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hidden md:block">
                    <div className="max-w-7xl mx-auto px-4 py-5">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {quickFacts.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="flex items-center">
                                    <Icon className="h-6 w-6 mr-3" />
                                    <div>
                                        <div className="text-sm opacity-80">{label}</div>
                                        <div className="font-medium text-sm md:text-base">{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 min-w-0">
                            {baliPkg.flights && (
                                <section className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Flights & Fixed Departures</h2>
                                    <Card className="p-5 space-y-3">
                                        <div className="flex flex-wrap items-center gap-3 text-sm">
                                            <span className="px-3 py-1 rounded-full bg-blue-50 text-[#017ae3] flex items-center gap-2"><Plane className="h-4 w-4" /> {baliPkg.flights.marketingAirline}</span>
                                            <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-700">From: {baliPkg.flights.fromCity}</span>
                                            <span className="px-3 py-1 rounded-full bg-green-50 text-green-700">Baggage: {baliPkg.flights.baggage}</span>
                                        </div>
                                        <div className="text-sm text-gray-700">
                                            <strong>Fixed Dates:</strong>
                                            <div className="mt-1 space-y-0.5">
                                                {baliPkg.flights.fixedDepartureDates.split('|').map((line: string, i: number) => (
                                                    <div key={i}>{line.trim()}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {baliPkg.flights.sectors.map((sector: FlightSector, i: number) => (
                                                <div key={i} className="rounded-lg border p-3">
                                                    <div className="font-semibold text-gray-800">{sector.from} → {sector.to}</div>
                                                    <div className="text-sm text-gray-600">{sector.flight}</div>
                                                    <div className="text-xs text-gray-500">Dep: {sector.depart} · Arr: {sector.arrive}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {baliPkg.flights.notes && (
                                            <div className="text-xs text-gray-500">{baliPkg.flights.notes}</div>
                                        )}
                                    </Card>
                                </section>
                            )}
                            <section ref={overviewMountRef} className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}>
                                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">About This Package</h2>
                                <Card className="p-5">
                                    <p className="text-gray-700">{showFullDescription ? description : truncatedDescription}</p>
                                    {description.length > 300 && (
                                        <Button variant="link" className="p-0 h-auto text-[#017ae3] mt-1" onClick={() => setShowFullDescription(v => !v)}>
                                            {showFullDescription ? "Show Less" : "Read More ↓"}
                                        </Button>
                                    )}
                                </Card>
                            </section>

                            <section className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}>
                                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">What’s Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="p-5">
                                        <h3 className="text-lg font-medium mb-3 flex items-center">
                                            <Check className="h-5 w-5 mr-2 text-green-500" />
                                            <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Included</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {baliPkg?.inclusions?.map((item, i) => (<li key={i} className="flex items-start"><Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> {item}</li>))}
                                        </ul>
                                    </Card>
                                    <Card className="p-5">
                                        <h3 className="text-lg font-medium mb-3 flex items-center">
                                            <X className="h-5 w-5 mr-2 text-red-500" />
                                            <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Excluded</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {baliPkg?.exclusions?.map((item, i) => (<li key={i} className="flex items-start"><X className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> {item}</li>))}
                                        </ul>
                                    </Card>
                                </div>
                            </section>

                            <section className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
                                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Day-by-Day Itinerary</h2>
                                <div className="md:static sticky top-16 z-30 -mx-4 px-4 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75 py-2 rounded-xl shadow-sm flex overflow-x-auto space-x-2 mb-4 pb-2 no-scrollbar">
                                    {baliPkg?.itinerary.map((day, i) => (
                                        <button key={i} onClick={() => scrollToDay(day.day)} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDay === day.day ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                                            Day {day.day}
                                        </button>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {baliPkg?.itinerary.map((day, i) => {
                                        const isExpanded = expandedDays.includes(day.day);
                                        return (
                                            <Card key={i} ref={(el) => { dayRefs.current[day.day] = el; }} className={`p-4 scroll-mt-24 md:scroll-mt-28 ${selectedDay === day.day ? 'ring-2 ring-[#017ae3]/20' : ''}`} onClick={() => toggleDayExpansion(day.day)} role="button" aria-expanded={isExpanded}>
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-base md:text-lg font-semibold">Day {day.day}: {day.title}</h3>
                                                    <span className="text-gray-400">{isExpanded ? '▲' : '▼'}</span>
                                                </div>
                                                {isExpanded && (
                                                    <div className="mt-2 text-sm text-gray-700">
                                                        <p className="mb-2">{day.description}</p>
                                                        <div className="space-y-1">
                                                            {day.title.split(' • ').map((activity: string, j: number) => (
                                                                <div key={j} className="flex items-center"><Check className="h-4 w-4 text-[#017ae3] mr-2" />{activity}</div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </Card>
                                        );
                                    })}
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Your Accommodations</h2>
                                <div className="space-y-3">
                                    {baliPkg.hotelDetails.map((hotel, index) => (
                                        <Card key={index} className="p-4 flex items-center justify-between">
                                            <div>
                                                <div className="font-semibold">{hotel.hotel}</div>
                                                <div className="text-sm text-gray-500 flex items-center"><MapPin className="h-3 w-3 mr-1" />{hotel.city}</div>
                                            </div>
                                            <div className="text-sm font-medium">{hotel.roomType}</div>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">FAQs</h2>
                                <div className="space-y-3">
                                    {faqs.map((faq, index) => (
                                        <Card key={index} className="p-4">
                                            <details>
                                                <summary className="cursor-pointer font-semibold list-none">{faq.question}</summary>
                                                <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
                                            </details>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <aside className="lg:sticky lg:top-24 h-fit">
                            <div className="rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur p-5 shadow-sm">
                                <div className="flex items-center gap-2 mb-3"><Star className="h-5 w-5 text-yellow-500" /><span className="text-sm text-gray-600">Trusted by 5k+ travelers</span></div>
                                <div className="text-3xl font-bold mb-2">₹{baliPkg?.amount?.toLocaleString('en-IN')}</div>
                                <p className="text-sm text-gray-600 mb-4">per person incl. hotels & transfers</p>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Instant enquiry</div>
                                    {/* <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Customizable</div> */}
                                    <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Best-price guarantee</div>
                                    <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" />24/7 Support</div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]" onClick={() => setIsBookingModalOpen(true)}>Book This Trip</Button>
                            </div>
                        </aside>
                    </div>
                </main>

                {/* Suggested Packages Section */}
                <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                    Explore More Bali Adventures
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Discover other incredible Bali experiences handpicked for you
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.values(baliPackages)
                                .filter(pkg => pkg.id !== id)
                                .slice(0, 3)
                                .map((pkg, index) => (
                                    <motion.div
                                        key={pkg.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative group h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        {/* Background Image */}
                                        <Image
                                            src={pkg.images[0]}
                                            alt={pkg.packageName}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                                        {/* Price Badge */}
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

                                        {/* Flight Badge */}
                                        {(pkg as BaliPackageWithFlights).flights && (
                                            <>
                                                {/* Desktop/Tablet: top-right */}
                                                <div className="hidden md:block absolute top-3 right-3 z-10">
                                                    <div className="bg-white/95 text-gray-900 px-2.5 py-1 rounded-full shadow flex items-center gap-2">
                                                        <Plane className="text-[#017ae3] w-4 h-4" />
                                                        <span className="text-xs font-semibold whitespace-nowrap">With Flights</span>
                                                    </div>
                                                </div>
                                                {/* Mobile: placed a bit lower to avoid price chip overlap */}
                                                <div className="md:hidden absolute top-14 left-3 z-10">
                                                    <div className="bg-white/95 text-gray-900 px-2 py-0.5 rounded-full shadow flex items-center gap-1.5">
                                                        <Plane className="text-[#017ae3] w-3.5 h-3.5" />
                                                        <span className="text-[10px] font-semibold whitespace-nowrap">With Flights</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-2xl font-bold mb-2">
                                                {pkg.packageName}
                                            </h3>

                                            {/* Details Grid */}
                                            <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="text-yellow-400 h-4 w-4" />
                                                    <span>{pkg.days}D/{pkg.nights}N</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="text-yellow-400 h-4 w-4" />
                                                    <span>{pkg.hotelDetails[0]?.city}</span>
                                                </div>
                                                {!(pkg as BaliPackageWithFlights).flights ? (
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="text-yellow-400 h-4 w-4" />
                                                        <span>{pkg.dateStart}</span>
                                                    </div>
                                                ) : (
                                                    <div className="col-span-2">
                                                        <div className="flex items-start gap-2">
                                                            <Calendar className="mt-0.5 text-yellow-400 h-4 w-4" />
                                                            <div className="w-full">
                                                                <div className="text-xs text-white/95 font-medium">
                                                                    {(pkg as BaliPackageWithFlights).flights?.fromCity || 'India'} → Bali
                                                                </div>
                                                                <div className="mt-1 text-xs leading-relaxed text-white/90">
                                                                    {(pkg as BaliPackageWithFlights).flights?.fixedDepartureDates?.split('|').slice(0, 2).map((line, idx) => (
                                                                        <div key={idx}>{line.trim()}</div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* View Details Button */}
                                            <Link href={`/bali/${pkg.id}`}>
                                                <Button
                                                    className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500"
                                                >
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                        </div>                        {Object.values(baliPackages).filter(pkg => pkg.id !== id).length > 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-center mt-8"
                            >
                                <Link href="/bali">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-[#017ae3] text-[#017ae3] hover:bg-[#017ae3] hover:text-white transition-colors"
                                    >
                                        View All Bali Packages
                                    </Button>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="bg-white py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                                    Ready to Book Your Dream Trip?
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                                Get in touch with our travel experts to customize your perfect Bali experience
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {baliPkg?.packageName}
                                    </h3>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Calendar className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="text-gray-700">{baliPkg?.days} Days / {baliPkg?.nights} Nights</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                                <MapPin className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="text-gray-700">Bali, Indonesia</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                                <Star className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="text-gray-700">4.8/5 Rating from 89+ Reviews</span>
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">
                                        ₹{baliPkg?.amount?.toLocaleString('en-IN')}
                                        <span className="text-lg font-normal text-gray-600 ml-2">per person</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Button
                                        size="lg"
                                        className="w-full md:w-auto bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold"
                                        onClick={() => setIsBookingModalOpen(true)}
                                    >
                                        Book This Package
                                    </Button>
                                    <p className="text-sm text-gray-600 mt-3">
                                        ✓ Instant confirmation &nbsp;•&nbsp; ✓ Best price guarantee
                                    </p>
                                    <div className="flex items-center justify-center gap-4 mt-4">
                                        <a
                                            href="tel:+919310271488"
                                            className="flex items-center gap-2 text-[#017ae3] hover:text-[#00f6ff] transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            Call Now
                                        </a>
                                        <a
                                            href="https://wa.me/919310271488"
                                            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
                                            </svg>
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <BaliReviews />

                {isBookingModalOpen && (
                    <BookingFormModal
                        isOpen={isBookingModalOpen}
                        onClose={() => setIsBookingModalOpen(false)}
                        destinationName={baliPkg?.packageName || 'Bali'}
                    />
                )}
            </div>
        </PageWrapper>
    );
}
