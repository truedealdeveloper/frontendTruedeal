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
}

export const keralaPackages: Record<string, keralaPackage> = {
    "kerala-backwaters-6d5n": {
        id: "kerala-backwaters-6d5n",
        packageName: "Kerala Backwaters & Munnar Adventure",
        days: 6,
        nights: 5,
        amount: 35000,
        dateStart: "2024-12-01",
        dateEnd: "2024-12-06",
        description: "Experience the enchanting backwaters of Alleppey and the misty hills of Munnar in this comprehensive Kerala tour.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "1st Dec 2024",
            duration: "6 days / 5 nights",
            costBasis: "Per Person"
        },
        hotelDetails: [
            {
                city: "Kochi",
                hotel: "Casino Hotel or Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Munnar",
                hotel: "Tea County Resort or Similar",
                roomType: "Hill View Room"
            },
            {
                city: "Alleppey",
                hotel: "Backwater Houseboat",
                roomType: "AC Houseboat"
            },
            {
                city: "Kumarakom",
                hotel: "Kumarakom Lake Resort or Similar",
                roomType: "Lake View Room"
            }
        ],
        tourSummary: [
            "Explore historic Fort Kochi and Chinese Fishing Nets",
            "Experience the scenic beauty of Munnar tea plantations",
            "Cruise through serene backwaters of Alleppey",
            "Stay overnight in traditional Kerala houseboat",
            "Visit Kumarakom Bird Sanctuary",
            "Enjoy authentic Kerala cuisine and cultural shows"
        ],
        inclusions: [
            "Airport transfers",
            "Accommodation as per itinerary",
            "Daily breakfast",
            "Houseboat stay with all meals",
            "Sightseeing as per itinerary",
            "Transportation in AC vehicle",
            "Driver allowances",
            "Parking and toll charges"
        ],
        exclusions: [
            "International/Domestic airfare",
            "Lunch and dinner (except on houseboat)",
            "Personal expenses",
            "Entry fees to monuments",
            "Camera charges",
            "Travel insurance",
            "Tips and gratuities",
            "GST as applicable"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kochi - Fort Kochi Exploration",
                description: "Arrive at Kochi Airport/Railway Station. Check into hotel. Visit Fort Kochi, Chinese Fishing Nets, St. Francis Church, and Dutch Palace. Evening at leisure.",
                image: "/webImage/kerala/mobile/kochi.jpg"
            },
            {
                day: 2,
                title: "Kochi to Munnar (130 km, 4 hours)",
                description: "Early morning departure to Munnar. Check into hotel. Visit Tea Museum, Mattupetty Dam, and Echo Point. Evening relaxation amidst tea gardens.",
                image: "/webImage/kerala/mobile/munnar.jpg"
            },
            {
                day: 3,
                title: "Munnar Sightseeing",
                description: "Full day exploration of Munnar. Visit Eravikulam National Park, Top Station, Kundala Lake, and spice plantations. Optional elephant ride.",
                image: "/webImage/kerala/mobile/eravikulam.jpg"
            },
            {
                day: 4,
                title: "Munnar to Alleppey (160 km, 4.5 hours)",
                description: "Drive to Alleppey. Check into houseboat. Cruise through backwaters, enjoy fresh seafood lunch. Overnight stay on houseboat.",
                image: "/webImage/kerala/mobile/houseboat.jpg"
            },
            {
                day: 5,
                title: "Alleppey to Kumarakom (15 km, 30 minutes)",
                description: "Morning houseboat cruise. Check into Kumarakom resort. Visit Kumarakom Bird Sanctuary. Enjoy Ayurvedic spa treatment.",
                image: "/webImage/kerala/mobile/kumarakom.jpg"
            },
            {
                day: 6,
                title: "Departure from Kochi",
                description: "Check out from hotel. Drive to Kochi Airport/Railway Station (60 km, 2 hours) for departure. End of memorable Kerala tour.",
                image: "/webImage/kerala/mobile/departure.jpg"
            }
        ],
        images: [
            "/webImage/kerala/mobile/kerala1.jpg",
            "/webImage/kerala/mobile/kerala2.jpg",
            "/webImage/kerala/mobile/kerala3.jpg",
            "/webImage/kerala/mobile/kerala4.jpg",
            "/webImage/kerala/mobile/kerala5.jpg"
        ],
        experiences: [
            {
                title: "Houseboat Stay",
                image: "/UGCImages/kerala/experiences/houseboat.jpg"
            },
            {
                title: "Tea Plantation Walk",
                image: "/UGCImages/kerala/experiences/tea.jpg"
            },
            {
                title: "Backwater Cruise",
                image: "/UGCImages/kerala/experiences/backwater.jpg"
            },
            {
                title: "Ayurvedic Spa",
                image: "/UGCImages/kerala/experiences/ayurveda.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Scenic tea plantations of Munnar",
                "Serene backwaters of Alleppey",
                "Traditional Kerala houseboat experience",
                "Rich cultural heritage of Fort Kochi",
                "Exotic wildlife at Eravikulam National Park",
                "Authentic Kerala cuisine"
            ],
            bestTimeToVisit: "October to March - Pleasant weather with cool breeze",
            cuisine: [
                "Kerala Fish Curry",
                "Appam with Stew",
                "Puttu and Kadala Curry",
                "Karimeen Fish Fry",
                "Coconut Rice",
                "Kerala Sadya"
            ],
            accommodation: {
                type: "3-4 Star Hotels & Houseboat",
                amenities: [
                    "AC Rooms",
                    "Complimentary WiFi",
                    "Swimming Pool",
                    "Spa & Wellness Center",
                    "Multi-cuisine Restaurant",
                    "24/7 Room Service"
                ]
            },
            transportation: {
                type: "AC Sedan/SUV",
                features: [
                    "Experienced Driver",
                    "Fuel Included",
                    "Toll & Parking",
                    "Climate Control",
                    "GPS Tracking",
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
                name: "Chinese Fishing Nets, Fort Kochi",
                description: "Iconic fishing technique brought by Chinese traders, perfect for photography during sunset",
                image: "/UGCImages/kerala/sightseeing/chinese-nets.jpg"
            },
            {
                name: "Tea Plantations, Munnar",
                description: "Endless rolling hills covered with lush green tea gardens, ideal for nature walks",
                image: "/UGCImages/kerala/sightseeing/tea-plantations.jpg"
            },
            {
                name: "Alleppey Backwaters",
                description: "Network of lagoons, lakes and canals with palm-fringed shores and traditional houseboats",
                image: "/UGCImages/kerala/sightseeing/backwaters.jpg"
            },
            {
                name: "Mattupetty Dam",
                description: "Beautiful concrete gravity dam surrounded by hills and tea plantations",
                image: "/UGCImages/kerala/sightseeing/mattupetty.jpg"
            },
            {
                name: "Eravikulam National Park",
                description: "Home to endangered Nilgiri Tahr and stunning views of Western Ghats",
                image: "/UGCImages/kerala/sightseeing/eravikulam.jpg"
            },
            {
                name: "Kumarakom Bird Sanctuary",
                description: "Haven for migratory birds with diverse species in natural habitat",
                image: "/UGCImages/kerala/sightseeing/bird-sanctuary.jpg"
            }
        ],
        localFood: [
            {
                name: "Kerala Fish Curry",
                description: "Traditional curry with coconut milk, curry leaves, and local spices served with rice",
                image: "/UGCImages/kerala/cuisine/fish-curry.jpg",
                where: "Local restaurants and houseboats"
            },
            {
                name: "Appam with Stew",
                description: "Fermented rice pancake served with coconut milk-based vegetable or meat stew",
                image: "/UGCImages/kerala/cuisine/appam.jpg",
                where: "Traditional Kerala homes and restaurants"
            },
            {
                name: "Puttu and Kadala Curry",
                description: "Steamed rice cake served with spicy black chickpea curry, a breakfast staple",
                image: "/UGCImages/kerala/cuisine/puttu.jpg",
                where: "Local breakfast joints"
            },
            {
                name: "Karimeen Fish Fry",
                description: "Pearl spot fish marinated in spices and fried to perfection",
                image: "/UGCImages/kerala/cuisine/karimeen.jpg",
                where: "Backwater restaurants"
            }
        ],
        culture: [
            {
                title: "Kathakali Dance",
                description: "Classical dance-drama known for elaborate makeup and costumes",
                image: "/UGCImages/kerala/culture/kathakali.jpg"
            },
            {
                title: "Ayurveda Traditions",
                description: "Ancient system of medicine using natural herbs and therapeutic treatments",
                image: "/UGCImages/kerala/culture/ayurveda.jpg"
            },
            {
                title: "Houseboat Heritage",
                description: "Traditional rice barges converted into floating accommodations",
                image: "/UGCImages/kerala/culture/houseboat-heritage.jpg"
            },
            {
                title: "Spice Trade Legacy",
                description: "Historical significance as the spice capital of the world",
                image: "/UGCImages/kerala/culture/spices.jpg"
            }
        ],
        departureDates: [
            { date: "1st Dec 2024", availability: "Available", price: 35000 },
            { date: "15th Dec 2024", availability: "Available", price: 37000 },
            { date: "1st Jan 2025", availability: "Limited", price: 42000 },
            { date: "15th Jan 2025", availability: "Available", price: 35000 },
            { date: "1st Feb 2025", availability: "Available", price: 35000 },
            { date: "15th Feb 2025", availability: "Available", price: 35000 }
        ]
    },
    "kerala-5d4n-munnar-thekkady-alleppey": {
        id: "kerala-5d4n-munnar-thekkady-alleppey",
        packageName: "Kerala Complete - Munnar, Thekkady & Alleppey",
        days: 5,
        nights: 4,
        amount: 24000,
        dateStart: "2024-12-01",
        dateEnd: "2024-12-05",
        description: "Perfect 5-day Kerala tour covering the misty hills of Munnar, wildlife sanctuary of Thekkady, and serene backwaters of Alleppey. Ideal for couples, families, or small groups.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "1st Dec 2024",
            duration: "5 days / 4 nights",
            costBasis: "Per Couple"
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
            "Airport/Railway station transfers",
            "Houseboat stay with meals",
            "Driver allowances",
            "Parking and toll charges"
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
                image: "/webImage/kerala/mobile/munnar.jpg"
            },
            {
                day: 2,
                title: "Munnar Sightseeing",
                description: "After breakfast, enjoy a full-day sightseeing tour of Munnar. Visit Eravikulam National Park (home to the endangered Nilgiri Tahr – closed from Feb to April), Mattupetty Dam, Echo Point, Photo Point, and Kundala Lake. Also explore the Tea Museum, showcasing Kerala's tea legacy. In the evening, return to the hotel and relax. Overnight stay in Munnar.",
                image: "/webImage/kerala/mobile/eravikulam.jpg"
            },
            {
                day: 3,
                title: "Munnar – Thekkady (110 km / 3.5 hrs)",
                description: "After breakfast, check out and proceed to Thekkady, known for Periyar Wildlife Sanctuary and scenic spice plantations. On arrival, check in to the hotel. Later, enjoy a boat ride on Periyar Lake (subject to availability) to spot wildlife like elephants and birds. Optional activities include a spice plantation tour, elephant ride, or Kerala martial arts show. Overnight stay in Thekkady.",
                image: "/webImage/kerala/mobile/thekkady.jpg"
            },
            {
                day: 4,
                title: "Thekkady – Alleppey (Houseboat / Backwater Stay) (140 km / 4 hrs)",
                description: "After breakfast, drive to Alleppey, famous for its tranquil backwaters and houseboat cruises. Check in to a houseboat (or backwater resort) and enjoy a relaxing cruise through the canals, paddy fields, and coconut groves. The houseboat will anchor in the evening, and you'll be served freshly prepared Kerala meals onboard. Overnight stay in the houseboat.",
                image: "/webImage/kerala/mobile/houseboat.jpg"
            },
            {
                day: 5,
                title: "Alleppey – Cochin Departure (90 km / 2.5 hrs)",
                description: "After breakfast, disembark from the houseboat and proceed to Cochin. If time permits, enjoy brief sightseeing of Fort Kochi, Chinese Fishing Nets, Mattancherry Palace, or Jew Town. Later, drop at Cochin Airport or Railway Station for your onward journey with pleasant memories of Kerala.",
                image: "/webImage/kerala/mobile/kochi.jpg"
            }
        ],
        images: [
            "/webImage/kerala/mobile/kerala1.jpg",
            "/webImage/kerala/mobile/kerala2.jpg",
            "/webImage/kerala/mobile/kerala3.jpg",
            "/webImage/kerala/mobile/kerala4.jpg",
            "/webImage/kerala/mobile/kerala5.jpg"
        ],
        experiences: [
            {
                title: "Periyar Wildlife Safari",
                image: "/UGCImages/kerala/experiences/wildlife.jpg"
            },
            {
                title: "Tea Garden Walk",
                image: "/UGCImages/kerala/experiences/tea.jpg"
            },
            {
                title: "Houseboat Experience",
                image: "/UGCImages/kerala/experiences/houseboat.jpg"
            },
            {
                title: "Spice Plantation Tour",
                image: "/UGCImages/kerala/experiences/spices.jpg"
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
                image: "/UGCImages/kerala/sightseeing/eravikulam.jpg"
            },
            {
                name: "Mattupetty Dam",
                description: "Scenic dam surrounded by hills and tea plantations, perfect for photography",
                image: "/UGCImages/kerala/sightseeing/mattupetty.jpg"
            },
            {
                name: "Periyar Wildlife Sanctuary",
                description: "Famous for elephants, tigers, and diverse wildlife around Periyar Lake",
                image: "/UGCImages/kerala/sightseeing/periyar.jpg"
            },
            {
                name: "Alleppey Backwaters",
                description: "Tranquil network of canals, lakes and lagoons with traditional houseboats",
                image: "/UGCImages/kerala/sightseeing/backwaters.jpg"
            },
            {
                name: "Cheeyappara Waterfalls",
                description: "Cascading waterfall en route to Munnar, a perfect stop for nature lovers",
                image: "/UGCImages/kerala/sightseeing/cheeyappara.jpg"
            },
            {
                name: "Tea Museum, Munnar",
                description: "Showcases the history and process of tea cultivation in Kerala",
                image: "/UGCImages/kerala/sightseeing/tea-museum.jpg"
            }
        ],
        localFood: [
            {
                name: "Thekkady Spice Curry",
                description: "Aromatic curry made with fresh spices from local plantations",
                image: "/UGCImages/kerala/cuisine/spice-curry.jpg",
                where: "Thekkady spice restaurants"
            },
            {
                name: "Backwater Fish Curry",
                description: "Fresh catch from backwaters cooked in coconut milk and local spices",
                image: "/UGCImages/kerala/cuisine/fish-curry.jpg",
                where: "Houseboat and Alleppey restaurants"
            },
            {
                name: "Munnar Tea and Snacks",
                description: "Fresh tea served with local banana chips and traditional Kerala snacks",
                image: "/UGCImages/kerala/cuisine/tea-snacks.jpg",
                where: "Tea plantation cafes"
            },
            {
                name: "Kerala Sadya",
                description: "Traditional feast served on banana leaf with multiple vegetarian dishes",
                image: "/UGCImages/kerala/cuisine/sadya.jpg",
                where: "Traditional Kerala restaurants"
            }
        ],
        culture: [
            {
                title: "Wildlife Conservation",
                description: "Periyar's dedication to protecting endangered species and forest ecosystem",
                image: "/UGCImages/kerala/culture/wildlife-conservation.jpg"
            },
            {
                title: "Tea Heritage",
                description: "Century-old tradition of tea cultivation in the hills of Munnar",
                image: "/UGCImages/kerala/culture/tea-heritage.jpg"
            },
            {
                title: "Spice Trade Legacy",
                description: "Thekkady's historical importance in the ancient spice trade routes",
                image: "/UGCImages/kerala/culture/spices.jpg"
            },
            {
                title: "Backwater Life",
                description: "Traditional lifestyle of communities living along Kerala's waterways",
                image: "/UGCImages/kerala/culture/backwater-life.jpg"
            }
        ],
        departureDates: [
            { date: "1st Dec 2024", availability: "Available", price: 24000 },
            { date: "15th Dec 2024", availability: "Available", price: 26000 },
            { date: "1st Jan 2025", availability: "Limited", price: 28000 },
            { date: "15th Jan 2025", availability: "Available", price: 24000 },
            { date: "1st Feb 2025", availability: "Available", price: 24000 },
            { date: "15th Feb 2025", availability: "Available", price: 24000 }
        ]
    }
}; 