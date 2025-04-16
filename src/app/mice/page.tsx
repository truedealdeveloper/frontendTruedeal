"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {NumberTicker} from "@/components/magicui/number-ticker"

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
} from "lucide-react"

export default function MICEPage() {
  // Refs for scroll animations
  const heroRef = useRef(null)

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
      {/* Hero Section - Improve mobile spacing */}
      <section ref={heroRef} className="relative overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/UGCImages/Mice/Almaty-3.jpeg"
            alt="Corporate MICE Events and Services by Truedeal Travels"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#017ae3]/90 to-[#00f6ff]/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 lg:py-32 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              <span>Premier MICE Services Provider</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Elevate Your Corporate{" "}
              <span className="text-white underline decoration-[#00f6ff] decoration-4 underline-offset-4">
                Experiences
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              Specialized MICE services for corporate meetings, incentives, conferences, and events across India. We
              create memorable experiences that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="group bg-white hover:bg-white/90 text-[#017ae3] font-medium px-8 py-3.5 rounded-full transition-all duration-300 text-center flex items-center justify-center shadow-lg shadow-[#017ae3]/20"
              >
                Plan Your Event
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Floating cards - Improve mobile visibility */}
          <div className="lg:hidden mt-8 space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#00f6ff]/20 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">
                    <NumberTicker value={500} className="text-white font-semibold"/>+
                  </p>
                  <p className="text-white/70 text-sm">Events Organized</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#00f6ff]/20 flex items-center justify-center mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">
                    <NumberTicker value={98} className="text-white font-semibold"/>
                  </p>
                  <p className="text-white/70 text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Section - Improve grid layout */}
      <section id="services" className="py-16 sm:py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#017ae3]/10 rounded-full text-[#017ae3] text-sm font-medium mb-4">
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
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#017ae3] to-[#00f6ff]"></div>
                <div className="relative p-4 sm:p-6 h-full flex flex-col">
                  <div className="mb-4 sm:mb-6 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 flex-grow">{service.description}</p>
                  <Link href={service.link} className="inline-flex items-center text-white font-medium group text-sm sm:text-base">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
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

      {/* About Section - Improve mobile layout */}
      <section id="about" className="py-16 sm:py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              className="relative order-2 lg:order-1 w-full"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00f6ff] rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#017ae3] rounded-lg opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/UGCImages/Mice/Almaty-3.jpeg"
                  alt="Professional Corporate Event Planning and MICE Services"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
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

      {/* CTA Section - Improve mobile spacing */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white w-full">
        <div className="container mx-auto px-4 max-w-[100vw]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Elevate Your Corporate Events?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
              Let us help you create memorable experiences for your team and clients.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-[#017ae3] hover:bg-white/90 font-bold px-4 sm:px-6 py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#017ae3]/20 group"
            >
              Get in Touch Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
