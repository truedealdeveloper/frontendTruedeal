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

export interface BaseDestination {
    id: string;
    country: string;
    days: number;
    nights: number;
    amount?: number;
    dateStart: string;
    dateEnd: string;
    description: string;
    groupDetails?: GroupDetails;
    hotelDetails?: HotelDetail[];
    tourSummary?: string[];
    inclusions?: string[];
    exclusions?: string[];
    itinerary?: ItineraryDay[];
    images?: string[];
}

export interface FixedDeparture extends BaseDestination {
    flightFrom: string;
}

export interface DestinationWithoutFlight extends BaseDestination {
    packageType?: 'land-only' | 'customizable';
    visaRequired?: boolean;
    minGroupSize?: number;
}

export const fixedDepartures: FixedDeparture[] = [
    // Your Vietnam departure data here
];

export const fixedDeparturesData: Record<string, FixedDeparture> = {
    europe: {
        id: "europe-12-days-grand-tour",
        country: "Europe",
        days: 12,
        nights: 11,
        amount: 395000,
        dateStart: "16 May 2025",
        dateEnd: "28 May 2025",
        flightFrom: "Delhi",
        groupDetails: {
            pax: "Group Departure From Raipur",
            rooms: "12 Rooms on Double/Twin Sharing",
            arrivalDate: "16th May 2025 Raipur Departure",
            duration: "11N12D Europe",
            costBasis: "Cost Based On Double Sharing"
        },
        description: "Experience the best of Europe with our comprehensive 12-day tour package covering France, Switzerland, and Austria. Visit iconic destinations including Paris, Lausanne, Interlaken, Zurich, Innsbruck, Salzburg, and Vienna.",
        hotelDetails: [
            {
                city: "Paris",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Lausanne",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Interlaken",
                hotel: "3 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Zurich",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Innsbruck",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Vienna",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Raipur – Delhi – Paris",
            "Day 2: Paris City Tour",
            "Day 3: Full Day Disneyland Paris",
            "Day 4: Paris to Lausanne via Geneva",
            "Day 5: Glacier 3000 and Gstaad Excursion",
            "Day 6: Lausanne to Vevey by CGN Cruise, Transfer to Interlaken",
            "Day 7: Jungfrau/Mt. Titlis Excursion",
            "Day 8: Rhine Falls, Zurich City Tour, Lindt Chocolate Factory",
            "Day 9: Transfer to Innsbruck via Vaduz, Swarovski Crystal Garden",
            "Day 10: Salzburg Day Trip, Transfer to Vienna",
            "Day 11: Vienna City Tour",
            "Day 12: Shopping at Outlet Mall, Departure"
        ],
        inclusions: [
            "Return Economy Class Airfare with Airport Taxes Ex-Raipur",
            "Schengen Visa Fees",
            "11 Nights Accommodation in 3/4 Star Hotels",
            "Daily Continental Breakfast",
            "Indian Lunches & Dinners as per itinerary",
            "All Sightseeing and transfers by deluxe Coach",
            "Eiffel Tower Level 2 visit",
            "Seine River Cruise",
            "Disneyland Entry",
            "Visit to Gstaad",
            "Golden Pass Train Ticket",
            "Glacier 3000 with Cable Car",
            "Jungfrau or Mt. Titlis excursion",
            "Swarovski Crystal Garden visit",
            "Salt Mine Visit",
            "Lausanne to Vevey Cruise",
            "Rhine falls and Zurich City Tour",
            "Lindt Chocolate Museum visit",
            "Overseas Travel Insurance (up to age 60)",
            "Services of tour manager",
            "Tips to Coach Driver (Euro 30 per person)"
        ],
        exclusions: [
            "Any increase in Air Fare or Forex (calculated @ 90/- Per euro)",
            "Any Increase in Airport Taxes & Visa Fees",
            "Any expenses of personal nature",
            "Portages at hotels, Airport and Train Stations",
            "GST (currently 5%)",
            "TCS on foreign tour package (currently 5%)",
            "Travel Insurance for passengers above 60 years",
            "Any services not specifically mentioned in inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Raipur – Delhi – Paris",
                description: "Departure from Raipur in the morning and arrival in Paris via Delhi. Arrival Paris at 1940 Hrs. Complete immigration formalities and proceed for dinner. Transfer to hotel for check-in."
            },
            {
                day: 2,
                title: "Paris City Tour",
                description: "Visit the spectacular Eiffel Tower, enjoy Seine river cruise and city sightseeing including Notre Dame, Opera Garnier, Arc de Triomphe, Champs Elysees, Alexander Bridge, and Concords Square."
            },
            {
                day: 3,
                title: "Full Day Disneyland Paris",
                description: "Enjoy a full day at Disneyland Paris with access to all parks and attractions."
            },
            {
                day: 4,
                title: "Paris to Lausanne via Geneva",
                description: "Travel from Paris to Lausanne via Geneva. Enjoy the scenic route and visit the city of Lausanne."
            },
            {
                day: 5,
                title: "Glacier 3000 and Gstaad Excursion",
                description: "Visit the breathtaking Glacier 3000 and enjoy a day trip to Gstaad."
            },
            {
                day: 6,
                title: "Lausanne to Vevey by CGN Cruise, Transfer to Interlaken",
                description: "Travel from Lausanne to Vevey by CGN Cruise and transfer to Interlaken."
            },
            {
                day: 7,
                title: "Jungfrau/Mt. Titlis Excursion",
                description: "Enjoy a day trip to Jungfrau or Mt. Titlis."
            },
            {
                day: 8,
                title: "Rhine Falls, Zurich City Tour, Lindt Chocolate Factory",
                description: "Visit the Rhine Falls, enjoy a city tour of Zurich, and visit the Lindt Chocolate Factory."
            },
            {
                day: 9,
                title: "Transfer to Innsbruck via Vaduz, Swarovski Crystal Garden",
                description: "Travel from Zurich to Innsbruck via Vaduz and visit the Swarovski Crystal Garden."
            },
            {
                day: 10,
                title: "Salzburg Day Trip, Transfer to Vienna",
                description: "Visit Salzburg and transfer to Vienna."
            },
            {
                day: 11,
                title: "Vienna City Tour",
                description: "Enjoy a city tour of Vienna and visit iconic landmarks."
            },
            {
                day: 12,
                title: "Vienna - Delhi",
                description: "After breakfast, check out and visit Parndorf Fashion Outlet for shopping. After lunch, transfer to Vienna airport for departure at 2030 HRS."
            }
        ],
        images: [
            "/UGCImages/Images4/germany/horizontal/3.webp",
            "/UGCImages/Images4/germany/horizontal/4.webp",
            "/UGCImages/Images4/germany/horizontal/5.webp",
            "/UGCImages/Images4/germany/horizontal/6.webp",
            "/UGCImages/Images4/germany/horizontal/1.webp",
            "/UGCImages/Images4/germany/horizontal/2.webp",
            "/UGCImages/Images4/germany/horizontal/7.webp",
        ]
    },
    vietnam2: {
        id: "vietnam-8-days-highlights-tour",
        country: "Vietnam",
        days: 8,
        nights: 7,
        amount: 89999,
        dateStart: "Multiple",
        dateEnd: "May 2025",
        flightFrom: "Multiple",
        description: "Experience the best of Vietnam in 8 days covering Hanoi, Danang, and Ho Chi Minh. Explore natural beauty including Ha Long Bay, cultural treasures like ancient temples, and historic sites across Vietnam's most vibrant cities.",
        groupDetails: {
            pax: "Group Departure",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Available Dates: Jan 23 | Feb 9,16,23 | Mar 2,7,14,21 | Apr 4,11,18,25 | May 2,9,16,23,30",
            duration: "7N8D Vietnam",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Hanoi",
                hotel: "Muong Thanh/Beryl Charm/Anise Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Danang",
                hotel: "Cosmos/Grand Gold/Grand Sunrise Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Ho Chi Minh",
                hotel: "First Hotel/Harmony Hotel/Palace Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Hanoi Arrival – City Tour (L, D)",
            "Day 2: Hanoi – Nimb Binh – Hoa Lu – Tam Coc (B, L, D)",
            "Day 3: Hanoi – Halong Bay Day Cruise (B, L, D)",
            "Day 4: Hanoi – Danang – Evening Tour (B, L, D)",
            "Day 5: Danang – Bana Hills & Golden Bridge (B, L, D)",
            "Day 6: Danang – Ho Chi Minh – City Tour (B, L, D)",
            "Day 7: Ho Chi Minh – Chu Chi Tunnel & Mekong Delta (B, L, D)",
            "Day 8: Ho Chi Minh – Departure (B)"
        ],
        inclusions: [
            "Vietnam Visa Fees",
            "Return Economy Class Airlines",
            "Baggage Allowance as per airline policy",
            "Tour Manager/Guide Services throughout",
            "A/C coach transfers as per itinerary",
            "All entrance fees",
            "Accommodation in comfortable hotels (twin sharing)",
            "All Meals – Breakfast, Lunch, Dinner as per itinerary",
            "Internal airfare",
            "GST & TCS"
        ],
        exclusions: [
            "Travel Insurance",
            "Mandatory tips (USD 3 per person per day)",
            "Any increase in Airfare, Visa fees, Taxes",
            "Hotel/Airline upgrades",
            "Air ticket deviation charges",
            "Exchange rate fluctuations",
            "Pre/post tour accommodation",
            "Insurance for 60+ years",
            "Personal expenses (laundry, telephone, shopping)",
            "Optional tours and activities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Hanoi Arrival – City Tour",
                description: "Welcome to Vietnam! Visit Ho Chi Minh complex, Temple of Literature, Hoan Kiem lake, and Ngoc Son Temple. Evening at leisure."
            },
            {
                day: 2,
                title: "Hanoi – Nimb Binh – Hoa Lu – Tam Coc",
                description: "Explore Ninh Binh province, visit Hoa Lu ancient capital, and enjoy bamboo boat ride through Tam Coc's three caves."
            },
            {
                day: 3,
                title: "Hanoi – Halong Bay Day Cruise",
                description: "Full day cruise in Halong Bay visiting Sung Sot cave, floating village, and Ti Top peak. Optional overnight cruise available."
            },
            {
                day: 4,
                title: "Hanoi – Danang – Evening Tour",
                description: "Fly to Danang. Evening tour of Son Tra Peninsula, Linh Ung Pagoda, and city bridges."
            },
            {
                day: 5,
                title: "Danang – Bana Hills & Golden Bridge",
                description: "Visit Sun World Ba Na Hills, Golden Bridge, French Village, and Marble Mountains. Optional Hoi An tour available."
            },
            {
                day: 6,
                title: "Danang – Ho Chi Minh – City Tour",
                description: "Fly to Ho Chi Minh. Visit War Crime Museum, Reunification Palace, Notre Dame Cathedral, and other landmarks."
            },
            {
                day: 7,
                title: "Ho Chi Minh – Chu Chi Tunnel & Mekong Delta",
                description: "Explore Cu Chi Tunnels and Mekong Delta including My Tho city and local villages."
            },
            {
                day: 8,
                title: "Ho Chi Minh – Departure",
                description: "Breakfast at hotel followed by departure transfer."
            }
        ],
        images: [
            "/UGCImages/images5/VIETNAM/HORIZONTAL/6.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/1.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/2.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/3.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/4.webp",
            "/UGCImages/images5/VIETNAM/HORIZONTAL/5.webp",
        ]
    },
    turkey: {
        id: "turkey-9-days-discovery-tour",
        country: "Turkey",
        days: 9,
        nights: 8,
        amount: 122400,
        dateStart: "27 May 2025",
        dateEnd: "4 June 2025",
        flightFrom: "Multiple",
        description: "Embark on an unforgettable 8-night, 9-day adventure across Turkey, exploring the stunning cities of Istanbul, Cappadocia, and Antalya. From ancient landmarks to breathtaking landscapes, luxurious stays, and authentic local experiences—this fixed departure package is crafted for ultimate comfort and discovery!",
        groupDetails: {
            pax: "Group Departure",
            rooms: "Twin Sharing Basis",
            arrivalDate: "27th May 2025",
            duration: "8N9D Turkey",
            costBasis: "Cost Based On Room Type"
        },
        hotelDetails: [
            {
                city: "Istanbul",
                hotel: "Avantgarde Hotel",
                roomType: "4 Star or similar"
            },
            {
                city: "Cappadocia",
                hotel: "MDC Cave Hotel",
                roomType: "4 Star or similar"
            },
            {
                city: "Antalya",
                hotel: "Best Western Khan Hotel",
                roomType: "4 Star or similar"
            }
        ],
        tourSummary: [
            "Day 1-3: Istanbul - Blue Mosque, Topkapi Palace, Grand Bazaar & Bosphorus Dinner Cruise",
            "Day 4-6: Cappadocia - Surreal landscapes, Hot Air Balloon Ride (Optional), Devrent & Pasabag Valleys, Goreme Open-Air Museum",
            "Day 7-9: Antalya - Duden Waterfalls, Old City Marina, Hadrian's Gate, and Pamukkale excursion"
        ],
        inclusions: [
            "8 Nights' accommodation in premium hotels",
            "Daily Breakfast, 5 Lunches & 5 Dinners",
            "Airport Transfers & Private Sightseeing Tours",
            "All entrance tickets as per itinerary",
            "English-speaking professional tour guide",
            "Air-conditioned private vehicle for all sightseeing"
        ],
        exclusions: [
            "International & Domestic Flights",
            "Visa Charges & Travel Insurance",
            "Personal expenses & optional activities (e.g., Hot Air Balloon Ride – €195 PP)",
            "Meals not mentioned in the itinerary"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Istanbul",
                description: "Welcome to Turkey! Arrive in Istanbul and transfer to your hotel. Rest of the day at leisure to explore the vibrant city."
            },
            {
                day: 2,
                title: "Istanbul City Tour",
                description: "Visit the iconic Blue Mosque, Topkapi Palace, and explore the Grand Bazaar. Evening Bosphorus Dinner Cruise."
            },
            {
                day: 3,
                title: "Istanbul Exploration",
                description: "Continue exploring Istanbul's historic sites and cultural attractions."
            },
            {
                day: 4,
                title: "Istanbul to Cappadocia",
                description: "Transfer to Cappadocia. Begin exploring the unique landscape and cave formations."
            },
            {
                day: 5,
                title: "Cappadocia Adventures",
                description: "Optional Hot Air Balloon Ride. Visit Devrent & Pasabag Valleys, and Goreme Open-Air Museum."
            },
            {
                day: 6,
                title: "Cappadocia Exploration",
                description: "Continue discovering Cappadocia's unique attractions and underground cities."
            },
            {
                day: 7,
                title: "Cappadocia to Antalya",
                description: "Transfer to Antalya. Visit Duden Waterfalls and the Old City Marina."
            },
            {
                day: 8,
                title: "Pamukkale Excursion",
                description: "Full-day excursion to the stunning white travertine terraces of Pamukkale."
            },
            {
                day: 9,
                title: "Departure",
                description: "Transfer to the airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/turkey/1.webp",
            "/UGCImages/turkey/2.webp",
            "/UGCImages/turkey/3.webp",
            "/UGCImages/turkey/4.webp",
            "/UGCImages/turkey/5.webp",
            "/UGCImages/turkey/6.webp",
            
        ]
    },
    euroQuest: {
        id: "euro-quest-15-days-grand-tour",
        country: "Euro Quest",
        days: 15,
        nights: 14,
        amount: 336000,
        dateStart: "7, 21 May 2025",
        dateEnd: "4 June 2025",
        flightFrom: "Multiple",
        description: "Experience Europe Like Never Before with TrueDeal! Our exclusive 14 Nights / 15 Days group departure tour blends Europe's iconic landmarks with hidden gems—from the Eiffel Tower in Paris to the breathtaking Swiss Alps and the charm of the Italian Riviera. Features centrally located accommodations, pure Jain food with a dedicated kitchen caravan, unique & relaxed itinerary, and 24/7 assistance & support.",
        groupDetails: {
            pax: "Group Departure",
            rooms: "Double/Twin Sharing",
            arrivalDate: "Departure 1: May 7, 2025 – May 21, 2025\nDeparture 2: May 21, 2025 – June 4, 2025",
            duration: "14N15D Euro Quest",
            costBasis: "Cost Based On Double Sharing (Special Discount: Save up to INR 10,000 if booked by February 28, 2025)"
        },
        hotelDetails: [
            {
                city: "Paris",
                hotel: "Centrally Located Hotel",
                roomType: "Double/Twin Sharing"
            },
            {
                city: "Amsterdam",
                hotel: "Centrally Located Hotel",
                roomType: "Double/Twin Sharing"
            },
            {
                city: "Black Forest",
                hotel: "Centrally Located Hotel",
                roomType: "Double/Twin Sharing"
            },
            {
                city: "Switzerland",
                hotel: "Centrally Located Hotel",
                roomType: "Double/Twin Sharing"
            },
            {
                city: "French Riviera",
                hotel: "Centrally Located Hotel",
                roomType: "Double/Twin Sharing"
            },
            {
                city: "Milan",
                hotel: "Centrally Located Hotel",
                roomType: "Double/Twin Sharing"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Paris",
            "Day 2: Paris City Tour & Eiffel Tower",
            "Day 3: Louvre & Versailles",
            "Day 4: Bruges, Ghent & Amsterdam",
            "Day 5: Keukenhof, Zaanse Schaans & Giethoorn",
            "Day 6: Cologne & Black Forest",
            "Day 7: Exploring Colmar, Strasbourg & Baden-Baden",
            "Day 8: Rhine Falls & Switzerland Arrival",
            "Day 9: Jungfraujoch & Swiss Alps",
            "Day 10: Gstaad, Glacier 3000 & Montreux",
            "Day 11: Aare Gorge, Stoosbahn & Lucerne",
            "Day 12: Lugano & Lake Como",
            "Day 13: French Riviera Highlights",
            "Day 14: Milan Exploration",
            "Day 15: Departure from Milan"
        ],
        inclusions: [
            "Accommodations in centrally located hotels (double/twin sharing)",
            "Daily breakfast, 14 lunches, and 14 dinners by our Indian chef",
            "Sightseeing as per itinerary",
            "Private coach transportation with 55-seater luxury bus",
            "Services of an experienced tour manager",
            "Mandatory gratuities for tour staff",
            "Standard travel insurance (for passengers up to 60 years)",
            "Schengen visa processing (single entry)",
            "Bottled drinking water on the coach",
            "Airfare in economy class"
        ],
        exclusions: [
            "5% GST on the invoice",
            "5% TCS on the package value (if applicable)",
            "Any meals not mentioned in the itinerary",
            "Security deposits at hotels",
            "Sightseeing & experiences not specifically listed in inclusions",
            "Personal expenses, laundry, minibar, or in-room charges"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Arrive in Paris & check-in at your hotel. Leisure time to explore Parisian streets or unwind."
            },
            {
                day: 2,
                title: "Paris City Tour & Eiffel Tower",
                description: "Explore Champs-Élysées, Arc de Triomphe, and Seine River Cruise. Visit the iconic Eiffel Tower for panoramic city views."
            },
            {
                day: 3,
                title: "Louvre & Versailles",
                description: "Visit the Louvre Museum (Mona Lisa & more) & explore the grandeur of Versailles Palace."
            },
            {
                day: 4,
                title: "Bruges, Ghent & Amsterdam",
                description: "Travel through Bruges' medieval charm & Ghent's rich history. Amsterdam city tour & canal cruise."
            },
            {
                day: 5,
                title: "Keukenhof, Zaanse Schaans & Giethoorn",
                description: "Witness the vibrant tulip gardens of Keukenhof. Visit Zaanse Schans' windmills & experience Giethoorn, the 'Venice of the North'."
            },
            {
                day: 6,
                title: "Cologne & Black Forest",
                description: "Visit the Cologne Cathedral & head to Germany's Black Forest region."
            },
            {
                day: 7,
                title: "Exploring Colmar, Strasbourg & Baden-Baden",
                description: "Discover Colmar's canals, Strasbourg's medieval charm, & Baden-Baden's luxury."
            },
            {
                day: 8,
                title: "Rhine Falls & Switzerland Arrival",
                description: "Witness Lake Titisee, Rhine Falls, and stroll through Zurich & Interlaken."
            },
            {
                day: 9,
                title: "Jungfraujoch & Swiss Alps",
                description: "Ascend to Mt. Jungfrau (Top of Europe), visit Lauterbrunnen & Grindelwald."
            },
            {
                day: 10,
                title: "Gstaad, Glacier 3000 & Montreux",
                description: "Enjoy Gstaad's luxury, Glacier 3000 adventure, & the scenic Montreux lakeside."
            },
            {
                day: 11,
                title: "Aare Gorge, Stoosbahn & Lucerne",
                description: "Visit Aare Gorge, ride the steepest funicular – Stoosbahn, & explore Lucerne."
            },
            {
                day: 12,
                title: "Lugano & Lake Como",
                description: "Discover Lugano's waterfront charm, explore Lake Como, and head to Savona."
            },
            {
                day: 13,
                title: "French Riviera Highlights",
                description: "Explore Nice, Cannes, St. Paul de Vence, and the glamorous Monaco – Monte Carlo."
            },
            {
                day: 14,
                title: "Milan Exploration",
                description: "Visit Milan's Duomo, enjoy a short city tour & prepare for departure."
            },
            {
                day: 15,
                title: "Departure from Milan",
                description: "Transfer to Milan Malpensa Airport (MXP) for your flight back home."
            }
        ],
        images: [
            "/UGCImages/europe/1.svg",
            "/UGCImages/europe/2.svg",  
            "/UGCImages/europe/3.svg",
            "/UGCImages/europe/4.svg",
            "/UGCImages/europe/5.svg",
            "/UGCImages/europe/6.svg",
            
        ]
    },
    amTour: {
        id: "russia-8-days-aurora-moscow-tour",
        country: "Russia",
        days: 8,
        nights: 7,
        amount: 149000,
        dateStart: "Contact for dates",
        dateEnd: "Contact for dates",
        flightFrom: "Delhi",
        description: "Experience the magical blend of Russian culture and natural wonders with our AM Tour. From the historic streets of Saint Petersburg to the mesmerizing Aurora lights in Murmansk, and the vibrant energy of Moscow, this tour offers an unforgettable journey through Russia's most captivating destinations.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates available",
            duration: "7N8D Russia AM Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Saint Petersburg",
                hotel: "4-5 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Murmansk",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Moscow",
                hotel: "Cosmos Radisson Collection SVO 5*",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Saint Petersburg - City Orientation",
            "Day 2: Saint Petersburg Exploration",
            "Day 3: Saint Petersburg – Murmansk",
            "Day 4: Murmansk – Teriberka Adventure",
            "Day 5: Murmansk – Saami Village & Reindeer Sledding",
            "Day 6: Murmansk – Moscow City Tour",
            "Day 7: Moscow – Space & Science Experience",
            "Day 8: Moscow – Departure"
        ],
        inclusions: [
            "All Flights ex-Delhi",
            "5-4 stars Double Accommodation",
            "All Meals",
            "Daily Sightseeing & Activities",
            "Comfortable Transfers",
            "Professional Guide Services",
            "Entry Tickets as per itinerary"
        ],
        exclusions: [
            "Personal Expenses",
            "Travel Insurance",
            "Optional Activities",
            "Any additional services not mentioned in inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Saint Petersburg",
                description: "14:10 Arrival at the Airport. Transfer to hotel. Orientation tour of St. Petersburg and Kazan Cathedral Visit. Check-in. Transport & Guide: Transfer + 4 HRS. Meals: L, D"
            },
            {
                day: 2,
                title: "Saint Petersburg Exploration",
                description: "Saint-Petersburg City Tour (Awarded World Travel Awards Prize). Visit Peter and Paul Fortress – Historical heart of St. Petersburg, and Hermitage Museum – One of the world's largest art museums. Transport & Guide: 10 HRS. Meals: L"
            },
            {
                day: 3,
                title: "Saint Petersburg – Murmansk",
                description: "Check out, transfer to Airport. 09:10-11:10 Flight to Murmansk. Transfer to Hotel. Visit Arctic Home Village, Russian Banya, and enjoy dinner with bonfire. Transport & Guide: Transfers + 4 HRS. Meals: L, D"
            },
            {
                day: 4,
                title: "Murmansk – Teriberka Adventure",
                description: "Trip to Teriberka with breathtaking views of the Arctic Ocean. Visit cemetery of wooden ships, take snowmobile sleigh ride. Marvel at frozen waterfall and boulder beach. 22:00-02:00 Aurora Hunting with professional photographer. Transport & Guide: 12 HRS. Meals: L, D"
            },
            {
                day: 5,
                title: "Murmansk – Saami Village & Reindeer Sledding",
                description: "Murmansk City Tour. Visit Saami Village to explore traditional culture, feed and photograph wildlife, enjoy reindeer sledge ride, and photo session in traditional Saami clothing. Transfer to Airport. Transport & Guide: 12 HRS. Meals: L, D"
            },
            {
                day: 6,
                title: "Murmansk – Moscow",
                description: "02:00 AM Flight to Moscow. City Tour including Red Square, Gum Mall, Alexandrovsky Garden, Cathedral of Christ the Saviour, Park Zaradye with Sky Bridge, and Metro Tour. Transport & Guide: Transfer + 6 HRS. Meals: L"
            },
            {
                day: 7,
                title: "Moscow – Space & Science Experience",
                description: "VDNH Tour with Cosmonaut Museum. Transfer to Cosmos Radisson Collection SVO 5*. 20:00 Dinner at hotel with SVO Airport Runway View. Transport & Guide: 8 HRS. Meals: L, D"
            },
            {
                day: 8,
                title: "Moscow – Departure",
                description: "Morning relaxation at hotel's SPA, Banya & Hamam. Destination Presentation in hotel's Conference Hall. Transfer to Airport. 18:00 Flight to Delhi. Transport: Only transfer. Meals: L"
            }
        ],
        images: [
            "/UGCImages/Images4/russia/horizontal/1.webp",
            "/UGCImages/Images4/russia/horizontal/2.webp",
            "/UGCImages/Images4/russia/horizontal/3.webp",
            "/UGCImages/Images4/russia/horizontal/4.webp",
            "/UGCImages/Images4/russia/horizontal/5.webp",
            "/UGCImages/Images4/russia/horizontal/6.webp"
        ]
    },
    japanTour: {
        id: "japan-10-days-cultural-tour",
        country: "Japan",
        days: 10,
        nights: 9,
        amount: 470000,
        dateStart: "Contact for dates",
        dateEnd: "Contact for dates",
        flightFrom: "Multiple",
        description: "Experience the perfect blend of tradition and modernity with our Japan Fixed Departure Tour! From the towering skyscrapers of Tokyo to the serene temples of Kyoto, this trip is designed to give you an authentic Japanese experience.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Standard/Twin Sharing",
            arrivalDate: "Multiple dates available",
            duration: "9N10D Japan Cultural Tour",
            costBasis: "Cost Based On Twin Sharing"
        },
        hotelDetails: [
            {
                city: "Tokyo",
                hotel: "4 Star Hotel",
                roomType: "Standard/Twin Room"
            },
            {
                city: "Hiroshima",
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
            "Day 1: Fly to Tokyo",
            "Day 2: Tokyo - Sky Tree, Ueno Park & Sensoji Temple",
            "Day 3: Kawaguchiko Cruise - Lake Kawaguchiko & Oshino Hakkai",
            "Day 4: Tokyo - TeamLab Planets, Odaiba & Shinkansen Nozomi",
            "Day 5: Hiroshima - Peace Park & Atomic Bomb Dome",
            "Day 6: Osaka - Tea Ceremony with Kimono Wearing & Bullet Train",
            "Day 7: Kyoto - Fushimi Inari, Fushimi Sake & Arashiyama Bamboo Grove",
            "Day 8: Kyoto - Kinkakuji Temple, Nijo Castle & Kiyomizu Temple",
            "Day 9: Nara Park, Todaiji Temple, Osaka Castle & Dotonbori Shopping",
            "Day 10: Departure from Osaka"
        ],
        inclusions: [
            "International & Domestic Flights (Economy Class)",
            "9 Nights Hotel Accommodation with Standard/Twin Rooms",
            "Daily Breakfast, Lunch & Dinner",
            "All Sightseeing as per Itinerary with Entry Tickets",
            "Bullet Train Experience",
            "Private Coach for Transfers",
            "Tea Ceremony with Kimono Wearing Experience",
            "English-Speaking Tour Guide"
        ],
        exclusions: [
            "5% GST & TCS (as per Government Policy)",
            "Visa & Travel Insurance",
            "Any Personal Expenses (Shopping, Beverages, etc.)",
            "Tips & Porterage Charges",
            "Any Additional Activities Not Mentioned in Inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Fly to Tokyo",
                description: "Board an international flight to Tokyo. Arrival at Narita Airport. Transfer by coach for dinner. Check-in at the hotel and relax. Overnight stay in Tokyo."
            },
            {
                day: 2,
                title: "Tokyo - Sky Tree, Ueno Park & Sensoji Temple",
                description: "Breakfast at the hotel. Visit Sky Tree, Ueno Park, and Sensoji Temple. Lunch at a local restaurant. Explore Nakamise Shopping Street and Shibuya Crossing. Dinner and return to the hotel. Overnight stay in Tokyo."
            },
            {
                day: 3,
                title: "Kawaguchiko Cruise - Lake Kawaguchiko & Oshino Hakkai",
                description: "Full-day tour to Lake Kawaguchiko & Oshino Hakkai. Enjoy a cruise at Lake Kawaguchiko. Lunch at a local restaurant. Return to Tokyo for dinner. Overnight stay in Tokyo."
            },
            {
                day: 4,
                title: "Tokyo - TeamLab Planets, Odaiba & Shinkansen Nozomi",
                description: "Breakfast and hotel check-out. Visit TeamLab Planets & Odaiba. Experience Shinkansen Nozomi Bullet Train to Hiroshima. Dinner and hotel check-in. Overnight stay in Hiroshima."
            },
            {
                day: 5,
                title: "Hiroshima - Peace Park & Atomic Bomb Dome",
                description: "Visit Hiroshima Peace Memorial Park. Explore Atomic Bomb Dome & Museum. Visit Miyajima Island & Itsukushima Shrine. Dinner and overnight stay in Hiroshima."
            },
            {
                day: 6,
                title: "Osaka - Tea Ceremony with Kimono Wearing & Bullet Train",
                description: "Breakfast and depart for Osaka via Shinkansen Bullet Train. Traditional Japanese Tea Ceremony with Kimono Experience. Dinner and overnight stay in Osaka."
            },
            {
                day: 7,
                title: "Kyoto - Fushimi Inari, Fushimi Sake & Arashiyama Bamboo Grove",
                description: "Visit Fushimi Inari Shrine and Fushimi Sake Brewery. Lunch at a local restaurant. Explore Arashiyama Bamboo Grove. Return to Osaka for dinner and overnight stay."
            },
            {
                day: 8,
                title: "Kyoto - Kinkakuji Temple, Nijo Castle & Kiyomizu Temple",
                description: "Visit Kinkakuji Temple, Nijo Castle & Kiyomizu Temple. Return to Osaka for overnight stay."
            },
            {
                day: 9,
                title: "Nara Park, Todaiji Temple, Osaka Castle & Dotonbori Shopping",
                description: "Visit Nara Park, Todaiji Temple, and Osaka Castle. Shopping at Dotonbori Street. Return to hotel for overnight stay in Osaka."
            },
            {
                day: 10,
                title: "Departure from Osaka",
                description: "Breakfast and transfer to Osaka Airport."
            }
        ],
        images: [
            "/UGCImages/Images4/japan/horizontal/1.webp",
            "/UGCImages/Images4/japan/horizontal/2.webp",
            "/UGCImages/Images4/japan/horizontal/3.webp",
            "/UGCImages/Images4/japan/horizontal/4.webp",
            "/UGCImages/Images4/japan/horizontal/5.webp",
            "/UGCImages/Images4/japan/horizontal/6.webp"
        ]
    },
    thailandTour: {
        id: "thailand-8-days-adventure-tour",
        country: "Thailand",
        days: 8,
        nights: 7,
        amount: 89999,
        dateStart: "10 May 2025",
        dateEnd: "17 May 2025",
        flightFrom: "Mumbai",
        description: "Experience the best of Thailand with our meticulously planned 8-day adventure tour. From the pristine beaches of Phuket and Krabi to the vibrant city life of Bangkok, this tour offers a perfect blend of relaxation, adventure, and cultural experiences.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double/Twin Sharing",
            arrivalDate: "10 May 2025",
            duration: "7N8D Thailand Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Phuket",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Krabi",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Bangkok",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Phuket",
            "Day 2: Phi Phi Island Tour",
            "Day 3: Full-Day Adventure Tour in Phuket",
            "Day 4: Transfer from Phuket to Krabi",
            "Day 5: Seven Island Tour in Krabi",
            "Day 6: Transfer from Krabi to Bangkok with Temple Tour",
            "Day 7: Safari World & Marine Park, Bangkok",
            "Day 8: Departure from Bangkok"
        ],
        inclusions: [
            "Return Flight Tickets from Mumbai (20+7 KG luggage)",
            "7 Nights Accommodation in 4-star hotels with premium locations",
            "7 Buffet Breakfasts, 1 Dinner, 4 Indian Buffet Lunches",
            "All major excursions: Phi Phi Island, 7-Island Tour, River Rafting, ATV Ride",
            "English-speaking guide and AC VIP coach for major transfers",
            "Daily pick-up & drop service for dinners (Fixed time and location)",
            "All entrance fees for mentioned activities"
        ],
        exclusions: [
            "International Visa Fees (if applicable)",
            "Personal Expenses (phone calls, laundry, souvenirs)",
            "Tips and Gratuities",
            "Travel Insurance",
            "Meals and Drinks not mentioned in the itinerary",
            "Optional Activities/Excursions",
            "Entry Fees for attractions not mentioned",
            "Personal Photography and Video Fees",
            "International or Domestic Airfare Changes"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Phuket",
                description: "Meet our airport representative at Phuket Airport. Transfer to hotel. Enjoy Indian buffet lunch. Rest of day at leisure for local exploration or relaxation. Overnight in Phuket."
            },
            {
                day: 2,
                title: "Phi Phi Island Tour",
                description: "After breakfast, transfer to pier for Phi Phi Islands speedboat tour. Enjoy snorkeling, swimming, and beach time. Indian buffet lunch included. Return to hotel (07:30-07:45 AM pickup, 05:30-06:00 PM drop-off). Overnight in Phuket."
            },
            {
                day: 3,
                title: "Full-Day Adventure Tour in Phuket",
                description: "Action-packed day including cave exploration at Wat Suwan Khuha, 5km river rafting, Thai lunch, ziplining, ATV riding, and waterfall trekking (07:30 AM - 05:30 PM). Overnight in Phuket."
            },
            {
                day: 4,
                title: "Transfer from Phuket to Krabi",
                description: "Road transfer to Krabi with stops at Wat Chalong Temple. Optional visits to Tiger Kingdom and Elephant Park. Hotel check-in in Krabi. Overnight in Krabi."
            },
            {
                day: 5,
                title: "Seven Island Tour in Krabi",
                description: "Full-day island hopping tour visiting Tup, Mohr, Chicken, Poda, and Taming Islands. Snorkeling opportunities, dinner at Railay Beach, and bioluminescent plankton viewing. Overnight in Krabi."
            },
            {
                day: 6,
                title: "Transfer from Krabi to Bangkok with Temple Tour",
                description: "Flight to Bangkok. Temple tour including Wat Traimit and Mini Reclining Buddha Temple. Free evening. Overnight in Bangkok."
            },
            {
                day: 7,
                title: "Safari World & Marine Park, Bangkok",
                description: "Full day at Safari World and Marine Park enjoying various shows including Sea Lion, Dolphin, and Cowboy stunt shows. Lunch included. Overnight in Bangkok."
            },
            {
                day: 8,
                title: "Departure from Bangkok",
                description: "Breakfast at hotel. Airport transfer for return flight."
            }
        ],
        images: [
            "/UGCImages/Images4/thailand/horizontal/1.webp",
            "/UGCImages/Images4/thailand/horizontal/2.webp",
            "/UGCImages/Images4/thailand/horizontal/3.webp",
            "/UGCImages/Images4/thailand/horizontal/4.webp",
            "/UGCImages/Images4/thailand/horizontal/5.webp",
            "/UGCImages/Images4/thailand/horizontal/6.webp"
        ]
    },
    thailandDeluxeTour: {
        id: "thailand-11-days-deluxe-tour",
        country: "Thailand",
        days: 11,
        nights: 10,
        amount: 99999,
        dateStart: "6 May 2025",
        dateEnd: "18 May 2025",
        flightFrom: "Mumbai",
        description: "Experience the ultimate Thailand adventure with our comprehensive 11-day tour covering Phuket, Krabi, Pattaya, and Bangkok. From pristine islands to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "6 May 2025",
            duration: "10N11D Thailand Deluxe Tour",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Phuket",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Krabi",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Pattaya",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Bangkok",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Phuket (06-05-2025)",
            "Day 2: Phi Phi Island Tour (07-05-2025)",
            "Day 3-4: Phuket Activities",
            "Day 5: 7 Island Tour (10-05-2025)",
            "Day 6: Krabi to Pattaya via Bangkok (11-05-2025)",
            "Day 7: Coral Island Tour (12-05-2025)",
            "Day 8: Pattaya Floating Market & City Tour (13-05-2025)",
            "Day 9: Pattaya to Bangkok with Temple Tour (14-05-2025)",
            "Day 10: Safari World & Marine Park (15-05-2025)",
            "Day 11: Departure (18-05-2025)"
        ],
        inclusions: [
            "Round-trip flight from Mumbai (20+7 KG baggage)",
            "10 Nights accommodation in 4-star hotels (3N Phuket, 2N Krabi, 3N Pattaya, 2N Bangkok)",
            "Daily buffet breakfast at hotels",
            "1 dinner and 5 lunches included",
            "Phi Phi Island tour by speedboat with Indian buffet lunch",
            "River rafting, ATV ride, elephant ride, and waterfall visit",
            "7 Island tour with bioluminescent plankton experience",
            "Alcazar Cabaret Show (standard seat)",
            "Coral Island tour by speedboat",
            "Pattaya Floating Market entry and boat ride",
            "Bangkok Temple Tour",
            "Safari World & Marine Park with Indian lunch",
            "English-speaking guide",
            "All transportation by AC VIP coach/van",
            "Daily dinner transfer service (fixed time)"
        ],
        exclusions: [
            "Visa fees",
            "Meals not mentioned in itinerary",
            "Tips and personal expenses",
            "Optional activities entrance fees",
            "Travel insurance",
            "GST & TCS charges"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Phuket (06-05-2025)",
                description: "Upon arrival at Phuket Airport, meet our representative. Transfer to hotel and enjoy Indian lunch. Rest of day at leisure. Overnight in Phuket."
            },
            {
                day: 2,
                title: "Phi Phi Island Tour (07-05-2025)",
                description: "Speedboat tour to Phi Phi Islands. Enjoy snorkeling, swimming, and beach time. Lunch at beachside hotel. Return to Phuket (Pick-up: 07:30-07:45 AM, Drop-off: 05:30-06:00 PM)."
            },
            {
                day: 5,
                title: "7 Island Tour (10-05-2025)",
                description: "Full-day island hopping tour visiting Tup, Mohr, Chicken, Poda, and Taming Islands. Snorkeling, sunset at Phranang Cave Beach, dinner at Railay Beach, and bioluminescent plankton viewing."
            },
            {
                day: 6,
                title: "Krabi to Pattaya via Bangkok (11-05-2025)",
                description: "Flight to Bangkok and transfer to Pattaya. Evening Alcazar Cabaret Show. Overnight in Pattaya."
            },
            {
                day: 7,
                title: "Coral Island Tour (12-05-2025)",
                description: "Speedboat to Coral Island (Koh Larn). Beach activities and optional water sports. Indian lunch in Pattaya. Pick-up at 09:30 AM."
            },
            {
                day: 8,
                title: "Pattaya Floating Market & City Tour (13-05-2025)",
                description: "Visit Floating Market, Pattaya Viewpoint, Big Buddha, Gems Gallery, and Tiger Park (optional). Afternoon at leisure."
            },
            {
                day: 9,
                title: "Pattaya to Bangkok with Temple Tour (14-05-2025)",
                description: "Transfer to Bangkok with temple visits including Wat Traimit and Mini Reclining Buddha Temple. Overnight in Bangkok."
            },
            {
                day: 10,
                title: "Safari World & Marine Park (15-05-2025)",
                description: "Full day at Safari World enjoying various shows. Indian lunch included. Overnight in Bangkok."
            },
            {
                day: 11,
                title: "Departure (18-05-2025)",
                description: "Breakfast and airport transfer for return flight."
            }
        ],
        images: [
            "/UGCImages/Images4/thailand/deluxe/1.webp",
            "/UGCImages/Images4/thailand/deluxe/2.webp",
            "/UGCImages/Images4/thailand/deluxe/3.webp",
            "/UGCImages/Images4/thailand/deluxe/4.webp",
            "/UGCImages/Images4/thailand/deluxe/5.webp",
            "/UGCImages/Images4/thailand/deluxe/6.webp"
        ]
    }
};

