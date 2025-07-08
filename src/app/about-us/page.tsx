import React from 'react';
import { Button } from "@/components/ui/button"
import { Target, Eye } from 'lucide-react'
import Services from "./Services"
import Founder from "../components/common/Founder";
import NumberTicker from "../../components/ui/number-ticker"
// import { SmoothCursor } from "../../components/ui/smooth-cursor"

const AboutPage: React.FC = () => {
    return (
        <div className="mt-20 min-h-screen">
            <section className="relative h-[500px] bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-b-[50px] shadow-xl">
                <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-5xl md:text-7xl font-bold text-white font-poppins leading-tight">
                            Discover Your Next
                            <span className="block mt-2">Adventure</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
                            Experience the ultimate travel journey with Truedeal
                        </p>
                        <Button className="mt-8 px-8 py-6 rounded-full text-base font-semibold text-white bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            Book Now
                        </Button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="max-w-[250px]">
                            <h1 className="text-6xl font-bold tracking-tight font-poppins">TRUEDEAL</h1>
                            <div className="h-1.5 w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mt-4" />
                        </div>
                        <p className="text-gray-600 leading-relaxed max-w-xl font-poppins text-lg">
                            Welcome to TrueDeal, your ultimate travel companion for
                            unforgettable journeys and unbeatable deals. As a premier
                            travel agency, we specialize in providing customized vacation
                            packages, unforgettable travel experiences, and exceptional
                            customer service to adventurers of all types. Whether you are
                            planning a luxurious getaway, a family vacation, or a
                            thrilling solo Journey, we have the perfect travel solutions
                            for you.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight font-poppins">
                            We Provide the{" "}
                            <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Best Deal</span> For Your{" "}
                            <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Ultimate Travel</span>{" "}
                            <span className="text-4xl lg:text-5xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">Experience</span>
                        </h2>

                        <div className="relative">
                            {/* Gradient shadow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-3xl blur-xl opacity-50 -z-10"></div>

                            <div className="relative">
                                {/* Gradient shadow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] rounded-3xl blur-xl opacity-50 -z-10"></div>

                                {/* Card content */}
                                <div className="bg-white rounded-3xl p-4 shadow-lg border relative z-10">
                                    <div className="grid grid-cols-2 gap-4 relative">
                                        {/* Vertical gradient line */}
                                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#017ae3] to-[#00f6ff]"></div>

                                        <div className="text-center">
                                            <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">

                                                <NumberTicker className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold" value={40} />
                                            </div>
                                            <div className="text-gray-800 font-semibold font-poppins">
                                                + Years of<br />Experience
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold">

                                                <NumberTicker className="text-4xl lg:text-7xl bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-transparent bg-clip-text font-poppins font-bold" value={10000} /></div>
                                            <div className="text-gray-800 font-semibold font-poppins">
                                                + Happy<br />Customers
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="bg-gradient-to-b from-blue-50 to-white py-24">
                <div className="container mx-auto px-4">
                    {/* Mission */}
                    <div className="grid md:grid-cols-[250px,1fr] gap-12 items-center mb-24">
                        <div className="flex justify-center">
                            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <Target className="w-20 h-20 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 font-poppins">
                                OUR MISSION
                                <div className="h-1.5 w-32 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mt-4" />
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-poppins text-lg">
                                Our mission at TrueDeal is simple to provide
                                you with affordable, hassle-free, and personalized
                                travel experiences. We believe that travel should be
                                accessible to everyone, and thats why we focus on
                                delivering cost-effective solutions without compromising
                                quality. We are dedicated to helping you find the best
                                travel deals, discounted vacation packages, and tailored
                                travel plans that meet your unique preferences.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="grid md:grid-cols-[250px,1fr] gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <Eye className="w-20 h-20 text-white" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6 font-poppins">
                                OUR VISION
                                <div className="h-1.5 w-32 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] mt-4" />
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-poppins text-lg">
                                We are committed to delivering top-tier travel packages, hotels to excursions and local experiences, all while maintaining the highest level of customer satisfaction. With a strong focus on quality, reliability, and integrity, TrueDeal continues to grow as a leader in the travel industry, shaping the future of travel one experience at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <Founder />
            {/* <SmoothCursor /> */}
        </div>
    );
};

export default AboutPage;

