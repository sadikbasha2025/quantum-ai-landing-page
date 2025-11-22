import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, File } from 'lucide-react';

const Documents = () => {
    const documents = [
        {
            title: "AI and Quantum AI in Advancing Saudi Vision 2030.pdf",
            type: "PDF",
            size: "1.0 MB",
            desc: "Strategic alignment of AI initiatives with national goals.",
            icon: <File className="text-red-500" size={40} />,
            path: "/AI and Quantum AI in Advancing Saudi Vision 2030.pdf"
        },
        {
            title: "Quantum AI Healthcare.pdf",
            type: "PDF",
            size: "1.9 MB",
            desc: "In-depth look at Quantum AI applications in modern healthcare.",
            icon: <File className="text-blue-500" size={40} />,
            path: "/Quantum_AI_Healthcare.pdf"
        },
        {
            title: "Journey into the Quantum World.pptx",
            type: "PPTX",
            size: "27.6 MB",
            desc: "A comprehensive presentation on the fundamentals of Quantum Computing.",
            icon: <FileText className="text-orange-500" size={40} />,
            path: "/Journey-into-the-Quantum-World.pptx"
        },
        {
            title: "NEW cbahi accreditation.pdf",
            type: "PDF",
            size: "2.7 MB",
            desc: "Latest accreditation standards and guidelines.",
            icon: <File className="text-red-500" size={40} />,
            path: "/NEW cbahi accreditation.pdf"
        },
        {
            title: "Quantum AI Video Introduction",
            type: "VIDEO",
            size: "2.0 MB",
            desc: "A brief video introduction to our Quantum AI initiatives.",
            icon: <FileText className="text-purple-500" size={40} />, // Using FileText as generic, or could import Video icon
            path: "/video.mp4"
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

                            <a
                                href={doc.path}
                                download
                                className="w-full py-2 flex items-center justify-center gap-2 bg-white/5 hover:bg-primary hover:text-white rounded-lg transition-all text-sm font-medium text-gray-300"
                            >
                                <Download size={16} /> Download ({doc.size})
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Documents;
