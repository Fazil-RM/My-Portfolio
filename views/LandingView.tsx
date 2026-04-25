
import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import InfiniteMenu from '../components/InfiniteMenu';
import SkillsSection from '../components/SkillsSection';
import { ViewState } from '../App';
import { CURATED_WORKS } from '../constants';
import SEO from '../components/SEO';


interface LandingViewProps {
  onNavigate: (view: ViewState, postId?: string) => void;
  isDark: boolean; 
}

const LandingView: React.FC<LandingViewProps> = ({ onNavigate, isDark }) => {


return (
  <div className="flex flex-col bg-white dark:bg-black min-h-screen transition-colors duration-500 relative">
    <Hero onNavigate={onNavigate} />
      <SEO 
  title="Full Stack Developer & Data Scientist" 
  description="Fazil R M - Portfolio of a Chennai-based developer specializing in React, Python, and Automation. Founder of FOS Automations and LearnEzily."
/>
      {/* Professional Bento Grid Section */}
      <div className="pb-20">
        <BentoGrid isDark={isDark} onNavigate={onNavigate} />
      </div>

      {/* 3D Curated Works Section */}
      <div className="h-[75vh] md:h-[100vh] w-full border-y border-slate-100 dark:border-white/5">
        <InfiniteMenu items={CURATED_WORKS} />
      </div>

      {/* Skills Showcase Section */}
      <div className="border-t border-slate-100 dark:border-white/5">
        <SkillsSection isDark={isDark} />
      </div>
    </div>
  );
};

export default LandingView;
