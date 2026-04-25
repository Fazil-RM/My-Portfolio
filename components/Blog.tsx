
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Writing</h2>
            <p className="text-slate-600 dark:text-slate-400">Thoughts on development, design, and engineering culture.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-600 font-bold hover:underline">
            Visit the blog
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 border border-slate-200 dark:border-slate-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-2">
                <time className="text-xs font-bold text-slate-400 uppercase tracking-widest">{post.date}</time>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="text-sm font-bold flex items-center text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">
                  Read article
                  <ArrowRight size={14} className="ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
