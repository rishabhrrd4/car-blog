import Link from 'next/link';
import CarSpecs from "@/components/carSpecs";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    params: { id: string };
}

export default async function PostDetailPage({ params }: Props) {
    const { id } = params;

    try {
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post: Post = await postRes.json();

        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user: User = await userRes.json();

        return (
            <main className="max-w-4xl mx-auto p-6">
                <article className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0" alt={post.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                        <div className="flex items-center mb-4 text-gray-600">
                            <img src={`https://i.pravatar.cc/40?img=${user.id}`} alt={user.name} className="w-10 h-10 rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm">Jan 10, 2024 • 3 Min Read</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-6">{post.body}</p>
                        <ul className="list-disc list-inside mb-6 text-gray-700">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                        </ul>
                        <CarSpecs />
                        <Link href="/" className="inline-block mt-6 text-blue-600 hover:underline">
                            ⬅ Back to Home
                        </Link>
                    </div>
                </article>

                {/* Category Section */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">All Category</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            </main>
        );
    } catch (error) {
        return (
            <div className="p-6 text-center text-red-500 font-semibold">
                Blog not found or failed to load.
            </div>
        );
    }
}