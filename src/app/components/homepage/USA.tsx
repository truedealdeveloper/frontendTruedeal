"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const USA = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/UGCImages/usa/1.png',
    '/UGCImages/usa/2.png',
    '/UGCImages/usa/3.png',
    '/UGCImages/usa/4.png',
    '/UGCImages/usa/5.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-8 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side content for larger screens, top content for mobile */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">United States</h2>
          <p className="text-gray-600">
            Experience diverse landscapes from bustling cities to stunning national parks, rich culture, and unforgettable adventures.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors">
              <span className="text-gray-700">New York</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors">
              <span className="text-gray-700">California</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors">
              <span className="text-gray-700">Florida</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors">
              <span className="text-gray-700">Hawaii</span>
            </div>
            <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors">
              <span className="text-gray-700">Las Vegas</span>
            </div>
          </div>

          <Link href="/usa">
            <button className="bg-[#6366f1] text-white px-6 py-2 rounded-lg hover:bg-[#5558e6] transition-colors">
              Explore USA
            </button>
          </Link>
        </div>

        {/* Updated right side with image carousel */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`United States ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
            <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold z-20">
              USA
            </h2>
            
            {/* Image indicators */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USA;
