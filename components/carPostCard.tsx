'use client';

import Link from 'next/link';
import Image from "next/image";

interface CarPostCardProps {
    id: number;
    title: string;
    description: string;
    author: string;
    imageUrl: string;
}

const CarPostCard: React.FC<CarPostCardProps> = ({
                                                     id,
                                                     title,
                                                     description,
                                                     author,
                                                     imageUrl,
                                                 }) => {
    return (
        <Link href={`/posts/${id}`}>
            <article
                className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:h-72 sm:h-auto"
            >
                <div className="relative w-full md:w-80 h-48 md:h-full flex-shrink-0 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-200">
                            {title}
                        </h2>

                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {author.charAt(0).toUpperCase()}
                </span>
                            </div>
                            <div className="text-sm text-gray-600">
                                <span className="font-medium">{author}</span>
                                <span className="mx-1">•</span>
                                <span>2 minutes</span>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
            <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              Car Review
            </span>
                        <button
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                            Read full article
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default CarPostCard;
