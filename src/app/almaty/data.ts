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

export interface AlmatyPackage {
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

export const almatyPackages: Record<string, AlmatyPackage> = {
    almatyDiscovery: {
        id: "5-days-almaty-discovery",
        packageName: "5 Days Almaty Discovery",
        days: 5,
        nights: 4,
        amount: 59000,
        dateStart: "01 May 2025",
        dateEnd: "05 October 2025",
        description: "Explore the highlights of Almaty with our 5-day tour covering the city's most iconic locations, natural wonders, and cultural sites.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "5D4N Almaty Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Almaty",
                hotel: "4 star Reikartz Hotel",
                roomType: "Superior Room"
            }
        ],
        tourSummary: [
            "Day 1: Almaty - Arrival",
            "Day 2: Shymbulak ski resort ",
            "Day 3: Oi Qaragai Resort - Kok Tobe Park",
            "Day 4: Almarasan Valley ",
            "Day 5: Almaty - Departure"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double sharing",
            "Meals as specified in the itinerary",
            "Accommodation in the hotel with breakfast",
            "Airport pickup and drop-off",
            "Sightseeing tours in Almaty and its surroundings",
            "Car with a guide who speaks Arabic or English",
            "The program does not include cable car tickets, entrance fees to reserves and restaurants.",
            "Tour timings are from 10 AM to 7 PM.",
            "The program can be changed based on guest requests and weather conditions.",
            "The company reserves the right to change the guide/driver for valid reasons such as illness, emergencies, etc.",
            "The working hours of guides and drivers are limited from 10 AM to 7 PM. If tourists go on a trip in the afternoon, the trip ends at 7 PM.",
            "Eating in the car is not allowed (a $20 fine). Our company aims to provide the best service at a reasonable price, and keeping the car clean is important for customer satisfaction. Cleaning costs and the dissatisfaction of future customers can result from not adhering to this rule.",
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Personal expenses",
        ],
        itinerary: [
            {
                day: 1,
                title: "Almaty - Arrival",
                description: "Arrival at Almaty International Airport. Transfer to your hotel. Rest of the day at leisure."
            },
            {
                day: 2,
                title: "Shymbulak ski resort",
                description: "3 cable car stations, paragliding, rope adventures, cafes, and restaurants"
            },
            {
                day: 3,
                title: "Oi Qaragai Resort - Kok Tobe Park",
                description: "Oi Qaragai Resort (horse riding, zip line, rope park, kids' park, cable car) - Lunch \nKok Tobe Park (games for adults and children, cable car, upside-down house, zoo)."
            },
            {
                day: 4,
                title: "Almarasan Valley",
                description: "The local market “Green Bazar, Almarasan Valley (hot springs, riverside seating) - Lunch - Bird show President Park"
            },
            {
                day: 5,
                title: "Almaty - Departure",
                description: "Traditional center for showcasing Kazakh customs and traditions 'Hans' - Lunch - Issyk Lake - Dinner - Arbat Walking Street."
            }
        ],
        images: [
            "/UGCImages/Images4/almaty/almaty/1.webp",
            "/UGCImages/Images4/almaty/almaty/2.webp",
            "/UGCImages/Images4/almaty/almaty/3.webp",
            "/UGCImages/Images4/almaty/almaty/4.webp",
        ],
        sightseeingSpots: [
            {
                name: "Medeu Ice Rink",
                description: "World's highest Olympic-size skating rink",
                image: "/UGCImages/almaty/resort.png"
            }
        ],
        localFood: [
            {
                name: "Beshbarmak",
                description: "Traditional Kazakh meat dish with pasta and potatoes",
                image: "/UGCImages/almaty/food.png",
                where: "Local Restaurant, Almaty"
            }
        ],
        culture: [
            {
                title: "Kazakh Music",
                description: "Traditional dombra performances and folk songs",
                image: "/UGCImages/almaty/dance.png"
            },
            {
                title: "Kazakh Nature",
                description: "Explore the natural beauty of Kazakhstan.",
                image: "/UGCImages/almaty/beauty.png"
            },
            {
                title: "Kazakh Monuments",
                description: "Explore the historical monuments of Kazakhstan.",
                image: "/UGCImages/almaty/monuments.png"
            },
            {
                title: "Kazakh Statues",
                description: "Explore the historical statues of Kazakhstan.",
                image: "/UGCImages/almaty/statue.png"
            }
        ],
        departureDates: [
            { date: "Mar 2025 - September 2025" }
        ]
    },
    almatyWinter: {
        id: "4-days-almaty-winter",
        packageName: "4 Days Almaty Winter",
        days: 4,
        nights: 3,
        amount: 49000,
        dateStart: "01 May 2025",
        dateEnd: "05 October 2025",
        description: "Explore the highlights of Almaty with our 4-day tour covering the city's most iconic locations, natural wonders, and cultural sites.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4D3N Almaty Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Almaty",
                hotel: "4 star Shymbulak Resort",
                roomType: "Superior Room"
            }
        ],
        tourSummary: [
            "Day 1: Almaty - Arrival",
            "Day 2: Shymbulak ski resort ",
            "Day 3: Oi Qaragai Resort - Kok Tobe Park",
            "Day 4: Almaty - Departure"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double sharing",
            "Meals as specified in the itinerary",
            "Accommodation in the hotel with breakfast",
            "Airport pickup and drop-off",
            "Sightseeing tours in Almaty and its surroundings",
            "Car with a guide who speaks Arabic or English",
            "The program does not include cable car tickets, entrance fees to reserves and restaurants.",
            "Tour timings are from 10 AM to 7 PM.",
            "The program can be changed based on guest requests and weather conditions.",
            "The company reserves the right to change the guide/driver for valid reasons such as illness, emergencies, etc.",
            "The working hours of guides and drivers are limited from 10 AM to 7 PM. If tourists go on a trip in the afternoon, the trip ends at 7 PM.",
            "Eating in the car is not allowed (a $20 fine). Our company aims to provide the best service at a reasonable price, and keeping the car clean is important for customer satisfaction. Cleaning costs and the dissatisfaction of future customers can result from not adhering to this rule.",
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Personal expenses",
        ],
        itinerary: [
            {
                day: 1,
                title: "Almaty - Arrival",
                description: "Arrival at Almaty International Airport. Transfer to your hotel. Rest of the day at leisure."
            },
            {
                day: 2,
                title: "Shymbulak ski resort",
                description: "3 cable car stations, paragliding, rope adventures, cafes, and restaurants. Central Park - Dinner"
            },
            {
                day: 3,
                title: "Oi Qaragai Resort - Kok Tobe Park",
                description: "Oi Qaragai Resort (horse riding, zip line, rope park, kids' park, cable car) - Lunch \nKok Tobe Park (games for adults and children, cable car, upside-down house, zoo)."
            },
            {
                day: 4,
                title: "Almarasan Valley - Departure",
                description: "The local market “Green Bazar, Almarasan Valley (hot springs, riverside seating) - Lunch - Bird show President Park"
            },
        ],
        images: [
            "/UGCImages/Images4/almaty/almaty/5.webp",
            "/UGCImages/Images4/almaty/almaty/6.webp",
            "/UGCImages/Images4/almaty/almaty/7.webp",
            "/UGCImages/Images4/almaty/almaty/8.webp",
        ],
        sightseeingSpots: [
            {
                name: "Medeu Ice Rink",
                description: "World's highest Olympic-size skating rink",
                image: "/UGCImages/almaty/resort.png"
            }
        ],
        localFood: [
            {
                name: "Beshbarmak",
                description: "Traditional Kazakh meat dish with pasta and potatoes",
                image: "/UGCImages/almaty/food.png",
                where: "Local Restaurant, Almaty"
            }
        ],
        culture: [
            {
                title: "Kazakh Music",
                description: "Traditional dombra performances and folk songs",
                image: "/UGCImages/almaty/dance.png"
            },
            {
                title: "Kazakh Nature",
                description: "Explore the natural beauty of Kazakhstan.",
                image: "/UGCImages/almaty/beauty.png"
            },
            {
                title: "Kazakh Monuments",
                description: "Explore the historical monuments of Kazakhstan.",
                image: "/UGCImages/almaty/monuments.png"
            },
            {
                title: "Kazakh Statues",
                description: "Explore the historical statues of Kazakhstan.",
                image: "/UGCImages/almaty/statue.png"
            }
        ],
        departureDates: [
            { date: "Mar 2025 - September 2025" }
        ]
    },
    almatyExplore: {
        id: "6-days-almaty-explore",
        packageName: "6 Days Almaty Explore",
        days: 6,
        nights: 5,
        amount: 69000,
        dateStart: "01 May 2025",
        dateEnd: "05 October 2025",
        description: "Explore the highlights of Almaty with our 6-day tour covering the city's most iconic locations, natural wonders, and cultural sites.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "6D5N Almaty Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Almaty",
                hotel: "4 star Reikartz Hotel",
                roomType: "Superior Room"
            },
            {
                city: "Almaty",
                hotel: "4 star Shymbulak Resort",
                roomType: "Superior Room"
            }
        ],
        tourSummary: [
            "Day 1: Almaty - Arrival",
            "Day 2: Shymbulak ski resort ",
            "Day 3: Oi Qaragai Resort - Kok Tobe Park",
            "Day 4: Almarasan Valley ",
            "Day 5: Green Bazar - Martyrs Park",
            "Day 6: Aq Bulak Mountain Resort - Departure"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double sharing",
            "Meals as specified in the itinerary",
            "Accommodation in the hotel with breakfast",
            "Airport pickup and drop-off",
            "Sightseeing tours in Almaty and its surroundings",
            "Car with a guide who speaks Arabic or English",
            "The program does not include cable car tickets, entrance fees to reserves and restaurants.",
            "Tour timings are from 10 AM to 7 PM.",
            "The program can be changed based on guest requests and weather conditions.",
            "The company reserves the right to change the guide/driver for valid reasons such as illness, emergencies, etc.",
            "The working hours of guides and drivers are limited from 10 AM to 7 PM. If tourists go on a trip in the afternoon, the trip ends at 7 PM.",
            "Eating in the car is not allowed (a $20 fine). Our company aims to provide the best service at a reasonable price, and keeping the car clean is important for customer satisfaction. Cleaning costs and the dissatisfaction of future customers can result from not adhering to this rule.",
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Personal expenses",
        ],
        itinerary: [
            {
                day: 1,
                title: "Almaty - Arrival",
                description: "Arrival at Almaty International Airport. Transfer to your hotel. Rest of the day at leisure."
            },
            {
                day: 2,
                title: "Shymbulak ski resort",
                description: "3 cable car stations, paragliding, rope adventures, cafes, and restaurants"
            },
            {
                day: 3,
                title: "Oi Qaragai Resort - Kok Tobe Park",
                description: "Oi Qaragai Resort (horse riding, zip line, rope park, kids' park, cable car) - Lunch \nKok Tobe Park (games for adults and children, cable car, upside-down house, zoo)."
            },
            {
                day: 4,
                title: "Almarasan Valley",
                description: "The local market “Green Bazar, Almarasan Valley (hot springs, riverside seating) - Lunch - Bird show President Park"
            },
            {
                day: 5,
                title: "Green Bazar - Martyrs Park",
                description: "Green Bazar (local market, souvenirs, handicrafts, souvenirs, local products) - Lunch - Martyrs Park (monument, fountains, playground, cafes, restaurants)."
            },
            {
                day: 6,
                title: "Aq Bulak Mountain Resort - Departure",
                description: `Traditional center for showcasing Kazakh customs and traditions 'Hans' (demonstration of traditional bread making, mare's milk tasting, horse show, lunch, archery).
                Aq Bulak Mountain Resort (2 cable car stations, nature hiking).`
            }
        ],
        images: [
            "/UGCImages/Images4/almaty/almaty/9.webp",
            "/UGCImages/Images4/almaty/almaty/10.webp",
            "/UGCImages/Images4/almaty/almaty/11.webp",
            "/UGCImages/Images4/almaty/almaty/12.webp",
            "/UGCImages/Images4/almaty/almaty/13.webp",

        ],
        sightseeingSpots: [
            {
                name: "Medeu Ice Rink",
                description: "World's highest Olympic-size skating rink",
                image: "/UGCImages/almaty/resort.png"
            }
        ],
        localFood: [
            {
                name: "Beshbarmak",
                description: "Traditional Kazakh meat dish with pasta and potatoes",
                image: "/UGCImages/almaty/food.png",
                where: "Local Restaurant, Almaty"
            }
        ],
        culture: [
            {
                title: "Kazakh Music",
                description: "Traditional dombra performances and folk songs",
                image: "/UGCImages/almaty/dance.png"
            },
            {
                title: "Kazakh Nature",
                description: "Explore the natural beauty of Kazakhstan.",
                image: "/UGCImages/almaty/beauty.png"
            },
            {
                title: "Kazakh Monuments",
                description: "Explore the historical monuments of Kazakhstan.",
                image: "/UGCImages/almaty/monuments.png"
            },
            {
                title: "Kazakh Statues",
                description: "Explore the historical statues of Kazakhstan.",
                image: "/UGCImages/almaty/statue.png"
            }
        ],
        departureDates: [
            { date: "September 2025 - September 2025" }
        ]
    },
};
