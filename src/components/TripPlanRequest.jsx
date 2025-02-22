'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const TripPlanRequest = () => {
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
      }
    } catch (error) {
      console.error('Form submission error:', {
        status: error.response?.status,
        data: error.response?.data
      });
      
      // More specific error message
      const errorMessage = error.response?.data?.error === 'MISSING_TOKEN'
        ? 'Service is temporarily unavailable. Please try again later or contact support.'
        : error.response?.data?.message || 'Failed to submit form. Please try again later.';
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-gray-50">
      {/* Background Image Container */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-3/5 relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative w-full aspect-[16/9]">
            <Image 
              src="/UGCImages/groupManali.png" 
              alt="Truedeal Team" 
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B5C3]/30 to-transparent"></div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/5">
          <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">Ready For Your Next Adventure?</h2>
            <p className="text-gray-600 mb-6">Allow Us to Call You Back!</p>

            {message && <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4 text-sm">{message}</div>}
            {error && <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Smith"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5C3] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                    placeholder="Enter your 10 digit number"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5C3] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5C3] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Destination <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    placeholder="Where to?"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5C3] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Days <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="no_of_days"
                    value={formData.no_of_days}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Duration"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5C3] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Adults <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="no_of_adults"
                    value={formData.no_of_adults}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Adults count"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B5C3] focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00B5C3] text-white font-medium px-6 py-3 rounded-md hover:bg-[#009AAF] transition-colors duration-200 shadow-lg"
              >
                {loading ? 'Submitting...' : 'Plan My Trip'}
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-500 text-center">
              Trusted by thousands of happy travelers
            </p>
          </div>
        </div>
      </div>

      {/* Optional: Add a decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </div>
  );
};

export default TripPlanRequest; 