import { Suspense } from 'react';
import Image from 'next/image';
import SearchablePosts from './home/SearchablePosts'; // ✅ This is a client component

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 md:ml-20 sm: ml-5">
                            <h1 className="text-4xl !text-white md:text-5xl lg:text-6xl font-bold leading-tight">
                                Your Journey
                                <br />
                                Your Car
                                <br />
                                <span className="text-red-500">Your Way</span>
                            </h1>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                                Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod
                                aliquam. Amet ultricies neque augue consectetur pome phasellus.
                            </p>
                            <button className="bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center gap-2 font-semibold">
                                Subscribe 🚗
                            </button>
                        </div>

                        <div className="hidden lg:block mr-20">
                            <div className="grid grid-cols-2 gap-4 max-w-lg ml-auto">
                                <div className="space-y-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80"
                                        alt="Sports Car"
                                        width={400}
                                        height={400}
                                        className="object-cover rounded-lg shadow-lg"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80"
                                        alt="Luxury Car"
                                        width={400}
                                        height={400}
                                        className="object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="space-y-4 pt-8">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80"
                                        alt="Classic Car"
                                        width={400}
                                        height={400}
                                        className="object-cover rounded-lg shadow-lg"
                                    />
                                    <Image
                                        src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80"
                                        alt="Modern Car"
                                        width={400}
                                        height={400}
                                        className="object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">All Posts</h2>
                        <div className="w-20 h-1 bg-red-500 rounded"></div>
                    </div>

                    <Suspense fallback={<p className="text-center text-gray-500 py-12">Loading posts...</p>}>
                        <SearchablePosts />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}
