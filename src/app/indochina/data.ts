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

export interface indochinaPackage {
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

export const indochinaPackages: Record<string, indochinaPackage> = {
    cambodiaPackage: {
        id: "6-days-cambodia-highlights",
        packageName: "6 Days Combodia Highlights",
        days: 6,
        nights: 5,
        amount: 59500,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Explore the highlights of Cambodia with our 6-day tour.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August & August 2025",
            duration: "6N5D Combodia Highlights",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Phnom Penh",
                hotel: "3 star PACIFIC HOTEL",
                roomType: "Superior Room"
            },
            {
                city: "Phnom Penh",
                hotel: "4 star PHNOM PENH TAKARI HOTEL",
                roomType: "Superior Room"
            },
            {
                city: "Phnom Penh",
                hotel: "5 star SUN MOON URBAN HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Siem Reap",
                hotel: "3 star AMBER ANGKOR VILLA",
                roomType: "Deluxe Room"
            },
            {
                city: "Siem Reap",
                hotel: "4 star AMATAK BOUTIQUE HOTEL",
                roomType: "Deluxe Room"
            },
            {
                city: "Siem Reap",
                hotel: "5 star LOTUS BLANC RESORT",
                roomType: "Landmark Room"
            }
        ],
        tourSummary: [
            "Day 1: Phnom Penh - Arrival",
            "Day 2: Phnom Penh City Tour (B/L)",
            "Day 3: Phnom Penh - Siem Reap (B)",
            "Day 4: Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L)",
            "Day 5: Siem Reap - Floating Village in the afternoon (B)",
            "Day 6: Siem Reap - Departure (B)"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (5 breakfasts, 2 lunches)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Bus ticket (Phnom Penh - Siem Reap) - 7 hours"
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
                title: "Phnom Penh - Arrival",
                description: "Pick-up at Phnom Penh International airport. Transfer to your hotel. Overnight in Phnom Penh."
            },
            {
                day: 2,
                title: "Phnom Penh City Tour (B/L)",
                description: `We will visit The Silver Pagoda (or the temple of the Emerald Buddha). The Pagoda's steps are of Italian marble and inside, its floor is comprised of more than 5000 silver tiles, which together weigh nearly 6 tons. We will then move to The Royal Palace which was built by the French in 1866 on the site of the old town. The main building on the compound is the Throne Room. It was built in 1917 in the traditional Khmer style and has a tiered roof and a 59-meter tower, which is influenced by Angkor Thom's Bayon Temple. On the compounds of the Royal Palace, the Silver Pagoda stands out in its own distinctive way. The Pagoda's steps are of Italian marble. On the inside, the floor is comprised of more than 5000 silver tiles, which together weigh nearly 6 tons. At the end of the tour, visiting Wat Phnom located on a man-made hill, 27 meters high, in the middle of Phnom Penh. The pagoda was built for the first time in 1372 and the house for four Buddha statues, which are said to have been deposited by the waters of the Mekong River. Overnight in Phnom Penh.`
            },
            {
                day: 3,
                title: "Phnom Penh - Siem Reap (B) - by bus - 7 hours",
                description: `After breakfast at the hotel, transfer to the bus station to go to Siem Reap. The bus trip will pass through the countryside, so you can see the local house during the way. Upon arrival at the bus station, pick up and transfer to the hotel. Check-in and relax. Overnight in Siem Reap.`
            },
            {
                day: 4,
                title: "Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L)",
                description: `We spend a full day visiting the well-known Temples of Angkor Archaeological Park. Start the tour to visit Angkor Thom, which translates to "Great City". The city covers an area of 9sqm in which numerous breath‐taking monuments were built. The South Gate offers the grandest access to the city where the Victory Gate grants access on the East side, leaving the East Gate, which is also known as the Gate of the Death beautifully untouched in a very quiet part of the complex. The Terrace of the Elephants is a 300 meters long terrace that has three main platforms and two subsidiary ones. Likewise, the Terrace of Leper King was constructed in the 12th century. The curious name of this terrace refers to a statue of the Leper King that is on the platform of the terrace. Overnight in Siem Reap.`
            },
            {
                day: 5,
                title: "Siem Reap - Floating Village in the afternoon (B)",
                description: `Free time at your leisure in the morning. In the afternoon, visit one of Siem Reap's authentic floating villages. The small village is home to families who unlike other floating communities still live in wooden house boats. The village moves throughout the year, depending on the water levels of the lake. At the end of the dry season when the lake's water levels are at its lowest, the villagers move closer to shore and live primarily from agricultural activities on land. By visiting a local home, you will get a better understanding of life on the lake. Return to the port and visit the Silk Farm of Artisans d'Angkor, located a 15 minute, drive away. Here people with underprivileged backgrounds are given an opportunity to improve their livelihoods by reviving the ancient crafts of making art and producing silk. A local representative accompanies you and walks you through the farm and explains all the steps necessary to produce quality silk. Overnight in Siem Reap.`
            },
            {
                day: 6,
                title: "Siem Reap - Departure (B)",
                description: `Have breakfast at the hotel and relax until the time of transfer to Siem Reap International airport for your departure flight.`
            }
        ],
        images: [
            "/UGCImages/indochina/laos/1.webp",
            "/UGCImages/indochina/laos/2.webp",
            "/UGCImages/indochina/laos/3.webp",
            "/UGCImages/indochina/laos/4.webp",
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
            { date: "2, 9, 16, 23, 30 Mar 2025" },
            { date: "20, 27 Apr 2025" },
            { date: "4, 11, 18, 25 May 2025" },
            { date: "1, 8, 15, 22, 29 Jun 2025" },
        ]
    },
    vietnamCambodia: {
        id: "14-days-vietnam-cambodia",
        packageName: "14 days Vietnam & Cambodia",
        days: 14,
        nights: 13,
        amount: 140000,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Explore the highlights of Vietnam and Cambodia with our comprehensive 14-day tour.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August & August 2025",
            duration: "14D13N Vietnam & Cambodia Highlights",
            costBasis: "Cost Based On per person"
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
            },
            {
                city: "Siem Reap",
                hotel: "3 star AMBER ANGKOR VILLA",
                roomType: "Deluxe"
            },
            {
                city: "Siem Reap",
                hotel: "4 star AMATAK BOUTIQUE HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Siem Reap",
                hotel: "5 star LOTUS BLANC RESORT",
                roomType: "Landmark"
            }
        ],
        tourSummary: [
            "Day 1: Ha Noi - Arrival",
            "Day 2: Ha Noi - Ha Long Bay (B/L/D)",
            "Day 3: Ha Long - Ha Noi (B/L)",
            "Day 4: Ha Noi City Tour - Da Nang - Hoi An (B)",
            "Day 5: Free tailor made item of clothing at Ann Tailor - Hoi An City Tour (B)",
            "Day 6: Hoi An Foodie tour - My Son Sanctuary (B/L)",
            "Day 7: Hoi An - Free day - Da Nang (B)",
            "Day 8: Da Nang - Ho Chi Minh City (B)",
            "Day 9: Mekong Delta – My Tho & Ben Tre Coconut Village (B/L)",
            "Day 10: Cu Chi Tunnels - Ho Chi Minh City Tour (B/L)",
            "Day 11: Ho Chi Minh City - Siem Reap (B)",
            "Day 12: Siem Reap - Floating Village in the afternoon (B)",
            "Day 13: Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L)",
            "Day 14: Siem Reap - Departure (B)"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (5 breakfasts, 2 lunches)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Bus ticket (Ho Chi Minh City - Siem Reap) - 13 hours, air-conditioned, modern, spacious, comfortable 40 seats buses, with tinted window glass, curtains.",
            "Domestic flight ticket (Ha Noi - Da Nang, Da Nang - Ho Chi Minh City), 20 kg checked baggage, 7 kg hand baggage"
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
                title: "Ha Noi - Arrival (-/-/-)",
                description: "Pick-up at Noi Bai International airport. Transfer to your hotel. Overnight in Ha Noi."
            },
            {
                day: 2,
                title: "Ha Noi - Ha Long Bay (B/L/D)",
                description: "The wondrous Ha Long Bay is truly one of Vietnam's most impressive sights. This exciting cruise will provide a fantastic view of the picturesque scenery and some 3,000 limestone islands rising from the clear water. The stunning limestone karst formations are scattered with beaches, grottoes and beautiful caves. Along the way, we will anchor for a leisurely swim in a secluded cove and a visit to one of the many hidden grottoes beneath towering cliffs. Overnight on the cruise."
            },
            {
                day: 3,
                title: "Ha Long - Ha Noi (B/L/-)",
                description: "After breakfast, enjoy some swimming or sunbathing. After lunch, return to Ha Noi. Overnight in Ha Noi."
            },
            {
                day: 4,
                title: "Ha Noi City Tour in the afternoon - Da Nang - Hoi An (B/-/-) - by flight - 1 hour",
                description: "Free time at your leisure in the morning. In the afternoon, take the Ha Noi City tour. With ochre-colored colonial buildings, tree-lined boulevards and scenic lakes, Ha Noi is full of charms. Visit some of Ha Noi's heritage sites such as Van Mieu - Quoc Tu Giam (Temple of Literature), the first Imperial school in Vietnam, built in 1070 during the dynasty of King Ly. We will also visit Hoan Kiem Lake, Ngoc Son Temple (Jade Mountain Temple), But Tower (Pen Shaped Tower), Dai Nghien (Inkstone Stand) and The Huc Bridge (Wooden Bridge painted in red). Then, we will take a cyclo (pedicab) ride around \"the 36 meandering streets\" of Ha Noi's historic Old Quarter to enjoy the bustling local life. The history of Ha Noi dated back for over one thousand years, and Ha Noi has different cultural characteristics compared to other areas in Vietnam. The lifestyle, cuisine, fashion… of Ha Noi folks bear special features and through this journey, we can perceive these. It is very interesting to discover Ha Noi in the morning, when the life has just started and we can enjoy the busy atmosphere. Hanoians are very friendly and hospitable. Hopefully, this is the most remarkable memory of your trip to Vietnam. After the tour, transfer to Noi Bai airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to the hotel. Check in and relax. Overnight in Hoi An."
            },
            {
                day: 5,
                title: "Free tailor made item of clothing at Ann Tailor - Hoi An City Tour in the morning (B/-/-)",
                description: "Contact Ann Tailor to have a free tailor made item of clothing. Exploring Hoi An Ancient Town on foot is one of the best ways to take in the city's charm. While exploring this small yet beautiful town, tourists and frequent visitors find that it is a place of tranquility and peace. The unique atmosphere here combines elements of Vietnamese, Chinese and Japanese culture. Some of the most remarkable views of the town are from the Ancient Houses. From here, visitors can catch a glimpse of a long-gone past and more subdued and simple time. The tour includes visits to Hoi An Market, Hoi An Museum, many of the town's renowned Ancient Houses which boast a remarkable architectural style, Assembly Halls of Chinese influence, Art Craft Manufacturing and of course the must-see Japanese Covered Bridge. These spots are considered as typical architecture styles in Hoi An and reflect clearly the cross culture among France, Japan, China and Vietnam. Passing over hundreds of years and withstanding the severity of the weather, Hoi An still exists and keeps the ancient and quiet beauty. Once strolling around the ancient city, you will contemplate the simple and rustic life activities, the trellises of windflowers covering around the houses. It is certain that this tour will bring great moments for you. Have free time in the afternoon. Overnight in Hoi An."
            },
            {
                day: 6,
                title: "Hoi An Foodie tour - My Son Sanctuary (B/L/-)",
                description: "Discover Hoi An's countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special \"white rose\" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (\"cracked or smashed rice pancake\"), Che Bap (\"corn and coconut sweet soup\").\n\nIn the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An."
            },
            {
                day: 7,
                title: "Hoi An - Free day - Da Nang (B/-/-)",
                description: "Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express unitl transfer to Da Nang. Overnight Da Nang."
            },
            {
                day: 8,
                title: "Da Nang - Ho Chi Minh City (B/-/-) - by flight - 1 hour",
                description: "After breakfast at the hotel, transfer to Da Nang airport to go to Ho Chi Minh City. Upon arrival at Tan Son Nhat airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ho Chi Minh City."
            },
            {
                day: 9,
                title: "Mekong Delta – My Tho & Ben Tre Coconut Village (B/L/-)",
                description: "A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bee's honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of 'Elephant-Ear Fish' combined with other delicious Vietnamese dishes - a local specialty. Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive architectural and spiritual values, a place worth visiting should not be missed. Overnight in Ho Chi Minh City."
            },
            {
                day: 10,
                title: "Cu Chi Tunnels - Ho Chi Minh City Tour (B/L/-)",
                description: "Start the day with a visit to the famous Cu Chi Tunnels. Stretching over 250 kilometers, Cu Chi is one of the most famous and historical aspects of war in Vietnam. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence and became legendary during the 1960s in playing a vital role in the Vietnam War by allowing the Viet Cong (communist guerrillas) to control large rural areas, just 65 kilometers away from Ho Chi Minh City. This system of tunnels consists of hospitals, rooms, kitchens, store areas, and working rooms underground. This tunnel was excavated in the area with clay mixing with laterite. So this tunnel is rather durable and stable. The air is transferred to the tunnels through ventilation holes.\n\nIn the afternoon, we will visit some of the other major attractions in Ho Chi Minh City: War Remnants, Reunification Palace, Notre Dame Cathedral and Old Post Office. These buildings are considered as the symbols of Ho Chi Minh City because of their architecture and historical meanings. We also will visit Thien Hau Pagoda in Cho Lon - a Chinese-style temple located on Nguyen Trai Street in Cho Lon (China Town)."
            },
            {
                day: 11,
                title: "Ho Chi Minh City - Siem Reap (B/-/-) - by bus - 13 hours",
                description: "After breakfast at the hotel, transfer to the bus station to go to Siem Reap. The bus trip will pass through countryside, so you can see the local house during the way. Upon arrival at the bus station, pick up and transfer to the hotel. Check in and relax. Overnight in Siem Reap."
            },
            {
                day: 12,
                title: "Siem Reap - Floating Village in the afternoon (B/-/-)",
                description: "Free time at your leisure in the morning. In the afternoon, visit one of Siem Reap's authentic floating villages. The small village is home to families who unlike other floating communities still live in wooden house boats. The village moves throughout the year, depending on the water levels of the lake. At the end of the dry season when the lake's water levels are at its lowest, the villagers move closer to shore and live primarily from agricultural activities on land. By visiting a local home, you will get a better understanding of life on the lake. Return to the port and visit the Silk Farm of Artisans d'Angkor, located a 15 minute, drive away. Here people with underprivileged backgrounds are given an opportunity to improve their livelihoods by reviving the ancient crafts of making art and producing silk. A local representative accompanies you and walks you through the farm and explains all the steps necessary to produce quality silk. Overnight in Siem Reap."
            },
            {
                day: 13,
                title: "Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L/-)",
                description: "We spend a full day visiting the well-known Temples of Angkor Archaeological Park. Start the tour to visit Angkor Thom, which translates to \"Great City\". The city covers an area of 9sqm in which numerous breath‐taking monuments were built. The South Gate offers the grandest access to the city where the Victory Gate grants access on the East side, leaving the East Gate, which is also known as the Gate of the Death beautifully untouched in a very quiet part of the complex. The Terrace of the Elephants is a 300 meters long terrace that has three main platforms and two subsidiary ones. Likewise, the Terrace of Leper King was constructed in the 12th century. The curious name of this terrace refers to a statue of the Leper King that is on the platform of the terrace. Overnight in Siem Reap."
            },
            {
                day: 14,
                title: "Siem Reap - Departure (B/-/-)",
                description: "Have breakfast at the hotel and relax until the time of transfer to Siem Reap International airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/indochina/laos/5.webp",
            "/UGCImages/indochina/laos/6.webp",
            "/UGCImages/indochina/laos/7.webp",
            "/UGCImages/indochina/laos/8.webp",

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
            { date: "11, 18, 25 Apr 2025" },
            { date: "2, 9, 16, 23, 30 May 2025" },
            { date: "6, 13, 20, 27 Jun 2025" },
        ]
    },
    livelyLaos: {
        id: "6-days-lively-laos",
        packageName: "6 days Lively Laos",
        days: 6,
        nights: 5,
        amount: 56000,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Discover the charm and beauty of Laos with our 6-day tour through Luang Prabang and Vientiane.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August & August 2025",
            duration: "6D5N Lively Laos Highlights",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Luang Prabang",
                hotel: "3 star VILLA LAO WOODEN HOUSE",
                roomType: "ROH"
            },
            {
                city: "Luang Prabang",
                hotel: "4 star VILLA SANTI HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Luang Prabang",
                hotel: "5 star LUANG PRABANG VIEW HOTEL",
                roomType: "Superior"
            },
            {
                city: "Vientiane",
                hotel: "3 star VANSANA RIVERSIDE HOTEL",
                roomType: "Standard"
            },
            {
                city: "Vientiane",
                hotel: "4 star DON CHAN PALACE",
                roomType: "Classic"
            },
            {
                city: "Vientiane",
                hotel: "5 star LAO PLAZA HOTEL",
                roomType: "Regular floor"
            }
        ],
        tourSummary: [
            "Day 1: Luang Prabang - Arrival",
            "Day 2: Luang Prabang City Tour in the morning (B)",
            "Day 3: Luang Prabang - Pak Ou Cave - Kuangsi Waterfall (B/L)",
            "Day 4: Luang Prabang - Vientiane (B)",
            "Day 5: Vientiane City Tour in the morning (B)",
            "Day 6: Vientiane - Departure (B)"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00 - 3 nights in hotel",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (5 breakfasts, 2 lunches)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Bus ticket (Luang Prabang - Vientiane) - 8 hours"
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
                title: "Luang Prabang - Arrival (-/-/-)",
                description: "Pick-up at Luang Prabang International airport. Transfer to your hotel. Overnight in Luang Prabang."
            },
            {
                day: 2,
                title: "Luang Prabang City Tour in the morning (B/-/-)",
                description: "If you're able to wake up before dawn (5:30 am) to witness and participate in offering alms to hundreds of saffron-robed monks - an awe-inspiring sight dating back generations in Laos. Optional walking through the morning market where all local products are being sold, watching the town come to life in the morning then returning to the hotel for breakfast.\n\nAfter breakfast, start your visit to the Royal Palace, which is now a National Museum and houses the precious exhibits that used to be possessions of the former Laos Royal family. (Open from 8:30 am to 11.30 am and from 1.30 pm to 3.30 pm daily except on Tuesdays) Continue with the exploration of the main Buddhist temples of Luang Prabang including; Wat Visoun, a 16th-century temple which serves as a small museum for religious artifacts; Wat Aham, built in the early 19th-century temple and Wat Xiengthong, a 16th-century temple that epitomizes all the elegance and grace of Luang Prabang architecture. Take the opportunity to interact with the monks at the Wat Mai temple before ending the day with a climb of 328 steps to the top of Phousi Hill where you can watch the sunset over Luang Prabang town.Have free time in the afternoon. Overnight in Luang Prabang."
            },
            {
                day: 3,
                title: "Luang Prabang - Pak Ou Cave - Kuangsi Waterfall (B/L/-)",
                description: "Embark on a two-hour cruise in a long-tail boat on the Mekong River and visit the mysterious Pak Ou Caves. En route, typical Laotian villages are barely visible behind thick foliage. Wooden canoes bobbing by the shore attached to bamboo poles can be seen everywhere while floats mark the location of nets and fish traps. Arrive at Pak Ou and explore the sanctuaries which consist of two large caves. Both repositories house thousands of Buddha images, which range from mere centimeters to two meters in height. Returning to Luang Prabang by car.\n\nIn the afternoon, drive south to one of Luang Prabang's most picturesque sights, the Kuang Si waterfall. On arrival, take a leisurely hike through the national park towards the Kuang Si waterfall. For the more adventurous, continue to the top of the main waterfall where you may choose to swim in a large pool. Transfer back to your hotel by private vehicle. Free time to explore the colorful night Bazaar. Overnight in Luang Prabang."
            },
            {
                day: 4,
                title: "Luang Prabang - Vientiane (B/-/-) - by bus - 8 hours",
                description: "After breakfast at the hotel, transfer to the bus station to go to Vientiane. Upon arrival at the bus station, pick up and transfer to the hotel. Check-in and relax. Overnight in Vientiane."
            },
            {
                day: 5,
                title: "Vientiane City Tour in the morning (B/-/-)",
                description: "Embark on enjoy a sightseeing tour of the city's major historic sites including the religious museums of Wat Sisaket, the oldest temple that survived from the Siamese war of 1828 with its cloister containing more than 8000 Buddha statues; Wat Ho Prakeo, the former home-temple of the Emerald Buddha statue or Pra Keo, but today it contains a collection of Buddha statues, antiques and all artifacts found in and around Vientiane; That Luang Stupa, the single most important monument in Laos, which was built to cover the original small stupa, containing a piece of the chest bone of Buddha; Patouxay (Lao Arc de Triomphe), built quite recently in commemoration of those who died during the wars in the past and it is today the landmark of Vientiane. Heading out for one-hour drive southeast of the city to Buddha Park. It is a fanciful sculpture garden full of Buddhist and religious images dating back over 500 years. Of particular interest is a giant concrete pumpkin, its interior consists of three levels representing hell, earth, and heaven. Have free time in the afternoon. Overnight in Vientiane."
            },
            {
                day: 6,
                title: "Vientiane - Departure (B/-/-)",
                description: "Have breakfast at the hotel and relax until the time of transfer to Wattay International airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/indochina/laos/9.webp",
            "/UGCImages/indochina/laos/10.webp",
            "/UGCImages/indochina/laos/11.webp",
            "/UGCImages/indochina/laos/12.webp",

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
            { date: "3, 10, 17, 24 August 2025" },
        ]
    },
    laosVietnam: {
        id: "12-days-laos-vietnam",
        packageName: "12 days Laos & Vietnam",
        days: 12,
        nights: 11,
        amount: 135300,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Experience the best of Laos and Vietnam with our comprehensive 12-day tour through Luang Prabang, Ha Noi, Ha Long Bay, and Hoi An.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "12D11N Laos & Vietnam Highlights",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Luang Prabang",
                hotel: "3 star VILLA LAO WOODEN HOUSE",
                roomType: "ROH"
            },
            {
                city: "Luang Prabang",
                hotel: "4 star VILLA SANTI HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Luang Prabang",
                hotel: "5 star LUANG PRABANG VIEW HOTEL",
                roomType: "Superior"
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
            }
        ],
        tourSummary: [
            "Day 1: Luang Prabang - Arrival",
            "Day 2: Luang Prabang City Tour in the morning (B)",
            "Day 3: Luang Prabang - Pak Ou Cave - Kuangsi Waterfall (B/L)",
            "Day 4: Luang Prabang - Free day (B)",
            "Day 5: Luang Prabang - Ha Noi (B)",
            "Day 6: Ha Noi - Ha Long Bay (B/L/D)",
            "Day 7: Ha Long Bay - Ha Noi - Da Nang - Hoi An (B/L)",
            "Day 8: Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L)",
            "Day 9: Hoi An City Tour in the morning (B)",
            "Day 10: Hoi An Countryside by Electric scooter in the morning (B)",
            "Day 11: Hoi An - Free time - Dinner & Hoi An Memories Show in the evening (B/D)",
            "Day 12: Hoi An - Da Nang - Departure (B)"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (11 breakfasts, 4 lunches, 2 dinners)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Flight ticket (Luang Prabang - Ha Noi, Ha Noi - Da Nang), 20 kg checked baggage, 7 kg hand baggage",
            "Ha Long Bay cruise",
            "Hoi An Memories Show ticket"
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
                title: "Luang Prabang - Arrival (-/-/-)",
                description: "Pick-up at Luang Prabang International airport. Transfer to your hotel. Overnight in Luang Prabang."
            },
            {
                day: 2,
                title: "Luang Prabang City Tour in the morning (B/-/-)",
                description: "If you're able to wake up before dawn (5:30am) to witness and participate in offering alms to hundreds of saffron-robed monks - an awe-inspiring sight dating back generations in Laos. Optional walking through the morning market where all local products are being sold, watch the town come to life in the morning then return to the hotel for breakfast. After breakfast, start your visit to the Royal Palace, which is now a National Museum and houses the precious exhibits that used to be possessions of the former Laos Royal family. (Open from 8:30am to 11.30am and from 1.30pm to 3.30pm daily except on Tuesdays) Continue with the exploration of the main Buddhist temples of Luang Prabang including; Wat Visoun, a 16th century temple which serves as a small museum for religious artifacts; Wat Aham, built in the early 19th century temple and Wat Xiengthong, a 16th century temple which epitomizes all the elegance and grace of Luang Prabang architecture. Take the opportunity to interact with the monks at the Wat Mai temple before ending the day with a climb of 328 steps to the top of Phousi Hill where you can watch the sun set over Luang Prabang town. Have free time in the afternoon. Overnight in Luang Prabang."
            },
            {
                day: 3,
                title: "Luang Prabang - Pak Ou Cave - Kuangsi Waterfall (B/L/-)",
                description: "Embark on a two hour cruise in a long-tail boat on the Mekong River and visit the mysterious Pak Ou Caves. En route, typical Laotian villages are barely visible behind thick foliage. Wooden canoes bobbing by the shore attached to bamboo poles can be seen everywhere while floats mark the location of nets and fish traps. Arrive at Pak Ou and explore the sanctuaries which consist of two large caves. Both repositories house thousands of Buddha images, which range from mere centimetres to two meters in height. Returning to Luang Prabang by car.\n\nIn the afternoon, drive south to one of Luang Prabang's most picturesque sights, the Kuang Si waterfall. On arrival, take a leisurely hike through the national park towards the Kuang Si waterfall. For the more adventurous, continue to the top of the main waterfall where you may choose to swim in a large pool. Transfer back to your hotel by private vehicle. Free time to explore the colorful night Bazaar. Overnight in Luang Prabang."
            },
            {
                day: 4,
                title: "Luang Prabang - Free day (B/-/-)",
                description: "Free time all day to explore Luang Prabang on your own or take an optional tour with Hoi An Express. Overnight in Luang Prabang."
            },
            {
                day: 5,
                title: "Luang Prabang - Ha Noi (B/-/-) - by flight - 1 hour 15 minutes",
                description: "After breakfast at the hotel, transfer to Luang Prabang International airport to go to Ha Noi. Upon arrival at Noi Bai International airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ha Noi."
            },
            {
                day: 6,
                title: "Ha Noi - Ha Long Bay (B/L/D)",
                description: "The wondrous Ha Long Bay is truly one of Vietnam's most impressive sights. Heading out of town, we will embark by boat for an exploration of legendary Ha Long Bay. Ha Long Bay is home to some 3000 limestone islands that rise out of the clear emerald water. The limestone karsts formations are littered with beaches, grottoes and beautiful caves. Along the way, we will anchor for a leisurely swim in a secluded cove and enjoy a visit to one of the many hidden grottoes beneath towering cliffs. Overnight on the cruise."
            },
            {
                day: 7,
                title: "Ha Long Bay - Ha Noi - Da Nang - Hoi An (B/L/-) - by flight - 1 hour",
                description: "After breakfast, swimming and sunbathing. After Lunch, we will depart to the airport for a flight to Da Nang. Upon arrival, pick up and transfer to Hoi An. Overnight in Hoi An."
            },
            {
                day: 8,
                title: "Free tailor made item of clothing at Ann Tailor - Hoi An Foodie tour - My Son Sanctuary (B/L/-)",
                description: "Contact Ann Tailor to have a free tailor made item of clothing. Discover Hoi An's countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special \"white rose\" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (\"cracked or smashed rice pancake\"), Che Bap (\"corn and coconut sweet soup\").\n\nIn the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An."
            },
            {
                day: 9,
                title: "Hoi An City Tour in the morning (B/-/-)",
                description: "Exploring Hoi An Ancient Town on foot is one of the best ways to take in the city's charm. While exploring this small yet beautiful town, tourists and frequent visitors find that it is a place of tranquility and peace. The unique atmosphere here combines elements of Vietnamese, Chinese and Japanese culture. Some of the most remarkable views of the town are from the Ancient Houses. From here, visitors can catch a glimpse of a long-gone past and more subdued and simple time. The tour includes visits to Hoi An Market, Hoi An Museum, many of the town's renowned Ancient Houses which boast a remarkable architectural style, Assembly Halls of Chinese influence, Art Craft Manufacturing and of course the must-see Japanese Covered Bridge. These spots are considered as typical architecture styles in Hoi An and reflect clearly the cross culture among France, Japan, China and Vietnam. Passing over hundreds of years and withstanding the severity of the weather, Hoi An still exists and keeps the ancient and quiet beauty. Once strolling around the ancient city, you will contemplate the simple and rustic life activities, the trellises of windflowers covering around the houses. It is certain that this tour will bring great moments for you.\nHave free time in the afternoon. Overnight in Hoi An."
            },
            {
                day: 10,
                title: "Hoi An Countryside by Electric scooter in the morning (B/-/-)",
                description: "The tour kicks off in style with coffee in local style then hop on your scooter to start exploring Hoi An's hidden gems and charismatic locals. Take a drive to Cam Nam Island to visit some local houses and places where people live and work traditional lives. Visit a ship repair yard to experience the hard work involved in maintaining a local fishing boat. Then, a short drive through a local village and beautiful countryside includes a stop at an ancestor house where guests can learn more about the belief system in Vietnam. We will visit the local shoes-making shop to learn about the ancient tradition of tailoring and shoe-making in Hoi An. Before having a short break at a stall overlooking Hoi An Ancient Town and Thu Bon River, we visit a rice cracker place to observe the traditional cracker making process as well as have a taste of the yummy end-product. Afterwards, on our drive through the countryside, you will experience the resplendent beauty of the rice paddies, grazing buffalo and monkey bridges, all of which you can take photos of. We will ride to Tra Que Village, a beautiful herb and vegetable garden which supplies vegetables for the restaurants in the ancient town. At the end of the tour, guests can unwind at a stunning beach lounge overlooking one of the best beaches in Vietnam, An Bang Beach, with a refreshing drink. Overnight in Hoi An."
            },
            {
                day: 11,
                title: "Hoi An - Free time - Dinner & Hoi An Memories Show in the evening (B/-/D)",
                description: "Free time all day to explore the place on your own.\n\nWe will begin our evening with a dinner at a lovely local restaurant. After dinner, we will make our way to Hoi An Impression Theme Park – a Hoi An miniature - on the Hoai River. With beautiful architecture, interesting folk games, and 5 fascinating super mini-shows, as soon as the night falls, visitors will feel lost in another space with shimmering virtual fantasy, seemingly only in the old stories. When you come to the park, you will have the opportunity to enjoy sweet soup, a special kind of dessert in Vietnam. And finally, Hoi An Memories Show is a large-scale real-time show with an outdoor stage which has a capacity of 3300 spectators. The stage setting combines mountains and rivers with a 1-kilometer stage length, using more than 500 actors. Field performance shows the use of modern sound and lighting technology, with the participation of international experts in organization and production. With the purpose of conveying the most authentic historical-cultural values to the audience, making a deep impression on each audience watching the show thanks to the scale and extremely elaborate investment in both quality and quantity, Hoi An Memories Show will take the audience from one surprise to another. Overnight in Hoi An."
            },
            {
                day: 12,
                title: "Hoi An - Da Nang - Departure (B/-/-)",
                description: "Have breakfast at the hotel and relax until the time of transfer to Da Nang International airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/indochina/laos/13.webp",
            "/UGCImages/indochina/laos/14.webp",
            "/UGCImages/indochina/laos/15.webp",
            "/UGCImages/indochina/laos/16.webp",



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
            { date: "3, 10, 17, 24 August 2025" },
        ]
    },
    beautyOfIndochina: {
        id: "10-days-beauty-of-indochina",
        packageName: "10 days Beauty of Indochina",
        days: 10,
        nights: 9,
        amount: 118000,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Experience the diverse beauty of Indochina with our 10-day journey through Vietnam, Cambodia, and Laos.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August & August   2025",
            duration: "10D9N Beauty of Indochina Highlights",
            costBasis: "Cost Based On per person"
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
                city: "Siem Reap",
                hotel: "3 star AMBER ANGKOR VILLA",
                roomType: "Deluxe"
            },
            {
                city: "Siem Reap",
                hotel: "4 star AMATAK BOUTIQUE HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Siem Reap",
                hotel: "5 star LOTUS BLANC RESORT",
                roomType: "Landmark"
            },
            {
                city: "Luang Prabang",
                hotel: "3 star VILLA LAO WOODEN HOUSE",
                roomType: "ROH"
            },
            {
                city: "Luang Prabang",
                hotel: "4 star VILLA SANTI HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Luang Prabang",
                hotel: "5 star LUANG PRABANG VIEW HOTEL",
                roomType: "Superior"
            }
        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival",
            "Day 2: Mekong Delta – My Tho & Ben Tre Coconut Village (B/L)",
            "Day 3: Cu Chi Tunnels - Ho Chi Minh City Tour (B/L)",
            "Day 4: Ho Chi Minh City - Siem Reap (B)",
            "Day 5: Siem Reap - Free day (B)",
            "Day 6: Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L)",
            "Day 7: Siem Reap - Luang Prabang (B)",
            "Day 8: Luang Prabang - Pak Ou Cave - Kuangsi Waterfall (B/L)",
            "Day 9: Luang Prabang City Tour in the morning (B)",
            "Day 10: Luang Prabang - Departure (B)"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (9 breakfasts, 4 lunches)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Bus ticket (Ho Chi Minh City - Siem Reap) - 13 hours",
            "Flight ticket (Siem Reap - Luang Prabang), 20 kg checked baggage, 7 kg hand baggage"
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
                description: "Pick-up at the airport. Transfer to your hotel. Overnight in Ho Chi Minh City."
            },
            {
                day: 2,
                title: "Mekong Delta – My Tho & Ben Tre Coconut Village (B/L/-)",
                description: "A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bee's honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of 'Elephant-Ear Fish' combined with other delicious Vietnamese dishes - a local specialty.Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive architectural and spiritual values, a place worth visiting should not be missed. Overnight in Ho Chi Minh City."
            },
            {
                day: 3,
                title: "Cu Chi Tunnels - Ho Chi Minh City Tour (B/L/-)",
                description: "Start the day with a visit to the famous Cu Chi Tunnels. Stretching over 250 kilometers, Cu Chi is one of the most famous and historical aspects of war in Vietnam. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence and became legendary during the 1960s in playing a vital role in the Vietnam War by allowing the Viet Cong (communist guerrillas) to control large rural areas, just 65 kilometers away from Ho Chi Minh City. This system of tunnels consists of hospitals, rooms, kitchens, store areas, and working rooms underground. This tunnel was excavated in the area with clay mixing with laterite. So this tunnel is rather durable and stable. The air is transferred to the tunnels through ventilation holes.\n\nIn the afternoon, we will visit some of the other major attractions in Ho Chi Minh City: War Remnants, Reunification Palace, Notre Dame Cathedral and Old Post Office. These buildings are considered as the symbols of Ho Chi Minh City because of their architecture and historical meanings. We also will visit Thien Hau Pagoda in Cho Lon - a Chinese-style temple located on Nguyen Trai Street in Cho Lon (China Town)."
            },
            {
                day: 4,
                title: "Ho Chi Minh City - Siem Reap (B/-/-) - by bus - 13 hours",
                description: "After breakfast at the hotel, transfer to the bus station to go to Siem Reap. The bus trip will pass through countryside, so you can see the local house during the way. Upon arrival at the bus station, pick up and transfer to the hotel. Check in and relax. Overnight in Siem Reap."
            },
            {
                day: 5,
                title: "Siem Reap - Free day (B/-/-)",
                description: "Free time all day to explore Siem Reap on your own. Overnight in Siem Reap."
            },
            {
                day: 6,
                title: "Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L/-)",
                description: "We spend a full day visiting the well-known Temples of Angkor Archaeological Park. Start the tour to visit Angkor Thom,. which translates to \"Great City\". The city covers an area of 9sqm in which numerous breath‐taking monuments were built. The South Gate offers the grandest access to the city where the Victory Gate grants access on the East side, leaving the East Gate, which is also known as the Gate of the Death beautifully untouched in a very quiet part of the complex. The Terrace of the Elephants is a 300 meters long terrace that has three main platforms and two subsidiary ones. Likewise, the Terrace of Leper King was constructed in the 12th century. The curious name of this terrace refers to a statue of the Leper King that is on the platform of the terrace. Overnight in Siem Reap."
            },
            {
                day: 7,
                title: "Siem Reap - Luang Prabang (B/-/-) - by flight - 1 hour 45 minutes",
                description: "After breakfast at the hotel, transfer to Siem Reap International airport to go to Luang Prabang. Upon arrival at Luang Prabang airport, pick up and transfer to the hotel. Check in and relax. Overnight in Luang Prabang."
            },
            {
                day: 8,
                title: "Luang Prabang - Pak Ou Cave - Kuangsi Waterfall (B/L/-)",
                description: "Embark on a two hour cruise in a long-tail boat on the Mekong River and visit the mysterious Pak Ou Caves. En route, typical Laotian villages are barely visible behind thick foliage. Wooden canoes bobbing by the shore attached to bamboo poles can be seen everywhere while floats mark the location of nets and fish traps. Arrive at Pak Ou and explore the sanctuaries which consist of two large caves. Both repositories house thousands of Buddha images, which range from mere centimetres to two meters in height. Returning to Luang Prabang by car.\n\nIn the afternoon, drive south to one of Luang Prabang's most picturesque sights, the Kuang Si waterfall. On arrival, take a leisurely hike through the national park towards the Kuang Si waterfall. For the more adventurous, continue to the top of the main waterfall where you may choose to swim in a large pool. Transfer back to your hotel by private vehicle. Free time to explore the colorful night Bazaar. Overnight in Luang Prabang."
            },
            {
                day: 9,
                title: "Luang Prabang City Tour in the morning (B/-/-)",
                description: "If you're able to wake up before dawn (5:30am) to witness and participate in offering alms to hundreds of saffron-robed monks - an awe-inspiring sight dating back generations in Laos. Optional walking through the morning market where all local products are being sold, watch the town come to life in the morning then return to the hotel for breakfast. After breakfast, start your visit to the Royal Palace, which is now a National Museum and houses the precious exhibits that used to be possessions of the former Laos Royal family. (Open from 8:30am to 11.30am and from 1.30pm to 3.30pm daily except on Tuesdays) Continue with the exploration of the main Buddhist temples of Luang Prabang including; Wat Visoun, a 16th century temple which serves as a small museum for religious artifacts; Wat Aham, built in the early 19th century temple and Wat Xiengthong, a 16th century temple which epitomizes all the elegance and grace of Luang Prabang architecture. Take the opportunity to interact with the monks at the Wat Mai temple before ending the day with a climb of 328 steps to the top of Phousi Hill where you can watch the sun set over Luang Prabang town. Have free time in the afternoon. Overnight in Luang Prabang."
            },
            {
                day: 10,
                title: "Luang Prabang - Departure (B/-/-)",
                description: "Have breakfast at the hotel and relax until the time of transfer to Luang Prabang International airport for your departure flight."
            }
        ],
        images: [

            "/UGCImages/indochina/laos/17.webp",
            "/UGCImages/indochina/laos/18.webp",
            "/UGCImages/indochina/laos/19.webp",
            "/UGCImages/indochina/laos/20.webp",

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
            { date: "11, 18, 25 Apr 2025" },
            { date: "2, 9, 16, 23, 30 May 2025" },
            { date: "6, 13, 20, 27 Jun 2025" },
        ]
    },
    vietnamThailand: {
        id: "11-days-vietnam-thailand",
        packageName: "11 days Fascinating Vietnam and Thailand",
        days: 11,
        nights: 10,
        amount: 123000,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Experience the diverse beauty of Indochina with our 11-day journey through Vietnam and Thailand.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August & August 2025",
            duration: "11D10N Fascinating Vietnam and Thailand Highlights",
            costBasis: "Cost Based On per person"
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
                city: "Da Nang",
                hotel: "5 star TMS HOTEL DA NANG BEACH",
                roomType: "Premier Suite City"
            },
            {
                city: "Bangkok",
                hotel: "3 star TRANG HOTEL BANGKOK",
                roomType: "Superior"
            },
            {
                city: "Bangkok",
                hotel: "4 star FURAMA SILOM HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Bangkok",
                hotel: "5 star PULLMAN BANGKOK HOTEL G",
                roomType: "Deluxe"
            },
            {
                city: "Chiang Mai",
                hotel: "3 star LOTUS HOTEL PANG SUAN KAEW",
                roomType: "Superior"
            },
            {
                city: "Chiang Mai",
                hotel: "4 star DUSIT PRINCESS CHIANG MAI",
                roomType: "Superior"
            },
            {
                city: "Chiang Mai",
                hotel: "5 star LE MERIDIEN CHIANG MAI",
                roomType: "Deluxe"
            }
        ],
        tourSummary: [
            "Day 1: Ho Chi Minh City - Arrival",
            "Day 2: Mekong Delta – My Tho & Ben Tre Coconut Village (B/L)",
            "Day 3: Cu Chi Tunnels - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B)",
            "Day 4: Hoi An City Tour in the morning (B)",
            "Day 5: Hoi An Foodie tour - My Son Sanctuary (B/L)",
            "Day 6: Hoi An - Free day - Da Nang (B)",
            "Day 7: Da Nang - Bangkok (B)",
            "Day 8: Damnoen Saduak Floating Market Tour - Chiang Mai (B/L)",
            "Day 9: Chiang Mai City Temples Tour (B/L)",
            "Day 10: Doi Suthep in the morning (B)",
            "Day 11: Chiang Mai - Departure (B)"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (10 breakfasts, 4 lunches)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight ticket (Ho Chi Minh City - Da Nang), 20 kg checked baggage, 7 kg hand baggage",
            "International flight ticket (Da Nang - Bangkok), 20 kg checked baggage, 7 kg hand baggage",
            "Train ticket (Bangkok - Chiang Mai), sleeping soft berth-shared second class cabin"
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
                description: "Pick-up at Tan Son Nhat International airport. Transfer to your hotel. Overnight in Ho Chi Minh City."
            },
            {
                day: 2,
                title: "Mekong Delta – My Tho & Ben Tre Coconut Village (B/L/-)",
                description: "A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bee's honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of 'Elephant-Ear Fish' combined with other delicious Vietnamese dishes - a local specialty. Hopefully, you can enjoy the fresh and comfortable atmosphere through your trip. Overnight in Ho Chi Minh City."
            },
            {
                day: 3,
                title: "Cu Chi Tunnels - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B/-/-) - by flight - 1 hour",
                description: "Check out for a half-day tour to Cu Chi Tunnels before flying to Da Nang. Cu Chi Tunnels, a network of tunnels stretching over 250 kilometers, have proven to be one of the most famous and historical aspects of the Vietnam War. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence. Digging and building of tunnels continued over the next 25 years until it was an underground city with living areas, kitchens, storages, weapons factories, field hospitals and command centers. The tunnels could house thousands of people who lived almost entirely underground for years. There, people led relatively normal lives, which included getting married and raising children. During the American War, the entire area of Cu Chi was designated as a free fire zone; and was therefore, heavily attacked and bombed. In 1988, two sections of tunnels were opened up for visitors. Now you have the chance to enjoy this wonderful and informative experience. Created with \"moving parts\" these structures were designed to be livable for long periods of time. And for those who are interested, there is an opportunity for you to fire off rounds from a war era M16 or AK47 at the nearby firing range. (This activity is optional; fees for firing range are not included). After the trip, transfer to Tan Son Nhat airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor made item of clothing. Overnight in Hoi An"
            },
            {
                day: 4,
                title: "Hoi An City Tour in the morning (B/-/-)",
                description: "Exploring Hoi An Ancient Town on foot is one of the best ways to take in the city's charm. While exploring this small yet beautiful town, tourists and frequent visitors find that it is a place of tranquility and peace. The unique atmosphere here combines elements of Vietnamese, Chinese and Japanese culture. Some of the most remarkable views of the town are from the Ancient Houses. From here, visitors can catch a glimpse of a long-gone past and more subdued and simple time.  The tour includes visits to Hoi An Market, Hoi An Museum, many of the town's renowned Ancient Houses which boast a remarkable architectural style, Assembly Halls of Chinese influence, Art Craft Manufacturing and of course the must-see Japanese Covered Bridge. These spots are considered as typical architecture styles in Hoi An and reflect clearly the cross culture among France, Japan, China and Vietnam. Passing over hundreds of years and withstanding the severity of the weather, Hoi An still exists and keeps the ancient and quiet beauty. Once strolling around the ancient city, you will contemplate the simple and rustic life activities, the trellises of windflowers covering around the houses. It is certain that this tour will bring great moments for you. Have free time in the afternoon. Overnight in Hoi An."
            },
            {
                day: 5,
                title: "Hoi An Foodie tour - My Son Sanctuary (B/L/-)",
                description: "Discover Hoi An's countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special \"white rose\" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (\"cracked or smashed rice pancake\"), Che Bap (\"corn and coconut sweet soup\").\n\nIn the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An."
            },
            {
                day: 6,
                title: "Hoi An - Free day - Da Nang (B/-/-)",
                description: "Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express until transfer to Da Nang. Overnight in Da Nang."
            },
            {
                day: 7,
                title: "Da Nang - Bangkok (B/-/-) - by flight - 1 hour 40 minutes",
                description: "After breakfast at the hotel, transfer to Da Nang airport to go to Bangkok. Upon arrival at Suvarnabhumi International airport, pick up and transfer to the hotel. Check in and relax. Overnight in Bangkok."
            },
            {
                day: 8,
                title: "Damnoen Saduak Floating Market Tour - Chiang Mai (B/L/-) - by overnight train - 14 hours 20 minutes",
                description: "Our guide will pick you up at your hotel and proceed to Damnoen Saduak Floating Market. Travel by long-tailed speedboat as a guide unpacks the secrets of these 19th-century canals built by King Rama IV. Over the course of this half-day trip, cruise past vendors selling freshly picked produce, handmade sweets, and interesting souvenirs. In the evening, transfer to the train station. Overnight on train."
            },
            {
                day: 9,
                title: "Chiang Mai City Temples Tour (B/L/-)",
                description: "Early arrive in Chiang Mai. Welcome at Chiang Mai Train Station, have breakfast and proceed to the city Temples Tour. Chiang Mai has had a long and independent history, which has a large extent preserved of Thai culture. Visit the most important temples including Wat Phra Singh (the most beautiful architecture in northern style reflected from its' Viharn), Wat Chedi Luang (Temple of the Biggest Stupa in Chiang Mai) and Wat Chiang Man (The oldest temple in Chiang Mai build in the same age of Chiang Mai City). Overnight in Chiang Mai."
            },
            {
                day: 10,
                title: "Doi Suthep in the morning (B/-/-)",
                description: "Visit Doi Suthep Temple - an important pilgrimage spot for the devout and sacred site to Thai people. This is Chiang Mai's most visually stunning Buddhist temple, the gorgeous 600-year-old Wat Phrathat Doi Suthep atop the 5,300-foot (1,615 meter) Doi Suthep Peak, plus plenty of great photo-ops. Have free time in the afternoon. Overnight in Chiang Mai."
            },
            {
                day: 11,
                title: "Chiang Mai - Departure (B/-/-)",
                description: "Have breakfast at the hotel and relax until the time of transfer to Chiang mai International airport for your departure flight."
            }
        ],
        images: [
            "/UGCImages/indochina/laos/21.webp",
            "/UGCImages/indochina/laos/22.webp",
            "/UGCImages/indochina/laos/23.webp",

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
            { date: "19, 26 Apr 2025" },
            { date: "3, 10, 17, 24, 31 May 2025" },
            { date: "7, 14, 21, 28 Jun 2025" },
        ]
    },
    thailandLaosVietnamCambodia: {
        id: "21-days-thailand-laos-vietnam-cambodia",
        packageName: "21 days Thailand, Laos, Vietnam & Cambodia",
        days: 21,
        nights: 20,
        amount: 268700,
        dateStart: "1,8,15,22,29 August",
        dateEnd: "5,12,19,26,30 August",
        description: "Experience the ultimate Indochina journey with our comprehensive 21-day tour through Thailand, Laos, Vietnam, and Cambodia.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in August & August   2025",
            duration: "21D20N Indochina Grand Tour",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Bangkok",
                hotel: "3 star TRUE SIAM RANGNAM HOTEL",
                roomType: "Superior"
            },
            {
                city: "Bangkok",
                hotel: "4 star CENTURY PARK HOTEL",
                roomType: "Superior"
            },
            {
                city: "Bangkok",
                hotel: "5 star EASTIN GRAND HOTEL SATHORN BANGKOK",
                roomType: "Superior"
            },
            {
                city: "Chiang Mai",
                hotel: "3 star DE CHARME HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Chiang Mai",
                hotel: "4 star U CHIANG MAI HOTEL",
                roomType: "Superior"
            },
            {
                city: "Chiang Mai",
                hotel: "5 star CHALA NUMBER 6 HOTEL",
                roomType: "Superior"
            },
            {
                city: "Luang Prabang",
                hotel: "3 star VILLA LAO WOODEN HOUSE",
                roomType: "ROH"
            },
            {
                city: "Luang Prabang",
                hotel: "4 star VILLA SANTI HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Luang Prabang",
                hotel: "5 star LUANG PRABANG VIEW HOTEL",
                roomType: "Superior"
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
            },
            {
                city: "Siem Reap",
                hotel: "3 star AMBER ANGKOR VILLA",
                roomType: "Deluxe"
            },
            {
                city: "Siem Reap",
                hotel: "4 star AMATAK BOUTIQUE HOTEL",
                roomType: "Deluxe"
            },
            {
                city: "Siem Reap",
                hotel: "5 star LOTUS BLANC RESORT",
                roomType: "Landmark"
            }
        ],
        tourSummary: [
            "Day 1: Bangkok - Arrival",
            "Day 2: Damnoen Saduak Floating Market Tour - Chiang Mai (B/L)",
            "Day 3: Chiang Mai City Temples Tour (B/L)",
            "Day 4: Doi Suthep in the morning (B)",
            "Day 5: Chiang Mai - Luang Prabang (B)",
            "Day 6: Luang Prabang City Tour in the morning (B)",
            "Day 7: Luang Prabang - Pak Ou Cave - Kuangsi Waterfall (B/L)",
            "Day 8: Luang Prabang - Free day (B)",
            "Day 9: Luang Prabang - Ha Noi (B)",
            "Day 10: Ha Noi - Ha Long Bay (B/L/D)",
            "Day 11: Ha Long Bay - Ha Noi (B/L)",
            "Day 12: Ha Noi - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B)",
            "Day 13: Hoi An Foodie tour - My Son Sanctuary (B/L)",
            "Day 14: Hoi An - Free day - Da Nang (B)",
            "Day 15: Da Nang - Ho Chi Minh City (B)",
            "Day 16: Mekong Delta – My Tho & Ben Tre Coconut Village (B/L)",
            "Day 17: Cu Chi Tunnels (B)",
            "Day 18: Ho Chi Minh City - Siem Reap (B)",
            "Day 19: Siem Reap - Free day (B)",
            "Day 20: Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L)",
            "Day 21: Siem Reap - Departure (B)"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double/triple sharing; Check-in time: 14:00, Check-out time: 12:00",
            "Mineral water on day tours",
            "Meals as specified in the itinerary (10 breakfasts, 4 lunches)",
            "English speaking guides (other languages available upon request with surcharge)",
            "Domestic flight ticket (Ho Chi Minh City - Da Nang), 20 kg checked baggage, 7 kg hand baggage",
            "International flight ticket (Da Nang - Bangkok), 20 kg checked baggage, 7 kg hand baggage",
            "Train ticket (Bangkok - Chiang Mai), sleeping soft berth-shared second class cabin",
            "Ha Long Bay cruise"
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
                title: "Bangkok - Arrival (-/-/-)",
                description: "Pick-up at Suvarnabhumi International airport. Transfer to your hotel. Overnight in Bangkok."
            },
            {
                day: 2,
                title: "Damnoen Saduak Floating Market Tour - Chiang Mai (B/L/-) - by overnight train - 14 hours 20 minutes",
                description: "Our guide will pick you up at your hotel and proceed to Damnoen Saduak Floating Market. Travel by long-tailed speedboat as a guide unpacks the secrets of these 19th-century canals built by King Rama IV. Over the course of this half-day trip, cruise past vendors selling freshly picked produce, handmade sweets, and interesting souvenirs.\nIn the evening, transfer to the train station. Overnight on train."
            },
            {
                day: 3,
                title: "Chiang Mai City Temples Tour (B/L/-)",
                description: "Early arrive at Chiang Mai. Welcome at Chiang Mai Train Station, have breakfast and proceed to the city Temples Tour. Chiang Mai has had a long and independent history, which has a large extent preserved of Thai culture. Visit the most important temples including Wat Phra Singh (the most beautiful architecture in northern style reflected from its' Viharn), Wat Chedi Luang (Temple of the Biggest Stupa in Chiang Mai) and Wat Chiang Man (The oldest temple in Chiang Mai build in the same age of Chiang Mai City).Overnight in Chiang Mai."
            },
            {
                day: 4,
                title: "Doi Suthep in the morning (B/-/-)",
                description: "Visit Doi Suthep Temple - an important pilgrimage spot for the devout and sacred site to Thai people. This is Chiang Mai's most visually stunning Buddhist temple, the gorgeous 600-year-old Wat Phrathat Doi Suthep atop the 5,300-foot (1,615 meter) Doi Suthep Peak, plus plenty of great photo-ops. Have free time in the afternoon. Overnight in Chiang Mai."
            },
            {
                day: 5,
                title: "Chiang Mai - Luang Prabang (B/-/-) - by flight - 1 hour",
                description: "After breakfast at the hotel, transfer to Chiang mai International airport to go to Luang Prabang. Upon arrival at Luang Prabang International airport, pick up and transfer to the hotel. Check in and relax. Overnight in Luang Prabang."
            },
            {
                day: 6,
                title: "Luang Prabang City Tour in the morning (B/-/-)",
                description: "If you're able to wake up before dawn (5:30am) to witness and participate in offering alms to hundreds of saffron-robed monks - an awe-inspiring sight dating back generations in Laos. Optional walking through the morning market where all local products are being sold, watch the town come to life in the morning then return to the hotel for breakfast. After breakfast, start your visit to the Royal Palace, which is now a National Museum and houses the precious exhibits that used to be possessions of the former Laos Royal family. (Open from 8:30am to 11.30am and from 1.30pm to 3.30pm daily except on Tuesdays) Continue with the exploration of the main Buddhist temples of Luang Prabang including; Wat Visoun, a 16th century temple which serves as a small museum for religious artifacts; Wat Aham, built in the early 19th century temple and Wat Xiengthong, a 16th century temple which epitomizes all the elegance and grace of Luang Prabang architecture. Take the opportunity to interact with the monks at the Wat Mai temple before ending the day with a climb of 328 steps to the top of Phousi Hill where you can watch the sun set over Luang Prabang town. Have free time in the afternoon. Overnight in Luang Prabang."
            },
            {
                day: 7,
                title: "Luang Prabang – Pak Ou Cave – Kuangsi Waterfall (B/L/-)",
                description: "Embark on a two-hour cruise in a long-tail boat on the Mekong River and visit the mysterious Pak Ou Caves. En route, typical Laotian villages are barely visible behind thick foliage. Wooden canoes bobbing by the shore attached to bamboo poles can be seen everywhere while floats mark the location of nets and fish traps. Arrive at Pak Ou and explore the sanctuaries which consist of two large caves. Both repositories house thousands of Buddha images, which range from mere centimetres to two meters in height. Returning to Luang Prabang by car.\n\nIn the afternoon, drive south to one of Luang Prabang's most picturesque sights, the Kuang Si waterfall. On arrival, take a leisurely hike through the national park towards the Kuang Si waterfall. For the more adventurous, continue to the top of the main waterfall where you may choose to swim in a large pool. Transfer back to your hotel by private vehicle. Free time to explore the colorful night Bazaar. Overnight in Luang Prabang."
            },
            {
                day: 8,
                title: "Luang Prabang - Free day (B/-/-)",
                description: "Free time all day to explore Luang Prabang on your own or take an optional tour with Hoi An Express. Overnight in Luang Prabang."
            },
            {
                day: 9,
                title: "Luang Prabang - Ha Noi (B/-/-) - by flight - 1 hour 15 minutes",
                description: "After breakfast at the hotel, transfer to Luang Prabang International airport to go to Ha Noi. Upon arrival at Noi Bai International airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ha Noi."
            },
            {
                day: 10,
                title: "Ha Noi - Ha Long Bay (B/L/D)",
                description: "The wondrous Ha Long Bay is truly one of Vietnam's most impressive sights. Heading out of town, we will embark by boat for an exploration of legendary Ha Long Bay. Ha Long Bay is home to some 3000 limestone islands that rise out of the clear emerald water. The limestone karsts formations are littered with beaches, grottoes and beautiful caves. Along the way, we will anchor for a leisurely swim in a secluded cove and enjoy a visit to one of the many hidden grottoes beneath towering cliffs. Overnight on the cruise."
            },
            {
                day: 11,
                title: "Ha Long Bay - Ha Noi (B/L/-)",
                description: "After breakfast, enjoy some swimming or sunbathing. After lunch, return to Ha Noi. Overnight in Ha Noi."
            },
            {
                day: 12,
                title: "Ha Noi - Da Nang - Hoi An - Free tailor made item of clothing at Ann Tailor (B/-/-) - by flight - 1 hour",
                description: "After breakfast at the hotel, transfer to Noi Bai airport to go to Hoi An. Upon arrival at Da Nang airport, pick up and transfer to Hoi An and contact Ann Tailor to have a free tailor made item of clothing. Overnight in Hoi An."
            },
            {
                day: 13,
                title: "Hoi An Foodie tour - My Son Sanctuary (B/L/-)",
                description: "Discover Hoi An's countryside and its local foods by bicycle. Local foods in Hoi An are known and enjoyed by the tourists once setting foot here. In Hoi An, these cuisines are very popular and sold everywhere in all streets. Moreover, these cuisines are considered as unique symbols for the culture and introduced to every tourist. We will ride to a local restaurant for Hoi An specialty - Cao Lau. We then bike through the countryside to a Tra Que Village. You will also learn how to make special \"white rose\" dumpling cakes with a local family and taste your products. Continue riding to Cam Nam to enjoy the Yin and Yang food such as: Banh Dap (\"cracked or smashed rice pancake\"), Che Bap (\"corn and coconut sweet soup\").\n\nIn the afternoon, visit My Son Sanctuary - an experience that should not be missed. Located in the heart of a beautiful valley and surrounded by high mountains ranges My Son was named a Cultural Heritage site by UNESCO in 1999. Wander around the lost Champa Kingdom that dated back to the 3rd century, explore the temples and learn about the fascinating history behind this sanctuary of Hinduism. Overnight in Hoi An."
            },
            {
                day: 14,
                title: "Hoi An - Free day - Da Nang (B/-/-)",
                description: "Free time all day to explore Hoi An on your own or take an optional tour with Hoi An Express until transfer to Da Nang. Overnight in Da Nang."
            },
            {
                day: 15,
                title: "Da Nang - Ho Chi Minh City (B/-/-) - by flight - 1 hour",
                description: "After breakfast at the hotel, transfer to Da Nang airport to go to Ho Chi Minh City. Upon arrival at Tan Son Nhat airport, pick up and transfer to the hotel. Check in and relax. Overnight in Ho Chi Minh City."
            },
            {
                day: 16,
                title: "Mekong Delta – My Tho & Ben Tre Coconut Village (B/L/-)",
                description: "A trip to Mekong Delta offers a glimpse into the unique and distinct agrarian life of the vibrant southern Delta region. We will enjoy a cruise along the Mekong River to one of the Islands (located in the town of My Tho) where we will be entertained with traditional music while enjoying some tea sweetened with bee's honey and seasonal fresh fruits. We will then take a paddle-boat to cruise through the narrow canals of the Mekong. One interesting thing about transportation in this region is that mostly everybody here travels by boats or ships because the number of canals is very interlaced. Here a system of transportation on water is developed so much. By travelling on canals, we can discover many distinct things such as along with the banks, a number of coconut trees grow side by side. The paddle-boat ride provides an interesting look into the local cottage industry of making coconut candies. We will then have a lunch of 'Elephant-Ear Fish' combined with other delicious Vietnamese dishes - a local specialty. Visit Vinh Trang Pagoda, which is recognized as a national historical and cultural relic with distinctive architectural and spiritual values, a place worth visiting should not be missed. Overnight in Ho Chi Minh City."
            },
            {
                day: 17,
                title: "Cu Chi Tunnels (B/-/-)",
                description: "Cu Chi Tunnels, a network of tunnels stretching over 250 kilometers, have proven to be one of the most famous and historical aspects of the Vietnam War. The tunnel system was created in 1948 to assist the Viet Minh as they fought the French for independence. Digging and building of tunnels continued over the next 25 years until it was an underground city with living areas, kitchens, storages, weapons factories, field hospitals and command centers. The tunnels could house thousands of people who lived almost entirely underground for years. There, people led relatively normal lives, which included getting married and raising children. During the American War, the entire area of Cu Chi was designated as a free fire zone; and was therefore, heavily attacked and bombed. In 1988, two sections of tunnels were opened up for visitors. Now you have the chance to enjoy this wonderful and informative experience. Created with \"moving parts\" these structures were designed to be livable for long periods of time. And for those who are interested, there is an opportunity for you to fire off rounds from a war era M16 or AK47 at the nearby firing range. (This activity is optional; fees for firing range are not included). Overnight in Ho Chi Minh City."
            },
            {
                day: 18,
                title: "Ho Chi Minh City - Siem Reap (B/-/-) - by flight - 1 hour",
                description: "After breakfast at the hotel, transfer to Tan Son Nhat International airport to go to Siem Reap. Upon arrival at Siem Reap International airport, pick up and transfer to the hotel. Check in and relax. Overnight in Siem Reap."
            },
            {
                day: 19,
                title: "Siem Reap - Free day (B/-/-)",
                description: "Free time all day to explore Siem Reap on your own or take an optional tour with Hoi An Express. Overnight in Siem Reap."
            },
            {
                day: 20,
                title: "Siem Reap - Angkor Temples (Angkor Wat - Angkor Thom) (B/L/-)",
                description: "We spend a full day visiting the well-known Temples of Angkor Archaeological Park. Start the tour to visit Angkor Thom,. which translates to \"Great City\". The city covers an area of 9sqm in which numerous breath‐taking monuments were built. The South Gate offers the grandest access to the city where the Victory Gate grants access on the East side, leaving the East Gate, which is also known as the Gate of the Death beautifully untouched in a very quiet part of the complex. The Terrace of the Elephants is a 300 meters long terrace that has three main platforms and two subsidiary ones. Likewise, the Terrace of Leper King was constructed in the 12th century. The curious name of this terrace refers to a statue of the Leper King that is on the platform of the terrace. Overnight in Siem Reap."
            },
            {
                day: 21,
                title: "Siem Reap - Departure (B/-/-)",
                description: "Have breakfast at the hotel and relax until the time of transfer to Siem Reap International airport for your departure flight."
            }
        ],
        images: [

            "/UGCImages/indochina/combodia/1.webp",
            "/UGCImages/indochina/combodia/2.webp",
            "/UGCImages/indochina/combodia/3.webp",
            "/UGCImages/indochina/combodia/4.webp",
            "/UGCImages/indochina/combodia/5.webp",
            "/UGCImages/indochina/combodia/6.webp",

        ],
        sightseeingSpots: [
            {
                name: "Angkor Wat",
                description: "The largest religious monument in the world, a UNESCO World Heritage site and symbol of Cambodia",
                image: "/UGCImages/indochina/extra/angkorWat.jpg"
            },
            {
                name: "Ha Long Bay",
                description: "Stunning seascape of limestone pillars and islets rising from emerald waters, a UNESCO World Heritage site",
                image: "/UGCImages/indochina/extra/halonBay.jpg"
            },
            {
                name: "Luang Prabang",
                description: "Ancient royal capital with well-preserved architecture, Buddhist temples, and traditional arts",
                image: "/UGCImages/indochina/extra/luangPrabang.jpg"
            },
            {
                name: "Mekong Delta",
                description: "Vast network of distributaries in southwestern Vietnam, life revolves around the water",
                image: "/UGCImages/indochina/extra/mekongDelta.jpg"
            },
            {
                name: "Doi Suthep Temple",
                description: "Sacred Buddhist temple on Doi Suthep mountain with panoramic views of Chiang Mai",
                image: "/UGCImages/indochina/extra/doiSuthep.jpg"
            }
        ],
        localFood: [
            {
                name: "Pho",
                description: "Vietnamese noodle soup with beef or chicken, herbs, and aromatic broth",
                image: "/UGCImages/indochina/cuisine/pho.jpg",
                where: "Street stalls in Hanoi"
            },
            {
                name: "Amok",
                description: "Cambodian curry traditionally made with fish, coconut milk and kroeung paste, steamed in banana leaves",
                image: "/UGCImages/indochina/cuisine/amok.jpg",
                where: "Restaurants in Siem Reap"
            },
            {
                name: "Laap",
                description: "Laotian minced meat salad with herbs, spices, and lime juice, often served with sticky rice",
                image: "/UGCImages/indochina/cuisine/laap.jpg",
                where: "Local eateries in Luang Prabang"
            },
            {
                name: "Pad Thai",
                description: "Thai stir-fried rice noodles with eggs, tofu, bean sprouts, peanuts, and lime",
                image: "/UGCImages/indochina/cuisine/padThai.jpg",
                where: "Street food markets in Bangkok"
            },
        ],
        culture: [
            {
                title: "Buddhist Traditions",
                description: "Experience the deep spiritual traditions across Indochina, from almsgiving in Luang Prabang to temple visits in Thailand",
                image: "/UGCImages/indochina/culture/buddhism.jpg"
            },
            {
                title: "Traditional Arts",
                description: "Discover diverse artistic expressions including Cambodian Apsara dance, Vietnamese water puppetry, and Thai crafts",
                image: "/UGCImages/indochina/culture/arts.jpg"
            },
            {
                title: "Rural Life",
                description: "Glimpse traditional agricultural practices and village life that have remained unchanged for generations",
                image: "/UGCImages/indochina/culture/ruralLife.jpg"
            },
            {
                title: "Ancient Architecture",
                description: "Marvel at the diverse architectural styles from Khmer temples to French colonial buildings and traditional wooden houses",
                image: "/UGCImages/indochina/culture/architecture.jpg"
            },
            {
                title: "Floating Markets",
                description: "Experience the vibrant commerce and daily life on the waterways of Thailand and Vietnam",
                image: "/UGCImages/indochina/culture/floatingMarkets.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Angkor Wat temple complex exploration",
                "Ha Long Bay overnight cruise",
                "Almsgiving ceremony in Luang Prabang",
                "Floating markets of Thailand",
                "Mekong Delta boat journey"
            ],
            bestTimeToVisit: "November to February (Dry Season)",
            cuisine: [
                "Vietnamese pho and banh mi",
                "Cambodian amok and lok lak",
                "Laotian sticky rice and laap",
                "Thai curries and noodle dishes"
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
                type: "Private AC Vehicle & Domestic Flights",
                features: [
                    "Professional driver",
                    "Comfortable seating",
                    "Air conditioning",
                    "Tourist permit",
                    "Domestic flights between countries"
                ]
            },
            visaInfo: {
                requirement: "Multiple visas required",
                duration: "Varies by country",
                cost: "USD 30-40 per country",
                documents: [
                    "Valid passport (minimum 6 months)",
                    "Return flight tickets",
                    "Hotel booking confirmation",
                    "Passport photos",
                    "Visa application forms"
                ]
            }
        },
        departureDates: [
            { date: "7, 14, 21, 28 Mar 2025" },
            { date: "18, 25 Apr 2025" },
            { date: "2, 9, 16, 23, 30 May 2025" },
            { date: "6, 13, 20, 27 Jun 2025" }
        ]
    },
}; 