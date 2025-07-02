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

export interface DepartureDate {
    date: string;
    availability?: string;
    price?: number;
}

export interface DepartureCity {
    city: string;
    price: number;
}

export interface rajasthanPackage {
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
    departureDates?: DepartureDate[];
    departureCities?: DepartureCity[];
}

export const rajasthanPackages: Record<string, rajasthanPackage> = {
    "rajasthan-5d4n-package": {
        id: "rajasthan-5d4n-package",
        packageName: "Royal Rajasthan - 5D4N Package",
        days: 5,
        nights: 4,
        amount: 33000,
        dateStart: "3, 7, 11, 15, 19, 23, 27, 31 July 2025",
        dateEnd: "",
        description: "Experience the royal heritage of Rajasthan with this comprehensive 5-day tour covering majestic palaces, desert adventures, and vibrant culture. Perfect for families, couples, and culture enthusiasts seeking an authentic Rajasthani experience.",
        groupDetails: {
            pax: "1",
            rooms: "1",
            arrivalDate: "3, 7, 11, 15, 19, 23, 27, 31 July 2025",
            duration: "5 days / 4 nights",
            costBasis: "Per Person on double sharing basis"
        },
        hotelDetails: [
            {
                city: "Jaipur",
                hotel: "3 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Jodhpur",
                hotel: "3 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Jaisalmer",
                hotel: "3 Star Hotel",
                roomType: "Standard Room"
            },
            {
                city: "Udaipur",
                hotel: "3 Star Hotel",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Explore the Pink City of Jaipur with Amber Fort and City Palace",
            "Visit the Blue City of Jodhpur and magnificent Mehrangarh Fort",
            "Experience Thar Desert with camel safari and desert camping in Jaisalmer",
            "Discover the City of Lakes - Udaipur with Lake Pichola boat ride",
            "Visit iconic landmarks like Hawa Mahal, Jal Mahal, and Saheliyon Ki Bari",
            "Experience authentic Rajasthani culture, music, and dance performances"
        ],
        inclusions: [
            "4 Breakfast + 4 Dinner",
            "All sightseeing on private basis with AC vehicle",
            "3 Star hotel accommodation",
        ],
        exclusions: [
            "International/Domestic airfare",
            "Lunch (except at desert camp)",
            "Personal expenses and shopping",
            "Entry fees to monuments and museums",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Jaipur – The Pink City + Local Sightseeing",
                description: `Upon arrival in Jaipur, the Pink City of India, you will be received and transferred to your hotel. After check-in and a short rest, begin your sightseeing with a visit to the serene Birla Mandir followed by a drive past the beautiful Albert Hall Museum. In the evening, explore the vibrant local markets of Jaipur such as Bapu Bazaar or Johari Bazaar. Optionally, you can visit Chokhi Dhani, a traditional Rajasthani village-style resort that offers authentic cuisine and folk entertainment. Return to your hotel for an overnight stay.`,
                image: "/UGCImages/rajasthan/rajasthan/1.png"
            },
            {
                day: 2,
                title: "Jaipur Full Day Sightseeing",
                description: `After breakfast, proceed for a full-day tour of Jaipur. Start with the majestic Amber Fort, where you can enjoy an elephant ride or jeep ride up to the fort. On your way back, stop at Jal Mahal for photos. Next, visit the City Palace, a blend of Rajasthani and Mughal architecture, followed by the Jantar Mantar, a UNESCO World Heritage site known for its astronomical instruments. Lastly, stop for a photo at the iconic Hawa Mahal, or Palace of Winds. Spend the evening at leisure or exploring local handicrafts and textiles before returning to the hotel.`,
                image: "/UGCImages/rajasthan/rajasthan/2.png"
            },
            {
                day: 3,
                title: "Jaipur to Udaipur via Ajmer & Pushkar (Approx. 7–8 hrs)",
                description: `Check out after breakfast and begin your journey towards Udaipur, the City of Lakes. En route, visit the sacred city of Ajmer to seek blessings at the Ajmer Sharif Dargah, and then continue to Pushkar to visit the famous Brahma Temple and the holy Pushkar Lake. After the sightseeing, continue your drive to Udaipur. On arrival, check-in to your hotel and relax. Overnight stay in Udaipur.`,
                image: "/UGCImages/rajasthan/rajasthan/3.png"
            },
            {
                day: 4,
                title: "Udaipur Local Sightseeing",
                description: `Begin your day with a visit to the grand City Palace, offering stunning views of Lake Pichola. Next, visit the Jagdish Temple and the beautiful Saheliyon Ki Bari (Garden of the Maidens). Explore the Vintage Car Museum and take a leisurely boat ride on Lake Pichola in the evening to enjoy views of the Lake Palace and Jag Mandir. You can also walk along the Fateh Sagar Lake promenade. Return to your hotel for an overnight stay.`,
                image: "/UGCImages/rajasthan/rajasthan/4.png"
            },
            {
                day: 5,
                title: "Udaipur Departure",
                description: `After breakfast, check out from the hotel. If time permits, you can visit the local market or enjoy a café breakfast overlooking the lake. Later, you will be transferred to Udaipur Airport or Railway Station for your onward journey with wonderful memories of Rajasthan's royal heritage.`,
                image: "/UGCImages/rajasthan/rajasthan/5.png"
            },
        ],
        images: [
            "/UGCImages/rajasthan/rajasthan/6.png",
            "/UGCImages/rajasthan/rajasthan/7.png",
            "/UGCImages/rajasthan/rajasthan/8.png",
            "/UGCImages/rajasthan/rajasthan/9.png",
            "/UGCImages/rajasthan/rajasthan/10.png",
        ],
        experiences: [
            {
                title: "Camel Safari",
                image: "/UGCImages/rajasthan/vertical/1.png"
            },
            {
                title: "Palace Tours",
                image: "/UGCImages/rajasthan/vertical/2.png"
            },
            {
                title: "Cultural Shows",
                image: "/UGCImages/rajasthan/vertical/3.png"
            },
            {
                title: "Desert Camping",
                image: "/UGCImages/rajasthan/vertical/4.png"
            }
        ],
        additionalInfo: {
            highlights: [
                "Magnificent forts and palaces of Rajasthan",
                "Camel safari in Thar Desert",
                "Cultural performances and folk music",
                "Beautiful havelis and architecture",
                "Boat ride on Lake Pichola",
                "Desert camping under starlit sky"
            ],
            bestTimeToVisit: "October to March - Pleasant weather perfect for sightseeing",
            cuisine: [
                "Dal Baati Churma",
                "Laal Maas (Red Meat Curry)",
                "Gatte Ki Sabzi",
                "Rajasthani Thali",
                "Ker Sangri",
                "Ghevar and Malpua"
            ],
            accommodation: {
                type: "4 Star Heritage Hotels & Desert Camp",
                amenities: [
                    "AC Rooms",
                    "Complimentary WiFi",
                    "Multi-cuisine Restaurant",
                    "Room Service",
                    "Travel Desk",
                    "Cultural Performances"
                ]
            },
            transportation: {
                type: "AC Sedan/SUV",
                features: [
                    "Experienced Driver",
                    "Fuel Included",
                    "Toll & Parking",
                    "Climate Control",
                    "GPS Enabled",
                    "24/7 Support"
                ]
            },
            visaInfo: {
                requirement: "Indian Domestic Travel",
                duration: "Not Required",
                cost: "Not Applicable",
                documents: [
                    "Valid Photo ID",
                    "Address Proof",
                    "Travel Voucher"
                ]
            }
        },
        sightseeingSpots: [
            {
                name: "Amber Fort, Jaipur",
                description: "Magnificent fort complex with stunning architecture and elephant rides",
                image: "/UGCImages/rajasthan/sight/1.png"
            },
            {
                name: "Mehrangarh Fort, Jodhpur",
                description: "One of the largest forts in India with panoramic city views",
                image: "/UGCImages/rajasthan/sight/2.png"
            },
            {
                name: "Jaisalmer Fort",
                description: "Living fort made of golden sandstone in the heart of Thar Desert",
                image: "/UGCImages/rajasthan/sight/3.png"
            },
            {
                name: "City Palace, Udaipur",
                description: "Magnificent palace complex overlooking Lake Pichola",
                image: "/UGCImages/rajasthan/sight/4.png"
            },
            {
                name: "Hawa Mahal, Jaipur",
                description: "Iconic Palace of Winds with unique honeycomb architecture",
                image: "/UGCImages/rajasthan/sight/5.png"
            },
            {
                name: "Sam Sand Dunes",
                description: "Perfect spot for camel safari and desert camping experience",
                image: "/UGCImages/rajasthan/sight/6.png"
            }
        ],
        localFood: [
            {
                name: "Dal Baati Churma",
                description: "Traditional Rajasthani dish with lentils, wheat balls, and sweet crumbs",
                image: "/UGCImages/rajasthan/food/1.png",
                where: "Local Rajasthani restaurants"
            },
            {
                name: "Laal Maas",
                description: "Spicy red meat curry, a royal delicacy of Rajasthan",
                image: "/UGCImages/rajasthan/food/2.png",
                where: "Heritage hotels and local eateries"
            },
            {
                name: "Rajasthani Thali",
                description: "Complete meal with variety of curries, bread, rice, and sweets",
                image: "/UGCImages/rajasthan/food/3.png",
                where: "Traditional Rajasthani restaurants"
            },
            {
                name: "Ghevar",
                description: "Traditional Rajasthani sweet dish, especially popular during festivals",
                image: "/UGCImages/rajasthan/food/4.png",
                where: "Local sweet shops and markets"
            }
        ],
        culture: [
            {
                title: "Royal Heritage",
                description: "Magnificent palaces and forts showcasing the royal legacy of Rajputana",
                image: "/UGCImages/rajasthan/exp/1.png"
            },
            {
                title: "Folk Music & Dance",
                description: "Vibrant performances of Kalbeliya, Ghoomar, and traditional folk music",
                image: "/UGCImages/rajasthan/exp/2.png"
            },
            {
                title: "Handicrafts",
                description: "Exquisite textiles, jewelry, pottery, and artwork representing local craftsmanship",
                image: "/UGCImages/rajasthan/exp/3.png"
            },
            {
                title: "Desert Life",
                description: "Traditional desert communities and their unique lifestyle in Thar Desert",
                image: "/UGCImages/rajasthan/exp/4.png"
            }
        ],
        departureDates: [
            { date: "3, 7, 11, 15, 19, 23, 27, 31 July 2025", availability: "Available", price: 32000 },
            { date: "3, 7, 11, 15, 19, 23, 27, 31 August 2025", availability: "Available", price: 32000 },
        ],
        departureCities: [
            {
                city: "Delhi",
                price: 32000
            },
            {
                city: "Mumbai",
                price: 35000
            },
        ]
    },
}; 