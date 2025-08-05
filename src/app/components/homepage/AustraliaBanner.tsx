'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Button } from "@/components/ui/button";

const AustraliaBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const australiaPackages = [
    {
      id: 'the-best-of-australia',
      title: 'The Best of Australia',
      days: 13,
      nights: 12,
      images: [
        '/UGCImages/Images4/australia/vertical/1.webp',
        '/UGCImages/Images4/australia/vertical/2.webp',
        '/UGCImages/Images4/australia/vertical/3.webp',
        '/UGCImages/Images4/australia/vertical/4.webp',
      ],
      cities: ['Sydney', 'Melbourne', 'Gold Coast', 'Cairns'],
      startCity: 'Sydney',
      dateStart: '1,8,15,22,29 July',
      amount: 490999
    },
    {
      id: 'incredible-australia',
      title: 'Incredible Australia',
      days: 10,
      nights: 9,
      images: [
        '/UGCImages/Images4/australia/vertical/5.webp',
        '/UGCImages/Images4/australia/vertical/6.webp',
        '/UGCImages/australia/Best/1.png',
      ],
      cities: ['Melbourne', 'Gold Coast', 'Brisbane'],
      startCity: 'Melbourne',
      dateStart: '1,8,15,22,29 July',
      amount: 354999
    },
    {
      id: 'whitsundays-delight',
      title: 'Whitsundays Delight',
      days: 10,
      nights: 9,
      images: [
        '/UGCImages/australia/Best/2.png',
        '/UGCImages/australia/Best/3.png',
        '/UGCImages/australia/Best/4.png',
      ],
      cities: ['Hamilton Island', 'Whitsundays', 'Gold Coast'],
      startCity: 'Hamilton Island',
      dateStart: '1,8,15,22,29 July',
      amount: 364999
    },
    {
      id: 'east-coast-adventure',
      title: 'East Coast Adventure',
      days: 11,
      nights: 10,
      images: [
        '/UGCImages/australia/banner2/1.png',
        '/UGCImages/australia/banner2/2.png',
        '/UGCImages/australia/banner2/3.png',
        '/UGCImages/australia/banner2/4.png',
      ],
      cities: ['Sydney', 'Brisbane', 'Gold Coast'],
      startCity: 'Sydney',
      dateStart: '1,8,15,22,29 July',
      amount: 344999
    },
    {
      id: 'hamilton-island',
      title: 'Hamilton Island Honeymoon',
      days: 8,
      nights: 7,
      images: [
        '/UGCImages/australia/Banner/1.png',
        '/UGCImages/australia/Banner/2.png',
        '/UGCImages/australia/Banner/3.png',
      ],
      cities: ['Hamilton Island', 'Whitsundays'],
      startCity: 'Hamilton Island',
      dateStart: '1,8,15,22,29 July',
      amount: 596999
    }
  ];

  const totalPages = Math.ceil(australiaPackages.length / 3);

  const handlePrevPage = () => {
    setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white mb-6">
      <div className="container mx-auto px-4">
        {/* Title section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
              Discover Australia
            </span>
            <div className="mt-2 px-6 py-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full">
              <p className="text-sm text-white font-medium">The Land of Kangaroos</p>
            </div>
          </h2>
        </div>

        {/* Horizontal Line */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-50 px-4">
              <Image 
                src="/UGCImages/australia/kangaroo.png"
                alt="Australia icon"
                width={40}
                height={40}
                className="object-contain w-8 h-8"
              />
            </span>
          </div>
        </div>

        {/* Cards Grid with Navigation */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
            <Button 
              onClick={handlePrevPage} 
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
              onClick={handleNextPage} 
              disabled={currentPage === totalPages - 1}
              variant="outline"
              className="rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white -mr-5 shadow-lg"
              aria-label="Next page"
            >
              <FaChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Packages Grid */}
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex md:grid md:grid-cols-3 gap-6 min-w-min md:min-w-0">
              {australiaPackages
                .slice(currentPage * 3, (currentPage * 3) + 3)
                .map((pkg) => (
                  <Link 
                    href={`/australiaPackages/${pkg.id}`}
                    key={pkg.id}
                    className="relative group h-[450px] w-[300px] md:w-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
                  >
                    {/* Background Image */}
                    <Image 
                      src={pkg.images[currentImageIndex]}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Price Tag */}
                    <div className="absolute top-4 left-0 z-10">
                      <div className="bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-r-full shadow-lg">
                        <span className="line-through text-sm mr-2 text-black/75">
                          ₹{(pkg.amount * 1.2).toLocaleString('en-IN')}/-
                        </span>
                        <span className="font-bold text-black">
                          ₹{pkg.amount.toLocaleString('en-IN')}/-
                        </span>
                        <span className="text-sm ml-1 text-black/75">onwards</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-3xl font-bold mb-4">
                        {pkg.title}
                      </h2>

                      <div className="flex items-center gap-x-6 text-lg">
                        <div className="flex items-center gap-2">
                          <FaClock className="text-yellow-400" />
                          <span>{pkg.days}D/{pkg.nights}N</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <IoLocationSharp className="text-yellow-400" />
                          <span>{pkg.startCity}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2 text-lg">
                        <FaCalendarAlt className="text-yellow-400" />
                        <span>{pkg.dateStart}</span>
                      </div>

                      <div className="mt-6">
                        <Button
                          className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white transition-all text-lg py-6 rounded-lg duration-300"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-6 flex justify-center items-center gap-2 md:hidden">
            <Button 
              onClick={handlePrevPage} 
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
              onClick={handleNextPage} 
              disabled={currentPage === totalPages - 1}
              variant="outline"
              className="rounded-full w-8 h-8 p-0"
              aria-label="Next page"
            >
              <FaChevronRight className="w-3 h-3" />
            </Button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index ? 'bg-blue-500 w-4' : 'bg-gray-400'
                }`}
                aria-label={`Show image ${index + 1} of 4`}
                aria-current={currentImageIndex === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AustraliaBanner; 