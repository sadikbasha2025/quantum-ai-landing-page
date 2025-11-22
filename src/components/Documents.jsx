import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, File } from 'lucide-react';

const Documents = () => {
    const documents = [
        {
            title: "Quantum AI in Healthcare.ppt",
            type: "PPT",
            size: "2.4 MB",
            desc: "Presentation on the impact of Quantum Computing in modern medicine.",
            icon: <FileText className="text-orange-500" size={40} />
        },
        {
            title: "Sustainable Future Report.pdf",
            type: "PDF",
            size: "1.8 MB",
            desc: "Detailed analysis of environmental sustainability goals for 2030.",
            icon: <File className="text-red-500" size={40} />
        },
        {
            title: "Quantum Algorithms Basics.pdf",
            type: "PDF",
            size: "3.1 MB",
            desc: "Introduction to Superposition, Entanglement, and Interference.",
            icon: <File className="text-blue-500" size={40} />
        },
        {
            title: "Saudi Vision 2030 & AI.ppt",
            type: "PPT",
            size: "5.2 MB",
            desc: "Strategic alignment of AI initiatives with national goals.",
            icon: <FileText className="text-orange-500" size={40} />
        }
    ];

    return (
        <section id="resources" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Resources & <span className="text-gradient">Downloads</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Access presentations, research papers, and technical documents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {documents.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                                    {doc.icon}
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                                    {doc.type}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1" title={doc.title}>
                                {doc.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                                {doc.desc}
                            </p>

                            <button className="w-full py-2 flex items-center justify-center gap-2 bg-white/5 hover:bg-primary hover:text-white rounded-lg transition-all text-sm font-medium text-gray-300">
                                <Download size={16} /> Download ({doc.size})
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Documents;
