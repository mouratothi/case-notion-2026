
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, Zap } from 'lucide-react';
import { SlideProps } from '../types';

const AhaMomentSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24 bg-gray-50/30">
      <div className="text-center max-w-4xl mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-6">#2 Aha! Moment: O momento "Uau".</h2>
        <p className="text-xl text-gray-500 italic">O usuário aterrissa em um workspace pré-configurado com templates baseados em suas respostas.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl items-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex-1 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex">
            <div className="w-48 border-r border-gray-100 p-4 hidden md:block">
              <div className="h-4 w-full bg-gray-100 rounded mb-4" />
              <div className="h-4 w-3/4 bg-gray-50 rounded mb-4" />
              <div className="h-4 w-5/6 bg-gray-50 rounded mb-4" />
              <div className="h-4 w-1/2 bg-gray-50 rounded mb-4" />
            </div>
            <div className="flex-1 p-8">
               <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">👋</span>
                  <h1 className="text-3xl font-bold">Getting Started</h1>
               </div>
               <div className="space-y-4">
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-2/3 bg-gray-100 rounded" />
               </div>
               <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-200 flex flex-col items-center text-center">
                  <Sparkles className="w-8 h-8 text-yellow-500 mb-2" />
                  <p className="text-sm font-bold text-gray-400">Template Gerado com Sucesso</p>
               </div>
            </div>
          </div>
        </motion.div>

        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-6"
          >
             <div className="bg-black text-white p-4 h-fit rounded-xl">
                <FileText className="w-6 h-6" />
             </div>
             <div>
                <h4 className="text-xl font-bold mb-2">A Experiência</h4>
                <p className="text-gray-500 leading-relaxed">Em vez de uma página em branco que gera ansiedade, o Notion entrega páginas funcionais prontas para uso.</p>
             </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="flex gap-6"
          >
             <div className="bg-yellow-100 text-yellow-600 p-4 h-fit rounded-xl">
                <Zap className="w-6 h-6" />
             </div>
             <div>
                <h4 className="text-xl font-bold mb-2">O Impacto</h4>
                <p className="text-gray-500 leading-relaxed">Isso elimina o trabalho inicial de entender a ferramenta e foca a energia do usuário em <b>extrair valor</b> dela.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AhaMomentSlide;
