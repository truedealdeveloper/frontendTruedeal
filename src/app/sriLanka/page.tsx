'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlane, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { sriLankaData, SriLankaPackage } from './data';

export default function SriLanka() {
    const [currentPage, setCurrentPage] = useState(0);
    const packages = Object.values(sriLankaData);
    const itemsPerPage = 3; // Show 3 items per page on desktop
    const totalPages = Math.ceil(packages.length / itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    // Reusable Card Component for Sri Lanka Packages
    const SriLankaCard = ({ package_ }: { package_: SriLankaPackage }) => {
        if (!package_) return null;

        return (
            <div
                className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
                {/* Background Image */}
                <Image
                    src={package_?.images?.[0] || '/default-destination-image.jpg'}
                    alt={package_?.name || 'Sri Lanka Package'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" // Adjusted sizes
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                {/* Price Tag */}
                {package_?.amount && (
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
                    <h2 className="text-2xl font-bold mb-2">
                        {package_?.name}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{package_?.days}D/{package_?.nights}N</span>
                        </div>
                        {package_.flightFrom && (
                            <div className="flex items-center gap-2">
                                <FaPlane className="text-yellow-400" />
                                <span>{package_.flightFrom}</span>
                            </div>
                        )}
                    </div>

                    {/* View Details Button */}
                    <Link href={`/sriLanka/${package_.id}`}>
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

    // Reusable Navigation Controls Component (similar to fixedDeparture)
    const NavigationControls = ({
        currentPage,
        totalPages,
        onPrev,
        onNext
    }: {
        currentPage: number,
        totalPages: number,
        onPrev: () => void,
        onNext: () => void
    }) => (
        <>
            {/* Desktop Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
                <Button
                    onClick={onPrev}
                    disabled={currentPage === 0}
                    variant="outline"
                    className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -ml-5 shadow-lg"
                    aria-label="Previous page"
                >
                    <FaChevronLeft className="w-4 h-4" />
                </Button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
                <Button
                    onClick={onNext}
                    disabled={currentPage === totalPages - 1}
                    variant="outline"
                    className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -mr-5 shadow-lg"
                    aria-label="Next page"
                >
                    <FaChevronRight className="w-4 h-4" />
                </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="mt-3 flex justify-center items-center gap-2 md:hidden">
                <Button
                    onClick={onPrev}
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
                    onClick={onNext}
                    disabled={currentPage === totalPages - 1}
                    variant="outline"
                    className="rounded-full w-8 h-8 p-0"
                >
                    <FaChevronRight className="w-3 h-3" />
                </Button>
            </div>
        </>
    );


    return (
        <div className="container mx-auto px-4 py-6">
            {/* Single Section for Sri Lanka Packages */}
            <section className="mb-8"> {/* Adjusted margin */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Sri Lanka Packages
                        </span>
                        {/* Optional: Add a subtitle badge if needed */}
                        <div className="mt-2 px-6 py-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full">
                            <p className="text-sm text-white font-medium">Fixed Departures</p>
                        </div>
                    </h1>
                </div>

                <div className="relative">
                    <NavigationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPrev={handlePrevPage}
                        onNext={handleNextPage}
                    />

                    {/* Cards Container */}
                    <div className="overflow-x-auto -mx-4 px-4"> {/* Enable horizontal scroll on mobile */}
                        <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0"> {/* Use flex for mobile, grid for desktop */}
                            {packages
                                .slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage)
                                .map((package_) => (
                                    <SriLankaCard
                                        key={package_.id}
                                        package_={package_}
                                    />
                                ))}
                        </div>
                    </div>
                     {/* Mobile navigation is now part of NavigationControls */}
                </div>
            </section>
            {/* Removed the old desktop/mobile view logic and pagination controls */}
        </div>
    );
} 