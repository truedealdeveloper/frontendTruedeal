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
        id: "quick-ladakh-5-nights-6-days",
        packageName: "Quick Ladakh 5 Nights 6 Days",
        days: 6,
        nights: 5,
        amount: 34078,
        dateStart: "May 2025",
        dateEnd: "30 July 2025",
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
            "Anything not specifically mentioned under the head",
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
                image: "/UGCImages/LADAKH/1.webp"
            },
            {
                day: 2,
                title: "LEH - EXCURSION TO SHAM VALLEY (65 KMS / 04 HRS – ONE WAY)",
                description: `After breakfast you drive downstream along the River Indus on Leh – Kargil Highway. And start our sightseeing with Hall Of Fame (Museum Constructed by India Army) near Leh is worth a visit for every Indian, and proceed further to Gurudwara Patthar Sahib at an altitude of 3600 Mtrs about 22 Kms from Leh was constructed in memory of Guru Nanak Dev ji Nestled deep in the Himalayas, A drive of another 4 km took us to Magnetic Hill which defies the law of gravity. As you move ahead from Magnetic Hills, just before Nimmu Village, there comes a famous Confluence Of Two Rivers Indus River coming from Tibet (left) and Zanskar River coming from Zanskar Valley (right). After visiting confluence we head to followed by a visit to Shanti Stupa Leh palace. Later we drive back to Leh. Dinner and overnight at Hotel in Leh.`,
                image: "/UGCImages/LADAKH/2.webp"
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
                image: "/UGCImages/LADAKH/3.webp"
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
                image: "/UGCImages/LADAKH/4.webp"
            },
            {
                day: 5,
                title: "Pangong - Lake",
                description: "Early morning sunrise at Pangong. Drive back to Leh. Transfer to airport for departure.",
                image: "/UGCImages/LADAKH/5.webp"
            },
            {
                day: 6,
                title: "LEH - DEPARTURE",
                description: "After breakfast check out from hotel and transfer to airport for departure.",
                image: "/UGCImages/LADAKH/6.webp"
            }
        ],
        images: [
            "/UGCImages/LADAKH/7.webp",
            "/UGCImages/LADAKH/8.webp", 
            "/UGCImages/LADAKH/9.webp",
            "/UGCImages/LADAKH/10.webp"
        ],
        departureDates: [
            { date: "May 2025 - July 2025" }
        ],
        experiences: [
            {
                title: "Monastery Visit",
                image: "/UGCImages/LADAKH/18.webp"
            },
            {
                title: "Pangong Lake",
                image: "/UGCImages/LADAKH/10.webp"
            },
            {
                title: "Camel Safari",
                image: "/UGCImages/LADAKH/camel safari/1.png"
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
    },
    lehPremium: {
        id: "premium-ladakh-6-nights-7-days",
        packageName: "Magical Ladakh 6 Nights 7 Days",
        days: 7,
        nights: 6,  
        amount: 36801,
        dateStart: "May 2025",  
        dateEnd: "30 July 2025",
        description: "Experience the magic of Ladakh with our 7-day tour covering Leh, Sham Valley, Pangong Lake, Nubra Valley.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "7D6N Leh Fixed Departure",
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
            "Day 4: IN NUBRA – EXCURSION TO TURTUK (0 POINT & THANG VILLAGE)",
            "Day 5: NUBRA VALLEY TO PANGONG LAKE (150 KMS / 5 HRS)",
            "Day 6: PANGONG LAKE TO LEH VIA CHANGLA (140 KMS / 6 HRS)",
            "Day 7: LEH - DEPARTURE"
        ],
        inclusions: [
            "Return flight tickets (in economy class)",
            "Assistance upon arrival at Leh Hotel",
            "Traditional welcome in the Hotel with Welcome Drink (Hot Tea / Coffee / Kahwa) on arrival",
            "06 night accommodation twin/double/triple sharing basis as per the itinerary.",
            "06 Breakfast + 06 Dinner",
            "Return airport and round trip transfers along with all sightseeing tours by Non-Ac Innova / Tempo Traveler as per the itinerary",
            "Wildlife fee & Red Cross fee",
            "All toll taxes / parking fee / driver allowance",
            "Ladakh Entry Fee",
            "Ladakh Ecological Development Fee",
            "One Mid-Sized Oxygen Cylinder during Nubra Valley and Pangong Lake visit"
        ],
        exclusions: [
            "Any Kind of Personal Expenses or Optional Tours / Extra Meals Ordered",
            "Anything not specifically mentioned under the head",
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
                image: "/UGCImages/LADAKH/1.webp"
            },
            {
                day: 2,
                title: "LEH - EXCURSION TO SHAM VALLEY (65 KMS / 04 HRS – ONE WAY)",
                description: `After breakfast you drive downstream along the River Indus on Leh – Kargil Highway. And start our sightseeing with Hall Of Fame (Museum Constructed by India Army) near Leh is worth a visit for every Indian, and proceed further to Gurudwara Patthar Sahib at an altitude of 3600 Mtrs about 22 Kms from Leh was constructed in memory of Guru Nanak Dev ji Nestled deep in the Himalayas, A drive of another 4 km took us to Magnetic Hill which defies the law of gravity. As you move ahead from Magnetic Hills, just before Nimmu Village, there comes a famous Confluence Of Two Rivers Indus River coming from Tibet (left) and Zanskar River coming from Zanskar Valley (right). After visiting confluence we head to followed by a visit to Shanti Stupa Leh palace. Later we drive back to Leh. Dinner and overnight at Hotel in Leh.`,
                image: "/UGCImages/LADAKH/14.webp"
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
                image: "/UGCImages/LADAKH/15.webp"
            },
            {
                day: 4,
                title: "IN NUBRA – EXCURSION TO TURTUK (0 POINT & THANG VILLAGE)",
                description: `After an early breakfast, proceed to Turtuk (A village that was won by India in the 1971 war with Pakistan) and extremely
close to the border. Visit a 16th Century Mosque, (comprising of a touch of Turkish &amp; Iranian culture), ruined fort of Dhards
and Monastery. Admire the magnificent view of the famous K2 peak (The second highest peak in the world after Mount
Everest). Later back to hotel for overnight stay.`,
                image: "/UGCImages/LADAKH/16.webp"
            },
            {
                day: 5,
                title: "NUBRA VALLEY TO PANGONG LAKE (150 KMS / 5 HRS)",
                description: `After an early breakfast we check out from Camp or hotel and drive towards Hunder where you have opportunity to ride on a
bacterian camel (double humped) amidst the sand dunes of this high altitude desert with snowcapped mountains on the
horizon. On the return stop at Diskit which is the headquarter town of Nubra Valley. Stroll around the bazaar observing the
shops and local people going about their daily chores. Later we drive towards Pangong Tso via Agham &amp; Shyok Valley.
Some of the road patches in areas are extremely tough (towards nubra side) in terms of road conditions but no doubt the
journey is very scenic!  Later after crossing this adventurous part we drive further towards Durbuk & Tangtse for Pangong
you pass through few small villages of Changthang and finally you can have a sudden view of the Pangong lake situated at
14,000 feet (4,267 m). Upon arrival we check in at our Camp/Hotel Near Pangong lake Dinner &amp; Overnight at the Hotel`,
                image: "/UGCImages/LADAKH/17.webp"
            },
            {
                day: 6,
                title: "PANGONG LAKE TO LEH VIA CHANGLA (140 KMS / 6 HRS)",
                description: `Morning at leisure to explore the beauty of lake and later we drive back to Leh via Changla Pass 5486 Mtrs en route visiting
Hemis Gompa, the largest monastic foundation of Drukpa Kagyu Order of Tibetan Buddhism. And futher to Thiksey an
impressive complex rising tier upon tier on a hill above the village and another 5 Kms driving through a picturesque
landscape we reach to Shey Palace, The ancient capital of Ladakh &amp; 3 Idiots Rancho School. Drive further to Leh. Dinner
&amp; Overnight at Hotel.`,
                image: "/UGCImages/LADAKH/19.webp"
            },
            {
                day: 7,
                title: "LEH - DEPARTURE",
                description: "After breakfast check out from hotel and transfer to airport for departure.",
                image: "/UGCImages/LADAKH/20.webp"
            }
        ],
        images: [
            "/UGCImages/LADAKH/1.webp",
            "/UGCImages/LADAKH/14.webp",
            "/UGCImages/LADAKH/15.webp",
            "/UGCImages/LADAKH/17.webp"
        ],
        departureDates: [
            { date: "May 2025 - July 2025" }
        ],
        experiences: [
            {
                title: "Monastery Visit",
                image: "/UGCImages/LADAKH/18.webp"
            },
            {
                title: "Pangong Lake",
                image: "/UGCImages/LADAKH/10.webp"
            },
            {
                title: "Camel Safari",
                image: "/UGCImages/LADAKH/camel safari/1.png"
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
    },
    
    // Add more packages as needed
};

