
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Link as LinkIcon, Laptop, CreditCard, MessageSquare, BookOpen, ArrowUpRight, Home, Info, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from '../App';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

interface NavItem {
  name: string;
  view: ViewState;
  description?: string;
  icon?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Desktop more menu click outside
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
      // Mobile menu click outside
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks: NavItem[] = [
    { name: 'Home', view: 'home', icon: <Home size={20} /> },
    { name: 'About', view: 'about', icon: <Info size={20} /> },
    { name: 'Work', view: 'work', icon: <Briefcase size={20} /> },
  ];

  const moreLinks: NavItem[] = [
    { name: 'Blog', view: 'blog', icon: <BookOpen size={18} /> },
    { name: 'Guestbook', view: 'guestbook', icon: <MessageSquare size={18} /> },
    { name: 'Links', view: 'links', icon: <LinkIcon size={18} /> },
    { name: 'Uses', view: 'uses', icon: <Laptop size={18} /> },
    { name: 'Attribution', view: 'attributes', icon: <CreditCard size={18} /> }
  ];

  const isMoreActive = [
    'blog', 'guestbook', 'links', 'uses', 'attributes', 'edu-iitm', 'edu-newcollege'
  ].includes(currentView);

  const handleLinkClick = (view: ViewState) => {
    onNavigate(view);
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  const isItemActive = (view: ViewState) => currentView === view;

  return (
    <>
      {/* Desktop Navigation Wrapper - Centered Pill */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4 md:px-0 hidden lg:flex flex-col items-center">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-full shadow-2xl p-1.5 flex items-center"
        >
          <div className="flex items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.view)}
                onMouseEnter={() => setIsMoreOpen(false)}
                className={`relative px-5 py-2.5 text-sm transition-all flex flex-col items-center group rounded-full ${
                  isItemActive(link.view) 
                    ? 'text-slate-900 dark:text-white font-bold' 
                    : 'text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isItemActive(link.view) && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -top-1.5 w-5 h-1 bg-gradient-brand rounded-full"
                  />
                )}
                {link.name}
                <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform -z-10" />
              </button>
            ))}

            {/* Desktop More Button */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
                setIsMoreOpen(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = window.setTimeout(() => setIsMoreOpen(false), 150);
              }}
            >
              <button
                className={`relative px-5 py-2.5 text-sm flex flex-col items-center group transition-all rounded-full ${
                  isMoreActive 
                    ? 'text-slate-900 dark:text-white font-bold' 
                    : 'text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isMoreActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -top-1.5 w-5 h-1 bg-gradient-brand rounded-full"
                  />
                )}
                <div className="flex items-center gap-1">
                  More
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </div>
                <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform -z-10" />
              </button>
            </div>
          </div>

          <div className="flex items-center ml-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-slate-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-lg hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
            >
              Contact
            </button>
          </div>
        </motion.nav>

        {/* Desktop More Dropdown - Optimized spacing for 3 elements */}
        <AnimatePresence>
          {isMoreOpen && (
            <motion.div
              ref={moreRef}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              onMouseEnter={() => {
                if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
                setIsMoreOpen(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = window.setTimeout(() => setIsMoreOpen(false), 150);
              }}
              className="absolute top-full mt-4 w-[75vw] max-w-[700px] bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-6 overflow-hidden z-[110]"
            >
              <div className="grid grid-cols-12 gap-5 items-center">
                {/* Column 1: Guestbook Card */}
<div className="col-span-4 group cursor-pointer relative aspect-square rounded-[2rem] overflow-hidden shadow-sm bg-slate-100 dark:bg-zinc-900" onClick={() => handleLinkClick('guestbook')}>
  {/* Light Mode Image */}
  <img 
    src="https://images.unsplash.com/photo-1557264322-b44d383a2906?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBkYXJrfGVufDB8fDB8fHww" 
    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 brightness-[0.8] group-hover:scale-110 block dark:hidden" 
    alt="Guestbook Light"
  />
  {/* Dark Mode Image */}
  <img 
    src="https://images.unsplash.com/photo-1557264322-b44d383a2906?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBkYXJrfGVufDB8fDB8fHww" 
    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 brightness-[0.5] group-hover:scale-110 hidden dark:block" 
    alt="Guestbook Dark"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-5 flex flex-col justify-end">
    <h4 className="text-white font-bold">Guestbook</h4>
  </div>
</div>

{/* Column 2: Blog Card */}
<div className="col-span-4 group cursor-pointer relative aspect-square rounded-[2rem] overflow-hidden shadow-sm bg-slate-100 dark:bg-zinc-900" onClick={() => handleLinkClick('blog')}>
  {/* Light Mode Image */}
  <img 
    src="https://wallpapercave.com/wp/wp14902303.webp" 
    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 brightness-[0.8] group-hover:scale-110 block dark:hidden" 
    alt="Blog Light"
  />
  {/* Dark Mode Image */}
  <img 
    src="https://wallpapercave.com/wp/wp14902303.webp" 
    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 brightness-[0.5] group-hover:scale-110 hidden dark:block" 
    alt="Blog Dark"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-5 flex flex-col justify-end">
    <h4 className="text-white font-bold">Blog</h4>
  </div>
</div>
                {/* Column 3: Links, Uses, Attribution List */}
                <div className="col-span-4 space-y-2.5">
                  {moreLinks.slice(2).map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleLinkClick(item.view)}
                      className={`flex items-center w-full gap-3 px-4 py-3.5 rounded-2xl border transition-all text-left group ${
                        currentView === item.view ? 'bg-accent-violet/10 border-accent-violet/30' : 'bg-slate-50 dark:bg-white/5 border-transparent hover:border-accent-violet/20 hover:bg-slate-100 dark:hover:bg-white/10'
                      }`}
                    >
                      <div className={currentView === item.view ? 'text-accent-violet' : 'text-slate-400 group-hover:text-accent-violet'}>{item.icon}</div>
                      <h5 className={`font-bold text-xs ${currentView === item.view ? 'text-accent-violet' : 'text-slate-900 dark:text-white group-hover:text-accent-violet'}`}>{item.name}</h5>
                      <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-all text-accent-cyan" size={12} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Controls - Top Right Corner (Theme Toggle + Mobile Menu) */}
      <div className="fixed top-6 right-6 z-[120] flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all text-slate-900 dark:text-white"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} className="text-accent-cyan" /> : <Moon size={20} className="text-accent-violet" />}
        </button>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all text-slate-900 dark:text-white"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? <X size={20} key="x" /> : <Menu size={20} key="menu" />}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[110] bg-black/5 dark:bg-black/20 backdrop-blur-[2px] lg:hidden"
            />
            
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-20 right-6 z-[115] w-[calc(100%-3rem)] max-w-[340px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-6 lg:hidden"
            >
              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-600 mb-3 px-4">Navigation</p>
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.view)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                        isItemActive(link.view) 
                          ? 'bg-accent-violet/10 text-accent-violet' 
                          : 'text-slate-900 dark:text-white active:bg-slate-100 dark:active:bg-white/5'
                      }`}
                    >
                      <div className={isItemActive(link.view) ? 'text-accent-violet' : 'text-slate-400'}>{link.icon}</div>
                      {link.name}
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-600 mb-3 px-4">More</p>
                  <div className="grid grid-cols-2 gap-2">
                    {moreLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleLinkClick(link.view)}
                        className={`flex items-center gap-3 p-3 rounded-2xl border transition-all text-left ${
                          isItemActive(link.view) 
                            ? 'bg-accent-violet/10 border-accent-violet/20 text-accent-violet' 
                            : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-900 dark:text-white text-xs'
                        }`}
                      >
                        <div className={isItemActive(link.view) ? 'text-accent-violet' : 'text-slate-400'}>{link.icon}</div>
                        <span className="font-bold truncate">{link.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl active:scale-[0.98] transition-all"
                >
                  <Mail size={16} />
                  <span className="text-xs uppercase tracking-[0.2em]">Contact</span>
                  <ArrowUpRight size={14} className="opacity-50" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
