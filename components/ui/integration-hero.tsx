
"use client";

import { Button } from "./button";
import React from "react";

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  "https://cdn-icons-png.flaticon.com/512/733/733609.png",
  "https://cdn-icons-png.flaticon.com/512/732/732084.png",
  "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  "https://cdn-icons-png.flaticon.com/512/281/281763.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-widest rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white">
          ⚡ Integrations
        </span>
        <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
          Integrate with <br/><span className="text-accent-violet">favorite tools</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
          250+ top apps are available to integrate seamlessly with your workflow.
        </p>
        <Button variant="default" className="mt-10 px-10 py-6 rounded-full font-bold shadow-xl transition-transform hover:scale-105 active:scale-95">
          Get started
        </Button>

        {/* Carousel */}
        <div className="mt-24 overflow-hidden relative pb-10">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div key={i} className="h-20 w-20 flex-shrink-0 rounded-[1.5rem] bg-white dark:bg-slate-800 shadow-xl dark:shadow-none border border-slate-100 dark:border-white/5 flex items-center justify-center">
                <img src={src} alt="icon" className="h-12 w-12 object-contain filter dark:brightness-110" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-8 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div key={i} className="h-20 w-20 flex-shrink-0 rounded-[1.5rem] bg-white dark:bg-slate-800 shadow-xl dark:shadow-none border border-slate-100 dark:border-white/5 flex items-center justify-center">
                <img src={src} alt="icon" className="h-12 w-12 object-contain filter dark:brightness-110" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}} />
    </section>
  );
}
