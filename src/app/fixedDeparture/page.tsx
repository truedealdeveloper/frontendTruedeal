'use client';

import Link from 'next/link';
import { useState } from 'react';
import { fixedDeparturesData, FixedDeparture, DestinationWithoutFlight, destinationGroups, getTotalPages } from './data';
import { FaPlane, FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function FixedDepartures() {
    const [currentWithoutFlightPage, setCurrentWithoutFlightPage] = useState(0);
    const [currentWithFlightPage, setCurrentWithFlightPage] = useState(0);
    
    const totalWithoutFlightPages = getTotalPages();
    const withFlightDestinations = Object.values(fixedDeparturesData);
    const totalWithFlightPages = Math.ceil(withFlightDestinations.length / 3);

    const handlePrevPage = (section: 'withFlight' | 'withoutFlight') => {
        if (section === 'withFlight') {
            setCurrentWithFlightPage(prev => prev > 0 ? prev - 1 : prev);
        } else {
            setCurrentWithoutFlightPage(prev => prev > 0 ? prev - 1 : prev);
        }
    };

    const handleNextPage = (section: 'withFlight' | 'withoutFlight') => {
        if (section === 'withFlight') {
            setCurrentWithFlightPage(prev => prev < totalWithFlightPages - 1 ? prev + 1 : prev);
        } else {
            setCurrentWithoutFlightPage(prev => 
                prev < Math.min(totalWithoutFlightPages - 1, destinationGroups.length - 1) ? prev + 1 : prev
            );
        }
    };

    const DestinationCard = ({ destination, type }: { destination: FixedDeparture | DestinationWithoutFlight, type: 'withFlight' | 'withoutFlight' }) => {
        if (!destination) return null;

        return (
            <div 
                className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
                {/* Background Image */}
                <Image 
                    src={destination?.images?.[0] || '/default-destination-image.jpg'} 
                    alt={destination?.country || 'Destination'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                {/* Price Tag */}
                {destination?.amount && (
                    <div className="absolute top-3 left-0 z-10">
                        <div className="bg-yellow-400 px-4 py-1.5 rounded-full shadow-lg">
                            <span className="line-through text-sm mr-2">
                                ₹{destination.amount * 1.2 >= 1000 ? (destination.amount * 1.2).toLocaleString('en-IN') : destination.amount * 1.2}/-
                            </span>
                            <span className="font-bold">
                                ₹{destination.amount >= 1000 ? destination.amount.toLocaleString('en-IN') : destination.amount}/-
                            </span>
                            <span className="text-sm ml-1">onwards</span>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                        {destination?.days} Days {destination?.country} Tour Package
                    </h2>

                    {/* Cities List */}
                    <div className="flex flex-wrap gap-x-2 text-sm mb-4">
                        {destination?.hotelDetails?.map((hotel, idx) => (
                            <span key={idx} className="text-gray-200">
                                {hotel.city}
                                {idx < (destination?.hotelDetails?.length || 0) - 1 && ' •'}
                            </span>
                        ))}
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <FaClock className="text-yellow-400" />
                            <span>{destination?.days}D/{destination?.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-yellow-400" />
                            <span>{destination?.hotelDetails?.[0]?.city}</span>
                        </div>
                        {type === 'withFlight' && 'flightFrom' in destination && (
                            <div className="flex items-center gap-2">
                                <FaPlane className="text-yellow-400" />
                                <span>{destination.flightFrom}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-yellow-400" />
                            <span>{destination?.dateStart}</span>
                        </div>
                    </div>

                    {/* View Details Button */}
                    <Link href={`/fixedDeparture/${destination.id}`}>
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
            {/* With Flights Section */}
            <section className="mb-16">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Fixed Departures
                        <p className="text-sm text-gray-500 mt-1 underline">With Flights</p>
                    </span>
                </h1>
                
                <div className="relative">
                    <NavigationControls 
                        currentPage={currentWithFlightPage}
                        totalPages={totalWithFlightPages}
                        onPrev={() => handlePrevPage('withFlight')}
                        onNext={() => handleNextPage('withFlight')}
                    />
                    
                    <div className="overflow-x-auto -mx-4 px-4">
                        <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                            {withFlightDestinations
                                .slice(currentWithFlightPage * 3, (currentWithFlightPage * 3) + 3)
                                .map((destination) => (
                                    <DestinationCard 
                                        key={destination.id} 
                                        destination={destination} 
                                        type="withFlight"
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Without Flights Section */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                        Fixed Departures
                        <p className="text-sm text-gray-500 mt-1 underline">Without Flights</p>
                    </span>
                </h2>
                
                <div className="relative">
                    <NavigationControls 
                        currentPage={currentWithoutFlightPage}
                        totalPages={totalWithoutFlightPages}
                        onPrev={() => handlePrevPage('withoutFlight')}
                        onNext={() => handleNextPage('withoutFlight')}
                    />
                    
                    <div className="overflow-x-auto -mx-4 px-4">
                        <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
                            {destinationGroups[currentWithoutFlightPage] && 
                                Object.entries(destinationGroups[currentWithoutFlightPage])
                                    .filter(([_, destination]) => destination !== undefined)
                                    .map(([key, destination]) => (
                                        <DestinationCard 
                                            key={key} 
                                            destination={destination} 
                                            type="withoutFlight"
                                        />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
