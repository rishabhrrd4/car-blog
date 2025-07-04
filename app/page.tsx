import CarPostCard from "@/components/carPostCard";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface User {
    id: number;
    name: string;
}

export default async function HomePage() {
    const imageUrls = [
        "https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1470&auto=format&fit=crop",
    ];

    try {
        const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
        const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!postsRes.ok || !usersRes.ok) throw new Error("Failed to fetch data");

        const posts: Post[] = await postsRes.json();
        const users: User[] = await usersRes.json();

        const blogCards = posts.slice(0, 10).map((post, index) => {
            const author = users.find((user) => user.id === post.userId)?.name || "Unknown";
            const imageUrl = imageUrls[index % imageUrls.length] + "?w=600&h=400&auto=format&fit=crop";

            return (
                <CarPostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.body.slice(0, 100) + "..."}
                    author={author}
                    imageUrl={imageUrl}
                />
            );
        });

        // to check if I have no posts to display
        // blogCards.length = 0;

        return (
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-slate-900 text-white py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-8 ml-20">
                                <h1 className="text-4xl !text-white md:text-5xl lg:text-6xl font-bold leading-tight">
                                    Your Journey<br />
                                    Your Car<br />
                                    <span className="text-red-500">Your Way</span>
                                </h1>
                                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                                    Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum vel euismod aliquam. Amet ultricies neque augue consectetur pome phasellus. Ullamcorper lorem montes varius ornare vestibulum tellus facilisis consequat pretium.
                                </p>
                                <button className="bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center gap-2 font-semibold">
                                    Subscribe 🚗
                                </button>
                            </div>

                            {/* Right Image Grid */}
                            <div className="hidden lg:block mr-20">
                                <div className="grid grid-cols-2 gap-4 max-w-lg ml-auto">
                                    <div className="space-y-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&h=280&auto=format&fit=crop"
                                            alt="Sports Car"
                                            className="w-full h-48 object-cover rounded-lg shadow-lg"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&h=320&auto=format&fit=crop"
                                            alt="Luxury Car"
                                            className="w-full h-56 object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                    <div className="space-y-4 pt-8">
                                        <img
                                            src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=400&h=320&auto=format&fit=crop"
                                            alt="Classic Car"
                                            className="w-full h-56 object-cover rounded-lg shadow-lg"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&h=280&auto=format&fit=crop"
                                            alt="Modern Car"
                                            className="w-full h-48 object-cover rounded-lg shadow-lg"
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
                            <div className="w-[9.2rem] h-1 bg-red-500 rounded"></div>
                        </div>

                        <div className="flex flex-col  space-y-8">
                            {blogCards.length > 0 ? blogCards : (
                                <p className="text-center text-gray-500 py-12">No posts available.</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
                    <p className="text-gray-600 mb-4">Failed to load posts. Please try again later.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }
}