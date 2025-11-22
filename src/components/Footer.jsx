import React from 'react';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/sadikbasha" },
        { icon: <Twitter size={24} />, href: "https://x.com/basha_sadik" },
        { icon: <Github size={24} />, href: "https://github.com/sadikbasha2025" },
        { icon: <MessageCircle size={24} />, href: "https://chat.whatsapp.com/GFBmCA1Y1IX8k114iF9we3?mode=hqrt1" },
    ];

    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-2">QUANTUM <span className="text-primary">AI</span></h2>
                        <p className="text-gray-500">Transforming Health, Sustainability, Energy, and Economy</p>
                    </div>

                    <div className="flex gap-6">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sadik Basha S. All rights reserved.</p>
                    <p>Designed with Quantum Precision</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
