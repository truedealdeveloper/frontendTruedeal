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

export interface philippinesPackage {
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

export const philippinesPackages: Record<string, philippinesPackage> = {
    "philippines-3n4d-coron": {
        id: "philippines-3n4d-coron",
        packageName: "Philippines Island Paradise - Coron",
        days: 4,
        nights: 3,
        amount: 32625,
        dateStart: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025",
        dateEnd: "",
        description: `Enjoy the best of Coron with a private town tour, free and easy day, and a comfortable stay at a well-rated hotel.`,
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025",
            duration: "4 days / 3 nights",
            costBasis: "Per Person on double sharing basis"
        },
        hotelDetails: [
            {
                city: "Coron",
                hotel: "4 Star Hotel or Similar",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Enjoy the best of Coron with a private town tour, free and easy day, and a comfortable stay at a well-rated hotel.",
            "Experience the charm of Coron's historic sites, relax on the beach, and indulge in local cuisine.",
            "Relax and unwind with a hassle-free stay and guided tours."
        ],
        inclusions: [
            "3 Nights stay at a well-rated hotel such as Zuri Resort, Angel Garden Resort, or The Funny Lion.",
            "Daily breakfast included at the hotel to start your day right.",
            "All transfers and tours will be on a private air-conditioned vehicle for your comfort and convenience."
        ],
        exclusions: [
            "Beverages like coffee/tea during meals are not included.",
            "Any personal expenses or activities not listed in the itinerary.",
            "Domestic airfare to and from Coron.",
            "Travel insurance is not part of the package."
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Coron",
                description: `Arrive at Busuanga International Airport, meet our local representative, and transfer to your chosen hotel for check-in and relaxation.`,
                image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png"
            },
            {
                day: 2,
                title: "Private Coron Town Tour (Breakfast)",
                description: `After breakfast, enjoy a guided town tour visiting key landmarks like Lualhati Park, Mt. Tapyas, St. Augustine Church, Cashew Store, and Maquinit Hot Spring. Return to the hotel by evening.`,
                image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png"
            },
            {
                day: 3,
                title: "Coron Free and Easy (Breakfast)",
                description: `Enjoy breakfast at the hotel and spend the entire day at leisure—explore Coron at your own pace or opt for optional activities.`,
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                day: 4,
                title: "Coron Departure (Breakfast)",
                description: `After breakfast, check out from the hotel and transfer to Busuanga Airport for your flight back.`,
                image: "/webImage/Philippines/1/2.webp"
            },
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
                title: "Underground River Cave",
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                title: "Island Hopping Adventure",
                image: "/webImage/Philippines/1/2.webp"
            },
            {
                title: "White Beach Sunset",
                image: "/webImage/Philippines/1/3.webp"
            },
            {
                title: "Manila Heritage Walk",
                image: "/webImage/Philippines/1/4.webp"
            }
        ],
        additionalInfo: {
            highlights: [
                "Historic Intramuros and Manila Cathedral",
                "World-famous White Beach of Boracay",
                "UNESCO World Heritage Underground River",
                "Island hopping with snorkeling",
                "Filipino cultural experiences",
                "Tropical beach paradise exploration"
            ],
            bestTimeToVisit: "November to April - Dry season with perfect beach weather",
            cuisine: [
                "Adobo - Philippines National Dish",
                "Fresh Seafood and Grilled Fish",
                "Lechon - Roasted Pork Specialty",
                "Halo-halo - Traditional Dessert",
                "Lumpia - Filipino Spring Rolls",
                "Tropical Fruits and Coconut Water"
            ],
            accommodation: {
                type: "4 Star Hotels & Beach Resorts",
                amenities: [
                    "AC Rooms with Ocean/City Views",
                    "Swimming Pool",
                    "Restaurant & Bar",
                    "Free WiFi",
                    "Beach Access",
                    "Travel Assistance"
                ]
            },
            transportation: {
                type: "Domestic Flights & AC Vehicles",
                features: [
                    "Manila-Boracay-Palawan Flights",
                    "Airport Transfers",
                    "Inter-island Boat Transfers",
                    "AC Sedan/Van",
                    "Professional Drivers",
                    "24/7 Support"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival for Indians",
                duration: "30 days",
                cost: "Free for stays up to 30 days",
                documents: [
                    "Passport valid for 6+ months",
                    "Return flight tickets",
                    "Hotel bookings",
                    "Sufficient funds proof"
                ]
            }
        },
        sightseeingSpots: [
            {
                name: "Intramuros, Manila",
                description: "Historic walled city built during Spanish colonial period with ancient churches and museums",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png"
            },
            {
                name: "White Beach, Boracay",
                description: "World-renowned 4km stretch of powdery white sand beach with crystal clear waters",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png"
            },
            {
                name: "Underground River, Palawan",
                description: "UNESCO World Heritage Site featuring 8.2km navigable underground river through limestone caves",
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                name: "Crocodile Island, Boracay",
                description: "Popular snorkeling spot shaped like a crocodile with vibrant marine life",
                image: "/webImage/Philippines/1/2.webp"
            },
            {
                name: "Puerto Princesa City",
                description: "Gateway to Palawan with beautiful parks, wildlife sanctuaries, and local markets",
                image: "/webImage/Philippines/1/3.webp"
            },
            {
                name: "Rizal Park, Manila",
                description: "Historic urban park dedicated to national hero Dr. Jose Rizal with monuments and gardens",
                image: "/webImage/Philippines/1/4.webp"
            }
        ],
        localFood: [
            {
                name: "Filipino Adobo",
                description: "Philippines' national dish of meat or seafood marinated in vinegar, soy sauce, and garlic",
                image: "/UGCImages/dubai/1.png",
                where: "Local restaurants across all cities"
            },
            {
                name: "Fresh Seafood Grill",
                description: "Grilled fish, prawns, and squid caught fresh from Philippine waters",
                image: "/UGCImages/dubai/2.png",
                where: "Boracay beachfront restaurants"
            },
            {
                name: "Halo-Halo Dessert",
                description: "Traditional shaved ice dessert with mixed fruits, beans, and ice cream",
                image: "/UGCImages/dubai/3.png",
                where: "Manila cafes and Boracay beach bars"
            },
            {
                name: "Lechon Kawali",
                description: "Crispy pork belly served with rice and traditional dipping sauces",
                image: "/UGCImages/dubai/4.png",
                where: "Traditional Filipino restaurants"
            }
        ],
        culture: [
            {
                title: "Spanish Colonial Heritage",
                description: "Manila's Intramuros showcases 300+ years of Spanish colonial architecture and history",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png"
            },
            {
                title: "Island Life Traditions",
                description: "Boracay's traditional fishing villages and local handicraft communities",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png"
            },
            {
                title: "Indigenous Culture",
                description: "Palawan's indigenous Tagbanua people and their conservation practices",
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                title: "Filipino Hospitality",
                description: "Experience the warmth and friendliness of Filipino 'Kapamilya' culture",
                image: "/webImage/Philippines/1/2.webp"
            }
        ],
        departureDates: [
            { date: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025", availability: "Available", price: 45000 },
            { date: "2, 6, 9, 13, 16, 20, 23, 27, 30 August 2025", availability: "Available", price: 45000 },
        ],
        departureCities: [
            {
                city: "Delhi",
                price: 45000
            },
            {
                city: "Mumbai",
                price: 47000
            },
            {
                city: "Bangalore",
                price: 44000
            },
        ]
    },
    "puerto-princesa-3n4d": {
        id: "puerto-princesa-3n4d",
        packageName: "Philippines Island Paradise - Puerto Princesa",
        days: 4,
        nights: 3,
        amount: 27405,
        dateStart: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025",
        dateEnd: "",
        description: `Enjoy the best of Coron with a private town tour, free and easy day, and a comfortable stay at a well-rated hotel.`,
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025",
            duration: "4 days / 3 nights",
            costBasis: "Per Person on double sharing basis"
        },
        hotelDetails: [
            {
                city: "Coron",
                hotel: "4 Star Hotel or Similar",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Enjoy the best of Puerto Princesa with a private island hopping tour, free and easy day, and a comfortable stay at a well-rated hotel.",
            "Experience the charm of Puerto Princesa's historic sites, relax on the beach, and indulge in local cuisine.",
            "Relax and unwind with a hassle-free stay and guided tours."
        ],
        inclusions: [
            "3 Nights at any recommended hotels: Costa Palawan, Astoria Palawan, or Hue Hotels & Resort",
            "Daily breakfast included at the hotel to start your day right.",
            "All transfers and tours will be on a private air-conditioned vehicle for your comfort and convenience."
        ],
        exclusions: [
            "Beverages like coffee/tea during meals are not included.",
            "Any personal expenses or activities not listed in the itinerary.",
            "Domestic airfare to and from Coron.",
            "Travel insurance is not part of the package."
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Puerto Princesa",
                description: `Meet and greet at Puerto Princesa International Airport
Transfer and Check in to your choice Hotel`,
                image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png"
            },
            {
                day: 2,
                title: "Private Honda Bay Island Hopping Tour (Breakfast)",
                description: `Breakfast at the Hotel
Morning land transfer to Honda Bay Wharf.
Board motorized boat to Honda Bay numerous islands. Tour highlights: Starfish Island, Luli Island and Cowrie Island. Lunch served on one of the islands.
Picnic lunch at the designated island
Return to Hotel`,
                image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png"
            },
            {
                day: 3,
                title: "Puerto Princesa Free and Easy (Breakfast)",
                description: `Enjoy breakfast at the hotel and spend the entire day at leisure—explore Coron at your own pace or opt for optional activities.`,
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                day: 4,
                title: "Puerto Princesa Departure (Breakfast)",
                description: `After breakfast, check out from the hotel and transfer to Busuanga Airport for your flight back.`,
                image: "/webImage/Philippines/1/2.webp"
            },
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
                title: "Underground River Cave",
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                title: "Island Hopping Adventure",
                image: "/webImage/Philippines/1/2.webp"
            },
            {
                title: "White Beach Sunset",
                image: "/webImage/Philippines/1/3.webp"
            },
            {
                title: "Manila Heritage Walk",
                image: "/webImage/Philippines/1/4.webp"
            }
        ],
        additionalInfo: {
            highlights: [
                "Historic Intramuros and Manila Cathedral",
                "World-famous White Beach of Boracay",
                "UNESCO World Heritage Underground River",
                "Island hopping with snorkeling",
                "Filipino cultural experiences",
                "Tropical beach paradise exploration"
            ],
            bestTimeToVisit: "November to April - Dry season with perfect beach weather",
            cuisine: [
                "Adobo - Philippines National Dish",
                "Fresh Seafood and Grilled Fish",
                "Lechon - Roasted Pork Specialty",
                "Halo-halo - Traditional Dessert",
                "Lumpia - Filipino Spring Rolls",
                "Tropical Fruits and Coconut Water"
            ],
            accommodation: {
                type: "4 Star Hotels & Beach Resorts",
                amenities: [
                    "AC Rooms with Ocean/City Views",
                    "Swimming Pool",
                    "Restaurant & Bar",
                    "Free WiFi",
                    "Beach Access",
                    "Travel Assistance"
                ]
            },
            transportation: {
                type: "Domestic Flights & AC Vehicles",
                features: [
                    "Manila-Boracay-Palawan Flights",
                    "Airport Transfers",
                    "Inter-island Boat Transfers",
                    "AC Sedan/Van",
                    "Professional Drivers",
                    "24/7 Support"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival for Indians",
                duration: "30 days",
                cost: "Free for stays up to 30 days",
                documents: [
                    "Passport valid for 6+ months",
                    "Return flight tickets",
                    "Hotel bookings",
                    "Sufficient funds proof"
                ]
            }
        },
        sightseeingSpots: [
            {
                name: "Intramuros, Manila",
                description: "Historic walled city built during Spanish colonial period with ancient churches and museums",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png"
            },
            {
                name: "White Beach, Boracay",
                description: "World-renowned 4km stretch of powdery white sand beach with crystal clear waters",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png"
            },
            {
                name: "Underground River, Palawan",
                description: "UNESCO World Heritage Site featuring 8.2km navigable underground river through limestone caves",
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                name: "Crocodile Island, Boracay",
                description: "Popular snorkeling spot shaped like a crocodile with vibrant marine life",
                image: "/webImage/Philippines/1/2.webp"
            },
            {
                name: "Puerto Princesa City",
                description: "Gateway to Palawan with beautiful parks, wildlife sanctuaries, and local markets",
                image: "/webImage/Philippines/1/3.webp"
            },
            {
                name: "Rizal Park, Manila",
                description: "Historic urban park dedicated to national hero Dr. Jose Rizal with monuments and gardens",
                image: "/webImage/Philippines/1/4.webp"
            }
        ],
        localFood: [
            {
                name: "Filipino Adobo",
                description: "Philippines' national dish of meat or seafood marinated in vinegar, soy sauce, and garlic",
                image: "/UGCImages/dubai/1.png",
                where: "Local restaurants across all cities"
            },
            {
                name: "Fresh Seafood Grill",
                description: "Grilled fish, prawns, and squid caught fresh from Philippine waters",
                image: "/UGCImages/dubai/2.png",
                where: "Boracay beachfront restaurants"
            },
            {
                name: "Halo-Halo Dessert",
                description: "Traditional shaved ice dessert with mixed fruits, beans, and ice cream",
                image: "/UGCImages/dubai/3.png",
                where: "Manila cafes and Boracay beach bars"
            },
            {
                name: "Lechon Kawali",
                description: "Crispy pork belly served with rice and traditional dipping sauces",
                image: "/UGCImages/dubai/4.png",
                where: "Traditional Filipino restaurants"
            }
        ],
        culture: [
            {
                title: "Spanish Colonial Heritage",
                description: "Manila's Intramuros showcases 300+ years of Spanish colonial architecture and history",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png"
            },
            {
                title: "Island Life Traditions",
                description: "Boracay's traditional fishing villages and local handicraft communities",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png"
            },
            {
                title: "Indigenous Culture",
                description: "Palawan's indigenous Tagbanua people and their conservation practices",
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                title: "Filipino Hospitality",
                description: "Experience the warmth and friendliness of Filipino 'Kapamilya' culture",
                image: "/webImage/Philippines/1/2.webp"
            }
        ],
        departureDates: [
            { date: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025", availability: "Available", price: 45000 },
            { date: "2, 6, 9, 13, 16, 20, 23, 27, 30 August 2025", availability: "Available", price: 45000 },
        ],
        departureCities: [
            {
                city: "Delhi",
                price: 45000
            },
            {
                city: "Mumbai",
                price: 47000
            },
            {
                city: "Bangalore",
                price: 44000
            },
        ]
    },
}; 