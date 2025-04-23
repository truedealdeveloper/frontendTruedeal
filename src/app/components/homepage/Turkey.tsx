"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Turkey = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  const images = ['/UGCImages/turkey/1.webp', '/UGCImages/turkey/2.webp', 
                 '/UGCImages/turkey/3.webp', '/UGCImages/turkey/4.webp'];
  
  const destinations = ["Istanbul", "Cappadocia", "Antalya", "Pamukkale", "Ephesus"];

  useEffect(() => {
    const timer = setInterval(() => 
      setCurrentImageIndex((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2 space-y-6 order-last lg:order-first">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Turkey</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Experience a fascinating crossroads of cultures where East meets West, featuring ancient ruins, stunning coastlines, and vibrant bazaars.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.map(dest => (
              <div key={dest} className="bg-[#f8f9ff] rounded-lg p-4 hover:bg-[#f0f2ff] transition-colors shadow-sm">
                <span className="text-gray-700">{dest}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 relative">
            <button onClick={() => setShowComingSoon(!showComingSoon)}
              className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Explore Turkey & Unique Cultural Blend
            </button>
            
            {showComingSoon && (
              <div className="absolute top-full left-0 mt-3 p-4 bg-white rounded-lg shadow-xl z-10 w-64 border border-gray-100 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-full animate-pulse"></div>
                  <p className="font-medium text-gray-800">Coming Soon</p>
                </div>
                <p className="text-sm text-gray-600 mt-1">Our Turkey destinations are being prepared for your next adventure!</p>
                <button onClick={() => setShowComingSoon(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">✕</button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg order-first lg:order-last">
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            {images.map((src, index) => (
              <Image key={src} src={src} alt={`Turkey ${index + 1}`} fill
                className={`object-cover transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                priority={index === 0} />
            ))}
            <h2 className="absolute bottom-8 left-8 text-white text-3xl font-bold z-20">Turkey</h2>
            
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'bg-white w-6' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turkey;