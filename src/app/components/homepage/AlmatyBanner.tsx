'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const AlmatyBanner = () => {
  const almatyPackages = [
    {
      id: '4-days-almaty-winter',
      title: '4 Days Almaty',
      image: '/UGCImages/Images4/almaty/vertical/1.webp',
      date: '01 Jun - 26 Jul',
      price: '49,000'
    },
    {
      id: '5-days-almaty-discovery',               
      title: '5 Days Almaty',
      image: '/UGCImages/Images4/almaty/vertical/4.webp',
      date: '01 Jun - 26 Jul',
      price: '59,000'
    },
    {
      id: '6-days-almaty-explore',
      title: '6 Days Almaty',
      image: '/UGCImages/Images4/almaty/vertical/al/1.png',
      date: '01 Jun - 26 Jul',
      price: '69,000'
    }
  ];

  return (
    <div className="w-full py-8 md:py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Title section */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold relative inline-flex items-center gap-2">
            <Image 
              src="/UGCImages/Images4/almaty/vertical/astana.png"
              alt="Almaty icon"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#015ab0] to-[#00c5cc] block mb-1">
                Explore Almaty
              </span>
              <div className="mt-[-12px] transform -rotate-2">
                <p className={`text-2xl md:text-3xl text-[#015ab0] ${dancingScript.className}`}>
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
          </h2>
        </div>

        {/* Modified Packages section */}
        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto min-w-max md:min-w-0">
            {almatyPackages.map((pkg) => (
              <Link 
                href={`/almaty/${pkg.id}`} 
                key={pkg.id} 
                className="text-center w-[140px] md:w-auto flex-shrink-0 group hover:scale-105 transition-transform duration-300 md:p-2"
              >
                <div className="relative w-[120px] h-[120px] md:w-[200px] md:h-[200px] mb-4 mx-auto md:overflow-visible">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, 200px"
                    />
                  </div>
                </div>
                <div className="md:transform-gpu">
                  <h3 className="text-sm md:text-xl font-medium mb-2">{pkg.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-1">{pkg.date}</p>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] md:text-xs text-gray-500">Starting from</span>
                    <div className="bg-gradient-to-r from-[#015ab0] to-[#00c5cc] text-white px-4 py-1 rounded-full mt-1">
                      <p className="text-sm md:text-lg font-bold">
                        ₹{pkg.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmatyBanner;
