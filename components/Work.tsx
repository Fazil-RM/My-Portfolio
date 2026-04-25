
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import SpotlightCard from './ui/SpotlightCard';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg font-medium">
              A curated selection of my recent work, spanning from AI platforms to scalable SaaS architectures.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center text-accent-violet font-bold group mt-4 md:mt-0 transition-all hover:translate-x-1">
            Explore all repositories
            <ArrowUpRight size={18} className="ml-1" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className={project.gridSpan || ''}
            >
              <SpotlightCard className="group relative h-full flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                    <div className="flex space-x-4">
                      <a href={project.demoUrl} className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-accent-cyan hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                        <ExternalLink size={24} />
                      </a>
                      <a href={project.repoUrl} className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-150">
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-slate-200 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-full text-slate-600 dark:text-slate-400 group-hover:text-accent-violet transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-3 group-hover:text-accent-violet transition-colors tracking-tight text-slate-900 dark:text-white">
                    <span className="group-hover:text-gradient transition-all">{project.title}</span>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                     <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">0{index + 1}</span>
                     <button className="text-accent-violet font-black text-sm flex items-center group/btn rounded-full transition-all">
                       Explore
                       <ArrowUpRight size={14} className="ml-1 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                     </button>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
