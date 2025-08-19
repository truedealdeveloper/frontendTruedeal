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

export interface thailandPackage {
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
    departureDates?: DepartureDate[];
}

export const thailandPackages: Record<string, thailandPackage> = {
    thailandAdventureTour: {
        id: "thailand-8-days-adventure-tour",
        packageName: "Thailand 8 Days Adventure Tour",
        days: 8,
        nights: 7,
        amount: 75895,
        dateStart: "7,14,21,28 August",
        dateEnd: "",
        description: "Experience the best of Thailand with our meticulously planned 8-day adventure tour. From the pristine beaches of Phuket and Krabi to the vibrant city life of Bangkok, this tour offers a perfect blend of relaxation, adventure, and cultural experiences.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double/Twin Sharing",
            arrivalDate: "10 August 2025",
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
                description: "Meet our airport representative at Phuket Airport. Transfer to hotel. Enjoy Indian buffet lunch. Rest of day at leisure for local exploration or relaxation. Overnight in Phuket.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
            },
            {
                day: 2,
                title: "Phi Phi Island Tour",
                description: "After breakfast, transfer to pier for Phi Phi Islands speedboat tour. Enjoy snorkeling, swimming, and beach time. Indian buffet lunch included. Return to hotel (07:30-07:45 AM pickup, 05:30-06:00 PM drop-off). Overnight in Phuket.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            },
            {
                day: 3,
                title: "Full-Day Adventure Tour in Phuket",
                description: "Action-packed day including cave exploration at Wat Suwan Khuha, 5km river rafting, Thai lunch, ziplining, ATV riding, and waterfall trekking (07:30 AM - 05:30 PM). Overnight in Phuket.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/4.webp"
            },
            {
                day: 4,
                title: "Transfer from Phuket to Krabi",
                description: "Road transfer to Krabi with stops at Wat Chalong Temple. Optional visits to Tiger Kingdom and Elephant Park. Hotel check-in in Krabi. Overnight in Krabi.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/5.webp"
            },
            {
                day: 5,
                title: "Seven Island Tour in Krabi",
                description: "Full-day island hopping tour visiting Tup, Mohr, Chicken, Poda, and Taming Islands. Snorkeling opportunities, dinner at Railay Beach, and bioluminescent plankton viewing. Overnight in Krabi.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/6.webp"
            },
            {
                day: 6,
                title: "Transfer from Krabi to Bangkok with Temple Tour",
                description: "Flight to Bangkok. Temple tour including Wat Traimit and Mini Reclining Buddha Temple. Free evening. Overnight in Bangkok.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/7.webp"
            },
            {
                day: 7,
                title: "Safari World & Marine Park, Bangkok",
                description: "Full day at Safari World and Marine Park enjoying various shows including Sea Lion, Dolphin, and Cowboy stunt shows. Lunch included. Overnight in Bangkok.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp"
            },
            {
                day: 8,
                title: "Departure from Bangkok",
                description: "Breakfast at hotel. Airport transfer for return flight.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp"
            }
        ],
        images: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/4.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/5.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/6.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/7.webp"
        ],
        mobileImages: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
        ],
        sightseeingSpots: [
            {
                name: "Phi Phi Islands",
                description: "Stunning tropical islands with crystal clear waters and pristine beaches",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
            },
            {
                name: "Wat Chalong Temple",
                description: "The most important and revered temple in Phuket",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            },
            {
                name: "Seven Islands of Krabi",
                description: "Beautiful island hopping experience with snorkeling and beach activities",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/4.webp"
            }
        ],
        localFood: [
            {
                name: "Thai Seafood",
                description: "Fresh seafood dishes including grilled fish and prawns",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/5.webp",
                where: "Beachside restaurants"
            },
            {
                name: "Tom Yum Goong",
                description: "Spicy and sour soup with prawns, lemongrass and lime leaves",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/6.webp",
                where: "Local restaurants"
            },
            {
                name: "Pad Thai",
                description: "Thailand's signature stir-fried noodle dish",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/7.webp",
                where: "Street vendors and restaurants"
            }
        ],
        culture: [
            {
                title: "Buddhist Temples",
                description: "Experience the spiritual side of Thailand through temple visits",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp"
            },
            {
                title: "Island Culture",
                description: "Experience the laid-back island lifestyle and local traditions",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp"
            }
        ],
        departureDates: [
            { date: "2025-08-07", availability: "Available" },
            { date: "2025-08-14", availability: "Available" },
            { date: "2025-08-21", availability: "Limited" },
            { date: "2025-08-28", availability: "Available" }
        ]
    },
    thailandDeluxeTour: {
        id: "thailand-11-days-deluxe-tour",
        packageName: "Thailand 11 Days Deluxe Tour",
        days: 11,
        nights: 10,
        amount: 86895,
        dateStart: "7,14,21,28 August",
        dateEnd: "",
        description: "Experience the ultimate Thailand adventure with our comprehensive 11-day tour covering Phuket, Krabi, Pattaya, and Bangkok. From pristine islands to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "6 August 2025",
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
                description: "Upon arrival at Phuket Airport, meet our representative for a warm welcome and a guided transfer to your hotel. Enjoy a delicious Indian lunch at one of Phuket's best Indian restaurants. Complete the check-in formalities and spend the rest of the day at leisure. You can explore the stunning landscapes, try adventure activities, or relax in the comfort of your hotel. Overnight stay in Phuket.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp"
            },
            {
                day: 2,
                title: "Phi Phi Island Tour (07-05-2025)",
                description: "After breakfast, get transferred to the breathtaking Phi Phi Islands via a scenic boat ride. Enjoy the stunning island views and savor lunch at a beachside hotel. Spend time at the secluded beach, where you can go snorkeling, swimming, or simply relax in the sunshine. Return to the hotel in Phuket for an overnight stay. Pick-up: 07:30 - 07:45 AM | Drop-off: 05:30 - 06:00 PM",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp"
            },
            {
                day: 3,
                title: "Full-Day Adventure Tour (08-05-2025)",
                description: "Start your day with a delicious breakfast and prepare for an action-packed adventure in Phuket. Begin with a visit to Wat Suwan Khuha, home to the magnificent Reclining Buddha. Experience the thrill of white-water rafting before enjoying a refreshing lunch break. Continue the adventure with ziplining and an ATV ride, followed by a mini trek through untouched trails leading to a beautiful waterfall. Return to the hotel for an overnight stay.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/10.webp"
            },
            {
                day: 4,
                title: "Phuket to Krabi Transfer (09-05-2025)",
                description: "After breakfast, check out from the hotel and travel to the stunning coastal town of Krabi. Along the way, explore Portuguese-style architecture and vibrant local markets for unique souvenirs. Visit the revered Wat Chalong Temple, followed by optional visits to Tiger Kingdom and an Elephant Trekking Park (tickets not included). Upon arrival in Krabi, check in to your hotel and relax for the evening.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/11.webp"
            },
            {
                day: 5,
                title: "7 Island Tour (10-05-2025)",
                description: "Start your adventure with a pick-up from Krabi and visit the stunning islands of Thailand. Witness the unique sandbar phenomenon at Tup & Mohr Islands, capture the iconic rock formation at Chicken Island, and relax on the white sandy beaches of Poda Island. Snorkel at Taming Island and Puya Bay, and visit Phranang Cave Beach for spectacular sunset views. Enjoy dinner at a restaurant on Railay Beach, followed by a mesmerizing view of bioluminescent plankton.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
            },
            {
                day: 6,
                title: "Krabi to Pattaya via Bangkok (11-05-2025)",
                description: "After breakfast, check out and transfer to Krabi Airport for your flight to Bangkok. Upon arrival, meet our representative and enjoy a comfortable two-hour drive to Pattaya. Check-in at your pre-booked hotel and relax. In the evening, get picked up for the famous Alcazar Cabaret Show, a spectacular artistic performance. Return to the hotel for an overnight stay.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            },
            {
                day: 7,
                title: "Coral Island Tour (12-05-2025)",
                description: "After breakfast, get transferred to the jetty for a speedboat ride to Coral Island, also known as Koh Larn. Enjoy the serene beaches, take a leisurely walk on the white sand, or participate in water activities like parasailing, underwater sea walking, banana boat rides, and jet skiing (available at an extra cost). After a fulfilling day, return to Pattaya for lunch at an Indian restaurant and spend the rest of the day at leisure. Overnight stay in Pattaya.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
            },
            {
                day: 8,
                title: "Pattaya Floating Market & City Tour (13-05-2025)",
                description: "After breakfast, explore Pattaya's attractions, including the Floating Market (entry ticket included), Pattaya Viewpoint, Big Buddha, Gems Gallery, and Tiger Park (ticket extra). After an exciting half-day city tour, return to the hotel for an overnight stay.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            },
            {
                day: 9,
                title: "Pattaya to Bangkok with Temple Tour (14-05-2025)",
                description: "After breakfast, travel back to Bangkok. En route, visit the famous temples of Bangkok, including Wat Traimit (Golden Buddha) and the Mini Reclining Buddha Temple. Upon arrival in Bangkok, check in at your hotel and unwind. Overnight stay in Bangkok.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/4.webp"
            },
            {
                day: 10,
                title: "Safari World & Marine Park (15-05-2025)",
                description: "After breakfast, visit Safari World and Marine Park for a thrilling wildlife experience. Enjoy shows featuring dolphins, sea lions, elephants, birds, and Hollywood-style stunt performances. A delicious Indian lunch is included. Return to the hotel for an overnight stay in Bangkok.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/5.webp"
            },
            {
                day: 11,
                title: "Departure (18-05-2025)",
                description: "After breakfast, check out from the hotel and transfer to the airport for your return journey, marking the end of an unforgettable Thailand adventure.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/6.webp"
            }
        ],
        images: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/10.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/11.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
        ],
        mobileImages: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp"
        ],
        sightseeingSpots: [
            {
                name: "Phi Phi Islands",
                description: "Breathtaking islands with stunning beaches and crystal clear waters",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp"
            },
            {
                name: "Alcazar Cabaret Show",
                description: "Spectacular artistic performance featuring talented performers",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp"
            },
            {
                name: "Coral Island (Koh Larn)",
                description: "Beautiful island with white sandy beaches and water activities",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/10.webp"
            }
        ],
        localFood: [
            {
                name: "Thai Street Food",
                description: "Authentic local street food and delicacies",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/11.webp",
                where: "Local markets and street vendors"
            },
            {
                name: "Fresh Tropical Fruits",
                description: "Mangoes, pineapples, and other exotic tropical fruits",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp",
                where: "Floating markets and fruit vendors"
            }
        ],
        culture: [
            {
                title: "Thai Temple Culture",
                description: "Experience the spiritual and architectural beauty of Thai temples",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            }
        ],
        departureDates: [
            { date: "2025-08-06", availability: "Available" },
            { date: "2025-08-13", availability: "Available" },
            { date: "2025-08-20", availability: "Limited" },
            { date: "2025-08-27", availability: "Available" }
        ]
    },
    thailandSpeedboatTour: {
        id: "thailand-8-days-speedboat-tour",
        packageName: "Thailand 8 Days Speedboat Tour",
        days: 8,
        nights: 7,
        amount: 77895,
        dateStart: "7,14,21,28 August",
        dateEnd: "",
        description: "Experience the ultimate Thailand adventure with our comprehensive 8-day speedboat tour covering Phuket, Krabi, Pattaya, and Bangkok. From pristine islands to cultural landmarks, this tour offers the perfect blend of relaxation, adventure, and urban exploration.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "3 August 2025",
            duration: "7N8D Thailand Speedboat Tour",
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
            "Day 1: Arrival in Phuket (03-05-2025)",
            "Day 2: Phi Phi Island Tour by Speedboat (04-05-2025)",
            "Day 3: Sundowner Romantic Yacht Party (05-05-2025)",
            "Day 4: Phuket to Krabi Transfer | City Tour (06-05-2025)",
            "Day 5: 7 Islands Tour with Bioluminescent Plankton Experience (07-05-2025)",
            "Day 6:  Krabi to Bangkok | Temple Tour (08-05-2025)",
            "Day 7: Safari World & Marine Park with Indian Lunch (09-05-2025)",
            "Day 8: Departure | Return Home with Beautiful Memories (10-05-2025)",
        ],
        inclusions: [
            "Flights: Ex Mumbai round-trip flight (20+7 KG luggage)",
            "Accommodation: 7 nights stay at premium 4-star hotels (3N Phuket, 2N Krabi, 2N Bangkok)",
            "Meals: 7 Buffet Breakfasts at the hotel",
            "Indian Buffet Lunch on arrival day",
            "Indian Buffet Lunch at Phi Phi Island",
            "Thai Veg Dinner during the 7 Islands Tour",
            "Sightseeing & Activities: Phi Phi Island Tour by speedboat (including National Park Fee), 7 Islands Tour by long-tail boat (including National Park Fee), Sundowner Romantic Yacht Party with Johnnie Walker Liquor, snacks & light dinner, Phuket City Tour, Enroute Bangkok 2 Temple Tour (Golden Buddha & Mini Reclining Buddha Temple), Safari World & Marine Park Tour with Indian Lunch",
            "Transfers & Transportation: Airport Transfers & Hotel Transfers in Thailand",
            "Major Transportation by AC VIP Coach/Van",
            "Daily Complimentary Pick-up & Drop Service for Dinner (Fixed Time & Location)",
            "Guides & Assistance: English-speaking Guide throughout the trip",
        ],
        exclusions: [
            "Visa & Travel Insurance",
            "Personal Expenses (Tips, Camera & Entrance Fees)",
            "Meals Not Mentioned in the Itinerary",
            "GST & TCS (Extra Cost)",
            "Optional Activities (Elephant Trekking & Tiger Kingdom Entry Tickets)",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Phuket (06-05-2025)",
                description: "Meet our airport representative upon arrival at Phuket International Airport. Transfer to the 4-star hotel and complete check-in formalities. Enjoy a delicious Indian buffet lunch at one of Phuket's best Indian restaurants. Spend the rest of the day exploring at your leisure. Overnight stay in Phuket.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
            },
            {
                day: 2,
                title: "Phi Phi Island Tour by Speedboat (04-05-2025)",
                description: "Enjoy a buffet breakfast at the hotel. Head for the Phi Phi Island tour by speedboat (Pick-up: 07:30 AM). Visit stunning beaches, enjoy swimming & snorkeling. Relish a beachside Indian buffet lunch. Return to the hotel in the evening (Drop-off: 05:30 - 06:00 PM). Overnight stay in Phuket.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            },
            {
                day: 3,
                title: "Sundowner Romantic Yacht Party (05-05-2025)",
                description: "After breakfast, explore Phuket at leisure. Afternoon: Get ready for an unforgettable Sundowner Romantic Yacht Party. Sail to Coral Island (Koh Hey) on a luxury catamaran yacht. Enjoy Johnnie Walker branded liquor, snacks & fruits. Engage in swimming, sunbathing & fishing. Return to the hotel in the evening (Pick-up: 12:30 PM). Overnight stay in Phuket.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/10.webp"
            },
            {
                day: 4,
                title: "Phuket to Krabi Transfer  (06-05-2025)",
                description: "Enjoy breakfast at the hotel & check out. Drive to Krabi, exploring en route: Portuguese-style buildings, Vibrant local markets, Wat Chalong Temple, Tiger Kingdom (Entry ticket at own cost), Elephant Trekking (Entry ticket at own cost). Arrive in Krabi & check in to your 4-star hotel. Overnight stay in Krabi.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/11.webp"
            },
            {
                day: 5,
                title: "7 Islands Tour with Bioluminescent Plankton Experience (07-05-2025)",
                description: "Have a relaxing breakfast. Begin an exciting 7 Islands Tour (Pick-up: 11:30 AM - 12:30 PM). Visit: Tup & Mohr Island (White sandbanks during low tide), Chicken Island (Iconic rock formation), Poda Island (Stunning white sand beaches), Taming Island (Best snorkeling experience), Puya Bay (Vibrant marine life), Phranang Cave Beach (Famous for sunset views). Enjoy Thai Veg Dinner at Railay Beach. Witness the magical bioluminescent plankton (Sparkling blue water). Overnight stay in Krabi.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp"
            },
            {
                day: 6,
                title: "Krabi to Bangkok (08-05-2025)",
                description: "After breakfast, transfer to Krabi Airport. Fly to Bangkok & meet our representative. Bangkok Temple Tour: Golden Buddha Temple (Wat Traimit), Mini Reclining Buddha Temple. Check in at your 4-star Bangkok hotel. Overnight stay in Bangkok.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp"
            },
            {
                day: 7,
                title: "Safari World & Marine Park with Indian Lunch (09-05-2025)",
                description: "Start the day with breakfast at the hotel. Enjoy a fun-filled day at Safari World & Marine Park. Watch exciting shows: Hollywood Cowboy Stunt Show, Dolphin & Sea Lion Show, Elephant & Bird Show. Relish a delicious Indian lunch. Return to the hotel in the evening. Overnight stay in Bangkok.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
            },
            {
                day: 8,
                title: "Departure | Return Home with Beautiful Memories (10-05-2025)",
                description: "Enjoy breakfast at the hotel. Transfer to Bangkok Airport for your return flight. Bid farewell to an unforgettable Thailand experience.",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            }
        ],
        images: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/4.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/5.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/6.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/7.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp",
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/10.webp"
        ],
        mobileImages: [
            "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/4.webp"
        ],
        sightseeingSpots: [
            {
                name: "Sundowner Yacht Party",
                description: "Luxury catamaran yacht experience with sunset views",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/2.webp"
            },
            {
                name: "7 Islands of Krabi",
                description: "Island hopping adventure with bioluminescent plankton viewing",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/3.webp"
            },
            {
                name: "Safari World Bangkok",
                description: "Wildlife park with exciting shows and animal encounters",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/10.webp"
            }
        ],
        localFood: [
            {
                name: "Thai Veg Dinner",
                description: "Authentic Thai vegetarian cuisine at Railay Beach",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/11.webp",
                where: "Railay Beach restaurants"
            },
            {
                name: "Indian Buffet",
                description: "Specially curated Indian meals for comfort dining",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/8.webp",
                where: "Partner Indian restaurants"
            }
        ],
        culture: [
            {
                title: "Yacht Culture",
                description: "Experience luxury yacht lifestyle with sunset views",
                image: "https://truedeal-assets.s3.eu-north-1.amazonaws.com/thailand/9.webp"
            }
        ],
        departureDates: [
            { date: "2025-08-03", availability: "Available" },
            { date: "2025-08-10", availability: "Available" },
            { date: "2025-08-17", availability: "Limited" },
            { date: "2025-08-24", availability: "Available" }
        ]
    }
};
