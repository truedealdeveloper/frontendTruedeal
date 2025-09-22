'use client';

import Link from 'next/link';
import { useState } from 'react';
import { fixedDeparturesData, FixedDeparture, DestinationWithoutFlight, destinationGroups, getTotalPages } from './data';
import { FaPlane, FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React from 'react';

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

    const DetailItem = ({ icon, text }: { icon: React.ReactNode; text?: string }) => (
        <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-yellow-400 flex-shrink-0">{icon}</span>
            <span className="truncate text-xs sm:text-sm">{text}</span>
        </div>
    );
    DetailItem.displayName = 'DetailItem';

    const DestinationCard = React.memo(function DestinationCard({ destination, type }: { 
        destination: FixedDeparture | DestinationWithoutFlight, 
        type: 'withFlight' | 'withoutFlight' 
    }) {
        if (!destination) return null;

        const citiesList = destination?.hotelDetails?.map(hotel => hotel.city).join(' • ');

        return (
            <div className="relative group h-[400px] sm:h-[450px] w-[280px] sm:w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                <Image 
                    src={destination?.images?.[0] || '/default-destination-image.jpg'} 
                    alt={destination?.country || 'Destination'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />

                {/* Flight Icon Badge */}
                <div className="absolute top-3 right-3 z-10">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                        <FaPlane className="w-4 h-4 md:w-5 md:h-5 text-[#017ae3]" />
                    </div>
                </div>

                {destination?.amount && (
                    <div className="absolute top-3 left-0 z-10">
                        <div className="bg-yellow-400 px-3 md:px-4 py-1.5 rounded-full shadow-lg">
                            <span className="line-through text-xs md:text-sm mr-1 md:mr-2">
                                ₹{(destination.amount * 1.2).toLocaleString('en-IN')}/-
                            </span>
                            <span className="font-bold text-xs md:text-sm">
                                ₹{destination.amount.toLocaleString('en-IN')}/-
                            </span>
                            <span className="text-xs md:text-sm ml-1">onwards</span>
                        </div>
                    </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-tight">
                        {destination?.days} Days {destination?.country} Tour Package
                    </h2>

                    {citiesList && (
                        <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-200 line-clamp-2">{citiesList}</p>
                    )}

                    <div className="grid grid-cols-2 gap-y-1 sm:gap-y-2 text-xs sm:text-sm mb-3 sm:mb-4">
                        <DetailItem icon={<FaClock />} text={`${destination?.days}D/${destination?.nights}N`} />
                        <DetailItem icon={<IoLocationSharp />} text={destination?.hotelDetails?.[0]?.city} />
                        {type === 'withFlight' && 'flightFrom' in destination && (
                            <DetailItem icon={<FaPlane />} text={destination.flightFrom} />
                        )}
                        <DetailItem icon={<FaCalendarAlt />} text={destination?.dateStart} />
                    </div>

                    <Link href={`/fixedDeparture/${destination.id}`}>
                        <Button className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all duration-500">
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        );
    });

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
                    aria-label="Previous page"
                >
                    <FaChevronLeft className="w-3 h-3" />
                </Button>
                <span className="text-sm text-gray-500" aria-live="polite">
                    Page {currentPage + 1} of {totalPages}
                </span>
                <Button 
                    onClick={onNext} 
                    disabled={currentPage === totalPages - 1}
                    variant="outline"
                    className="rounded-full w-8 h-8 p-0"
                    aria-label="Next page"
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
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            With Flights
                        </span>
                        <div className="mt-2 px-6 py-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full">
                            <p className="text-sm text-white font-medium">Fixed Departures</p>
                        </div>
                    </h1>
                </div>
                
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
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Without Flights
                        </span>
                        <div className="mt-2 px-6 py-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full">
                            <p className="text-sm text-white font-medium">Fixed Departures</p>
                        </div>
                    </h2>
                </div>
                
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
                                    .filter(([]) => true)
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
