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

export interface AlmatyPackage {
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

export const almatyPackages: Record<string, AlmatyPackage> = {
    almatyDiscovery: {
        id: "4-days-almaty-discovery",
        packageName: "4 Days Almaty Discovery",
        days: 4,
        nights: 3,
        amount: 45000,
        dateStart: "01 March 2025",
        dateEnd: "26 Jun 2025",
        description: "Explore the highlights of Almaty with our 4-day tour covering the city's most iconic locations, natural wonders, and cultural sites.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "4D3N Almaty Fixed Departure",
            costBasis: "Cost Based On per person"
        },
        hotelDetails: [
            {
                city: "Almaty",
                hotel: "3 star Kazakhstan Hotel",
                roomType: "Superior Room"
            }
        ],
        tourSummary: [
            "Day 1: Almaty - Arrival",
            "Day 2: Almaty City Tour",
            "Day 3: Big Almaty Lake & Mountains",
            "Day 4: Almaty - Departure"
        ],
        inclusions: [
            "Hotel transfers for arrival and departure",
            "Transportation with air-conditioning",
            "Entrance fees",
            "Accommodation twin/double sharing",
            "Meals as specified in the itinerary",
            "English speaking guides"
        ],
        exclusions: [
            "Visa fees",
            "Travel insurance",
            "Personal expenses",
            "International flights"
        ],
        itinerary: [
            {
                day: 1,
                title: "Almaty - Arrival",
                description: "Arrival at Almaty International Airport. Transfer to your hotel. Rest of the day at leisure."
            }
        ],
        images: [
            "/UGCImages/almaty/HORIZONTAL/1.jpg"
        ],
        sightseeingSpots: [
            {
                name: "Medeu Ice Rink",
                description: "World's highest Olympic-size skating rink",
                image: "/UGCImages/almaty/extra/medeu.jpg"
            }
        ],
        localFood: [
            {
                name: "Beshbarmak",
                description: "Traditional Kazakh meat dish with pasta and potatoes",
                image: "/UGCImages/almaty/cuisine/beshbarmak.jpg",
                where: "Local Restaurant, Almaty"
            }
        ],
        culture: [
            {
                title: "Kazakh Music",
                description: "Traditional dombra performances and folk songs",
                image: "/UGCImages/almaty/culture/music.jpg"
            }
        ],
        departureDates: [
            { date: "1, 8, 15, 22 Mar 2025" }
        ]
    }
};
