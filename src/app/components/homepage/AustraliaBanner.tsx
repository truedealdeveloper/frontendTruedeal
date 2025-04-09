'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const AustraliaBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const australiaPackages = [
    {
      id: 'the-best-of-australia',
      title: 'The Best of Australia 13 Days',
      images: [
        '/UGCImages/Images4/australia/vertical/1.webp',
        '/UGCImages/Images4/australia/vertical/2.webp',
        '/UGCImages/Images4/australia/vertical/3.webp',
        '/UGCImages/Images4/australia/vertical/4.webp',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '4,90,999'
    },
    {
      id: 'incredible-australia',
      title: 'Incredible Australia 10 Days',
      images: [
        '/UGCImages/Images4/australia/vertical/5.webp',
        '/UGCImages/Images4/australia/vertical/6.webp',
        '/UGCImages/australia/Best/1.png',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '3,54,999'
    },
    {
      id: 'whitsundays-delight',
      title: 'Whitsundays Delight 10 Days',
      images: [
        '/UGCImages/australia/Best/2.png',
        '/UGCImages/australia/Best/3.png',
        '/UGCImages/australia/Best/4.png',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '3,64,999'
    },
    {
      id: 'east-coast-adventure',
      title: 'East Coast Adventure 11 Days',
      images: [
        '/UGCImages/Images4/australia/vertical/13.webp',
        '/UGCImages/Images4/australia/vertical/14.webp',
        '/UGCImages/Images4/australia/vertical/15.webp',
        '/UGCImages/Images4/australia/vertical/16.webp',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '3,44,999'
    },
    {
      id: 'hamilton-island',
      title: 'Hamilton Island Honeymoon ',
      images: [
        '/UGCImages/Images4/australia/vertical/17.webp',
        '/UGCImages/Images4/australia/vertical/18.webp',
        '/UGCImages/Images4/australia/vertical/19.webp',
        '/UGCImages/Images4/australia/vertical/20.webp',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '5,96,999'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => 
      prev + 3 >= australiaPackages.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => 
      prev === 0 ? australiaPackages.length - 3 : prev - 1
    );
  };

  const visiblePackages = australiaPackages.slice(startIndex, startIndex + 3);
  if (visiblePackages.length < 3) {
    visiblePackages.push(...australiaPackages.slice(0, 3 - visiblePackages.length));
  }

  return (
    <div className="w-full min-h-[600px] relative">
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Title section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-lg md:text-2xl font-bold relative flex flex-col md:flex-row items-center justify-center gap-2">
            <Image 
              src="/UGCImages/australia/gold-coast.png"
              alt="Australia icon"
              width={40}
              height={40}
              className="object-contain w-8 h-8 md:w-10 md:h-10"
              priority
            />
            <div className="relative mt-2 md:mt-0">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff] block mb-1 text-xl md:text-2xl">
                Discover Australia
              </span>
              <div className="mt-[-8px] md:mt-[-12px] transform -rotate-2">
                <p className={`text-xl md:text-3xl text-[#017ae3] ${dancingScript.className}`}>
                  The Land of Kangaroos
                </p>
              </div>
            </div>
            <Image 
              src="/UGCImages/australia/kangaroo.png"
              alt="Australia culture icon"
              width={40}
              height={40}
              className="object-contain w-8 h-8 md:w-10 md:h-10"
              priority
            />
          </h1>
        </div>

        {/* Packages grid with navigation */}
        <div className="relative max-w-6xl mx-auto mb-8 md:mb-12">
          {/* Previous button - Hidden on mobile, shown on larger screens */}
          <button 
            onClick={handlePrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
              bg-black/50 hover:bg-black/70 text-white p-3 rounded-full
              transition-all duration-300 backdrop-blur-sm z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {visiblePackages.map((pkg) => (
              <Link href={`/australia/${pkg.id}`} key={pkg.id} 
                className="text-center group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] mb-4 mx-auto">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-all duration-300" />
                  
                  {/* Image wrapper */}
                  <div className="absolute inset-0 rounded-full overflow-hidden 
                    shadow-[0_0_20px_rgba(0,0,0,0.3)] 
                    group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] 
                    transition-all duration-300 
                    border-2 border-white/20 group-hover:border-white/40"
                  >
                    {pkg.images.map((image, index) => (
                      <Image
                        key={image}
                        src={image}
                        alt={`${pkg.title} - Image ${index + 1}`}
                        fill
                        className={`object-cover transition-all duration-1000 scale-105 group-hover:scale-110 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 200px, 220px"
                      />
                    ))}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-black/75 backdrop-blur-md rounded-xl p-4 md:p-5 
                  transition-all duration-300 
                  group-hover:bg-black/85
                  border border-white/10 group-hover:border-white/20
                  shadow-[0_4px_20px_rgba(0,0,0,0.25)]
                  max-w-[280px] mx-auto md:max-w-none"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-2.5 text-white drop-shadow-lg">
                    {pkg.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-100 mb-2 md:mb-2.5 font-medium tracking-wide drop-shadow">
                    {pkg.date}
                  </p>
                  <p className="inline-block text-base sm:text-lg font-bold 
                    bg-gradient-to-r from-emerald-300 to-green-300 
                    text-transparent bg-clip-text 
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  >
                    From ₹{pkg.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Next button - Hidden on mobile, shown on larger screens */}
          <button 
            onClick={handleNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
              bg-black/50 hover:bg-black/70 text-white p-3 rounded-full
              transition-all duration-300 backdrop-blur-sm z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Mobile navigation dots */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {Array.from({ length: australiaPackages.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(startIndex) === index 
                    ? 'bg-blue-500 w-4' 
                    : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Background - You may need to create an Australia-specific video */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/UGCImages/australia/australiaBG.mp4" type="video/mp4" />
          <Image
            src="/UGCImages/Images4/australia/vertical/1.webp"
            alt="Australia Background"
            fill
            className="object-cover"
            priority
          />
        </video>
      </div>
    </div>
  );
};

export default AustraliaBanner; 