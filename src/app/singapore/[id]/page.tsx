"use client";

import React, { use, useMemo, useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { singaporePackages } from "../data";
import { notFound } from "next/navigation";
import { Calendar, Check, MapPin, Star, Users, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Poppins } from "next/font/google";
import { PageWrapper } from "@/components/page-wrapper";
import { useMobile } from "@/hooks/use-mobile";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

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
        obs.observe(el);
        return () => obs.disconnect();
    }, [inView, rootMargin]);

    return [ref, inView];
}

export default function SingaporePackagePage({ params }: PageProps) {
    const { id } = use(params);
    const singaporePkg = useMemo(
        () => Object.values(singaporePackages).find(p => p.id === id),
        [id]
    );
    const isMobile = useMobile();

    if (!singaporePkg) {
        notFound();
    }

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    // removed rotating hero logic for performance
    const [selectedDay, setSelectedDay] = useState(1);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [expandedDays, setExpandedDays] = useState<number[]>([1]);
    // removed gallery for performance

    const overviewRef = useRef<HTMLDivElement>(null);
    const itineraryRef = useRef<HTMLDivElement>(null);
    const inclusionsRef = useRef<HTMLDivElement>(null);
    const exclusionsRef = useRef<HTMLDivElement>(null);

    const [overviewMountRef, overviewInView] = useInView<HTMLDivElement>("300px");

    // no image rotation

    const description = singaporePkg?.description || "";
    const truncatedDescription = description.length > 300 ? `${description.substring(0, 300)}...` : description;

    const toggleDayExpansion = useCallback((dayNumber: number) => {
        setExpandedDays((prev) => prev.includes(dayNumber) ? prev.filter((d) => d !== dayNumber) : [...prev, dayNumber]);
    }, []);

    // gallery helpers removed

    const getPackageLocation = (packageId: string) => {
        if (packageId.includes("malaysia")) return "Malaysia";
        if (packageId.includes("langkawi")) return "Langkawi";
        return "Singapore";
    };

    const quickFacts = useMemo(() => ([
        { label: "Duration", value: `${singaporePkg?.days}d / ${singaporePkg?.nights}n`, icon: Calendar },
        { label: "Location", value: getPackageLocation(id), icon: MapPin },
        { label: "Group", value: "Max 20", icon: Users },
        { label: "Rating", value: "4.8 / 5", icon: Star },
    ]), [id, singaporePkg?.days, singaporePkg?.nights]);

    return (
        <PageWrapper>
            <div className={`relative ${poppins.className}`}>
                {/* Hero: CSS-only on mobile, improved mobile layout */}
                <header className={`relative w-full ${isMobile ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600' : ''}`} style={{ minHeight: isMobile ? '56vh' : '68vh' }}>
                    {isMobile ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600">
                            <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full" />
                            <div className="absolute top-32 left-8 w-12 h-12 border border-white/30 rounded-full" />
                            <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/20 rounded-full" />
                            <div className="absolute top-20 left-1/2 w-8 h-8 bg-white/10 rounded-full" />
                        </div>
                    ) : (
                        <>
                            <Image
                                src={singaporePkg?.images?.[0] || 'https://truedeal-assets.s3.eu-north-1.amazonaws.com/Singapore/singapore/1.webp'}
                                alt={singaporePkg?.packageName || 'Singapore package'}
                                fill
                                className="object-cover brightness-[0.85]"
                                priority={false}
                                quality={85}
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </>
                    )}

                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-12">
                        <div className="max-w-7xl w-full pl-0 md:pl-12 relative top-4 md:top-12">
                            {/* Rating row */}
                            <div className="flex items-center mb-3 text-white drop-shadow">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(4.8) ? 'text-yellow-400 fill-yellow-400' : 'text-white/40'}`} />
                                ))}
                                <span className="ml-2 font-medium">4.8/5 (67 reviews)</span>
                            </div>

                            {/* Title scales better on mobile */}
                            <h1 className="text-3xl leading-tight md:text-6xl font-bold text-white mb-2 md:mb-4">{singaporePkg?.packageName}</h1>

                            <p className="flex items-center text-white/95 mb-4 md:mb-6">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span className="text-lg">{getPackageLocation(id)}</span>
                            </p>

                            {/* CTA + chips on mobile in a card strip */}
                            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-12">
                                <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
                                    <DialogTrigger asChild>
                                        <Button size="sm" className="rounded-full px-5 md:px-8 bg-gradient-to-r from-[#17b1ff] to-[#00f6ff] hover:opacity-90 transition shadow-md" aria-label="Book Singapore tour">Book Now</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md">
                                        <DialogHeader>
                                            <DialogTitle>Quick Booking</DialogTitle>
                                        </DialogHeader>
                                        <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); setIsBookingModalOpen(false); }}>
                                            <input className="h-11 rounded-md border border-input bg-background px-3" placeholder="Full name" aria-label="Full name" />
                                            <input className="h-11 rounded-md border border-input bg-background px-3" placeholder="Email" type="email" aria-label="Email" />
                                            <input className="h-11 rounded-md border border-input bg-background px-3" placeholder="Travel dates" aria-label="Travel dates" />
                                            <Button type="submit">Send Enquiry</Button>
                                        </form>
                                    </DialogContent>
                                </Dialog>

                                {/* Inline quick facts on mobile header */}
                                <div className="flex md:hidden w-full gap-2">
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">{singaporePkg?.days}d / {singaporePkg?.nights}n</span>
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">{getPackageLocation(id)}</span>
                                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs">Max 20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile sticky CTA bar */}
                <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
                    <div className="mx-3 mb-3 rounded-full shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border border-black/5">
                        <div className="flex items-center justify-between px-3 py-2">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-black/70" />
                                <span className="text-sm font-medium">Need help?</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="tel:+919310271488"><Button size="sm" variant="outline" className="rounded-full">Call</Button></a>
                                <Button size="sm" className="rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff]" onClick={() => setIsBookingModalOpen(true)}>Book</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick facts (hidden on mobile since shown in header) */}
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

                {/* Main single column (no tabs, minimal images) */}
                <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left column: Overview, Inclusions, Itinerary, Accommodation (no tabs) */}
                        <div className="lg:col-span-2 min-w-0">
                            {/* Overview */}
                            <section ref={overviewMountRef} className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}>
                                <h2 className="text-2xl font-bold mb-4">About This Package</h2>
                                <Card className="p-5">
                                    <p className="text-gray-700">{showFullDescription ? description : truncatedDescription}</p>
                                    {description.length > 300 && (
                                        <Button variant="link" className="p-0 h-auto text-[#017ae3] mt-1" onClick={() => setShowFullDescription(v => !v)}>
                                            {showFullDescription ? "Show Less" : "Read More ↓"}
                                        </Button>
                                    )}
                                </Card>
                            </section>

                            {/* What's Included / Not Included */}
                            <section className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}>
                                <h2 className="text-2xl font-bold mb-4">What’s Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="p-5">
                                        <h3 className="text-lg font-medium mb-3 flex items-center"><Check className="h-5 w-5 mr-2 text-green-500" /> Included</h3>
                                        <ul className="space-y-2 text-sm">
                                            {singaporePkg?.inclusions?.map((item, i) => (<li key={i} className="flex items-start"><Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" /> {item}</li>))}
                                        </ul>
                                    </Card>
                                    <Card className="p-5">
                                        <h3 className="text-lg font-medium mb-3 flex items-center"><X className="h-5 w-5 mr-2 text-red-500" /> Not Included</h3>
                                        <ul className="space-y-2 text-sm">
                                            {singaporePkg?.exclusions?.map((item, i) => (<li key={i} className="flex items-start"><X className="h-4 w-4 text-red-500 mr-2 mt-0.5" /> {item}</li>))}
                                        </ul>
                                    </Card>
                                </div>
                            </section>

                            {/* Itinerary - image free */}
                            <section className="mb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
                                <h2 className="text-2xl font-bold mb-4">Day-by-Day Itinerary</h2>
                                <div className="flex overflow-x-auto space-x-2 mb-4 pb-2 no-scrollbar">
                                    {singaporePkg?.itinerary.map((day, i) => (
                                        <button key={i} onClick={() => { setSelectedDay(day.day); if (!expandedDays.includes(day.day)) toggleDayExpansion(day.day); }} className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDay === day.day ? 'bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                                            Day {day.day}
                                        </button>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {singaporePkg?.itinerary.map((day, i) => {
                                        const isExpanded = expandedDays.includes(day.day);
                                        return (
                                            <Card key={i} className={`p-4 ${selectedDay === day.day ? 'ring-2 ring-[#017ae3]/20' : ''}`} onClick={() => toggleDayExpansion(day.day)} role="button" aria-expanded={isExpanded}>
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

                            {/* Accommodation - text only */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Your Accommodations</h2>
                                <div className="space-y-3">
                                    {singaporePkg.hotelDetails.map((hotel, index) => (
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
                        </div>

                        {/* Right column */}
                        <aside className="lg:sticky lg:top-24 h-fit">
                            <div className="rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur p-5 shadow-sm">
                                <div className="flex items-center gap-2 mb-3"><Star className="h-5 w-5 text-yellow-500" /><span className="text-sm text-gray-600">Trusted by 5k+ travelers</span></div>
                                <div className="text-3xl font-bold mb-2">₹{singaporePkg?.amount?.toLocaleString('en-IN')}</div>
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

                {/* No gallery modal */}
            </div>
        </PageWrapper>
    );
}