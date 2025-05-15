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
        id: "quick-ladakh-5-Nights-6-Days",
        packageName: "Quick Ladakh 5 Nights 6 Days",
        days: 6,
        nights: 5,
        amount: 34078,
        dateStart: "May 2025",
        dateEnd: "30 June 2025",
        description: "Experience the magic of Ladakh with our 6-day tour covering Leh, Sham Valley, Pangong Lake, Nubra Valley.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "6D5N Leh Fixed Departure",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Leh",
                hotel: "The Himalayan, Kangsing, Mahey Retreat",
                roomType: "Standard Room"
            },
            {
                city: "Nubra Valley",
                hotel: "Nubra Summer Camp, Nubra Delight Camp, Nubra Vista Camp or similar",
                roomType: "Deluxe Tent"
            },
            {
                city: "Pangong Lake",
                hotel: "Pangong Delight Camp, P3 Camp, Tso Camp (lukung), Ladakh Summer Camp or similar",
                roomType: "Deluxe Tent"
            }
        ],
        tourSummary: [
            "Day 1: Arrive Leh",
            "Day 2: LEH - EXCURSION TO SHAM VALLEY (65 KMS / 04 HRS – ONE WAY)",
            "Day 3: LEH–NUBRA VALLEY VIA KHARDUNG LA 18,390 FT. (120 KMS / 4 – 5 HRS)",
            "Day 4: NUBRA VALLEY TO PANGONG LAKE (150 KMS / 5 HRS)",
            "Day 5: PANGONG LAKE TO LEH VIA CHANGLA (140 KMS / 6 HRS)",
            "Day 6: LEH - DEPARTURE"
        ],
        inclusions: [
            "Return flight tickets (in economy class)",
            "Assistance upon arrival at Leh Hotel",
            "Traditional welcome in the Hotel with Welcome Drink (Hot Tea / Coffee / Kahwa) on arrival",
            "05 Night accommodation twin/double/triple sharing basis as per the itinerary.",
            "05 Breakfast + 05 Dinner",
            "Return airport and round trip transfers along with all sightseeing tours by Non-Ac Innova / Tempo Traveler as per the itinerary",
            "Wildlife fee & Red Cross fee",
            "All toll taxes / parking fee / driver allowance",
            "Ladakh Entry Fee",
            "Ladakh Ecological Development Fee",
            "One Mid-Sized Oxygen Cylinder during Nubra Valley and Pangong Lake visit"
        ],
        exclusions: [
            "Any Kind of Personal Expenses or Optional Tours / Extra Meals Ordered",
            "Anything not specifically mentioned under the head “Prices included”.",
            "The Services of Vehicle is not included on leisure days & after finishing the sightseeing tour as per the Itinerary",
            "Guide fee, Camera fee & any monument Entrances",
            "Medical & Travel insurance",
            "Any changes you may choose to make during your tour",
            "Additional costs due to flight cancellation, road blocks etc"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive Leh",
                description: "Arrival Leh by morning flight and transfer to the hotel. After welcome drink complete day at rest for acclimatization to the height altitude of Leh (3500 meters). Dinner and overnight in hotel.",
                image: "/UGCImages/leh/itinerary/1.jpg"
            },
            {
                day: 2,
                title: "LEH - EXCURSION TO SHAM VALLEY (65 KMS / 04 HRS – ONE WAY)",
                description: `After breakfast you drive downstream along the River Indus on Leh – Kargil Highway. And start our sightseeing with Hall Of Fame (Museum Constructed by India Army) near Leh is worth a visit for every Indian, and proceed further to Gurudwara Patthar Sahib at an altitude of 3600 Mtrs about 22 Kms from Leh was constructed in memory of Guru Nanak Dev ji Nestled deep in the Himalayas, A drive of another 4 km took us to Magnetic Hill which defies the law of gravity. As you move ahead from Magnetic Hills, just before Nimmu Village, there comes a famous Confluence Of Two Rivers Indus River coming from Tibet (left) and Zanskar River coming from Zanskar Valley (right). After visiting confluence we head to followed by a visit to Shanti Stupa Leh palace. Later we drive back to Leh. Dinner and overnight at Hotel in Leh.`,
                image: "/UGCImages/leh/itinerary/2.jpg"
            },
            {
                day: 3,
                title: "LEH–NUBRA VALLEY VIA KHARDUNG LA 18,390 FT. (120 KMS / 4 – 5 HRS)",
                description: `Post breakfast we drive to Nubra Valley. The road journey from Leh to Nubra Valley passes over Khardung La (Second
Highest Motorable Road In The World) at 5,602 Mtrs / 18,390 Ft, around 39 km from Leh. From the pass, one can see all the
way south over the Indus valley to seemingly endless peaks and ridges of the Zanskar range, and north to the giants of the
Saser massif. Nubra Valley is popularly known as Ldumra or the valley of flowers. It is situated in the north of Ladakh
between the Karakoram and Ladakh ranges of the Himalayas. The average altitude of the valley is 10,000 Ft. above sea
level. Upon arrival in Nubra we check in at our Camp / Hotel in Hunder for Overnight stay. In the evening you can walk
around the tiny villages to see how the locals live in this part of the world. Overnight Stay at the Camp or Hotel.`,
                image: "/UGCImages/leh/itinerary/3.jpg"
            },
            {
                day: 4,
                title: "NUBRA VALLEY TO PANGONG LAKE (150 KMS / 5 HRS)",
                description: `After an early breakfast we check out from Camp or hotel and drive towards Hunder where you have opportunity to ride on a
bacterian camel (double humped) amidst the sand dunes of this high altitude desert with snowcapped mountains on the
horizon. On the return stop at Diskit which is the headquarter town of Nubra Valley. Stroll around the bazaar observing the
shops and local people going about their daily chores. Later we drive towards Pangong Tso via Agham, Shyok Valley.
Some of the road patches in areas are extremely tough (towards nubra side) in terms of road conditions but no doubt the
journey is very scenic!  Later after crossing this adventurous part we drive further towards Durbuk. Tangtse for Pangong
you pass through few small villages of Changthang and finally you can have a sudden view of the Pangong lake situated at
14,000 feet (4,267 m). Upon arrival we check in at our Camp/Hotel Near Pangong lake Dinner; Overnight at the
Hotel/Camp`,
                image: "/UGCImages/leh/itinerary/4.jpg"
            },
            {
                day: 5,
                title: "Pangong - Lake",
                description: "Early morning sunrise at Pangong. Drive back to Leh. Transfer to airport for departure.",
                image: "/UGCImages/leh/itinerary/5.jpg"
            },
            {
                day: 6,
                title: "LEH - DEPARTURE",
                description: "After breakfast check out from hotel and transfer to airport for departure.",
                image: "/UGCImages/leh/itinerary/6.jpg"
            }
        ],
        images: [
            "/UGCImages/leh/packages/basic/1.jpg",
            "/UGCImages/leh/packages/basic/2.jpg",
            "/UGCImages/leh/packages/basic/3.jpg",
            "/UGCImages/leh/packages/basic/4.jpg"
        ],
        departureDates: [
            { date: "May 2025 - June 2025" }
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