
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Layers, Infinity, FunctionSquare, Ruler, Lightbulb } from 'lucide-react';
import { ViewState } from '../App';
import SEO from '../components/SEO';

interface EducationNewCollegePageProps {
  onNavigate: (view: ViewState) => void;
}

const EducationNewCollegePage: React.FC<EducationNewCollegePageProps> = ({ onNavigate }) => {
  const newCollegeLogoUrl = "https://thenewcollege.edu.in/images/logo%20png%20bgm.png";

  const modules = [
    { title: "Algebra", desc: "Linear Algebra, Group Theory, and Abstract structures that form the basis of modern computing.", icon: <Layers size={20} /> },
    { title: "Calculus", desc: "Differential and Integral calculus, essential for optimization in machine learning.", icon: <FunctionSquare size={20} /> },
    { title: "Real Analysis", desc: "The rigorous study of limits, continuity, and sequences for mathematical proofing.", icon: <Infinity size={20} /> },
    { title: "Mechanics", desc: "Applying mathematics to physical systems and dynamic motion.", icon: <Ruler size={20} /> }
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

  <SEO 
  title="The New College | Mathematics" 
  description="Academic background in BSc Mathematics from The New College, Chennai. Merging logical theory with practical code."
/>
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('about')}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all group mb-12"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to About</span>
        </button>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-48 h-48 rounded-[2.5rem] bg-white dark:bg-zinc-900 p-8 flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-2xl shadow-accent-cyan/10"
          >
            <img src={newCollegeLogoUrl} alt="The New College" className="max-w-full max-h-full object-contain" />
          </motion.div>
          <div className="flex-grow text-center md:text-left">
            <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-widest text-accent-cyan uppercase bg-cyan-500/10 rounded-full">
              Foundation in Analytical Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none mb-6">
              BSc in <br/><span className="text-gradient">Mathematics</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
              Developing the logical framework and problem-solving mindset necessary for high-level engineering and algorithmic analysis.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan">
                <Brain size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Analytical Philosophy</h3>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Mathematics at The New College is more than just numbers; it's a deep dive into logic and the fundamental rules that govern the universe. This program has been pivotal in shaping how I approach complex coding challenges.
            </p>
            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-zinc-900/40 border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="text-amber-500" size={20} />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Key Takeaway</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-bold">
                    "A strong mathematical foundation is the secret weapon of every world-class developer."
                </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {modules.map((module, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 shadow-sm flex items-start gap-6 hover:border-accent-cyan/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-zinc-600 shrink-0">
                   {module.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{module.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{module.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-20 border-t border-slate-100 dark:border-white/5 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Duration: 2023 - 2026</p>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Currently pursuing advanced specialization in Numerical Methods and Stochastic Processes.</p>
        </div>
      </div>
    </div>
  );
};

export default EducationNewCollegePage;
