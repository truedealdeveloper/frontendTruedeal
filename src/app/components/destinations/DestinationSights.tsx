'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Sight {
    name: string;
    location: string;
    description: string;
    image: string;
}

interface DestinationSightsProps {
    sights: Sight[];
}

export const DestinationSights = ({ sights }: DestinationSightsProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sights.map((sight, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="relative h-48">
                        <Image
                            src={sight.image}
                            alt={sight.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                                console.error(`Error loading image: ${sight.image}`);
                                // Optionally set a fallback image
                                (e.target as HTMLImageElement).src = '/fallback-image.jpg';
                            }}
                            // Add priority to the first image
                            priority={index === 0}
                            // Add a placeholder blur while loading
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIiYoLTEwLS4xKSEoMC0vMSw5LjI1OjU4OT/////2wBDAR"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{sight.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{sight.location}</p>
                        <p className="text-sm text-gray-600">{sight.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}; 