export const destinationsWithoutFlight: Record<string, DestinationWithoutFlight> = {
    miniEurope: {
        id: "europe-7-days-mini-europe-tour",
        country: "Mini Europe",
        days: 7,
        nights: 6,
        amount: 99000,
        dateStart: "25 April, 24 Oct",
        dateEnd: "25 March, 25 Sep",
        description: "Experience the best of Europe with our specially curated 6-night itinerary, covering iconic destinations across Italy, Switzerland, and France. Perfectly planned for travelers who seek an effortless, all-inclusive journey with fixed departures.",
        groupDetails: {
            pax: "Group Tour (10-40 pax)",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates available between Oct 24 - Mar 25 and Apr 25 - Sep 25",
            duration: "6N7D Mini Europe (Italy, Switzerland, France)",
            costBasis: "Cost Based On Group Size and Hotel Category"
        },
        hotelDetails: [
            {
                city: "Milan",
                hotel: "3* Options: B&B/Idea/Ibis | 4* Options: Holiday Inn/Da Vinci/Una/Crown Plaza",
                roomType: "Standard Room"
            },
            {
                city: "Zurich",
                hotel: "3* Options: Ibis/Holiday Inn Express/B&B Belair | 4* Options: DoubleTree/Hilton/Airport Hotels",
                roomType: "Standard Room"
            },
            {
                city: "Paris",
                hotel: "3* Options: Ibis/Kyriad/Campanile | 4* Options: Mercure/Pen/Best Western",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Milan - City Orientation Tour",
            "Day 2: Como - Lugano - Zurich Tour",
            "Day 3: Mount Titlis & Lucerne Excursion",
            "Day 4: Bern & Interlaken Discovery",
            "Day 5: Travel to Paris",
            "Day 6: Paris City Tour & Seine River Cruise",
            "Day 7: Departure"
        ],
        inclusions: [
            "6 Nights Accommodation in 3 Star or 4 Star Hotels (as per selection)",
            "Daily Hot Buffet Breakfast",
            "Dinners (Local/Chinese/Indian/Muslim Meal options)",
            "All Sightseeing and excursions as per itinerary",
            "Mount Titlis return journey",
            "1-way train ticket from Meiringen to Lungern (2nd Class)",
            "Transportation via LDC Coach",
            "Seine River Cruise in Paris",
            "Professional Tour Guide Services"
        ],
        exclusions: [
            "Airfare",
            "Visa Fees",
            "Personal Expenses",
            "Any item not mentioned under Inclusions",
            "Travel Insurance",
            "City Tourist Tax (if applicable)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Milan, Italy",
                description: "Meet & Greet Services at Milan International Airport. Start your European adventure with an LDC Coach at disposal for 6 days. Orientation Tour of Milan to explore the highlights of this fashion capital. Enjoy dinner and overnight stay."
            },
            {
                day: 2,
                title: "Explore Como, Lugano & Zurich",
                description: "Begin with breakfast, check out and transfer to Como (50 km) for a scenic tour. Continue to Lugano, Switzerland (40 km) for city orientation. Travel to Zurich via Gotthard Tunnel (210 km). Dinner and overnight stay."
            },
            {
                day: 3,
                title: "Mount Titlis & Lucerne Excursion",
                description: "Full-day excursion to Mount Titlis & Lucerne. Travel to Engelberg (85 km) and experience Mount Titlis with return journey. Orientation Tour of Lucerne. Return to Zurich for dinner and overnight stay."
            },
            {
                day: 4,
                title: "Discover Bern & Interlaken",
                description: "Proceed to Bern for orientation tour. Continue to Interlaken for sightseeing. Journey to Meiringen for scenic train to Lungern. Return to Zurich for dinner and overnight stay."
            },
            {
                day: 5,
                title: "Travel to Paris, France",
                description: "Long drive to Paris, France (650 km | 8 hr). Arrive in the evening for dinner and overnight stay."
            },
            {
                day: 6,
                title: "Guided City Tour of Paris",
                description: "Half-day guided city tour of Paris. Free time for shopping. Seine River Cruise included. Dinner and overnight stay in Paris."
            },
            {
                day: 7,
                title: "Departure",
                description: "After breakfast, transfer to CDG Airport for departure."
            }
        ],
        images: [
            "/UGCImages/Images4/spain/horizontal/1.webp",
            "/UGCImages/Images4/spain/horizontal/2.webp",
            "/UGCImages/Images4/spain/horizontal/3.webp",
            "/UGCImages/Images4/spain/horizontal/4.webp",
            "/UGCImages/Images4/spain/horizontal/5.webp",
            "/UGCImages/Images4/spain/horizontal/6.webp",
            "/UGCImages/Images4/spain/horizontal/7.webp",
        ]
    },
    almaty: {
        id: "almaty-5-days-kazakhstan-tour",
        country: "Almaty",
        days: 5,
        nights: 4,
        amount: 39999,
        dateStart: "Contact for dates",
        dateEnd: "Contact for dates",
        description: "Experience the wonders of Almaty with our meticulously designed 4-night itinerary. This fixed-departure package offers the perfect balance of cultural exploration, natural beauty, and leisure activities, making it an ideal choice for all travelers.",
        groupDetails: {
            pax: "Group Tour (10-40 pax)",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Contact for available dates",
            duration: "4N5D Almaty",
            costBasis: "Cost Based On Group Size and Hotel Category"
        },
        hotelDetails: [
            {
                city: "Almaty",
                hotel: "3* Options: Vivaldi | 4* Options: Renion, Dami | 5* Options: Rahat Palace",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Almaty - City Orientation Tour",
            "Day 2: Full-Day Almaty City Tour",
            "Day 3: Excursion to Medeu & Shymbulak",
            "Day 4: Big Almaty Lake & Falcon Show",
            "Day 5: Departure"
        ],
        inclusions: [
            "4 Nights Accommodation in 3 Star or 4 Star Hotels (as per selection)",
            "Daily Hot Buffet Breakfast",
            "Dinners (Local/Indian/Halal Meal options)",
            "All Sightseeing and excursions as per itinerary",
            "Return transfers to Big Almaty Lake and Kok-Tobe Hill",
            "Transportation via private vehicle",
            "Professional Tour Guide Services"
        ],
        exclusions: [
            "Airfare",
            "Visa Fees",
            "Personal Expenses",
            "Any item not mentioned under Inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Almaty",
                description: "Meet & Greet Services at Almaty International Airport. Transfer to hotel and check-in. Orientation tour of Almaty's city center, including Republic Square, Independence Monument, and Abay Opera House. Dinner and overnight stay in Almaty."
            },
            {
                day: 2,
                title: "Full-Day Almaty City Tour",
                description: "Visit Kok-Tobe Hill with cable car ride for panoramic views, Zenkov Cathedral wooden architectural marvel, and Green Bazaar local market. Evening visit to Arbat Street for shopping and local art. Dinner and overnight stay."
            },
            {
                day: 3,
                title: "Excursion to Medeu & Shymbulak",
                description: "Visit the Medeu Skating Rink, the highest-altitude rink in the world. Take a cable car ride to Shymbulak Ski Resort and enjoy the scenic beauty of the mountains. Free time for leisure or optional activities like skiing (seasonal)."
            },
            {
                day: 4,
                title: "Big Almaty Lake & Falcon Show",
                description: "Visit the stunning Big Almaty Lake, surrounded by snow-capped peaks. Stop at a Falcon Farm to witness a live falconry demonstration. Free time for leisure or shopping. Dinner and overnight stay."
            },
            {
                day: 5,
                title: "Departure",
                description: "Breakfast at the hotel and check-out. Transfer to Almaty International Airport for your departure."
            }
        ],
        images: [
            "/UGCImages/Images4/almaty/horizontal/1.webp",
            "/UGCImages/Images4/almaty/horizontal/2.webp",
            "/UGCImages/Images4/almaty/horizontal/3.webp",
            "/UGCImages/Images4/almaty/horizontal/4.webp",
            "/UGCImages/Images4/almaty/horizontal/5.webp",
            "/UGCImages/Images4/almaty/horizontal/6.webp",
        ]
    },
    dubai: {
        id: "dubai-5-days-desert-adventure",
        country: "Dubai",
        days: 5,
        nights: 4,
        amount: 35000,
        dateStart: "Feb 2025",
        dateEnd: "April 2025",
        description: "Experience the vibrant city of Dubai with our 4-night, 5-day all-inclusive tour package, carefully curated for an unforgettable adventure. Perfect for travelers seeking fixed departure convenience, this tour covers Dubai's iconic landmarks, desert adventures, and cultural experiences.",
        groupDetails: {
            pax: "Group Tour (20-30 pax)",
            rooms: "10-15 Rooms on Twin Sharing Basis",
            arrivalDate: "Multiple dates in Feb 2025 / March 2025 / April 2025",
            duration: "4N5D Dubai",
            costBasis: "Cost Based On Group Size (20-30 pax)"
        },
        hotelDetails: [
            {
                city: "Dubai",
                hotel: "Admiral Plaza Hotel / Gateway Hotel Bur Dubai",
                roomType: "Standard Room (3 Star)"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Dubai & Dhow Cruise Marina",
            "Day 2: Dubai City Tour & Burj Khalifa",
            "Day 3: Desert Safari Adventure",
            "Day 4: Abu Dhabi City Tour & BAPS Temple Visit",
            "Day 5: Departure"
        ],
        inclusions: [
            "4 nights' accommodation in a 3-star hotel in a standard room",
            "Daily breakfast at the hotel",
            "All meals as specified: lunch and dinner at Indian restaurants",
            "Dhow Cruise Marina (Lower Deck)",
            "Burj Khalifa (124th Floor, non-peak hours)",
            "Desert Safari with BBQ dinner and entertainment",
            "BAPS Temple and Abu Dhabi Grand Mosque entry",
            "Transfers on a private basis (PVT), including arrival and departure transfers",
            "500 ml water (2 bottles per person per day)",
            "VAT (5%) and Tourism Dirham"
        ],
        exclusions: [
            "Airfare",
            "UAE visa with insurance (USD 80 per person)",
            "Personal expenses",
            "Any services not mentioned under Inclusions",
            "'Ok to board' charges, if applicable"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dubai & Dhow Cruise Marina",
                description: "Arrive at Dubai International Airport, where you'll be greeted and transferred to your hotel. Check-in to your hotel. Enjoy lunch at an Indian restaurant. Evening entry to the Dhow Cruise Marina (Lower Deck), offering breathtaking views of Dubai's illuminated skyline while savoring a delicious dinner. Overnight stay at your hotel in Dubai."
            },
            {
                day: 2,
                title: "Dubai City Tour & Burj Khalifa",
                description: "Half-Day Dubai City Tour with a professional guide: Discover Dubai's iconic landmarks, including the Dubai Museum, Jumeirah Mosque, and the Burj Al Arab. Visit Dubai Mall and witness the spectacular Fountain Show. Ascend to the 124th floor of Burj Khalifa (non-peak hours entry) for panoramic views of the city. All meals included."
            },
            {
                day: 3,
                title: "Desert Safari Adventure",
                description: "Morning leisure time to explore Dubai at your own pace or relax. Afternoon Desert Safari with a thrilling 4WD experience over golden dunes. Enjoy a BBQ dinner, live belly dance performances, and cultural entertainment at a traditional desert camp."
            },
            {
                day: 4,
                title: "Abu Dhabi City Tour & BAPS Temple Visit",
                description: "Visit the BAPS Hindu Temple, followed by a guided city tour of Abu Dhabi, the capital of the UAE. Explore the stunning Sheikh Zayed Grand Mosque and marvel at its architectural beauty. All meals included at Indian restaurants."
            },
            {
                day: 5,
                title: "Departure",
                description: "After breakfast, check out from the hotel. Transfer to Dubai International Airport for your departure, taking home unforgettable memories."
            }
        ],
        images: [
            "/UGCImages/Images6/dubai/vertical/3.webp",
            "/UGCImages/Images6/dubai/horizontal/2.webp",
            "/UGCImages/Images6/dubai/horizontal/1.webp",
            "/UGCImages/Images6/dubai/horizontal/3.webp",
            "/UGCImages/Images6/dubai/horizontal/4.webp",
            "/UGCImages/Images6/dubai/horizontal/5.webp",
            "/UGCImages/Images6/dubai/horizontal/6.webp",
            "/UGCImages/Images6/dubai/vertical/2.webp",
            "/UGCImages/Images6/dubai/vertical/1.webp",

        ],
        packageType: "land-only",
        visaRequired: true,
        minGroupSize: 20
    },
    hongKongMacau: {
        id: "hongkong-macau-5-days-combo-tour",
        country: "Hong Kong & Macau",
        days: 5,
        nights: 4,
        amount: 85494,
        dateStart: "May 2025",
        dateEnd: "June 2025",
        description: "Experience the best of Dubai with our exclusive 5-day, 4-night itinerary. This meticulously planned journey offers a seamless blend of luxury, culture, and adventure, ideal for travelers seeking a comprehensive and all-inclusive trip.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates in May and June 2025",
            duration: "4N5D Hong Kong & Macau",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Dubai",
                hotel: "Atlantis The Palm",
                roomType: "Ocean View Room (5 Star)"
            },
            {
                city: "Dubai",
                hotel: "Address Dubai Marina",
                roomType: "Standard Room (5 Star)"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Dubai - Marina Dhow Cruise",
            "Day 2: Dubai City Tour and Desert Safari",
            "Day 3: Abu Dhabi Excursion",
            "Day 4: Shopping and Global Village Visit",
            "Day 5: Departure from Dubai"
        ],
        inclusions: [
            "4 Nights Hotel Accommodation with daily breakfast",
            "Round-trip Airport Transfers by luxury coach",
            "English-speaking guide services throughout the tour",
            "Meals as per itinerary: 4 Lunches and 4 Dinners (Indian/local meals)",
            "Burj Khalifa (Level 124)",
            "Desert Safari with BBQ dinner",
            "Global Village",
            "Louvre Abu Dhabi",
            "Round-trip Dhow Cruise at Dubai Marina",
            "Daily 2 Bottles of Water per guest"
        ],
        exclusions: [
            "Airfare",
            "UAE Visa fees",
            "Personal expenses",
            "Any item not explicitly mentioned under Inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dubai (B/L/D)",
                description: "Arrival at Dubai International Airport. Meet & Greet with our English-speaking guide. Transfer to your hotel for check-in at the luxurious Atlantis The Palm (5-star), subject to room availability (standard check-in time: 1500 hrs). Lunch at a local restaurant. Evening Dhow Cruise at Dubai Marina with a buffet dinner and onboard entertainment. Return to the hotel for an overnight stay."
            },
            {
                day: 2,
                title: "Dubai City Tour and Desert Safari (B/L/D)",
                description: "Begin with a hearty breakfast at the hotel. Morning Dubai City Tour, visiting Burj Khalifa (At the Top – Level 124), Dubai Museum at Al Fahidi Fort, The iconic Jumeirah Mosque and Palm Jumeirah, and a photo stop at Burj Al Arab. Afternoon Desert Safari with dune bashing, camel rides, sandboarding, and traditional BBQ dinner with cultural performances."
            },
            {
                day: 3,
                title: "Abu Dhabi Excursion (B/L/D)",
                description: "Full-day excursion to Abu Dhabi. Visit Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Emirates Palace photo stop, and drive through Yas Island with a brief stop at Ferrari World. Lunch at a local restaurant and dinner at an Indian restaurant."
            },
            {
                day: 4,
                title: "Shopping and Global Village Visit (B/L/D)",
                description: "Morning free for shopping at Dubai Mall or Gold Souk. Evening visit to Global Village to experience cultural pavilions, performances, and international cuisine."
            },
            {
                day: 5,
                title: "Departure from Dubai (B/L/D)",
                description: "Breakfast at the hotel and check out. Stop for a farewell lunch at a local Indian restaurant. Transfer to Dubai International Airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/Images6/hongkong/horizontal/1.webp",
            "/UGCImages/Images6/hongkong/horizontal/2.webp",
            "/UGCImages/Images6/hongkong/horizontal/3.webp",
            "/UGCImages/Images6/hongkong/horizontal/4.webp",
            "/UGCImages/Images6/hongkong/horizontal/5.webp",
            "/UGCImages/Images6/hongkong/horizontal/6.webp",
            "/UGCImages/Images6/macau/horizontal/1.webp",
            "/UGCImages/Images6/macau/horizontal/2.webp",
            "/UGCImages/Images6/macau/horizontal/3.webp",
            "/UGCImages/Images6/macau/horizontal/4.webp",
            "/UGCImages/Images6/macau/horizontal/5.webp",
            "/UGCImages/Images6/macau/horizontal/6.webp",
            
        ]
    },
    sriLanka: {
        id: "srilanka-3-days-express-tour",
        country: "Sri Lanka",
        days: 3,
        nights: 2,
        dateStart: "11 Jan 2025",
        dateEnd: "31 March 2025",
        description: "Discover the pearl of Indian Ocean with its rich culture, wildlife, and beautiful beaches.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates available",
            duration: "2N3D Sri Lanka",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Colombo",
                hotel: "4 Star Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: ["Day 1: Arrival", "Day 2: City Tour", "Day 3: Departure"],
        inclusions: ["Hotel", "Breakfast", "Transfers"],
        exclusions: ["Flights", "Visa", "Personal Expenses"],
        itinerary: [
            {
                day: 1,
                title: "Arrival Day",
                description: "Welcome to Sri Lanka"
            }
        ]
    },
    malaysia: {
        id: "malaysia-4-days-kuala-lumpur-tour",
        country: "Malaysia",
        days: 4,
        nights: 3,
        amount: 20000,
        dateStart: "1 Feb 2025",
        dateEnd: "1 April 2025",
        description: "Embark on an unforgettable journey to Malaysia with our exclusive 4-day fixed departure package. Explore iconic landmarks, enjoy thrilling experiences, and immerse yourself in the vibrant culture of Kuala Lumpur and Genting Highlands.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates between Feb-April 2025",
            duration: "3N4D Kuala Lumpur & Genting",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Kuala Lumpur",
                hotel: "Arenaa Star, Ramada by Wyndham or similar",
                roomType: "Standard Room (3 Star)"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Kuala Lumpur & Full-Day City Tour",
            "Day 2: Genting Highlands Tour",
            "Day 3: Free Day in Kuala Lumpur",
            "Day 4: Putrajaya River Cruise & Departure"
        ],
        inclusions: [
            "Accommodation in a 3-star hotel with daily breakfast",
            "Entry fees for KL Tower Tour",
            "Genting Cable Car",
            "Outdoor Theme Park",
            "Putrajaya River Cruise",
            "Services of an expert tour guide (Days 1, 2, and 4)",
            "Comfortable travel in a 44-seater coach",
            "Airport transfers and tour transfers",
            "Taxes, toll, and fuel charges"
        ],
        exclusions: [
            "Airfare",
            "Optional meal package (USD 55 per person)",
            "Personal expenses",
            "Any item not mentioned in inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kuala Lumpur & Full-Day City Tour (B)",
                description: "Arrive in Kuala Lumpur and transfer to your hotel for check-in. Begin your full-day city tour with visits to KL Tower (Entry Included), Petronas Twin Towers (Photo Stop), Batu Caves Temple, Istana Negara (National Palace), Dataran Merdeka (Independence Square), Sultan Abdul Samad Building, River of Life, Malaysia House of Parliament (Drive Past), Malayan Railway Administration Building (Drive Past), Taman Botani Perdana (Drive Past). Enjoy a delicious North Indian lunch during the tour. Post-lunch photo stops at TRX Tower and PNB 101. Visit the famous Chocolate Factory. End the day with an early dinner and transfer back to the hotel."
            },
            {
                day: 2,
                title: "Genting Highlands Tour (B)",
                description: "After breakfast, head to Genting Highlands. Ride the scenic Genting Cable Car to the top. Choose your adventure: Visit the Outdoor Theme Park (Entry Included) or explore Genting's casinos and attractions on your own. Descend via cable car at 5 PM and return to Kuala Lumpur for dinner and rest at the hotel."
            },
            {
                day: 3,
                title: "Free Day in Kuala Lumpur (B)",
                description: "Enjoy a leisurely day exploring Kuala Lumpur at your own pace. Indulge in local cuisine, shop at famous malls or markets, and soak in the vibrant city vibes."
            },
            {
                day: 4,
                title: "Putrajaya River Cruise & Departure (B)",
                description: "Check out from the hotel by 12 PM. At 2 PM, embark on a tour of Putrajaya, Malaysia's administrative capital. Enjoy a serene Putrajaya River Cruise (Entry Included). Transfer to the airport by 5 PM for your departure."
            }
        ],
        images: [
            "/UGCImages/Images4/malashia/horizonTAL/1.webp",
            "/UGCImages/Images4/malashia/horizonTAL/2.webp",
            "/UGCImages/Images4/malashia/horizonTAL/3.webp",
            "/UGCImages/Images4/malashia/horizonTAL/4.webp",
            "/UGCImages/Images4/malashia/horizonTAL/5.webp",
            "/UGCImages/Images4/malashia/horizonTAL/6.webp",
        ]
    },
    southKorea: {
        id: "korea-7-days-discovery-tour",
        country: "South Korea",
        days: 7,
        nights: 6,
        amount: 90000,
        dateStart: "Contact for dates",
        dateEnd: "Contact for dates",
        description: "Embark on a captivating journey through South Korea with this 7-day tour showcasing the perfect blend of history, culture, and modernity.",
        groupDetails: {
            pax: "2-6 Pax Groups",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Contact for available dates",
            duration: "6N7D South Korea",
            costBasis: "Cost Based On Group Size and Hotel Category"
        },
        hotelDetails: [
            {
                city: "Seoul",
                hotel: "3* Option: Ibis Ambassador Insadong | 4* Option: Orakai Daehakro Seoul",
                roomType: "Standard Room"
            },
            {
                city: "Busan",
                hotel: "3* Option: Ibis Ambassador City Center | 4* Option: Ramada Encore Haeundae",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival at Incheon - Seoul",
            "Day 2: Seoul City Tour",
            "Day 3: Seoul - Gyeongju - Busan",
            "Day 4: Busan City Tour",
            "Day 5: Busan - Seoul",
            "Day 6: DMZ Tour & Dongdaemun Design Plaza",
            "Day 7: Seoul - Departure"
        ],
        inclusions: [
            "All private transfers and sightseeing",
            "English-speaking driving guide",
            "Entrance fees for specified sightseeing",
            "06 nights accommodation on double occupancy",
            "Breakfast at hotels",
            "KTX tickets (Seoul-Gyeongju & Busan-Seoul) in economy class",
            "All local taxes"
        ],
        exclusions: [
            "Tips for guides and drivers",
            "Personal expenses",
            "Meals (Lunch/Dinner)",
            "International/domestic airfare",
            "Expenses not listed in inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival at Incheon - Seoul",
                description: "Arrive at Incheon International Airport. Complete immigration and customs formalities. Transfer to Seoul (Hotel check-in after 15:00; early check-in incurs an extra charge)."
            },
            {
                day: 2,
                title: "Seoul City Tour",
                description: "Visit Gyeongbok Palace and witness the Changing of Guard Ceremony. Optional: Try Hanbok, the traditional Korean costume (direct payment). Explore the National Folk Museum, Bukchon Hanok Village, Insa-dong, Cheonggyecheon Stream, N-Seoul Tower, and the Lovelock Bridge."
            },
            {
                day: 3,
                title: "Seoul - Gyeongju - Busan",
                description: "Travel by KTX train to Gyeongju. Visit Cheomseongdae Observatory, Anapji Pond, Bulguksa Temple, and Seokguram Grotto. Drive to Busan in the evening."
            },
            {
                day: 4,
                title: "Busan City Tour",
                description: "Explore Haedong Yonggungsa Temple, Haeundae Beach, Gwangan Bridge, and the UN Memorial Cemetery."
            },
            {
                day: 5,
                title: "Busan - Seoul",
                description: "Visit Gamcheon Cultural Village, Songdo Skywalk, and Kukje Market. Return to Seoul by KTX train."
            },
            {
                day: 6,
                title: "DMZ Tour & Dongdaemun Design Plaza",
                description: "Discover the DMZ attractions: Imjingak Park, Freedom Bridge, 3rd Infiltration Tunnel, DMZ Exhibition Hall, Dora Observatory, and Dorasan Station. End the day with a visit to Dongdaemun Design Plaza (DDP)."
            },
            {
                day: 7,
                title: "Seoul - Departure",
                description: "Transfer to Incheon International Airport for your return flight. (Hotel check-out by 12:00 to avoid extra charges)."
            }
        ],
        images: [
            "/UGCImages/Images6/south korea/horizonta/3.webp",
            "/UGCImages/Images6/south korea/horizonta/1.webp",
            "/UGCImages/Images6/south korea/horizonta/2.webp",
            "/UGCImages/Images6/south korea/horizonta/4.webp",
            "/UGCImages/Images6/south korea/horizonta/5.webp",
            "/UGCImages/Images6/south korea/horizonta/6.webp",
        ],
        
    },
    bali: {
        id: "bali-7-days-paradise-tour",
        country: "Bali",
        days: 7,
        nights: 6,
        amount: 75000,
        dateStart: "Contact for dates",
        dateEnd: "31 March 2025",
        description: "Discover the enchanting paradise of Bali, a perfect blend of culture, adventure, and natural beauty. From vibrant cityscapes to serene rice terraces and pristine beaches, Bali offers an unforgettable experience. This 7-day group tour is designed for 18 PAX with premium accommodation, a professional tour guide, and seamless transfers in a Long Elf + Luggage Van.",
        groupDetails: {
            pax: "Group Tour (18 PAX)",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Contact for available dates",
            duration: "6N7D Bali",
            costBasis: "Cost Based On Group Size"
        },
        hotelDetails: [
            {
                city: "Kuta",
                hotel: "Royal Regantris",
                roomType: "Deluxe Room with City View + Bathtub (4 Nights)"
            },
            {
                city: "Ubud",
                hotel: "Uma Linga / Sebatu Valley / Ladera Ubud",
                roomType: "01 Bedroom Pool Villa with Floating Breakfast (2 Nights)"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Bali",
            "Day 2: ATV Ride & Jungle Swing Adventure",
            "Day 3: Cultural & Scenic Tour",
            "Day 4: Nusa Penida West Tour",
            "Day 5: Kintamani & Ubud Tour",
            "Day 6: Leisure Day",
            "Day 7: Departure"
        ],
        inclusions: [
            "6 nights accommodation as per itinerary",
            "Daily breakfast at hotels",
            "Local lunch during tours",
            "90-minute ATV ride (Double Sharing)",
            "Bali Jungle Swing experience",
            "All sightseeing and entrance fees",
            "Professional tour guide",
            "Transportation in Long Elf + Luggage Van",
            "Airport transfers"
        ],
        exclusions: [
            "Airfare",
            "Personal expenses",
            "Optional activities",
            "Meals not mentioned in inclusions",
            "Travel insurance"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bali",
                description: "Warm welcome at the airport and transfer to your hotel. Rest of the day at leisure to relax and settle in."
            },
            {
                day: 2,
                title: "ATV Ride & Jungle Swing Adventure",
                description: "Exciting ATV Ride (90 mins, Double Sharing) followed by the thrilling Bali Jungle Swing experience. Enjoy a local lunch during the tour."
            },
            {
                day: 3,
                title: "Cultural & Scenic Tour",
                description: "Explore Wanagiri Viewpoint, Handara Gate, Ulun Danu Temple, Tanah Lot, and The Beach Love. A full day of cultural immersion and scenic beauty."
            },
            {
                day: 4,
                title: "Nusa Penida West Tour",
                description: "Full-day tour of Nusa Penida West with local lunch included. Free snorkeling activity at the harbor."
            },
            {
                day: 5,
                title: "Kintamani & Ubud Tour",
                description: "Scenic tour covering Kintamani, Tegenungan Waterfall, Tegalalang Rice Terrace, Ubud Artist Colonies, and Ubud Palace."
            },
            {
                day: 6,
                title: "Leisure Day",
                description: "Free day at leisure to explore Bali at your own pace or relax at your villa with floating breakfast."
            },
            {
                day: 7,
                title: "Departure",
                description: "Check-out and transfer to the airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/bali/BALI DELIGHT PACKAGE/horizontal/1.webp",
            "/UGCImages/bali/BALI DELIGHT PACKAGE/horizontal/2.webp",
            "/UGCImages/bali/BALI DELIGHT PACKAGE/horizontal/3.webp",
            "/UGCImages/bali/BALI DELIGHT PACKAGE/horizontal/4.webp",
            "/UGCImages/bali/BALI DELIGHT PACKAGE/horizontal/5.webp",
            "/UGCImages/bali/BALI DELIGHT PACKAGE/horizontal/6.webp",
        ]
    },
    bhutan: {
        id: "bhutan-7-days-happiness-tour",
        country: "Bhutan",
        days: 7,
        nights: 6,
        dateStart: "23 Feb 2025",
        dateEnd: "10 August 2025",
        description: "Join our expertly guided tour and explore Bhutan's finest destinations in one immersive trip. The itinerary includes a blend of cultural immersion, scenic drives, and visits to iconic landmarks, ensuring you experience the best Bhutan has to offer.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates: 23 Feb, 16 & 30 March, 6,13,20,27 April, 4,11,18,25 May, 1,8,15,22 June, 20 July, 10 Aug",
            duration: "6N7D Bhutan",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Phuentsholing, Thimphu, Paro",
                hotel: "3-Star Hotels",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival at Bagdogra - Transfer to Phuentsholing",
            "Day 2: Thimphu Sightseeing",
            "Day 3: Wangdi and Punakha Excursion",
            "Day 4: Paro Tour",
            "Day 5: Tiger's Nest Trek or Haa Valley",
            "Day 6: Return to Phuentsholing",
            "Day 7: Departure from Bagdogra"
        ],
        inclusions: [
            "6 nights' accommodation in 3-star hotels",
            "Daily meals",
            "Guided sightseeing",
            "All transfers",
            "Professional tour guide services"
        ],
        exclusions: [
            "Sustainable Development Fee (SDF) for permits",
            "Airfare or train to Bagdogra",
            "Lunch and beverages",
            "Personal expenses and tips",
            "Entrance fees to monuments and sacred sites (approx. INR 1000-4000)"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival at Bagdogra - Transfer to Phuentsholing",
                description: "Arrive at Bagdogra Airport (between 9 AM to 11 AM) and transfer to Phuentsholing, Bhutan."
            },
            {
                day: 2,
                title: "Thimphu Sightseeing",
                description: "Travel to Thimphu and explore the city's famous landmarks including Buddha Point and King's Memorial Chorten."
            },
            {
                day: 3,
                title: "Wangdi and Punakha Excursion",
                description: "Visit the scenic Dochula Pass and Punakha Dzong during an excursion to Wangdi and Punakha."
            },
            {
                day: 4,
                title: "Paro Tour",
                description: "Visit Paro, explore the Paro Dzong, and tour the National Museum."
            },
            {
                day: 5,
                title: "Tiger's Nest Trek or Haa Valley",
                description: "Choose between a trek to the famous Tiger's Nest Monastery (Taktsang) or an excursion to the Haa Valley."
            },
            {
                day: 6,
                title: "Return to Phuentsholing",
                description: "Journey back to Phuentsholing."
            },
            {
                day: 7,
                title: "Departure",
                description: "Transfer to Bagdogra Airport for departure (after 3 PM)."
            }
        ],
        images: [
            "/UGCImages/HD IMAGES/Bhutan/horizontal/1.png",
            "/UGCImages/HD IMAGES/Bhutan/horizontal/2.png",
            "/UGCImages/HD IMAGES/Bhutan/horizontal/3.png",
            "/UGCImages/HD IMAGES/Bhutan/horizontal/4.png",
            "/UGCImages/HD IMAGES/Bhutan/horizontal/5.png",
            "/UGCImages/HD IMAGES/Bhutan/horizontal/6.png",
            "/UGCImages/HD IMAGES/Bhutan/horizontal/7.png",
        ],
        
    },
    chinacanton: {
        id: "china-6-days-canton-fair-tour",
        country: "China Canton Fair",
        days: 6,
        nights: 5,
        amount: 28000,
        dateStart: "1 Feb",
        dateEnd: "31 March",
        description: "Experience the world's largest trade fair with our comprehensive Canton Fair package. Perfect for business travelers and trade professionals looking to explore global manufacturing and trade opportunities in Guangzhou, China.",
        groupDetails: {
            pax: "Business Group Tour",
            rooms: "Single/Twin Sharing Basis",
            arrivalDate: "Contact for Fair dates",
            duration: "5N6D Canton Fair",
            costBasis: "Cost Based On Room Type"
        },
        hotelDetails: [
            {
                city: "Guangzhou",
                hotel: "Standard Category Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Guangzhou",
            "Day 2-5: Canton Fair Visits by Shuttle",
            "Day 6: Departure"
        ],
        inclusions: [
            "5 Nights Hotel Accommodation (Standard Category)",
            "Daily Shuttle Service to and from the Canton Fair",
            "Daily Breakfast at the Hotel",
            "Guided city tour and evening activities",
            "Local Transportation"
        ],
        exclusions: [
            "International flights",
            "Travel insurance",
            "Personal expenses",
            "Meals outside the itinerary",
            "Optional activities or additional excursions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Guangzhou",
                description: "Arrival at Guangzhou International Airport. A private transfer will take you to your hotel. Check-in and settle in. Evening free time to explore nearby areas or enjoy Cantonese cuisine at a local restaurant."
            },
            {
                day: 2,
                title: "Canton Fair Visit Day 1",
                description: "Morning & Afternoon: Shuttle transport to the Canton Fair Complex. Explore the various pavilions, network, attend meetings, and discover the latest industry trends. Evening: Return to hotel. Optional activities include visiting Beijing Road Pedestrian Street or Pearl River cruise."
            },
            {
                day: 3,
                title: "Canton Fair Visit Day 2",
                description: "Morning & Afternoon: Continue exploring the Canton Fair Complex. Evening: Free time for local exploration or business networking."
            },
            {
                day: 4,
                title: "Canton Fair Visit Day 3",
                description: "Morning & Afternoon: Further exploration of the Canton Fair Complex. Evening: Free time for local activities or business meetings."
            },
            {
                day: 5,
                title: "Canton Fair Visit Day 4",
                description: "Morning & Afternoon: Final day at the Canton Fair Complex. Evening: Free time for last-minute local exploration or business networking."
            },
            {
                day: 6,
                title: "Departure",
                description: "Morning: Check-out and transfer to Guangzhou International Airport. Depart with invaluable insights and new business connections."
            }
        ],
        images: [
            "/UGCImages/canton/1.webp",
            "/UGCImages/canton/2.webp",
            "/UGCImages/canton/3.webp",
            "/UGCImages/canton/4.webp"
        ],
    },
    kashmir: {
        id: "kashmir-6-days-paradise-tour",
        country: "Kashmir",
        days: 6,
        nights: 5,
        amount: 19000,
        dateStart: "Multiple dates",
        dateEnd: "March 2025",
        description: "Experience the paradise on Earth with our comprehensive Kashmir tour package. From the stunning Dal Lake to the meadows of Gulmarg and Sonamarg, immerse yourself in Kashmir's breathtaking landscapes and rich culture.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates available",
            duration: "5N6D Kashmir",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Srinagar",
                hotel: "Deluxe Hotel/Houseboat",
                roomType: "Standard Room"
            },
            {
                city: "Gulmarg",
                hotel: "Deluxe Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Pahalgam",
                hotel: "Deluxe Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrive in Srinagar",
            "Day 2: Excursion to Gulmarg | The Meadow of Flowers",
            "Day 3: Excursion to Sonamarg | The Golden Meadows",
            "Day 4: Srinagar to Pahalgam | The Valley of Shepherds",
            "Day 5: Pahalgam to Srinagar & Local Sightseeing",
            "Day 6: Departure from Srinagar"
        ],
        inclusions: [
            "Accommodation in hotels & houseboats as per the itinerary",
            "Meals: Breakfast & dinner at all stays",
            "Transport by Non AC Etios or Innova for all transfers and sightseeing",
            "Shikara ride on Dal Lake",
            "All toll taxes, parking fees, and driver allowances",
            "Sightseeing as per the itinerary"
        ],
        exclusions: [
            "Airfare/train fare",
            "Gondola ride charges in Gulmarg",
            "Pony rides, skiing, sledging, or any adventure activities",
            "Entrance fees at monuments, gardens, and any other sightseeing places",
            "Personal expenses (laundry, shopping, tips, etc.)",
            "Meals not mentioned in the itinerary",
            "Travel insurance",
            "Any additional costs due to unforeseen circumstances (roadblocks, weather conditions, etc.)",
            "Anything not mentioned in the inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive in Srinagar",
                description: "Arrive in Srinagar, meet and greet on arrival. Transfer to the hotel. Complete acclimatization and enjoy an evening walk around Dal Lake. Overnight stay at the hotel."
            },
            {
                day: 2,
                title: "Excursion to Gulmarg | The Meadow of Flowers",
                description: "Wake up to beautiful mountain views and have breakfast. Transfer to Gulmarg and check in to the hotel. Enjoy the breathtaking Kashmir Valley views and ride the world's second-highest Gondola. Try skiing and snowboarding (optional) in the popular ski resort. Visit the largest Golf Course in India (18 holes). Return to Srinagar for dinner and overnight stay at the hotel."
            },
            {
                day: 3,
                title: "Excursion to Sonamarg | The Golden Meadows",
                description: "Breakfast and check out for an excursion to Sonamarg. Explore the glacier-surrounded town with flower-filled meadows. Take a pony ride to Thajiwas Glacier with mesmerizing frozen lake views. Walk along the exotic grasslands of Baltal. Return to Srinagar and check in to a houseboat for an overnight stay with dinner."
            },
            {
                day: 4,
                title: "Srinagar to Pahalgam | The Valley of Shepherds",
                description: "Transfer to Pahalgam. Visit Aru Valley, Betaab Valley, and Chandanwari. Overnight stay in Pahalgam."
            },
            {
                day: 5,
                title: "Pahalgam to Srinagar & Local Sightseeing",
                description: "Return to Srinagar. Visit Mughal gardens, Hazratbal Shrine, and Shankaracharya Temple. Evening Shikara ride on Dal Lake with floating market visit. Overnight stay in Srinagar."
            },
            {
                day: 6,
                title: "Departure from Srinagar",
                description: "After breakfast, check-out and transfer to your preferred drop-off location in Srinagar."
            }
        ],
        images: [
            "/UGCImages/Hd images2/kashmir/horizontal/1.webp",
            "/UGCImages/Hd images2/kashmir/horizontal/2.webp",
            "/UGCImages/Hd images2/kashmir/horizontal/3.webp",
            "/UGCImages/Hd images2/kashmir/horizontal/4.webp",
            "/UGCImages/Hd images2/kashmir/horizontal/5.webp",
            "/UGCImages/Hd images2/kashmir/horizontal/6.webp"
        ],
        packageType: "customizable",
        visaRequired: false,
        minGroupSize: 2
    },
    srinagar: {
        id: "srinagar-6-days-paradise-tour",
        country: "Srinagar",
        days: 6,
        nights: 5,
        amount: 19999,
        dateStart: "Multiple dates",
        dateEnd: "March 2025",
        description: "Experience the magical charm of Kashmir with a blend of adventure, history, and breathtaking landscapes. From serene lakes to snow-capped peaks, every moment of this journey promises unforgettable memories.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates available",
            duration: "5N6D Srinagar",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Srinagar",
                hotel: "Deluxe Hotel/Houseboat",
                roomType: "Standard Room"
            },
            {
                city: "Gulmarg",
                hotel: "Deluxe Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Pahalgam",
                hotel: "Deluxe Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrive in Srinagar",
            "Day 2: Excursion to Gulmarg | The Meadow of Flowers",
            "Day 3: Excursion to Sonamarg | The Golden Meadows",
            "Day 4: Srinagar to Pahalgam | The Valley of Shepherds",
            "Day 5: Pahalgam to Srinagar & Local Sightseeing",
            "Day 6: Departure from Srinagar"
        ],
        inclusions: [
            "Accommodation in hotels & houseboats as per the itinerary",
            "Meals: Breakfast & dinner at all stays",
            "Transport by Non AC Etios or Innova for all transfers and sightseeing",
            "Shikara ride on Dal Lake",
            "All toll taxes, parking fees, and driver allowances",
            "Sightseeing as per the itinerary"
        ],
        exclusions: [
            "Airfare/train fare",
            "Personal expenses (laundry, tips, etc.)",
            "Optional activities (skiing, snowboarding, gondola rides, pony rides)",
            "Entry fees to monuments, gardens, or other attractions",
            "Travel insurance",
            "Anything not mentioned in inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive in Srinagar",
                description: "Meet and greet at Srinagar Airport. Transfer to hotel for check-in. Evening acclimatization and short walk around Dal Lake. Overnight stay at hotel."
            },
            {
                day: 2,
                title: "Excursion to Gulmarg | The Meadow of Flowers",
                description: "After breakfast, transfer to Gulmarg. Enjoy breathtaking views and ride the world's second-highest Gondola. Optional activities include skiing and snowboarding. Visit India's largest golf course. Return to Srinagar for dinner and overnight stay."
            },
            {
                day: 3,
                title: "Excursion to Sonamarg | The Golden Meadows",
                description: "Visit Sonamarg, surrounded by glaciers and flower-filled meadows. Optional pony ride to Thajiwas Glacier. Explore Baltal grasslands. Return to Srinagar for houseboat stay with dinner."
            },
            {
                day: 4,
                title: "Srinagar to Pahalgam | The Valley of Shepherds",
                description: "Transfer to Pahalgam. Visit Aru Valley, Betaab Valley, and Chandanwari. Overnight stay in Pahalgam."
            },
            {
                day: 5,
                title: "Pahalgam to Srinagar & Local Sightseeing",
                description: "Return to Srinagar. Visit Mughal gardens, Hazratbal Shrine, and Shankaracharya Temple. Evening Shikara ride on Dal Lake with floating market visit. Overnight stay in Srinagar."
            },
            {
                day: 6,
                title: "Departure from Srinagar",
                description: "After breakfast, check-out and transfer to your preferred drop-off location in Srinagar."
            }
        ],
        images: [
            "/UGCImages/Images4/srinagar/horizontal/1.webp",
            "/UGCImages/Images4/srinagar/horizontal/2.webp",
            "/UGCImages/Images4/srinagar/horizontal/3.webp",
            "/UGCImages/Images4/srinagar/horizontal/4.webp",
            "/UGCImages/Images4/srinagar/horizontal/5.webp",
            "/UGCImages/Images4/srinagar/horizontal/6.webp"
        ],
        packageType: "customizable",
        visaRequired: false,
        minGroupSize: 2
    },
    manali: {
        id: "manali-5-days-volvo-tour",
        country: "Manali",
        days: 5,
        nights: 4,
        amount: 9999,
        dateStart: "Multiple dates",
        dateEnd: "March 2025",
        description: "Experience the serene beauty of Manali with our perfectly curated 5-day Volvo package. From ancient temples to adventure activities in Solang Valley, this tour offers the perfect blend of relaxation and excitement.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing Basis",
            arrivalDate: "Multiple dates available",
            duration: "4N5D Manali (2N Volvo + 2N Hotel)",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Manali",
                hotel: "3 Star Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Delhi to Manali (Overnight Volvo Journey)",
            "Day 2: Manali Arrival & Local Sightseeing",
            "Day 3: Full-Day Solang Valley Tour",
            "Day 4: Kullu & Naggar Sightseeing - Return Journey",
            "Day 5: Arrival in Delhi"
        ],
        inclusions: [
            "2 Nights Accommodation in Manali",
            "2 Breakfasts and 2 Dinners",
            "Private Cab for all sightseeing tours",
            "Round-trip Volvo Bus Tickets (Delhi-Manali-Delhi)",
            "Double Sharing Room Accommodation"
        ],
        exclusions: [
            "Any Airfare or Train Tickets",
            "Personal Expenses (Tips, Laundry, Shopping, etc.)",
            "Adventure Activities at Solang Valley",
            "Travel Insurance",
            "Lunch or Meals not mentioned in the inclusions",
            "Any additional costs due to natural calamities or unforeseen events"
        ],
        itinerary: [
            {
                day: 1,
                title: "Delhi to Manali",
                description: "Begin your journey from Delhi in a comfortable Volvo bus to Manali for an overnight journey."
            },
            {
                day: 2,
                title: "Manali Local Sightseeing",
                description: "Arrive in Manali and check-in to your hotel. After freshening up, enjoy half-day local sightseeing including visits to Hadimba Temple, Club House, Tibetan Monasteries, and Van Vihar. Return to hotel for dinner and overnight stay."
            },
            {
                day: 3,
                title: "Solang Valley Tour",
                description: "Full day excursion to Solang Valley. Experience various adventure activities like skiing and snow scooter rides (optional), or simply enjoy the breathtaking mountain views. Evening return to hotel for dinner and overnight stay."
            },
            {
                day: 4,
                title: "Kullu & Naggar Sightseeing",
                description: "After breakfast, check-out and proceed for sightseeing of the picturesque Kullu Valley and historic Naggar Castle. Evening board the overnight Volvo bus to Delhi."
            },
            {
                day: 5,
                title: "Arrival in Delhi",
                description: "Early morning arrival in Delhi. Tour ends with fond memories of your Manali trip."
            }
        ],
        images: [
            "/UGCImages/Images4/manali/horizontal/1.webp",
            "/UGCImages/Images4/manali/horizontal/2.webp",
            "/UGCImages/Images4/manali/horizontal/3.webp",
            "/UGCImages/Images4/manali/horizontal/4.webp",
            "/UGCImages/Images4/manali/horizontal/5.webp",
            "/UGCImages/Images4/manali/horizontal/6.webp"
        ],
        packageType: "land-only",
        visaRequired: false,
        minGroupSize: 2
    },
    baliIslandHopper: {
        id: "bali-7-days-island-hopper",
        country: "Bali",
        days: 7,
        nights: 6,
        amount: 35999,
        dateStart: "Multiple dates",
        dateEnd: "30 June 2025",
        description: "Experience the best of Bali with our Island Hopper package, covering Kuta, Nusa Penida, Gili Trawangan, and Ubud. From thrilling water sports to serene beaches and cultural experiences, this tour offers the perfect blend of adventure and relaxation.",
        groupDetails: {
            pax: "Based on 2 Pax",
            rooms: "Double Sharing Basis",
            arrivalDate: "Multiple dates till 30th June",
            duration: "6N7D Bali Island Hopper",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Kuta",
                hotel: "Bliss Surfer or Similar",
                roomType: "4 Star"
            },
            {
                city: "Nusa Penida",
                hotel: "Bataran Garden Cottage or Similar",
                roomType: "3 Star"
            },
            {
                city: "Gili Trawangan",
                hotel: "Ombak Sunset or Similar",
                roomType: "3 Star"
            },
            {
                city: "Ubud",
                hotel: "Ladera Villas or Similar",
                roomType: "Private Pool Villa (4 Star)"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Bali - Kuta",
            "Day 2: Water Sports & Tanah Lot Sunset",
            "Day 3: West Nusa Penida Tour",
            "Day 4: Nusa Penida to Gili Trawangan",
            "Day 5: Gili Trawangan to Bali",
            "Day 6: Full-Day Bali Highlights Tour",
            "Day 7: Departure"
        ],
        inclusions: [
            "6 Nights accommodation as per itinerary",
            "Daily breakfast at hotels (from Day 2)",
            "Return airport transfers in private vehicle",
            "Welcome flower garland",
            "One bottle of water per person per day during tours",
            "Air-conditioned SUV for all tours and transfers",
            "All local taxes, donations, entrance fees, and toll charges",
            "English-speaking driver-guide for tours and transfers"
        ],
        exclusions: [
            "International or domestic flights",
            "Personal expenses (tips, laundry, beverages)",
            "Travel insurance",
            "Meals not mentioned in itinerary",
            "Additional activities or sightseeing",
            "Early check-in or late check-out charges"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bali",
                description: "Welcome to Bali! Transfer to your hotel in Kuta. Check-in and spend the rest of the day at leisure."
            },
            {
                day: 2,
                title: "Water Sports & Sunset",
                description: "Enjoy exciting water sports including Banana Boat, Couple Parasailing, and Jet Ski. Evening visit to witness the stunning sunset at Tanah Lot temple."
            },
            {
                day: 3,
                title: "Explore West Nusa Penida",
                description: "Take a fast boat to Nusa Penida. Full-day tour visiting Kelingking Beach, Angel's Billabong, Broken Bay, and Bubu Beach. Overnight stay in Nusa Penida."
            },
            {
                day: 4,
                title: "Nusa Penida to Gili Trawangan",
                description: "Fast boat transfer to Gili Trawangan. Free time to explore the beautiful beaches and island life of Gili T."
            },
            {
                day: 5,
                title: "Gili Trawangan to Bali",
                description: "Morning fast boat back to Bali mainland. Transfer to your hotel and afternoon at leisure."
            },
            {
                day: 6,
                title: "Full-Day Bali Tour",
                description: "Comprehensive tour covering Kintamani Volcano, Coffee Plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, and Bali Jungle Swing experience. Complimentary local lunch included."
            },
            {
                day: 7,
                title: "Departure from Bali",
                description: "Check-out and transfer to the airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/bali/ISLAND HOPPER/horizontal/1.webp",
            "/UGCImages/bali/ISLAND HOPPER/horizontal/2.webp",
            "/UGCImages/bali/ISLAND HOPPER/horizontal/3.webp",
            "/UGCImages/bali/ISLAND HOPPER/horizontal/4.webp",
            "/UGCImages/bali/ISLAND HOPPER/horizontal/5.webp",
            "/UGCImages/bali/ISLAND HOPPER/horizontal/6.webp"
        ],
        packageType: "land-only",
        visaRequired: true,
        minGroupSize: 2
    },
    russia: {
        id: "russia-8-days-moscow-stpetersburg",
        country: "Russia",
        days: 8,
        nights: 7,
        amount: 85000,
        dateStart: "25 February 2025",
        dateEnd: "4 March 2025",
        description: "Experience the grandeur of Russia with our comprehensive 8-day tour covering Moscow and Saint Petersburg. From iconic landmarks to world-class museums, immerse yourself in Russia's rich history and culture.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double/Single Sharing Available",
            arrivalDate: "25 February 2025",
            duration: "7N8D Russia",
            costBasis: "DBL: ₹85,000 | SNGL: ₹95,000"
        },
        hotelDetails: [
            {
                city: "Saint Petersburg",
                hotel: "Cosmos St. Petersburg Olympia Garden Hotel",
                roomType: "4 Star"
            },
            {
                city: "Moscow",
                hotel: "Vega Izmailovo Moscow",
                roomType: "4 Star"
            }
        ],
        tourSummary: [
            "Day 1: Delhi – Moscow – Saint Petersburg",
            "Day 2: Saint Petersburg City Tour",
            "Day 3: Hermitage Museum Visit",
            "Day 4: Free Day in Saint Petersburg",
            "Day 5: Saint Petersburg – Moscow",
            "Day 6: Moscow City Tour & Metro Tour",
            "Day 7: VDNH Tour & Cosmonaut Museum",
            "Day 8: Moscow – Departure"
        ],
        inclusions: [
            "4-star hotel accommodation with daily breakfast",
            "One-way Speed Train ticket",
            "Guided English sightseeing tours",
            "All transfers in comfortable minibus",
            "Monument entry fees",
            "Daily bottled water (0.5L per person)",
            "Russian e-Visa fees",
            "Airfare with 10kg + 5kg hand luggage"
        ],
        exclusions: [
            "Personal expenses (tips, laundry, calls)",
            "Travel insurance",
            "Meals other than breakfast",
            "Additional tours not in itinerary",
            "Early check-in/late check-out charges",
            "Flight/train delay expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Delhi – Moscow – Saint Petersburg",
                description: "Arrival at Saint Petersburg Airport at 14:10 via Aeroflot SU 6214. Transfer to Cosmos St. Petersburg Olympia Garden Hotel for check-in."
            },
            {
                day: 2,
                title: "Saint Petersburg City Tour",
                description: "4-hour guided tour exploring iconic landmarks including Peter and Paul Fortress and Kazan Cathedral."
            },
            {
                day: 3,
                title: "Hermitage Museum Visit",
                description: "4-hour guided tour of the world-famous Hermitage Museum with included entry tickets."
            },
            {
                day: 4,
                title: "Free Day in Saint Petersburg",
                description: "Full day at leisure to explore the beautiful city at your own pace."
            },
            {
                day: 5,
                title: "Saint Petersburg – Moscow",
                description: "Check-out and transfer to train station. Speed train journey to Moscow. Check-in at Vega Izmailovo Moscow hotel."
            },
            {
                day: 6,
                title: "Moscow City Tour",
                description: "4-hour guided tour covering Red Square, GUM Mall, Alexandrovsky Garden, Christ the Saviour Cathedral, Park Zaryadye with Sky Bridge, and Moscow Metro Tour."
            },
            {
                day: 7,
                title: "VDNH Tour & Cosmonaut Museum",
                description: "4-hour guided tour including visit to the Cosmonaut Museum with entry tickets."
            },
            {
                day: 8,
                title: "Moscow – Departure",
                description: "Breakfast and transfer to the airport for departure."
            }
        ],
        images: [
            "/UGCImages/Images4/russia/horizontal/1.webp",
            "/UGCImages/Images4/russia/horizontal/2.webp",
            "/UGCImages/Images4/russia/horizontal/3.webp",
            "/UGCImages/Images4/russia/horizontal/4.webp",
            "/UGCImages/Images4/russia/horizontal/5.webp",
            "/UGCImages/Images4/russia/horizontal/6.webp"
        ],
        packageType: "land-only",
        visaRequired: true,
        minGroupSize: 2
    }
};

