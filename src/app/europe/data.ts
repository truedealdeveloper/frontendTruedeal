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

export interface EuropePackage {
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
    departureCities?: {
        city: string;
        price: number;
    }[];
}

export const europePackages: Record<string, EuropePackage> = {
    switzerlandHolidayPackage6N7D: {
        id: "switzerland-holiday-package-6N7D",
        packageName: "Switzerland Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 91668,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Switzerland Holiday Package (06 Nights & 07 Days) - Experience the best of Switzerland with stays in Lucerne and Zurich. Enjoy the Swiss Pass benefits, Mount Titlis adventure, Lake Lucerne cruise, and Rhine Falls visit. Perfect for those seeking Alpine beauty and Swiss culture.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Switzerland Holiday",
            costBasis: "EUR 900/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Lucerne",
                hotel: "Ibis Styles Lucerne or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Touch down in Zurich, hop on a train to Lucerne",
            "Day 2: Lake Lucerne, Chapel Bridge, and Lion Monument",
            "Day 3: Mount Titlis adventure with Ice Flyer",
            "Day 4: Travel back to Zurich by train",
            "Day 5: Rhine Falls - Europe's largest waterfall",
            "Day 6: Explore vibrant Zurich city",
            "Day 7: Private transfer to Zurich Airport for departure"
        ],
        inclusions: [
            "03 Nights accommodation in Lucerne - Ibis Styles Lucerne or similar",
            "03 Nights accommodation in Zurich - Novotel Zurich Airport Messe or similar",
            "Daily Breakfast",
            "2nd Class 06 Days Swiss Pass",
            "Excursion To Mt. Titlis with Ice Flyer",
            "Lake Lucerne Cruise with Swiss Pass",
            "Visit Rhine Falls in Zurich with Swiss Pass (Boat Ride Optional)",
            "Private departure transfer in Zurich",
            "All taxes included"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Zurich - Journey to Lucerne",
                description: "Touch down in Zurich, hop on a train to the charming city of Lucerne, and settle into your hotel. Relax and enjoy your first evening in Switzerland.",
            },
            {
                day: 2,
                title: "Lake Lucerne, Chapel Bridge & Lion Monument",
                description: "After a delicious breakfast, head to the captivating Lake Lucerne, stroll across the iconic Chapel Bridge, and pay your respects at the Lion Monument. Your Swiss Pass will grant you free access to these attractions.",
            },
            {
                day: 3,
                title: "Mount Titlis Adventure with Ice Flyer",
                description: "Embark on a thrilling adventure to Mount Titlis, a majestic mountain peak offering breathtaking views and unique experiences. Your trusty Swiss Pass will once again provide free access to the mountain excursions.",
            },
            {
                day: 4,
                title: "Return to Zurich by Train",
                description: "Make your way back to vibrant Zurich by train and check into your hotel for a comfortable stay.",
            },
            {
                day: 5,
                title: "Rhine Falls - Europe's Largest Waterfall",
                description: "Witness the power of nature at the awe-inspiring Rhine Falls, the largest waterfall in Europe. Let your Swiss Pass do its magic and grant you free entry to this incredible natural wonder.",
            },
            {
                day: 6,
                title: "Explore Vibrant Zurich",
                description: "Immerse yourself in the pulsating energy of Zurich. Explore its charming streets, discover hidden gems, and indulge in its vibrant culture.",
            },
            {
                day: 7,
                title: "Departure from Zurich",
                description: "Savor a final Swiss breakfast before your private transfer whisks you away to Zurich Airport for your flight back to India.",
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    switzerlandHolidayPackage7N8D: {
        id: "switzerland-holiday-package-7N8D",
        packageName: "Switzerland Holiday Package (07 Nights & 08 Days)",
        days: 8,
        nights: 7,
        amount: 139139,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Switzerland Holiday Package (07 Nights & 08 Days) - Experience the best of Switzerland with stays in Lucerne, Interlaken, and Zurich. Enjoy the Swiss Pass benefits, Mount Titlis adventure, Jungfraujoch excursion, Lake cruises, and Rhine Falls visit. Perfect for those seeking Alpine beauty and Swiss culture.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "7N8D Switzerland Holiday",
            costBasis: "Per person on double sharing"
        },
        hotelDetails: [
            {
                city: "Lucerne",
                hotel: "Ibis Styles Lucerne or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Interlaken",
                hotel: "Hotel Chalet Swiss or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrive at Zurich Airport, scenic train to Lucerne",
            "Day 2: Explore Lake Lucerne, Chapel Bridge, and Lion Monument",
            "Day 3: Excursion to Mt. Titlis with Ice Flyer",
            "Day 4: Train to Interlaken, explore Lake Thun and Lake Brienz",
            "Day 5: Excursion to Jungfraujoch - Top of Europe",
            "Day 6: Train to Zurich, free time in the city",
            "Day 7: Visit Rhine Falls with Swiss Pass",
            "Day 8: Transfer to Zurich Airport for departure"
        ],
        inclusions: [
            "03 Nights accommodation in Lucerne - Ibis Styles Lucerne or similar",
            "02 Nights accommodation in Interlaken - Hotel Chalet Swiss or similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or similar",
            "Daily Breakfast",
            "2nd Class 08 Days Swiss Pass",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion To Mt. Titlis with Ice Flyer",
            "Lake Brienz Cruise with Swiss Pass",
            "Excursion to Jungfraujoch Top of Europe",
            "Visit Rhine Falls in Zurich with Swiss Pass (Boat Ride Optional)"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Zurich - Journey to Lucerne",
                description: "Arrive at the picturesque Zurich Airport and embark on a scenic train journey to the charming city of Lucerne. Check in to your hotel and immerse yourself in the beauty of the surroundings. Enjoy an overnight stay in Lucerne.",
            },
            {
                day: 2,
                title: "Lake Lucerne Exploration",
                description: "After a delightful breakfast, set out to explore the stunning Lake Lucerne, the historic Chapel Bridge, and the iconic Lion Monument, all while taking in the breathtaking views with the Swiss Pass. Retire for the night in the enchanting city of Lucerne.",
            },
            {
                day: 3,
                title: "Mount Titlis Excursion",
                description: "Awaken to a beautiful morning and embark on an exhilarating excursion to the majestic Mt. Titlis, enjoying the convenience of the Swiss Pass. Return to the captivating city of Lucerne for another overnight stay.",
            },
            {
                day: 4,
                title: "Journey to Interlaken",
                description: "Indulge in a delicious breakfast before boarding a scenic train journey from Lucerne to the picturesque town of Interlaken. Check in to your hotel and explore the serene Lake Thun and the crystal-clear Lake Brienz with the Swiss Pass. Relax and unwind with an overnight stay in Interlaken.",
            },
            {
                day: 5,
                title: "Jungfraujoch Excursion",
                description: "After a fulfilling breakfast, embark on an unforgettable excursion to the breathtaking Jungfraujoch - Top of Europe, courtesy of the Swiss Pass. Immerse yourself in the awe-inspiring beauty of the region and spend another night in the scenic town of Interlaken.",
            },
            {
                day: 6,
                title: "Journey to Zurich",
                description: "Enjoy a leisurely breakfast before boarding a train from Interlaken to the vibrant city of Zurich. Check in to your hotel and spend the day at your leisure, taking in the sights and sounds of this bustling metropolis. Retire for the night in Zurich.",
            },
            {
                day: 7,
                title: "Rhine Falls Visit",
                description: "After a refreshing breakfast, set out to visit the magnificent Rhine Falls, using the Swiss Pass to enhance your experience. Return to Zurich for another overnight stay in this vibrant city.",
            },
            {
                day: 8,
                title: "Departure from Zurich",
                description: "Enjoy a final breakfast in this beautiful country before taking a private transfer to Zurich Airport for your flight back to India, taking with you memories of a truly unforgettable journey.",
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    switserlandHolidayPackage9N10D: {
        id: "switzerland-holiday-package-9N10D",
        packageName: "Switzerland Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 1550,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Switzerland Holiday Package (09 Nights & 10 Days) - Experience the best of Switzerland with stays in Lucerne, Interlaken, Montreux, and Zurich. Enjoy the Swiss Pass benefits, Golden Pass Line, Mount Titlis adventure, Jungfraujoch excursion, Lake cruises, Chillon Castle visit, and Rhine Falls. Perfect for those seeking comprehensive Alpine beauty and Swiss culture.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Switzerland Holiday",
            costBasis: "EUR 1'550/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Lucerne",
                hotel: "Ibis Styles Lucerne or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Interlaken",
                hotel: "Hotel Chalet Swiss or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Montreux",
                hotel: "Hôtel Villa Toscane or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrive at Zurich Airport, scenic train to Lucerne",
            "Day 2: Explore Lake Lucerne, Chapel Bridge, and Lion Monument",
            "Day 3: Excursion to Mt. Titlis with Ice Flyer",
            "Day 4: Train to Interlaken, explore Lake Thun and Lake Brienz",
            "Day 5: Excursion to Jungfraujoch - Top of Europe",
            "Day 6: Golden Passline Train to Montreux",
            "Day 7: Visit Chillon Castle with Swiss Pass",
            "Day 8: Train to Zurich, explore the city",
            "Day 9: Visit Rhine Falls with Swiss Pass",
            "Day 10: Transfer to Zurich Airport for departure"
        ],
        inclusions: [
            "03 Nights accommodation in Lucerne - Ibis Styles Lucerne or similar",
            "02 Nights accommodation in Interlaken - Hotel Chalet Swiss or similar",
            "02 Nights accommodation in Montreux - Hôtel Villa Toscane or similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or similar",
            "Daily Breakfast",
            "2nd Class 08 Days Swiss Pass",
            "2nd Class Golden Pass Line Reservation",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion To Mt. Titlis with Ice Flyer",
            "Lake Brienz Cruise with Swiss Pass",
            "Excursion to Jungfraujoch Top of Europe",
            "Visit Rhine Falls in Zurich with Swiss Pass (Boat Ride Optional)",
            "Private departure transfer in Zurich"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Zurich - Journey to Lucerne",
                description: "Begin your journey with a breathtaking arrival at Zurich Airport, where you'll board a train to the charming city of Lucerne. Check in to your hotel and immerse yourself in the beauty of the surroundings. Enjoy an overnight stay in Lucerne.",
            },
            {
                day: 2,
                title: "Lake Lucerne Exploration",
                description: "After a delightful breakfast, set out to explore the stunning Lake Lucerne, the historic Chapel Bridge, and the iconic Lion Monument, all while taking in the breathtaking views with the Swiss Pass. Retire for the night in the enchanting city of Lucerne.",
            },
            {
                day: 3,
                title: "Mount Titlis Excursion",
                description: "Awaken to a beautiful morning and embark on an exhilarating excursion to the majestic Mt. Titlis, enjoying the convenience of the Swiss Pass. Return to the captivating city of Lucerne for another overnight stay.",
            },
            {
                day: 4,
                title: "Journey to Interlaken",
                description: "Indulge in a delicious breakfast before boarding a scenic train journey from Lucerne to the picturesque town of Interlaken. Check in to your hotel and explore the serene Lake Thun and the crystal-clear Lake Brienz with the Swiss Pass. Relax and unwind with an overnight stay in Interlaken.",
            },
            {
                day: 5,
                title: "Jungfraujoch Excursion",
                description: "After a fulfilling breakfast, embark on an unforgettable excursion to the breathtaking Jungfraujoch - Top of Europe, courtesy of the Swiss Pass. Immerse yourself in the awe-inspiring beauty of the region and spend another night in the scenic town of Interlaken.",
            },
            {
                day: 6,
                title: "Golden Pass Line to Montreux",
                description: "Enjoy a leisurely breakfast before boarding the Golden Passline Train from Interlaken to the charming town of Montreux. Check in to your hotel and marvel at the stunning scenery. Spend the night in Montreux.",
            },
            {
                day: 7,
                title: "Chillon Castle Visit",
                description: "After a refreshing breakfast, set out to visit the magnificent Chillon Castle, using the Swiss Pass to enhance your experience. Return to Montreux for another overnight stay in this picturesque town.",
            },
            {
                day: 8,
                title: "Journey to Zurich",
                description: "Enjoy a final breakfast in Montreux before boarding a train to the vibrant city of Zurich. Check in to your hotel and spend the day exploring the city's vibrant culture and stunning architecture. Retire for the night in Zurich.",
            },
            {
                day: 9,
                title: "Rhine Falls Visit",
                description: "After a delicious breakfast, set out to visit the magnificent Rhine Falls, using the Swiss Pass to enhance your experience. Return to Zurich for another overnight stay in this vibrant city.",
            },
            {
                day: 10,
                title: "Departure from Zurich",
                description: "Enjoy a final breakfast in this beautiful country before taking a private transfer to Zurich Airport for your flight back to India, taking with you memories of a truly unforgettable journey.",
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    franceHolidayPackage6N7D: {
        id: "france-holiday-package-6N7D",
        packageName: "France Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 118450,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "France Holiday Package (06 Nights & 07 Days) - Experience the best of France with stays in Paris and Nice. Enjoy the Eiffel Tower, Seine River cruise, Disneyland day trip, French Riviera exploration, and Monaco visit. Perfect for those seeking French culture, romance, and Mediterranean charm.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D France Holiday",
            costBasis: "Per person on double sharing"
        },
        hotelDetails: [
            {
                city: "Paris",
                hotel: "Campanille Hotel Bercy Village or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Nice",
                hotel: "Ibis Nice Centre Notre Dame or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Paris, private transfer to hotel",
            "Day 2: Paris Hop on & Hop off Tour, Seine River Cruise, Eiffel Tower 2nd Level",
            "Day 3: Day Trip to Disneyland Paris",
            "Day 4: Train transfer to Nice, hotel check-in",
            "Day 5: Nice Hop on & Hop off City Tour",
            "Day 6: Day Trip to Eze, Monaco & Monte Carlo",
            "Day 7: Departure",
        ],
        inclusions: [
            "03 Nights accommodation in Paris - Campanille Hotel Bercy Village or Similar",
            "03 Nights accommodation in Nice - Ibis Nice Centre Notre Dame or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Paris - Nice",
            "Paris Hop on & Hop Off 24 Hours City Tour",
            "Seine River Cruise Ticket",
            "Skip the Line: Eiffel Tower 2nd Level Tickets",
            "Day Trip to Disneyland - 01 Day 01 Park with Shared Coach Transportation",
            "Nice Hop on & Hop Off 24 Hours City Tour",
            "Day Trip to Eze, Monaco & Monte Carlo from Nice",
            "Private transfer from Airport - Hotel - Train Station in Paris",
            "Private transfer from Train Station - Hotel - Airport in Nice"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional activities and excursions",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Experience the magic of Paris as you arrive at the airport and are whisked away on a private transfer to your hotel. Check in and prepare for an enchanting overnight stay in the City of Lights.",
            },
            {
                day: 2,
                title: "Paris City Exploration",
                description: "Indulge in a delightful breakfast before embarking on a Paris Hop on & Hop off City Tour, followed by a serene Seine River Cruise. In the evening, skip the line and ascend to the 2nd level of the Eiffel Tower for a mesmerizing view of the city. Retire for the night in Paris, filled with unforgettable memories.",
            },
            {
                day: 3,
                title: "Disneyland Paris Day Trip",
                description: "After breakfast, set off on a day trip to the magical world of Disneyland, where you'll spend the day exploring the wonders of the park. Return to Paris for another overnight stay, brimming with the joy of your Disney adventure.",
            },
            {
                day: 4,
                title: "Journey to Nice",
                description: "Enjoy a leisurely breakfast before a private transfer from your hotel to the train station, where you'll board a 2nd class train to the stunning city of Nice. Upon arrival, you'll be transferred to your hotel for a relaxing overnight stay.",
            },
            {
                day: 5,
                title: "Nice City Tour",
                description: "Awaken to the beauty of Nice and embark on a Hop on & Hop off Tour, allowing you to explore the city at your own pace. Take in the stunning sights and sounds before retiring for the night in this coastal paradise.",
            },
            {
                day: 6,
                title: "French Riviera Day Trip",
                description: "After breakfast, set out on a day trip to the charming villages of Eze, the glamorous city of Monaco, and the opulent Monte Carlo. Immerse yourself in the beauty and luxury of the French Riviera before returning to Nice for another overnight stay.",
            },
            {
                day: 7,
                title: "Departure",
                description: "Enjoy a final breakfast and spend your day at leisure in Nice, soaking up the Mediterranean atmosphere and coastal charm. Transfer to Nice Airport for your flight back to India, taking with you memories of a truly magical journey.",
            },
        ],
        images: [
            "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    parisSwitzerlandHolidayPackage6N7D: {
        id: "paris-switzerland-holiday-package-6N7D",
        packageName: "Paris & Switzerland Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 144606,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Paris & Switzerland Holiday Package (06 Nights & 07 Days) - Experience the best of France and Switzerland with stays in Paris, Lucerne, and Zurich. Enjoy Paris Hop on Hop off tour, Eiffel Tower, Seine River cruise, Swiss Pass benefits, Mount Titlis adventure, Lake cruises, Rhine Falls, and Lindt Chocolate Factory visit. Perfect for those seeking European romance and Alpine beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Paris & Switzerland Holiday",
            costBasis: "EUR 1'400/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Paris",
                hotel: "Campanille Hotel Bercy Village or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Lucerne",
                hotel: "Ibis Styles Luzern or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Paris, private transfer to hotel",
            "Day 2: Paris Hop on Hop off Tour, Seine River Cruise, Eiffel Tower 2nd Level",
            "Day 3: Train to Lucerne, Lake Lucerne, Chapel Bridge, Lion Monument",
            "Day 4: Excursion to Mt. Titlis with Ice Flyer",
            "Day 5: Train to Zurich, Lake Zurich, Old Town, Landquart Shopping Village",
            "Day 6: Rhine Falls visit and Lindt Home of Chocolate",
            "Day 7: Departure from Zurich Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Paris - Campanille Hotel Bercy Village or Similar",
            "02 Nights accommodation in Lucerne - Ibis Styles Luzern or Similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Paris - Basel",
            "Paris Hop on & Hop Off 24 Hours City Tour",
            "Seine River Cruise Ticket",
            "Skip the Line: Eiffel Tower 2nd Level Tickets",
            "02nd Class 04 Days Consecutive Swiss Pass",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion to Mt. Titlis with Ice Flyer",
            "Visit Rhine Falls with Swiss Pass (Boat Ride Optional)",
            "Visit Lake Zurich, Old Town, Landquart Shopping Village with Swiss Pass",
            "Lindt Home of Chocolate Tickets",
            "Private transfer from Airport - Hotel - Train Station in Paris",
            "Private transfer from Hotel - Airport in Zurich"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Begin your journey with a breathtaking arrival at Paris Airport, where you'll be whisked away on a private transfer to your hotel. Check in and immerse yourself in the beauty of the city. Enjoy an overnight stay in Paris."
            },
            {
                day: 2,
                title: "Paris City Exploration",
                description: "After a delightful breakfast, set out on a Paris Hop on & Hop off City Tour, followed by a serene Seine River Cruise. In the evening, skip the line and ascend to the 2nd level of the Eiffel Tower for a mesmerizing view of the city. Retire for the night in Paris, filled with unforgettable memories."
            },
            {
                day: 3,
                title: "Journey to Lucerne",
                description: "Awaken to a beautiful morning and depart from your Paris hotel to the train station, where you'll board a 2nd class train to the charming city of Lucerne, Switzerland. Enjoy a scenic train journey from Basel to Lucerne using the Swiss Pass. Check in to your hotel and later visit the stunning Lake Lucerne, the historic Chapel Bridge, and the iconic Lion Monument with the Swiss Pass. Spend the night in Lucerne, surrounded by the beauty of the Swiss Alps."
            },
            {
                day: 4,
                title: "Mount Titlis Excursion",
                description: "After a delicious breakfast, embark on an exhilarating excursion to the majestic Mt. Titlis, including a ride on the Ice Flyer. Return to Lucerne for another overnight stay, filled with the wonder of the Swiss Alps."
            },
            {
                day: 5,
                title: "Journey to Zurich",
                description: "Indulge in a delightful breakfast before boarding a train from Lucerne to the vibrant city of Zurich. Check in to your hotel and explore the stunning Lake Zurich, the charming Old Town, and the Landquart Shopping Village with the Swiss Pass. Retire for the night in Zurich, surrounded by the beauty of the Swiss countryside."
            },
            {
                day: 6,
                title: "Rhine Falls and Chocolate Experience",
                description: "After breakfast, set out to visit the magnificent Rhine Falls, using the Swiss Pass to enhance your experience. Later, indulge in the sweet delights of the Lindt Chocolate Factory. Return to Zurich for another overnight stay, filled with the joy of Swiss chocolate and natural beauty."
            },
            {
                day: 7,
                title: "Departure from Zurich",
                description: "Enjoy a final breakfast in this beautiful country before taking a private departure transfer to Zurich Airport for your onward flight back to India, taking with you memories of a truly unforgettable journey."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    parisSwitzerlandHolidayPackage7N8D: {
        id: "paris-switzerland-holiday-package-7N8D",
        packageName: "Paris & Switzerland Holiday Package (07 Nights & 08 Days)",
        days: 8,
        nights: 7,
        amount: 170428,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Paris & Switzerland Holiday Package (07 Nights & 08 Days) - Experience the best of France and Switzerland with extended stays in Paris, Lucerne, and Zurich. Enjoy Paris Hop on Hop off tour, Eiffel Tower, Seine River cruise, two magical days at Disneyland, Swiss Pass benefits, Mount Titlis adventure, Lake cruises, Rhine Falls, and Lindt Chocolate Factory visit. Perfect for those seeking European romance and Alpine beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "7N8D Paris & Switzerland Holiday",
            costBasis: "EUR 1'650 Per Adult"
        },
        hotelDetails: [
            {
                city: "Paris",
                hotel: "Campanille Hotel Bercy Village or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Lucerne",
                hotel: "Ibis Styles Luzern or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Paris, private transfer to hotel",
            "Day 2: Paris Hop on Hop off Tour, Seine River Cruise, Disneyland Day 1",
            "Day 3: Second day at Disneyland Paris",
            "Day 4: Train to Lucerne, Lake Lucerne, Chapel Bridge, Lion Monument",
            "Day 5: Excursion to Mt. Titlis with Ice Flyer",
            "Day 6: Train to Zurich, Lake Zurich, Old Town, Landquart Shopping Village",
            "Day 7: Rhine Falls visit and Lindt Home of Chocolate",
            "Day 8: Departure from Zurich Airport"
        ],
        inclusions: [
            "03 Nights accommodation in Paris - Campanille Hotel Bercy Village or Similar",
            "02 Nights accommodation in Lucerne - Ibis Styles Luzern or Similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Paris - Basel",
            "Paris Hop on & Hop Off 24 Hours City Tour",
            "Seine River Cruise Ticket",
            "Skip the Line: Eiffel Tower 2nd Level Tickets",
            "Day Trip to Disneyland - 01 Day 01 Park with Shared Coach Transportation",
            "02nd Class 04 Days Consecutive Swiss Pass",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion to Mt. Titlis with Ice Flyer",
            "Visit Rhine Falls with Swiss Pass (Boat Ride Optional)",
            "Visit Lake Zurich, Old Town, Landquart Shopping Village with Swiss Pass",
            "Lindt Home of Chocolate Tickets",
            "Private transfer from Airport - Hotel - Train Station in Paris",
            "Private transfer from Hotel - Airport in Zurich"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Begin your journey with a breathtaking arrival at Paris Airport, where you'll be whisked away on a private transfer to your hotel. Check in and immerse yourself in the beauty of the city. Enjoy an overnight stay in Paris."
            },
            {
                day: 2,
                title: "Paris City Exploration & Disneyland Day 1",
                description: "After a delightful breakfast, set out on a Paris Hop on & Hop off City Tour, followed by a serene Seine River Cruise. In the afternoon, embark on a magical day trip to Disneyland, where you'll spend the day exploring the wonders of the park. Return to Paris for another overnight stay, filled with the joy of Disney magic."
            },
            {
                day: 3,
                title: "Second Day at Disneyland",
                description: "Indulge in a delicious breakfast before another day trip to Disneyland, where you can continue to explore the enchanting world of Disney. Return to Paris for another overnight stay, brimming with the joy of your Disney adventure."
            },
            {
                day: 4,
                title: "Journey to Lucerne",
                description: "After breakfast, take a private transfer to the train station, where you'll board a 2nd class train to the charming city of Lucerne, Switzerland. Enjoy a scenic train journey from Basel to Lucerne. Check in to your hotel and later visit the stunning Lake Lucerne, the historic Chapel Bridge, and the iconic Lion Monument with the Swiss Pass. Spend the night in Lucerne, surrounded by the beauty of the Swiss Alps."
            },
            {
                day: 5,
                title: "Mount Titlis Excursion",
                description: "After a delicious breakfast, embark on an exhilarating excursion to the majestic Mt. Titlis, including a ride on the Ice Flyer. Return to Lucerne for another overnight stay, filled with the wonder of the Swiss Alps."
            },
            {
                day: 6,
                title: "Journey to Zurich",
                description: "Enjoy a leisurely breakfast before boarding a train from Lucerne to the vibrant city of Zurich using the Swiss Pass. Check in to your hotel and explore the stunning Lake Zurich, the charming Old Town, and the Landquart Shopping Village. Retire for the night in Zurich, surrounded by the beauty of the Swiss countryside."
            },
            {
                day: 7,
                title: "Rhine Falls and Chocolate Experience",
                description: "After breakfast, set out to visit the magnificent Rhine Falls, using the Swiss Pass to enhance your experience. Later, indulge in the sweet delights of the Lindt Chocolate Factory. Return to Zurich for another overnight stay, filled with the joy of Swiss chocolate and natural beauty."
            },
            {
                day: 8,
                title: "Departure from Zurich",
                description: "Enjoy a final breakfast in this beautiful country before taking a private departure transfer to Zurich Airport for your onward flight back to India, taking with you memories of a truly unforgettable journey."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    amsterdamParisSwitzerlandHolidayPackage9N10D: {
        id: "amsterdam-paris-switzerland-holiday-package-9N10D",
        packageName: "Amsterdam, Paris & Swiss Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 222073,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Amsterdam, Paris & Swiss Holiday Package (09 Nights & 10 Days) - Experience the best of Netherlands, France and Switzerland with stays in Amsterdam, Paris, Lucerne, and Zurich. Enjoy Amsterdam canal cruise, Volendam villages tour, Paris Hop on Hop off tour, Eiffel Tower, Disneyland, Swiss Pass benefits, Mount Titlis adventure, Lake cruises, Rhine Falls, and Lindt Chocolate Factory visit. Perfect for those seeking comprehensive European exploration.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Amsterdam, Paris & Switzerland Holiday",
            costBasis: "EUR 2'150/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Amsterdam",
                hotel: "Avenue Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Paris",
                hotel: "Campanille Hotel Bercy Village or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Lucerne",
                hotel: "Ibis Styles Luzern or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Amsterdam, private transfer to hotel",
            "Day 2: Amsterdam Canal Cruise, Day Trip to Volendam, Marken & Windmills",
            "Day 3: Train to Paris, hotel check-in",
            "Day 4: Paris Hop on Hop off Tour, Seine River Cruise, Eiffel Tower 2nd Level",
            "Day 5: Day Trip to Disneyland Paris",
            "Day 6: Train to Lucerne, Lake Lucerne, Chapel Bridge, Lion Monument",
            "Day 7: Excursion to Mt. Titlis with Ice Flyer",
            "Day 8: Train to Zurich, Lake Zurich, Old Town, Landquart Shopping Village",
            "Day 9: Rhine Falls visit and Lindt Home of Chocolate",
            "Day 10: Departure from Zurich Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Amsterdam - Avenue Hotel or Similar",
            "03 Nights accommodation in Paris - Campanille Hotel Bercy Village or Similar",
            "02 Nights accommodation in Lucerne - Ibis Styles Luzern or Similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Amsterdam - Paris",
            "2nd Class Train Ticket from Paris - Basel",
            "Amsterdam Canal Cruise Tickets",
            "Day Trip to Volendam, Marken & Windmills from Amsterdam",
            "Paris Hop on & Hop Off 24 Hours City Tour",
            "Seine River Cruise Ticket",
            "Skip the Line: Eiffel Tower 2nd Level Tickets",
            "Day Trip to Disneyland - 01 Day 01 Park with Shared Coach Transportation",
            "02nd Class 04 Days Consecutive Swiss Pass",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion to Mt. Titlis with Ice Flyer",
            "Visit Rhine Falls with Swiss Pass (Boat Ride Optional)",
            "Visit Lake Zurich, Old Town, Landquart Shopping Village with Swiss Pass",
            "Lindt Home of Chocolate Tickets",
            "Private transfer from Airport - Hotel - Train Station in Amsterdam",
            "Private transfer from Train Station - Hotel - Train Station in Paris",
            "Private transfer from Hotel - Airport in Zurich"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Amsterdam",
                description: "Begin your journey with a breathtaking arrival at Amsterdam Airport, where you'll be whisked away on a private transfer to your hotel. Check in and immerse yourself in the beauty of the city. Enjoy an overnight stay in Amsterdam."
            },
            {
                day: 2,
                title: "Amsterdam Exploration",
                description: "After a delicious breakfast, take a private departure transfer to the city's famous canals for a mesmerizing sightseeing cruise. In the afternoon, embark on a day trip to the picturesque villages of Volendam, Marken, and Windmills from Amsterdam. Return to Amsterdam for another overnight stay, filled with the charm of the Dutch countryside."
            },
            {
                day: 3,
                title: "Journey to Paris",
                description: "After breakfast, take a private departure transfer from your hotel to the train station, where you'll board a train to the enchanting city of Paris. Check in to your hotel and prepare for an evening in the City of Lights."
            },
            {
                day: 4,
                title: "Paris City Exploration",
                description: "Set out on a Paris Hop on & Hop off City Tour, followed by a serene Seine River Cruise. In the evening, skip the line and ascend to the 2nd level of the Eiffel Tower for a mesmerizing view of the city. Retire for the night in Paris, filled with unforgettable memories."
            },
            {
                day: 5,
                title: "Disneyland Paris Day Trip",
                description: "After a delightful breakfast, embark on a day trip to Disneyland, where you'll spend the day exploring the wonders of the park. Return to Paris for another overnight stay, brimming with the joy of Disney magic."
            },
            {
                day: 6,
                title: "Journey to Lucerne",
                description: "Take a private departure transfer from your Paris hotel to the train station, where you'll board a 2nd class train to the charming city of Basel, Switzerland. Enjoy a scenic train journey from Basel to Lucerne. Check in to your hotel and later visit the stunning Lake Lucerne, the historic Chapel Bridge, and the iconic Lion Monument with the Swiss Pass. Spend the night in Lucerne, surrounded by the beauty of the Swiss Alps."
            },
            {
                day: 7,
                title: "Mount Titlis Excursion",
                description: "After a delicious breakfast, embark on an exhilarating excursion to the majestic Mt. Titlis, including a ride on the Ice Flyer. Return to Lucerne for another overnight stay, filled with the wonder of the Swiss Alps."
            },
            {
                day: 8,
                title: "Journey to Zurich",
                description: "Enjoy a leisurely breakfast before boarding a 2nd class train from Lucerne to the vibrant city of Zurich. Check in to your hotel and explore the stunning Lake Zurich, the charming Old Town, and the Landquart Shopping Village with the Swiss Pass. Retire for the night in Zurich, surrounded by the beauty of the Swiss countryside."
            },
            {
                day: 9,
                title: "Rhine Falls and Chocolate Experience",
                description: "After breakfast, set out to visit the magnificent Rhine Falls, using the Swiss Pass to enhance your experience. Later, indulge in the sweet delights of the Lindt Chocolate Factory. Return to Zurich for another overnight stay, filled with the joy of Swiss chocolate and natural beauty."
            },
            {
                day: 10,
                title: "Departure from Zurich",
                description: "Enjoy a final breakfast in this beautiful country before taking a private departure transfer to Zurich Airport for your onward flight back to India, taking with you memories of a truly unforgettable journey."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    amsterdamParisHolidayPackage6N7D: {
        id: "amsterdam-paris-holiday-package-6N7D",
        packageName: "Amsterdam & Paris Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 129112,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Amsterdam & Paris Holiday Package (06 Nights & 07 Days) - Experience the best of Netherlands and France with stays in Amsterdam and Paris. Enjoy Amsterdam canal cruises, Volendam villages tour, Paris Hop on Hop off tour, Eiffel Tower, Disneyland day trip, and Seine River cruise. Perfect for those seeking European romance and cultural exploration.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Amsterdam & Paris Holiday",
            costBasis: "EUR 1'250/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Amsterdam",
                hotel: "Avenue Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Paris",
                hotel: "Campanille Hotel Bercy Village or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Amsterdam, canal cruise",
            "Day 2: Second Amsterdam canal cruise, free time",
            "Day 3: Day Trip to Volendam, Marken & Windmills",
            "Day 4: Train to Paris, hotel check-in",
            "Day 5: Paris Hop on Hop off Tour, Seine River Cruise, Eiffel Tower 2nd Level",
            "Day 6: Day Trip to Disneyland Paris",
            "Day 7: Departure from Paris Airport"
        ],
        inclusions: [
            "03 Nights accommodation in Amsterdam - Avenue Hotel or Similar",
            "03 Nights accommodation in Paris - Campanille Hotel Bercy Village or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Amsterdam - Paris",
            "Amsterdam Canal Cruise Tickets",
            "Day Trip to Volendam, Marken & Windmills from Amsterdam",
            "Paris Hop on & Hop Off 24 Hours City Tour",
            "Seine River Cruise Ticket",
            "Skip the Line: Eiffel Tower 2nd Level Tickets",
            "Day Trip to Disneyland - 01 Day 01 Park with Shared Coach Transportation",
            "Private transfer from Airport - Hotel - Train Station in Amsterdam",
            "Private transfer from Train Station - Hotel - Airport in Paris"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Amsterdam & Canal Cruise",
                description: "Begin your journey with a breathtaking arrival at Amsterdam Airport, where you'll be whisked away on a private departure transfer to your hotel. Check in and immerse yourself in the beauty of the city. Later, embark on a stunning Amsterdam City Canal Cruise, taking in the sights and sounds of the city from the water. Enjoy an overnight stay in Amsterdam."
            },
            {
                day: 2,
                title: "Amsterdam Canal Cruise & Free Time",
                description: "After a delightful breakfast, continue your exploration of the city with another Amsterdam City Canal Cruise, taking in even more of the city's beauty. Spend the rest of the day at your leisure, exploring the charming streets and canals of Amsterdam. Retire for the night in this enchanting city."
            },
            {
                day: 3,
                title: "Volendam, Marken & Windmills Day Trip",
                description: "After breakfast, embark on a day trip to the picturesque villages of Volendam, Marken, and Windmills from Amsterdam. Immerse yourself in the beauty of the Dutch countryside before returning to Amsterdam for another overnight stay."
            },
            {
                day: 4,
                title: "Journey to Paris",
                description: "After breakfast, take a private transfer from your hotel to the train station, where you'll board a 2nd class train to the enchanting city of Paris. Check in to your hotel and prepare for an evening in the City of Lights, with a private arrival transfer from the train station to your hotel. Enjoy an overnight stay in Paris."
            },
            {
                day: 5,
                title: "Paris City Exploration",
                description: "Set out on a Paris Hop on & Hop off City Tour, followed by a serene Seine River Cruise. In the evening, skip the line and ascend to the 2nd level of the Eiffel Tower for a mesmerizing view of the city. Retire for the night in Paris, filled with unforgettable memories."
            },
            {
                day: 6,
                title: "Disneyland Paris Day Trip",
                description: "After a delightful breakfast, embark on a day trip to Disneyland, where you'll spend the day exploring the wonders of the park. Return to Paris for another overnight stay, brimming with the joy of Disney magic."
            },
            {
                day: 7,
                title: "Departure from Paris",
                description: "Enjoy a final breakfast in this beautiful city before taking a private departure transfer from your hotel to the airport for your onward flight back to India, taking with you memories of a truly unforgettable journey."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    parisSwitzerlandItalyHolidayPackage11N12D: {
        id: "paris-switzerland-italy-holiday-package-11N12D",
        packageName: "Paris, Swiss & Italy Holiday Package (11 Nights & 12 Days)",
        days: 12,
        nights: 11,
        amount: 2850,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Paris, Swiss & Italy Holiday Package (11 Nights & 12 Days) - Experience the best of France, Switzerland and Italy with stays in Paris, Lucerne, Zurich, Venice, Florence, and Rome. Enjoy Paris Hop on Hop off tour, Eiffel Tower, Swiss Pass benefits, Mount Titlis adventure, Venice gondola ride, Pisa day trip, Rome Hop on Hop off tour with skip-the-line Vatican access. Perfect for comprehensive European exploration.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "11N12D Paris, Switzerland & Italy Holiday",
            costBasis: "EUR 2'850/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Paris",
                hotel: "Campanille Hotel Bercy Village or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Lucerne",
                hotel: "Ibis Styles Luzern or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Venice",
                hotel: "San Marco Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Florence",
                hotel: "Atlantic Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Rome",
                hotel: "Palladium Palace or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Paris, private transfer to hotel",
            "Day 2: Paris Hop on Hop off Tour, Seine River Cruise, Eiffel Tower 2nd Level",
            "Day 3: Train to Lucerne, Lake Lucerne, Chapel Bridge, Lion Monument",
            "Day 4: Excursion to Mt. Titlis with Ice Flyer",
            "Day 5: Train to Zurich, Lake Zurich, Old Town, Rhine Falls, Lindt Chocolate",
            "Day 6: Train to Venice, gondola ride",
            "Day 7: Train to Florence, day trip to Pisa & Leaning Tower",
            "Day 8: Train to Rome, Hop on Hop off Tour, Colosseum, Roman Forum, Sistine Chapel",
            "Day 9: Rome exploration, skip-the-line Vatican access",
            "Day 10: Departure from Rome Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Paris - Campanille Hotel Bercy Village or Similar",
            "02 Nights accommodation in Lucerne - Ibis Styles Luzern or Similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or Similar",
            "02 Nights accommodation in Venice - San Marco Palace or Similar",
            "01 Night accommodation in Florence - Atlantic Palace or Similar",
            "02 Nights accommodation in Rome - Palladium Palace or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Paris - Basel",
            "2nd Class Train Ticket from Zurich - Venice",
            "2nd Class Train Ticket from Venice - Florence",
            "2nd Class Train Ticket from Florence - Rome",
            "Paris Hop on & Hop Off 24 Hours City Tour",
            "Seine River Cruise Ticket",
            "Skip the Line: Eiffel Tower 2nd Level Tickets",
            "02nd Class 04 Days Consecutive Swiss Pass",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion to Mt. Titlis with Ice Flyer",
            "Visit Rhine Falls with Swiss Pass (Boat Ride Optional)",
            "Visit Lake Zurich, Old Town, Landquart Shopping Village with Swiss Pass",
            "Lindt Home of Chocolate Tickets",
            "Venice Canal Gondola Ride",
            "Day Trip to Pisa & Leaning Tower from Florence (Leaning Tower from outside)",
            "Rome Hop on & Hop Off 24 Hours City Tour",
            "Skip the Line: Colosseum, Roman Forum & Sistine Chapel",
            "Private transfer from Airport - Hotel - Train Station in Paris",
            "Private transfer from Hotel - Train Station in Zurich",
            "Private transfer from Train Station - Hotel - Train Station in Venice",
            "Private transfer from Train Station - Hotel - Train Station in Florence",
            "Private transfer from Airport - Hotel - Train Station in Rome"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Begin your journey with a warm welcome at Paris Airport, where you'll embark on a private transfer to your hotel. After checking in, spend the evening exploring the city's charm, and retire for the night in Paris."
            },
            {
                day: 2,
                title: "Paris City Exploration",
                description: "After a delicious breakfast, hop on and off the city buses, taking in the sights and sounds of Paris. Later, enjoy a serene Seine River Cruise, and skip the line to ascend to the 2nd level of the Eiffel Tower for a breathtaking view. Spend the rest of the evening exploring the city before retiring for the night in Paris."
            },
            {
                day: 3,
                title: "Journey to Lucerne",
                description: "In the morning, transfer to the train station and board a 2nd class train from Paris to Basel. After arriving in Basel, transfer to another train to Lucerne, where you'll use your Swiss Pass for the journey. Upon arrival, check into your hotel and visit the picturesque Lake Lucerne, Chapel Bridge, and Lion Monument with your Swiss Pass. End the day with an overnight stay in Lucerne."
            },
            {
                day: 4,
                title: "Mount Titlis Excursion",
                description: "In the morning, embark on an excursion to the top of Mt. Titlis, accompanied by an ice flyer for an unforgettable experience. Spend the rest of the day exploring Lucerne before retiring for the night."
            },
            {
                day: 5,
                title: "Journey to Zurich",
                description: "After breakfast, board a train from Lucerne to Zurich and check into your hotel. Visit the beautiful Lake Zurich, Old Town, and Landquart Shopping Village with your Swiss Pass. Later, visit the stunning Rhine Falls with your Swiss Pass and enjoy a Lindt Chocolate Factory tour. End the day with an overnight stay in Zurich."
            },
            {
                day: 6,
                title: "Journey to Venice",
                description: "Transfer to Zurich Train station and board a 2nd class train to Venice. Upon arrival, take a private transfer to your hotel and check in. Spend the evening exploring the enchanting city with a gondola ride, and retire for the night in Venice."
            },
            {
                day: 7,
                title: "Journey to Florence & Pisa Day Trip",
                description: "After breakfast, take a private transfer to the Venice Train station and board a 2nd class train to Florence. Upon arrival, take another private transfer to your hotel and check in. Spend the day exploring the city, and in the evening, take a day trip to Pisa to see the famous Leaning Tower. Retire for the night in Florence."
            },
            {
                day: 8,
                title: "Journey to Rome & Ancient Rome Exploration",
                description: "In the morning, take a private transfer from your hotel to the Florence Train station and board a 2nd class train to Rome. Upon arrival, take another private transfer to your hotel and check in. Spend the rest of the day exploring the city with a hop-on, hop-off city tour and skip-the-line access to the Colosseum, Roman Forum, and Sistine Chapel. Retire for the night in Rome."
            },
            {
                day: 9,
                title: "Rome City Exploration",
                description: "After breakfast, embark on a hop-on, hop-off city tour to further explore Rome, with skip-the-line access to the Colosseum, Roman Forum, and Sistine Chapel. Spend the rest of the day exploring the city before retiring for the night in Rome."
            },
            {
                day: 10,
                title: "Departure from Rome",
                description: "In the morning, transfer from your hotel to Rome Airport for your flight back to India, taking with you unforgettable memories of a truly diverse and beautiful journey."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    parisSwitzerlandItalyHolidayPackage12N13D: {
        id: "paris-switzerland-italy-holiday-package-12N13D",
        packageName: "Paris, Swiss & Italy Holiday Package (12 Nights & 13 Days)",
        days: 13,
        nights: 12,
        amount: 2950,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Paris, Swiss & Italy Holiday Package (12 Nights & 13 Days) - Experience the best of France, Switzerland and Italy with extended stays including two magical days at Disneyland. Stays in Paris, Lucerne, Zurich, Venice, Florence, and Rome. Enjoy Paris Hop on Hop off tour, Eiffel Tower, two Disneyland days, Swiss Pass benefits, Mount Titlis adventure, Venice gondola ride, Pisa day trip, Rome Hop on Hop off tour with skip-the-line Vatican access. Perfect for comprehensive European exploration with Disney magic.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "12N13D Paris, Switzerland & Italy Holiday",
            costBasis: "EUR 2'950/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Paris",
                hotel: "Campanille Hotel Bercy Village or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Lucerne",
                hotel: "Ibis Styles Luzern or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Zurich",
                hotel: "Novotel Zurich Airport Messe or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Venice",
                hotel: "San Marco Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Florence",
                hotel: "Atlantic Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Rome",
                hotel: "Palladium Palace or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Paris, private transfer to hotel",
            "Day 2: Paris Hop on Hop off Tour, Seine River Cruise, Disneyland Day 1",
            "Day 3: Second day at Disneyland Paris",
            "Day 4: Train to Lucerne, Lake Lucerne, Chapel Bridge, Lion Monument",
            "Day 5: Excursion to Mt. Titlis with Ice Flyer",
            "Day 6: Train to Zurich, Lake Zurich, Old Town, Landquart Shopping Village",
            "Day 7: Rhine Falls visit and Lindt Home of Chocolate",
            "Day 8: Train to Venice, hotel check-in",
            "Day 9: Venice City Gondola Ride",
            "Day 10: Train to Florence, day trip to Pisa & Leaning Tower",
            "Day 11: Train to Rome, hotel check-in",
            "Day 12: Rome Hop on Hop off Tour, Colosseum, Roman Forum, Sistine Chapel",
            "Day 13: Departure from Rome Airport"
        ],
        inclusions: [
            "03 Nights accommodation in Paris - Campanille Hotel Bercy Village or Similar",
            "02 Nights accommodation in Lucerne - Ibis Styles Luzern or Similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or Similar",
            "02 Nights accommodation in Venice - San Marco Palace or Similar",
            "01 Night accommodation in Florence - Atlantic Palace or Similar",
            "02 Nights accommodation in Rome - Palladium Palace or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Paris - Basel",
            "2nd Class Train Ticket from Zurich - Venice by 2nd Class",
            "2nd Class Train Ticket from Venice - Florence by 2nd Class",
            "2nd Class Train Ticket from Florence - Rome by 2nd Class",
            "Paris Hop on & Hop Off 24 Hours City Tour",
            "Seine River Cruise Ticket",
            "Skip the Line: Eiffel Tower 2nd Level Tickets",
            "Day Trip to Disneyland - 01 Day 01 Park with Shared Coach Transportation",
            "02nd Class 04 Days Consecutive Swiss Pass",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion to Mt. Titlis with Ice Flyer",
            "Visit Rhine Falls with Swiss Pass (Boat Ride Optional)",
            "Visit Lake Zurich, Old Town, Landquart Shopping Village with Swiss Pass",
            "Lindt Home of Chocolate Tickets",
            "Venice Canal Gondola Ride",
            "Day Trip to Pisa & Leaning Tower from Florence (Leaning Tower from outside)",
            "Rome Hop on & Hop Off 24 Hours City Tour",
            "Skip the Line: Colosseum, Roman Forum & Sistine Chapel",
            "Private transfer from Airport - Hotel - Train Station in Paris",
            "Private transfer from Hotel - Train Station in Zurich",
            "Private transfer from Train Station - Hotel - Train Station in Venice",
            "Private transfer from Train Station - Hotel - Train Station in Florence",
            "Private transfer from Airport - Hotel - Train Station in Rome"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Optional boat ride at Rhine Falls",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                description: "Upon arrival at Paris Airport, you will be provided with a private transfer to your hotel in Paris. Complete the check-in process and enjoy an overnight stay in Paris."
            },
            {
                day: 2,
                title: "Paris City Exploration & Disneyland Day 1",
                description: "Begin the day with breakfast, followed by a Paris Hop-on & Hop-off City Tour and a Seine River Cruise. Additionally, embark on a day trip to Disneyland, exploring the theme park with transportation provided. Spend the night in Paris."
            },
            {
                day: 3,
                title: "Second Day at Disneyland",
                description: "Enjoy breakfast and another delightful day trip to Disneyland, exploring the park with transportation included. Overnight stay in Paris."
            },
            {
                day: 4,
                title: "Journey to Lucerne",
                description: "After breakfast, avail a private transfer to the train station. Board a train from Paris to Basel in 2nd class and then transfer to another train from Basel to Lucerne. Check in at the hotel and visit Lake Lucerne, Chapel Bridge, and the Lion Monument using the Swiss Pass. Stay overnight in Lucerne."
            },
            {
                day: 5,
                title: "Mount Titlis Excursion",
                description: "Start the day with breakfast and embark on an excursion to Mt. Titlis, including the Ice Flyer experience. Overnight stay in Lucerne."
            },
            {
                day: 6,
                title: "Journey to Zurich",
                description: "Have breakfast and board the train from Lucerne to Zurich using the Swiss pass. Check in at the hotel and later explore Lake Zurich, Old Town, and Landquart Shopping Village with the Swiss Pass. Stay overnight in Zurich."
            },
            {
                day: 7,
                title: "Rhine Falls and Chocolate Experience",
                description: "Begin the day with breakfast and visit Rhine Falls with the Swiss Pass, including Lindt Chocolate Factory Tickets. Overnight stay in Zurich."
            },
            {
                day: 8,
                title: "Journey to Venice",
                description: "After breakfast, take a private transfer to Zurich Train station. Board the train from Zurich to Venice in 2nd class. Enjoy a private transfer from the train station to the hotel in Venice and check in for an overnight stay."
            },
            {
                day: 9,
                title: "Venice Gondola Experience",
                description: "Start the day with breakfast and experience a Venice City Gondola Ride. Overnight stay in Venice."
            },
            {
                day: 10,
                title: "Journey to Florence & Pisa Day Trip",
                description: "Enjoy breakfast and take a private transfer from the hotel to Venice Train station. Board the train from Venice to Florence, followed by a private transfer from Florence Train station to the hotel. Check in and embark on a day trip to the Pisa Leaning Tower from Florence. Overnight stay in Florence."
            },
            {
                day: 11,
                title: "Journey to Rome",
                description: "After breakfast, take a private transfer from the Florence hotel to the train station. Board the train from Florence to Rome in 2nd class. Enjoy a private transfer from Rome Train station to the hotel and check in. Overnight stay in Rome."
            },
            {
                day: 12,
                title: "Rome City Exploration",
                description: "Begin the day with breakfast and explore Rome with a Hop-on & Hop-off City Tour. Skip the line at the Colosseum, Roman Forum, and Sistine Chapel. Stay overnight in Rome."
            },
            {
                day: 13,
                title: "Departure from Rome",
                description: "Have breakfast and conclude your journey with a departure transfer from the Rome hotel to the airport for your flight back to India."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    italyHolidayPackage7N8D: {
        id: "italy-holiday-package-7N8D",
        packageName: "Italy Holiday Package (07 Nights & 08 Days)",
        days: 8,
        nights: 7,
        amount: 1650,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Italy Holiday Package (07 Nights & 08 Days) - Experience the best of Italy with stays in Rome, Florence, Venice, and Milan. Enjoy Rome Hop on Hop off tour with skip-the-line Vatican access, Pisa day trip, Venice gondola ride and islands tour, Milan Hop on Hop off tour. Perfect for Italian culture, history, and romance.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "7N8D Italy Holiday",
            costBasis: "EUR 1'650/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Rome",
                hotel: "Palladium Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Florence",
                hotel: "Atlantic Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Venice",
                hotel: "San Marco Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Milan",
                hotel: "Neo Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Rome, private transfer to hotel",
            "Day 2: Rome Hop on Hop off Tour, Colosseum, Roman Forum, Sistine Chapel",
            "Day 3: Train to Florence, day trip to Pisa & Leaning Tower",
            "Day 4: Train to Venice, gondola ride",
            "Day 5: Murano, Burano & Torcello Islands Tour",
            "Day 6: Train to Milan, hotel check-in",
            "Day 7: Milan Hop on Hop off City Tour",
            "Day 8: Departure from Milan Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Rome - Palladium Palace or Similar",
            "01 Night accommodation in Florence - Atlantic Palace or Similar",
            "02 Nights accommodation in Venice - San Marco Palace or Similar",
            "02 Nights accommodation in Milan - Neo Hotel or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Rome - Florence",
            "2nd Class Train Ticket from Florence - Venice",
            "2nd Class Train Ticket from Venice - Milan",
            "Rome Hop on & Hop Off 24 Hours City Tour",
            "Skip the Line: Colosseum, Roman Forum & Sistine Chapel",
            "Half Day Trip to Pisa & Leaning Tower from Florence (Leaning Tower from outside)",
            "Venice Canal Gondola Ride",
            "Murano, Burano & Torcello Island Tour from Venice",
            "Milan Hop on & Hop off 24 Hours City Tour",
            "Private transfer from Airport - Hotel - Train Station in Rome",
            "Private transfer from Train Station - Hotel - Train Station in Florence",
            "Private transfer from Train Station - Hotel - Train Station in Venice",
            "Private transfer from Train Station - Hotel - Airport in Milan"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Rome",
                description: "Upon arrival at Rome Airport, you'll be provided with a private departure transfer from the airport to your hotel in Rome. Complete the check-in process and enjoy an overnight stay in Rome."
            },
            {
                day: 2,
                title: "Rome City Exploration",
                description: "Begin the day with breakfast and embark on a 24-hour Rome Hop-on & Hop-off City Tour. Additionally, skip the line at iconic landmarks such as the Colosseum, Roman Forum, and Sistine Chapel. Stay overnight in Rome."
            },
            {
                day: 3,
                title: "Journey to Florence & Pisa Day Trip",
                description: "Enjoy breakfast and take a private transfer from the Rome hotel to the train station. Board the train from Rome to Florence and then experience a private transfer from the Florence station to your hotel. Check in and indulge in a day trip to the Pisa Leaning Tower from Florence. Overnight stay in Florence."
            },
            {
                day: 4,
                title: "Journey to Venice & Gondola Ride",
                description: "After breakfast, avail a private transfer from the Florence hotel to the train station. Board the train from Florence to Venice in 2nd class and then enjoy a private transfer from the Venice station to your hotel. Check in and later, experience a Venice Gondola Ride. Stay overnight in Venice."
            },
            {
                day: 5,
                title: "Venice Islands Tour",
                description: "Start the day with breakfast and venture on a tour to Murano, Burano & Torcello Islands. Overnight stay in Venice."
            },
            {
                day: 6,
                title: "Journey to Milan",
                description: "Have breakfast and take a private transfer from the Venice hotel to the train station. Board the train from Venice to Milan, followed by a private transfer from the Milan station to your hotel. Enjoy an overnight stay in Milan."
            },
            {
                day: 7,
                title: "Milan City Exploration",
                description: "After breakfast, explore Milan with a Hop-on & Hop-off City Tour. Stay overnight in Milan."
            },
            {
                day: 8,
                title: "Departure from Milan",
                description: "Begin the day with breakfast and take a private transfer from the Milan hotel to the airport to board your flight back to India."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    italyHolidayPackage9N10D: {
        id: "italy-holiday-package-9N10D",
        packageName: "Italy Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 2150,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Italy Holiday Package (09 Nights & 10 Days) - Experience the best of Italy with stays in Rome, Naples, Florence, Venice, and Milan. Enjoy Rome Hop on Hop off tour with skip-the-line Vatican access, Naples Hop on Hop off with Amalfi Coast day trip, Pisa day trip, Venice gondola ride and islands tour, Milan Hop on Hop off tour. Perfect for comprehensive Italian exploration from ancient Rome to modern Milan.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Italy Holiday",
            costBasis: "EUR 2'150/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Rome",
                hotel: "Palladium Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Naples",
                hotel: "Grand Hotel Europa or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Florence",
                hotel: "Atlantic Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Venice",
                hotel: "San Marco Palace or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Milan",
                hotel: "Neo Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Rome, private transfer to hotel",
            "Day 2: Rome Hop on Hop off Tour, Colosseum, Roman Forum, Sistine Chapel",
            "Day 3: Train to Naples, Naples Hop on Hop off City Tour",
            "Day 4: Day Trip to Sorrento, Positano & Amalfi from Naples",
            "Day 5: Train to Florence, day trip to Pisa & Leaning Tower",
            "Day 6: Train to Venice, gondola ride",
            "Day 7: Murano, Burano & Torcello Islands Tour",
            "Day 8: Train to Milan, Milan Hop on Hop off City Tour",
            "Day 9: Milan city exploration",
            "Day 10: Departure from Milan Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Rome - Palladium Palace or Similar",
            "02 Nights accommodation in Naples - Grand Hotel Europa or Similar",
            "01 Night accommodation in Florence - Atlantic Palace or Similar",
            "02 Nights accommodation in Venice - San Marco Palace or Similar",
            "02 Nights accommodation in Milan - Neo Hotel or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Rome - Naples",
            "2nd Class Train Ticket from Naples - Florence",
            "2nd Class Train Ticket from Florence - Venice",
            "2nd Class Train Ticket from Venice - Milan",
            "Rome Hop on & Hop Off 24 Hours City Tour",
            "Skip the Line: Colosseum, Roman Forum & Sistine Chapel",
            "Naples Hop on & Hop Off 24 Hours City Tour",
            "Day Trip to Sorrento, Positano & Amalfi from Naples",
            "Day Trip to Pisa & Leaning Tower from Florence (Leaning Tower from outside)",
            "Venice Canal Gondola Ride",
            "Murano, Burano & Torcello Island Tour from Venice",
            "Milan Hop on & Hop off 24 Hours City Tour",
            "Private transfer from Airport - Hotel - Train Station in Rome",
            "Private transfer from Train Station - Hotel - Train Station in Naples",
            "Private transfer from Train Station - Hotel - Train Station in Florence",
            "Private transfer from Train Station - Hotel - Train Station in Venice",
            "Private transfer from Train Station - Hotel - Airport in Milan"
        ],
        exclusions: [
            "International flights",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Rome",
                description: "Immerse yourself in the breathtaking beauty as you arrive at Rome Airport. A private departure transfer awaits, whisking you away from the airport to your enchanting hotel in Rome. Check in and savor the anticipation of an unforgettable overnight stay in the heart of Rome."
            },
            {
                day: 2,
                title: "Rome City Exploration",
                description: "Awaken to the allure of the Eternal City with a delightful breakfast. Embark on a 24-hour Rome Hop-on & Hop-off City Tour, where each moment is a journey through history and art. Skip the lines at the Colosseum, Roman Forum, and Sistine Chapel, and let the timeless wonders surround you during an enchanting overnight stay in Rome."
            },
            {
                day: 3,
                title: "Journey to Naples",
                description: "As the morning unfolds, relish a leisurely breakfast before a private transfer escorts you from your hotel to the Rome Train Station. Board the train bound for Naples, where the scenic beauty of the journey unfolds. Upon arrival, another private transfer awaits, leading you to your Naples haven. Immerse yourself in the city with a Naples Hop-on & Hop-off City Tour, culminating in a night of serenity in this coastal paradise."
            },
            {
                day: 4,
                title: "Amalfi Coast Day Trip",
                description: "Delight in breakfast as you prepare for a day filled with wonders. Embark on a day trip to Sorrento, Positano, and Amalfi from Naples, where the coastal charm and vibrant landscapes will leave an indelible mark. Return to Naples for a restful overnight stay."
            },
            {
                day: 5,
                title: "Journey to Florence & Pisa Day Trip",
                description: "Begin the day with a delectable breakfast, followed by a private transfer from your Naples retreat to the train station. Board the train to Florence, where the rolling hills and vineyards unfold before your eyes. A private transfer from the Florence Train Station escorts you to your hotel. After checking in, indulge in a day trip to the iconic Pisa Leaning Tower from Florence. The night brings tranquility and awe-inspiring beauty in Florence."
            },
            {
                day: 6,
                title: "Journey to Venice & Gondola Ride",
                description: "Let the morning sunlight guide you to a delectable breakfast before a private transfer from your hotel to the train station. Board the train to Venice, where a private transfer leads you to your Venetian sanctuary. Check in and then explore the enchanting canals with a Venice Gondola Ride. The night in Venice promises a blend of romance and unparalleled views."
            },
            {
                day: 7,
                title: "Venice Islands Tour",
                description: "As the sun paints the Venetian sky, enjoy a leisurely breakfast before embarking on a journey to Murano, Burano, and Torcello Islands. The colors and charm of these islands will captivate your senses, offering a serene overnight stay in Venice."
            },
            {
                day: 8,
                title: "Journey to Milan",
                description: "Relish a delightful breakfast, and let the magic of Venice linger as you take a private transfer from your hotel to the train station. Board the train bound for Milan, where another private transfer awaits at the station, guiding you to your Milanese abode. Check in and embrace the allure of Milan with a Hop-on & Hop-off City Tour. The night is illuminated with the vibrant spirit of Milan."
            },
            {
                day: 9,
                title: "Milan City Exploration",
                description: "Awaken to the allure of Milan as you enjoy a sumptuous breakfast. Explore the city at your own pace with a Milan Hop-on & Hop-off City Tour, discovering its cultural treasures. The night in Milan is a celebration of art, fashion, and sophistication."
            },
            {
                day: 10,
                title: "Departure from Milan",
                description: "Bid farewell to the enchanting city with a final breakfast. A private transfer awaits at your hotel, escorting you to the airport for your flight back to India. Carry the memories of this scenic journey, where each destination unfolded like a masterpiece, etched in your heart forever."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },

};
