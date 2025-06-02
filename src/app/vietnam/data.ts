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
        dateStart: "1,8,15,22,29 June",
        dateEnd: "5,12,19,26,30 July",
        description: "Explore the highlights of Vietnam's south with our 4-day tour covering Ho Chi Minh City, Mekong Delta, and Cu Chi Tunnels. From bustling markets to historical sites, this tour offers a perfect blend of culture, adventure, and relaxation.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in June 2025",
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
                name: "Cu Chi Tunnels",
                description: "Historic underground network used during the Vietnam War, featuring trap doors, living areas, and command centers",
                image: "/UGCImages/vietnam/extra/CuChiTunnels.jpg"
            },
            {
                name: "Mekong Delta",
                description: "Vast network of rivers and islands known as Vietnam's 'rice bowl', offering boat tours and floating markets",
                image: "/UGCImages/vietnam/extra/MekongDelta.jpg"
            },
            {
                name: "Reunification Palace",
                description: "Historic landmark that served as South Vietnam's presidential residence during the Vietnam War",
                image: "/UGCImages/vietnam/extra/ReunificationPalace.jpg"
            },
            {
                name: "War Remnants Museum",
                description: "Powerful museum documenting the Vietnam War with exhibits of military equipment and photography",
                image: "/UGCImages/vietnam/extra/WarRemnants.jpg"
            },
            {
                name: "Notre Dame Cathedral",
                description: "French colonial-era cathedral in the heart of Ho Chi Minh City with distinctive red brick facade",
                image: "/UGCImages/vietnam/extra/NotreDame.jpg"
            }
        ],
        localFood: [
            {
                name: "Pho",
                description: "Vietnam's iconic rice noodle soup with beef or chicken, fresh herbs, and aromatic broth",
                image: "/UGCImages/vietnam/cuisine/Pho.jpg",
                where: "Pho Hoa, Ho Chi Minh City"
            },
            {
                name: "Banh Mi",
                description: "Crispy Vietnamese baguette sandwich filled with meats, pâté, vegetables and herbs",
                image: "/UGCImages/vietnam/cuisine/BanhMi.jpg",
                where: "Banh Mi Huynh Hoa, Ho Chi Minh City"
            },
            {
                name: "Com Tam",
                description: "Broken rice dish served with grilled pork, egg, and fish sauce, a southern Vietnamese specialty",
                image: "/UGCImages/vietnam/cuisine/ComTam.jpg",
                where: "Com Tam Bui Saigon, Ho Chi Minh City"
            },
            {
                name: "Hu Tieu",
                description: "Southern Vietnamese noodle soup with pork, seafood and fresh herbs in a clear broth",
                image: "/UGCImages/vietnam/cuisine/HuTieu.jpg",
                where: "Hu Tieu Nam Vang Nhan, Ho Chi Minh City"
            },
        ],
        culture: [
            {
                title: "Water Puppet Theatre",
                description: "Traditional Vietnamese art form where puppets perform on water, telling folk tales and legends",
                image: "/UGCImages/vietnam/culture/WaterPuppet.jpg"
            },
            {
                title: "Ao Dai",
                description: "Vietnam's elegant national costume featuring a long tunic worn over pants, seen during special occasions",
                image: "/UGCImages/vietnam/culture/AoDai.jpg"
            },
            {
                title: "Vietnamese Coffee Culture",
                description: "Unique coffee preparation with condensed milk, enjoyed at street-side cafes throughout the country",
                image: "/UGCImages/vietnam/culture/VietCoffee.jpg"
            },
            {
                title: "Tet Festival",
                description: "Vietnamese Lunar New Year celebration with family gatherings, special foods, and colorful decorations",
                image: "/UGCImages/vietnam/culture/Tet.jpg"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, street food, and everyday goods, central to Vietnamese daily life",
                image: "/UGCImages/vietnam/culture/VietMarket.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Visit to the Cu Chi Tunnels",
                "Mekong Delta Cruise",
                "Ben Tre Coconut Village",
                "Ho Chi Minh City Tour",
            ],
            bestTimeToVisit: "May to October (Dry Season)",
            cuisine: [
                "Traditional vietnamnese dishes",
                "Fresh seafood specialties",
                "Local fruit varieties",
                
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
        dateStart: "1,8,15,22,29 June",
        dateEnd: "5,12,19,26,30 July",
        description: "Experience the Phu Quoc Island with our 4-day tour covering Phu Quoc Island. From pristine beaches to cultural landmarks, this tour offers a perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in June 2025",
            duration: "4D3N vietnam Fixed Departure",
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
            "/UGCImages/vietnam/vietnam/hoi an/1.webp",
            "/UGCImages/vietnam/vietnam/hoi an/2.webp",
            "/UGCImages/vietnam/vietnam/hoi an/3.webp",
            "/UGCImages/vietnam/vietnam/hoi an/4.webp",
            "/UGCImages/vietnam/vietnam/hoi an/5.webp",
            
            
        ],
        sightseeingSpots: [
            {
                name: "Phu Quoc National Park",
                description: "Vast protected rainforest covering more than half the island, home to diverse wildlife and hiking trails",
                image: "/UGCImages/vietnam/extra/PhuQuocNationalPark.jpg"
            },
            {
                name: "Sao Beach",
                description: "Pristine white sand beach with crystal clear waters, often considered one of Vietnam's most beautiful beaches",
                image: "/UGCImages/vietnam/extra/SaoBeach.jpg"
            },
            {
                name: "Dinh Cau Rock",
                description: "Unique temple built on oddly-shaped natural rock formation, dedicated to the sea goddess",
                image: "/UGCImages/vietnam/extra/DinhCau.jpg"
            },
            {
                name: "Vinpearl Land",
                description: "Modern amusement park with water slides, aquarium, and entertainment shows on Phu Quoc Island",
                image: "/UGCImages/vietnam/extra/VinpearlLand.jpg"
            },
            {
                name: "Ham Ninh Fishing Village",
                description: "Traditional coastal village known for fresh seafood and views of Cambodia across the Gulf of Thailand",
                image: "/UGCImages/vietnam/extra/HamNinh.jpg"
            }
        ],
        localFood: [
            {
                name: "Phu Quoc Fish Sauce",
                description: "World-renowned fish sauce produced on the island, known for its superior quality and distinct flavor",
                image: "/UGCImages/vietnam/cuisine/FishSauce.jpg",
                where: "Fish Sauce Factories, Duong Dong"
            },
            {
                name: "Herring Salad",
                description: "Fresh herring fish mixed with coconut, vegetables and spices, a Phu Quoc specialty",
                image: "/UGCImages/vietnam/cuisine/HerringSalad.jpg",
                where: "Night Market, Duong Dong"
            },
            {
                name: "Sea Urchin Soup",
                description: "Delicate soup made with fresh sea urchins, a local delicacy in Phu Quoc",
                image: "/UGCImages/vietnam/cuisine/SeaUrchinSoup.jpg",
                where: "Ham Ninh Fishing Village"
            },
            {
                name: "Grilled Squid",
                description: "Fresh squid grilled with chili and lime, popular street food on the island",
                image: "/UGCImages/vietnam/cuisine/GrilledSquid.jpg",
                where: "Dinh Cau Night Market"
            },
        ],
        culture: [
            {
                title: "Pearl Farming",
                description: "Traditional pearl cultivation practiced on Phu Quoc, with farms open for visitors to learn about the process",
                image: "/UGCImages/vietnam/culture/PearlFarm.jpg"
            },
            {
                title: "Sim Wine Production",
                description: "Local production of unique wine made from sim berries that grow wild on the island",
                image: "/UGCImages/vietnam/culture/SimWine.jpg"
            },
            {
                title: "Pepper Plantations",
                description: "Cultivation of Phu Quoc's famous black pepper, known for its strong aroma and flavor",
                image: "/UGCImages/vietnam/culture/PepperFarm.jpg"
            },
            {
                title: "Fishing Traditions",
                description: "Traditional fishing methods still practiced by local fishermen, central to the island's economy and culture",
                image: "/UGCImages/vietnam/culture/FishingBoats.jpg"
            },
            {
                title: "Island Lifestyle",
                description: "Relaxed pace of life on Vietnam's largest island, blending traditional ways with modern tourism",
                image: "/UGCImages/vietnam/culture/IslandLife.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "East Island Discovery Tour",
                "Vinpearl Land Amusement Park",
                "Ham Ninh Fishing Village",
                "Phu Quoc Pepper Farm Visit",
            ],
            bestTimeToVisit: "May to October (Dry Season)",
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
        dateStart: "1,8,15,22,29 June",
        dateEnd: "5,12,19,26,30 July",
        description: "Discover the highlights of Vietnam's north with our 5-day tour covering Hanoi, Halong Bay. From ancient temples to stunning landscapes, this tour offers a perfect blend of culture, adventure, and relaxation.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in June 2025",
            duration: "5D4N vietnam Fixed Departure",
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
                description: `Free time at your leisure in the morning. In the afternoon, visit some of Ha Noi heritage sites such as Van Mieu - Quoc Tu Giam (Temple of Literature), the first Imperial school in Vietnam, built in 1070 during the dynasty of King Ly. We will also visit Hoan Kiem Lake, Ngoc Son Temple (Jade Mountain Temple), But Tower (Pen Shaped Tower), Dai Nghien (Inkstone Stand) and The Huc Bridge (Wooden Bridge painted in red). Then, we will take a cyclo (pedicab) ride around "the 36 meandering streets" of Ha Nois historic Old Quarter to enjoy the bustling local life. The history of Ha Noi dated back for over one thousand years, and Ha Noi has different cultural characteristics compared to other areas in Vietnam. The lifestyle, cuisine, fashion… of Ha Noi folks bear special features and through this journey, we can perceive these. It is very interesting to discover Ha Noi in the morning, when the life has just started and we can enjoy the busy atmosphere. Hanoians are very friendly and hospitable. Hopefully, this is the most remarkable memory of your trip to Vietnam. Overnight in Ha Noi.`
            },
            {
                day: 5,
                title: "Ha Noi - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Hanoi International airport for your departure flight.`
            },
            
        ],
        images: [
            "/UGCImages/vietnam/vietnam/hoi an/2.webp",
            "/UGCImages/vietnam/vietnam/hoi an/3.webp",
            "/UGCImages/vietnam/vietnam/hoi an/4.webp",
            "/UGCImages/vietnam/vietnam/hoi an/5.webp",

            
        ],
        sightseeingSpots: [
            {
                name: "Halong Bay",
                description: "UNESCO World Heritage site featuring thousands of limestone karsts and isles in various shapes and sizes",
                image: "/UGCImages/vietnam/extra/HalongBay.jpg"
            },
            {
                name: "Hoan Kiem Lake",
                description: "Scenic lake in the heart of Hanoi with the iconic red Huc Bridge and Ngoc Son Temple",
                image: "/UGCImages/vietnam/extra/HoanKiemLake.jpg"
            },
            {
                name: "Temple of Literature",
                description: "Vietnam's first national university built in 1070, dedicated to Confucius and scholars",
                image: "/UGCImages/vietnam/extra/TempleOfLiterature.jpg"
            },
            {
                name: "Hanoi Old Quarter",
                description: "Historic heart of Hanoi with narrow streets named after the goods once sold there",
                image: "/UGCImages/vietnam/extra/HanoiOldQuarter.jpg"
            },
            {
                name: "Thang Long Imperial Citadel",
                description: "UNESCO World Heritage site that served as Vietnam's political center for 13 centuries",
                image: "/UGCImages/vietnam/extra/ThangLongCitadel.jpg"
            }
        ],
        localFood: [
            {
                name: "Bun Cha",
                description: "Hanoi specialty of grilled pork served with rice noodles, herbs and dipping sauce",
                image: "/UGCImages/vietnam/cuisine/BunCha.jpg",
                where: "Bun Cha Huong Lien, Hanoi"
            },
            {
                name: "Cha Ca",
                description: "Turmeric-marinated fish cooked tableside with dill and green onions, a Hanoi delicacy",
                image: "/UGCImages/vietnam/cuisine/ChaCa.jpg",
                where: "Cha Ca Thang Long, Hanoi"
            },
            {
                name: "Pho Hanoi",
                description: "Northern-style beef noodle soup with a clearer broth and fewer garnishes than southern versions",
                image: "/UGCImages/vietnam/cuisine/PhoHanoi.jpg",
                where: "Pho Gia Truyen, Hanoi"
            },
            {
                name: "Egg Coffee",
                description: "Hanoi specialty coffee topped with a creamy, custard-like mixture of egg yolks and condensed milk",
                image: "/UGCImages/vietnam/cuisine/EggCoffee.jpg",
                where: "Cafe Giang, Hanoi"
            },
        ],
        culture: [
            {
                title: "Water Puppet Theatre",
                description: "Traditional northern Vietnamese art form where puppets perform on water, telling folk tales and legends",
                image: "/UGCImages/vietnam/culture/WaterPuppet.jpg"
            },
            {
                title: "Hanoi's 36 Old Streets",
                description: "Historic guild streets where each was named after the specific goods once traded there",
                image: "/UGCImages/vietnam/culture/36Streets.jpg"
            },
            {
                title: "Traditional Hat Making",
                description: "Craft of making non la (conical hats) from palm leaves, an iconic symbol of Vietnam",
                image: "/UGCImages/vietnam/culture/ConicalHats.jpg"
            },
            {
                title: "Ca Tru Singing",
                description: "Ancient form of chamber music featuring female vocalists, recognized by UNESCO as cultural heritage",
                image: "/UGCImages/vietnam/culture/CaTru.jpg"
            },
            {
                title: "Dong Ho Folk Paintings",
                description: "Traditional woodblock prints made in Dong Ho village, featuring symbolic imagery and natural colors",
                image: "/UGCImages/vietnam/culture/DongHoPainting.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Overnight Halong Bay Cruise",
                "Hanoi Old Quarter Exploration",
                "Temple of Literature Visit",
                "Traditional Water Puppet Show",
            ],
            bestTimeToVisit: "May to October (Dry Season)",
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
        dateStart: "1,8,15,22,29 June",
        dateEnd: "5,12,19,26,30 July",
        description: "Discover the highlights of Vietnam's central with our 5-day tour covering Hoi An, Danang, Hue, and Ho Chi Minh City. From ancient temples to stunning landscapes, this tour offers a perfect blend of culture, adventure, and relaxation.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in June 2025",
            duration: "5D4N Vietnam Fixed Departure",
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
                description: `Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi An countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup").
                
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
            
            "/UGCImages/vietnam/vietnam/hoi an/6.webp",
            "/UGCImages/vietnam/vietnam/hoi an/7.webp",
            "/UGCImages/vietnam/vietnam/hoi an/8.webp",
            "/UGCImages/vietnam/vietnam/hoi an/9.webp",
            
        ],
        sightseeingSpots: [
            {
                name: "Hoi An Ancient Town",
                description: "UNESCO World Heritage site with well-preserved trading port architecture from the 15th to 19th centuries",
                image: "/UGCImages/vietnam/extra/HoiAnTown.jpg"
            },
            {
                name: "My Son Sanctuary",
                description: "UNESCO-protected ruins of ancient Hindu temples built by the Champa civilization between the 4th and 14th centuries",
                image: "/UGCImages/vietnam/extra/MySon.jpg"
            },
            {
                name: "Golden Bridge",
                description: "Iconic pedestrian bridge held by giant stone hands, offering spectacular views of Ba Na Hills",
                image: "/UGCImages/vietnam/extra/GoldenBridge.jpg"
            },
            {
                name: "Marble Mountains",
                description: "Five limestone and marble hills with caves, tunnels, Buddhist sanctuaries and panoramic views",
                image: "/UGCImages/vietnam/extra/MarbleMountains.jpg"
            },
            {
                name: "Dragon Bridge",
                description: "Modern bridge across the Han River in Da Nang that breathes fire and water on weekend evenings",
                image: "/UGCImages/vietnam/extra/DragonBridge.jpg"
            }
        ],
        localFood: [
            {
                name: "Cao Lau",
                description: "Hoi An specialty with thick rice noodles, pork, and local greens in a light broth",
                image: "/UGCImages/vietnam/cuisine/CaoLau.jpg",
                where: "Market stalls in Hoi An Ancient Town"
            },
            {
                name: "Mi Quang",
                description: "Central Vietnamese turmeric-infused rice noodles with pork, shrimp, and herbs in minimal broth",
                image: "/UGCImages/vietnam/cuisine/MiQuang.jpg",
                where: "Ba Vi, Da Nang"
            },
            {
                name: "Banh Xeo",
                description: "Crispy savory pancakes filled with pork, shrimp, and bean sprouts, wrapped in rice paper with herbs",
                image: "/UGCImages/vietnam/cuisine/BanhXeo.jpg",
                where: "Banh Xeo Ba Duong, Hoi An"
            },
            {
                name: "White Rose Dumplings",
                description: "Hoi An specialty of translucent shrimp dumplings shaped like flowers",
                image: "/UGCImages/vietnam/cuisine/WhiteRose.jpg",
                where: "White Rose Restaurant, Hoi An"
            }
        ],
        culture: [
            {
                title: "Lantern Festival",
                description: "Monthly celebration in Hoi An where the streets are illuminated with colorful lanterns",
                image: "/UGCImages/vietnam/culture/LanternFestival.jpg"
            },
            {
                title: "Traditional Tailoring",
                description: "Centuries-old tradition of custom clothing making in Hoi An, where visitors can have garments made to measure",
                image: "/UGCImages/vietnam/culture/Tailoring.jpg"
            },
            {
                title: "Champa Architecture",
                description: "Ancient Hindu-influenced temples and towers built by the Champa civilization",
                image: "/UGCImages/vietnam/culture/ChamTowers.jpg"
            },
            {
                title: "Basket Boat Fishing",
                description: "Traditional round bamboo boats used by fishermen along the central coast",
                image: "/UGCImages/vietnam/culture/BasketBoats.jpg"
            },
            {
                title: "Tra Que Herb Village",
                description: "Traditional organic farming community near Hoi An known for its aromatic herbs and vegetables",
                image: "/UGCImages/vietnam/culture/TraQue.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Ba Na Hills and Golden Bridge",
                "Hoi An Ancient Town",
                "My Son Sanctuary UNESCO Site",
                "Tra Que Vegetable Village",
            ],
            bestTimeToVisit: "May to October (Dry Season)",
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
        dateStart: "1,8,15,22,29 June",
        dateEnd: "5,12,19,26,30 July",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in June 2025",
            duration: "7D6N Vietnam Fixed Departure",
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
                description: `Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi An countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup").
                
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
            
            "/UGCImages/vietnam/vietnam/hoi an/10.webp",
            "/UGCImages/vietnam/vietnam/hoi an/11.webp",
            "/UGCImages/vietnam/vietnam/hoi an/12.webp",
            "/UGCImages/vietnam/vietnam/hoi an/13.webp",
            

        ],
        sightseeingSpots: [
            {
                name: "Paradise Cave",
                description: "Spectacular 31km-long cave system with stunning stalactite and stalagmite formations",
                image: "/UGCImages/vietnam/extra/ParadiseCave.jpg"
            },
            {
                name: "Hue Imperial City",
                description: "UNESCO World Heritage site featuring the walled fortress and palace of the Nguyen Dynasty",
                image: "/UGCImages/vietnam/extra/HueImperialCity.jpg"
            },
            {
                name: "Vinh Moc Tunnels",
                description: "Historic tunnel complex where an entire village moved underground during the Vietnam War",
                image: "/UGCImages/vietnam/extra/VinhMocTunnels.jpg"
            },
            {
                name: "Thien Mu Pagoda",
                description: "Historic seven-story pagoda overlooking the Perfume River in Hue",
                image: "/UGCImages/vietnam/extra/ThienMuPagoda.jpg"
            },
            {
                name: "Khai Dinh Tomb",
                description: "Elaborate royal mausoleum blending Vietnamese and European Gothic design elements",
                image: "/UGCImages/vietnam/extra/KhaiDinhTomb.jpg"
            }
        ],
        localFood: [
            {
                name: "Bun Bo Hue",
                description: "Spicy beef noodle soup originating from Hue, featuring lemongrass, fermented shrimp paste and congealed pig blood",
                image: "/UGCImages/vietnam/cuisine/BunBoHue.jpg",
                where: "Bun Bo Hue My Tam, Hue"
            },
            {
                name: "Banh Khoai",
                description: "Hue-style crispy pancake filled with pork, shrimp and bean sprouts, served with peanut sauce",
                image: "/UGCImages/vietnam/cuisine/BanhKhoai.jpg",
                where: "Hanh Restaurant, Hue"
            },
            {
                name: "Com Hen",
                description: "Rice with baby clams, herbs, peanuts, crispy pork rinds and spicy fish sauce, a Hue specialty",
                image: "/UGCImages/vietnam/cuisine/ComHen.jpg",
                where: "Quan Com Hen, Hue"
            },
            {
                name: "Banh Beo",
                description: "Steamed rice cakes topped with dried shrimp, crispy pork skin, and scallion oil, served in small dishes",
                image: "/UGCImages/vietnam/cuisine/BanhBeo.jpg",
                where: "Quan Hanh, Hue"
            }
        ],
        culture: [
            {
                title: "Hue Royal Court Music",
                description: "UNESCO-recognized traditional music performed at the imperial court of the Nguyen Dynasty",
                image: "/UGCImages/vietnam/culture/HueMusic.jpg"
            },
            {
                title: "Imperial Architecture",
                description: "Distinctive royal architectural style of the Nguyen Dynasty featuring symmetry and feng shui principles",
                image: "/UGCImages/vietnam/culture/ImperialArchitecture.jpg"
            },
            {
                title: "Conical Hat Making",
                description: "Traditional craft of making Hue's famous painted conical hats with poetic verses visible when held against light",
                image: "/UGCImages/vietnam/culture/PaintedHats.jpg"
            },
            {
                title: "Perfume River Boats",
                description: "Traditional dragon boats that cruise the Perfume River, often featuring live music performances",
                image: "/UGCImages/vietnam/culture/PerfumeRiverBoats.jpg"
            },
            {
                title: "Royal Cuisine",
                description: "Elaborate multi-course dining tradition developed for the Nguyen emperors, featuring intricate presentation",
                image: "/UGCImages/vietnam/culture/RoyalCuisine.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Paradise Cave Exploration",
                "Hue Imperial City Tour",
                "Vinh Moc Tunnels Visit",
                "Perfume River Boat Trip",
            ],
            bestTimeToVisit: "May to October (Dry Season)",
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
        dateStart: "1,8,15,22,29 June",
        dateEnd: "5,12,19,26,30 July",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in June 2025",
            duration: "7D6N Vietnam Fixed Departure",
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
                description: `A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bee's honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of Elephant-Ear Fish combined with other delicious Vietnamese dishes - a local specialty. Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive architectural and spiritual values, a place worth visiting should not be missed.

In the evening, step into the bustling streets of Vietnam when sitting on the back of our tour guide and drivers, you will have lifetime chance to feel a bit scaring but safe moving in the chaotic transportation in Vietnam to experience famous local street foods. We will go to an old park to taste "Banh Trang Tron" - Vietnamese Rice Paper Salad, "Bo Bia" - a Vietnamese Spring Rolls. Continue heading to another busy area for "Banh Xeo" - Crispy Vietnamese Pancake, "Trung Vit Lon" - Half-hatched Duck Eggs. Next, we will stop to try some of Sai Gons famous "Oc" - Steamed and Roasted Shell and Snail and local beer. 
Overnight in Ho Chi Minh City. Overnight in Ho Chi Minh City.
`
            },
            {
                day: 3,
                title: "Ho Chi Minh City - Da Nang - Hoi An - Free tailor-made item of clothing at Ann Tailor (B) by - 1 hour flight ",
                description: `After breakfast at the hotel, transfer to Tan Son Nhat airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor made item of clothing. Overnight in Hoi An.`
            },
            {
                day: 4,
                title: "Hoi An Foodie tour in the morning (B/L)",
                description: `Discover Hoi Ans countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. Cao Lau is a traditional Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper. The noodles are made with local sticky rice soaked in the water that must be taken from Ba Le Well: the oldest well in Hoi An, believed to have the best water anywhere. We then bike through the countryside to a Tra Que Village. Vegetables from this village are distributed to most of the restaurants in town and specially make the Cao Lau to have a perfect taste. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup"). Overnight in Hoi An.`
            },
            {
                day: 5,
                title: "Marble Mountains & Linh Ung Pagoda in the morning (B)",
                description: `The Marble Mountains (Vietnamese: Ngu Hanh Son; literally "five elements mountains") is a popular sightseeing location in Da Nang because of its alluring beauty. Stone steps carved into the mountain lead to a Buddhist Pagoda. There are plenty of exercises going up with many steps for a beautiful view from the top of the mountain. We will then visit the stone village where the skilled local sculptors create many marble products. Then, you will go to Am Phu Cave where there is a replica of "Heaven and Hell", eerie underground tunnels while listening to the clapping of bats' wings in the cave. Before getting back to the hotel, we head to Son Tra Linh Ung Pagoda. Built under the reign of King Minh Mang in the Nguyen Dynasty (the 19th century), legend has it a Buddhist statue drifted downstream to the area and got anchored at a sandy embankment. The local villagers thought it was a good sign, so they built up a small pagoda to worship the statue. From that day, they said, the whole coastal region has been granted with good weather, no big storms or rough sea waves, while local fishermen harvesting good fishing. Have free time in the afternoon. Overnight in Hoi An.
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
            "/UGCImages/vietnam/vietnam/hoi an/13.webp",
            "/UGCImages/vietnam/vietnam/hoi an/14.webp",
            "/UGCImages/vietnam/vietnam/hoi an/15.webp",
            "/UGCImages/vietnam/vietnam/hoi an/16.webp",
            

            
        ],
        sightseeingSpots: [
            {
                name: "Ben Thanh Market",
                description: "Iconic market in Ho Chi Minh City selling everything from local handicrafts to Vietnamese street food",
                image: "/UGCImages/vietnam/extra/BenThanhMarket.jpg"
            },
            {
                name: "Mekong Delta",
                description: "Vast network of rivers and islands known as Vietnam's 'rice bowl', offering boat tours and floating markets",
                image: "/UGCImages/vietnam/extra/MekongDelta.jpg"
            },
            {
                name: "Cu Chi Tunnels",
                description: "Historic underground network used during the Vietnam War, featuring trap doors, living areas, and command centers",
                image: "/UGCImages/vietnam/extra/CuChiTunnels.jpg"
            },
            {
                name: "Hoi An Ancient Town",
                description: "UNESCO World Heritage site with well-preserved trading port architecture from the 15th to 19th centuries",
                image: "/UGCImages/vietnam/extra/HoiAnTown.jpg"
            },
            {
                name: "Marble Mountains",
                description: "Five limestone and marble hills with caves, tunnels, Buddhist sanctuaries and panoramic views",
                image: "/UGCImages/vietnam/extra/MarbleMountains.jpg"
            }
        ],
        localFood: [
            {
                name: "Banh Mi",
                description: "Crispy Vietnamese baguette sandwich filled with meats, pâté, vegetables and herbs",
                image: "/UGCImages/vietnam/cuisine/BanhMi.jpg",
                where: "Banh Mi Huynh Hoa, Ho Chi Minh City"
            },
            {
                name: "Hu Tieu Nam Vang",
                description: "Southern Vietnamese-Cambodian noodle soup with pork, shrimp and liver in a clear broth",
                image: "/UGCImages/vietnam/cuisine/HuTieuNamVang.jpg",
                where: "Hu Tieu Nam Vang Nhan, Ho Chi Minh City"
            },
            {
                name: "Cao Lau",
                description: "Hoi An specialty with thick rice noodles, pork, and local greens in a light broth",
                image: "/UGCImages/vietnam/cuisine/CaoLau.jpg",
                where: "Market stalls in Hoi An Ancient Town"
            },
            {
                name: "Banh Xeo",
                description: "Crispy savory pancakes filled with pork, shrimp, and bean sprouts, wrapped in rice paper with herbs",
                image: "/UGCImages/vietnam/cuisine/BanhXeo.jpg",
                where: "Banh Xeo 46A, Ho Chi Minh City"
            }
        ],
        culture: [
            {
                title: "Water Puppet Theatre",
                description: "Traditional Vietnamese art form where puppets perform on water, telling folk tales and legends",
                image: "/UGCImages/vietnam/culture/WaterPuppet.jpg"
            },
            {
                title: "Ao Dai",
                description: "Vietnam's elegant national costume featuring a long tunic worn over pants, seen during special occasions",
                image: "/UGCImages/vietnam/culture/AoDai.jpg"
            },
            {
                title: "Vietnamese Coffee Culture",
                description: "Unique coffee preparation with condensed milk, enjoyed at street-side cafes throughout the country",
                image: "/UGCImages/vietnam/culture/VietCoffee.jpg"
            },
            {
                title: "Cooking Classes",
                description: "Interactive lessons in preparing traditional Vietnamese dishes, often including market visits",
                image: "/UGCImages/vietnam/culture/CookingClass.jpg"
            },
            {
                title: "Lantern Making",
                description: "Traditional craft of creating colorful silk lanterns, particularly associated with Hoi An",
                image: "/UGCImages/vietnam/culture/LanternMaking.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Ho Chi Minh City Food Tour by Motorbike",
                "Mekong Delta Exploration",
                "Hoi An Cooking Class",
                "Marble Mountains Visit",
            ],
            bestTimeToVisit: "May to October (Dry Season)",
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
        dateStart: "01 May 2025",
        dateEnd: "27 Jun 2025",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "8D7N Vietnam Fixed Departure",
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
                description: `Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi Ans countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. Cao Lau is a traditional Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper. The noodles are made with local sticky rice soaked in the water that must be taken from Ba Le Well: the oldest well in Hoi An, believed to have the best water anywhere. We then bike through the countryside to a Tra Que Village. Vegetables from this village are distributed to most of the restaurants in town and specially make the Cao Lau to have a perfect taste. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup"). Have free time in the afternoon. 
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
            
            "/UGCImages/vietnam/vietnam/hoi an/17.webp",
            "/UGCImages/vietnam/vietnam/hoi an/18.webp",
            "/UGCImages/vietnam/vietnam/hoi an/19.webp"
            
            

        ],
        sightseeingSpots: [
            {
                name: "Hoi An Ancient Town",
                description: "UNESCO World Heritage site with well-preserved trading port architecture from the 15th to 19th centuries",
                image: "/UGCImages/vietnam/extra/HoiAnTown.jpg"
            },
            {
                name: "Marble Mountains",
                description: "Marble Mountains are a group of five mountains in Vietnam, located in the southern part of the country. The mountains are known for their unique limestone formations and are considered sacred by the locals.",
                image: "/UGCImages/vietnam/extra/MarbleMountains.jpg"
            },
            {
                name: "Cu Chi Tunnels",
                description: "Historic underground network used during the Vietnam War, featuring trap doors, living areas, and command centers",
                image: "/UGCImages/vietnam/extra/CuChiTunnels.jpg"
            },
            {
                name: "Hoi An Ancient Town",
                description: "UNESCO World Heritage site with well-preserved trading port architecture from the 15th to 19th centuries",
                image: "/UGCImages/vietnam/extra/HoiAnTown.jpg"
            },
            {
                name: "Hoi An Ancient Town",
                description: "UNESCO World Heritage site with well-preserved trading port architecture from the 15th to 19th centuries",
                image: "/UGCImages/vietnam/extra/HoiAnTown.jpg"
            }
        ],
        localFood: [
            {
                name: "Bun Cha",
                description: "Hanoi specialty of grilled pork served with rice noodles, herbs and dipping sauce",
                image: "/UGCImages/vietnam/cuisine/BunCha.jpg",
                where: "Bun Cha Huong Lien, Hanoi"
            },
            {
                name: "Bun Bo Hue",
                description: "Spicy beef noodle soup originating from Hue, featuring lemongrass, fermented shrimp paste and congealed pig blood",
                image: "/UGCImages/vietnam/cuisine/BunBoHue.jpg",
                where: "Bun Bo Hue My Tam, Hue"
            },
            {
                name: "Banh Xeo",
                description: "Crispy savory pancakes filled with pork, shrimp, and bean sprouts, wrapped in rice paper with herbs",
                image: "/UGCImages/vietnam/cuisine/BanhXeo.jpg",
                where: "Banh Xeo 46A, Ho Chi Minh City"
            },
            {
                name: "Banh Cuon",
                description: "Vietnamese steamed rice crepes filled with pork, shrimp, and bean sprouts, wrapped in rice paper with herbs",
                image: "/UGCImages/vietnam/cuisine/BanhCuon.jpg",
                where: "Banh Cuon 10, Ho Chi Minh City"
            },
        ],
        culture: [
            {
                title: "Water Puppet Show",
                description: "Traditional puppet show performed by water puppets, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/WaterPuppet.jpg"
            },
            {
                title: "Temple of Literature",
                description: "Temple dedicated to Confucius, featuring a library, pagodas, and a museum",
                image: "/UGCImages/vietnam/culture/TempleOfLiterature.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/vietnam/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major vietnamnese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/vietnam/culture/GalunganFestival.jpg"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/vietnam/culture/market.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Overnight Halong Bay Cruise",
                "Hanoi Old Quarter Exploration",
                "Temple of Literature Visit",
                "Traditional Water Puppet Show",
            ],
            bestTimeToVisit: "May to October (Dry Season)",
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
        dateStart: "01 May 2025",
        dateEnd: "27 Jun 2025",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "10D9N Vietnam Fixed Departure",
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
                description: `A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bee's honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of Elephant-Ear Fish combined with other delicious Vietnamese dishes - a local specialty. Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive architectural and spiritual values, a place worth visiting should not be missed. Overnight in Ho Chi Minh City.
`
            },
            {
                day: 3,
                title: "Ho Chi Minh City - Cu Chi Tunnels (B/-/-) - by flight - 1 hour ",
                description: `Check out for a half-day tour to Cu Chi Tunnels before flying to Da Nang. Cu Chi Tunnels, a network of tunnels stretching over 250 kilometers, have proven to be one of the most famous and historical aspects of the Vietnam War. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence. Digging and building of tunnels continued over the next 25 years until it was an underground city with living areas, kitchens, storages, weapons factories, field hospitals and command centers. The tunnels could house thousands of people who lived almost entirely underground for years. There, people led relatively normal lives, which included getting married and raising children. During the American War, the entire area of Cu Chi was designated as a free fire zone; and was therefore, heavily attacked and bombed. In 1988, two sections of tunnels were opened up for visitors. Now you have the chance to enjoy this wonderful and informative experience. Created with "moving parts" these structures were designed to be livable for long periods of time. And for those who are interested, there is an opportunity for you to fire off rounds from a war era M16 or AK47 at the nearby firing range. (This activity is optional; fees for firing range are not included). After the trip, transfer to Tan Son Nhat airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor made item of clothing. Overnight in Hoi An.`
            },
            {
                day: 4,
                title: "Hoi An City Tour in Morning (B)",
                description: `Exploring Hoi An Ancient Town on foot is one of the best ways to take in the citys charm. While exploring this small yet beautiful town, tourists and frequent visitors find that it is a place of tranquility and peace. The unique atmosphere here combines elements of Vietnamese, Chinese and Japanese culture. Some of the most remarkable views of the town are from the Ancient Houses. From here, visitors can catch a glimpse of a long-gone past and more subdued and simple time. The tour includes visits to Hoi An Market, Hoi An Museum, many of the towns renowned Ancient Houses which boast a remarkable architectural style, Assembly Halls of Chinese influence, Art Craft Manufacturing and of course the must-see Japanese Covered Bridge. These spots are considered as typical architecture styles in Hoi An and reflect clearly the cross culture among France, Japan, China and Vietnam. Passing over hundreds of years and withstanding the severity of the weather, Hoi An still exists and keeps the ancient and quiet beauty. Once strolling around the ancient city, you will contemplate the simple and rustic life activities, the trellises of windflowers covering around the houses. It is certain that this tour will bring great moments for you. Have free time in the afternoon. Overnight in Hoi An`
            },
            {
                day: 5,
                title: "Hoi An Foodie tour - My Son Sanctuary (B/L)",
                description: `Discover Hoi Ans countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup"). 

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
                description: `After breakfast at the hotel, transfer to Da Nang airport to go to Ha Noi. Upon arrival at Noi Bai airport, pick up and transfer to the hotel. Check in and go for lunch before a City tour. With ochre-colored colonial buildings, tree-lined boulevards and scenic lakes, Ha Noi is full of charms. Visit some of Ha Nois heritage sites such as Van Mieu - Quoc Tu Giam (Temple of Literature), the first Imperial school in Vietnam, built in 1070 during the dynasty of King Ly. We will also visit Hoan Kiem Lake, Ngoc Son Temple (Jade Mountain Temple), But Tower (Pen Shaped Tower), Dai Nghien (Inkstone Stand) and The Huc Bridge (Wooden Bridge painted in red). Then, we will take a cyclo (pedicab) ride around "the 36 meandering streets" of Ha Nois historic Old Quarter to enjoy the bustling local life. The history of Ha Noi dated back over one thousand years, and Ha Noi has different cultural characteristics compared to other areas in Vietnam. The lifestyle, cuisine, fashion… of Ha Noi folks bear special features and through this journey, we can perceive these. It is very interesting to discover Ha Noi in the morning, when the life has just started and we can enjoy the busy atmosphere. Hanoians are very friendly and hospitable. Hopefully, this is the most remarkable memory of your trip to Vietnam. Overnight in Ha Noi.`

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
            "/UGCImages/vietnam/vietnam/hoi an/20.webp",
            "/UGCImages/vietnam/vietnam/hoi an/21.webp",
            "/UGCImages/vietnam/vietnam/hoi an/22.webp",
            
        ],
        sightseeingSpots: [
            {
                name: "Hoi An Ancient Town",
                description: "UNESCO World Heritage site with well-preserved trading port architecture from the 15th to 19th centuries",
                image: "/UGCImages/vietnam/extra/HoiAnTown.jpg"
            },
            {
                name: "Marble Mountains",
                description: "Marble Mountains are a group of five mountains in Vietnam, located in the southern part of the country. The mountains are known for their unique limestone formations and are considered sacred by the locals.",
                image: "/UGCImages/vietnam/extra/MarbleMountains.jpg"
            },
            {
                name: "Cu Chi Tunnels",
                description: "Historic underground network used during the Vietnam War, featuring trap doors, living areas, and command centers",
                image: "/UGCImages/vietnam/extra/CuChiTunnels.jpg"
            },
            {
                name: "Mount Batur",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/MountBatur.jpg"
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
            bestTimeToVisit: "May to October (Dry Season)",
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
    vietnamFoodTastingAndBeachRelaxTour: {
        id: "10-days-vietnam-food-tasting-and-beach-relax-tour",
        packageName: "10 days Vietnam food tasting and beach relax tour",
        days: 10,
        nights: 9,
        amount: 84000,
        dateStart: "01 May 2025",
        dateEnd: "27 Jun 25",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "10D9N Vietnam Fixed Departure",
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
                city: "Nha Trang",
                hotel: "3 star AARON HOTEL",
                roomType: "Superior"
            },
            {
                city: "Nha Trang",
                hotel: "4 star LIBERTY CENTRAL NHA TRANG",
                roomType: "Deluxe"
            },
            {
                city: "Nha Trang",
                hotel: "5 star SUNRISE NHA TRANG",
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
                city: "Da Nang",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City"
            }
        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival",
            "Day 2: Ho Chi Minh City - Free day - Food Tour by Motorbike (B/D)",
            "Day 3: Cu Chi Tunnels - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B)",
            "Day 4: Hoi An Foodie Tour in the morning (B/L)",
            "Day 5: Hoi An - Free day - Da Nang (B)",
            "Day 6: Da Nang - Nha Trang (B) - by train - 11 hours",
            "Day 7: Nha Trang - Free day (B)",
            "Day 8: Nha Trang - Free time - Food tour in the evening (B/D)",
            "Day 9: Nha Trang - Ho Chi Minh City (B) - by flight - 1 hour",
            "Day 10: Ho Chi Minh City - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (9 breakfasts, 5 lunches, 1 dinner)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight tickets (Ho Chi Minh City - Da Nang, Nha Trang - Ho Chi Minh City), 20 kg checked baggage, 7 kg hand baggage",
            "Train ticket (Da Nang - Nha Trang), soft berth-shared cabin",
            "Bicycle rental for Hoi An Foodie Tour",
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
                title: "Ho Chi Minh City - Arrival (-/-/-)",
                description: `Pick-up at the airport. Transfer to your hotel. Overnight in Ho Chi Minh City.`
            },
            {
                day: 2,
                title: "Ho Chi Minh City - Free day - Food Tour by Motorbike (B/-/D)",
                description: `Free time all day to explore Ho Chi Minh City on your own or take an optional tour with Hoi An Express. In the evening, have a Foodie tour by Motorbike. Most of Vietnamese transport forms in their daily life are motorcycles and scooters. Step into the bustling streets of Vietnam when sitting on the back of our tour guide and drivers, you will have a lifetime chance to feel a bit scaring but safe moving in the chaotic transportation in Vietnam to experience famous local street foods. We will go to an old park to taste "Banh Trang Tron" - Vietnamese Rice Paper Salad, a magical mix of crispy textures that's incredibly refreshing and so fun to eat and "Bo Bia" - a Vietnamese Spring Rolls, a fresh type of spring roll, packed with vegetables. Continue heading to another busy area for "Banh Xeo" - Crispy Vietnamese Pancake, "Trung Vit Lon" - Half-hatched Duck Eggs. Next, we will stop to try some of Sai Gons famous "Oc" - Steamed and Roasted Shell and Snail and local beer. Vietnamese, mostly men, like going out for drinking beer with their clients or friends after work. Locals drink beer pouring in a mug with ice, not directly cold bottle. Overnight in Ho Chi Minh City.`
            },
            {
                day: 3,
                title: "Cu Chi Tunnels - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B/-/-) - by flight - 1 hour",
                description: `Check out for a half-day tour to Cu Chi Tunnels before flying to Da Nang. Cu Chi Tunnels, a network of tunnels stretching over 250 kilometers, have proven to be one of the most famous and historical aspects of the Vietnam War. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence. Digging and building of tunnels continued over the next 25 years until it was an underground city with living areas, kitchens, storages, weapons factories, field hospitals and command centers. The tunnels could house thousands of people who lived almost entirely underground for years. There, people led relatively normal lives, which included getting married and raising children. During the American War, the entire area of Cu Chi was designated as a free fire zone; and was therefore, heavily attacked and bombed. In 1988, two sections of tunnels were opened up for visitors. Now you have the chance to enjoy this wonderful and informative experience. Created with "moving parts" these structures were designed to be livable for long periods of time. And for those who are interested, there is an opportunity for you to fire off rounds from a war era M16 or AK47 at the nearby firing range. (This activity is optional; fees for firing range are not included). After the trip, transfer to Tan Son Nhat airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor made item of clothing. Overnight in Hoi An`
            },
            {
                day: 4,
                title: "Hoi An Foodie Tour in the morning (B/L/-)",
                description: `Discover Hoi An's countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. Cao Lau is a traditional Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper. The noodles are made with local sticky rice soaked in the water that must be taken from Ba Le Well: the oldest well in Hoi An, believed to have the best water anywhere. We then bike through the countryside to a Tra Que Village. Vegetables from this village are distributed to most of the restaurants in town and specially make the Cao Lau to have a perfect taste. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup"). Have free time in the afternoon. Overnight in Hoi An.`
            },
            {
                day: 5,
                title: "Hoi An - Free day - Da Nang (B/-/-)",
                description: `Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express until transfer to Da Nang. Overnight in Da Nang.`
            },
            {
                day: 6,
                title: "Da Nang - Nha Trang (B/-/-) - by train - 11 hours",
                description: `After breakfast at the hotel, transfer to the train station in Da Nang to go to Nha Trang. Upon arrival at the train station, pick up and transfer to the hotel. Check in and relax. Overnight in Nha Trang.`
            },
            {
                day: 7,
                title: "Nha Trang - Free day (B/-/-)",
                description: `Free time all day to explore Nha Trang on your own or take an optional tour with Hoi An Express. Overnight in Nha Trang.`
            },
            {
                day: 8,
                title: "Nha Trang - Free time - Food tour in the evening (B/-/D)",
                description: `Free time all day to explore Nha Trang on your own or take an optional tour with Hoi An Express. Have food tour in the evening. For those who are looking to immerse themselves in the local culture, then Nha Trang will not disappoint them because this city is home to various cultural spaces, local foods in restaurant or on streets. It will be very fun riding on the back of a motorcycle through the streets of Nha Trang. We firstly try "Nem Nuong Ninh Hoa" - Ninh Hoa Grilled Fermented Pork Roll at a local restaurant. Taste this typical food at this local restaurant surrounding with many locals, you actually eat like a local and with the locals. Continue going to a famous street stall for "Banh Xeo Muc" - Nha Trang pancake. You can find Nha Trang pancake is specially made with squid instead of pork and shrimp like in other cities. You will then totally satisfy with "Bo Nuong Lac Canh" - Lac Canh grilled beef at a 40-year old specialty restaurant. This is a must-try not only because the meat is really good, but because you get to cook it yourself, adding excitement to your whole dining experience. You will also get the chance to take a wander down the city's night-time 'Walking Street', and try fresh seafood along the beaches of Nha Trang called, Bo Ke. At the end of tour, enjoy the view of the beach while sipping some drinks. Overnight in Nha Trang.`
            },
            {
                day: 9,
                title: "Nha Trang - Ho Chi Minh City (B/-/-) - by flight - 1 hour",
                description: `After breakfast at the hotel, transfer to Nha Trang airport to go to Ho Chi Minh City. Upon arrival at Tan Son Nhat airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ho Chi Minh City.`
            },
            {
                day: 10,
                title: "Ho Chi Minh City - Departure (B/-/-)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Tan Son Nhat International airport for your departure flight.`
            }
        ],
        images: [
            
            "/UGCImages/vietnam/vietnam/hoi an/24.webp",
            "/UGCImages/vietnam/vietnam/hoi an/25.webp",
            "/UGCImages/vietnam/vietnam/hoi an/26.webp",
            

        ],
        sightseeingSpots: [
            {
                name: "Hoi An Ancient Town",
                description: "UNESCO World Heritage site with well-preserved trading port architecture from the 15th to 19th centuries",
                image: "/UGCImages/vietnam/extra/HoiAnTown.jpg"
            },
            {
                name: "Marble Mountains",
                description: "Marble Mountains are a group of five mountains in Vietnam, located in the southern part of the country. The mountains are known for their unique limestone formations and are considered sacred by the locals.",
                image: "/UGCImages/vietnam/extra/MarbleMountains.jpg"
            },
            {
                name: "Cu Chi Tunnels",
                description: "Historic underground network used during the Vietnam War, featuring trap doors, living areas, and command centers",
                image: "/UGCImages/vietnam/extra/CuChiTunnels.jpg"
            },
            {
                name: "Bunny Cave",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/MountBatur.jpg"
            },
            {
                name: "Nha Trang Beach",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/NhaTrangBeach.jpg"
            }
        ],
        localFood: [
            {
                name: "Cao Lau",
                description: "Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper",
                image: "/UGCImages/vietnam/cuisine/CaoLau.jpg",
                where: "Hoi An"
            },
            {
                name: "Banh Xeo",
                description: "Hoi An specialty composed of rice paper, shrimp, pork, bean sprouts, and onions",
                image: "/UGCImages/vietnam/cuisine/BanhXeo.jpg",
                where: "Hoi An"
            },
            {
                name: "Banh Xeo Muc",
                description: "Nha Trang specialty composed of rice paper, shrimp, pork, bean sprouts, and onions",
                image: "/UGCImages/vietnam/cuisine/BanhXeoMuc.jpg",
                where: "Nha Trang"
            },
            {
                name: "Lac Canh",
                description: "Nha Trang specialty composed of grilled beef",
                image: "/UGCImages/vietnam/cuisine/LacCanh.jpg",
                where: "Nha Trang"
            },
        ],
        culture: [
            {
                title: "Kecak Fire Dance",
                description: "Traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple of Cham",
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
            bestTimeToVisit: "May to October (Dry Season)",
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
    northtoSouthVietnamTour: {
        id: "11-days-north-to-south-vietnam-tour",
        packageName: "11 days north to south Vietnam tour",
        days: 11,
        nights: 10,
        amount: 107000,
        dateStart: "01 May 2025",
        dateEnd: "27 Jun 25",
        description: "Discover the highlights of Vietnam's central region, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "10D9N Vietnam Fixed Departure",
            costBasis: "Double sharing basis"
        },
        hotelDetails: [
            {
                city: "Ha Noi",
                hotel: "3 star ANISE HOTEL & SPA",
                roomType: "ROH"
            },
            {
                city: "Ha Noi",
                hotel: "4 star FLOWER GARDEN HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Ha Noi",
                hotel: "5 star GRAND VISTA HA NOI HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Ha Long",
                hotel: "3 star COZY BAY CRUISE",
                roomType: "Superior"
            },
            {
                city: "Ha Long",
                hotel: "4 star VICTORIA CRUISE",
                roomType: "Deluxe"
            },
            {
                city: "Ha Long",
                hotel: "5 star PARADISE SAILS CRUISE",
                roomType: "Deluxe"
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
                city: "Da Nang",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City"
            },
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
            }

        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival",
            "Day 2: Ho Chi Minh City - Free day - Food Tour by Motorbike (B/D)",
            "Day 3: Cu Chi Tunnels - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B)",
            "Day 4: Hoi An Foodie Tour in the morning (B/L)",
            "Day 5: Hoi An - Free day - Da Nang (B)",
            "Day 6: Da Nang - Nha Trang (B) - by train - 11 hours",
            "Day 7: Nha Trang - Free day (B)",
            "Day 8: Nha Trang - Free time - Food tour in the evening (B/D)",
            "Day 9: Nha Trang - Ho Chi Minh City (B) - by flight - 1 hour",
            "Day 10: Ho Chi Minh City - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (9 breakfasts, 5 lunches, 1 dinner)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight ticket (Ha Noi - Da Nang - Ho Chi Minh City), 20 kg checked baggage, 7 kg hand baggage"
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
                title: "Ho Chi Minh City - Arrival (-/-/-)",
                description: `Pick-up at the airport. Transfer to your hotel. Overnight in Ho Chi Minh City.`
            },
            {
                day: 2,
                title: "Ho Chi Minh City - Free day - Food Tour by Motorbike (B/-/D)",
                description: `Free time all day to explore Ho Chi Minh City on your own or take an optional tour with Hoi An Express. In the evening, have a Foodie tour by Motorbike. Most of Vietnamese transport forms in their daily life are motorcycles and scooters. Step into the bustling streets of Vietnam when sitting on the back of our tour guide and drivers, you will have a lifetime chance to feel a bit scaring but safe moving in the chaotic transportation in Vietnam to experience famous local street foods. We will go to an old park to taste "Banh Trang Tron" - Vietnamese Rice Paper Salad, a magical mix of crispy textures that's incredibly refreshing and so fun to eat and "Bo Bia" - a Vietnamese Spring Rolls, a fresh type of spring roll, packed with vegetables. Continue heading to another busy area for "Banh Xeo" - Crispy Vietnamese Pancake, "Trung Vit Lon" - Half-hatched Duck Eggs. Next, we will stop to try some of Sai Gons famous "Oc" - Steamed and Roasted Shell and Snail and local beer. Vietnamese, mostly men, like going out for drinking beer with their clients or friends after work. Locals drink beer pouring in a mug with ice, not directly cold bottle. Overnight in Ho Chi Minh City.`
            },
            {
                day: 3,
                title: "Cu Chi Tunnels - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B/-/-) - by flight - 1 hour",
                description: `Check out for a half-day tour to Cu Chi Tunnels before flying to Da Nang. Cu Chi Tunnels, a network of tunnels stretching over 250 kilometers, have proven to be one of the most famous and historical aspects of the Vietnam War. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence. Digging and building of tunnels continued over the next 25 years until it was an underground city with living areas, kitchens, storages, weapons factories, field hospitals and command centers. The tunnels could house thousands of people who lived almost entirely underground for years. There, people led relatively normal lives, which included getting married and raising children. During the American War, the entire area of Cu Chi was designated as a free fire zone; and was therefore, heavily attacked and bombed. In 1988, two sections of tunnels were opened up for visitors. Now you have the chance to enjoy this wonderful and informative experience. Created with "moving parts" these structures were designed to be livable for long periods of time. And for those who are interested, there is an opportunity for you to fire off rounds from a war era M16 or AK47 at the nearby firing range. (This activity is optional; fees for firing range are not included). After the trip, transfer to Tan Son Nhat airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor made item of clothing. Overnight in Hoi An`
            },
            {
                day: 4,
                title: "Hoi An Foodie Tour in the morning (B/L/-)",
                description: `Discover Hoi An's countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. Cao Lau is a traditional Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper. The noodles are made with local sticky rice soaked in the water that must be taken from Ba Le Well: the oldest well in Hoi An, believed to have the best water anywhere. We then bike through the countryside to a Tra Que Village. Vegetables from this village are distributed to most of the restaurants in town and specially make the Cao Lau to have a perfect taste. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup"). Have free time in the afternoon. Overnight in Hoi An.`
            },
            {
                day: 5,
                title: "Hoi An - Free day - Da Nang (B/-/-)",
                description: `Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express until transfer to Da Nang. Overnight in Da Nang.`
            },
            {
                day: 6,
                title: "Da Nang - Nha Trang (B/-/-) - by train - 11 hours",
                description: `After breakfast at the hotel, transfer to the train station in Da Nang to go to Nha Trang. Upon arrival at the train station, pick up and transfer to the hotel. Check in and relax. Overnight in Nha Trang.`
            },
            {
                day: 7,
                title: "Nha Trang - Free day (B/-/-)",
                description: `Free time all day to explore Nha Trang on your own or take an optional tour with Hoi An Express. Overnight in Nha Trang.`
            },
            {
                day: 8,
                title: "Nha Trang - Free time - Food tour in the evening (B/-/D)",
                description: `Free time all day to explore Nha Trang on your own or take an optional tour with Hoi An Express. Have food tour in the evening. For those who are looking to immerse themselves in the local culture, then Nha Trang will not disappoint them because this city is home to various cultural spaces, local foods in restaurant or on streets. It will be very fun riding on the back of a motorcycle through the streets of Nha Trang. We firstly try "Nem Nuong Ninh Hoa" - Ninh Hoa Grilled Fermented Pork Roll at a local restaurant. Taste this typical food at this local restaurant surrounding with many locals, you actually eat like a local and with the locals. Continue going to a famous street stall for "Banh Xeo Muc" - Nha Trang pancake. You can find Nha Trang pancake is specially made with squid instead of pork and shrimp like in other cities. You will then totally satisfy with "Bo Nuong Lac Canh" - Lac Canh grilled beef at a 40-year old specialty restaurant. This is a must-try not only because the meat is really good, but because you get to cook it yourself, adding excitement to your whole dining experience. You will also get the chance to take a wander down the city's night-time 'Walking Street', and try fresh seafood along the beaches of Nha Trang called, Bo Ke. At the end of tour, enjoy the view of the beach while sipping some drinks. Overnight in Nha Trang.`
            },
            {
                day: 9,
                title: "Nha Trang - Ho Chi Minh City (B/-/-) - by flight - 1 hour",
                description: `After breakfast at the hotel, transfer to Nha Trang airport to go to Ho Chi Minh City. Upon arrival at Tan Son Nhat airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ho Chi Minh City.`
            },
            {
                day: 10,
                title: "Ho Chi Minh City - Departure (B/-/-)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Tan Son Nhat International airport for your departure flight.`
            }
        ],
        images: [
            "/UGCImages/vietnam/vietnam/hoi an/26.webp",
            "/UGCImages/vietnam/vietnam/hoi an/27.webp",
            "/UGCImages/vietnam/vietnam/hoi an/28.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/9.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/10.webp",
            

        ],
        sightseeingSpots: [
            {
                name: "Cham Tower",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/ChamTower.jpg"
            },
            {
                name: "Hoi An Ancient Town",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/HoiAnAncientTown.jpg"
            },
            {
                name: "Cua Dai Beach",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/CuaDaiBeach.jpg"
            },
            {
                name: "Nha Trang Beach",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/NhaTrangBeach.jpg"
            },
            {
                name: "Nha Trang Cathedral",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/NhaTrangCathedral.jpg"
            }
        ],
        localFood: [
            {
                name: "Cao Lau",
                description: "Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper",
                image: "/UGCImages/vietnam/cuisine/CaoLau.jpg",
                where: "Hoi An"
            },
            {
                name: "Banh Xeo",
                description: "Hoi An specialty composed of rice paper, shrimp, pork, bean sprouts, and onions",
                image: "/UGCImages/vietnam/cuisine/BanhXeo.jpg",
                where: "Hoi An"
            },
            {
                name: "Lac Canh",
                description: "Nha Trang specialty composed of grilled beef",
                image: "/UGCImages/vietnam/cuisine/LacCanh.jpg",
                where: "Nha Trang"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/SambalMatah.jpg",
                where: "Nha Trang"
            },
        ],
        culture: [
            {
                title: "Kecak Fire Dance",
                description: "Traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple of Cham",
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
            bestTimeToVisit: "May to October (Dry Season)",
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
    authenticVietnamPlusGoldenBridge: {
        id: "13-days-authentic-vietnam-plus-golden-bridge",
        packageName: "13 days authentic Vietnam plus golden bridge",
        days: 13,
        nights: 12,
        amount: 141000,
        dateStart: "01 May 2025",
        dateEnd: "27 Jun 2025",
        description: "Enjoy the 13 days authentic Vietnam plus golden bridge tour with us. This tour covers the highlights of Vietnam, from the ancient capital of Hue to the charming Hoi An, with visits to historical sites, natural wonders, and culinary delights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "13 days Vietnam Fixed Departure",
            costBasis: "Double sharing basis"
        },
        hotelDetails: [
            {
                city: "Ha Noi",
                hotel: "3 star ANISE HOTEL & SPA",
                roomType: "ROH"
            },
            {
                city: "Ha Noi",
                hotel: "4 star FLOWER GARDEN HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Ha Noi",
                hotel: "5 star GRAND VISTA HA NOI HOTEL",
                roomType: "Deluxe"
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
                city: "Da Nang",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City"
            },

        ],
        tourSummary: [
            "Day 1: Da Nang - Arrival ",
            "Day 2: Da Nang - Hue Heritage (B/L)",
            "Day 3: Da Nang - Ba Na Hills and Golden Bridge - Hoi An (B/L)",
            "Day 4: Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L)",
            "Day 5: Hoi An Cyclo Tour in Vietnamese Traditional Ao Dai (B)",
            "Day 6: Hoi An Countryside by Electric scooter in the morning (B)",
            "Day 7: Hoi An - Free time - Dinner & Hoi An Memories Show in the evening (B/-/D)",
            "Day 8: Hoi An - Da Nang - Ha Noi (B) - by flight - 1 hour",
            "Day 9: Ha Noi - Sapa (B/L/D) - by bus - 5 hours",
            "Day 10: Cat Cat village - Ha Noi (B/L/-) - by bus - 5 hours",
            "Day 11: Ha Noi - Hanoi Old Quarter - Hoan Kiem Lake - Ho Chi Minh Mausoleum - Ho Chi Minh Museum - Tran Quoc Pagoda (B/L)",
            "Day 12: Ha Noi - Free day (B)",
            "Day 13: Hoi An - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (12 breakfasts, 6 lunches, 2 dinner)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight ticket (Da Nang - Ha Noi), 20 kg checked baggage, 7 kg hand baggage",
            "Bus ticket (Ha Noi - Sapa - Ha Noi)"
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
                title: "Da Nang - Arrival ",
                description: `Pick-up at the airport. Transfer to your hotel. Overnight in Da Nang.`
            },
            {
                day: 2,
                title: "Da Nang - Hue Heritage (B/L)",
                description: `Head to Hue, along the North coast of Da Nang to the top of Hai Van Pass where bunkers remaining from the war can be explored. Upon arrival in Hue, we will visit the Citadel, Hue&apos;s prime attraction, which contains the Imperial City, the Forbidden Purple City and the Emperor&apos;s Private Residence. Hue Citadel was built from 1804 to 1833 under the Nguyen&apos;s Dynasty (the last feudalist kingdom in Vietnam). The grounds of the Imperial City are protected by 2-kilometer fortified ramparts and ringed by a moat. Inside the Citadel, there are many different construction works such as: Imperial City Gates, Purple Forbidden City, Temples and places of worshipping, pavilions, gardens, etc. We will have a short break for lunch then take a boat trip on the Perfume River with a stopover at Thien Mu Pagoda, which is an active Buddhist monastery with its origins dating back to 1601. One of its most poignant displays is a car belonging to a former monk, who in 1963, drove to Sai Gon and set himself alight to protest against the South Vietnamese regime and its cruel treatment of Buddhist monks and followers. We finally visit the serene Khai Dinh Royal Tomb, designed to blend in with its natural surroundings and built on principles of feng-shui. Overnight in Da Nang.`
            },
            {
                day: 3,
                title: "Da Nang - Ba Na Hills and Golden Bridge - Hoi An (B/L)",
                description: `Ba Na is one of the most interesting areas in the region as often one can feel the four distinct seasons within a single day: morning - spring, noon - summer, afternoon - autumn and evening - winter. You will have a chance to visit Golden Bridge which is a 150-meter long pedestrian bridge with two giant stone hands supporting the structure. It is designed to connect the cable car station with the gardens and to provide a scenic overlook and tourist attraction. We can enjoy the view of the beautiful landscape of nature comfortably and smoothly. Past the Golden Bridge, and into the center of a charming (and very Epcot-like) French village, complete with French Gothic-style cathedral, French restaurants, cobblestoned streets and impressive French gardens. There are many more places in Ba Na Hills to explore including Linh Ung Ba Na Pagoda, Le Jardin Garden and a complex of ancient villas. Linh Ung Ba Na Pagoda with an exquisite architectural design was built in 2004 and is symbolized by a 30-meter high Buddha statue that is exposed amidst an immense space of clouds and mountains. We will continue our trip discovering Tinh Tam Garden, Nghinh Phong Peak and Vong Nguyet Hill where we can enjoy the panoramic views the areas have to offer. Overnight in Hoi An.`
            },
            {
                day: 4,
                title: "Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L)",
                description: `After Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi An's countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special "white rose" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap ("cracked or smashed rice pancake"), Che Bap ("corn and coconut sweet soup").

In the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An. `
            },
            {
                day: 5,
                title: "Hoi An Cyclo Tour in Vietnamese Traditional Ao Dai (B)",
                description: `Exploring Hoi An in Ao Dai - Vietnamese traditional costume is one of the best ways to take in the city&apos;s charm. You will have the opportunity to wear the traditional Ao Dai styles and colors. While exploring this small yet beautiful town, tourists and frequent visitors find that it is a place of tranquility and peace.
The unique atmosphere here combines elements of Vietnamese, Chinese and Japanese culture. Some of the most remarkable views of the city are from the ancient houses. From here, visitors can catch a glimpse of a long gone past and more subdued and simple time. The tour includes visits by cyclo to Hoi An Museum, many of the town&apos;s renowned Ancient Houses which boast a remarkable architectural style, Assembly Halls of Chinese influence, Art Craft Manufacturing Workshop, and of course the must-see Japanese Covered Bridge. These spots are considered as typical architecture styles in Hoi An and reflect clearly the cross culture among France, Japan, China and Vietnam. Passing over hundreds of years and withstanding the severity of the weather, Hoi An still exists and keeps the ancient and quiet beauty. Sit on a cyclo with the traditional long dresses, you will feel comfortable and discover the quiet and peaceful beauty. Overnight in Hoi An.`
            },
            {
                day: 6,
                title: "Hoi An Countryside by Electric scooter in the morning (B",
                description: `The tour kicks off in style with coffee in local style then hop on your scooter to start exploring Hoi An&apos;s hidden gems and charismatic locals. Take a drive to Cam Nam Island to visit some local houses and places where people live and work traditional lives. Visit a ship repair yard to experience the hard work involved in maintaining a local fishing boat. Then, a short drive through a local village and beautiful countryside includes a stop at an ancestor house where guests can learn more about the belief system in Vietnam. We will visit the local shoes-making shop to learn about the ancient tradition of tailoring and shoe-making in Hoi An. Before having a short break at a stall overlooking Hoi An Ancient Town and Thu Bon River, we visit a rice cracker place to observe the traditional cracker making process as well as have a taste of the yummy end-product. Afterwards, on our drive through the countryside, you will experience the resplendent beauty of the rice paddies, grazing buffalo and monkey bridges, all of which you can take photos of. We will ride to Tra Que Village, a beautiful herb and vegetable garden which supplies vegetables for the restaurants in the ancient town. At the end of the tour, guests can unwind at a stunning beach lounge overlooking one of the best beaches in Vietnam, An Bang Beach, with a refreshing drink. Overnight in Hoi An.`
            },
            {
                day: 7,
                title: "Hoi An - Free time - Dinner & Hoi An Memories Show in the evening (B/-/D)",
                description: `Free time all day to explore the place on your own. 

We will begin our evening with a dinner at a lovely local restaurant. After dinner, we will make our way to Hoi An Impression Theme Park - a Hoi An miniature - on the Hoai River. With beautiful architecture, interesting folk games, and 5 fascinating super mini-shows, as soon as the night falls, visitors will feel lost in another space with shimmering virtual fantasy, seemingly only in the old stories. When you come to the park, you will have the opportunity to enjoy sweet soup, a special kind of dessert in Vietnam. And finally, Hoi An Memories Show is a large-scale real-time show with an outdoor stage which has a capacity of 3300 spectators. The stage setting combines mountains and rivers with a 1-kilometer stage length, using more than 500 actors. Field performance shows the use of modern sound and lighting technology, with the participation of international experts in organization and production. With the purpose of conveying the most authentic historical-cultural values to the audience, making a deep impression on each audience watching the show thanks to the scale and extremely elaborate investment in both quality and quantity, Hoi An Memories Show will take the audience from one surprise to another. Overnight in Hoi An.`
            },
            {
                day: 8,
                title: "Hoi An - Da Nang - Ha Noi (B/-/-) - by flight - 1 hour",
                description: `After breakfast at the hotel, transfer to Da Nang airport to go to Ha Noi. Upon arrival at Noi Bai airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ha Noi.`
            },
            {
                day: 9,
                title: "Ha Noi - Sapa (B/L/D) - by bus - 5 hours",
                description: `We will pick you up at your hotel for departure to Sapa. After lunch, take a scenic drive up to the hill station of Sapa. From there we will take a short 30-minute journey south toward Muong Hoa Valley. The walk takes you from Lao Chai Village of the Black H'Mong Minority to the Ta Van Village of the Giay Minority with a stop at the local Catholic Church, taking in the different traditions, cultures and costumes of the two minority groups. Have dinner. Overnight at homestay.`
            },
            {
                day: 10,
                title: "Cat Cat village - Ha Noi (B/L/-) - by bus - 5 hours",
                description: `Sapa has always been famous for its breathtaking scenery and tranquil air. Enjoying the Sapa view when trekking to Cat Cat village in the morning is indeed your first reward. You will have a chance to enjoy Cat Cat waterfall, admire giant water wheels, visit the Hmong house, learn the Hmong culture and practices, taste the Hmong wine, experience the Hmong foods. Check out, come back to Ha Noi. Overnight in Ha Noi.`
            },
            {
                day: 11,
                title: "Tam Coc - Bich Dong & Hoa Lu, the Vietnam&apos;s ancient capital (B/L)",
                description: `Take a two-hour ride heading South of Ha Noi to Tam Coc - Bich Dong, Ninh Binh Province, known to travelers as Vietnams "Inland Ha Long Bay". Tam Coc stream is the national key tourist spot in Vietnam, recognized as a World Heritage by UNESCO. This area includes a system of limestone caves and historical relics related to Trans Dynasty. This will be an exciting day highlighted by a two-hour boat ride in Tam Coc Stream. You will enjoy spectacular scenery while gliding along the river among rice paddies and ranges of limestone mountain peaks. Tam Coc means three grottos: Ca grotto, Hai grotto and Ba grotto. When the boat comes into three grottos, tourists will feel cool. Stalactites from the ceiling like iridescent pearls. This grotto is adorned with beautiful stalactites and stalagmites of different shapes and colours that sparkle like gemstones. After enjoying a lunch of local food served at a riverside restaurant, we will take a short trip down a peaceful country road to Hoa Lu, Vietnams ancient capital of the 10th and 11th century visiting two temples dedicated to King Dinh and King Le. You will also visit Bich Dong Pagoda, which was built in the style of "three" in Han scripts, consisting of three unconnected buildings, based on the mountain position from low to high forming three separate temples, hidden under the green canopy of ancient trees surrounded by stone. Overnight in Ha Noi.`
            },
            {
                day: 12,
                title: 'Ha Noi - Free Day (B)',
                description: 'Free time all day to explore Ha Noi on your own or take an optional tour with Hoi An Express. Overnight in Ha Noi.'
            },
            {
                day: 13,
                title: 'Ha Noi - Departure (B)',
                description: 'Have breakfast at the hotel and relax until the time of transfer to Noi Bai International airport for your departure flight.'
            }
            
        ],
        images: [
            "/UGCImages/vietnam/vietnam/da nang 1/1.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/2.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/3.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/4.webp",

        ],
        sightseeingSpots: [
            {
                name: "Hoi An Ancient Town",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/HoiAnAncientTown.jpg"
            },
            {
                name: "Cua Dai Beach",
                description: "Ancient forest temple complex home to hundreds of playful monkeys and stunning architecture",
                image: "/UGCImages/vietnam/extra/CuaDaiBeach.jpg"
            },
            {
                name: "Nha Trang Beach",
                description: "Active volcano offering sunrise trekking experiences and breathtaking caldera views",
                image: "/UGCImages/vietnam/extra/NhaTrangBeach.jpg"
            },
            {
                name: "Nha Trang Cathedral",
                description: "Clifftop temple famous for traditional Kecak fire dance performances at sunset",
                image: "/UGCImages/vietnam/extra/NhaTrangCathedral.jpg"
            },
            {
                name: "Hoi An Ancient Town",
                description: "Ancient Hindu shrine perched on a rocky outcrop, offering stunning sunset views and cultural performances",
                image: "/UGCImages/vietnam/extra/HoiAnAncientTown.jpg"
            }
        ],
        localFood: [
            {
                name: "Cao Lau",
                description: "Hoi An specialty composed of local noodles, pork, fresh vegetables and rice paper",
                image: "/UGCImages/vietnam/cuisine/CaoLau.jpg",
                where: "Hoi An"
            },
            {
                name: "Babi Guling",
                description: "Traditional vietnamnese-style roasted pig served with rice and local spices",
                image: "/UGCImages/vietnam/cuisine/BabiGuling.jpg",
                where: "Hoi An"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with vietnamnese spices, served with plecing kangkung",
                image: "/UGCImages/vietnam/cuisine/BebekBetutu.jpg",
                where: "Hoi An"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy vietnamnese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/vietnam/cuisine/SambalMatah.jpg",
                where: "Hoi An"
            },
        ],
        culture: [
            {
                title: "Kecak Fire Dance",
                description: "Traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/vietnam/culture/dance.jpg"
            },
            {
                title: "Temple of Cham",
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
            bestTimeToVisit: "May to October (Dry Season)",
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
            { date: "2, 9, 16, 23 Mar 2025" },
            { date: "6, 13, 20, 27 Apr 2025" },
            { date: "4, 11, 18, 25 May 2025" },
            { date: "1, 8, 15, 22, 29 Jun 2025" },
        ]
    },
    vietnamGolfTrails: {
        id: "13-days-golf-trails-vietnam",
        packageName: "13 days golf trails Vietnam",
        days: 13,
        nights: 12,
        amount: 280000,
        dateStart: "01 May 2025",
        dateEnd: "27 Jun 2025",
        description: "Enjoy the 13 days golf trails in Vietnam. This premium golf tour combines world-class golf courses with cultural exploration across Vietnam's most beautiful destinations, from Ho Chi Minh City to Hanoi.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "13 days Vietnam Fixed Departure",
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
                hotel: "5 star EASTIN GRAND HOTEL ",
                roomType: "Superior"
            },
            {
                city: "Mui Ne",
                hotel: "3 star TIEN DAT RESORT",
                roomType: "Deluxe Sea View-Hill Side"
            },
            {
                city: "Mui Ne",
                hotel: "4 star LOTUS MUI NE RESORT",
                roomType: "Deluxe Garden"
            },
            {
                city: "Mui Ne",
                hotel: "5 star SEALINKS BEACH HOTEL",
                roomType: "Superior Pool View"
            },
            {
                city: "Quy Nhon",
                hotel: "3 star SEA HARMONY HOTEL",
                roomType: "Superior"
            },
            {
                city: "Quy Nhon",
                hotel: "4 star HUONG VIET HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Quy Nhon",
                hotel: "5 star FLC LUXURY RESORT QUY NHON",
                roomType: "Deluxe"
            },
            {
                city: "Nha Trang",
                hotel: "3 star AARON HOTEL",
                roomType: "Superior"
            },
            {
                city: "Nha Trang",
                hotel: "4 star LIBERTY CENTRAL NHA TRANG",
                roomType: "Deluxe"
            },
            {
                city: "Nha Trang",
                hotel: "5 star SUNRISE NHA TRANG",
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
                city: "Ha Noi",
                hotel: "3 star ANISE HOTEL & SPA",
                roomType: "ROH"
            },
            {
                city: "Ha Noi",
                hotel: "4 star FLOWER GARDEN HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Ha Noi",
                hotel: "5 star GRAND VISTA HA NOI HOTEL",
                roomType: "Deluxe"
            }
        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival",
            "Day 2: Vietnam Golf and Country Club (B)",
            "Day 3: Ho Chi Minh City Tour in the morning - Mui Ne (B/L)",
            "Day 4: Sea Links Golf and Country Club (B)",
            "Day 5: Mui Ne - Nha Trang - City Tour in the afternoon (B)",
            "Day 6: Diamond Bay Golf Club (B)",
            "Day 7: Nha Trang - Quy Nhon (B)",
            "Day 8: FLC Quy Nhon Golf Links (B)",
            "Day 9: Quy Nhon - Hoi An - Free tailor made item of clothing at Ann Tailor (B)",
            "Day 10: Marble Mountains & Linh Ung Pagoda in the morning (B)",
            "Day 11: Montgomerie Link Vietnam Golf Club - Ha Noi (B)",
            "Day 12: Chi Linh Star Golf Club (B)",
            "Day 13: Ha Noi City Tour in the morning - Departure (B)",
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (12 breakfasts, 1 lunches)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Green fees and caddie fees",
            "Domestic flight ticket (Da Nang - Ha Noi), 20 kg checked baggage, 7 kg hand baggage"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Tips and gratuities",
            "Personal expenses such as: shopping, telephone, beverage, etc.",
            "International or domestic air tickets not mentioned above",
            "Golf cart and club rentals",
            "Caddie tips"
        ],
        itinerary: [
            {
                day: 1,
                title: "Ho Chi Minh City - Arrival",
                description: `Pick-up at Tan Son Nhat International airport. Transfer to your hotel. Overnight in Ho Chi Minh City.`
            },
            {
                day: 2,
                title: "Vietnam Golf & Country Club (B)",
                description: `Enjoy a half-day golfing at one of the best golf courses in Vietnam. Now, Vietnam boasts some of the finest golf courses not only in Asia but also worldwide. Only 20 kilometers away from the center of Ho Chi Minh City, Vietnam Golf And Country Club is a unique 36-hole golf course that consists of two fantastic 18-hole courses with total area of about 300 hectares. The courses here are unique in that the West course favors the Asian tradition of narrow tree-lined fairways and fast smooth greens, while the East course offers long, wide fairways with well-placed bunkers and water hazards in addition to challenging and undulating greens. The exceptional settings will allow you to exercise in the fresh air and enjoy the natural beauty of the land, serenity; avoid the noisy and busy atmosphere of the city. The staff will provide you with professional advice and will meet your needs. Taking photos of the whole view of golf course is a popular activity for tourists. Hopefully, this trip will contribute into your experiences once setting foot on this land. Overnight in Ho Chi Minh City.`
            },
            {
                day: 3,
                title: "Ho Chi Minh City Tour in the morning - Mui Ne (B/L)",
                description: `Ho Chi Minh City is the largest, busiest and most exciting city in Vietnam. It is also filled with intrigue and culture. Ho Chi Minh City is considered as a "blending mixture" city in Vietnam. You can discover a lot of interesting things through people's daily life. Founded and developed over 300 years, today, Ho Chi Minh City is a fascinating tourist spot with various cultural and historical features. We will visit some of the most interesting sights that Ho Chi Minh City has to offer, such as The War Remnants Museum: a lively display of the futility of the war; The Reunification Palace: beautifully preserved palace - the residence of the President of the Republic of Vietnam during the 1960-1970s; Notre Dame Cathedral - built in 1880 and the Old Post Office - built between 1886 - 1891; Thien Hau Pagoda in Cho Lon - a Chinese-style temple located on Nguyen Trai Street in Cho Lon (China Town) - District 5, dedicated to Thien Hau, the Lady of the Sea, also known as "Mazu" ("Tian Hou" in Chinese). Our last stop is Vietnamese lacquerware factory where you can observe the process of making these traditional Vietnamese products.
Have lunch at a local restaurant before departing for Mui Ne. Overnight in Mui Ne.`
            },
            {
                day: 4,
                title: "Sea Links Golf and Country Club (B)",
                description: `Sea Links lies in the heart of a simply breathtaking area of the countryside. Nearby attractions include Lau Ong Hoang, Poshanu Tower, Ong Dia Stone, Ham Tien and Hon Rom. Sea Links Golf Club is built on an area of 160 hectares on a cliff with wild and beautiful sand dunes. The golf course is practically at sea level, just a few minutes from Full Moon Beach and with amazing views of the ocean below. The courses designers, Ronald Fream and Golfplan Company, highlight that the course retains much of the original terrain of white sand dunes. Overnight in Mui Ne.`
            },
            {
                day: 5,
                title: "Mui Ne - Nha Trang - City Tour in the afternoon (B)",
                description: `Have breakfast. Check out. Drive to Nha Trang by car. Upon arrival in Nha Trang, check in. 

In the afternoon, The tour will begin with a visit Alexandre Yersin Museum, and Long Son Pagoda, which was founded in the 19th century and is a beautiful example of classic Buddhist architecture. The 14-meter-high Buddha statue that sits atop this site is visible from afar as one enters the city, and has great views of the city and surrounding countryside.
The next stop is Dam Market - Nha Trang's oldest and largest market. The final leg of our tour will take you to view some ancient Cham architecture at the Cham Ponagar temple complex. Locally referred to as Thap Ba, this set of ancient Cham temples is beautifully located on a hill just outside the city, and is reached by crossing the Cai River. Learn about the fascinating ancient civilization of the Hindu-worshipping Cham people as you wander around the fabulous temple grounds. Overnight in Nha Trang.`
            },
            {
                day: 6,
                title: "Diamond Bay Golf Club (B)",
                description: `Your day will be spent the same way, playing golf in a stunning location alongside one of the most beautiful bays in the world! Diamond Bay Golf & Villas is a 7744 yard championship layout golf course designed by American golf course developer and architecture Andy Dye. Diamond Bay has a natural habitat playing along the Nha Trang Beach on one of Vietnam's best beaches. Each hole is a unique challenge creating unmatched satisfaction and a memorable experience for the golfer. Overnight in Nha Trang.`
            },
            {
                day: 7,
                title: "Nha Trang - Quy Nhon (B)",
                description: `Have breakfast at the hotel. Depart for Quy Nhon, check in at the hotel. Overnight in Quy Nhon.`
            },
            {
                day: 8,
                title: "FLC Quy Nhon Golf Links (B)",
                description: `Spend your day playing golf at FLC Quy Nhon Golf Links. The 18-hole golf course is a harmonious combination of unique design and picturesque scenery of Nhon Ly Beach with the highlight of Eo Gio - the most spectacular place to watch the sunrise in Vietnam. Building on large sand dunes beside an evergreen pine hill, you are challenged to conquer golf holes. Back to your hotel and relax. Overnight in Quy Nhon.`
            },
            {
                day: 9,
                title: "Quy Nhon - Hoi An - Free tailor made item of clothing at Ann Tailor (B)",
                description: `Have breakfast at the hotel. Depart for Hoi An, Contact Ann Tailor to have a free tailor made item of clothing. Check in at the hotel. Overnight in Hoi An.`
            },
            {
                day: 10,
                title: "Marble Mountains & Linh Ung Pagoda in the morning (B)",
                description: `The Marble Mountains (Vietnamese: Ngu Hanh Son; literally "five elements mountains") is a popular sightseeing location in Da Nang because of its alluring beauty. Stone steps carved into the mountain lead to a Buddhist Pagoda. There are plenty of exercises going up with many steps for a beautiful view from the top of the mountain. We will then visit the stone village where the skilled local sculptors create many marble products. Then, you will go to Am Phu Cave where there is a replica of "Heaven and Hell", eerie underground tunnels while listening to the clapping of bats' wings in the cave. Before getting back to the hotel, we head to Son Tra Linh Ung Pagoda. Built under the reign of King Minh Mang in the Nguyen Dynasty (the 19th century), legend has it a Buddhist statue drifted downstream to the area and got anchored at a sandy embankment. The local villagers thought it was a good sign, so they built up a small pagoda to worship the statue. From that day, they said, the whole coastal region has been granted with good weather, no big storms or rough sea waves, while local fishermen harvesting good fishing. Overnight in Hoi An.`
            },
            {
                day: 11,
                title: "Montgomerie Link Vietnam Golf Club - Ha Noi (B)",
                description: `Enjoy a half-day experience golfing at one of the top-rated golf courses in Hoi An. Only a few kilometers from Hoi An City, the Montgomerie Links Vietnam Golf welcomes you with two magnificent 18-hole courses. Created by golfing legend Colin Montgomerie, Montgomerie Links Golf Course is truly an international 5-star championship links style course that tees up challenging and enjoyable play for all levels of golfers from around the world. The over-arching philosophy behind all of Colin Montgomerie's designs is to work closely with natural characteristics of each site. Montgomerie Links Vietnam has many truly outstanding natural features. Transfer to Da Nang airport for flight to Ha Noi. Overnight in Ha Noi.`
            },
            {
                day: 12,
                title: "Chi Linh Star Golf Club (B)",
                description: `Chi Linh Star Golf And Country Club, only 68 kilometers to the East of Ha Noi, was built with 36-hole international AAA standard. The golf course has been built with a slogan "The best place to play golf". Mostly, the most advanced technologies, top-popular building materials are used for this construction. This golf court is deemed as the golf court for stars in Vietnam and here many international ranked golfers set foot. Overnight in Ha Noi.`
            },
            {
                day: 13,
                title: "Ha Noi City Tour in the morning - Departure (B)",
                description: `With ochre-colored colonial buildings, tree-lined boulevards and scenic lakes, Ha Noi is full of charms. Visit some of Ha Noi's heritage sites such as Van Mieu - Quoc Tu Giam (Temple of Literature), the first Imperial school in Vietnam, built in 1070 during the dynasty of King Ly. We will also visit Hoan Kiem Lake, Ngoc Son Temple (Jade Mountain Temple), But Tower (Pen Shaped Tower), Dai Nghien (Inkstone Stand) and The Huc Bridge (Wooden Bridge painted in red). Then, we will take a cyclo (pedicab) ride around "the 36 meandering streets" of Ha Noi's historic Old Quarter to enjoy the bustling local life. The history of Ha Noi dated back for over one thousand years, and Ha Noi has different cultural characteristics compared to other areas in Vietnam. The lifestyle, cuisine, fashion… of Ha Noi folks bear special features and through this journey, we can perceive these. It is very interesting to discover Ha Noi in the morning, when the life has just started and we can enjoy the busy atmosphere. Hanoians are very friendly and hospitable. Hopefully, this is the most remarkable memory of your trip to Vietnam. Relax until the time of transfer to Noi Bai International airport for your departure flight.`
            }
        ],
        images: [
            "/UGCImages/vietnam/vietnam/da nang 1/5.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/6.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/7.webp",
            "/UGCImages/vietnam/vietnam/da nang 1/8.webp",
        ],
        sightseeingSpots: [
            {
                name: "Vietnam Golf & Country Club",
                description: "Premier 36-hole golf course near Ho Chi Minh City featuring both traditional Asian-style and modern Western-style courses",
                image: "/UGCImages/vietnam/extra/VietnamGolfCountryClub.jpg"
            },
            {
                name: "Sea Links Golf Club",
                description: "Spectacular clifftop course in Mui Ne with stunning ocean views and challenging sand dune terrain",
                image: "/UGCImages/vietnam/extra/SeaLinksGolf.jpg"
            },
            {
                name: "Diamond Bay Golf Club",
                description: "Championship course in Nha Trang designed by Andy Dye, featuring natural coastal habitat and beach views",
                image: "/UGCImages/vietnam/extra/DiamondBayGolf.jpg"
            },
            {
                name: "FLC Quy Nhon Golf Links",
                description: "Breathtaking links-style course built on sand dunes with views of Nhon Ly Beach and Eo Gio",
                image: "/UGCImages/vietnam/extra/FLCQuyNhon.jpg"
            },
            {
                name: "Montgomerie Links Vietnam",
                description: "5-star championship course near Hoi An designed by golf legend Colin Montgomerie",
                image: "/UGCImages/vietnam/extra/MontgomerieLinks.jpg"
            }
        ],
        localFood: [
            {
                name: "Pho",
                description: "Vietnam's iconic rice noodle soup with beef or chicken, fresh herbs, and aromatic broth",
                image: "/UGCImages/vietnam/cuisine/Pho.jpg",
                where: "Pho Hoa, Ho Chi Minh City"
            },
            {
                name: "Banh Mi",
                description: "Crispy Vietnamese baguette sandwich filled with meats, pâté, vegetables and herbs",
                image: "/UGCImages/vietnam/cuisine/BanhMi.jpg",
                where: "Banh Mi Phuong, Hoi An"
            },
            {
                name: "Cao Lau",
                description: "Hoi An specialty with thick rice noodles, pork, and local greens in a light broth",
                image: "/UGCImages/vietnam/cuisine/CaoLau.jpg",
                where: "Market stalls in Hoi An Ancient Town"
            },
            {
                name: "Bun Cha",
                description: "Hanoi specialty of grilled pork served with rice noodles, herbs and dipping sauce",
                image: "/UGCImages/vietnam/cuisine/BunCha.jpg",
                where: "Bun Cha Huong Lien, Hanoi"
            },
        ],
        culture: [
            {
                title: "Traditional Ao Dai",
                description: "Vietnam's elegant national costume worn by women, featuring a long tunic over pants",
                image: "/UGCImages/vietnam/culture/AoDai.jpg"
            },
            {
                title: "Water Puppet Theatre",
                description: "Ancient Vietnamese art form where puppets perform on water, telling folk tales and legends",
                image: "/UGCImages/vietnam/culture/WaterPuppet.jpg"
            },
            {
                title: "Cham Architecture",
                description: "Ancient Hindu-influenced temples and towers built by the Champa civilization",
                image: "/UGCImages/vietnam/culture/ChamTowers.jpg"
            },
            {
                title: "Vietnamese Coffee Culture",
                description: "Unique coffee preparation with condensed milk, often enjoyed at street-side cafes",
                image: "/UGCImages/vietnam/culture/VietCoffee.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Skilled artisans creating lacquerware, silk products, and marble sculptures",
                image: "/UGCImages/vietnam/culture/VietnamCrafts.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Play at 5 world-class golf courses across Vietnam",
                "Experience diverse landscapes from coastal links to mountain courses",
                "Cultural exploration of Vietnam's major cities and heritage sites",
                "Custom tailoring experience in Hoi An",
                "Luxury accommodations throughout the journey"
            ],
            bestTimeToVisit: "October to May (Dry Season)",
            cuisine: [
                "Regional Vietnamese specialties",
                "Fresh seafood along coastal destinations",
                "International dining options at golf clubs",
                "Street food experiences in major cities"
            ],
            accommodation: {
                type: "4-5 Star Premium Hotels",
                amenities: [
                    "Swimming pools",
                    "Spa facilities",
                    "Restaurants & bars",
                    "Free Wi-Fi",
                    "Golf course proximity"
                ]
            },
            transportation: {
                type: "Private AC Vehicle",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Golf equipment storage"
                ]
            },
            visaInfo: {
                requirement: "Visa on Arrival or E-Visa",
                duration: "30 days",
                cost: "USD 25-50 depending on type",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Visa approval letter (if applicable)"
                ]
            }
        },
        departureDates: [
            { date: "5, 12, 19, 26 Mar 2025" },
            { date: "2, 9, 16 Apr 2025" },
            { date: "7, 14, 21, 28 May 2025" },
            { date: "4, 11, 18, 25 Jun 2025" },
        ]
    },
}; 