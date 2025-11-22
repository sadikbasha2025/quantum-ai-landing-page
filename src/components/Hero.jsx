import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark z-0" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-6 backdrop-blur-sm">
                        TRANSFORMING HEALTH, SUSTAINABILITY, ENERGY, AND ECONOMY
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Quantum AI in Advancing <br />
                        <span className="text-gradient">Saudi Vision 2030</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto font-light">
                        ELECTRONICS ENGINEER | R&D on Quantum Healthcare AI | Researcher
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                        <a
                            href="https://www.youtube.com/results?search_query=Quantum+AI+Healthcare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,20,147,0.5)] inline-flex items-center justify-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Play size={20} fill="currentColor" /> Watch Videos
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>

                        <a
                            href="https://chat.whatsapp.com/GFBmCA1Y1IX8k114iF9we3?mode=hqrt1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            <Users size={20} /> Join Community
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
                        {[
                            { label: 'Subscribers', value: '40K+' },
                            { label: 'Total Views', value: '1.1M+' },
                            { label: 'Videos', value: '123+' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
