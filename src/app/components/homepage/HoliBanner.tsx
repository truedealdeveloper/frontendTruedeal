import React from 'react';

const HoliBanner = () => {
  return (
    <div className="w-full py-3 bg-gradient-to-r from-pink-100 via-purple-100 to-yellow-100 border-y border-opacity-20 border-purple-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
          <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse delay-100"></span>
          <p className="text-gray-800 text-sm font-medium">
            Celebrating the Festival of Colors! Happy Holi 🎨
          </p>
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse delay-200"></span>
          <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default HoliBanner; 