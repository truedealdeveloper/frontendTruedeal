"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

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
  }, [images.length]);

  return (
    <div className="w-full">
      {/* USA Header Section */}
      <div className="w-full py-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-[-8px] md:mt-[-12px] transform -rotate-2">
                <p className={`text-xl md:text-3xl text-[#017ae3] ${dancingScript.className}`}>
                  Explore the World
                </p>
              </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
            Discover Exotic Destinations
          </h1>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            From the adventure of America to the delicious food of Korea to hot air balloons of Turkey, we offer unforgettable experiences in destinations worldwide
          </p>
          <div className="h-1 w-16 bg-[#6366f1] mx-auto mt-6 rounded-full"></div>
        </motion.div>
      </div>

      {/* USA Content Section */}
      <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">United States</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Experience diverse landscapes from bustling cities to stunning national parks, rich culture, and unforgettable adventures.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
                <span className="text-gray-700">New York</span>
              </div>
              <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
                <span className="text-gray-700">California</span>
              </div>
              <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
                <span className="text-gray-700">Florida</span>
              </div>
              <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
                <span className="text-gray-700">Hawaii</span>
              </div>
              <div className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
                <span className="text-gray-700">Las Vegas</span>
              </div>
            </div>

            <Link href="/usa" className="mt-4 inline-block">
              <button className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
                Explore USA & Modernity
              </button>
            </Link>
          </div>

          {/* Right side with image carousel */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
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
              <h2 className="absolute bottom-8 left-8 text-white text-3xl font-bold z-20">
                USA
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
        </div>
      </div>
    </div>
  );
};

export default USA;
