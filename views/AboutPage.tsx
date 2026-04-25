import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Award, ShieldCheck, GraduationCap, Code, Database, Layout } from 'lucide-react';
import About from '../components/About';
import { ViewState } from '../App';
import SEO from '../components/SEO';

interface AboutPageProps {
  onNavigate: (view: ViewState) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const iitmLogoUrl = "Images/Fazil-RM-IIT_Madras_Logo.svg.png";
  const newCollegeLogoUrl = "https://thenewcollege.edu.in/images/logo%20png%20bgm.png";
  
  const skillGroups = [
    { category: 'Development', skills: ['Python', 'JavaScript', 'React', 'Next.js', 'Node.js', 'SQL', 'Git'] },
    { category: 'Data Science', skills: ['Data Analysis', 'Machine Learning', 'Pandas', 'NumPy', 'Tableau', 'Power BI'] },
    { category: 'Design & Creative', skills: ['Figma', 'UI/UX', 'Prototyping', 'Brand Strategy', 'Visual Storytelling'] },
    { category: 'Automation', skills: ['Workflow Automations', 'Make.com', 'Python', 'N8N'] },
    { category: 'Leadership', skills: ['Product Management', 'Agile', 'Strategic Planning', 'Team Building'] }
  ];

  const certifications = [
    {
      id: "01",
      title: "HTML & CSS",
      issuer: "SkillEcted",
      description: "Mastered the fundamental building blocks of the web, focusing on semantic structure and modern styling techniques to build responsive, accessible interfaces.",
      icon: <Code className="text-emerald-500" />,
      color: "text-emerald-500",
      btnBg: "bg-emerald-600 hover:bg-emerald-700",

      image: "https://ik.imagekit.io/fazil/HTML%20&%20CSS%20Webninar-certificate.png"
    },
    {
      id: "02",
      title: "Intruduction to MongoDB",
      issuer: "Simplilearn - SkillUP",
      description: "Explored NoSQL database architecture and document-based data modeling to handle unstructured data efficiently for modern, scalable full-stack applications.",
      icon: <Database className="text-blue-500" />, 
      color: "text-blue-500",
      btnBg: "bg-blue-600 hover:bg-blue-700",
      image: "https://ik.imagekit.io/fazil/Screenshot%202026-03-14%20042449.png"
    },
    {
      id: "03",
      title: "Machine Learning with Python",
      issuer: "LinkedIn Learning",
      description: "Delved into predictive modeling and algorithmic logic, utilizing Python's robust libraries to solve complex problems through data-driven insights.",
      icon: <ShieldCheck className="text-amber-500" />,
      color: "text-amber-500",
      btnBg: "bg-amber-600 hover:bg-amber-700",
      image: "https://ik.imagekit.io/fazil/Screenshot%202026-03-14%20012918.png"
    },
    {
      id: "04",
      title: "Python for Data Science",
      issuer: "NPTEL - IITM",
      description: "Mastered data manipulation using NumPy and Pandas, and implemented machine learning models like k-Nearest Neighbors (k-NN) to transform raw datasets into actionable intelligence.",
      icon: <GraduationCap className="text-cyan-500" />,
      color: "text-cyan-500",
      btnBg: "bg-cyan-600 hover:bg-cyan-700",
      image: "https://ik.imagekit.io/fazil/Screenshot%202026-03-14%20041556.png"
    },
    {
      id: "05",
      title: "FIGMA for UX Design",
      issuer: "LinkedIn Learning",
      description: "Bridging the gap between code and design by mastering visual hierarchy and interactive prototyping to create user-centric digital experiences.",
      icon: <Layout className="text-pink-500" />,
      color: "text-pink-500",
      btnBg: "bg-pink-600 hover:bg-pink-700",
      image: "https://ik.imagekit.io/fazil/Screenshot%202026-03-14%20012522.png"
    },
    {
      id: "06",
      title: "Become a Six SIGMA Black Belt",
      issuer: "LinkedIn Learning",
      description: "Applying rigorous statistical methodologies to process improvement, ensuring high-quality standards and efficiency in complex system development.",
      icon: <Award className="text-purple-500" />,
      color: "text-purple-500",
      btnBg: "bg-purple-600 hover:bg-purple-700",
      image: "https://ik.imagekit.io/fazil/Screenshot%202026-03-14%20012316.png"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        
        <SEO 
          title="About Me" 
          description="Discover the journey of Mohamed Fazil, a Mathematics student at New College and Data Science student at IIT Madras turned Software Engineer."
        />
  
        {/* Experience Section */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-32 pt-24 border-t border-slate-100 dark:border-white/5"
>
  <div className="mb-20 text-center">
    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">The Experience</span>
    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
      Experience That Brings <br/><span className="text-gradient">Ideas to Life</span>
    </h3>
  </div>

       {/*Experience - 1*/}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="md:col-span-4 space-y-4">
              <div className="flex flex-col">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Jan 2025 - Jan 2026</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-1">FINMA Tech Solution llp</p>
              </div>
              <div className="space-y-2">
                <p className="text-base font-medium text-slate-500">Chennai, India</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-violet">Onsite</p>
              </div>
            </div>

            <div className="md:col-span-8">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Frontend Engineer</h4>
              <div className="space-y-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                <p>Focused on architecting scalable frontend blocks and managing team-wide development productivity.</p>
                <ul className="space-y-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                   <li><span className="font-bold text-slate-900 dark:text-white">Team Collaboration:</span> Worked within a professional engineering team to build and manage full-stack applications using Turborepo monorepo setups.</li>
                  <li><span className="font-bold text-slate-900 dark:text-white">CMS Architecture:</span> Developed modular enterprise-scale page builder blocks using Sanity and Contentful.</li>
                  <li><span className="font-bold text-slate-900 dark:text-white">Frontend Performance:</span> Built high-speed, responsive web interfaces using React and Tailwind CSS.</li>
                </ul>
              </div>
            </div>
          </div>



  {/* Experience - 2 */}
  <div className="mt-40 md:mt-56">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
      <div className="md:col-span-4 space-y-4">
        <div className="flex flex-col">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Jan 2026 - Present</p>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-1">FOS Automations</p>
        </div>
        <div className="space-y-2">
          <p className="text-base font-medium text-slate-500">Chennai, India</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-violet">Remote</p>
        </div>
      </div>

      <div className="md:col-span-8">
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Automation Developer</h4>
        <div className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
          <p>Collaborating with a cross-functional team to build AI-driven utilities and scalable automation systems.</p>
          
          <ul className="mt-8 list-disc list-outside ml-5 space-y-6">
            <li>
              <span className="font-bold text-slate-900 dark:text-white">Product Development:</span> 
              {" "}Worked with the engineering team to develop{" "}
              <span className="font-bold text-gradient">Alchemeal</span> 
              {" "}(an LLM-powered culinary assistant) and{" "}
              <span className="font-bold text-gradient">Slate</span> 
              {" "}(a comprehensive academic utility for IITM BS students, launched on the Play Store).
            </li>

            <li>
              <span className="font-bold text-slate-900 dark:text-white">Site Engineering:</span> 
              {" "}Led the UI/UX revamp and performance optimization of the official FOS Automations website, focusing on modern design and high-speed delivery.
            </li>

            <li>
              <span className="font-bold text-slate-900 dark:text-white">Current Focus:</span> 
              {" "}Spearheading enterprise workflow automations using Python and Make.com, alongside ongoing research into LLM integration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-24 border-t border-slate-100 dark:border-white/5"
        >
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">The Skills</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Expertise That <br/><span className="text-gradient">Drives Results</span>
            </h3>
          </div>

          <div className="space-y-12">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                <div className="md:col-span-3">
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{group.category}</h4>
                </div>
                <div className="md:col-span-9 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-5 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:border-accent-violet/30 hover:bg-accent-violet/5 hover:text-accent-violet transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 pt-24 border-t border-slate-100 dark:border-white/5"
        >
          <div className="mb-20 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">The Education</span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Education That Powers <br/><span className="text-gradient">Future Innovations</span>
            </h3>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start group cursor-pointer" onClick={() => onNavigate('edu-iitm')}>
              <div className="md:col-span-4 space-y-4">
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Ongoing</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 p-1.5 flex-shrink-0 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-sm transition-all group-hover:border-accent-violet/30">
                      <img src={iitmLogoUrl} alt="IIT Madras Logo" className="max-w-full max-h-full object-contain" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-accent-violet">IIT Madras</p>
                  </div>
                </div>
                <p className="text-base font-medium text-slate-500">Chennai, India</p>
              </div>
              <div className="md:col-span-8 flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">BS in Data Science & Applications</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">IIT Madras, Chennai</p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:bg-accent-violet/10 group-hover:text-accent-violet transition-all transform group-hover:translate-x-2">
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start group cursor-pointer" onClick={() => onNavigate('edu-newcollege')}>
              <div className="md:col-span-4 space-y-4">
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">2023 - 2026</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 p-1.5 flex-shrink-0 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-sm transition-all group-hover:border-accent-violet/30">
                      <img src={newCollegeLogoUrl} alt="The New College Logo" className="max-w-full max-h-full object-contain" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-accent-violet">The New College</p>
                  </div>
                </div>
                <p className="text-base font-medium text-slate-500">Chennai, India</p>
              </div>
              <div className="md:col-span-8 flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">BSc in Mathematics</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">The New College, Chennai</p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:bg-accent-violet/10 group-hover:text-accent-violet transition-all transform group-hover:translate-x-2">
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

       {/* Certifications Stacking Section */}
<motion.div 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mt-32 pt-24 border-t border-slate-100 dark:border-white/5"
>
  <div className="mb-20 text-center">
    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">The Credentials</span>
    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
      Certifications & <br/><span className="text-gradient">Expertise</span>
    </h3>
  </div>

  <div className="relative flex flex-col items-center pb-[20vh]">
    {certifications.map((cert, index) => (
      <div 
        key={cert.id}
        className="sticky w-full max-w-5xl bg-[#f8fafc] dark:bg-zinc-900 rounded-[3rem] overflow-hidden flex flex-col md:flex-row border border-slate-200 dark:border-white/5 shadow-2xl transition-all duration-500 group"
        style={{ 
          top: `calc(12vh + ${index * 40}px)`,
          height: '480px',
          marginBottom: '15vh',
          zIndex: index
        }}
      >
        {/* Content Area (40% width) */}
        <div className="flex-[0.4] p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5 bg-[#f8fafc] dark:bg-zinc-900 z-10">
          <div className="flex items-center gap-3 mb-4">
            {cert.icon}
            <span className={`text-[10px] font-black uppercase tracking-widest ${cert.color}`}>
              {cert.id}. {cert.issuer}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight leading-tight">
            {cert.title}
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm font-medium">
            {cert.description}
          </p>
          <button className={`mt-8 w-max px-6 py-3 ${cert.btnBg} text-white font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 group-hover:gap-4 text-xs active:scale-95`}>
            Verify <ExternalLink size={14} />
          </button>
        </div>

        {/* Image Area (60% width) - Optimized for Horizontal Certificates */}
        <div className="flex-[0.6] relative bg-[#f1f5f9] dark:bg-zinc-800/50 overflow-hidden">
          <div 
            className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105"
            style={{ 
              backgroundImage: `url('${cert.image}')`,
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              margin: '20px' // Adds a nice frame around the certificate
            }}
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] pointer-events-none" />
        </div>
      </div>
    ))}
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default AboutPage;