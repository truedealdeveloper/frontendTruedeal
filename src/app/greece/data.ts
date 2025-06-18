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

export interface GreecePackage {
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
    departureDates?: DepartureDate[];
    experiences: Experience[];
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
        visaInfo?: {
            requirement: string;
            duration: string;
            cost: string;
            documents: string[];
        };
    };
    batchDetails?: BatchDetails;
    flightDetails?: FlightDetails;
}

export const greecePackages: Record<string, GreecePackage> = {
    "athens-mykonos-santorini-8-days-package": {
        id: "athens-mykonos-santorini-8-days-package",
        packageName: "Athens - Mykonos - Santorini 8 Days Package",
        days: 8,
        nights: 7,
        amount: 118601,
        dateStart: "22 June",
        dateEnd: "26 Oct",
        description: `Embark on a captivating adventure to Athens, the enchanting city, and explore the breathtaking beauty of Santorini and Mykonos, the top destinations in Greece. Nestled in the picturesque Cyclades, these two islands offer an experience like no other.

Mykonos beckons with its vibrant nightlife, where you can dance the night away and bask in the sun-kissed beaches that leave you in awe. Meanwhile, Santorini sets the stage for romance with its legendary sunsets and awe-inspiring Caldera views.

Discover the rich history, culture, and charm of Athens, immersing yourself in its timeless allure. The Cyclades islands of Santorini and Mykonos add a touch of paradise to your journey, making it an experience you'll cherish forever.`,
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "8 Days / 7 Nights",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Athens",
                hotel: "Grand Hyatt Athens",
                roomType: "Deluxe Room"
            },
            {
                city: "Santorini",
                hotel: "Mystique, a Luxury Collection Hotel",
                roomType: "Cave Suite"
            },
            {
                city: "Mykonos",
                hotel: "Mykonos Blu",
                roomType: "Sea View Suite"
            }
        ],
        tourSummary: [
            "Athens (Acropolis, Acropolis Museum, Monastiraki, Thissio, Temple of Olympian Zeus, historical centre)",
            "Mykonos (Little Venice, Lower Mills, Matogiannia)",
            "Santorini (Archeological site of Akrotiri, Oia, Fira, Nea Kameni volcano, Imerovigli, Firostefani)"
        ],
        inclusions: [
            "Arrival and departure transfers in Athens and the islands",
            "7 nights accommodation with breakfast (3 in Athens 4* hotel, 2 in Mykonos 3* hotel, 2 in Santorini 3* hotel)",
            "Half-day Athens city guided sightseeing tour",
            "Santorini half-day island tour",
            "Ferry tickets Athens - Mykonos - Santorini - Athens"
        ],
        exclusions: [
            "City tax",
            "Personal expenses (meals, drinks, tips)",
            "Optional excursions and visits",
            "Entrances",
            "Anything that is not mentioned in the included section"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Athens • Acropolis Tour",
                description: `Welcome to Athens! Upon landing at Athens airport, our dedicated assistant will be ready to escort you to the city's heart. Check-in at your hotel and enjoy the rest of the day at your leisure. 

In the evening, join our optional Athens by night tour. Drive through the city centre, catching a glimpse of the illuminated Acropolis. Explore the charming streets of Plaka, leading to a Traditional Greek Tavern where you'll savour a delicious dinner accompanied by live Greek music. Overnight in Athens.`,
                image: "/UGCImages/greece/1.webp"
            },
            {
                day: 2,
                title: "Panoramic tour of Athens",
                description: `After breakfast, embark on a panoramic tour of Athens with our expert guides. Visit iconic sites like the Panathenaic Stadium, the Temple of Olympian Zeus, and the Acropolis. Marvel at the architectural wonders of the Golden Age of Athens, including the Propylaea, Temple of Athena Nike, Erechtheion, and the Parthenon. Conclude the tour at the Acropolis Museum.
Enjoy the evening at your leisure or opt for a tour to Cape Sounion to witness a captivating sunset over the Attica Riviera. Overnight in Athens.`,
                image: "/UGCImages/greece/2.webp"
            },
            {
                day: 3,
                title: "Athens / Mykonos - Island Paradise Beackons",
                description: `Depart Athens for the enchanting island of Mykonos. Board a ferry at the port and settle into your selected hotel upon arrival. Discover the unique charms of Mykonos, with its cosmopolitan shops, lively bars, picturesque windmills, and pristine beaches against the backdrop of stunning blue hues. Overnight in Mykonos.`,
                image: "/UGCImages/greece/3.webp"
            },
            {
                day: 4,
                title: "Discovering Mykonos' Treasures",
                description: `Spend the day at leisure, exploring Mykonos at your own pace or join our optional Mykonos Island Tour. Visit Agios Ioannis beach, Ano Mera village, and Kalafatis beach. Explore Mykonos town, featuring iconic landmarks such as the windmills and Little Venice. Immerse yourself in the local ambiance and architecture. Overnight in Mykonos.`,
                image: "/UGCImages/greece/4.webp"
            },
            {
                day: 5,
                title: "Mykonos / Santorini - Awe-Inspiring Island Awaits",
                description: `Leave Mykonos behind and set sail for Santorini. Transfer to the port and board a ferry to reach this mesmerizing island. Upon arrival, our team will ensure a smooth transfer to your chosen hotel. Enjoy the captivating views, cosmopolitan shops, and cozy taverns that Santorini has to offer. Overnight in Santorini.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 6,
                title: "Unveiling the Secrets of Santorini",
                description: `We will start with a visit to the Akrotiri Archaeological site with a licensed guide at one of the most important prehistoric settlements of Greece. Akrotiri is a Bronze Age settlement on the volcanic island of Santorini (Thera). The settlement was destroyed by a huge eruption during the 17th century BC and buried under the volcanic ash, which preserved the whole city in perfect conditions so as to be referred often as "Prehistoric Pompei" The settlement has been suggested as a possible inspiration for Plato's story of Atlantis. The site has been excavated since 1967. (Guided Tour 1 & ½ h) Entrance Fees are not included in the price. We will continue with Red Beach, where we will have some free time for photos or for a walk along the coastline. Soaring red lava cliffs drop right to the sandy shore and into the clear blue sea. (45m)`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 7,
                title: "Santorini / Athens - Homeward Bound",
                description: "Bid farewell to Santorini and journey back to Athens. Board a ferry at the port and transfer to your hotel upon arrival. Reflect on the memories created during your island adventures. Overnight in Athens.",
                image: "/UGCImages/greece/7.webp"
            },
            {
                day: 8,
                title: "Athens / Departure",
                description: `As your journey comes to an end, we'll arrange a timely transfer to the airport for your departure flight. Depart with cherished memories of Greece's beauty and hospitality.`,
                image: "/UGCImages/greece/8.webp"
            }
        ],
        images: [
            "/UGCImages/greece/1.webp",
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/7.webp"
        ],
        departureDates: [
            { date: "June 1, 2024" },
            { date: "June 15, 2024" },
            { date: "July 1, 2024" },
            { date: "July 15, 2024" }
        ],
        experiences: [
            {
                title: "Acropolis Tour",
                image: "/UGCImages/greece/greece/acropolis/1 (1).png"
            },
            {
                title: "Santorini Sunset",
                image: "/UGCImages/greece/greece/santorini/1 (2).png"
            },
            {
                title: "Mykonos Beaches",
                image: "/UGCImages/greece/greece/mykonos/1 (3).png"
            },
            {
                title: "Greek Cuisine",
                image: "/UGCImages/greece/greece/food/1 (1).png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Ancient Greek ruins and archaeological sites",
                "Stunning Mediterranean beaches",
                "Island hopping experience",
                "Greek cuisine and wine tasting",
                "Sunset views in Santorini"
            ],
            bestTimeToVisit: "April to October",
            cuisine: [
                "Moussaka",
                "Souvlaki",
                "Greek Salad",
                "Baklava",
                "Ouzo"
            ],
            accommodation: {
                type: "Luxury Hotels",
                amenities: [
                    "Swimming pools",
                    "Spa facilities",
                    "Sea views",
                    "Fine dining restaurants",
                    "Concierge service"
                ]
            },
            transportation: {
                type: "Private Transfers and Ferries",
                features: [
                    "Airport transfers",
                    "Inter-island ferries",
                    "Private guided tours",
                    "Luxury vehicles"
                ]
            },
            visaInfo: {
                requirement: "Schengen Visa required for Indian citizens",
                duration: "Up to 90 days",
                cost: "€80",
                documents: [
                    "Valid passport",
                    "Bank statements",
                    "Travel insurance",
                    "Flight itinerary",
                    "Hotel bookings"
                ]
            }
        },
        batchDetails: {
            currentBatch: "June 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "June",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "July",
                    dates: ["1st", "15th"],
                    availableSeats: 12
                }
            ]
        },
        flightDetails: {
            airlines: [
                {
                    name: "Emirates",
                    departureCity: "Delhi",
                    arrivalCity: "Athens",
                    flightNumber: "EK123",
                    departureTime: "02:30",
                    arrivalTime: "08:45",
                    duration: "6h 15m"
                }
            ]
        }
    }
};

export const withoutFlightPackages: Record<string, GreecePackage> = {
    "athens-mykonos-santorini-8-days-no-flight": {
        ...greecePackages["athens-mykonos-santorini-8-days-package"],
        id: "athens-mykonos-santorini-8-days-no-flight",
        packageName: "Athens - Mykonos - Santorini 8 Days Package (Without Flights)",
        amount: 99999
    }
};
