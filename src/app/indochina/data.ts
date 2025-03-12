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
        dateStart: "02 March 2025",
        dateEnd: "29 Jun 2025",
        description: "Explore the highlights of Cambodia with our 6-day tour.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
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
            { date: "2, 9, 16, 23, 30 Mar 2025" },
            { date: "20, 27 Apr 2025" },
            { date: "4, 11, 18, 25 May 2025" },
            { date: "1, 8, 15, 22, 29 Jun 2025" },
        ]
    },
}; 