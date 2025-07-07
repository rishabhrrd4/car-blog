'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CarPostCard from '@/components/carPostCard';
import { imageUrls } from '@/lib/imageMap';

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

export default function SearchablePosts() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';

    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [postsRes, usersRes] = await Promise.all([
                    fetch('https://jsonplaceholder.typicode.com/posts'),
                    fetch('https://jsonplaceholder.typicode.com/users'),
                ]);

                if (!postsRes.ok || !usersRes.ok) throw new Error('Failed to fetch');

                const postsData: Post[] = await postsRes.json();
                const usersData: User[] = await usersRes.json();

                setPosts(postsData.slice(0, 10));
                setUsers(usersData);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(query) ||
            post.body.toLowerCase().includes(query)
    );

    if (error) {
        return <p className="text-red-500 text-center">Failed to load posts.</p>;
    }

    return (
        <>
            {loading ? (
                <p className="text-center text-gray-500 py-12">Loading posts...</p>
            ) : filteredPosts.length > 0 ? (
                <div className="flex flex-col space-y-8">
                    {filteredPosts.map((post, index) => {
                        const author =
                            users.find((user) => user.id === post.userId)?.name || 'Unknown';
                        const imageUrl =
                            imageUrls[index % imageUrls.length] +
                            '?w=600&h=400&auto=format&fit=crop';

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
                    })}
                </div>
            ) : (
                <p className="text-center text-gray-500 py-12">No posts found for &quot;{query}&quot;.</p>
            )}
        </>
    );
}
