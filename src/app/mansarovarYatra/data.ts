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

export interface MansarovarYatraPackage {
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
    sightseeingSpots?: SightseeingSpot[];
    localFood?: LocalFood[];
    culture?: CultureItem[];
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

export const mansarovarYatraPackages: Record<string, MansarovarYatraPackage> = {
    mountKailash: {
        id: "mount-kailash-mansarovar-yatra-by-Heli-8N9D",
        packageName: "Mount Kailash Mansarovar Yatra by Heli 8N9D",
        days: 9,
        nights: 8,
        amount: 270000,
        dateStart: "October 2025",
        dateEnd: "18th October 2025",
        description: "Embark on a sacred journey to Mount Kailash and Lake Mansarovar, the most revered pilgrimage site in Hinduism and Buddhism. This overland expedition takes you through breathtaking landscapes of Tibet.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "8D9N Kailash Mansarovar",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Nepalgunj",
                hotel: "Hotel Tibet International or similar",
                roomType: "Standard Room"
            },

        ],
        tourSummary: [
            "Day 1: Arrival in Lucknow and Drive to Nepalgunj",
            "Day 2: Fly from Nepalgunj to Simikot",
            "Day 3: Helicopter to Hilsa and Drive to Purang (Taklakot)",
            "Day 4: Rest Day at Taklakot (Purang)",
            "Day 5: Holy Lake Manasarovar Parikrama and drive to Darchen",
            "Day 6: Darchen to Diraphuk",
            "Day 7: Trek to Zuthulphuk",
            "Day 8: Zuthulphuk to Hilsa/Simikot",
            "Day 9: Simikot/Nepalgunj and drive to Lucknow",],
        inclusions: [
            "4 star hotel at Nepalgunj and best possible at other places",
            "100% Vegetarian Breakfast, Lunch, and Dinner as specified in the itinerary.",
            "All ground transportation in comfortable vehicles throughout the journey.",
            "Nepalgunj - Simikot (Aeroplane 45 mins)",
            "Simikot - Hilsa (Helicopter 15 mins)",
            "Hilsa - Simikot (Helicopter 15 mins)",
            "Simikot - Nepalgunj (45 mins)",
            "Sightseeing Tours: Guided tours with knowledgeable local guides at various sites.",
            "Permits: Necessary permits for entering Tibet and other regions.",
            "Parikrama Trekking: Support and guidance for the parikrama around Mt. Kailash, local guides.",
            "Complimentary bottled water during the journey.",
            "English speaking guide and Tibetan guide.",
            "Cooks and supporting staff during Tibet part and Kailash Parikrama."
        ],
        exclusions: [
            "International Flights: Flights from origin (home) to Kathmandu and Kathmandu to origin (home).",
            "Entrance Fees: Entrance fees to various monuments in Nepal and China not included.",
            "Personal Expenses: Expenses of a personal nature such as laundry, phone calls, souvenirs, etc.",
            "Tips and Gratuities: Tips for guides, drivers, and hotel staff (typically not included).",
            "Travel Insurance: Any additional travel insurance coverage beyond basic.",
            "Alcoholic Beverages: Drinks and meals outside the itinerary specifications.",
            "Optional Activities: Activities not mentioned in the itinerary or any upgrades to accommodation or experiences.",
            "Emergency Evacuation: Costs related to emergency evacuation or medical treatment not covered by basic insurance.",
            "Horse and Porter: To be paid on location, $200 for porter and $400 for horse.",
            "Horse and Porter Hire: Needs to be hired for full parikrama and once paid, it is non-refundable."
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Lucknow and Drive to Nepalgunj",
                description: `Meet our representative from Holy Mountain Buddha Travel and Tours from Lucknow or
Nepalgunj. After a warm welcome, you will be transferred to your hotel in Nepalgunj. Spend the
evening relaxing and preparing for the journey ahead.`,
                image: "/UGCImages/mansarovar/Kailash/1.webp"
            },
            {
                day: 2,
                title: "Fly from Nepalgunj to Simikot",
                description: `Early in the morning, transfer to the airport for a scenic flight to Simikot, a remote area
accessible only by air. Upon arrival, enjoy the rest of the day acclimatizing to the altitude and
exploring the local surroundings.`,
                image: "/UGCImages/mansarovar/Kailash/2.webp"
            },
            {
                day: 3,
                title: "Helicopter to Hilsa and Drive to Purang (Taklakot)",
                description: `After breakfast, take a thrilling helicopter ride to Hilsa, the Nepali border town. Once all group
members have arrived, cross the border into Tibet and meet our Tibetan and Nepali team. Drive
to the town of Taklakot (Purang).
`,
                image: "/UGCImages/mansarovar/Kailash/3.webp"
            },
            {
                day: 4,
                title: "Rest Day at Taklakot (Purang)",
                description: `Take a rest day to acclimatize and explore the Purang market. This is a great opportunity to
purchase any essential trekking gear or personal items needed for the journey.`,
                image: "/UGCImages/mansarovar/Kailash/4.webp"
            },
            {
                day: 5,
                title: "Holy Lake Manasarovar Parikrama and drive to Darchen",
                description: `Drive around the sacred Lake Manasarovar, one of the holiest lakes in the world. Stop at a serene
spot for spiritual pooja, havan, meditation, or a holy bath. Pass by Rakshas (Demon) Lake,
where Ravana is believed to have performed penance for Lord Shiva.
Drive to Darchen
Overnight stay at Darchen.`,
                image: "/UGCImages/mansarovar/Kailash/5.webp"
            },
            {
                day: 6,
                title: "Darchen to Diraphuk",
                description: `Begin the sacred Mount Kailash Parikrama after breakfast. Drive to Yama Dwar (Tarboche),
the starting point of the trek. Horses and porters (if pre-booked) will be arranged here. Trek
through stunning landscapes to reach Diraphuk. Pilgrims not undertaking the Parikrama can stay
at Darchen.
`,
                image: "/UGCImages/mansarovar/Kailash/6.webp"
            },
            {
                day: 7,
                title: "Trek to Zuthulphuk",
                description: `This is the most challenging part of the trek. Ascend to the Dolma-La Pass (5610 m), the highest
point of the journey. Offer prayers at the pass and enjoy the mesmerizing view of Lake Gauri
Kunda. Descend to Zuthulphuk along a relatively easier trail.
`,
                image: "/UGCImages/mansarovar/Kailash/7.webp"
            },
            {
                day: 8,
                title: "Zuthulphuk to Hilsa/SImikot",
                description: `After breakfast, trek to Chongdo (ending point), a 3-hour walk. Drive back to Darchen to reunite with
pilgrims who did not undertake the Parikrama. Enjoy lunch at Darchen and drive to Taklakot or Hilsa.
Depending on weather conditions, fly back to Simikot.`,
                image: "/UGCImages/mansarovar/Kailash/8.webp"
            },
            {
                day: 9,
                title: "Simikot/Nepalgunj and drive to Lucknow",
                description: "After breakfast, start from where you we were halted and fly towards Nepalgunj and drive to Lucknow",
                image: "/UGCImages/mansarovar/Kailash/9.webp"
            },
        ],
        images: [
            "/UGCImages/mansarovar/Kailash/1.webp",
            "/UGCImages/mansarovar/Kailash/2.webp",
            "/UGCImages/mansarovar/Kailash/3.webp",
            "/UGCImages/mansarovar/Kailash/4.webp",
            "/UGCImages/mansarovar/Kailash/5.webp",
            "/UGCImages/mansarovar/Kailash/6.webp",
            "/UGCImages/mansarovar/Kailash/7.webp",
            "/UGCImages/mansarovar/Kailash/8.webp",
            "/UGCImages/mansarovar/Kailash/9.webp",
            "/UGCImages/mansarovar/Kailash/10.webp",
        ],
        departureDates: [
            { date: "October 2025 - October 2025" }
        ],
        experiences: [
            {
                title: "Mount Kailash Parikrama",
                image: "/UGCImages/mansarovar/Kailash/2.webp"
            },
            {
                title: "Lake Mansarovar",
                image: "/UGCImages/mansarovar/Kailash/9.webp"
            },
            {
                title: "Tibetan Monasteries",
                image: "/UGCImages/mansarovar/Kailash/1.webp"
            }
        ],
        sightseeingSpots: [
            {
                name: "Mount Kailash",
                description: "Sacred mountain believed to be the abode of Lord Shiva, center of the universe",
                image: "/UGCImages/mansarovar/Man/Sacred Geography .png"
            },
            {
                name: "Lake Mansarovar",
                description: "Highest freshwater lake in the world at 15,060 feet, sacred to four religions",
                image: "/UGCImages/mansarovar/Man/Lake Mansarovar.png"
            },
            {
                name: "Dolma La Pass",
                description: "Highest point of Kailash Parikrama at 18,600 feet, spiritually significant crossing",
                image: "/UGCImages/mansarovar/Man/dolma la pass.png"
            },
            {
                name: "Dirapuk Monastery",
                description: "Ancient monastery with stunning north face view of Mount Kailash",
                image: "/UGCImages/mansarovar/Man/Dirapuk Monastery.png"
            },
            {
                name: "Zuthulpuk Monastery",
                description: "Sacred cave monastery where Milarepa meditated during his spiritual journey",
                image: "/UGCImages/mansarovar/Man/Zuthulpuk Monastery.png"
            },
            {
                name: "Asthapad",
                description: "Sacred site where first Jain Tirthankara achieved liberation",
                image: "/UGCImages/mansarovar/Man/astapad.png"
            }
        ],
        localFood: [
            {
                name: "Tibetan Thukpa",
                description: "Hearty noodle soup with vegetables and meat, perfect for high altitude",
                image: "/UGCImages/mansarovar/Man/thupka.png",
                where: "Tibetan restaurants and guest houses"
            },
            {
                name: "Momos",
                description: "Steamed dumplings filled with vegetables or meat, Tibetan specialty",
                image: "/UGCImages/mansarovar/foo/1.png",
                where: "Local Tibetan eateries"
            },
            {
                name: "Butter Tea (Po Cha)",
                description: "Traditional Tibetan tea with yak butter and salt, energy drink for pilgrims",
                image: "/UGCImages/mansarovar/foo/2.png",
                where: "Monasteries and local tea houses"
            },
            {
                name: "Tsampa",
                description: "Roasted barley flour, staple food of Tibet mixed with butter tea",
                image: "/UGCImages/mansarovar/foo/3.png",
                where: "Traditional Tibetan meals"
            }
        ],
        culture: [
            {
                title: "Sacred Geography",
                description: "Mount Kailash as the cosmic center and source of four great rivers of Asia",
                image: "/UGCImages/mansarovar/culture/1.png"
            },
            {
                title: "Tibetan Buddhism",
                description: "Ancient monasteries and practices preserved in the high Himalayas",
                image: "/UGCImages/mansarovar/culture/2.png"
            },
            {
                title: "Pilgrimage Traditions",
                description: "Centuries-old spiritual practices of circumambulation and devotion",
                image: "/UGCImages/mansarovar/culture/3.png"
            },
            {
                title: "Bon Religion",
                description: "Ancient pre-Buddhist religion of Tibet with deep connection to Kailash",
                image: "/UGCImages/mansarovar/culture/4.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Sacred Mount Kailash Parikrama",
                "Holy Lake Mansarovar",
                "Dolma La Pass crossing",
                "Tibetan Buddhist culture",
                "Spiritual transformation"
            ],
            bestTimeToVisit: "May to October",
            cuisine: [
                "Tibetan Thukpa",
                "Momos",
                "Butter Tea",
                "Tsampa"
            ],
            accommodation: {
                type: "Guest houses and basic hotels",
                amenities: [
                    "Basic heating",
                    "Shared bathrooms",
                    "Simple meals",
                    "Mountain views"
                ]
            },
            transportation: {
                type: "Tourist vehicle in Tibet",
                features: [
                    "Experienced driver",
                    "Oxygen support",
                    "First aid kit"
                ]
            }
        },
        batchDetails: {
            currentBatch: "October 2025",
            remainingSlots: 8,
            monthlyBatches: [
                {
                    month: "October",
                    dates: ["14-21-28"],
                    availableSeats: 10
                },
                {
                    month: "October",
                    dates: ["4-11", "18"],
                    availableSeats: 15
                }
            ]
        }
    },
};

