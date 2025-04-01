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
        id: "the-best-of-australia",
        packageName: "The best of Australia",
        days: 13,
        nights: 12,
        amount: 495999,
        dateStart: "01 March 2025",
        dateEnd: "26 July 2025",
        description: "Experience the best of Australia's east coast with our 13-day tour covering Sydney's iconic landmarks and Gold Coast's stunning beaches.",
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
            "Day 1: Arrive in Melbourne",
            "Day 2: Phillip Island Penguin Parade Small Group Eco Tour by Go West Tours",
            "Day 3: Great Ocean Road Scenic Tour",
            "Day 4: Depart from Melbourne",
            "Day 5: Skyrail & Kuranda Scenic Railway",
            "Day 6: Full Day Green Island Reef Cruise",
            "Day 7: Depart from Cairns",
            "Day 8: Best of Movie World",
            "Day 9: Best of Sea World by Village Road Shows",
            "Day 10: Depart from the Gold Coast",
            "Day 11: Merlin Four Attraction Pass",
            "Day 12: Taronga Zoo Express with Captain Cook Cruise",
            "Day 13: Depart from the Gold Coast"
        ],
        inclusions: [
            "Hotel accommodation subject to availability",
            "Hotel breakfast",
            "Tours and transfers on SIC (subject to package)",
            "Park entry and tour guides",
            "Transfers to and from Airport (Extra 20 AUD charge PP for outer CBD drop)",
        ],
        exclusions: [
            "International and Domestic Air tickets",
            "Australia Visa",
            "Travel insurance",
            "Meals, Laundry, telephone, optional excursions and other items of a personal nature.",
            "Cost of foreign exchange for personal use.",
            "Any items or services not mentioned in the itinerary section."
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive in Melbourne",
                description: "Melbourne Cricket Ground MCG Tour Explore Melbourne sporting culture"
            },
            {
                day: 2,
                title: "Phillip Island Penguin Parade Small Group Eco Tour by Go West Tours",
                description: "Indulge in awe-inspiring wildlife encounters and breathtaking views, culminating in the renowned Penguin Parade."
            },
            {
                day: 3,
                title: "Great Ocean Road Scenic Tour",
                description: "Experience the wonders of Victoria Surf Coast and nearby must-visit locations close to Melbourne."
            },
            {
                day: 4,
                title: "Depart from Melbourne",
                description: "Shared transfer service from your Melbourne Central Business District hotel to Melbourne Airport."
            },
            {
                day: 5,
                title: "Skyrail & Kuranda Scenic Railway",
                description: "Discover one of the worlds oldest and most fascinating botanical areas, untouched for 130 million years."
            },
            {
                day: 6,
                title: "Full Day Green Island Reef Cruise",
                description: "Experience a delightful cruise to renowned Green Island, in a full-day excursion from Cairns."
            },
            {
                day: 7,
                title: "Depart from Cairns",
                description: "Shared transfer from your Cairns hotel to Cairns Airport"
            },
            {
                day: 8,
                title: "Depart from Cairns",
                description: "Shared transfer from your Cairns hotel to Cairns Airport"
            },
            {
                day: 9,
                title: "Depart from Cairns",
                description: "Shared transfer from your Cairns hotel to Cairns Airport"
            },
            {
                day: 10,
                title: "Depart from Cairns",
                description: "Shared transfer from your Cairns hotel to Cairns Airport"
            },
            {
                day: 11,
                title: "Depart from Cairns",
                description: "Shared transfer from your Cairns hotel to Cairns Airport"
            },
            {
                day: 12,
                title: "Depart from Cairns",
                description: "Shared transfer from your Cairns hotel to Cairns Airport"
            },
            {
                day: 13,
                title: "Depart from Cairns",
                description: "Shared transfer from your Cairns hotel to Cairns Airport"
            },
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