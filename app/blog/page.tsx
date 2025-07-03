'use client';

import React, {useState} from 'react';
import {ChevronLeft, ChevronRight, Send} from 'lucide-react';

const CarBlogHomepage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Jonathan Vallem",
            location: "New York",
        },
        {
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            name: "Sarah Johnson",
            location: "California",
        },
    ];

    const trendingBlogs = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            author: "John Doe",
            date: "Aug 25, 2023",
            featured: true
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            author: "Jane Smith",
            date: "Aug 23, 2023",
            featured: false
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            author: "Mike Wilson",
            date: "Aug 22, 2023",
            featured: false
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            author: "Sarah Davis",
            date: "Aug 20, 2023",
            featured: false
        },
    ];

    const newTechBlogs = [
        {
            title: "A Review Of Cars With Advanced Infotainment Systems",
            author: "Jharkson",
            date: "July 2024",
            readTime: "5 Min Read",
            image: "/images/Rectangle 4.png"
        },
        {
            title: "A Deep Dive Into Sports Cars",
            author: "Jharkson",
            date: "July 2024",
            readTime: "5 Min Read",
            image: "/images/Rectangle 4 (1).png"
        },
        {
            title: "Reviewing Cars With The Best Resale Value",
            author: "Jharkson",
            date: "July 2024",
            readTime: "5 Min Read",
            image: "/images/Rectangle 4 (2).png"
        },
        {
            title: "Reviewing Cars With The Best Resale Value",
            author: "Jharkson",
            date: "July 2024",
            readTime: "5 Min Read",
            image: "/images/Rectangle 4 (3).png"
        },
    ];

    const categories = [
        {title: "Car Reviews", description: "Reviews of various car models.", icon: "/images/Ellipse 82.png"},
        {title: "Maintenance Tips", description: "Tips to maintain your car better.", icon: "/images/Ellipse 82 (1).png"},
        {title: "Car Modifications", description: "All about tuning and mods.", icon: "/images/Ellipse 82 (2).png"},
        {title: "Driving Tips", description: "Become a safer and smarter driver.", icon: "/images/Ellipse 82 (3).png"},
    ];

    const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="w-full bg-cover bg-center bg-no-repeat py-24"
                style={{
                    backgroundImage: "url('/images/car-img.jpg')",
                }}
            >
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-left text-white max-w-2xl">
                        <h1 className="text-5xl !text-white sm:text-6xl font-bold leading-tight mb-6">
                            Your Journey<br/>Your Car<br/>Your Way
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                        </p>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition">
                            Subscribe <Send size={18}/>
                        </button>
                    </div>
                </div>
            </section>

            {/* Blog Section: Latest & Trending */}
            <section className="w-full py-16 bg-gray-50">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Latest */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8">Latest</h2>
                            <div className="bg-white rounded-lg shadow-md">
                                <div className="h-64 bg-cover bg-center"
                                     style={{backgroundImage: "url('/images/Rectangle 5.png')"}}></div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">By John Doe • March 17, 2024</p>
                                    <h3 className="text-xl font-bold mb-3">Lorem ipsum dolor sit amet, consectetur.</h3>
                                    <p className="text-gray-600 mb-6">Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore.</p>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold">Read
                                        more
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Trending */}
                        <div>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold">Trending Blogs</h2>
                                <a href="#" className="text-red-500 font-semibold">See all</a>
                            </div>
                            <div className="space-y-4">
                                {trendingBlogs.map((blog, index) => (
                                    <div key={index}
                                         className={`p-4 rounded-lg ${blog.featured ? 'bg-red-500 text-white' : 'bg-white shadow-sm hover:shadow-md transition'}`}>
                                        <p className="text-sm mb-2">By {blog.author} • {blog.date}</p>
                                        <h3 className={`font-semibold ${blog.featured ? 'text-white' : 'text-gray-800'}`}>{blog.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Tech Section */}
            <section className="w-full py-16">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">New Technology</h2>
                        <a href="#" className="text-red-500 font-semibold">See All</a>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="flex gap-6 pb-4 min-w-max">
                            {newTechBlogs.map((blog, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md flex-shrink-0 w-80">
                                    <div className="h-48 bg-cover bg-center"
                                         style={{backgroundImage: `url('${blog.image}' )`}}></div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800 mb-2">{blog.title}</h3>
                                        <p className="text-sm text-gray-500">{blog.author} • {blog.date} • {blog.readTime}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="w-full py-16 bg-gray-50">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-8">All Categories</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                                <div
                                    className="w-16 h-16 bg-gray-200 rounded-full mb-4 bg-cover bg-center bg-no-repeat"
                                    style={{backgroundImage: `url('${cat.icon}')`}}
                                ></div>
                                <h3 className="font-semibold text-gray-800 mb-2">{cat.title}</h3>
                                <p className="text-sm text-gray-600">{cat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="w-full py-16 bg-white text-white">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl !text-black font-bold mb-4">What people say about our blog</h2>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt.</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-8">
                            <p className="text-lg mb-6">{testimonials[currentTestimonial].text}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].location}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={prevTestimonial}
                                            className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center">
                                        <ChevronLeft size={20}/>
                                    </button>
                                    <button onClick={nextTestimonial}
                                            className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center">
                                        <ChevronRight size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarBlogHomepage;