'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { CalendarIcon, MapPinIcon, PhoneIcon, UserIcon } from 'lucide-react';

interface BookingFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    destinationName: string;
    price?: number;
    dates?: string;
}

export function BookingFormModal({
    isOpen,
    onClose,
    destinationName,
}: BookingFormModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        email: '', // Keep for API but don't show in form
        start_date: '',
        no_of_days: '', // Keep for API but don't show in form
        no_of_adults: '', // Keep for API but don't show in form
        no_of_children: '', // Keep for API but don't show in form
        destination: destinationName,
        comments: '', // Keep for API but don't show in form
        origin_city: '',
        package_type: 'Standard'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Special handling for phone number
        if (name === 'phone_number') {
            // Only allow digits and limit to 10 characters
            const digitsOnly = value.replace(/\D/g, '');

            // If user is typing the first digit, only allow 6, 7, 8, 9
            if (digitsOnly.length === 1 && !['6', '7', '8', '9'].includes(digitsOnly[0])) {
                return; // Don't update state if first digit is invalid
            }

            // If the current number already starts with invalid digit, don't allow it
            if (digitsOnly.length > 0 && !['6', '7', '8', '9'].includes(digitsOnly[0])) {
                return; // Don't update state if first digit is invalid
            }

            if (digitsOnly.length <= 10) {
                setFormData({
                    ...formData,
                    [name]: digitsOnly
                });
            }
            return;
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        // Validate phone number - must be exactly 10 digits starting with 6, 7, 8, or 9
        const phonePattern = /^[6-9]\d{9}$/;
        if (!formData.phone_number || formData.phone_number.length !== 10 || !phonePattern.test(formData.phone_number)) {
            setSubmitError('Phone number must be exactly 10 digits starting with 6, 7, 8, or 9');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/trip-plan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit booking request');
            }

            console.log("Booking request submitted successfully");
            setIsSubmissionSuccessful(true);

            // Reset form
            setFormData({
                name: '',
                phone_number: '',
                email: '', // Keep for API but don't show in form
                start_date: '',
                no_of_days: '', // Keep for API but don't show in form
                no_of_adults: '', // Keep for API but don't show in form
                no_of_children: '', // Keep for API but don't show in form
                destination: destinationName,
                comments: '', // Keep for API but don't show in form
                origin_city: '',
                package_type: 'Standard'
            });

            setTimeout(() => {
                onClose();
                setIsSubmissionSuccessful(false);
                // Redirect to thank you page
                const encodedName = encodeURIComponent(destinationName);
                window.location.href = `/thankyou-query?name=${encodedName}`;
            }, 2000);

        } catch (error: unknown) {
            console.error("Error submitting booking request:", error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to submit booking request. Please try again.';
            setSubmitError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[450px] w-[95vw] bg-white max-h-[85vh] overflow-y-auto">
                <DialogHeader className="pb-2">
                    <DialogTitle className="text-lg font-bold text-gray-800">
                        Book {destinationName}
                    </DialogTitle>
                    <p className="text-xs text-gray-600 mt-1">
                        Fill in your details and we&apos;ll contact you with the best options
                    </p>
                </DialogHeader>

                {isSubmissionSuccessful && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 z-10 rounded-lg">
                        <div className="text-green-600 text-center p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xl font-semibold">Booking request submitted!</p>
                            <p className="text-sm text-gray-600 mt-2">We&apos;ll contact you shortly with the best deals</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Destination */}
                    <div className="space-y-2">
                        <Label htmlFor="destination" className="text-sm font-medium text-gray-700 flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-2 text-[#017ae3]" />
                            DESTINATION
                        </Label>
                        <Input
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            disabled
                            className="bg-gray-50 border-gray-200"
                        />
                    </div>

                    {/* Personal Details Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center">
                                <UserIcon className="h-4 w-4 mr-2 text-[#017ae3]" />
                                NAME <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="border-gray-200 focus:border-[#017ae3] focus:ring-[#017ae3]"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone_number" className="text-sm font-medium text-gray-700 flex items-center">
                                <PhoneIcon className="h-4 w-4 mr-2 text-[#017ae3]" />
                                PHONE <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500 text-sm font-medium">+91</span>
                                </div>
                                <Input
                                    id="phone_number"
                                    name="phone_number"
                                    type="tel"
                                    required
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    placeholder="9876543012"
                                    pattern="[6-9][0-9]{9}"
                                    title="Phone number must be 10 digits starting with 6, 7, 8, or 9"
                                    maxLength={10}
                                    className={`pl-12 border-2 transition-all duration-200 focus:border-[#017ae3] focus:ring-2 focus:ring-[#017ae3]/20 ${formData.phone_number && formData.phone_number.length === 10 && /^[6-9]\d{9}$/.test(formData.phone_number)
                                        ? 'border-green-400 bg-green-50 shadow-sm'
                                        : formData.phone_number && formData.phone_number.length > 0
                                            ? 'border-red-400 bg-red-50 shadow-sm'
                                            : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                />
                                {formData.phone_number && formData.phone_number.length === 10 && /^[6-9]\d{9}$/.test(formData.phone_number) && (
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            {formData.phone_number && formData.phone_number.length > 0 && formData.phone_number.length < 10 && (
                                <p className="text-xs text-amber-600 flex items-center mt-1">
                                    <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Please enter a valid 10 digit mobile number
                                </p>
                            )}
                            {formData.phone_number && formData.phone_number.length === 10 && /^[6-9]\d{9}$/.test(formData.phone_number) && (
                                <p className="text-xs text-green-600 flex items-center mt-1">
                                    <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Perfect! Valid mobile number
                                </p>
                            )}
                        </div>
                    </div>



                    {/* Travel Details Row */}
                    <div className="space-y-2">
                        <Label htmlFor="start_date" className="text-sm font-medium text-gray-700 flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-2 text-[#017ae3]" />
                            START DATE <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                            id="start_date"
                            name="start_date"
                            type="date"
                            required
                            value={formData.start_date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="border-gray-200 focus:border-[#017ae3] focus:ring-[#017ae3]"
                        />
                    </div>

                    {/* Origin City */}
                    <div className="space-y-2">
                        <Label htmlFor="origin_city" className="text-sm font-medium text-gray-700 flex items-center">
                            <MapPinIcon className="h-4 w-4 mr-2 text-[#017ae3]" />
                            FROM CITY
                        </Label>
                        <Input
                            id="origin_city"
                            name="origin_city"
                            type="text"
                            value={formData.origin_city}
                            onChange={handleChange}
                            placeholder="Departure city"
                            className="border-gray-200 focus:border-[#017ae3] focus:ring-[#017ae3]"
                        />
                    </div>


                    {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                            {submitError}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white hover:from-[#00f6ff] hover:to-[#017ae3] transition-all duration-300 py-2.5 text-sm md:text-base font-medium"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </div>
                        ) : (
                            'Submit Booking Request'
                        )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-2">
                        Our team will contact you with the best package options ✨❤️
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
}

