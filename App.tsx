
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';
import IntroSlide from './components/IntroSlide';
import GrowthStatsSlide from './components/GrowthStatsSlide';
import TwoEnginesSlide from './components/TwoEnginesSlide';
import PLGIntroSlide from './components/PLGIntroSlide';
import ValueJourneySlide from './components/ValueJourneySlide';
import SetupMomentSlide from './components/SetupMomentSlide';
import AhaMomentSlide from './components/AhaMomentSlide';
import HabitMomentSlide from './components/HabitMomentSlide';
import ConversionStatsSlide from './components/ConversionStatsSlide';
import CLGIntroSlide from './components/CLGIntroSlide';
import EvangelistsFunnelSlide from './components/EvangelistsFunnelSlide';
import CommunityImpactSlide from './components/CommunityImpactSlide';
import FlywheelSlide from './components/FlywheelSlide';
import PrinciplesSlide from './components/PrinciplesSlide';

const TOTAL_SLIDES = 14;

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlide = () => {
    const props = { onNext: nextSlide, onPrev: prevSlide };
    switch (currentSlide) {
      case 0: return <IntroSlide {...props} isFirst />;
      case 1: return <GrowthStatsSlide {...props} />;
      case 2: return <TwoEnginesSlide {...props} />;
      case 3: return <PLGIntroSlide {...props} />;
      case 4: return <ValueJourneySlide {...props} />;
      case 5: return <SetupMomentSlide {...props} />;
      case 6: return <AhaMomentSlide {...props} />;
      case 7: return <HabitMomentSlide {...props} />;
      case 8: return <ConversionStatsSlide {...props} />;
      case 9: return <CLGIntroSlide {...props} />;
      case 10: return <EvangelistsFunnelSlide {...props} />;
      case 11: return <CommunityImpactSlide {...props} />;
      case 12: return <FlywheelSlide {...props} />;
      case 13: return <PrinciplesSlide {...props} isLast />;
      default: return null;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 flex items-center gap-4 z-50">
        <div className="text-xs font-medium text-gray-400 mr-4">
          {currentSlide + 1} / {TOTAL_SLIDES}
        </div>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      <div className="fixed top-8 right-8 flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity hidden md:flex">
        <Keyboard className="w-4 h-4" />
        <span className="text-[10px] uppercase tracking-widest font-bold">Use as setas para navegar</span>
      </div>

      <div className="fixed top-8 left-8 flex items-center gap-2">
         <img 
           src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
           alt="Notion Logo" 
           className="w-8 h-8 object-contain"
         />
         <span className="font-bold text-lg tracking-tight">Growth Case</span>
      </div>
    </div>
  );
};

export default App;
