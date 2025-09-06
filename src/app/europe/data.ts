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
        amount: 160099,
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
        amount: 294165,
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
        amount: 304706,
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
        amount: 170430,
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
        amount: 222074,
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
    brusselsAmsterdamGermanyHolidayPackage7N8D: {
        id: "brussels-amsterdam-germany-holiday-package-7N8D",
        packageName: "Brussels, Amsterdam & Germany Holiday Package (07 Nights & 08 Days)",
        days: 8,
        nights: 7,
        amount: 118268,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Brussels, Amsterdam & Germany Holiday Package (07 Nights & 08 Days) - Experience the best of Belgium and Netherlands with stays in Brussels, Amsterdam and Frankfurt. Enjoy Brussels Hop on & Hop off tour, day trip to Bruges & Ghent, Amsterdam canal cruise, day trip to Volendam, Marken & Windmills, Frankfurt Hop on & Hop off tour. Perfect for European culture, history, and scenic beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "7N8D Brussels, Amsterdam & Germany Holiday",
            costBasis: "EUR 1'145/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Brussels",
                hotel: "Hotel Floris Arlequin Grand Place or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Amsterdam",
                hotel: "Avenue Hotel Amsterdam or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Frankfurt",
                hotel: "Topas or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Brussels Airport, private transfer to hotel",
            "Day 2: Brussels Hop on & Hop off City Tour",
            "Day 3: Day Trip to Bruges & Ghent from Brussels",
            "Day 4: Train to Amsterdam, Amsterdam Canal Cruise",
            "Day 5: Day Trip to Volendam, Marken & Windmills from Amsterdam",
            "Day 6: Train to Frankfurt, Frankfurt Hop on & Hop off City Tour",
            "Day 7: Free time in Frankfurt",
            "Day 8: Departure from Frankfurt Airport"
        ],
        inclusions: [
            "03 Nights accommodation in Brussels - Hotel Floris Arlequin Grand Place or Similar",
            "02 Nights accommodation in Amsterdam - Avenue Hotel Amsterdam or Similar",
            "02 Nights accommodation in Frankfurt - Topas or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Brussels - Amsterdam",
            "2nd Class Train Ticket from Amsterdam - Frankfurt",
            "Brussels Hop on & Hop Off 24 Hours City Tour",
            "Day Trip to Bruges & Ghent from Brussels",
            "Amsterdam Canal Cruise Tickets",
            "Day Trip to Volendam, Marken & Windmills from Amsterdam",
            "Frankfurt Hop on & Hop Off 24 Hours City Tour",
            "Private transfer from Airport - Hotel - Train Station in Brussels",
            "Private transfer from Train Station - Hotel - Train Station in Amsterdam",
            "Private transfer from Train Station - Hotel - Airport in Frankfurt"
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
                title: "Arrival in Brussels",
                description: "Embark on a journey into the heart of Europe as you touch down at Brussels Airport. A private departure transfer awaits, whisking you from the airport to your haven in Brussels. Check into the hotel and let the charm of Brussels captivate you during an enchanting overnight stay."
            },
            {
                day: 2,
                title: "Brussels City Exploration",
                description: "Awaken to the allure of Brussels and indulge in a delightful breakfast. Immerse yourself in the city's beauty with a Brussels Hop-on & Hop-off City Tour, where each landmark tells a story of history and culture. The night in Brussels unfolds with a blend of elegance and architectural marvels."
            },
            {
                day: 3,
                title: "Bruges & Ghent Day Trip",
                description: "Begin the day with a leisurely breakfast, setting the stage for a scenic adventure. Today, delight in a day trip to the enchanting cities of Bruges and Ghent from Brussels. Explore the cobbled streets, picturesque canals, and medieval charm, returning to Brussels for a serene overnight stay."
            },
            {
                day: 4,
                title: "Journey to Amsterdam",
                description: "After a delectable breakfast, a private transfer awaits to take you from your Brussels retreat to the train station. Board the train to Amsterdam, where the journey through picturesque landscapes unfolds. A private transfer from Amsterdam Train Station guides you to your hotel. Check in and later, embark on an Amsterdam City Canal Cruise, a mesmerizing journey through the iconic canals. The night in Amsterdam promises a blend of tranquility and Dutch splendor."
            },
            {
                day: 5,
                title: "Volendam, Marken & Windmills Day Trip",
                description: "Relish a delightful breakfast and embark on a captivating day trip to Volendam, Marken, and the iconic Windmills from Amsterdam. The landscapes and cultural richness will leave an indelible mark, culminating in a serene overnight stay in Amsterdam."
            },
            {
                day: 6,
                title: "Journey to Frankfurt",
                description: "Enjoy a leisurely breakfast, and let the morning sunlight guide you from your Amsterdam haven to the train station. Board the train to Frankfurt, where the scenic beauty of the journey unfolds. A private transfer from Frankfurt Train Station escorts you to your hotel. Check in and spend the rest of the day at leisure, surrounded by the charm of Frankfurt. The night is a tapestry of relaxation and cityscape beauty."
            },
            {
                day: 7,
                title: "Frankfurt City Exploration",
                description: "Awaken to the beauty of Frankfurt and enjoy a leisurely breakfast. Immerse yourself in the city's vibrancy with a Frankfurt Hop-on & Hop-off City Tour, exploring its cultural treasures. The night in Frankfurt is adorned with the city's modernity and historical charm."
            },
            {
                day: 8,
                title: "Departure from Frankfurt",
                description: "As the journey through Europe draws to a close, savor a final breakfast. A private transfer awaits at your hotel, escorting you to the airport for your flight back to India. Carry the memories of this scenic European odyssey, where each city unfolded like a canvas of natural beauty and cultural richness, etched in your heart forever."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1559113202-c916b8e44373?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1559113202-c916b8e44373?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    pragueViennaBudapestHolidayPackage6N7D: {
        id: "prague-vienna-budapest-holiday-package-6N7D",
        packageName: "Prague, Vienna & Budapest Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 67139,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Prague, Vienna & Budapest Holiday Package (06 Nights & 07 Days) - Experience the best of Czech Republic, Austria and Hungary with stays in Prague, Vienna and Budapest. Enjoy Prague, Vienna and Budapest Hop on & Hop off tours, train journeys between cities. Perfect for Central European culture, history, and architectural beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Prague, Vienna & Budapest Holiday",
            costBasis: "EUR 650/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Prague",
                hotel: "Atlantic or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Vienna",
                hotel: "Arion Cityhotel Vienna or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Budapest",
                hotel: "Corvin Center Suites or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Prague, private transfer to hotel",
            "Day 2: Prague Hop on & Hop off City Tour",
            "Day 3: Train to Vienna, private transfer to hotel",
            "Day 4: Vienna Hop on & Hop off City Tour",
            "Day 5: Train to Budapest, private transfer to hotel",
            "Day 6: Budapest Hop on & Hop off City Tour",
            "Day 7: Departure from Budapest Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Prague - Atlantic or Similar",
            "02 Nights accommodation in Vienna - Arion Cityhotel Vienna or Similar",
            "02 Nights accommodation in Budapest - Corvin Center Suites or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Prague - Vienna",
            "2nd Class Train Ticket from Vienna - Budapest",
            "Prague Hop on & Hop Off 24 Hours City Tour",
            "Vienna Hop on & Hop Off 24 Hours City Tour",
            "Budapest Hop on & Hop Off 24 Hours City Tour",
            "Private transfer from Airport - Hotel - Train Station in Prague",
            "Private transfer from Train Station - Hotel - Train Station in Vienna",
            "Private transfer from Train Station - Hotel - Airport in Budapest"
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
                title: "Arrival in Prague",
                description: "Your journey unfolds in the enchanting city of Prague. Upon your arrival, a private transfer seamlessly whisks you from the airport to your chosen haven. Check in at the hotel, where the charm of Prague welcomes you. The rest of the day is yours to savor at leisure, as you immerse yourself in the captivating atmosphere of this historic city. Allow the allure of Prague to paint your first night with a palette of tranquility and anticipation."
            },
            {
                day: 2,
                title: "Prague City Exploration",
                description: "Wake up to the beauty of Prague, and after a hearty breakfast, embark on a scenic Prague Hop-on & Hop-off City Tour. Let the city's history unfold before your eyes as you explore its iconic landmarks. The night in Prague promises to be a canvas of discovery and delight."
            },
            {
                day: 3,
                title: "Journey to Vienna",
                description: "As the morning sun bathes Prague in golden hues, indulge in a delicious breakfast before a private transfer escorts you from your hotel to the train station. Board the train bound for Vienna in 2nd class, where the picturesque journey unfolds. Another private transfer awaits at the Vienna train station, guiding you to your Vienna retreat. Check in at the hotel and embrace the leisurely pace of the day, surrounded by the elegance of Vienna. The night in Vienna is an ode to classical beauty and modern sophistication."
            },
            {
                day: 4,
                title: "Vienna City Exploration",
                description: "After a sumptuous breakfast, immerse yourself in the grandeur of Vienna with a Vienna Hop-on & Hop-off City Tour. Explore the city's cultural gems and architectural marvels, and let the opulence of Vienna captivate you. The night promises a blend of imperial charm and contemporary allure."
            },
            {
                day: 5,
                title: "Journey to Budapest",
                description: "Awaken to another day of exploration as you enjoy breakfast and then prepare for a private transfer from your Vienna hotel to the train station. Board the train to Budapest in 2nd class, where the journey through scenic landscapes unfolds. Upon arrival in Budapest, another private transfer guides you to your Budapest sanctuary. Check in at the hotel and relish the leisurely atmosphere. The night in Budapest is a celebration of the city's rich history and vibrant energy."
            },
            {
                day: 6,
                title: "Budapest City Exploration",
                description: "Begin your day with a delightful breakfast before immersing yourself in the beauty of Budapest with a Budapest Hop-on & Hop-off City Tour. Explore the city's iconic landmarks and cultural treasures, and let the Danube River weave its magic around you. The night in Budapest is adorned with a tapestry of lights and the charm of a city that straddles the past and the present."
            },
            {
                day: 7,
                title: "Departure from Budapest",
                description: "After a final breakfast in Budapest, bid farewell to this remarkable journey. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Budapest Airport with cherished memories of a scenic adventure through Prague, Vienna, and Budapest, where each city unfolded like a chapter in a story of cultural richness and architectural splendor."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    pragueAustriaBudapestHolidayPackage9N10D: {
        id: "prague-austria-budapest-holiday-package-9N10D",
        packageName: "Prague, Austria & Budapest Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 108455,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Prague, Austria & Budapest Holiday Package (09 Nights & 10 Days) - Experience the best of Czech Republic, Austria and Hungary with extended stays in Prague, Vienna, Innsbruck, Salzburg and Budapest. Enjoy Prague, Vienna, Salzburg and Budapest Hop on & Hop off tours, Swarovski Crystal World, train journeys between cities. Perfect for comprehensive Central European culture, history, and Alpine beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Prague, Austria & Budapest Holiday",
            costBasis: "EUR 1'050/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Prague",
                hotel: "Atlantic or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Vienna",
                hotel: "Arion Cityhotel Vienna or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Innsbruck",
                hotel: "Hilton Garden Inn Innsbruck Tivoli or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Salzburg",
                hotel: "Fourside Hotel Salzburg or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Budapest",
                hotel: "Corvin Center Suites or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Prague, private transfer to hotel",
            "Day 2: Prague Hop on & Hop off City Tour",
            "Day 3: Train to Vienna, private transfer to hotel",
            "Day 4: Vienna Hop on & Hop off City Tour",
            "Day 5: Train to Innsbruck, Swarovski Crystal World",
            "Day 6: Train to Salzburg, Swarovski Crystal World",
            "Day 7: Salzburg Hop on & Hop off City Tour",
            "Day 8: Train to Budapest, private transfer to hotel",
            "Day 9: Budapest Hop on & Hop off City Tour",
            "Day 10: Departure from Budapest Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Prague - Atlantic or Similar",
            "02 Nights accommodation in Vienna - Arion Cityhotel Vienna or Similar",
            "01 Night accommodation in Innsbruck - Hilton Garden Inn Innsbruck Tivoli or Similar",
            "02 Nights accommodation in Salzburg - Fourside Hotel Salzburg or Similar",
            "02 Nights accommodation in Budapest - Corvin Center Suites or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Prague - Vienna",
            "2nd Class Train Ticket from Vienna - Innsbruck",
            "2nd Class Train Ticket from Innsbruck - Salzburg",
            "2nd Class Train Ticket from Salzburg - Budapest",
            "Prague Hop on & Hop Off 24 Hours City Tour",
            "Vienna Hop on & Hop Off 24 Hours City Tour",
            "Budapest Hop on & Hop Off 24 Hours City Tour",
            "Salzburg Hop on & Hop Off 24 Hours City Tour",
            "Swarovski Crystal World Tickets",
            "Private transfer from Airport - Hotel - Train Station in Prague",
            "Private transfer from Train Station - Hotel - Train Station in Vienna",
            "Private transfer from Train Station - Hotel - Train Station in Innsbruck",
            "Private transfer from Train Station - Hotel - Train Station in Salzburg",
            "Private transfer from Train Station - Hotel - Airport in Budapest"
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
                title: "Arrival in Prague",
                description: "Your picturesque sojourn begins with the magical city of Prague. Upon your arrival, a private transfer ushers you from the airport to the hotel, where the blend of history and charm unfolds. Check in and let the allure of Prague captivate your senses. The rest of the day is yours to relish at leisure, immersed in the enchanting atmosphere. Welcome the night in Prague with a tapestry of tranquility and anticipation."
            },
            {
                day: 2,
                title: "Prague City Exploration",
                description: "Awaken to the beauty of Prague and savor a delightful breakfast. Today is dedicated to exploring the city's treasures with a Prague Hop-on & Hop-off City Tour. Let the historic landmarks and winding streets reveal the stories of the past. The night in Prague is a canvas of discovery and wonder."
            },
            {
                day: 3,
                title: "Journey to Vienna",
                description: "As morning light bathes Prague, enjoy a sumptuous breakfast before a private transfer escorts you from your hotel to the train station. Board the train bound for Vienna in 2nd class, where scenic vistas unfold along the way. Upon arrival, another private transfer guides you to your Vienna sanctuary. Check in and embrace the leisurely pace, surrounded by the elegance of Vienna. The night in Vienna is a symphony of classical beauty and modern sophistication."
            },
            {
                day: 4,
                title: "Vienna City Exploration",
                description: "After a delectable breakfast, immerse yourself in the grandeur of Vienna with a Vienna Hop-on & Hop-off City Tour. Explore the city's cultural gems and architectural marvels, letting the opulence of Vienna captivate your soul. The night promises a blend of imperial charm and contemporary allure."
            },
            {
                day: 5,
                title: "Journey to Innsbruck",
                description: "Wake up to a day of scenic delights as you enjoy breakfast and prepare for a private transfer from your Vienna hotel to the train station. Board the train to Innsbruck in 2nd class, where the journey through picturesque landscapes unfolds. Upon arrival, another private transfer leads you to your Innsbruck haven. Check in at the hotel and later, immerse yourself in the brilliance of Swarovski Crystal World. The night in Innsbruck is adorned with Alpine charm and crystal brilliance."
            },
            {
                day: 6,
                title: "Journey to Salzburg",
                description: "Begin the day with a delightful breakfast before a private transfer takes you from your hotel to the train station. Board the train to Salzburg in 2nd class, where the journey through scenic landscapes enchants. Upon arrival, another private transfer guides you to your Salzburg refuge. Check in at the hotel and later, immerse yourself in the brilliance of Swarovski Crystal World. The night in Salzburg is a celebration of Mozart's legacy and baroque splendor."
            },
            {
                day: 7,
                title: "Salzburg City Exploration",
                description: "Awaken to the beauty of Salzburg and enjoy a leisurely breakfast before embarking on a Salzburg Hop-on & Hop-off City Tour. Explore the city's historic charm and musical heritage, surrounded by the beauty of the Austrian Alps. The night in Salzburg is a symphony of lights and cultural richness."
            },
            {
                day: 8,
                title: "Journey to Budapest",
                description: "After a sumptuous breakfast, bid farewell to Salzburg as you prepare for a private transfer from your hotel to the train station. Board the train to Budapest in 2nd class, where the journey through scenic landscapes unfolds. Upon arrival, another private transfer guides you to your Budapest sanctuary. Check in at the hotel and embrace the leisurely atmosphere. The night in Budapest is a celebration of thermal baths and the Danube's embrace."
            },
            {
                day: 9,
                title: "Budapest City Exploration",
                description: "Begin the day with a delightful breakfast before indulging in a Budapest Hop-on & Hop-off City Tour. Explore the city's iconic landmarks and rich history, captivated by the charm of the Buda Castle and the Parliament Building. The night in Budapest is a dance of lights on the Danube."
            },
            {
                day: 10,
                title: "Departure from Budapest",
                description: "As the scenic odyssey draws to a close, savor a final breakfast in Budapest. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Budapest Airport with cherished memories of a scenic journey through Prague, Vienna, Innsbruck, Salzburg, and Budapest—cities where each moment unfolded like a chapter in a story of cultural richness and scenic brilliance."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    austriaSwissHolidayPackage9N10D: {
        id: "austria-swiss-holiday-package-9N10D",
        packageName: "Austria & Swiss Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 170430,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Austria & Swiss Holiday Package (09 Nights & 10 Days) - Experience the best of Austria and Switzerland with stays in Vienna, Salzburg, Innsbruck, Lucerne, and Zurich. Enjoy Vienna and Salzburg Hop on & Hop off tours, Swarovski Crystal World, Swiss Pass benefits, Mount Titlis adventure, Lake cruises, Rhine Falls, Lindt Chocolate Factory, and train journeys. Perfect for Alpine beauty and European culture.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Austria & Swiss Holiday",
            costBasis: "EUR 1'650/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Vienna",
                hotel: "Arion Cityhotel Vienna or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Salzburg",
                hotel: "Fourside Hotel Salzburg or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Innsbruck",
                hotel: "Hilton Garden Inn Innsbruck Tivoli or Similar",
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
            "Day 1: Arrival in Vienna, private transfer to hotel",
            "Day 2: Vienna Hop on & Hop off City Tour",
            "Day 3: Train to Salzburg, private transfer to hotel",
            "Day 4: Salzburg Hop on & Hop off City Tour",
            "Day 5: Train to Innsbruck, Swarovski Crystal World",
            "Day 6: Train to Lucerne, Lake Lucerne, Chapel Bridge, Lion Monument",
            "Day 7: Excursion to Mt. Titlis with Ice Flyer",
            "Day 8: Train to Zurich, Rhine Falls visit",
            "Day 9: Lindt Chocolate Factory, Lake Zurich, Old Town, Landquart Shopping Village",
            "Day 10: Departure from Zurich Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Vienna - Arion Cityhotel Vienna or Similar",
            "02 Nights accommodation in Salzburg - Fourside Hotel Salzburg or Similar",
            "01 Night accommodation in Innsbruck - Hilton Garden Inn Innsbruck Tivoli or Similar",
            "02 Nights accommodation in Lucerne - Ibis Styles Luzern or Similar",
            "02 Nights accommodation in Zurich - Novotel Zurich Airport Messe or Similar",
            "Daily Breakfast",
            "2nd Class Train Ticket from Vienna - Salzburg",
            "2nd Class Train Ticket from Salzburg - Innsbruck",
            "2nd Class Train Ticket from Innsbruck - Zurich",
            "Vienna Hop on & Hop Off 24 Hours City Tour",
            "Salzburg Hop on & Hop Off 24 Hours City Tour",
            "Swarovski Crystal World Tickets",
            "02nd Class 04 Days Consecutive Swiss Pass",
            "Lake Lucerne Cruise with Swiss Pass",
            "Excursion to Mt. Titlis with Ice Flyer",
            "Visit Rhine Falls with Swiss Pass (Boat Ride Optional)",
            "Visit Lake Zurich, Old Town, Landquart Shopping Village with Swiss Pass",
            "Lindt Home of Chocolate Tickets",
            "Private transfer from Airport - Hotel - Train Station in Vienna",
            "Private transfer from Train Station - Hotel - Train Station in Salzburg",
            "Private transfer from Train Station - Hotel - Train Station in Innsbruck",
            "Private transfer from Airport - Hotel in Zurich"
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
                title: "Arrival in Vienna",
                description: "Your scenic journey commences with a grand entrance into Vienna. A private transfer, like a prelude to the visual feast awaiting you, sweeps you from the airport to your chosen haven. Check in at the hotel, where the air is filled with the anticipation of a leisurely day ahead. The rest of the day is yours to savor at leisure, surrounded by the elegance of Vienna. Welcome the night in Vienna with a symphony of tranquility."
            },
            {
                day: 2,
                title: "Vienna City Exploration",
                description: "Awaken to the beauty of Vienna and indulge in a delightful breakfast. Today is a canvas of exploration as you embark on a Vienna Hop-on & Hop-off City Tour. The city's grandeur and cultural treasures unfold before your eyes, promising a night in Vienna adorned with imperial charm and architectural splendor."
            },
            {
                day: 3,
                title: "Journey to Salzburg",
                description: "As morning light bathes Vienna, a sumptuous breakfast awaits before a private transfer guides you from your hotel to the train station. Board the train to Salzburg in 2nd class, where the scenic journey through Austrian landscapes enchants the soul. Upon arrival, another private transfer leads you to your Salzburg retreat. Check in and embrace the leisurely atmosphere, surrounded by the baroque charm of Salzburg. The night is a celebration of Mozart's legacy and Alpine serenity."
            },
            {
                day: 4,
                title: "Salzburg City Exploration",
                description: "After a delectable breakfast, immerse yourself in the beauty of Salzburg with a Salzburg Hop-on & Hop-off City Tour. Explore the city's historic charm and musical heritage, surrounded by the lush beauty of the Austrian Alps. The night in Salzburg is a symphony of lights and cultural richness."
            },
            {
                day: 5,
                title: "Journey to Innsbruck",
                description: "Wake up to another day of scenic delights as you enjoy breakfast and prepare for a private transfer from your Salzburg hotel to the train station. Board the train to Innsbruck in 2nd class, where the journey through picturesque landscapes enchants. Upon arrival, another private transfer guides you to your Innsbruck haven. Check in at the hotel and later, immerse yourself in the brilliance of Swarovski Crystal World. The night in Innsbruck is adorned with Alpine charm and crystal brilliance."
            },
            {
                day: 6,
                title: "Journey to Lucerne",
                description: "Begin the day with a delightful breakfast before a private transfer takes you from your hotel to the train station. Board the train to Lucerne in 2nd class, where the journey through the Swiss countryside captivates the senses. Check in at the hotel and later, embark on a mesmerizing journey with a visit to Lake Lucerne, Chapel Bridge, and the Lion Monument using the Swiss Pass. The night in Lucerne is a tapestry of Swiss beauty and cultural heritage."
            },
            {
                day: 7,
                title: "Mount Titlis Excursion",
                description: "Awaken to the majesty of Lucerne and enjoy a leisurely breakfast before immersing yourself in the breathtaking Excursion to Mt. Titlis with Ice Flyer. The day unfolds against the backdrop of snow-capped peaks and Alpine wonders, promising a night in Lucerne filled with mountain magic."
            },
            {
                day: 8,
                title: "Journey to Zurich",
                description: "After a sumptuous breakfast, board the train from Lucerne to Zurich with the Swiss Pass. Check in at the hotel and later, revel in the beauty of nature with a visit to Rhine Falls. The night in Zurich is illuminated by the sound of cascading waters and the tranquility of the Swiss landscape."
            },
            {
                day: 9,
                title: "Zurich Exploration & Chocolate Experience",
                description: "Wake up to another day of Swiss delights with a delightful breakfast. Today is a journey of flavors and landscapes as you visit the Lindt Chocolate Factory and explore Lake Zurich, Old Town, and Landquart Shopping Village with the Swiss Pass. The night in Zurich is a symphony of chocolate aromas and Swiss charm."
            },
            {
                day: 10,
                title: "Departure from Zurich",
                description: "As your scenic odyssey comes to a close, savor a final breakfast in Zurich. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Zurich Airport with cherished memories of a scenic adventure through Vienna, Salzburg, Innsbruck, Lucerne, and Zurich—cities where each moment unfolded like a chapter in a story of cultural richness and natural splendor."
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
    icelandHolidayPackage6N7D: {
        id: "iceland-holiday-package-6N7D",
        packageName: "Iceland Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 129113,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Iceland Holiday Package (06 Nights & 07 Days) - Experience the best of Iceland with stays in Reykjavik. Enjoy Reykjavik city tour, Northern Lights tour, Golden Circle day trip, South Coast day trip, and Whale Watching tour. Perfect for natural wonders, Arctic beauty, and Icelandic culture.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Iceland Holiday",
            costBasis: "EUR 1'250/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Reykjavik",
                hotel: "Hotel Holt or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Reykjavik, private transfer to hotel",
            "Day 2: Reykjavik City Tour",
            "Day 3: Northern Lights Tour",
            "Day 4: Day Trip to Golden Circle",
            "Day 5: Day Trip to South Coast",
            "Day 6: Whale Watching Tour",
            "Day 7: Departure from Reykjavik Airport"
        ],
        inclusions: [
            "06 Nights accommodation in Reykjavik - Hotel Holt or Similar",
            "Daily Breakfast",
            "Private transfer from Airport - Hotel - Airport in Reykjavik",
            "Reykjavik City Tour",
            "Northern Lights Tour",
            "Day Trip to Golden Circle from Reykjavik",
            "Day Trip to South Coast from Reykjavik",
            "Whale Watching Tour"
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
                title: "Arrival in Reykjavik",
                description: "Your Icelandic adventure commences with a spectacular arrival in Reykjavik. A private transfer, like a curtain-raiser to the natural wonders awaiting you, sweeps you from the airport to your chosen retreat. Check in at the hotel, where the air is filled with the anticipation of a day filled with leisure. The rest of the day is yours to savor, surrounded by the captivating charm of Reykjavik. Welcome the night in Reykjavik with a symphony of tranquility."
            },
            {
                day: 2,
                title: "Reykjavik City Exploration",
                description: "Awaken to the beauty of Reykjavik and savor a delightful breakfast. Today is a canvas of exploration as you embark on a Reykjavik City Tour. Let the city's unique blend of modernity and natural wonders unfold before your eyes, promising a night in Reykjavik adorned with Icelandic charm."
            },
            {
                day: 3,
                title: "Northern Lights Tour",
                description: "As morning light bathes Reykjavik, enjoy a sumptuous breakfast before preparing for a mystical adventure with a Northern Lights Tour. The night sky in Reykjavik becomes a dance of colors and celestial magic, promising an unforgettable experience."
            },
            {
                day: 4,
                title: "Golden Circle Day Trip",
                description: "After a delectable breakfast, immerse yourself in the wonders of Iceland with a Day trip to the Golden Circle from Reykjavik. Explore geysers, waterfalls, and the captivating landscapes that define Iceland's natural beauty. The night in Reykjavik is a tapestry of Icelandic mystique."
            },
            {
                day: 5,
                title: "South Coast Day Trip",
                description: "Wake up to another day of scenic wonders as you enjoy breakfast and prepare for a Day trip to the South Coast from Reykjavik. The rugged beauty of black sand beaches, glaciers, and iconic landmarks unfolds before you, promising a night in Reykjavik filled with tales of the South Coast."
            },
            {
                day: 6,
                title: "Whale Watching Tour",
                description: "Begin the day with a delightful breakfast before immersing yourself in the marine wonders with a Whale Watching Tour. The Icelandic waters come alive with the majesty of these gentle giants, creating a lasting memory. The night in Reykjavik is a celebration of the ocean's beauty and the connection between land and sea."
            },
            {
                day: 7,
                title: "Departure from Reykjavik",
                description: "After a final breakfast in Reykjavik, bid farewell to this remarkable journey. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Reykjavik Airport with cherished memories of a scenic adventure through Iceland, where each day unfolded like a chapter in a story of natural wonders and Arctic enchantment."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    greeceHolidayPackage7N8D: {
        id: "greece-holiday-package-7N8D",
        packageName: "Greece Holiday Package (07 Nights & 08 Days)",
        days: 8,
        nights: 7,
        amount: 134277,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Greece Holiday Package (07 Nights & 08 Days) - Experience the best of Greece with stays in Athens, Mykonos, and Santorini. Enjoy Athens sightseeing with Acropolis Museum, Mykonos city tour, Santorini city tour with sunset Oia, and ferry transfers between islands. Perfect for ancient history, island hopping, and Mediterranean beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "7N8D Greece Holiday",
            costBasis: "EUR 1'300/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Athens",
                hotel: "Selina Athens Theatrou or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Mykonos",
                hotel: "Colours Of Mykonos or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Santorini",
                hotel: "Iris Boutique Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Athens, private transfer to hotel",
            "Day 2: Athens half-day sightseeing tour with Acropolis Museum",
            "Day 3: Ferry from Athens to Mykonos, private transfer to hotel",
            "Day 4: Mykonos Half Day City Tour",
            "Day 5: Ferry from Mykonos to Santorini, private transfer to hotel",
            "Day 6: Santorini City Tour with Sunset Oia",
            "Day 7: Ferry from Santorini to Athens, private transfer to hotel",
            "Day 8: Departure from Athens Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Athens - Selina Athens Theatrou or Similar",
            "02 Nights accommodation in Mykonos - Colours Of Mykonos or Similar",
            "02 Nights accommodation in Santorini - Iris Boutique Hotel or Similar",
            "01 Night accommodation in Athens - Selina Athens Theatrou or Similar",
            "Daily Breakfast",
            "Ferry from Athens to Mykonos",
            "Ferry from Mykonos to Santorini",
            "Ferry from Santorini to Athens",
            "Athens half-day sightseeing tour with Acropolis Museum",
            "Mykonos Half Day City Tour",
            "Santorini City Tour with Sunset Oia",
            "Private arrival and departure transfer in Athens",
            "Private arrival and departure transfer in Mykonos",
            "Private arrival and departure transfer in Santorini"
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
                title: "Arrival in Athens",
                description: "Embark on a journey to the cradle of civilization as you arrive in Athens. A private transfer, like a prologue to the ancient tales awaiting you, sweeps you from the airport to your chosen haven. Check in at the hotel, where the day is an open canvas for leisure. The rest of the day is yours to absorb the allure of Athens, and the night promises a symphony of tranquility."
            },
            {
                day: 2,
                title: "Athens Sightseeing Tour",
                description: "Awaken to the ancient city and savor a delightful breakfast. Today is a palette of history and culture as you immerse yourself in an Athens half-day sightseeing tour with a visit to the museum. The city's ancient wonders unfold before your eyes, promising a night in Athens adorned with classical charm."
            },
            {
                day: 3,
                title: "Journey to Mykonos",
                description: "As morning light bathes Athens, enjoy a sumptuous breakfast before a private transfer guides you from your hotel to the port. Board a ferry bound for Mykonos, a journey across the Aegean Sea that captivates the senses. Upon arrival, another private transfer leads you to your Mykonos sanctuary. Check in at the hotel and let the allure of the island embrace you. The rest of the day is yours to savor, surrounded by the beauty of Mykonos. Welcome the night with tales of the Cyclades."
            },
            {
                day: 4,
                title: "Mykonos City Tour",
                description: "After a delectable breakfast, delve into the beauty of Mykonos with a Half Day City Tour. Explore the charming streets, iconic windmills, and azure waters that define Mykonos. The night in Mykonos is a celebration of Cycladic magic and Aegean allure."
            },
            {
                day: 5,
                title: "Journey to Santorini",
                description: "Wake up to another day of island delights as you enjoy breakfast and prepare for a private transfer from your hotel to the port. Board a ferry to Santorini, where the journey through the crystalline waters enchants. Upon arrival, another private transfer guides you to your Santorini haven. Check in at the hotel and let the magic of the island unfold. The rest of the day is yours to savor, surrounded by the beauty of Santorini. Welcome the night with dreams of Caldera sunsets."
            },
            {
                day: 6,
                title: "Santorini City Tour & Sunset",
                description: "Begin the day with a delightful breakfast before immersing yourself in the beauty of Santorini with a City Tour, crowned by the famed Sunset in Oia. The landscapes and hues of Santorini create a lasting impression. The night in Santorini is a symphony of colors and the whispers of the Aegean breeze."
            },
            {
                day: 7,
                title: "Return to Athens",
                description: "After a final breakfast in Santorini, bid farewell to the island paradise. A private transfer awaits at your hotel, guiding you to the port to board a ferry back to Athens. Another private transfer leads you from the port to your Athens hotel. Check in and let the enchantment of Athens embrace you. The rest of the day is yours to savor, surrounded by the echoes of ancient history. The night in Athens is a tapestry of classical wonders and modern charm."
            },
            {
                day: 8,
                title: "Departure from Athens",
                description: "As your Grecian odyssey draws to a close, savor a final breakfast in Athens. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Athens Airport with cherished memories of a scenic adventure through Athens, Mykonos, and Santorini—where each moment unfolded like a chapter in a story of ancient tales and Aegean beauty."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    spainHolidayPackage6N7D: {
        id: "spain-holiday-package-6N7D",
        packageName: "Spain Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 77468,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Spain Holiday Package (06 Nights & 07 Days) - Experience the best of Spain with stays in Barcelona, Valencia, and Madrid. Enjoy Barcelona city tour with Sagrada Familia, Valencia city tour, Madrid city tour with Royal Palace, and train transfers between cities. Perfect for Spanish culture, architecture, and Mediterranean charm.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Spain Holiday",
            costBasis: "EUR 750/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Barcelona",
                hotel: "Holiday Inn Express Barcelona or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Valencia",
                hotel: "Hotel Villacarlos or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Madrid",
                hotel: "El Pasaje or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Barcelona, private transfer to hotel",
            "Day 2: Barcelona City Tour & Sagrada Familia Skip-The-Line Tour",
            "Day 3: Train from Barcelona to Valencia, private transfer to hotel",
            "Day 4: Valencia City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Day 5: Train from Valencia to Madrid, Royal Palace Guided Tour",
            "Day 6: Madrid City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Day 7: Departure from Madrid Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Barcelona - Holiday Inn Express Barcelona or similar",
            "02 Nights accommodation in Valencia - Hotel Villacarlos or similar",
            "02 Nights accommodation in Madrid - El Pasaje or similar",
            "Daily Breakfast",
            "Barcelona City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Sagrada Familia Skip-The-Line Guided Tour",
            "Valencia City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Madrid City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Royal Palace Madrid Afternoon Guided Tour in a Small Group",
            "2nd Class Train from Barcelona-Valencia",
            "2nd Class Train from Valencia - Madrid",
            "Private Transfer from Airport - Hotel - Train Station in Barcelona",
            "Private Transfer from Train Station - Hotel to Train Station in Valencia",
            "Private Transfer from Train Station - Hotel - Airport in Madrid"
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
                title: "Arrival in Barcelona",
                description: "Your journey through the vibrant heart of Catalonia begins with a splendid arrival in Barcelona. A private transfer, akin to a welcoming overture, sweeps you from the airport to your chosen sanctuary. Check in at the hotel, where the echoes of Catalan culture and modern allure harmonize. The rest of the day is yours to relish, surrounded by the lively energy of Barcelona. Welcome the night in Barcelona with a symphony of tranquility."
            },
            {
                day: 2,
                title: "Barcelona City Tour & Sagrada Familia",
                description: "Awaken to the enchanting ambiance of Barcelona and savor a delightful breakfast. Today, immerse yourself in the city's beauty with a Barcelona City Tour by Bus - a 24-hour Hop-On Hop-Off journey, culminating with a Skip-The-Line Guided Tour of the Sagrada Familia. The night in Barcelona promises a blend of architectural marvels and the lively spirit of Catalonia."
            },
            {
                day: 3,
                title: "Journey to Valencia",
                description: "After a sumptuous breakfast, embark on a scenic coach journey from Barcelona to Valencia. Check in at the hotel and let the day unfold at your leisure, surrounded by the charm of Valencia. The night is a tapestry of relaxation and anticipation, poised to embrace the beauty of this coastal gem."
            },
            {
                day: 4,
                title: "Valencia City Tour",
                description: "Wake up to the coastal allure of Valencia and enjoy a leisurely breakfast before exploring the city with a Valencia Open Bus - a 24-hour Hop-On Hop-Off Tour. Discover the cultural richness and architectural wonders, with the night in Valencia painted with a palette of Spanish warmth."
            },
            {
                day: 5,
                title: "Journey to Madrid",
                description: "Begin the day with a delightful breakfast before embarking on a scenic train journey from Valencia to Madrid in 2nd class. Check in at the hotel and later, immerse yourself in the grandeur of the Royal Palace with an afternoon guided tour. The night in Madrid is a symphony of regal charm and Spanish elegance."
            },
            {
                day: 6,
                title: "Madrid City Tour",
                description: "Awaken to the allure of Madrid and enjoy a leisurely breakfast before exploring the city with a Madrid City Tour by Bus - a 24-hour Hop-On Hop-Off adventure. Let the cultural treasures and lively energy of Madrid captivate you, promising a night adorned with the colors of Spanish artistry."
            },
            {
                day: 7,
                title: "Departure from Madrid",
                description: "After a final breakfast in Madrid, bid farewell to this enchanting journey. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Madrid Airport with cherished memories of a scenic adventure through Barcelona, Valencia, and Madrid—cities where each moment unfolded like a chapter in a story of cultural richness and Iberian splendor."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    spainHolidayPackage8N9D: {
        id: "spain-holiday-package-8N9D",
        packageName: "Spain Holiday Package (08 Nights & 09 Days)",
        days: 9,
        nights: 8,
        amount: 103290,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Spain Holiday Package (08 Nights & 09 Days) - Experience the best of Spain with extended stays in Barcelona, Valencia, Ibiza, and Madrid. Enjoy Barcelona city tour with Sagrada Familia, Valencia city tour, Ibiza catamaran cruise, Madrid city tour with Royal Palace, and mixed train/flight transfers. Perfect for comprehensive Spanish culture, island hopping, and Mediterranean beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "8N9D Spain Holiday",
            costBasis: "EUR 1'000/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Barcelona",
                hotel: "Holiday Inn Express Barcelona or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Valencia",
                hotel: "Hotel Villacarlos or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Ibiza",
                hotel: "Ryans Ibiza Apartments or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Madrid",
                hotel: "El Pasaje or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Barcelona, private transfer to hotel",
            "Day 2: Barcelona City Tour & Sagrada Familia Skip-The-Line Tour",
            "Day 3: Train from Barcelona to Valencia, private transfer to hotel",
            "Day 4: Valencia City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Day 5: Flight from Valencia to Ibiza, private transfer to hotel",
            "Day 6: Ibiza Catamaran Cruise",
            "Day 7: Flight from Ibiza to Madrid, Royal Palace Guided Tour",
            "Day 8: Madrid City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Day 9: Departure from Madrid Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Barcelona - Holiday Inn Express Barcelona or similar",
            "02 Nights accommodation in Valencia - Hotel Villacarlos or similar",
            "02 Nights accommodation in Ibiza - Ryans Ibiza Apartments or similar",
            "02 Nights accommodation in Madrid - El Pasaje or similar",
            "Daily Breakfast",
            "Barcelona City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Sagrada Familia Skip-The-Line Guided Tour",
            "Valencia City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Ibiza Catamaran Cruise",
            "Madrid City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Royal Palace Madrid Afternoon Guided Tour in a Small Group",
            "2nd Class Train Ticket Barcelona-Valencia",
            "Private Transfer from Airport - Hotel - Train Station in Barcelona",
            "Private Transfer from Train Station - Hotel to Airport in Valencia",
            "Private Transfer from Airport - Hotel - Airport Ibiza",
            "Private Transfer from Airport to Hotel - Airport in Madrid"
        ],
        exclusions: [
            "International flights",
            "Flights Valencia - Ibiza - Madrid",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Barcelona",
                description: "Embark on a journey of Mediterranean allure as you arrive in the captivating city of Barcelona. A private transfer, a prologue to the scenic wonders ahead, gracefully whisks you from the airport to your chosen abode. Check in at the hotel, where the echoes of Catalan culture mingle with modern splendor. The remainder of the day is yours to relish, immersed in the vibrant energy of Barcelona. Welcome the night in Barcelona with a symphony of tranquility."
            },
            {
                day: 2,
                title: "Barcelona City Tour & Sagrada Familia",
                description: "Awaken to the enchantment of Barcelona and indulge in a delightful breakfast. Today, immerse yourself in the city's charm with a Barcelona City Tour by Bus - a 24-hour Hop-On Hop-Off odyssey, culminating in a Skip-The-Line Guided Tour of the Sagrada Familia. The night in Barcelona promises a blend of architectural marvels and the lively spirit of Catalonia."
            },
            {
                day: 3,
                title: "Journey to Valencia",
                description: "After a sumptuous breakfast, embark on a scenic coach journey from Barcelona to Valencia. Check in at the hotel and let the day unfold at your leisure, surrounded by the coastal allure of Valencia. The night is a tapestry of relaxation and anticipation, poised to embrace the beauty of this Mediterranean gem."
            },
            {
                day: 4,
                title: "Valencia City Tour",
                description: "Wake up to the coastal charm of Valencia and enjoy a leisurely breakfast before exploring the city with a Valencia Open Bus - a 24-hour Hop-On Hop-Off Tour. Discover the cultural richness and architectural wonders, with the night in Valencia painted with a palette of Spanish warmth."
            },
            {
                day: 5,
                title: "Flight to Ibiza",
                description: "After breakfast, bid farewell to the Mediterranean breeze as a private transfer whisks you from your Valencia hotel to the airport. Depart from Valencia Airport for your flight, and as the sun sets, you arrive in the paradisiacal haven of Ibiza. Check in at the hotel and let the rest of the day unfold at your leisure, surrounded by the serene beauty of Ibiza. The night is a canvas of relaxation and anticipation."
            },
            {
                day: 6,
                title: "Ibiza Catamaran Cruise",
                description: "Begin the day with a delightful breakfast before immersing yourself in the enchanting allure of Ibiza with a Catamaran Cruise. Sail across azure waters, surrounded by the beauty of the Balearic Sea. The night in Ibiza is a celebration of sun-kissed shores and the gentle lull of the Mediterranean."
            },
            {
                day: 7,
                title: "Flight to Madrid",
                description: "After breakfast, bid farewell to the idyllic beaches of Ibiza as a private transfer guides you from your hotel to the airport. Depart from Ibiza Airport for your flight, and as the sun sets once again, you arrive in the regal city of Madrid. Check in at the hotel and later, immerse yourself in the grandeur of the Royal Palace with an afternoon guided tour. The night in Madrid is a symphony of regal charm and Spanish elegance."
            },
            {
                day: 8,
                title: "Madrid City Tour",
                description: "Awaken to the majesty of Madrid and enjoy a leisurely breakfast before exploring the city with a Madrid City Tour by Bus - a 24-hour Hop-On Hop-Off adventure. Let the cultural treasures and lively energy of Madrid captivate you, promising a night adorned with the colors of Spanish artistry."
            },
            {
                day: 9,
                title: "Departure from Madrid",
                description: "After a final breakfast in Madrid, bid farewell to this enchanting journey. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Madrid Airport with cherished memories of a scenic adventure through Barcelona, Valencia, Ibiza, and Madrid—cities where each moment unfolded like a chapter in a story of cultural richness and Iberian splendor."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    ukHolidayPackage7N8D: {
        id: "uk-holiday-package-7N8D",
        packageName: "UK Holiday Package (07 Nights & 08 Days)",
        days: 8,
        nights: 7,
        amount: 113619,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "UK Holiday Package (07 Nights & 08 Days) - Experience the best of United Kingdom with stays in London, Windermere, and Manchester. Enjoy London hop-on-hop-off tour with Madame Tussauds and London Eye, Lake District Six Lakes tour, Manchester hop-on-hop-off tour, and train transfers between cities. Perfect for British culture, history, and natural beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "7N8D UK Holiday",
            costBasis: "GBP 1'100/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "London",
                hotel: "The Captain Cook Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Windermere",
                hotel: "The Brown Horse Inn or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Manchester",
                hotel: "Holiday Inn Express Manchester or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in London, private transfer to hotel",
            "Day 2: London 24 Hours Hop On Hop Off Bus Tour, Madame Tussauds & London Eye",
            "Day 3: Train from London to Windermere, private transfer to hotel",
            "Day 4: Lake District: Six Lakes Morning Tour from Windermere",
            "Day 5: Train from Windermere to Manchester, private transfer to hotel",
            "Day 6: Manchester 24 Hours Hop On Hop Off Bus Tour",
            "Day 7: Train from Manchester to London, private transfer to hotel",
            "Day 8: Departure from London Airport"
        ],
        inclusions: [
            "02 Nights accommodation in London - The Captain Cook Hotel or similar",
            "02 Nights accommodation in Windermere - The Brown Horse Inn or similar",
            "02 Nights accommodation in Manchester - Holiday Inn Express Manchester or similar",
            "01 Night accommodation in London - The Captain Cook Hotel or similar",
            "Daily Breakfast",
            "2nd Class Train from London to Windermere",
            "2nd Class Train from Windermere to Manchester",
            "2nd Class Train from Manchester to London",
            "London 24 Hours Hop On Hop Off Bus Tour",
            "Madame Tussauds Entrance Ticket and London Eye Ticket",
            "Lake District: Six Lakes Morning Tour from Windermere",
            "Manchester 24 Hours Hop On Hop Off Bus Tour",
            "Private Transfer from Airport - Hotel - Station in London",
            "Private Transfer from Train Station - Hotel - Train Station in Manchester",
            "Private Return Train Station - Hotel - Airport in London"
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
                title: "Arrival in London",
                description: "Embark on a scenic escapade as you arrive in the iconic city of London. A private transfer, akin to an opening verse, gracefully transports you from the airport to your chosen haven. Check in at the hotel, where the echoes of British history resonate with modern charm. The remainder of the day is yours to relish, surrounded by the timeless allure of London. Welcome the night in London with a symphony of tranquility."
            },
            {
                day: 2,
                title: "London City Exploration",
                description: "Awaken to the majesty of London and indulge in a delightful breakfast. Today, immerse yourself in the city's grandeur with a 24-Hour Hop-On Hop-Off Tour, encompassing iconic landmarks like Madame Tussauds and the London Eye. The night in London is a tapestry of illuminated wonders and the vibrant spirit of the capital."
            },
            {
                day: 3,
                title: "Journey to Windermere",
                description: "After a sumptuous breakfast, embark on a picturesque train journey from London to Windermere in 2nd class. A private transfer then guides you from the Windermere train station to your hotel. Check in and let the day unfold at your leisure, surrounded by the tranquil beauty of Windermere. The night is a canvas of lakeside charm and serene anticipation."
            },
            {
                day: 4,
                title: "Lake District Six Lakes Tour",
                description: "Wake up to the picturesque allure of Windermere and enjoy a leisurely breakfast before exploring the Lake District with a Beatrix Potter Half Day Tour. Immerse yourself in the enchanting landscapes that inspired timeless tales. The night in Windermere is adorned with the magic of storytelling and natural beauty."
            },
            {
                day: 5,
                title: "Journey to Manchester",
                description: "After breakfast, bid farewell to the lakes as a private transfer guides you from your Windermere hotel to the train station. Board the train to Manchester in 2nd class, where the journey through the English countryside enchants. Upon arrival, another private transfer takes you to your Manchester retreat. Check in and let the rest of the day unfold at your leisure, surrounded by the vibrant energy of Manchester. The night is a celebration of cultural richness and northern charm."
            },
            {
                day: 6,
                title: "Manchester City Exploration",
                description: "Begin the day with a delightful breakfast before exploring the city with a 24-Hour Hop On Hop Off Bus Tour. Manchester's industrial heritage and modern vitality unfold before you, promising a night in Manchester adorned with echoes of the past and the rhythm of the present."
            },
            {
                day: 7,
                title: "Return to London",
                description: "After breakfast, bid adieu to the bustling city as a private transfer guides you from your Manchester hotel to the train station. Board the train to London in 2nd class, where the English landscapes bid you farewell. A private transfer then whisks you from the London train station to your hotel. Check in and let the rest of the day unfold at your leisure, surrounded by the cosmopolitan charm of London. The night is a blend of urban sophistication and the timeless allure of the capital."
            },
            {
                day: 8,
                title: "Departure from London",
                description: "After a final breakfast in London, bid farewell to this enchanting journey. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from London Airport with cherished memories of a scenic adventure through London, Windermere, and Manchester—cities where each moment unfolded like a chapter in a story of cultural richness and British splendor."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    ukScotlandHolidayPackage13N14D: {
        id: "uk-scotland-holiday-package-13N14D",
        packageName: "UK & Scotland Holiday Package (13 Nights & 14 Days)",
        days: 14,
        nights: 13,
        amount: 206580,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "UK & Scotland Holiday Package (13 Nights & 14 Days) - Experience the best of United Kingdom and Scotland with extended stays in London, Edinburgh, Inverness, and Glasgow. Enjoy London hop-on-hop-off tour with Madame Tussauds and London Eye, Edinburgh castle and city tour, Loch Ness cruise, Stirling Castle and whisky trail tour, and train transfers. Perfect for comprehensive British and Scottish culture, history, and natural beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "13N14D UK & Scotland Holiday",
            costBasis: "GBP 2'000/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "London",
                hotel: "The Captain Cook Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Edinburgh",
                hotel: "Ibis Edinburgh Centre South Bridge or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Inverness",
                hotel: "Sealladh Sona or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Glasgow",
                hotel: "Novotel Glasgow Centre or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in London, private transfer to hotel",
            "Day 2: London 48 Hrs Hop-On Hop-Off Tour and River Cruise",
            "Day 3: London Hop-On Hop-Off Tour, Madame Tussauds & London Eye",
            "Day 4: Day at leisure in London",
            "Day 5: Train from London to Edinburgh, private transfer to hotel",
            "Day 6: Edinburgh Hop-on Hop-off City Tour & Edinburgh Castle",
            "Day 7: Day at leisure in Edinburgh",
            "Day 8: Train from Edinburgh to Inverness, private transfer to hotel",
            "Day 9: Loch Ness Day Trip from Inverness",
            "Day 10: Train from Inverness to Glasgow, private transfer to hotel",
            "Day 11: Stirling Castle, Loch Lomond & Whisky Trail Tour from Glasgow",
            "Day 12: Day at leisure in Glasgow",
            "Day 13: Train from Glasgow to London, private transfer to hotel",
            "Day 14: Departure from London Airport"
        ],
        inclusions: [
            "04 Nights accommodation in London - The Captain Cook Hotel or similar",
            "03 Nights accommodation in Edinburgh - Ibis Edinburgh Centre South Bridge or similar",
            "02 Nights accommodation in Inverness - Sealladh Sona or similar",
            "03 Nights accommodation in Glasgow - Novotel Glasgow Centre or similar",
            "01 Night accommodation in London - The Captain Cook Hotel or similar",
            "Daily Breakfast",
            "2nd Class Train from London to Edinburgh",
            "2nd Class Train from Edinburgh to Inverness",
            "2nd Class Train from Inverness to Glasgow",
            "2nd Class Train from Glasgow to London",
            "London 48 Hrs. Hop-On Hop-Off Tour and 30 Min River Cruise",
            "Madame Tussauds and London Eye",
            "Edinburgh Hop-on Hop-off City Tour 24 Hours Bus",
            "Edinburgh Castle Tickets",
            "From Inverness: Loch Ness Day Trip",
            "Stirling Castle, Loch Lomond and Whisky Trail Small Group Day Tour from Glasgow",
            "Return Private Airport Transfers in London",
            "Private Transfer from Train Station - Hotel - Train Station Edinburgh",
            "Private Transfer from Train Station - Hotel - Train Station in Inverness",
            "Private Transfer from Train Station - Hotel - Train Station In Glasgow"
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
                title: "Arrival in London",
                description: "Begin your British sojourn with a majestic arrival in London. A private transfer, reminiscent of a prologue, gracefully transports you from the airport to your chosen haven. Check in at the hotel, where the bustling energy of London seamlessly merges with moments of serenity. The rest of the day unfolds at leisure, allowing you to soak in the vibrant tapestry of London's charm. Welcome the night in London with a symphony of tranquility."
            },
            {
                day: 2,
                title: "London City Exploration",
                description: "Awaken to the heartbeat of London and savor a delightful breakfast. Today, immerse yourself in the city's grandeur with a 48-Hour Hop-On Hop-Off Tour, enhanced by a 30-minute River Cruise. The night in London promises a skyline adorned with illuminated landmarks and the gentle lull of the Thames."
            },
            {
                day: 3,
                title: "London Sightseeing",
                description: "After breakfast, the charm of London continues with a 48-Hour Hop-On Hop-Off Tour, complemented by visits to Madame Tussauds and the iconic London Eye. Marvel at the city's landmarks, both real and waxen, and embrace the panoramic views from the London Eye. The night in London is a celebration of cultural richness and modern elegance."
            },
            {
                day: 4,
                title: "London Leisure Day",
                description: "With a leisurely breakfast, the day unfolds as a canvas of personal exploration. Enjoy a day at leisure, whether it be strolling through London's parks, exploring its diverse neighborhoods, or indulging in its renowned culinary scene. The night is yours to relish amidst the enchanting rhythm of London."
            },
            {
                day: 5,
                title: "Journey to Edinburgh",
                description: "Bid farewell to London's cityscape as a private transfer guides you from your hotel to the train station. Board the train to Edinburgh in 2nd class, where the scenic journey through the British countryside awaits. Upon arrival, another private transfer ushers you to your Edinburgh abode. Check in and let the day unfold at your own pace, surrounded by the captivating charm of Edinburgh. The night is a symphony of Scottish elegance and medieval allure."
            },
            {
                day: 6,
                title: "Edinburgh City Exploration",
                description: "Wake up to the historic ambiance of Edinburgh and relish a delightful breakfast. Today, Edinburgh reveals its treasures with a Hop-On Hop-Off City Tour spanning 24 hours, coupled with tickets to Edinburgh Castle. Explore the city's cobbled streets and immerse yourself in its storied history. The night in Edinburgh is a tapestry woven with tales of royalty and medieval grandeur."
            },
            {
                day: 7,
                title: "Edinburgh Leisure Day",
                description: "Another day in Edinburgh invites you to explore at your leisure. Whether you choose to wander through the Royal Mile, visit dynamic museums, or savor traditional Scottish cuisine, the day is yours to shape. The night is a gentle cadence of tranquility in the heart of Edinburgh."
            },
            {
                day: 8,
                title: "Journey to Inverness",
                description: "After breakfast, embark on a picturesque train journey from Edinburgh to Inverness in 2nd class. A private transfer then guides you from the Inverness train station to your hotel. Check in and let the day unfold amidst the serene landscapes of Inverness. The night is a symphony of Highland tranquility and anticipation."
            },
            {
                day: 9,
                title: "Loch Ness Day Trip",
                description: "Awaken to the picturesque allure of Inverness and enjoy a leisurely breakfast before embarking on a Loch Ness Sightseeing Cruise. Traverse the legendary waters, surrounded by the mystique of the Scottish Highlands. The night in Inverness is a canvas painted with reflections of the loch and the shadows of ancient legends."
            },
            {
                day: 10,
                title: "Journey to Glasgow",
                description: "Bid farewell to Inverness as a private transfer guides you from your hotel to the train station. Board the train to Glasgow in 2nd class, where the Scottish countryside unfolds its beauty. Another private transfer takes you to your Glasgow retreat. Check in and let the rest of the day unfold amidst the cultural richness of Glasgow. The night is a fusion of Victorian grandeur and contemporary energy."
            },
            {
                day: 11,
                title: "Stirling Castle & Whisky Trail Tour",
                description: "Begin the day with a delightful breakfast before embarking on a Stirling Castle, Loch Lomond, and Whisky Trail Small Group Day Tour from Glasgow. Immerse yourself in the history of Stirling Castle, savor the beauty of Loch Lomond, and explore the nuances of Scottish whisky. The night in Glasgow is a tapestry woven with tales of clans and the beauty of Scotland."
            },
            {
                day: 12,
                title: "Glasgow Leisure Day",
                description: "Another day in Glasgow invites you to explore at your leisure. Whether you choose to wander through the city's art galleries, explore its vibrant markets, or revel in its architectural gems, the day is yours to shape. The night is a celebration of Glasgow's cultural diversity and modern vitality."
            },
            {
                day: 13,
                title: "Return to London",
                description: "Bid adieu to Glasgow as a private transfer guides you from your hotel to the train station. Board the train to London in 2nd class, relishing the last glimpses of the Scottish and English landscapes. A private transfer then whisks you from the London train station to your hotel. Check in and let the rest of the day unfold at your leisure, surrounded by the cosmopolitan charm of London. The night is a fusion of urban sophistication and the timeless allure of the capital."
            },
            {
                day: 14,
                title: "Departure from London",
                description: "After a final breakfast in London, bid farewell to this enchanting journey. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from London Airport with cherished memories of a scenic adventure through London, Edinburgh, Inverness, and Glasgow—cities where each moment unfolded like a chapter in a story of cultural richness and British splendor."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    portugalHolidayPackage6N7D: {
        id: "portugal-holiday-package-6N7D",
        packageName: "Portugal Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 87797,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Portugal Holiday Package (06 Nights & 07 Days) - Experience the best of Portugal with stays in Lisbon and Porto. Enjoy Lisbon city tour and Sintra & Cascais day tour, Porto Douro River boat tour, and coach transfers between cities. Perfect for Portuguese culture, history, and coastal beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Portugal Holiday",
            costBasis: "EUR 850/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Lisbon",
                hotel: "Hotel Eurostars Lisboa Parque or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Porto",
                hotel: "Hotel Portus Cale or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Lisbon, private transfer to hotel",
            "Day 2: Lisbon City Tour By Bus 24 Hours Hop On Hop Off",
            "Day 3: Coach from Lisbon to Porto, private transfer to hotel",
            "Day 4: Porto: Douro River Panoramic Tour by Boat",
            "Day 5: Coach from Porto to Lisbon, Sintra & Cascais Day Tour",
            "Day 6: Free time in Lisbon",
            "Day 7: Departure from Lisbon Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Lisbon - Hotel Eurostars Lisboa Parque or similar",
            "02 Nights accommodation in Porto - Hotel Portus Cale or similar",
            "01 Night accommodation in Lisbon - Hotel Eurostars Lisboa Parque or similar",
            "Daily Breakfast",
            "Coach Ticket from Lisbon to Porto",
            "Coach Ticket from Porto to Lisbon",
            "Lisbon City Tour By Bus 24 Hours Hop On Hop Off",
            "Sintra & Cascais Day Tour from Lisbon",
            "Porto: Douro River Panoramic Tour by Boat",
            "Private Return Transfers from Lisbon Airport to Hotel to Airport"
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
                title: "Arrival in Lisbon",
                description: "Embark on a picturesque journey as you arrive in Lisbon. A private transfer, like the opening stanza of a novel, sweeps you from the airport to your chosen retreat. Check in at the hotel, where the rhythm of Lisbon's vibrant streets harmonizes with moments of tranquility. The rest of the day unfolds at leisure, allowing you to immerse yourself in the captivating atmosphere of Lisbon. Welcome the night in Lisbon with the whispers of Fado and the charm of Portugal's capital."
            },
            {
                day: 2,
                title: "Lisbon City Exploration",
                description: "Awaken to the allure of Lisbon and relish a delightful breakfast. Today, explore the city's enchanting landscapes with a 24-Hour Hop-On Hop-Off Bus Tour. Lisbon's historic neighborhoods and panoramic vistas unfold before you, promising a night in the city adorned with the echoes of its maritime past and cultural richness."
            },
            {
                day: 3,
                title: "Journey to Porto",
                description: "After breakfast, the journey continues as you board a coach from Lisbon to Porto. Check in at the hotel, where the character of Porto weaves seamlessly with the river's embrace. The rest of the day is yours to savor, surrounded by the medieval charm of Porto. The night is a symphony of Portuguese hospitality and the serenity of riverside living."
            },
            {
                day: 4,
                title: "Douro River Boat Tour",
                description: "Wake up to the melodies of the Douro River and enjoy a leisurely breakfast before embarking on a Douro River Panoramic Tour by Boat. Cruise along the meandering river, framed by terraced vineyards and historic landmarks. The night in Porto is a palette of reflections on the Douro and the embrace of Portugal's northern gem."
            },
            {
                day: 5,
                title: "Return to Lisbon & Sintra Tour",
                description: "After breakfast, board a coach from Porto to return to Lisbon. Check in at the hotel, and embark on a Sintra & Cascais Day Tour from Lisbon. Explore the fairy-tale landscapes of Sintra and the coastal charm of Cascais. The night in Lisbon is a fusion of regal palaces, seaside allure, and the vibrant spirit of Portugal."
            },
            {
                day: 6,
                title: "Lisbon Leisure Day",
                description: "Begin the day with a leisurely breakfast before bidding farewell to Lisbon. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Lisbon Airport with cherished memories of a scenic adventure through Lisbon and Porto—cities where each moment unfolded like a verse in Portugal's story of history and beauty."
            },
            {
                day: 7,
                title: "Departure from Lisbon",
                description: "Begin the day with a leisurely breakfast before bidding farewell to Lisbon. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Lisbon Airport with cherished memories of a scenic adventure through Lisbon and Porto—cities where each moment unfolded like a verse in Portugal's story of history and beauty."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    portugalSpainHolidayPackage9N10D: {
        id: "portugal-spain-holiday-package-9N10D",
        packageName: "Portugal & Spain Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 118784,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Portugal & Spain Holiday Package (09 Nights & 10 Days) - Experience the best of Iberian Peninsula with stays in Barcelona, Valencia, Madrid, and Lisbon. Enjoy Barcelona Sagrada Familia, Madrid Royal Palace, Lisbon Sintra & Cascais tours, hop-on-hop-off bus tours, and mixed transportation. Perfect for comprehensive Iberian culture, history, and coastal beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Portugal & Spain Holiday",
            costBasis: "EUR 1'150/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Barcelona",
                hotel: "Holiday Inn Express Barcelona or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Valencia",
                hotel: "Hotel Villacarlos or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Madrid",
                hotel: "Hotel Occidental Castellana Norte or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Lisbon",
                hotel: "Hotel Eurostars Lisboa Parque or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Barcelona, private transfer to hotel",
            "Day 2: Barcelona City Tour & Sagrada Familia Skip-The-Line Tour",
            "Day 3: Coach from Barcelona to Valencia, private transfer to hotel",
            "Day 4: Valencia Open Bus 24 Hours Hop On Hop Off Tour",
            "Day 5: Train from Valencia to Madrid, Royal Palace Guided Tour",
            "Day 6: Madrid City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Day 7: Train from Madrid to Lisbon, private transfer to hotel",
            "Day 8: Lisbon City Tour By Bus 24 Hours Hop On Hop Off",
            "Day 9: Sintra & Cascais Day Tour from Lisbon",
            "Day 10: Departure from Lisbon Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Barcelona - Holiday Inn Express Barcelona or similar",
            "02 Nights accommodation in Valencia - Hotel Villacarlos or similar",
            "02 Nights accommodation in Madrid - Hotel Occidental Castellana Norte or similar",
            "03 Nights accommodation in Lisbon - Hotel Eurostars Lisboa Parque or similar",
            "Daily Breakfast",
            "Economy Coach Ticket Barcelona-Valencia",
            "2nd Class Train from Valencia - Madrid",
            "Barcelona City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Sagrada Familia Skip-The-Line Guided Tour",
            "Madrid City Tour By Bus 24 Hours Hop-On Hop-Off",
            "Royal Palace Madrid Afternoon Guided Tour in a Small Group",
            "Valencia Open Bus 24 Hours Hop On Hop Off Tour",
            "Lisbon City Tour By Bus 24 Hours Hop On Hop Off",
            "Sintra & Cascais Day Tour from Lisbon",
            "Private Airport Transfer from Barcelona Airport to Hotel",
            "Private Transfer in Valencia Hotel to Station",
            "Private Transfer in Train Station - Hotel - Airport in Madrid",
            "Private Transfer from Airport - Hotel - Airport in Lisbon"
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
                title: "Arrival in Barcelona",
                description: "Your scenic journey commences with a graceful arrival in Barcelona. A private transfer, akin to the opening chords of a symphony, escorts you from the airport to your chosen haven. Check in at the hotel, where the vibrancy of Barcelona's streets harmonizes with moments of repose. The remainder of the day unfolds at leisure, allowing you to immerse yourself in the effervescent atmosphere of Barcelona. Welcome the night in this Catalonian gem, where the whispers of Gaudí's masterpieces echo through the streets."
            },
            {
                day: 2,
                title: "Barcelona City Tour & Sagrada Familia",
                description: "Awaken to the artistic allure of Barcelona and savor a delectable breakfast. Today, explore the city's treasures with a 24-Hour Hop-On Hop-Off Bus Tour, complemented by a Skip-The-Line Guided Tour of the iconic Sagrada Familia. Marvel at the architectural marvels and panoramic views, as the night in Barcelona is a canvas painted with the colors of Catalan culture and architectural brilliance."
            },
            {
                day: 3,
                title: "Journey to Valencia",
                description: "After breakfast, embark on a scenic coach journey from Barcelona to Valencia. Check in at the hotel, where the essence of Valencia unfolds in its historic streets and vibrant squares. The remainder of the day is yours to explore, surrounded by the Mediterranean charm of Valencia. The night is a symphony of paella aromas and the warmth of Spanish hospitality."
            },
            {
                day: 4,
                title: "Valencia City Tour",
                description: "Wake up to the coastal allure of Valencia and enjoy a leisurely breakfast before delving into the city's charm with a 24-Hour Hop On Hop Off Tour. Explore Valencia's historic and modern facets at your own pace. The night in Valencia is a tapestry woven with the rhythm of flamenco and the echoes of history."
            },
            {
                day: 5,
                title: "Journey to Madrid",
                description: "After breakfast, embark on a train journey from Valencia to Madrid in 2nd class. Check in at the hotel, where the regal spirit of Madrid awaits. The afternoon beckons with a Royal Palace Madrid Guided Tour, immersing you in the opulence of Spanish royalty. The night is a blend of regality and contemporary flair in the heart of Madrid."
            },
            {
                day: 6,
                title: "Madrid City Tour",
                description: "Begin the day with a delightful breakfast before embarking on a 24-Hour Hop-On Hop-Off Bus Tour through Madrid. Explore the city's grand boulevards, historic neighborhoods, and cultural landmarks. The night in Madrid is a celebration of the city's artistic treasures and vibrant energy."
            },
            {
                day: 7,
                title: "Journey to Lisbon",
                description: "Board a train from Madrid to Lisbon in 2nd class, relishing the transition from Spain to Portugal. Check in at the hotel upon arrival, where the essence of Lisbon unfolds in its cobbled streets and historic quarters. The rest of the day is yours to savor, surrounded by the charm of Portugal's capital. The night is a symphony of Fado melodies and Lisbon's timeless allure."
            },
            {
                day: 8,
                title: "Lisbon City Tour",
                description: "Awaken to the maritime breezes of Lisbon and enjoy a leisurely breakfast. Today, explore the city's highlights with a 24-Hour Hop-On Hop-Off Bus Tour, weaving through historic neighborhoods and offering panoramic views. The night in Lisbon is a fusion of Moorish influences, maritime splendor, and the city's cultural richness."
            },
            {
                day: 9,
                title: "Sintra & Cascais Day Tour",
                description: "After breakfast, immerse yourself in the enchanting landscapes of Sintra and the coastal allure of Cascais with a day tour from Lisbon. Explore palaces, gardens, and charming seaside vistas. The night in Lisbon is a tapestry woven with tales of Portuguese royalty and the beauty of its coast."
            },
            {
                day: 10,
                title: "Departure from Lisbon",
                description: "Begin the day with a leisurely breakfast before bidding farewell to Lisbon. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Lisbon Airport with cherished memories of a scenic adventure through Barcelona, Valencia, Madrid, and Lisbon—cities where each moment unfolded like a chapter in the Iberian Peninsula's tale of art, history, and cultural allure."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    irelandHolidayPackage6N7D: {
        id: "ireland-holiday-package-6N7D",
        packageName: "Ireland Holiday Package (06 Nights & 07 Days)",
        days: 7,
        nights: 6,
        amount: 92961,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Ireland Holiday Package (06 Nights & 07 Days) - Experience the best of Ireland with stays in Belfast, Galway, and Dublin. Enjoy Belfast city tour with Giant's Causeway, Cliffs of Moher day trip from Galway, Dublin hop-on-hop-off bus tour, and train transfers. Perfect for Irish culture, history, natural wonders, and coastal beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "6N7D Ireland Holiday",
            costBasis: "EUR 900/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Belfast",
                hotel: "Holiday Inn Belfast City Centre or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Galway",
                hotel: "Claregalway Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Dublin",
                hotel: "The West County Hotel or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Belfast, private transfer to hotel",
            "Day 2: Belfast City Tour with Giant's Causeway Tour",
            "Day 3: Private transfer from Belfast to Galway, hotel check-in",
            "Day 4: Cliffs of Moher Day Trip from Galway",
            "Day 5: Train from Galway to Dublin, private transfer to hotel",
            "Day 6: Dublin Hop On Hop Off Bus Tour - 24 Hours",
            "Day 7: Departure from Dublin Airport"
        ],
        inclusions: [
            "02 Nights accommodation in Belfast - Holiday Inn Belfast City Centre or similar",
            "02 Nights accommodation in Galway - Claregalway Hotel or similar",
            "02 Nights accommodation in Dublin - The West County Hotel or similar",
            "Daily Breakfast",
            "2nd Class Train ticket from Galway - Dublin",
            "Belfast City Tour with Giant's Causeway Tour (With Hotel Pickup SIC)",
            "Cliffs of Moher Day Trip from Galway (With Hotel Pickup SIC)",
            "Dublin Hop On Hop Off Bus Tour - 24 Hours",
            "Private arrival transfer in Belfast",
            "Private departure transfer in Galway",
            "Private arrival & departure transfer in Dublin"
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
                title: "Arrival in Belfast",
                description: "Begin your scenic journey with the arrival in Belfast, where a private transfer awaits to whisk you from the airport to your hotel. Check in and feel the embrace of Belfast's warmth. The rest of the day unfolds at your leisure, inviting you to explore the city's rich history or simply relax in the serene ambiance. The night in Belfast is a tranquil prelude to the adventures that await."
            },
            {
                day: 2,
                title: "Belfast City Tour & Giant's Causeway",
                description: "Awaken to the melodies of Belfast and relish a delightful breakfast. Today, immerse yourself in the city's charm with a Belfast City Tour, followed by an enchanting journey to the Giant's Causeway. The rugged landscapes and mythical tales unfold, leaving you captivated by Northern Ireland's natural wonders. The night in Belfast is a symphony of coastal beauty and ancient legends."
            },
            {
                day: 3,
                title: "Journey to Galway",
                description: "After breakfast, a private transfer awaits to guide you from Belfast to Galway. Check in at the hotel, where Galway's artistic spirit and coastal allure beckon. The rest of the day is yours to embrace the charm of Galway, where cobblestone streets and vibrant culture converge. The night is a tranquil melody of Irish hospitality and the allure of Galway's coastal ambiance."
            },
            {
                day: 4,
                title: "Cliffs of Moher Day Trip",
                description: "Wake up to the coastal breeze of Galway and savor a leisurely breakfast before embarking on a day trip to the majestic Cliffs of Moher. Marvel at the sheer cliffs and Atlantic vistas, immersing yourself in the grandeur of Ireland's west coast. The night in Galway is a canvas painted with the hues of an Irish sunset."
            },
            {
                day: 5,
                title: "Journey to Dublin",
                description: "After breakfast, board a train from Galway to Dublin, traversing the Irish landscape with scenic views. Check in at the hotel, where the vibrant energy of Dublin awaits. The remainder of the day is yours to explore, whether strolling along the River Liffey or immersing yourself in Dublin's literary history. The night is a fusion of contemporary flair and Dublin's timeless charm."
            },
            {
                day: 6,
                title: "Dublin City Exploration",
                description: "Begin the day with a delicious breakfast before embarking on a Dublin Hop-On Hop-Off Bus Tour. Traverse the city's historic landmarks, lively neighborhoods, and cultural hotspots at your own pace. The night in Dublin is a celebration of the city's literary legacy, lively pubs, and the warm embrace of Irish culture."
            },
            {
                day: 7,
                title: "Departure from Dublin",
                description: "Awaken to the final morning in Dublin and enjoy a leisurely breakfast. A private transfer awaits at your hotel, guiding you to the airport for your departure. Depart from Dublin Airport with cherished memories of a scenic adventure through Belfast, Galway, and Dublin—cities where each moment unfolded like a verse in Ireland's poetic tapestry of history, nature, and cultural richness."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    scandinaviaHolidayPackage9N10D: {
        id: "scandinavia-holiday-package-9N10D",
        packageName: "Scandinavia Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 118784,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Scandinavia Holiday Package (09 Nights & 10 Days) - Experience the best of Scandinavia with stays in Oslo, Stockholm, and Copenhagen. Enjoy Oslo panoramic coach tour, Kon-Tiki Museum, Stockholm Old Town walking tour, Vasa Ship Museum, Copenhagen walking tour, Tivoli Gardens, and private transfers. Perfect for Scandinavian culture, history, and Nordic beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Scandinavia Holiday",
            costBasis: "EUR 1'150/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Oslo",
                hotel: "Radisson Blu Hotel Oslo Alna or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Stockholm",
                hotel: "Park Inn By Radisson Stockholm Hammarby Sjostad or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Copenhagen",
                hotel: "Zleep Hotel Copenhagen City or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Oslo, private transfer to hotel",
            "Day 2: Panoramic Oslo Coach Tour 2 Hours",
            "Day 3: Kon-Tiki Museum Entrance Ticket in Oslo",
            "Day 4: Flight from Oslo to Stockholm, private transfer to hotel",
            "Day 5: Stockholm Old Town Walking Tour",
            "Day 6: Vasa Ship Museum Tickets in Stockholm",
            "Day 7: Flight from Stockholm to Copenhagen, private transfer to hotel",
            "Day 8: Copenhagen Walking Tour",
            "Day 9: Tivoli Gardens Entrance",
            "Day 10: Departure from Copenhagen Airport"
        ],
        inclusions: [
            "03 Nights stay in Oslo - Radisson Blu Hotel Oslo Alna or similar",
            "03 Nights stay in Stockholm - Park Inn By Radisson Stockholm Hammarby Sjostad or similar",
            "03 Nights stay in Copenhagen - Zleep Hotel Copenhagen City or similar",
            "Daily Breakfast",
            "Panoramic Oslo Coach Tour 2 Hours",
            "Kon-Tiki Museum Entrance Ticket in Oslo",
            "Stockholm Old Town Walking Tour",
            "Vasa Ship Museum Tickets in Stockholm",
            "Copenhagen Walking Tour",
            "Tivoli Gardens Entrance",
            "Return Airport Transfers in Oslo Private",
            "Return Airport Transfers in Stockholm Private",
            "Return Airport Transfers in Copenhagen Private"
        ],
        exclusions: [
            "International flights",
            "Local Flight Economy Class from Oslo to Stockholm",
            "Local Flight Economy Class from Stockholm to Copenhagen",
            "Visa fees and processing",
            "Meals other than breakfast",
            "Personal expenses and shopping",
            "Travel insurance",
            "Tips and gratuities"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Oslo",
                description: "Embark on a scenic journey as you touch down in Oslo. Your arrival is greeted with a private transfer from the airport to a charming hotel, where you check in and find respite after your travels. The remainder of the day is yours to enjoy at your leisure, allowing you to explore the cultural wonders and tranquil ambiance that Oslo has to offer. The night in Oslo is a prelude to the scenic wonders awaiting you."
            },
            {
                day: 2,
                title: "Oslo Panoramic Coach Tour",
                description: "Awaken to the Norwegian morning and indulge in a hearty breakfast. Today, Oslo unveils its panoramic beauty with a two-hour coach tour, offering breathtaking views of the city's iconic landmarks. The day is a blend of cultural immersion and scenic delights. The night in Oslo is a canvas painted with the hues of a Scandinavian sunset."
            },
            {
                day: 3,
                title: "Kon-Tiki Museum in Oslo",
                description: "After a delightful breakfast, delve into the intriguing history of Oslo with an entrance ticket to the Kon-Tiki Museum. Explore the exhibits that tell the tales of daring maritime adventures, adding a cultural layer to your scenic escapade. The night in Oslo is a symphony of maritime wonders and Nordic heritage."
            },
            {
                day: 4,
                title: "Flight to Stockholm",
                description: "Bid farewell to Oslo with a private transfer from your hotel to the airport, where your journey continues to Stockholm. Upon arrival in Stockholm, a private transfer whisks you from the airport to your hotel. Check in, and the rest of the day is yours to unwind amidst the enchanting atmosphere of the Swedish capital. The night in Stockholm is a chapter in your Scandinavian tale, promising cultural exploration and tranquil moments."
            },
            {
                day: 5,
                title: "Stockholm Old Town Walking Tour",
                description: "Delight in a leisurely breakfast before setting off on a Stockholm Old Town Walking Tour. Immerse yourself in the cobbled streets, historic architecture, and tales of Swedish history. The day unfolds as a harmonious blend of cultural discovery and scenic strolls. The night in Stockholm is a serenade to the charm of its old-world ambiance."
            },
            {
                day: 6,
                title: "Vasa Ship Museum in Stockholm",
                description: "After breakfast, enrich your journey with a visit to the Vasa Ship Museum, where the meticulously preserved vessel narrates maritime tales of Sweden's past. The night in Stockholm is adorned with the echoes of maritime history and the elegance of Swedish craftsmanship."
            },
            {
                day: 7,
                title: "Flight to Copenhagen",
                description: "Depart Stockholm with a private transfer from your hotel to the airport, setting course for Copenhagen. Upon arrival in Copenhagen, another private transfer guides you to your hotel. Check in, and the remainder of the day invites you to explore the Danish capital at your own pace. The night in Copenhagen is a fusion of Scandinavian sophistication and leisurely exploration."
            },
            {
                day: 8,
                title: "Copenhagen Walking Tour",
                description: "Begin the day with a delicious breakfast before embarking on a Copenhagen Walking Tour. Traverse the city's iconic sights, charming streets, and historic landmarks. The day is a picturesque journey through the heart of Copenhagen's cultural and architectural treasures. The night in Copenhagen is a tapestry woven with the threads of Danish charm."
            },
            {
                day: 9,
                title: "Tivoli Gardens in Copenhagen",
                description: "Indulge in a leisurely breakfast before venturing into the enchanting world of Tivoli Gardens with an entrance ticket. The day is yours to experience the magic of Tivoli, where whimsical rides and charming gardens create an atmosphere of joy. The night in Copenhagen is a symphony of laughter and enchantment."
            },
            {
                day: 10,
                title: "Departure from Copenhagen",
                description: "Bid adieu to Copenhagen with a private transfer from your hotel to the airport, marking the end of your scenic exploration. Depart from Copenhagen Airport with cherished memories of a journey that seamlessly blended cultural immersion with the breathtaking landscapes of Oslo, Stockholm, and Copenhagen."
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
    finlandHolidayPackage9N10D: {
        id: "finland-holiday-package-9N10D",
        packageName: "Finland Holiday Package (09 Nights & 10 Days)",
        days: 10,
        nights: 9,
        amount: 185922,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Finland Holiday Package (09 Nights & 10 Days) - Experience the best of Finland with stays in Helsinki, Rovaniemi, and Kemi. Enjoy Helsinki city sightseeing, Porvoo tour, Husky and reindeer farm experience, Northern Lights snowmobile tour, Sampo Ice Breaker cruise, and Santa Village. Perfect for Arctic culture, winter wonders, and Nordic beauty.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "9N10D Finland Holiday",
            costBasis: "EUR 1'800/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Helsinki",
                hotel: "Hotel Haaga Central Park or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Rovaniemi",
                hotel: "Aakenus or Similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Kemi",
                hotel: "Scandic Kemi or Similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Helsinki, private transfer to hotel",
            "Day 2: City Sightseeing Helsinki Hop-On Hop-Off Bus Tour",
            "Day 3: Porvoo Tour from Helsinki on Seat In Coach Basis",
            "Day 4: Train from Helsinki to Rovaniemi, private transfer to hotel",
            "Day 5: Husky, Reindeer Farm and Santa Village Experience From Rovaniemi",
            "Day 6: Northern Lights Tour by Snowmobile from Rovaniemi",
            "Day 7: Train from Rovaniemi to Kemi, private transfer to hotel",
            "Day 8: Sampo Ice Breaker Cruise from Kemi",
            "Day 9: Flight from Kemi to Helsinki, private transfer to hotel",
            "Day 10: Departure from Helsinki Airport"
        ],
        inclusions: [
            "03 Nights accommodation in Helsinki - Hotel Haaga Central Park or similar",
            "03 Nights accommodation in Rovaniemi - Aakenus or similar",
            "02 Nights accommodation in Kemi - Scandic Kemi or similar",
            "01 Night accommodation in Helsinki - Hotel Haaga Central Park or similar",
            "Daily Breakfast",
            "Private Transfer from Helsinki Airport to Hotel to Airport",
            "Private Transfer from Rovaniemi Airport to Hotel",
            "Private Transfer from Kemi Hotel to Kemi Airport",
            "City Sightseeing Helsinki Hop-On Hop-Off Bus Tour",
            "Porvoo Tour from Helsinki on Seat In Coach Basis",
            "Sampo Ice Breaker Cruise from Kemi on Seat In Coach Basis",
            "Husky, Reindeer Farm and Santa Village Experience From Rovaniemi on Seat In Coach Basis",
            "Northern Lights Tour by Snowmobile from Rovaniemi on Seat In Coach Basis"
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
                title: "Arrival in Helsinki",
                description: "Embark on a captivating journey as you arrive in Helsinki, where a private transfer gracefully escorts you from the airport to a splendid hotel. After checking in, the rest of the day is yours to savor, allowing you to unwind and absorb the unique ambiance of the Finnish capital. The night in Helsinki sets the stage for the scenic wonders awaiting you."
            },
            {
                day: 2,
                title: "Helsinki City Sightseeing",
                description: "Awaken to a Finnish morning and indulge in a delightful breakfast. Today, Helsinki unfolds its charm with the City Sightseeing Helsinki Hop-On Hop-Off Bus Tour, offering you the flexibility to explore the city's iconic landmarks at your own pace. The night in Helsinki is a canvas painted with the vibrant hues of the bustling capital."
            },
            {
                day: 3,
                title: "Porvoo Tour from Helsinki",
                description: "After a hearty breakfast, venture into the picturesque town of Porvoo with a guided tour from Helsinki. Explore the cobblestone streets and charming old buildings, immersing yourself in the rich history and cultural allure of this quaint destination. The night in Helsinki is a blend of cultural discovery and scenic enchantment."
            },
            {
                day: 4,
                title: "Journey to Rovaniemi",
                description: "Bid farewell to Helsinki as you board a train to Rovaniemi, the gateway to the Arctic Circle. Check into your hotel and enjoy the rest of the day at leisure, surrounded by the enchanting landscapes that define Rovaniemi. The night is a symphony of tranquility and anticipation."
            },
            {
                day: 5,
                title: "Arctic Wildlife Experience",
                description: "After breakfast, delve into the Arctic magic with a Husky, Reindeer Farm, and Santa Village Experience. Connect with the local fauna, enjoy a reindeer sleigh ride, and feel the thrill of a husky dog sled adventure. The night in Rovaniemi is filled with the echoes of Arctic adventures and the warmth of the Santa Claus Village."
            },
            {
                day: 6,
                title: "Northern Lights Snowmobile Tour",
                description: "As night falls, embark on a mesmerizing Northern Lights Tour by Snowmobile. Traverse the snowy landscapes under the Arctic sky, chasing the elusive auroras and creating memories that last a lifetime. The night in Rovaniemi is a dance of celestial lights and Arctic wonders."
            },
            {
                day: 7,
                title: "Journey to Kemi",
                description: "Board a train from Rovaniemi to Kemi, where a charming hotel welcomes you. The rest of the day is yours to relish at your own pace, surrounded by the serene ambiance of Kemi. The night in Kemi is an ode to Finnish hospitality and Arctic serenity."
            },
            {
                day: 8,
                title: "Sampo Ice Breaker Cruise",
                description: "Immerse yourself in a unique experience with the Sampo Ice Breaker Cruise from Kemi. Sail through the icy waters, witness the spectacle of breaking ice, and absorb the beauty of the Arctic Sea. The night in Kemi is a tale of maritime wonders and Arctic exploration."
            },
            {
                day: 9,
                title: "Return to Helsinki",
                description: "Bid farewell to Kemi with a private transfer to the airport, where you embark on a flight to Helsinki. Upon arrival, another private transfer guides you to your hotel, providing a seamless transition back to the vibrant Finnish capital. The rest of the day is yours to enjoy at leisure, reflecting on the Arctic adventures of the past days. The night in Helsinki is a serene conclusion to your Arctic escapade."
            },
            {
                day: 10,
                title: "Departure from Helsinki",
                description: "Begin the day with a delicious breakfast before bidding adieu to Helsinki. A private transfer takes you from your hotel to the airport, marking the end of your scenic journey through the Arctic wonders of Finland. Depart from Helsinki Airport with cherished memories of a journey that seamlessly blended cultural exploration with the enchanting landscapes of Rovaniemi and Kemi."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1559029884-4e96cdabdddd?w=1200&h=800&fit=crop",
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1559029884-4e96cdabdddd?w=800&h=600&fit=crop",
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },
    croatiaHolidayPackage7N8D: {
        id: "croatia-holiday-package-7N8D",
        packageName: "Croatia Holiday Package (07 Nights & 08 Days)",
        days: 8,
        nights: 7,
        amount: 72303,
        dateStart: "Valid till 31st Dec 2025",
        dateEnd: "",
        description: "Croatia Holiday Package (07 Nights & 08 Days) - Discover the enchanting beauty of Croatia with stays in Zagreb, Split, and Dubrovnik. Experience the rich history, stunning coastal landscapes, and iconic Game of Thrones filming locations.",
        groupDetails: {
            pax: "Per Person",
            rooms: "Half Twin Sharing",
            arrivalDate: "Valid till 31st Dec 2025",
            duration: "7N8D Croatia Holiday",
            costBasis: "EUR 700/PP on Half Twin Inclusive of BKF and Taxes"
        },
        hotelDetails: [
            {
                city: "Zagreb",
                hotel: "Canopy by Hilton Zagreb City Centre or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Split",
                hotel: "Marmontova Luxury Rooms or similar",
                roomType: "Standard Room with Breakfast"
            },
            {
                city: "Dubrovnik",
                hotel: "City Apartments Lani or similar",
                roomType: "Standard Room with Breakfast"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Zagreb and private transfer to hotel",
            "Day 2: Zagreb City Walking Tour",
            "Day 3: Travel to Split and leisure time",
            "Day 4: Split Old Town Small Group Walking Tour",
            "Day 5: Krka National Park Ecco Tour",
            "Day 6: Travel to Dubrovnik and leisure time",
            "Day 7: 'Game of Thrones' Walking Tour of Dubrovnik",
            "Day 8: Private transfer to Dubrovnik Airport for departure"
        ],
        inclusions: [
            "02 Nights accommodation in Zagreb - Canopy by Hilton Zagreb City Centre or similar",
            "03 Nights accommodation in Split - Marmontova Luxury Rooms or similar",
            "02 Nights accommodation in Dubrovnik - City Apartments Lani or similar",
            "Daily Breakfast",
            "Zagreb City Walking Tour",
            "Split Old town Small group Walking tour",
            "Krka National Park Ecco Tour from Split",
            "Exclusive: 'Game of Thrones' Walking Tour of Dubrovnik",
            "Transfer from Airport - Hotel - Airport Zagreb",
            "Transfer from Airport - Hotel - Airport Split",
            "Transfer from Airport - Hotel Airport Dubrovnik"
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
                title: "Arrival in Zagreb",
                description: "Your journey unfolds with the enchantment of Zagreb as you arrive and are graciously whisked away to your hotel by a private transfer. After settling into the comforts of your accommodation, the remainder of the day is yours to savor at leisure, immersing yourself in the atmosphere of Zagreb. The night in Zagreb is a serene prelude to the scenic wonders awaiting you."
            },
            {
                day: 2,
                title: "Zagreb City Walking Tour",
                description: "Awaken to the charms of Zagreb with a delightful breakfast, setting the stage for a Zagreb City Walking Tour. Traverse the city's cobblestone streets, absorbing the rich history and vibrant culture that define Croatia's capital. The night in Zagreb is an ode to the city's architectural marvels and cultural tapestry."
            },
            {
                day: 3,
                title: "Journey to Split",
                description: "Bid Zagreb farewell as you board a coach to Split, a coastal gem waiting to be discovered. Upon checking into your hotel, the day is yours to relish at leisure, surrounded by the allure of Split's coastal ambiance. The night in Split is a symphony of coastal tranquility and anticipation."
            },
            {
                day: 4,
                title: "Split Old Town Walking Tour",
                description: "After breakfast, delve into the captivating history of Split with a Small Group Walking Tour of Split's Old Town. Wander through ancient alleys, discovering the stories embedded in the city's UNESCO-listed landmarks. The night in Split is an embrace of the city's cultural heritage and timeless charm."
            },
            {
                day: 5,
                title: "Krka National Park Tour",
                description: "Immerse yourself in the natural wonders of Krka National Park with an Ecco Tour, where cascading waterfalls and lush landscapes beckon. Connect with the pristine beauty of nature, creating memories that resonate long after the tour concludes. The night in Split is a blend of coastal serenity and the echoes of Krka's natural symphony."
            },
            {
                day: 6,
                title: "Journey to Dubrovnik",
                description: "Embark on a scenic coach journey from Split to Dubrovnik, a city steeped in history and coastal allure. After checking into your hotel, the remainder of the day is yours to enjoy at leisure, surrounded by the captivating ambiance of Dubrovnik. The night in Dubrovnik is a testament to the city's timeless elegance and coastal charm."
            },
            {
                day: 7,
                title: "'Game of Thrones' Walking Tour of Dubrovnik",
                description: "Delve into the fantasy world of Westeros with a 'Game of Thrones' Walking Tour of Dubrovnik. Traverse the iconic filming locations, reliving the epic saga amidst the medieval architecture of the city. The night in Dubrovnik is a blend of fantasy immersion and the timeless beauty of the Adriatic coastline."
            },
            {
                day: 8,
                title: "Departure from Dubrovnik",
                description: "Bid adieu to Dubrovnik with a private transfer from your hotel to the airport, where your scenic journey through Croatia concludes. Depart from Dubrovnik Airport with cherished memories of a voyage that seamlessly blended cultural exploration with the enchanting landscapes of Zagreb, Split, and Dubrovnik."
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop"
        ],
        mobileImages: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
        ],
        experiences: [],
        sightseeingSpots: [],
        localFood: [],
        culture: [],
        additionalInfo: undefined
    },

};
