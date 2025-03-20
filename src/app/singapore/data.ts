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
        amount: 44500,
        dateStart: "01 March 2025",
        dateEnd: "26 July 2025",
        description: "Experience the vibrant city life of Singapore with our 4-day tour covering iconic attractions, cultural sites, and modern marvels.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4D3N Singapore Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Singapore",
                hotel: "3 Chancellor @ Orchard / Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Singapore",
                hotel: "4 Hotel Boss / Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Singapore",
                hotel: "5 Star Grand Copthorne Waterfront Hotel / Similar",
                roomType: "Superior Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrive Singapore + Marina Bay Sands (Observation Deck) + Gardens by the Bay (Flower Dome + Cloud Forest) – SIC",
            "Day 2: Universal Studios + Sea Aquarium – SIC (closed on Tuesday)",
            "Day 3: Sentosa Island (One Way Cable Car, Madame Tussauds 4 in 1, Wings of Time) – SIC",
            "Day 4: Singapore - Departure"
        ],
        inclusions: [
            "3 Night Accommodation in above mentioned hotel with Breakfast",
            "Airport Arrival and Departure on PVT Transfers",
            "All tour transfers on SIC Basis",
            "Garden by the bay (Flower dome + Cloud Forest) – SIC",
            "Marina Bay sand Sky park",
            "Sentosa (One way cable car + Madame Tussauds 4 in 1 Combo + Wings of Time) – SIC",
            "Universal Studio – SIC",
            "Sea Aquarium"
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
                title: "Arrive Singapore + Marina Bay Sands (Observation Deck) + Gardens by the Bay (Flower Dome + Cloud Forest) – SIC",
                description:`Welcome to Singapore – also known as the Lion City
Upon arrival our representative assist you, pick up and transfer to your hotel. Check in at hotel (standard time approx 1400/1500 hrs).
Visit the Marina Bay Sands hotel (SIC)
Enjoy panoramic view of the city from MBS Sky Park. Take a walk from MBS to Gardens by the Bay. Then visit Gardens by the Bay – Flower Dome and Cloud Forest Observation Deck. Enter the flower Dome, the largest glass greenhouse in the world. It replicates a mild, dry climate and features plants found in the Mediterranean and other semi-arid tropical regions. Admire a forest that boasts one of the world's largest indoor waterfalls at 35 meters tall. Step into a landscape of dramatic greenery, featuring vegetation that is typically native to habitats 2,000 meters above sea level.
Overnight stay at Singapore
`
            },
            {
                day: 2,
                title: "Universal Studios + Sea Aquarium – SIC (closed on Tuesday)",
                description: `Enjoy Breakfast in Hotel.
Visit the SEA Aquarium (SIC)
Enter and explore the marine realm of S.E.A. Aquarium, home to more than 100,000 marine animals of over 1,000 species, across 45 different habitats, each one as fascinating as the next. It's a marine life experience you won’t forget.
Later, visit the Universal Studios
Start your journey to Hollywood movie theme park - Universal Studios™ forms part of Resorts World™ Sentosa. Among the park's many rides and exciting attractions are Battle star Galactica, the world's tallest pair of dueling roller coasters and Far Away Castle™, the first castle from the world of Shrek where you can experience the amazing Shrek 4-D™ attraction. One of the biggest spectacles in live entertainment is based on the movie Water world™. The action comes gushing to life in a tidal wave of death-defying stunts, explosions and thrilling action. Enjoy Jurassic Park Rapids Adventure™, Madagascar: A Crate Adventure™ and Revenge of the Mummy™, TRANSFORMERS The Ride and many more.
Overnight stay at Singapore	
`
            },
            {
                day: 3,
                title: "Sentosa Island (One Way Cable Car, Madame Tussauds 4 in 1, Wings of Time) – SIC",
                description: `Enjoy Breakfast in Hotel. 	
Today enjoy full day at the Sentosa Island (SIC). Sentosa is an island resort off Singapore&apos;s southern coast, connected to the city by road, cable car, pedestrian boardwalk and monorail.
Enjoy the cable car ride and experience Madame Tussauds 4 in 1 along with. Finish your day on Sentosa Island on a spectacular note with the award-winning Wings of Time show.
Overnight stay at Singapore
`
            },
            {
                day: 4,
                title: "Singapore - Departure",
                description: `Morning after breakfast; you will be transferred to the airport for your flight back home to India 
Meals: Breakfast at the hotel 
`
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
    },
    singaporeDiscovery: {
        id: "5-days-singapore-discovery",
        packageName: "5 Days Singapore Discovery",
        days: 5,
        nights: 4,
        amount: 59000,
        dateStart: "01 March 2025",
        dateEnd: "26 July 2025",
        description: "Experience the vibrant city life of Singapore with our 5-day tour covering iconic attractions, cultural sites, and modern marvels.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4D3N Singapore Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Singapore",
                hotel: "3 Chancellor @ Orchard / Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Singapore",
                hotel: "4 Hotel Boss / Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Singapore",
                hotel: "5 Star Grand Copthorne Waterfront Hotel / Similar",
                roomType: "Superior Room"
            }
        ],
        tourSummary: [
            "Day 01: Arrival Singapore. Marina Bay Sands (Observation Deck) + Gardens by the Bay (Flower Dome + Cloud Forest) – SIC",
            "Day 02: Universal Studios + Sea Aquarium – SIC",
            "Day 03: Sentosa Island (One Way Cable Car, Madame Tussauds 4 in 1 & Wings of Time) – SIC",
            "Day 04: Bird paradise + Night Safari (Admission + Tram Ride) – SIC",
            "Day 05: Singapore - Departure"
        ],
        inclusions: [
            "4Night Accommodation in above mentioned hotel with Breakfast",
            "Breakfast at the hotel",
            "Airport Arrival and Departure on PVT Transfers",
            "All tour transfers on SIC Basis",
            "Garden by the bay (Flower dome + Cloud Forest) – SIC",
            "Marina Bay sand Sky park",
            "Sentosa (One way cable car + Madame Tussauds 4 in 1 Combo + Wings of Time) – SIC",
            "Universal Studio – SIC",
            "Bird paradise + Night safari (Admission + Tram Ride)"
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
                title: "Arrive Singapore + Marina Bay Sands (Observation Deck) + Gardens by the Bay (Flower Dome + Cloud Forest) – SIC",
                description:`Welcome to Singapore – also known as the Lion City
Upon arrival our representative assist you, pick up and transfer to your hotel. Check in at hotel (standard time approx. 1400/1500 hrs.).
Later we visit the Marina Bay Sands hotel (SIC) to enjoy panoramic view of the city from MBS Sky Park. Take a walk from MBS to Gardens by the Bay. We then visit Gardens by the Bay – Flower Dome and Super Tree Observation Deck. Enter the flower Dome, the largest glass greenhouse in the world. It replicates a mild, dry climate and features plants found in the Mediterranean and other semi-arid tropical regions. Admire a forest that boasts one of the world's largest indoor waterfalls at 35 meters tall. Step into a landscape of dramatic greenery, featuring vegetation that is typically native to habitats 2,000 meters above sea level.
Overnight stay at Singapore

`
            },
            {
                day: 2,
                title: "Universal Studios + Sea Aquarium - SIC",
                description: `Enjoy Breakfast in Hotel.
Visit the SEA Aquarium (SIC)
Enter and explore the marine realm of S.E.A. Aquarium, home to more than 100,000 marine animals of over 1,000 species, across 45 different habitats, each one as fascinating as the next. It's a marine life experience you wont forget.
Later, visit the Universal Studios (closed on Tuesday)
Start your journey to Hollywood movie theme park - Universal Studios™ forms part of Resorts World™ Sentosa. Among the park's many rides and exciting attractions are Battlestar Galactica™, the world's tallest pair of duelling roller coasters and Far Away Castle™, the first castle from the world of Shrek where you can experience the amazing Shrek 4-D™ attraction. One of the biggest spectacles in live entertainment is based on the movie Waterworld™. The action comes gushing to life in a tidal wave of death-defying stunts, explosions and thrilling action. Enjoy Jurassic Park Rapids Adventure™, Madagascar: A Crate Adventure™ and Revenge of the Mummy™, TRANSFORMERS The Ride and many more.
Overnight stay at Singapore

`
            },
            {
                day: 3,
                title: "Sentosa Island (One Way Cable Car, Madame Tussauds 4 in 1 & Wings of Time) – SIC",
                description: `Enjoy Breakfast in Hotel. 
Today enjoy Half day at the Sentosa Island (SIC). Sentosa is an island resort off Singapores southern coast, connected to the city by road, cable car, pedestrian boardwalk and monorail.
Enjoy the cable car ride and experience Madame Tussauds 4 in 1 along with. Finish your day on Sentosa Island on a spectacular note with the award-winning Wings of Time show.
Overnight stay at Singapore

`
            },
            {
                day: 4,
                title: "Bird Paradise + Night Safari (Admission + Tram Ride) – SIC",
                description: `Enjoy Breakfast in Hotel. 
Discover the enchanting Bird Paradise (SIC) nestled in Singapore, where nature aficionados and bird enthusiasts are treated to an immersive journey
Explore the Night Safari for an off-hour wildlife adventure to observe the Zoo’s nocturnal fauna
Overnight stay at Singapore

`
            },
            {
                day: 5,
                title: "Singapore - Departure",
                description: `Morning after breakfast; you will be transferred to the airport for your flight back home to India 
Meals: Breakfast at the hotel 
`
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
}; 