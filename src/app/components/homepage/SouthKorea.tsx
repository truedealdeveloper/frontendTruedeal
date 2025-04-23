"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SouthKorea = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  const images = [
    '/UGCImages/korea/1.png',
    '/UGCImages/korea/2.png',
    '/UGCImages/korea/3.png',
    '/UGCImages/korea/4.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left side with image carousel */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`South Korea ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
            <h2 className="absolute bottom-8 left-8 text-white text-3xl font-bold z-20">
              South Korea
            </h2>
            
            {/* Image indicators */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 space-y-6 order-first lg:order-last">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">South Korea</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover a perfect blend of ancient traditions and modern innovations, from tranquil temples to vibrant cities and stunning landscapes.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
              <span className="text-gray-700">Seoul</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
              <span className="text-gray-700">Busan</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
              <span className="text-gray-700">Jeju Island</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
              <span className="text-gray-700">Gyeongju</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
              <span className="text-gray-700">Incheon</span>
            </div>
          </div>

          <div className="mt-4 relative">
            <button 
              onClick={() => setShowComingSoon(!showComingSoon)}
              className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              Explore South Korea & Mountains
            </button>
            
            {showComingSoon && (
              <div className="absolute top-full left-0 mt-3 p-4 bg-white rounded-lg shadow-xl z-10 w-64 border border-gray-100 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full animate-pulse"></div>
                  <p className="font-medium text-gray-800">Coming Soon</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">Our South Korea destinations are being curated for your next journey!</p>
                <button 
                  onClick={() => setShowComingSoon(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthKorea; 