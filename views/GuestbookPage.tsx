import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Quote, Sparkles, PenLine, LogOut } from 'lucide-react';
import { auth, googleProvider, db } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import SEO from '../components/SEO';
import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  orderBy, 
  onSnapshot 
} from 'firebase/firestore';

interface Entry {
  id: string;
  name: string;
  message: string;
  date: string;
  timeAgo: string;
  avatar: string;
  color: string;
}

interface GoogleUser {
  name: string;
  picture: string;
  email: string;
}

const COLORS = [
  'from-[#0f172a] to-[#1e293b]', 
  'from-[#1e3a8a] to-[#1e40af]', 
  'from-[#4c1d95] to-[#5b21b6]', 
  'from-[#134e4a] to-[#0f766e]', 
  'from-[#064e3b] to-[#065f46]', 
  'from-[#701a75] to-[#86198f]', 
];

const PINNED_ENTRY = { 
  id: 'pinned-1', 
  name: 'Shafiah Noor', 
  message: 'Cool Portfolio dear. Well done', 
  date: 'Feb 11', 
  timeAgo: 'Now', 
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLlgCb5ZjlVIeR397lZ7oUo91qUiLfXle3Q&s', 
  color: 'from-[#0f172a] to-[#1e293b]' 
};

const GuestbookPage: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || 'User',
          picture: firebaseUser.photoURL || '',
          email: firebaseUser.email || '',
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // 2. Real-time data fetching from Firebase
  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const firebaseEntries = snapshot.docs.map(doc => {
        const data = doc.data();
        const dateObj = data.createdAt?.toDate() || new Date();
        const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        // Calculate simple time ago
        const seconds = Math.floor((new Date().getTime() - dateObj.getTime()) / 1000);
        const hours = Math.floor(seconds / 3600);
        const timeAgo = hours >= 1 ? `${hours}h ago` : 'Just now';

        return {
          id: doc.id,
          ...data,
          date: formattedDate,
          timeAgo: timeAgo, 
        };
      }) as Entry[];
      
      setEntries(firebaseEntries);
    });

    return () => unsubscribe();
  }, []);

  const handleFirebaseLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Login Failed", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !message || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      await addDoc(collection(db, "guestbook"), {
        name: user.name,
        message: message,
        avatar: user.picture,
        color: randomColor,
        createdAt: serverTimestamp(),
      });

      setMessage('');
      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Error saving to Firebase:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-40 bg-white dark:bg-black min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 dark:text-zinc-500 mb-4">
            THE COMMUNITY WALL
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-medium tracking-tighter text-slate-900 dark:text-white font-serif">
            Leave <span className="italic text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Your Mark</span>
          </motion.h1>
        </div>

        <SEO 
          title="Guestbook" 
          description="Leave a message or feedback for Mohamed Fazil. Connect with other developers visiting this space."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ y: -5 }} onClick={() => setIsModalOpen(true)} className="relative h-[180px] rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/20 flex flex-col items-center justify-center text-center p-6 cursor-pointer group transition-all">
            <h3 className="text-lg font-serif italic text-slate-900 dark:text-white mb-1">"Join the wall..."</h3>
            <p className="text-[10px] text-slate-500 dark:text-zinc-500 mb-4 max-w-[160px]">
              {user ? `Welcome back, ${user.name.split(' ')[0]}!` : "Sign in to pin your message forever."}
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white text-black dark:text-black rounded-full font-bold text-[10px] shadow-lg group-hover:scale-105 transition-transform uppercase tracking-wider">
              <PenLine size={14} />
              {user ? "Write a message" : "Sign in with Google"}
            </div>
          </motion.div>

          <AnimatePresence mode="popLayout">
            <motion.div 
              key={PINNED_ENTRY.id} 
              layout 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              whileHover={{ y: -5, rotate: 0.5 }} 
              className={`relative min-h-[180px] rounded-[2rem] p-6 flex flex-col bg-gradient-to-br ${PINNED_ENTRY.color} shadow-xl border border-white/10 overflow-hidden group`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-white/10 backdrop-blur-md rounded-b-lg border-x border-b border-white/20 z-20" />
              <Quote className="text-white/10 absolute -top-1 -left-1 rotate-12" size={50} strokeWidth={1} />
              <div className="relative z-10 flex flex-col h-full">
                 <p className="text-base md:text-lg font-serif italic text-white mb-6 leading-relaxed line-clamp-4">"{PINNED_ENTRY.message}"</p>
                 <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-3">
                    <div className="size-9 rounded-full overflow-hidden border-2 border-white/20 bg-white/10">
                       <img src={PINNED_ENTRY.avatar} alt={PINNED_ENTRY.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                       <h4 className="font-bold text-white text-[11px] truncate">{PINNED_ENTRY.name}</h4>
                       <div className="flex items-center gap-2 text-[8px] text-white/50 font-black uppercase tracking-widest">
                          <span>{PINNED_ENTRY.date}</span>
                          <span className="size-0.5 rounded-full bg-white/30" />
                          <span className="truncate">{PINNED_ENTRY.timeAgo}</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {entries.map((entry, index) => (
              <motion.div 
                key={entry.id} 
                layout 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.05 }} 
                whileHover={{ y: -5, rotate: 0.5 }} 
                className={`relative min-h-[180px] rounded-[2rem] p-6 flex flex-col bg-gradient-to-br ${entry.color} shadow-xl border border-white/10 overflow-hidden group`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-white/10 backdrop-blur-md rounded-b-lg border-x border-b border-white/20 z-20" />
                <Quote className="text-white/10 absolute -top-1 -left-1 rotate-12" size={50} strokeWidth={1} />
                <div className="relative z-10 flex flex-col h-full">
                   <p className="text-base md:text-lg font-serif italic text-white mb-6 leading-relaxed line-clamp-4">"{entry.message}"</p>
                   <div className="mt-auto pt-3 border-t border-white/10 flex items-center gap-3">
                      <div className="size-9 rounded-full overflow-hidden border-2 border-white/20 bg-white/10">
                         <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="font-bold text-white text-[11px] truncate">{entry.name}</h4>
                         <div className="flex items-center gap-2 text-[8px] text-white/50 font-black uppercase tracking-widest">
                            <span>{entry.date}</span>
                            <span className="size-0.5 rounded-full bg-white/30" />
                            <span className="truncate">{entry.timeAgo}</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-[3rem] p-8 md:p-10 shadow-3xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-purple-500/10">
                 <Sparkles size={100} />
              </div>
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:scale-110 transition-transform z-10">
                <X size={18} />
              </button>
              <h2 className="text-2xl font-serif italic text-slate-900 dark:text-white mb-6">
                {user ? "Leave your mark..." : "Identify yourself..."}
              </h2>
              {!user ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-black mb-2">Secure sign in with Firebase</p>
                  <button 
                    onClick={handleFirebaseLogin}
                    className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-full shadow-lg hover:scale-105 transition-transform font-bold text-sm text-slate-900 dark:text-white"
                  >
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                    Continue with Google
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-zinc-800 rounded-2xl border border-slate-100 dark:border-zinc-700">
                    <div className="flex items-center gap-3">
                      <img src={user.picture} alt={user.name} className="size-10 rounded-full border-2 border-white/20" />
                      <div>
                        <p className="text-sm font-bold dark:text-white">{user.name}</p>
                        <p className="text-[10px] text-slate-500">{user.email}</p>
                      </div>
                    </div>
                    <button type="button" onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors">
                      <LogOut size={16} />
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Mark</label>
                    <textarea autoFocus placeholder="Tell the world something cool..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-6 py-5 rounded-[2rem] bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-slate-900 dark:text-white resize-none font-bold text-sm" />
                  </div>
                  <button type="submit" disabled={!message || isSubmitting} className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-full flex items-center justify-center transition-all shadow-xl active:scale-[0.98] group disabled:opacity-50">
                    <Send size={16} className={`mr-3 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
                    {isSubmitting ? "Posting..." : "Post to the wall"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuestbookPage;