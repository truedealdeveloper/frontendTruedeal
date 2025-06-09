'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const TripPlanPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
    start_date: '',
    no_of_days: '',
    no_of_adults: '',
    no_of_children: '',
    destination: '',
    comments: '',
    origin_city: '',
    package_type: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Bali images array from the data
  const baliImages = [
    "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/1.webp",
    "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/2.webp",
    "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/3.webp",
    "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/4.webp",
    "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/5.webp",
    "/UGCImages/bali/BALI DELIGHT PACKAGE 2/HORIZONTAL/6.webp",
    "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/1.webp",
    "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/2.webp",
    "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/3.webp",
    "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/4.webp",
    "/UGCImages/bali/BALI LEMBONGAN PACKAGE/horizontal/5.webp",
    "/UGCImages/bali/extra/Tanah Lot Temple.jpg",
    "/UGCImages/bali/extra/Tegalalang Rice Terraces.jpg",
    "/UGCImages/bali/extra/monkeyForest.jpg",
    "/UGCImages/bali/extra/mountBatur.jpg",
    "/UGCImages/bali/extra/Uluwatu.jpg"
  ];

  // Show popup every 30 seconds, but respect user's preference
  useEffect(() => {
    const checkAndShowPopup = () => {
      const lastShown = sessionStorage.getItem('tripPopupLastShown');
      const now = Date.now();
      
      // Show popup if it hasn't been shown in the last 30 seconds
      if (!lastShown || now - parseInt(lastShown) > 30000) {
        setIsVisible(true);
        sessionStorage.setItem('tripPopupLastShown', now.toString());
      }
    };

    // Initial delay of 5 seconds, then every 30 seconds
    const initialTimeout = setTimeout(checkAndShowPopup, 5000);
    const interval = setInterval(checkAndShowPopup, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Cycle through images every 3 seconds when popup is visible
  useEffect(() => {
    if (isVisible && baliImages.length > 0) {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % baliImages.length);
      }, 3000);

      return () => clearInterval(imageInterval);
    }
  }, [isVisible, baliImages.length]);

  const handleClose = () => {
    setIsVisible(false);
    setMessage('');
    setError('');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await axios.post('/api/trip-plan', formData);
      
      if (response.data.message) {
        setMessage(response.data.message);
        // Reset form only on success
        setFormData({
          name: '',
          phone_number: '',
          email: '',
          start_date: '',
          no_of_days: '',
          no_of_adults: '',
          no_of_children: '',
          destination: '',
          comments: '',
          origin_city: '',
          package_type: ''
        });
        
        // Close popup after successful submission
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Form submission error:', {
        status: error.response?.status,
        data: error.response?.data
      });
      
      const errorMessage = error.response?.data?.error === 'MISSING_TOKEN'
        ? 'Service is temporarily unavailable. Please try again later or contact support.'
        : error.response?.data?.message || 'Failed to submit form. Please try again later.';
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl h-[95vh] sm:max-h-[90vh] overflow-hidden transform animate-slideUp border border-gray-100">
        <div className="flex flex-col lg:flex-row h-full relative overflow-hidden">
          {/* Image Section */}
          <div className="w-full lg:w-3/5 relative overflow-hidden h-48 sm:h-56 lg:h-full">
            <div className="relative w-full h-full">
              <Image 
                src={baliImages[currentImageIndex]} 
                alt="Bali Experience" 
                fill
                className="object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B5C3]/40 via-transparent to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-2 text-white text-xs sm:text-sm font-medium animate-pulse">
                ✨ Limited Time Offer
              </div>
              
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {baliImages.slice(0, 5).map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex % 5 ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-2/5 bg-gradient-to-br from-white via-gray-50/50 to-white relative flex-1 overflow-y-auto">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#00B5C3]/10 to-transparent rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#00B5C3]/5 to-transparent rounded-full translate-y-8 -translate-x-8 sm:translate-y-12 sm:-translate-x-12"></div>
            
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col">
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00B5C3] to-[#009AAF] rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-xl sm:text-2xl">🌴</span>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#00B5C3] to-[#009AAF] bg-clip-text text-transparent">
                      Special Bali Offer!
                    </h2>
                    <div className="w-full h-1 bg-gradient-to-r from-[#00B5C3] to-[#009AAF] rounded-full mt-1"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-medium">Don't miss out! Get your dream vacation planned 🎉</p>
              </div>

              {message && <div className="bg-green-50 text-green-700 p-2 sm:p-3 rounded-md mb-3 sm:mb-4 text-xs sm:text-sm">{message}</div>}
              {error && <div className="bg-red-50 text-red-700 p-2 sm:p-3 rounded-md mb-3 sm:mb-4 text-xs sm:text-sm">{error}</div>}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1">
                <div className="space-y-1">
                  <label htmlFor="popup-name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <input
                      id="popup-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B5C3]/50 focus:border-[#00B5C3] text-xs sm:text-sm transition-all duration-300 group-hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#00B5C3] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="popup-phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <input
                      id="popup-phone"
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                      placeholder="Your 10 digit number"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B5C3]/50 focus:border-[#00B5C3] text-xs sm:text-sm transition-all duration-300 group-hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#00B5C3] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="popup-destination" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <input
                      id="popup-destination"
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      placeholder="Where to?"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B5C3]/50 focus:border-[#00B5C3] text-xs sm:text-sm transition-all duration-300 group-hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-focus-within:text-[#00B5C3] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <label htmlFor="popup-days" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Days <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="popup-days"
                      type="number"
                      name="no_of_days"
                      value={formData.no_of_days}
                      onChange={handleChange}
                      required
                      min="1"
                      placeholder="Days"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B5C3]/50 focus:border-[#00B5C3] text-xs sm:text-sm transition-all duration-300 hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="popup-adults" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Adults <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="popup-adults"
                      type="number"
                      name="no_of_adults"
                      value={formData.no_of_adults}
                      onChange={handleChange}
                      required
                      min="1"
                      placeholder="Adults"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00B5C3]/50 focus:border-[#00B5C3] text-xs sm:text-sm transition-all duration-300 hover:border-gray-300 bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 pt-2 mt-auto">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Maybe Later
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-[#00B5C3] to-[#009AAF] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl hover:from-[#009AAF] hover:to-[#00B5C3] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-1 sm:gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="hidden sm:inline">Submitting...</span>
                        <span className="sm:hidden">...</span>
                      </span>
                    ) : (
                      '✨ Get Quote'
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs text-gray-500 font-medium">
                  🎉 Limited time offer - Book now!
                </p>
                <div className="flex items-center justify-center gap-1 mt-1 sm:mt-2">
                  <span className="text-xs text-gray-400">Trusted by</span>
                  <span className="text-xs font-semibold text-[#00B5C3]">10,000+</span>
                  <span className="text-xs text-gray-400">happy travelers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanPopup; 