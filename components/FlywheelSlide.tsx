
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { SlideProps } from '../types';

const FlywheelSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24 bg-white overflow-hidden">
      {/* Header mais compacto */}
      <div className="text-center max-w-4xl mb-8 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">O motor completo: Flywheel de Crescimento.</h2>
        <p className="text-lg md:text-xl text-gray-500">PLG e CLG não são estratégias separadas, mas um sistema que se auto-reforça.</p>
      </div>

      {/* Container do Flywheel com tamanho reduzido para caber na tela */}
      <div className="relative w-full max-w-lg md:max-w-xl aspect-square flex items-center justify-center scale-90 md:scale-100">
         
         {/* Central Logo */}
         <div className="z-10 bg-white p-4 md:p-6 rounded-full shadow-2xl border-4 border-black">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
              alt="Notion" 
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
         </div>

         {/* Spinning Ring */}
         <motion.div 
           className="absolute inset-0 rounded-full border-[6px] md:border-[10px] border-gray-50"
           animate={{ rotate: 360 }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
         >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 md:p-3 bg-black text-white rounded-full">
               <RefreshCw className="w-4 h-4 md:w-5 md:h-5" />
            </div>
         </motion.div>

         {/* Flywheel Sections - Posicionamento e tamanhos refinados */}
         {[
           { id: 1, title: "PLG Onboarding", desc: "Cria usuários satisfeitos.", pos: "top-[-5%] left-1/2 -translate-x-1/2" },
           { id: 2, title: "Advocacy (CLG)", desc: "Usuários formam comunidade.", pos: "top-1/2 right-[-10%] -translate-y-1/2" },
           { id: 3, title: "Social Proof", desc: "Comunidade cria templates.", pos: "bottom-[-5%] left-1/2 -translate-x-1/2" },
           { id: 4, title: "Aquisição", desc: "Templates atraem novos usuários.", pos: "top-1/2 left-[-10%] -translate-y-1/2" }
         ].map((item, i) => (
           <motion.div 
             key={i}
             className={`absolute ${item.pos} bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-gray-100 w-40 md:w-48 z-20`}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.3 }}
             whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
           >
              <h5 className="font-black text-xs md:text-sm mb-1">{item.id}. {item.title}</h5>
              <p className="text-[10px] md:text-xs text-gray-500 leading-tight">{item.desc}</p>
           </motion.div>
         ))}
      </div>
      
      {/* Footer com margem reduzida */}
      <motion.p 
        className="mt-10 md:mt-14 text-xl md:text-2xl font-black text-gray-200 uppercase tracking-[0.3em] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        O ciclo se repete com mais força
      </motion.p>
    </div>
  );
};

export default FlywheelSlide;
