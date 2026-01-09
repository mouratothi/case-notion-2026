
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Briefcase, User } from 'lucide-react';
import { SlideProps } from '../types';

const PLGIntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-32 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">O que é PLG?</h2>
        <p className="text-2xl text-gray-500 font-medium mb-12">Em vez de depender de uma equipe de vendas, o produto se vende sozinho.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Conceito Central</h4>
          <p className="text-xl leading-relaxed text-gray-800">
            A lógica é simples: permita que os usuários <b>experimentem o valor do produto</b> o mais rápido possível (time-to-value).
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Como funciona</h4>
          <p className="text-xl leading-relaxed text-gray-800">
            O crescimento vem de um ciclo onde os usuários usam o produto, percebem seu valor e, naturalmente, o expandem para suas equipes.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 p-8 bg-black text-white rounded-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <MousePointer2 className="w-32 h-32 rotate-12" />
        </div>
        
        <div className="flex-1">
          <p className="text-2xl font-serif italic leading-relaxed">
            "No PLG, a adoção B2C (individual) é o <b>cavalo de troia</b> para a entrada no B2B (empresas)."
          </p>
        </div>
        
        <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
           <div className="flex flex-col items-center">
              <User className="w-8 h-8 mb-1" />
              <span className="text-[10px] font-bold">INDIVIDUAL</span>
           </div>
           <div className="w-12 h-[2px] bg-white/30" />
           <div className="flex flex-col items-center">
              <Briefcase className="w-8 h-8 mb-1" />
              <span className="text-[10px] font-bold">EMPRESA</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PLGIntroSlide;
