
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Users, Settings, Zap } from 'lucide-react';
import { SlideProps } from '../types';

const TwoEnginesSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight leading-tight max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        O sucesso do Notion é impulsionado por dois motores interligados.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-10 border-2 border-black rounded-3xl bg-white flex flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-black text-white p-4 rounded-2xl mb-6">
            <Box className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-4">Motor 1: PLG</h3>
          <p className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">Product-Led Growth</p>
          <p className="text-gray-600 leading-relaxed">
            Uma estratégia onde o <b>próprio produto</b> é o principal vetor de aquisição, ativação e retenção. 
            A experiência do usuário vende a ferramenta.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-10 border-2 border-gray-100 bg-gray-50 rounded-3xl flex flex-col items-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gray-200 text-black p-4 rounded-2xl mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-4">Motor 2: CLG</h3>
          <p className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-4">Community-Led Growth</p>
          <p className="text-gray-600 leading-relaxed">
            A <b>comunidade de usuários</b> se torna um canal de crescimento, criando conteúdo, 
            oferecendo suporte e influenciando novos adeptos.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-12 flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Zap className="w-4 h-4 fill-current" />
        SINERGIA TOTAL
      </motion.div>
    </div>
  );
};

export default TwoEnginesSlide;
