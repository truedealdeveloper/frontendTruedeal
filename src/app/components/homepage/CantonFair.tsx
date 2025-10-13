'use client';

import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { cantonFairPackages, type CantonFairPackage } from '../../canton-fair/data';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load the booking modal
const BookingFormModal = dynamic(() =>
    import('@/app/components/BookingFormModal').then(m => m.BookingFormModal),
    { ssr: false }
);

const PackageCard = memo(({
    pkg,
    onEnquireNow
}: {
    pkg: CantonFairPackage;
    onEnquireNow: (packageName: string) => void;
}) => {
    const [showDates, setShowDates] = useState(false);
    const hasOffer = pkg.id.includes('phase-2') || pkg.id.includes('phase-3');

    return (
        <div className="relative group h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
                src={pkg.images[0]}
                alt={pkg.packageName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

            {/* Special Offer Badge */}
            {hasOffer && (
                <div className="absolute top-3 right-3 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                        <span className="text-white font-bold text-xs">
                            Book Online & Get ₹5,000 OFF
                        </span>
                    </div>
                </div>
            )}

            {/* Price Tag */}
            <div className="absolute top-3 left-0 z-10">
                <div className="bg-red-500 px-4 py-1.5 rounded-r-full shadow-lg">
                    <span className="text-white font-bold text-lg">
                        ₹{pkg.amount.toLocaleString('en-IN')}/-
                    </span>
                    <span className="text-white text-sm ml-1">per person</span>
                </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                    {pkg.packageName}
                </h2>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                        <FaClock className="text-red-400" />
                        <span>{pkg.days}D/{pkg.nights}N</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoLocationSharp className="text-red-400" />
                        <span>{pkg.hotelDetails[0].city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-red-400" />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setShowDates(!showDates);
                            }}
                            className="hover:text-red-400 transition-colors"
                        >
                            View Dates
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdBusinessCenter className="text-red-400" />
                        <span>Trade Fair</span>
                    </div>
                </div>

                {showDates && pkg.departureDates && (
                    <div
                        className="absolute bottom-full left-0 right-0 bg-black/90 p-4 rounded-t-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-red-400 font-semibold mb-2">Departure Dates</h3>
                        <div className="space-y-2">
                            {pkg.departureDates.map((departure, index) => (
                                <div key={index} className="text-sm">
                                    {departure.date} - {departure.availability}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Link href={`/canton-fair/${pkg.id}`} className="flex-1">
                        <Button
                            variant="outline"
                            className="w-full bg-white/10 hover:bg-white/20"
                        >
                            View Details
                        </Button>
                    </Link>
                    <Button
                        onClick={() => onEnquireNow(pkg.packageName)}
                        className="flex-1 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white transition-all duration-500 shadow-lg hover:shadow-xl"
                    >
                        Enquire Now
                    </Button>
                </div>
            </div>
        </div>
    );
});

PackageCard.displayName = 'PackageCard';

export default function CantonFairHomepage() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedPackageName, setSelectedPackageName] = useState<string>('');

    // Get all 3 packages
    const packages = Object.values(cantonFairPackages) as CantonFairPackage[];

    const handleEnquireNow = useCallback((packageName: string) => {
        setSelectedPackageName(packageName);
        setIsBookingModalOpen(true);
    }, []);

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
                                Canton Fair 2025 - China&apos;s Largest Trade Fair
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
                            Connect with thousands of manufacturers across three specialized phases. 
                            Book Phase 2 or 3 online and save ₹5,000!
                        </p>
                    </div>

                    {/* Fair Information Banner */}
                    <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-center">
                            <div>
                                <FaCalendarAlt className="text-2xl mx-auto mb-2" />
                                <h3 className="font-semibold">Phase 1</h3>
                                <p className="text-sm">Oct 15-19, 2025</p>
                                <p className="text-xs opacity-90">Electronics & Machinery</p>
                            </div>
                            <div>
                                <FaCalendarAlt className="text-2xl mx-auto mb-2" />
                                <h3 className="font-semibold">Phase 2</h3>
                                <p className="text-sm">Oct 23-27, 2025</p>
                                <p className="text-xs opacity-90">Consumer Goods & Home</p>
                            </div>
                            <div>
                                <FaCalendarAlt className="text-2xl mx-auto mb-2" />
                                <h3 className="font-semibold">Phase 3</h3>
                                <p className="text-sm">Oct 31-Nov 4, 2025</p>
                                <p className="text-xs opacity-90">Textiles & Fashion</p>
                            </div>
                        </div>
                    </div>

                    {/* Package Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {packages.map((pkg) => (
                            <PackageCard
                                key={pkg.id}
                                pkg={pkg}
                                onEnquireNow={handleEnquireNow}
                            />
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center">
                        <Link href="/canton-fair">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg"
                            >
                                View All Canton Fair Packages
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Booking Form Modal */}
            {isBookingModalOpen && (
                <BookingFormModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    destinationName={selectedPackageName || 'Canton Fair 2025'}
                />
            )}
        </div>
    );
}
