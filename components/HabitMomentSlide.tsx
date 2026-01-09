
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Share2 } from 'lucide-react';
import { SlideProps } from '../types';

const HabitMomentSlide: React.FC<SlideProps> = () => {
  const dominos = ["Você", "Colega 1", "Colega 2", "Equipe", "Departamento", "Organização"];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <div className="text-center max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">#3 Habit Moment: Fluxo de Trabalho.</h2>
        <p className="text-xl text-gray-500">Transformando o uso inicial em um sistema essencial para o dia a dia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-4">
              <LayoutGrid className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Templates como motor de expansão</h3>
           </div>
           <p className="text-gray-600 text-lg leading-relaxed">
             Com mais de <b>30.000 templates</b> oficiais e da comunidade, o usuário é incentivado a resolver novos problemas dentro do Notion, em vez de buscar outra ferramenta.
           </p>
           <div className="grid grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="h-20 bg-gray-50 rounded-lg border border-gray-100" />
              ))}
           </div>
        </div>

        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-4">
              <Share2 className="w-8 h-8" />
              <h3 className="text-2xl font-bold">O Efeito Dominó</h3>
           </div>
           
           <div className="flex items-end justify-between h-48 border-b-2 border-gray-100 pb-2 overflow-hidden">
              {dominos.map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 75 }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: "bounceOut" }}
                  className="w-12 bg-black text-white p-2 rounded flex items-center justify-center origin-bottom-right"
                  style={{ height: `${60 + i * 20}px` }}
                >
                  <span className="text-[8px] font-bold whitespace-nowrap -rotate-90">{text}</span>
                </motion.div>
              ))}
           </div>
           
           <p className="text-gray-500 text-sm italic">
             O produto sutilmente incentiva o convite de colegas para colaborar. Ao convidar o primeiro colega, o caminho para a adoção em equipe (e o upgrade) é aberto.
           </p>
        </div>
      </div>
    </div>
  );
};

export default HabitMomentSlide;
