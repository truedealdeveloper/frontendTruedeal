export interface HotelDetail {
    city: string;
    hotel: string;
    roomType: string;
    description?: string;
    distance?: string;
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
    date: string;
    title: string;
    description: string;
    image: string;
    activities?: string[];
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

interface FlightInfo {
    flightNumber: string;
    date: string;
    departure: string;
    arrival: string;
    departureTime: string;
    arrivalTime: string;
}

interface FlightDetails {
    airline: string;
    route: string;
    transitHub: string;
    duration: string;
    cabinClasses: string[];
    flights: FlightInfo[];
}

export interface CantonFairPackage {
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
        fairDetails: {
            exhibitionDates: string;
            timings: string;
            venue: string;
            address: string;
            focus: string[];
        };
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
            documents: string[];
        };
    };
    departureDates?: DepartureDate[];
    experiences: Experience[];
    flightDetails?: FlightDetails;
    singleRoomSupplement?: number;
}

export const cantonFairPackages: Record<string, CantonFairPackage> = {
    'canton-fair-phase-1-delhi-indigo': {
        id: 'canton-fair-phase-1-delhi-indigo',
        packageName: 'Canton Fair 2025 Phase 1 From Delhi - Indigo Airlines',
        days: 5,
        nights: 4,
        amount: 110000,
        dateStart: '14-Oct-2025',
        dateEnd: '18-Oct-2025',
        description: 'Canton Fair Phase 1 is the first phase of China\'s largest trade fair, officially known as the China Import and Export Fair. Held in Guangzhou, this phase focuses on industrial and high-tech products, including electronics, household electrical appliances, vehicles and spare parts, machinery, hardware tools, and building materials. It serves as a vital platform for global buyers to source cutting-edge products directly from Chinese manufacturers.',
        groupDetails: {
            pax: '10-15',
            rooms: 'Double/Twin Sharing',
            arrivalDate: '14-Oct-2025',
            duration: '5 Days / 4 Nights',
            costBasis: 'Per Person'
        },
        hotelDetails: [
            {
                city: 'Guangzhou',
                hotel: 'Days Inn by Wyndham Guangzhou Hantian',
                roomType: 'Standard Room',
                description: 'This location is close to the China Import and Export Fair Complex, Guangzhou Zoo, and Baiyun Mountain. It offers easy access to Guangzhou Railway Station and the nearby campuses of Jinan University, Lingnan College, and Guangzhou University.',
                distance: '22 KMs from Exhibition Centre'
            }
        ],
        tourSummary: [
            'Visit Canton Fair 2025 Phase 1 - China\'s largest trade fair',
            'Focus on electronics, machinery, hardware, and building materials',
            '3 full days of exhibition access',
            'Pearl River Cruise evening experience',
            'Comfortable stay near the exhibition center',
            'Round-trip flights from Delhi via Hong Kong',
            'Indian dinner arrangements'
        ],
        inclusions: [
            'Return airfare from Delhi to Guangzhou via Hong Kong (Indigo Airlines)',
            'Airport transfers in Guangzhou',
            'Hotel accommodation at Days Inn by Wyndham (4 nights)',
            'Daily breakfast at the hotel',
            'Indian dinner arrangements',
            'Pearl River Cruise',
            'Exhibition entry passes',
            'All taxes and service charges'
        ],
        exclusions: [
            'Visa fees and processing',
            'Lunch and beverages',
            'Personal expenses and shopping',
            'Travel insurance',
            'Tips and gratuities',
            'Any expenses not mentioned in inclusions',
            'Single room supplement (₹21,500 extra)'
        ],
        itinerary: [
            {
                day: 1,
                date: '14 Oct 2025',
                title: 'Departure from Delhi - Arrival in Hong Kong',
                description: 'Departure from Delhi IGI Airport by Indigo Airlines. Arrive in Hong Kong, transfer to the hotel in Guangzhou, and enjoy dinner.',
                image: '/UGCImages/china/horizontal/1.webp',
                activities: [
                    'Departure from Delhi IGI Airport (Flight 6E 1707 - 05:30)',
                    'Arrival at Hong Kong International Airport (13:50)',
                    'Transfer to Guangzhou hotel',
                    'Check-in at Days Inn by Wyndham',
                    'Welcome dinner at hotel'
                ]
            },
            {
                day: 2,
                date: '15 Oct 2025',
                title: 'Canton Fair 2025 - Day 1',
                description: 'Breakfast at the hotel followed by a full day at Canton Fair 2025. Explore electronics, household appliances, and industrial products. Return in the evening for Indian dinner and overnight stay.',
                image: '/UGCImages/china/horizontal/2.webp',
                activities: [
                    'Breakfast at hotel',
                    'Full day at Canton Fair 2025 (09:30 AM - 06:00 PM)',
                    'Explore Electronics & Consumer Goods section',
                    'Visit Household Electrical Appliances pavilion',
                    'Networking with manufacturers',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 3,
                date: '16 Oct 2025',
                title: 'Canton Fair 2025 - Day 2',
                description: 'After breakfast, continue your visit to Canton Fair for meetings and exploration. Focus on machinery, hardware tools, and building materials. Dinner and overnight stay at the hotel.',
                image: '/UGCImages/china/horizontal/3.webp',
                activities: [
                    'Breakfast at hotel',
                    'Full day at Canton Fair 2025',
                    'Explore Machinery & Equipment section',
                    'Visit Hardware Tools & Building Materials pavilion',
                    'Business meetings with suppliers',
                    'Product sourcing and negotiations',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 4,
                date: '17 Oct 2025',
                title: 'Canton Fair 2025 - Day 3 & Pearl River Cruise',
                description: 'Breakfast and last day at the fair. Complete your business meetings and final exploration. In the evening, enjoy the scenic Pearl River Cruise before returning for dinner at the hotel.',
                image: '/UGCImages/china/horizontal/4.webp',
                activities: [
                    'Breakfast at hotel',
                    'Final day at Canton Fair 2025',
                    'Complete pending meetings',
                    'Last-minute product sourcing',
                    'Evening Pearl River Cruise',
                    'Enjoy stunning city lights and skyline views',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 5,
                date: '18 Oct 2025',
                title: 'Departure from Guangzhou',
                description: 'Breakfast at the hotel. Check out and transfer to the airport for your return flight to Delhi via Hong Kong.',
                image: '/UGCImages/china/horizontal/5.webp',
                activities: [
                    'Breakfast at hotel',
                    'Check-out from hotel',
                    'Transfer to Hong Kong Airport',
                    'Departure from Hong Kong (Flight 6E 1708 - 15:30)',
                    'Arrival at Delhi IGI Airport (19:00)'
                ]
            }
        ],
        images: [
            '/UGCImages/china/horizontal/1.webp',
            '/UGCImages/china/horizontal/2.webp',
            '/UGCImages/china/horizontal/3.webp',
            '/UGCImages/china/horizontal/4.webp',
            '/UGCImages/china/horizontal/5.webp',
            '/UGCImages/china/horizontal/6.webp'
        ],
        additionalInfo: {
            highlights: [
                'Access to China\'s largest trade fair',
                'Focus on industrial and high-tech products',
                '3 full days of exhibition access',
                'Comfortable accommodation near exhibition center',
                'Pearl River Cruise experience',
                'Indian cuisine arrangements',
                'Direct flights from Delhi via Hong Kong'
            ],
            fairDetails: {
                exhibitionDates: 'October 15 – 19, 2025',
                timings: '09:30 AM – 06:00 PM (daily)',
                venue: 'China Import and Export Fair Complex (Canton Fair Complex)',
                address: 'No. 380, Yuejiang Zhong Road, Haizhu District, Guangzhou, China',
                focus: [
                    'Electronics',
                    'Household Electrical Appliances',
                    'Vehicles and Spare Parts',
                    'Machinery',
                    'Hardware Tools',
                    'Building Materials'
                ]
            },
            accommodation: {
                type: 'Days Inn by Wyndham Guangzhou',
                amenities: [
                    'Free Wi-Fi',
                    'Air Conditioning',
                    'Daily Housekeeping',
                    'Restaurant',
                    'Room Service',
                    '24-hour Front Desk',
                    'Comfortable Rooms',
                    'Close to Exhibition Center'
                ]
            },
            transportation: {
                type: 'Indigo Airlines',
                features: [
                    'India\'s most trusted low-cost carrier',
                    'Comfortable seating',
                    'Convenient connections via Hong Kong',
                    'Economy and Premium Economy options',
                    'In-flight meals available',
                    'Hassle-free experience'
                ]
            },
            visaInfo: {
                requirement: 'Chinese visa required for Indian citizens',
                duration: 'Tourist/Business visa for 30 days',
                documents: [
                    'Valid passport (minimum 6 months validity)',
                    'Completed visa application form',
                    'Recent passport-size photographs',
                    'Flight booking confirmation',
                    'Hotel booking confirmation',
                    'Invitation letter from Canton Fair (if applicable)',
                    'Business registration documents (for business visa)',
                    'Bank statements (last 3 months)'
                ]
            }
        },
        departureDates: [
            {
                date: '14-Oct-2025',
                availability: 'Available',
                price: 45000
            }
        ],
        experiences: [
            {
                title: 'Canton Fair Exhibition',
                image: '/UGCImages/china/horizontal/1.webp'
            },
            {
                title: 'Pearl River Cruise',
                image: '/UGCImages/china/horizontal/2.webp'
            },
            {
                title: 'Guangzhou Cityscape',
                image: '/UGCImages/china/horizontal/3.webp'
            },
            {
                title: 'Business Networking',
                image: '/UGCImages/china/horizontal/4.webp'
            }
        ],
        flightDetails: {
            airline: 'Indigo Airlines',
            route: 'Delhi → Hong Kong → Guangzhou',
            transitHub: 'Indira Gandhi International Airport (DEL)',
            duration: '6-10 hours',
            cabinClasses: ['Economy', 'Premium Economy'],
            flights: [
                {
                    flightNumber: '6E 1707',
                    date: '14-October-2025',
                    departure: 'DEL',
                    arrival: 'HKG',
                    departureTime: '05:30',
                    arrivalTime: '13:50'
                },
                {
                    flightNumber: '6E 1708',
                    date: '18-October-2025',
                    departure: 'HKG',
                    arrival: 'DEL',
                    departureTime: '15:30',
                    arrivalTime: '19:00'
                }
            ]
        },
        singleRoomSupplement: 21500
    },

    'canton-fair-phase-2-delhi': {
        id: 'canton-fair-phase-2-delhi',
        packageName: 'Canton Fair 2025 Phase 2 From Delhi',
        days: 6,
        nights: 5,
        amount: 110000,
        dateStart: '22-Oct-2025',
        dateEnd: '27-Oct-2025',
        description: 'Canton Fair Phase 2 focuses on consumer goods, home decorations, and gifts. This phase highlights products with strong appeal to daily life and aesthetics, including kitchenware, ceramics, furniture, home textiles, personal care products, and seasonal decorations. It\'s a key destination for international buyers looking for high-quality, design-forward merchandise.',
        groupDetails: {
            pax: '10-15',
            rooms: 'Double/Twin Sharing',
            arrivalDate: '22-Oct-2025',
            duration: '6 Days / 5 Nights',
            costBasis: 'Per Person'
        },
        hotelDetails: [
            {
                city: 'Guangzhou',
                hotel: 'Days Inn by Wyndham Guangzhou Hantian',
                roomType: 'Standard Room',
                description: 'This location is close to the China Import and Export Fair Complex, Guangzhou Zoo, and Baiyun Mountain. It offers easy access to Guangzhou Railway Station and the nearby campuses of Jinan University, Lingnan College, and Guangzhou University.',
                distance: '22 KMs from Exhibition Centre'
            }
        ],
        tourSummary: [
            'Visit Canton Fair 2025 Phase 2 - Consumer goods, home decorations & gifts',
            'Focus on kitchenware, ceramics, furniture, home textiles',
            '3 full days of exhibition access',
            'Pearl River Cruise evening experience',
            'Comfortable stay near the exhibition center',
            'Round-trip coach transfers from Hong Kong',
            'Indian dinner arrangements'
        ],
        inclusions: [
            'Airport transfers in Hong Kong',
            'Coach transfer from Hong Kong to Guangzhou',
            'Hotel accommodation at Days Inn by Wyndham (5 nights)',
            'Daily breakfast at the hotel',
            'Indian dinner arrangements',
            'Pearl River Cruise',
            'Exhibition entry passes',
            'All taxes and service charges'
        ],
        exclusions: [
            'International flights (Delhi to Hong Kong)',
            'Visa fees and processing',
            'Lunch and beverages',
            'Personal expenses and shopping',
            'Travel insurance',
            'Tips and gratuities',
            'Any expenses not mentioned in inclusions',
            'Single room supplement (₹21,500 extra)'
        ],
        itinerary: [
            {
                day: 1,
                date: '22-23 Oct 2025',
                title: 'Arrival in Hong Kong - Transfer to Guangzhou',
                description: 'Arrive in Hong Kong and transfer by coach to Guangzhou. Check in at the hotel and enjoy dinner.',
                image: '/UGCImages/china/horizontal/1.webp',
                activities: [
                    'Arrival at Hong Kong International Airport',
                    'Coach transfer to Guangzhou',
                    'Check-in at Days Inn by Wyndham',
                    'Welcome dinner at hotel'
                ]
            },
            {
                day: 2,
                date: '24 Oct 2025',
                title: 'Canton Fair 2025 Phase 2 - Day 1',
                description: 'Breakfast at the hotel, followed by a full-day visit to Canton Fair 2025. Explore consumer goods, home decorations, and gift items. Return in the evening for dinner and overnight stay.',
                image: '/UGCImages/china/horizontal/2.webp',
                activities: [
                    'Breakfast at hotel',
                    'Full day at Canton Fair 2025 Phase 2 (09:30 AM - 06:00 PM)',
                    'Explore Consumer Goods section',
                    'Visit Home Decorations pavilion',
                    'Browse gift items and kitchenware',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 3,
                date: '25 Oct 2025',
                title: 'Canton Fair 2025 Phase 2 - Day 2',
                description: 'After breakfast, continue your visit to Canton Fair 2025. Focus on ceramics, furniture, and home textiles. Evening return to the hotel for dinner and overnight stay.',
                image: '/UGCImages/china/horizontal/3.webp',
                activities: [
                    'Breakfast at hotel',
                    'Full day at Canton Fair 2025',
                    'Explore Ceramics & Pottery section',
                    'Visit Furniture pavilion',
                    'Browse Home Textiles area',
                    'Business meetings with suppliers',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 4,
                date: '26 Oct 2025',
                title: 'Canton Fair 2025 Phase 2 - Day 3 & Pearl River Cruise',
                description: 'Breakfast at the hotel, then proceed to Canton Fair 2025 for the final day. Focus on personal care products and seasonal decorations. In the evening, enjoy a Pearl River Cruise before returning to the hotel for dinner.',
                image: '/UGCImages/china/horizontal/4.webp',
                activities: [
                    'Breakfast at hotel',
                    'Final day at Canton Fair 2025',
                    'Explore Personal Care Products',
                    'Visit Seasonal Decorations section',
                    'Complete pending meetings',
                    'Evening Pearl River Cruise',
                    'Enjoy stunning city lights and skyline views',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 5,
                date: '27 Oct 2025',
                title: 'Departure from Guangzhou',
                description: 'Breakfast at the hotel and check out. Transfer to Hong Kong Airport for your return flight to Delhi.',
                image: '/UGCImages/china/horizontal/5.webp',
                activities: [
                    'Breakfast at hotel',
                    'Check-out from hotel',
                    'Coach transfer to Hong Kong Airport',
                    'Departure to Delhi'
                ]
            }
        ],
        images: [
            '/UGCImages/china/horizontal/2.webp',
            '/UGCImages/china/horizontal/3.webp',
            '/UGCImages/china/horizontal/4.webp',
            '/UGCImages/china/horizontal/5.webp',
            '/UGCImages/china/horizontal/6.webp',
            '/UGCImages/china/horizontal/1.webp'
        ],
        additionalInfo: {
            highlights: [
                'Access to Canton Fair Phase 2',
                'Focus on consumer goods and home decorations',
                '3 full days of exhibition access',
                'Comfortable accommodation near exhibition center',
                'Pearl River Cruise experience',
                'Indian cuisine arrangements',
                'Coach transfers from Hong Kong'
            ],
            fairDetails: {
                exhibitionDates: 'October 23 – 27, 2025',
                timings: '09:30 AM – 06:00 PM (daily)',
                venue: 'China Import and Export Fair Complex (Canton Fair Complex)',
                address: 'No. 380, Yuejiang Zhong Road, Haizhu District, Guangzhou, China',
                focus: [
                    'Consumer Goods',
                    'Home Decorations',
                    'Gifts',
                    'Kitchenware',
                    'Ceramics',
                    'Furniture',
                    'Home Textiles',
                    'Personal Care Products',
                    'Seasonal Decorations'
                ]
            },
            accommodation: {
                type: 'Days Inn by Wyndham Guangzhou',
                amenities: [
                    'Free Wi-Fi',
                    'Air Conditioning',
                    'Daily Housekeeping',
                    'Restaurant',
                    'Room Service',
                    '24-hour Front Desk',
                    'Comfortable Rooms',
                    'Close to Exhibition Center'
                ]
            },
            transportation: {
                type: 'Coach Transfer',
                features: [
                    'Comfortable coach from Hong Kong',
                    'Direct transfer to Guangzhou',
                    'Professional drivers',
                    'Air-conditioned vehicles',
                    'Luggage assistance',
                    'Hassle-free experience'
                ]
            },
            visaInfo: {
                requirement: 'Chinese visa required for Indian citizens',
                duration: 'Tourist/Business visa for 30 days',
                documents: [
                    'Valid passport (minimum 6 months validity)',
                    'Completed visa application form',
                    'Recent passport-size photographs',
                    'Flight booking confirmation',
                    'Hotel booking confirmation',
                    'Invitation letter from Canton Fair (if applicable)',
                    'Business registration documents (for business visa)',
                    'Bank statements (last 3 months)'
                ]
            }
        },
        departureDates: [
            {
                date: '22-Oct-2025',
                availability: 'Available',
                price: 110000
            }
        ],
        experiences: [
            {
                title: 'Consumer Goods Exhibition',
                image: '/UGCImages/china/horizontal/2.webp'
            },
            {
                title: 'Home Decorations',
                image: '/UGCImages/china/horizontal/3.webp'
            },
            {
                title: 'Pearl River Cruise',
                image: '/UGCImages/china/horizontal/4.webp'
            },
            {
                title: 'Business Networking',
                image: '/UGCImages/china/horizontal/5.webp'
            }
        ],
        singleRoomSupplement: 21500
    },

    'canton-fair-phase-3-mumbai': {
        id: 'canton-fair-phase-3-mumbai',
        packageName: 'Canton Fair 2025 Phase 3 From Mumbai',
        days: 5,
        nights: 4,
        amount: 110000,
        dateStart: '30-Oct-2025',
        dateEnd: '03-Nov-2025',
        description: 'Canton Fair Phase 3 centers on textiles, garments, footwear, office supplies, medical devices, and health products. It also includes food and native produce. This phase attracts global buyers from the fashion, health, and education sectors looking for quality suppliers and innovative products across a wide range of consumer-focused industries.',
        groupDetails: {
            pax: '10-15',
            rooms: 'Double/Twin Sharing',
            arrivalDate: '30-Oct-2025',
            duration: '5 Days / 4 Nights',
            costBasis: 'Per Person'
        },
        hotelDetails: [
            {
                city: 'Guangzhou',
                hotel: 'Days Inn by Wyndham Guangzhou Hantian',
                roomType: 'Standard Room',
                description: 'This location is close to the China Import and Export Fair Complex, Guangzhou Zoo, and Baiyun Mountain. It offers easy access to Guangzhou Railway Station and the nearby campuses of Jinan University, Lingnan College, and Guangzhou University.',
                distance: '22 KMs from Exhibition Centre'
            }
        ],
        tourSummary: [
            'Visit Canton Fair 2025 Phase 3 - Textiles, garments & footwear',
            'Focus on fashion, health, and education sectors',
            '3 full days of exhibition access',
            'Pearl River Cruise evening experience',
            'Comfortable stay near the exhibition center',
            'Round-trip coach transfers from Hong Kong',
            'Indian dinner arrangements'
        ],
        inclusions: [
            'Airport transfers in Hong Kong',
            'Coach transfer from Hong Kong to Guangzhou',
            'Hotel accommodation at Days Inn by Wyndham (4 nights)',
            'Daily breakfast at the hotel',
            'Indian dinner arrangements',
            'Pearl River Cruise',
            'Exhibition entry passes',
            'All taxes and service charges'
        ],
        exclusions: [
            'International flights (Mumbai to Hong Kong)',
            'Visa fees and processing',
            'Lunch and beverages',
            'Personal expenses and shopping',
            'Travel insurance',
            'Tips and gratuities',
            'Any expenses not mentioned in inclusions',
            'Single room supplement (₹21,500 extra)'
        ],
        itinerary: [
            {
                day: 1,
                date: '30 October 2025',
                title: 'Arrival in Hong Kong - Transfer to Guangzhou',
                description: 'Arrive in Hong Kong and transfer by coach to Guangzhou. Check in at the hotel and enjoy warm Indian dinner.',
                image: '/UGCImages/china/horizontal/1.webp',
                activities: [
                    'Arrival at Hong Kong International Airport',
                    'Coach transfer to Guangzhou',
                    'Check-in at Days Inn by Wyndham',
                    'Welcome Indian dinner at hotel'
                ]
            },
            {
                day: 2,
                date: '31 October 2025',
                title: 'Canton Fair 2025 Phase 3 - Day 1',
                description: 'Breakfast at the hotel before heading to the Canton Fair 2025 Exhibition. Explore textiles, garments, and footwear sections. After a full day at the fair, return to the hotel for dinner and overnight stay.',
                image: '/UGCImages/china/horizontal/2.webp',
                activities: [
                    'Breakfast at hotel',
                    'Full day at Canton Fair 2025 Phase 3 (09:30 AM - 06:00 PM)',
                    'Explore Textiles section',
                    'Visit Garments pavilion',
                    'Browse Footwear area',
                    'Networking with manufacturers',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 3,
                date: '1 November 2025',
                title: 'Canton Fair 2025 Phase 3 - Day 2',
                description: 'After breakfast, continue your visit to the Canton Fair 2025 Exhibition. Focus on office supplies, medical devices, and health products. Evening return to the hotel for dinner and relaxation.',
                image: '/UGCImages/china/horizontal/3.webp',
                activities: [
                    'Breakfast at hotel',
                    'Full day at Canton Fair 2025',
                    'Explore Office Supplies section',
                    'Visit Medical Devices pavilion',
                    'Browse Health Products area',
                    'Business meetings with suppliers',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 4,
                date: '2 November 2025',
                title: 'Canton Fair 2025 Phase 3 - Day 3 & Pearl River Cruise',
                description: 'Breakfast at the hotel, followed by another day at the Canton Fair 2025. Explore food and native produce sections. In the evening, enjoy the Pearl River Cruise, experiencing Guangzhou\'s illuminated skyline. Dinner and overnight stay at the hotel.',
                image: '/UGCImages/china/horizontal/4.webp',
                activities: [
                    'Breakfast at hotel',
                    'Final day at Canton Fair 2025',
                    'Explore Food & Native Produce section',
                    'Complete pending meetings',
                    'Last-minute product sourcing',
                    'Evening Pearl River Cruise',
                    'Enjoy stunning city lights and skyline views',
                    'Return to hotel for dinner'
                ]
            },
            {
                day: 5,
                date: '3 November 2025',
                title: 'Departure from Guangzhou',
                description: 'Breakfast at the hotel and check out. Transfer to Hong Kong Airport for your return journey to Mumbai.',
                image: '/UGCImages/china/horizontal/5.webp',
                activities: [
                    'Breakfast at hotel',
                    'Check-out from hotel',
                    'Coach transfer to Hong Kong Airport',
                    'Departure to Mumbai'
                ]
            }
        ],
        images: [
            '/UGCImages/china/horizontal/3.webp',
            '/UGCImages/china/horizontal/4.webp',
            '/UGCImages/china/horizontal/5.webp',
            '/UGCImages/china/horizontal/6.webp',
            '/UGCImages/china/horizontal/1.webp',
            '/UGCImages/china/horizontal/2.webp'
        ],
        additionalInfo: {
            highlights: [
                'Access to Canton Fair Phase 3',
                'Focus on textiles, garments, and footwear',
                '3 full days of exhibition access',
                'Comfortable accommodation near exhibition center',
                'Pearl River Cruise experience',
                'Indian cuisine arrangements',
                'Coach transfers from Hong Kong'
            ],
            fairDetails: {
                exhibitionDates: 'October 31 – November 4, 2025',
                timings: '09:30 AM – 06:00 PM (daily)',
                venue: 'China Import and Export Fair Complex (Canton Fair Complex)',
                address: 'No. 380, Yuejiang Zhong Road, Haizhu District, Guangzhou, China',
                focus: [
                    'Textiles',
                    'Garments',
                    'Footwear',
                    'Office Supplies',
                    'Medical Devices',
                    'Health Products',
                    'Food',
                    'Native Produce'
                ]
            },
            accommodation: {
                type: 'Days Inn by Wyndham Guangzhou',
                amenities: [
                    'Free Wi-Fi',
                    'Air Conditioning',
                    'Daily Housekeeping',
                    'Restaurant',
                    'Room Service',
                    '24-hour Front Desk',
                    'Comfortable Rooms',
                    'Close to Exhibition Center'
                ]
            },
            transportation: {
                type: 'Coach Transfer',
                features: [
                    'Comfortable coach from Hong Kong',
                    'Direct transfer to Guangzhou',
                    'Professional drivers',
                    'Air-conditioned vehicles',
                    'Luggage assistance',
                    'Hassle-free experience'
                ]
            },
            visaInfo: {
                requirement: 'Chinese visa required for Indian citizens',
                duration: 'Tourist/Business visa for 30 days',
                documents: [
                    'Valid passport (minimum 6 months validity)',
                    'Completed visa application form',
                    'Recent passport-size photographs',
                    'Flight booking confirmation',
                    'Hotel booking confirmation',
                    'Invitation letter from Canton Fair (if applicable)',
                    'Business registration documents (for business visa)',
                    'Bank statements (last 3 months)'
                ]
            }
        },
        departureDates: [
            {
                date: '30-Oct-2025',
                availability: 'Available',
                price: 110000
            }
        ],
        experiences: [
            {
                title: 'Textiles & Garments',
                image: '/UGCImages/china/horizontal/3.webp'
            },
            {
                title: 'Footwear Exhibition',
                image: '/UGCImages/china/horizontal/4.webp'
            },
            {
                title: 'Pearl River Cruise',
                image: '/UGCImages/china/horizontal/5.webp'
            },
            {
                title: 'Business Networking',
                image: '/UGCImages/china/horizontal/6.webp'
            }
        ],
        singleRoomSupplement: 21500
    }
};
