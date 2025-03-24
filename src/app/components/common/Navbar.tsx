'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronDown, Phone, Search, Globe, MapPin, Menu } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

// First, let's define an interface for the destination type
interface Destination {
    name: string;
    tag?: {
        label: string;
        color: string;
    };
    isTrending?: boolean;
}

// Replace the hardcoded destinations with the full list from HeroSection
const destinations = [
    { name: "Maldives", tag: { label: "HONEYMOON", color: "pink" } },
    { name: "Dubai", tag: { label: "IN SEASON", color: "green" } },
    { name: "Singapore" },
    { name: "Bali", tag: { label: "POPULAR", color: "rose" } },
    { name: "Indonesia" },
    { name: "Japan" },
    { name: "Hongkong" },
    { name: "China" },
    { name: "Almaty", isTrending: true },
    { name: "Baku", isTrending: true },
    { name: "Vietnam", isTrending: true },
    { name: "Shimla", isTrending: true },
    { name: "Thailand", tag: { label: "BUDGET", color: "amber" } },
    { name: "SriLanka" },
    { name: "Bhutan" },
    { name: "Finland" },
    { name: "Kenya" },
    { name: "Malaysia" },
    { name: "Phillipines" },
    { name: "Abu Dhabi", tag: { label: "POPULAR", color: "violet" } },
]

// Top navigation items
const topNavItems = [
    { href: "/#fixedDeparture", label: "Upcoming Trips" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about-us", label: "About Us" },
    { href: "/payment", label: "Payments" },
]

// Bottom menu items
const menuItems = [
    { href: "/international-packages", label: "International Packages" },
    { href: "/india-packages", label: "India Packages" },
    { href: "/group-tours", label: "Group Tours" },
    { href: "/honeymoon-packages", label: "Honeymoon Packages" },
]

// First, let's add the dropdown data at the top of the file
const dropdownMenus = {
    "international-packages": [
        // Southeast Asia
        { name: "Bali", href: "/bali" },
        { name: "Vietnam", href: "/vietnam" },
        { name: "Thailand", href: "/destinations/thailand" },
        { name: "Singapore", href: "/destinations/singapore" },
        { name: "Malaysia", href: "/destinations/malaysia" },
        { name: "Japan", href: "/destinations/japan" },
        // Middle East & Central Asia
        { name: "Dubai", href: "/destinations/dubai" },
        { name: "Turkey", href: "/destinations/turkey" },
        { name: "Georgia", href: "/destinations/georgia" },
        { name: "Almaty", href: "/almaty" },
        { name: "Sri Lanka", href: "/destinations/sri-lanka" },
        { name: "Bhutan", href: "/destinations/bhutan" },
        // Rest of World
        { name: "Maldives", href: "/destinations/maldives" },
        { name: "Mauritius", href: "/destinations/mauritius" },
        { name: "Australia", href: "/destinations/australia" },
        { name: "South Africa", href: "/destinations/south-africa" },
        { name: "New Zealand", href: "/destinations/new-zealand" },
        { name: "Switzerland", href: "/destinations/switzerland" },
        { name: "Kenya", href: "/destinations/kenya" },
        { name: "France", href: "/destinations/france" },
    ],
    "india-packages": [
        { name: "Kashmir Paradise Tour (6 Days)", href: "/fixedDeparture/kashmir-6-days-paradise-tour" },
        { name: "Srinagar Paradise Tour (6 Days)", href: "/fixedDeparture/srinagar-6-days-paradise-tour" },
        { name: "Manali Volvo Tour (5 Days)", href: "/fixedDeparture/manali-5-days-volvo-tour" },
    ],
    "group-tours": [
        { name: "Bali Group Tour", href: "/bali" },
        { name: "Vietnam Group Tour", href: "/vietnam" },
        { name: "Indochina Group Tour", href: "/indochina" },
    ],
    "honeymoon-packages": [
        { name: "Bali", href: "/bali" },
    ],
}

// Update the DropdownMenu component with new hover effects
const DropdownMenu = ({ items, isOpen }: { items: { name: string; href: string }[]; isOpen: boolean }) => {
    if (!isOpen) return null;
    
    const isInternational = items.length > 10;
    
    const linkStyles = "block px-4 py-2 text-[15px] text-gray-600 hover:text-[#00DEF7] hover:bg-[#00DEF7]/5 rounded-lg transition-all duration-200 ease-in-out";
    const headerStyles = "font-medium text-[#00DEF7] text-xs uppercase mb-2 tracking-wider";
    
    return (
        <div className={`absolute top-full left-0 right-0 mx-auto ${isInternational ? 'w-[800px]' : 'w-[500px]'} bg-white shadow-xl rounded-lg overflow-hidden py-4 px-6 z-50`}>
            <div className={`grid ${isInternational ? 'grid-cols-3' : 'grid-cols-2'} gap-2`}>
                {isInternational ? (
                    <>
                        <div className="col-span-1">
                            <h3 className={headerStyles}>Southeast Asia</h3>
                            {items.slice(0, 6).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={linkStyles}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="col-span-1">
                            <h3 className={headerStyles}>Middle East & Central Asia</h3>
                            {items.slice(6, 12).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={linkStyles}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="col-span-1">
                            <h3 className={headerStyles}>Rest of World</h3>
                            {items.slice(12).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={linkStyles}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={linkStyles}
                        >
                            {item.name}
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

// SearchModal Component
function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [searchTerm, setSearchTerm] = useState("")
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    const filteredDestinations = useMemo(
        () => destinations.filter((dest) => 
            dest.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [searchTerm]
    )

    const handleDestinationSelect = useCallback((destination: Destination) => {
        onClose()
        if (destination.name.toLowerCase() === "bali") {
            router.push("/bali")
        } else if (destination.isTrending) {
            router.push(`/trending/${destination.name.toLowerCase()}`)
        } else {
            router.push(`/destinations/${destination.name.toLowerCase()}`)
        }
    }, [router, onClose])

    useEffect(() => {
        if (isOpen && inputRef.current) {
            const timer = setTimeout(() => {
                inputRef.current?.focus()
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40vw] bg-white border-gray-800 w-[90vw] h-[80vh] max-h-[600px] overflow-y-auto overflow-x-hidden flex flex-col">
                <DialogTitle className="sr-only">Search Destinations</DialogTitle>
                <div className="w-full flex flex-col h-full">
                    {/* Search Input */}
                    <div className="p-4 border-b flex-shrink-0">
                        <div className="relative">
                            <Input
                                ref={inputRef}
                                type="text"
                                placeholder="Search countries, cities..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-gradient-to-r from-[#e7e9ec] to-[#00f6ff] text-black border-0 rounded-full h-12 px-6 pr-12 shadow-lg focus:ring-0 focus:ring-offset-0 hover:opacity-90 transition-all duration-300 placeholder-gray-500"
                                autoComplete="off"
                                autoFocus
                            />
                            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                        </div>
                    </div>

                    {/* Search Results */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredDestinations.length > 0 ? (
                            <div className="p-2 space-y-2">
                                {filteredDestinations.map((dest, index) => (
                                    <motion.button
                                        key={dest.name}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.15, delay: index * 0.03 }}
                                        onClick={() => handleDestinationSelect(dest)}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 rounded-xl transition-all hover:bg-gray-50"
                                    >
                                        <span className="flex-shrink-0">
                                            {dest.isTrending ? (
                                                <Globe className="h-5 w-5 text-blue-500" />
                                            ) : (
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                            )}
                                        </span>
                                        <span className="flex-grow font-medium">{dest.name}</span>
                                        {dest.tag && (
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${dest.tag.color}-100 text-${dest.tag.color}-700`}>
                                                {dest.tag.label}
                                            </span>
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 text-center text-gray-500">
                                No destinations found for &quot;{searchTerm}&quot;
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

// Add scroll behavior for hash links
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
        e.preventDefault();
        const elementId = href.replace('/#', '');
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Main Navbar Component
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
    const pathname = usePathname()
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const isHomePage = pathname === '/';

    const handleMouseEnter = (menuId: string) => {
        setActiveDropdown(menuId);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Gradient background for top nav - reduced height from h-20 to h-16 */}
            <div className="bg-gradient-to-r from-white via-[#f0fdff] to-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16 relative">
                        {/* Logo - adjusted size */}
                        <Link href="/" className="flex-shrink-0 relative group">
                            <div className="absolute inset-0 bg-[#00f6ff]/10 blur-xl group-hover:blur-2xl transition-all duration-300 rounded-full opacity-0 group-hover:opacity-100" />
                            <Image
                                src="/Assets/NavbarImages/logo.png"
                                alt="Logo"
                                width={120}
                                height={40}
                                className="w-[90px] sm:w-[120px] h-auto object-contain relative z-10"
                                priority
                            />
                        </Link>

                        {/* Search Bar with new design */}
                        <div className="hidden md:block flex-1 max-w-xl mx-8">
                            <div 
                                onClick={() => setIsSearchModalOpen(true)}
                                className="relative cursor-pointer group bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 rounded-xl border border-gray-100 shadow-sm"
                            >
                                <Input
                                    type="text"
                                    placeholder="Discover your next adventure..."
                                    className="w-full h-12 pl-14 pr-4 rounded-xl border-0 bg-transparent focus:ring-0 focus:border-0"
                                    readOnly
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400">
                                    <Search className="h-5 w-5 group-hover:text-[#00f6ff] transition-colors" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation with new styling */}
                        <div className="hidden md:flex items-center gap-8">
                            {topNavItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={`relative text-sm font-medium group ${
                                        pathname === item.href ? 'text-[#00f6ff]' : 'text-gray-600'
                                    }`}
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f6ff] group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                            
                            {/* Phone number with new design */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-[#00f6ff]/20 blur group-hover:blur-md transition-all duration-300 rounded-xl" />
                                <a 
                                    href="tel:+919310271488" 
                                    className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 backdrop-blur-sm border border-[#00f6ff]/20 hover:border-[#00f6ff]/40 transition-all duration-300"
                                >
                                    <Phone className="h-4 w-4 text-[#00f6ff]" />
                                    <span className="text-sm font-medium text-gray-700">+91-9310271488</span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile controls with new styling */}
                        <div className="flex md:hidden items-center gap-4">
                            <button 
                                onClick={() => setIsSearchModalOpen(true)}
                                className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <Search className="h-5 w-5 text-gray-600" />
                            </button>
                            <a 
                                href="tel:+919310271488"
                                className="p-2 rounded-lg bg-[#00f6ff]/10 hover:bg-[#00f6ff]/20 transition-colors"
                            >
                                <Phone className="h-5 w-5 text-[#00f6ff]" />
                            </a>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5 text-gray-600" />
                                ) : (
                                    <Menu className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Menu Bar - reduced padding and gap */}
            {isHomePage && (
                <div className="bg-[#00DEF7]">
                    <div className="max-w-7xl mx-auto">
                        <div className="hidden md:flex items-center justify-center gap-12 px-4">
                            {menuItems.map((item) => {
                                const menuId = item.href.replace('/', '');
                                return (
                                    <div
                                        key={item.label}
                                        className="relative group"
                                        onMouseEnter={() => handleMouseEnter(menuId)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={item.href}
                                            className="relative group py-2 px-2 block whitespace-nowrap"
                                        >
                                            <span className="relative z-10 text-white text-[14px] font-normal group-hover:text-white/90 transition-colors flex items-center gap-1">
                                                {item.label}
                                                <ChevronDown className="h-3 w-3 opacity-80" />
                                            </span>
                                        </Link>
                                        {dropdownMenus[menuId as keyof typeof dropdownMenus] && (
                                            <DropdownMenu
                                                items={dropdownMenus[menuId as keyof typeof dropdownMenus]}
                                                isOpen={activeDropdown === menuId}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu with new styling */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg animate-slideDown">
                    <div className="divide-y divide-gray-100">
                        <div className="p-4 space-y-3">
                            {topNavItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        handleNavClick(e, item.href);
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50"
                                >
                                    <span className="text-gray-600">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="p-4 space-y-3 bg-gray-50">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/80"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-gray-600">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Keep the existing SearchModal component */}
            <SearchModal 
                isOpen={isSearchModalOpen} 
                onClose={() => setIsSearchModalOpen(false)} 
            />
        </nav>
    )
}


