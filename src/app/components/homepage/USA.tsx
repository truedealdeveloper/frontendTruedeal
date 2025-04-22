import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const USA = () => {
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

        {/* Right side image for larger screens, bottom image for mobile */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <Image
              src="/images/usa-placeholder.jpg" // Make sure to add your USA image
              alt="United States"
              fill
              className="object-cover"
              priority
            />
            <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold z-20">
              USA
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USA;
