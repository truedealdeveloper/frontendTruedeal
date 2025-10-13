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

export interface HoneymoonPackage {
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

export const honeymoonPackages: Record<string, HoneymoonPackage> = {
    maldives3N: {
        id: "3-nights-maldives-honeymoon",
        packageName: "3 Nights Maldives Romantic Escape",
        days: 4,
        nights: 3,
        amount: 40000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Perfect romantic getaway to Maldives with crystal-clear waters and pristine beaches. Enjoy intimate moments in paradise with your loved one.",
        groupDetails: {
            pax: "Couple",
            rooms: "Honeymoon Suite",
            arrivalDate: "Flexible",
            duration: "3N4D Maldives Romantic Escape",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Maldives",
                hotel: "4 Star Beach Resort",
                roomType: "Beach Villa"
            }
        ],
        tourSummary: [
            "Day 1: Arrival & Romantic Welcome",
            "Day 2: Water Sports & Beach Relaxation",
            "Day 3: Sunset Cruise & Candlelight Dinner",
            "Day 4: Departure"
        ],
        inclusions: [
            "3 nights accommodation in Beach Villa",
            "Daily breakfast",
            "Airport speedboat transfers",
            "Welcome drink",
            "Sunset cruise",
            "One candlelight dinner",
            "Complimentary spa session for couple"
        ],
        exclusions: [
            "International flights",
            "Lunch and dinner (except mentioned)",
            "Travel insurance",
            "Water sports activities",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Romantic Welcome",
                description: "Arrive at Male Airport and transfer to your resort via speedboat. Check into your beach villa and enjoy a romantic welcome drink. Relax on the pristine beach and enjoy the turquoise waters.\n\nEvening at leisure to explore the resort.\n\nOvernight stay in Maldives.",
                image: "/webImage/maldives/1.webp"
            },
            {
                day: 2,
                title: "Water Sports & Beach Relaxation",
                description: "Spend the day at leisure enjoying the beautiful beaches. Optional water sports activities like snorkeling, diving, or kayaking available at extra cost.\n\nRelax by the beach or pool and soak in the romantic atmosphere.\n\nOvernight stay in Maldives.",
                image: "/webImage/maldives/2.webp"
            },
            {
                day: 3,
                title: "Sunset Cruise & Candlelight Dinner",
                description: "Enjoy a romantic sunset cruise watching dolphins play in the crystal waters. Return to resort for a special candlelight dinner on the beach.\n\nComplimentary couple spa session to relax and rejuvenate.\n\nOvernight stay in Maldives.",
                image: "/webImage/maldives/3.webp"
            },
            {
                day: 4,
                title: "Departure",
                description: "Enjoy your final breakfast in paradise. Check out and transfer to Male Airport for your onward journey with beautiful memories.",
                image: "/webImage/maldives/4.webp"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85",
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=85",
            "https://images.unsplash.com/photo-1589508065213-b7e843ce3f3f?w=1200&q=85",
            "https://images.unsplash.com/photo-1580541631950-7282082b53ed?w=1200&q=85"
        ],
        additionalInfo: {
            highlights: [
                "Beach villa accommodation",
                "Sunset cruise",
                "Candlelight dinner",
                "Couple spa session",
                "Crystal clear waters",
                "White sand beaches"
            ],
            bestTimeToVisit: "November to April for best weather and calm seas",
            cuisine: [
                "Fresh seafood",
                "International cuisine",
                "Tropical fruits",
                "Romantic dining"
            ],
            accommodation: {
                type: "4 Star Beach Resort",
                amenities: [
                    "Private beach access",
                    "Swimming pool",
                    "Spa facilities",
                    "Water sports center",
                    "Beachfront dining"
                ]
            },
            transportation: {
                type: "Speedboat transfers",
                features: [
                    "Airport to resort transfers",
                    "Scenic boat ride",
                    "Comfortable seating"
                ]
            },
            visaInfo: {
                requirement: "Free visa on arrival for Indians",
                duration: "30 days",
                cost: "Free",
                documents: [
                    "Valid passport (6+ months)",
                    "Return flight tickets",
                    "Hotel booking confirmation"
                ]
            }
        },
        experiences: [
            {
                title: "Beach Romance",
                image: "/webImage/maldives/1.webp"
            },
            {
                title: "Water Activities",
                image: "/webImage/maldives/2.webp"
            },
            {
                title: "Sunset Cruise",
                image: "/webImage/maldives/3.webp"
            }
        ]
    },
    maldives4N: {
        id: "4-nights-maldives-honeymoon",
        packageName: "4 Nights Maldives Paradise Honeymoon",
        days: 5,
        nights: 4,
        amount: 52000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Extended romantic escape to Maldives with luxury amenities and exclusive experiences. Create unforgettable memories with your partner in this tropical paradise.",
        groupDetails: {
            pax: "Couple",
            rooms: "Honeymoon Suite",
            arrivalDate: "Flexible",
            duration: "4N5D Maldives Paradise",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Maldives",
                hotel: "4 Star Deluxe Resort",
                roomType: "Water Villa"
            }
        ],
        tourSummary: [
            "Day 1: Arrival & Welcome",
            "Day 2: Water Sports Adventure",
            "Day 3: Island Hopping & Snorkeling",
            "Day 4: Couple Spa & Romantic Dinner",
            "Day 5: Departure"
        ],
        inclusions: [
            "4 nights in Water Villa",
            "Daily breakfast",
            "Airport transfers",
            "Welcome champagne",
            "One island hopping tour",
            "Snorkeling equipment",
            "Two candlelight dinners",
            "Couple spa session",
            "Sunset cruise"
        ],
        exclusions: [
            "International flights",
            "Lunch (except mentioned)",
            "Travel insurance",
            "Scuba diving",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Welcome",
                description: "Arrive at Male Airport and speedboat transfer to resort. Check into your overwater villa with direct ocean access. Welcome champagne and tropical fruits.\n\nEvening leisure time to enjoy your private deck.\n\nOvernight stay in water villa.",
                image: "/webImage/maldives/1.webp"
            },
            {
                day: 2,
                title: "Water Sports Adventure",
                description: "Full day to enjoy various water activities including kayaking, paddleboarding, and swimming. Relax on the beach or by your private deck.\n\nEvening at leisure.\n\nOvernight stay in water villa.",
                image: "/webImage/maldives/2.webp"
            },
            {
                day: 3,
                title: "Island Hopping & Snorkeling",
                description: "Embark on an island hopping tour visiting local islands and pristine beaches. Snorkel in crystal-clear waters with colorful marine life.\n\nEvening candlelight dinner on the beach.\n\nOvernight stay in water villa.",
                image: "/webImage/maldives/3.webp"
            },
            {
                day: 4,
                title: "Couple Spa & Romantic Dinner",
                description: "Indulge in a relaxing couple spa session with ocean views. Enjoy sunset cruise watching dolphins. Special romantic dinner under the stars.\n\nOvernight stay in water villa.",
                image: "/webImage/maldives/4.webp"
            },
            {
                day: 5,
                title: "Departure",
                description: "Final breakfast with ocean views. Check out and transfer to Male Airport with cherished memories.",
                image: "/webImage/maldives/5.webp"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=85",
            "https://images.unsplash.com/photo-1589508065213-b7e843ce3f3f?w=1200&q=85",
            "https://images.unsplash.com/photo-1580541631950-7282082b53ed?w=1200&q=85",
            "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=1200&q=85"
        ],
        additionalInfo: {
            highlights: [
                "Water villa with ocean access",
                "Island hopping tour",
                "Snorkeling experience",
                "Couple spa treatments",
                "Multiple romantic dinners",
                "Sunset cruise"
            ],
            bestTimeToVisit: "November to April",
            cuisine: [
                "Fresh seafood",
                "International buffet",
                "Asian specialties",
                "Romantic beach dining"
            ],
            accommodation: {
                type: "4 Star Deluxe Resort",
                amenities: [
                    "Overwater villas",
                    "Private deck",
                    "Infinity pool",
                    "Spa center",
                    "Multiple restaurants"
                ]
            },
            transportation: {
                type: "Speedboat",
                features: [
                    "Premium transfers",
                    "Island hopping boats"
                ]
            },
            visaInfo: {
                requirement: "Free visa on arrival",
                duration: "30 days",
                cost: "Free",
                documents: [
                    "Valid passport",
                    "Return tickets",
                    "Hotel confirmation"
                ]
            }
        },
        experiences: [
            {
                title: "Water Villa",
                image: "/webImage/maldives/1.webp"
            },
            {
                title: "Snorkeling",
                image: "/webImage/maldives/2.webp"
            },
            {
                title: "Beach Dining",
                image: "/webImage/maldives/3.webp"
            }
        ]
    },
    maldives5N: {
        id: "5-nights-maldives-luxury",
        packageName: "5 Nights Maldives Luxury Honeymoon",
        days: 6,
        nights: 5,
        amount: 65000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Luxury honeymoon package with premium amenities, exclusive experiences, and ultimate romance in the Maldives.",
        groupDetails: {
            pax: "Couple",
            rooms: "Premium Water Villa",
            arrivalDate: "Flexible",
            duration: "5N6D Maldives Luxury",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Maldives",
                hotel: "5 Star Luxury Resort",
                roomType: "Premium Water Villa"
            }
        ],
        tourSummary: [
            "Day 1: Luxury Arrival",
            "Day 2-3: Water Activities & Relaxation",
            "Day 4: Underwater Restaurant Experience",
            "Day 5: Private Island Picnic",
            "Day 6: Departure"
        ],
        inclusions: [
            "5 nights Premium Water Villa",
            "All meals (breakfast, lunch, dinner)",
            "Seaplane transfers",
            "Multiple spa sessions",
            "Underwater restaurant dinner",
            "Private island picnic",
            "Water sports activities",
            "Sunset cruise",
            "Photography session"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Scuba diving certification courses",
            "Personal shopping"
        ],
        itinerary: [
            {
                day: 1,
                title: "Luxury Arrival",
                description: "Arrive Male and scenic seaplane transfer to luxury resort. Premium water villa check-in with champagne welcome. Enjoy infinity pool and private deck.\n\nRomantic welcome dinner.\n\nOvernight in premium villa.",
                image: "/webImage/maldives/1.webp"
            },
            {
                day: 2,
                title: "Water Activities Day",
                description: "Morning snorkeling session. Afternoon water sports including jet skiing, windsurfing. Evening spa treatment for couple.\n\nDinner at overwater restaurant.\n\nOvernight in premium villa.",
                image: "/webImage/maldives/2.webp"
            },
            {
                day: 3,
                title: "Relaxation & Romance",
                description: "Day at leisure enjoying resort facilities. Optional diving experience. Sunset dolphin cruise. Beachside barbecue dinner.\n\nOvernight in premium villa.",
                image: "/webImage/maldives/3.webp"
            },
            {
                day: 4,
                title: "Underwater Restaurant",
                description: "Morning island hopping tour. Afternoon couples massage. Evening exclusive underwater restaurant experience dining with marine life.\n\nOvernight in premium villa.",
                image: "/webImage/maldives/4.webp"
            },
            {
                day: 5,
                title: "Private Island Picnic",
                description: "Full day private island picnic with gourmet lunch. Snorkeling in pristine waters. Professional photography session. Final romantic dinner under stars.\n\nOvernight in premium villa.",
                image: "/webImage/maldives/5.webp"
            },
            {
                day: 6,
                title: "Departure",
                description: "Leisurely breakfast. Check out and seaplane transfer to Male Airport.",
                image: "/webImage/maldives/6.webp"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1200&q=85",
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=85",
            "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1200&q=85",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=85"
        ],
        additionalInfo: {
            highlights: [
                "Premium water villa",
                "Seaplane transfers",
                "All-inclusive meals",
                "Underwater restaurant",
                "Private island picnic",
                "Multiple spa treatments",
                "Photography session"
            ],
            bestTimeToVisit: "Year-round destination, best November-April",
            cuisine: [
                "Gourmet international",
                "Fresh seafood",
                "Underwater dining",
                "Private beach dining"
            ],
            accommodation: {
                type: "5 Star Luxury Resort",
                amenities: [
                    "Premium water villas",
                    "Private pools",
                    "Butler service",
                    "Underwater restaurant",
                    "World-class spa"
                ]
            },
            transportation: {
                type: "Seaplane",
                features: [
                    "Scenic transfers",
                    "Aerial views",
                    "Premium service"
                ]
            },
            visaInfo: {
                requirement: "Free visa on arrival",
                duration: "30 days",
                cost: "Free",
                documents: [
                    "Valid passport",
                    "Return tickets",
                    "Hotel confirmation"
                ]
            }
        },
        experiences: [
            {
                title: "Luxury Villa",
                image: "/webImage/maldives/1.webp"
            },
            {
                title: "Water Sports",
                image: "/webImage/maldives/2.webp"
            },
            {
                title: "Private Dining",
                image: "/webImage/maldives/3.webp"
            }
        ]
    },
    bali3N: {
        id: "3-nights-bali-honeymoon",
        packageName: "3 Nights Bali Romantic Getaway",
        days: 4,
        nights: 3,
        amount: 42000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Romantic escape to Bali with stunning beaches, rice terraces, and rich culture. Perfect for couples seeking adventure and relaxation.",
        groupDetails: {
            pax: "Couple",
            rooms: "Honeymoon Suite",
            arrivalDate: "Flexible",
            duration: "3N4D Bali Romantic Getaway",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Ubud",
                hotel: "4 Star Resort",
                roomType: "Valley View Suite"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Bali",
            "Day 2: Ubud Cultural Tour",
            "Day 3: Beach Day & Sunset",
            "Day 4: Departure"
        ],
        inclusions: [
            "3 nights accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Ubud tour with guide",
            "Tanah Lot sunset tour",
            "One romantic dinner",
            "Couple spa session"
        ],
        exclusions: [
            "International flights",
            "Lunch and dinner (except mentioned)",
            "Travel insurance",
            "Water sports",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bali",
                description: "Arrive at Ngurah Rai Airport and transfer to your resort in Ubud. Check into valley view suite with stunning rice terrace views. Welcome drink and flower decoration.\n\nEvening at leisure.\n\nOvernight in Ubud.",
                image: "/IMAGES/bali/1.webp"
            },
            {
                day: 2,
                title: "Ubud Cultural Tour",
                description: "Visit Tegalalang Rice Terraces, Sacred Monkey Forest, and Ubud Palace. Explore traditional art markets. Evening couple spa session with Balinese massage.\n\nOvernight in Ubud.",
                image: "/IMAGES/bali/2.webp"
            },
            {
                day: 3,
                title: "Beach Day & Sunset",
                description: "Morning at leisure. Afternoon visit to Tanah Lot Temple for spectacular sunset views. Romantic beachside dinner with ocean views.\n\nOvernight in Ubud.",
                image: "/IMAGES/bali/3.webp"
            },
            {
                day: 4,
                title: "Departure",
                description: "Final breakfast overlooking rice terraces. Check out and transfer to airport.",
                image: "/IMAGES/bali/4.webp"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85",
            "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=85",
            "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&q=85",
            "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=85"
        ],
        additionalInfo: {
            highlights: [
                "Rice terrace views",
                "Cultural temples",
                "Monkey forest",
                "Tanah Lot sunset",
                "Couple spa",
                "Romantic dinner"
            ],
            bestTimeToVisit: "April to October for dry weather",
            cuisine: [
                "Balinese specialties",
                "Fresh seafood",
                "International cuisine",
                "Tropical fruits"
            ],
            accommodation: {
                type: "4 Star Resort",
                amenities: [
                    "Valley views",
                    "Infinity pool",
                    "Spa facilities",
                    "Restaurant",
                    "Free WiFi"
                ]
            },
            transportation: {
                type: "Private car",
                features: [
                    "Airport transfers",
                    "Sightseeing tours",
                    "English-speaking driver"
                ]
            },
            visaInfo: {
                requirement: "Visa on arrival for Indians",
                duration: "30 days",
                cost: "IDR 500,000 (~₹2,500)",
                documents: [
                    "Valid passport (6+ months)",
                    "Return flight tickets",
                    "Hotel booking"
                ]
            }
        },
        experiences: [
            {
                title: "Rice Terraces",
                image: "/IMAGES/bali/1.webp"
            },
            {
                title: "Temple Tours",
                image: "/IMAGES/bali/2.webp"
            },
            {
                title: "Beach Sunset",
                image: "/IMAGES/bali/3.webp"
            }
        ]
    },
    bali4N: {
        id: "4-nights-bali-paradise",
        packageName: "4 Nights Bali Paradise Honeymoon",
        days: 5,
        nights: 4,
        amount: 54000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Explore Bali's beauty with beaches, culture, and adventure. Perfect blend of relaxation and exploration for honeymooners.",
        groupDetails: {
            pax: "Couple",
            rooms: "Honeymoon Suite",
            arrivalDate: "Flexible",
            duration: "4N5D Bali Paradise",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Ubud & Seminyak",
                hotel: "4 Star Resorts",
                roomType: "Premium Suites"
            }
        ],
        tourSummary: [
            "Day 1: Arrival",
            "Day 2: Ubud Cultural Experience",
            "Day 3: Water Temple & Coffee Plantation",
            "Day 4: Beach Day in Seminyak",
            "Day 5: Departure"
        ],
        inclusions: [
            "4 nights accommodation (2N Ubud + 2N Seminyak)",
            "Daily breakfast",
            "All transfers",
            "Full day Ubud tour",
            "Water temple tour",
            "Coffee plantation visit",
            "Two romantic dinners",
            "Couple spa sessions",
            "Beach club access"
        ],
        exclusions: [
            "International flights",
            "Lunch (except mentioned)",
            "Travel insurance",
            "Water sports activities",
            "Shopping expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival",
                description: "Airport pickup and transfer to Ubud resort. Check-in and relax. Welcome massage session for couple.\n\nEvening at leisure.\n\nOvernight in Ubud.",
                image: "/IMAGES/bali/1.webp"
            },
            {
                day: 2,
                title: "Ubud Cultural Experience",
                description: "Visit Tegalalang Rice Terraces, Monkey Forest, Ubud Palace, and art markets. Afternoon at leisure. Evening romantic dinner at restaurant with valley views.\n\nOvernight in Ubud.",
                image: "/IMAGES/bali/2.webp"
            },
            {
                day: 3,
                title: "Water Temple & Coffee Plantation",
                description: "Morning visit to Tirta Empul Water Temple. Stop at coffee plantation to try famous Luwak coffee. Afternoon transfer to Seminyak beach resort.\n\nOvernight in Seminyak.",
                image: "/IMAGES/bali/3.webp"
            },
            {
                day: 4,
                title: "Beach Day in Seminyak",
                description: "Full day at leisure on Seminyak Beach. Complimentary beach club access. Optional water sports. Visit Tanah Lot for sunset. Beachfront romantic dinner.\n\nOvernight in Seminyak.",
                image: "/IMAGES/bali/4.webp"
            },
            {
                day: 5,
                title: "Departure",
                description: "Leisurely breakfast. Check out and airport transfer.",
                image: "/IMAGES/bali/5.webp"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=85",
            "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&q=85",
            "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=85",
            "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=1200&q=85"
        ],
        additionalInfo: {
            highlights: [
                "Dual location stay",
                "Cultural temples",
                "Rice terraces",
                "Coffee plantation",
                "Beach club access",
                "Multiple spa sessions",
                "Romantic dinners"
            ],
            bestTimeToVisit: "April to October",
            cuisine: [
                "Authentic Balinese",
                "International buffet",
                "Fresh seafood",
                "Beach dining"
            ],
            accommodation: {
                type: "4 Star Resorts",
                amenities: [
                    "Multiple locations",
                    "Swimming pools",
                    "Spa facilities",
                    "Beach access",
                    "Fine dining"
                ]
            },
            transportation: {
                type: "Private car with driver",
                features: [
                    "All transfers included",
                    "Sightseeing tours",
                    "Flexible schedule"
                ]
            },
            visaInfo: {
                requirement: "Visa on arrival",
                duration: "30 days",
                cost: "IDR 500,000",
                documents: [
                    "Valid passport",
                    "Return tickets",
                    "Hotel vouchers"
                ]
            }
        },
        experiences: [
            {
                title: "Ubud Culture",
                image: "/IMAGES/bali/1.webp"
            },
            {
                title: "Temples",
                image: "/IMAGES/bali/2.webp"
            },
            {
                title: "Beach Life",
                image: "/IMAGES/bali/3.webp"
            }
        ]
    },
    bali5N: {
        id: "5-nights-bali-complete",
        packageName: "5 Nights Bali Complete Honeymoon",
        days: 6,
        nights: 5,
        amount: 68000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Complete Bali experience covering culture, beaches, and adventure. Ultimate honeymoon with diverse experiences and luxury stays.",
        groupDetails: {
            pax: "Couple",
            rooms: "Premium Suites",
            arrivalDate: "Flexible",
            duration: "5N6D Bali Complete",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Ubud",
                hotel: "5 Star Resort",
                roomType: "Pool Villa"
            },
            {
                city: "Seminyak",
                hotel: "5 Star Beach Resort",
                roomType: "Ocean View Suite"
            }
        ],
        tourSummary: [
            "Day 1: Arrival",
            "Day 2: Ubud Cultural Tour",
            "Day 3: North Bali Waterfalls",
            "Day 4: Transfer to Seminyak",
            "Day 5: Beach & Water Sports",
            "Day 6: Departure"
        ],
        inclusions: [
            "5 nights luxury accommodation",
            "Daily breakfast",
            "All transfers and tours",
            "Cultural site entries",
            "Water temple visits",
            "Waterfall tours",
            "Beach club access",
            "Water sports package",
            "Three romantic dinners",
            "Multiple spa sessions",
            "Photography session"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Scuba diving",
            "Shopping",
            "Tips"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival",
                description: "Airport reception with flower garlands. Transfer to luxury Ubud resort with private pool villa. Welcome drink and spa session. Flower bed decoration.\n\nRomantic dinner at resort.\n\nOvernight in pool villa.",
                image: "/IMAGES/bali/1.webp"
            },
            {
                day: 2,
                title: "Ubud Cultural Tour",
                description: "Full day guided tour of Tegalalang Rice Terraces, Sacred Monkey Forest, Ubud Palace, traditional villages, and art markets. Coffee plantation visit.\n\nEvening traditional dance performance.\n\nOvernight in pool villa.",
                image: "/IMAGES/bali/2.webp"
            },
            {
                day: 3,
                title: "North Bali Waterfalls",
                description: "Early morning to Sekumpul Waterfall, most beautiful in Bali. Visit Ulun Danu Beratan Water Temple. Stop at Handara Gate. Afternoon couple spa.\n\nOvernight in pool villa.",
                image: "/IMAGES/bali/3.webp"
            },
            {
                day: 4,
                title: "Transfer to Seminyak",
                description: "Morning leisure at resort. Check out and scenic drive to Seminyak. Stop at Tanah Lot Temple. Check into beachfront resort. Beach club welcome.\n\nBeachfront dinner.\n\nOvernight in ocean suite.",
                image: "/IMAGES/bali/4.webp"
            },
            {
                day: 5,
                title: "Beach & Water Sports",
                description: "Full day beach activities including parasailing, jet skiing, banana boat. Afternoon at premium beach club. Sunset cocktails. Professional couple photography. Final romantic dinner.\n\nOvernight in ocean suite.",
                image: "/IMAGES/bali/5.webp"
            },
            {
                day: 6,
                title: "Departure",
                description: "Leisurely breakfast with ocean views. Check out and airport transfer with memories.",
                image: "/IMAGES/bali/6.webp"
            }
        ],
        images: [
            "/IMAGES/bali/1.webp",
            "/IMAGES/bali/2.webp",
            "/IMAGES/bali/3.webp",
            "/IMAGES/bali/4.webp"
        ],
        additionalInfo: {
            highlights: [
                "Private pool villa",
                "Luxury beach resort",
                "Complete island tour",
                "Waterfalls & temples",
                "Water sports package",
                "Multiple spa treatments",
                "Photography session",
                "Beach club access"
            ],
            bestTimeToVisit: "April to October for best weather",
            cuisine: [
                "Gourmet Balinese",
                "International fine dining",
                "Fresh seafood",
                "Private beach dining",
                "Poolside service"
            ],
            accommodation: {
                type: "5 Star Luxury Resorts",
                amenities: [
                    "Private pool villas",
                    "Ocean view suites",
                    "Butler service",
                    "Multiple pools",
                    "World-class spas",
                    "Fine dining restaurants",
                    "Beach access"
                ]
            },
            transportation: {
                type: "Luxury private car",
                features: [
                    "Professional driver-guide",
                    "All transfers",
                    "Flexible itinerary",
                    "Air-conditioned vehicle"
                ]
            },
            visaInfo: {
                requirement: "Visa on arrival",
                duration: "30 days",
                cost: "IDR 500,000",
                documents: [
                    "Valid passport (6+ months)",
                    "Return flight tickets",
                    "Hotel confirmations"
                ]
            }
        },
        experiences: [
            {
                title: "Pool Villa",
                image: "/IMAGES/bali/1.webp"
            },
            {
                title: "Cultural Sites",
                image: "/IMAGES/bali/2.webp"
            },
            {
                title: "Beach Resort",
                image: "/IMAGES/bali/3.webp"
            }
        ]
    },
    maldives6N: {
        id: "6-nights-maldives-ultimate",
        packageName: "6 Nights Maldives Ultimate Romance",
        days: 7,
        nights: 6,
        amount: 78000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Ultimate romantic experience in Maldives with luxury overwater villas, exclusive dining, and unforgettable experiences.",
        groupDetails: {
            pax: "Couple",
            rooms: "Luxury Water Villa",
            arrivalDate: "Flexible",
            duration: "6N7D Maldives Ultimate Romance",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Maldives",
                hotel: "5 Star Ultra Luxury Resort",
                roomType: "Overwater Villa with Pool"
            }
        ],
        tourSummary: [
            "Day 1: Luxury Arrival",
            "Day 2-3: Water Adventures",
            "Day 4: Spa & Wellness",
            "Day 5: Private Yacht Cruise",
            "Day 6: Underwater Experiences",
            "Day 7: Departure"
        ],
        inclusions: [
            "6 nights overwater villa with private pool",
            "All-inclusive (all meals & drinks)",
            "Seaplane transfers",
            "Daily spa treatments",
            "Private yacht cruise",
            "Underwater restaurant dinners",
            "Scuba diving sessions",
            "All water sports",
            "Sunset cruises",
            "Photography package",
            "Butler service"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Premium alcohol brands",
            "Personal shopping"
        ],
        itinerary: [
            {
                day: 1,
                title: "Luxury Arrival",
                description: "Seaplane transfer with aerial views. Private butler welcome. Check into overwater villa with private pool. Champagne and caviar welcome. Sunset cruise.\n\nRomantic dinner.\n\nOvernight in luxury villa.",
                image: "/webImage/maldives/1.webp"
            },
            {
                day: 2,
                title: "Water Adventures Begin",
                description: "Morning snorkeling at house reef. Afternoon jet skiing and parasailing. Evening couple spa with sunset views. Private beach dinner.\n\nOvernight in luxury villa.",
                image: "/webImage/maldives/2.webp"
            },
            {
                day: 3,
                title: "Diving Experience",
                description: "Introduction to scuba diving with instructor. Explore coral reefs and marine life. Afternoon at leisure by private pool. Evening dolphin cruise.\n\nOvernight in luxury villa.",
                image: "/webImage/maldives/3.webp"
            },
            {
                day: 4,
                title: "Spa & Wellness",
                description: "Full day wellness experience with multiple spa treatments, yoga session, and meditation. Healthy gourmet meals. Evening stargazing on private deck.\n\nOvernight in luxury villa.",
                image: "/webImage/maldives/4.webp"
            },
            {
                day: 5,
                title: "Private Yacht Cruise",
                description: "Full day private yacht cruise with champagne lunch. Visit uninhabited islands. Swimming and snorkeling in pristine waters. Sunset fishing experience.\n\nOvernight in luxury villa.",
                image: "/webImage/maldives/5.webp"
            },
            {
                day: 6,
                title: "Underwater Experiences",
                description: "Morning underwater photography session. Afternoon private island picnic. Evening exclusive underwater restaurant dining experience. Final romantic evening.\n\nOvernight in luxury villa.",
                image: "/webImage/maldives/6.webp"
            },
            {
                day: 7,
                title: "Departure",
                description: "Leisurely breakfast in villa. Final spa session. Check out and seaplane transfer with lifetime memories.",
                image: "/webImage/maldives/1.webp"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1536300007881-7e482242baa5?w=1200&q=85",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85",
            "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=85",
            "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=85"
        ],
        additionalInfo: {
            highlights: [
                "Overwater villa with private pool",
                "All-inclusive luxury",
                "Seaplane transfers",
                "Private yacht cruise",
                "Scuba diving",
                "Underwater dining",
                "Butler service",
                "Daily spa treatments"
            ],
            bestTimeToVisit: "Year-round luxury destination",
            cuisine: [
                "All-inclusive gourmet",
                "Underwater restaurant",
                "Private chef options",
                "International fine dining"
            ],
            accommodation: {
                type: "5 Star Ultra Luxury",
                amenities: [
                    "Private pool villa",
                    "Butler service",
                    "Personal chef",
                    "Premium facilities",
                    "Exclusive experiences"
                ]
            },
            transportation: {
                type: "Seaplane & Private Yacht",
                features: [
                    "Scenic seaplane",
                    "Private yacht cruise",
                    "Speedboat transfers"
                ]
            },
            visaInfo: {
                requirement: "Free visa on arrival",
                duration: "30 days",
                cost: "Free",
                documents: [
                    "Valid passport",
                    "Return tickets",
                    "Resort confirmation"
                ]
            }
        },
        experiences: [
            {
                title: "Luxury Villa",
                image: "/webImage/maldives/1.webp"
            },
            {
                title: "Yacht Cruise",
                image: "/webImage/maldives/2.webp"
            },
            {
                title: "Underwater Dining",
                image: "/webImage/maldives/3.webp"
            }
        ]
    },
    bali6N: {
        id: "6-nights-bali-grand",
        packageName: "6 Nights Bali Grand Honeymoon",
        days: 7,
        nights: 6,
        amount: 82000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Grand Bali honeymoon covering all highlights with luxury accommodations, adventure activities, and cultural immersion.",
        groupDetails: {
            pax: "Couple",
            rooms: "Luxury Suites & Villas",
            arrivalDate: "Flexible",
            duration: "6N7D Bali Grand Tour",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Ubud",
                hotel: "5 Star Luxury Resort",
                roomType: "Private Pool Villa"
            },
            {
                city: "Seminyak",
                hotel: "5 Star Beach Resort",
                roomType: "Ocean Front Villa"
            },
            {
                city: "Nusa Dua",
                hotel: "5 Star Resort",
                roomType: "Beach Villa"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Ubud",
            "Day 2: Ubud Cultural Immersion",
            "Day 3: Adventure Day",
            "Day 4: Transfer to Seminyak",
            "Day 5: Beach & Water Activities",
            "Day 6: Nusa Dua Luxury",
            "Day 7: Departure"
        ],
        inclusions: [
            "6 nights luxury accommodation (multi-location)",
            "All meals (breakfast, lunch, dinner)",
            "Private car with driver-guide",
            "All attraction tickets",
            "Water sports package",
            "Multiple spa sessions",
            "White water rafting",
            "Swing experience",
            "Romantic dinners",
            "Couple photography",
            "Cultural performances"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Scuba certification",
            "Premium shopping",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Ubud",
                description: "Airport VIP reception. Transfer to Ubud luxury resort with private pool villa. Traditional welcome ceremony. Romantic flower bath setup. Welcome dinner with traditional dance.\n\nOvernight in pool villa.",
                image: "/IMAGES/bali/1.webp"
            },
            {
                day: 2,
                title: "Ubud Cultural Immersion",
                description: "Morning Tegalalang Rice Terraces and jungle swing. Sacred Monkey Forest visit. Traditional Balinese cooking class together. Ubud Palace and art markets. Evening couple spa.\n\nOvernight in pool villa.",
                image: "/IMAGES/bali/2.webp"
            },
            {
                day: 3,
                title: "Adventure Day",
                description: "Early white water rafting adventure through jungle. Visit Tegenungan Waterfall. Coffee plantation tour with luwak coffee tasting. Tirta Empul holy water temple. Romantic dinner overlooking rice fields.\n\nOvernight in pool villa.",
                image: "/IMAGES/bali/3.webp"
            },
            {
                day: 4,
                title: "Transfer to Seminyak",
                description: "Morning leisure and villa breakfast. Check out and scenic drive to Seminyak via Tanah Lot sunset temple. Check into beachfront villa. Beach club evening. Seafood dinner.\n\nOvernight in ocean villa.",
                image: "/IMAGES/bali/4.webp"
            },
            {
                day: 5,
                title: "Beach & Water Activities",
                description: "Full water sports package: parasailing, jet ski, banana boat, snorkeling. Premium beach club access. Afternoon couple spa by the beach. Sunset cocktails. Professional photography. Romantic beachfront dinner.\n\nOvernight in ocean villa.",
                image: "/IMAGES/bali/5.webp"
            },
            {
                day: 6,
                title: "Nusa Dua Luxury",
                description: "Transfer to Nusa Dua luxury beach resort. Water blow natural wonder. Uluwatu Temple visit. Traditional Kecak fire dance at sunset. Jimbaran Bay seafood BBQ dinner on beach.\n\nOvernight in beach villa.",
                image: "/IMAGES/bali/6.webp"
            },
            {
                day: 7,
                title: "Departure",
                description: "Leisurely beachfront breakfast. Final relaxation at resort. Check out and airport transfer with cherished memories.",
                image: "/IMAGES/bali/1.webp"
            }
        ],
        images: [
            "/IMAGES/bali/1.webp",
            "/IMAGES/bali/2.webp",
            "/IMAGES/bali/3.webp",
            "/IMAGES/bali/4.webp"
        ],
        additionalInfo: {
            highlights: [
                "Three luxury locations",
                "Private pool villas",
                "All-inclusive meals",
                "White water rafting",
                "Jungle swing",
                "Complete water sports",
                "Cultural performances",
                "Multiple spa sessions",
                "Cooking class",
                "Professional photography"
            ],
            bestTimeToVisit: "April to October",
            cuisine: [
                "All meals included",
                "Balinese specialties",
                "International gourmet",
                "Beach BBQ",
                "Romantic dining",
                "Cooking class"
            ],
            accommodation: {
                type: "5 Star Multi-Location Luxury",
                amenities: [
                    "Private pool villas",
                    "Ocean front access",
                    "Butler service",
                    "Multiple pools",
                    "Spa facilities",
                    "Fine dining",
                    "Beach clubs"
                ]
            },
            transportation: {
                type: "Luxury private car with professional driver-guide",
                features: [
                    "All transfers",
                    "Sightseeing tours",
                    "Flexible schedule",
                    "English-speaking guide"
                ]
            },
            visaInfo: {
                requirement: "Visa on arrival",
                duration: "30 days",
                cost: "IDR 500,000",
                documents: [
                    "Valid passport (6+ months)",
                    "Return flight tickets",
                    "Hotel confirmations"
                ]
            }
        },
        experiences: [
            {
                title: "Luxury Villas",
                image: "/IMAGES/bali/1.webp"
            },
            {
                title: "Adventure",
                image: "/IMAGES/bali/2.webp"
            },
            {
                title: "Beach Life",
                image: "/IMAGES/bali/3.webp"
            },
            {
                title: "Culture",
                image: "/IMAGES/bali/4.webp"
            }
        ]
    },
    maldives7N: {
        id: "7-nights-maldives-premium",
        packageName: "7 Nights Maldives Premium Paradise",
        days: 8,
        nights: 7,
        amount: 92000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Extended premium honeymoon in Maldives with ultimate luxury, exclusive experiences, and personalized service throughout your stay.",
        groupDetails: {
            pax: "Couple",
            rooms: "Presidential Water Villa",
            arrivalDate: "Flexible",
            duration: "7N8D Premium Paradise",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Maldives",
                hotel: "5 Star Premium Resort",
                roomType: "Presidential Overwater Villa"
            }
        ],
        tourSummary: [
            "Day 1: Grand Arrival",
            "Day 2-3: Marine Adventures",
            "Day 4: Wellness & Spa",
            "Day 5: Private Island Experience",
            "Day 6: Underwater World",
            "Day 7: Sunset Yacht Cruise",
            "Day 8: Departure"
        ],
        inclusions: [
            "7 nights Presidential villa",
            "Full board premium (all meals & drinks)",
            "Seaplane transfers",
            "Personal butler 24/7",
            "Daily spa treatments",
            "Multiple private yacht cruises",
            "Scuba diving unlimited",
            "All water sports",
            "Underwater restaurant experiences",
            "Private island dinners",
            "Photography & videography",
            "Helicopter tour"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Premium champagne brands"
        ],
        itinerary: [
            {
                day: 1,
                title: "Grand Arrival",
                description: "VIP lounge at Male Airport. Private seaplane transfer. Presidential villa check-in with champagne and roses. Personal butler introduction. Sunset cruise. Gala welcome dinner.\n\nOvernight in presidential villa.",
                image: "/webImage/maldives/1.webp"
            },
            {
                day: 2,
                title: "Marine Discovery",
                description: "Morning dolphin cruise with breakfast. Snorkeling at multiple reef sites. Afternoon jet skiing and parasailing. Evening couple spa. Underwater restaurant dinner.\n\nOvernight in presidential villa.",
                image: "/webImage/maldives/2.webp"
            },
            {
                day: 3,
                title: "Diving Adventures",
                description: "Two scuba diving sessions with instructor. Explore coral gardens and marine life. Lunch on deserted island. Afternoon kayaking and paddleboarding. Romantic beach dinner under stars.\n\nOvernight in presidential villa.",
                image: "/webImage/maldives/3.webp"
            },
            {
                day: 4,
                title: "Wellness & Spa Day",
                description: "Full day couples wellness retreat. Multiple spa treatments, yoga, meditation. Healthy gourmet meals. Afternoon in private villa pool. Evening cultural show and dinner.\n\nOvernight in presidential villa.",
                image: "/webImage/maldives/4.webp"
            },
            {
                day: 5,
                title: "Private Island Experience",
                description: "Exclusive private island day trip by yacht. Champagne breakfast on island. Snorkeling pristine waters. Private chef prepared lunch. Sunset cocktails. Return for gourmet dinner.\n\nOvernight in presidential villa.",
                image: "/webImage/maldives/5.webp"
            },
            {
                day: 6,
                title: "Underwater World",
                description: "Morning submarine experience viewing marine life. Underwater photography session. Afternoon fishing excursion. Cooking your catch with chef. Second underwater restaurant experience.\n\nOvernight in presidential villa.",
                image: "/webImage/maldives/6.webp"
            },
            {
                day: 7,
                title: "Sunset Yacht Cruise",
                description: "Morning leisure and spa. Afternoon helicopter tour over atolls. Evening full-day yacht cruise with sunset views. Champagne dinner on yacht. Final romantic night under stars.\n\nOvernight in presidential villa.",
                image: "/webImage/maldives/1.webp"
            },
            {
                day: 8,
                title: "Departure",
                description: "Breakfast in villa. Final spa and relaxation. Farewell gift package. Seaplane transfer to airport with unforgettable memories.",
                image: "/webImage/maldives/2.webp"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=85",
            "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=85",
            "https://images.unsplash.com/photo-1499363536502-87642509e31b?w=1200&q=85",
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&q=85"
        ],
        additionalInfo: {
            highlights: [
                "Presidential overwater villa",
                "24/7 personal butler",
                "All-inclusive premium",
                "Unlimited scuba diving",
                "Helicopter tour",
                "Multiple yacht cruises",
                "Private island trips",
                "Underwater dining",
                "Photography package",
                "Submarine experience"
            ],
            bestTimeToVisit: "Year-round luxury",
            cuisine: [
                "Full board premium",
                "Multiple restaurants",
                "Private chef service",
                "Underwater dining",
                "Yacht dining"
            ],
            accommodation: {
                type: "Presidential Villa",
                amenities: [
                    "Largest overwater villa",
                    "Private infinity pool",
                    "Personal butler",
                    "Private deck & slide",
                    "Luxury bathroom",
                    "Premium amenities"
                ]
            },
            transportation: {
                type: "Premium seaplane, yacht, helicopter",
                features: [
                    "Seaplane transfers",
                    "Private yacht",
                    "Helicopter tour",
                    "Speedboat access"
                ]
            },
            visaInfo: {
                requirement: "Free visa on arrival",
                duration: "30 days",
                cost: "Free",
                documents: [
                    "Valid passport",
                    "Return tickets"
                ]
            }
        },
        experiences: [
            {
                title: "Presidential Villa",
                image: "/webImage/maldives/1.webp"
            },
            {
                title: "Yacht Cruises",
                image: "/webImage/maldives/2.webp"
            },
            {
                title: "Diving Paradise",
                image: "/webImage/maldives/3.webp"
            }
        ]
    },
    bali7N: {
        id: "7-nights-bali-ultimate",
        packageName: "7 Nights Bali Ultimate Honeymoon",
        days: 8,
        nights: 7,
        amount: 99000,
        dateStart: "01 January 2025",
        dateEnd: "31 December 2025",
        description: "Ultimate Bali honeymoon experience covering entire island with luxury stays, adventure, culture, and exclusive experiences.",
        groupDetails: {
            pax: "Couple",
            rooms: "Premium Villas",
            arrivalDate: "Flexible",
            duration: "7N8D Ultimate Experience",
            costBasis: "Cost per person"
        },
        hotelDetails: [
            {
                city: "Ubud",
                hotel: "5 Star Ultra Luxury",
                roomType: "Royal Pool Villa"
            },
            {
                city: "Seminyak",
                hotel: "5 Star Beachfront",
                roomType: "Presidential Beach Villa"
            },
            {
                city: "Nusa Dua",
                hotel: "5 Star Clifftop Resort",
                roomType: "Cliff Villa with Pool"
            }
        ],
        tourSummary: [
            "Day 1: Royal Arrival",
            "Day 2: Ubud Culture & Adventure",
            "Day 3: North Bali Discovery",
            "Day 4: East Bali & Transfer",
            "Day 5: Seminyak Beach Life",
            "Day 6: Nusa Penida Island",
            "Day 7: Uluwatu & Fine Dining",
            "Day 8: Departure"
        ],
        inclusions: [
            "7 nights ultra-luxury accommodation",
            "All meals (breakfast, lunch, dinner)",
            "Private luxury car with driver-guide",
            "Helicopter transfer option",
            "All attraction tickets",
            "Complete water sports",
            "White water rafting",
            "ATV adventure",
            "Nusa Penida full day tour",
            "Multiple romantic dinners",
            "Daily spa treatments",
            "Professional photography & videography",
            "Cultural performances",
            "Cooking class",
            "Butler service"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal shopping",
            "Premium alcohol"
        ],
        itinerary: [
            {
                day: 1,
                title: "Royal Arrival",
                description: "VIP airport reception. Private transfer to Ubud royal pool villa. Traditional Balinese welcome ceremony. Flower bath setup with champagne. Welcome massage. Romantic dinner with valley views and traditional performance.\n\nOvernight in royal villa.",
                image: "/IMAGES/bali/1.webp"
            },
            {
                day: 2,
                title: "Ubud Culture & Adventure",
                description: "Morning Tegalalang Rice Terraces and iconic jungle swing. Sacred Monkey Forest. Traditional Balinese cooking class together. Afternoon white water rafting adventure. Evening couple spa with aromatherapy. Candlelight dinner.\n\nOvernight in royal villa.",
                image: "/IMAGES/bali/2.webp"
            },
            {
                day: 3,
                title: "North Bali Discovery",
                description: "Early start to Sekumpul Waterfall. Ulun Danu Beratan Water Temple. Handara Iconic Gate. Jatiluwih Rice Terraces (UNESCO site). Coffee plantation with luwak coffee. Hot spring relaxation. Return for romantic dinner.\n\nOvernight in royal villa.",
                image: "/IMAGES/bali/3.webp"
            },
            {
                day: 4,
                title: "East Bali & Transfer",
                description: "Morning Tirta Gangga Water Palace. Lempuyang Temple (Gates of Heaven). Virgin beach visit. Lunch with volcano views. Afternoon transfer to Seminyak presidential beach villa. Sunset beach club. Seafood dinner.\n\nOvernight in beach villa.",
                image: "/IMAGES/bali/4.webp"
            },
            {
                day: 5,
                title: "Seminyak Beach Life",
                description: "Full day water sports package: parasailing, jet ski, banana boat, flyboard, snorkeling. Premium beach club VIP access. Afternoon couple spa beachside. Sunset cocktails. Professional photography session. Fine dining beachfront.\n\nOvernight in beach villa.",
                image: "/IMAGES/bali/5.webp"
            },
            {
                day: 6,
                title: "Nusa Penida Island",
                description: "Full day private speedboat tour to Nusa Penida. Kelingking Beach (T-Rex cliff), Angel's Billabong, Broken Beach, Crystal Bay. Snorkeling with manta rays. Lunch on island. Return evening. Romantic dinner.\n\nOvernight in beach villa.",
                image: "/IMAGES/bali/6.webp"
            },
            {
                day: 7,
                title: "Uluwatu & Fine Dining",
                description: "Morning transfer to Nusa Dua clifftop resort. Afternoon Uluwatu Temple on cliff. Traditional Kecak fire dance at sunset. Jimbaran Bay ultimate seafood BBQ on beach. Final spa session. Farewell dinner with fireworks.\n\nOvernight in cliff villa.",
                image: "/IMAGES/bali/1.webp"
            },
            {
                day: 8,
                title: "Departure",
                description: "Leisurely breakfast with ocean views. Final moments at resort. Personalized photo album and gift. Private transfer to airport with lifetime memories.",
                image: "/IMAGES/bali/2.webp"
            }
        ],
        images: [
            "/IMAGES/bali/1.webp",
            "/IMAGES/bali/2.webp",
            "/IMAGES/bali/3.webp",
            "/IMAGES/bali/4.webp"
        ],
        additionalInfo: {
            highlights: [
                "Three ultra-luxury locations",
                "Royal and presidential villas",
                "All-inclusive meals",
                "Complete island coverage",
                "Nusa Penida island tour",
                "Manta ray snorkeling",
                "White water rafting",
                "Complete water sports",
                "Daily spa treatments",
                "Butler service",
                "Professional photo/video",
                "Cultural immersion",
                "Helicopter transfer option"
            ],
            bestTimeToVisit: "April to October",
            cuisine: [
                "All gourmet meals",
                "Multiple fine dining",
                "Beach BBQ",
                "Romantic dinners",
                "Cooking class",
                "International cuisine"
            ],
            accommodation: {
                type: "5 Star Ultra Luxury Multi-Location",
                amenities: [
                    "Royal & presidential villas",
                    "Private pools",
                    "Butler service",
                    "Ocean & valley views",
                    "World-class spas",
                    "Fine dining",
                    "Premium facilities"
                ]
            },
            transportation: {
                type: "Luxury car, private speedboat, helicopter option",
                features: [
                    "Professional driver-guide",
                    "Luxury vehicle",
                    "Private boat tours",
                    "Helicopter transfer",
                    "Flexible schedule"
                ]
            },
            visaInfo: {
                requirement: "Visa on arrival",
                duration: "30 days",
                cost: "IDR 500,000",
                documents: [
                    "Valid passport (6+ months)",
                    "Return flight tickets",
                    "Resort confirmations"
                ]
            }
        },
        experiences: [
            {
                title: "Luxury Villas",
                image: "/IMAGES/bali/1.webp"
            },
            {
                title: "Island Adventure",
                image: "/IMAGES/bali/2.webp"
            },
            {
                title: "Beach Paradise",
                image: "/IMAGES/bali/3.webp"
            },
            {
                title: "Cultural Heritage",
                image: "/IMAGES/bali/4.webp"
            }
        ]
    }
};
