
import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Trophy } from 'lucide-react';
import { SlideProps } from '../types';

const PrinciplesSlide: React.FC<SlideProps> = ({ isLast }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-32 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <Trophy className="w-16 h-16 mx-auto mb-6 opacity-20" />
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Princípios-chave</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
         {[
           { num: "01", title: "O produto é marketing", desc: "Invista em uma experiência que entregue valor de forma rápida e intuitiva." },
           { num: "02", title: "Comunidade é extensão da equipe", desc: "Capacite-os com ferramentas e autonomia. Não tente controlar a narrativa." },
           { num: "03", title: "Alinhamento de interesses", desc: "Ajude seus usuários a construir negócios em cima do seu produto." },
           { num: "04", title: "Mantenha a fluidez", desc: "Permita que qualquer pessoa use sua marca. Abertura gera lealdade orgânica." }
         ].map((p, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.2 }}
             className="flex gap-6"
           >
              <span className="text-4xl font-black text-gray-100">{p.num}</span>
              <div>
                 <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                 <p className="text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
           </motion.div>
         ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5 }}
        className="mt-24 flex flex-col items-center"
      >
        <p className="text-xs font-black tracking-widest text-gray-300 mb-8 uppercase">Apresentação Finalizada</p>
        <div className="flex items-center gap-3">
           <img 
             src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
             alt="Notion" 
             className="w-6 h-6"
           />
           <span className="font-bold">Notion x Growth Strategy 2024</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PrinciplesSlide;
