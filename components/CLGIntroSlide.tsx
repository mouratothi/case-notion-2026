
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SlideProps } from '../types';

const CLGIntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <div className="text-center max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">O segundo motor: Community-Led Growth.</h2>
        <p className="text-xl text-gray-500">Quando seus usuários mais apaixonados se tornam seu melhor time de marketing.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl">
        <div className="flex-1 relative">
           {/* SVG Iceberg Drawing */}
           <motion.svg 
             viewBox="0 0 200 200" 
             className="w-full h-auto drop-shadow-xl"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
           >
              {/* Sea Line */}
              <line x1="10" y1="80" x2="190" y2="80" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Top part (Proprietary) */}
              <motion.path 
                d="M100 20 L130 80 L70 80 Z" 
                fill="#f3f4f6" 
                stroke="black" 
                strokeWidth="2" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              />
              
              {/* Bottom part (Community) */}
              <motion.path 
                d="M70 80 L130 80 L140 140 L110 170 L70 160 L50 120 Z" 
                fill="black" 
                stroke="black" 
                strokeWidth="2" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
              />
              
              <text x="140" y="60" className="text-[8px] font-bold" fill="black">MKT Oficial</text>
              <text x="135" y="130" className="text-[12px] font-black" fill="white">COMUNIDADE</text>
           </motion.svg>
        </div>

        <div className="flex-1 space-y-10">
           <div>
              <h4 className="text-xs font-black uppercase text-gray-400 mb-4 tracking-widest">Conceito</h4>
              <p className="text-xl leading-relaxed text-gray-700">
                CLG é quando pessoas, dentro e fora das organizações, advogam a favor da empresa e influenciam indiretamente as decisões de compra.
              </p>
           </div>
           
           <div className="p-8 border-l-4 border-black bg-gray-50 italic relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 opacity-5" />
              <p className="text-lg text-gray-600 mb-4">
                "Community is a force that should power every stage of the funnel."
              </p>
              <footer className="text-sm font-bold">— Olivia Nottebohm, CRO do Notion</footer>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CLGIntroSlide;
