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
    },
    "athenianReviera": {
        id: "athenianReviera",
        packageName: "Athensian Riviera",
        days: 8,
        nights: 7,
        amount: 64536,
        dateStart: "24 June",
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
                image: "/UGCImages/greece/4.webp"
            },
            {
                day: 5,
                title: "Free days at Athens Riviera - Day 2nd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 6,
                title: "Free days at Athens Riviera - Day 3rd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 7,
                title: "Free days at Athens Riviera - Day 4th of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 8,
                title: "Departure",
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
    },
    "ahtensThessaloniki": {
        id: "athens-thessaloniki-5-days",
        packageName: "Athens Thessaloniki - 5 days",
        days: 5,
        nights: 4,
        amount: 34536,
        dateStart: "24 June",
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
                image: "/UGCImages/greece/4.webp"
            },
            {
                day: 5,
                title: "Free days at Athens Riviera - Day 2nd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 6,
                title: "Free days at Athens Riviera - Day 3rd of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 7,
                title: "Free days at Athens Riviera - Day 4th of 4 days of free days ",
                description: `Take time out of the city and admire the nearby enchantments of the Greek coastline. Athens has some stunning beaches locally. If you are looking for a calm and quiet beach visit the private beaches found southeast of Athens in Glyfada. Here you may have to pay for access but a visit to the unspoiled coves is worth the charge. To the northeast of Athens, the beaches are more alive with locals and tourists, you will be part of the buzzing holiday atmosphere! The best way to discover the beaches surrounding Athens is to hop on a bus and get off when you see a beach that takes your fancy.`,
                image: "/UGCImages/greece/5.webp"
            },
            {
                day: 8,
                title: "Departure",
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
    },
    "athensMythology": {
        id: "athens-mythology-5-days",
        packageName: "Athens Mythology - 5 days",
        days: 5,
        nights: 4,
        amount: 62713,
        dateStart: "23 June",
        dateEnd: "26 Oct",
        description: `Step into the enchanting realm of Attica, where the sky unfolds a captivating spectacle. Prepare to be awestruck by the majestic Acropolis and the iconic Parthenon, timeless creations from the golden age of Greece. Immerse yourself in the allure of the New Acropolis Museum, a true gem and one of the world's finest.

        Indulge in a plethora of activities, savoring the distinct flavors of Greek cuisine that will delight your taste buds. Explore the local markets for unique treasures and immerse yourself in the vibrant nightlife that pulses through the city.

In Attica, a world of wonders awaits, promising unforgettable experiences that will leave you with cherished memories. Join us and be captivated by the magic that Greece has to offer!



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
                title: "Arrival in Athens ",
                description: `Welcome to Athens! Upon arrival at Athens airport, our assistant will warmly receive you and transfer you to the city center. Check-in at your hotel in Athens or Glyfada and settle in. In the evening, we invite you to join our optional Athens by night tour (optional). Experience a panoramic drive through the city center, where you'll witness the breathtaking illuminated Acropolis. Take a delightful stroll through the charming streets of Plaka and indulge in a traditional Greek Tavern, complete with a dinner accompanied by live Greek music. Overnight in Athens.`,
                image: "/UGCImages/greece/1.webp"
            },
            {
                day: 2,
                title: "Panoramic tour of Athens",
                description: `After a refreshing breakfast, embark on a comprehensive tour of Athens. Explore the fascinating contrasts that make this city so captivating. Our expert guides will take you to see notable landmarks such as the Panathenaic Stadium, the site of the first modern Olympic Games in 1896. Pass by the Prime Minister's residence (Old Royal Palace), the Temple of Olympian Zeus, Hadrian's Arch, the Parliament, and the memorial to the Unknown Soldier. Admire the architectural marvels of the Golden Age of Athens at the Acropolis, including the Propylaea, Temple of Athena Nike, Erechtheion, and the iconic Parthenon. Visit the Acropolis Museum, where you can immerse yourself in the wonders of the classical era. Enjoy the evening at your leisure or opt for a tour to witness the mesmerizing sunset at Cape Sounion. Overnight in Athens.`,
                image: "/UGCImages/greece/2.webp"
            },
            {
                day: 3,
                title: "Athens - Full Day Argolis",
                description: `After breakfast, embark on a full-day excursion to Argolis. Drive along the scenic coastal road and make a stop at the Corinth Canal for photo opportunities. Visit the renowned Theatre of Epidaurus, famous for its exceptional acoustics. Proceed to the charming town of Nafplion for a brief stop, then continue to Mycenae to explore the Archaeological site and the tomb of Agamemnon. Enjoy lunch during the visit. Return to Athens for overnight.`,
                image: "/UGCImages/greece/3.webp"
            },
            {
                day: 4,
                title: "Athens -  Full Day Delphi",
                description: `Start your day with a delicious breakfast before embarking on a journey to Delphi. Delve into layers of myth and history as you explore this magnificent site. Discover why it was considered the "navel of the world" when Zeus sent two eagles in opposite directions, and they met at Delphi. Walk up the Sacred Way to the awe-inspiring Temple of Apollo, where the Delphic oracle issued prophecies. Marvel at the monuments dedicated to ancient Greek city-states, leaders, and ordinary people. Take in the energy that still resonates in this sacred place. Visit the theatre and the Stadium, where the Pythian Games were held. Enjoy lunch during the visit and make a short stop in the picturesque village of Arachova on the way back. Overnight in Athens.`,
                image: "/UGCImages/greece/4.webp"
            },
            {
                day: 5,
                title: "Departure",
                description: `Enjoy your final breakfast at the hotel before being transferred to the airport for your departure flight.`,
                image: "/UGCImages/greece/5.webp"
            },
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
            { date: "June 23, 2025" },
            { date: "October 26, 2025" }
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
    },
    "peninsulaAthos": {
        id: "peninsula-athos-pella-vergina-5-days",
        packageName: "Thessaloniki Peninsula of Athos Pella Vergina - 5 days",
        days: 5,
        nights: 4,
        amount: 43825,
        dateStart: "23 June",
        dateEnd: "26 Oct",
        description: `Step into the enchanting realm of Attica, where the sky unfolds a captivating spectacle. Prepare to be awestruck by the majestic Acropolis and the iconic Parthenon, timeless creations from the golden age of Greece. Immerse yourself in the allure of the New Acropolis Museum, a true gem and one of the world's finest.

        Indulge in a plethora of activities, savoring the distinct flavors of Greek cuisine that will delight your taste buds. Explore the local markets for unique treasures and immerse yourself in the vibrant nightlife that pulses through the city.

In Attica, a world of wonders awaits, promising unforgettable experiences that will leave you with cherished memories. Join us and be captivated by the magic that Greece has to offer!



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
            "/UGCImages/greece/1.webp",
            "/UGCImages/greece/2.webp",
            "/UGCImages/greece/3.webp",
            "/UGCImages/greece/4.webp",
            "/UGCImages/greece/5.webp",
            "/UGCImages/greece/6.webp",
            "/UGCImages/greece/7.webp"
        ],
        departureDates: [
            { date: "June 23, 2025" },
            { date: "October 26, 2025" }
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
    },
};

export const withoutFlightPackages: Record<string, GreecePackage> = {
    "peninsulaAthos": {
        ...greecePackages["peninsulaAthos"],
        id: "peninsula-athos-pella-vergina-5-days-no-flight",
        packageName: "Thessaloniki Peninsula of Athos Pella Vergina - 5 days (Without Flights)",
        amount: 43825
    }
};