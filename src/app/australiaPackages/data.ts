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
        amount: 490999,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Experience the best of Australia's east coast with our 13-day tour covering Sydney's iconic landmarks and Gold Coast's stunning beaches.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "13D12N Australia Fixed Departure",
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
            "Hotel accommodation subject to availability | Hotel breakfast",
            "Tours and transfers on SIC (subject to package), park entry and tour guides",
            "Transfers to and from Airport (Extra 20 AUD charge PP for outer CBD drop)",
        ],
        exclusions: [
            "International and Domestic Air tickets | Australia Visa. | Travel Insurance.",
            "Meals, Laundry, telephone, optional excursions and other items of a personal nature. | Cost of foreign exchange for personal use.",
            "Any items or services not mentioned in the itinerary section."
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive in Melbourne",
                description: "Melbourne Cricket Ground – MCG Tour Explore Melbourne's sporting culture"
            },
            {
                day: 2,
                title: "Phillip Island Penguin Parade Small Group Eco Tour by Go West Tours",
                description: "Indulge in awe-inspiring wildlife encounters and breathtaking views, culminating in the renowned Penguin Parade."
            },
            {
                day: 3,
                title: "Great Ocean Road Scenic Tour",
                description: "Experience the wonders of Victoria's Surf Coast and nearby must-visit locations close to Melbourne."
            },
            {
                day: 4,
                title: "Depart from Melbourne",
                description: "Shared transfer service from your Melbourne's Central Business District hotel to Melbourne Airport."
            },
            {
                day: 5,
                title: "Cairns: Skyrail & Kuranda Scenic Railway",
                description: "Accommodation: Mercure Cairns. Discover one of the world's oldest and most fascinating botanical areas, untouched for 130 million years."
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
                title: "Gold Coast: Best Of Both Worlds – Movie World & Sea World",
                description: "Accommodation: Vibe Gold Coast. ROO Pass: Hassle-free return journey from Brisbane Airport to the Gold Coast's thrilling attractions and mesmerising scenery. Evening Rainforest Walk & Glow Worm Tours: Embark on an extraordinary nocturnal journey through the enchanting rainforest, illuminated by the gentle glow of torchlight."
            },
            {
                day: 9,
                title: "Best Of Both Worlds – Movie World & Sea World by Village Road Shows",
                description: "Experience the ultimate thrill with the Best of Both Worlds pass, granting access to both Movie World and Sea World. Hot Air Balloon Ride with Complimentary Arro Jet Experience! Embark on a picturesque hot air balloon adventure in the Gold Coast Hinterland…"
            },
            {
                day: 10,
                title: "Depart from the Gold Coast",
                description: "Shared transfer service from your Gold Coast hotel to Brisbane Airport"
            },
            {
                day: 11,
                title: "Sydney: Merlin Four Attraction Pass",
                description: "Accommodation: Furama Darling Harbour. Sydney Tower Eye: Immerse yourself in Sydney's skyline. WildLife Zoo: Embark on an incredible wildlife expedition. SeaLife Aquarium: One of the globe's most expansive aquatic habitats. Madame Tussauds: Interact with lifelike celebrity figures and engage with exciting new interactive elements. Sydney Opera House Tour: Unveil the legendary history and extraordinary secrets of the Sydney Opera House…"
            },
            {
                day: 12,
                title: "Taronga Zoo Express with Captain Cook Cruise",
                description: "Sydney's iconic wildlife sanctuary, conveniently located on the stunning Sydney Harbour. Sydney Harbour Heli Flight: Experience the breathtaking Sydney skyline on a thrilling 20-minute helicopter joy flight"
            },
            {
                day: 13,
                title: "Depart from Sydney",
                description: "It is the last day! Time to pack up and bring the sweet memories of Australia home. End of your journey"
            },
        ],
        images: [
            "/UGCImages/australia/Best/1.png",
            "/UGCImages/australia/Best/2.png",
            "/UGCImages/australia/Best/3.png",
        ],
        sightseeingSpots: [
            {
                name: "Sydney Opera House",
                description: "Iconic performing arts venue and UNESCO World Heritage site",
                image: "/UGCImages/australia/Sightseeing/opera.jpg"
            },
            {
                name: "Blue Mountains",
                description: "World Heritage-listed mountain range with stunning views",
                image: "/UGCImages/australia/Sightseeing/blue.jpg"
            },
            {
                name: "Surfers Paradise",
                description: "Famous beach and entertainment precinct on the Gold Coast",
                image: "/UGCImages/australia/Sightseeing/surfer.jpg"
            }
        ],
        localFood: [
            {
                name: "Aussie BBQ",
                description: "Traditional Australian barbecue with fresh seafood and meat",
                image: "/UGCImages/australia/Cuisine/bbq.jpg",
                where: "Various locations in Sydney"
            },
            {
                name: "Fish & Chips",
                description: "Fresh seafood served with crispy chips",
                image: "/UGCImages/australia/Cuisine/fish.jpg",
                where: "Gold Coast beaches"
            }
        ],
        culture: [
            {
                title: "Aboriginal Culture",
                description: "Experience indigenous Australian art and traditions",
                image: "/UGCImages/australia/Culture/aboriginal.jpg"
            },
            {
                title: "Beach Culture",
                description: "Explore Australia's famous beach lifestyle",
                image: "/UGCImages/australia/Culture/beach.jpg"
            },
            {
                title: "Wildlife",
                description: "Meet Australia's unique native animals",
                image: "/UGCImages/australia/Culture/wildlife.jpg"
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
            bestTimeToVisit: "September to November or May to October",
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
            { date: "1,8,15,22,29 August" }
        ]
    },
    incredibleAustralia: {
        id: "incredible-australia",
        packageName: "Incredible Australia",
        days: 10,
        nights: 9,
        amount: 354999,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Experience the best of Australia's east coast with our 10-day tour covering Melbourne, Gold Coast, and Sydney.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August 2025",
            duration: "10D9N Australia Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Melbourne",
                hotel: "Mercure Southbank (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Gold Coast",
                hotel: "Vibe Gold Coast (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Sydney",
                hotel: "ibis Styles Sydney Central (or similar 4*)",
                roomType: "Standard Room"
            },
        ],
        tourSummary: [
            "Day 1: Arrive in Melbourne, Eureka Skydeck",
            "Day 2: Phillip Island Penguin Parade Tour",
            "Day 3: Great Ocean Road Scenic Tour",
            "Day 4: Depart Melbourne, Arrive Gold Coast",
            "Day 5: Movie World & Sea World",
            "Day 6: Hot Air Balloon Ride & Arro Jet Experience",
            "Day 7: Depart Gold Coast, Arrive Sydney",
            "Day 8: Merlin Four Attraction Pass (Sydney Tower Eye, WildLife Zoo, SeaLife Aquarium, Madame Tussauds)",
            "Day 9: Blue Mountains Experience",
            "Day 10: Depart from Sydney"
        ],
        inclusions: [
            "Hotel accommodation subject to availability | Hotel breakfast",
            "Tours and transfers on SIC (subject to package), park entry and tour guides",
            "Transfers to and from Airport (Extra 20 AUD charge PP for outer CBD drop)",
        ],
        exclusions: [
            "International and Domestic Air tickets | Australia Visa. | Travel Insurance.",
            "Meals, Laundry, telephone, optional excursions and other items of a personal nature. | Cost of foreign exchange for personal use.",
            "Any items or services not mentioned in the itinerary section."
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive in Melbourne",
                description: "Start of your journey. Melbourne Accommodation: Mercure Southbank. Eureka Skydeck: Experience Melbourne from a whole new perspective at the highest observation deck in the Southern Hemisphere…"
            },
            {
                day: 2,
                title: "Phillip Island Penguin Parade Small Group Eco Tour by Go West Tours",
                description: "Indulge in awe-inspiring wildlife encounters and breathtaking views, culminating in the renowned Penguin Parade."
            },
            {
                day: 3,
                title: "Great Ocean Road Scenic Tour",
                description: "Experience the wonders of Victoria's Surf Coast and nearby must-visit locations close to Melbourne."
            },
            {
                day: 4,
                title: "Depart from Melbourne / Arrive Gold Coast",
                description: "Shared transfer service from your Melbourne's Central Business District hotel to Melbourne Airport. Continue your journey. Gold Coast Accommodation: Vibe Gold Coast. ROO Pass: Hassle-free return journey from Brisbane Airport to the Gold Coast's thrilling attractions."
            },
            {
                day: 5,
                title: "Best Of Both Worlds – Movie World & Sea World by Village Road Shows",
                description: "Experience the ultimate thrill with the Best of Both Worlds pass, granting access to both Movie World and Sea World."
            },
            {
                day: 6,
                title: "Hot Air Balloon Ride with Complimentary Arro Jet Experience!",
                description: "Embark on a picturesque hot air balloon adventure in the Gold Coast Hinterland…"
            },
            {
                day: 7,
                title: "Depart from the Gold Coast / Arrive Sydney",
                description: "Private transfer service from your Gold Coast hotel to Brisbane Airport. Continue your journey. Sydney Accommodation: ibis Styles Sydney Central."
            },
            {
                day: 8,
                title: "Merlin Four Attraction Pass",
                description: "Sydney Tower Eye: Immerse yourself in Sydney's skyline. WildLife Zoo: Embark on an incredible wildlife expedition. SeaLife Aquarium: One of the globe's most expansive aquatic habitats. Madame Tussauds: Interact with lifelike celebrity figures and engage with exciting new interactive elements."
            },
            {
                day: 9,
                title: "Blue Mountains Experience",
                description: "Immerse yourself in breathtaking beauty, rich history, and diverse wildlife."
            },
            {
                day: 10,
                title: "Depart from Sydney",
                description: "It is the last day! Time to pack up and bring the sweet memories of Australia home. End of your journey."
            }
        ],
        images: [
            "/UGCImages/australia/images/1.webp",
            "/UGCImages/australia/images/4.webp",
            "/UGCImages/australia/images/3.webp",
        ],
        sightseeingSpots: [
            {
                name: "Sydney Opera House",
                description: "Iconic performing arts venue and UNESCO World Heritage site",
                image: "/UGCImages/australia/Sightseeing/opera.jpg"
            },
            {
                name: "Blue Mountains",
                description: "World Heritage-listed mountain range with stunning views",
                image: "/UGCImages/australia/Sightseeing/blue.jpg"
            },
            {
                name: "Surfers Paradise",
                description: "Famous beach and entertainment precinct on the Gold Coast",
                image: "/UGCImages/australia/Sightseeing/surfer.jpg"
            }
        ],
        localFood: [
            {
                name: "Aussie BBQ",
                description: "Traditional Australian barbecue with fresh seafood and meat",
                image: "/UGCImages/australia/Cuisine/bbq.jpg",
                where: "Various locations in Sydney"
            },
            {
                name: "Fish & Chips",
                description: "Fresh seafood served with crispy chips",
                image: "/UGCImages/australia/Cuisine/fish.jpg",
                where: "Gold Coast beaches"
            }
        ],
        culture: [
            {
                title: "Aboriginal Culture",
                description: "Experience indigenous Australian art and traditions",
                image: "/UGCImages/australia/Culture/aboriginal.jpg"
            },
            {
                title: "Beach Culture",
                description: "Explore Australia's famous beach lifestyle",
                image: "/UGCImages/australia/Culture/beach.jpg"
            },
            {
                title: "Wildlife",
                description: "Meet Australia's unique native animals",
                image: "/UGCImages/australia/Culture/wildlife.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Eureka Skydeck views",
                "Great Ocean Road drive",
                "Phillip Island Penguin Parade",
                "Gold Coast theme parks",
                "Sydney attractions (Tower Eye, Wildlife, SeaLife, Tussauds)",
                "Blue Mountains tour"
            ],
            bestTimeToVisit: "September to November or May to October",
            cuisine: [
                "Fresh seafood",
                "Australian BBQ",
                "Modern Australian fusion",
                "Multicultural dining",
                "Meat Pies"
            ],
            accommodation: {
                type: "4-star hotels (Mercure, Vibe, ibis Styles or similar)",
                amenities: [
                    "Wi-Fi",
                    "Restaurant",
                    "Comfortable rooms"
                ]
            },
            transportation: {
                type: "Shared & Private Transfers, Domestic Flights (not included)",
                features: [
                    "Airport transfers (shared/private as specified)",
                    "Tour transfers (SIC/shared)",
                    "ROO Pass (Gold Coast)"
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
            { date: "August 2025 - August 2025" }
        ]
    },
    whitsundaysDelight: {
        id: "whitsundays-delight",
        packageName: "Whitsundays Delight",
        days: 10,
        nights: 9,
        amount: 364999,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Discover Australia's diverse beauty: Melbourne's charm, Whitsundays' paradise, Brisbane's wildlife, and Sydney's icons.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August 2025",
            duration: "10D9N Australia Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Melbourne",
                hotel: "Mercure Southbank (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Whitsundays (Airlie Beach)",
                hotel: "Mirage Whitsundays (or similar)",
                roomType: "Standard Apartment/Room"
            },
            {
                city: "Brisbane",
                hotel: "Hotel Grand Chancellor Brisbane (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Sydney",
                hotel: "ibis Styles Sydney Central (or similar 4*)",
                roomType: "Standard Room"
            },
        ],
        tourSummary: [
            "Day 1: Start of your journey - Arrive in Melbourne, Check-in at Mercure Southbank",
            "Day 2: Phillip Island Penguin Parade - Wildlife encounters and breathtaking views",
            "Day 3: Depart Melbourne, Transfer to Whitsundays, Check-in at Mirage Whitsundays",
            "Day 4: Full Day Great Barrier Reef Adventure - 9 hours of underwater wonders",
            "Day 5: Whitsunday Islands & Whitehaven Beach Experience",
            "Day 6: Depart Whitsundays, Transfer to Brisbane, Check-in at Hotel Grand Chancellor",
            "Day 7: Full Day Tangalooma Tour with Resort Access",
            "Day 8: Mirimar Koala Cruise to Lone Pine Sanctuary, Transfer to Sydney, Check-in at ibis Styles",
            "Day 9: Sydney Opera House Tour, Big Bus Discovery Tour, Showboat Dinner Cruise",
            "Day 10: End of journey - Depart from Sydney"
        ],
        inclusions: [
            "Hotel accommodation subject to availability | Hotel breakfast (where applicable)",
            "Tours and transfers on SIC (subject to package), park entry and tour guides",
            "Transfers to and from Airport (shared/as specified)",
        ],
        exclusions: [
            "International and Domestic Air tickets (including Mel-PPP, PPP-BNE, BNE-SYD) | Australia Visa. | Travel Insurance.",
            "Meals (unless specified), Laundry, telephone, optional excursions and other items of a personal nature. | Cost of foreign exchange for personal use.",
            "Any items or services not mentioned in the itinerary section."
        ],
        itinerary: [
            {
                day: 1,
                title: "Start of your journey - Arrive in Melbourne",
                description: "Begin your Australian adventure. Melbourne Accommodation: Mercure Southbank."
            },
            {
                day: 2,
                title: "Phillip Island Penguin Parade",
                description: "Indulge in awe-inspiring wildlife encounters and breathtaking views, culminating in the renowned Penguin Parade."
            },
            {
                day: 3,
                title: "Depart Melbourne / Arrive Whitsundays",
                description: "Shared transfer from your Melbourne's Central Business District hotel to Melbourne Airport. Continue your journey to Whitsundays. Accommodation: Mirage Whitsundays."
            },
            {
                day: 4,
                title: "Full Day Great Barrier Reef",
                description: "This 9-hour adventure promises a day of breathtaking beauty and underwater wonders."
            },
            {
                day: 5,
                title: "Whitsunday Islands & Whitehaven Beach",
                description: "Relax on the world-famous white sands, swim, or explore the pristine shoreline."
            },
            {
                day: 6,
                title: "Depart Whitsundays / Arrive Brisbane",
                description: "Shared transfer from your Airlie Beach hotel to Proserpine Airport. Continue your journey to Brisbane. Accommodation: Hotel Grand Chancellor Brisbane."
            },
            {
                day: 7,
                title: "Full Day Tangalooma Tour",
                description: "Receive full access to resort facilities, including pools, restaurants, and bars."
            },
            {
                day: 8,
                title: "Mirimar Koala Cruise & Transfer to Sydney",
                description: "Explore the world's largest Koala Sanctuary, with more than 130 koalas on site! Later, shared transfer to Brisbane Airport and continue to Sydney. Accommodation: ibis Styles Sydney Central."
            },
            {
                day: 9,
                title: "Sydney Exploration Day",
                description: "Sydney Opera House Tour: Unveil the legendary history and extraordinary secrets. Big Bus Discovery: Enjoy 24-hour hop-on, hop-off access to explore Sydney. Evening Showboat Dinner Cruise: Experience fine dining and scenic beauty with elegant surroundings."
            },
            {
                day: 10,
                title: "End of Journey - Depart from Sydney",
                description: "Time to pack up and bring the sweet memories of Australia home. End of your journey."
            }
        ],
        images: [
            "/UGCImages/australia/images/12.png",
            "/UGCImages/australia/images/20.webp",
            "/UGCImages/australia/images/1.webp",


        ],
        sightseeingSpots: [
            {
                name: "Sydney Opera House",
                description: "Iconic performing arts venue and UNESCO World Heritage site",
                image: "/UGCImages/australia/Sightseeing/opera.jpg"
            },
            {
                name: "Blue Mountains",
                description: "World Heritage-listed mountain range with stunning views",
                image: "/UGCImages/australia/Sightseeing/blue.jpg"
            },
            {
                name: "Surfers Paradise",
                description: "Famous beach and entertainment precinct on the Gold Coast",
                image: "/UGCImages/australia/Sightseeing/surfer.jpg"
            }
        ],
        localFood: [
            {
                name: "Aussie BBQ",
                description: "Traditional Australian barbecue with fresh seafood and meat",
                image: "/UGCImages/australia/Cuisine/bbq.jpg",
                where: "Various locations in Sydney"
            },
            {
                name: "Fish & Chips",
                description: "Fresh seafood served with crispy chips",
                image: "/UGCImages/australia/Cuisine/fish.jpg",
                where: "Gold Coast beaches"
            }
        ],
        culture: [
            {
                title: "Aboriginal Culture",
                description: "Experience indigenous Australian art and traditions",
                image: "/UGCImages/australia/Culture/aboriginal.jpg"
            },
            {
                title: "Beach Culture",
                description: "Explore Australia's famous beach lifestyle",
                image: "/UGCImages/australia/Culture/beach.jpg"
            },
            {
                title: "Wildlife",
                description: "Meet Australia's unique native animals",
                image: "/UGCImages/australia/Culture/wildlife.jpg"
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
            bestTimeToVisit: "September to November or May to October",
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
            { date: "August 2025 - August 2025" }
        ]
    },
    eastCoastAdventure: {
        id: "east-coast-adventure",
        packageName: "East Coast Adventure",
        days: 11,
        nights: 10,
        amount: 344999,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Discover Australia's diverse beauty: Melbourne's charm, Whitsundays' paradise, Brisbane's wildlife, and Sydney's icons.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August 2025",
            duration: "11D10N Australia Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Melbourne",
                hotel: "Mercure Southbank (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Whitsundays (Airlie Beach)",
                hotel: "Mirage Whitsundays (or similar)",
                roomType: "Standard Apartment/Room"
            },
            {
                city: "Brisbane",
                hotel: "Hotel Grand Chancellor Brisbane (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Sydney",
                hotel: "ibis Styles Sydney Central (or similar 4*)",
                roomType: "Standard Room"
            },
        ],
        tourSummary: [
            "Day 1: Start of your journey - Arrive in Melbourne, Check-in at Mercure Southbank",
            "Day 2: Phillip Island Penguin Parade Small Group Eco Tour - Wildlife encounters",
            "Day 3: Great Ocean Road Scenic Tour - Victoria's Surf Coast experience",
            "Day 4: Depart Melbourne, Transfer to Gold Coast, Check-in at Vibe Gold Coast",
            "Day 5-6: Best Of Both Worlds – Movie World & Sea World Experience",
            "Day 7: Depart Gold Coast, Transfer to Sydney, Check-in at ibis Styles Sydney Central",
            "Day 8: Big Bus Discovery Tour & Merlin Four Attraction Pass",
            "Day 9: Blue Mountains Experience – Full Day Tour",
            "Day 10: End of journey - Depart from Sydney"
        ],
        inclusions: [
            "Hotel accommodation subject to availability | Hotel breakfast (where applicable)",
            "Tours and transfers on SIC (subject to package), park entry and tour guides",
            "Transfers to and from Airport (shared/as specified)",
        ],
        exclusions: [
            "International and Domestic Air tickets (including Mel-PPP, PPP-BNE, BNE-SYD) | Australia Visa. | Travel Insurance.",
            "Meals (unless specified), Laundry, telephone, optional excursions and other items of a personal nature. | Cost of foreign exchange for personal use.",
            "Any items or services not mentioned in the itinerary section."
        ],
        itinerary: [
            {
                day: 1,
                title: "Start of your journey - Arrive in Melbourne",
                description: "Begin your Australian adventure. Melbourne Accommodation: Mercure Southbank."
            },
            {
                day: 2,
                title: "Phillip Island Penguin Parade Small Group Eco Tour",
                description: "Indulge in awe-inspiring wildlife encounters and breathtaking views, culminating in the renowned Penguin Parade."
            },
            {
                day: 3,
                title: "Great Ocean Road Scenic Tour",
                description: "Experience the wonders of Victoria's Surf Coast and nearby must-visit locations close to Melbourne."
            },
            {
                day: 4,
                title: "Depart Melbourne / Arrive Gold Coast",
                description: "Shared transfer from your Melbourne's Central Business District hotel to Melbourne Airport. Continue to Gold Coast. Accommodation: Vibe Gold Coast. ROO Pass: Hassle-free return journey from Brisbane Airport to the Gold Coast's thrilling attractions."
            },
            {
                day: 5,
                title: "Best Of Both Worlds – Movie World & Sea World Day 1",
                description: "Experience the ultimate thrill with the Best of Both Worlds pass, granting access to both Movie World and Sea World."
            },
            {
                day: 6,
                title: "Best Of Both Worlds – Movie World & Sea World Day 2",
                description: "Continue your theme park adventure with the Best of Both Worlds pass at Movie World and Sea World."
            },
            {
                day: 7,
                title: "Depart Gold Coast / Arrive Sydney",
                description: "Private transfer from your Gold Coast hotel to Brisbane Airport. Continue to Sydney. Accommodation: ibis Styles Sydney Central."
            },
            {
                day: 8,
                title: "Sydney Discovery Day",
                description: "Big Bus Discovery: Enjoy 24-hour hop-on, hop-off access to both City and Bondi Tours. Merlin Four Attraction Pass includes: Sydney Tower Eye (skyline views), WildLife Zoo (incredible expedition), SeaLife Aquarium (expansive aquatic habitats), and Madame Tussauds (interactive celebrity experiences)."
            },
            {
                day: 9,
                title: "Blue Mountains Experience – Full Day Tour",
                description: "Immerse yourself in breathtaking beauty, rich history, and diverse wildlife."
            },
            {
                day: 10,
                title: "End of Journey - Depart from Sydney",
                description: "Time to pack up and bring the sweet memories of Australia home. End of your journey."
            }
        ],
        images: [
            "/UGCImages/australia/images/13.png",
            "/UGCImages/australia/images/14.webp",
            "/UGCImages/australia/images/15.webp"

        ],
        sightseeingSpots: [
            {
                name: "Sydney Opera House",
                description: "Iconic performing arts venue and UNESCO World Heritage site",
                image: "/UGCImages/australia/Sightseeing/opera.jpg"
            },
            {
                name: "Blue Mountains",
                description: "World Heritage-listed mountain range with stunning views",
                image: "/UGCImages/australia/Sightseeing/blue.jpg"
            },
            {
                name: "Surfers Paradise",
                description: "Famous beach and entertainment precinct on the Gold Coast",
                image: "/UGCImages/australia/Sightseeing/surfer.jpg"
            }
        ],
        localFood: [
            {
                name: "Aussie BBQ",
                description: "Traditional Australian barbecue with fresh seafood and meat",
                image: "/UGCImages/australia/Cuisine/bbq.jpg",
                where: "Various locations in Sydney"
            },
            {
                name: "Fish & Chips",
                description: "Fresh seafood served with crispy chips",
                image: "/UGCImages/australia/Cuisine/fish.jpg",
                where: "Gold Coast beaches"
            }
        ],
        culture: [
            {
                title: "Aboriginal Culture",
                description: "Experience indigenous Australian art and traditions",
                image: "/UGCImages/australia/Culture/aboriginal.jpg"
            },
            {
                title: "Beach Culture",
                description: "Explore Australia's famous beach lifestyle",
                image: "/UGCImages/australia/Culture/beach.jpg"
            },
            {
                title: "Wildlife",
                description: "Meet Australia's unique native animals",
                image: "/UGCImages/australia/Culture/wildlife.jpg"
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
            bestTimeToVisit: "September to November or May to October",
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
            { date: "Mar 2025 - August 2025" }
        ]
    },
    hamiltonIsland: {
        id: "hamilton-island",
        packageName: "Hamilton Island Honeymoon Tour",
        days: 13,
        nights: 12,
        amount: 596999,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Discover the best of Hamilton Island with this 13-day honeymoon tour. From the stunning beaches to the lush rainforests, this tour has everything you need to make your honeymoon unforgettable.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August 2025",
            duration: "13D12N Australia Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Melbourne",
                hotel: "Mercure Southbank (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Whitsundays (Airlie Beach)",
                hotel: "Mirage Whitsundays (or similar)",
                roomType: "Standard Apartment/Room"
            },
            {
                city: "Brisbane",
                hotel: "Hotel Grand Chancellor Brisbane (or similar 4*)",
                roomType: "Standard Room"
            },
            {
                city: "Sydney",
                hotel: "ibis Styles Sydney Central (or similar 4*)",
                roomType: "Standard Room"
            },
        ],
        tourSummary: [
            "Day 1: Welcome to Melbourne - MCG Tour & Eureka Skydeck",
            "Day 2: Phillip Island Penguin Parade Small Group Eco Tour",
            "Day 3: Great Ocean Road Scenic Tour",
            "Day 4: Depart Melbourne, Arrive Gold Coast",
            "Day 5: Best Of Both Worlds – Movie World & Sea World Day 1",
            "Day 6: Best Of Both Worlds & Hot Air Balloon Adventure",
            "Day 7: Depart Gold Coast, Arrive Hamilton Island",
            "Day 8: Cruise Whitsundays",
            "Day 9: Free Day in Hamilton Island",
            "Day 10: Depart Hamilton Island, Arrive Sydney",
            "Day 11: Sydney Attractions Day",
            "Day 12: Blue Mountains Sunset Tour",
            "Day 13: End of Journey - Depart from Sydney"
        ],
        inclusions: [
            "Hotel accommodation subject to availability | Hotel breakfast (where applicable)",
            "Tours and transfers on SIC (subject to package), park entry and tour guides",
            "Transfers to and from Airport (shared/as specified)",
        ],
        exclusions: [
            "International and Domestic Air tickets (including Mel-PPP, PPP-BNE, BNE-SYD) | Australia Visa. | Travel Insurance.",
            "Meals (unless specified), Laundry, telephone, optional excursions and other items of a personal nature. | Cost of foreign exchange for personal use.",
            "Any items or services not mentioned in the itinerary section."
        ],
        itinerary: [
            {
                day: 1,
                title: "Welcome to Melbourne",
                description: "Welcome to the Arts and Cultural Capital of Australia! Melbourne Cricket Ground – MCG Tour: Explore Melbourne's sporting culture. Eureka Skydeck: Experience Melbourne from a whole new perspective at the highest observation deck in the Southern Hemisphere. Accommodation: Mercure Southbank."
            },
            {
                day: 2,
                title: "Phillip Island Penguin Parade Small Group Eco Tour",
                description: "Indulge in awe-inspiring wildlife encounters and breathtaking views, culminating in the renowned Penguin Parade."
            },
            {
                day: 3,
                title: "Great Ocean Road Scenic Tour",
                description: "Experience the wonders of Victoria's Surf Coast and nearby must-visit locations close to Melbourne."
            },
            {
                day: 4,
                title: "Depart Melbourne / Arrive Gold Coast",
                description: "Shared transfer from your Melbourne's Central Business District hotel to Melbourne Airport. Continue to Gold Coast - a coastal paradise with endless stretches of golden beaches, sun-kissed shores and vibrant energy. ROO Pass: Hassle-free return journey from Brisbane Airport to the Gold Coast's thrilling attractions."
            },
            {
                day: 5,
                title: "Best Of Both Worlds – Movie World & Sea World Day 1",
                description: "Experience the ultimate thrill with the Best of Both Worlds pass, granting access to both Movie World and Sea World."
            },
            {
                day: 6,
                title: "Best Of Both Worlds & Hot Air Balloon Adventure",
                description: "Continue your theme park adventure with the Best of Both Worlds pass. Hot Air Balloon Ride with Complimentary Arro Jet Experience: Embark on a picturesque hot air balloon adventure in the Gold Coast Hinterland."
            },
            {
                day: 7,
                title: "Depart Gold Coast / Arrive Hamilton Island",
                description: "Shared transfer from your Gold Coast hotel to Brisbane Airport. Continue to Hamilton Island - prepare to be whisked away to the idyllic haven, nestled amidst the sparkling waters of the Whitsundays!"
            },
            {
                day: 8,
                title: "Cruise Whitsundays",
                description: "Embark on a captivating journey into the heart of marine wonders with a relaxed day trip."
            },
            {
                day: 9,
                title: "Free Day in Hamilton Island",
                description: "Free day! Explore the stunning island at your leisure."
            },
            {
                day: 10,
                title: "Depart Hamilton Island / Arrive Sydney",
                description: "Seamless transfer service from your hotel to Hamilton Island Airport. Continue to Sydney - the harbourfront city of iconic attractions and world-renowned destinations!"
            },
            {
                day: 11,
                title: "Sydney Attractions Day",
                description: "Merlin Four Attraction Pass includes: Sydney Tower Eye (immerse in Sydney's skyline), Wild Life Zoo (incredible wildlife expedition), Sea Life Aquarium (expansive aquatic habitats), Madame Tussauds (interact with lifelike celebrity figures). Sydney Opera House Tour: Experience the iconic landmark up close."
            },
            {
                day: 12,
                title: "Blue Mountains Sunset Tour",
                description: "Let the vibrant hues of the sky and the majestic silhouette of the mountains weave a mesmerizing scenery."
            },
            {
                day: 13,
                title: "End of Journey - Depart from Sydney",
                description: "It is the last day! Time to pack up and bring the sweet memories of Australia home. End of your journey."
            }
        ],
        images: [
            "/UGCImages/australia/hamilton/1.png",
            "/UGCImages/australia/hamilton/2.png",
            "/UGCImages/australia/hamilton/3.png",
            "/UGCImages/australia/hamilton/4.png",
            "/UGCImages/australia/hamilton/5.png",

        ],
        sightseeingSpots: [
            {
                name: "Sydney Opera House",
                description: "Iconic performing arts venue and UNESCO World Heritage site",
                image: "/UGCImages/australia/Sightseeing/opera.jpg"
            },
            {
                name: "Blue Mountains",
                description: "World Heritage-listed mountain range with stunning views",
                image: "/UGCImages/australia/Sightseeing/blue.jpg"
            },
            {
                name: "Surfers Paradise",
                description: "Famous beach and entertainment precinct on the Gold Coast",
                image: "/UGCImages/australia/Sightseeing/surfer.jpg"
            }
        ],
        localFood: [
            {
                name: "Aussie BBQ",
                description: "Traditional Australian barbecue with fresh seafood and meat",
                image: "/UGCImages/australia/Cuisine/bbq.jpg",
                where: "Various locations in Sydney"
            },
            {
                name: "Fish & Chips",
                description: "Fresh seafood served with crispy chips",
                image: "/UGCImages/australia/Cuisine/fish.jpg",
                where: "Gold Coast beaches"
            }
        ],
        culture: [
            {
                title: "Aboriginal Culture",
                description: "Experience indigenous Australian art and traditions",
                image: "/UGCImages/australia/Culture/aboriginal.jpg"
            },
            {
                title: "Beach Culture",
                description: "Explore Australia's famous beach lifestyle",
                image: "/UGCImages/australia/Culture/beach.jpg"
            },
            {
                title: "Wildlife",
                description: "Meet Australia's unique native animals",
                image: "/UGCImages/australia/Culture/wildlife.jpg"
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
            bestTimeToVisit: "September to November or May to October",
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
            { date: "Mar 2025 - August 2025" }
        ]
    },
}; 