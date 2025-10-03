"use client"

import { useState, useEffect, useMemo, useCallback, useRef } from "react"
import { Search, MapPin, Globe, Award, Briefcase, CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import TypingAnimation from "../../../components/ui/typing-animation"
import FirstTimeTravelMessage from "./FirstTimeTravelMessage"
import { Destination, destinations } from "@/app/config/destinations"

// Keep only the placeholderDestinations array here
const placeholderDestinations = ["Almaty", "Bali", "Thailand", "Phillipines", "Kashmir"]

export default function HeroSection() {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>("")
    const router = useRouter()
    const [placeholderText, setPlaceholderText] = useState("")
    const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)
    const [isTypingPlaceholder, setIsTypingPlaceholder] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null)

    const filteredDestinations = useMemo(
        () => destinations.filter((dest) => dest.name.toLowerCase().includes(searchTerm.toLowerCase())),
        [searchTerm],
    )

    const handleDestinationSelect = useCallback(
        (destination: Destination) => {
            setSearchTerm(destination.name)
            setIsSearchModalOpen(false)
            if (destination.name.toLowerCase() === "bali") {
                router.push("/bali")
            } else if (destination.name.toLowerCase() === "japan") {
                router.push("/japan")
            } else if (destination.name.toLowerCase() === "europe") {
                router.push("/europe")
            } else if (destination.name.toLowerCase() === "vietnam") {
                router.push("/vietnam")
            } else if (destination.name.toLowerCase() === "thailand") {
                router.push("/naturesland-thailand")
            } else if (destination.name.toLowerCase() === "australia packages") {
                router.push("/australiaPackages")
            } else if (destination.name.toLowerCase() === "turkey") {
                router.push("/turkey")
            } else if (destination.name.toLowerCase() === "kerala") {
                router.push("/kerala")
            } else if (destination.name.toLowerCase() === "dubai") {
                router.push("/dubai")
            } else if (destination.name.toLowerCase() === "goa") {
                router.push("/goa")
            } else if (destination.name.toLowerCase() === "rajasthan") {
                router.push("/rajasthan")
            } else if (destination.name.toLowerCase() === "greece") {
                router.push("/greece")
            } else if (destination.name.toLowerCase() === "leh ladakh") {
                router.push("/lehladakh")
            } else if (destination.name.toLowerCase() === "singapore + malaysia + langkawi") {
                router.push("/singapore")
            } else if (["indochina", "laos", "combodia"].includes(destination.name.toLowerCase())) {
                router.push("/indochina")
            } else if (destination.name.toLowerCase() === "chardham") {
                router.push("/chardhamYatra")
            } else if (destination.isTrending) {
                router.push(`/trending/${destination.name.toLowerCase()}`)
            } else if (destination.tag?.label === "FIXED DEPARTURE" && destination.fixedDepartureId) {
                router.push(`/fixedDeparture/${destination.fixedDepartureId}`)
            } else {
                router.push(`/destinations/${destination.name.toLowerCase()}`)
            }
        },
        [router],
    )

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

    // Placeholder typing animation effect
    useEffect(() => {
        const currentDestination = placeholderDestinations[currentPlaceholderIndex]
        let timer: NodeJS.Timeout

        if (isTypingPlaceholder) {
            if (placeholderText.length < currentDestination.length) {
                timer = setTimeout(() => {
                    setPlaceholderText(currentDestination.slice(0, placeholderText.length + 1))
                }, 150) // Typing speed
            } else {
                timer = setTimeout(() => {
                    setIsTypingPlaceholder(false)
                }, 2000) // Wait before erasing
            }
        } else {
            if (placeholderText.length > 0) {
                timer = setTimeout(() => {
                    setPlaceholderText(currentDestination.slice(0, placeholderText.length - 1))
                }, 100) // Erasing speed
            } else {
                setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholderDestinations.length)
                setIsTypingPlaceholder(true)
            }
        }

        return () => clearTimeout(timer)
    }, [placeholderText, isTypingPlaceholder, currentPlaceholderIndex])

    useEffect(() => {
        if (isSearchModalOpen && inputRef.current) {
            const timer = setTimeout(() => {
                inputRef.current?.focus()
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [isSearchModalOpen])

    const SearchContent = useCallback(
        () => (
            <div className="w-full flex flex-col h-full">
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
                                    role="option"
                                >
                                    <span className="flex-shrink-0">
                                        {dest.isTrending ? (
                                            <Globe className="h-5 w-5 text-blue-500" />
                                        ) : (
                                            <MapPin className="h-5 w-5 text-gray-400" />
                                        )}
                                    </span>
                                    <span className="flex-grow font-medium truncate">{highlightMatch(dest.name, searchTerm)}</span>
                                    <div className="flex gap-2 items-center flex-shrink-0">
                                        {dest.tag && (
                                            <span
                                                className={`flex-shrink-0 px-2 py-1 text-xs font-medium rounded-full
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
                                        {dest.isTrending && (
                                            <span className="flex-shrink-0 px-2 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full">
                                                Trending
                                            </span>
                                        )}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-gray-500">No destinations found for &quot;{searchTerm}&quot;</div>
                    )}
                </div>
            </div>
        ),
        [searchTerm, filteredDestinations, handleDestinationSelect, highlightMatch],
    )

    return (
        <>
            <div className="relative min-h-[65svh] md:min-h-[85vh] overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 h-[60svh] md:h-[85vh]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
                    >
                        <source
                            src="/Assets/HeroSectionImages/bgg.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
                </div>

                {/* Content */}
                <div className="relative z-[2] flex flex-col items-center min-h-[65svh] md:min-h-[85vh] text-white px-4 sm:px-6 lg:px-8 pt-20 md:pt-0 pb-8">
                    {/* Main content - adjusted padding and centering for mobile */}
                    <div className="flex flex-col items-center justify-center max-w-4xl w-full mx-auto min-h-[40vh] md:min-h-0 md:mt-32">
                        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-4 text-center font-poppins mt-8 md:mt-0">
                            <span className="font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Discover Your Dream Vacation with</span>{" "}
                            <span className="font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Truedeal</span>
                        </h1>
                        <p className="text-xs sm:text-sm md:text-sm mb-2 md:mb-4 text-center font-poppins font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            GET READY FOR TAKE OFF
                        </p>
                        <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-center font-poppins font-bold text-yellow-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            <TypingAnimation>Search your holiday</TypingAnimation>
                        </h2>

                        <div className="w-full max-w-xl mx-auto font-poppins px-4 mb-2">
                            <button
                                onClick={() => setIsSearchModalOpen(true)}
                                className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white border-0 rounded-full h-12 px-6 shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-between"
                            >
                                <span className="text-white/75 truncate">
                                    {placeholderText ? `Search ${placeholderText}...` : "Search countries, cities..."}
                                </span>
                                <Search className="h-5 w-5 text-white flex-shrink-0 ml-2" />
                            </button>

                            {/* Search Modal */}
                            <Dialog open={isSearchModalOpen} onOpenChange={setIsSearchModalOpen}>
                                <DialogContent className="sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40vw] bg-white border-gray-800 w-[90vw] h-[80vh] max-h-[600px] overflow-hidden flex flex-col">
                                    <DialogTitle className="sr-only">Search Destinations</DialogTitle>
                                    <SearchContent />
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Mice Trips and Fixed Departures buttons */}
                        <div className="w-full max-w-xl mx-auto font-poppins px-4 mt-4 mb-6">
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => router.push('/mice')}
                                    className="flex-1 bg-gradient-to-r from-[#ffffff] to-[#5dfaff] text-gray-800 border-0 rounded-full h-11 px-4 shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center text-sm font-medium"
                                >
                                    <span>Mice Trips</span>
                                </button>
                                <button
                                    onClick={() => router.push('/fixedDeparture')}
                                    className="flex-1 bg-gradient-to-r from-[#ffffff] to-[#5dfaff] text-gray-800 border-0 rounded-full h-11 px-4 shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center text-sm font-medium"
                                >
                                    <span>Fixed Departures</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Info Banner */}
            {/* <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] py-3">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white font-poppins text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            <span className="font-semibold">10+ Years of Experience</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            <span className="font-semibold">No Cost EMI</span>
                        </div>
                    </div>
                </div>
            </div> */}

            <FirstTimeTravelMessage />
        </>
    )
}
