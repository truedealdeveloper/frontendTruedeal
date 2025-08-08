export interface HotelDetail {
    city: string;
    hotel: string;
    roomType: string;
}

export interface GroupDetails {
    pax: string;
    rooms: string;
    arrivalDate: string;
    duration: string;
    costBasis: string;
}

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
    image?: string;
}

export interface SightseeingSpot {
    name: string;
    description: string;
    image: string;
}

export interface LocalFood {
    name: string;
    description: string;
    image: string;
    where?: string;
}

export interface CultureItem {
    title: string;
    description: string;
    image: string;
}

export interface Experience {
    title: string;
    image: string;
}

export interface DepartureDate {
    date: string;
    availability?: string;
    price?: number;
}

export interface DepartureCity {
    city: string;
    price: number;
}

export interface dubaiPackage {
    id: string;
    packageName: string;
    days: number;
    nights: number;
    amount: number;
    dateStart: string;
    dateEnd: string;
    description: string;
    groupDetails: GroupDetails;
    hotelDetails: HotelDetail[];
    tourSummary: string[];
    inclusions: string[];
    exclusions: string[];
    itinerary: ItineraryDay[];
    images: string[];
    experiences?: Experience[];
    additionalInfo?: {
        highlights: string[];
        bestTimeToVisit: string;
        cuisine: string[];
        accommodation: {
            type: string;
            amenities: string[];
        };
        transportation: {
            type: string;
            features: string[];
        };
        visaInfo: {
            requirement: string;
            duration: string;
            cost: string;
            documents: string[];
        };
    };
    sightseeingSpots: SightseeingSpot[];
    localFood: LocalFood[];
    culture: CultureItem[];
    departureDates?: DepartureDate[];
    departureCities?: DepartureCity[];
}

