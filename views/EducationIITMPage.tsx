
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Star, Target, Code, Database, Sparkles } from 'lucide-react';
import { ViewState } from '../App';
import SEO from '../components/SEO';

interface EducationIITMPageProps {
  onNavigate: (view: ViewState) => void;
}

const EducationIITMPage: React.FC<EducationIITMPageProps> = ({ onNavigate }) => {
  const iitmLogoUrl = "Images/Fazil-RM-IIT_Madras_Logo.svg.png";

  const curriculum = [
    { title: "Foundations", items: ["Mathematics for Data Science", "Statistics", "Computational Thinking", "English for Communication"] },
    { title: "Core Data Science", items: ["Programming in Python", "Data Structures & Algorithms", "Database Management Systems", "Machine Learning Techniques"] },
    { title: "Advanced Applications", items: ["Big Data Computing", "Deep Learning", "Strategy & Governance", "Industry Projects"] }
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    <SEO 
  title="IIT Madras | Data Science Education" 
  description="Details regarding my BS in Data Science & Applications at the Indian Institute of Technology, Madras."
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
            className="w-48 h-48 rounded-[2.5rem] bg-white dark:bg-zinc-900 p-6 flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-2xl shadow-violet-500/10"
          >
            <img src={iitmLogoUrl} alt="IIT Madras" className="max-w-full max-h-full object-contain" />
          </motion.div>
          <div className="flex-grow text-center md:text-left">
            <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-widest text-accent-violet uppercase bg-violet-500/10 rounded-full">
              Premier Institute of Technology
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-none mb-6">
              BS in Data Science <br/><span className="text-gradient">& Applications</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
              A rigorous program designed by India's top technical institution, focusing on bridging the gap between theoretical knowledge and real-world data engineering.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-[3rem] bg-slate-50 dark:bg-zinc-900/40 border border-slate-200 dark:border-white/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-accent-violet/10 text-accent-violet">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Vision</h3>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              This degree provides a comprehensive foundation in both programming and data science. The curriculum is built to foster a deep understanding of data modeling, statistical analysis, and the deployment of scalable machine learning models.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[3rem] bg-slate-50 dark:bg-zinc-900/40 border border-slate-200 dark:border-white/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Core Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "R", "SQL", "Numpy/Pandas", "Scikit-Learn", "Matplotlib", "Model Deployment", "Probability"].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 text-sm font-bold text-slate-700 dark:text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Curriculum Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-accent-violet" size={32} />
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Curriculum Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculum.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">{section.title}</h4>
                <ul className="space-y-4">
                  {section.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-base font-medium text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-violet mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing Thought */}
        <div className="p-16 rounded-[4rem] bg-accent-violet/5 border border-accent-violet/10 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-accent-violet/10 blur-3xl rounded-full" />
           <p className="text-2xl text-slate-900 dark:text-white font-bold leading-relaxed max-w-2xl mx-auto italic">
             "Learning Data Science at IIT Madras isn't just about algorithms; it's about developing the intuition to solve real human problems with data."
           </p>
        </div>
      </div>
    </div>
  );
};

export default EducationIITMPage;
