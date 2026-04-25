
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Sparkles, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { ViewState } from '../App';
import SEO from '../components/SEO';

interface BlogDetailPageProps {
  onNavigate: (view: ViewState) => void;
  postId: string | null;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ onNavigate, postId }) => {
  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <button 
          onClick={() => onNavigate('blog')}
          className="mt-6 text-accent-violet font-bold hover:underline"
        >
          Return to Library
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

      <SEO 
  title="Blog & Technical Articles" 
  description="Insights on web development, Python automation, and my experiences building startups and EdTech platforms."
/>
        
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate('blog')}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all group mb-12"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Library</span>
        </motion.button>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-accent-violet bg-accent-violet/10 px-3 py-1 rounded-full">
              {post.date}
            </span>
            <div className="flex items-center gap-2 text-slate-400 dark:text-zinc-600">
               <Clock size={12} />
               <span className="text-[10px] font-black uppercase tracking-widest">
                 {post.readingTime || '8 MIN READ'}
               </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 dark:text-zinc-400 font-medium leading-relaxed italic">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[16/9] mb-16 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-white/10 shadow-2xl"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 right-8 p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white">
            <Sparkles size={20} />
          </div>
        </motion.div>

        {/* Main Content */}
        <article className="prose prose-lg dark:prose-invert prose-slate max-w-none">
          <div 
            className="text-slate-700 dark:text-zinc-300 leading-loose space-y-8 text-lg font-medium"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Footer Navigation / Share */}
        <div className="mt-24 pt-12 border-t border-slate-100 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <button 
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-accent-violet transition-colors"
              >
                <Share2 size={16} />
                Share Article
              </button>
           </div>
           
           <button 
             onClick={() => onNavigate('blog')}
             className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
           >
             Continue Reading
           </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
