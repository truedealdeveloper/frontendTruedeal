'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const bannerImages = [
    {
        desktop: "/UGCImages/bali/Bali Banner/baliDesktop/baliBanner.webp",
        mobile: "/UGCImages/bali/Bali Banner/baliMobile/baliBanner-Mobile.webp",
        message: "Experience Paradise in Bali",
        subtext: "Where Dreams Meet Paradise"
    },
    {
        desktop: "/UGCImages/bali/Bali Banner/baliDesktop/baliBanner2.webp",
        mobile: "/UGCImages/bali/Bali Banner/baliMobile/baliBanner2-Mobile.webp",
        message: "Discover Bali's Magic",
        subtext: "Culture, Beauty & Adventure Awaits"
    },
    {
        desktop: "/UGCImages/bali/Bali Banner/baliDesktop/baliBanner3.webp",
        mobile: "/UGCImages/bali/Bali Banner/baliMobile/baliBanner3-Mobile.webp",
        message: "Escape to Serenity",
        subtext: "Your Perfect Balinese Gateway"
    },
    {
        desktop: "/UGCImages/bali/Bali Banner/baliDesktop/baliBanner4.webp",
        mobile: "/UGCImages/bali/Bali Banner/baliMobile/baliBanner4-Mobile.webp",
        message: "Embrace the Island Life",
        subtext: "Create Memories That Last Forever"
    }
];

export default function BaliBanner() {
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    const handleBannerClick = () => {
        router.push('/bali');
    };

    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold relative inline-flex items-center gap-4">
                    <Image 
                        src="/Assets/chatbot/building.png"
                        alt="Building icon"
                        width={40}
                        height={40}
                        className="object-contain"
                        loading="lazy"
                    />
                    <div className="relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff] block mb-1">
                            Explore Bali
                        </span>
                        <div className="mt-[-12px] transform -rotate-2">
                            <p className={`text-2xl md:text-3xl text-[#017ae3] ${dancingScript.className}`}>
                                Paradise Awaits
                            </p>
                        </div>
                    </div>
                    <Image 
                        src="/Assets/chatbot/bali.png"
                        alt="Bali icon"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </h1>
            </div>

            <div 
                className="relative h-[200px] md:h-[180px] rounded-xl overflow-hidden cursor-pointer group"
                onClick={handleBannerClick}
            >
                {bannerImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            currentImage === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image 
                            src={image.desktop}
                            alt={`Bali Banner ${index + 1}`}
                            fill
                            className="object-cover hidden md:block"
                            sizes="1280px"
                            priority={index === 0}
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <Image 
                            src={image.mobile}
                            alt={`Bali Banner ${index + 1}`}
                            fill
                            className="object-cover md:hidden w-full h-full"
                            sizes="640px"
                            priority={index === 0}
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        {/* Enhanced Message Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 flex flex-col items-center justify-center text-white">
                            <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-transform group-hover:scale-105 px-4">
                                {image.message}
                            </h2>
                            <p className="text-sm md:text-lg text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-4">
                                {image.subtext}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {bannerImages.map((_, index) => (
                        <button
                            key={index}
                            className={`p-2 relative transition-all`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImage(index);
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <span 
                                className={`block w-2 h-2 rounded-full transition-all ${
                                    currentImage === index 
                                        ? 'bg-white w-3' 
                                        : 'bg-white/50'
                                }`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}