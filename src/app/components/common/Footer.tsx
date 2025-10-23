import Image from "next/image"
import Link from "next/link"
import { InstagramIcon } from "../icons/social/Instagram"
import { FacebookIcon } from "../icons/social/Facebook"
import { TwitterIcon } from "../icons/social/Twitter"
import { LinkedInIcon } from "../icons/social/LinkedIn"
import { YouTubeIcon } from "../icons/social/YouTube"

// Update the fixedDepartureDestinations array to include a category
const fixedDepartureDestinations = {
    international: [
        { name: "Europe Trip", id: "europe-12-days-grand-tour" },
        { name: "Vietnam Trip", id: "vietnam-8-days-highlights-tour" },
        { name: "Turkey Trip", id: "turkey-9-days-discovery-tour" },
        { name: "Hong Kong & Macau Trip", id: "hongkong-macau-5-days-combo-tour" },
        { name: "Mini Europe Trip", id: "europe-7-days-mini-europe-tour" },
        { name: "Almaty Trip", id: "almaty-5-days-kazakhstan-tour" },
        { name: "Dubai Trip", id: "dubai-5-days-desert-adventure" },
        { name: "Bhutan Trip", id: "bhutan-7-days-happiness-tour" },
        { name: "China Canton Trip", id: "china-6-days-canton-fair-tour" },
    ],
    domestic: [
        { name: "Kashmir Trip", id: "kashmir-6-days-paradise-tour" },
        { name: "Srinagar Trip", id: "srinagar-6-days-paradise-tour" },
        { name: "Manali Trip", id: "manali-5-days-volvo-tour" },
    ]
}

