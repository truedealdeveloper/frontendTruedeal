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

export interface BaseDestination {
    id: string;
    name: string;
    days: number;
    nights: number;
    amount?: number;
    dateStart: string;
    dateEnd: string;
    description: string;
    groupDetails?: GroupDetails;
    hotelDetails?: HotelDetail[];
    tourSummary?: string[];
    inclusions?: string[];
    exclusions?: string[];
    itinerary?: ItineraryDay[];
    images?: string[];
}

export interface ChardhamPackage extends BaseDestination {
    flightFrom?: string;
}

export const chardhamData: Record<string, ChardhamPackage> = {
    chardham: {
        id: "CHARDHAM-5n6d",
        name: "Chardham Yatra by Helicopter",
        days: 6,
        nights: 5,
        amount: 230000,
        flightFrom: "Dehradun",
        dateStart: "01 May",
        dateEnd: "30 June",
        description: "Embark on a once-in-a-lifetime spiritual journey with our Fixed Departure Chardham Yatra by helicopter. Our meticulously planned itinerary ensures a seamless, comfortable, and spiritually enriching experience, covering all four sacred shrines—Yamunotri, Gangotri, Kedarnath, and Badrinath.",
        groupDetails: {
            pax: "Group Tour",
            rooms: "Twin Sharing Basis",
            arrivalDate: "Multiple dates between May-June",
            duration: "5N6D Chardham Yatra",
            costBasis: "Cost Based On Double Sharing"
        },
        inclusions: [
            "Helicopter travel from Dehradun to all four shrines and back",
            "One-night accommodation in Dehradun with dinner & breakfast",
            "Accommodation for 5 nights at premium hotels near each dham",
            "All meals included at the shrines",
            "Local sightseeing guided by experts",
            "VIP darshan arrangements at all temples",
            "Airport & hotel transfers in Dehradun",
            "Palki or Pony service at Yamunotri",
            "Helicopter shuttle service from Sersi to Kedarnath",
            "Local transport at all shrines",
            "Taxes and government levies"
        ],
        exclusions: [
            "Personal expenses, donations, tips",
            "Extra accommodation or meals",
            "Special pujas or rituals",
            "Travel insurance",
            "Overweight baggage charges",
            "Force majeure costs"
        ],
        images: [
            "/UGCImages/chardham/Chardham/1.webp",
            "/UGCImages/chardham/Chardham/2.webp",
            "/UGCImages/chardham/Chardham/3.webp",
            "/UGCImages/chardham/Chardham/4.webp",
            "/UGCImages/chardham/Chardham/5.webp",
            "/UGCImages/chardham/Chardham/6.webp",
        ],
        tourSummary: [
            "Premium package with VIP darshans",
            "Skip long treks with helicopter travel",
            "Top-tier accommodations and vegetarian meals",
            "Expert guided sightseeing",
            "Complete logistics management"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dehradun",
                description: "Check-in at hotel, evening briefing at 19:00 hrs"
            },
            {
                day: 2,
                title: "Yamunotri",
                description: "Helicopter transfer to Yamunotri, VIP darshan, overnight stay"
            },
            {
                day: 3,
                title: "Gangotri",
                description: "Morning helicopter transfer to Gangotri, temple visit, evening rituals"
            },
            {
                day: 4,
                title: "Kedarnath",
                description: "Helicopter transfer to Sersi, shuttle to Kedarnath, temple darshan"
            },
            {
                day: 5,
                title: "Badrinath",
                description: "Morning flight to Badrinath, temple visit, local sightseeing"
            },
            {
                day: 6,
                title: "Return",
                description: "Return flight to Dehradun, tour concludes"
            }
        ]
    },
    dodhamSameDay: {
        id: "dodham-helicopter-tour-same-day",
        name: "Dodham Helicopter Tour",
        days: 1,
        nights: 0,
        amount: 115000,
        dateStart: "05 May",
        dateEnd: "30 June",
        flightFrom: "Sahastradhara Helidrome",
        description: "Experience a divine journey covering the sacred shrines of Kedarnath Ji and Badrinath Ji in a single day. Operating with excellence since 1998, we offer seamless pilgrimage experiences with comfort and safety at the core.",
        inclusions: [
            "Helicopter flights from Dehradun to both shrines",
            "Kedarnath helicopter shuttle service",
            "VIP Darshan arrangements",
            "Local transport and assistance",
            "Refreshments at Sersi & Lunch at Dehradun",
            "All taxes and government levies"
        ],
        exclusions: [
            "Accommodation in Dehradun",
            "Airport/Hotel transfers",
            "Additional sightseeing",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kedarnath Darshan",
                description: `05:30 HRS: Departure from 
                Sahastradhara, 06:00 HRS: Arrival at Sersi, Shuttle service to Kedarnath, VIP Darshan (2 hours)
                05:30 HRS: Departure from Sahastradhara Helidrome
06:00 HRS: Arrival at Sersi Heli-base
Shuttle service to Kedarnath (approx. 7 min flight)
VIP Darshan (approx. 2 hours)
Return to Sersi for refreshments.

                `
            },
            {
                day: 1,
                title: "Badrinath Darshan",
                description: `09:00 HRS: Departure from Sersi, 
                09:30 HRS: Arrival at Badrinath, VIP Darshan (1.5 hours), Return to Dehradun by 12:00 HRS
                
                09:00 HRS: Departure from Sersi
09:30 HRS: Arrival at Badrinath Helipad
VIP Darshan (approx. 1-1.5 hours)
Return to Badrinath helipad for departure

                `
            }
        ],
        images: [
            "/UGCImages/chardham/Chardham/7.webp",
            "/UGCImages/chardham/Chardham/8.webp",
            "/UGCImages/chardham/Chardham/9.webp",
            "/UGCImages/chardham/Chardham/10.webp",
            "/UGCImages/chardham/Chardham/11.webp",
            "/UGCImages/chardham/Chardham/12.webp",
        ]
    },
    dodhamSersi: {
        id: "dodham-ex-sersi-helicopter-tour",
        name: "Dodham Ex-Sersi Helicopter Tour",
        days: 1,
        nights: 0,
        amount: 350000,
        dateStart: "05 May",
        dateEnd: "30 June",
        flightFrom: "SERSI HELIPAD",
        description: "Experience a divine and seamless pilgrimage with our Dodham Same Day Heli-Tour from Sersi, covering Kedarnath and Badrinath temples with VIP darshans and priority access.",
        itinerary: [
            {
                day: 1,
                title: "Experience the divine",
                description: `05:30 HRS: Departure from Sersi, 
                06:00 HRS: Arrival at Sersi, Shuttle service to Kedarnath, VIP Darshan (2 hours)
                
                Experience a divine and seamless pilgrimage with our Dodham Same Day Heli-Tour. This exclusive package, departing from Sersi, covers two of the most sacred Hindu shrines—Kedarnath and Badrinath—providing a comfortable and time-efficient alternative to the traditional road journey. Our expert team ensures a smooth and spiritually fulfilling experience with VIP darshans, priority access, and exceptional hospitality.

                `
            }
        ],
        inclusions: [
            "Helicopter services: Sersi Kedarnath Badrinath Sersi",
            "Kedarnath shuttle service",
            "Breakfast or Lunch at Sersi",
            "VIP Darshans at both temples",
            "All applicable taxes"
        ],
        exclusions: [
            "Personal expenses, tips, donations",
            "Additional services or accommodation",
            "Sudden tax increases"
        ],
        images: [
            "/UGCImages/chardham/dodham/14.webp",
            "/UGCImages/chardham/dodham/12.webp",
            "/UGCImages/chardham/Chardham/13.webp",
            "/UGCImages/chardham/Chardham/14.webp",
            "/UGCImages/chardham/Chardham/15.webp",
            "/UGCImages/chardham/dodham/13.webp",
            "/UGCImages/chardham/dodham/15.webp",
        ]
    },
    dodham4Days: {
        id: "dodham-4-days-helicopter-tour",
        name: "Dodham 4 Days Helicopter Tour",
        days: 4,
        nights: 3,
        amount: 135000,
        dateStart: "05 May",
        dateEnd: "30 June",
        flightFrom: "Dehradun",
        description: "A comprehensive 4-day helicopter tour covering Kedarnath and Badrinath with comfortable stays and detailed sightseeing.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dehradun",
                description: "Check-in, evening briefing at 19:00 hrs, duffel bag distribution"
            },
            {
                day: 2,
                title: "Kedarnath Ji",
                description: "Departure from Dehradun, arrival at Sersi, shuttle to Kedarnath for darshan"
            },
            {
                day: 3,
                title: "Badrinath Ji",
                description: "Flight to Badrinath, temple darshan, Mana Village visit"
            },
            {
                day: 4,
                title: "Return Journey",
                description: "Return flight to Dehradun, tour conclusion"
            }
        ],
        tourSummary: [
            "FIXED DEPARTURES - DODHAM BY HELICOPTER (3N/4D Heli-Tour)",
        ],
        inclusions: [
            "Helicopter service from Dehradun to Kedarnath ji & Badrinath ji, & return.",
            "One-night stay in Dehradun on the arrival date (including dinner & breakfast).",
            "1 Night's stay at both Sersi & Badrinath with all meals.",
            "Local sightseeing at both dhams.",
            "Shuttle service from Sersi to Kedarnath ji & back.",
            "VIP Darshans (as per Government guidelines).",
            "Airport & hotel transfers in Dehradun.",
            "Local transport & assistance at both dhams.",
            "Taxes & government levies."
        ],
        exclusions: [
            "Any personal expenses such as laundry, tips, and donations.",
            "Any extra porter charges.",
            "Any special puja charges beyond the itinerary.",
            "Any meals, accommodations, or services beyond the mentioned inclusions.",
            "Medical expenses or emergency evacuation costs.",
            "Network connectivity-related expenses (BSNL & Jio work best in these regions).",
            "Any additional transfers apart from the ones included."
        ],
        images: [
            "/UGCImages/chardham/dodham/5.webp",
            "/UGCImages/chardham/dodham/4.webp",
            "/UGCImages/chardham/dodham/3.webp",
            "/UGCImages/chardham/dodham/2.webp",
            "/UGCImages/chardham/dodham/1.webp",
            "/UGCImages/chardham/dodham/6.webp",
        ]
    },
    ekdham: {
        id: "ekdham-same-day-tour",
        name: "Ekdham Same Day Tour",
        days: 1,
        nights: 0,
        amount: 115000,
        dateStart: "Available on request",
        dateEnd: "Available on request",
        flightFrom: "Dehradun",
        description: "Choose any one shrine from Kedarnath, Badrinath, Gangotri, or Yamunotri for a same-day helicopter tour from Dehradun.",
        tourSummary: [
            "Fixed Departures: Ekdham Package by Helicopter",
            "With over two decades of dedicated service in pilgrimage tourism, we take immense pride in offering exclusive and comfortable helicopter tours. Our Ekdham Package allows pilgrims to visit one of the sacred Chardham shrines—Kedarnath Ji, Badrinath Ji, Gangotri, or Yamunotri—on a same-day heli-tour from Dehradun."
        ],
        itinerary: [
            {
                day: 1,
                title: "Yamunotri Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Kharsali Heli-base at 06:30 AM. Approximate Darshan & Trek Time: 5.5 hours (6 km trek one-way). Return to Dehradun by 01:00 PM."
            },
            {
                day: 1,
                title: "Gangotri Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Jhalla Heli-base at 06:30 AM. Approximate Darshan & Road Trip Time: 3 hours (25 km drive). Return to Dehradun by 10:30 AM."
            },
            {
                day: 1,
                title: "Kedarnath Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Sersi Heli-base at 06:30 AM. Shuttle service to Kedarnath ji | Approximate Darshan Time: 2 hours. Return to Dehradun by 09:30 AM."
            },
            {
                day: 1,
                title: "Badrinath Yatra",
                description: "Departure from Dehradun at 06:00 AM | Arrival at Badrinath Helipad at 07:00 AM. Approximate Darshan Time: 1 to 1.5 hours. Return to Dehradun by 09:30 AM."
            }
        ],
        inclusions: [
            "Helicopter flight from Dehradun to the desired shrine and back.",
            "Local services & logistics for the selected shrine (e.g., Palki/Pony for Yamunotri, Shuttle Service for Kedarnath Ji, Vehicle for Gangotri, etc.).",
            "One meal (breakfast or lunch) at the destination.",
            "VIP Darshan arrangement.",
            "Applicable taxes & government levies."
        ],
        exclusions: [
            "Accommodation at any destination.",
            "Airport or hotel transfers in Dehradun.",
            "Sightseeing and personal expenses."
        ],
        images: [
            "/UGCImages/chardham/dodham/7.webp",
            "/UGCImages/chardham/dodham/8.webp",
            "/UGCImages/chardham/dodham/9.webp",
            "/UGCImages/chardham/dodham/10.webp",
            "/UGCImages/chardham/dodham/11.webp",
            "/UGCImages/chardham/dodham/12.webp",
        ]
    },
    chardhamBhaktiYatraPackage: {
        id: "chardham-bhakti-yatra-package",
        name: "Chardham Bhakti Yatra Package",
        days: 10,
        nights: 9,
        amount: 19500,
        dateStart: "Available on request",
        dateEnd: "Available on request",
        description: "Experience the sacred Chardham pilgrimage with our comprehensive Bhakti Yatra Package. This 10-day journey covers all four sacred shrines—Yamunotri, Gangotri, Kedarnath, and Badrinath—with a focus on spiritual and cultural experiences.",
        tourSummary: [
            "Fixed Departures: Chardham Bhakti Yatra Package",
            "With over two decades of dedicated service in pilgrimage tourism, we take immense pride in offering exclusive tours. Our Chardham Bhakti Yatra Package allows pilgrims to visit one of the sacred Chardham shrines—Kedarnath Ji, Badrinath Ji, Gangotri, or Yamunotri—on a 10-day journey."
        ],
        itinerary: [
            {
                day: 1,
                title: "Haridwar/RISHIKESH –  Barkot (200 kms/7 hrs)",
                description: "Arrive ! Welcome  Today Morning after breakfast check out from the hotel and drive towards Barkot en route to beautiful Yamuna Valley. On arrival check in to the hotel and stay overnight at the hotel."
            },
            {
                day: 2,
                title: "Barkot - Yamunotri – Barkot  (45 Kms road/ 6kms Trek)",
                description: "Drive to Jankichatti, the trek starts from here to Yamunotri (6kms). On arrival leave the vehicle and start to ascend on the trek route either by walk or pony/doli (at own cost). On arrival at Yamunotri purchase Prasad from local small shops, then proceed to holy dip in a natural hot water spring or in river Yamuna (icy cold water). One can cook rice in “Surya Kund” (hot water spring), dipping it in a muslin cloth, and take cooked rice home as Prasadam. Pooja can be offered to the mythological “Divya Shila”. Take blessings of Mata Yamuna and trek down to Jankichatti. Later drive back to Barkot for a night stay."
            },
            {
                day: 3,
                title: "Barkot  – Uttarkashi - (90kms/4hrs)",
                description: "Morning departs to Uttarkashi, on arrival check-in at the hotel, and later visit the famous Kashi Vishwanath temple at Uttarkashi. Overnight stay at hotel."
            },
            {
                day: 4,
                title: "Uttarkashi - Gangotri -Uttarkashi ",
                description: "Morning proceeds to Gangotri (3048 mts), en-route enjoy the drive parallel to the Bhagirathi River and the most magnificent view of the Himalayas. On arrival, Gangotri has a holy dip in river Bhagirathi (icy cold water). Perform Pooja and Hindu rites at the bank of the river. Then proceed to darshan, of Mata Ganga, Lord Shiva, Hanuman, Vinayaka, and BhagirathMaharaj, have blessings, and return back to Uttarkashi. Overnight stay at Uttarkashi."
            },
            {
                day: 5,
                title: "Uttarkashi  -– Sitapur /Guptkashi (198 kms/8 Hrs)",
                description: "Morning drive to Guptkashi & visit Shri Kashi Viswanath Temple (Ardhanariswar Temple)  Later   Registration for visiting Kedarnath, overnight stay at Hotel"
            },
            {
                day: 6,
                title: "Sitapur / Guptkashi - Kedarnath  (18 kms Trek)",
                description: "Early morning drive to Sonprayag/ Phata (for trek route or helipad)trek starts from here to Kedarnath (3584 mts) on foot or Heli/doli/pony (at own cost). Tour members should carry personal medicines, heavy woolen, toiletries, and clothes. After performing Pooja & Darshan of Shri Kedarnath ji return to Gaurikund and then to Sitapur. Overnight stay at Kedarnath Ji."
            },
            {
                day: 7,
                title: "Kedarnath- Guptkashi   (18 kms Trek)",
                description: "Today morning trek down to Gaurikund and then proceed to Guptkashi. Stay overnight at the hotel."
            },
            {
                day: 8,
                title: "Guptkashi- Panduekshwar (170 kms / 7 Hrs)",
                description: "Morning After breakfast transfer to Pandukeshwar, en-route Ukhimath, Chamoli  & Joshimath, and Govindghat on arrival check in at the hotel in the evening temple, overnight stay at hotel."
            },
            {
                day: 9,
                title: "Pandukeshwar- Badrinath - Joshimath /Pipalkoti/ Chamoli",
                description: `Morning visits the temple after a holy dip in Taptkund. Proceed through the colorful entrance of the temple to have the Darshan of Badrivishal along with Ganesh, Kubera, Garuda, Narada, Udhhav, Nar & Narayan. Also see other small temples inside the temple compound i.e. Laxmimata, Nar-Narayana, Hanuman, Ghantakarn, and Kaamdhenu. One can get ‘Charnamirt’(abhishekamjal) inside the compound. Brahamakapal is significant for Pinddam Shraddh of ancestors (Pitrus), one can perform rites here. 
                
                Later a visit of  Mana Village (India’s last village towards the Indo-Tibetan border), which includes Vyasa Gufa, Ganesh Gufa, Bhimpul, Saraswati River, etc,  In the evening transfer to Srinagar, Overnight stay at Joshimath.`
            },
            {
                day: 10,
                title: "Joshimath /Pipalkoti/ Chamoli - Rishikesh (18 kms Trek)",
                description: "The morning after transfer to Haridwar, en-route visit Devprayag the confluence of Alaknanda and Bhagirathi. You can see Laxman Jhoola, and Ram Jhoola at Rishikesh. later drive to the haridwar  and  drop  you there."
            },
        ],
        inclusions: [
            "Accommodation at hotels as mentioned or similar – on double/triple sharing basis.",
            "Daily breakfast and dinner included at all hotels.",
            "Transportation by 12-seater Tempo Traveller (as per group size).",
            "All sightseeing and transfers as per the itinerary.",
            "All tolls, parking, driver charges, and fuel expenses.",
            "Pick-up and drop from Haridwar.",
            "All applicable hotel taxes.",
            "Assistance during the Yatra."
        ],
        exclusions: [
            "Any air or train fare.",
            "Lunch and Helipad services",
            "Any personal expenses such as laundry, phone calls, tips, porterage, etc.",
            "Pony, Doli, or Helicopter charges at Yamunotri and Kedarnath.",
            "Kedarnath Night Stay charges (directly payable by client).",
            "Entry fees to monuments, temples, or any special darshan.",
            "Extra meals or beverages not mentioned in the itinerary.",
            "Cost of any medical/rescue evacuation due to natural calamities or accidents.",
            "Any other services not mentioned in the inclusions.",
        ],
        images: [
            "/UGCImages/chardham/dodham/7.webp",
            "/UGCImages/chardham/dodham/8.webp",
            "/UGCImages/chardham/dodham/9.webp",
            "/UGCImages/chardham/dodham/10.webp",
            "/UGCImages/chardham/dodham/11.webp",
            "/UGCImages/chardham/dodham/12.webp",
        ],
    },
};

// Helper function to get all packages
export const getAllPackages = () => Object.values(chardhamData); 