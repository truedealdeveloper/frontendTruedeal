import { Mail, MapPin, Briefcase } from "lucide-react"

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
                    <p className="text-lg text-gray-600">
                        Be part of our journey in revolutionizing the travel industry
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                        <p className="text-gray-600 mb-6">
                            Truedeal is a comprehensive tour and travel company established in 2015, offering services such as foreign currency exchange, 
                            forex cards, remittance, visa services, sightseeing, air tickets, hotel bookings, land packages, holiday packages, 
                            travel insurance, transfers, and cruise bookings. We aim to provide the ultimate travel experience with a focus on 
                            convenience, cost-efficiency, and security.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
                    <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">Travel Operations Manager</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">5 Openings</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-4">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>Noida Sector 62, India</span>
                        </div>
                        
                        <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Job Description:</h4>
                            <p className="text-gray-600 text-sm mb-3">
                                We are seeking an experienced and dynamic Travel Operations Manager to oversee and enhance our daily operations. 
                                The ideal candidate will have a strong background in the travel industry, exceptional leadership skills, 
                                and a passion for delivering outstanding customer service.
                            </p>
                        </div>
                        
                        <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
                            <ul className="list-disc pl-5 text-gray-600 text-sm">
                                <li>Operational Management: Oversee daily operations, including tour planning, scheduling, and execution, ensuring seamless service delivery.</li>
                                <li>Team Leadership: Manage and mentor a team of travel consultants and support staff, fostering a positive and productive work environment.</li>
                                <li>Vendor Relations: Establish and maintain relationships with travel vendors, suppliers, and partners to secure the best deals and services for our clients.</li>
                                <li>Customer Service: Ensure high levels of customer satisfaction by addressing client inquiries, resolving issues promptly, and implementing feedback for continuous improvement.</li>
                                <li>Process Improvement: Develop and implement operational policies and procedures to enhance efficiency and service quality.</li>
                                <li>Budget Management: Prepare and manage budgets, monitor expenses, and ensure cost-effective operations.</li>
                                <li>Compliance: Ensure all operations comply with industry regulations and company policies.</li>
                            </ul>
                        </div>
                        
                        <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Qualifications:</h4>
                            <ul className="list-disc pl-5 text-gray-600 text-sm">
                                <li>Bachelor's degree in Tourism Management, Hospitality, Business Administration, or a related field.</li>
                                <li>Minimum of 2 years of experience in travel operations or management.</li>
                                <li>Strong leadership and team management skills.</li>
                                <li>Excellent communication and interpersonal abilities.</li>
                                <li>Proficiency in travel management software and booking systems.</li>
                                <li>Strong problem-solving skills and attention to detail.</li>
                                <li>Ability to work under pressure and manage multiple priorities.</li>
                            </ul>
                        </div>
                        
                        <a 
                            href="mailto:web@truedeal4u.com?subject=Application for Travel Operations Manager Position" 
                            className="inline-block bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center"
                        >
                            Apply Now <Briefcase className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
                        <p className="text-gray-600 mb-6">
                            We&apos;re always looking for talented individuals to join our team. If you&apos;re passionate about travel and
                            want to make a difference, we&apos;d love to hear from you.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                                Send us your Resume
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Email your resume and cover letter to:
                            </p>
                            <a
                                href="mailto:web@truedeal4u.com"
                                className="inline-block bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
                            >
                                web@truedeal4u.com
                            </a>
                            <p className="text-gray-600 mt-4">
                                Please include a brief introduction and highlight your relevant experience in the message.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold">What we look for:</h3>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>Passion for travel and tourism</li>
                                <li>Strong communication skills</li>
                                <li>Customer-focused mindset</li>
                                <li>Ability to work in a fast-paced environment</li>
                                <li>Problem-solving abilities</li>
                                <li>Team player attitude</li>
                            </ul>
                        </div>
                        
                        <div className="mt-6 text-gray-600">
                            <p>Truedeal is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 