'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronDown, Phone, Search, Globe, MapPin, Menu, MessageSquare } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Destination, destinations } from "@/app/config/destinations"

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
        { name: "Thailand Speedboat Tour", href: "/fixedDeparture/thailand-8-days-speedboat-tour" },
        { name: "Thailand 11 Days Tour", href: "/fixedDeparture/thailand-11-days-deluxe-tour" },
        { name: "Thailand 8 Days Tour", href: "/fixedDeparture/thailand-8-days-adventure-tour" },
        { name: "Singapore", href: "/singapore" },
        { name: "Malaysia", href: "/singapore/4-days-malaysia-tour" },
        { name: "Japan", href: "/fixedDeparture/japan-10-days-cultural-tour" },
        // Middle East & East Asia
        { name: "Dubai Desert Adventure", href: "/fixedDeparture/dubai-5-days-desert-adventure" },
        { name: "Hong Kong & Macau Combo", href: "/fixedDeparture/hongkong-macau-5-days-combo-tour" },
        { name: "Korea Discovery Tour", href: "/fixedDeparture/korea-7-days-discovery-tour" },
        { name: "China Canton Fair Tour", href: "/fixedDeparture/china-6-days-canton-fair-tour" },
        { name: "Bhutan Happiness Tour", href: "/fixedDeparture/bhutan-7-days-happiness-tour" },
        { name: "Almaty", href: "/almaty" },
        // Rest of World
        { name: "Langkawi", href: "/singapore/5-days-wonderful-langkawi" },
        { name: "Kenya", href: "/fixedDeparture/kenya-10-days-discovery-tour" },
        { name: "Europe Tour 12 Days", href: "/fixedDeparture/europe-12-days-grand-tour" },
        { name: "Europe Tour 15 Days", href: "/fixedDeparture/euro-quest-15-days-grand-tour" },
        { name: "Russia 8 Days Tour", href: "/fixedDeparture/russia-8-days-aurora-moscow-tour" },
        { name: "Russia 12 Days Tour", href: "/fixedDeparture/russia-fixed-departure-tour" },
    ],
    "india-packages": [
        { name: "Kashmir Paradise Tour (6 Days)", href: "/fixedDeparture/kashmir-6-days-paradise-tour" },
        { name: "Srinagar Paradise Tour (6 Days)", href: "/fixedDeparture/srinagar-6-days-paradise-tour" },
        { name: "Manali Volvo Tour (5 Days)", href: "/fixedDeparture/manali-5-days-volvo-tour" },
        {name: "Chardham Yatra", href: "/chardhamYatra"}
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

// Update the SearchModal component to handle fixed departures
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
        } else if (destination.name.toLowerCase() === "vietnam") {
            router.push("/vietnam")
        } else if (destination.name.toLowerCase() === "australia packages") {
            router.push("/australiaPackages")
        } else if (["indochina", "laos", "combodia"].includes(destination.name.toLowerCase())) {
            router.push("/indochina")
        } else if (destination.isTrending) {
            router.push(`/trending/${destination.name.toLowerCase()}`)
        } else if (destination.tag?.label === "FIXED DEPARTURE" && destination.fixedDepartureId) {
            router.push(`/fixedDeparture/${destination.fixedDepartureId}`)
        } else {
            router.push(`/destinations/${destination.name.toLowerCase()}`)
        }
    }, [router, onClose])

    const highlightMatch = useCallback((text: string, highlight: string) => {
        if (!highlight) return text
        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return (
            <span>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className="bg-yellow-200 text-gray-800">
                            {part}
                        </span>
                    ) : (
                        part
                    ),
                )}
            </span>
        )
    }, [])

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
                                        <span className="flex-grow font-medium">
                                            {highlightMatch(dest.name, searchTerm)}
                                        </span>
                                        {dest.tag && (
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full
                                                ${dest.tag.label === "Family"
                                                    ? "bg-pink-100 text-pink-700"
                                                    : dest.tag.label === "POPULAR"
                                                        ? "bg-rose-100 text-rose-700"
                                                        : dest.tag.label === "BUDGET"
                                                            ? "bg-amber-100 text-amber-700"
                                                            : `bg-${dest.tag.color}-100 text-${dest.tag.color}-700`
                                                }`}
                                            >
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
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const isHomePage = pathname === '/';

    const handleMouseEnter = (menuId: string) => {
        setActiveDropdown(menuId);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    // Add this function to handle mobile menu item clicks
    const handleMobileMenuClick = (menuId: string) => {
        setActiveMobileDropdown(activeMobileDropdown === menuId ? null : menuId);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* Gradient background for top nav - reduced height from h-20 to h-16 */}
            <div className="bg-gradient-to-r from-white via-[#f0fdff] to-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16 relative">
                        {/* Logo - enhanced visibility */}
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/Assets/NavbarImages/logo.png"
                                alt="Logo"
                                width={150}
                                height={50}
                                className="w-[100px] sm:w-[140px] h-auto object-contain drop-shadow-sm"
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
                                    aria-label={item.label}
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
                                    aria-label="Call us at +91-9310271488"
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
                                aria-label="Open search"
                            >
                                <Search className="h-5 w-5 text-gray-600" />
                            </button>
                            <a 
                                href="tel:+919310271488"
                                className="p-2 rounded-lg bg-[#00f6ff]/10 hover:bg-[#00f6ff]/20 transition-colors"
                                aria-label="Call us at +91-9310271488"
                            >
                                <Phone className="h-5 w-5 text-[#00f6ff]" />
                                <span className="sr-only">Call +91-9310271488</span>
                            </a>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
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
                                        <div className="relative group py-2 px-2 block whitespace-nowrap cursor-default">
                                            <span className="relative z-10 text-white text-[14px] font-normal group-hover:text-white/90 transition-colors flex items-center gap-1">
                                                {item.label}
                                                <ChevronDown className="h-3 w-3 opacity-80" />
                                            </span>
                                        </div>
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

            {/* Mobile Menu - Side Drawer */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    
                    {/* Side Drawer */}
                    <div className="md:hidden fixed top-0 right-0 h-full w-[80%] max-w-md bg-white z-50 shadow-xl animate-slideInRight">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#00DEF7]">
                            <div className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-white" />
                                <span className="text-white text-sm">+91-9310271488</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Search 
                                    className="h-5 w-5 text-white cursor-pointer" 
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsSearchModalOpen(true);
                                    }}
                                />
                                <X 
                                    className="h-6 w-6 text-white cursor-pointer" 
                                    onClick={() => setIsMenuOpen(false)}
                                />
                            </div>
                        </div>

                        {/* Menu Items Container */}
                        <div className="overflow-y-auto h-[calc(100vh-56px)]">
                            {/* Upcoming Community Trips */}
                            <Link
                                href="/#fixedDeparture"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveMobileDropdown(null);
                                }}
                                className="flex items-center gap-2 px-4 py-3 text-[#00DEF7] border-b border-gray-100"
                            >
                                <span>Upcoming Community Trips</span>
                                <span className="text-xs bg-[#00DEF7]/10 px-2 py-0.5 rounded">New</span>
                            </Link>

                            {/* Menu List */}
                            <div className="py-2 space-y-1">
                                {/* Main Menu Items with Dropdowns */}
                                {menuItems.map((item) => {
                                    const menuId = item.href.replace('/', '');
                                    return (
                                        <div key={item.label}>
                                            <button
                                                onClick={() => handleMobileMenuClick(menuId)}
                                                className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown 
                                                    className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                                                        activeMobileDropdown === menuId ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </button>
                                            
                                            <div 
                                                className={`transition-all duration-300 ease-in-out ${
                                                    activeMobileDropdown === menuId 
                                                        ? 'max-h-[60vh] opacity-100' 
                                                        : 'max-h-0 opacity-0 overflow-hidden'
                                                }`}
                                            >
                                                <div className="bg-gray-50 ml-4 mr-2 rounded-lg">
                                                    {menuId === 'international-packages' ? (
                                                        // Special handling for international packages
                                                        <div className="py-2 max-h-[50vh] overflow-y-auto">
                                                            <div className="px-3 py-2">
                                                                <h3 className="text-xs font-medium text-[#00DEF7] uppercase mb-2 sticky top-0 bg-gray-50 py-2">Southeast Asia</h3>
                                                                {dropdownMenus[menuId].slice(0, 8).map((item) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        onClick={() => {
                                                                            setIsMenuOpen(false);
                                                                            setActiveMobileDropdown(null);
                                                                        }}
                                                                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#00DEF7]"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                            <div className="px-3 py-2 border-t border-gray-100">
                                                                <h3 className="text-xs font-medium text-[#00DEF7] uppercase mb-2 sticky top-0 bg-gray-50 py-2">Middle East & Central Asia</h3>
                                                                {dropdownMenus[menuId].slice(8, 14).map((item) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        onClick={() => {
                                                                            setIsMenuOpen(false);
                                                                            setActiveMobileDropdown(null);
                                                                        }}
                                                                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#00DEF7]"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                            <div className="px-3 py-2 border-t border-gray-100">
                                                                <h3 className="text-xs font-medium text-[#00DEF7] uppercase mb-2 sticky top-0 bg-gray-50 py-2">Rest of World</h3>
                                                                {dropdownMenus[menuId].slice(14).map((item) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        onClick={() => {
                                                                            setIsMenuOpen(false);
                                                                            setActiveMobileDropdown(null);
                                                                        }}
                                                                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#00DEF7]"
                                                                    >
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        // Regular handling for other menus
                                                        <div className="py-2">
                                                            {dropdownMenus[menuId as keyof typeof dropdownMenus].map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    onClick={() => {
                                                                        setIsMenuOpen(false);
                                                                        setActiveMobileDropdown(null);
                                                                    }}
                                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#00DEF7]"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Additional Links */}
                                <Link 
                                    href="/blogs" 
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveMobileDropdown(null);
                                    }}
                                    className="block px-4 py-2.5 text-gray-700"
                                >
                                    Blogs
                                </Link>
                                <Link 
                                    href="/careers"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveMobileDropdown(null);
                                    }}
                                    className="block px-4 py-2.5 text-gray-700"
                                >
                                    Careers
                                </Link>
                                <Link 
                                    href="/about-us"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveMobileDropdown(null);
                                    }}
                                    className="block px-4 py-2.5 text-gray-700"
                                >
                                    About Us
                                </Link>
                                <Link 
                                    href="/payment"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveMobileDropdown(null);
                                    }}
                                    className="block px-4 py-2.5 text-gray-700"
                                >
                                    Payments
                                </Link>
                            </div>

                            {/* Contact Us Button and Options */}
                            <div className="p-4 mt-4">
                                <button
                                    onClick={() => setActiveMobileDropdown('contact')}
                                    className="block w-full py-3 text-center bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors"
                                >
                                    Contact Us
                                </button>

                                {/* Contact Options Dropdown */}
                                <div 
                                    className={`transition-all duration-300 ease-in-out mt-2 ${
                                        activeMobileDropdown === 'contact' 
                                            ? 'max-h-[200px] opacity-100' 
                                            : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}
                                >
                                    <div className="space-y-2">
                                        {/* Call Button */}
                                        <a
                                            href="tel:+919310271488"
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-[#00DEF7] text-white font-medium rounded-lg hover:bg-[#00DEF7]/90 transition-colors"
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setActiveMobileDropdown(null);
                                            }}
                                        >
                                            <Phone className="h-5 w-5" />
                                            <span>Call Now</span>
                                        </a>

                                        {/* Raise Query Button */}
                                        <Link
                                            href="/contact-us"
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#00DEF7] font-medium rounded-lg border-2 border-[#00DEF7] hover:bg-[#00DEF7]/5 transition-colors"
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setActiveMobileDropdown(null);
                                            }}
                                        >
                                            <MessageSquare className="h-5 w-5" />
                                            <span>Raise a Query</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Keep the existing SearchModal component */}
            <SearchModal 
                isOpen={isSearchModalOpen} 
                onClose={() => setIsSearchModalOpen(false)} 
            />
        </nav>
    )
}


