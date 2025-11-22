```javascript
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User, Key, Sparkles, FileText } from 'lucide-react';
import { extractTextFromPDF, searchPDF } from '../utils/RagEngine';

const SadikGPT = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [apiKey, setApiKey] = useState('');
    const [hasKey, setHasKey] = useState(false);
    const [isDemo, setIsDemo] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'system', content: 'You are SadikGPT, a helpful AI assistant for Eng. Sadik Basha S. You know about his work in Quantum AI, Healthcare, and his role at Samama Company. You are polite, professional, and futuristic.' },
        { role: 'assistant', content: 'Hello! I am SadikGPT. Ask me anything about Eng. Sadik Basha S., Quantum AI, or the CBAHI Accreditation standards.' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [pdfData, setPdfData] = useState(null);
    const [isRagLoading, setIsRagLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Load PDF on mount
    useEffect(() => {
        const loadPdf = async () => {
            setIsRagLoading(true);
            const data = await extractTextFromPDF('/NEW cbahi accreditation.pdf');
            setPdfData(data);
            setIsRagLoading(false);
            console.log("PDF Loaded:", data.length, "pages");
        };
        loadPdf();
    }, []);

    const handleApiKeySubmit = (e) => {
        e.preventDefault();
        if (apiKey.trim().startsWith('sk-')) {
            setHasKey(true);
            setIsDemo(false);
        } else {
            alert('Please enter a valid OpenAI API Key starting with sk-');
        }
    };

    const startDemoMode = () => {
        setHasKey(true);
        setIsDemo(true);
        setMessages([
            { role: 'assistant', content: 'Welcome to Demo Mode! I can answer basic questions about Eng. Sadik and Quantum AI. Note: RAG (PDF Search) is limited in Demo Mode.' }
        ]);
    };

    const getDemoResponse = (text) => {
        const lower = text.toLowerCase();
        if (lower.includes('cbahi') || lower.includes('accreditation')) return "I see you are asking about CBAHI. In full mode, I would search the PDF for you. CBAHI ensures healthcare facilities meet high standards of safety and quality.";
        if (lower.includes('hello') || lower.includes('hi')) return "Hello! How can I assist you with Quantum AI today?";
        if (lower.includes('sadik') || lower.includes('who')) return "Eng. Sadik Basha S. is an Electronics Engineer and Researcher at Samama Company, specializing in Quantum AI for Healthcare and the Saudi Vision 2030.";
        if (lower.includes('quantum')) return "Quantum AI utilizes the principles of superposition and entanglement to process vast datasets exponentially faster than classical computers. It is revolutionizing drug discovery and climate modeling.";
        if (lower.includes('health') || lower.includes('medicine')) return "In healthcare, Quantum AI accelerates drug discovery, personalizes treatment plans based on DNA, and optimizes hospital logistics.";
        if (lower.includes('vision') || lower.includes('2030')) return "Eng. Sadik's work aligns with Saudi Vision 2030 by leveraging advanced technology to diversify the economy, improve healthcare, and ensure environmental sustainability.";
        if (lower.includes('contact') || lower.includes('email')) return "You can contact Eng. Sadik via email at sadik.hcl@gmail.com or join his WhatsApp community linked in the Hero section.";
        return "That's a great question. In this Demo Mode, I have limited responses, but I can tell you more about Quantum AI, Healthcare, or Eng. Sadik's research.";
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Demo Mode Logic
        if (isDemo) {
            setTimeout(() => {
                const botMessage = { role: 'assistant', content: getDemoResponse(userMessage.content) };
                setMessages(prev => [...prev, botMessage]);
                setIsLoading(false);
            }, 1000);
            return;
        }

        // RAG Logic
        let systemContext = "";
        if (pdfData && (input.toLowerCase().includes('cbahi') || input.toLowerCase().includes('accreditation') || input.toLowerCase().includes('standard'))) {
            const relevantPages = searchPDF(pdfData, input);
            if (relevantPages.length > 0) {
                const contextText = relevantPages.map(p => `[Page ${ p.page }]: ${ p.text } `).join('\n\n');
                systemContext = "\n\nCONTEXT FROM CBAHI PDF:\n" + contextText + "\n\nUse this context to answer the user's question about CBAHI.";
                console.log("RAG Context Found:", relevantPages.length, "pages");
            }
        }

try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ apiKey } `
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                ...messages,
                { role: 'system', content: messages[0].content + systemContext }, // Inject context dynamically
                userMessage
            ].map(m => ({ role: m.role, content: m.content })),
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
    setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${ error.message }. Please check your API key.` }]);
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
            className={`fixed bottom - 6 right - 6 z - 50 p - 4 rounded - full shadow - [0_0_20px_rgba(255, 20, 147, 0.5)] transition - all hover: scale - 110 ${ isOpen ? 'hidden' : 'bg-primary text-white' } `}
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
                                <h3 className="font-bold text-white">SadikGPT {isDemo && <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white ml-2">DEMO</span>}</h3>
                                <p className="text-xs text-primary flex items-center gap-1">
                                    {isRagLoading ? "Loading PDF..." : "Quantum AI + RAG"}
                                </p>
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
                                <h4 className="text-xl font-bold">Unlock SadikGPT</h4>
                                <p className="text-sm text-gray-400 px-4">
                                    Enter your OpenAI API Key to enable full AI capabilities, including <b>CBAHI PDF Search</b>.
                                </p>
                                <form onSubmit={handleApiKeySubmit} className="w-full px-4">
                                    <input
                                        type="password"
                                        placeholder="sk-..."
                                        value={apiKey}
                                        onChange={(e) => setApiKey(e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white mb-3 focus:outline-none focus:border-primary"
                                    />
                                    <button type="submit" className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2 rounded-lg transition-colors mb-4">
                                        Start Chatting
                                    </button>
                                </form>

                                <div className="relative w-full px-8">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-white/10"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-dark px-2 text-sm text-gray-500">OR</span>
                                    </div>
                                </div>

                                <button
                                    onClick={startDemoMode}
                                    className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                                >
                                    <Sparkles size={16} /> Try Demo Mode (No Key)
                                </button>
                            </div>
                        ) : (
                            <>
                                {messages.filter(m => m.role !== 'system').map((msg, idx) => (
                                    <div key={idx} className={`flex ${ msg.role === 'user' ? 'justify-end' : 'justify-start' } `}>
                                        <div className={`max - w - [80 %] p - 3 rounded - 2xl ${
    msg.role === 'user'
    ? 'bg-primary text-white rounded-tr-none'
    : 'bg-white/10 text-gray-200 rounded-tl-none'
} `}>
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
                                    placeholder={isDemo ? "Ask about Sadik or Quantum AI..." : "Ask about CBAHI or Quantum AI..."}
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
```
