
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';

const EvangelistsFunnelSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <div className="text-center max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">O exército de evangelistas do Notion.</h2>
        <p className="text-xl text-gray-500">Capacitando diferentes perfis para amplificar a marca organicamente.</p>
      </div>

      <div className="w-full max-w-5xl space-y-4">
         {[
           { step: "Para Awareness", items: "Embaixadores e Campus Leaders", desc: "Voluntários que organizam eventos, criam conteúdo educacional e introduzem o Notion a novos públicos.", color: "bg-gray-50" },
           { step: "Para Conversão", items: "Creators e Empreendedores", desc: "Criam e vendem templates em marketplaces (Etsy, Gumroad), demonstrando casos de uso e acelerando o time-to-value.", color: "bg-gray-100" },
           { step: "Para Expansão", items: "Notion Champions e Consultores", desc: "Usuários avançados dentro de empresas que promovem a adoção interna e ajudam empresas a implementar o sistema.", color: "bg-black text-white" }
         ].map((item, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: i * 0.2 }}
             className={`p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start md:items-center ${item.color}`}
           >
              <div className="md:w-1/4">
                 <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">{item.step}</p>
                 <h4 className="text-xl font-black">{item.items}</h4>
              </div>
              <div className="md:flex-1">
                 <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default EvangelistsFunnelSlide;