export const withoutFlightPackages: Record<string, LehladakhPackage> = {
    lehBasicPackage: {
        id: "quick-ladakh-5-nights-6-days-no-flight",
        packageName: "Quick Ladakh 5 Nights 6 Days (Land Package)",
        days: 6,
        nights: 5,
        amount: 24069, 
        dateStart: "May 2025",
        dateEnd: "October 2025",
        description: "Experience the magic of Ladakh with our land package covering Leh, Sham Valley, Pangong Lake, and Nubra Valley. Perfect for travelers arranging their own flights.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "6D5N Leh Land Package",
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
                hotel: "Nubra Summer Camp, Nubra Delight Camp",
                roomType: "Deluxe Tent"
            },
            {
                city: "Pangong Lake",
                hotel: "Pangong Delight Camp, P3 Camp",
                roomType: "Deluxe Tent"
            }
        ],
        tourSummary: [
            "Day 1: ARRIVE LEH",
            "Day 2: LEH - EXCURSION TO SHAM VALLEY) (65 KMS / 04 HRS – ONE WAY)",
            "Day 3: LEH–NUBRA VALLEY VIA KHARDUNG LA 18,390 FT. (120 KMS / 4 – 5 HRS)",
            "Day 4: IN NUBRA – EXCURSION TO TURTUK (0 POINT &amp; THANG VILLAGE)",
            "Day 5: NUBRA VALLEY - PANGONG LAKE – LEH (307 KMS / 10 HRS)",
            "Day 6: DEPART LEH (FLY OUT)"
        ],
        inclusions: [
            "Assistance upon arrival at Leh Hotel",
            "Traditional welcome in the Hotel with Welcome Drink (Hot Tea / Coffee / Kahwa) on arrival",
            "05 Nights Accommodation twin/double/triple sharing basis as per the Itinerary",
            "Meal Plan - 05 Breakfast &amp; 05 Dinner",
            "Return airport and round-trip transfers along with all sightseeing tours by Non-Ac Innova | Tempo Traveller as per the itinerary",
            "Wild Life fees &amp; Red Cross fee",
            "All toll taxes/Parking fee/Driver allowance",
            "Ladakh Entry Fee",
            "Ecological development fee"
        ],
        exclusions: [
            "Any Airfare",
            "Personal expenses",
            "Travel insurance",
            "Tips and gratuities",
            "Anything not mentioned in inclusions",
            "Any Kind of Personal Expenses or Optional Tours / Extra Meals Ordered",
            "The Services of Vehicle is not included on leisure days & after finishing the sightseeing tour as per the Itinerary",
            "Guide fee, Camera fee & any monument Entrances",
            "Medical & Travel insurance"
        ],
        itinerary: [
            {
                day: 1,
                title: "ARRIVE LEH",
                description: "Arrival Leh by morning flight and transfer to the hotel. After welcome drink complete day at rest for acclimatization to the height altitude of Leh (3500 meters). Dinner and overnight in hotel.",
                image: "/UGCImages/LADAKH/1.webp"
            },
            {
                day: 2,
                title: "LEH - EXCURSION TO SHAM VALLEY (65 KMS / 04 HRS – ONE WAY)",
                description: "After breakfast you drive downstream along the River Indus on Leh – Kargil Highway. And start our sightseeing with Hall Of Fame (Museum Constructed by India Army) near Leh is worth a visit for every Indian, and proceed further to Gurudwara Patthar Sahib at an altitude of 3600 Mtrs about 22 Kms from Leh was constructed in memory of Guru Nanak Dev ji Nestled deep in the Himalayas, A drive of another 4 km took us to Magnetic Hill which defies the law of gravity. As you move ahead from Magnetic Hills, just before Nimmu Village, there comes a famous Confluence Of Two Rivers Indus River coming from Tibet (left) and Zanskar River coming from Zanskar Valley (right). After visiting confluence we head to followed by a visit to Shanti Stupa Leh palace. Later we drive back to Leh. Dinner and overnight at Hotel in Leh.",
                image: "/UGCImages/LADAKH/14.webp"
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
                image: "/UGCImages/LADAKH/15.webp"
            },
            {
                day: 4,
                title: "IN NUBRA – EXCURSION TO TURTUK (0 POINT & THANG VILLAGE)",
                description: `After an early breakfast, proceed to Turtuk (A village that was won by India in the 1971 war with Pakistan) and extremely
close to the border. Visit a 16th Century Mosque, (comprising of a touch of Turkish &amp; Iranian culture), ruined fort of Dhards
and Monastery. Admire the magnificent view of the famous K2 peak (The second highest peak in the world after Mount
Everest). Later back to hotel for overnight stay.`,
                image: "/UGCImages/LADAKH/20.webp"
            },
            {
                day: 5,
                title: "NUBRA VALLEY TO PANGONG LAKE (150 KMS / 5 HRS)",
                description: `After an early breakfast we check out from Camp or hotel and drive towards Hunder where you have opportunity to ride on a
bacterian camel (double humped) amidst the sand dunes of this high altitude desert with snowcapped mountains on the
horizon. On the return stop at Diskit which is the headquarter town of Nubra Valley. Stroll around the bazaar observing the
shops and local people going about their daily chores. Later we drive towards Pangong Tso via Agham &amp; Shyok Valley.
Some of the road patches in areas are extremely tough (towards nubra side) in terms of road conditions but no doubt the
journey is very scenic!  Later after crossing this adventurous part we drive further towards Durbuk & Tangtse for Pangong
you pass through few small villages of Changthang and finally you can have a sudden view of the Pangong lake situated at
14,000 feet (4,267 m). Upon arrival we check in at our Camp/Hotel Near Pangong lake Dinner &amp; Overnight at the Hotel`,
                image: "/UGCImages/LADAKH/17.webp"
            },
            {
                day: 6,
                title: "PANGONG LAKE TO LEH VIA CHANGLA (140 KMS / 6 HRS)",
                description: `Morning at leisure to explore the beauty of lake and later we drive back to Leh via Changla Pass 5486 Mtrs en route visiting
Hemis Gompa, the largest monastic foundation of Drukpa Kagyu Order of Tibetan Buddhism. And futher to Thiksey an
impressive complex rising tier upon tier on a hill above the village and another 5 Kms driving through a picturesque
landscape we reach to Shey Palace, The ancient capital of Ladakh &amp; 3 Idiots Rancho School. Drive further to Leh. Dinner
&amp; Overnight at Hotel.`,
                image: "/UGCImages/LADAKH/19.webp"
            }
        ],
        images: [
            "/UGCImages/LADAKH/7.webp",
            "/UGCImages/LADAKH/8.webp",
            "/UGCImages/LADAKH/9.webp",
            "/UGCImages/LADAKH/10.webp"
        ],
        experiences: [
            {
                title: "Monastery Tour",
                image: "/UGCImages/LADAKH/18.webp"
            },
            {
                title: "Pangong Sunrise",
                image: "/UGCImages/LADAKH/10.webp"
            },
            {
                title: "Desert Safari",
                image: "/UGCImages/LADAKH/camel safari/1.png"
            }
        ]
    },
    himalayanLadakh: {
        id: "himalayan-ladakh-7-nights-8-days",
        packageName: "Himalayan Ladakh 7 Nights 8 Days (Land Package)",
        days: 8,
        nights: 7,
        amount: 30562,
        dateStart: "July 2025",
        dateEnd: "October 2025",
        description: "A comprehensive land package exploring the best of Ladakh including premium accommodations and exclusive experiences.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "6D5N Leh Land Package",
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
                hotel: "Nubra Summer Camp, Nubra Delight Camp",
                roomType: "Deluxe Tent"
            },
            {
                city: "Pangong Lake",
                hotel: "Pangong Delight Camp, P3 Camp",
                roomType: "Deluxe Tent"
            }
        ],
        tourSummary: [
            "Day 1: MANALI TO JISPA (140 KMS / 05 HRS DRIVE) VIA ATUL TUNNEL",
            "Day 2: JISPA TO LEH (335 KMS | 11 – 12 HRS)",
            "Day 3: LEH - EXCURSION TO SHAM VALLEY (65 KMS / 04 HRS – ONE WAY)",
            "Day 4: LEH–NUBRA VALLEY VIA KHARDUNG LA 18,390 FT. (120 KMS / 4 – 5 HRS)",
            "Day 5: IN NUBRA – EXCURSION TO TURTUK (0 POINT &amp; THANG VILLAGE)",
            "Day 6: NUBRA VALLEY TO PANGONG LAKE (150 KMS / 5 HRS)",
            "Day 7: PANGONG LAKE TO LEH VIA CHANGLA (140 KMS / 6 HRS)",
            "Day 8: LEH - DEPARTURE"
        ],
        itinerary: [
            {
                day: 1,
                title: "MANALI TO JISPA (140 KMS / 05 HRS DRIVE) VIA ATUL TUNNEL",
                description: `Pickup from Manali &amp; drive to Jispa. This day is the first day of our adventurous journey, which will be a lifetime
memorable and self-motivated trip. As soon as we will start our journey, koksar and then to our destination Jispa. Dinner
&amp; overnight stay at hotel in Jispa.`,
                image: "/UGCImages/LADAKH/1.webp"
            },
            {
                day: 2,
                title: "JISPA TO LEH (335 KMS | 11 – 12 HRS)",
                description: `After an early breakfast we check out from the hotel and ride north on the Manali-Leh Highway. You get to see some of
the most breath-taking landscapes that the Western Himalayas can offer. The scenery gets starker and barren as we
climb up to the 16,500-foot high Baralacha La, the second mountain pass on our journey. From the pass beautiful views
of meadows and snow-capped mountains can be seen. And we proceed further through Nakeela and Lachungla Pass
16,617 ft. for your lunch at Pang. After Lunch drive to Leh passing through Skyangchu Thang (Biggest and Highest
Plateau on Earth stretching upto 42 Kms), Tanglang La Pass 17,585ft and Indus Valley. Upon arrival in Leh, check in to
the pre-arranged Hotel for dinner &amp; overnight stay.`,
                image: "/UGCImages/LADAKH/14.webp"
            },
            {
                day: 3,
                title: "LEH - EXCURSION TO SHAM VALLEY (65 KMS / 04 HRS – ONE WAY)",
                description: `After breakfast you drive downstream along the River Indus on Leh – Kargil Highway. And start our sightseeing with Hall
Of Fame (Museum Constructed by India Army) near Leh is worth a visit for every Indian, and proceed further to
Gurudwara Patthar Sahib situated at an altitude of 3600 Mtrs about 22 Kms from Leh, the Gurudwara was constructed
in the memory of Guru Nanak Dev ji. A drive of another 4 km will take you to Magnetic Hill which defies the law of
gravity. As you move ahead from Magnetic Hills, just before Nimmu Village, there comes a famous point, popularly known
as Sangam Point which displays the confluence of Two Rivers, Indus River coming from Tibet (left) and Zanskar River
coming from Zanskar Valley (right). Next, we head to Alchi Gompa, The complex of temples located within the village is
the most celebrated of Ladakhs monasteries and dates back to the 11th century. After visiting Alchi we return back
towards Leh enroute visiting Likir Monastery which was built in the 11th century and was again re-built in the 18th
century and houses a 25 feet gold covered statue of Lord Buddha. Later we drive back to Leh for dinner &amp; overnight stay.`,
                image: "/UGCImages/LADAKH/15.webp"
            },
            {
                day: 4,
                title: "LEH–NUBRA VALLEY VIA KHARDUNG LA 18,390 FT. (120 KMS / 4 – 5 HRS)",
                description: `Post breakfast we drive to Nubra Valley. The road journey from Leh to Nubra Valley passes over Khardung La (Second
Second Highest Motorable Road in The World) at 5,602 Mtrs / 18,390 Ft, around 39 km from Leh. From the pass, one can
see all the way south over the Indus valley to seemingly endless peaks and ridges of the Zanskar range, and north to the
giants of the Saser massif. Nubra Valley is popularly known as Ldumra or the valley of flowers. It is situated in the north of
Ladakh between the Karakoram and Ladakh ranges of the Himalayas. The average altitude of the valley is 10,000 Ft.
above sea level. Upon arrival in Nubra we check in at our Camp / Hotel in Hunder for dinner &amp; overnight stay. In the
evening you can walk around the tiny villages to see how the locals live in this part of the world.`,
                image: "/UGCImages/LADAKH/16.webp"
            },
            {
                day: 5,
                title: "IN NUBRA – EXCURSION TO TURTUK (0 POINT & THANG VILLAGE)",
                description: `After an early breakfast, proceed to Turtuk (A village that was won by India in the 1971 war with Pakistan) and extremely
close to the border. Places to visit here comprises of a 16th Century Mosque, (comprising of a touch of Turkish &amp; Iranian
culture), ruined fort of Dhards and a Monastery. You can also admire the magnificent view of the famous K2 peak (The
second highest peak in the world after Mount Everest). Later back to Hunder for dinner &amp; overnight stay.`,
                image: "/UGCImages/LADAKH/17.webp"
            },
            {
                day: 6,
                title: "NUBRA VALLEY TO PANGONG LAKE (150 KMS / 5 HRS)",
                description: `After an early breakfast, we check out and drive towards Hunder where you have the opportunity to ride on a Bactrian
Camel (double humped) amidst the sand dunes of this high-altitude desert with snowcapped mountains on the horizon.
Next stop will be at Diskit which is the headquarter town of Nubra Valley. Stroll around the bazaar observing the shops
and local people going about their daily chores. Later we drive towards the majestic Pangong Tso via Agham &amp; Shyok
Valley. Some of the road patches in areas are extremely tough (towards Nubra side) in terms of road conditions but no
doubt the journey is very scenic! Later after crossing this adventurous part, we drive further towards Durbuk &amp; Tangtse,
you will also pass through few small villages of Changthang and finally you have a sudden view of the majestic Pangong
lake situated at 14,000 feet (4,267 m). Upon arrival we check in at our Camp/Hotel near Pangong lake. Dinner &amp;
overnight stay at camp in Pangong.`,
                image: "/UGCImages/LADAKH/19.webp"
            },
            {
                day: 7,
                title: "PANGONG LAKE TO LEH VIA CHANGLA (140 KMS / 6 HRS)",
                description: `Morning at leisure to explore the beauty of the lake which is famously known to show upto 5 shades of blue depending
upon the time and location of the viewer. Later we drive back to Leh via Changla Pass 5486 Mtrs enroute visiting Hemis
Gompa, the largest monastic foundation of Drukpa Kagyu Order of Tibetan Buddhism. And futher to Thiksey, an
impressive complex rising tier upon tier on a hill above the village and another 5 Kms driving through a picturesque
landscape we reach to Shey Palace, the ancient capital of Ladakh &amp; 3 Idiots Rancho School. Drive further to Leh.
Dinner &amp; overnight stay at hotel in Leh.`,
                image: "/UGCImages/LADAKH/20.webp"
            },
            {
                day: 8,
                title: "LEH - DEPARTURE",
                description: "After breakfast, check out from the hotel and transfer to the airport for your onward journey.",
                image: "/UGCImages/LADAKH/20.webp"
            }
        ],
        images: [
            "/UGCImages/LADAKH/8.webp",
            "/UGCImages/LADAKH/9.webp",
            "/UGCImages/LADAKH/7.webp",
            "/UGCImages/LADAKH/10.webp"
        ],
        experiences: [
            {
                title: "Premium Monastery Tour",
                image: "/UGCImages/LADAKH/18.webp"
            },
            {
                title: "Luxury Camping",
                image: "/UGCImages/LADAKH/10.webp"
            },
            {
                title: "Adventure Activities",
                image: "/UGCImages/LADAKH/camel safari/1.png"
            }
        ],
        inclusions: [
            "Luxury vehicle for all transfers",
            "Premium hotel & luxury camp accommodation",
            "All meals included (breakfast, lunch, dinner)",
            "Professional photography session",
            "Exclusive guided tours",
            "All permits and entry fees",
            "24/7 on-call support",
            "Complimentary wifi where available",
            "Welcome & farewell gifts"
        ],
        exclusions: [
            "Flights to/from Leh",
            "Personal expenses",
            "Travel insurance",
            "Tips and gratuities",
            "Optional activities",
            "Any Kind of Personal Expenses or Optional Tours / Extra Meals Ordered",
            'Anything not specifically mentioned under the head "Prices included"',
            "Medical & Travel insurance"
        ]
    },
    lehPremiumPackage2: {
        id: "premium-ladakh-6-nights-days-no-flight",
        packageName: "Premium Ladakh 6 Nights 7 Days (Land Package)",
        days: 7,
        nights: 6,
        amount: 29999,
        dateStart: "May 2025",
        dateEnd: "30 July 2025",
        description: "A comprehensive land package exploring the best of Ladakh including premium accommodations and exclusive experiences.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "7D6N Leh Land Package",
            costBasis: "Cost Based On 2 pax travelling together"
        },
        hotelDetails: [
            {
                city: "Leh",
                hotel: "The Himalayan Premium, Grand Dragon",
                roomType: "Deluxe Room"
            },
            {
                city: "Nubra Valley",
                hotel: "Nubra Luxury Camp, Desert Springs Resort",
                roomType: "Luxury Tent"
            },
            {
                city: "Pangong Lake",
                hotel: "Pangong Luxury Camp, Lake View Resort",
                roomType: "Premium Tent"
            }
        ],
        tourSummary: [
            "Day 1: Arrival in Leh • VIP Airport Transfer",
            "Day 2: Leh Sightseeing • Premium Monastery Tour",
            "Day 3: Leh to Nubra Valley via Khardung La",
            "Day 4: Nubra Valley Exploration",
            "Day 5: Nubra to Pangong Lake",
            "Day 6: Pangong Lake to Leh",
            "Day 7: Departure with Memories"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Leh • VIP Airport Transfer",
                description: "Luxury vehicle pickup from airport. Welcome drink at premium hotel. Guided acclimatization. Evening local market visit.",
                image: "/UGCImages/LADAKH/1.webp"
            },
            {
                day: 2,
                title: "Leh Sightseeing • Premium Monastery Tour",
                description: "Private guided tour of Leh Palace, Shanti Stupa. Exclusive monastery visits with resident monk interactions.",
                image: "/UGCImages/LADAKH/14.webp"
            },
            {
                day: 3,
                title: "Leh to Nubra Valley via Khardung La",
                description: "Scenic drive to world's highest motorable pass. Luxury camp stay in Nubra. Evening camel safari.",
                image: "/UGCImages/LADAKH/15.webp"
            },
            {
                day: 4,
                title: "Nubra Valley Exploration",
                description: "Visit to Diskit Monastery. Sand dune adventure. Optional ATV rides. Cultural show in evening.",
                image: "/UGCImages/LADAKH/16.webp"
            },
            {
                day: 5,
                title: "Nubra to Pangong Lake",
                description: "Drive to Pangong Lake. Sunset photography session. Luxury camping by the lake.",
                image: "/UGCImages/LADAKH/17.webp"
            },
            {
                day: 6,
                title: "Pangong Lake to Leh",
                description: "Sunrise photography. Return via Changla Pass. Visit Hemis Monastery. Evening at leisure.",
                image: "/UGCImages/LADAKH/19.webp"
            },
            {
                day: 7,
                title: "Departure with Memories",
                description: "Early breakfast. Airport transfer in luxury vehicle. Farewell gifts.",
                image: "/UGCImages/LADAKH/20.webp"
            }
        ],
        images: [
            "/UGCImages/LADAKH/12.webp",
            "/UGCImages/LADAKH/7.webp",
            "/UGCImages/LADAKH/8.webp",
            "/UGCImages/LADAKH/10.webp"
        ],
        experiences: [
            {
                title: "Premium Monastery Tour",
                image: "/UGCImages/LADAKH/18.webp"
            },
            {
                title: "Luxury Camping",
                image: "/UGCImages/LADAKH/10.webp"
            },
            {
                title: "Adventure Activities",
                image: "/UGCImages/LADAKH/camel safari/1.png"
            }
        ],
        inclusions: [
            "Luxury vehicle for all transfers",
            "Premium hotel & luxury camp accommodation",
            "All meals included (breakfast, lunch, dinner)",
            "Professional photography session",
            "Exclusive guided tours",
            "All permits and entry fees",
            "24/7 on-call support",
            "Complimentary wifi where available",
            "Welcome & farewell gifts"
        ],
        exclusions: [
            "Flights to/from Leh",
            "Personal expenses",
            "Travel insurance",
            "Tips and gratuities",
            "Optional activities",
            "Any Kind of Personal Expenses or Optional Tours / Extra Meals Ordered",
            'Anything not specifically mentioned under the head "Prices included"',
            "Medical & Travel insurance"
        ]
    }
}; 