'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const AustraliaBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const australiaPackages = [
    {
      id: '7-days-sydney-gold-coast',
      title: '7 Days Sydney & Gold Coast',
      images: [
        '/UGCImages/Images4/australia/vertical/1.webp',
        '/UGCImages/Images4/australia/vertical/2.webp',
        '/UGCImages/Images4/australia/vertical/3.webp',
        '/UGCImages/Images4/australia/vertical/4.webp',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '199,000'
    },
    {
      id: '9-days-melbourne-sydney',
      title: '9 Days Melbourne & Sydney',
      images: [
        '/UGCImages/Images4/australia/vertical/5.webp',
        '/UGCImages/Images4/australia/vertical/6.webp',
        '/UGCImages/Images4/australia/vertical/7.webp',
        '/UGCImages/Images4/australia/vertical/8.webp',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '249,000'
    },
    {
      id: '12-days-australia-explorer',
      title: '12 Days Australia Explorer',
      images: [
        '/UGCImages/Images4/australia/vertical/9.webp',
        '/UGCImages/Images4/australia/vertical/10.webp',
        '/UGCImages/Images4/australia/vertical/11.webp',
        '/UGCImages/Images4/australia/vertical/12.webp',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '299,000'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-8 md:py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold relative inline-flex items-center gap-2">
            <Image 
              src="/UGCImages/Images4/australia/vertical/sydney.png"
              alt="Australia icon"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff] block mb-1">
                Discover Australia
              </span>
              <div className="mt-[-12px] transform -rotate-2">
                <p className={`text-2xl md:text-3xl text-[#017ae3] ${dancingScript.className}`}>
                  The Land Down Under
                </p>
              </div>
            </div>
            <Image 
              src="/UGCImages/Images4/australia/vertical/kangaroo.png"
              alt="Australia culture icon"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </h1>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {australiaPackages.map((pkg) => (
            <Link href={`/australia/${pkg.id}`} key={pkg.id} className="text-center">
              <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mb-4 mx-auto">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {pkg.images.map((image, index) => (
                    <Image
                      key={image}
                      src={image}
                      alt={`${pkg.title} - Image ${index + 1}`}
                      fill
                      className={`object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                      sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-2">{pkg.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-1">{pkg.date}</p>
              <p className="text-sm sm:text-base text-green-600 font-medium">
                From ₹{pkg.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AustraliaBanner; 