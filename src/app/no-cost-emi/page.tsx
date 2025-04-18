'use client'

import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const NoCostEMIPage = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <div className="bg-white py-4 sm:py-8">
            <div className="relative">
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src={isMobile ? "/mobile/mobileEMI.png" : "/mobile/emi.jpg"}
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