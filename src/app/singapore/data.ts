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
        dateStart: "01 May 2025",
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
            "/UGCImages/singapore/singapore/1.webp",
            "/UGCImages/singapore/singapore/2.webp",
            "/UGCImages/singapore/singapore/3.webp",
            "/UGCImages/singapore/singapore/4.webp"
        ],
        sightseeingSpots: [
            {
                name: "Gardens by the Bay",
                description: "Iconic nature park with Supertree Grove",
                image: "/UGCImages/singapore/sightseeings/1.png"
            },
            {
                name: "Marina Bay Sands",
                description: "Luxury integrated resort with infinity pool",
                image: "/UGCImages/singapore/sightseeings/3.png"
            },
            {
                name: "Universal Studios",
                description: "World-class theme park with exciting rides",
                image: "/UGCImages/singapore/sightseeings/2.png"
            }
        ],
        localFood: [
            {
                name: "Chili Crab",
                description: "Singapore's national dish",
                image: "/UGCImages/singapore/sightseeings/food/1.png",
                where: "JUMBO Seafood, Clarke Quay"
            },
            {
                name: "Hainanese Chicken Rice",
                description: "Popular local delicacy",
                image: "/UGCImages/singapore/sightseeings/food/2.png",
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
            bestTimeToVisit: "February to May (Dry season)",
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
        dateStart: "01 May 2025",
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
            "/UGCImages/singapore/singapore/5.webp",
            "/UGCImages/singapore/singapore/6.webp",
            "/UGCImages/singapore/singapore/7.webp",
            "/UGCImages/singapore/singapore/8.webp"
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
            bestTimeToVisit: "February to May (Dry season)",
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
    malaysiaTour: {
        id: "4-days-malaysia-tour",
        packageName: "4 Days Malaysia Tour",
        days: 4,
        nights: 3,
        amount: 35000,
        dateStart: "01 May 2025",
        dateEnd: "26 July 2025",
        description: "Experience the vibrant city life of Malaysia with our 4-day tour covering iconic attractions, cultural sites, and modern marvels.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4D3N Malaysia Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Malaysia",
                hotel: "3 Ramada Encore / Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Malaysia",
                hotel: "4 Vivatel KL or Similar ",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Day 01: Day 01: Arrive at Kuala Lumpur (En-Route Putrajaya 20Mins Photo-Stop) – PVT",
            "Day 02: Day 02: Genting Day Trip (En-Route Batu Caves 20Mins Photo-Stop) + Two Way Cable Car – PVT",
            "Day 03: KLCC Aquarium + KL Half day city Tour + KL Tower (Observation Deck) – PVT",
            "Day 04: Kuala Lumpur - Departure"
        ],
        inclusions: [
            "3Night Accommodation in above mentioned hotel with Breakfast",
            "Breakfast at the hotel",
            "Airport Arrival and Departure on PVT Transfers",
            "All tour transfers on SIC Basis",
            "Genting Highlands Day Trip",
            "KLCC Aquarium",
            "KL Tower (Observation Deck)",
            "Kuala Lumpur City Tour"
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
                title: "Arrive at Kuala Lumpur (En-Route Putrajaya 20Mins Photo-Stop) – PVT",
                description:`Welcome to Malaysia's capital city - Kuala Lumpur!
Upon arrival at Kuala Lumpur, pick up from airport. Enroute stop by at Putrajaya for 20 min photo stop only.
Check in hotel (Standard Check in time 1400hrs)
Overnight Stay at Kuala Lumpur Hotel


`
            },
            {
                day: 2,
                title: "Genting Day Trip (En-Route Batu Caves 20Mins Photo-Stop) + Two Way Cable Car – PVT",
                description: `Post breakfast, set out to explore Genting Highlands (PVT). It is an hours drive from Kuala Lumpur. With the landscape beautifully dotted with mountain peaks, Genting Highlands is also known as RWG (Resorts World Genting).
It is fashioned on Las Vegas- Asian style. The highlands include luxury hotels, casinos, and exciting shopping malls. It has a theme park in Pahang which is at a staggering height of 1800 meters on the peak of Gunung Ulu Kali. There is a lot more than the highlands offer.
BATU CAVES: Batu Caves, one of Kuala Lumpurs most frequented tourist attractions, is a limestone hill comprising three major caves and a number of smaller ones. Located approximately 11 kilometers to the north of Kuala Lumpur, this 100-year-old temple features idols and statues erected inside the main caves and around it. Incorporated with interior limestone formations said to be around 400 million years old, the temple is considered an important religious landmark by Hindus. Cathedral Cave – the largest and most popular cavern in Batu Caves – houses several Hindu shrines beneath its 


100-metre-high arched ceiling. At the foot of Batu Hill are two other cave temples – the Art Gallery Cave and Museum Cave – which houses numerous Hindu statues and paintings. 
Overnight Stay at Kuala Lumpur Hotel



`
            },
            {
                day: 3,
                title: "KLCC Aquarium + KL Half day city Tour + KL Tower (Observation Deck) – PVT",
                description: `Enjoy Breakfast in Hotel. 
Proceed for KLCC Aquarium (PVT)
Aquaria KLCC is a State of the art. Aquarium located in the heart of the city, beneath the Kuala Lumpur Convention center. From the evolution zone to the Living Ocean, take the longest underwater tunnel in Malaysia that showcases some iconic Malaysian species.
Enjoy an exciting KL Half day City Tour (PVT). This in an interesting tour, which unveils the beauty & charm of old & new Kuala Lumpur. Visit includes Kings Place, National Monument, Independence Square, Beryls Chocolate Factory and a photo stop at magnificent PETRONAS Twin Towers.  
Includes:
KL Tower Entrance 
Overnight stay at Kuala Lumpur hotel


`
            },
            {
                day: 4,
                title: "Kuala Lumpur - Departure",
                description: `Morning after breakfast; you will be transferred to the airport for your flight back home to India 
Meals: Breakfast at the hotel 


`
            },    
        ],
        images: [
            "/UGCImages/singapore/Malaysia/1.webp",
            "/UGCImages/singapore/Malaysia/2.webp",
            "/UGCImages/singapore/Malaysia/3.webp",
            "/UGCImages/singapore/Malaysia/4.webp"
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
                name: "Batu Caves",
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
            bestTimeToVisit: "February to May (Dry season)",
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
    langkawiTour: {
        id: "5-days-wonderful-langkawi",
        packageName: "5 Days Wonderful Langkawi",
        days: 5,
        nights: 4,
        amount: 25000,
        dateStart: "01 May 2025",
        dateEnd: "26 July 2025",
        description: "Experience the vibrant city life of Langkawi with our 5-day tour covering iconic attractions, cultural sites, and modern marvels.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "5D4N Langkawi Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Langkawi",
                hotel: "3 Hotel Grand Continental / Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Langkawi",
                hotel: "4 Century Langkasuka Resort Langkawi / Similar",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Day 01: Arrive at Langkawi – PVT",
            "Day 02: Island hopping tour – SIC",
            "Day 03: Sunset Dinner – SIC + Transfers – PVT",
            "Day 04: Leisure Day",
            "Day 05: Langkawi - Departure - PVT"
        ],
        inclusions: [
            "4 Night Accommodation in above mentioned hotel with Breakfast",
            "Breakfast at the hotel",
            "Airport Arrival and Departure on PVT Transfers",
            "All tour transfers on SIC Basis",
            "Island hopping tour",
            "Sunset Dinner",
            "Leisure Day"
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
                title: "Arrive at Langkawi – PVT",
                description:`Welcome to Langkawi!
Upon arrival at Langkawi, pick up from airport.
Check in hotel (Standard Check in time 1400hrs)
Overnight Stay at Langkawi Hotel


`
            },
            {
                day: 2,
                title: "Island hopping tour – SIC",
                description: `Enjoy Breakfast in Hotel. Proceed for island hopping tour.
Enjoy Langkawi Island Hopping Tour (4 hrs.) (SIC)Taking the trip by long boat, you will visit several famous islands such as the legendary TasikDayang Bunting (Pregnant Maiden Lake), go eagle watching at a nearby island and make a visit to PulauBerasBasah (Wet Rice Island). The last stop will be at a white sandy beach for you to relax and soak up the sun or splash around in the turquoise-blue waters off PulauBerasBasah. This is a perfect location to enjoy a relaxing picnic in the shade of the casaurina trees lining the beach.  (Notes: Bring along swim wear and towel)
Overnight accommodation @ Hotel, Langkawi





`
            },
            {
                day: 3,
                title: "Sunset Dinner – SIC + Transfers – PVT",
                description: `Enjoy Breakfast in Hotel. 
Sunset Dinner (4hrs) (SIC), the perfect gateway to finish the day and start the evening. Take a pleasant trip across the sea and you might witness the spectacular sight of the tropical sun cutting through the horizon into the sea. What better way to wind down by treating yourself to a dinner on a yacht and salt water Jacuzzi is quite an experience as well. The cruise includes an open bar and a BBQ dinner on board. Romantic sunset, Eagle watching, free flow bar, BBQ buffet Dinner / Cocktail.
Overnight accommodation @ Hotel, Langkawi



`
            },
            {
                day: 4,
                title: "Leisure Day",
                description: `Enjoy Breakfast in Hotel. 
Have a Leisure day and stay at Hotel.
`
            },    
            {
                day: 5,
                title: "Langkawi - Departure - PVT",
                description: `Morning after breakfast; you will be transferred to the airport for your flight back home to India 
Meals: Breakfast at the hotel 
Standard Check out time1200hrs
(Note: You can leave luggage at hotel concierge and return to hotel for the departure transfer)
Check out and meet driver at hotel lobby for transfer to LGK Airport for departure

`
            },    
        ],
        images: [
            "/UGCImages/singapore/Malaysia/5.webp",
            "/UGCImages/singapore/Malaysia/6.webp",
            "/UGCImages/singapore/Malaysia/7.webp",
            "/UGCImages/singapore/Malaysia/8.webp",
            
            
            
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
                name: "Batu Caves",
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
            bestTimeToVisit: "February to May (Dry season)",
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