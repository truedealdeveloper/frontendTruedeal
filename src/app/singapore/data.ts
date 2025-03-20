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

export interface DepartureDate {
    date: string;
    availability?: string;
    price?: number;
}

export interface SingaporePackage {
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
}

export const singaporePackages: Record<string, SingaporePackage> = {
    singaporeCity: {
        id: "4-days-singapore-city",
        packageName: "4 Days Singapore City",
        days: 4,
        nights: 3,
        amount: 80000,
        dateStart: "01 March 2025",
        dateEnd: "26 July 2025",
        description: "Experience the vibrant city life of Singapore with our 4-day tour covering iconic attractions, cultural sites, and modern marvels.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4D3N Singapore Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Singapore",
                hotel: "4 star Hotel Grand Pacific",
                roomType: "Deluxe Room"
            }
        ],
        tourSummary: [
            "Day 1: Singapore - Arrival",
            "Day 2: Universal Studios Singapore",
            "Day 3: Gardens by the Bay - Marina Bay Sands",
            "Day 4: Singapore - Departure"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Universal Studios Singapore ticket",
            "Gardens by the Bay ticket",
            "Accommodation twin/double sharing",
            "Daily breakfast at hotel",
            "Singapore tourist visa",
            "All taxes included"
        ],
        exclusions: [
            "Airfare",
            "Personal expenses",
            "Optional tours",
            "Travel insurance"
        ],
        itinerary: [
            {
                day: 1,
                title: "Singapore - Arrival",
                description: "Arrival at Changi Airport. Transfer to hotel. Evening free for leisure or optional Night Safari tour."
            },
            {
                day: 2,
                title: "Universal Studios Singapore",
                description: "Full day at Universal Studios Singapore. Experience thrilling rides and shows."
            },
            {
                day: 3,
                title: "Gardens by the Bay - Marina Bay Sands",
                description: "Visit Gardens by the Bay, including Cloud Forest and Flower Dome. Evening at Marina Bay Sands."
            },
            {
                day: 4,
                title: "Singapore - Departure",
                description: "Morning free for shopping. Transfer to airport for departure."
            }
        ],
        images: [
            "/UGCImages/Images4/singapore/singapore/1.webp",
            "/UGCImages/Images4/singapore/singapore/2.webp",
            "/UGCImages/Images4/singapore/singapore/3.webp",
            "/UGCImages/Images4/singapore/singapore/4.webp"
        ],
        sightseeingSpots: [
            {
                name: "Gardens by the Bay",
                description: "Iconic nature park with Supertree Grove",
                image: "/UGCImages/singapore/gardens.png"
            },
            {
                name: "Marina Bay Sands",
                description: "Luxury integrated resort with infinity pool",
                image: "/UGCImages/singapore/mbs.png"
            },
            {
                name: "Universal Studios",
                description: "World-class theme park with exciting rides",
                image: "/UGCImages/singapore/uss.png"
            }
        ],
        localFood: [
            {
                name: "Chili Crab",
                description: "Singapore's national dish",
                image: "/UGCImages/singapore/food1.png",
                where: "JUMBO Seafood, Clarke Quay"
            },
            {
                name: "Hainanese Chicken Rice",
                description: "Popular local delicacy",
                image: "/UGCImages/singapore/food2.png",
                where: "Tian Tian Chicken Rice, Maxwell Food Centre"
            }
        ],
        culture: [
            {
                title: "Modern Architecture",
                description: "Singapore's stunning skyline and architectural marvels",
                image: "/UGCImages/singapore/architecture.png"
            },
            {
                title: "Cultural Heritage",
                description: "Diverse mix of Chinese, Malay, and Indian influences",
                image: "/UGCImages/singapore/culture.png"
            }
        ],
        departureDates: [
            { date: "Mar 2025 - July 2025" }
        ],
        additionalInfo: {
            highlights: [
                "Universal Studios Singapore",
                "Gardens by the Bay",
                "Marina Bay Sands",
                "Sentosa Island",
                "Shopping at Orchard Road"
            ],
            bestTimeToVisit: "February to April (Dry season)",
            cuisine: [
                "Chili Crab",
                "Hainanese Chicken Rice",
                "Laksa",
                "Satay"
            ],
            accommodation: {
                type: "4-star hotel",
                amenities: [
                    "Free Wi-Fi",
                    "Swimming pool",
                    "Restaurant",
                    "Fitness center"
                ]
            },
            transportation: {
                type: "Air-conditioned coach",
                features: [
                    "Modern fleet",
                    "Professional driver",
                    "Tour guide"
                ]
            },
            visaInfo: {
                requirement: "Tourist visa required",
                duration: "30 days",
                cost: "₹2,500",
                documents: [
                    "Valid passport",
                    "Photographs",
                    "Bank statements",
                    "Flight tickets"
                ]
            }
        }
    }
    // Add more packages similar to singaporeCity with different durations and itineraries
}; 