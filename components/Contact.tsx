
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact-form" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter leading-none text-white">
              Let's build something <br />
              <span className="text-gradient">extraordinary</span> together.
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-lg font-medium">
              I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-violet-900/20 text-accent-violet rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-slate-400 text-lg">mohamedfazilrm@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-cyan-900/20 text-accent-cyan rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-slate-400 text-lg">Chennai, India (Remote Friendly)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-white/5 rounded-[3.5rem] border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-full focus:ring-2 focus:ring-accent-violet outline-none transition-all font-medium text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-full focus:ring-2 focus:ring-accent-violet outline-none transition-all font-medium text-white" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={5} className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-[2rem] focus:ring-2 focus:ring-accent-violet outline-none transition-all resize-none font-medium text-white" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full py-5 bg-white text-black font-black rounded-full flex items-center justify-center transition-all shadow-xl shadow-white/5 hover:opacity-90 active:scale-95 group">
                Send Message
                <Send size={18} className="ml-2 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
