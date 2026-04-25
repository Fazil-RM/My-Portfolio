import React, { useRef, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

// @ts-ignore
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPython, SiPostgresql, SiFramer, SiFigma 
} from "react-icons/si";

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import SpotlightCard from './ui/SpotlightCard';
import LogoLoop from './LogoLoop';
import { ViewState } from '../App';

// --- Consolidated Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Globe Component Implementation ---

// Fixed Interface: Added onRender and made it flexible
interface COBEOptions {
  width: number;
  height: number;
  onRender: (state: any) => void; 
  devicePixelRatio: number;
  phi: number;
  theta: number;
  dark: number;
  diffuse: number;
  mapSamples: number;
  mapBrightness: number;
  baseColor: [number, number, number];
  markerColor: [number, number, number];
  glowColor: [number, number, number];
  markers: { location: [number, number]; size: number }[];
  opacity?: number;
  [key: string]: any; // This allows extra properties if COBE adds them
}

const Globe = ({
  className,
  config,
}: {
  className?: string;
  config: Partial<COBEOptions>;
}) => {
  const globeCanvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const rRef = useRef(0);

  const updatePointerInteraction = (clientX: number | null) => {
    if (clientX !== null) {
      pointerInteracting.current = clientX - pointerInteractionMovement.current;
      if (globeCanvasRef.current) globeCanvasRef.current.style.cursor = "grabbing";
    } else {
      pointerInteracting.current = null;
      if (globeCanvasRef.current) globeCanvasRef.current.style.cursor = "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      rRef.current = delta / 200;
    }
  };

  useEffect(() => {
    let globe: any;
    
    const onResize = () => {
      if (globeCanvasRef.current) {
        widthRef.current = globeCanvasRef.current.offsetWidth;
      }
    };

    const initGlobe = async () => {
      window.addEventListener("resize", onResize);
      onResize();

      // Use local cobe if installed, otherwise CDN
      // @ts-ignore
      const cobeModule = await import("https://cdn.jsdelivr.net/npm/cobe/+esm");
      const createGlobe = cobeModule.default;

      if (!globeCanvasRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      if (widthRef.current <= 0) return;

      globe = createGlobe(globeCanvasRef.current, {
        ...config,
        width: widthRef.current * dpr,
        height: widthRef.current * dpr,
        devicePixelRatio: dpr,
        onRender: (state: any) => {
          if (!pointerInteracting.current) {
            phiRef.current += 0.003;
          }
          state.phi = phiRef.current + rRef.current;
          state.width = widthRef.current * dpr;
          state.height = widthRef.current * dpr;
          
          // Call the original onRender if provided in config
          if (config.onRender) config.onRender(state);
        },
      });

      setTimeout(() => {
        if (globeCanvasRef.current) globeCanvasRef.current.style.opacity = "1";
      });
    };

    initGlobe();

    return () => {
      if (globe) globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config]);

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[600px]", className)}>
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={globeCanvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
        style={{ touchAction: 'none' }}
      />
    </div>
  );
};

// --- Main Bento Grid ---
interface BentoGridProps {
  isDark: boolean;
  onNavigate?: (view: ViewState) => void;
}

const techLogos = [
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-slate-900 dark:text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql className="text-[#4169E1]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiFramer className="text-slate-900 dark:text-white" />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiFigma className="text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
];

const BentoGrid: React.FC<BentoGridProps> = ({ isDark, onNavigate }) => {
  const spotlightColor = isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.08)';

  // Fix: Added marker config to globe options correctly
  const globeConfig = useMemo(() => ({
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0.3, 
    dark: isDark ? 1 : 0,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: isDark ? 6 : 14,
    baseColor: (isDark ? [0.2, 0.2, 0.2] : [1, 1, 1]) as [number, number, number],
    markerColor: [139 / 255, 92 / 255, 246 / 255] as [number, number, number], 
    glowColor: (isDark ? [0.1, 0.1, 0.1] : [1, 1, 1]) as [number, number, number],
    markers: [
      { location: [13.0827, 80.2707] as [number, number], size: 0.05 }, 
    ],
  }), [isDark]);

  const easyProgress = (106 / 918);
  const medProgress = (109 / 1674);
  const hardProgress = (47 / 695);

  const easyOffset = 282.74 * (1 - easyProgress);
  const medOffset = 219.91 * (1 - medProgress);
  const hardOffset = 157.08 * (1 - hardProgress);

  const cardTitleClasses = "text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight";

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-4 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[220px]">
        
        {/* CARD 1: Collaboration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 md:row-span-1"
        >
          <SpotlightCard spotlightColor={spotlightColor} className="relative w-full h-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center group overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] border border-slate-900 dark:border-white rounded-full opacity-20" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[600px] h-[450px] md:h-[600px] border border-slate-900 dark:border-white rounded-full opacity-10" />
            </div>
            
            <div className="relative z-10">
              <h3 className={cardTitleClasses}>
                I prioritize client collaboration, <br/>
                <span className="text-gradient">fostering open communication</span>
              </h3>
              <div className="h-10 mt-4 overflow-hidden">
                <button 
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-accent-violet transition-all transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-700 ease-out"
                >
                  Contact <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* CARD 2: Coding Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 md:row-span-2"
        >
          <SpotlightCard spotlightColor={spotlightColor} className="w-full h-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 overflow-hidden group">
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center justify-center w-full mb-6 text-center">
                <div className="flex items-center mb-1">
                  <h3 className={cardTitleClasses}>Coding <span className="text-gradient">Profile</span></h3>
                </div>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600">Problem Solving Stats</p>
              </div>
              
              <div className="relative flex flex-col items-center justify-center py-2">
                <div className="relative size-44 md:size-48">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-zinc-900" />
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="#10b981" strokeWidth="8" strokeDasharray="282.74" strokeDashoffset={easyOffset} strokeLinecap="round" className="transition-all duration-1000" />
                    
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-zinc-900 opacity-30" />
                    <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="8" strokeDasharray="219.91" strokeDashoffset={medOffset} strokeLinecap="round" className="transition-all duration-1000" />
                    
                    <circle cx="50" cy="50" r="25" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-zinc-900 opacity-30" />
                    <circle cx="50" cy="50" r="25" fill="transparent" stroke="#ef4444" strokeWidth="8" strokeDasharray="157.08" strokeDashoffset={hardOffset} strokeLinecap="round" className="transition-all duration-1000" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-black text-slate-900 dark:text-white leading-none">262</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Solved</span>
                  </div>
                </div>

                <div className="mt-8 w-full max-w-[200px] space-y-2.5 px-4">
                   {[
                     { label: 'Easy', color: '#10b981', count: '106', total: '918' },
                     { label: 'Med.', color: '#f59e0b', count: '109', total: '1674' },
                     { label: 'Hard', color: '#ef4444', count: '47', total: '695' }
                   ].map(stat => (
                     <div key={stat.label} className="flex items-center justify-between group/stat">
                        <div className="flex items-center gap-3">
                            <div className="size-1.5 rounded-full" style={{ backgroundColor: stat.color }} />
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{stat.label}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <span className="text-xs font-black text-slate-900 dark:text-white">{stat.count}</span>
                           <span className="text-[10px] text-slate-300 dark:text-zinc-700 font-bold">/{stat.total}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <a href="https://leetcode.com/u/Mohamed_Fazil_/" target="_blank" className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-accent-violet transition-colors">
                LeetCode <ExternalLink size={12} />
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* CARD 3: Location Card with Interactive Globe - Bottom Left (Tall, span 4, row-span 2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 md:row-span-2"
        >
          <SpotlightCard spotlightColor={spotlightColor} className="w-full h-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col overflow-hidden group relative">
            <div className="relative z-20 pointer-events-none mb-4">
              <h3 className={cardTitleClasses}>
                Based in India, <br/>
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">operating worldwide</span>
              </h3>
              <p className="text-xs text-slate-400 font-bold opacity-70">Available for remote collaborations across all timezones.</p>
            </div>

            {/* Immersive Globe coming from bottom - Smaller Scale */}
            <div className="absolute inset-0 top-[35%] flex items-center justify-center pointer-events-auto">
               <Globe config={globeConfig} className="scale-[1.8] md:scale-[2.2] translate-y-20" />
            </div>
          </SpotlightCard>
        </motion.div>

        {/* CARD 4: Book a Call - Middle Center (span 4, row-span 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 md:row-span-1"
        >
          <SpotlightCard spotlightColor={spotlightColor} className="w-full h-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full w-full text-center">
              <h3 className={cardTitleClasses}>
                Let's work together <br/><span className="text-gradient font-black">on your next project</span>
              </h3>
              
              <a 
                href="https://app.cal.com/smartstudydatabse-cmm3r9/book-a-call?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit mt-6 px-10 py-4 bg-gradient-brand text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-violet-500/20"
              >
                Book a call
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* CARD 5: Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-8 md:row-span-1"
        >
          <SpotlightCard spotlightColor={spotlightColor} className="w-full h-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-6 overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center gap-1 text-center mb-6">
                   <h3 className={cardTitleClasses}>My <span className="text-gradient">Tech Stack</span></h3>
                </div>
                
                <div className="w-full px-4 overflow-hidden">
                  <LogoLoop 
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={30}
                    gap={40}
                    fadeOut={true}
                    fadeOutColor={isDark ? "#000000" : "#ffffff"}
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoGrid;