const AboutPage = () => {
    return (
        <main className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800">
            <section className="bg-white shadow-lg rounded-lg p-6 mb-10">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <h2 className="text-2xl font-semibold mb-4">Why This Car Blog Exists</h2>
                <p className="text-gray-700 mb-4">
                    This car blog was created with a passion for automobiles and a desire to share knowledge with enthusiasts and everyday drivers alike. Our mission is to provide a reliable resource for the latest in automotive trends, helping readers make informed decisions about their vehicles while celebrating the joy of driving. Last updated: July 03, 2025.
                </p>
                <h2 className="text-2xl font-semibold mb-4">What Topics We Cover</h2>
                <p className="text-gray-700 mb-2">
                    We explore a wide range of topics including:
                </p>
                <ul className="list-disc list-inside mt-2 mb-4">
                    <li>Electric Vehicles (EVs) and sustainable driving solutions</li>
                    <li>SUV reviews and off-road adventures</li>
                    <li>Maintenance tips for keeping your car in top shape</li>
                    <li>Performance car reviews and modifications</li>
                    <li>Driving tips for safety and efficiency</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Tech Stack Used</h2>
                <p className="text-gray-700 mb-2">
                    This project is built using modern web technologies to ensure a seamless experience:
                </p>
                <ul className="list-disc list-inside mt-2 mb-4">
                    <li><strong>Next.js</strong> for server-side rendering and static site generation</li>
                    <li><strong>Tailwind CSS</strong> for responsive and customizable styling</li>
                    <li><strong>TypeScript</strong> for type safety and better development experience</li>
                    <li><strong>React</strong> for building dynamic user interfaces</li>
                </ul>
            </section>
        </main>
    );
};

export default AboutPage;