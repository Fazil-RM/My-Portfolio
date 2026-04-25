
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Palette, Target, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  isDark: boolean;
}

const skillGroups = [
  {
    category: 'Development',
    icon: <Code2 size={24} />,
    description: 'Building robust, scalable applications with modern frameworks and engineering best practices.',
    skills: ['Python', 'JavaScript', 'React', 'Next.js', 'Node.js', 'SQL', 'Git']
  },
  {
    category: 'Data Science',
    icon: <Database size={24} />,
    description: 'Extracting insights and making data-driven decisions through advanced analytical modeling.',
    skills: ['Data Analysis', 'ML', 'Pandas', 'NumPy', 'Tableau', 'Power BI']
  },
  {
    category: 'Design & Creative',
    icon: <Palette size={24} />,
    description: 'Crafting intuitive user interfaces and brand experiences that resonate with users.',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Brand', 'Storytelling']
  },
  {
    category: 'Leadership',
    icon: <Target size={24} />,
    description: 'Leading cross-functional teams and managing product lifecycles with agile methodology.',
    skills: ['Agile', 'Planning', 'Product', 'Strategy']
  }
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  return (
    <section className="py-16 md:py-40 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section - Centered */}
        <div className="mb-12 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-500 mb-6 block">
              the skills
            </span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 dark:text-white mb-8 md:mb-10 leading-[1.2] md:leading-[1.1]">
              Technical Proficiency &
               <br className="hidden md:block" />
              <span className="text-gradient">
                Strategic Execution
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
              className="group relative p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-accent-violet/30 transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-xl text-center md:text-left items-center md:items-start"
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 mb-6 md:mb-8">
                <div className="size-12 md:size-14 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-accent-violet shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(group.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-widest mt-1">
                    Engineering & Logic
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-slate-600 dark:text-zinc-400 font-medium leading-relaxed mb-8 flex-grow">
                {group.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] md:text-xs font-bold text-slate-500 dark:text-zinc-400 group-hover:text-accent-violet group-hover:border-accent-violet/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Meta */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-24 flex flex-col items-center gap-8 border-t border-slate-100 dark:border-white/5 pt-12"
        >
           <div className="flex items-center gap-3">
              <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                Constantly learning new things
              </span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
