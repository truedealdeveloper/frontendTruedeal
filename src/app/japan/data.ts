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
    image: string;
}

export interface DepartureDate {
    date: string;
    availability?: string;
    price?: number;
}

export interface Experience {
    title: string;
    image: string;
}

interface BatchInfo {
    month: string;
    dates: string[];
    availableSeats: number;
}

interface BatchDetails {
    currentBatch: string;
    remainingSlots: number;
    monthlyBatches: BatchInfo[];
}

interface FlightInfo {
    name: string;
    departureCity: string;
    arrivalCity: string;
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
}

interface FlightDetails {
    airlines: FlightInfo[];
}

export interface JapanPackage {
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

    departureDates?: DepartureDate[];
    experiences: Experience[];
    batchDetails?: BatchDetails;
    flightDetails?: FlightDetails;
}

export const japanPackages: Record<string, JapanPackage> = {
    japanDeluxe: {
        id: "9-days-japan-deluxe",
        packageName: "9 Days Japan Deluxe Experience",
        days: 9,
        nights: 8,
        amount: 199000,
        dateStart: "01 March 2025",
        dateEnd: "30 November 2025",
        description: "Experience the ultimate Japan adventure with this deluxe 8-night tour covering Tokyo, Osaka, Kyoto, and Mount Fuji. Enjoy premium accommodations, bullet train travel, and exclusive cultural experiences.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing",
            arrivalDate: "Contact Us",
            duration: "8N9D Japan Deluxe Experience",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Tokyo",
                hotel: "5 Star Hotel",
                roomType: "Deluxe/Twin Room"
            },
            {
                city: "Osaka",
                hotel: "5 Star Hotel",
                roomType: "Deluxe/Twin Room"
            },
            {
                city: "Kyoto",
                hotel: "5 Star Hotel",
                roomType: "Deluxe/Twin Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Tokyo",
            "Day 2: Tokyo City Tour & Skytree",
            "Day 3: Mount Fuji Excursion",
            "Day 4: Disneyland Tokyo",
            "Day 5: Tokyo to Osaka via Shinkansen",
            "Day 6: Universal Studios Osaka",
            "Day 7: Kyoto Cultural Experience",
            "Day 8: Nara & Traditional Villages",
            "Day 9: Departure from Osaka"
        ],
        inclusions: [
            "Deluxe accommodation in Tokyo, Osaka, and Kyoto",
            "Private airport transfers with English-speaking guide",
            "Shinkansen bullet train tickets (Tokyo to Osaka)",
            "All sightseeing tours with professional guides",
            "Universal Studios and Disneyland entry tickets",
            "Mount Fuji excursion with lunch",
            "Traditional tea ceremony experience",
            "All intercity transfers",
            "24-hour English-speaking assistance",
            "Breakfast at all hotels"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Japan visa fees",
            "Lunch and dinner (except mentioned)",
            "Personal expenses and shopping",
            "Optional tours and activities",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: `Welcome to Japan! Arrive at Tokyo Airport where you'll be greeted by our English-speaking guide. Private transfer to your deluxe hotel in Tokyo. Check-in and relax after your journey.

Evening at leisure to explore nearby areas or rest.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/1.webp"
            },
            {
                day: 2,
                title: "Tokyo City Tour & Skytree",
                description: `Start your day with a comprehensive Tokyo city tour. Visit the iconic Tokyo Skytree for panoramic city views, explore the historic Sensoji Temple in Asakusa, and stroll through the vibrant Nakamise shopping street.

Continue to the modern Akihabara electronics district and experience the bustling atmosphere of Shibuya Crossing.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/2.webp"
            },
            {
                day: 3,
                title: "Mount Fuji Excursion",
                description: `Full-day excursion to Mount Fuji (weather permitting). Visit the Mt. Fuji 5th Station for spectacular views of Japan's most famous landmark. Explore Owakudani Valley with its volcanic hot springs and sulfur vents.

Enjoy a scenic cruise on Lake Ashinoko and experience the beautiful Hakone region. Lunch included.

Return to Tokyo for overnight stay.`,
                image: "/IMAGES/japan/1/3.webp"
            },
            {
                day: 4,
                title: "Disneyland Tokyo",
                description: `Spend a magical day at Tokyo Disneyland, one of the world's most popular theme parks. Enjoy thrilling rides, meet beloved Disney characters, and experience the unique Japanese Disney atmosphere.

Full day at the park with various attractions, parades, and shows.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/4.webp"
            },
            {
                day: 5,
                title: "Tokyo to Osaka via Shinkansen",
                description: `Experience the famous Japanese bullet train (Shinkansen) as you travel from Tokyo to Osaka at speeds up to 320 km/h. Upon arrival in Osaka, visit Osaka Castle Park and explore the historic castle grounds.

Continue to the vibrant Dotonbori district for shopping and local atmosphere. Visit Namba Yasaka Shrine and experience the bustling Kuromon Ichiba Market.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/1.webp"
            },
            {
                day: 6,
                title: "Universal Studios Osaka",
                description: `Full day at Universal Studios Japan, featuring world-class attractions including The Wizarding World of Harry Potter, Jurassic Park, and other exciting themed areas.

Experience thrilling rides, shows, and attractions in this world-renowned theme park.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/2.webp"
            },
            {
                day: 7,
                title: "Kyoto Cultural Experience",
                description: `Travel to Kyoto, the ancient capital of Japan. Visit the famous Fushimi Inari Taisha with its thousands of vermillion torii gates. Explore Kiyomizu-dera Temple and the historic Higashiyama district.

Participate in a traditional tea ceremony and learn about Japanese culture. Walk through the picturesque Gion district where you might spot geishas.

Overnight stay in Kyoto.`,
                image: "/IMAGES/japan/3/1.webp"
            },
            {
                day: 8,
                title: "Nara & Traditional Villages",
                description: `Day trip to Nara, Japan's first permanent capital. Visit Nara Park and meet the famous sacred deer. Explore Todaiji Temple, home to one of Japan's largest bronze Buddha statuses.

Visit Kasuga Taisha Shrine with its thousands of stone and bronze lanterns. Experience traditional Japanese village life and local crafts.

Return to Osaka for overnight stay.`,
                image: "/IMAGES/japan/3/2.webp"
            },
            {
                day: 9,
                title: "Departure from Osaka",
                description: `Check out from your hotel and enjoy some last-minute shopping or sightseeing. Private transfer to Osaka Airport for your departure flight.

End of your memorable Japan journey.`,
                image: "/IMAGES/japan/4/2.webp"
            }
        ],
        images: [
            "/UGCImages/japan/cards/1.png",
            "/IMAGES/japan/1/2.webp",
            "/IMAGES/japan/1/3.webp",
            "/IMAGES/japan/1/4.webp",
            "/IMAGES/japan/2/1.webp",
            "/IMAGES/japan/2/2.webp"
        ],
        additionalInfo: {
            highlights: [
                "Tokyo Skytree with panoramic views",
                "Mount Fuji 5th Station excursion",
                "Disneyland Tokyo full day",
                "Shinkansen bullet train experience",
                "Universal Studios Osaka",
                "Fushimi Inari Taisha shrine",
                "Traditional tea ceremony",
                "Nara Park and sacred deer"
            ],
            bestTimeToVisit: "March to May (Spring) for cherry blossoms and October to November (Autumn) for fall colors offer the most pleasant weather.",
            cuisine: [
                "Authentic Sushi and Sashimi",
                "Traditional Ramen varieties",
                "Tempura and Tonkatsu",
                "Osaka specialty Takoyaki",
                "Kyoto Kaiseki dining",
                "Japanese BBQ (Yakiniku)"
            ],
            accommodation: {
                type: "5-Star Deluxe Hotels",
                amenities: [
                    "Premium WiFi",
                    "Luxury amenities",
                    "Concierge services",
                    "Spa facilities",
                    "Fine dining restaurants",
                    "City view rooms"
                ]
            },
            transportation: {
                type: "Shinkansen + Private Deluxe Transfers",
                features: [
                    "First-class bullet train seats",
                    "English-speaking guides",
                    "Luxury vehicle transfers",
                    "Priority boarding assistance"
                ]
            },
            visaInfo: {
                requirement: "Required for Indian citizens",
                duration: "Up to 90 days",
                cost: "Varies by processing time",
                documents: [
                    "Valid passport (6+ months)",
                    "Completed visa application",
                    "Recent passport photos",
                    "Detailed travel itinerary",
                    "Bank statements (3 months)",
                    "Employment certificate"
                ]
            }
        },
        experiences: [
            {
                title: "Tokyo Skytree",
                image: "/IMAGES/japan/experience/1.webp"
            },
            {
                title: "Mount Fuji",
                image: "/IMAGES/japan/experience/2.webp"
            },
            {
                title: "Disneyland Tokyo",
                image: "/IMAGES/japan/experience/3.webp"
            },
            {
                title: "Universal Studios Osaka",
                image: "/IMAGES/japan/experience/4.webp"
            }
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Japan Airlines",
                    departureCity: "Mumbai",
                    arrivalCity: "Tokyo",
                    flightNumber: "JL 60",
                    departureTime: "02:30",
                    arrivalTime: "12:30",
                    duration: "10h 00m"
                },
                {
                    name: "All Nippon Airways",
                    departureCity: "Delhi",
                    arrivalCity: "Tokyo",
                    flightNumber: "NH 844",
                    departureTime: "01:45",
                    arrivalTime: "11:45",
                    duration: "10h 00m"
                }
            ]
        }
    },
    japanEssentials: {
        id: "6-days-japan-essentials",
        packageName: "6 Days Japan Essentials",
        days: 6,
        nights: 5,
        amount: 125000,
        dateStart: "01 March 2025",
        dateEnd: "30 November 2025",
        description: "Perfect introduction to Japan covering Tokyo and Osaka highlights. Experience modern cities, traditional culture, and iconic attractions in this compact 5-night adventure.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing",
            arrivalDate: "Contact Us",
            duration: "5N6D Japan Essentials",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Tokyo",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Osaka",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Tokyo",
            "Day 2: Tokyo Sightseeing & Skytree",
            "Day 3: Disneyland Tokyo",
            "Day 4: Tokyo to Osaka via Shinkansen",
            "Day 5: Universal Studios Osaka",
            "Day 6: Departure from Osaka"
        ],
        inclusions: [
            "Accommodation in Tokyo and Osaka",
            "Private airport transfers",
            "Tokyo Skytree entry ticket",
            "Disneyland Tokyo entry ticket",
            "Universal Studios Osaka entry ticket",
            "Shinkansen bullet train tickets",
            "All intercity transfers",
            "English-speaking assistance"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Japan visa fees",
            "Meals",
            "Personal expenses",
            "Optional tours"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: `Arrive at Tokyo Airport and transfer to your hotel. Check-in and relax. Evening at leisure to explore nearby areas.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/1.webp"
            },
            {
                day: 2,
                title: "Tokyo Sightseeing & Skytree",
                description: `Visit Tokyo Skytree for panoramic city views, explore Sensoji Temple in Asakusa, and walk through Nakamise shopping street. Experience the vibrant Shibuya Crossing.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/2.webp"
            },
            {
                day: 3,
                title: "Disneyland Tokyo",
                description: `Full day at Tokyo Disneyland enjoying rides, shows, and Disney magic. Experience the unique Japanese Disney atmosphere.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/4.webp"
            },
            {
                day: 4,
                title: "Tokyo to Osaka via Shinkansen",
                description: `Travel by bullet train to Osaka. Visit Osaka Castle Park and explore Dotonbori district for shopping and local culture.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/1.webp"
            },
            {
                day: 5,
                title: "Universal Studios Osaka",
                description: `Full day at Universal Studios Japan with world-class attractions and entertainment including Harry Potter themed areas.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/2.webp"
            },
            {
                day: 6,
                title: "Departure from Osaka",
                description: `Check out and transfer to Osaka Airport for departure.`,
                image: "/IMAGES/japan/4/2.webp"
            }
        ],
        images: [
            "/UGCImages/japan/cards/2.png",
            "/IMAGES/japan/1/2.webp",
            "/IMAGES/japan/1/4.webp",
            "/IMAGES/japan/2/1.webp",
            "/IMAGES/japan/2/2.webp"
        ],
        additionalInfo: {
            highlights: [
                "Tokyo Skytree",
                "Sensoji Temple",
                "Disneyland Tokyo",
                "Shinkansen experience",
                "Universal Studios Osaka",
                "Dotonbori district"
            ],
            bestTimeToVisit: "Year-round destination with spring and autumn being most pleasant.",
            cuisine: [
                "Sushi and Sashimi",
                "Ramen",
                "Takoyaki",
                "Street food"
            ],
            accommodation: {
                type: "4-Star Hotels",
                amenities: [
                    "Free WiFi",
                    "Air Conditioning",
                    "Private Bathroom",
                    "Daily Housekeeping"
                ]
            },
            transportation: {
                type: "Shinkansen + Private Transfers",
                features: [
                    "High-speed rail",
                    "Airport transfers",
                    "Comfortable seating"
                ]
            },
            visaInfo: {
                requirement: "Required for Indian citizens",
                duration: "Up to 90 days",
                cost: "Varies by processing time",
                documents: [
                    "Valid passport",
                    "Visa application form",
                    "Recent photographs",
                    "Travel itinerary"
                ]
            }
        },
        experiences: [
            {
                title: "Tokyo Skytree",
                image: "/IMAGES/japan/experience/1.webp"
            },
            {
                title: "Disneyland Tokyo",
                image: "/IMAGES/japan/experience/3.webp"
            },
            {
                title: "Universal Studios Osaka",
                image: "/IMAGES/japan/experience/4.webp"
            }
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Japan Airlines",
                    departureCity: "Mumbai",
                    arrivalCity: "Tokyo",
                    flightNumber: "JL 60",
                    departureTime: "02:30",
                    arrivalTime: "12:30",
                    duration: "10h 00m"
                }
            ]
        }
    },
    japanDiscovery: {
        id: "7-days-japan-discovery",
        packageName: "7 Days Japan Discovery",
        days: 7,
        nights: 6,
        amount: 155000,
        dateStart: "01 March 2025",
        dateEnd: "30 November 2025",
        description: "Discover the best of Japan with Tokyo, Osaka, and Kyoto exploration. Experience modern cities, ancient temples, and cultural heritage in this comprehensive 6-night journey.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing",
            arrivalDate: "Contact Us",
            duration: "6N7D Japan Discovery",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Tokyo",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Osaka",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Kyoto",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Tokyo",
            "Day 2: Tokyo Sightseeing & Mount Fuji",
            "Day 3: Disneyland Tokyo",
            "Day 4: Tokyo to Osaka via Shinkansen",
            "Day 5: Universal Studios Osaka",
            "Day 6: Kyoto Cultural Tour",
            "Day 7: Departure from Osaka"
        ],
        inclusions: [
            "Accommodation in Tokyo, Osaka, and Kyoto",
            "Private airport transfers",
            "Mount Fuji excursion",
            "Tokyo Skytree entry ticket",
            "Disneyland Tokyo entry ticket",
            "Universal Studios Osaka entry ticket",
            "Kyoto temple visits",
            "Shinkansen bullet train tickets",
            "All intercity transfers",
            "English-speaking assistance"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Japan visa fees",
            "Meals (except mentioned)",
            "Personal expenses",
            "Optional tours"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: `Arrive at Tokyo Airport and transfer to your hotel. Check-in and relax. Evening free to explore nearby areas.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/1.webp"
            },
            {
                day: 2,
                title: "Tokyo Sightseeing & Mount Fuji",
                description: `Visit Tokyo Skytree and Sensoji Temple. Weather permitting, excursion to Mount Fuji 5th Station for stunning views of Japan's iconic mountain.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/3.webp"
            },
            {
                day: 3,
                title: "Disneyland Tokyo",
                description: `Full day at Tokyo Disneyland experiencing magical rides, shows, and Disney characters in the unique Japanese Disney environment.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/4.webp"
            },
            {
                day: 4,
                title: "Tokyo to Osaka via Shinkansen",
                description: `Experience the famous bullet train journey to Osaka. Visit Osaka Castle Park and explore the vibrant Dotonbori district.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/1.webp"
            },
            {
                day: 5,
                title: "Universal Studios Osaka",
                description: `Full day at Universal Studios Japan featuring The Wizarding World of Harry Potter and other world-class attractions.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/2.webp"
            },
            {
                day: 6,
                title: "Kyoto Cultural Tour",
                description: `Travel to Kyoto and visit Fushimi Inari Taisha with its famous torii gates, Kiyomizu-dera Temple, and traditional districts.

Overnight stay in Kyoto.`,
                image: "/IMAGES/japan/3/1.webp"
            },
            {
                day: 7,
                title: "Departure from Osaka",
                description: `Return to Osaka and transfer to airport for departure.`,
                image: "/IMAGES/japan/4/2.webp"
            }
        ],
        images: [
            "/UGCImages/japan/cards/3.png",
            "/IMAGES/japan/1/3.webp",
            "/IMAGES/japan/1/4.webp",
            "/IMAGES/japan/2/1.webp",
            "/IMAGES/japan/2/2.webp",
            "/IMAGES/japan/3/1.webp"
        ],
        additionalInfo: {
            highlights: [
                "Tokyo Skytree",
                "Mount Fuji excursion",
                "Disneyland Tokyo",
                "Shinkansen experience",
                "Universal Studios Osaka",
                "Fushimi Inari Taisha",
                "Kyoto temples"
            ],
            bestTimeToVisit: "Spring (March-May) and Autumn (October-November) for best weather.",
            cuisine: [
                "Sushi and Sashimi",
                "Ramen varieties",
                "Tempura",
                "Takoyaki",
                "Kyoto cuisine"
            ],
            accommodation: {
                type: "4-Star Hotels",
                amenities: [
                    "Free WiFi",
                    "Air Conditioning",
                    "Private Bathroom",
                    "Daily Housekeeping",
                    "Room service"
                ]
            },
            transportation: {
                type: "Shinkansen + Private Transfers",
                features: [
                    "High-speed rail travel",
                    "Airport transfers",
                    "Comfortable seating",
                    "Intercity transfers"
                ]
            },
            visaInfo: {
                requirement: "Required for Indian citizens",
                duration: "Up to 90 days",
                cost: "Varies by processing time",
                documents: [
                    "Valid passport",
                    "Visa application form",
                    "Recent photographs",
                    "Travel itinerary",
                    "Bank statements"
                ]
            }
        },
        experiences: [
            {
                title: "Tokyo Skytree",
                image: "/IMAGES/japan/experience/1.webp"
            },
            {
                title: "Mount Fuji",
                image: "/IMAGES/japan/experience/2.webp"
            },
            {
                title: "Disneyland Tokyo",
                image: "/IMAGES/japan/experience/3.webp"
            },
            {
                title: "Universal Studios Osaka",
                image: "/IMAGES/japan/experience/4.webp"
            }
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Japan Airlines",
                    departureCity: "Mumbai",
                    arrivalCity: "Tokyo",
                    flightNumber: "JL 60",
                    departureTime: "02:30",
                    arrivalTime: "12:30",
                    duration: "10h 00m"
                },
                {
                    name: "All Nippon Airways",
                    departureCity: "Delhi",
                    arrivalCity: "Tokyo",
                    flightNumber: "NH 844",
                    departureTime: "01:45",
                    arrivalTime: "11:45",
                    duration: "10h 00m"
                }
            ]
        }
    },
    japanComplete: {
        id: "8-days-japan-complete",
        packageName: "8 Days Japan Complete Experience",
        days: 8,
        nights: 7,
        amount: 175000,
        dateStart: "01 March 2025",
        dateEnd: "30 November 2025",
        description: "Complete Japan experience covering Tokyo, Osaka, Kyoto, and Nara. Includes Mount Fuji, theme parks, cultural sites, and traditional experiences in this comprehensive 7-night tour.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing",
            arrivalDate: "Contact Us",
            duration: "7N8D Japan Complete Experience",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Tokyo",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Osaka",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Kyoto",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Tokyo",
            "Day 2: Tokyo Sightseeing & Skytree",
            "Day 3: Mount Fuji Excursion",
            "Day 4: Disneyland Tokyo",
            "Day 5: Tokyo to Osaka via Shinkansen",
            "Day 6: Universal Studios Osaka",
            "Day 7: Kyoto & Nara Cultural Tour",
            "Day 8: Departure from Osaka"
        ],
        inclusions: [
            "Accommodation in Tokyo, Osaka, and Kyoto",
            "Private airport transfers",
            "Tokyo Skytree entry ticket",
            "Mount Fuji excursion with lunch",
            "Disneyland Tokyo entry ticket",
            "Universal Studios Osaka entry ticket",
            "Kyoto and Nara temple visits",
            "Shinkansen bullet train tickets",
            "All intercity transfers",
            "English-speaking assistance"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Japan visa fees",
            "Meals (except mentioned)",
            "Personal expenses",
            "Optional tours",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: `Arrive at Tokyo Airport and transfer to your hotel. Check-in and relax. Evening free to explore nearby areas or rest.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/1.webp"
            },
            {
                day: 2,
                title: "Tokyo Sightseeing & Skytree",
                description: `Comprehensive Tokyo city tour including Tokyo Skytree for panoramic views, historic Sensoji Temple, traditional Nakamise shopping street, and modern Akihabara district.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/2.webp"
            },
            {
                day: 3,
                title: "Mount Fuji Excursion",
                description: `Full-day excursion to Mount Fuji (weather permitting). Visit Mt. Fuji 5th Station, Owakudani Valley, and enjoy Lake Ashinoko cruise. Lunch included.

Return to Tokyo for overnight stay.`,
                image: "/IMAGES/japan/1/3.webp"
            },
            {
                day: 4,
                title: "Disneyland Tokyo",
                description: `Full day at Tokyo Disneyland experiencing magical rides, shows, parades, and Disney characters in the unique Japanese Disney atmosphere.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/4.webp"
            },
            {
                day: 5,
                title: "Tokyo to Osaka via Shinkansen",
                description: `Experience the famous bullet train to Osaka. Visit Osaka Castle Park, explore Dotonbori district, and experience local culture at Kuromon Market.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/1.webp"
            },
            {
                day: 6,
                title: "Universal Studios Osaka",
                description: `Full day at Universal Studios Japan featuring The Wizarding World of Harry Potter, Jurassic Park, and other world-class attractions.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/2.webp"
            },
            {
                day: 7,
                title: "Kyoto & Nara Cultural Tour",
                description: `Visit Kyoto's Fushimi Inari Taisha and Kiyomizu-dera Temple. Continue to Nara Park to meet the sacred deer and visit Todaiji Temple.

Overnight stay in Kyoto.`,
                image: "/IMAGES/japan/3/1.webp"
            },
            {
                day: 8,
                title: "Departure from Osaka",
                description: `Return to Osaka and transfer to airport for departure. Some time for last-minute shopping.`,
                image: "/IMAGES/japan/4/2.webp"
            }
        ],
        images: [
            "/UGCImages/japan/cards/4.png",
            "/IMAGES/japan/1/2.webp",
            "/IMAGES/japan/1/3.webp",
            "/IMAGES/japan/1/4.webp",
            "/IMAGES/japan/2/1.webp",
            "/IMAGES/japan/2/2.webp"
        ],
        additionalInfo: {
            highlights: [
                "Tokyo Skytree panoramic views",
                "Mount Fuji 5th Station",
                "Disneyland Tokyo",
                "Shinkansen bullet train",
                "Universal Studios Osaka",
                "Fushimi Inari Taisha",
                "Nara Park deer",
                "Kyoto temples"
            ],
            bestTimeToVisit: "Spring (March-May) for cherry blossoms and Autumn (October-November) for fall colors.",
            cuisine: [
                "Sushi and Sashimi",
                "Traditional Ramen",
                "Tempura",
                "Takoyaki",
                "Kyoto Kaiseki",
                "Japanese sweets"
            ],
            accommodation: {
                type: "4-Star Hotels",
                amenities: [
                    "Free WiFi",
                    "Air Conditioning",
                    "Private Bathroom",
                    "Daily Housekeeping",
                    "Room service",
                    "Concierge"
                ]
            },
            transportation: {
                type: "Shinkansen + Private Transfers",
                features: [
                    "High-speed rail travel",
                    "Airport transfers",
                    "Comfortable seating",
                    "All intercity transfers"
                ]
            },
            visaInfo: {
                requirement: "Required for Indian citizens",
                duration: "Up to 90 days",
                cost: "Varies by processing time",
                documents: [
                    "Valid passport",
                    "Visa application form",
                    "Recent photographs",
                    "Detailed travel itinerary",
                    "Bank statements"
                ]
            }
        },
        experiences: [
            {
                title: "Tokyo Skytree",
                image: "/IMAGES/japan/experience/1.webp"
            },
            {
                title: "Mount Fuji",
                image: "/IMAGES/japan/experience/2.webp"
            },
            {
                title: "Disneyland Tokyo",
                image: "/IMAGES/japan/experience/3.webp"
            },
            {
                title: "Universal Studios Osaka",
                image: "/IMAGES/japan/experience/4.webp"
            }
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Japan Airlines",
                    departureCity: "Mumbai",
                    arrivalCity: "Tokyo",
                    flightNumber: "JL 60",
                    departureTime: "02:30",
                    arrivalTime: "12:30",
                    duration: "10h 00m"
                },
                {
                    name: "All Nippon Airways",
                    departureCity: "Delhi",
                    arrivalCity: "Tokyo",
                    flightNumber: "NH 844",
                    departureTime: "01:45",
                    arrivalTime: "11:45",
                    duration: "10h 00m"
                }
            ]
        }
    },
    japanPremium: {
        id: "8-days-japan-premium",
        packageName: "8 Days Japan Premium Adventure",
        days: 8,
        nights: 7,
        amount: 185000,
        dateStart: "01 March 2025",
        dateEnd: "30 November 2025",
        description: "Premium Japan adventure with enhanced experiences including traditional tea ceremony, hot springs, and exclusive cultural activities. Perfect blend of modern attractions and authentic Japanese culture.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing",
            arrivalDate: "Contact Us",
            duration: "7N8D Japan Premium Adventure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Tokyo",
                hotel: "5 Star Hotel",
                roomType: "Superior/Twin Room"
            },
            {
                city: "Hakone",
                hotel: "Traditional Ryokan",
                roomType: "Japanese Style Room"
            },
            {
                city: "Osaka",
                hotel: "5 Star Hotel",
                roomType: "Superior/Twin Room"
            },
            {
                city: "Kyoto",
                hotel: "Boutique Hotel",
                roomType: "Premium/Twin Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Tokyo",
            "Day 2: Tokyo Highlights & Traditional Experience",
            "Day 3: Mount Fuji & Hakone Hot Springs",
            "Day 4: Hakone to Tokyo - Disneyland",
            "Day 5: Tokyo to Osaka via Shinkansen",
            "Day 6: Universal Studios Osaka",
            "Day 7: Kyoto Cultural Immersion",
            "Day 8: Departure from Osaka"
        ],
        inclusions: [
            "Luxury accommodation including Ryokan stay",
            "Private airport transfers",
            "Tokyo Skytree entry ticket",
            "Traditional tea ceremony experience",
            "Mount Fuji excursion with lunch",
            "Hakone hot springs (onsen) experience",
            "Disneyland Tokyo entry ticket",
            "Universal Studios Osaka entry ticket",
            "Kyoto temple visits with guide",
            "Traditional Japanese dinner at Ryokan",
            "Shinkansen bullet train tickets",
            "All intercity transfers",
            "English-speaking professional guides"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Japan visa fees",
            "Lunch and dinner (except mentioned)",
            "Personal expenses and shopping",
            "Optional tours and activities",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: `Welcome to Japan! Arrive at Tokyo Airport and transfer to your luxury hotel. Check-in and rest. Evening at leisure to explore the sophisticated neighborhood.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/1.webp"
            },
            {
                day: 2,
                title: "Tokyo Highlights & Traditional Experience",
                description: `Visit Tokyo Skytree for breathtaking views, explore historic Sensoji Temple and Nakamise street. Experience a traditional tea ceremony to understand Japanese culture.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/2.webp"
            },
            {
                day: 3,
                title: "Mount Fuji & Hakone Hot Springs",
                description: `Journey to Mount Fuji 5th Station (weather permitting) for spectacular views. Continue to Hakone for a traditional Ryokan experience with hot springs (onsen). Traditional Japanese dinner included.

Overnight stay in traditional Ryokan.`,
                image: "/IMAGES/japan/1/3.webp"
            },
            {
                day: 4,
                title: "Hakone to Tokyo - Disneyland",
                description: `Return to Tokyo and spend the day at Tokyo Disneyland experiencing magical attractions, shows, and the unique Japanese Disney atmosphere.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/4.webp"
            },
            {
                day: 5,
                title: "Tokyo to Osaka via Shinkansen",
                description: `Experience the world-famous bullet train to Osaka. Upon arrival, visit Osaka Castle Park and explore the vibrant Dotonbori entertainment district.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/1.webp"
            },
            {
                day: 6,
                title: "Universal Studios Osaka",
                description: `Full day at Universal Studios Japan featuring The Wizarding World of Harry Potter, Jurassic Park, and cutting-edge attractions.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/2.webp"
            },
            {
                day: 7,
                title: "Kyoto Cultural Immersion",
                description: `Deep cultural experience in Kyoto visiting Fushimi Inari Taisha with thousands of torii gates, Kiyomizu-dera Temple, and traditional Gion district. Walk through historic streets and learn about geisha culture.

Overnight stay in Kyoto.`,
                image: "/IMAGES/japan/3/1.webp"
            },
            {
                day: 8,
                title: "Departure from Osaka",
                description: `Return to Osaka for departure. Time for last-minute shopping and souvenir hunting before airport transfer.`,
                image: "/IMAGES/japan/4/2.webp"
            }
        ],
        images: [
            "/UGCImages/japan/cards/5.png",
            "/IMAGES/japan/1/2.webp",
            "/IMAGES/japan/1/3.webp",
            "/IMAGES/japan/1/4.webp",
            "/IMAGES/japan/2/1.webp",
            "/IMAGES/japan/2/2.webp"
        ],
        additionalInfo: {
            highlights: [
                "Tokyo Skytree with premium access",
                "Traditional tea ceremony",
                "Mount Fuji 5th Station",
                "Authentic Ryokan & hot springs",
                "Disneyland Tokyo",
                "Shinkansen bullet train",
                "Universal Studios Osaka",
                "Kyoto cultural immersion",
                "Gion district exploration"
            ],
            bestTimeToVisit: "Spring (March-May) for cherry blossoms and Autumn (October-November) for fall colors offer the most beautiful scenery.",
            cuisine: [
                "Kaiseki dinner at Ryokan",
                "Premium Sushi and Sashimi",
                "Traditional Ramen",
                "Tempura",
                "Takoyaki",
                "Kyoto vegetarian cuisine",
                "Japanese tea and sweets"
            ],
            accommodation: {
                type: "5-Star Hotels + Traditional Ryokan",
                amenities: [
                    "Luxury amenities",
                    "Premium WiFi",
                    "Concierge services",
                    "Hot springs (onsen)",
                    "Traditional Japanese experience",
                    "Fine dining options"
                ]
            },
            transportation: {
                type: "Shinkansen + Premium Private Transfers",
                features: [
                    "First-class bullet train",
                    "Luxury vehicle transfers",
                    "Professional English guides",
                    "Priority boarding assistance"
                ]
            },
            visaInfo: {
                requirement: "Required for Indian citizens",
                duration: "Up to 90 days",
                cost: "Varies by processing time",
                documents: [
                    "Valid passport (6+ months)",
                    "Completed visa application",
                    "Recent passport photos",
                    "Detailed travel itinerary",
                    "Bank statements (3 months)",
                    "Employment verification"
                ]
            }
        },
        experiences: [
            {
                title: "Tokyo Skytree",
                image: "/IMAGES/japan/experience/1.webp"
            },
            {
                title: "Mount Fuji",
                image: "/IMAGES/japan/experience/2.webp"
            },
            {
                title: "Disneyland Tokyo",
                image: "/IMAGES/japan/experience/3.webp"
            },
            {
                title: "Universal Studios Osaka",
                image: "/IMAGES/japan/experience/4.webp"
            }
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Japan Airlines",
                    departureCity: "Mumbai",
                    arrivalCity: "Tokyo",
                    flightNumber: "JL 60",
                    departureTime: "02:30",
                    arrivalTime: "12:30",
                    duration: "10h 00m"
                },
                {
                    name: "All Nippon Airways",
                    departureCity: "Delhi",
                    arrivalCity: "Tokyo",
                    flightNumber: "NH 844",
                    departureTime: "01:45",
                    arrivalTime: "11:45",
                    duration: "10h 00m"
                }
            ]
        }
    },
    japanCultural: {
        id: "10-days-japan-cultural",
        packageName: "10 Days Japan Cultural Tour",
        days: 10,
        nights: 9,
        amount: 170500,
        dateStart: "01 March 2025",
        dateEnd: "30 November 2025",
        description: "Explore the enchanting cities of Japan, from the vibrant culture of Tokyo to the scenic beauty of Kyoto, Osaka, and Mount Fuji. This 9-night journey offers a blend of modern attractions, historic sites, and serene landscapes.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing",
            arrivalDate: "Contact Us",
            duration: "9N10D Japan Cultural Tour",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Tokyo",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Osaka",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Kyoto",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Tokyo",
            "Day 2: Tokyo Sightseeing",
            "Day 3: Tokyo - Mount Fuji - Tokyo",
            "Day 4: Disneyland Tokyo",
            "Day 5: Tokyo to Osaka by Shinkansen",
            "Day 6: Universal Studios Osaka",
            "Day 7: Osaka to Kyoto",
            "Day 8: Kyoto to Nara Park",
            "Day 9: Free Day in Osaka",
            "Day 10: Transfer to Osaka Airport"
        ],
        inclusions: [
            "Accommodation in Tokyo, Osaka, and Kyoto",
            "Private transfers on arrival and departure (driver only)",
            "Sightseeing tours in Tokyo, Osaka, Kyoto, and Nara",
            "Shinkansen train travel from Tokyo to Osaka",
            "Universal Studios and Disneyland entry tickets",
            "All transfers between cities and attractions",
            "24-hour English-speaking assistance"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Visa fees",
            "Personal expenses",
            "Meals not mentioned in inclusions",
            "Optional tours and experiences"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Tokyo",
                description: `Arrive at Tokyo Airport and transfer to your hotel by private vehicle (driver only). Check-in and relax.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/1.webp"
            },
            {
                day: 2,
                title: "Tokyo Sightseeing",
                description: `Visit Tokyo Skytree, Sensoji Temple, Nakamiyo Commercial Street, and Akihabara for a day full of exploration.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/2.webp"
            },
            {
                day: 3,
                title: "Tokyo - Mount Fuji - Tokyo",
                description: `Weather permitting, visit Mt. Fuji 5th Station, Owakudani Valley, and enjoy a cruise on Lake Ashinochi.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/3.webp"
            },
            {
                day: 4,
                title: "Disneyland Tokyo",
                description: `Spend a magical day at Disneyland Tokyo, enjoying all the exciting rides and attractions.

Overnight stay in Tokyo.`,
                image: "/IMAGES/japan/1/4.webp"
            },
            {
                day: 5,
                title: "Tokyo to Osaka by Shinkansen",
                description: `Travel by Shinkansen to Osaka. Visit Osaka Castle Park, Namba Yasaka Shrine, Shinsaibashi, Dotonbori, and Kuroemon Market.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/1.webp"
            },
            {
                day: 6,
                title: "Universal Studios Osaka",
                description: `Enjoy a thrilling day at Universal Studios Osaka, experiencing world-class attractions and entertainment.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/2/2.webp"
            },
            {
                day: 7,
                title: "Osaka to Kyoto",
                description: `Travel by van to Kyoto (2 hours) and explore Fushimi Inari Taisha, Kiyomizu-dera, Kiyomizaka, Yazaka Shrine, and Hanami Lane.

Overnight stay in Kyoto.`,
                image: "/IMAGES/japan/3/1.webp"
            },
            {
                day: 8,
                title: "Kyoto to Nara Park",
                description: `Visit Nara Park and the Todaiji Temple, followed by a visit to Haruhi Daisha. Return to Osaka by van.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/3/2.webp"
            },
            {
                day: 9,
                title: "Free Day in Osaka",
                description: `Enjoy a free day on your own to explore Osaka or relax.

Overnight stay in Osaka.`,
                image: "/IMAGES/japan/4/1.webp"
            },
            {
                day: 10,
                title: "Transfer to Osaka Airport",
                description: `Transfer to Osaka Airport for your return flight.`,
                image: "/IMAGES/japan/4/2.webp"
            }
        ],
        images: [
            "/UGCImages/japan/cards/1.png",
            "/IMAGES/japan/1/2.webp",
            "/IMAGES/japan/1/3.webp",
            "/IMAGES/japan/1/4.webp",
            "/IMAGES/japan/2/1.webp",
            "/IMAGES/japan/2/2.webp"
        ],
        additionalInfo: {
            highlights: [
                "Tokyo Skytree",
                "Sensoji Temple",
                "Mount Fuji",
                "Disneyland Tokyo",
                "Universal Studios Osaka",
                "Fushimi Inari Taisha",
                "Nara Park"
            ],
            bestTimeToVisit: "March to May (Spring) and October to November (Autumn) offer the best weather and cherry blossoms or autumn colors.",
            cuisine: [
                "Sushi and Sashimi",
                "Ramen",
                "Tempura",
                "Takoyaki",
                "Okonomiyaki",
                "Traditional Kaiseki"
            ],
            accommodation: {
                type: "4-Star Hotels",
                amenities: [
                    "Free WiFi",
                    "Air Conditioning",
                    "Private Bathroom",
                    "Daily Housekeeping",
                    "Concierge Service"
                ]
            },
            transportation: {
                type: "Shinkansen (Bullet Train) + Private Transfers",
                features: [
                    "High-speed rail travel",
                    "Private airport transfers",
                    "Comfortable seating",
                    "On-time reliability"
                ]
            },
            visaInfo: {
                requirement: "Required for Indian citizens",
                duration: "Up to 90 days",
                cost: "Varies by processing time",
                documents: [
                    "Valid passport",
                    "Visa application form",
                    "Recent photographs",
                    "Travel itinerary",
                    "Bank statements"
                ]
            }
        },
        experiences: [
            {
                title: "Tokyo Skytree",
                image: "/IMAGES/japan/experience/1.webp"
            },
            {
                title: "Mount Fuji",
                image: "/IMAGES/japan/experience/2.webp"
            },
            {
                title: "Disneyland Tokyo",
                image: "/IMAGES/japan/experience/3.webp"
            },
            {
                title: "Universal Studios Osaka",
                image: "/IMAGES/japan/experience/4.webp"
            }
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Japan Airlines",
                    departureCity: "Mumbai",
                    arrivalCity: "Tokyo",
                    flightNumber: "JL 60",
                    departureTime: "02:30",
                    arrivalTime: "12:30",
                    duration: "10h 00m"
                },
                {
                    name: "All Nippon Airways",
                    departureCity: "Delhi",
                    arrivalCity: "Tokyo",
                    flightNumber: "NH 844",
                    departureTime: "01:45",
                    arrivalTime: "11:45",
                    duration: "10h 00m"
                }
            ]
        }
    }
};
