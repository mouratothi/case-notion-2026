
import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { TrendingUp, Users, ArrowRight } from 'lucide-react';
import { SlideProps } from '../types';

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const GrowthStatsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24 bg-white">
      <div className="text-center max-w-4xl mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6"
        >
          <TrendingUp className="w-4 h-4 text-black" />
          <span className="text-xs font-black uppercase tracking-widest">Escala Global</span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-black mb-4 tracking-tighter leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          De um nicho para <br/>
          <span className="text-gray-400">o padrão de mercado.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-center gap-12 w-full max-w-6xl mb-12">
        {/* 2020 - O Alicerce */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center group relative"
        >
          <div className="relative mb-6">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-3 py-1 rounded-md shadow-sm z-10 whitespace-nowrap">
               <span className="text-[10px] font-black uppercase tracking-widest text-black">Start</span>
            </div>
            <motion.div 
              className="w-24 h-24 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center group-hover:border-black transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors" />
            </motion.div>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-bold text-gray-400 uppercase mb-1">2020</p>
            <h3 className="text-4xl font-black mb-1 leading-none">
              <Counter value={1} />M
            </h3>
            <p className="text-xs text-gray-500 font-medium">Usuários Ativos</p>
          </div>
        </motion.div>

        {/* O Multiplicador (Caminho) */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 pb-16 px-4">
           <div className="w-full relative flex items-center">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex-1 h-[2px] bg-gradient-to-r from-gray-200 via-black to-black origin-left"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex-shrink-0 -ml-1"
              >
                <ArrowRight className="w-6 h-6 text-black" />
              </motion.div>

              {/* Badge 100x Centralizado na linha */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute left-1/2 -translate-x-1/2 top-[-24px] bg-black text-white px-4 py-2 rounded-xl text-2xl font-black shadow-xl z-20"
              >
                100x
              </motion.div>
           </div>
        </div>

        {/* 2024 - A Explosão */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center group relative"
        >
          <div className="relative mb-6">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse z-10 whitespace-nowrap">
               Presente
            </div>
            <motion.div 
              className="w-48 h-64 bg-black rounded-3xl flex items-end p-6 overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform"
              initial={{ height: 0 }}
              animate={{ height: 256 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              <div className="grid grid-cols-4 gap-2 w-full opacity-20">
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className="h-8 bg-white rounded-md" />
                 ))}
              </div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-bold text-gray-400 uppercase mb-1">2024</p>
            <h3 className="text-5xl md:text-6xl font-black mb-1 leading-none">
              <Counter value={100} duration={3} />M
            </h3>
            <p className="text-xs text-gray-500 font-medium">Comunidade Global</p>
          </div>
        </motion.div>
      </div>

      <motion.p 
        className="text-gray-400 text-sm max-w-xl text-center italic border-t border-gray-100 pt-8 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        "O Notion não apenas cresceu, ele redefiniu como o mundo organiza a informação."
      </motion.p>
    </div>
  );
};

export default GrowthStatsSlide;
