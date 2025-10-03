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

export interface goaPackage {
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

export const goaPackages: Record<string, goaPackage> = {
    "goa-3n4d-beaches": {
        id: "goa-3n4d-beaches",
        packageName: "Goa Complete - North & South Beaches",
        days: 4,
        nights: 3,
        amount: 19000,
        dateStart: "1, 5, 8, 12, 15, 19, 22, 26, 29 October 2025",
        dateEnd: "",
        description: "Experience the best of Goa with our comprehensive 5-day tour covering pristine beaches, vibrant nightlife, Portuguese heritage, and thrilling water sports. Perfect blend of relaxation and adventure.",
        groupDetails: {
            pax: "2",
            rooms: "1",
            arrivalDate: "1, 5, 8, 12, 15, 19, 22, 26, 29 October 2025",
            duration: "4 days / 3 nights",
            costBasis: "Per person on double sharing basis"
        },
        hotelDetails: [
            {
                city: "North Goa",
                hotel: "3 Star Beach Resort or Similar",
                roomType: "Deluxe Sea View Room"
            },
            {
                city: "South Goa",
                hotel: "3 Star Beach Resort or Similar",
                roomType: "Premium Room"
            }
        ],
        tourSummary: [
            "Explore famous North Goa beaches - Baga, Calangute, Anjuna",
            "Experience vibrant nightlife and beach shacks",
            "Discover Old Goa's Portuguese heritage and churches"
        ],
        inclusions: [
            "3 Breakfast",
            "Pickup from Airport",
            "Drop to Airport",
            "North Goa",
            "South Goa",
            "All Sightseeing on PVt. Basis",
            "3 Star Hotel"
        ],
        exclusions: [
            "Personal expenses",
            "Water sports activities",
            "Alcoholic beverages",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Goa – Leisure Day",
                description: `Arrive at Goa Airport or Railway Station. Meet our representative and transfer to your hotel. After check-in, relax and freshen up. Spend the rest of the day at leisure—enjoy the nearby beach, explore the local markets, or unwind at a beach shack. In the evening, you can experience Goa's vibrant nightlife or enjoy a peaceful sunset by the sea. Overnight stay at the hotel.`,
                image: "/UGCImages/goa/goa/1.png"
            },
            {
                day: 2,
                title: "North Goa Sightseeing & Heritage Tour",
                description: `After breakfast, proceed for a full-day sightseeing tour of North Goa. Visit Fort Aguada, a 17th-century Portuguese fort with stunning sea views. Continue to SinQurim Beach, Calangute Beach, Baga Beach, and Anjuna Beach. Enjoy optional water sports like parasailing, jet skiing, or banana boat rides. Explore the Anjuna Flea Market (if open) and spend the evening relaxing by the beach. Return to the hotel. Overnight stay in Goa.`,
                image: "/UGCImages/goa/goa/2.png"
            },
            {
                day: 3,
                title: "South Goa Sightseeing",
                description: `Post breakfast, head out for a full-day South Goa tour. Visit the famous temples like Shri Manguesh Temple and Shanta Durga Temple. Explore the historical Old Goa Churches, including the Basilica of Bom Jesus and Se Cathedral. Later, head to the serene beaches of South Goa such as Miramar Beach, Colva Beach, and Palolem Beach (time permitting). In the evening, enjoy a Mandovi River Cruise (optional). Return to the hotel. Overnight stay in Goa.`,
                image: "/UGCImages/goa/goa/3.png"
            },
            {
                day: 4,
                title: "Departure from Goa",
                description: `After breakfast, check out from the hotel. Depending on your departure time, you may explore the local market or relax at the beach. Later, transfer to the airport or railway station for your onward journey with fond memories of Goa.`,
                image: "/UGCImages/goa/goa/4.png"
            },
        ],
        images: [
            "/UGCImages/goa/goa/1.png",
            "/UGCImages/goa/goa/2.png",
            "/UGCImages/goa/goa/3.png",
            "/UGCImages/goa/goa/4.png",
            "/UGCImages/goa/goa/5.png",
            "/UGCImages/goa/goa/6.png",
        ],
        experiences: [
            {
                title: "Water Sports Adventure",
                image: "/UGCImages/goa/exp/1.png"
            },
            {
                title: "Beach Nightlife",
                image: "/UGCImages/goa/exp/2.png"
            },
            {
                title: "Portuguese Heritage",
                image: "/UGCImages/goa/exp/3.png"
            },
            {
                title: "Spice Plantation Tour",
                image: "/UGCImages/goa/exp/4.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Famous North Goa beaches and nightlife",
                "UNESCO World Heritage churches in Old Goa",
                "Serene South Goa beaches and luxury resorts",
                "Traditional spice plantation experience",
                "Mandovi River sunset cruise",
                "Portuguese colonial architecture"
            ],
            bestTimeToVisit: "November to February - Perfect weather for beach activities",
            cuisine: [
                "Goan Fish Curry Rice",
                "Bebinca Traditional Dessert",
                "Pork Vindaloo",
                "Goan Sausage",
                "Cashew Feni",
                "Fresh Seafood Platters"
            ],
            accommodation: {
                type: "4 Star Beach Resorts",
                amenities: [
                    "Sea View Rooms",
                    "Swimming Pool",
                    "Spa Services",
                    "Beach Access",
                    "Multi-cuisine Restaurant",
                    "Travel Desk"
                ]
            },
            transportation: {
                type: "AC Sedan/SUV",
                features: [
                    "Experienced Local Driver",
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
                name: "Basilica of Bom Jesus",
                description: "UNESCO World Heritage site housing the tomb of St. Francis Xavier",
                image: "/UGCImages/goa/sight/1.png"
            },
            {
                name: "Baga Beach",
                description: "Famous for water sports, nightlife, and vibrant beach shacks",
                image: "/UGCImages/goa/sight/2.png"
            },
            {
                name: "Fort Aguada",
                description: "17th-century Portuguese fort with lighthouse and panoramic sea views",
                image: "/UGCImages/goa/sight/3.png"
            },
            {
                name: "Palolem Beach",
                description: "Crescent-shaped beach in South Goa, perfect for relaxation and dolphin watching",
                image: "/UGCImages/goa/sight/4.png"
            },
            {
                name: "Anjuna Beach",
                description: "Hippie paradise famous for flea market and stunning red cliffs",
                image: "/UGCImages/goa/sight/5.png"
            },
            {
                name: "Se Cathedral",
                description: "One of Asia's largest churches showcasing Portuguese Gothic architecture",
                image: "/UGCImages/goa/sight/6.png"
            }
        ],
        localFood: [
            {
                name: "Goan Fish Curry Rice",
                description: "Traditional curry made with coconut milk, kokum, and fresh catch of the day",
                image: "/UGCImages/goa/food/1.png",
                where: "Beach shacks and local restaurants"
            },
            {
                name: "Pork Vindaloo",
                description: "Spicy pork curry with Portuguese influence, marinated in vinegar and spices",
                image: "/UGCImages/goa/food/2.png",
                where: "Traditional Goan restaurants"
            },
            {
                name: "Bebinca",
                description: "Multi-layered traditional Goan dessert made with coconut milk and jaggery",
                image: "/UGCImages/goa/food/3.png",
                where: "Local bakeries and restaurants"
            },
            {
                name: "Fresh Seafood Platter",
                description: "Grilled prawns, fish, and crab served with local spices and salad",
                image: "/UGCImages/goa/food/4.png",
                where: "Beachside restaurants and shacks"
            }
        ],
        culture: [
            {
                title: "Portuguese Colonial Heritage",
                description: "450 years of Portuguese rule evident in architecture, cuisine, and customs",
                image: "/UGCImages/goa/culture/1.png"
            },
            {
                title: "Carnival Celebrations",
                description: "Vibrant annual festival with parades, music, and dance rooted in Portuguese tradition",
                image: "/UGCImages/goa/culture/2.png"
            },
            {
                title: "Beach Shack Culture",
                description: "Laid-back lifestyle centered around beachside dining and music",
                image: "/UGCImages/goa/culture/3.png"
            },
            {
                title: "Feni Making Tradition",
                description: "Traditional cashew and palm wine production methods passed down generations",
                image: "/UGCImages/goa/culture/4.png"
            }
        ],
        departureDates: [
            { date: "1, 5, 8, 12, 15, 19, 22, 26, 29 October 2025", availability: "Available", price: 18000 },
            { date: "2, 6, 9, 13, 16, 20, 23, 27, 30 October 2025", availability: "Available", price: 18000 },
        ],
        departureCities: [
            {
                city: "Delhi",
                price: 19000
            },

        ]
    },
}; 