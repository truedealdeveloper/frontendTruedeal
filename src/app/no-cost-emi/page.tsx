'use client'

import React from 'react'
import Image from 'next/image'

const NoCostEMIPage = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-4 sm:py-8">
            <div className="relative overflow-hidden">
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/mobile/emi.jpg"
                                alt="EMI Offers"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoCostEMIPage