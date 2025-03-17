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
      id: 'almaty-3days',
      title: '3 Days in Almaty',
      images: [
        '/UGCImages/Images4/almaty/vertical/1.webp',
        '/UGCImages/Images4/almaty/vertical/2.webp',
        '/UGCImages/Images4/almaty/vertical/3.webp',
        '/UGCImages/Images4/almaty/vertical/al/4.png',
      ],
      date: 'March 15-17, 2025',
      price: '599'
    },
    {
      id: 'almaty-4days',               
      title: '4 Days Almaty Adventure',
      images: [
        '/UGCImages/Images4/almaty/vertical/4.webp',
        '/UGCImages/Images4/almaty/vertical/5.webp',
        '/UGCImages/Images4/almaty/vertical/6.webp',
        '/UGCImages/Images4/almaty/vertical/al/3.png',
      ],
      date: 'March 20-23, 2025',
      price: '799'
    },
    {
      id: 'almaty-5days',
      title: '5 Days Almaty Explorer',
      images: [
        '/UGCImages/Images4/almaty/vertical/al/1.png',
        '/UGCImages/Images4/almaty/vertical/al/2.png',
        '/UGCImages/Images4/almaty/vertical/al/3.png',
        '/UGCImages/Images4/almaty/vertical/al/4.png',
      ],
      date: 'March 25-29, 2025',
      price: '999'
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
      {/* Left decorative icons */}
      <div className="absolute left-0 top-0 h-full w-24 opacity-20">
        <div className="relative h-full w-full">
          <Image
            src="/UGCImages/Images4/almaty/vertical/mountains.png"
            alt="Mountain decoration"
            width={220}
            height={220}
            className="absolute top-1/4 left-4 transform -rotate-12"
          />
          <Image
            src="/UGCImages/Images4/almaty/vertical/burj-khalifa.png"
            alt="Yurt decoration"
            width={60}
            height={60}
            className="absolute top-1/2 left-8"
          />
          <Image
            src="/UGCImages/Images4/almaty/vertical/cathedral.png"
            alt="Horse decoration"
            width={70}
            height={70}
            className="absolute bottom-1/4 left-2 transform rotate-12"
          />
        </div>
      </div>

      {/* Right decorative icons */}
      <div className="absolute right-0 top-0 h-full w-24 opacity-20">
        <div className="relative h-full w-full">
          <Image
            src="/UGCImages/Images4/almaty/vertical/cath.png"
            alt="Camel decoration"
            width={80}
            height={80}
            className="absolute top-1/3 right-4 transform rotate-12"
          />
          <Image
            src="/UGCImages/Images4/almaty/vertical/bg.png"
            alt="Mosque decoration"
            width={60}
            height={60}
            className="absolute top-2/3 right-8"
          />
          <Image
            src="/UGCImages/Images4/almaty/vertical/bgg.png"
            alt="Eagle decoration"
            width={70}
            height={70}
            className="absolute bottom-1/4 right-2 transform -rotate-12"
          />
        </div>
      </div>

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
                From ${pkg.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlmatyBanner;
