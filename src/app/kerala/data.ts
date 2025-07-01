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

export interface keralaPackage {
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

export const keralaPackages: Record<string, keralaPackage> = {
    "kerala-6d5n-package": {
        id: "kerala-6d5n-munnar-thekkady-alleppey",
        packageName: "Kerala Complete - Munnar, Thekkady & Alleppey",
        days: 6,
        nights: 5,
        amount: 24000,
        dateStart: "1, 5, 8, 12, 15, 19, 22, 26, 29 July 2025",
        dateEnd: "",
        description: "Perfect 6-day Kerala tour covering the misty hills of Munnar, wildlife sanctuary of Thekkady, and serene backwaters of Alleppey. Ideal for couples, families, or small groups.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "1, 5, 8, 12, 15, 19, 22, 26, 29 July 2025",
            duration: "6 days / 5 nights",
            costBasis: "Per Person on double sharing basis"
        },
        hotelDetails: [
            {
                city: "Munnar",
                hotel: "3 Star Hotel or Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Thekkady",
                hotel: "3 Star Hotel or Similar",
                roomType: "Standard Room"
            },
            {
                city: "Alleppey",
                hotel: "Backwater Houseboat",
                roomType: "AC Houseboat"
            }
        ],
        tourSummary: [
            "Scenic drive from Cochin to Munnar with waterfall stops",
            "Comprehensive Munnar sightseeing including Eravikulam National Park",
            "Wildlife experience at Periyar Wildlife Sanctuary in Thekkady",
            "Authentic houseboat stay in Alleppey backwaters",
            "Visit to spice plantations and tea gardens",
            "Fort Kochi exploration before departure"
        ],
        inclusions: [
            "4 Breakfast + 4 Dinner",
            "All sightseeing on private basis with AC cab",
            "3 Star hotel accommodation",
        ],
        exclusions: [
            "International/Domestic airfare",
            "Lunch (except on houseboat)",
            "Personal expenses",
            "Entry fees to monuments and parks",
            "Camera charges",
            "Travel insurance",
            "Tips and gratuities",
            "GST as applicable"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Cochin – Transfer to Munnar (130 km / 4 hrs)",
                description: "On arrival at Cochin Airport or Ernakulam Railway Station, meet our representative and proceed to Munnar, a picturesque hill station known for its tea plantations, misty mountains, and waterfalls. En route, visit Cheeyappara Waterfalls, Valara Waterfalls, and spice plantations. Check-in at the hotel in Munnar. Evening at leisure to enjoy the cool climate and natural beauty. Overnight stay in Munnar.",
                image: "/UGCImages/kerala/keralaIti/1.png"
            },
            {
                day: 2,
                title: "Munnar Sightseeing",
                description: "After breakfast, enjoy a full-day sightseeing tour of Munnar. Visit Eravikulam National Park (home to the endangered Nilgiri Tahr – closed from Feb to April), Mattupetty Dam, Echo Point, Photo Point, and Kundala Lake. Also explore the Tea Museum, showcasing Kerala's tea legacy. In the evening, return to the hotel and relax. Overnight stay in Munnar.",
                image: "/UGCImages/kerala/keralaIti/2.png"
            },
            {
                day: 3,
                title: "Munnar – Thekkady (110 km / 3.5 hrs)",
                description: "After breakfast, check out and proceed to Thekkady, known for Periyar Wildlife Sanctuary and scenic spice plantations. On arrival, check in to the hotel. Later, enjoy a boat ride on Periyar Lake (subject to availability) to spot wildlife like elephants and birds. Optional activities include a spice plantation tour, elephant ride, or Kerala martial arts show. Overnight stay in Thekkady.",
                image: "/UGCImages/kerala/keralaIti/3.png"
            },
            {
                day: 4,
                title: "Thekkady – Alleppey (Houseboat / Backwater Stay) (140 km / 4 hrs)",
                description: "After breakfast, drive to Alleppey, famous for its tranquil backwaters and houseboat cruises. Check in to a houseboat (or backwater resort) and enjoy a relaxing cruise through the canals, paddy fields, and coconut groves. The houseboat will anchor in the evening, and you'll be served freshly prepared Kerala meals onboard. Overnight stay in the houseboat.",
                image: "/UGCImages/kerala/keralaIti/4.png"
            },
            {
                day: 5,
                title: "Alleppey – Cochin Departure (90 km / 2.5 hrs)",
                description: "After breakfast, disembark from the houseboat and proceed to Cochin. If time permits, enjoy brief sightseeing of Fort Kochi, Chinese Fishing Nets, Mattancherry Palace, or Jew Town. Later, drop at Cochin Airport or Railway Station for your onward journey with pleasant memories of Kerala.",
                image: "/UGCImages/kerala/kerala/3.png"
            }
        ],
        images: [
            "/UGCImages/kerala/kerala/1.png",
            "/UGCImages/kerala/kerala/2.png",
            "/UGCImages/kerala/kerala/3.png",
            "/UGCImages/kerala/kerala/4.png",
            "/UGCImages/kerala/kerala/5.png",
            "/UGCImages/kerala/kerala/6.png",
        ],
        experiences: [
            {
                title: "Periyar Wildlife Safari",
                image: "/UGCImages/kerala/exp/1.png"
            },
            {
                title: "Tea Garden Walk",
                image: "/UGCImages/kerala/exp/2.png"
            },
            {
                title: "Houseboat Experience",
                image: "/UGCImages/kerala/exp/3.png"
            },
            {
                title: "Spice Plantation Tour",
                image: "/UGCImages/kerala/exp/4.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Scenic waterfalls en route to Munnar",
                "Eravikulam National Park - Home to Nilgiri Tahr",
                "Periyar Wildlife Sanctuary boat safari",
                "Authentic Kerala houseboat experience",
                "Spice plantation tours in Thekkady",
                "Historic Fort Kochi exploration"
            ],
            bestTimeToVisit: "October to March - Pleasant weather ideal for sightseeing",
            cuisine: [
                "Traditional Kerala Sadya",
                "Fresh Backwater Seafood",
                "Spicy Thekkady Curries",
                "Munnar Tea and Snacks",
                "Alleppey Fish Curry",
                "Kerala Breakfast Delicacies"
            ],
            accommodation: {
                type: "3 Star Hotels & Houseboat",
                amenities: [
                    "AC Rooms",
                    "Complimentary WiFi",
                    "Restaurant",
                    "Room Service",
                    "Travel Desk",
                    "Parking Facility"
                ]
            },
            transportation: {
                type: "AC Sedan/SUV",
                features: [
                    "Experienced Driver",
                    "Fuel Included",
                    "Toll & Parking",
                    "Climate Control",
                    "GPS Enabled",
                    "24/7 Support"
                ]
            },
            visaInfo: {
                requirement: "Indian Domestic Travel",
                duration: "Not Required",
                cost: "Not Applicable",
                documents: [
                    "Valid Photo ID",
                    "Address Proof",
                    "Travel Voucher"
                ]
            }
        },
        sightseeingSpots: [
            {
                name: "Eravikulam National Park",
                description: "Home to endangered Nilgiri Tahr with stunning mountain views and unique ecosystem",
                image: "/UGCImages/kerala/sight/1.png"
            },
            {
                name: "Mattupetty Dam",
                description: "Scenic dam surrounded by hills and tea plantations, perfect for photography",
                image: "/UGCImages/kerala/sight/2.png"
            },
            {
                name: "Periyar Wildlife Sanctuary",
                description: "Famous for elephants, tigers, and diverse wildlife around Periyar Lake",
                image: "/UGCImages/kerala/sight/3.png"
            },
            {
                name: "Alleppey Backwaters",
                description: "Tranquil network of canals, lakes and lagoons with traditional houseboats",
                image: "/UGCImages/kerala/sight/4.png"
            },
            {
                name: "Cheeyappara Waterfalls",
                description: "Cascading waterfall en route to Munnar, a perfect stop for nature lovers",
                image: "/UGCImages/kerala/sight/5.png"
            },
            {
                name: "Tea Museum, Munnar",
                description: "Showcases the history and process of tea cultivation in Kerala",
                image: "/UGCImages/kerala/sight/6.png"
            }
        ],
        localFood: [
            {
                name: "Thekkady Spice Curry",
                description: "Aromatic curry made with fresh spices from local plantations",
                image: "/UGCImages/kerala/food/1.png",
                where: "Thekkady spice restaurants"
            },
            {
                name: "Backwater Fish Curry",
                description: "Fresh catch from backwaters cooked in coconut milk and local spices",
                image: "/UGCImages/kerala/food/2.png",
                where: "Houseboat and Alleppey restaurants"
            },
            {
                name: "Munnar Tea and Snacks",
                description: "Fresh tea served with local banana chips and traditional Kerala snacks",
                image: "/UGCImages/kerala/food/3.png",
                where: "Tea plantation cafes"
            },
            {
                name: "Kerala Sadya",
                description: "Traditional feast served on banana leaf with multiple vegetarian dishes",
                image: "/UGCImages/kerala/food/4.png",
                where: "Traditional Kerala restaurants"
            }
        ],
        culture: [
            {
                title: "Wildlife Conservation",
                description: "Periyar's dedication to protecting endangered species and forest ecosystem",
                image: "/UGCImages/kerala/exp/1.png"
            },
            {
                title: "Tea Heritage",
                description: "Century-old tradition of tea cultivation in the hills of Munnar",
                image: "/UGCImages/kerala/exp/2.png"
            },
            {
                title: "Spice Trade Legacy",
                description: "Thekkady's historical importance in the ancient spice trade routes",
                image: "/UGCImages/kerala/keralaa/spice.png"
            },
            {
                title: "Backwater Life",
                description: "Traditional lifestyle of communities living along Kerala's waterways",
                image: "/UGCImages/kerala/keralaa/backwater.png"
            }
        ],
        departureDates: [
            { date: "1, 5, 8, 12, 15, 19, 22, 26, 29 July 2025", availability: "Available", price: 24000 },
            { date: "1, 5, 8, 12, 15, 19, 22, 26, 29 August 2025", availability: "Available", price: 24000 },
        ],
        departureCities: [

            {
                city: "Mumbai",
                price: 24000
            },
        ]
    }
}; 