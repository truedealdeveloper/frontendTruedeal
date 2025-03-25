'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });


const AlmatyBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const almatyPackages = [
    {
      id: '4-days-almaty-winter',
      title: '4 Days in Almaty',
      images: [
        '/UGCImages/Images4/almaty/vertical/1.webp',
        '/UGCImages/Images4/almaty/vertical/2.webp',
        '/UGCImages/Images4/almaty/vertical/3.webp',
        '/UGCImages/Images4/almaty/vertical/al/4.png',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '49,000'
    },
    {
      id: '5-days-almaty-discovery',               
      title: '5 Days in Almaty',
      images: [
        '/UGCImages/Images4/almaty/vertical/4.webp',
        '/UGCImages/Images4/almaty/vertical/5.webp',
        '/UGCImages/Images4/almaty/vertical/6.webp',
        '/UGCImages/Images4/almaty/vertical/al/3.png',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '59,000'
    },
    {
      id: '6-days-almaty-explore',
      title: '6 Days Almaty Explorer',
      images: [
        '/UGCImages/Images4/almaty/vertical/al/1.png',
        '/UGCImages/Images4/almaty/vertical/al/2.png',
        '/UGCImages/Images4/almaty/vertical/al/3.png',
        '/UGCImages/Images4/almaty/vertical/al/4.png',
      ],
      date: '01 March 2025 - 26 July 2025',
      price: '69,000'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-8 md:py-12 relative">

      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold relative inline-flex items-center gap-2">
            <Image 
              src="/UGCImages/Images4/almaty/vertical/astana.png"
              alt="Almaty icon"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff] block mb-1">
                Explore Almaty
              </span>
              <div className="mt-[-12px] transform -rotate-2">
                <p className={`text-2xl md:text-3xl text-[#017ae3] ${dancingScript.className}`}>
                  The Apple city of Kazakhstan
                </p>
              </div>
            </div>
            <Image 
              src="/UGCImages/Images4/almaty/vertical/kazakh.png"
              alt="Almaty culture icon"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </h1>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {almatyPackages.map((pkg) => (
            <Link href={`/almaty/${pkg.id}`} key={pkg.id} className="text-center">
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

export default AlmatyBanner;
