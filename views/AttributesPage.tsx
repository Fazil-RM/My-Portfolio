
import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const AttributesPage: React.FC = () => {
  const sections = [
    {
      id: '01',
      title: 'The Journey',
      content: (
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Building this digital space was an exercise in balancing performance with personality. What began as a blank canvas evolved through iterative experimentation, with a focus on fluid motion, accessibility, and meaningful interaction.
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Every component—from immersive 3D navigation to carefully structured bento grids—was designed to showcase both technical rigor and visual clarity. This portfolio is more than a resume; it’s a living laboratory where I explore modern frontend engineering, motion systems, and data-driven interfaces.
          </p>
        </div>
      )
    },
    {
      id: '02',
      title: 'Inspirations',
      content: (
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            Great work is rarely created in isolation. This project draws inspiration from the clarity and restraint of Apple, the experimental layouts celebrated on Awwwards, and the open collaboration culture of GitHub and Dribbble.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {[
              { name: 'Linear', desc: 'Precision and focus' },
              { name: 'Stripe Docs', desc: 'Developer-first clarity' },
              { name: 'Vercel', desc: 'Performance and DX excellence' },
              { name: 'Apple', desc: 'Timeless minimalism' }
            ].map((item) => (
              <div key={item.name} className="flex flex-col gap-1">
                <span className="text-base font-bold text-slate-900 dark:text-white">{item.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: '03',
      title: 'Colophon',
      content: (
        <div className="space-y-12">
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            A breakdown for those who appreciate what happens behind the scenes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Core Stack</h4>
              <ul className="space-y-3 text-base font-bold text-slate-900 dark:text-white">
                <li>React 19 & TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Vite & modern ESM</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Infrastructure</h4>
              <ul className="space-y-3 text-base font-bold text-slate-900 dark:text-white">
                <li>Vercel Edge Network</li>
                <li>ImageKit CDN</li>
                <li>Lucide Icons</li>
                <li>Plus Jakarta Sans</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-24 lg:py-32 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

      <SEO 
  title="Credits & Attributions" 
  description="Acknowledging the open-source libraries and designers who provided the building blocks for this portfolio."
/>
        
        {/* Header Section - Centered and Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 flex flex-col items-center text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-6 block">
            Attribution
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 dark:text-white leading-[1.2] md:leading-[1.1]">
            The Behind <br/><span className="text-gradient">The Scenes.</span>
          </h1>
        </motion.div>

        {/* Table Formation Section */}
        <div className="space-y-24 md:space-y-40">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 border-t border-slate-100 dark:border-white/5 pt-12"
            >
              {/* Left Column: Number & Title */}
              <div className="md:col-span-4 lg:col-span-3 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-accent-violet uppercase tracking-[0.4em]">
                    {section.id}
                  </span>
                  <div className="h-px w-8 bg-accent-violet/30" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                  {section.title}
                </h2>
              </div>

              {/* Right Column: Content */}
              <div className="md:col-span-8 lg:col-span-9">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Branding Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 pt-20 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-end gap-10"
        >
          <div className="space-y-2">
            <p className="text-xl md:text-3xl font-medium text-slate-900 dark:text-white tracking-tight uppercase italic opacity-90">Designed with intent.</p>
            <p className="text-xl md:text-3xl font-medium text-slate-900 dark:text-white tracking-tight uppercase italic opacity-90">Engineered for performance.</p>
          </div>
          <div className="flex flex-col items-end gap-3 text-right">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">crafted by</span>
            <h3 className="text-3xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Mohamed <span className="text-gradient">Fazil</span>
            </h3>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AttributesPage;
