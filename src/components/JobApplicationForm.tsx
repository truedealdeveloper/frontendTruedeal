'use client';

import React, { useState, useRef } from 'react';
import { X, Upload, User, Mail, Phone, Briefcase, FileText, Send } from 'lucide-react';
import { toast } from 'react-toastify';

interface JobApplicationFormProps {
    isOpen: boolean;
    onClose: () => void;
    position: string;
}

export default function JobApplicationForm({ isOpen, onClose, position }: JobApplicationFormProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: position,
        whyHireYou: '',
        bestWork: '',
    });
    const [resume, setResume] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const hangTightTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Special handling for phone number
        if (name === 'phone') {
            // Only allow digits and limit to 10 characters
            const phoneValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: phoneValue
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                const errorMsg = 'File size must be less than 5MB';
                setErrors(prev => ({
                    ...prev,
                    resume: errorMsg
                }));
                toast.error(errorMsg);
                return;
            }
            // Check file type
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(file.type)) {
                const errorMsg = 'Please upload a PDF or Word document';
                setErrors(prev => ({
                    ...prev,
                    resume: errorMsg
                }));
                toast.error(errorMsg);
                return;
            }
            setResume(file);
            setErrors(prev => ({
                ...prev,
                resume: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^[987]\d{9}$/.test(formData.phone)) newErrors.phone = 'Phone number must start with 9, 8, or 7 and be exactly 10 digits';
        if (!formData.position) newErrors.position = 'Position is required';
        if (!formData.whyHireYou.trim()) newErrors.whyHireYou = 'This field is required';
        if (!formData.bestWork.trim()) newErrors.bestWork = 'This field is required';
        if (!resume) newErrors.resume = 'Resume is required';

        setErrors(newErrors);

        // Show toast for first error found
        if (Object.keys(newErrors).length > 0) {
            const firstError = Object.values(newErrors)[0];
            toast.error(firstError);
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Set timeout to show "hang tight" message after 3 seconds
        hangTightTimeoutRef.current = setTimeout(() => {
            toast.info('Hang tight! We are saving your details in our database so that we can track you better 📄');
        }, 3000);

        try {
            const submitFormData = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                submitFormData.append(key, value);
            });
            if (resume) {
                submitFormData.append('resume', resume);
            }

            const response = await fetch('/api/job-application', {
                method: 'POST',
                body: submitFormData,
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                toast.success('Thank you for applying! We appreciate your time and will revert you soon. 🎉');
                // Reset form after successful submission
                setTimeout(() => {
                    onClose();
                    setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        position: position,
                        whyHireYou: '',
                        bestWork: '',
                    });
                    setResume(null);
                    setSubmitStatus('idle');
                }, 2000);
            } else {
                setSubmitStatus('error');
                toast.error(result.error || 'Failed to submit application. Please try again.');
                console.error('Error:', result.error);
            }
        } catch (error) {
            setSubmitStatus('error');
            toast.error('Network error. Please check your connection and try again.');
            console.error('Error submitting application:', error);
        } finally {
            setIsSubmitting(false);
            // Clear the hang tight timeout
            if (hangTightTimeoutRef.current) {
                clearTimeout(hangTightTimeoutRef.current);
                hangTightTimeoutRef.current = null;
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white p-6 rounded-t-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Apply for {position}</h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-200 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <p className="mt-2 opacity-90">Join our team at Truedeal!</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {submitStatus === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                            ✅ Application submitted successfully! We&apos;ll get back to you soon.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                            ❌ Failed to submit application. Please try again.
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <User className="w-4 h-4 inline mr-1" />
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Mail className="w-4 h-4 inline mr-1" />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Phone className="w-4 h-4 inline mr-1" />
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                maxLength={10}
                                pattern="[987][0-9]{9}"
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                                placeholder="9876543210 (without +91)"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Briefcase className="w-4 h-4 inline mr-1" />
                                Position Applying For *
                            </label>
                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.position ? 'border-red-500' : ''}`}
                            >
                                <option value="">Select a position</option>
                                <option value="Travel Operations Manager">Travel Operations Manager</option>
                                <option value="Sales Executive – Travel & Tourism">Sales Executive – Travel & Tourism</option>
                                <option value="Accountant">Accountant</option>
                            </select>
                            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            💼 Why should we hire you? *
                        </label>
                        <textarea
                            name="whyHireYou"
                            value={formData.whyHireYou}
                            onChange={handleInputChange}
                            rows={4}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.whyHireYou ? 'border-red-500' : ''}`}
                            placeholder="Tell us why you&apos;re the perfect fit for this role..."
                        />
                        {errors.whyHireYou && <p className="text-red-500 text-sm mt-1">{errors.whyHireYou}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            🏆 What&apos;s your best work? *
                        </label>
                        <textarea
                            name="bestWork"
                            value={formData.bestWork}
                            onChange={handleInputChange}
                            rows={4}
                            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.bestWork ? 'border-red-500' : ''}`}
                            placeholder="Describe your best work or achievement..."
                        />
                        {errors.bestWork && <p className="text-red-500 text-sm mt-1">{errors.bestWork}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FileText className="w-4 h-4 inline mr-1" />
                            Resume *
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                        <span>Upload your resume</span>
                                        <input
                                            type="file"
                                            className="sr-only"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                                {resume && (
                                    <p className="text-sm text-green-600 mt-2">
                                        ✅ {resume.name}
                                    </p>
                                )}
                            </div>
                        </div>
                        {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 mr-2" />
                                    Submit Application
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 