export default function Component() {

    return (
        <>
            {/* Contact Info Section */}
            {/* <section className="py-12 px-4 bg-gradient-to-br from-[#017ae3] to-[#00f6ff]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">
                        Get in Touch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center bg-white rounded-lg shadow-md p-6">
                            <div className="text-[#017ae3] mr-4">
                                <Phone size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                                <p className="text-gray-600">+91 9918461846</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-lg shadow-md p-6">
                            <div className="text-[#017ae3] mr-4">
                                <Mail size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Write to Us</h3>
                                <p className="text-gray-600">info@truedeal4u.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-[#017ae3] mr-4">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Our Head Office</h3>
                            </div>
                            <p className="text-gray-600">
                                LGF 47, World Trade Center, beside Lalit Hotel, Barakhamba Road, Connaught Place, Delhi 110006
                            </p>
                        </div>
                        <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="text-[#017ae3] mr-4">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Our Corporate Office</h3>
                            </div>
                            <p className="text-gray-600">
                                C 207, Logix Cyber Park, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}


            <footer
                className="bg-white py-12 px-4 border-t"
                itemScope
                itemType="http://schema.org/WPFooter"
                aria-label="Site footer"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Blog Promotion Section with enhanced styling */}
                    <div className="mb-12 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-8 rounded-2xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
                        <div className="mb-6 md:mb-0 text-white md:max-w-xl">
                            <h2 className="text-2xl font-bold mb-3">Explore Our Travel Blog</h2>
                            <p className="text-white/90 mb-4">
                                Discover travel tips, destination guides, and insider insights from our expert travelers.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end">
                            <Link
                                href="/blogs"
                                className="group px-6 py-3 bg-white text-[#017ae3] rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                Read Our Blog
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transform transition-transform group-hover:translate-x-1"
                                >
                                    <path d="M5 12h14m-7-7 7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Company Info with enhanced styling */}
                        <div
                            className="transform transition-all duration-300 hover:translate-y-[-5px]"
                            itemScope
                            itemType="http://schema.org/Organization"
                            data-nosnippet
                        >
                            <meta itemProp="name" content="TRUEDEAL TRAVELS PRIVATE LIMITED" />
                            <div className="relative group">
                                <Image
                                    src="/Assets/NavbarImages/logo.png"
                                    alt="Truedeal Logo"
                                    width={180}
                                    height={45}
                                    className="mb-4 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h1 className="font-bold font-poppins mb-2 text-[#017ae3] transition-colors duration-300 hover:text-[#00f6ff]">
                                TRUEDEAL TRAVELS PRIVATE LIMITED
                            </h1>
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed" itemProp="description">
                                Truedeal is your trusted partner for seamless travel experiences, forex solutions, and comprehensive travel services since 2014.
                            </p>
                            <div className="flex gap-4">
                                <Link href="https://www.instagram.com/itstruedeal/" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6">
                                    <InstagramIcon />
                                </Link>
                                <Link href="https://x.com/truedeal4u" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6">
                                    <TwitterIcon />
                                </Link>
                                <Link href="https://www.facebook.com/itstruedeal/" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6">
                                    <FacebookIcon />
                                </Link>
                                <Link href="https://www.linkedin.com/company/itstruedeal/" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6">
                                    <LinkedInIcon />
                                </Link>
                                <Link href="https://www.youtube.com/@Truedeal4u/shorts" target="_blank"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF0000] text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-6">
                                    <YouTubeIcon />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links with enhanced styling */}
                        <nav
                            className="transform transition-all duration-300 hover:translate-y-[-5px]"
                            aria-label="Footer navigation"
                            data-nosnippet
                        >
                            <h3 className="font-bold text-[#017ae3] mb-4 text-lg relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#00f6ff] after:transition-all after:duration-300 hover:after:w-full">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "About", path: "/about-us" },
                                    { name: "Destination Package", path: "/destinationpackage" },
                                    { name: "Trending Package", path: "/trendingpackage" },
                                    { name: "Contact Us", path: "/contact-us" },
                                    { name: "Careers", path: "/careers" },
                                    { name: "Terms & conditions", path: "/terms&conditions" },
                                    { name: "Reviews", path: "/reviews" },
                                    { name: "Refund & Cancellation", path: "/refund&cancellation" },
                                    { name: "Payment", path: "/payment" },
                                    { name: "EMI Calculator", path: "https://app.sankash.in/customer/application?token=eyJhcHBsaWNhdGlvbl9udW1iZXIiOiJTSy1BUC0wNDUxMjg5IiwicGFnZSI6Im5ldyIsImRhdGEiOiJaVEExT1RRd1pHWmlPVEZqTTJSbU5qUTNNemxoWWpVeU5qSmpaV05sWkRjPSIsInN0b3BfYXRfYXBwcm92YWwiOmZhbHNlfQ==" }
                                ].map((link) => (
                                    <li key={link.name} className="transform transition-all duration-200 hover:translate-x-2">
                                        <Link href={link.path}
                                            className="group text-gray-700 hover:text-[#017ae3] text-sm transition-colors duration-200 flex items-center gap-2"
                                            {...(link.path.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Fixed Departures section */}
                        <nav
                            className="transform transition-all duration-300 hover:translate-y-[-5px]"
                            aria-label="Fixed departures navigation"
                            data-nosnippet
                        >
                            <h3 className="font-bold text-[#017ae3] mb-4 text-lg relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#00f6ff] after:transition-all after:duration-300 hover:after:w-full">
                                Fixed Departures
                            </h3>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-3 border-b pb-1">International Tours</h4>
                                    <ul className="space-y-1.5">
                                        {fixedDepartureDestinations.international.map((dest) => (
                                            <li key={dest.id} className="transform transition-all duration-200 hover:translate-x-2">
                                                <Link
                                                    href={`/fixedDeparture/${dest.id}`}
                                                    className="group text-gray-700 hover:text-[#017ae3] text-sm transition-colors duration-200 flex items-center gap-2"
                                                >
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                                                    {dest.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-3 border-b pb-1">Domestic Tours</h4>
                                    <ul className="space-y-1.5">
                                        {fixedDepartureDestinations.domestic.map((dest) => (
                                            <li key={dest.id} className="transform transition-all duration-200 hover:translate-x-2">
                                                <Link
                                                    href={`/fixedDeparture/${dest.id}`}
                                                    className="group text-gray-700 hover:text-[#017ae3] text-sm transition-colors duration-200 flex items-center gap-2"
                                                >
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                                                    {dest.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Copyright Section with enhanced styling and illustrations */}
                <div className="mt-12 pt-8 border-t border-gray-200 relative">


                    {/* Certification Badges */}
                    <div className="max-w-7xl mx-auto mb-6">
                        <div className="flex justify-center gap-8 mb-6">
                            <Image
                                src="/Assets/chatbot/coll.png"
                                alt="IATA Certified"
                                width={60}
                                height={30}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="/Assets/chatbot/colosseum.png"
                                alt="Tourism Certified"
                                width={60}
                                height={30}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="/Assets/chatbot/bali.png"
                                alt="Tourism Certified"
                                width={60}
                                height={30}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />

                            <Image
                                src="/Assets/chatbot/building.png"
                                alt="Tourism Certified"
                                width={60}
                                height={30}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                            <Image
                                src="/Assets/chatbot/eiffel.png"
                                alt="Tourism Certified"
                                width={60}
                                height={30}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-600 text-sm font-medium mb-2">
                            © {new Date().getFullYear()} Truedeal Travels Private Limited. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Making travel dreams come true since 2014
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}