export const dubaiPackages: Record<string, dubaiPackage> = {
    "dubai-6n7d-luxury-experience": {
        id: "dubai-6n7d-luxury-experience",
        packageName: "Dubai Luxury Experience - Modern Marvels & Desert Safari",
        days: 7,
        nights: 6,
        amount: 65000,
        dateStart: "6-12 August 2025",
        dateEnd: "16th November 2025",
        description: "Experience the ultimate luxury in Dubai with this comprehensive 5-day tour covering iconic landmarks, world-class shopping, thrilling desert safari, and modern architectural marvels. Perfect for luxury travelers, shopping enthusiasts, and adventure seekers.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "6-12 August 2025",
            duration: "6 days / 7 nights",
            costBasis: "Per Person on double sharing basis"
        },
        hotelDetails: [
            {
                city: "Bur Dubai",
                hotel: "Hotel Jacobs Garden/Holiday International or similar",
                roomType: "4 star deluxe room"
            },
        ],
        tourSummary: [
            "Arrival at Dubai to evening Dhow Cruise",
            "Sightseeing tour of Dubai",
            "Desert Safari",
            "Dubai to Abu Dhabi to Dubai",
            "CITY TOUR, DUBAI MALL TO BURJ KHALIFA",
            "DAY FREE FOR YOUR OWN ACTIVITIES",
            "FREE DAY & LIMOUSINE RIDE",
            "DEPARTURE FROM DUBAI"
        ],
        inclusions: [
            "Mumbai – Dubai – Mumbai direct flight",
            "6 nights stay at 4-star property in Bur Dubai",
            "Dubai Visa",
            "Burj Khalifa at 124th floor",
            "Dubai city tour & Dubai Mall",
            "Abu Dhabi city tour with Grand Mosque visit",
            "Desert Safari with dance & fire shows",
            "Luxury limousine – 1 hr ride",
            "All given sightseeing with entrance fee and private transfer",
            "06 breakfast in hotel",
            "Night special barbecue dinner in Dubai on Desert Safari",
            "Dinner at Dhow Cruise",
            "Airport transfers"
        ],
        exclusions: [
            "Tourism Dhiram tax fee taken directly by hotel during check in",
            "Any other meals than mentioned in inclusions",
            "Any personal cab charges during the tour"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival at Dubai to evening Dhow Cruise",
                description: `Your wonderful journey will begin at Dubai/Abu Dhabi/Sharjah International Airport where our representative driver will escort you to your hotel. (Tourism Dhiram on direct basis during checkin) The day will be free for your self-time. Later in the evening, you will be taken to enjoy buffet dinner at Dhow Cruise. For an overnight stay, you will be taken back to your hotel.`,
                image: "/UGCImages/dubai/dubai/1.png"
            },
            {
                day: 2,
                title: "Desert Safari",
                description: `Post breakfast, we will take on the sightseeing tour of Dubai where you'll get to see various attractions including Jumeirah Mosque, Gold Souk, Dubai Mall, Spice Souk, and Bastakiya Square. Also, enjoy a drive in front of Atlantis. After that, later in the evening, we will take you on a desert safari. Dinner will be served in the desert under the sky with exotic dance performances. For an overnight stay, we will transfer you to your hotel.`,
                image: "/UGCImages/dubai/dubai/2.png"
            },
            {
                day: 3,
                title: "Dubai to Abu Dhabi to Dubai",
                description: `On day 3, after the delicious breakfast, we will proceed for Abu Dhabi sightseeing tour which is located just at a distance of 140 km from Dubai. In the sightseeing tour, you will get a chance to discover city's soaring skyscrapers, palaces, and villas along with the famous Sheikh Zayed Grand Mosque, and Marina Mall. Post lunch, we will visit Yas Island where a bunch of fascinating attractions including the famous Ferrari World (on direct payment basis) awaits to give you an one of a kind holiday experience in UAE. In the evening, we will take you back to your hotel in Dubai for an overnight stay.`,
                image: "/UGCImages/dubai/3.png"
            },
            {
                day: 4,
                title: "CITY TOUR, DUBAI MALL TO BURJ KHALIFA",
                description: `Morning breakfast will be served at the hotel and till afternoon you will be free for own leisure time. You can stroll around the streets or can explore nearby mall or shops. Later in the afternoon, we will take you Dubai Mall from where you can get some gifts for your friends and family. Thereafter, you will be taken to the 124th floor of the famous Burj Khalifa tower from where you can relish the compelling view of the entire city. In the evening, be a part of the evening Dubai Fountain show. Overnight stay will be provided at your hotel.`,
                image: "/UGCImages/dubai/dubai/3.png"
            },
            {
                day: 5,
                title: "DAY FREE FOR YOUR OWN ACTIVITIES",
                description: `After having the breakfast, the day will be free for your own leisure time where you can choose to do anything whether shopping, sightseeing, and adventure. Overnight stay will be at your hotel.`,
                image: "/UGCImages/dubai/5.png"
            },
            {
                day: 6,
                title: "FREE DAY & LIMOUSINE RIDE",
                description: `Like all days, breakfast will be served at your hotel. Full day is free for leisure till evening. After that, you will be headed a Limousine ride in Dubai. Its a 1 hour drive where you experience a ride in Limousine Lincoln Ford. A one-hour limo tour is a great way to explore the sights and sounds of Dubai in a luxurious manner. Later in the evening, we will take you back to your hotel for an overnight stay.`,
                image: "/UGCImages/dubai/dubai/4.png"
            },
            {
                day: 7,
                title: "DEPARTURE FROM DUBAI",
                description: `Your last day of this wonderful Dubai trip will start with a flavoursome breakfast. You can also explore the amenities available at your hotel. Later, you will check-out from your hotel to sum-up this beautiful journey and proceed towards your way to home.`,
                image: "/UGCImages/dubai/7.png"
            }
        ],
        images: [
            "/UGCImages/dubai/1.png",
            "/UGCImages/dubai/2.png",
            "/UGCImages/dubai/3.png",
            "/UGCImages/dubai/4.png",
            "/UGCImages/dubai/5.png",
            "/UGCImages/dubai/6.png",
        ],
        experiences: [
            {
                title: "Burj Khalifa Sky Deck",
                image: "/UGCImages/dubai/dubaiS/1.png"
            },
            {
                title: "Desert Dune Bashing",
                image: "/UGCImages/dubai/dubaiS/2.png"
            },
            {
                title: "Dubai Fountain Show",
                image: "/UGCImages/dubai/dubaiS/3.png"
            },
            {
                title: "Luxury Shopping",
                image: "/UGCImages/dubai/dubaiS/4.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "World's tallest building Burj Khalifa visit",
                "Thrilling desert safari with BBQ dinner",
                "Luxury shopping at Dubai Mall",
                "Traditional Dubai Creek dinner cruise",
                "Iconic Palm Jumeirah and Atlantis experience",
                "Gold and Spice Souk cultural exploration"
            ],
            bestTimeToVisit: "November to March - Perfect weather for outdoor activities",
            cuisine: [
                "Middle Eastern Mezze and Kebabs",
                "Fresh Seafood and Grilled Meats",
                "Traditional Emirati Al Harees",
                "International Fine Dining",
                "Desert BBQ and Traditional Bread",
                "Fresh Dates and Arabic Coffee"
            ],
            accommodation: {
                type: "5 Star Luxury Hotels",
                amenities: [
                    "AC Rooms with City/Marina Views",
                    "Swimming Pool & Spa",
                    "Multiple Restaurants",
                    "Free High-Speed WiFi",
                    "Fitness Center",
                    "Concierge Services"
                ]
            },
            transportation: {
                type: "Luxury AC Vehicles",
                features: [
                    "Professional English-speaking Driver",
                    "Airport Transfers",
                    "All Fuel and Parking",
                    "Premium Sedan/SUV",
                    "GPS Navigation",
                    "24/7 Support"
                ]
            },
            visaInfo: {
                requirement: "Tourist Visa Required",
                duration: "30/90 days",
                cost: "₹3,000 - ₹8,000",
                documents: [
                    "Passport valid for 6+ months",
                    "Passport size photographs",
                    "Hotel bookings",
                    "Return flight tickets",
                    "Bank statements"
                ]
            }
        },
        sightseeingSpots: [
            {
                name: "Burj Khalifa",
                description: "World's tallest building with observation decks offering panoramic views of Dubai",
                image: "/UGCImages/dubai/sight/1.png"
            },
            {
                name: "Dubai Mall",
                description: "World's largest shopping mall with over 1,200 stores and entertainment options",
                image: "/UGCImages/dubai/sight/2.png"
            },
            {
                name: "Desert Safari",
                description: "Thrilling dune bashing experience with traditional Bedouin culture and BBQ dinner",
                image: "/UGCImages/dubai/sight/3.png"
            },
            {
                name: "Palm Jumeirah",
                description: "Iconic man-made island shaped like a palm tree with luxury resorts",
                image: "/UGCImages/dubai/sight/4.png"
            },
            {
                name: "Dubai Creek",
                description: "Historic waterway offering traditional dhow cruises and cultural experiences",
                image: "/UGCImages/dubai/sight/5.png"
            },
            {
                name: "Gold & Spice Souk",
                description: "Traditional markets showcasing Dubai's heritage with gold jewelry and aromatic spices",
                image: "/UGCImages/dubai/sight/6.png"
            }
        ],
        localFood: [
            {
                name: "Emirati Al Harees",
                description: "Traditional wheat and meat dish slow-cooked to perfection, served during special occasions",
                image: "/UGCImages/dubai/food/1.png",
                where: "Traditional Emirati restaurants"
            },
            {
                name: "Middle Eastern Mezze",
                description: "Variety of small dishes including hummus, tabbouleh, and falafel with Arabic bread",
                image: "/UGCImages/dubai/food/2.png",
                where: "Arabic restaurants and hotel dining"
            },
            {
                name: "Desert BBQ",
                description: "Grilled meats and traditional bread prepared in authentic Bedouin style",
                image: "/UGCImages/dubai/food/3.png",
                where: "Desert safari camps"
            },
            {
                name: "Fresh Dates & Arabic Coffee",
                description: "Traditional welcome refreshment served throughout Dubai with authentic hospitality",
                image: "/UGCImages/dubai/food/4.png",
                where: "Hotels, restaurants, and cultural sites"
            }
        ],
        culture: [
            {
                title: "Modern Architecture",
                description: "Dubai's skyline showcases cutting-edge architecture and engineering marvels",
                image: "/UGCImages/dubai/1.png"
            },
            {
                title: "Traditional Heritage",
                description: "Historic Dubai Creek and traditional souks preserve ancient trading culture",
                image: "/UGCImages/dubai/sight/5.png"
            },
            {
                title: "Bedouin Desert Culture",
                description: "Desert safari experiences showcase traditional Bedouin lifestyle and customs",
                image: "/UGCImages/dubai/life/1.png"
            },
            {
                title: "Luxury Lifestyle",
                description: "Dubai's reputation for luxury shopping, dining, and world-class hospitality",
                image: "/UGCImages/dubai/life/2.png"
            }
        ],
        departureDates: [
            { date: "6-12 August 2025", availability: "Available", price: 65000 },
        ],
        departureCities: [
            {
                city: "Mumbai",
                price: 65000
            },
        ]
    }
}; 