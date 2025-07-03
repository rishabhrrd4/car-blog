'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CarPostCardProps {
    id: number;
    title: string;
    description: string;
    author: string;
    imageUrl: string;
    // date: string;
}

const CarPostCard: React.FC<CarPostCardProps> = ({
                                                     id,
                                                     title,
                                                     description,
                                                     author,
                                                     imageUrl,
                                                     // date,
                                                 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={`/posts/${id}`}>
            <div
                className="relative rounded-2xl shadow-lg overflow-hidden bg-white cursor-pointer flex flex-col h-[420px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-gray-100"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Container with Gradient Overlay */}
                <div className="relative w-full h-52">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                        onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Car+Image';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content Container */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight">{title}</h2>
                            {/*<span className="text-xs text-gray-500">{date}</span>*/}
                        </div>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3 leading-relaxed">{description}</p>
                    </div>

                    {/* Author and CTA */}
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                By {author}
                            </span>
                        </div>
                        <button
                            className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center gap-1"
                        >
                            Read More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Hover Border Effect */}
                <div
                    className={`absolute inset-0 border-2 border-blue-500 rounded-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </Link>
    );
};

export default CarPostCard;