import React from 'react';

const HoliBanner = () => {
  return (
    <div className="w-full py-2 bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 border-y border-opacity-20 border-purple-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center text-center gap-2 sm:gap-3">
          {/* Left dots */}
          <div className="hidden sm:flex space-x-1.5">
            <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse delay-100"></span>
          </div>

          {/* Message */}
          <p className="text-sm font-medium flex flex-wrap justify-center items-center gap-1">
            <span className="bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Celebrate Holi with Truedeal!
            </span>
            <span className="text-gray-800">
              Get up to 10% off on all international bookings
            </span>
            <span className="text-gray-600 text-xs">
              (Valid: Mar 6 - Mar 13)
            </span>
          </p>

          {/* Right dots */}
          <div className="hidden sm:flex space-x-1.5">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse delay-200"></span>
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse delay-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoliBanner; 