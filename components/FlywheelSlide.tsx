
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { SlideProps } from '../types';

const FlywheelSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <div className="text-center max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">O motor completo: Flywheel de Crescimento.</h2>
        <p className="text-xl text-gray-500">PLG e CLG não são estratégias separadas, mas um sistema que se auto-reforça.</p>
      </div>

      <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
         {/* Central Logo */}
         <div className="z-10 bg-white p-6 rounded-full shadow-2xl border-4 border-black">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
              alt="Notion" 
              className="w-16 h-16 object-contain"
            />
         </div>

         {/* Spinning Ring */}
         <motion.div 
           className="absolute inset-0 rounded-full border-[10px] border-gray-50"
           animate={{ rotate: 360 }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
         >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-black text-white rounded-full">
               <RefreshCw className="w-5 h-5" />
            </div>
         </motion.div>

         {/* Flywheel Sections */}
         {[
           { id: 1, title: "PLG Onboarding", desc: "Cria usuários satisfeitos.", pos: "top-0 left-1/4" },
           { id: 2, title: "Advocacy (CLG)", desc: "Usuários formam comunidade.", pos: "top-1/4 right-0" },
           { id: 3, title: "Social Proof", desc: "Comunidade cria templates.", pos: "bottom-0 right-1/4" },
           { id: 4, title: "Aquisição", desc: "Templates atraem novos usuários.", pos: "bottom-1/4 left-0" }
         ].map((item, i) => (
           <motion.div 
             key={i}
             className={`absolute ${item.pos} bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-[180px] z-20`}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.3 }}
           >
              <h5 className="font-black text-sm mb-1">{item.id}. {item.title}</h5>
              <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
           </motion.div>
         ))}
      </div>
      
      <p className="mt-16 text-2xl font-black text-gray-300 uppercase tracking-[0.3em]">O ciclo se repete com mais força</p>
    </div>
  );
};

export default FlywheelSlide;
