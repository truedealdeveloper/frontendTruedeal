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
    "philippines-5n6d-manila-boracay-palawan": {
        id: "philippines-5n6d-manila-boracay-palawan",
        packageName: "Philippines Island Paradise - Manila, Boracay & Palawan",
        days: 6,
        nights: 5,
        amount: 45000,
        dateStart: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025",
        dateEnd: "",
        description: "Discover the tropical paradise of Philippines with this comprehensive 6-day tour covering Manila's rich history, Boracay's pristine beaches, and Palawan's underground rivers. Perfect for beach lovers, adventure seekers, and culture enthusiasts.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "2, 6, 9, 13, 16, 20, 23, 27, 30 July 2025",
            duration: "6 days / 5 nights",
            costBasis: "Per Person on double sharing basis"
        },
        hotelDetails: [
            {
                city: "Manila",
                hotel: "4 Star Hotel or Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Boracay",
                hotel: "Beach Resort or Similar",
                roomType: "Ocean View Room"
            },
            {
                city: "Palawan",
                hotel: "4 Star Hotel or Similar",
                roomType: "Superior Room"
            }
        ],
        tourSummary: [
            "Historical Manila city tour with Intramuros and Rizal Park",
            "Island hopping and beach activities in Boracay",
            "Underground River tour in Puerto Princesa, Palawan",
            "Sunset viewing at Boracay's White Beach",
            "Cultural immersion with local Filipino cuisine",
            "Shopping at SM Mall of Asia in Manila"
        ],
        inclusions: [
            "5 Breakfast + 5 Dinner",
            "All domestic flights (Manila-Boracay-Palawan-Manila)",
            "All sightseeing on private basis with AC vehicle",
            "4 Star hotel accommodation",
            "Island hopping boat tours",
            "Underground River tour",
            "All transfers and transportation"
        ],
        exclusions: [
            "International airfare to Manila",
            "Lunch (except specified)",
            "Personal expenses and shopping",
            "Entry fees to attractions",
            "Water sports activities",
            "Travel insurance",
            "Tips and gratuities",
            "GST as applicable"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Manila – City Orientation",
                description: "Arrive at Ninoy Aquino International Airport, Manila. Meet our representative and transfer to hotel. After check-in and refreshment, enjoy a Manila city orientation tour including Rizal Park, Intramuros (the walled city), Fort Santiago, and Manila Cathedral. Evening visit to SM Mall of Asia for shopping and dinner. Overnight stay in Manila.",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/1.png"
            },
            {
                day: 2,
                title: "Manila to Boracay – Beach Paradise",
                description: "After breakfast, transfer to airport for flight to Boracay (via Caticlan). Upon arrival, take a boat transfer to Boracay Island. Check-in at beach resort. Afternoon at leisure to explore the famous White Beach. Evening enjoy beach activities and sunset viewing. Overnight stay in Boracay.",
                image: "/UGCImages/HD IMAGES/Philippines/vertical/2.png"
            },
            {
                day: 3,
                title: "Boracay Island Hopping & Beach Activities",
                description: "After breakfast, enjoy full day island hopping tour visiting Crocodile Island, Crystal Cove Island, and Tambisaan Beach. Experience snorkeling, swimming, and beach games. Lunch at a local island restaurant. Evening free for beach walking, shopping at D'Mall, or optional water sports activities. Overnight stay in Boracay.",
                image: "/webImage/Philippines/1/1.webp"
            },
            {
                day: 4,
                title: "Boracay to Palawan (Puerto Princesa)",
                description: "After breakfast and hotel check-out, transfer to airport for flight to Puerto Princesa, Palawan. Upon arrival, check-in at hotel. Afternoon city tour of Puerto Princesa including the Cathedral, Plaza Cuartel, and local markets. Evening visit to Baker's Hill for panoramic views and local delicacies. Overnight stay in Puerto Princesa.",
                image: "/webImage/Philippines/1/2.webp"
            },
            {
                day: 5,
                title: "Underground River Tour – UNESCO World Heritage Site",
                description: "Early breakfast and proceed to Sabang Wharf for the famous Underground River tour. Take a boat ride through Sabang River and explore the magnificent limestone caves and underground river system. Return to Puerto Princesa. Afternoon visit to Crocodile Farm and Nature Park. Evening at leisure. Overnight stay in Puerto Princesa.",
                image: "/webImage/Philippines/1/3.webp"
            },
            {
                day: 6,
                title: "Puerto Princesa to Manila – Departure",
                description: "After breakfast, check-out and transfer to airport for flight back to Manila. If time permits, enjoy brief shopping at local markets or duty-free stores. Transfer to Ninoy Aquino International Airport for your onward international journey with wonderful memories of Philippines.",
                image: "/webImage/Philippines/1/4.webp"
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
    }
}; 