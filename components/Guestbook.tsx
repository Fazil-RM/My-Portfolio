
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User } from 'lucide-react';

const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState([
    { id: '1', name: 'Alex Johnson', message: 'Amazing work! The design system you built is top-notch.', date: '2 days ago' },
    { id: '2', name: 'Sarah Chen', message: 'Your blog post on React performance was exactly what I needed.', date: '5 days ago' },
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    const newEntry = {
      id: Date.now().toString(),
      name,
      message,
      date: 'Just now',
    };
    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
  };

  return (
    <section id="guestbook" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Guestbook</h2>
          <p className="text-slate-600 dark:text-slate-400">Leave a note, a word of advice, or just say hi!</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-16 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your message..."
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <Send size={18} className="mr-2" />
            Sign the Guestbook
          </button>
        </form>

        <div className="space-y-6">
          <AnimatePresence initial={false}>
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start space-x-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-500">
                  <User size={20} />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">{entry.name}</span>
                    <span className="text-xs text-slate-400">• {entry.date}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">{entry.message}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
