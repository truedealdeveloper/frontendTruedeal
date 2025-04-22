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

export interface USAPackage {
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

export const usaPackages: Record<string, USAPackage> = {
    eastWestCoastOrlando: {
        id: "east-west-coast-orlando",
        packageName: "East & West Coast With Orlando",
        days: 16,
        nights: 15,
        amount: 325999,
        dateStart: "15 April 2025",
        dateEnd: "16 October 2025",
        description: "Experience the best of America's East Coast with our 10-day tour covering New York, Washington DC, and Boston's iconic landmarks.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Double Sharing",
            arrivalDate: "Contact Us",
            duration: "16D15N USA Fixed Departure",
            costBasis: "Cost Based On 2 Adults"
        },
        hotelDetails: [
            {
                city: "New York",
                hotel: "Springhill suites Manhattan/ Doubletree by Hilton or similar",
                roomType: "Standard Room"
            },
            {
                city: "Washington ",
                hotel: "Springhill Suites Gaithersburg/Wyndham College Park or similar",
                roomType: "Standard Room"
            },
            {
                city: "Niagara",
                hotel: "Wyndham Garden Niagara Falls/Holiday Inn or similar",
                roomType: "Standard Room"
            },
            {
                city: "Las Vegas",
                hotel: "LUXOR / EXCALIBUR or similar",
                roomType: "Standard Room"
            },
            {
                city: "Los Angeles",
                hotel: "Four Points by Sheraton LAX airport or similar",
                roomType: "Standard Room"
            },
            {
                city: "San Francisco",
                hotel: "CROWNE PLAZA Union city / Fremont MARRIOTT or similar",
                roomType: "Standard Room"
            },
            {
                city: "Orlando",
                hotel: "Wyndham Celebration area/ Courtyard by Marriott or similar",
                roomType: "Standard Room"
            }
        ],
        tourSummary: [
            "Day 1: ARRIVE IN NEW YORK – CHECK-IN AT HOTEL",
            "Day 2: NEW YORK CITY TOUR WITH STATUE OF LIBERTY & SUMMIT ONE VANDERBILT",
            "Day 3: NEW YORK – WASHINGTON",
            "Day 4: WASHINGTON – Guided City Tour & Visit Smithsonian National Air and Space Museum",
            "Day 5: Washington DC to NIAGARA Falls (US SIDE) Via Hershey",
            "Day 6: MAID OF THE MIST & CAVE OF THE WINDS",
            "Day 7: DEPARTURE FROM ORLANDO – ARRIVAL INTO LAS VEGAS",
            "Day 8: DAY AT LEISURE",
            "Day 9: LAS VEGAS TO LOS ANGELES",
            "Day 10: UNIVERSAL STUDIOS",
            "Day 11: LOS ANGELES TO SAN FRANCISCO VIA MONTEREY",
            "Day 12: SAN FRANCISCO CITY TOUR WITH BAY CRUISE",
            "Day 13: DEPARTURE FROM SAN FRANCISCO / ARRIVAL INTO ORLANDO",
            "Day 14: WALT DISNEY WORLD/Orlando FL - MAGIC KINGDOM",
            "Day 15: WALT DISNEY WORLD/Orlando FL - EPCOT",
            "Day 16: DEPARTURE FROM ORLANDO",
        ],
        inclusions: [
            "Arrival/ Departure airport transfer.",
            "15 night's accommodation with breakfast.",
            "15 dinners @ Indian Restaurants (set menu)",
            "New York Hotel",
            "Springhill suites Manhattan/ Doubletree by Hilton or similar",
            "Washington Hotel",
            "Springhill Suites Gaithersburg/Wyndham College Park or similar",
            "Niagara, Hotel",
            "Wyndham Garden Niagara Falls/Holiday Inn or similar",
            "Las Vegas Hotel",
            "LUXOR / EXCALIBUR or similar (Breakfast @ Indian Restaurant or gift card)- Resort",
            "Fee included.",
            "Los Angeles Hotel",
            "Four Points by Sheraton LAX airport or similar",
            "San Francisco Hotel",
            "CROWNE PLAZA Union city / Fremont MARRIOTT or similar",
            "Orlando Hotel",
            "Wyndham Celebration area/ Courtyard by Marriott or similar",
            "City tour: New York, Philadelphia, Washington DC, Las Vegas, Los Angeles, SFO",
            "Entrance tickets: Statue of Liberty, Summit One Vanderbilt, Capitol Wheel, Smithsonian Air and space museum, Capitol Building from outside, Union Station, Hershey's Chocolate Factory, Maid of the mist, Cave of the winds, 2 days Disney General admission, Universal Studios LA, Golden Gate Bay cruise.",
        ],
        exclusions: [
            "International airfare",
            "Cruise fare",
            "Cruise port transfers / Miami Transfer",
            "Meals except those indicated above.",
            "No vehicle at disposal in Niagara as all attractions are walking distance.",
            "Domestic air tickets & baggage charges",
            "Porterage, tip to drivers and waiters",
            "Personal expense of any nature like laundry, shopping, incidentals at hotels etc.",
            "Any tours, transfers or event tickets are not mentioned in package inclusions.",
            "Incidental Charges must be paid by clients.",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrive in New York",
                description: `Upon arrival at the airport, the driver will meet you and transfer you to the hotel. Airport
transfers from JFK will be from 11 am to 2 pm. Should you arrive after this time you can
take a taxi to the hotel or please see the optional section for rates for transfers.<br /><br />

After arrival at the hotel, check in, take some time to freshen up and meet in the hotel
lobby for transfer to dinner (approximately 7.30 pm), following which we will head to
Times Square.<br /><br />

Known as "The Crossroads of the World" and "The Great White Way," Times
Square NYC is one of the most popular commercial intersections in the world. Located
in central Manhattan at the junction of Broadway and Seventh Avenue, it is home to
top destinations such as ABC's Times Square Studios, and Planet Hollywood. More than
300,000 people pass through iconic Times Square NYC every day.<br /><br />

Free Time at Times square. You can opt to see Madame Tussauds wax museum in Times
square or go to see Broadway Show are the theatrical performances presented in the
41 professional theaters, each with 500 or more seats, located in the Theater District and
the Lincoln Center along Broadway, in Midtown Manhattan, New York City (Refer to
optional section for details and pricing)<br /><br />

Dinner at restaurant & transfer to hotel for overnight stay. (D)`
            },
            {
                day: 2,
                title: "New York City Tour",
                description: `Full day guided tour of New York City including visits to Empire State Building Observatory for stunning city views, Times Square, Fifth Avenue, and Wall Street.<br /><br />

Evening at leisure to explore Broadway and Times Square on your own.`
            },
            {
                day: 3,
                title: "Statue of Liberty & Ellis Island Tour",
                description: `Morning ferry to Liberty Island to see the iconic Statue of Liberty, followed by a visit to Ellis Island Immigration Museum.<br /><br />

Afternoon at leisure to explore SoHo and Greenwich Village neighborhoods.`
            },
            {
                day: 4,
                title: "Metropolitan Museum & Central Park",
                description: `Visit the world-renowned Metropolitan Museum of Art, followed by a guided walking tour of Central Park.<br /><br />

Evening dinner cruise on the Hudson River with spectacular views of the Manhattan skyline.`
            },
            {
                day: 5,
                title: "Travel to Washington DC",
                description: `Morning train to Washington DC. On arrival, check-in at your hotel.<br /><br />

Afternoon panoramic city tour including White House (external view), Capitol Hill, and Lincoln Memorial.<br /><br />

Accommodation: Holiday Inn Washington DC.`
            },
            {
                day: 6,
                title: "Washington DC Monuments Tour",
                description: `Full day tour of Washington's famous monuments including the Washington Monument, Jefferson Memorial, Vietnam Veterans Memorial, and Arlington National Cemetery.<br /><br />

Evening tour of monuments illuminated at night.`
            },
            {
                day: 7,
                title: "Smithsonian Museums Exploration",
                description: `Guided tour of the Smithsonian Institution museums including the National Air and Space Museum and National Museum of American History.<br /><br />

Afternoon at leisure to explore Georgetown historic district.`
            },
            {
                day: 8,
                title: "Travel to Boston",
                description: `Morning train to Boston. On arrival, check-in at your hotel.<br /><br />

Afternoon orientation tour of Boston including Beacon Hill, Boston Common, and the historic Quincy Market.<br /><br />

Accommodation: Courtyard by Marriott Boston Downtown.`
            },
            {
                day: 9,
                title: "Boston Freedom Trail & Harbor Cruise",
                description: `Morning walking tour along the Freedom Trail exploring Boston's revolutionary history.<br /><br />

Afternoon harbor cruise with views of the USS Constitution.<br /><br />

Evening farewell dinner at a traditional New England seafood restaurant.`
            },
            {
                day: 10,
                title: "Depart from Boston",
                description: `Transfer to Boston Logan International Airport for your departure flight.<br /><br />

End of your journey with memories to cherish forever.`
            }
        ],
        images: [
            "/UGCImages/usa/images/1.jpg",
            "/UGCImages/usa/images/2.jpg",
            "/UGCImages/usa/images/3.jpg",
        ],
        sightseeingSpots: [
            {
                name: "Statue of Liberty",
                description: "Iconic symbol of freedom and the United States",
                image: "/UGCImages/usa/Sightseeing/liberty.jpg"
            },
            {
                name: "Washington Monument",
                description: "Striking obelisk honoring George Washington",
                image: "/UGCImages/usa/Sightseeing/washington.jpg"
            },
            {
                name: "Harvard University",
                description: "Prestigious Ivy League university in Cambridge",
                image: "/UGCImages/usa/Sightseeing/harvard.jpg"
            }
        ],
        localFood: [
            {
                name: "New York Pizza",
                description: "Iconic thin-crust pizza, a New York culinary institution",
                image: "/UGCImages/usa/Cuisine/pizza.jpg",
                where: "Joe's Pizza, New York"
            },
            {
                name: "Lobster Roll",
                description: "New England specialty with fresh lobster meat",
                image: "/UGCImages/usa/Cuisine/lobster.jpg",
                where: "Legal Sea Foods, Boston"
            }
        ],
        culture: [
            {
                title: "Broadway Theater",
                description: "World-class theatrical performances in New York City",
                image: "/UGCImages/usa/Culture/broadway.jpg"
            },
            {
                title: "American History",
                description: "Rich heritage preserved in museums and historic sites",
                image: "/UGCImages/usa/Culture/history.jpg"
            },
            {
                title: "Urban Diversity",
                description: "Experience America's melting pot of cultures",
                image: "/UGCImages/usa/Culture/diversity.jpg"
            }
        ],
        additionalInfo: {
            highlights: [
                "Empire State Building observation deck",
                "Statue of Liberty up-close",
                "Washington DC monuments",
                "Smithsonian museums",
                "Boston's Freedom Trail",
                "Harbor cruises"
            ],
            bestTimeToVisit: "April to June or September to October",
            cuisine: [
                "New York pizza",
                "New England seafood",
                "Washington DC international cuisine",
                "Boston cream pie"
            ],
            accommodation: {
                type: "4-star hotels",
                amenities: [
                    "Wi-Fi",
                    "Breakfast",
                    "Fitness center",
                    "Central locations"
                ]
            },
            transportation: {
                type: "Train and private transport",
                features: [
                    "Airport transfers",
                    "Intercity Amtrak trains",
                    "City tour buses",
                    "Walking tours"
                ]
            },
            visaInfo: {
                requirement: "B1/B2 tourist visa required",
                duration: "4-6 weeks processing",
                cost: "USD 160",
                documents: [
                    "Valid passport",
                    "DS-160 confirmation",
                    "Appointment confirmation",
                    "2x2 inch photograph",
                    "Financial documents"
                ]
            }
        },
        departureDates: [
            { date: "17 Apr 2025", availability: "Available", price: 325999 },
            { date: "1 May 2025", availability: "Available", price: 329999 },
            { date: "15 May 2025", availability: "Available", price: 325999 },
            { date: "29 May 2025", availability: "Available", price: 325999 },
            { date: "12 Jun 2025", availability: "Available", price: 339999 },
            { date: "19 Jun 2025", availability: "Available", price: 342999 },
            { date: "17 Jul 2025", availability: "Available", price: 349999 },
            { date: "14 Aug 2025", availability: "Available", price: 345999 },
            { date: "18 Sep 2025", availability: "Available", price: 349999 },
            { date: "16 Oct 2025", availability: "Available", price: 349999 },
        ]
    }
}; 