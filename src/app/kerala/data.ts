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
    "kerala-4n5d-munnar-thekkady-alleppey": {
        id: "kerala-4n5d-munnar-thekkady-alleppey",
        packageName: "Kerala Complete - Munnar, Thekkady & Alleppey",
        days: 5,
        nights: 4,
        amount: 24000,
        dateStart: "1, 5, 8, 12, 15, 19, 22, 26, 29 August 2025",
        dateEnd: "",
        description: "Perfect 6-day Kerala tour covering the misty hills of Munnar, wildlife sanctuary of Thekkady, and serene backwaters of Alleppey. Ideal for couples, families, or small groups.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "1, 5, 8, 12, 15, 19, 22, 26, 29 August 2025",
            duration: "5 days / 4 nights",
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
            { date: "1, 5, 8, 12, 15, 19, 22, 26, 29 August 2025", availability: "Available", price: 24000 },
        ],
        departureCities: [

            {
                city: "Mumbai",
                price: 24000
            },
        ]
    },

    "kerala-6n7d-munnar-thekkady-houseboat-kovalam": {
        id: "kerala-7n6d-munnar-thekkady-houseboat-kovalam",
        packageName: "Kerala Deluxe - Munnar, Thekkady, Houseboat & Kovalam",
        days: 7,
        nights: 6,
        amount: 16499,
        dateStart: "Available Now",
        dateEnd: "",
        description: "Comprehensive 7-day Kerala experience covering hill stations, wildlife, backwaters and beaches. Perfect blend of adventure, relaxation and cultural immersion.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "Available throughout the year",
            duration: "7 days / 6 nights",
            costBasis: "Per Person on twin sharing basis"
        },
        hotelDetails: [
            {
                city: "Munnar",
                hotel: "GRAND PLAZA MUNNAR",
                roomType: "Deluxe Room"
            },
            {
                city: "Thekkady",
                hotel: "MERRY WEATHER BY OPULENT",
                roomType: "Standard Room"
            },
            {
                city: "Houseboat",
                hotel: "3 BED ROOM AC PREMIUM PVT HOUSEBOAT",
                roomType: "Premium AC Houseboat"
            },
            {
                city: "Kovalam",
                hotel: "ABAD HARMONIA",
                roomType: "Sea View Room"
            }
        ],
        tourSummary: [
            "Scenic drive from Cochin to Munnar with waterfall stops",
            "Complete Munnar sightseeing including tea gardens and viewpoints",
            "Wildlife experience at Periyar Wildlife Sanctuary",
            "Premium houseboat stay in Alleppey backwaters",
            "Beach relaxation at famous Kovalam beach",
            "Trivandrum city tour with temples and museums"
        ],
        inclusions: [
            "6 Nights accommodations at above mentioned hotel or similar hotel",
            "Daily Breakfast at hotel except all meal in Houseboat",
            "Return Airport transfers including intercity transfers",
            "Sightseeing of Munnar",
            "Sightseeing of Thekkady",
            "One full night stay at Houseboat",
            "Half day sightseeing of Trivandrum",
            "All services on AC INNOVA on private basis"
        ],
        exclusions: [
            "International/Domestic airfare",
            "Lunch and dinner (except houseboat)",
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
                title: "Cochin - Munnar",
                description: "Arrive Cochin airport / Railway station meet and transfer to Munnar, on the way stop at Cheeyappara and Valara waterfalls. This destination is situated about 1600m above sea level, the hill station had been the summer resort of the British Government during the colonial era. Upon arrival check-in at Hotel. Overnight stay in hotel.",
            },
            {
                day: 2,
                title: "Munnar",
                description: "Breakfast at hotel, Later proceed for city tour (Places covered: Mattupetti, Eco point, Kundala, Rajamala, Tea factory, spice market) Afternoon visit the Tea Museum and Blossom Garden. Evening time for a bit of shopping. Overnight stay at hotel.",
            },
            {
                day: 3,
                title: "Munnar - Thekkady",
                description: "After breakfast, proceed to Thekkady. Upon arrival check-in at Hotel. Later proceed to Periyar Lake around which the sanctuary is built, for boating (included in the cost). Later visit Spice Plantation Tour and Elephant activities and Elephant ride (Own cost). Overnight stay at hotel.",
            },
            {
                day: 4,
                title: "Thekkady - Alleppey",
                description: "After breakfast proceeds to Alleppey. Check-in House Boat at 12:00 Hrs. Enjoy the panoramic view of the vast stretches of the paddy fields, Backwaters & Canals, and exotic natural surroundings of the villages Overnight stay at House Boat.",
            },
            {
                day: 5,
                title: "Alleppey - Kovalam",
                description: "After breakfast, check out from houseboat at 09:00 Hrs. Later transfer to Kovalam, check-in at the Hotel. Enjoy the day at the world-famous Kovalam Beach. Overnight at the hotel.",
            },
            {
                day: 6,
                title: "Kovalam - Trivandrum - Kovalam",
                description: "After breakfast proceeds Trivandrum City tour. Visit the famous Sree Padmanabha Temple, Trivandrum Zoo, Napier Museum, Shanghumukaam Beach, Veli lake village etc. Evening back to the hotel. Overnight stay at hotel.",
            },
            {
                day: 7,
                title: "Kovalam - Trivandrum",
                description: "Breakfast at hotel. Later check out and departure transfer to Trivandrum airport / railway station with sweet memory.",
            }
        ],
        images: [
            "/UGCImages/kerala/kerala/3.png",
        ],
        experiences: [
            {
                title: "Premium Houseboat Stay",
                image: "/UGCImages/kerala/exp/3.png"
            },
            {
                title: "Kovalam Beach Experience",
                image: "/UGCImages/kerala/kerala/5.png"
            },
            {
                title: "Spice Plantation Tour",
                image: "/UGCImages/kerala/exp/4.png"
            },
            {
                title: "Temple & Cultural Tour",
                image: "/UGCImages/kerala/kerala/6.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "6 nights accommodation in premium hotels",
                "Premium 3-bedroom AC houseboat experience",
                "Kovalam beach relaxation",
                "Trivandrum cultural tour",
                "Comprehensive Kerala experience",
                "All transfers on private AC vehicle"
            ],
            bestTimeToVisit: "October to March - Pleasant weather for all activities",
            cuisine: [
                "Traditional Kerala Sadya",
                "Fresh Backwater Seafood",
                "Kovalam Beach Food",
                "Trivandrum Street Food",
                "Spice Garden Delicacies"
            ],
            accommodation: {
                type: "Premium Hotels & Houseboat",
                amenities: [
                    "AC Rooms",
                    "Sea View (Kovalam)",
                    "Premium Houseboat",
                    "Restaurant",
                    "Room Service",
                    "WiFi"
                ]
            },
            transportation: {
                type: "AC INNOVA Private",
                features: [
                    "Experienced Driver",
                    "Fuel Included",
                    "All Transfers",
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
                name: "Mattupetty Dam & Eco Point",
                description: "Scenic dam with beautiful views and eco-friendly activities",
                image: "/UGCImages/kerala/sight/2.png"
            },
            {
                name: "Periyar Wildlife Sanctuary",
                description: "Famous wildlife sanctuary with boat safari opportunities",
                image: "/UGCImages/kerala/sight/3.png"
            },
            {
                name: "Alleppey Backwaters",
                description: "Premium houseboat experience through scenic backwaters",
                image: "/UGCImages/kerala/sight/4.png"
            },
            {
                name: "Kovalam Beach",
                description: "World-famous beach destination with golden sands",
                image: "/UGCImages/kerala/kerala/5.png"
            },
            {
                name: "Sree Padmanabha Temple",
                description: "Ancient temple dedicated to Lord Vishnu in Trivandrum",
                image: "/UGCImages/kerala/kerala/6.png"
            }
        ],
        localFood: [
            {
                name: "Kovalam Seafood",
                description: "Fresh catch from Arabian Sea prepared with Kerala spices",
                image: "/UGCImages/kerala/food/2.png",
                where: "Kovalam beach restaurants"
            },
            {
                name: "Houseboat Delicacies",
                description: "Traditional Kerala meals served fresh on houseboat",
                image: "/UGCImages/kerala/food/4.png",
                where: "Premium houseboat dining"
            },
            {
                name: "Trivandrum Street Food",
                description: "Local street delicacies and traditional snacks",
                image: "/UGCImages/kerala/food/3.png",
                where: "Trivandrum markets"
            }
        ],
        culture: [
            {
                title: "Temple Heritage",
                description: "Rich spiritual heritage showcased in Trivandrum temples",
                image: "/UGCImages/kerala/kerala/6.png"
            },
            {
                title: "Beach Culture",
                description: "Kovalam's fishing community and beach lifestyle",
                image: "/UGCImages/kerala/kerala/5.png"
            },
            {
                title: "Backwater Traditions",
                description: "Traditional houseboat life and water transport heritage",
                image: "/UGCImages/kerala/exp/3.png"
            }
        ],
        departureDates: [
            { date: "Available throughout the year", availability: "Available", price: 16499 }
        ],
        departureCities: [
            {
                city: "Cochin",
                price: 16499
            }
        ]
    },

    "kerala-6n5d-munnar-thekkady-houseboat-cochin": {
        id: "kerala-6n5d-munnar-thekkady-houseboat-cochin",
        packageName: "Kerala Special - Munnar, Thekkady, Houseboat & Cochin",
        days: 6,
        nights: 5,
        amount: 12299,
        dateStart: "Available Now",
        dateEnd: "",
        description: "Perfect 6-day Kerala tour covering hill stations, wildlife, backwaters and historic Cochin. Great value package with comprehensive sightseeing.",
        groupDetails: {
            pax: "6",
            rooms: "3",
            arrivalDate: "Available Now",
            duration: "6 days / 5 nights",
            costBasis: "Per Person on twin sharing basis"
        },
        hotelDetails: [
            {
                city: "Munnar",
                hotel: "LEMONGRASS INN BY EVM / SIMILAR",
                roomType: "Standard Room"
            },
            {
                city: "Thekkady",
                hotel: "HOTEL PEPPERVINE / SIMILAR",
                roomType: "Standard Room"
            },
            {
                city: "Houseboat",
                hotel: "3 BED ROOM AC PREMIUM PVT HOUSEBOAT/SIMILAR",
                roomType: "Premium AC Houseboat"
            },
            {
                city: "Cochin",
                hotel: "KEYS SELECT BY LEMON TREE HOTEL /SIMILAR",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Scenic drive from Cochin to Munnar with waterfall stops",
            "Complete Munnar city tour including tea factory and spice market",
            "Wildlife boat safari at Periyar Wildlife Sanctuary",
            "Premium houseboat experience in Alleppey",
            "Fort Cochin historical tour with major attractions",
            "Minimum 6 passengers group booking"
        ],
        inclusions: [
            "5 Nights accommodations at above mentioned hotel or similar hotel",
            "Daily Breakfast at hotel except all meal in Houseboat",
            "Return Airport transfers",
            "Sightseeing of Munnar",
            "Sightseeing of Thekkady",
            "One full night stay at Houseboat",
            "Sightseeing of Kochi",
            "All services on AC INNOVA on private basis"
        ],
        exclusions: [
            "International/Domestic airfare",
            "Lunch and dinner (except houseboat)",
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
                title: "Cochin - Munnar",
                description: "Arrive Cochin airport / Railway station meet and transfer to Munnar, on the way stop at Cheeyappara and Valara waterfalls. This destination is situated about 1600m above sea level, the hill station had been the summer resort of the British Government during the colonial era. Upon arrival check-in at Hotel. Overnight stay in hotel.",
                image: "/UGCImages/kerala/keralaIti/1.png"
            },
            {
                day: 2,
                title: "Munnar",
                description: "Breakfast at hotel, Later proceed for city tour (Places covered: Mattupetti, Eco point, Kundala, Rajamala, Top Station, Tea factory, spice market) Afternoon visit the Tea Museum and Blossom Garden. Evening time for a bit of shopping. Overnight stay at hotel.",
                image: "/UGCImages/kerala/keralaIti/2.png"
            },
            {
                day: 3,
                title: "Munnar - Thekkady",
                description: "After breakfast, proceed to Thekkady. Upon arrival check-in at Hotel. Later proceed to Periyar Lake around which the sanctuary is built, for boating (Own cost). Later visit Spice Plantation Tour and Elephant activities and Elephant ride (Own cost). Overnight stay at hotel.",
                image: "/UGCImages/kerala/keralaIti/3.png"
            },
            {
                day: 4,
                title: "Thekkady - Alleppey",
                description: "After breakfast proceeds to Alleppey. Check-in House Boat at 12:00 Hrs and followed by Lunch Enjoy the panoramic view of the vast stretches of the paddy fields, Backwaters & Canals, and exotic natural surroundings of the villages. Dinner & overnight stay at House Boat.",
                image: "/UGCImages/kerala/keralaIti/4.png"
            },
            {
                day: 5,
                title: "Alleppey - Cochin",
                description: "Breakfast at houseboat Later check out from houseboat at 09:00 Hrs. and transfer to Cochin. Upon arrival check in hotel. Later proceed for sightseeing in Cochin for visit Fort Cochin, Jewish synagogue, Dutch Palace, Jew Town, ST. Francis Church, Chinese fishing nets, Marian Drive, Lulu Mall (Asia's biggest Mall) etc. Overnight stay at hotel.",
                image: "/UGCImages/kerala/kerala/3.png"
            },
            {
                day: 6,
                title: "Depart Cochin",
                description: "Breakfast at hotel. Later check out and departure transfer to airport / railway station with sweet memory.",
                image: "/UGCImages/kerala/kerala/3.png"
            }
        ],
        images: [
            "/UGCImages/kerala/kerala/5.png",
            "/UGCImages/kerala/kerala/2.png",
            "/UGCImages/kerala/kerala/3.png",
            "/UGCImages/kerala/kerala/4.png",
            "/UGCImages/kerala/kerala/5.png",
            "/UGCImages/kerala/kerala/6.png"
        ],
        experiences: [
            {
                title: "Tea Factory Visit",
                image: "/UGCImages/kerala/exp/2.png"
            },
            {
                title: "Spice Plantation Tour",
                image: "/UGCImages/kerala/exp/4.png"
            },
            {
                title: "Houseboat Experience",
                image: "/UGCImages/kerala/exp/3.png"
            },
            {
                title: "Fort Cochin Heritage",
                image: "/UGCImages/kerala/kerala/3.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Valid for minimum 06 passengers travelling together",
                "Above rates are not applicable during exhibition or any peak dates",
                "Travel validity till 20th Aug, 2025",
                "Booking validity till 15th Aug, 2025",
                "Above rates are net & non-commissionable for B2B travel partners only",
                "Complete Kerala experience at best value"
            ],
            bestTimeToVisit: "October to March - Pleasant weather for all activities",
            cuisine: [
                "Traditional Kerala Sadya",
                "Fresh Backwater Seafood",
                "Cochin Street Food",
                "Tea Garden Snacks",
                "Spice Garden Delicacies"
            ],
            accommodation: {
                type: "Standard Hotels & Premium Houseboat",
                amenities: [
                    "AC Rooms",
                    "Restaurant",
                    "Premium Houseboat",
                    "Room Service",
                    "WiFi",
                    "Travel Desk"
                ]
            },
            transportation: {
                type: "AC INNOVA Private",
                features: [
                    "Experienced Driver",
                    "Fuel Included",
                    "All Transfers",
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
                name: "Top Station Munnar",
                description: "Highest point in Munnar with panoramic valley views",
                image: "/UGCImages/kerala/sight/1.png"
            },
            {
                name: "Tea Factory & Museum",
                description: "Learn about tea processing and Kerala's tea heritage",
                image: "/UGCImages/kerala/sight/6.png"
            },
            {
                name: "Periyar Lake Boating",
                description: "Wildlife spotting boat ride in Periyar sanctuary",
                image: "/UGCImages/kerala/sight/3.png"
            },
            {
                name: "Fort Cochin",
                description: "Historic area with Chinese fishing nets and colonial architecture",
                image: "/UGCImages/kerala/kerala/3.png"
            },
            {
                name: "Jewish Synagogue",
                description: "Historic synagogue showcasing Cochin's Jewish heritage",
                image: "/UGCImages/kerala/kerala/3.png"
            }
        ],
        localFood: [
            {
                name: "Munnar Tea & Snacks",
                description: "Fresh tea with local banana chips and traditional snacks",
                image: "/UGCImages/kerala/food/3.png",
                where: "Tea plantation cafes"
            },
            {
                name: "Thekkady Spice Curry",
                description: "Aromatic curry made with fresh plantation spices",
                image: "/UGCImages/kerala/food/1.png",
                where: "Spice garden restaurants"
            },
            {
                name: "Houseboat Traditional Meals",
                description: "All meals included - authentic Kerala cuisine on houseboat",
                image: "/UGCImages/kerala/food/4.png",
                where: "Premium houseboat dining"
            },
            {
                name: "Cochin Street Food",
                description: "Local delicacies from historic Fort Cochin area",
                image: "/UGCImages/kerala/food/2.png",
                where: "Fort Cochin street vendors"
            }
        ],
        culture: [
            {
                title: "Colonial Heritage",
                description: "Portuguese, Dutch and British influences in Fort Cochin",
                image: "/UGCImages/kerala/kerala/3.png"
            },
            {
                title: "Jewish Heritage",
                description: "Centuries-old Jewish community history in Cochin",
                image: "/UGCImages/kerala/kerala/3.png"
            },
            {
                title: "Tea Plantation Culture",
                description: "British-era tea plantation heritage in Munnar hills",
                image: "/UGCImages/kerala/exp/2.png"
            },
            {
                title: "Spice Trade Legacy",
                description: "Ancient spice trade routes and traditional cultivation",
                image: "/UGCImages/kerala/exp/4.png"
            }
        ],
        departureDates: [
            { date: "Available Now", availability: "Available", price: 12299 }
        ],
        departureCities: [
            {
                city: "Cochin",
                price: 12299
            }
        ]
    }
}; 