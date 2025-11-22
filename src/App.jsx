import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

// Import images (assuming they will be placed in src/assets)
import img1 from './assets/uploaded_image_0_1763790863882.jpg'; // Profile
import img2 from './assets/uploaded_image_1_1763790863882.png'; // Atom/Quantum
import img3 from './assets/uploaded_image_2_1763790863882.jpg'; // Group/Event
import img4 from './assets/uploaded_image_3_1763790863882.jpg'; // Building
import img5 from './assets/uploaded_image_4_1763790863882.jpg'; // Car/Personal

function App() {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <Marquee />
            <About profileImg={img1} carImg={img5} />

            <ContentSection
                id="health"
                title="Human Health"
                subtitle="Quantum AI in Healthcare"
                content={[
                    "Every family in Saudi Arabia has faced challenges with health—whether it’s waiting for test results, worrying about cancer, or the high cost of treatments. AI and Quantum AI can make healthcare faster, more accurate, and more affordable.",
                    "Quantum AI allows molecular simulations that currently take years to complete on classical systems. For example, simulating protein folding for diseases like Alzheimer’s can be achieved in weeks.",
                    "AI-driven genetic mapping and quantum optimization enable treatment plans tailored to an individual’s DNA."
                ]}
                details={[
                    { title: "Drug Discovery & Protein Modeling", text: "Quantum AI allows molecular simulations that currently take years to complete on classical systems. For example, simulating protein folding for diseases like Alzheimer’s can be achieved in weeks, accelerating drug development pipelines." },
                    { title: "Precision Medicine", text: "AI-driven genetic mapping and quantum optimization enable treatment plans tailored to an individual’s DNA. A patient with cancer may receive chemotherapy designed specifically for their genetic profile, minimizing side effects and maximizing success." },
                    { title: "Faster Diagnostics", text: "Quantum-enhanced AI models process massive imaging and laboratory datasets, enabling faster and more accurate detection of cancer, cardiovascular diseases, and neurological disorders." },
                    { title: "Hospital Systems Optimization", text: "AI-powered predictive models streamline patient flow, reduce wait times, and optimize laboratory operations, while Quantum AI enables rapid real-time decision-making in critical care scenarios." }
                ]}
                image={img2}
                reverse={false}
            />

            <ContentSection
                id="environment"
                title="Sustainable Environment"
                subtitle="Water, Food, and Clean Air"
                content={[
                    "Water, food, and clean air are the most basic needs. Farmers in the desert struggle with unpredictable weather, and cities face water scarcity. AI and Quantum AI can predict rainfall, soil quality, and water needs in advance.",
                    "Quantum AI enables real-time simulation of atmospheric conditions for Saudi Arabia, helping with dust storm prediction, water desalination planning, and desert greening projects.",
                    "AI-powered drones monitor crops, detect pests, and recommend irrigation schedules."
                ]}
                details={[
                    { title: "Climate Modeling", text: "Classical computers struggle with millions of interacting variables in climate systems. Quantum AI enables real-time simulation of atmospheric conditions for Saudi Arabia, helping with dust storm prediction, water desalination planning, and desert greening projects." },
                    { title: "Smart Agriculture", text: "AI-powered drones monitor crops, detect pests, and recommend irrigation schedules. Quantum optimization ensures maximum yield with minimum water use, crucial for arid zones." },
                    { title: "Water Resource Management", text: "Quantum AI models optimize desalination plants and national water grids, reducing energy use and ensuring continuous supply." }
                ]}
                image={img4}
                reverse={true}
            />

            <ContentSection
                id="energy"
                title="Leadership in Energy"
                subtitle="Powering the Future"
                content={[
                    "Energy drives everything—from air conditioning at home to industries that provide jobs. AI ensures electricity is reliable and affordable, while Quantum AI helps industries produce more with fewer resources.",
                    "Quantum simulations improve reservoir modeling, enhancing extraction efficiency and lowering costs.",
                    "Factories equipped with AI-driven robots, predictive logistics, and supply chain optimization can double productivity."
                ]}
                details={[
                    { title: "Oil & Gas", text: "Quantum simulations improve reservoir modeling, enhancing extraction efficiency and lowering costs. Predictive AI reduces equipment downtime by forecasting maintenance needs." },
                    { title: "Renewable Energy Integration", text: "Solar and wind energy vary with weather. Quantum AI optimizes the national grid, balancing renewable sources with oil and gas to ensure 24/7 stability." },
                    { title: "Industry 4.0", text: "Factories equipped with AI-driven robots, predictive logistics, and supply chain optimization can double productivity. Quantum AI enables global-scale optimization across trade routes, raw material supply, and manufacturing cycles." }
                ]}
                image={img3}
                reverse={false}
            />

            <ContentSection
                id="economy"
                title="Future Economies"
                subtitle="Jobs & Financial Security"
                content={[
                    "The future economy means better jobs, new businesses, and financial security. AI and Quantum AI can help detect fraud in banks, create new startup opportunities, and ensure economic growth beyond oil.",
                    "Quantum AI enables portfolio optimization, advanced fraud detection, and predictive modeling for banks and fintech.",
                    "Startups in biotech, logistics, and clean energy will flourish with AI-driven platforms and quantum-backed modeling."
                ]}
                details={[
                    { title: "Financial Systems", text: "Quantum AI enables portfolio optimization, advanced fraud detection, and predictive modeling for banks and fintech." },
                    { title: "Education & Research", text: "AI tutors provide personalized learning paths. Quantum AI in universities trains future scientists capable of working on next-generation technologies." },
                    { title: "Entrepreneurship", text: "Startups in biotech, logistics, and clean energy will flourish with AI-driven platforms and quantum-backed modeling." },
                    { title: "Artificial Superintelligence", text: "By leading Quantum AI research, Saudi Arabia positions itself as a global hub of innovation, attracting investments, talent, and partnerships." }
                ]}
                image={null}
                reverse={true}
            />

            {/* New Quantum Concepts Section */}
            <section className="py-20 bg-black/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-dark to-dark z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Core <span className="text-gradient">Quantum Concepts</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Understanding the fundamental principles powering the next generation of intelligence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Superposition",
                                desc: "Unlike classical bits (0 or 1), qubits can exist in multiple states simultaneously, enabling massive parallelism.",
                                icon: "⚛️"
                            },
                            {
                                title: "Entanglement",
                                desc: "Qubits can be correlated across vast distances, allowing for instantaneous information sharing and synchronized processing.",
                                icon: "🔗"
                            },
                            {
                                title: "Quantum Interference",
                                desc: "Quantum algorithms use interference to amplify correct answers and cancel out wrong ones, speeding up computation.",
                                icon: "🌊"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-2 group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;
