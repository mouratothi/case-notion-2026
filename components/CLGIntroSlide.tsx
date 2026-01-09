
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowDown } from 'lucide-react';
import { SlideProps } from '../types';

const CLGIntroSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24 bg-white select-none">
      {/* Header Minimalista */}
      <div className="text-center max-w-4xl mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block"
        >
          Estratégia de Amplificação
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
          Community-Led <br/>
          <span className="text-gray-300">Growth.</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-12 w-full max-w-7xl h-[450px]">
        
        {/* Visual: O Novo Iceberg (Abstrato e Sofisticado) */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
          
          {/* Linha do Horizonte (Mar) */}
          <div className="absolute top-[35%] left-0 w-full h-[1px] bg-gray-200 z-10" />
          
          <div className="relative w-full h-full flex flex-col items-center">
            
            {/* Topo: MKT Oficial (A Ponta) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 z-20 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white border-2 border-black rounded-lg rotate-45 flex items-center justify-center shadow-xl">
                <div className="w-8 h-8 bg-black rounded-sm -rotate-45" />
              </div>
              <span className="mt-8 text-[10px] font-black uppercase tracking-widest text-black">Mkt Oficial (10%)</span>
            </motion.div>

            {/* Base: Comunidade (A Massa) */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '65%', opacity: 1 }}
              transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
              className="absolute bottom-0 w-[85%] bg-black rounded-t-[4rem] flex flex-col items-center justify-start pt-16 px-12 text-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 1.5 }}
                className="absolute top-8"
              >
                <ArrowDown className="w-12 h-12 text-white" />
              </motion.div>
              
              <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
                COMUNIDADE
              </h3>
              <p className="text-gray-400 text-sm font-medium max-w-xs leading-relaxed">
                A força invisível que sustenta a marca, cria confiança e escala o produto globalmente sem custo de mídia.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Conteúdo: Conceito e Citação */}
        <div className="flex-1 flex flex-col justify-between py-4">
          <div className="space-y-6">
            <div className="inline-block p-2 bg-black text-white rounded-lg">
              <Quote className="w-5 h-5" />
            </div>
            <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-tight tracking-tight">
              "CLG é quando o seu melhor time de marketing não está na sua folha de pagamento."
            </p>
            <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-6">
              É a transição de um modelo de <b>transação</b> para um modelo de <b>pertencimento</b>. No Notion, os usuários não apenas usam; eles advogam.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
             <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Insight Estratégico</p>
             <p className="text-sm text-gray-600 leading-relaxed italic">
               O marketing oficial gera <b>atenção</b>. <br/>
               A comunidade gera <b>autoridade</b>.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLGIntroSlide;
