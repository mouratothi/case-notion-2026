
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Play, ShoppingBag } from 'lucide-react';
import { SlideProps } from '../types';

const CommunityImpactSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-12 bg-gray-50/50">
      <div className="text-center max-w-5xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">O resultado do CLG: Um universo de conteúdo.</h2>
        <p className="text-xl text-gray-500">Ativos que o Notion jamais conseguiria criar ou pagar sozinho.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
         <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="p-4 bg-orange-50 text-orange-600 rounded-full mb-6">
               <MessageSquare className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black mb-4">Reddit /r/Notion</h4>
            <p className="text-4xl font-black mb-2">+360.000</p>
            <p className="text-sm text-gray-500 leading-relaxed">Membros discutindo, compartilhando templates e tirando dúvidas 24/7.</p>
         </motion.div>

         <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="p-4 bg-pink-50 text-pink-600 rounded-full mb-6">
               <ShoppingBag className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black mb-4">Marketplaces</h4>
            <p className="text-4xl font-black mb-2">$110.000</p>
            <p className="text-sm text-gray-500 leading-relaxed">Exemplo: Template "Newsletter OS" de Janel Loi gerou seis dígitos em vendas.</p>
         </motion.div>

         <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="p-4 bg-red-50 text-red-600 rounded-full mb-6">
               <Play className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black mb-4">YouTube Creators</h4>
            <p className="text-4xl font-black mb-2">$200.000</p>
            <p className="text-sm text-gray-500 leading-relaxed">Criadores como August Bradley faturam alto com cursos sobre Notion.</p>
         </motion.div>
      </div>
    </div>
  );
};

export default CommunityImpactSlide;
