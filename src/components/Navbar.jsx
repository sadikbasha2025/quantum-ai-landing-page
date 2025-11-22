import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import profileLogo from '../assets/profile_logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Health', href: '#health' },
        { name: 'Environment', href: '#environment' },
        { name: 'Energy', href: '#energy' },
        { name: 'Economy', href: '#economy' },
        { name: 'Resources', href: '#resources' },
    ];

    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >




                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
                            <img src={profileLogo} alt="Profile Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-2xl md:text-3xl font-bold tracking-wider">
                            QUANTUM <span className="text-primary">AI</span>
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-gray-300 hover:text-primary transition-colors text-sm uppercase tracking-widest"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={() => setShowContact(true)}
                            className="px-6 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Contact
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden glass border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-primary py-2 block"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => { setIsOpen(false); setShowContact(true); }}
                                className="text-left text-primary py-2 block font-bold"
                            >
                                Contact
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Contact Modal */}
            {showContact && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowContact(false)} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative bg-dark border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl glow"
                    >
                        <button
                            onClick={() => setShowContact(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>

                        <div className="space-y-4 text-center">
                            <div>
                                <p className="text-primary font-bold text-lg">Author: Eng. Sadik Basha S.</p>
                                <p className="text-gray-300 text-sm">Electronics Engineer – Central Laboratory & Blood Bank</p>
                                <p className="text-gray-400 text-xs mt-1">Samama Company for Operation & Management</p>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <p className="text-white mb-2">
                                    <span className="text-gray-400">E-Mail:</span> sadik.hcl@gmail.com
                                </p>
                                <p className="text-white">
                                    <span className="text-gray-400">Phone:</span> 0545089787
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default Navbar;
