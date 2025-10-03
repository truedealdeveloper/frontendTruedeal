"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { NumberTicker } from "@/components/magicui/number-ticker"

import {
  Calendar,
  Users,
  Award,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Star,
  Globe,
  Clock,
  Plane,
  Hotel,
  Utensils,
  Camera,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react"

export default function MICEPage() {
  // Refs for scroll animations
  const heroRef = useRef(null)

  // Modal state for image viewer
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string, index: number, total: number } | null>(null)
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({})

  // Keyboard navigation effect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return

      if (e.key === 'Escape') {
        closeImageModal()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (selectedImage.src.includes('gallantt_Singapore')) {
          navigateImage('prev', 'singapore')
        } else if (selectedImage.src.includes('rotary_phuket')) {
          navigateImage('prev', 'phuket')
        } else if (selectedImage.src.includes('gallant_goa')) {
          navigateImage('prev', 'goa')
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (selectedImage.src.includes('gallantt_Singapore')) {
          navigateImage('next', 'singapore')
        } else if (selectedImage.src.includes('rotary_phuket')) {
          navigateImage('next', 'phuket')
        } else if (selectedImage.src.includes('gallant_goa')) {
          navigateImage('next', 'goa')
        }
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  // Function to handle image load success
  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => ({ ...prev, [imagePath]: true }))
  }

  // Function to handle image load error
  const handleImageError = (imagePath: string) => {
    setLoadedImages(prev => ({ ...prev, [imagePath]: false }))
  }

  // Function to open image modal
  const openImageModal = (src: string, alt: string, index: number, total: number) => {
    setSelectedImage({ src, alt, index, total })
    document.body.style.overflow = 'hidden'
  }

  // Function to close image modal
  const closeImageModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  // Function to navigate images in modal
  const navigateImage = (direction: 'prev' | 'next', imageSet: 'singapore' | 'phuket' | 'goa') => {
    if (!selectedImage) return

    let newIndex = selectedImage.index
    const maxImages = selectedImage.total

    if (direction === 'prev') {
      newIndex = newIndex > 0 ? newIndex - 1 : maxImages - 1
    } else {
      newIndex = newIndex < maxImages - 1 ? newIndex + 1 : 0
    }

    let newSrc = ''
    let newAlt = ''

    if (imageSet === 'singapore') {
      newSrc = `/UGCImages/gallantt_Singapore/1 (${newIndex + 1}).jpg`
      newAlt = `Singapore corporate trip - Image ${newIndex + 1}`
    } else if (imageSet === 'phuket') {
      newSrc = `/UGCImages/gallantt/rotary_phuket/1 (${newIndex + 1}).jpeg`
      newAlt = `Phuket corporate trip - Image ${newIndex + 1}`
    } else if (imageSet === 'goa') {
      newSrc = `/UGCImages/gallantt/gallant_goa/1 (${newIndex + 1}).jpeg`
      newAlt = `GOA corporate trip - Image ${newIndex + 1}`
    }

    setSelectedImage({ src: newSrc, alt: newAlt, index: newIndex, total: maxImages })
  }

  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: "Meetings",
      description:
        "Professional meeting arrangements with state-of-the-art facilities in scenic locations across India.",
      link: "/",
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: "Incentives",
      description: "Reward your top performers with unforgettable experiences and team-building activities.",
      link: "/",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Conferences",
      description: "Large-scale conference planning and execution with attention to every detail.",
      link: "/",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Events",
      description: "Corporate events, product launches, and dealer meets designed to leave a lasting impression.",
      link: "/",
    },
  ]

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Nationwide Network",
      description: "Access to premium venues and services across India",
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "End-to-End Management",
      description: "Comprehensive planning from concept to execution",
    },
    {
      icon: <Plane className="h-6 w-6 text-white" />,
      title: "Travel Arrangements",
      description: "Seamless transportation and logistics coordination",
    },
    {
      icon: <Hotel className="h-6 w-6 text-white" />,
      title: "Accommodation",
      description: "Curated selection of hotels and resorts for all budgets",
    },
    {
      icon: <Utensils className="h-6 w-6 text-white" />,
      title: "Catering Excellence",
      description: "Customized menus and dining experiences",
    },
    {
      icon: <Camera className="h-6 w-6 text-white" />,
      title: "Event Documentation",
      description: "Professional photography and video services",
    },
  ]

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden w-full">
      {/* Hero Section with professional gradient */}
      <section ref={heroRef} className="relative overflow-hidden w-full bg-gradient-to-br from-gray-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#ffffff] to-[#5dfaff] text-gray-800 text-sm font-medium mb-6 rounded-full shadow-md">
              <Star className="h-4 w-4 mr-2" />
              <span>Premier MICE Services Provider</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Elevate Your Corporate{" "}
              <span className="bg-gradient-to-r from-[#5dfaff] to-[#5dfaff] bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Specialized MICE services for corporate meetings, incentives, conferences, and events. We create memorable experiences that drive business results and team engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact-us"
                className="group bg-gradient-to-r from-[#ffffff] to-[#5dfaff] text-gray-800 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-center flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Plan Your Event
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="https://truedeal-assets.s3.eu-north-1.amazonaws.com/mice/Truedeal+2025+MICE+Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-800 border-2 border-gray-200 font-medium px-8 py-3.5 rounded-full transition-all duration-300 text-center flex items-center justify-center hover:border-cyan-300 hover:shadow-md"
              >
                Download Brochure
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-[#ffffff] to-[#5dfaff] p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-800">
                    <NumberTicker value={500} />+
                  </p>
                  <p className="text-gray-700 text-sm mt-1">Events Organized</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-gray-800" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-[#ffffff] to-[#5dfaff] p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-800">
                    <NumberTicker value={98} />%
                  </p>
                  <p className="text-gray-700 text-sm mt-1">Client Satisfaction</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center">
                  <Star className="h-6 w-6 text-gray-800" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-[#ffffff] to-[#5dfaff] p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-800">
                    <NumberTicker value={10} />+
                  </p>
                  <p className="text-gray-700 text-sm mt-1">Years Experience</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center">
                  <Award className="h-6 w-6 text-gray-800" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Group Image Card Section */}
      <section className="py-12 bg-white w-full">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#ffffff] to-[#5dfaff] rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/UGCImages/gallantt_Singapore/1 (5).jpg"
                  alt="Corporate Group Event"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 bg-white/50 rounded-full text-gray-800 text-xs font-medium mb-4 w-fit">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  <span>Successfully Executed</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Creating Memorable Corporate Experiences
                </h3>
                <p className="text-gray-700 mb-6">
                  From team building activities to international corporate trips, we handle every detail to ensure your event is a resounding success. Our expertise spans across destinations, ensuring seamless execution.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                    <Users className="h-4 w-4 text-gray-800" />
                    <span className="text-sm font-medium text-gray-800">Team Building</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                    <Globe className="h-4 w-4 text-gray-800" />
                    <span className="text-sm font-medium text-gray-800">International</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
                    <Award className="h-4 w-4 text-gray-800" />
                    <span className="text-sm font-medium text-gray-800">Premium Service</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Singapore Trip Gallery */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#017ae3]/10 rounded-full text-[#017ae3] text-sm font-medium mb-4">
              <Camera className="h-4 w-4 mr-2" />
              <span>Event Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Singapore Corporate Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A successful corporate incentive trip showcasing our expertise in organizing memorable experiences for prestigious organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 116 }, (_, index) => {
              const imagePath = `/UGCImages/gallantt_Singapore/1 (${index + 1}).jpg`
              const shouldShow = loadedImages[imagePath] !== false

              if (!shouldShow && loadedImages[imagePath] === false) return null

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openImageModal(imagePath, `Singapore corporate trip - Image ${index + 1}`, index, 116)}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={imagePath}
                      alt={`Singapore corporate trip - Image ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      onLoad={() => handleImageLoad(imagePath)}
                      onError={() => handleImageError(imagePath)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">
                        Click to view
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            }).filter(Boolean)}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Successfully Executed Corporate Incentive Trip</span>
            </div>
          </div>
        </div>
      </section>

      {/* Phuket Trip Gallery */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#017ae3]/10 rounded-full text-[#017ae3] text-sm font-medium mb-4">
              <Camera className="h-4 w-4 mr-2" />
              <span>Event Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Phuket Corporate Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A successful corporate incentive trip showcasing our expertise in organizing memorable experiences for prestigious organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 13 }, (_, index) => {
              const imagePath = `/UGCImages/gallantt/rotary_phuket/1 (${index + 1}).jpeg`
              const shouldShow = loadedImages[imagePath] !== false

              if (!shouldShow && loadedImages[imagePath] === false) return null

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openImageModal(imagePath, `Phuket corporate trip - Image ${index + 1}`, index, 13)}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={imagePath}
                      alt={`Phuket corporate trip - Image ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      onLoad={() => handleImageLoad(imagePath)}
                      onError={() => handleImageError(imagePath)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">
                        Click to view
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            }).filter(Boolean)}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Successfully Executed Corporate Incentive Trip</span>
            </div>
          </div>
        </div>
      </section>

      {/* GOA Corporate Trip Gallery */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#017ae3]/10 rounded-full text-[#017ae3] text-sm font-medium mb-4">
              <Camera className="h-4 w-4 mr-2" />
              <span>Corporate Event Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              GOA Corporate Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A successful corporate outing for 40 participants, featuring team building activities and memorable experiences in the beautiful beaches of Goa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 35 }, (_, index) => {
              const imagePath = `/UGCImages/gallantt/gallant_goa/1 (${index + 1}).jpeg`
              const shouldShow = loadedImages[imagePath] !== false

              if (!shouldShow && loadedImages[imagePath] === false) return null

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openImageModal(imagePath, `GOA corporate trip - Image ${index + 1}`, index, 35)}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={imagePath}
                      alt={`GOA corporate trip - Image ${index + 1}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      onLoad={() => handleImageLoad(imagePath)}
                      onError={() => handleImageError(imagePath)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">
                        Click to view
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            }).filter(Boolean)}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full border border-green-200">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">40 Participants - Successfully Executed</span>
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Corporate Team Building Event</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#ffffff] to-[#5dfaff] text-gray-800 text-sm font-medium mb-4 rounded-full shadow-md">
              <Star className="h-4 w-4 mr-2" />
              <span>Our MICE Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions for Corporate Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate meetings to large-scale conferences, we provide end-to-end solutions tailored to your
              specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#ffffff] to-[#5dfaff]"
              >
                <div className="relative p-4 sm:p-6 h-full flex flex-col">
                  <div className="mb-4 sm:mb-6 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/50 flex items-center justify-center">
                    <div className="text-gray-800">
                      {index === 0 && <Calendar className="h-8 w-8 sm:h-10 sm:w-10" />}
                      {index === 1 && <Award className="h-8 w-8 sm:h-10 sm:w-10" />}
                      {index === 2 && <Users className="h-8 w-8 sm:h-10 sm:w-10" />}
                      {index === 3 && <Briefcase className="h-8 w-8 sm:h-10 sm:w-10" />}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 flex-grow">{service.description}</p>
                  <Link href="/contact-us" className="inline-flex items-center text-gray-800 font-semibold group text-sm sm:text-base hover:gap-2 transition-all">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#017ae3]/10 rounded-full text-[#017ae3] text-sm font-medium mb-4">
              <Globe className="h-4 w-4 mr-2" />
              <span>Recent Success Stories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Events We&apos;ve Organized
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some of our best corporate trips organized across different destinations, showcasing our expertise in creating memorable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { location: "Phuket Corporate Trip" },
              { location: "GOA Corporate Retreat" },
              { location: "Malaysia Business Tour" },
              { location: "Pattaya Incentive Trip" },
              { location: "Singapore Corporate Event" }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-[#017ae3] to-[#00f6ff]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Globe className="h-12 w-12 mb-4 mx-auto" />
                      <h3 className="text-xl font-bold">{event.location}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center mr-3">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Corporate Event</h3>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Successfully Executed</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#017ae3]/20 hover:shadow-xl hover:shadow-[#017ae3]/30 group"
            >
              Plan Your Next Event
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Improve initial load */}
      <section className="py-16 sm:py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#017ae3]/10 rounded-full text-[#017ae3] text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Event Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every aspect of your corporate event, allowing you to focus on your objectives and participants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Replace image with decorative elements */}
      <section id="about" className="py-16 sm:py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              className="relative order-2 lg:order-1 w-full h-[400px]"
            >
              {/* Replace image with decorative design */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#017ae3] to-[#00f6ff]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-40 h-40 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="h-16 w-16 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold">Creating Memorable Events</h3>
                    <p className="text-white/80 mt-2">Bringing people together</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#017ae3]/10 rounded-full text-[#017ae3] text-sm font-medium mb-4">
                <Star className="h-4 w-4 mr-2" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Truedeal Travels for MICE?
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Expertise</h3>
                    <p className="text-gray-600">
                      With years of experience in corporate events, we understand the unique requirements of businesses
                      across industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Management</h3>
                    <p className="text-gray-600">
                      From venue selection to logistics, accommodations, and activities - we handle every aspect of your
                      event.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailored Solutions</h3>
                    <p className="text-gray-600">
                      We create customized experiences that align with your corporate objectives and brand identity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Network</h3>
                    <p className="text-gray-600">
                      Our extensive network of partners across India ensures premium services at competitive rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#017ae3]/20 hover:shadow-xl hover:shadow-[#017ae3]/30 group"
                >
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#ffffff] to-[#5dfaff] w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Ready to Elevate Your Corporate Events?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
              Let us help you create memorable experiences for your team and clients. Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center bg-gray-900 text-white hover:bg-gray-800 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get in Touch Today
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+919910725415"
                className="inline-flex items-center bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Call Us Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
          {/* Click outside to close */}
          <div
            className="absolute inset-0"
            onClick={closeImageModal}
          />

          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center z-10">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 sm:w-10 sm:h-10"
            >
              <X className="h-6 w-6 sm:h-5 sm:w-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                if (selectedImage.src.includes('gallantt_Singapore')) {
                  navigateImage('prev', 'singapore')
                } else if (selectedImage.src.includes('rotary_phuket')) {
                  navigateImage('prev', 'phuket')
                } else if (selectedImage.src.includes('gallant_goa')) {
                  navigateImage('prev', 'goa')
                }
              }}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                if (selectedImage.src.includes('gallantt_Singapore')) {
                  navigateImage('next', 'singapore')
                } else if (selectedImage.src.includes('rotary_phuket')) {
                  navigateImage('next', 'phuket')
                } else if (selectedImage.src.includes('gallant_goa')) {
                  navigateImage('next', 'goa')
                }
              }}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center p-16 sm:p-20">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>

            {/* Image info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm z-20">
              {selectedImage.index + 1} / {selectedImage.total}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
