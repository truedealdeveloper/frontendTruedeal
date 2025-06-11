import React from 'react';

const TenYearSale = () => {
    return (
        <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white py-3 px-6 shadow-lg w-full text-center mt-2">
            <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">🎉</span>
                <div>
                    <h3 className="text-lg font-bold">10 Years of TrueDeal!</h3>
                    <p className="text-sm">
                        Celebrate with <span className="font-bold text-yellow-300">10% OFF</span> on all bookings
                    </p>
                </div>
                <span className="text-2xl">🎉</span>
            </div>
        </div>
    );
};

export default TenYearSale;
