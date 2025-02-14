'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Dish {
    name: string;
    description: string;
    image: string;
}

interface LocalCuisineProps {
    dishes: Dish[];
}

export const LocalCuisine = ({ dishes }: LocalCuisineProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((dish, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="relative h-48">
                        <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                        <p className="text-sm text-gray-600">{dish.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}; 