"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Compass, ArrowRight, PlaneTakeoff, Map, Globe } from "lucide-react"
import { useState, useCallback, useMemo, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { Destination, destinations } from "@/app/config/destinations"

export default function NotFound() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-24">
        <div className="max-w-5xl w-full mx-auto grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
              <Compass className="h-4 w-4 mr-2" />
              <span>Lost in paradise</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Destination not found</h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-md">
              The page you&apos;re looking for seems to have wandered off the map. Let&apos;s help you find your way back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="inline-block">
                <Button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white">
                  Return to homepage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Or search for something specific:</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <div
                    onClick={() => setIsSearchModalOpen(true)}
                    className="relative cursor-pointer group"
                  >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search destinations, tours..."
                      className="pl-9 border-gray-200 focus-visible:ring-sky-500 cursor-pointer"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 to-amber-100/50 rounded-2xl transform rotate-3 scale-95 -z-10"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md">
                <PlaneTakeoff className="h-5 w-5 text-sky-600" />
              </div>

              <div className="p-6 pb-0">
                <div className="flex items-center mb-4">
                  <Map className="h-6 w-6 text-sky-600 mr-2" />
                  <h3 className="font-semibold text-lg">World Explorer</h3>
                </div>

                <div className="relative h-[300px] sm:h-[400px] rounded-t-lg overflow-hidden">
                  <Image
                    src="/Not-found/1.png"
                    alt="World map illustration"
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                      <div className="relative bg-red-600 h-4 w-4 rounded-full"></div>
                    </div>
                    <div className="absolute h-24 w-24 border-2 border-red-500 rounded-full animate-pulse opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-amber-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-sky-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </div>
  )
}

// Search Modal Component
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
    } else if (destination.name.toLowerCase() === "japan") {
      router.push("/japan")
    } else if (destination.name.toLowerCase() === "vietnam") {
      router.push("/vietnam")
    } else if (destination.name.toLowerCase() === "europe") {
      router.push("/europe")
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
    } else if (destination.name.toLowerCase() === "leh ladakh") {
      router.push("/lehladakh")
    } else if (destination.name.toLowerCase() === "singapore + malaysia + langkawi") {
      router.push("/singapore")
    } else if (["indochina", "laos", "combodia"].includes(destination.name.toLowerCase())) {
      router.push("/indochina")
    } else if (destination.name.toLowerCase() === "chardham") {
      router.push("/chardhamYatra")
    } else if (destination.name.toLowerCase() === "almaty") {
      router.push("/almaty")
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
