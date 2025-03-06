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

export interface vietnamPackage {
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

export const vietnamPackages: Record<string, vietnamPackage> = {
    vietnamFixedDeparture: {
        id: "4-days-south-of-vietnam",
        packageName: "4 Days South of Vietnam",
        days: 4,
        nights: 3,
        amount: 30799,
        dateStart: "01 March 2025",
        dateEnd: "26 Jun 2025",
        description: "Experience the ultimate vietnam adventure with our comprehensive 7-day tour covering Ubud, Kintamani, and Ubud. From pristine beaches to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4N3D vietnam Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Ho Chi Minh City",
                hotel: "3 star SEN VIET HOTEL",
                roomType: "Superior Room"
            },
            {
                city: "Ho Chi Minh City",
                hotel: "4 star HARMONY SAI GON HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Ho Chi Minh City",
                hotel: "5 star EASTIN GRAND HOTEL",
                roomType: "Superior Room"
            }
            
        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival ",
            "Day 2: Mekong Delta - My Tho &amp; Ben Tre Coconut Village (B/L/-)",
            "Day 3: Cu Chi Tunnels - Ho Chi Minh City Tour (B/L/-)",
            "Day 4: Ho Chi Minh City - Departure (B/-/-)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (3 breakfasts, 2 lunches)",
            "English speaking guides (other languages available upon request with surcharge)"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Compulsory dinner on 24 Dec and 31 Dec surcharge (depending on hotel policy)",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Ho Chi Minh City - Arrival ",
                description: `Pick-up at Tan Son Nhat International airport. Transfer to your hotel. Overnight in Ho Chi Minh City.`
            },
            {
                day: 2,
                title: "Mekong Delta - My Tho &amp; Ben Tre Coconut Village (B/L)",
                description: `A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern
Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of
My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with
bees honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow
canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody
here travels by boats or ships because the number of canals is very interlaced. Here a system of
transportation on water is developed so much. By travelling on canals, we can discover many distinct
things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride
provides an interesting look into the local cottage industry of making coconut candies. We will then
have a lunch of Elephant-Ear Fish combined with other delicious Vietnamese dishes - a local specialty.
Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive
architectural and spiritual values, a place worth visiting should not be missed. Overnight in Ho Chi Minh
City.`
            },
            {
                day: 3,
                title: "Cu Chi Tunnels - Ho Chi Minh City Tour (B/L)",
                description: `Start the day with a visit to the famous Cu Chi Tunnels. Stretching over 250 kilometers, Cu Chi is one of
the most famous and historical aspects of war in Vietnam. The tunnel system was created in 1948 to
assist the Viet Minh as they fought the French for independence and became legendary during the
1960s in playing a vital role in the Vietnam War by allowing the Viet Cong (communist guerrillas) to
control large rural areas, just 65 kilometers away from Ho Chi Minh City. This system of tunnels consists
of hospitals, rooms, kitchens, store areas, and working rooms underground. This tunnel was excavated
in the area with clay mixing with laterite. So this tunnel is rather durable and stable. The air is
transferred to the tunnels through ventilation holes.
In the afternoon, we will visit some of the other major attractions in Ho Chi Minh City: War Remnants,
Reunification Palace, Notre Dame Cathedral and Old Post Office. These buildings are considered as the
symbols of Ho Chi Minh City because of their architecture and historical meanings. We also will visit
Thien Hau Pagoda in Cho Lon - a Chinese-style temple located on Nguyen Trai Street in Cho Lon (China
Town). Overnight in Ho Chi Minh City.`
            },
            {
                day: 4,
                title: "Ho Chi Minh City - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Tan Son Nhat International airport for
your departure flight.`
            },
            
        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "1, 8, 15, 22 Mar 2025" },
            { date: "3, 10, 17, 24 Apr 2025" },
            { date: "7, 14, 21, 28 May 2025" },
            { date: "5, 12, 19, 26 Jun 2025" },
        ]
    },
    vietnamPhuQuoc: {
        id: "4-days-phu-quoc-pristine-beaches",
        packageName: "4 DAYS PHU QUOC PRISTINE",
        days: 4,
        nights: 3,
        amount: 39000,
        dateStart: "01 March 2025",
        dateEnd: "30 Jun 2025",
        description: "Experience the ultimate vietnam adventure with our comprehensive 7-day tour covering Ubud, Kintamani, and Ubud. From pristine beaches to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4N3D vietnam Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Phu Quoc",
                hotel: "3 star ANAN PHU",
                roomType: "Superior Room"
            },
            {
                city: "Phu Quoc",
                hotel: "4 star LAHANA RESORT PHU QUOC",
                roomType: "Deluxe Garden View Room"
            },
            {
                city: "Phu Quoc",
                hotel: "5 star SEASHELLS RESORT & SPA",
                roomType: "Classic city view Room"
            }
            
        ],
        tourSummary: [
            "Day 1: Phu Quoc - Arrival",
            "Day 2: East Island Discovery - Vinpearl Land (B/L)",
            "Day 3: Phu Quoc - Free day (B)",
            "Day 4: Phu Quoc - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (3 breakfasts, 2 lunches)",
            "English speaking guides (other languages available upon request with surcharge)"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Compulsory dinner on 24 Dec and 31 Dec surcharge (depending on hotel policy)",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Phu Quoc - Arrival",
                description: `Pick-up at Phu Quoc International airport. Transfer to your hotel. Overnight in Phu Quoc.`
            },
            {
                day: 2,
                title: "East Island Discovery - Vinpearl Land (B/L)",
                description: `Phu Quoc pepper is renowned for being the best pepper in Vietnam and our visit to a famous pepper farm will give you fascinating insight into its transformation from plant to pepper pot. You will learn how local people carefully cultivate their pepper to produce the very best pepper. Next, we will head to one of the best places of Phu Quoc Island, Ham Ninh fishing village. Learning how locals make their living from catching fish, crab and other underwater delights. We then visit Suoi Tranh waterfall, the most impressive and best natural attractions in Phu Quoc Island. Although the waterfall is not big, it is still picturesque and the trail leading to the fall is very scenic. Another famous Phu Quocs specialty is Sim Wine, you will have a chance to try some samples when you visit the Sim Wine distillery on the penultimate part of our tour. For the last leg of our tour we will wander through the atmospheric Duong Dong Night Market and the odd-shaped natural formation "Dinh Cau" Rock - Cau Temple which was constructed to commemorate Thien Hau (the Goddess of the sea), whom locals believe provides protection for fishermen heading out to sea. After lunch, go to Vinpearl Land - fill your time with joy and excitement at the amusement park (Ticket packages include all these activities). Have dinner by guests expense. Then, enjoy art performances at Vinpearl Amphitheater. Overnight in Phu Quoc.`
            },
            {
                day: 3,
                title: "Phu Quoc - Free day (B)",
                description: `Free time all day to explore Phu Quoc on your own or just relax on the beach. Overnight in Phu Quoc.`
            },
            {
                day: 4,
                title: "Phu Quoc - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Phu Quoc International airport for
your departure flight.`
            },
            
        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "3, 10, 17, 24, 31 Mar 2025" },
            { date: "7, 14, 21 Apr 2025" },
            { date: "5, 12, 19, 26 May 2025" },
            { date: "2, 9, 16, 23, 30 Jun 2025" },
            
        ]
    },
    vietnamNorth: {
        id: "5-days-north-of-vietnam",
        packageName: "5 DAYS NORTH OF VIETNAM",
        days: 5,
        nights: 4,
        amount: 39000,
        dateStart: "01 March 2025",
        dateEnd: "27 Jun 2025",
        description: "Discover the highlights of Vietnam's north with our 5-day tour covering Hanoi, Halong Bay. From ancient temples to stunning landscapes, this tour offers a perfect blend of culture, adventure, and relaxation.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "5N4D vietnam Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Hanoi",
                hotel: "3 star ANISE HOTEL & SPA",
                roomType: "ROH Room"
            },
            {
                city: "Hanoi",
                hotel: "4 star FLOWER GARDEN HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Hanoi",
                hotel: "5 star GRAND VISTA HA NOI HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Ha Long",
                hotel: "3 star COZY BAY CRUISE",
                roomType: "Superior Room"
            },
            {
                city: "Ha Long",
                hotel: "4 star VICTORIA CRUISE",
                roomType: "Deluxe Room"
            },
            {
                city: "Ha Long",
                hotel: "5 star PARADISE SAILS CRUISE",
                roomType: "Deluxe Room"
            }
            
        ],
        tourSummary: [
            "Day 1: Hanoi - Arrival",
            "Day 2: Ha Noi - Ha Long Bay (B/L/D)",
            "Day 3: Ha Long Bay - Ha Noi (B/L)",
            "Day 4: Ha Noi City Tour in the afternoon (B)",
            "Day 5: Ha Noi - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (4 breakfasts, 2 lunches, 1 dinner)",
            "English speaking guides (other languages available upon request with surcharge)"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Compulsory dinner on 24 Dec and 31 Dec surcharge (depending on hotel policy)",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Hanoi - Arrival",
                description: `Pick-up at Hanoi International airport. Transfer to your hotel. Overnight in Hanoi.`
            },
            {
                day: 2,
                title: "Ha Noi - Ha Long Bay (B/L/D)",
                description: `The wondrous Ha Long Bay is truly one of Vietnams most impressive sights. Heading out of town, we will embark by boat for an exploration of legendary Ha Long Bay. Ha Long Bay is home to some 3000 limestone islands that rise out of the clear emerald water. The limestone karsts formations are littered with beaches, grottoes and beautiful caves. Along the way, we will anchor for a leisurely swim in a secluded cove and enjoy a visit to one of the many hidden grottoes beneath towering cliffs. Overnight on the cruise.`
            },
            {
                day: 3,
                title: "Ha Long Bay - Ha Noi (B/L)",
                description: `After breakfast, swimming and sunbathing. After lunch, return to Ha Noi. Overnight in Ha Noi.`
            },
            {
                day: 4,
                title: "Ha Noi City Tour in the afternoon (B)",
                description: `Free time at your leisure in the morning. In the afternoon, visit some of Ha Noi heritage sites such as Van Mieu - Quoc Tu Giam (Temple of Literature), the first Imperial school in Vietnam, built in 1070 during the dynasty of King Ly. We will also visit Hoan Kiem Lake, Ngoc Son Temple (Jade Mountain Temple), But Tower (Pen Shaped Tower), Dai Nghien (Inkstone Stand) and The Huc Bridge (Wooden Bridge painted in red). Then, we will take a cyclo (pedicab) ride around “the 36 meandering streets” of Ha Nois historic Old Quarter to enjoy the bustling local life. The history of Ha Noi dated back for over one thousand years, and Ha Noi has different cultural characteristics compared to other areas in Vietnam. The lifestyle, cuisine, fashion… of Ha Noi folks bear special features and through this journey, we can perceive these. It is very interesting to discover Ha Noi in the morning, when the life has just started and we can enjoy the busy atmosphere. Hanoians are very friendly and hospitable. Hopefully, this is the most remarkable memory of your trip to Vietnam. Overnight in Ha Noi.`
            },
            {
                day: 5,
                title: "Ha Noi - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Hanoi International airport for your departure flight.`
            },
            
        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "7, 14, 21, 28 Mar 2025" },
            { date: "11, 18 Apr 2025" },
            { date: "2, 9, 16, 23, 30 May 2025" },
            { date: "6, 13, 20, 27 Jun 2025" },
        ]
    },
    vietnamCentral: {
        id: "5-days-central-of-vietnam",
        packageName: "5 DAYS CENTRAL OF VIETNAM",
        days: 5,
        nights: 4,
        amount: 32900,
        dateStart: "01 March 2025",
        dateEnd: "30 Jun 2025",
        description: "Discover the highlights of Vietnam's central with our 5-day tour covering Hoi An, Danang, Hue, and Ho Chi Minh City. From ancient temples to stunning landscapes, this tour offers a perfect blend of culture, adventure, and relaxation.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "5N4D Vietnam Fixed Departure",
            costBasis: "Double sharing basis"
        },
        hotelDetails: [
            {
                city: "Hoi An",
                hotel: "3 star SUNSHINE HOI AN HOTEL",
                roomType: "Superior Room"
            },
            {
                city: "Hoi An",
                hotel: "4 star EMM HOTEL HOI AN",
                roomType: "Superior Room"
            },
            {
                city: "Hoi An",
                hotel: "5 star ALMANITY HOI AN RESORT & SPA",
                roomType: "Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "3 star TITAN HOTEL ",
                roomType: "Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "4 star HADANA BOUTIQUE HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City"
            }
            
        ],
        tourSummary: [
            "Day 1: Da Nang - Arrival - Da Nang",
            "Day 2: Da Nang - Ba Na Hills and Golden Bridge - Hoi An (B/L)",
            "Day 3: Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L)",
            "Day 4: Hoi An - Free Day (B)",
            "Day 5: Ho An - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (4 breakfasts, 2 lunches)",
            "English speaking guides (other languages available upon request with surcharge)"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Da Nang - Arrival",
                description: `Pick-up at Da Nang International airport. Transfer to your hotel. Overnight in Da Nang.`
            },
            {
                day: 2,
                title: "Da Nang - Ba Na Hills and Golden Bridge - Hoi An (B/L/D)",
                description: `Ba Na is one of the most interesting areas in the region as often one can feel the four distinct seasons within a single day: morning - spring, noon - summer, afternoon - autumn and evening - winter. You will have a chance to visit Golden Bridge which is a 150-meter long pedestrian bridge with two giant stone hands supporting the structure. It is designed to connect the cable car station with the gardens and to provide a scenic overlook and tourist attraction. We can enjoy the view of the beautiful landscape of nature comfortably and smoothly. Past the Golden Bridge, and into the center of a charming (and very Epcot-like) French village, complete with French Gothic-style cathedral, French restaurants, cobblestoned streets and impressive French gardens. There are many more places in Ba Na Hills to explore including Linh Ung Ba Na Pagoda, Le Jardin Garden and a complex of ancient villas. Linh Ung Ba Na Pagoda with an exquisite architectural design was built in 2004 and is symbolized by a 30-meter high Buddha statue that is exposed amidst an immense space of clouds and mountains. We will continue our trip discovering Tinh Tam Garden, Nghinh Phong Peak and Vong Nguyet Hill where we can enjoy the panoramic views the areas have to offer. Overnight in Hoi An.`
            },
            {
                day: 3,
                title: "Hoi An - Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L)",
                description: `Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi An countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special “white rose” dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (“cracked or smashed rice pancake”), Che Bap (“corn and coconut sweet soup”).
                
                In the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges, My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An. 
                `
            },
            {
                day: 4,
                title: "Hoi An - Free Day (B)",
                description: `Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express. Overnight in Hoi An.`
            },
            {
                day: 5,
                title: "Hoi An - Da Nang Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Da Nang International airport for your departure flight.`
            },
            
        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "3, 10, 17, 24, 31 Mar 2025" },
            { date: "7, 14, 21 Apr 2025" },
            { date: "5, 12, 19, 26 May 2025" },
            { date: "2, 9, 16, 23, 30 Jun 2025" },
        ]
    },
    vietnamDiscovery: {
        id: "7-days-discovery-central-of-vietnam",
        packageName: "7 DAYS DISCOVERY CENTRAL OF VIETNAM",
        days: 7,
        nights: 6,
        amount: 69000,
        dateStart: "01 March 2025",
        dateEnd: "28 Jun 2025",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "7N6D Vietnam Fixed Departure",
            costBasis: "Double sharing basis"
        },
        hotelDetails: [
            {
                city: "Hue",
                hotel: "3 star SERENE PALACE HOTEL ",
                roomType: "Superior Room"
            },
            {
                city: "Hue",
                hotel: "4 star MONDIAL HUE ",
                roomType: "Deluxe City View Room"
            },
            {
                city: "Hue",
                hotel: "5 star ALBA WELLNESS RESORT BY FUSION",
                roomType: "Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "3 star TITAN HOTEL ",
                roomType: "Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "4 star HADANA BOUTIQUE HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City"
            },
            {
                city: "Quang Binh",
                hotel: "3 star AMANDA HOTEL ",
                roomType: "Room"
            },
            {
                city: "Quang Binh",
                hotel: "4 star MUONG THANH HOLIDAY HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Quang Binh",
                hotel: "5 star MUONG THANH LUXURY HOTEL",
                roomType: "Deluxe"
            },
            
        ],
        tourSummary: [
            "Day 1: Da Nang - Arrival",
            "Day 2: Da Nang - Quang Tri - Quang Binh (B/L/D) ",
            "Day 3: Quang Binh - Paradise Cave - Hue (B/L/D) ",
            "Day 4: Hue Heritage - Hoi An (B/L)",
            "Day 5: Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L)",
            "Day 6: Hoi An - Free Day (B)",
            "Day 7: Hoi An - Da Nang Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (6 breakfasts, 4 lunches, 2 dinners)",
            "English speaking guides (other languages available upon request with surcharge)"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Da Nang - Arrival",
                description: `Pick-up at Da Nang International airport. Transfer to your hotel. Overnight in Da Nang.`
            },
            {
                day: 2,
                title: "Da Nang - Quang Tri - Quang Binh (B/L/D)",
                description: `We will depart from Da Nang and head for Quang Tri Province. Along the way, we will stop at a number of different battle sites to see the Quang Tri Citadel, Ben Hai River, Hien Luong Bridge and Seventeenth Parallel - the former borderline between North and South Vietnam during the war. In the afternoon, we will visit the Vinh Moc Tunnels where North Vietnamese guerilla fighters lived and fought. We will continue on our way to Dong Hoi, check-in hotel and relax for the night. Overnight in Quang Binh.`
            },
            {
                day: 3,
                title: "Quang Binh - Paradise Cave - Hue (B/L/D) ",
                description: `The day will begin with breakfast before driving to Paradise Cave. The cave was discovered by scientists of the British Caving Research Association in 2005, has a length of 31 kilometers and is the longest dry cave in Asia. There is a series of white crystal stalactites resembling glass pillars and many other spectacular formations. After crossing an old forest, visitors see the entrance to the cave shaded by century-old trees and then get dazzled by the mysterious beauty of stalactite pillars, naturally formed over millions of years, giving the impression of an enchanted kingdom. Overnight in Hue.`
            },
            {
                day: 4,
                title: "Hue Heritage - Hoi An (B/L)",
                description: `We will visit the Citadel, Hues prime attraction, which contains the Imperial City, the Forbidden Purple City and the Emperor's Private Residence. Hue Citadel was built from 1804 to 1833 under the Nguyens Dynasty (the last feudalist kingdom in Vietnam). The grounds of the Imperial City are protected by 2-kilometer fortified ramparts and ringed by a moat. Inside the Citadel, there are many different constructions works such as: Imperial City Gates, Purple Forbidden City, Temples and places of worshiping, pavilions, gardens, etc. We will have a short break for lunch then take a boat trip on the Perfume River with a stopover at Thien Mu Pagoda, which is an active Buddhist monastery with its origins dating back to 1601. One of its most poignant displays is a car belonging to a former monk, who in 1963, drove to Sai Gon and set himself alight to protest against the South Vietnamese regime and its cruel treatment of Buddhist monks and followers. We finally visit the serene Khai Dinh Royal Tomb, designed to blend in with its natural surroundings and built on principles of feng-shui. Overnight in Hoi An.`
            },
            {
                day: 5,
                title: "Hoi An - Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L)",
                description: `Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi An countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special “white rose” dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (“cracked or smashed rice pancake”), Che Bap (“corn and coconut sweet soup”).
                
                In the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges, My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An. 
                `
            },
            {
                day: 6,
                title: "Hoi An - Free Day (B)",
                description: `Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express. Overnight in Hoi An.`
            },
            {
                day: 7,
                title: "Hoi An - Da Nang Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Da Nang International airport for your departure flight.`

            }
        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "1, 8, 15, 22, 29 Mar 2025" },
            { date: "12, 19 Apr 2025" },
            { date: "3, 10, 17, 24, 31 May 2025" },
            { date: "7, 14, 21, 28 Jun 2025" },
        ]
    },
    vietnamDiscoverySouth: {
        id: "7-days-discovery-south-of-vietnam",
        packageName: "7 DAYS SOUTH TO CENTRAL OF VIETNAM",
        days: 7,
        nights: 6,
        amount: 69500,
        dateStart: "01 March 2025",
        dateEnd: "28 Jun 2025",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "7N6D Vietnam Fixed Departure",
            costBasis: "Double sharing basis"
        },
        hotelDetails: [
            {
                city: "Ho Chi Minh City",
                hotel: "3 star SEN VIET HOTEL ",
                roomType: "Deluxe Room"
            },
            {
                city: "Ho Chi Minh City",
                hotel: "4 star HARMONY SAI GON HOTEL  ",
                roomType: "Deluxe Room"
            },
            {
                city: "Ho Chi Minh City",
                hotel: "5 star EASTIN GRAND HOTEL  ",
                roomType: "Superior Room"
            },
            {
                city: "Hoi An",
                hotel: "3 star SUNSHINE HOI AN HOTEL  ",
                roomType: "Superior Room"
            },
            {
                city: "Hoi An",
                hotel: "4 star EMM HOTEL HOI AN",
                roomType: "Superior Room"
            },
            {
                city: "Hoi An",
                hotel: "5 star ALMANITY HOI AN RESORT & SPA",
                roomType: "Loft Deluxe Room"
            }
            
        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival",
            "Day 2: Mekong Delta – My Tho & Ben Tre Coconut Village - Food Tour by Motorbike (B/L/D) ",
            "Day 3: Ho Chi Minh City - Da Nang - Hoi An - Free tailor-made item of clothing at Ann Tailor (B) ",
            "Day 4: Hoi An Foodie tour in the morning (B/L) ",
            "Day 5: Marble Mountains & Linh Ung Pagoda in the morning (B) ",
            "Day 6: Hoi An - Home Cooking Class - Ho Chi Minh City (B/L)",
            "Day 7: Ho Chi Minh City - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (6 breakfasts, 3 lunches, 1 dinner)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight ticket (Ho Chi Minh City - Da Nang, Da Nang - Ho Chi Minh City), 20 kg checked baggage, 7 kg hand baggage"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Ho Chi Minh City - Arrival",
                description: `Pick-up at Ho Chi Minh City International airport. Transfer to your hotel. Overnight in Ho Chi Minh City.`
            },
            {
                day: 2,
                title: "Mekong Delta – My Tho & Ben Tre Coconut Village - Food Tour by Motorbike (B/L/D)",
                description: `A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bee’s honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of Elephant-Ear Fish combined with other delicious Vietnamese dishes - a local specialty. Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive architectural and spiritual values, a place worth visiting should not be missed.

In the evening, step into the bustling streets of Vietnam when sitting on the back of our tour guide and drivers, you will have lifetime chance to feel a bit scaring but safe moving in the chaotic transportation in Vietnam to experience famous local street foods. We will go to an old park to taste "Banh Trang Tron" - Vietnamese Rice Paper Salad, "Bo Bia" - a Vietnamese Spring Rolls. Continue heading to another busy area for "Banh Xeo" - Crispy Vietnamese Pancake, "Trung Vit Lon" - Half-hatched Duck Eggs. Next, we will stop to try some of Sai Gons famous "Oc" - Steamed and Roasted Shell and Snail and local beer. 
Overnight in Ho Chi Minh City. Overnight in Ho Chi Minh City.
`
            },
            {
                day: 3,
                title: "Ho Chi Minh City - Da Nang - Hoi An - Free tailor-made item of clothing at Ann Tailor (B) by - 1 hour flight ",
                description: `After breakfast at the hotel, transfer to Tan Son Nhat airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor-made item of clothing. Overnight in Hoi An.`
            },
            {
                day: 4,
                title: "Hoi An Foodie tour in the morning (B/L)",
                description: `Discover Hoi Ans countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. Cao Lau is a traditional Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper. The noodles are made with local sticky rice soaked in the water that must be taken from Ba Le Well: the oldest well in Hoi An, believed to have the best water anywhere. We then bike through the countryside to a Tra Que Village. Vegetables from this village are distributed to most of the restaurants in town and specially make the Cao Lau to have a perfect taste. You will also learn how to make special “white rose” dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (“cracked or smashed rice pancake”), Che Bap (“corn and coconut sweet soup”). Overnight in Hoi An.`
            },
            {
                day: 5,
                title: "Marble Mountains & Linh Ung Pagoda in the morning (B)",
                description: `The Marble Mountains (Vietnamese: Ngu Hanh Son; literally "five elements mountains") is a popular sightseeing location in Da Nang because of its alluring beauty. Stone steps carved into the mountain lead to a Buddhist Pagoda. There are plenty of exercises going up with many steps for a beautiful view from the top of the mountain. We will then visit the stone village where the skilled local sculptors create many marble products. Then, you will go to Am Phu Cave where there is a replica of “Heaven and Hell”, eerie underground tunnels while listening to the clapping of bats' wings in the cave. Before getting back to the hotel, we head to Son Tra Linh Ung Pagoda. Built under the reign of King Minh Mang in the Nguyen Dynasty (the 19th century), legend has it a Buddhist statue drifted downstream to the area and got anchored at a sandy embankment. The local villagers thought it was a good sign, so they built up a small pagoda to worship the statue. From that day, they said, the whole coastal region has been granted with good weather, no big storms or rough sea waves, while local fishermen harvesting good fishing. Have free time in the afternoon. Overnight in Hoi An.
                `
            },
            {
                day: 6,
                title: "Hoi An - Home Cooking Class - Ho Chi Minh City (B/L) - by flight - 1 hour",
                description: `Are you excited to learn how to cook Vietnamese food? Then join our unique, hands-on cooking class with locals. Start at a coffee shop in the Market and study some Vietnamese for your own shopping at Hoi An Central Market. Visit Hoi Ans colorful market and experience the amazing sights, sounds and aromas all over the area. You will also have the opportunity to interact with the merchants to purchase the ingredients that you are going to use in the cooking lesson. Choosing ingredients for your cuisines is very important, if your ingredients are fresh and green enough, your cuisines will be delicious and fragrant otherwise, they will be not good at all. Vietnamese food is various with different flavours and ingredients. 
Take a boat ride from Market to the local house, refresh yourselves with a very nice ancient town scene. The local enthusiastically demonstrate how to prepare each dish before guiding you in the preparation of your own dish. After the lesson, you will enjoy the meal you have prepared. Hopefully, through this trip you can understand and know more about Vietnamese cuisine in general and Hoi An cuisine in particular. You will receive an e-recipe after the class to practise at home.

In the afternoon, transfer to Da Nang airport to go to Ho Chi Minh City. Upon arrival at Tan Son Nhat airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ho Chi Minh City.
`
            },
            {
                day: 7,
                title: "Ho Chi Minh City - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Ho Chi Minh City International airport for your departure flight.`

            }
        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "1, 8, 15, 22, 29 Mar 2025" },
            { date: "12, 19 Apr 2025" },
            { date: "3, 10, 17, 24, 31 May 2025" },
            { date: "7, 14, 21, 28 Jun 2025" },
        ]
    },
    vietnamDiscoveryNorth: {
        id: "8-days-discovery-north-to-central-of-vietnam",
        packageName: "8 DAYS NORTH TO CENTRAL OF VIETNAM",
        days: 8,
        nights: 7,
        amount: 65500,
        dateStart: "01 March 2025",
        dateEnd: "27 Jun 2025",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "8N7D Vietnam Fixed Departure",
            costBasis: "Double sharing basis"
        },
        hotelDetails: [
            {
                city: "Hoi An",
                hotel: "3 star SUNSHINE HOI AN HOTEL ",
                roomType: "Superior Room"
            },
            {
                city: "Hoi An",
                hotel: "4 star EMM HOTEL HOI AN  ",
                roomType: "Superior Room"
            },
            {
                city: "Hoi An",
                hotel: "5 star ALMANITY HOI AN RESORT & SPA",
                roomType: "Loft Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "3 star TITAN Hotel ",
                roomType: "Deluxe Room"
            },
            {
                city: "Da Nang",
                hotel: "4 star HADANA BOUTIQUE HOTEL",
                roomType: "Superior Room"
            },
            {
                city: "Da Nang",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City View Room"
            },
            {
                city: "Hanoi",
                hotel: "3 star ANISE HOTEL & SPA",
                roomType: "Run of House Room"
            },
            {
                city: "Hanoi",
                hotel: "4 star FLOWER GARDEN HOTEL",
                roomType: "Deluxe Room"   
            },
            {
                city: "Hanoi",
                hotel: "5 star GRAND VISTA HA NOI HOTEL",
                roomType: "Deluxe Room"
            }
        ],
        tourSummary: [
            "Day 1: Ha Noi - Arrival",
            "Day 2: Ha Noi - Ha Long Bay (B/L/D) ",
            "Day 3: Ha Long Bay - Ha Noi (B/L)  ",
            "Day 4: Ha Noi - Da Nang (B) - by flight - 1 hour ",
            "Day 5: Da Nang - Ba Na Hills and Golden Bridge - Hoi An (B/L)",
            "Day 6: Free tailor made item of clothing at Ann Tailor - Foodie Tour in the morning (B/L)",
            "Day 7: Hoi An - Free day (B)",
            "Day 8: Hoi An - Da Nang - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (7 breakfasts, 4 lunches, 1 dinner)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight ticket (Ha Noi - Da Nang), 20 kg checked baggage, 7 kg hand baggage"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Ha Noi - Arrival",
                description: `Pick-up at Ha Noi International airport. Transfer to your hotel. Overnight in Ha Noi.`
            },
            {
                day: 2,
                title: "Ha Noi - Ha Long Bay (B/L/D)",
                description: `The wondrous Ha Long Bay is truly one of Vietnams most impressive sights. Heading out of town, we will embark by boat for an exploration of legendary Ha Long Bay. Ha Long Bay is home to some 3000 limestone islands that rise out of the clear emerald water. The limestone karsts formations are littered with beaches, grottoes and beautiful caves. Along the way, we will anchor for a leisurely swim in a secluded cove and enjoy a visit to one of the many hidden grottoes beneath towering cliffs. Overnight on the cruise. 
`
            },
            {
                day: 3,
                title: "Ha Long Bay - Ha Noi (B/L)  ",
                description: `After breakfast, swimming and sunbathing. After lunch, return to Ha Noi. Overnight in Ha Noi.`
            },
            {
                day: 4,
                title: "Ha Noi - Da Nang (B) - by flight - 1 hour ",
                description: `After breakfast at the hotel, transfer to Noi Bai airport to go to Da Nang. Upon arrival at Da Nang airport, pick up and transfer to your Hotel. Overnight in Da Nang.`
            },
            {
                day: 5,
                title: "Da Nang - Ba Na Hills and Golden Bridge (B/L)",
                description: `Ba Na is one of the most interesting areas in the region as often one can feel the four distinct seasons within a single day: morning - spring, noon - summer, afternoon - autumn and evening - winter. You will have a chance to visit Golden Bridge which is a 150-meter long pedestrian bridge with two giant stone hands supporting the structure. It is designed to connect the cable car station with the gardens and to provide a scenic overlook and tourist attraction. We can enjoy the view of the beautiful landscape of nature comfortably and smoothly. Past the Golden Bridge, and into the center of a charming (and very Epcot-like) French village, complete with French Gothic-style cathedral, French restaurants, cobblestoned streets and impressive French gardens. There are many more places in Ba Na Hills to explore including Linh Ung Ba Na Pagoda, Le Jardin Garden and a complex of ancient villas. Linh Ung Ba Na Pagoda with an exquisite architectural design was built in 2004 and is symbolized by a 30-meter high Buddha statue that is exposed amidst an immense space of clouds and mountains. We will continue our trip discovering Tinh Tam Garden, Nghinh Phong Peak and Vong Nguyet Hill where we can enjoy the panoramic views the areas have to offer. Overnight in Hoi An.
                `
            },
            {
                day: 6,
                title: "Hoi An - Free tailor made item of clothing at Ann Tailor - Foodie Tour in the morning (B/L)",
                description: `Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi Ans countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. Cao Lau is a traditional Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper. The noodles are made with local sticky rice soaked in the water that must be taken from Ba Le Well: the oldest well in Hoi An, believed to have the best water anywhere. We then bike through the countryside to a Tra Que Village. Vegetables from this village are distributed to most of the restaurants in town and specially make the Cao Lau to have a perfect taste. You will also learn how to make special “white rose” dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (“cracked or smashed rice pancake”), Che Bap (“corn and coconut sweet soup”). Have free time in the afternoon. 
`
            },
            {
                day: 7,
                title: "Hoi An - Free day (B)",
                description: `Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express. Overnight in Hoi An.`

            },
            {
                day: 8,
                title: "Hoi An - Da Nang - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Da Nang airport for your departure flight.`
            }
        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "7, 14, 21, 28 Mar 2025" },
            { date: "4, 11, 18, 25 Apr 2025" },
            { date: "2, 9, 16, 23, 30 May 2025" },
            { date: "6, 13, 20, 27 Jun 2025" },
        ]
    },
    vietnamDiscoverySouthToNorth: {
        id: "10-days-in-vietnam-from-south-to-north",
        packageName: "10 DAYS IN VIETNAM FROM SOUTH TO NORTH",
        days: 10,
        nights: 9,
        amount: 105000,
        dateStart: "01 March 2025",
        dateEnd: "27 Jun 2025",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "10N9D Vietnam Fixed Departure",
            costBasis: "Double sharing basis"
        },
        hotelDetails: [
            {
                city: "Ho Chi Minh City",
                hotel: "3 star SEN VIET HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Ho Chi Minh City",
                hotel: "4 star HARMONY SAI GON HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Ho Chi Minh City",
                hotel: "5 star EASTIN GRAND HOTEL",
                roomType: "Superior"
            },
            {
                city: "Hoi An",
                hotel: "3 star SUNSHINE HOI AN HOTEL",
                roomType: "Superior"
            },
            {
                city: "Hoi An",
                hotel: "4 star EMM HOTEL HOI AN",
                roomType: "Superior"
            },
            {
                city: "Hoi An",
                hotel: "5 star ALMANITY HOI AN RESORT & SPA",
                roomType: "Loft Deluxe"
            },
            {
                city: "Da Nang",
                hotel: "3 star TITAN HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Da Nang",
                hotel: "4 star HADANA BOUTIQUE HOTEL",
                roomType: "Superior"
            },
            {
                city: "Ha Noi",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City View Room"
            },
            {
                city: "Ha Noi",
                hotel: "3 star ANISE HOTEL & SPA",
                roomType: "Run of House Room"
            },
            {
                city: "Ha Noi",
                hotel: "4 star FLOWER GARDEN HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Ha Noi",
                hotel: "5 star GRAND VISTA HA NOI HOTEL",
                roomType: "Deluxe Room"
            }

        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival",
            "Day 2: Mekong Delta – My Tho & Ben Tre Coconut Village (B/L)",
            "Day 3: Ho Chi Minh City - Cu Chi Tunnels - Da Nang (B/-/-) - by flight - 1 hour ",
            "Day 4: Hoi An City Tour in Morning (B)",
            "Day 5: Hoi An Foodie tour - My Son Sanctuary (B/L",
            "Day 6: Hoi An - Free day - Da Nang (B)",
            "Day 7: Da Nang - Ha Noi City Tour (B/L) - by flight - 1 hour",
            "Day 8: Ha Noi - Ha Long Bay (B/L/D) ",
            "Day 9: Ha Long Bay - Ha Noi (B/L)  ",
            "Day 10: Ha Noi - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (9 breakfasts, 5 lunches, 1 dinner)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight ticket (Ho Chi Minh City - Da Nang, Da Nang - Hoi An), 20 kg checked baggage, 7 kg hand baggage"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above"
        ],
        itinerary: [
            {
                day: 1,
                title: "Ho Chi Minh City - Arrival",
                description: `Pick-up at Ho Chi Minh City International airport. Transfer to your hotel. Overnight in Ho Chi Minh City.`
            },
            {
                day: 2,
                title: "Mekong Delta – My Tho & Ben Tre Coconut Village (B/L)",
                description: `A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bees honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of Elephant-Ear Fish combined with other delicious Vietnamese dishes - a local specialty. Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive architectural and spiritual values, a place worth visiting should not be missed. Overnight in Ho Chi Minh City.
`
            },
            {
                day: 3,
                title: "Ho Chi Minh City - Cu Chi Tunnels (B/-/-) - by flight - 1 hour ",
                description: `Check out for a half-day tour to Cu Chi Tunnels before flying to Da Nang. Cu Chi Tunnels, a network of tunnels stretching over 250 kilometers, have proven to be one of the most famous and historical aspects of the Vietnam War. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence. Digging and building of tunnels continued over the next 25 years until it was an underground city with living areas, kitchens, storages, weapons factories, field hospitals and command centers. The tunnels could house thousands of people who lived almost entirely underground for years. There, people led relatively normal lives, which included getting married and raising children. During the American War, the entire area of Cu Chi was designated as a free fire zone; and was therefore, heavily attacked and bombed. In 1988, two sections of tunnels were opened up for visitors. Now you have the chance to enjoy this wonderful and informative experience. Created with “moving parts” these structures were designed to be livable for long periods of time. And for those who are interested, there is an opportunity for you to fire off rounds from a war era M16 or AK47 at the nearby firing range. (This activity is optional; fees for firing range are not included). After the trip, transfer to Tan Son Nhat airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor made item of clothing. Overnight in Hoi An.`
            },
            {
                day: 4,
                title: "Hoi An City Tour in Morning (B)",
                description: `Exploring Hoi An Ancient Town on foot is one of the best ways to take in the citys charm. While exploring this small yet beautiful town, tourists and frequent visitors find that it is a place of tranquility and peace. The unique atmosphere here combines elements of Vietnamese, Chinese and Japanese culture. Some of the most remarkable views of the town are from the Ancient Houses. From here, visitors can catch a glimpse of a long-gone past and more subdued and simple time. The tour includes visits to Hoi An Market, Hoi An Museum, many of the towns renowned Ancient Houses which boast a remarkable architectural style, Assembly Halls of Chinese influence, Art Craft Manufacturing and of course the must-see Japanese Covered Bridge. These spots are considered as typical architecture styles in Hoi An and reflect clearly the cross culture among France, Japan, China and Vietnam. Passing over hundreds of years and withstanding the severity of the weather, Hoi An still exists and keeps the ancient and quiet beauty. Once strolling around the ancient city, you will contemplate the simple and rustic life activities, the trellises of windflowers covering around the houses. It is certain that this tour will bring great moments for you. Have free time in the afternoon. Overnight in Hoi An`
            },
            {
                day: 5,
                title: "Hoi An Foodie tour - My Son Sanctuary (B/L)",
                description: `Discover Hoi Ans countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special “white rose” dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (“cracked or smashed rice pancake”), Che Bap (“corn and coconut sweet soup”). 

In the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An. 

                `
            },
            {
                day: 6,
                title: "Hoi An - Free day - Da Nang (B)",
                description: `Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express until transfer Da Nang. Overnight in Da Nang.
`
            },
            {
                day: 7,
                title: "Da Nang - Ha Noi City Tour (B/L) - by flight - 1 hour",
                description: `After breakfast at the hotel, transfer to Da Nang airport to go to Ha Noi. Upon arrival at Noi Bai airport, pick up and transfer to the hotel. Check in and go for lunch before a City tour. With ochre-colored colonial buildings, tree-lined boulevards and scenic lakes, Ha Noi is full of charms. Visit some of Ha Nois heritage sites such as Van Mieu - Quoc Tu Giam (Temple of Literature), the first Imperial school in Vietnam, built in 1070 during the dynasty of King Ly. We will also visit Hoan Kiem Lake, Ngoc Son Temple (Jade Mountain Temple), But Tower (Pen Shaped Tower), Dai Nghien (Inkstone Stand) and The Huc Bridge (Wooden Bridge painted in red). Then, we will take a cyclo (pedicab) ride around “the 36 meandering streets” of Ha Nois historic Old Quarter to enjoy the bustling local life. The history of Ha Noi dated back over one thousand years, and Ha Noi has different cultural characteristics compared to other areas in Vietnam. The lifestyle, cuisine, fashion… of Ha Noi folks bear special features and through this journey, we can perceive these. It is very interesting to discover Ha Noi in the morning, when the life has just started and we can enjoy the busy atmosphere. Hanoians are very friendly and hospitable. Hopefully, this is the most remarkable memory of your trip to Vietnam. Overnight in Ha Noi.`

            },
            {
                day: 8,
                title: "Ha Noi - Ha Long Bay (B/L/D) ",
                description: `The wondrous Ha Long Bay is truly one of Vietnams most impressive sights. Heading out of town, we will embark by boat for an exploration of legendary Ha Long Bay. Ha Long Bay is home to some 3000 limestone islands that rise out of the clear emerald water. The limestone karsts formations are littered with beaches, grottoes and beautiful caves. Along the way, we will anchor for a leisurely swim in a secluded cove and enjoy a visit to one of the many hidden grottoes beneath towering cliffs. Overnight on the cruise.`
            },
            {
                day: 9,
                title: "Ha Long Bay - Ha Noi (B/L)  ",
                description: `After breakfast, swimming and sunbathing. After lunch, return to Ha Noi. Overnight in Ha Noi.`
            },
            {
                day: 10,
                title: "Ha Noi - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Noi Bai airport for your departure flight.`
            }

        ],
        images: [
            "/UGCImages/vietnam/HORIZONTAL/1.png",
            "/UGCImages/vietnam/HORIZONTAL/2.png",
            "/UGCImages/vietnam/HORIZONTAL/3.png",
            "/UGCImages/vietnam/HORIZONTAL/4.png",
            "/UGCImages/vietnam/HORIZONTAL/5.png",
            "/UGCImages/vietnam/HORIZONTAL/6.png",
            
        ],
        sightseeingSpots: [
            {
                name: "Tanah Lot Temple",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/Tanah Lot Temple.jpg"
            },
            {
                name: "Tegalalang Rice Terraces",
                description: "Spectacular terraced rice fields showcasing traditional vietnamnese irrigation system (subak)",
                image: "/UGCImages/vietnam/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/monkeyForest.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/mountBatur.jpg"
            },
            {
                name: "Uluwatu Temple",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/Uluwatu.jpg"
            }
        ],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/vietnam/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/vietnam/culture/vietnamTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to iconic Tanah Lot Temple",
                "Traditional Kecak Fire Dance show",
                "Nusa Penida Island exploration",
                "Water sports activities package",
                "Scenic Tegalalang Rice Terraces"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                "Indonesian street food"
            ],
            accommodation: {
                type: "4-Star Premium Hotels",
                amenities: [
                    "Swimming pool",
                    "Spa facilities",
                    "Restaurant & bar",
                    "Free Wi-Fi",
                    "Room service"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival",
                duration: "30 days",
                cost: "USD 35",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Sufficient funds proof"
                ]
            }
        },
        departureDates: [
            { date: "1, 8, 15, 22, 29 Mar 2025" },
            { date: "5, 12, 19, 26 Apr 2025" },
            { date: "3, 10, 17, 24, 31 May 2025" },
            { date: "7, 14, 21, 28 Jun 2025" },
        ]
    },
}; 