export const withoutFlightPackages: Record<string, MansarovarYatraPackage> = {
    economyOverland: {
        id: "mansarovar-economy-overland-11-nights-12-days",
        packageName: "Mansarovar Economy Overland Yatra 11 Nights 12 Days",
        days: 12,
        nights: 11,
        amount: 65000,
        dateStart: "May 2025",
        dateEnd: "October 2025",
        description: "Budget-friendly overland journey to Mount Kailash and Lake Mansarovar. A complete spiritual experience without compromising on the sacred aspects of the pilgrimage.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "12D11N Economy Package",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Kathmandu",
                hotel: "Budget Hotel or Guest House",
                roomType: "Standard Room"
            },
            {
                city: "Kerung",
                hotel: "Basic Guest House",
                roomType: "Simple Room"
            },
            {
                city: "Saga",
                hotel: "Local Guest House",
                roomType: "Basic Room"
            },
            {
                city: "Mansarovar",
                hotel: "Tent/Guest House",
                roomType: "Shared Accommodation"
            }
        ],
        tourSummary: [
            "Day 1: Arrive Kathmandu",
            "Day 2: Kathmandu to Kerung",
            "Day 3: Kerung to Saga",
            "Day 4: Saga to Mansarovar",
            "Day 5: Mansarovar to Darchen",
            "Day 6-8: Kailash Parikrama (3 days)",
            "Day 9: Darchen to Saga",
            "Day 10: Saga to Kerung",
            "Day 11: Kerung to Kathmandu",
            "Day 12: Departure"
        ],
        inclusions: [
            "Budget accommodation on sharing basis",
            "Basic meals during Tibet portion",
            "Ground transportation in Tibet",
            "Tibet permits and border formalities",
            "Basic guide service",
            "Yak/Porter for Parikrama",
            "Group oxygen cylinder"
        ],
        exclusions: [
            "International flights",
            "China visa fee",
            "Personal expenses",
            "Travel insurance",
            "Meals in Kathmandu",
            "Single room supplement",
            "Medical expenses",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive Kathmandu",
                description: "Arrival and basic briefing about the journey. Rest in budget accommodation.",
                image: "/UGCImages/mansarovar/eco1.webp"
            },
            {
                day: 2,
                title: "Kathmandu to Kerung",
                description: "Overland journey to Tibet border. Simple border crossing procedures.",
                image: "/UGCImages/mansarovar/eco2.webp"
            },
            {
                day: 3,
                title: "Kerung to Saga",
                description: "Drive across Tibetan plateau with basic comfort stops.",
                image: "/UGCImages/mansarovar/eco3.webp"
            },
            {
                day: 4,
                title: "Saga to Mansarovar",
                description: "Reach the sacred lake. Basic puja arrangements and lake bath.",
                image: "/UGCImages/mansarovar/eco4.webp"
            },
            {
                day: 5,
                title: "Mansarovar to Darchen",
                description: "Travel to Kailash base camp. Prepare for the sacred walk.",
                image: "/UGCImages/mansarovar/eco5.webp"
            },
            {
                day: 6,
                title: "Kailash Parikrama Day 1",
                description: "Begin the sacred circumambulation with basic support.",
                image: "/UGCImages/mansarovar/eco6.webp"
            },
            {
                day: 7,
                title: "Kailash Parikrama Day 2",
                description: "Cross Dolma La Pass with group support.",
                image: "/UGCImages/mansarovar/eco7.webp"
            },
            {
                day: 8,
                title: "Kailash Parikrama Day 3",
                description: "Complete the sacred circuit and return to base.",
                image: "/UGCImages/mansarovar/eco8.webp"
            },
            {
                day: 9,
                title: "Darchen to Saga",
                description: "Return journey with rest stops.",
                image: "/UGCImages/mansarovar/eco9.webp"
            },
            {
                day: 10,
                title: "Saga to Kerung",
                description: "Continue return journey to border.",
                image: "/UGCImages/mansarovar/eco10.webp"
            },
            {
                day: 11,
                title: "Kerung to Kathmandu",
                description: "Cross back to Nepal and return to Kathmandu.",
                image: "/UGCImages/mansarovar/eco11.webp"
            },
            {
                day: 12,
                title: "Departure",
                description: "End of pilgrimage journey.",
                image: "/UGCImages/mansarovar/eco12.webp"
            }
        ],
        images: [
            "/UGCImages/mansarovar/eco_main1.webp",
            "/UGCImages/mansarovar/eco_main2.webp",
            "/UGCImages/mansarovar/eco_main3.webp",
            "/UGCImages/mansarovar/eco_main4.webp"
        ],
        experiences: [
            {
                title: "Basic Parikrama",
                image: "/UGCImages/mansarovar/eco_exp1.webp"
            },
            {
                title: "Group Journey",
                image: "/UGCImages/mansarovar/eco_exp2.webp"
            },
            {
                title: "Simple Living",
                image: "/UGCImages/mansarovar/eco_exp3.webp"
            }
        ],
        sightseeingSpots: [
            {
                name: "Mount Kailash",
                description: "Sacred mountain believed to be the abode of Lord Shiva, center of the universe",
                image: "/UGCImages/mansarovar/sight1.webp"
            },
            {
                name: "Lake Mansarovar",
                description: "Highest freshwater lake in the world at 15,060 feet, sacred to four religions",
                image: "/UGCImages/mansarovar/sight2.webp"
            },
            {
                name: "Dolma La Pass",
                description: "Highest point of Kailash Parikrama at 18,600 feet, spiritually significant crossing",
                image: "/UGCImages/mansarovar/sight3.webp"
            },
            {
                name: "Kerung Border",
                description: "Nepal-China border crossing, gateway to the sacred land of Tibet",
                image: "/UGCImages/mansarovar/eco_sight1.webp"
            },
            {
                name: "Saga",
                description: "Important stopover town in Tibet with basic facilities for pilgrims",
                image: "/UGCImages/mansarovar/eco_sight2.webp"
            }
        ],
        localFood: [
            {
                name: "Simple Tibetan Meals",
                description: "Basic but nutritious Tibetan food including rice, dal, and vegetables",
                image: "/UGCImages/mansarovar/eco_food1.webp",
                where: "Budget guest houses and local eateries"
            },
            {
                name: "Group Meals",
                description: "Shared community meals that bring pilgrims together in fellowship",
                image: "/UGCImages/mansarovar/eco_food2.webp",
                where: "Group dining areas"
            },
            {
                name: "Tea and Biscuits",
                description: "Simple refreshments to maintain energy during the spiritual journey",
                image: "/UGCImages/mansarovar/eco_food3.webp",
                where: "Rest stops and tea houses"
            }
        ],
        culture: [
            {
                title: "Pilgrimage Community",
                description: "Strong bonds formed among fellow pilgrims during the challenging journey",
                image: "/UGCImages/mansarovar/eco_culture1.webp"
            },
            {
                title: "Simple Living",
                description: "Learning the value of minimalism and spiritual focus over material comfort",
                image: "/UGCImages/mansarovar/eco_culture2.webp"
            },
            {
                title: "Authentic Experience",
                description: "Experiencing the pilgrimage as it has been done for centuries",
                image: "/UGCImages/mansarovar/eco_culture3.webp"
            }
        ]
    }
}; 