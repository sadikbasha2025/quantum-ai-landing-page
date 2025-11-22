import React from 'react';
import { motion } from 'framer-motion';

import { useState } from 'react';
import { X } from 'lucide-react';

const ContentSection = ({ id, title, subtitle, content, image, reverse, details }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <section id={id} className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h3 className="text-primary font-bold tracking-wider mb-2 uppercase">{subtitle}</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">{title}</h2>

                        <div className="space-y-6 text-gray-400">
                            {content.map((paragraph, idx) => (
                                <p key={idx} className="leading-relaxed text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowDetails(true)}
                            className="mt-8 px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                        >
                            Learn More
                        </button>
                    </motion.div>

                    {image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative rounded-3xl overflow-hidden glass p-4">
                                <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700" />
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Details Modal */}
            {showDetails && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowDetails(false)} />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative bg-dark border border-white/10 rounded-2xl p-8 max-w-3xl w-full shadow-2xl glow max-h-[90vh] overflow-y-auto"
                    >
                        <button
                            onClick={() => setShowDetails(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white sticky"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-3xl font-bold mb-2 text-primary">{subtitle}</h3>
                        <h4 className="text-xl text-white mb-8">In-Depth Analysis</h4>

                        <div className="space-y-8">
                            {details ? details.map((item, idx) => (
                                <div key={idx} className="border-l-2 border-primary/30 pl-6">
                                    <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                                </div>
                            )) : (
                                <p className="text-gray-400">No additional details available.</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default ContentSection;
