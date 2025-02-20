"use client";

import Image from "next/image"
import Link from "next/link"
import { InstagramIcon } from "../icons/social/Instagram"
import { FacebookIcon } from "../icons/social/Facebook"
import { TwitterIcon } from "../icons/social/Twitter"
import { LinkedInIcon } from "../icons/social/LinkedIn"
import { Phone, Mail, MapPin, Plane, Compass, Globe, Map, Cloud, Sun, Palmtree } from "lucide-react"
import { YouTubeIcon } from "../icons/social/YouTube"
import { motion } from "framer-motion"
import { ReactNode } from 'react'

const FloatingElement = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
    <motion.div
        animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
        }}
        transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Component() {
    return (
        <>
            {/* Contact Info Section - enhance cards */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-12 px-4 bg-gradient-to-br from-[#017ae3] to-[#00f6ff] relative overflow-hidden"
            >
                {/* Add floating clouds */}
                <FloatingElement className="absolute left-[10%] top-10 text-white/10">
                    <Cloud size={40} />
                </FloatingElement>
                <FloatingElement className="absolute right-[20%] top-20 text-white/10">
                    <Cloud size={30} />
                </FloatingElement>
                
                {/* Add animated plane trail */}
                <motion.div
                    animate={{ 
                        x: [-100, window.innerWidth + 100],
                        y: [0, -50, 0]
                    }}
                    transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/3 text-white/20"
                >
                    <div className="relative">
                        <Plane size={48} className="rotate-12" />
                        <motion.div 
                            className="absolute top-1/2 right-full w-20 h-0.5 bg-gradient-to-r from-white/0 to-white/20"
                            animate={{ width: [0, 80] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">
                        Get in Touch
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { 
                                Icon: Phone, 
                                title: "Call Us", 
                                content: "+91 8447498498",
                                animation: { rotate: 15 }
                            },
                            { 
                                Icon: Mail, 
                                title: "Write to Us", 
                                content: "info@truedeal4u.com",
                                animation: { scale: 1.1 }
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="flex items-center bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border border-white/20"
                            >
                                <div className="text-[#017ae3] mr-4">
                                    <motion.div
                                        whileHover={item.animation}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <item.Icon size={32} className="hover:text-[#00f6ff] transition-colors" />
                                    </motion.div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 hover:text-[#017ae3] transition-colors">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Our Head Office",
                                address: "LGF 47, World Trade Center, beside Lalit Hotel, Barakhamba Road, Connaught Place, Delhi 110006"
                            },
                            {
                                title: "Our Corporate Office",
                                address: "C 207, Logix Cyber Park, C Block, Phase 2, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301"
                            }
                        ].map((office, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/20"
                            >
                                <div className="flex items-center mb-4">
                                    <motion.div 
                                        className="text-[#017ae3] mr-4"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <MapPin size={32} className="hover:text-[#00f6ff] transition-colors" />
                                    </motion.div>
                                    <h3 className="text-lg font-semibold text-gray-800">{office.title}</h3>
                                </div>
                                <p className="text-gray-600 hover:text-[#017ae3] transition-colors">
                                    {office.address}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <footer className="bg-white py-12 px-4 border-t relative">
                {/* Enhanced decorative background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="w-full h-full bg-[url('/Assets/world-map.png')] bg-no-repeat bg-center bg-contain" />
                    <FloatingElement className="absolute bottom-10 right-10">
                        <Palmtree size={100} className="text-[#017ae3]/10" />
                    </FloatingElement>
                    <FloatingElement className="absolute top-20 left-10">
                        <Sun size={80} className="text-[#017ae3]/10" />
                    </FloatingElement>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Blog Promotion Section */}
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="mb-12 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#017ae3] to-[#00f6ff] p-8 rounded-2xl shadow-lg relative overflow-hidden"
                    >
                        {/* Add animated compass */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute left-4 bottom-4 text-white/20"
                        >
                            <Compass size={60} />
                        </motion.div>

                        {/* Add floating globe with pulsing effect */}
                        <motion.div
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: 360
                            }}
                            transition={{ 
                                scale: { duration: 2, repeat: Infinity },
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                            }}
                            className="absolute right-4 top-4 text-white/20"
                        >
                            <Globe size={80} />
                        </motion.div>

                        <div className="mb-6 md:mb-0 text-white md:max-w-xl">
                            <h2 className="text-2xl font-bold mb-3">Explore Our Travel Blog</h2>
                            <p className="text-white/90 mb-4">
                                Discover travel tips, destination guides, and insider insights from our expert travelers.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/blog/category/travel-tips"
                                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                                >
                                    Travel Tips
                                </Link>
                                <Link
                                    href="/blog/category/destinations"
                                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                                >
                                    Destinations
                                </Link>
                                <Link
                                    href="/blog/category/forex-guide"
                                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors"
                                >
                                    Forex Guide
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center md:items-end">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/blogs"
                                    className="px-6 py-3 bg-white text-[#017ae3] rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 shadow-md"
                                >
                                    Read Our Blog
                                    <motion.svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        <path d="M5 12h14m-7-7 7 7-7 7" />
                                    </motion.svg>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:ml-[12%]">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src="/Assets/NavbarImages/logo.png"
                                alt="Truedeal Logo"
                                width={180}
                                height={45}
                                className="mb-4"
                            />
                            <h1 className="font-bold font-poppins mb-2 text-[#017ae3]">TRUEDEAL TRAVELS PRIVATE LIMITED</h1>
                            <p className="text-gray-700 text-sm mb-4">
                                Truedeal is your trusted partner for seamless travel experiences, forex solutions, and comprehensive travel services since 2014.
                            </p>
                            <div className="flex gap-4">
                                {[
                                    { Icon: InstagramIcon, href: "https://www.instagram.com/itstruedeal/", bg: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]" },
                                    { Icon: TwitterIcon, href: "https://x.com/truedeal4u", bg: "bg-black" },
                                    { Icon: FacebookIcon, href: "https://www.facebook.com/itstruedeal/", bg: "bg-[#1877F2]" },
                                    { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/itstruedeal/", bg: "bg-[#0A66C2]" },
                                    { Icon: YouTubeIcon, href: "https://www.youtube.com/@Truedeal4u/shorts", bg: "bg-[#FF0000]" }
                                ].map(({ Icon, href, bg }) => (
                                    <motion.div
                                        key={href}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link 
                                            href={href} 
                                            target="_blank"
                                            className={`w-10 h-10 flex items-center justify-center rounded-full ${bg} text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg`}
                                        >
                                            <div className="w-5 h-5">
                                                <Icon />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-[#017ae3] mb-4 text-lg flex items-center gap-2">
                                <Map className="w-5 h-5" />
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
                                    { name: "Payment", path: "/payment" }
                                ].map((link) => (
                                    <motion.li 
                                        key={link.name}
                                        whileHover={{ 
                                            x: 5,
                                            backgroundColor: "rgba(1, 122, 227, 0.05)"
                                        }}
                                        className="rounded-lg px-2 py-1"
                                    >
                                        <Link 
                                            href={link.path} 
                                            className="text-gray-700 hover:text-[#017ae3] text-sm transition-all duration-200 flex items-center gap-2"
                                        >
                                            <motion.span
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Services Column 1 */}
                        <div>
                            <h3 className="font-bold text-[#017ae3] mb-4 text-lg">Our Services</h3>
                            <div className="space-y-2">
                                {[
                                    { name: "Foreign Currency", path: "/#forex" },
                                    { name: "Exchange Forex Card", path: "/#forex" },
                                    { name: "Remittance", path: "/#forex" },
                                    { name: "VISA Services", path: "/visaservices" },
                                ].map((service) => (
                                    <motion.li 
                                        key={service.name}
                                        whileHover={{ x: 5 }}
                                        className="list-none"
                                    >
                                        <Link 
                                            href={service.path} 
                                            className="group flex items-center gap-2 text-gray-700 hover:text-[#017ae3] text-sm transition-all duration-200"
                                        >
                                            <motion.span
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="text-[#017ae3] opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                →
                                            </motion.span>
                                            {service.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced travel quote section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 text-center relative"
                >
                    <motion.div
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-[#017ae3]/20"
                    >
                        <Plane size={40} />
                    </motion.div>
                    <p className="text-gray-600 italic text-lg">The world is a book and those who do not travel read only one page.</p>
                    <p className="text-sm text-gray-500 mt-2">-Saint Augustine</p>
                </motion.div>
            </footer>
        </>
    )
}