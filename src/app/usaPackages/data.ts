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
        description: `Experience the best of America's East Coast with our 10-day tour covering New York, Washington DC, and Boston's iconic landmarks. This package includes a visit to the Statue of Liberty, the White House, the Smithsonian National 
        Air and Space Museum, and the Golden Gate Bridge. America is a land of dreams and adventures, and this tour is designed to take you on a journey of discovery and excitement.`,
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
                title: "Arrive at New York",
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
                title: "New York city tour with Statue of Liberty & Summit One Vanderbilt",
                description: `
                After breakfast, we proceed for a Full day city tour of New York.
First, we will head to Battery Park for a 15 min ferry ride to see USA's
famous landmark, “Statue of Liberty”. This is one of the most
recognized symbols of freedom and democracy in the World. The
Statue was a gift from France to USA in 1885. Tour the grounds and
take pictures with Lady Liberty. <br /><br />
We will proceed back to Battery Park to continue with our guided city tour with our tour
guide. We will make a photo stop at iconic Wall Street bull. This is a 7001-pound
structure at the financial district in Manhattan, depicting a charging bull, the symbol
of aggressive financial optimism and prosperity. <br /><br />
Later we drive through Rockefeller Center, Ground Zero, United Nations and Trump
tower. <br /><br />

We will then proceed to visit SUMMIT One Vanderbilt. Explore three levels of mind-
bending multi-sensory immersive experiences set atop the tallest commercial skyscraper

in Midtown Manhattan. It offers three levels of multi-sensory immersive experiences.
Here, you can enjoy panoramic views, marvel at mirrored rooms and art installations.
Transfer to restaurant for dinner.
After dinner transfer to the hotel for an overnight stay. (B, D)
                `
            },
            {
                day: 3,
                title: "New York to Washington",
                description: `After breakfast, we check out of the hotel and drive towards Washington DC
(approximately 5-hour drive) <br /><br />
On the way, the Philadelphia orientation city tour explores the highlights of the city. Visit
all the must-see spots, like Independence Hall and the Liberty Bell Exhibit, the South 9th
Street Italian Market, Philadelphia City Hall, Love Park, the Rocky steps at the entrance
to the Philadelphia Museum of Art and much more. <br /><br />

Proceed to Washington DC, On arrival proceed to dinner before checking into the
hotel. (B, D)
`
            },
            {
                day: 4,
                title: "Washington DC Guided City Tour & Visit Smithsonian National Air and Space Museum",
                description: `
                After breakfast, Proceed to Guided city tour of the
capital of USA. you will be met by an experienced
tour guide for a 3-hour guided city tour. Washington
DC is the capital city of the United States of America.
It is a city of monuments, memorials, historic
neighborhoods, and museums. We will take photo
stops at the White House, the home of the President of

the USA. <br /><br />

After the city tour, we will visit the Smithsonian Air and Space Museum. The Smithsonian
National Air and Space Museum maintains the largest collection of historic air and
spacecraft in the world. The museum features 22 exhibition galleries, displaying
hundreds of artifacts including the original Wright 1903 Flyer, the "Spirit of St. Louis," and
the Apollo 11 command module. The National Air and Space Museum is a must-see for
visitors to Washington, DC. It is the most visited museum in the world and appeals to all
ages. <br /><br />

Proceed to experience The Capital Wheel - Soar 180
feet above the Potomac River and marvel at truly
breathtaking views. With 42 climate-controlled
gondolas, The Capital Wheel is open all year long.
Sights visible from The Capital Wheel include
National Harbor, the Washington Monument, City of
Alexandria, Masonic Temple, Georgetown and

more throughout the DC-Maryland-Virginia region.
                
                `
            },
            {
                day: 5,
                title: "Washington DC to Niagara Falls (US Side) via Hershey",
                description: `After breakfast, we check out of the hotel and drive towards Harrisburg, where we will
visit the Hershey's Chocolate Factory (approximately 2.5 hours drive)
Hershey is the largest manufacturer of chocolate in the world.
Discover all things chocolatey and fun at Hershey's Chocolate
World Attraction! Embark on a journey to learn and see how
chocolate is made on a tour ride, and shop for one-of-a-kind
souvenirs and gifts, and have a chocolate inspired adventure.
After visit to Hershey Chocolate factory, we will drive to
Niagara Falls, NY (5.5hrs Drive). <br /><br />
Proceed to dinner before checking into the hotel. overnight at Niagara Hotel. (B, D)`
            },
            {
                day: 6,
                title: "Maid of the Mist & Cave of the Winds",
                description: `After breakfast we will be walking to board the famous boat, “Maid of the mist”. This
boat ride takes close and around the American and Horseshoe Falls.
<br /><br />
Later, proceed to The Cave of the Winds, which takes you
closer to the waters of Niagara Falls than you thought
possible. You will ride an elevator 175 feet (53 meters) deep
into the Niagara Gorge. Then, clad in a bright yellow poncho
and wearing the special footwear provided, you will walk
over a series of wooden walkways to the famous "Hurricane
Deck". As you stand at the railing, you are a mere 20 feet (6
meters) from the billowing torrents of the Bridal Veil Falls.
<br /><br />
Free time at the Falls on your own. <br /><br />
Walk to dinner, After dinner you can opt to walk to the falls to watch the Niagara
Illumination. Walk back to hotel. Overnight in Niagara. (B, D)`
            },
            {
                day: 7,
                title: "Departure from orlando - Arrival into Las Vegas",
                description: `After breakfast, check out from the hotel for flight to Las Vegas.
Arrive in Las Vegas - 'The Sin City', as it is often called. You will be met by driver at
airport and transferred to hotel. Arrival transfers will be between 11 am and 1 pm.
Should you arrive after this time you can take a taxi to the hotel or please see optional
section for rates for transfers. <br /><br />
We will proceed for a tour of Las Vegas Strip after dinner. You will get a view of the Las
Vegas glitz and glamour. We will visit the famous “Welcome to Fabulous Las Vegas”
sign for a Photo op and stop by the famous dancing fountains of Bellagio.
Next on the list of will be Freemont Street, which will wow you with 12 million LEDs
flashing under a four-block-long canopy, complete with zip liners flying overhead. You will
see the gleaming exteriors of the Venetian, Caesars Palace, Mandalay Bay, Mirage,
Aria, Wynn, and Paris Las Vegas. <br /><br />
Transfer back to hotel, overnight in Las Vegas (B, D)`
            },
            {
                day: 8,
                title: "Day at leisure",
                description: `
                The day is at leisure for you to spend how you wish.
Explore the entertainment capital of the world by
visiting the many casinos or strolling along the strip
shopping at the many designer shops. <br /><br />
You can also take optional tours to the Grand
Canyon West Rim, which is about 4 hours away, or
Red Rock Canyon which is less than an hour away
from Las Vegas. Please refer to the optional tours
section for tour descriptions and pricing. <br /><br />

In the evening, you can opt to see one of the Vegas signatures shows, either V-The
Ultimate Show or 'O' Show. Refer to the optional tours section for pricing. <br /><br />
Meet the driver at the hotel at the designated time for transfer to restaurant for dinner.
After transfer to the hotel for an overnight stay. (D)

                `
            },
            {
                day: 9,
                title: "Las Vegas to Los Angeles",
                description: `
                Today, check out from the hotel and depart for Los
Angeles, 'The City of Angels'. (Approximately 5-hour
drive). <br /><br />
On the way we will stop at Outlets at Barstow, for 2
hours of shopping. This is California's leading shopping
mall chain featuring a variety of top brand-name &
designer outlet stores. <br /><br />
We will then proceed towards Los Angeles. <br /><br />
Dinner at a restaurant and transfer to the hotel for an overnight stay. ( D)
                `
            },
            {
                day: 10,
                title: "Universal Studios",
                description: `
                
                After breakfast, transfer to Universal Studios.
Universal Studios, the largest Film and Television studio
in the world, where the greatest moments from movies
and television come to life, like the reality shattering,
all-new Terminator 2; 3D, starring the cast of
Terminator 2. Plus, have your worst nightmare come
true when a man-eating T-Rex attacks you on the
Jurassic Park ride. <br /><br />

Upon arrival at Los Angeles proceed for orientation city tour of Los Angeles, this tour will
take you throughout America's most exciting city. Drive pass by Beverly Hills, Rodeo
Drive, Farmers Market, Hollywood Mann's Chinese Theatre, Walk of Fame. <br /><br />
After dinner transfer to the hotel for an overnight stay. (B, D)

                `
            },
            {
                day: 11,
                title: "Los Angeles to San Francisco via Monterey",
                description: `
                After breakfast check out of the hotel and drive towards San Francisco via Monterey &
17 Mile Drive. (Approximately 7 hrs. drive) <br /><br />

We will travel on the scenic California's Pacific Coast
Highway to the beautiful Monterey Peninsula, famous
for its spectacular ocean views, and historical past.
We will drive along the famous 17-mile drive and see
Pebble Beach. Photo stops will be made along this
gorgeous drive. <br /><br />
We will arrive at San Francisco, proceed to dinner and
then check into hotel. <br /><br />
Overnight in San Francisco. (B, D)
                `
            },
            {
                day: 12,
                title: `San Francisco City Tour with Bay Cruise`,
                description: `
                After our breakfast at the hotel today we will
meet with the tour guide for a guided tour of the
city of San Francisco. Enjoy the narrated tour with
photo stops and enjoy great views and famous
attractions such as the Golden Gate Bridge.
Travel through the Golden Gate Park and enjoy
seasonal flower displays, bison grazing and pass
windmills overlooking the Pacific. Enjoy
neighborhoods dotted with colorful Victorian
homes. Learn about San Francisco's early
settlements, from Native America

ns, to Spanish missionaries and the frenzied days of the gold rush as you drive through
the once infamous Barbary Coast. <br /><br />
Your entry to the Golden Gate Bay Cruise boat tour is included. The Bay Cruise is San
Francisco's original bay cruise adventure, sailing since 1939. You can experience
superb views of the notorious Alcatraz Island and Golden gate bridge. You'll learn
about this city's rich cultural history as you cruise past the area's most famous
landmarks. <br /><br />
After the bay cruise we will proceed to dinner and later to the hotel for an overnight
stay (B, D)
                `
            },
            {
                day: 13,
                title: "Departure from San Francisco / Arrival into Orlando",
                description: `
                After breakfast proceed to SFO airport for your flight to Orlando.
Arrive in Orlando, you will be transferred to a hotel. Take some time to freshen up and
then head for dinner. <br /><br />
Overnight in Orlando (D)
                `
            },
            {
                day: 14,
                title: "Walt Disney World/Orlando FL - Magic Kingdom",
                description: `
                After breakfast wait for your transfer to take you to
Walt Disney's World/Orland FL - Magic Kingdom.
The most magical place on Earth, concentrates all
its beauty and splendor in one place: Main Street,
USA in Magic Kingdom. Town Square introduces
itself as the grandiose appetizer to all Main Street.
Enjoy a full day at Magic Kingdom. <br /><br />
In the Evening, meet the driver at the designated time for transfer to restaurant for
dinner. After dinner, transfer to the hotel for an overnight stay in Orlando. (B,D)
                `
            },
            {
                day: 15,
                title: "Walt Disney World/Orlando FL - EPCOT",
                description: `
                After Breakfast, head to WALT DISNEY WORLD/Orlando
FL - Where you can touch the future and travel the
world with an amazing array of attractions and live
performances. This is an area of 260 acres devoted to
past achievements and the future of technology. World
showcase offers a kind of permanent World Fair, with
pavilions devoted to eleven countries. <br /><br />
Evening dinner at the restaurant and overnight in Orlando (B, D)
                `
            },
            {
                day: 16,
                title: "Departure from Orlando",
                description: `
                After breakfast, depart to Orlando Airport Or to Cruise. Flying back home.
                `
            }
        ],
        images: [
            "/UGCImages/usa/orlando/1.png",
            "/UGCImages/usa/orlando/2.png",
            "/UGCImages/usa/orlando/3.png",
            "/UGCImages/usa/orlando/4.png",
        ],
        sightseeingSpots: [
            {
                name: "Statue of Liberty",
                description: "Iconic symbol of freedom and the United States",
                image: "/UGCImages/usa/sightseeing/1.png"
            },
            {
                name: "Washington Monument",
                description: "Striking obelisk honoring George Washington",
                image: "/UGCImages/usa/sightseeing/2.png"
            },
            {
                name: "Harvard University",
                description: "Prestigious Ivy League university in Cambridge",
                image: "/UGCImages/usa/sightseeing/3.png"
            }
        ],
        localFood: [
            {
                name: "New York Pizza",
                description: "Iconic thin-crust pizza, a New York culinary institution",
                image: "/UGCImages/usa/cuisine/1.png",
                where: "Joe's Pizza, New York"
            },
            {
                name: "Lobster Roll",
                description: "New England specialty with fresh lobster meat",
                image: "/UGCImages/usa/cuisine/2.png",
                where: "Legal Sea Foods, Boston"
            }
        ],
        culture: [
            {
                title: "Broadway Theater",
                description: "World-class theatrical performances in New York City",
                image: "/UGCImages/usa/culture/1.png"
            },
            {
                title: "American History",
                description: "Rich heritage preserved in museums and historic sites",
                image: "/UGCImages/usa/culture/2.png"
            },
            {
                title: "Urban Diversity",
                description: "Experience America's melting pot of cultures",
                image: "/UGCImages/usa/culture/3.png"
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