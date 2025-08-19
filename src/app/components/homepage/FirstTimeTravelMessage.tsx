'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AuroraText } from "../../../components/magicui/aurora-text";

function FirstTimeTravelMessageContent() {
    return (
        <div className="relative w-full overflow-hidden -mt-1 mb-0">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full py-4 px-6 shadow-sm bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50"
            >
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <motion.h3
                        className="text-xl font-bold font-poppins tracking-tight text-gray-800 sm:text-2xl mb-2"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        Are you a first time <AuroraText>traveller</AuroraText>?
                    </motion.h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-1 max-w-2xl">
                        We are on a mission to make travel more accessible and enjoyable for everyone and let upcoming generations experience the world.
                    </p>
                </div>
            </motion.div>
            {/* Banner directly below the message - aligned with Vietnam banner sizing
            <div className="container mx-auto px-4 mt-8">
                <div className="relative h-[200px] md:h-[180px] rounded-xl overflow-hidden">
                    <Image
                        src="/independence/test.png"
                        alt="Independence Day Banner"
                        fill
                        className="object-cover hidden md:block"
                        sizes="1280px"
                        priority
                    />
                    <Image
                        src="/independence/mobile.jpeg"
                        alt="Independence Day Banner Mobile"
                        fill
                        className="object-cover md:hidden"
                        sizes="640px"
                        priority
                    />
                </div>
            </div> */}
        </div>
    );
}

export default function FirstTimeTravelMessageWrapper() {
    return (
        <Suspense fallback={
            <div className="w-full -mt-1 py-4 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 flex justify-center items-center">
                <div className="animate-pulse text-blue-500 text-sm">Loading...</div>
            </div>
        }>
            <FirstTimeTravelMessageContent />
        </Suspense>
    );
}
