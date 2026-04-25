
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 overflow-hidden bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Career <span className="text-gradient">Journey</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A chronological look at my professional experience and academic background.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-800 hidden md:block" />

          <div className="space-y-16 relative">
            {TIMELINE.map((item, index) => {
              const isExperience = item.type === 'experience';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Spacer for Desktop */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Icon Node */}
                  <div className="relative flex items-center justify-center z-10 my-4 md:my-0">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 bg-gradient-brand text-white ring-4 ring-white/5`}>
                      {isExperience ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 px-4 md:px-12`}>
                    <div className="p-2 transition-all">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className={`flex items-center text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300`}>
                          <Calendar size={12} className="mr-1.5" />
                          {item.date}
                        </span>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className={`text-lg font-semibold mb-4 text-gradient`}>
                        {item.subtitle}
                      </p>
                      <p className="text-slate-400 leading-relaxed italic text-lg">
                        "{item.description}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
