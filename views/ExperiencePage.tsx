import React from 'react';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

   <SEO 
  title="Professional Experience" 
  description="Career timeline of Mohamed Fazil: Founder of FOS Automations, Product Manager at LearnEzily, and Full Stack Developer at FINMA Tech Solution."
/>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            The <span className="text-accent-violet">Journey.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From learning my first HTML tag to leading engineering teams at scale.
          </p>
        </motion.div>
        
        <Timeline />
        
        <div className="mt-32">
            <Contact />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;