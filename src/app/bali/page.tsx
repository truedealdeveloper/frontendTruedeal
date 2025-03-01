'use client';

import { useState } from 'react';
import Link from 'next/link';
import { baliPackages, BaliPackage } from './data';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function BaliPackages() {
    const [currentPage, setCurrentPage] = useState(0);
    const packages = Object.values(baliPackages);
    const totalPages = Math.ceil(packages.length / 3);

    const handlePrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
    };

    const PackageCard = ({ package: baliPackage }: { package: BaliPackage }) => {
        return (
            <div className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                {/* Background Image */}
                <Image 
                    src={baliPackage.images[0]} 
                    alt={baliPackage.packageName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                {/* Price Tag */}
                <div className="absolute top-3 left-0 z-10">
                    <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                        <span className="line-through text-sm mr-2">
                            ₹{(baliPackage.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold">
                            ₹{baliPackage.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1">onwards</span>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {baliPackage.packageName}
                    </h2>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{baliPackage.days}D/{baliPackage.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-yellow-400" />
                            <span>{baliPackage.hotelDetails[0].city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>{baliPackage.dateStart}</span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/bali/${baliPackage.id}`}>
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

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Bali Tour Packages
                    </span>
                </h1>
            </div>

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
                            .map((baliPkg) => (
                                <PackageCard key={baliPkg.id} package={baliPkg} />
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
    );
} 