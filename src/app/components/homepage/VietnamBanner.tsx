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
        desktop: "/UGCImages/vietnam/desktop/1.webp",
        mobile: "/UGCImages/vietnam/mobile/1.png",
        message: "Experience Vietnam's Beauty",
        subtext: "Where Culture Meets Nature",
        mobileTitle: "Ho Chi Minh City",
        mobileSubtitle: "Natural Wonder of the World",
        price: "Starting Price Rs. 30,799/-"
    },
    {
        desktop: "/UGCImages/vietnam/desktop/2.webp",
        mobile: "/UGCImages/vietnam/mobile/2.png",
        message: "Discover Ancient Wonders",
        subtext: "Journey Through Time",
        mobileTitle: "Sapa Valley",
        mobileSubtitle: "Mountain Paradise",
        price: "Starting Price Rs. 42,999/-"
    },
    {
        desktop: "/UGCImages/vietnam/desktop/3.webp",
        mobile: "/UGCImages/vietnam/mobile/3.png",
        message: "Embrace Vietnamese Culture",
        subtext: "Traditional Charm Awaits",
        mobileTitle: "Hanoi",
        mobileSubtitle: "Cultural Heart of Vietnam",
        price: "Starting Price Rs. 37,500/-"
    },
    {
        desktop: "/UGCImages/vietnam/desktop/4.webp",
        mobile: "/UGCImages/vietnam/mobile/4.png",
        message: "Hoi An",
        subtext: "Ancient Trading Port",
        mobileTitle: "Hoi An",
        mobileSubtitle: "Ancient Trading Port",
        price: "Starting Price Rs. 41,999/-",
        size: 'small'
    },
    {
        desktop: "/UGCImages/vietnam/desktop/4.webp",
        mobile: "/UGCImages/vietnam/mobile/2.png",
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
    const [touchStart, setTouchStart] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleCardClick = (index: number) => {
        if (index === currentImage) {
            router.push('/vietnam');
        } else {
            setCurrentImage(index);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) { // minimum swipe distance
            if (diff > 0) {
                // Swipe left
                setCurrentImage((prev) => (prev + 1) % bannerImages.length);
            } else {
                // Swipe right
                setCurrentImage((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
            }
        }
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
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff] block mb-1">
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
                    onClick={() => router.push('/vietnam')}
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
                            {/* Enhanced Message Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 flex flex-col items-center justify-center text-white">
                                <h2 className="text-4xl font-bold text-center mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform transition-transform group-hover:scale-105 px-4">
                                    {image.message}
                                </h2>
                                <p className="text-lg text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-4">
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
                                    handleCardClick(index);
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden overflow-hidden">
                <div 
                    className="relative h-[300px] w-full perspective-[1200px]"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        {bannerImages.map((card, index) => {
                            const offset = (index - currentImage) % bannerImages.length;
                            const normalizedOffset = offset > 2 ? offset - bannerImages.length : offset < -2 ? offset + bannerImages.length : offset;
                            const isActive = normalizedOffset === 0;
                            const zIndex = bannerImages.length - Math.abs(normalizedOffset);
                            
                            return (
                                <div
                                    key={index}
                                    className="absolute w-[180px] transition-all duration-500 cursor-pointer"
                                    style={{
                                        transform: `
                                            translateX(${normalizedOffset * 80}px)
                                            translateZ(${Math.abs(normalizedOffset) * -60}px) 
                                            rotateY(${normalizedOffset * 30}deg)`,
                                        opacity: Math.abs(normalizedOffset) > 2 ? 0 : 1,
                                        zIndex: zIndex,
                                        transformOrigin: 'center center',
                                        boxShadow: normalizedOffset === 0 ? '0 10px 20px rgba(0,0,0,0.2)' : 'none',
                                        visibility: Math.abs(normalizedOffset) > 2 ? 'hidden' : 'visible'
                                    }}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div className={`relative h-[260px] rounded-xl overflow-hidden shadow-2xl group transition-transform duration-500 ${isActive ? 'scale-105' : 'scale-100'}`}>
                                        <Image
                                            src={card.mobile}
                                            alt={card.mobileTitle}
                                            fill
                                            className="object-cover"
                                            priority={isActive}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90">
                                            <div className="absolute bottom-0 w-full p-4 text-white">
                                                <h2 className={`text-2xl font-bold mb-1 ${dancingScript.className}`}>
                                                    {card.mobileTitle}
                                                </h2>
                                                <p className="text-sm mb-1 text-white/90">
                                                    {card.mobileSubtitle}
                                                </p>
                                                <p className="text-base font-semibold text-white/95">
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