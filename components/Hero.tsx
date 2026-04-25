
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const email = 'mohamedfazilrm@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[95vh] flex items-center justify-center py-12 md:py-20 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-accent-violet uppercase bg-violet-500/10 dark:bg-violet-900/20 rounded-full border border-accent-violet/10 backdrop-blur-sm">
            Based in India • Open for Work
          </span>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 dark:text-white mb-8 md:mb-10 leading-[1.2] md:leading-[1.1]">
            I build scalable applications and <br className="hidden md:block" />
            tell stories with <span className="text-gradient">complex data.</span>
          </h1>

          <div className="flex flex-col items-center justify-center space-y-8 md:space-y-10">
            <p className="max-w-3xl text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium tracking-tight px-4">
              Hello, I'm Fazil RM a Full Stack Dev & Data Analyst.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-lg">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full flex items-center justify-center group hover:scale-105 active:scale-95 transition-all shadow-xl dark:shadow-white/5 whitespace-nowrap"
              >
                Let's Connect
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>

              <div className="relative">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all py-2 md:py-3 px-2 group"
                >
                  <span className="text-base md:text-lg font-semibold tracking-tight transition-colors">{email}</span>
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check size={16} className="text-emerald-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="group-hover:text-accent-violet transition-colors"
                      >
                        <Copy size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-emerald-500 uppercase tracking-widest whitespace-nowrap"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
