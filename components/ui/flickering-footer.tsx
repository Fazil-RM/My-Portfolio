
"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from 'lucide-react';
import { cn } from "../../lib/utils";

export const Icons = {
  logo: ({ className }: { className?: string }) => (
    <svg
      width="42"
      height="24"
      viewBox="0 0 42 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6 fill-accent-violet", className)}
    >
      <path
        d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
        fill="currentColor"
      />
      <path
        d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const AnimatedGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-accent-violet/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[70%] bg-accent-cyan/15 blur-[100px] rounded-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-white/50 dark:to-black/50" />
    </div>
  );
};

export const GradientFooter = ({ onNavigate }: { onNavigate: (v: any) => void }) => {
  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => setTablet(window.innerWidth < 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const siteConfig = {
    title: "Get In Touch",
    availability: "I'm available for full-time roles & freelance projects.",
    mission: "I thrive on crafting dynamic web applications, and delivering seamless user experiences.",
    footerLinks: [
      {
        title: "Navigation",
        links: [
          { id: 1, title: "Home", view: "home" },
          { id: 2, title: "About", view: "about" },
          { id: 3, title: "Work", view: "work" },
        ],
      },
      {
        title: "Explore",
        links: [
          { id: 4, title: "Blog", view: "blog" },
          { id: 5, title: "Guestbook", view: "guestbook" },
          { id: 6, title: "Uses", view: "uses" },
          { id: 7, title: "Links", view: "links" },
        ],
      },
    ],
    socials: [
      { icon: Github, href: "https://github.com/Mohamed-Fazil-RM" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/mohamedfazil2005/" },
      { icon: Instagram, href: "https://www.instagram.com/__fazil_rm__/" },
    ]
  };

  return (
    <footer id="footer" className="w-full bg-white dark:bg-black border-t border-slate-200 dark:border-white/5 pt-24 overflow-hidden relative">
      <div className="flex flex-col items-center text-center px-10 mb-20 relative z-10">
        {/* Logo & Headline */}
        <div className="flex flex-col items-center justify-center gap-y-6 max-w-2xl mx-auto">
          <Icons.logo />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight">
            {siteConfig.title}
          </h2>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 max-w-xl">
               {siteConfig.availability}
            </p>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
              {siteConfig.mission}
            </p>
          </div>
        </div>
        
        {/* Links Grid Section */}
        <div className="pt-20 w-full max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col items-center gap-y-5">
                <li className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-center gap-2 text-[16px] font-bold text-slate-600 dark:text-slate-400 hover:text-accent-violet transition-all duration-300"
                  >
                    <button onClick={() => onNavigate(link.view)}>{link.title}</button>
                    <ChevronRightIcon className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Social Logos */}
        <div className="mt-16 flex items-center justify-center gap-8">
           {siteConfig.socials.map((social, idx) => (
             <a 
               key={idx} 
               href={social.href} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-slate-400 hover:text-accent-violet transition-colors duration-300"
             >
               <social.icon size={24} strokeWidth={2.5} />
             </a>
           ))}
        </div>
      </div>
      
      {/* Visual Bottom Section */}
      <div className="w-full h-48 md:h-72 relative z-0 mt-8">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-violet/10 via-transparent to-white dark:to-black z-10" />
        <AnimatedGradient />
        
        <div className="absolute bottom-10 w-full flex justify-center z-20">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
             © {new Date().getFullYear()}. Handcrafted in India.
           </p>
        </div>
      </div>
    </footer>
  );
};

// Maintaining backward compatibility for the component name used in Footer.tsx
export const FlickeringFooter = GradientFooter;
