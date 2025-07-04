import React from 'react';
import Image from "next/image";

interface Author {
    name: string;
    bio: string;
    profileImage?: string;
    expertise: string[];
    yearsOfExperience: number;
}

interface BlogStats {
    articlesPublished: number;
    carsReviewed: number;
    yearsRunning: number;
}

export default function AboutPage() {
    const author: Author = {
        name: "Alex Rodriguez",
        bio: "Passionate automotive enthusiast with over a decade of experience in the industry. Started as a mechanic and evolved into automotive journalism, combining technical expertise with engaging storytelling.",
        profileImage: "/images/author-profile.jpg",
        expertise: ["Car Reviews", "Automotive News", "Technical Analysis", "Industry Trends"],
        yearsOfExperience: 12
    };

    const blogStats: BlogStats = {
        articlesPublished: 450,
        carsReviewed: 180,
        yearsRunning: 5
    };

    return (
        <div className="bg-gray-50 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-screen h-screen text-black overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Your Journey<br/>
                                Your Car<br/>
                                Your Way
                            </h1>
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg">
                                Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod
                                aliquam.
                                Ut pharetra sit amet aliquam id diam maecenas ultricies mi eget. Amet vestibulum
                                lorem montes varius amet vestibulum tellus facilisis consectetur pretium.
                            </p>
                            <button
                                className="inline-flex items-center bg-red-500 hover:bg-red-600 transition-colors text-white px-6 py-3 rounded-lg font-semibold">
                                Subscribe
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={2}
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z"/>
                                </svg>
                            </button>
                        </div>

                        {/* Right Car Images Grid */}
                        <div className="relative mr-4">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Top Left */}
                                <div className="aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=400&fit=crop"
                                        alt="Car"
                                        width={400}
                                        height={400}
                                        className="object-cover"
                                    />
                                </div>
                                {/* Top Right */}
                                <div className="aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop"
                                        alt="Car"
                                        width={400}
                                        height={400}
                                        className="object-cover"
                                    />
                                </div>
                                {/* Bottom Left */}
                                <div className="aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=400&fit=crop"
                                        alt="Car"
                                        width={400}
                                        height={400}
                                        className="object-cover"
                                    />
                                </div>
                                {/* Bottom Right */}
                                <div className="aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=400&fit=crop"
                                        alt="Car"
                                        width={400}
                                        height={400}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"/>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
                {/* Mission Section */}
                <section className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        Our Mission
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p>
                            Welcome to our automotive world! This blog was created with a simple yet powerful mission:
                            to be your trusted source for everything automotive. Whether you're a seasoned car
                            enthusiast,
                            a first-time buyer, or someone who simply appreciates the art of automotive engineering,
                            we're here to inform, inspire, and engage.
                        </p>
                        <p>
                            We cover a wide spectrum of automotive topics, from in-depth vehicle reviews and comparisons
                            to breaking industry news and emerging trends. Our content is designed to help you make
                            informed decisions, whether you're looking to purchase your next vehicle, understand the
                            latest automotive technologies, or simply stay current with what's happening in the car
                            world.
                        </p>
                        <p>
                            Every article is crafted with care, combining technical expertise with accessible language
                            to ensure that complex automotive topics are understandable for everyone. We believe that
                            great automotive journalism should be both informative and engaging.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Impact</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                                {blogStats.articlesPublished}+
                            </div>
                            <div className="text-lg font-semibold text-gray-600">Articles Published</div>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                                {blogStats.carsReviewed}+
                            </div>
                            <div className="text-lg font-semibold text-gray-600">Cars Reviewed</div>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                                {blogStats.yearsRunning}+
                            </div>
                            <div className="text-lg font-semibold text-gray-600">Years Running</div>
                        </div>
                    </div>
                </section>

                {/* Author Section */}
                <section className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Meet the Author
                    </h2>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                                    alt={`Profile picture of ${author.name}`}
                                    width={400}
                                    height={400}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex-1 text-center lg:text-left space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {author.name}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {author.bio}
                            </p>
                            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
                                {author.yearsOfExperience} Years of Experience
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Areas of Expertise
                                </h4>
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {author.expertise.map((skill, index) => (
                                        <span key={index}
                                              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Cover Section */}
                <section className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        What We Cover
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-500 text-xl">🚗</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Car Reviews</h3>
                                    <p className="text-gray-600">
                                        Comprehensive reviews of the latest vehicles, from budget-friendly options
                                        to luxury supercars, with detailed analysis of performance, features, and value.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-500 text-xl">📰</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry News</h3>
                                    <p className="text-gray-600">
                                        Stay up-to-date with the latest automotive industry developments,
                                        manufacturer announcements, and market trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-500 text-xl">🔧</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Insights</h3>
                                    <p className="text-gray-600">
                                        Deep dives into automotive technology, engineering innovations,
                                        and explanations of complex systems in accessible language.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-500 text-xl">💡</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Buying Guides</h3>
                                    <p className="text-gray-600">
                                        Expert advice to help you make informed decisions when purchasing
                                        your next vehicle, including comparisons and recommendations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}