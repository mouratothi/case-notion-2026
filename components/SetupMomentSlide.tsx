
import React from 'react';
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import { SlideProps } from '../types';

const SetupMomentSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <div className="text-center max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">#1 Setup Moment: Personalização Imediata.</h2>
        <p className="text-xl text-gray-500">Em vez de um tour genérico, o Notion faz um quiz rápido para entender a intenção do usuário.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm"
        >
          <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-tighter">Passo 1: Definindo o Objetivo</p>
          <div className="space-y-4">
             <div className="p-4 border-2 border-black rounded-xl flex items-center gap-4 cursor-pointer hover:bg-black hover:text-white transition-all">
                <User className="w-5 h-5" />
                <span className="font-bold">For myself</span>
             </div>
             <div className="p-4 border-2 border-gray-100 rounded-xl flex items-center gap-4 text-gray-400">
                <Users className="w-5 h-5" />
                <span className="font-bold">With my team</span>
             </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">Isso segmenta a experiência desde o primeiro clique.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm"
        >
          <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-tighter">Passo 2: Mapeando Interesses</p>
          <div className="grid grid-cols-2 gap-3">
             {['Project tracking', 'Notes & docs', 'Wikis', 'CRM', 'Books & media', 'Habit tracking'].map((tag, i) => (
                <div key={i} className={`p-3 rounded-lg text-xs font-bold text-center border ${i % 2 === 0 ? 'bg-white border-gray-200' : 'bg-gray-100 border-transparent text-gray-400'}`}>
                  {tag}
                </div>
             ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">O usuário seleciona casos de uso específicos (Job-to-be-Done).</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SetupMomentSlide;
