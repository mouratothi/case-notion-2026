
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';

const IntroSlide: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
          alt="Notion Logo" 
          className="w-24 h-24 mx-auto mb-10 drop-shadow-sm"
        />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-none"
      >
        O Motor de Crescimento <br/><span className="text-gray-400">do Notion</span>
      </motion.h1>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-medium"
      >
        Desvendando as estratégias de Product-Led e Community-Led Growth que criaram um gigante de $10 bilhões.
      </motion.p>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onNext}
        className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
      >
        Começar Jornada
      </motion.button>
    </div>
  );
};

export default IntroSlide;
