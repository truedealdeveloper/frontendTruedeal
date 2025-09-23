'use client'

import { useState } from 'react'
import Image from 'next/image'
import { StarIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { FC } from 'react'

type MediaItem = {
    type: 'image' | 'video'
    url: string
    thumbnail?: string
}

type Review = {
    id: string
    author: string
    rating: number
    date: string
    title?: string
    content: string
    media: MediaItem[]
    booked: string
}

const allReviews: Review[] = [
    {
        id: '39',
        author: 'Saumitra saraf',
        rating: 5.0,
        date: 'April 2025',
        content: `
        Our Japan trip with Truedeal was a perfect blend of tradition and modernity. From exploring ancient temples to experiencing vibrant city life, every moment was beautifully planned and unforgettable.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/26/1 (3).jpeg' },
            { type: 'image', url: '/GoogleReviews/26/1 (2).jpeg' },
            { type: 'image', url: '/GoogleReviews/26/1 (1).jpeg' },
            { type: 'video', url: '/GoogleReviews/26/1 (4).mp4' },


        ],
        booked: 'Japan'
    },
    {
        id: '40',
        author: ' Mr and Mrs Sourabh Jain Bhatt',
        rating: 5.0,
        date: 'April 2025',
        content: `
       Our Japan trip with Truedeal was a seamless and culturally enriching experience. From cherry blossoms to bullet trains, every detail was expertly managed, making the journey truly unforgettable.
`,
        media: [
            { type: 'image', url: '/GoogleReviews/27/1 (1).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (2).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (3).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (4).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (5).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (6).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (7).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (8).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (9).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (10).jpeg' },
            { type: 'image', url: '/GoogleReviews/27/1 (11).jpeg' },
        ],
        booked: 'Japan'
    },
]

const japanReviews = allReviews.filter(r => r.booked.toLowerCase().includes('japan'))

export const JapanReviews: FC = () => {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(-1)
    const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0)

    const openModal = (reviewIndex: number, mediaIndex: number) => {
        setCurrentReviewIndex(reviewIndex)
        setSelectedMediaIndex(mediaIndex)
    }

    const closeModal = () => setSelectedMediaIndex(-1)

    const nextMedia = () => {
        const total = japanReviews[currentReviewIndex].media.length
        setSelectedMediaIndex((p) => (p + 1) % total)
    }

    const prevMedia = () => {
        const total = japanReviews[currentReviewIndex].media.length
        setSelectedMediaIndex((p) => (p - 1 + total) % total)
    }

    const MediaPreview = ({ item, onClick }: { item: MediaItem; onClick: () => void }) => {
        if (item.type === 'video') {
            return (
                <div className="relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100 group" onClick={onClick}>
                    <video src={item.url} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                        <div className="bg-white/90 rounded-full p-3 transform group-hover:scale-110 transition-transform duration-200">
                            <PlayIcon className="h-6 w-6 text-gray-800" />
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group" onClick={onClick}>
                <Image
                    src={item.url}
                    alt="Review media"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        )
    }

    const MediaModal = () => {
        if (selectedMediaIndex === -1) return null
        const currentMedia = japanReviews[currentReviewIndex].media[selectedMediaIndex]
        const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
            const v = e.target as HTMLVideoElement
            v.muted = !v.muted
        }
        return (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={closeModal}>
                    <XMarkIcon className="h-8 w-8" />
                </button>
                <button className="absolute left-4 text-white hover:text-gray-300" onClick={prevMedia}>
                    <ChevronLeftIcon className="h-12 w-12" />
                </button>
                <div className="relative h-[80vh] w-[80vw]">
                    {currentMedia.type === 'video' ? (
                        <video src={currentMedia.url} controls className="h-full w-full cursor-pointer" autoPlay muted loop onClick={handleVideoClick} playsInline />
                    ) : (
                        <Image src={currentMedia.url} alt={`Review media ${selectedMediaIndex + 1}`} fill className="object-contain" />
                    )}
                </div>
                <button className="absolute right-4 text-white hover:text-gray-300" onClick={nextMedia}>
                    <ChevronRightIcon className="h-12 w-12" />
                </button>
                <div className="absolute bottom-4 text-white text-center w-full">
                    {selectedMediaIndex + 1} / {japanReviews[currentReviewIndex].media.length}
                </div>
            </div>
        )
    }

    if (japanReviews.length === 0) return null

    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017ae3] to-[#00f6ff]">
                            What Our Travelers Say
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real experiences from real travelers who discovered Japan with us
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="h-6 w-6" />
                            ))}
                        </div>
                        <span className="text-lg font-semibold text-gray-700 ml-2">
                            4.9/5 from {japanReviews.length} reviews
                        </span>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {japanReviews.map((review, reviewIndex) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: reviewIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="p-6 sm:p-8">
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="relative">
                                        <div className="h-14 w-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center ring-4 ring-blue-50">
                                            {review.media.length > 0 ? (
                                                <Image
                                                    src={review.media[0].url}
                                                    alt={review.author}
                                                    width={56}
                                                    height={56}
                                                    className="object-cover w-full h-full"
                                                />
                                            ) : (
                                                <span className="text-white font-bold text-lg">
                                                    {review.author.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-xl text-gray-900 mb-1">{review.author}</h3>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        className={`h-4 w-4 ${i < Math.floor(review.rating)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-200'
                                                            }`}
                                                    />
                                                ))}
                                                <span className="ml-2 text-sm font-semibold text-gray-700">
                                                    {review.rating.toFixed(1)}
                                                </span>
                                            </div>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-sm text-gray-600">{review.date}</span>
                                        </div>
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {review.booked}
                                        </div>
                                    </div>
                                </div>

                                {/* Review Content */}
                                <div className="mb-6">
                                    <blockquote className="text-gray-800 text-base leading-relaxed italic relative">
                                        <span className="text-4xl text-blue-200 absolute -top-2 -left-2">&quot;</span>
                                        <p className="relative z-10 pl-6">{review.content}</p>
                                    </blockquote>
                                </div>

                                {/* Media Gallery */}
                                {review.media.length > 0 && (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                </svg>
                                                Trip Photos ({review.media.length})
                                            </h4>
                                        </div>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                            {review.media.slice(0, 8).map((item, mediaIndex) => (
                                                <div key={mediaIndex} className="relative">
                                                    <MediaPreview
                                                        item={item}
                                                        onClick={() => openModal(reviewIndex, mediaIndex)}
                                                    />
                                                    {mediaIndex === 7 && review.media.length > 8 && (
                                                        <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => openModal(reviewIndex, mediaIndex)}>
                                                            <span className="text-white font-bold text-lg">+{review.media.length - 8}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Reviews Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/reviews">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#017ae3] to-[#00f6ff] hover:from-[#00f6ff] hover:to-[#017ae3] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            View All Reviews
                        </Button>
                    </Link>
                    <p className="text-sm text-gray-600 mt-3">
                        See what our 1000+ happy travelers say about their experiences
                    </p>
                </motion.div>

                <MediaModal />
            </div>
        </div>
    )
}

