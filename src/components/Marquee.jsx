import React from 'react';

const Marquee = () => {
    const skills = [
        "GEN AI", "Quantum AI in Healthcare", "Energy", "Agriculture",
        "Defence", "RDIA", "Space Research", "Quantum Biology",
        "Precision Medicine", "Smart Industry"
    ];

    return (
        <div className="w-full py-10 bg-black/50 border-y border-white/5 overflow-hidden">
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <span
                            key={index}
                            className="text-2xl font-bold text-gray-500 hover:text-primary transition-colors cursor-default uppercase tracking-wider"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default Marquee;
