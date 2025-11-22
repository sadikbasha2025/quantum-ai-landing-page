import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User, Key } from 'lucide-react';

const SadikGPT = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [apiKey, setApiKey] = useState('');
    const [hasKey, setHasKey] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'system', content: 'You are SadikGPT, a helpful AI assistant for Eng. Sadik Basha S. You know about his work in Quantum AI, Healthcare, and his role at Samama Company. You are polite, professional, and futuristic.' },
        { role: 'assistant', content: 'Hello! I am SadikGPT. Ask me anything about Eng. Sadik Basha S. or Quantum AI.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleApiKeySubmit = (e) => {
        e.preventDefault();
        if (apiKey.trim().startsWith('sk-')) {
            setHasKey(true);
        } else {
            alert('Please enter a valid OpenAI API Key starting with sk-');
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
                    temperature: 0.7,
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message);
            }

            const botMessage = { role: 'assistant', content: data.choices[0].message.content };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}. Please check your API key.` }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(255,20,147,0.5)] transition-all hover:scale-110 ${isOpen ? 'hidden' : 'bg-primary text-white'}`}
            >
                <MessageSquare size={28} />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-h-[80vh] bg-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary/10 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">SadikGPT</h3>
                                    <p className="text-xs text-primary">Quantum AI Assistant</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {!hasKey ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                    <Key size={48} className="text-primary mb-2" />
                                    <h4 className="text-xl font-bold">Enter OpenAI API Key</h4>
                                    <p className="text-sm text-gray-400 px-4">
                                        To chat with SadikGPT, please provide your OpenAI API key. It is stored only in your browser's memory.
                                    </p>
                                    <form onSubmit={handleApiKeySubmit} className="w-full px-4">
                                        <input
                                            type="password"
                                            placeholder="sk-..."
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white mb-3 focus:outline-none focus:border-primary"
                                        />
                                        <button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2 rounded-lg transition-colors">
                                            Start Chatting
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    {messages.filter(m => m.role !== 'system').map((msg, idx) => (
                                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user'
                                                    ? 'bg-primary text-white rounded-tr-none'
                                                    : 'bg-white/10 text-gray-200 rounded-tl-none'
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </>
                            )}
                        </div>

                        {/* Input Area */}
                        {hasKey && (
                            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about Quantum AI..."
                                        className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-white focus:outline-none focus:border-primary"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !input.trim()}
                                        className="p-2 bg-primary rounded-full text-white hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SadikGPT;
