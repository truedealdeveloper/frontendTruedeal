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

export interface TurkeyPackage {
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

export const turkeyPackages: Record<string, TurkeyPackage> = {
    turkeyCity: {
        id: "6-days-turkey-city-3n-Istanbul-2n-Cappadocia",
        packageName: "6 Days Turkey City",
        days: 6,
        nights: 5,
        amount: 142500,
        dateStart: "01 July 2025",
        dateEnd: "26 August 2025",
        description: "Experience the vibrant city life of Turkey with our 6-day tour covering iconic attractions, cultural sites, and modern marvels.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Starting July",
            duration: "6D5N Turkey Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Istanbul",
                hotel: "Golden Age Hotel/Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Cappadocia",
                hotel: "Royal Stone Houses/Similar",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Day 1: Istanbul Arrival + Evening Bosphorus Dinner Cruise",
            "Day 2: Istanbul - Byzantium & Ottoman Tour (Hagia Sophia, Blue Mosque, Hippodrome, Grand Bazaar, Topkapi Palace)",
            "Day 3: Bursa Tour from Istanbul with Lunch & Cable Car",
            "Day 4: Istanbul to Cappadocia Transfer",
            "Day 5: Cappadocia North Red Tour (Optional Hot Air Balloon)",
            "Day 6: Departure"
        ],
        inclusions: [
            "3 Nights' Accommodation in Istanbul on above mentioned hotels",
            "2 Nights' Accommodation in Cappadocia on above mentioned hotels",
            "05 open buffet Breakfasts",
            "04 Lunch/Dinner included",
            "Evening Bosphorus cruise with dinner and soft drinks",
            "Full day Istanbul city tour with local lunch (Topkapi Palace & Hagia Sophia Entrance Not included)",
            "Full day Bursa city tour with local lunch",
            "Full day Cappadocia North tour with local lunch",
            "All airport transfers on private basis",
            "All tours on SIC basis",
            "Domestic Flights",
            "Direct International Flights from Delhi & Mumbai",
            "Visa"
        ],
        exclusions: [
            "Hot Air Balloon",
            "Personal Expenses",
            "Anything not mentioned in the inclusions",
            "Beverages NOT included in the quotation (unless specified)",
            "Entrance Fee (unless specified)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Istanbul Arrival (Evening Dinner Cruise)",
                description: "On the time of your arrival to Istanbul airport the welcome staff will be waiting for you at the exit, after then, you will be transported to the hotel. Evening gets ready for Bosphorus Cruise. The best way to see the Bosphorus in all its beauty is to take a boat trip. This is the waterway connecting the Black Sea to the Marmara and dividing Istanbul into two continents. It's sure to be a night you'll remember for a lifetime. Later you will drop back to hotel. Overnight stay in hotel.",
                image: "/UGCImages/turkey/turkey2/1.png"
            },
            {
                day: 2,
                title: "Istanbul - Byzantium & Ottoman Tour",
                description: "After breakfast, pick-up from the hotel, meet your guide for Full Day Ottoman & Byzantium Tour visits The Hagia Sophia, The Blue Mosque, Hippodrome of Constantinople, Grand Bazaar, Topkapi Palace Museum, in the end of tour, back to hotel. Overnight in Istanbul.",
                image: "/UGCImages/turkey/turkey2/2.png"
            },
            {
                day: 3,
                title: "Bursa Tour from Istanbul Included Lunch & Cable Car",
                description: "After Breakfast, you will be picked up from hotel and get ready to visit Bursa tour. Discover Bursa, one of Turkey's significant cities, on our Bursa Day Tour from Istanbul. Once the first capital of the Ottoman Empire, Bursa is now the country's third-largest city, drawing thousands of visitors annually. With its breathtaking landscapes, historical treasures, and rich culture, Bursa promises an enthralling and rejuvenating day. Evening return to hotel for overnight stay.",
                image: "/UGCImages/turkey/turkey2/3.png"
            },
            {
                day: 4,
                title: "Istanbul – Cappadocia",
                description: "After breakfast, you will be transferred to the airport for a domestic flight to Kayseri. After arrival at the airport, transfer to Cappadocia Hotel. Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey2/4.png"
            },
            {
                day: 5,
                title: "Cappadocia – Cappadocia North Red Tour",
                description: "Early morning Hot Air balloon after this return hotel by your own expenses. After breakfast you will pick you up from the hotel for Cappadocia Full Day Tour, Visit places like Stunning Uchisar rock-castle fortress, UNESCO World Heritage site of the Goreme Open Air Museum, Pasabag Valley (Monk's Valley). Lunch at a local restaurant offering traditional Turkish dishes from the region. Later Visit the town of Avanos, located along the longest river in Turkey. Next drive to see some of the most spectacular rock formations - sure to awaken your imagination - the famous Devrent Valley. Lastly, before dropping off to stop by the famous three beauties at Urgup (the famous fairy chimneys in urgup). Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey2/5.png"
            },
            {
                day: 6,
                title: "Departure",
                description: "After breakfast. You will be transferred to Airport for your flight to SAW. From there our transfer will pick you and drop you to IST airport.",
                image: "/UGCImages/turkey/turkey2/6.png"
            }
        ],
        images: [
            "/UGCImages/turkey/turkey1/1.png",
            "/UGCImages/turkey/turkey1/2.png",
            "/UGCImages/turkey/turkey1/3.png",
            "/UGCImages/turkey/turkey1/4.png",
        ],
        departureDates: [
            { date: "July 2025 - August 2025" }
        ],
        additionalInfo: {
            highlights: [
                "Direct Flights from Delhi & Mumbai",
                "Universal Studios Turkey",
                "Gardens by the Bay",
                "Marina Bay Sands",
                "Sentosa Island",
                "Shopping at Orchard Road"
            ],
            bestTimeToVisit: "May to July ",
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
        },
        experiences: [
            {
                title: "Istanbul",
                image: "/UGCImages/turkey/turkey2/1.png"
            },
            {
                title: "Cappadocia",
                image: "/UGCImages/turkey/turkey2/2.png"
            },
            {
                title: "Bursa",
                image: "/UGCImages/turkey/turkey2/3.png"
            },
            {
                title: "North Red Tour ",
                image: "/UGCImages/turkey/turkey1/3.png"
            }   
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Direct Flight",
                    departureCity: "New Delhi",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "8h 35m"
                },
                {
                    name: "Direct Flight",
                    departureCity: "Mumbai",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "7h 45m"
                }
            ]
        }
    },
    turkeyExplore: {
        id: "7-days-turkey-2n-Istanbul-2n-Cappadocia-2n-Antalya",
        packageName: "7 Days Turkey Exploration Package",
        days: 7,
        nights: 6,
        amount: 159819,
        dateStart: "01 July 2025",
        dateEnd: "26 August 2025",
        description: "Experience the vibrant city life of Turkey with our 7-day tour covering iconic attractions, cultural sites, and modern marvels.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Starting July",
            duration: "7D6N Turkey Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Istanbul",
                hotel: "Golden Age Hotel/Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Cappadocia",
                hotel: "Royal Stone Houses/Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Antalya",
                hotel: "Best western Plus Khan/Similar",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Day 1: Istanbul Arrival + Evening Bosphorus Dinner Cruise",
            "Day 2: Istanbul - Byzantium & Ottoman Tour (Hagia Sophia, Blue Mosque, Hippodrome, Grand Bazaar, Topkapi Palace)",
            "Day 3: Istanbul to Cappadocia Transfer",
            "Day 4: Cappadocia North Red Tour (Optional Hot Air Balloon)",
            "Day 5: Cappadocia to Antalya Transfer",
            "Day 6: Full-Day Pamukkale & Hierapolis Tour from Antalya",
            "Day 7: Departure"
        ],
        inclusions: [
            "2 Nights Accommodation in Istanbul on mentioned hotels.",
            "2 Nights Accommodation in Cappadocia on mentioned hotel.",
            "2 Nights Accommodation in Antalya on mentioned hotels.",
            "1 Room on double sharing.", 
            "06 open buffet Breakfasts.",
            "Evening Bosphorus cruise with dinner and soft drinks.",
            "Full day Istanbul city tour.",
            "Full day Cappadocia North tour.",
            "Full day Pamukkale & Hierapolis tour",
            "All airport transfers on private basis.", 
            "All tours on SIC basis",
            "Domestic Air Fare",
            "International Airfare",
            "Visa"
        ],
        exclusions: [
            "Hot Air Balloon",
            "Personal Expenses",
            "Anything not mentioned in the inclusions.",
            "Beverages NOT included in the quotation (unless specified).",
            "Entrance Fee (unless specified)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Istanbul Arrival (Evening Dinner Cruise)",
                description: "On the time of your arrival to Istanbul airport the welcome staff will be waiting for you at the exit, after then, you will be transported to the hotel. Evening gets ready for Bosphorus Cruise. The best way to see the Bosphorus in all its beauty is to take a boat trip. This is the waterway connecting the Black Sea to the Marmara and dividing Istanbul into two continents. It's sure to be a night you'll remember for a lifetime. Later you will drop back to hotel. Overnight stay in hotel.",
                image: "/UGCImages/turkey/turkey3/1.png"
            },
            {
                day: 2,
                title: "Istanbul - Byzantium & Ottoman Tour",
                description: "After breakfast, pick-up from the hotel, meet your guide for Full Day Ottoman & Byzantium Tour visits The Hagia Sophia, The Blue Mosque, Hippodrome of Constantinople, Grand Bazaar, Topkapi Palace Museum, in the end of tour, back to hotel. Overnight in Istanbul.",
                image: "/UGCImages/turkey/turkey3/2.png"
            },
            {
                day: 3,
                title: "Istanbul – Cappadocia",
                description: "After breakfast, you will be transferred to the airport for a domestic flight to Kayseri. After arrival at the airport, transfer to Cappadocia Hotel. Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey3/3.png"
            },
            {
                day: 4,
                title: "Cappadocia – Cappadocia North Red Tour",
                description: "Early morning Hot Air balloon after this return hotel by your own expenses. After breakfast you will pick you up from the hotel for Cappadocia Full Day Tour, Visit places like Stunning Uchisar rock-castle fortress, UNESCO World Heritage site of the Goreme Open Air Museum, Pasabag Valley (Monk's Valley). Lunch at a local restaurant offering traditional Turkish dishes from the region. Later Visit the town of Avanos, located along the longest river in Turkey. Next drive to see some of the most spectacular rock formations - sure to awaken your imagination - the famous Devrent Valley. Lastly, before dropping off to stop by the famous three beauties at Urgup (the famous fairy chimneys in urgup). Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey3/4.png"
            },
            {
                day: 5,
                title: "Cappadocia – Antalya",
                description: "After breakfast, you will be transferred to the airport for a domestic flight to Antalya. After arrival at the airport, transfer to Antalya Hotel. Overnight in Antalya.",
                image: "/UGCImages/turkey/turkey3/5.png"
            },
            {
                day: 6,
                title: "Full-Day Pamukkale & Hierapolis Tour from Antalya City",
                description: "Your full day excursion begins in the early morning when you're picked up at your Antalya hotel and begin the drive to Pamukkale. After a lunch break, you'll visit the cascading snow-white terraced cliffs of this mysterious Cotton Palace. You'll will have a chance to swim in thermal pools. An additional option is to swim in Cleopatra's Pool, for an extra fee. Located in the province of Denizli, this extraordinary landscape was a focus of interest for visitors to the nearby Hellenistic spa town of Hierapolis, founded by the Attalid kings of Pergamom at the end of the 2nd century B.C. The therapeutic virtues of the waters were exploited at the various thermal installations which included immense hot basins and pools for swimming. Hydrotherapy was accompanied by religious practices, which were developed in relation to local cults. The event made the city more important that Saint Philip one of the twelve Apostles of Jesus Christ was killed there in 80 A.D. Evening return to hotel for overnight stay.",
                image: "/UGCImages/turkey/turkey3/6.png"
            },
            {
                day: 7,
                title: "Departure",
                description: "After breakfast. You will be transferred to Airport for your flight. Tour Ends…...!!!!",
                image: "/UGCImages/turkey/turkey3/7.png"
            }
        ],
        images: [
            "/UGCImages/turkey/turkey4/1.png",
            "/UGCImages/turkey/turkey4/2.png",
            "/UGCImages/turkey/turkey4/3.png",
            "/UGCImages/turkey/turkey4/4.png",
        ],
        departureDates: [
                { date: "July 2025 - August 2025" }
        ],
        additionalInfo: {
            highlights: [
                "Direct Flights from Delhi & Mumbai",
                "Universal Studios Turkey",
                "Gardens by the Bay",
                "Marina Bay Sands",
                "Sentosa Island",
                "Shopping at Orchard Road"
            ],
            bestTimeToVisit: "May to July ",
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
        },
        experiences: [
            {
                title: "Istanbul",
                image: "/UGCImages/turkey/turkey2/1.png"
            },
            {
                title: "Cappadocia",
                image: "/UGCImages/turkey/turkey2/2.png"
            },
            {
                title: "Bursa",
                image: "/UGCImages/turkey/turkey2/3.png"
            },
            {
                title: "North Red Tour ",
                image: "/UGCImages/turkey/turkey1/3.png"
            }   
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Direct Flight",
                    departureCity: "New Delhi",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "8h 35m"
                },
                {
                    name: "Direct Flight",
                    departureCity: "Mumbai",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "7h 45m"
                }
            ]
        }
    },
    turkeyAmazing: {
        id: "8-days-turkey-3N-Istanbul-2N-Cappadocia-2N-Antalya",
        packageName: "8 Days Turkey | 3N Istanbul | 2N Cappadocia | 2N Antalya",
        days: 8,
        nights: 7,
        amount: 165000,
        dateStart: "01 July 2025",
        dateEnd: "26 August 2025",
        description: "Experience the vibrant city life of Turkey with our 8-day tour covering iconic attractions, cultural sites, and modern marvels. This package includes 3 nights in Istanbul, 2 nights in Cappadocia, and 2 nights in Antalya.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Starting July",
            duration: "8D7N Turkey Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Istanbul",
                hotel: "Golden Age Hotel/Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Cappadocia",
                hotel: "Royal Stone Houses/Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Antalya",
                hotel: "Best western Plus Khan/Similar",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Day 1: Istanbul Arrival + Evening Bosphorus Dinner Cruise",
            "Day 2: Istanbul - Byzantium & Ottoman Tour (Hagia Sophia, Blue Mosque, Hippodrome, Grand Bazaar, Topkapi Palace)",
            "Day 3: Bursa Tour from Istanbul Included Lunch & Cable Car",
            "Day 4: Istanbul to Cappadocia Transfer",
            "Day 5: Cappadocia North Red Tour (Optional Hot Air Balloon)",
            "Day 6: Cappadocia to Antalya Transfer",
            "Day 7: Full-Day Pamukkale & Hierapolis Tour from Antalya",
            "Day 8: Departure"
        ],
        inclusions: [
            "3 Nights Accommodation in Istanbul on above mentioned hotels.",
            "2 Nights Accommodation in Cappadocia on above mentioned hotels",
            "2 Nights Accommodation in Antalya on above mentioned hotels.",
            "07 open buffet Breakfasts.",
            "Evening Bosphorus cruise with dinner and soft drinks",
            "Full day Istanbul city tour",
            "Bursa Tour from Istanbul Included with Cable Car",
            "Full day Cappadocia North tour",
            "Full day Pamukkale & Hierapolis tour",
            "All airport transfers on private basis.",
            "All tours on SIC basis.",
            "Domestic Airfare",
            "International Airfare",
            "Visa"
        ],
        exclusions: [
            "Hot Air Balloon", 
            "Personal Expenses",
            "Anything not mentioned in the inclusions.",
            "Beverages NOT included in the quotation (unless specified).",
            "Entrance Fee (unless specified)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Istanbul Arrival (Evening Dinner Cruise)",
                description: "On the time of your arrival to Istanbul airport the welcome staff will be waiting for you at the exit, after then, you will be transported to the hotel. Evening gets ready for Bosphorus Cruise. The best way to see the Bosphorus in all its beauty is to take a boat trip. This is the waterway connecting the Black Sea to the Marmara and dividing Istanbul into two continents. It's sure to be a night you'll remember for a lifetime. Later you will drop back to hotel. Overnight stay in hotel.",
                image: "/UGCImages/turkey/turkey5/1.png"
            },
            {
                day: 2,
                title: "Istanbul - Byzantium & Ottoman Tour",
                description: "After breakfast, pick-up from the hotel, meet your guide for Full Day Ottoman & Byzantium Tour visits The Hagia Sophia, The Blue Mosque, Hippodrome of Constantinople, Grand Bazaar, Topkapi Palace Museum, in the end of tour, back to hotel. Overnight in Istanbul.",
                image: "/UGCImages/turkey/turkey5/2.png"
            },
            {
                day: 3,
                title: "Bursa Tour from Istanbul Included Lunch & Cable Car",
                description: "After Breakfast, you will be picked up from hotel and get ready to visit Bursa tour. Discover Bursa, one of Turkey's significant cities, on our Bursa Day Tour from Istanbul. Once the first capital of the Ottoman Empire, Bursa is now the country's third-largest city, drawing thousands of visitors annually. With its breathtaking landscapes, historical treasures, and rich culture, Bursa promises an enthralling and rejuvenating day. Evening return to hotel for overnight stay.",
                image: "/UGCImages/turkey/turkey5/3.png"
            },
            {
                day: 4,
                title: "Istanbul – Cappadocia",
                description: "After breakfast, you will be transferred to the airport for a domestic flight to Kayseri. After arrival at the airport, transfer to Cappadocia Hotel. Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey5/4.png"
            },
            {
                day: 5,
                title: "Cappadocia – Cappadocia North Red Tour",
                description: "Early morning Hot Air balloon after this return hotel by your own expenses. After breakfast you will pick you up from the hotel for Cappadocia Full Day Tour, Visit places like Stunning Uchisar rock-castle fortress, UNESCO World Heritage site of the Goreme Open Air Museum, Pasabag Valley (Monk's Valley). Lunch at a local restaurant offering traditional Turkish dishes from the region. Later Visit the town of Avanos, located along the longest river in Turkey. Next drive to see some of the most spectacular rock formations - sure to awaken your imagination - the famous Devrent Valley. Lastly, before dropping off to stop by the famous three beauties at Urgup (the famous fairy chimneys in urgup). Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey5/5.png"
            },
            {
                day: 6,
                title: "Cappadocia – Antalya",
                description: "After breakfast, you will be transferred to the airport for a domestic flight to Antalya. After arrival at the airport, transfer to Antalya Hotel. Overnight in Antalya.",
                image: "/UGCImages/turkey/turkey5/6.png"
            },
            {
                day: 7,
                title: "Full-Day Pamukkale & Hierapolis Tour from Antalya City",
                description: "Your full day excursion begins in the early morning when you're picked up at your Antalya hotel and begin the drive to Pamukkale. After a lunch break, you'll visit the cascading snow-white terraced cliffs of this mysterious Cotton Palace. You'll will have a chance to swim in thermal pools. An additional option is to swim in Cleopatra's Pool, for an extra fee. Located in the province of Denizli, this extraordinary landscape was a focus of interest for visitors to the nearby Hellenistic spa town of Hierapolis, founded by the Attalid kings of Pergamom at the end of the 2nd century B.C. The therapeutic virtues of the waters were exploited at the various thermal installations which included immense hot basins and pools for swimming. Hydrotherapy was accompanied by religious practices, which were developed in relation to local cults. The event made the city more important that Saint Philip one of the twelve Apostles of Jesus Christ was killed there in 80 A.D. Evening return to hotel for overnight stay.",
                image: "/UGCImages/turkey/turkey5/7.png"
            },
            {
                day: 8,
                title: "Departure",
                description: "After breakfast. You will be transferred to Airport for your flight. Tour Ends…...!!!!",
                image: "/UGCImages/turkey/turkey5/8.png"
            }
        ],
        images: [
            "/UGCImages/turkey/turkey5/1.png",
            "/UGCImages/turkey/turkey5/2.png",
            "/UGCImages/turkey/turkey5/3.png",
            "/UGCImages/turkey/turkey5/4.png",
        ],
        departureDates: [
                { date: "July 2025 - August 2025" }
        ],
        additionalInfo: {
            highlights: [
                "Bursa Tour from Istanbul Included with Cable Car",
                "Full day Cappadocia North tour",
                "Full day Pamukkale & Hierapolis tour",
                "All airport transfers on private basis.",
                "All tours on SIC basis.",
                "Domestic Airfare",
                "International Airfare",
            ],
            bestTimeToVisit: "May to July ",
            cuisine: [
                "Turkish Cuisine",
                "Mediterranean Cuisine",
                "Asian Cuisine"
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
        },
        experiences: [
            {
                title: "Istanbul",
                image: "/UGCImages/turkey/turkey2/1.png"
            },
            {
                title: "Cappadocia",
                image: "/UGCImages/turkey/turkey2/2.png"
            },
            {
                title: "Bursa",
                image: "/UGCImages/turkey/turkey2/3.png"
            },
            {
                title: "North Red Tour ",
                image: "/UGCImages/turkey/turkey1/3.png"
            }   
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Direct Flight",
                    departureCity: "New Delhi",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "8h 35m"
                },
                {
                    name: "Direct Flight",
                    departureCity: "Mumbai",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "7h 45m"
                }
            ]
        }
    },
    turkeyLuxury: {
        id: "8-days-turkey-2N-Istanbul-2N-Cappadocia-3N-Antalya",
        packageName: "8 Days Turkey | 2N Istanbul | 2N Cappadocia | 3N Antalya ",
        days: 8,
        nights: 7,
        amount: 163271,
        dateStart: "01 July 2025",
        dateEnd: "26 August 2025",
        description: "Experience the vibrant city life of Turkey with our 8-day tour covering iconic attractions, cultural sites, and modern marvels. This package includes 2 nights in Istanbul, 2 nights in Cappadocia, and 3 nights in Antalya. We have included the best of Turkey in this package. Life is short, and the world is wide. Start your Turkey journey with us. ",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Starting July",
            duration: "8D7N Turkey Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Istanbul",
                hotel: "Golden Age Hotel/Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Cappadocia",
                hotel: "Royal Stone Houses/Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Antalya",
                hotel: "Best western Plus Khan/Similar",
                roomType: "Deluxe Room"
            },
        ],
        tourSummary: [
            "Day 1: Istanbul Arrival + Evening Bosphorus Dinner Cruise",
            "Day 2: Istanbul - Byzantium & Ottoman Tour (Hagia Sophia, Blue Mosque, Hippodrome, Grand Bazaar, Topkapi Palace)",
            "Day 3: Istanbul to Cappadocia Transfer",
            "Day 4: Cappadocia North Red Tour (Optional Hot Air Balloon)",
            "Day 5: Cappadocia to Antalya Transfer",
            "Day 6: Full-Day Pamukkale & Hierapolis Tour from Antalya",
            "Day 7: Antalya City Tour with Cable Car and Waterfalls",
            "Day 8: Departure"
        ],
        inclusions: [
            "2 Nights Accommodation in Istanbul on above mentioned hotels.",
            "2 Nights Accommodation in Cappadocia on above mentioned hotels",
            "3 Nights Accommodation in Antalya on above mentioned hotels.",
            "07 open buffet Breakfasts.",
            "Evening Bosphorus cruise with dinner and soft drinks",
            "Full day Istanbul city tour",
            "Full day Cappadocia North tour",
            "Full day Pamukkale & Hierapolis tour",
            "Antalya City Tour with Cable Car and Waterfalls",
            "All airport transfers on private basis.",
            "All tours on SIC basis.",
            "Domestic Airfare",
            "International Airfare",
            "Visa"  
        ],
        exclusions: [
            "Personal Expenses",
            "Anything not mentioned in the inclusions.",
            "Beverages NOT included in the quotation (unless specified).",
            "Entrance Fee (unless specified)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Istanbul Arrival (Evening Dinner Cruise)",
                description: "On the time of your arrival to Istanbul airport the welcome staff will be waiting for you at the exit, after then, you will be transported to the hotel. Evening gets ready for Bosphorus Cruise. The best way to see the Bosphorus in all its beauty is to take a boat trip. This is the waterway connecting the Black Sea to the Marmara and dividing Istanbul into two continents. It's sure to be a night you'll remember for a lifetime. Later you will drop back to hotel. Overnight stay in hotel.",
                image: "/UGCImages/turkey/turkey6/1.png"
            },
            {
                day: 2,
                title: "Istanbul - Byzantium & Ottoman Tour",
                description: "After breakfast, pick-up from the hotel, meet your guide for Full Day Ottoman & Byzantium Tour visits The Hagia Sophia, The Blue Mosque, Hippodrome of Constantinople, Grand Bazaar, Topkapi Palace Museum, in the end of tour, back to hotel. Overnight in Istanbul.",
                image: "/UGCImages/turkey/turkey6/2.png"
            },
            {
                day: 3,
                title: "Istanbul – Cappadocia",
                description: "After breakfast, you will be transferred to the airport for a domestic flight to Kayseri. After arrival at the airport, transfer to Cappadocia Hotel. Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey6/3.png"
            },
            {
                day: 4,
                title: "Cappadocia – Cappadocia North Red Tour",
                description: "Early morning Hot Air balloon after this return hotel by your own expenses. After breakfast you will pick you up from the hotel for Cappadocia Full Day Tour, Visit places like Stunning Uchisar rock-castle fortress, UNESCO World Heritage site of the Goreme Open Air Museum, Pasabag Valley (Monk's Valley). Lunch at a local restaurant offering traditional Turkish dishes from the region. Later Visit the town of Avanos, located along the longest river in Turkey. Next drive to see some of the most spectacular rock formations - sure to awaken your imagination - the famous Devrent Valley. Lastly, before dropping off to stop by the famous three beauties at Urgup (the famous fairy chimneys in urgup). Overnight in Cappadocia.",
                image: "/UGCImages/turkey/turkey6/4.png"
            },
            {
                day: 5,
                title: "Cappadocia – Antalya",
                description: "After breakfast, you will be transferred to the airport for a domestic flight to Antalya. After arrival at the airport, transfer to Antalya Hotel. Overnight in Antalya.",
                image: "/UGCImages/turkey/turkey6/5.png"
            },
            {
                day: 6,
                title: "Full-Day Pamukkale & Hierapolis Tour from Antalya City",
                description: "Your full day excursion begins in the early morning when you're picked up at your Antalya hotel and begin the drive to Pamukkale. After a lunch break, you'll visit the cascading snow-white terraced cliffs of this mysterious Cotton Palace. You'll will have a chance to swim in thermal pools. An additional option is to swim in Cleopatra's Pool, for an extra fee. Located in the province of Denizli, this extraordinary landscape was a focus of interest for visitors to the nearby Hellenistic spa town of Hierapolis, founded by the Attalid kings of Pergamom at the end of the 2nd century B.C. The therapeutic virtues of the waters were exploited at the various thermal installations which included immense hot basins and pools for swimming. Hydrotherapy was accompanied by religious practices, which were developed in relation to local cults. The event made the city more important that Saint Philip one of the twelve Apostles of Jesus Christ was killed there in 80 A.D. Evening return to hotel for overnight stay.",
                image: "/UGCImages/turkey/turkey6/6.png"
            },
            {
                day: 7,
                title: "Antalya City Tour with Cable Car and Waterfalls",
                description: "After breakfast, Discover Antalya with this one-day-long tour. It is the perfect introduction of the city with full of activities. Visit Tunektepe Teleferik, Lower Duden Waterfalls, Kaleici & Old City Marina. Evening return to hotel for overnight stay.",
                image: "/UGCImages/turkey/turkey6/7.png"
            },
            {
                day: 8,
                title: "Departure",
                description: "After breakfast. You will be transferred to Airport for your flight. Tour Ends…...!!!!",
                image: "/UGCImages/turkey/turkey6/8.png"
            }
        ],
        images: [
            "/UGCImages/turkey/turkey6/1.png",
            "/UGCImages/turkey/turkey6/2.png",
            "/UGCImages/turkey/turkey6/3.png",
            "/UGCImages/turkey/turkey6/4.png",
        ],
        departureDates: [
            { date: "July 2025 - August 2025" }
        ],
        additionalInfo: {
            highlights: [
                "Bursa Tour from Istanbul Included with Cable Car",
                "Full day Cappadocia North tour",
                "Full day Pamukkale & Hierapolis tour",
                "All airport transfers on private basis.",
                "All tours on SIC basis.",
                "Domestic Airfare",
                "International Airfare",
            ],
            bestTimeToVisit: "May to July ",
            cuisine: [
                "Turkish Cuisine",
                "Mediterranean Cuisine",
                "Asian Cuisine"
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
        },
        experiences: [
            {
                title: "Istanbul",
                image: "/UGCImages/turkey/turkey2/1.png"
            },
            {
                title: "Cappadocia",
                image: "/UGCImages/turkey/turkey2/2.png"
            },
            {
                title: "Bursa",
                image: "/UGCImages/turkey/turkey2/3.png"
            },
            {
                title: "North Red Tour ",
                image: "/UGCImages/turkey/turkey1/3.png"
            }   
        ],
        flightDetails: {
            airlines: [
                {
                    name: "Direct Flight",
                    departureCity: "New Delhi",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "8h 35m"
                },
                {
                    name: "Direct Flight",
                    departureCity: "Mumbai",
                    arrivalCity: "Istanbul",
                    flightNumber: "",
                    departureTime: "",
                    arrivalTime: "",
                    duration: "7h 45m"
                }
            ]
        }
    },
};