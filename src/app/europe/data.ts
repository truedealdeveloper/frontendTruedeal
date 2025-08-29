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

};
