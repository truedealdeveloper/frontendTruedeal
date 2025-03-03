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
}

export const vietnamPackages: Record<string, vietnamPackage> = {
    vietnamFixedDeparture: {
        id: "vietnam-fixed-departure",
        packageName: "vietnam Fixed Departure Package",
        days: 7,
        nights: 6,
        amount: 55999,
        dateStart: "11 May 2025",
        dateEnd: "17 May 2025",
        description: "Experience the ultimate vietnam adventure with our comprehensive 7-day tour covering Ubud, Kintamani, and Ubud. From pristine beaches to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "11 May 2025",
            duration: "6N7D vietnam Fixed Departure",
            costBasis: "Cost Based On Double Sharing"
        },
        hotelDetails: [
            {
                city: "Ubud",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Kintamani",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Ubud",
                hotel: "4 Star Premium Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in vietnam",
            "Day 2: Water Sport – Uluwatu Temple with Kecak Dance",
            "Day 3: Nusa Penida Island Tour",
            "Day 4: Ulundanu – Git Git Waterfall – Handara Gate",
            "Day 5: Inter Hotel Transfer – Kintamani & Ubud Village Tour – Monkey Forest – Tegenungan Waterfall",
            "Day 6: vietnam Swing – Ubud Palace – Ubud Market Shopping Tour",
            "Day 7: Departure"
        ],
        inclusions: [
            "5 Nights Hotel Accommodation (Standard Category)",
            "Daily Shuttle Service to and from attractions",
            "Daily Breakfast at the Hotel",
            "Guided city tour and evening activities",
            "Local Transportation",
            "All entrance tickets as per itinerary",
            "Water Sport Activities",
            "Nusa Penida Tour",
            "vietnam Swing Experience",
            "Professional English-speaking guide"
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
                title: "Arrival in vietnam",
                description: "Upon arrival at Ngurah Rai Airport, meet and greet with our representative. Transfer to the hotel for check-in. Lunch & Dinner in an Indian restaurant. Overnight stay at the hotel."
            },
            {
                day: 2,
                title: "Water Sport – Uluwatu Temple with Kecak Dance",
                description: "Breakfast at the hotel. Enjoy watersport activities including 1X Round Banana Boat, 1X Round Jetski, 1X Round Parasailing Adventure. Lunch in an Indian restaurant. Later, visit Uluwatu Temple and witness the Kecak Dance, followed by dinner at an Indian restaurant."
            },
            {
                day: 3,
                title: "Nusa Penida Island Tour",
                description: "Breakfast at the hotel. Pick-up at 7 AM for transfer to Sanur Jetty. Speedboat transfer to Nusa Penida Island. Tour includes visits to Kelingking Beach, Broken Beach, Angel Billabong. Local lunch at a restaurant. Return to the hotel and later pick-up for dinner at an Indian restaurant."
            },
            {
                day: 4,
                title: "Ulundanu – Git Git Waterfall – Handara Gate",
                description: "Breakfast at the hotel. Visit Ulundanu Temple & Bratan Lake, the most iconic temple in vietnam. Visit Git Git Waterfall followed by lunch at an Indian restaurant. Later, visit Handara Gate followed by dinner at an Indian restaurant."
            },
            {
                day: 5,
                title: "Kintamani & Ubud Village Tour",
                description: "Breakfast at the hotel & checkout. Proceed for Kintamani – Ubud Village Tour, including visits to Celuk & Mas Silver and Gold Smith Village, Batik Factory, Tegalalang Rice Terrace, Kintamani Viewing Point. Visit Coffee Plantation, Monkey Forest, & Tegenungan Waterfall."
            },
            {
                day: 6,
                title: "vietnam Swing – Ubud Palace",
                description: "Breakfast at the villa. Proceed for vietnam Swing Pioneer Package including multiple swing experiences. Lunch at an Indian restaurant, followed by visits to Ubud Palace and Ubud Market for shopping. Dinner at an Indian restaurant."
            },
            {
                day: 7,
                title: "Departure",
                description: "Floating breakfast at the villa. Pickup and transfers to the airport for the return flight."
            }
        ],
        images: [
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/6.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/2.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/1.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/3.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/4.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/5.webp",
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
        }
    },
    vietnamHoneymoon: {
        id: "vietnam-honeymoon",
        packageName: "vietnam Honeymoon Package",
        days: 6,
        nights: 5,
        amount: 26000,
        dateStart: "01 March 2025",
        dateEnd: "31 March 2025",
        description: "Experience the ultimate vietnam adventure with our comprehensive 6-day tour covering Ubud, Kintamani, and Ubud. From pristine beaches to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "01 March 2025",
            duration: "5N6D vietnam Honeymoon",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Kuta",
                hotel: "Bliss Surfer Kuta 3 Star Hotel",
                roomType: "Standard Room with Balcony"
            },
            {
                city: "Ubud",
                hotel: "Ladera Villas, Ubud (Pool Villas)",
                roomType: "Standard Room with Private Pool"
            },
        ],
        tourSummary: [
            "Day 1: Arrival in vietnam",
            "Day 2: Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
            "Day 3: Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits)",
            "Day 4: ATV / Quad Biking -- Double Sharing - 90 minutes || + vietnam Jungle Swing || Unlimited Swings + Nest + COMPLIMENTARY Local Lunch @ Swing ",
            "Day 5: Kintamani + Coffee Plantation + Ubud Palace & Art Colonies + Tegenungan Water fall + Tegalalang Rice Terrace",
            "Day 6: Check Out & Airport Drop / Departure from vietnam",
        ],
        inclusions: [
            "vietnam Hotel to Harbour Transfers (Private Vehicle)",
            "Harbour to vietnam Hotel Transfers (private Vehicle)",
            "Return Fast Boat Transfer from Main-land vietnam (Sharing boat)",
            "Private / Charter Car for tour at Nusa Penida",
            "03 Beaches - Viewing Point Tour (Kelingking Bay, Angel Billabong & Broken Beach - All 03 Places you will get to see from the viewing point only, as Going Down to the beach will take more than 02 hours at one location only )  - You will get  20 - 30 Minutes stay at each location, due to Limited amount of time",
            "01 Beach Tour -- Bubu beach -- you will get to visit the beach and you can also enjoy swimming on this beautiful beach",
            "Snorkelling @ Harbour (If time permits). -- For COMPLIMENTARY Snorkelling, please connect with the staff at the harbour.",
            "The Retribution Fees (Compulsory Donation), for Nusa Penida for IDR 25000 / adult & IDR 15000 / child",
            "ATV / Quad Biking -- Double Sharing - 90 minutes || + vietnam Jungle Swing || Unlimited Swings + Nest + COMPLIMENTARY Local Lunch @ Swing",
            "Kintamani + Coffee Plantation + Ubud Palace & Art Colonies + Tegenungan Water fall + Tegalalang Rice Terrace",
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
                title: "Arrival in vietnam",
                description: `After arrival at vietnam International Airport, our driver will pick the guest from the airport, and drop them to there hotel, for check in at the hotel / villa.`
            },
            {
                day: 2,
                title: "Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
                description: `Pick up from the hotel lobby at 0700 - 0800 hrs, depending on your hotel location. Kindly cross check the pick up time with the driver one day prior please

Firstly we will take you to The Handara Gate, a famous landmark in vietnam.

It is known for its traditional vietnamnese architecture and picturesque setting, often surrounded by lush greenery and mountains. The gate is similar like Lempuyang , but less crowded, and it is a popular spot for photography, representing the cultural and natural beauty of vietnam. It features a split gate design, typical in vietnamnese temples and palaces, symbolizing the cosmic mountain that separates the earthly realm from the spiritual world. The gate is part of the Handara Golf & Resort vietnam, situated in the highlands of Bedugul, and serves as an iconic entrance to this scenic area.

Followed by Ulun danu Temple, which is world renowned for its scenic beauty.

This temple is located on the shores of Lake Baratan, there it is also known as floating Temple. Its situated in Bedugul Highlands of vietnam. The cool climate and scenic surroundings make it a popular destination among tourists.

There is an optional boating activity at the location of Ulun Danu, which can be done on direct payment basis. Boating on Lake Bratan allows visitors to enjoy stunning views of the temple and the surrounding mountains

Followed by Tanah Lot with a picturesque location and stunning ocean views, is especially renowned for its sunset views. Many visitors come to witness the sun setting behind the temple, creating a beautiful silhouette against the evening sky.

In the evening, after the tour is finished, we will continue to Tanah Lot, where you will be able to enjoy the beautiful Sunset by the sea.

After the tour is finished, we will drop you back to the hotel for good rest.`
            },
            {
                day: 3,
                title: "Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits)",
                description: `Pick up at 0600 - 0700 hrs, in the morning depending on your hotel location.
We will take you to Harbour, for boarding a Sharing Boat to Nusa Penida Island .
In Nusa Penida, our tour driver, will provide the full day tour including Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach sight seeing's. `
            },
            {
                day: 4,
                title: "ATV / Quad Biking -- Double Sharing - 90 minutes || + vietnam Jungle Swing || Unlimited Swings + Nest + COMPLIMENTARY Local Lunch @ Swing ",
                description: `This ATV adventure will take you to the most authentic parts of the islands, through the daily live of the view of the rice field, through the daily live of the community in the most exciting way.
Discover places where tradition ways of living still the same as before.`
            },
            {
                day: 5,
                title: "Kintamani + Coffee Plantation + Ubud Palace & Art Colonies + Tegenungan Water fall + Tegalalang Rice Terrace",
                description: `Pick up at 0800 - 0900 hrs from the hotel's lobby.

Today we will cover Kintamani (Viewing of Lake Batur & Matur Batur from View Point ) 

Coffee Plantation, known for different type of coffee tasting, and spice plantations.

Ubud Art Colonies is a  excellent place to find a variety of Art goods, including Paintings, Wood Artifacts, local handicrafts, souvenirs

Tegalallang Rice Terrace has the landscape featuring lush green rice paddies along the photogenic landscapes in vietnam

Later will will continue to Tegenungan Waterfall, known for the natural beauty of the area.`
            },
            {
                day: 6,
                title: "Check Out & Airport Drop / Departure from vietnam ",
                description: `Check out from the hotel maximum by 1200 hrs or as per the hotel policy.

Depending on your flight timings, You will be transferred from Hotel to vietnam International Airport, for your flight back to your home / Next Destination.`
            },
        ],
        images: [
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/4.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/1.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/2.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/3.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/5.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/6.webp"
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
                "Private pool villa experience",
                "Romantic sunset dinner",
                "Couple spa treatment",
                "Private beach access",
                "Customized tours"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Candlelight dinners",
                "Floating breakfast",
                "Local delicacies",
                "International cuisine"
            ],
            accommodation: {
                type: "Luxury Pool Villas & Hotels",
                amenities: [
                    "Private pool",
                    "Butler service",
                    "Couples spa",
                    "Ocean view options",
                    "Premium amenities"
                ]
            },
            transportation: {
                type: "Private Luxury Vehicle",
                features: [
                    "Professional driver",
                    "Luxury seating",
                    "Air conditioning",
                    "On-call service"
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
        }
    },
    vietnamDeluxe: {
        id: "vietnam-deluxe",
        packageName: "vietnam Deluxe Package",
        days: 7,
        nights: 6,
        amount: 36000,
        dateStart: "25 March 2025",
        dateEnd: "31 March 2025",
        description: "Experience the ultimate vietnam luxury with our comprehensive 7-day tour combining premium hotels, water sports, cultural visits, and adventure activities. Perfect blend of relaxation and excitement with stays at Swiss Belhotel Tuban and Fullmoon Villa Ubud.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "25 March 2025",
            duration: "6N7D vietnam Deluxe",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Kuta",
                hotel: "Swiss Belhotel Tuban",
                roomType: "Deluxe Room (No Balcony)"
            },
            {
                city: "Ubud",
                hotel: "Fullmoon Villa",
                roomType: "One Bedroom Pool Villa"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in vietnam",
            "Day 2: Water Sports Activities & Uluwatu Sunset Tour",
            "Day 3: Nusa Penida West Tour",
            "Day 4: Handara Gate, Ulun Danu & Tanah Lot Sunset Tour",
            "Day 5: ATV Adventure & White Water Rafting",
            "Day 6: Kintamani Tour & vietnam Jungle Swing Experience",
            "Day 7: Departure"
        ],
        inclusions: [
            "4-star hotel accommodation",
            "Daily breakfast",
            "Water sports package (Banana Boat, Parasailing, Jet Ski)",
            "Nusa Penida tour with snorkeling",
            "ATV/Quad biking experience",
            "White water rafting adventure",
            "vietnam Jungle Swing unlimited access",
            "All entrance tickets as per itinerary",
            "Private AC vehicle with driver",
            "Professional English-speaking guide",
            "Complimentary lunches as mentioned in itinerary"
        ],
        exclusions: [
            "International flights",
            "Compulsory Christmas Eve Dinner (USD 19 pp)",
            "Compulsory New Year Eve Dinner (USD 25 pp)",
            "Personal expenses",
            "Optional activities",
            "Travel insurance"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in vietnam",
                description: "Upon arrival at vietnam International Airport, meet our representative and transfer to hotel for check-in. Note: Maximum waiting time is 2 hours after flight arrival."
            },
            {
                day: 2,
                title: "Water Sports & Uluwatu Sunset Tour",
                description: "Morning water sports activities including Banana Boat (5 mins), Jet Ski (5 mins), and Parasailing (3 mins fly time). Visit to Padang Padang Beach followed by Uluwatu Temple sunset tour."
            },
            {
                day: 3,
                title: "Nusa Penida West Tour",
                description: "Full-day private tour of Nusa Penida including visits to Kelingking Beach, Angel Billabong, Broken Bay, and Bubu Beach. Complimentary snorkeling if time permits."
            },
            {
                day: 4,
                title: "Cultural Tour",
                description: "Visit to Handara Gate, Ulun Danu Temple at Lake Bratan, and sunset viewing at iconic Tanah Lot Temple."
            },
            {
                day: 5,
                title: "Adventure Day",
                description: "90-minute ATV/Quad biking experience (double sharing) followed by white water rafting adventure in Ubud. Complimentary local lunch included."
            },
            {
                day: 6,
                title: "Kintamani & Swing Experience",
                description: "Visit Kintamani volcano viewpoint, coffee plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, and enjoy unlimited access to vietnam Jungle Swing with various photo opportunities."
            },
            {
                day: 7,
                title: "Departure",
                description: "Check-out by 12:00 PM and transfer to vietnam International Airport for departure."
            }
        ],
        images: [
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/1.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/2.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/3.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/4.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/5.webp",
            "/UGCImages/vietnam/vietnam DELIGHT PACKAGE 2/HORIZONTAL/6.webp"
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
                "Premium hotel accommodations",
                "Water sports package",
                "Private Nusa Penida tour",
                "ATV and rafting adventure",
                "Unlimited jungle swing access"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Daily breakfast included",
                "Complimentary local lunches",
                "Traditional vietnamnese dishes",
                "International cuisine options"
            ],
            accommodation: {
                type: "4-Star Hotels & Luxury Villas",
                amenities: [
                    "Pool access",
                    "Daily breakfast",
                    "Room service",
                    "Free Wi-Fi",
                    "Premium amenities"
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
        }
    },
    vietnamGiliT: {
        id: "vietnam-gili-t",
        packageName: "vietnam Gili Trawangan Package",
        days: 9,
        nights: 8,
        amount: 48000,
        dateStart: "1 March 2025",
        dateEnd: "31 March 2025",
        description: "Experience the ultimate vietnam luxury with our comprehensive 9-day tour combining premium hotels, water sports, cultural visits, and adventure activities. Perfect blend of relaxation and excitement with stays at Swiss Belhotel Tuban and Fullmoon Villa Ubud.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "25 March 2025",
            duration: "8N9D vietnam Gili T Package",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Kuta",
                hotel: "Kuta Beach Club, Kuta 4 Star Hotel",
                roomType: "Deluxe Room"
            },
            {
                city: "Gili Trawangan",
                hotel: "Ombak Sunset, 4 Star Hotel",
                roomType: "Deluxe Terrace"
            }
        ],
        tourSummary: [
            "Day 1: Arrival to vietnam Airport. Pick up from Airport & drop at hotel for check in at hotel / Villa",
            "Day 2: Sunset @ Pirate Theme - Phinisi Dinner Cruise",
            "Day 3: Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits) ",
            "Day 4: Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
            "Day 5: vietnam to Gili Trawangan || Fast Boat + vietnam Land Transfers || Morning Schedule",
            "Day 6: Day free for Leisure",
            "Day 7: Gili Trawangan to vietnam || Fast Boat + vietnam Land Transfers || Mid-day Schedule",
            "Day 8: Kintamani + Coffee Plantation + Tegenungan Waterfall + Tegalalang Rice Terrace + vietnam Jungle Swing || Unlimited Swings + Nests || COMPLIMENTARY Local Lunch",
            "Day 9: Departure"
        ],
        inclusions: [
            "4-star hotel accommodation",
            "Daily breakfast",
            "Water sports package (Banana Boat, Parasailing, Jet Ski)",
            "Nusa Penida tour with snorkeling",
            "ATV/Quad biking experience",
            "White water rafting adventure",
            "vietnam Jungle Swing unlimited access",
            "All entrance tickets as per itinerary",
            "Private AC vehicle with driver",
            "Professional English-speaking guide",
            "Complimentary lunches as mentioned in itinerary",
            "03 Beaches - Viewing Point Tour (Kelingking Bay, Angel Billabong & Broken Beach - All 03 Places you will get to see from the viewing point only, as Going Down to the beach will take more than 02 hours at one location only )  - You will get  20 - 30 Minutes stay at each location, due to Limited amount of time",
            "01 Beach Tour -- Bubu beach -- you will get to visit the beach and you can also enjoy swimming on this beautiful beach",
            "Snorkelling @ Beach Club at Harbour (If time permits). -- For COMPLIMENTARY Snorkelling, please connect with the staff at the harbour.",
            "The Retribution Fees (Compulsory Donation), for Nusa Penida for IDR 25000 / adult & IDR 15000 / child"
        ],
        exclusions: [
            "International flights",
            "Personal expenses",
            "Optional activities",
            "Travel insurance"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in vietnam",
                description: `After arrival at vietnam International Airport, our driver will pick the guest from the airport, and drop them to there hotel, for check in at the hotel / villa.`,
            },
            {
                day: 2,
                title: "Sunset @ Pirate Theme - Phinisi Dinner Cruise",
                description: `Pick up at 1400 hrs - 1600 hrs, depending on hotel location. Kindly check with the driver for exact pick up timings, one day prior to your tour.

At Pirate theme based Dinner Cruise spend your evening on the sea marveling the beautiful sunset while savoring international buffet dinner sailing aboard Indonesian traditional sailing vessel with pirate-themed atmosphere.

Wear complimentary Pirate theme based accessories and play games with crews. 

Savor the fresh night breeze on the top deck as the night flows by while getting entertained by Live DJ, Live Music, Games with Door Prizes, exotic Cabaret Dance, and breathtaking Fire Dance. 

Inclusions at DInner Cruise

Welcome Drink
Pirate theme based Accessories Souvenir
International Buffet Dinner
Live Music Entertainment
Fire Dance
Variety of Games
DJ performance`
            },
            {
                day: 3,
                title: "Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits)",
                description: `Pick up at 0600 - 0700 hrs, in the morning depending on your hotel location.
We will take you to Harbour, for boarding a Sharing Boat to Nusa Penida Island .
In Nusa Penida, our tour driver, will provide the full day tour including Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach sight seeing's. `
            },
            {
                day: 4,
                title: "Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
                description: `Pick up from the hotel lobby at 0700 - 0800 hrs, depending on your hotel location. Kindly cross check the pick up time with the driver one day prior please

Firstly we will take you to The Handara Gate, a famous landmark in vietnam.

It is known for its traditional vietnamnese architecture and picturesque setting, often surrounded by lush greenery and mountains. The gate is similar like Lempuyang , but less crowded, and it is a popular spot for photography, representing the cultural and natural beauty of vietnam. It features a split gate design, typical in vietnamnese temples and palaces, symbolizing the cosmic mountain that separates the earthly realm from the spiritual world. The gate is part of the Handara Golf & Resort vietnam, situated in the highlands of Bedugul, and serves as an iconic entrance to this scenic area.

Followed by Ulun danu Temple, which is world renowned for its scenic beauty.

This temple is located on the shores of Lake Baratan, there it is also known as floating Temple. Its situated in Bedugul Highlands of vietnam. The cool climate and scenic surroundings make it a popular destination among tourists.

There is an optional boating activity at the location of Ulun Danu, which can be done on direct payment basis. Boating on Lake Bratan allows visitors to enjoy stunning views of the temple and the surrounding mountains

Followed by Tanah Lot with a picturesque location and stunning ocean views, is especially renowned for its sunset views. Many visitors come to witness the sun setting behind the temple, creating a beautiful silhouette against the evening sky.

In the evening, after the tour is finished, we will continue to Tanah Lot, where you will be able to enjoy the beautiful Sunset by the sea.

After the tour is finished, we will drop you back to the hotel for good rest.`
            },
            {
                day: 5,
                title: "vietnam to Gili Trawangan || Fast Boat + vietnam Land Transfers || Morning Schedule",
                description: `Pick up from the hotel Lobby at 0530 - 0600 hrs, depending on the hotel location
We will continue to Padang Bai Harbour. It will take around 90 - 120 minutes to reach the location.

The reporting time for the boat is 0800 hrs.

The boat will leave the harbour around 0900 hrs. It will take around 2 hours for the boat to reach at Gili Trawangan Harbour.`
            },
            {
                day: 6,
                title: "Day free for Leisure",
                description: `Day free for leisure. You can enjoy the hotel/ Villa amenities, also you can opt for optional tours in vietnam, after discussion with our vietnam team, or your driver`
            },
            {
                day: 7,
                title: "Gili Trawangan to vietnam || Fast Boat + vietnam Land Transfers || Mid-day Schedule",
                description: `The Fast boat time from Gili to vietnam, booked by us, is for 1100 hrs schedule.

The Reporting Time / Last Check-in Time for the same is at 1000 hrs, at Gili Harbour.

The ticket for the return transfer, is provided by the fast boat company, during your onward transfers (vietnam to Gili). So please remember to collect the same, along with onwards ticket.

The boat will leave the harbour around 1100 hrs. It will take around 02 hours for the boat to reach at Padang Bai Harbour.`
            },
            {
                day: 8,
                title: "Kintamani + Coffee Plantation + Tegenungan Waterfall + Tegalalang Rice Terrace + vietnam Jungle Swing || Unlimited Swings + Nests || COMPLIMENTARY Local Lunch",
                description: `Pick up at 0800 - 0900 hrs from the hotel's lobby.

Today we will cover Kintamani (Viewing of Lake Batur & Matur Batur from View Point ) 

Coffee Plantation, known for different type of coffee tasting, and spice plantations.

Tegalallang Rice Terrace has the landscape featuring lush green rice paddies along the photogenic landscapes in vietnam

Tegenungan Waterfall, known for the natural beauty of the area.

vietnam Jungle Swing:  Unlimited Swings - visitors can enjoy swings without a time limit and visitors can play as much swing as they like....

07 kinds of swing, consisting of 3 adult swings, 1 couple swing, 1 children's swing, 1 swing bed, and 1 swing circle. 
Besides swing, there is also 5 kinds of nests/photo places. consisting of 01 circle nest, 02 bird nest, 01 lovely nest, 01 chicken nest.  
There is also beautiful stone and 1 gate (heaven gate),
And Local Lunch and drinks vietnamnese coffee, tea and water.`
            },
            {
                day: 9,
                title: "Departure",
                description: "Check-out by 12:00 PM and transfer to vietnam International Airport for departure."
            }
        ],
        images: [
            "/UGCImages/vietnam/vietnam LEMBONGAN PACKAGE/horizontal/1.webp",
            "/UGCImages/vietnam/vietnam LEMBONGAN PACKAGE/horizontal/2.webp",
            "/UGCImages/vietnam/vietnam LEMBONGAN PACKAGE/horizontal/3.webp",
            "/UGCImages/vietnam/vietnam LEMBONGAN PACKAGE/horizontal/4.webp",
            "/UGCImages/vietnam/vietnam LEMBONGAN PACKAGE/horizontal/5.webp",
            
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
                "Premium hotel accommodations",
                "Water sports package",
                "Private Nusa Penida tour",
                "ATV and rafting adventure",
                "Unlimited jungle swing access"
            ],
            bestTimeToVisit: "April to October (Dry Season)",
            cuisine: [
                "Daily breakfast included",
                "Complimentary local lunches",
                "Traditional vietnamnese dishes",
                "International cuisine options"
            ],
            accommodation: {
                type: "4-Star Hotels & Luxury Villas",
                amenities: [
                    "Pool access",
                    "Daily breakfast",
                    "Room service",
                    "Free Wi-Fi",
                    "Premium amenities"
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
        }
    },
}; 