export function isFixedDeparture(destination: FixedDeparture | DestinationWithoutFlight): destination is FixedDeparture {
    return 'flightFrom' in destination;
}

export function isDestinationWithoutFlight(destination: FixedDeparture | DestinationWithoutFlight): destination is DestinationWithoutFlight {
    return !('flightFrom' in destination);
}

// Update the destinationGroups to always have 3 destinations per group
export const destinationGroups = [
    {
        miniEurope: destinationsWithoutFlight.miniEurope,
        almaty: destinationsWithoutFlight.almaty,
        dubai: destinationsWithoutFlight.dubai
    },
    {
        hongKongMacau: destinationsWithoutFlight.hongKongMacau,
        sriLanka: destinationsWithoutFlight.sriLanka,
        malaysia: destinationsWithoutFlight.malaysia
    },
    {
        southKorea: destinationsWithoutFlight.southKorea,
        bali: destinationsWithoutFlight.bali,
        bhutan: destinationsWithoutFlight.bhutan
    },
    {
        chinacanton: destinationsWithoutFlight.chinacanton,
        kashmir: destinationsWithoutFlight.kashmir,
        srinagar: destinationsWithoutFlight.srinagar
    },
    {
        manali: destinationsWithoutFlight.manali,
        baliIslandHopper: destinationsWithoutFlight.baliIslandHopper,
        russia: destinationsWithoutFlight.russia
    }
];

// Helper function to get total number of pages
export const getTotalPages = (): number => destinationGroups.length;

// Helper function to get destinations for a specific page
export const getDestinationsForPage = (page: number) => {
    if (page < 0 || page >= destinationGroups.length) {
        return {};
    }
    return destinationGroups[page];
}; 