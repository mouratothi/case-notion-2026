
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { SlideProps } from '../types';

const data = [
  { name: 'Pagantes', value: 13.33 },
  { name: 'Gratuitos', value: 86.67 },
];
const COLORS = ['#000000', '#f3f4f6'];

const ConversionStatsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <motion.h2 
        className="text-4xl md:text-6xl font-black mb-16 text-center tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        O resultado do PLG: <br/><span className="text-gray-400 font-medium">Uma máquina de conversão.</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
        <div className="w-full md:w-1/2 h-[400px] relative">
           <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={150}
                  paddingAngle={5}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
           </ResponsiveContainer>
           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.span 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-6xl font-black"
              >
                13,33%
              </motion.span>
              <span className="text-xs uppercase font-bold text-gray-400">Conversão</span>
           </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
           <div className="p-8 bg-gray-50 rounded-3xl">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Referência de Mercado</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span>Média (Good)</span>
                    <span className="font-bold">3 - 5%</span>
                 </div>
                 <div className="flex justify-between items-center text-green-600">
                    <span>Excelente (Great)</span>
                    <span className="font-bold">6 - 8%</span>
                 </div>
                 <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-2xl font-black">
                    <span>Notion</span>
                    <span className="bg-black text-white px-3 py-1 rounded-lg">13.3%</span>
                 </div>
              </div>
           </div>
           <p className="text-gray-500 leading-relaxed italic text-center">
             Isso é praticamente o <b>dobro do benchmark 'Great'</b> para um modelo freemium self-serve.
           </p>
        </div>
      </div>
    </div>
  );
};

export default ConversionStatsSlide;
