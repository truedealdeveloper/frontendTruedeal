'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

const bannerImages = [
    {
        desktop: "/UGCImages/vietnam/desktop/1.webp",
        mobile: "/UGCImages/vietnam/mobile/1.png",
        message: "Every Journey Begins with a Step!",
        subtext: "From misty mountains in Sapa to lantern-lit streets in Hội An—just start walking."
    },
    {
        desktop: "/UGCImages/vietnam/desktop/2.webp",
        mobile: "/UGCImages/vietnam/mobile/2.png",
        message: "Lost? That's When the Fun Begins",
        subtext: "Especially when it's in a Saigon alley full of street food."
    },
    {
        desktop: "/UGCImages/vietnam/desktop/3.webp",
        mobile: "/UGCImages/vietnam/mobile/3.png",
        message: "Let the Land Move You",
        subtext: "Vietnam isn't just a destination—it's a transformation."
    },
    {
        desktop: "/UGCImages/vietnam/desktop/4.webp",
        mobile: "/UGCImages/vietnam/mobile/4.png",
        message: "Pack Light, Eat Heavy",
        subtext: "Vietnamese food is like a hug from your grandma."
    }
];

export default function VietnamBanner() {
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    const handleBannerClick = () => {
        router.push('/vietnam');
    };

    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-8">
                <h1 className="text-xl md:text-2xl font-bold relative inline-flex items-center gap-2">
                    <Image 
                        src="/UGCImages/vietnam/vietnam2.png"
                        alt="Building icon"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                    />
                    <div className="flex flex-col items-center relative top-[12px]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            Explore Vietnam
                        </span>
                        <p className={`text-2xl md:text-3xl text-[#017ae3] ${dancingScript.className} transform -rotate-2 -mt-1`}>
                            Adventure For All
                        </p>
                    </div>
                    <Image 
                        src="/UGCImages/vietnam/vietnam1.png"
                        alt="Vietnam Flag icon"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
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
                        />
                        <Image 
                            src={image.mobile}
                            alt={`Bali Banner ${index + 1}`}
                            fill
                            className="object-cover md:hidden w-full h-full"
                            sizes="640px"
                            priority={index === 0}
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