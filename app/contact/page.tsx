'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, subject, message } = form;

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message! (Note: This form is not connected to a backend.)');
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <main className="max-w-xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border rounded px-3 py-2"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    className="w-full border rounded px-3 py-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    className="w-full border rounded px-3 py-2"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                />
                <textarea
                    className="w-full border rounded px-3 py-2"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </main>
    );
}
