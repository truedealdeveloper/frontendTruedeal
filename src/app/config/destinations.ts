export interface Destination {
    name: string;
    tag?: {
        label: string;
        color: string;
    };
    isTrending?: boolean;
    fixedDepartureId?: string;
    route?: string;
}

export const destinations: Destination[] = [
    { name: "Bali", tag: { label: "POPULAR", color: "rose" } },
    { name: "Vietnam", tag: { label: "TRENDING", color: "green" } },
    { name: "Greece", tag: { label: "POPULAR", color: "blue" }, route: "/greece" },
    { name: "Indochina", tag: { label: "TRENDING", color: "green" } },
    { name: "Laos", tag: { label: "Family", color: "yellow" } },
    { name: "Combodia", tag: { label: "Family", color: "pink" } },
    {
        name: "Australia Packages",
        tag: { label: "Solo", color: "green" },
        route: "/australiaPackages"
    },
    {
        name: "United States",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        route: "/usaPackages"
    },
    {
        name: "Turkey",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        route: "/turkey"
    },
    {
        name: "Kerala",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        route: "/kerala"
    },
    {
        name: "Dubai",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        route: "/dubai"
    },
    {
        name: "Goa",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        route: "/goa"
    },
    {
        name: "Rajasthan",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        route: "/rajasthan"
    },
    {
        name: "Leh Ladakh",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        route: "/lehladakh"
    },
    {
        name: "Singapore + Malaysia + Langkawi",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        route: "/singapore"
    },
    {
        name: "Chardham",
        tag: { label: "TRENDING", color: "green" },
        route: "/chardhamYatra"
    },

    {
        name: "Europe Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "europe-12-days-grand-tour"
    },
    {
        name: "Vietnam Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "vietnam-8-days-highlights-tour"
    },
    {
        name: "Turkey Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "turkey-9-days-discovery-tour"
    },
    {
        name: "Hong Kong & Macau Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "hongkong-macau-5-days-combo-tour"
    },
    {
        name: "Mini Europe Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "europe-7-days-mini-europe-tour"
    },
    {
        name: "Almaty Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "almaty-5-days-kazakhstan-tour"
    },
    {
        name: "Dubai Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "dubai-5-days-desert-adventure"
    },
    {
        name: "Kashmir Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "kashmir-6-days-paradise-tour"
    },
    {
        name: "Srinagar Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "srinagar-6-days-paradise-tour"
    },
    {
        name: "Manali Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "manali-5-days-volvo-tour"
    },
    {
        name: "Bhutan Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "bhutan-7-days-happiness-tour"
    },
    {
        name: "China Canton Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "china-6-days-canton-fair-tour"
    },
    {
        name: "Russia Trip - 8 Days",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "russia-8-days-aurora-moscow-tour"
    },
    {
        name: "Russia Trip - 6 Days",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "russia-fixed-departure-tour"
    },
    {
        name: "Kenya Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "kenya-10-days-discovery-tour"
    },
    {
        name: "Baku Trip - 5 Days",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "baku-5-days-discovery-tour"
    },
    {
        name: "Japan Trip",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "japan-10-days-cultural-tour"
    },
    {
        name: "Leh Ladakh Trip",
        tag: { label: "FIXED DEPARTURE", color: "blue" },
        fixedDepartureId: "leh-ladakh-7-days-discovery-tour-for-women"
    },
    {
        name: "New Zealand Trip",
        tag: { label: "FIXED DEPARTURE", color: "pink" },
        fixedDepartureId: "new-zealand-13-days-discovery-tour"
    },
    {
        name: "Baku Trip - 7 Days",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "baku-7-days-discovery-tour"
    },
    {
        name: "United Arab Emirates Trip",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "uae-5n6d-summer-deal"
    },
    {
        name: "Turkey Anniversary Trip",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "turkey-11-days-anniversary-trip"
    },
    {
        name: "Switzerland Trip",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "swiss-6-days-July2025"
    },
    {
        name: "Thailand Trip",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "thailand-8-days-adventure-tour"
    },
    {
        name: "Thailand 11 Days Trip",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "thailand-11-days-deluxe-tour"
    },
    {
        name: "Thailand 8 Days Trip",
        tag: { label: "FIXED DEPARTURE", color: "green" },
        fixedDepartureId: "thailand-8-days-speedboat-tour"
    },


] 