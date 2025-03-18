'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import { useEffect, Suspense } from 'react';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

function ThankYouContent() {
    const searchParams = useSearchParams();
    const packageName = searchParams.get('name');

    useEffect(() => {
        console.log('Thank you page loaded');
        console.log('Package name:', packageName);
    }, [packageName]);

    return (
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
                <svg 
                    className="w-10 h-10 text-[#017ae3]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                    />
                </svg>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
                {packageName && (
                    <h2 className="text-xl text-[#017ae3] font-semibold mb-4">
                        {decodeURIComponent(packageName)}
                    </h2>
                )}
                <p className="text-gray-600 mb-6">
                    We have successfully received your query and our travel expert will get in touch with you shortly to plan your next memorable trip!��
                </p>
                <p className="text-gray-600 mb-6">
                    You can contact us at <a href="tel:+919310271488" className="text-[#017ae3] font-semibold">+91 9310271488</a>
                </p>

                <div className="space-y-4">
                    <Link 
                        href="/"
                        className="inline-block w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                        Back To Home
                    </Link>
                    
                   
                </div>
            </motion.div>
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <div className={`min-h-screen bg-gray-50 flex items-center justify-center p-4 ${poppins.className}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <ThankYouContent />
            </Suspense>
        </div>
    );
} 