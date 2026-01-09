
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, RefreshCw } from 'lucide-react';
import { SlideProps } from '../types';

const ValueJourneySlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.h2 
        className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        A jornada de valor do Notion é construída em 3 momentos-chave.
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full max-w-6xl relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block" />
        
        {[
          { icon: <CheckCircle2 />, title: "Setup Moment", step: "#1", desc: "Primeira configuração e personalização." },
          { icon: <Star />, title: "Aha! Moment", step: "#2", desc: "O momento da descoberta do valor." },
          { icon: <RefreshCw />, title: "Habit Moment", step: "#3", desc: "Uso recorrente e integração no dia a dia." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx }}
            className="flex-1 px-4 z-10 flex flex-col items-center text-center"
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl ${idx === 1 ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
              {item.icon}
            </div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{item.step}</p>
            <h4 className="text-2xl font-black mb-3">{item.title}</h4>
            <p className="text-sm text-gray-500 max-w-[200px]">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-20 p-8 border border-gray-100 rounded-3xl max-w-3xl text-center bg-gray-50/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-lg text-gray-600 leading-relaxed">
          Para mover um usuário da descoberta ao uso recorrente, o Notion domina uma jornada de 3 etapas. 
          Onde a maioria das empresas foca apenas no <b>'Aha! Moment'</b>, o Notion entende que ele é <b>apenas 1/3 do caminho</b>.
        </p>
      </motion.div>
    </div>
  );
};

export default ValueJourneySlide;
