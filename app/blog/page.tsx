import Link from 'next/link';
import {Car, MousePointer2, MoveRight} from "lucide-react";
import {RightArrow} from "next/dist/client/components/react-dev-overlay/ui/icons/right-arrow";

const LandingPage = () => {
    return (
        <main className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-gray-900 py-20 text-center relative">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0)" }}
                ></div>
                <div className="relative z-10 flex flex-col justify-center items-center w-full gap-4">
                    <h1 className="text-5xl font-extrabold mb-4 !text-white">Your Journey<br />Your Car</h1>
                    {/*<p className="text-lg max-w-2xl mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum vel suspendisse quam. Amet uttices neque eu lorem consectetur mollitia diam semper diam eget.</p>*/}
                    <button className="bg-red-500 text-white text-md px-6 py-2 rounded-full hover:bg-red-600 flex items-center justify-center gap-2">
                        Subscribe
                        <MousePointer2 className="w-5 h-5 rotate-90" />
                    </button>                </div>
            </section>

            {/* Latest and Trending Blogs Section */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Latest</h2>
                        <div className="space-y-6">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Latest Blog" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <p className="text-sm text-gray-500">By John Doe | March 10, 2024</p>
                                    <h3 className="text-xl font-bold mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                                    <p className="text-gray-600 mt-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Trending Blogs</h2>
                        <div className="space-y-4">
                            <div className="bg-white shadow-md rounded-lg p-4">
                                <p className="text-sm text-gray-500">By John Doe | August 21, 2023</p>
                                <h3 className="text-lg font-bold mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                                <p className="text-gray-600 mt-2">Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                            <div className="bg-red-100 shadow-md rounded-lg p-4">
                                <p className="text-sm text-gray-500">By John Doe | July 1, 2023</p>
                                <h3 className="text-lg font-bold mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                                <p className="text-gray-600 mt-2">Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-4">
                                <p className="text-sm text-gray-500">By John Doe | June 15, 2023</p>
                                <h3 className="text-lg font-bold mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                                <p className="text-gray-600 mt-2">Duis aute irure dolor in reprehenderit in voluptate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Technology Section */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold mb-4">New Technology</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 1" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">A Review of Cars with Advanced Infotainment Systems</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 2" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">A Deep Dive Into Sports Cars</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 3" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Reviewing Cars With the Best Resale Value</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 4" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Reviewing Cars With the Best Resale Value</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Category Section */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold mb-4">All Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Car Reviews" className="w-16 h-16 mx-auto mb-2 rounded-full" />
                        <h3 className="font-semibold">Car Reviews</h3>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Maintenance Tips" className="w-16 h-16 mx-auto mb-2 rounded-full" />
                        <h3 className="font-semibold">Maintenance Tips</h3>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Car Modifications" className="w-16 h-16 mx-auto mb-2 rounded-full" />
                        <h3 className="font-semibold">Car Modifications</h3>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Driving Tips" className="w-16 h-16 mx-auto mb-2 rounded-full" />
                        <h3 className="font-semibold">Driving Tips</h3>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-900 text-gray-300 py-16 text-center">
                <h2 className="text-2xl font-semibold mb-6 !text-white">TESTIMONIALS<br />What people say about our blog</h2>
                <p className="text-lg max-w-xl mx-auto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex justify-center items-center space-x-4">
                    <img src="https://i.pravatar.cc/80" alt="Jonathan Vallen" className="w-16 h-16 rounded-full" />
                    <div>
                        <p className="font-semibold">Jonathan Vallen</p>
                        <p className="text-sm">New York, USA</p>
                    </div>
                    <button className="bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600">
                        <MoveRight />
                    </button>
                </div>
            </section>

            {/* Additional New Technology Section */}
            <section className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold mb-4">New Technology</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 1" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">A Review of Cars with Advanced Infotainment Systems</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 2" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">A Deep Dive Into Sports Cars</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 3" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Reviewing Cars With the Best Resale Value</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt="Tech 4" className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Reviewing Cars With the Best Resale Value</h3>
                            <p className="text-sm text-gray-500">Dasteen | Jan 10, 2024 • 3 Min Read</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;