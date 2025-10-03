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
        dateStart: "22 October",
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
            { date: "October 22, 29 2025" },
            { date: "October 6, 13, 20, 27 2025" },
            { date: "October 3, 10, 17, 24, 31 2025" },
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
            currentBatch: "October 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "October",
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
    },
    "athenianReviera": {
        id: "athenianReviera",
        packageName: "Athensian Riviera 8 Days",
        days: 8,
        nights: 7,
        amount: 64536,
        dateStart: "24 October",
        dateEnd: "14 Oct",
        description: `Athenian Riviera is the ideal choice for those wishing to explore Athens, having as a basis a charming hotel on the seaside, just a few kilometres from the city centre. The green gardens meet the blue of the sea in an idyllic setting that will refresh your mood and brighten your senses. Our hotels, with stunning beachfront views, provide comfort and impeccable elegance.`,
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
            "Athens (Acropolis, Parthenon, Acropolis Museum, Monastiraki, Thisseion, Temple of Olympian Zeus, Historical Center)",
            "Aegina (Agios Nektarios Monastery, Temple of Aphaia)",
            "Poros is the smallest of the three islands, and Hydra is one of the most cosmopolitan and picturesque Greek islands."
        ],
        inclusions: [
            "Arrival and departure transfers",
            "7 nights at a 4* hotel in the coastal area of Athens with breakfast",
            "Panoramic city tour of Athens with an English-speaking guide",
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
                title: "Arrival in Athens ",
                description: `Arrival at Athens airport - Our assistant will meet you and transfer you to your hotel. Afternoon free at leisure. 

We propose an optional tour: Athens by night. Your evening begins with a short panoramic drive through the city centre and on the slopes of the sacred hill you will be able to see, admire and take photos of the illuminated Acropolis. Then a pleasant walk through the narrow picturesque streets of Plaka, the old city, will bring you to a Typical Greek Tavern where you will enjoy your dinner with live music`,
                image: "/UGCImages/greece/greece 2/1.webp"
            },
            {
                day: 2,
                title: "Panoramic tour of Athens and Acropolis",
                description: `After your breakfast, we will start the tour around the sites of Athens. This tour gives you an opportunity to observe the striking contrasts that make Athens such a fascinating city. Our expert guides will take you to see the Panathenaic Stadium where the first Olympic Games of modern times were held in 1896 (short stop).
Continue and pass by the Prime Minister's residence (Old Royal Palace) guarded by the Evzones in their colourful uniform, the Temple of Olympian Zeus, the Hadrian's Arch, the Parliament and the memorial to the Unknown Soldier, the Academy, the University, the National Library, the Constitution Square (Syntagma).

On the Acropolis visit the Architectural Masterpieces of the Golden Age of Athens: The Propylaea, the Temple of Athena Nike, the Erechtheion and finally "the harmony between material and spirit", the monument that "puts the mind in order", the Parthenon.
Continue and visit the place where the statues found their home and admire the classical era's wonders: The Acropolis Museum.

If you are a fan of shopping, there are plenty of shops in Ermou Str, and if you are a culinary enthusiast,  If you are a fan of local food you will find various restaurants and small taverns with traditional Greek food and wine in Plaka.

Don't forget to discover the Nightlife of Athens. Overnight in Athens.`,
                image: "/UGCImages/greece/greece 2/2.webp"
            },
            {
                day: 3,
                title: "Sunday Free Day or One day Cruise (optional)",
                description: `Enjoy your day by strolling the narrow streets, which are full of restaurants where you can taste traditional Greek dishes, and the famous drink "ouzo" and enjoy the atmosphere of this vibrant neighbourhood.

Or One day Cruise (optional) Departure from the hotel in the morning with a guide towards the port of Piraeus. The ship sails at 08:00 am for the islands of the Saronic Gulf. Free to visit each island. Aegina: the biggest island of the Saronic Gulf. Two major attractions to visit in Aegina are (note: Optional tours organized on board the ship): The monastery of Aghios Nektarios, who was the last declared saint by the Greek Orthodox Church and the Temple of Aphaia, the second best-preserved temple in Greece after the Parthenon in Athens. Poros is the smallest of the three islands, full of pine trees and lemon trees, where you are going to have a nice walk and enjoy the great scenery. Hydra: One of the most cosmopolitan and picturesque Greek islands, with unique architecture, narrow streets and many shops. 

Arrive at the port of Piraeus at around 19:30, and return to the hotel at around 21:20.`,
                image: "/UGCImages/greece/greece 2/3.webp"
            },
            {
                day: 4,
                title: "Free days at Athens Riviera - Day 1st of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/greece 2/4.webp"
            },
            {
                day: 5,
                title: "Free days at Athens Riviera - Day 2nd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/greece 2/5.webp"
            },
            {
                day: 6,
                title: "Free days at Athens Riviera - Day 3rd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/greece 2/6.webp"
            },
            {
                day: 7,
                title: "Free days at Athens Riviera - Day 4th of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/greece 2/7.webp"
            },
            {
                day: 8,
                title: "Departure",
                description: `As your journey comes to an end, we'll arrange a timely transfer to the airport for your departure flight. Depart with cherished memories of Greece's beauty and hospitality.`,
                image: "/UGCImages/greece/greece 2/8.webp"
            }
        ],
        images: [
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/1.webp",
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/7.webp"
        ],
        departureDates: [
            { date: "October 24 2025" },
            { date: "October 1, 8, 15, 22, 29 2025" },
            { date: "October 5, 12, 19, 26 2025" },
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
            currentBatch: "October 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "October",
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
    },
    "ahtensThessaloniki": {
        id: "athens-thessaloniki-5-days",
        packageName: "Athens Thessaloniki - 5 days",
        days: 5,
        nights: 4,
        amount: 59816,
        dateStart: "24 October",
        dateEnd: "14 Oct",
        description: `Experience the allure of Athens, Greece's captivating capital. Immerse yourself in history at famous archaeological sites and museums. Wander through the charming Plaka district beneath the majestic Acropolis, and stroll along Ermou street from Syntagma to Monastiraki. Savor the true Greek spirit by enjoying ouzo in Thiseion and exploring the vibrant nightlife of Psirri.
        Continue your adventure in Thessaloniki, the country's second major city. Marvel at its Roman and Byzantine heritage through intriguing museums and buildings. Sip a coffee in Aristotelous Square, indulge in shopping along Tsimiski street, and soak in the melodies of Greek music while relaxing with a drink in the lively Ladadika district.

        Join us on this unforgettable journey through the heart and soul of Greece!
`,
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
            "Athens: Acropolis, the New Acropolis Museum, Erechtheion, Pnyx Hill, Plaka, Monastiraki, Psirri.",
            "Thessaloniki: White Tower, Archaeological Museum, Central market, Ladadika, Ano Poli, Saint Demetrius Church."
        ],
        inclusions: [
            "Airport transfers in both cities",
            "4 nights accomodation in 4* hotel with breakfast (2 nights in Athens and 2 nights in Thessaloniki)",
            "Athens City Tour",
            "Thessaloniki City Tour",
            "Domestic Flight ticket Athens – Thessaloniki or v.v."
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
                title: "Arrival in Athens ",
                description: `Arrival at Athens airport - Our assistant will meet you and transfer you to your hotel. Afternoon free at leisure. 

We propose an optional tour: Athens by night. Your evening begins with a short panoramic drive through the city centre and on the slopes of the sacred hill you will be able to see, admire and take photos of the illuminated Acropolis. Then a pleasant walk through the narrow picturesque streets of Plaka, the old city, will bring you to a Typical Greek Tavern where you will enjoy your dinner with live music`,
                image: "/UGCImages/greece/1.webp"
            },
            {
                day: 2,
                title: "Panoramic tour of Athens and Acropolis",
                description: `After your breakfast, we will start the tour around the sites of Athens. This tour gives you an opportunity to observe the striking contrasts that make Athens such a fascinating city. Our expert guides will take you to see the Panathenaic Stadium where the first Olympic Games of modern times were held in 1896 (short stop).
Continue and pass by the Prime Minister's residence (Old Royal Palace) guarded by the Evzones in their colourful uniform, the Temple of Olympian Zeus, the Hadrian's Arch, the Parliament and the memorial to the Unknown Soldier, the Academy, the University, the National Library, the Constitution Square (Syntagma).

On the Acropolis visit the Architectural Masterpieces of the Golden Age of Athens: The Propylaea, the Temple of Athena Nike, the Erechtheion and finally "the harmony between material and spirit", the monument that "puts the mind in order", the Parthenon.
Continue and visit the place where the statues found their home and admire the classical era's wonders: The Acropolis Museum.

If you are a fan of shopping, there are plenty of shops in Ermou Str, and if you are a culinary enthusiast,  If you are a fan of local food you will find various restaurants and small taverns with traditional Greek food and wine in Plaka.

Don't forget to discover the Nightlife of Athens. Overnight in Athens.`,
                image: "/UGCImages/greece/2.webp"
            },
            {
                day: 3,
                title: "Sunday Free Day or One day Cruise (optional)",
                description: `Enjoy your day by strolling the narrow streets, which are full of restaurants where you can taste traditional Greek dishes, and the famous drink "ouzo" and enjoy the atmosphere of this vibrant neighbourhood.

Or One day Cruise (optional) Departure from the hotel in the morning with a guide towards the port of Piraeus. The ship sails at 08:00 am for the islands of the Saronic Gulf. Free to visit each island. Aegina: the biggest island of the Saronic Gulf. Two major attractions to visit in Aegina are (note: Optional tours organized on board the ship): The monastery of Aghios Nektarios, who was the last declared saint by the Greek Orthodox Church and the Temple of Aphaia, the second best-preserved temple in Greece after the Parthenon in Athens. Poros is the smallest of the three islands, full of pine trees and lemon trees, where you are going to have a nice walk and enjoy the great scenery. Hydra: One of the most cosmopolitan and picturesque Greek islands, with unique architecture, narrow streets and many shops. 

Arrive at the port of Piraeus at around 19:30, and return to the hotel at around 21:20.`,
                image: "/UGCImages/greece/3.webp"
            },
            {
                day: 4,
                title: "Free days at Athens Riviera - Day 1st of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/11.webp"
            },
            {
                day: 5,
                title: "Free days at Athens Riviera - Day 2nd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/12.webp"
            },
            {
                day: 6,
                title: "Free days at Athens Riviera - Day 3rd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/13.webp"
            },
            {
                day: 7,
                title: "Free days at Athens Riviera - Day 4th of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/14.webp"
            },
            {
                day: 8,
                title: "Departure",
                description: `As your journey comes to an end, we'll arrange a timely transfer to the airport for your departure flight. Depart with cherished memories of Greece's beauty and hospitality.`,
                image: "/UGCImages/greece/15.webp"
            }
        ],
        images: [
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/7.webp",
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/1.webp",
        ],
        departureDates: [
            { date: "October 30 2025" },
            { date: "October 7, 14 2025" },
            { date: "October 4, 11, 18, 25 2025" },
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
            currentBatch: "October 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "October",
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
    },
    "athensMythology": {
        id: "athens-mythology-5-days",
        packageName: "Athens Mythology - 5 days",
        days: 5,
        nights: 4,
        amount: 62713,
        dateStart: "30 October",
        dateEnd: "26 Oct",
        description: `Step into the enchanting realm of Attica, where the sky unfolds a captivating spectacle. Prepare to be awestruck by the majestic Acropolis and the iconic Parthenon, timeless creations from the golden age of Greece. Immerse yourself in the allure of the New Acropolis Museum, a true gem and one of the world's finest.

        Indulge in a plethora of activities, savoring the distinct flavors of Greek cuisine that will delight your taste buds. Explore the local markets for unique treasures and immerse yourself in the vibrant nightlife that pulses through the city.

In Attica, a world of wonders awaits, promising unforgettable experiences that will leave you with cherished memories. Join us and be captivated by the magic that Greece has to offer!



`,
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "5 Days / 4 Nights",
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
            "Athens (Acropolis, Parthenon, Acropolis museum, Monastiraki, Thissio, Temple of Olympian Zeus, the historical centre)",
            "Argolis (Agamemnon Tomb, Mycenae archaeological site, Theatre of Epidaurus)",
            "Delphi (Sacred way, Oracle, Temple of Apollo)"
        ],
        inclusions: [
            "Arrival and departure transfers",
            "4 nights accommodation at a 4* hotel with breakfast",
            "Athens City Tour",
            "Argolis Tour",
            "Delphi Tour"
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
                title: "Arrival in Athens",
                description: `Welcome to Athens! Upon arrival at Athens airport, our assistant will warmly receive you and transfer you to the city center. Check-in at your hotel in Athens or Glyfada and settle in. In the evening, we invite you to join our optional Athens by night tour (optional). Experience a panoramic drive through the city center, where you'll witness the breathtaking illuminated Acropolis. Take a delightful stroll through the charming streets of Plaka and indulge in a traditional Greek Tavern, complete with a dinner accompanied by live Greek music. Overnight in Athens.`,
                image: "/UGCImages/greece/18.webp"
            },
            {
                day: 2,
                title: "Panoramic tour of Athens",
                description: `After a refreshing breakfast, embark on a comprehensive tour of Athens. Explore the fascinating contrasts that make this city so captivating. Our expert guides will take you to see notable landmarks such as the Panathenaic Stadium, the site of the first modern Olympic Games in 1896. Pass by the Prime Minister's residence (Old Royal Palace), the Temple of Olympian Zeus, Hadrian's Arch, the Parliament, and the memorial to the Unknown Soldier. Admire the architectural marvels of the Golden Age of Athens at the Acropolis, including the Propylaea, Temple of Athena Nike, Erechtheion, and the iconic Parthenon. Visit the Acropolis Museum, where you can immerse yourself in the wonders of the classical era. Enjoy the evening at your leisure or opt for a tour to witness the mesmerizing sunset at Cape Sounion. Overnight in Athens.`,
                image: "/UGCImages/greece/19.webp"
            },
            {
                day: 3,
                title: "Athens - Full Day Argolis",
                description: `After breakfast, embark on a full-day excursion to Argolis. Drive along the scenic coastal road and make a stop at the Corinth Canal for photo opportunities. Visit the renowned Theatre of Epidaurus, famous for its exceptional acoustics. Proceed to the charming town of Nafplion for a brief stop, then continue to Mycenae to explore the Archaeological site and the tomb of Agamemnon. Enjoy lunch during the visit. Return to Athens for overnight.`,
                image: "/UGCImages/greece/20.webp"
            },
            {
                day: 4,
                title: "Athens -  Full Day Delphi",
                description: `Start your day with a delicious breakfast before embarking on a journey to Delphi. Delve into layers of myth and history as you explore this magnificent site. Discover why it was considered the "navel of the world" when Zeus sent two eagles in opposite directions, and they met at Delphi. Walk up the Sacred Way to the awe-inspiring Temple of Apollo, where the Delphic oracle issued prophecies. Marvel at the monuments dedicated to ancient Greek city-states, leaders, and ordinary people. Take in the energy that still resonates in this sacred place. Visit the theatre and the Stadium, where the Pythian Games were held. Enjoy lunch during the visit and make a short stop in the picturesque village of Arachova on the way back. Overnight in Athens.`,
                image: "/UGCImages/greece/17.webp"
            },
            {
                day: 5,
                title: "Departure",
                description: `Enjoy your final breakfast at the hotel before being transferred to the airport for your departure flight.`,
                image: "/UGCImages/greece/5.webp"
            },
        ],
        images: [
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/7.webp",
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/1.webp",
        ],
        departureDates: [
            { date: "October 30 2025" },
            { date: "October 6, 13, 20, 27 2025" },
            { date: "October 3, 10, 17, 24, 31 2025" },
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
            currentBatch: "October 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "October",
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
    },
    "peninsulaAthos": {
        id: "peninsula-athos-pella-vergina-5-days",
        packageName: "Thessaloniki Peninsula of Athos Pella Vergina - 5 days",
        days: 5,
        nights: 4,
        amount: 43825,
        dateStart: "23 October",
        dateEnd: "26 Oct",
        description: `Embark on a captivating journey through "Discover Byzantine Greece," a 5-day package unveiling the wonders of Thessaloniki, the sacred Peninsula of Athos, and the historical gems of Pella and Vergina.

Immerse yourself in the cultural heart of Thessaloniki, where ancient tales echo through cobblestone streets and magnificent churches. Explore the secluded monasteries and breathtaking landscapes of the Peninsula of Athos, a UNESCO World Heritage site.`,
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
            "Thessaloniki (White Tower, Rotonda, Galerian Complex, Ano Poli, Archaeological Museum, Agios Dimitrios)",
            "Athos Peninsula (Cruise)",
            "Pella (Archeological Site)",
            "Vergina (the Royal Tombs)"
        ],
        inclusions: [
            "Arrival and departure transfers",
            "4 nights accomodation in a 4* hotel with breakfast",
            "Thessaloniki City Tour",
            "Athos Cruise (with transfer)",
            "Pella Vergina Tour"
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
                title: "Thessaloniki - Embrace the Charm of Northern Greece",
                description: `Welcome to Thessaloniki, the vibrant heart of Northern Greece. Upon arrival, you'll be transferred to your hotel, where you can relax and settle in. Take the rest of the day to explore the city at your own pace and immerse yourself in its unique atmosphere. Overnight at the hotel.`,
                image: "/UGCImages/greece/1.webp"
            },
            {
                day: 2,
                title: "Thessaloniki - Unveiling Cultural Treasures",
                description: `Start your day with a delightful breakfast before embarking on a panoramic city tour of Thessaloniki. Discover the cultural landmarks that make this city so special, including the Galerius Arch, Rotunda, Saint Sofia, Egnatia, and Aristotle's Square. Ascend to the Byzantine Castles atop the city, where breathtaking beauty awaits. Visit the Byzantine Museum, the Church of St. Demetrios and its Crypt, and the iconic White Tower. In the afternoon, continue your exploration of the city centre, where numerous monuments from the Byzantine period await your discovery. Overnight at the hotel.`,
                image: "/UGCImages/greece/2.webp"
            },
            {
                day: 3,
                title: "Mount Athos - A Glimpse into Monasticism",
                description: `After a delicious breakfast, depart early for the picturesque village of Ouranoupoli. Board a ferry for a mini-cruise to Mount Athos, a sacred mountainous peninsula in Chalkidiki known as a significant center of Eastern Orthodox monasticism. Marvel at the natural beauty and spiritual aura as you sail around the peninsula, home to 20 monasteries under the jurisdiction of the Ecumenical Patriarch of Constantinople. Return to Ouranoupoli and enjoy some free time before heading back to Thessaloniki. Overnight at the hotel.`,
                image: "/UGCImages/greece/3.webp"
            },
            {
                day: 4,
                title: "Thessaloniki  - Pella - Vergina - Ancient Wonders Unveiled",
                description: `Indulge in a delicious breakfast before embarking on a full-day tour to discover the ancient wonders of Pella and Vergina. Begin your journey in Vergina, the ancient capital of the Kingdom of Macedonia. Explore the Royal Tombs, a remarkable archaeological discovery of global significance protected by UNESCO as a world cultural heritage site. Step back in time and gain insight into the rich history of this ancient kingdom.

At the end of the day, return to Thessaloniki for an overnight stay, filled with memories of the historical wonders you've witnessed.`,
                image: "/UGCImages/greece/4.webp"
            },
            {
                day: 5,
                title: "Farewell to Thessaloniki",
                description: `Enjoy a satisfying breakfast at the hotel before bidding farewell to Thessaloniki. Transfer to the airport, carrying cherished memories of the city's cultural treasures and warm hospitality.`,
                image: "/UGCImages/greece/5.webp"
            },
        ],
        images: [
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/1.webp",
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/7.webp"
        ],
        departureDates: [
            { date: "October 24 2025" },
            { date: "October 1, 8, 15, 22, 29 2025" },
            { date: "October 5, 12, 19, 26 2025" },
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
            currentBatch: "October 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "October",
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
    },
    "athensMykonosSantoriniCrete": {
        id: "athens-mykonos-santorini-crete-11-days",
        packageName: "Athens - Mykonos - Santorini - Crete 11 Days",
        days: 11,
        nights: 10,
        amount: 100000,
        dateStart: "23 October",
        dateEnd: "26 Oct",
        description: `Embark on a captivating journey through the storied landscapes of ancient Greece, where myths and legends come alive. Uncover the birthplace of the Greek civilization, immersing yourself in its rich history, culture, and timeless traditions.

Explore the enchanting Aegean Sea, home to some of the world's most beautiful islands, each with its own unique charm and character. Embrace the local way of life, savoring the delicious flavors of Greek cuisine, and experiencing the vibrant nightlife that ignites the senses.

This package offers a chance to uncover the beauty and mystery of Greece, where the iconic Apollonius Light guides you through an unforgettable adventure. Join us on this extraordinary journey, where every step will lead you to the heart of Greece's captivating allure, leaving you with cherished memories that will last a lifetime.



`,
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
            "Athens (Acropolis, Parthenon, Acropolis Museum, Monastiraki, Thissio, Historical Center)",
            "Mykonos (Little Venice, Lower Mills, Matogiannia)",
            "Delos (archaeological museum, ancient theatre, Temple of Isis)",
            "Santorini (archaeological site of Akrotiri, Oia, Fira, Nea Kameni volcano)",
            "Heraklion in Crete (Knossos Palace)"
        ],
        inclusions: [
            "Arrival and departure transfers in Athens, Mykonos, Santorini, Crete",
            "9 nights accommodation in 4* and 3* hotels with breakfast (2 nights in Athens in 4* hotel, 3 nights in Mykonos in 3* hotel, 2 nights in Santorini in 3* hotels, 2 nights in Heraklion in 3* hotel)",
            "1 Overnight in a 4-bed inside Cabin on the Ferry Heraklion - Piraeus",
            "Ferry tickets Piraeus-Mykonos, Mykonos-Santorini, Santorini-Heraklion. Heraklion-Piraeus",
            "Athens City Tour"
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
                title: "Athens - The Heart of Ancient Greece",
                description: `Upon your arrival at Athens International Airport, you will be warmly welcomed by our representative who will arrange for your smooth transfer to your hotel. Depending on your arrival time, you will have some free time to relax and get acquainted with the vibrant atmosphere of the Greek capital. In the evening, we recommend taking a leisurely stroll to experience the exciting nightlife of Athens.`,
                image: "/UGCImages/greece/1.webp"
            },
            {
                day: 2,
                title: "Panoramic tour of Athens",
                description: `After a delightful breakfast, embark on a panoramic tour of Athens to explore the city's fascinating sites and striking contrasts. Accompanied by our expert guides, you will first visit the historic Panathenaic Stadium, where the first modern Olympic Games were held in 1896.

Continuing the tour, pass by significant landmarks such as the Prime Minister's residence (Old Royal Palace) guarded by the Evzones in their colorful uniforms, the majestic Temple of Olympian Zeus, the iconic Hadrian's Arch, the Parliament, and the solemn memorial to the Unknown Soldier. Delve into the city's cultural heritage as you pass by the Academy, the University, and the National Library.

Next, you will ascend the Acropolis, an awe-inspiring citadel that houses the architectural masterpieces of the Golden Age of Athens. Marvel at the Propylaea, the Temple of Athena Nike, the Erechtheion, and the grand Parthenon, a monument that symbolizes harmony between material and spirit.

The Acropolis Museum awaits your visit, showcasing the wonders of the classical era. The evening is yours to savor the captivating charm of Athens. For a memorable experience, consider an optional tour to witness the breathtaking sunset at Cape Sounion.`,
                image: "/UGCImages/greece/2.webp"
            },
            {
                day: 3,
                title: "Athens - Mykonos",
                description: `In the early morning, relish a delicious breakfast before heading to Piraeus port for a ferry ride to the enchanting island of Mykonos. Once you arrive, our team will transfer you to your hotel, where you will have the rest of the day to enjoy the island's delights at your own pace.`,
                image: "/UGCImages/greece/3.webp"
            },
            {
                day: 4,
                title: "Mykonos – (Optional island tour)",
                description: `Today is yours to explore Mykonos according to your preferences. You can choose to indulge in an optional tour that unveils the countryside and beaches of the island. The tour includes a visit to the serene Agios Ioannis beach, the traditional village of Ano Mera with its 16th-century Panagia Tourliani monastery, and the picturesque Kalafatis beach, perfect for relaxation.

Delight in a stroll through Mykonos town, where you'll encounter charming cobblestone streets, iconic windmills, and the unique beauty of Little Venice. Admire the Paraportiani church and Saint Nicholas church before enjoying the freedom to explore the town further at your leisure.`,
                image: "/UGCImages/greece/4.webp"
            },
            {
                day: 5,
                title: "Mykonos - Delos (Optional Tour)",
                description: `After breakfast, you have the option to embark on an inspiring tour of the mythical island of Delos. This sacred island was once believed to be the birthplace of Apollo, the god of light, and Artemis, the goddess of the hunt. Explore the impressive archaeological site of Delos, one of the most significant in Greek culture, boasting well-preserved ruins and fascinating history.

Upon returning to Mykonos in the afternoon, you can choose to unwind on the island or continue your exploration.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 6,
                title: "Mykonos - Santorini",
                description: `After breakfast, you will be transferred to the port of Mykonos for a ferry ride to Santorini. Upon arrival, you will be transferred to your hotel, where you will have the rest of the day to enjoy the island's delights at your own pace.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 7,
                title: "Santorini -  (Optional island tour)",
                description: `We will start with a visit to the Akrotiri Archaeological site with a licensed guide at one of the most important prehistoric settlements of Greece. Akrotiri is a Bronze Age settlement on the volcanic island of Santorini (Thera). The settlement was destroyed by a huge eruption during the 17th century BC and buried under the volcanic ash, which preserved the whole city in perfect conditions so as to be referred often as “Prehistoric Pompei” The settlement has been suggested as a possible inspiration for Plato's story of Atlantis. The site has been excavated since 1967. (Guided Tour 1 & ½ h) Entrance Fees are not included in the price. We will continue with Red Beach, where we will have some free time for photos or for a walk along the coastline. Soaring red lava cliffs drop right to the sandy shore and into the clear blue sea. (45m)

We will continue with the premier Perivolos black sand beach, which offers a big variety of restaurants, taverns, cafes, beach bars & watersports and is an ideal destination for those who want to combine relaxation, swimming & good food. Time at leisure for lunch or swimming (1 & ½ - 2 h ) (Lunch is not included in the price). We will take part in a walking tour at Megalochori, one of the most beautiful traditional villages on the island. Typical traditional Cycladic houses, neoclassic buildings, and small houses dug in the volcanic rock blend together with harmony, where we can also the typical small white churches with blue domes. (25 min)`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 8,
                title: "Santorini - Heraklion",
                description: `After breakfast, we will transfer you to the port to board the ferry to Heraklion, the capital city of the magnificent island of Crete. Upon arrival, you will be transferred to your hotel for check-in. The rest of the day is yours to explore the vibrant city of Heraklion, steeped in history and boasting impressive architecture.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 9,
                title: "Heraklion - Knossos Palace (Optional Tour)",
                description: `Enjoy breakfast, followed by an optional tour to explore the wonders of the Minoan civilization. Start the day with a visit to the legendary Minoan palace of Knossos, considered the oldest European civilization dating back around 5,000 years. Learn about the mythical Labyrinth of Homer and the history of this significant archaeological site.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 10,
                title: "Heraklion - Athens",
                description: `After breakfast, you have a free day in Heraklion to discover the city's charms independently. Visit the bustling open-air market, the vibrant Venetian harbor, or the ancient city walls. In the evening, we will transfer you to the port to board the ferry to Piraeus (Athens).`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 11,
                title: "Athens - Farewell",
                description: `Our assistant will meet you at the port upon your arrival and transfer you to the airport for your departure flight, concluding this unforgettable Greek adventure.`,
                image: "/UGCImages/greece/6.webp"
            }

        ],
        images: [
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/7.webp",
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/1.webp",
        ],
        departureDates: [
            { date: "October 24 2025" },
            { date: "October 1, 8, 15, 22, 29 2025" },
            { date: "October 5, 12, 19, 26 2025" },
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
            currentBatch: "October 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "October",
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
    },
    "classicalGreeceItaly": {
        id: "classical-greece-captivating-italy-14-days",
        packageName: "Classical Greece and captivating Italy - 14 days",
        days: 14,
        nights: 13,
        amount: 171597,
        dateStart: "23 October",
        dateEnd: "06 October",
        description: `Greece,  a country with ancient history, great historical monuments, picturesque neighborhoods in the historic center and modern architecture in the suburbs. Intense nightlife, beaches, mountains, traditional cuisine and gourmet restaurants. 

Italy, a country with endless natural beauties taken from a fairy tale, that enchant every visitor and make him revive cinematic scenes.`,
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
            "Athens(Acropolis, Acropolis Museum, Monastiraki, Thissio, Temple of Olympian Zeus, historical centre)",
            "Italy(Rome, Vatican, Saint Peter, Siena, Florence, Venice, Milan)"
        ],
        inclusions: [
            "Transfers to/from the airport",
            "13 night accomodation to a 4*,5* hotel",
            "Tours as mentioned in the program with luxury buses",
            "City tours as mentioned in the program"
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
                title: "Athens - The Heart of Ancient Greece",
                description: `Upon your arrival at Athens Airport, you will be greeted by our representative and transferred to your hotel in Athens. After check-in, you'll have the rest of the day to relax and explore the city at your own pace. Take a leisurely walk to enjoy the charm of Athens at night.`,
                image: "/UGCImages/greece/1.webp"
            },
            {
                day: 2,
                title: "Panoramic tour of Athens",
                description: `After a delightful breakfast, embark on a panoramic tour of Athens to explore the city's fascinating sites and striking contrasts. Accompanied by our expert guides, you will first visit the historic Panathenaic Stadium, where the first modern Olympic Games were held in 1896.

Continuing the tour, pass by significant landmarks such as the Prime Minister's residence (Old Royal Palace) guarded by the Evzones in their colorful uniforms, the majestic Temple of Olympian Zeus, the iconic Hadrian's Arch, the Parliament, and the solemn memorial to the Unknown Soldier. Delve into the city's cultural heritage as you pass by the Academy, the University, and the National Library.

Next, you will ascend the Acropolis, an awe-inspiring citadel that houses the architectural masterpieces of the Golden Age of Athens. Marvel at the Propylaea, the Temple of Athena Nike, the Erechtheion, and the grand Parthenon, a monument that symbolizes harmony between material and spirit.

The Acropolis Museum awaits your visit, showcasing the wonders of the classical era. The evening is yours to savor the captivating charm of Athens. For a memorable experience, consider an optional tour to witness the breathtaking sunset at Cape Sounion.`,
                image: "/UGCImages/greece/2.webp"
            },
            {
                day: 3,
                title: "One day Cruise to Aegina, Poros, Hydra",
                description: `Today, you have the option to join a one-day cruise to the Saronic Gulf islands of Aegina, Poros, and Hydra. The cruise departs from the port of Piraeus and allows you to explore the beautiful islands at your own pace. In Aegina, visit the monastery of Aghios Nektarios or the Temple of Aphaia. In Poros, enjoy a walk amidst pine and lemon trees. Finally, explore the picturesque streets of Hydra.`,
                image: "/UGCImages/greece/3.webp"
            },
            {
                day: 4,
                title: "Epidaurus – Mycenae - Olympia",
                description: `Departure from Athens, we travel to the Corinth Canal (shortstop). We continue to Epidaurus and visit the theater, known for its excellent acoustics. Depart for Nafplion (short stop), continue to Mycenae, visit the Citadel and the tomb of Agamemnon and depart for Olympia, across the Peloponnese. Arrive for dinner and overnight.`,
                image: "/UGCImages/greece/4.webp"
            },
            {
                day: 5,
                title: "Olympia – Delphi",
                description: `Visit Olympia, the birthplace of the Olympic Games (Museum - Archaeological Site). Departure for Delphi, crossing the plains of Ilia and Achaia and reaching the large bridge of Rio, which connects the Peloponnese with mainland Greece (Antirio) through Nafpaktos and other picturesque towns. Arrive for dinner and overnight.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 6,
                title: "Meteora",
                description: `Visit Delphi (Museum and Archaeological site). Departure for Kalambaka, situated at the foot of Meteora, an amazing and unique scenery in the world. Arrive for dinner and overnight.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 7,
                title: "One day Cruise to Aegina, Poros, Hydra",
                description: `One day Cruise (optional) Departure from the hotel in the morning with a guide towards the port of Piraeus. The ship sails at 08:00 am for the islands of the Saronic Gulf. Free to visit each island. Aegina: the biggest island of the Saronic Gulf. Two major attractions to visit in Aegina are (note: Optional tours organized on board the ship): The monastery of Aghios Nektarios, who was the last declared saint by the Greek Orthodox Church and the Temple of Aphaia, the second best-preserved temple in Greece after the Parthenon in Athens. Poros is the smallest of the three islands, full of pine trees and lemon trees, where you are going to have a nice walk and enjoy the great scenery. Hydra: One of the most cosmopolitan and picturesque Greek islands, with unique architecture, narrow streets and many shops. Arrival at the port of Piraeus at around 19:30, return to the hotel.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 8,
                title: "Flight to Rome",
                description: `Transfer at the airport and flight to Rome. Arrival in the capital of Italy and departure to the hotel. After settling into the hotel, we will visit the historical center accompanied by our leader, to have the opportunity for a first acquaintance with the eternal city.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 9,
                title: "Rome – City tour – Agios Petros",
                description: `Breakfast followed by a guided tour of St. Peter's Basilica, the largest Christian church that will impress you with its wealth and grandeur. We will then visit and take a guided tour of the Colosseum, the largest surviving ancient Roman amphitheater in the world. Once it resounded with the shouts of gladiators and the screams of the mob, and later the blows of hammers that removed the plinths and marbles that decorated it to build the churches and palaces of papal Rome. The Roman market was the heart of ancient Rome and the center of power of an empire that spanned most of the then known world. Today it is one of the most important archaeological sites in Europe.

                In Piazza Venezia you will be impressed by the massive monument dedicated to Victor Emmanuel II, the first king of modern united Italy, which is also the monument to the Unknown Soldier in front of the Capitoline Hill, the most important of the seven historical hills where the ancient city was built, from which Rome has been governed from ancient times until today. Then with our office escort, you will visit the famous Piazza Di Spagna, Piazza Navona, an archaeological paradise for its visitors, full of restaurants and cafes, actors, musicians and outdoor painters. The stunning central Fountain of the Four Rivers will leave you speechless. At the end we will visit the Pantheon. This ancient Pagan temple is preserved almost intact and the natural lighting from the largest wooden dome in all of Europe is unique. In the afternoon return to the hotel. For the evening we recommend a walk and entertainment in Trastevere.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 10,
                title: "Rome - Vatican - Saint Peter - Siena - Florence",
                description: `Visit the Vatican Museums, home to remarkable art and treasures, including Michelangelo's famous Sistine Chapel ceiling frescoes.

Depart for medieval Siena, known for its beautiful Piazza del Campo and stunning architecture.

Continue to Florence and check-in at the hotel.

Overnight in Florence.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 11,
                title: "Florence – City tour – Venice",
                description: `Explore the art-rich city of Florence with a guided city tour. Admire famous landmarks such as the Church of the Holy Cross, Ponte Vecchio, Piazza Della Signoria, Piazza San Giovanni, and the magnificent Santa Maria Del Fiore Cathedral with Brunelleschi's dome.

Depart for Venice and check in at the hotel in the Mestre area.

Overnight in Venice.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 12,
                title: "Venice – City tour – Milan",
                description: `After breakfast, embark on a self-guided exploration of Venice, the city of canals. Take a Vaporetto to Piazza San Marco and visit St. Mark's Basilica, Doge's Palace, Bridge of Sighs, and other iconic landmarks.

Visit the Orthodox Church of Ag. Georgiou and a traditional Murano glass manufacturing workshop.

Overnight in Venice.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 13,
                title: "Milan free day",
                description: `After your breakfast, travel to Milan and enjoy a free day to explore the city on your own. Visit the Brera district known for design and fashion, the Navigli district with its canals, or explore traditional Milanese houses.`,
                image: "/UGCImages/greece/6.webp"
            },
            {
                day: 14,
                title: "Milan - Returning flight",
                description: `Breakfast and then the tour of Milan. During which we will see the largest Gothic building in the country, the Duomo Cathedral, the famous covered arcade Galleria Vittorio Emanuele II, the neoclassical theater of Milan's staircase and its museum. Time for shopping and then departure for the airport and boarding our return flight.`,
                image: "/UGCImages/greece/6.webp"
            },

        ],
        images: [
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/7.webp",
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/1.webp",
        ],
        departureDates: [
            { date: "October 24 2025" },
            { date: "October 1, 8, 15, 22, 29 2025" },
            { date: "October 5, 12, 19, 26 2025" },
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
            currentBatch: "October 2024",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["1st", "15th"],
                    availableSeats: 8
                },
                {
                    month: "October",
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
    },

};

export const withoutFlightPackages: Record<string, GreecePackage> = {

};