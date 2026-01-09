
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight } from 'lucide-react';
import { SlideProps } from '../types';

const FlywheelSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-full px-8 md:px-24 bg-white overflow-hidden gap-12 lg:gap-20">
      
      {/* Lado Esquerdo: Conteúdo e Título */}
      <div className="flex-1 max-w-xl text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4 block">Sinergia Estratégica</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9]">
            O motor <br/>completo.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-medium mb-8 leading-tight">
            PLG e CLG não são estratégias separadas, mas um sistema que se auto-reforça.
          </p>
          
          <div className="space-y-4 border-l-2 border-gray-100 pl-6 py-2">
            <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
               <div className="w-2 h-2 bg-black rounded-full" />
               <span>PLG gera a base de usuários ativos</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
               <div className="w-2 h-2 bg-black rounded-full" />
               <span>CLG transforma usuários em advogados</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-gray-800">
               <div className="w-2 h-2 bg-black rounded-full" />
               <span>A comunidade atrai novos usuários (Aquisição)</span>
            </div>
          </div>

          <motion.div 
            className="mt-10 flex items-center gap-2 text-gray-300 font-black text-xs uppercase tracking-widest"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span>O ciclo se repete com mais força</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Lado Direito: O Flywheel Visual */}
      <div className="flex-1 flex items-center justify-center relative min-h-[500px] w-full max-w-lg lg:max-w-xl">
         
         {/* Container principal do círculo para manter proporção */}
         <div className="relative w-full aspect-square flex items-center justify-center scale-90 lg:scale-100">
            
            {/* Logo Central com Sombra Dinâmica */}
            <motion.div 
              className="z-30 bg-white p-5 md:p-7 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.1)] border-4 border-black"
              whileHover={{ scale: 1.1 }}
            >
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
                 alt="Notion" 
                 className="w-10 h-10 md:w-16 md:h-16 object-contain"
               />
            </motion.div>

            {/* Anel de Rotação (Atrás dos cards) */}
            <motion.div 
              className="absolute inset-0 rounded-full border-[2px] border-dashed border-gray-200"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Anel de Progresso com Ícone */}
            <motion.div 
              className="absolute inset-0 rounded-full border-[6px] md:border-[8px] border-gray-50"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-full shadow-lg z-40">
                  <RefreshCw className="w-4 h-4" />
               </div>
            </motion.div>

            {/* Cards do Flywheel - Posicionamento em Cruz */}
            {[
              { id: 1, title: "PLG Onboarding", desc: "Cria usuários satisfeitos", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-4" },
              { id: 2, title: "Advocacy (CLG)", desc: "Usuários formam comunidade", pos: "top-1/2 right-0 translate-x-4 -translate-y-1/2" },
              { id: 3, title: "Social Proof", desc: "Comunidade cria templates", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4" },
              { id: 4, title: "Aquisição", desc: "Templates atraem usuários", pos: "top-1/2 left-0 -translate-x-4 -translate-y-1/2" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className={`absolute ${item.pos} bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 w-44 md:w-52 z-40`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (i * 0.2), type: "spring" }}
                whileHover={{ y: item.pos.includes('top') ? -10 : item.pos.includes('bottom') ? 10 : 0, x: item.pos.includes('right') ? 10 : item.pos.includes('left') ? -10 : 0, scale: 1.05 }}
              >
                 <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-5 h-5 bg-black text-white text-[10px] font-black rounded-full">
                      {item.id}
                    </span>
                    <h5 className="font-black text-xs md:text-sm tracking-tight">{item.title}</h5>
                 </div>
                 <p className="text-[10px] md:text-xs text-gray-500 leading-tight font-medium">{item.desc}</p>
              </motion.div>
            ))}

            {/* Elementos Decorativos de Fundo */}
            <div className="absolute inset-[15%] rounded-full bg-gray-50/50 -z-10 blur-3xl" />
         </div>
      </div>
    </div>
  );
};

export default FlywheelSlide;
