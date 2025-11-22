import React from 'react';
import { motion } from 'framer-motion';

const About = ({ profileImg, carImg }) => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 glow">
                            <img src={profileImg} alt="Sadik Basha S" className="w-full h-auto object-cover" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/30 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-8">Who is <span className="text-primary">Sadik Basha S?</span></h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                I am a passionate GenAI Architect and Content Creator dedicated to making Artificial Intelligence
                                accessible to the All community and beyond, Especially doing R&D on Quantum AI in healthcare
                                as a Registered Researcher on RDIA-KSA.
                            </p>
                            <p>
                                With a focus on Quantum Technologies, Quantum Biology, Quantum Physics with AI and how its going
                                to change the future in evidence based medicine and complex problems into a simple solution with
                                short span of time, Large Language Models (LLMs), RAG, and Agentic Workflows, I break down
                                complex concepts into practical, hands-on tutorials.
                            </p>
                            <p>
                                Beyond Researcher on Quantum AI, I am working as Biomedical Engineer in Central Lab & Blood bank-Albaha-KSA,
                                believing in the power of endurance and discipline in both tech and life.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            {['GenAI Architect', 'Quantum AI Researcher', 'Healthcare', 'Tech Mentor', 'Superposition', 'Entanglement', 'Qubits'].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-sm text-primary border border-primary/20">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
