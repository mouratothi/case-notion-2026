
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Share2, FileText, CheckSquare, Database, Calendar, Users, Target } from 'lucide-react';
import { SlideProps } from '../types';

const HabitMomentSlide: React.FC<SlideProps> = () => {
  const dominos = ["Você", "Colega 1", "Colega 2", "Equipe", "Departamento", "Organização"];
  
  const templateIcons = [
    { icon: <FileText className="w-4 h-4" />, label: "Docs", color: "bg-blue-50 text-blue-500" },
    { icon: <CheckSquare className="w-4 h-4" />, label: "Tasks", color: "bg-green-50 text-green-500" },
    { icon: <Database className="w-4 h-4" />, label: "CRM", color: "bg-purple-50 text-purple-500" },
    { icon: <Calendar className="w-4 h-4" />, label: "Events", color: "bg-orange-50 text-orange-500" },
    { icon: <Users className="w-4 h-4" />, label: "Wiki", color: "bg-indigo-50 text-indigo-500" },
    { icon: <Target className="w-4 h-4" />, label: "Goals", color: "bg-red-50 text-red-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <div className="text-center max-w-4xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">#3 Habit Moment: Fluxo de Trabalho.</h2>
        <p className="text-xl text-gray-500">Transformando o uso inicial em um sistema essencial para o dia a dia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
        {/* Lado Esquerdo: Templates */}
        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-black text-white rounded-xl">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Templates como motor de expansão</h3>
           </div>
           <p className="text-gray-600 text-lg leading-relaxed">
             Com mais de <b>30.000 templates</b>, o usuário resolve novos problemas sem sair do ecossistema, criando um "lock-in" natural e produtivo.
           </p>
           <div className="grid grid-cols-3 gap-4">
              {templateIcons.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  /* Changed 'shadow' to 'boxShadow' to fix Framer Motion type error */
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                  className="h-24 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 group cursor-default transition-all"
                >
                  <div className={`p-2 rounded-lg transition-transform group-hover:scale-110 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Lado Direito: Efeito Dominó */}
        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-100 text-black rounded-xl">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">O Efeito Dominó</h3>
           </div>
           
           <div className="flex items-end justify-between h-48 border-b-2 border-gray-100 pb-2 overflow-hidden px-4">
              {dominos.map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 72 }}
                  // Aumentamos a duração para 1.2s e o delay para 0.3s entre cada um para ficar bem mais lento
                  transition={{ 
                    delay: i * 0.3, 
                    duration: 1.2, 
                    ease: [0.34, 1.56, 0.64, 1] // Um easing personalizado para uma queda suave e com "peso"
                  }}
                  className="w-12 bg-black text-white p-2 rounded-lg flex items-center justify-center origin-bottom-right shadow-lg"
                  style={{ height: `${60 + i * 20}px` }}
                >
                  <span className="text-[8px] font-black whitespace-nowrap -rotate-90 tracking-tighter uppercase opacity-80">
                    {text}
                  </span>
                </motion.div>
              ))}
           </div>
           
           <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
             <p className="text-gray-500 text-sm italic leading-relaxed">
               Cada novo convite reduz o custo marginal de aquisição e aumenta o valor percebido pela rede. No Notion, <b>colaboração não é um recurso, é o destino final.</b>
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HabitMomentSlide;
