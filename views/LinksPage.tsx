
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUpRight, 
  MessageSquare, 
  Send, 
  MapPin,
  Code,
  Dribbble,
  PenTool,
  Trophy,
  Calendar
} from 'lucide-react';
import { ViewState } from '../App';
import SEO from '../components/SEO';

interface LinksPageProps {
  onNavigate?: (view: ViewState) => void;
}

const LinksPage: React.FC<LinksPageProps> = ({ onNavigate }) => {
  const email = 'mohamedfazilrm@gmail.com';
  const bookingUrl = 'https://app.cal.com/smartstudydatabse-cmm3r9/book-a-call?overlayCalendar=true';

  const sections = [
    {
      label: 'CODE & CRAFT',
      links: [
        { 
          name: 'GitHub', 
          handle: '@Mohamed-Fazil-RM', 
          url: 'https://github.com/Fazil-RM', 
          icon: <Github className="size-5" />,
          isExternal: true
        },
        { 
          name: 'Guestbook', 
          handle: 'Leave a mark', 
          view: 'guestbook', 
          icon: <MessageSquare className="size-5" />,
          isExternal: false
        },
        { 
          name: 'Leetcode', 
          handle: '@Mohamed_Fazil_', 
          url: 'https://leetcode.com/u/Fazil-RM/', 
          icon: <Code className="size-5" />,
          isExternal: true
        },
        { 
          name: 'Dribbble', 
          handle: 'mohamedfazil', 
          url: 'https://dribbble.com', 
          icon: <Dribbble className="size-5" />,
          isExternal: true
        },
        { 
          name: 'Kaggle', 
          handle: 'mohamedfazil', 
          url: 'https://www.kaggle.com/mohamedfazilrm', 
          icon: <Trophy className="size-5" />,
          isExternal: true
        }
      ]
    },
    {
      label: 'CONNECT',
      links: [
        { 
          name: 'LinkedIn', 
          handle: 'in/mohamedfazil2005', 
          url: 'https://www.linkedin.com/in/fazil-rm/', 
          icon: <Linkedin className="size-5" />,
          isExternal: true
        },
        { 
          name: 'Instagram', 
          handle: '@__fazil_rm__', 
          url: 'https://www.instagram.com/__fazil_rm__/', 
          icon: <Instagram className="size-5" />,
          isExternal: true
        },
        { 
          name: 'Medium', 
          handle: '@mohamedfazilrm5', 
          url: 'https://medium.com/@Fazil-RM', 
          icon: <PenTool className="size-5" />,
          isExternal: true
        },
        { 
          name: 'Telegram', 
          handle: '@mohamedfazil', 
          url: 'https://t.me', 
          icon: <Send className="size-5" />,
          isExternal: true
        }
      ]
    }
  ];

  const handleLinkClick = (link: any) => {
    if (link.view && onNavigate) {
      onNavigate(link.view as ViewState);
    }
  };

  return (
    <div className="py-24 lg:py-32 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      <SEO 
  title="Important Links" 
  description="All my social media profiles, GitHub repositories, and professional links in one organized place."
/> 
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <div className="bg-slate-50 dark:bg-zinc-900/40 border border-slate-200 dark:border-white/5 rounded-[3rem] p-10 lg:sticky lg:top-32 flex flex-col items-center shadow-sm">
              <div className="relative w-36 h-36 mb-8">
                <div className="absolute inset-0 bg-accent-violet blur-2xl opacity-20 rounded-full" />
                <div className="relative w-full h-full rounded-full border-4 border-white dark:border-zinc-800 overflow-hidden bg-slate-200 dark:bg-zinc-800 shadow-xl">
                  {/* Image is kept in full color */}
                  <img 
                    src="Images/fazil-rm.png" 
                    alt="Fazil RM" 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="absolute bottom-2 right-2 size-7 bg-white dark:bg-black rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-zinc-900 shadow-sm">
                  <div className="size-3 bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="text-center mb-10 w-full">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Fazil RM</h1>
                <div className="flex items-center justify-center gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[10px] font-black text-slate-500 dark:text-zinc-400 uppercase tracking-widest">Developer</span>
                  <span className="px-4 py-1.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[10px] font-black text-slate-500 dark:text-zinc-400 uppercase tracking-widest">Analyst</span>
                </div>
              </div>

              <div className="w-full space-y-4 border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col items-start px-2">
                <div className="flex items-center gap-3 text-slate-600 dark:text-zinc-400">
                  <MapPin size={16} className="text-accent-violet shrink-0" />
                  <span className="text-sm font-bold tracking-tight">Chennai, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-zinc-400 mb-2 w-full">
                  <Mail size={16} className="text-accent-cyan shrink-0" />
                  <span className="text-sm font-bold tracking-tight truncate">{email}</span>
                </div>
                
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl text-center text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-slate-900/10 dark:shadow-white/5 flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3">
            <div className="space-y-16">
              {sections.map((section, sIdx) => (
                <div key={section.label}>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-[0.4em] whitespace-nowrap">{section.label}</h2>
                    <div className="h-px w-full bg-slate-100 dark:bg-white/5" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.links.map((link, lIdx) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (sIdx * 0.2) + (lIdx * 0.05) }}
                      >
                        {link.isExternal ? (
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 p-5 bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-100 dark:hover:bg-zinc-900/60 hover:border-accent-violet/30 dark:hover:border-white/10 transition-all active:scale-[0.98] shadow-sm"
                          >
                            <div className="size-12 flex-shrink-0 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl flex items-center justify-center text-slate-500 dark:text-zinc-400 group-hover:text-accent-violet group-hover:bg-accent-violet/5 transition-all shadow-sm">
                              {link.icon}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-base font-black text-slate-900 dark:text-white group-hover:text-accent-violet transition-colors truncate tracking-tight">
                                {link.name}
                              </span>
                              <span className="text-xs font-bold text-slate-500 dark:text-zinc-500 group-hover:text-slate-600 dark:group-hover:text-zinc-400 transition-colors truncate tracking-tight">
                                {link.handle}
                              </span>
                            </div>
                            <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all text-accent-violet" />
                          </a>
                        ) : (
                          <button
                            onClick={() => handleLinkClick(link)}
                            className="w-full text-left group flex items-center gap-4 p-5 bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-100 dark:hover:bg-zinc-900/60 hover:border-accent-violet/30 dark:hover:border-white/10 transition-all active:scale-[0.98] shadow-sm"
                          >
                            <div className="size-12 flex-shrink-0 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl flex items-center justify-center text-slate-500 dark:text-zinc-400 group-hover:text-accent-violet group-hover:bg-accent-violet/5 transition-all shadow-sm">
                              {link.icon}
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-base font-black text-slate-900 dark:text-white group-hover:text-accent-violet transition-colors truncate tracking-tight">
                                {link.name}
                              </span>
                              <span className="text-xs font-bold text-slate-500 dark:text-zinc-500 group-hover:text-slate-600 dark:group-hover:text-zinc-400 transition-colors truncate tracking-tight">
                                {link.handle}
                              </span>
                            </div>
                          </button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LinksPage;
