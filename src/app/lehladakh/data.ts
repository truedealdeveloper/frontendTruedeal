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
    image: string;
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

interface BatchInfo {
    month: string;
    dates: string[];
    availableSeats: number;
}

interface BatchDetails {
    currentBatch: string;
    remainingSlots: number;
    monthlyBatches: BatchInfo[];
}

interface FlightInfo {
    name: string;
    departureCity: string;
    arrivalCity: string;
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
}

interface FlightDetails {
    airlines: FlightInfo[];
}

export interface LehladakhPackage {
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
    departureDates?: DepartureDate[];
    experiences: Experience[];
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
        visaInfo?: {
            requirement: string;
            duration: string;
            cost: string;
            documents: string[];
        };
    };
    batchDetails?: BatchDetails;
    flightDetails?: FlightDetails;
}

export const lehladakhPackages: Record<string, LehladakhPackage> = {
    lehBasic: {
        id: "5-days-leh-basic",
        packageName: "5 Days Leh Basic",
        days: 5,
        nights: 4,
        amount: 24999,
        dateStart: "01 May 2024",
        dateEnd: "30 Sep 2024",
        description: "Experience the magic of Ladakh with our 5-day tour covering Leh, Pangong Lake, and Nubra Valley.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "5D4N Leh Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Leh",
                hotel: "Hotel Ladakh Palace / Similar",
                roomType: "Deluxe Room"
            },
            {
                city: "Nubra",
                hotel: "Desert Camp / Similar",
                roomType: "Deluxe Tent"
            },
            {
                city: "Pangong",
                hotel: "Lake View Camp / Similar",
                roomType: "Deluxe Tent"
            }
        ],
        tourSummary: [
            "Day 1: Arrive Leh + Acclimatization",
            "Day 2: Leh Local Sightseeing",
            "Day 3: Leh - Nubra Valley via Khardung La",
            "Day 4: Nubra - Pangong Lake",
            "Day 5: Pangong - Leh Departure"
        ],
        inclusions: [
            "4 Nights accommodation in mentioned hotels/camps",
            "Daily breakfast and dinner",
            "All transfers and sightseeing by Non-AC vehicle",
            "Inner line permits",
            "Experienced driver",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Personal expenses",
            "Optional activities",
            "Travel insurance",
            "Lunch",
            "Any item not mentioned in inclusions"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive Leh + Acclimatization",
                description: "Arrival at Leh airport. Transfer to hotel. Complete day for acclimatization. Evening visit to Leh Market and Shanti Stupa. Overnight stay in Leh.",
                image: "/UGCImages/leh/itinerary/1.jpg"
            },
            {
                day: 2,
                title: "Leh Local Sightseeing",
                description: "Visit Thiksey Monastery, Shey Palace, Hemis Monastery, and Stok Palace Museum. Evening free for shopping. Overnight stay in Leh.",
                image: "/UGCImages/leh/itinerary/2.jpg"
            },
            {
                day: 3,
                title: "Leh - Nubra Valley via Khardung La",
                description: "Drive to Nubra Valley via Khardung La (18,380 ft). Visit Diskit Monastery and Hunder Sand Dunes. Camel safari available. Overnight stay in Nubra.",
                image: "/UGCImages/leh/itinerary/3.jpg"
            },
            {
                day: 4,
                title: "Nubra - Pangong Lake",
                description: "Drive to Pangong Lake via Shyok River. Evening at leisure by the lake. Enjoy the sunset. Overnight stay at Pangong.",
                image: "/UGCImages/leh/itinerary/4.jpg"
            },
            {
                day: 5,
                title: "Pangong - Leh Departure",
                description: "Early morning sunrise at Pangong. Drive back to Leh. Transfer to airport for departure.",
                image: "/UGCImages/leh/itinerary/5.jpg"
            }
        ],
        images: [
            "/UGCImages/leh/packages/basic/1.jpg",
            "/UGCImages/leh/packages/basic/2.jpg",
            "/UGCImages/leh/packages/basic/3.jpg",
            "/UGCImages/leh/packages/basic/4.jpg"
        ],
        departureDates: [
            { date: "May 2024 - September 2024" }
        ],
        experiences: [
            {
                title: "Monastery Visit",
                image: "/UGCImages/leh/experiences/monastery.jpg"
            },
            {
                title: "Pangong Lake",
                image: "/UGCImages/leh/experiences/pangong.jpg"
            },
            {
                title: "Camel Safari",
                image: "/UGCImages/leh/experiences/camel.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Khardung La Pass",
                "Pangong Lake",
                "Nubra Valley",
                "Buddhist Monasteries",
                "Camel Safari"
            ],
            bestTimeToVisit: "May to September",
            cuisine: [
                "Thukpa",
                "Momos",
                "Butter Tea",
                "Ladakhi Pulao"
            ],
            accommodation: {
                type: "3-star hotels and luxury camps",
                amenities: [
                    "Heating",
                    "Hot water",
                    "Restaurant",
                    "Mountain views"
                ]
            },
            transportation: {
                type: "SUV/Tempo Traveller",
                features: [
                    "Experienced mountain drivers",
                    "Oxygen cylinder",
                    "First aid kit"
                ]
            }
        }
    }
    // Add more packages as needed
}; 