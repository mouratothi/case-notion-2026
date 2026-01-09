
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SlideProps } from '../types';

const data = [
  { year: '2020', users: 1000000, label: '1 Milhão' },
  { year: '2024', users: 100000000, label: '100 Milhões' },
];

const GrowthStatsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-24">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-12 text-center tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Um crescimento de <span className="bg-black text-white px-2">100x</span> em 4 anos.
      </motion.h2>

      <div className="w-full h-[400px] mb-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis dataKey="year" axisLine={false} tickLine={false} />
            <Tooltip 
              cursor={{fill: '#f5f5f5'}}
              contentStyle={{ borderRadius: '8px', border: '1px solid #eee' }}
              formatter={(value: number) => value.toLocaleString()}
            />
            <Bar dataKey="users" radius={[8, 8, 0, 0]} barSize={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? "#e5e7eb" : "#000000"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center w-full max-w-4xl">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">2020</p>
          <p className="text-4xl font-black">1.000.000</p>
          <p className="text-gray-500">Usuários Ativos</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">2024</p>
          <p className="text-4xl font-black">100.000.000</p>
          <p className="text-gray-500">Usuários Ativos</p>
        </motion.div>
      </div>

      <motion.p 
        className="mt-16 text-gray-400 text-sm max-w-xl text-center italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Hoje, a empresa é avaliada em <b>$10 bilhões</b> e possui mais de 80% de sua base de usuários fora dos EUA.
      </motion.p>
    </div>
  );
};

export default GrowthStatsSlide;
