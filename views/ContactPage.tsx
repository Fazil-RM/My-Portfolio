
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Copy, 
  Check, 
  Send, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  ArrowLeft,
  Mail,
  Loader2
} from 'lucide-react';

type ContactMode = 'message' | 'call';

interface ContactPageProps {
  isDark?: boolean;
}

const ContactPage: React.FC<ContactPageProps> = ({ isDark = true }) => {
  const [mode, setMode] = useState<ContactMode>('message');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isCalLoading, setIsCalLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const email = 'mohamedfazilrm@gmail.com';
  // Standard Cal.com embed URL with theme awareness
  const calEmbedUrl = `https://app.cal.com/smartstudydatabse-cmm3r9/book-a-call?embed=true&theme=${isDark ? 'dark' : 'light'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/Mohamed-Fazil-RM', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/mohamedfazil2005', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/__fazil_rm__/', label: 'Instagram' },
  ];

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    console.log('Sending contact mail to:', email, {
      from: formName,
      email: formEmail,
      message: formMessage
    });
  };

  return (
    <div className="pt-24 pb-32 bg-white dark:bg-black min-h-screen flex flex-col items-center transition-colors duration-500 overflow-x-hidden selection:bg-accent-violet selection:text-white">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center">

    <SEO 
  title="Contact & Collaborate" 
  description="Have a project in mind? Let's build something extraordinary together. Reach out for web development or automation inquiries."
/>
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-4 block">Connect</span>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 dark:text-white leading-tight mb-8 px-4 text-center">
              Let's <span className="text-gradient">Get In Touch.</span>
            </h1>

            {/* Mode Toggle */}
            <div className="flex p-1.5 bg-slate-100 dark:bg-zinc-900 rounded-full mb-6 border border-slate-200 dark:border-white/5 shadow-sm">
              <button
                onClick={() => { setMode('message'); setIsFormSubmitted(false); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  mode === 'message' ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-white/5' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                <MessageSquare size={14} /> Message
              </button>
              <button
                onClick={() => { setMode('call'); setIsCalLoading(true); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  mode === 'call' ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-lg border border-slate-200 dark:border-white/5' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                <CalendarIcon size={14} /> Book a Call
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Interface */}
        <div className="w-full max-w-5xl mx-auto flex justify-center">
          <AnimatePresence mode="wait">
            {mode === 'message' && !isFormSubmitted ? (
              <motion.div key="message-form" initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 10 }} className="w-full max-w-2xl">
                <div className="p-6 md:p-10 bg-slate-50 dark:bg-zinc-900/40 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl">
                  <form onSubmit={handleMessageSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                        <input required value={formName} onChange={(e) => setFormName(e.target.value)} type="text" className="w-full px-5 py-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-accent-violet outline-none transition-all font-bold text-slate-900 dark:text-white shadow-sm text-sm" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                        <input required value={formEmail} onChange={(e) => setFormEmail(e.target.value)} type="email" className="w-full px-5 py-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-accent-violet outline-none transition-all font-bold text-slate-900 dark:text-white shadow-sm text-sm" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea required value={formMessage} onChange={(e) => setFormMessage(e.target.value)} rows={5} className="w-full px-5 py-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-[1.5rem] focus:ring-2 focus:ring-accent-violet outline-none transition-all resize-none font-bold text-slate-900 dark:text-white shadow-sm text-sm" placeholder="Your project vision..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-2xl flex items-center justify-center transition-all shadow-xl hover:scale-[1.01] active:scale-95 group uppercase tracking-[0.2em] text-[10px]">
                      Send Message
                      <Send size={14} className="ml-3 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </form>
                  
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col items-center">
                    <button onClick={copyToClipboard} className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group mb-6">
                      <span className="text-xs font-medium">{email}</span>
                      <AnimatePresence mode="wait">
                        {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="group-hover:text-accent-violet" />}
                      </AnimatePresence>
                    </button>
                    <div className="flex gap-8">
                      {socialLinks.map((link, i) => (
                        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-violet transition-colors">
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : mode === 'call' ? (
              <motion.div 
                key="booking-embed" 
                initial={{ opacity: 0, scale: 0.98, y: 10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.98, y: 10 }} 
                className="w-full max-w-5xl h-[700px] relative overflow-hidden"
              >
                {isCalLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-50">
                    <Loader2 className="size-10 text-accent-violet animate-spin mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Loading Scheduler...</p>
                  </div>
                )}
                {/* Embedded Frame with no outer card background/border */}
                <iframe 
                  src={calEmbedUrl} 
                  className="w-full h-full border-none rounded-3xl"
                  onLoad={() => setIsCalLoading(false)}
                  title="Schedule a meeting with Mohamed Fazil"
                />
              </motion.div>
            ) : isFormSubmitted ? (
              <motion.div key="step-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center h-full py-16 px-6">
                <div className="size-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                  <Check size={32} strokeWidth={3} />
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Message Received</h2>
                <div className="bg-slate-50 dark:bg-zinc-900/40 p-6 rounded-3xl border border-slate-200 dark:border-white/5 max-w-lg mb-8 text-left w-full shadow-sm">
                   <div className="flex items-center gap-2 text-accent-violet mb-4">
                      <Mail size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Electronic Mail Sent To: {email}</span>
                   </div>
                   <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">From:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{formName} ({formEmail})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-emerald-500 font-bold uppercase text-[10px]">Delivered</span>
                      </div>
                   </div>
                </div>
                
                <button onClick={() => { 
                  setIsFormSubmitted(false);
                  setFormName('');
                  setFormEmail('');
                  setFormMessage('');
                }} className="mt-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-accent-violet group bg-slate-100 dark:bg-zinc-900 px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> New Message
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
