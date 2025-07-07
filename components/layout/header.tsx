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
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-20">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">LOGO</div>

                {/* Desktop Navigation and Subscribe Button */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                'text-base hover:text-blue-300 transition-colors',
                                pathname === link.href
                                    ? 'text-blue-300 font-semibold'
                                    : 'text-gray-200'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">
                        Subscribe
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 shadow-md px-4 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={clsx(
                                'block py-2 px-2 rounded hover:bg-gray-700',
                                pathname === link.href
                                    ? 'text-blue-300 font-semibold'
                                    : 'text-gray-200'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Subscribe Button (Mobile) */}
                    <button
                        className="w-full mt-2 bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">
                        Subscribe
                    </button>
                </div>
            )}
        </header>
    );
}