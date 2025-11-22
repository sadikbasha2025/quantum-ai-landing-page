import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Brain, ShieldCheck, Globe, TrendingUp } from 'lucide-react';
import gameChangerImg from '../assets/quantum_game_changer_concept_1763813659714.png';

const QuantumGameChanger = () => {
    const features = [
        {
            title: "Unmatched Processing Power",
            desc: "Quantum AI can process vast datasets exponentially faster than classical computers, enabling real-time decision-making and insights.",
            icon: <Zap className="text-yellow-400" size={32} />
        },
        {
            title: "Better Optimization Solutions",
            desc: "It can explore multiple possibilities simultaneously, leading to smarter and more efficient solutions for optimization problems across various industries.",
            icon: <Cpu className="text-blue-400" size={32} />
        },
        {
            title: "Breakthroughs in Drug Discovery",
            desc: "Quantum AI can simulate molecular processes, accelerating the discovery of new drugs and treatments.",
            icon: <Activity className="text-red-400" size={32} />
        },
        {
            title: "Revolutionizing Machine Learning",
            desc: "Quantum AI can enhance training times for AI models, making development faster and more cost-effective.",
            icon: <Brain className="text-purple-400" size={32} />
        },
        {
            title: "Advanced Encryption and Security",
            desc: "Quantum AI can strengthen encryption by creating ultra-secure communication channels, potentially breaking current cryptography systems.",
            icon: <ShieldCheck className="text-green-400" size={32} />
        },
        {
            title: "Global Economic Impact",
            desc: "From financial modeling to climate change predictions, Quantum AI provides the computational horsepower to solve humanity's most complex challenges.",
            icon: <Globe className="text-cyan-400" size={32} />
        }
    ];

    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Quantum AI: <br />
                                <span className="text-gradient">The Game Changer</span>
                            </h2>

                            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
                                These advantages highlight the transformative potential of Quantum AI in various fields, including healthcare, finance, and materials science.
                            </p>

                            <div className="grid grid-cols-1 gap-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                                    >
                                        <div className="shrink-0 mt-1">
                                            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl glow">
                                <img
                                    src={gameChangerImg}
                                    alt="Quantum AI Game Changer"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative Orbs */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuantumGameChanger;
