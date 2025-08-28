"use client";

import React, { use, useMemo, useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { europePackages } from "../data";
import { notFound } from "next/navigation";
import { Calendar, Check, MapPin, Star, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { PageWrapper } from "@/components/page-wrapper";
import { useMobile } from "@/hooks/use-mobile";

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

export default function EuropePackagePage({ params }: PageProps) {
    const { id } = use(params);
    const europePkg = useMemo(
        () => Object.values(europePackages).find(p => p.id === id),
        [id]
    );
    const isMobile = useMobile();

    const mobileHeroSrc = (europePkg?.mobileImages?.[0]) || 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop';
    const desktopHeroSrc = europePkg?.images?.[0] || 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1200&h=800&fit=crop';

    if (!europePkg) {
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

    const description = europePkg?.description || "";
    const truncatedDescription = description.length > 300 ? `${description.substring(0, 300)}...` : description;

    const toggleDayExpansion = useCallback((dayNumber: number) => {
        setExpandedDays((prev) => prev.includes(dayNumber) ? prev.filter((d) => d !== dayNumber) : [...prev, dayNumber]);
    }, []);

    const quickFacts = useMemo(() => ([
        { label: "Duration", value: `${europePkg?.days} Days / ${europePkg?.nights} Nights`, icon: Calendar },
        { label: "Location", value: "Europe", icon: MapPin },
        { label: "Group", value: "Max 15", icon: Users },
        { label: "Rating", value: "4.9 / 5", icon: Star },
    ]), [europePkg?.days, europePkg?.nights]);

    const faqs = useMemo(() => ([
        {
            question: "What is the best time to visit Europe?",
            answer: "May to September is typically the best time with pleasant weather and longer days, though Europe is beautiful year-round.",
        },
        {
            question: "Do Indians need a visa for Europe?",
            answer: "Yes, Indians need a Schengen visa to visit most European countries. The visa allows travel to 26 countries for up to 90 days.",
        },
        {
            question: "What are the must-visit attractions?",
            answer: "Eiffel Tower, Colosseum, Swiss Alps, Anne Frank House, Prague Castle, and many UNESCO World Heritage sites.",
        },
        {
            question: "What currency is used in Europe?",
            answer: "Most EU countries use the Euro (EUR), though some countries like Switzerland and Czech Republic have their own currencies.",
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
                                alt={europePkg?.packageName || 'Europe package'}
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
                                alt={europePkg?.packageName || 'Europe package'}
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
                                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(4.9) ? 'text-yellow-400 fill-yellow-400' : 'text-white/40'}`} />
                                ))}
                                <span className="ml-2 font-medium">4.9/5 (125 reviews)</span>
                            </div>

                            <h1 className="text-3xl leading-tight md:text-6xl font-bold text-white mb-2 md:mb-4">{europePkg?.packageName}</h1>

                            <p className="flex items-center text-white/95 mb-4 md:mb-6">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span className="text-lg">Europe</span>
                            </p>

                            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-12">
                                <Button
                                    size="sm"
                                    className="rounded-full px-5 md:px-8 bg-gradient-to-r from-[#17b1ff] to-[#00f6ff] hover:opacity-90 transition shadow-md"
                                    aria-label="Book Europe tour"
                                    onClick={() => setIsBookingModalOpen(true)}
                                >
                                    Book Now
                                </Button>

                                <div className="flex md:hidden w-full gap-2">
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">{europePkg?.days} Days / {europePkg?.nights} Nights</span>
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">Europe</span>
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
                                <span className="text-sm font-bold bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-3 py-1 rounded-full">₹{europePkg?.amount?.toLocaleString('en-IN')}</span>
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
                                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">What&apos;s Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="p-5">
                                        <h3 className="text-lg font-medium mb-3 flex items-center">
                                            <Check className="h-5 w-5 mr-2 text-green-500" />
                                            <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Included</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {europePkg?.inclusions?.map((item, i) => (<li key={i} className="flex items-start"><Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> {item}</li>))}
                                        </ul>
                                    </Card>
                                    <Card className="p-5">
                                        <h3 className="text-lg font-medium mb-3 flex items-center">
                                            <X className="h-5 w-5 mr-2 text-red-500" />
                                            <span className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Excluded</span>
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            {europePkg?.exclusions?.map((item, i) => (<li key={i} className="flex items-start"><X className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> {item}</li>))}
                                        </ul>
                                    </Card>
                                </div>
                            </section>

                            <section className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
                                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] bg-clip-text text-transparent">Day-by-Day Itinerary</h2>
                                <div className="md:static sticky top-16 z-30 -mx-4 px-4 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75 py-2 rounded-xl shadow-sm flex overflow-x-auto space-x-2 mb-4 pb-2 no-scrollbar">
                                    {europePkg?.itinerary.map((day, i) => (
                                        <button key={i} onClick={() => scrollToDay(day.day)} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDay === day.day ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                                            Day {day.day}
                                        </button>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {europePkg?.itinerary.map((day, i) => {
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
                                    {europePkg.hotelDetails.map((hotel, index) => (
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
                                <div className="flex items-center gap-2 mb-3"><Star className="h-5 w-5 text-yellow-500" /><span className="text-sm text-gray-600">Trusted by 10k+ travelers</span></div>
                                <div className="text-3xl font-bold mb-2">₹{europePkg?.amount?.toLocaleString('en-IN')}</div>
                                <p className="text-sm text-gray-600 mb-4">per person incl. hotels & transfers</p>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Instant enquiry</div>
                                    <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Customizable</div>
                                    <div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-green-500" /> Best-price guarantee</div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]" onClick={() => setIsBookingModalOpen(true)}>Book This Trip</Button>
                            </div>
                        </aside>
                    </div>
                </main>

                {isBookingModalOpen && (
                    <BookingFormModal
                        isOpen={isBookingModalOpen}
                        onClose={() => setIsBookingModalOpen(false)}
                        destinationName={europePkg?.packageName || 'Europe'}
                    />
                )}
            </div>
        </PageWrapper>
    );
}
