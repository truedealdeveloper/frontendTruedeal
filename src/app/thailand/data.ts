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

export interface ThailandPackage {
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
    mobileImages?: string[];
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
    departureCities?: {
        city: string;
        price: number;
    }[];
}

export const thailandPackages: Record<string, ThailandPackage> = {
    thailandBangkokPattayaPackage: {
        id: "thailand-bangkok-pattaya",
        packageName: "Bangkok & Pattaya 6 Days Package",
        days: 6,
        nights: 5,
        amount: 32999,
        dateStart: "10,17,24,31 December",
        dateEnd: "",
        description: "Experience the vibrant culture of Thailand with our 6-day Bangkok and Pattaya tour. From the bustling streets of Bangkok to the beautiful beaches of Pattaya, this package offers the perfect blend of city exploration, cultural immersion, and beach relaxation.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in December 2024",
            duration: "5N6D Bangkok Pattaya",
            costBasis: "Cost Based On Double Sharing"
        },
        departureCities: [
            {
                city: "New Delhi",
                price: 32999
            },
            {
                city: "Mumbai",
                price: 35999
            },
            {
                city: "Kolkata",
                price: 36999
            }
        ],
        hotelDetails: [
            {
                city: "Bangkok",
                hotel: "Berkeley Hotel Pratunam 4*",
                roomType: "Superior Room"
            },
            {
                city: "Pattaya",
                hotel: "Centara Azure Hotel Pattaya 4*",
                roomType: "Deluxe Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Bangkok",
            "Day 2: Bangkok City Tour - Grand Palace, Wat Pho, Wat Arun",
            "Day 3: Bangkok to Pattaya - Coral Island Tour",
            "Day 4: Pattaya - Nong Nooch Tropical Garden & Cultural Show",
            "Day 5: Pattaya - Safari World & Marine Park",
            "Day 6: Departure from Bangkok"
        ],
        inclusions: [
            "5 nights accommodation in 4-star hotels",
            "Daily breakfast at hotels",
            "Airport transfers on private basis",
            "Bangkok city tour with Grand Palace",
            "Coral Island tour with lunch",
            "Nong Nooch Tropical Garden with cultural show",
            "Safari World and Marine Park entry",
            "All sightseeing on private basis",
            "Professional English-speaking guide"
        ],
        exclusions: [
            "Visa fees (approximately ₹2500 per person)",
            "International flights",
            "Travel insurance",
            "Meals not mentioned in itinerary",
            "Personal expenses and tips",
            "Optional activities",
            "GST & TCS charges"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bangkok",
                description: "Upon arrival at Suvarnabhumi Airport, Bangkok, you will be met by our representative and transferred to your hotel. Check-in and relax. Evening free at leisure to explore the nearby areas.",
                image: "/UGCImages/web/thailand/1.webp"
            },
            {
                day: 2,
                title: "Bangkok City Tour - Grand Palace & Temples",
                description: "Full day Bangkok city tour visiting the magnificent Grand Palace, Wat Pho (Temple of Reclining Buddha), and Wat Arun (Temple of Dawn). Experience the rich culture and history of Thailand's capital city.",
                image: "/UGCImages/web/thailand/2.webp"
            },
            {
                day: 3,
                title: "Bangkok to Pattaya - Coral Island Tour",
                description: "Morning transfer to Pattaya (2 hours drive). Check-in to hotel and proceed for Coral Island tour. Enjoy water sports, beach activities, and lunch at the island. Return to Pattaya in the evening.",
                image: "/UGCImages/web/thailand/3.webp"
            },
            {
                day: 4,
                title: "Nong Nooch Tropical Garden & Cultural Show",
                description: "Visit the famous Nong Nooch Tropical Garden featuring beautiful landscapes, elephant show, and traditional Thai cultural performances. Lunch included at the garden.",
                image: "/UGCImages/web/thailand/4.webp"
            },
            {
                day: 5,
                title: "Safari World & Marine Park",
                description: "Full day at Safari World and Marine Park. Experience wildlife safari, marine shows, and various animal performances. One of Thailand's most popular attractions.",
                image: "/UGCImages/web/thailand/5.webp"
            },
            {
                day: 6,
                title: "Departure from Bangkok",
                description: "After breakfast, check out from hotel and transfer to Bangkok airport for your flight back home. Take beautiful memories of Thailand with you.",
                image: "/UGCImages/web/thailand/6.webp"
            }
        ],
        images: [
            "/UGCImages/web/thailand/1.webp",
            "/UGCImages/web/thailand/2.webp",
            "/UGCImages/web/thailand/3.webp",
            "/UGCImages/web/thailand/4.webp",
            "/UGCImages/web/thailand/5.webp",
            "/UGCImages/web/thailand/6.webp"
        ],
        mobileImages: [
            "/UGCImages/web/thailand/1.webp",
            "/UGCImages/web/thailand/2.webp",
            "/UGCImages/web/thailand/3.webp",
            "/UGCImages/web/thailand/4.webp"
        ],
        experiences: [
            {
                title: "Grand Palace Bangkok",
                image: "/UGCImages/web/thailand/7.webp"
            },
            {
                title: "Coral Island",
                image: "/UGCImages/web/thailand/8.webp"
            },
            {
                title: "Elephant Show",
                image: "/UGCImages/web/thailand/9.webp"
            },
            {
                title: "Thai Cultural Show",
                image: "/UGCImages/web/thailand/10.webp"
            }
        ],
        sightseeingSpots: [
            {
                name: "Grand Palace",
                description: "The official residence of Thai kings and one of Bangkok's most visited attractions",
                image: "/UGCImages/web/thailand/7.webp"
            },
            {
                name: "Wat Pho Temple",
                description: "Famous for its giant reclining Buddha statue and traditional Thai massage school",
                image: "/UGCImages/web/thailand/11.webp"
            },
            {
                name: "Coral Island",
                description: "Beautiful island near Pattaya perfect for water sports and beach activities",
                image: "/UGCImages/web/thailand/8.webp"
            }
        ],
        localFood: [
            {
                name: "Pad Thai",
                description: "Thailand's national dish - stir-fried rice noodles with vegetables, protein and tamarind sauce",
                image: "/UGCImages/web/thailand/1.webp",
                where: "Street vendors, local restaurants"
            },
            {
                name: "Tom Yum Goong",
                description: "Spicy and sour soup with shrimp, lemongrass, and lime leaves",
                image: "/UGCImages/web/thailand/2.webp",
                where: "Thai restaurants"
            },
            {
                name: "Green Curry",
                description: "Aromatic curry with coconut milk, green chilies, and fresh herbs",
                image: "/UGCImages/web/thailand/3.webp",
                where: "Traditional Thai restaurants"
            },
            {
                name: "Mango Sticky Rice",
                description: "Popular Thai dessert with sweet sticky rice and fresh mango slices",
                image: "/UGCImages/web/thailand/4.webp",
                where: "Dessert shops, street vendors"
            }
        ],
        culture: [
            {
                title: "Thai Traditional Dance",
                description: "Graceful classical dance performances telling stories from Thai literature and history",
                image: "/UGCImages/web/thailand/10.webp"
            },
            {
                title: "Buddhist Temples",
                description: "Magnificent temples showcasing Thai architecture and Buddhist traditions",
                image: "/UGCImages/web/thailand/11.webp"
            },
            {
                title: "Floating Markets",
                description: "Traditional markets on waterways selling fresh produce and local crafts",
                image: "/UGCImages/web/thailand/12.webp"
            },
            {
                title: "Thai Massage",
                description: "Ancient healing art combining acupressure, stretching, and meditation",
                image: "/UGCImages/web/thailand/9.webp"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit iconic Grand Palace and temples",
                "Experience beautiful Coral Island",
                "Enjoy traditional Thai cultural shows",
                "Explore Nong Nooch Tropical Garden",
                "Safari World adventure"
            ],
            bestTimeToVisit: "November to February (cool and dry season)",
            cuisine: ["Pad Thai", "Tom Yum", "Green Curry", "Mango Sticky Rice"],
            accommodation: {
                type: "4-star hotels in prime locations",
                amenities: ["Swimming pool", "Fitness center", "Wi-Fi", "Restaurant", "Room service"]
            },
            transportation: {
                type: "Private air-conditioned vehicles",
                features: ["Professional driver", "English-speaking guide", "Comfortable seating"]
            },
            visaInfo: {
                requirement: "Visa required for Indian citizens",
                duration: "60 days multiple entry",
                cost: "₹2500 approximately",
                documents: ["Passport with 6 months validity", "Photographs", "Bank statements", "Flight tickets"]
            }
        }
    }
};
