'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

interface BannerImage {
    desktop: string;
    mobile: string;
    message: string;
    subtext: string;
    mobileTitle: string;
    mobileSubtitle: string;
    price: string;
    size?: 'large' | 'medium' | 'small';
}

const bannerImages: BannerImage[] = [
    {
        desktop: "/UGCImages/vietnam/desktop/1.png",
        mobile: "/UGCImages/vietnam/mobile/1.png",
        message: "Experience Vietnam's Beauty",
        subtext: "Where Culture Meets Nature",
        mobileTitle: "Ha Long Bay",
        mobileSubtitle: "Natural Wonder of the World",
        price: "Starting Price Rs. 39,999/-"
    },
    {
        desktop: "/UGCImages/vietnam/desktop/2.png",
        mobile: "/UGCImages/vietnam/mobile/2.png",
        message: "Discover Ancient Wonders",
        subtext: "Journey Through Time",
        mobileTitle: "Sapa Valley",
        mobileSubtitle: "Mountain Paradise",
        price: "Starting Price Rs. 42,999/-"
    },
    {
        desktop: "/UGCImages/vietnam/desktop/3.png",
        mobile: "/UGCImages/vietnam/mobile/3.png",
        message: "Embrace Vietnamese Culture",
        subtext: "Traditional Charm Awaits",
        mobileTitle: "Hanoi",
        mobileSubtitle: "Cultural Heart of Vietnam",
        price: "Starting Price Rs. 37,500/-"
    },
    {
        desktop: "/UGCImages/vietnam/desktop/4.png",
        mobile: "/UGCImages/vietnam/mobile/4.png",
        message: "Hoi An",
        subtext: "Ancient Trading Port",
        mobileTitle: "Hoi An",
        mobileSubtitle: "Ancient Trading Port",
        price: "Starting Price Rs. 41,999/-",
        size: 'small'
    },
];

export default function VietnamBanner() {
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleClick = () => {
        router.push('/vietnam');
    };

    return (
        <div className="container mx-auto px-4 mt-4 mb-2 md:mt-6 md:mb-4">
            {/* Title section */}
            <div className="text-center mb-3">
                <h1 className="text-xl md:text-2xl font-bold relative inline-flex items-center gap-2">
                    <Image 
                        src="/UGCImages/vietnam/vietnam2.png"
                        alt="Vietnam Temple icon"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                    />
                    <div className="relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff] block mb-0.5">
                            Explore Vietnam
                        </span>
                        <div className="mt-[-12px] transform -rotate-2">
                            <p className={`text-2xl md:text-3xl text-[#017ae3] ${dancingScript.className}`}>
                                Land of Wonder
                            </p>
                        </div>
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

            {/* Desktop Banner Layout */}
            <div className="hidden md:block">
                <div 
                    className="relative h-[180px] rounded-xl overflow-hidden cursor-pointer group"
                    onClick={handleClick}
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
                                alt={image.message}
                                fill
                                className="object-cover"
                                sizes="1280px"
                                priority={index === 0}
                            />
                            {/* Message Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 flex flex-col items-center justify-center text-white">
                                <h2 className="text-4xl font-bold text-center mb-2 drop-shadow-lg transform transition-transform group-hover:scale-105 px-4">
                                    {image.message}
                                </h2>
                                <p className="text-lg text-center text-white/90 drop-shadow-md px-4">
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
                                className={`w-2 h-2 rounded-full transition-all ${
                                    currentImage === index 
                                        ? 'bg-white w-4' 
                                        : 'bg-white/50'
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImage(index);
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden">
                <div className="relative h-[400px] w-full">
                    <div className="absolute w-full h-full perspective-1000">
                        {bannerImages.map((card, index) => {
                            const offset = (index - currentImage) % bannerImages.length;
                            const isActive = offset === 0;
                            const zIndex = bannerImages.length - Math.abs(offset);
                            
                            return (
                                <div
                                    key={index}
                                    className="absolute left-1/2 top-1/2 w-[280px] transition-all duration-500 cursor-pointer"
                                    style={{
                                        transform: `translate(-50%, -50%) 
                                            translateX(${offset * 40}px) 
                                            translateZ(${-Math.abs(offset) * 100}px) 
                                            rotateY(${offset * -15}deg)`,
                                        opacity: Math.max(1 - Math.abs(offset) * 0.3, 0),
                                        zIndex: zIndex
                                    }}
                                    onClick={handleClick}
                                >
                                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src={card.mobile}
                                            alt={card.mobileTitle}
                                            fill
                                            className="object-cover"
                                            priority={isActive}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90">
                                            <div className="absolute bottom-0 w-full p-6 text-white">
                                                <h2 className={`text-3xl font-bold mb-2 ${dancingScript.className}`}>
                                                    {card.mobileTitle}
                                                </h2>
                                                <p className="text-lg mb-2 text-white/90">
                                                    {card.mobileSubtitle}
                                                </p>
                                                <p className="text-xl font-semibold text-white/95">
                                                    {card.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}