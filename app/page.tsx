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
        "https://images.unsplash.com/photo-1506610654-064fbba4780c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];

    try {
        const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!postsRes.ok || !usersRes.ok) throw new Error('Failed to fetch data');

        const posts: Post[] = await postsRes.json();
        const users: User[] = await usersRes.json();

        const blogCards = posts.slice(0, 10).map((post, index) => {
            const author = users.find((user) => user.id === post.userId)?.name || 'Unknown';
            const imageUrl = imageUrls[index % imageUrls.length] + '?w=600&h=400&auto=format&fit=crop';

            return (
                <CarPostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.body.slice(0, 100) + '...'}
                    author={author}
                    imageUrl={imageUrl}
                />
            );
        });

        return (
            <main className="min-h-screen bg-gray-50 text-gray-800 py-10">
                {/* Hero Section */}
                <section className="text-center mb-16"
                         // style={{
                         //     backgroundImage: "url(https://plus.unsplash.com/premium_photo-1677993185892-f7823f314c4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                         //     objectPosition: "center",
                         //     objectFit: "cover"
                         // }}
                >
                    <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Your Journey<br/>Your Car</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Voluptatum morbi lorem consectetur mollitia diam semper diam eget.</p>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">Subscribe 🚗
                    </button>
                </section>

                {/* Blog Section */}
                <section className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">All posts</h2>
                    <div className="flex flex-col gap-8 space-y-6">
                        {blogCards.length > 0 ? blogCards :
                            <p className="text-center text-gray-500">No posts available.</p>}
                    </div>
                </section>
            </main>
        );
    } catch (error) {
        return (
            <div className="p-6 text-center text-red-500 font-semibold">
                Failed to load posts. Please try again later.
            </div>
        );
    }
}