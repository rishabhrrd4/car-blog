export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <div className="mb-4">
                        <span className="text-xl font-bold">LOGO</span>
                    </div>
                    <nav className="space-x-4 mb-4 flex justify-center flex-wrap">
                        <a href="/" className="hover:text-gray-300 px-2 py-1">Home</a>
                        <a href="/blog" className="hover:text-gray-300 px-2 py-1">Blog</a>
                        <a href="/about" className="hover:text-gray-300 px-2 py-1">About</a>
                        <a href="/contact" className="hover:text-gray-300 px-2 py-1">Contact</a>
                        <a href="/privacy" className="hover:text-gray-300 px-2 py-1">Privacy Policy</a>
                    </nav>
                    <div className="mb-4 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full md:w-auto px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white"
                        />
                        <button className="w-full md:w-auto bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600">
                            Subscribe 🚗
                        </button>
                    </div>
                    <p className="text-sm mb-2">Firststreet 1236 2ndtown © 2023 | company@email.com | 021 345 442</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}