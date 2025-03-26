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

export interface AustraliaPackage {
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

export const australiaPackages: Record<string, AustraliaPackage> = {
    sydneyGoldCoast: {
        id: "7-days-sydney-gold-coast",
        packageName: "7 Days Sydney & Gold Coast",
        days: 7,
        nights: 6,
        amount: 199000,
        dateStart: "01 March 2025",
        dateEnd: "26 July 2025",
        description: "Experience the best of Australia's east coast with our 7-day tour covering Sydney's iconic landmarks and Gold Coast's stunning beaches.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "7D6N Australia Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Sydney",
                hotel: "4 star Rydges Sydney Central",
                roomType: "Deluxe Room"
            },
            {
                city: "Gold Coast",
                hotel: "4 star Mantra on View",
                roomType: "Ocean View Room"
            }
        ],
        tourSummary: [
            "Day 1: Sydney - Arrival",
            "Day 2: Sydney City Tour",
            "Day 3: Blue Mountains Tour",
            "Day 4: Gold Coast - Transfer",
            "Day 5: Movie World",
            "Day 6: Sea World",
            "Day 7: Gold Coast - Departure"
        ],
        inclusions: [
            "Return airport transfers",
            "Accommodation in 4-star hotels",
            "Daily breakfast",
            "Sydney Opera House guided tour",
            "Blue Mountains day tour",
            "Movie World and Sea World tickets",
            "English-speaking guide",
            "All taxes included"
        ],
        exclusions: [
            "Airfare",
            "Visa fees",
            "Travel insurance",
            "Personal expenses",
            "Optional activities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Sydney - Arrival",
                description: "Arrive at Sydney International Airport. Transfer to your hotel. Evening at leisure to explore Darling Harbour."
            },
            {
                day: 2,
                title: "Sydney City Tour",
                description: "Full-day Sydney city tour including Opera House, Harbour Bridge, Bondi Beach, and The Rocks historic district."
            },
            {
                day: 3,
                title: "Blue Mountains Tour",
                description: "Day trip to Blue Mountains. Visit Three Sisters, Scenic World, and Featherdale Wildlife Park."
            },
            {
                day: 4,
                title: "Gold Coast - Transfer",
                description: "Morning flight to Gold Coast. Transfer to hotel. Evening free to explore Surfers Paradise."
            },
            {
                day: 5,
                title: "Movie World",
                description: "Full day at Warner Bros. Movie World enjoying rides and shows."
            },
            {
                day: 6,
                title: "Sea World",
                description: "Full day at Sea World watching marine shows and enjoying attractions."
            },
            {
                day: 7,
                title: "Gold Coast - Departure",
                description: "Free morning for shopping. Transfer to airport for departure."
            }
        ],
        images: [
            "/UGCImages/Images4/australia/australia/1.webp",
            "/UGCImages/Images4/australia/australia/2.webp",
            "/UGCImages/Images4/australia/australia/3.webp",
            "/UGCImages/Images4/australia/australia/4.webp",
        ],
        sightseeingSpots: [
            {
                name: "Sydney Opera House",
                description: "Iconic performing arts venue and UNESCO World Heritage site",
                image: "/UGCImages/australia/opera.png"
            },
            {
                name: "Blue Mountains",
                description: "World Heritage-listed mountain range with stunning views",
                image: "/UGCImages/australia/mountains.png"
            },
            {
                name: "Surfers Paradise",
                description: "Famous beach and entertainment precinct on the Gold Coast",
                image: "/UGCImages/australia/beach.png"
            }
        ],
        localFood: [
            {
                name: "Aussie BBQ",
                description: "Traditional Australian barbecue with fresh seafood and meat",
                image: "/UGCImages/australia/bbq.png",
                where: "Various locations in Sydney"
            },
            {
                name: "Fish & Chips",
                description: "Fresh seafood served with crispy chips",
                image: "/UGCImages/australia/fish.png",
                where: "Gold Coast beaches"
            }
        ],
        culture: [
            {
                title: "Aboriginal Culture",
                description: "Experience indigenous Australian art and traditions",
                image: "/UGCImages/australia/aboriginal.png"
            },
            {
                title: "Beach Culture",
                description: "Explore Australia's famous beach lifestyle",
                image: "/UGCImages/australia/beachlife.png"
            },
            {
                title: "Wildlife",
                description: "Meet Australia's unique native animals",
                image: "/UGCImages/australia/wildlife.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Sydney Opera House tour",
                "Blue Mountains adventure",
                "Theme park experiences",
                "Coastal sightseeing",
                "Wildlife encounters"
            ],
            bestTimeToVisit: "September to November or March to May",
            cuisine: [
                "Fresh seafood",
                "Australian BBQ",
                "Modern Australian fusion",
                "Multicultural dining"
            ],
            accommodation: {
                type: "4-star hotels",
                amenities: [
                    "Wi-Fi",
                    "Swimming pool",
                    "Restaurant",
                    "Fitness center"
                ]
            },
            transportation: {
                type: "Private and public transport",
                features: [
                    "Airport transfers",
                    "Intercity flights",
                    "Tour buses",
                    "Local transport"
                ]
            },
            visaInfo: {
                requirement: "Tourist visa required",
                duration: "3-4 weeks processing",
                cost: "AUD 140",
                documents: [
                    "Valid passport",
                    "Proof of funds",
                    "Travel insurance",
                    "Return flight tickets"
                ]
            }
        },
        departureDates: [
            { date: "Mar 2025 - July 2025" }
        ]
    },
    // Add more packages here...
}; 