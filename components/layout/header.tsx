'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import {useState} from 'react';

const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/contact', label: 'Contact'},
    {href: '/blog', label: 'Blog'},
];

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md py-4 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">LOGO</div>
                <div>

                    <nav className="flex items-center">
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-800 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <div className={clsx('md:flex md:space-x-6', {
                            'hidden': !isMenuOpen,
                            'absolute top-16 left-0 w-full bg-white shadow-md py-4': isMenuOpen,
                        })}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={clsx('block px-4 py-2 hover:text-blue-600', {
                                        'text-blue-600 font-semibold': pathname === link.href,
                                        'text-gray-800': pathname !== link.href,
                                    })}
                                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Subscribe Button */}
                    </nav>
                </div>
                <div>

                    <button
                        className="hidden md:block bg-white text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                        Subscribe
                    </button>
                </div>
            </div>
        </header>
    );
}