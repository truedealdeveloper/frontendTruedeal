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
            { date: "3, 10, 17, 24, 31 Mar 2025" },
            { date: "7, 14, 21 Apr 2025" },
            { date: "5, 12, 19, 26 May 2025" },
            { date: "2, 9, 16, 23, 30 Jun 2025" },
        ]
    },
}; 