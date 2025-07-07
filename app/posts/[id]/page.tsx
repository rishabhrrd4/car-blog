import Link from 'next/link';
import CarSpecs from '@/components/carSpecs';
import Image from 'next/image';
import { imageUrls } from '@/lib/imageMap';
import { notFound } from 'next/navigation';

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

// ✅ Working type-safe component
export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const id = parseInt((await params).id);

    try {
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!postRes.ok) return notFound();
        const post: Post = await postRes.json();

        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        if (!userRes.ok) return notFound();
        const user: User = await userRes.json();

        const postImage = imageUrls[(post.id - 1) % imageUrls.length];

        return (
            <div className="min-h-screen bg-white">
                {/* Image Section */}
                <section className="relative md:h-[500px] lg:h-[600px] overflow-hidden">
                    <Image
                        src={postImage}
                        alt="car image"
                        fill
                        className="object-center object-cover"
                        priority
                    />
                </section>

                {/* Main Content */}
                <main className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 py-12 mx-auto">
                    <article className="space-y-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Classic Revival: Revisiting Iconic Cars Through Modern Reviews
                        </h1>

                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-medium text-gray-600">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                            </div>
                            <div className="text-sm text-gray-600">
                                <p className="font-medium text-gray-900">{user.name}</p>
                                <p>Jan 10, 2024 • 3 Min Read</p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-start space-x-2">
                                    <span className="text-gray-900 font-medium">•</span>
                                    <span className="text-gray-700">Lorem ipsum dolor sit amet</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-gray-900 font-medium">•</span>
                                    <span className="text-gray-700">Non blandit massa enim nec scelerisque</span>
                                </li>
                            </ul>
                        </div>

                        <div className="my-12">
                            <CarSpecs />
                        </div>
                    </article>
                </main>

                {/* Categories */}
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Category</h2>
                            <div className="w-20 h-1 bg-red-500 rounded"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'Car Reviews',
                                    img: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=64&h=64&auto=format&fit=crop',
                                },
                                {
                                    title: 'Maintenance Tips',
                                    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=64&h=64&auto=format&fit=crop',
                                },
                                {
                                    title: 'Car Modifications',
                                    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=64&h=64&auto=format&fit=crop',
                                },
                                {
                                    title: 'Driving Tips',
                                    img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=64&h=64&auto=format&fit=crop',
                                },
                            ].map((cat, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                                >
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                        <Image
                                            src={cat.img}
                                            alt={cat.title}
                                            width={400}
                                            height={400}
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{cat.title}</h3>
                                    <p className="text-sm text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur. Urna dignissim ac eget mattis.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog not found</h2>
                    <p className="text-gray-600 mb-4">
                        The blog post you&apos;re looking for doesn&apos;t exist or failed to load.
                    </p>
                    <Link
                        href="/"
                        className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }
}
