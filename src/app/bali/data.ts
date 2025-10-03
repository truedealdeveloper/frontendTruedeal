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
    image?: string;
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

export interface Experience {
    title: string;
    image: string;
}

export interface BaliPackage {
    id: string;
    packageName: string;
    days: number;
    nights: number;
    amount: number;
    dateStart: string;
    dateEnd: string;
    // If present, this package is a fixed departure WITH flights
    flights?: {
        marketingAirline: string;
        fromCity: string;
        baggage: string;
        notes?: string;
        sectors: {
            from: string;
            to: string;
            flight: string;
            depart: string;
            arrive: string;
        }[];
        fixedDepartureDates: string;
    };
    description: string;
    groupDetails: GroupDetails;
    hotelDetails: HotelDetail[];
    tourSummary: string[];
    inclusions: string[];
    exclusions: string[];
    itinerary: ItineraryDay[];
    images: string[];
    mobileImages?: string[];
    experiences?: Experience[];
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
    departureCities?: {
        city: string;
        price: number;
    }[];
}

export const baliPackages: Record<string, BaliPackage> = {
    baliFixedDepartureWithFlights: {
        id: "bali-fixed-departure-with-flights",
        packageName: "Magical Bali Holiday",
        days: 7,
        nights: 6,
        amount: 57000,
        dateStart: "October: 1,4,8,13,14; November: 3,8,11,15,18,22,26,28; December: 1,4,5,6,9,11",
        dateEnd: "",
        flights: {
            marketingAirline: "VietJet (Ex AMD)",
            fromCity: "Ahmedabad",
            baggage: "20kg + 7kg",
            notes: "Fixed departure seats subject to availability.",
            fixedDepartureDates: "Oct: 1,4,8,13,14 | Nov: 3,8,11,15,18,22,26,28 | Dec: 1,4,5,6,9,11",
            sectors: [
                { from: "AMD", to: "DPS", flight: "", depart: "Varies by date", arrive: "Varies by date" },
            ]
        },
        description: "Today’s Exclusive Deal: Bali 6N with VietJet Ex AMD fixed departures package including flights, hotels, transfers and sightseeing as per itinerary.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin/Double Sharing",
            arrivalDate: "As per fixed departure dates",
            duration: "6N7D",
            costBasis: "Price based on 02-03 pax (avanza vehicle)"
        },
        hotelDetails: [
            { city: "Kuta", hotel: "Bliss Surfer / Eden Kuta / Similar", roomType: "Deluxe/Standard" },
            { city: "Ubud", hotel: "Ashoka Tree Ubud / Champ Lung Sari / Evitel Ubud or Similar", roomType: "Deluxe Room" }
        ],
        tourSummary: [
            "Day 1: Arrival at Bali, check-in",
            "Day 2: Watersports activity (Banana Boat, Jet Ski)",
            "Day 3: Trans Studio Fly Over Indonesia",
            "Day 4: Full day at leisure or hotel",
            "Day 5: Hotel transfer to Ubud with Bali Swing, Ubud Market",
            "Day 6: Tegenungan Waterfall, Tegalalang Rice Fields",
            "Day 7: Floating Breakfast, day at leisure & departure"
        ],
        inclusions: [
            "Return economy airfare with VietJet as per group blocks",
            "20kg check-in + 7kg hand baggage",
            "6 nights accommodation (Kuta + Ubud)",
            "Daily breakfast",
            "Return airport transfers",
            "Watersports: Banana Boat + Jet Ski (1 round each)",
            "Bali Swing experience",
            "Transfers and tours on private vehicle as per itinerary"
        ],
        exclusions: [
            "Visa on arrival fees",
            "Meals not mentioned",
            "Personal expenses, tips",
            "Travel insurance",
            "GST & TCS",
            "Any items not mentioned in inclusions"
        ],
        itinerary: [
            { day: 1, title: "Arrival at Bali, hotel check-in", description: "Arrive and transfer to hotel. Overnight at hotel." },
            { day: 2, title: "Watersports Activity", description: "Enjoy Banana Boat and Jet Ski (1 round each)." },
            { day: 3, title: "Trans Studio Fly Over Indonesia", description: "Experience the immersive Fly Over Indonesia show." },
            { day: 4, title: "Day at Leisure", description: "Free day for optional activities or relax at hotel." },
            { day: 5, title: "Transfer to Ubud with Swing & Market", description: "Hotel transfer to Ubud with Bali Swing and Ubud Market visit." },
            { day: 6, title: "Tegenungan Waterfall & Tegalalang Rice Fields", description: "Sightseeing with photo stops." },
            { day: 7, title: "Floating Breakfast & Departure", description: "Floating breakfast experience. Check out and transfer to airport." }
        ],
        images: [
            "/UGCImages/bali/1.png"
        ],
        mobileImages: [
            "/UGCImages/bali/1.png"
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    baliFixedDeparture: {
        id: "bali-fixed-departure",
        packageName: "Bali Festive Escape",
        days: 7,
        nights: 6,
        amount: 75999,
        dateStart: "1,8,15,22,29 October",
        dateEnd: "",
        flights: {
            marketingAirline: "",
            fromCity: "New Delhi & Mumbai",
            baggage: "20kg + 7kg",
            notes: "Indicative timings; final will be shared at ticketing.",
            fixedDepartureDates: "Sep: 1,8,15,22,29",
            sectors: [
                { from: "DEL/BOM", to: "Bali(DPS)", flight: "", depart: "Varies by date", arrive: "Varies by date" },
            ]
        },
        description: "Experience the ultimate Bali adventure with our comprehensive 7-day tour covering Ubud, Kintamani, and Ubud. From pristine beaches to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in October 2025",
            duration: "6N7D Bali Fixed Departure",
            costBasis: "Cost Based On Double Sharing"
        },
        departureCities: [
            {
                city: "New Delhi",
                price: 75999
            },
            {
                city: "Ahmedabad",
                price: 78999
            },
            {
                city: "Mumbai",
                price: 79999
            }
        ],
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
            },
            {
                city: "Kuta",
                hotel: "4 Star Cross Vibe Paasha Atelier Bali Kuta",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Bali",
            "Day 2: Full Day Ubud Village, Tegalalang Rice Terraces with Bali Swing and Teggunangan Waterfalls",
            "Day 3: Water Sports Half Day - Half Day Tanah Lot",
            "Day 4: Nusa Penida Island Day Trip",
            "Day 5: Half Day Ubud Palace and Ubud Market Tour",
            "Day 6: Bali - Day at leisure",
            "Day 7: Departure from Bali"
        ],
        inclusions: [
            "6 Nights accommodation in 4-star hotels (3N Ubud, 2N Kintamani, 1N Ubud)",
            "Private Transfer from Airport to Hotel - Kuta, Legian, Tuban Kuta",
            "Daily buffet breakfast at hotels",
            "Full Day Ubud Village + Tegalalang Rice Terraces + Teggunangan Waterfalls + Bali Swing (Aloha) - Private",
            "Water Sports - Banana Boat Ride + Jet Ski + Parasailing Adventure (Private Transfers)",
            "Half Day Tanah Lot Tour - Private",
            "Full Day Nusa Penida Island Trip with Local Lunch - (West Tour) Private Transfers to the Pier (Shared Fastboat)",
            "Full Day Ubud Palace and Ubud Market Tour - Private",
            "Private Transfer from Hotel to Airport - Kuta, Legian, Tuban Kuta"
        ],
        exclusions: [
            "Visa fees",
            "Meals not mentioned in itinerary",
            "Tips and personal expenses",
            "Optional activities entrance fees",
            "Travel insurance",
            "GST & TCS charges",
            "Guaranteed early check in or late check out. This is completely at the discretion of the hotel and we can only put in a request for the same.",
            "Meals other than that what is mentioned in itinerary.",
            "Any expenses of personal nature",
            "Any services not mentioned in the inclusions list"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bali",
                description: "Upon your arrival at Ngurah Rai Airport in Denpasar, Bali, our representative will meet and welcome you. You will then be taken to the hotel for your refreshment",

            },
            {
                day: 2,
                title: "Full Day Ubud Village, Tegalalang Rice Terraces with Bali Swing and Teggunangan Waterfalls",
                description: `Proceed for a full day tour of Ubud. Visit Celuk the center of gold and silver works,
Mas the center of woodcarvings, Ubud the center of Balinese paintings. In the
surrounding area, numerous villages are scattered across a landscape of rice
terraces, lush valleys and forests. At the iconic Tegalalang Rice Terraces, we can
photograph the emerald rice fields that cascade down the mountain sides. Next stop,
get your cameras and phones ready for some highly Instagram-worthy pictures at
Aloha swing at Tegalalang, with spectacular rice paddies view, agriculture activities,
coffee Luwak plantation and shop. It is one of the hottest Instagram spots in Bali!
You can experience incredible views and an exciting adventure at Aloha Swing. As we
walk down the many stairs to the temple, we can enjoy the views of the terraced rice
fields. We will end the tour with a visit to Teggunagan Waterfalls. (Breakfast)`,
            },
            {
                day: 3,
                title: "Water Sports Half Day - Half Day Tanah Lot",
                description: `Get ready for an unforgettable day on the water with our exciting Water Sports
package! Experience the thrill of a Banana Boat Ride, where you'll bounce across the
waves with friends and family. Feel the adrenaline rush as you take control of a Jet
Ski, speeding through the ocean and enjoying the wind in your hair. Cap off your
adventure with a breathtaking Parasailing Adventure, soaring high above the
coastline and taking in stunning panoramic views. With private transfers included,
your journey to adventure is smooth and hassle-free. Whether you're seeking
excitement or unforgettable memories, this package has it all! Visit a spectacular
Tanah Lot Temple which stands proudly on the rock inside the ocean. Shopping time
is available on this visit for any kind of Balinese handicraft products good for
souvenirs and or for collection. (Breakfast)`,
            },
            {
                day: 4,
                title: "Nusa Penida Island Day Trip",
                description: `Experience the magic of Nusa Penida Island on our Full Day West Penida Tour. Begin
your day with convenient private transfers to the pier, where you'll board a shared
fastboat to this enchanting destination. Explore the island's breathtaking landscapes,
including the iconic Broken Beach and the majestic Kelingking Cliff. Swim in crystalclear waters and relax on pristine beaches, immersing yourself in the natural beauty
that surrounds you. Indulge in a delicious local lunch, savoring the unique flavors of
the island. With knowledgeable guides ensuring a seamless experience, this tour
offers the perfect mix of adventure and leisure in one of Bali's hidden gems If you
decide to take snorkelling (at extra cost), you will not be able to go for Crystal bay
because of lack of time Local Lunch is Served and options and quantity is limited.
(Breakfast & Lunch)`,
            },
            {
                day: 5,
                title: "Half Day Ubud Palace and Ubud Market Tour",
                description: `Visit Puri Saren Ubud Palace, the home of the local royal family. It stands in the heart
of the town and is built in the style of a traditional family compound. Take a walk
through the nearby Ubud Market among the colourful stalls of wood carvings, textiles
and souvenirs. After lunch, continue to Puri Lukisan Museum the oldest art museum
in Bali. Here you can admire an array of contemporary paintings and wood carvings
from prominent Balinese artists. (Breakfast)`,
            },
            {
                day: 6,
                title: "Bali - Day at leisure",
                description: "Today you are free to explore on your own. (Breakfast). Explore the beautiful city of Ubud at your own pace. You can visit the Ubud Palace, the Ubud Market, or take a walk through the nearby Ubud Market among the colourful stalls of wood carvings, textiles and souvenirs. (Breakfast)",
            },
            {
                day: 7,
                title: "Departure from Bali",
                description: "After a hearty breakfast you are transferred in time to the airport to board your flight.(Breakfast)",
            }
        ],
        images: [
            "/UGCImages/bali/2.png",
        ],
        mobileImages: [
            "/UGCImages/bali/2.png",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    baliGroupFeb2026: {
        id: "bali-group-feb-2026",
        packageName: "Bali Group Package",
        days: 7,
        nights: 6,
        amount: 44500,
        dateStart: "16 to 22 February 2026",
        dateEnd: "",
        description: "Experience the ultimate Bali group tour with luxurious accommodations, cultural visits, adventure activities, and delectable Indian cuisine. Perfect blend of relaxation, sightseeing, and memorable experiences across Bali's most beautiful destinations.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "16 February 2026",
            duration: "6N7D",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Bali",
                hotel: "Ramayana Suites & Resort / Fairfield by Marriott Bali Legian",
                roomType: "Standard Room"
            },
            {
                city: "Ubud",
                hotel: "Furama Xclusive Resorts & Villas Ubud",
                roomType: "Premier Room"
            },
            {
                city: "Bali",
                hotel: "Dwaraka The Royal Villa",
                roomType: "One Bedroom Pool Villa"
            }
        ],
        tourSummary: [
            "Day 1: Arrival - Lunch at Indian Restaurant - Uluwatu Temple with Kecak Dance - Dinner at Indian Restaurant",
            "Day 2: Water Sport - Lunch at Indian Restaurant - DJ Night at Restaurant with Indian Dinner & Free Flow of Liquor",
            "Day 3: Nusa Penida Island Tour incl. Local Lunch - Dinner at Indian Restaurant",
            "Day 4: Inter Hotel Transfers - Tegenungan Waterfall - Lunch at Indian Restaurant - Bali Swing - Dinner at Indian Restaurant",
            "Day 5: Mount Batur Sunrise Jeep Safari with Hot Spring - Lunch at Indian Restaurant - Ubud Village Tour - Dinner at Indian Restaurant",
            "Day 6: 02 Hours Tandem ATV Ride - Lunch at Indian Restaurant - Shopping Time at Ubud Market - Dinner at Indian Restaurant",
            "Day 7: Departure"
        ],
        inclusions: [
            "03 Night's Accommodation at Ramayana Suites & Resort / Fairfield by Marriott Bali Legian",
            "02 Night's Accommodation at Furama Xclusive Resorts & Villas Ubud (Premier Room)",
            "01 Night Accommodation at Dwaraka The Royal Villa (One Bedroom Pool Villa)",
            "All meals at Indian restaurants as per itinerary",
            "Uluwatu Temple visit with Kecak Dance performance",
            "Water sports activities (Banana Boat, Jetski, Parasailing)",
            "DJ Night with Indian dinner and free flow liquor",
            "Nusa Penida Island tour with local lunch",
            "Tegenungan Waterfall visit",
            "Bali Swing Pioneer Package (2 Single Swing, 1X Romantic Swing, 1X Bed Swing, 1 Sky Bed, 1X Bird Nest, 1X Sky Nest)",
            "Mount Batur Sunrise Jeep Safari with Hot Spring",
            "Ubud Village Tour (Celuk & Mas Silver and Gold Smith Village, Batik Factory, Ubud Art Market)",
            "02 Hours Tandem ATV ride",
            "Floating breakfast at villa",
            "All transfers and transportation",
            "Professional guide services"
        ],
        exclusions: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Personal expenses and shopping",
            "Tips and gratuities",
            "Optional activities not mentioned in itinerary",
            "Alcoholic beverages (except during DJ night)",
            "Airport taxes and departure fees"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival - Lunch - Uluwatu Temple with Kecak Dance - Dinner",
                description: "Upon arrival at Ngurah Rai Airport, meet and greet at the airport with our representative then transfer to the hotel for check in. Evening Pick up for Uluwatu Temple with Kecak Dance. Overnight stay at the Resort.",
                image: "/UGCImages/bali/extra/Uluwatu.jpg"
            },
            {
                day: 2,
                title: "Water Sports - DJ Night with Indian Dinner & Free Flow Liquor",
                description: "Breakfast at the hotel. Watersport with 1X Round Banana Boat, 1X Round Jetski, 1X Round Parasailing Adventure. Later will proceed for DJ Night followed by Indian Dinner. Overnight stay at the Resort.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/2.webp"
            },
            {
                day: 3,
                title: "Nusa Penida Island Tour with Local Lunch",
                description: "Breakfast at the hotel. Pick up at the hotel at 7.am then proceed to Sanur Jetty for transfers to Nusa Penida Island by Speedboat. Nusa Penida Island Tour with visiting Kelingking Beach, Broken Beach, Angel Billabong, Crystal Bay, Local lunch at restaurant. Overnight stay at the Resort.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/3.webp"
            },
            {
                day: 4,
                title: "Inter Hotel Transfer - Tegenungan Waterfall - Bali Swing",
                description: "Breakfast at the hotel. Check out & proceed to Tegenungan Waterfall & Bali Swing Pioneer Package which include 2 Single Swing, 1X Romantic Swing, 1X Bed Swing, 1 Sky Bed, 1X Bird Nest, 1X Sky Nest. Overnight stay at the Resort.",
                image: "/UGCImages/bali/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                day: 5,
                title: "Mount Batur Sunrise Jeep Safari - Hot Spring - Ubud Village Tour",
                description: "Breakfast Box From Villa. Pick up at the hotel and transfer to Mount Batur Sunrise Jeep Safari with Hot Spring. After that Ubud Village Tour with visiting Celuk & Mas Silver and Gold Smith Village, Batik Factory, Ubud Art Market. Overnight stay at the Resort.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/5.webp"
            },
            {
                day: 6,
                title: "Tandem ATV Ride - Shopping at Ubud Market",
                description: "Floating Breakfast at the hotel. Pick up For 02 ATV Hours Tandem ATV later will spend time at Shopping. Overnight stay at the Resort.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/5.webp"
            },
            {
                day: 7,
                title: "Departure",
                description: "Breakfast at the hotel. Check out and transfer to airport for departure.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/6.webp"
            }
        ],
        images: [
            "/UGCImages/bali/1.png"
        ],
        mobileImages: [
            "/UGCImages/bali/1.png"
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/bali/cuisine/Nasi Goreng.jpg",
                where: "Indian Restaurant"
            },
            {
                name: "Indian Cuisine",
                description: "Authentic Indian dishes served at selected Indian restaurants throughout the tour",
                image: "/UGCImages/bali/cuisine/Nasi Goreng.jpg",
                where: "Various Indian Restaurants"
            }
        ],
        culture: [
            {
                title: "Kecak Dance",
                description: "Traditional Balinese dance performance at Uluwatu Temple featuring fire dance and chanting",
                image: "/UGCImages/bali/culture/dance.jpg"
            },
            {
                title: "Uluwatu Temple",
                description: "Ancient sea temple perched on a cliff offering stunning sunset views",
                image: "/UGCImages/bali/culture/baliTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Visit to Celuk & Mas villages famous for silver, gold smithing and wood carving",
                image: "/UGCImages/bali/culture/craft.jpg"
            },
            {
                title: "Ubud Art Market",
                description: "Local market showcasing traditional Balinese handicrafts, textiles, and souvenirs",
                image: "/UGCImages/bali/culture/market.png"
            }
        ],
        additionalInfo: undefined
    },
    baliHoneymoon: {
        id: "bali-honeymoon",
        packageName: "Bali Honeymoon Package",
        days: 6,
        nights: 5,
        amount: 26000,
        dateStart: "5,12,19,26,30 October",
        dateEnd: "",
        description: "Experience the ultimate Bali adventure with our comprehensive 6-day tour covering Ubud, Kintamani, and Ubud. From pristine beaches to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in October 2025",
            duration: "5N6D Bali Honeymoon",
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
            "Day 1: Arrival in Bali",
            "Day 2: Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
            "Day 3: Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits)",
            "Day 4: ATV / Quad Biking -- Double Sharing - 90 minutes || + Bali Jungle Swing || Unlimited Swings + Nest + COMPLIMENTARY Local Lunch @ Swing ",
            "Day 5: Kintamani + Coffee Plantation + Ubud Palace & Art Colonies + Tegenungan Water fall + Tegalalang Rice Terrace",
            "Day 6: Check Out & Airport Drop / Departure from Bali",
        ],
        inclusions: [
            "Bali Hotel to Harbour Transfers (Private Vehicle)",
            "Harbour to Bali Hotel Transfers (private Vehicle)",
            "Return Fast Boat Transfer from Main-land Bali (Sharing boat)",
            "Private / Charter Car for tour at Nusa Penida",
            "03 Beaches - Viewing Point Tour (Kelingking Bay, Angel Billabong & Broken Beach - All 03 Places you will get to see from the viewing point only, as Going Down to the beach will take more than 02 hours at one location only )  - You will get  20 - 30 Minutes stay at each location, due to Limited amount of time",
            "01 Beach Tour -- Bubu beach -- you will get to visit the beach and you can also enjoy swimming on this beautiful beach",
            "Snorkelling @ Harbour (If time permits). -- For COMPLIMENTARY Snorkelling, please connect with the staff at the harbour.",
            "The Retribution Fees (Compulsory Donation), for Nusa Penida for IDR 25000 / adult & IDR 15000 / child",
            "ATV / Quad Biking -- Double Sharing - 90 minutes || + Bali Jungle Swing || Unlimited Swings + Nest + COMPLIMENTARY Local Lunch @ Swing",
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
                title: "Arrival in Bali",
                description: `After arrival at Bali International Airport, our driver will pick the guest from the airport, and drop them to there hotel, for check in at the hotel / villa.`,
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/4.webp"
            },
            {
                day: 2,
                title: "Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
                description: `Pick up from the hotel lobby at 0700 - 0800 hrs, depending on your hotel location. Kindly cross check the pick up time with the driver one day prior please

Firstly we will take you to The Handara Gate, a famous landmark in Bali.

It is known for its traditional Balinese architecture and picturesque setting, often surrounded by lush greenery and mountains. The gate is similar like Lempuyang , but less crowded, and it is a popular spot for photography, representing the cultural and natural beauty of Bali. It features a split gate design, typical in Balinese temples and palaces, symbolizing the cosmic mountain that separates the earthly realm from the spiritual world. The gate is part of the Handara Golf & Resort Bali, situated in the highlands of Bedugul, and serves as an iconic entrance to this scenic area.

Followed by Ulun danu Temple, which is world renowned for its scenic beauty.

This temple is located on the shores of Lake Baratan, there it is also known as floating Temple. Its situated in Bedugul Highlands of Bali. The cool climate and scenic surroundings make it a popular destination among tourists.

There is an optional boating activity at the location of Ulun Danu, which can be done on direct payment basis. Boating on Lake Bratan allows visitors to enjoy stunning views of the temple and the surrounding mountains

Followed by Tanah Lot with a picturesque location and stunning ocean views, is especially renowned for its sunset views. Many visitors come to witness the sun setting behind the temple, creating a beautiful silhouette against the evening sky.

In the evening, after the tour is finished, we will continue to Tanah Lot, where you will be able to enjoy the beautiful Sunset by the sea.

After the tour is finished, we will drop you back to the hotel for good rest.`,
                image: "/UGCImages/bali/extra/Tanah Lot Temple.jpg"
            },
            {
                day: 3,
                title: "Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits)",
                description: `Pick up at 0600 - 0700 hrs, in the morning depending on your hotel location.
We will take you to Harbour, for boarding a Sharing Boat to Nusa Penida Island .
In Nusa Penida, our tour driver, will provide the full day tour including Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach sight seeing's. `,
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/2.webp"
            },
            {
                day: 4,
                title: "ATV / Quad Biking -- Double Sharing - 90 minutes || + Bali Jungle Swing || Unlimited Swings + Nest + COMPLIMENTARY Local Lunch @ Swing ",
                description: `This ATV adventure will take you to the most authentic parts of the islands, through the daily live of the view of the rice field, through the daily live of the community in the most exciting way.
Discover places where tradition ways of living still the same as before.`,
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/3.webp"
            },
            {
                day: 5,
                title: "Kintamani + Coffee Plantation + Ubud Palace & Art Colonies + Tegenungan Water fall + Tegalalang Rice Terrace",
                description: `Pick up at 0800 - 0900 hrs from the hotel's lobby.

Today we will cover Kintamani (Viewing of Lake Batur & Matur Batur from View Point ) 

Coffee Plantation, known for different type of coffee tasting, and spice plantations.

Ubud Art Colonies is a  excellent place to find a variety of Art goods, including Paintings, Wood Artifacts, local handicrafts, souvenirs

Tegalallang Rice Terrace has the landscape featuring lush green rice paddies along the photogenic landscapes in Bali

Later will will continue to Tegenungan Waterfall, known for the natural beauty of the area.`,
                image: "/UGCImages/bali/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                day: 6,
                title: "Check Out & Airport Drop / Departure from Bali ",
                description: `Check out from the hotel maximum by 1200 hrs or as per the hotel policy.

Depending on your flight timings, You will be transferred from Hotel to Bali International Airport, for your flight back to your home / Next Destination.`,
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/6.webp"
            },
        ],
        images: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-desktop/4.png",
        ],
        mobileImages: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-mobile/2.png",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/bali/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional Balinese-style roasted pig served with rice and local spices",
                image: "/UGCImages/bali/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with Balinese spices, served with plecing kangkung",
                image: "/UGCImages/bali/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy Balinese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/bali/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/bali/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/bali/culture/baliTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/bali/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major Balinese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/bali/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/bali/culture/market.png"
            }
        ],
        additionalInfo: undefined
    },
    baliDeluxe: {
        id: "bali-deluxe",
        packageName: "Bali Deluxe Package",
        days: 7,
        nights: 6,
        amount: 36000,
        dateStart: "5,12,19,26,30 October",
        dateEnd: "",
        description: "Experience the ultimate Bali luxury with our comprehensive 7-day tour combining premium hotels, water sports, cultural visits, and adventure activities. Perfect blend of relaxation and excitement with stays at Swiss Belhotel Tuban and Fullmoon Villa Ubud.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in October 2025",
            duration: "6N7D Bali Deluxe",
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
            "Day 1: Arrival in Bali",
            "Day 2: Water Sports Activities & Uluwatu Sunset Tour",
            "Day 3: Nusa Penida West Tour",
            "Day 4: Handara Gate, Ulun Danu & Tanah Lot Sunset Tour",
            "Day 5: ATV Adventure & White Water Rafting",
            "Day 6: Kintamani Tour & Bali Jungle Swing Experience",
            "Day 7: Departure"
        ],
        inclusions: [
            "4-star hotel accommodation",
            "Daily breakfast",
            "Water sports package (Banana Boat, Parasailing, Jet Ski)",
            "Nusa Penida tour with snorkeling",
            "ATV/Quad biking experience",
            "White water rafting adventure",
            "Bali Jungle Swing unlimited access",
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
                title: "Arrival in Bali",
                description: "Upon arrival at Bali International Airport, meet our representative and transfer to hotel for check-in. Note: Maximum waiting time is 2 hours after flight arrival.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/1.webp"
            },
            {
                day: 2,
                title: "Water Sports & Uluwatu Sunset Tour",
                description: "Morning water sports activities including Banana Boat (5 mins), Jet Ski (5 mins), and Parasailing (3 mins fly time). Visit to Padang Padang Beach followed by Uluwatu Temple sunset tour.",
                image: "/UGCImages/bali/extra/Uluwatu.jpg"
            },
            {
                day: 3,
                title: "Nusa Penida West Tour",
                description: "Full-day private tour of Nusa Penida including visits to Kelingking Beach, Angel Billabong, Broken Bay, and Bubu Beach. Complimentary snorkeling if time permits.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/3.webp"
            },
            {
                day: 4,
                title: "Cultural Tour",
                description: "Visit to Handara Gate, Ulun Danu Temple at Lake Bratan, and sunset viewing at iconic Tanah Lot Temple.",
                image: "/UGCImages/bali/extra/Tanah Lot Temple.jpg"
            },
            {
                day: 5,
                title: "Adventure Day",
                description: "90-minute ATV/Quad biking experience (double sharing) followed by white water rafting adventure in Ubud. Complimentary local lunch included.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/5.webp"
            },
            {
                day: 6,
                title: "Kintamani & Swing Experience",
                description: "Visit Kintamani volcano viewpoint, coffee plantation, Tegenungan Waterfall, Tegalalang Rice Terrace, and enjoy unlimited access to Bali Jungle Swing with various photo opportunities.",
                image: "/UGCImages/bali/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                day: 7,
                title: "Departure",
                description: "Check-out by 12:00 PM and transfer to Bali International Airport for departure.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/6.webp"
            }
        ],
        images: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-desktop/9.png",
        ],
        mobileImages: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-mobile/3.png",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/bali/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional Balinese-style roasted pig served with rice and local spices",
                image: "/UGCImages/bali/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with Balinese spices, served with plecing kangkung",
                image: "/UGCImages/bali/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy Balinese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/bali/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/bali/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/bali/culture/baliTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/bali/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major Balinese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/bali/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/bali/culture/market.png"
            }
        ],
        additionalInfo: undefined
    },
    baliGiliT: {
        id: "bali-gili-t",
        packageName: "Bali Family Package",
        days: 9,
        nights: 8,
        amount: 48000,
        dateStart: "5,12,19,26,30 October",
        dateEnd: "",
        description: "Experience the ultimate Bali luxury with our comprehensive 9-day tour combining premium hotels, water sports, cultural visits, and adventure activities. Perfect blend of relaxation and excitement with stays at Swiss Belhotel Tuban and Fullmoon Villa Ubud.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Multiple dates in October 2025",
            duration: "8N9D Bali Gili T Package",
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
            "Day 1: Arrival to Bali Airport. Pick up from Airport & drop at hotel for check in at hotel / Villa",
            "Day 2: Sunset @ Pirate Theme - Phinisi Dinner Cruise",
            "Day 3: Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits) ",
            "Day 4: Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
            "Day 5: Bali to Gili Trawangan || Fast Boat + Bali Land Transfers || Morning Schedule",
            "Day 6: Day free for Leisure",
            "Day 7: Gili Trawangan to Bali || Fast Boat + Bali Land Transfers || Mid-day Schedule",
            "Day 8: Kintamani + Coffee Plantation + Tegenungan Waterfall + Tegalalang Rice Terrace + Bali Jungle Swing || Unlimited Swings + Nests || COMPLIMENTARY Local Lunch",
            "Day 9: Departure"
        ],
        inclusions: [
            "4-star hotel accommodation",
            "Daily breakfast",
            "Water sports package (Banana Boat, Parasailing, Jet Ski)",
            "Nusa Penida tour with snorkeling",
            "ATV/Quad biking experience",
            "White water rafting adventure",
            "Bali Jungle Swing unlimited access",
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
                title: "Arrival in Bali",
                description: `After arrival at Bali International Airport, our driver will pick the guest from the airport, and drop them to there hotel, for check in at the hotel / villa.`,
                image: "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/1.webp"
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
DJ performance`,
                image: "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/2.webp"
            },
            {
                day: 3,
                title: "Nusa Penida West tour (PRIVATE ) - 4 beaches - Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach + Complimentary Snorkelling (If time permits)",
                description: `Pick up at 0600 - 0700 hrs, in the morning depending on your hotel location.
We will take you to Harbour, for boarding a Sharing Boat to Nusa Penida Island .
In Nusa Penida, our tour driver, will provide the full day tour including Kelingking Beach, Angel Bilabong, Broken Bay, Bubu Beach sight seeing's. `,
                image: "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/3.webp"
            },
            {
                day: 4,
                title: "Handara Gate + Ulun Danu (Bedugul) + Tanah Lot Sunset tour",
                description: `Pick up from the hotel lobby at 0700 - 0800 hrs, depending on your hotel location. Kindly cross check the pick up time with the driver one day prior please

Firstly we will take you to The Handara Gate, a famous landmark in Bali.

It is known for its traditional Balinese architecture and picturesque setting, often surrounded by lush greenery and mountains. The gate is similar like Lempuyang , but less crowded, and it is a popular spot for photography, representing the cultural and natural beauty of Bali. It features a split gate design, typical in Balinese temples and palaces, symbolizing the cosmic mountain that separates the earthly realm from the spiritual world. The gate is part of the Handara Golf & Resort Bali, situated in the highlands of Bedugul, and serves as an iconic entrance to this scenic area.

Followed by Ulun danu Temple, which is world renowned for its scenic beauty.

This temple is located on the shores of Lake Baratan, there it is also known as floating Temple. Its situated in Bedugul Highlands of Bali. The cool climate and scenic surroundings make it a popular destination among tourists.

There is an optional boating activity at the location of Ulun Danu, which can be done on direct payment basis. Boating on Lake Bratan allows visitors to enjoy stunning views of the temple and the surrounding mountains

Followed by Tanah Lot with a picturesque location and stunning ocean views, is especially renowned for its sunset views. Many visitors come to witness the sun setting behind the temple, creating a beautiful silhouette against the evening sky.

In the evening, after the tour is finished, we will continue to Tanah Lot, where you will be able to enjoy the beautiful Sunset by the sea.

After the tour is finished, we will drop you back to the hotel for good rest.`,
                image: "/UGCImages/bali/extra/Tanah Lot Temple.jpg"
            },
            {
                day: 5,
                title: "Bali to Gili Trawangan || Fast Boat + Bali Land Transfers || Morning Schedule",
                description: `Pick up from the hotel Lobby at 0530 - 0600 hrs, depending on the hotel location
We will continue to Padang Bai Harbour. It will take around 90 - 120 minutes to reach the location.

The reporting time for the boat is 0800 hrs.

The boat will leave the harbour around 0900 hrs. It will take around 2 hours for the boat to reach at Gili Trawangan Harbour.`,
                image: "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/4.webp"
            },
            {
                day: 6,
                title: "Day free for Leisure",
                description: `Day free for leisure. You can enjoy the hotel/ Villa amenities, also you can opt for optional tours in Bali, after discussion with our Bali team, or your driver`,
                image: "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/5.webp"
            },
            {
                day: 7,
                title: "Gili Trawangan to Bali || Fast Boat + Bali Land Transfers || Mid-day Schedule",
                description: `The Fast boat time from Gili to Bali, booked by us, is for 1100 hrs schedule.

The Reporting Time / Last Check-in Time for the same is at 1000 hrs, at Gili Harbour.

The ticket for the return transfer, is provided by the fast boat company, during your onward transfers (Bali to Gili). So please remember to collect the same, along with onwards ticket.

The boat will leave the harbour around 1100 hrs. It will take around 02 hours for the boat to reach at Padang Bai Harbour.`,
                image: "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/4.webp"
            },
            {
                day: 8,
                title: "Kintamani + Coffee Plantation + Tegenungan Waterfall + Tegalalang Rice Terrace + Bali Jungle Swing || Unlimited Swings + Nests || COMPLIMENTARY Local Lunch",
                description: `Pick up at 0800 - 0900 hrs from the hotel's lobby.

Today we will cover Kintamani (Viewing of Lake Batur & Matur Batur from View Point ) 

Coffee Plantation, known for different type of coffee tasting, and spice plantations.

Tegalallang Rice Terrace has the landscape featuring lush green rice paddies along the photogenic landscapes in Bali

Tegenungan Waterfall, known for the natural beauty of the area.

Bali Jungle Swing:  Unlimited Swings - visitors can enjoy swings without a time limit and visitors can play as much swing as they like....

07 kinds of swing, consisting of 3 adult swings, 1 couple swing, 1 children's swing, 1 swing bed, and 1 swing circle. 
Besides swing, there is also 5 kinds of nests/photo places. consisting of 01 circle nest, 02 bird nest, 01 lovely nest, 01 chicken nest.  
There is also beautiful stone and 1 gate (heaven gate),
And Local Lunch and drinks Balinese coffee, tea and water.`,
                image: "/UGCImages/bali/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                day: 9,
                title: "Departure",
                description: "Check-out by 12:00 PM and transfer to Bali International Airport for departure.",
                image: "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/1.webp"
            }
        ],
        images: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-desktop/7.png",
        ],
        mobileImages: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/Bali/bali-mobile/4.png",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/bali/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional Balinese-style roasted pig served with rice and local spices",
                image: "/UGCImages/bali/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with Balinese spices, served with plecing kangkung",
                image: "/UGCImages/bali/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy Balinese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/bali/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            },
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/bali/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/bali/culture/baliTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/bali/culture/craft.jpg"
            },
            {
                title: "Galungan Festival",
                description: "Major Balinese holiday celebrating the victory of dharma over adharma, marked by decorated bamboo poles",
                image: "/UGCImages/bali/culture/festival.png"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/bali/culture/market.png"
            }
        ],
        additionalInfo: undefined
    },
    baliDiwaliExBOM: {
        id: "bali-diwali-ex-bom",
        packageName: "Bali Diwali Departure (Ex Mumbai)",
        days: 8,
        nights: 7,
        amount: 69999,
        dateStart: "23 and 25 October 2025",
        dateEnd: "",
        flights: {
            marketingAirline: "Malaysia Airlines",
            fromCity: "Mumbai",
            baggage: "20kg + 7kg",
            notes: "Group fares; timings subject to airline ops.",
            fixedDepartureDates: "Oct: 23,25",
            sectors: [
                { from: "BOM", to: "Bali(DPS)", flight: "", depart: "Varies by date", arrive: "Varies by date" },
            ]
        },
        description: "Special Diwali fixed departure from Mumbai with Malaysia Airlines. Enjoy Kuta and Ubud with water sports, temples, Trans Studio Bali, Kintamani, Ubud market and more.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing (price based on 4 pax)",
            arrivalDate: "23 Oct and 25 Oct 2025",
            duration: "7N8D Diwali Departure",
            costBasis: "Per person on twin sharing (min 4 pax)"
        },
        departureCities: [
            { city: "Mumbai", price: 69999 }
        ],
        hotelDetails: [
            {
                city: "Kuta",
                hotel: "Cross Paasha Kuta / Wina Holiday Kuta or Similar",
                roomType: "Superior Room (Breakfast)"
            },
            {
                city: "Ubud",
                hotel: "Bali Masari Ubud / Bumi Linggah Villas or Similar",
                roomType: "01 Bedroom Pool Villa (Breakfast)"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Bali",
            "Day 2: Water Sports (Banana Boat, Jet Ski, Parasailing) + Uluwatu Temple - Private",
            "Day 3: Ulun Danu Temple (Bedugul) + Tanah Lot Temple - Private",
            "Day 4: Half Day Trans Studio Bali - Fly Over Indonesia (Private Transfers)",
            "Day 5: Day at Leisure",
            "Day 6: Full Day Kintamani Volcano Tour + Ubud Village + Ubud Market + Coffee Plantation + Sidan Swing (Private)",
            "Day 7: Day at Leisure",
            "Day 8: Departure"
        ],
        inclusions: [
            "Garland welcome on arrival",
            "1 x 500 ml water bottle during tours & transfers",
            "Return airport transfers and inter-hotel transfer – Private",
            "Water Sports package: Banana Boat, Jet Ski and Parasailing + Uluwatu Temple – Private (Day 02)",
            "Ulun Danu Batur Temple and Tanah Lot Temple – Private (Day 03)",
            "Half Day Trans Studio Fly Over Indonesia with Private Transfers – (Day 04)",
            "Leisure day – (Day 05)",
            "Full Day Kintamani Volcano Tour and Ubud Village, Ubud Market and Coffee Plantation followed by Sidan Swing with Private Transfers – (Day 06)",
            "Leisure day – (Day 07)"
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
                title: "Arrival in Bali",
                description: "Arrive at Ngurah Rai International Airport, meet our representative and transfer to your hotel for check-in.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/1.webp"
            },
            {
                day: 2,
                title: "Water Sports + Uluwatu Temple",
                description: "Enjoy Banana Boat, Jet Ski and Parasailing with private transfers. Later visit Uluwatu Temple for sunset views.",
                image: "/UGCImages/bali/extra/Uluwatu.jpg"
            },
            {
                day: 3,
                title: "Ulun Danu Temple + Tanah Lot",
                description: "Visit the iconic floating Ulun Danu Temple at Lake Bratan and the picturesque Tanah Lot Temple on a private tour.",
                image: "/UGCImages/bali/extra/Tanah Lot Temple.jpg"
            },
            {
                day: 4,
                title: "Trans Studio Bali – Fly Over Indonesia",
                description: "Half-day visit to Trans Studio Bali to experience the Fly Over Indonesia attraction with private transfers.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/5.webp"
            },
            {
                day: 5,
                title: "Leisure Day",
                description: "Free day to relax or explore on your own.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/5.webp"
            },
            {
                day: 6,
                title: "Kintamani, Ubud Village, Market, Coffee Plantation + Sidan Swing",
                description: "Full day tour covering Kintamani volcano viewpoint, coffee plantation tasting, Ubud Village and Market followed by Sidan Swing photo spots.",
                image: "/UGCImages/bali/extra/Tegalalang Rice Terraces.jpg"
            },
            {
                day: 7,
                title: "Leisure Day",
                description: "Enjoy resort amenities or choose optional activities.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/5.webp"
            },
            {
                day: 8,
                title: "Departure",
                description: "Check out and transfer to the airport for your flight home.",
                image: "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/6.webp"
            }
        ],
        images: [
            "/UGCImages/bali/3.png",
        ],
        mobileImages: [
            "/UGCImages/bali/3.png",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [
            {
                name: "Nasi Goreng",
                description: "Indonesian fried rice with vegetables, chicken or seafood, topped with a fried egg",
                image: "/UGCImages/bali/cuisine/Nasi Goreng.jpg",
                where: "Warung Made, Kuta"
            },
            {
                name: "Babi Guling",
                description: "Traditional Balinese-style roasted pig served with rice and local spices",
                image: "/UGCImages/bali/cuisine/Babi Guling.png",
                where: "Warung Ibu Oka, Ubud"
            },
            {
                name: "Bebek Betutu",
                description: "Slow-cooked duck with Balinese spices, served with plecing kangkung",
                image: "/UGCImages/bali/cuisine/Bebek Betutu.png",
                where: "Bebek Tepi Sawah, Ubud"
            },
            {
                name: "Sambal Matah",
                description: "Raw spicy Balinese relish made with shallots, lemongrass, and chili",
                image: "/UGCImages/bali/cuisine/Sambal Matah.jpg",
                where: "Merah Putih Restaurant, Seminyak"
            }
        ],
        culture: [
            {
                title: "Legong Dance",
                description: "Graceful traditional dance performed by young girls in elaborate costumes, telling stories of ancient kingdoms",
                image: "/UGCImages/bali/culture/dance.jpg"
            },
            {
                title: "Temple Ceremonies",
                description: "Vibrant religious ceremonies with offerings, traditional music, and elaborate decorations",
                image: "/UGCImages/bali/culture/baliTemple.jpg"
            },
            {
                title: "Traditional Crafts",
                description: "Ancient art of wood carving, silver smithing, and batik making passed down through generations",
                image: "/UGCImages/bali/culture/craft.jpg"
            },
            {
                title: "Traditional Markets",
                description: "Bustling local markets selling fresh produce, spices, crafts, and traditional offerings",
                image: "/UGCImages/bali/culture/market.png"
            }
        ],
        additionalInfo: undefined
    },

}; 