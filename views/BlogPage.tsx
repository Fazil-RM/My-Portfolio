
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Filter, Sparkles, X, Check, Calendar, Type } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { ViewState } from '../App';
import SEO from '../components/SEO';

interface BlogPageProps {
  onNavigate: (view: ViewState, postId?: string) => void;
}

type SortOption = 'newest' | 'oldest' | 'az' | 'za';

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  const categories = useMemo(() => {
    const cats = new Set(BLOG_POSTS.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    let result = BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    // Apply Sorting
    result.sort((a, b) => {
      if (sortOption === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortOption === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortOption === 'az') {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === 'za') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

    return result;
  }, [searchQuery, activeCategory, sortOption]);

  const sortItems: { id: SortOption; label: string; icon: React.ReactNode }[] = [
    { id: 'newest', label: 'Newest First', icon: <Calendar size={16} /> },
    { id: 'oldest', label: 'Oldest First', icon: <Calendar size={16} /> },
    { id: 'az', label: 'A to Z', icon: <Type size={16} /> },
    { id: 'za', label: 'Z to A', icon: <Type size={16} /> },
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">

      <SEO 
  title="Blog & Technical Articles" 
  description="Insights on web development, Python automation, and my experiences building startups and EdTech platforms."
/>
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-5 block">The Insights</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Thoughts Shared <br/><span className="text-gradient">With Purpose</span>
          </h1>
        </motion.div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pt-24 border-t border-slate-100 dark:border-white/5 relative">
          
          {/* Left Column: Fixed/Sticky Metadata & Search */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12"
          >
            <div className="flex flex-col space-y-8">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-2 block">EXPLORE</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">Library</h2>
                </div>
                
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 border shadow-lg ${
                    isFilterOpen 
                      ? 'bg-accent-violet border-accent-violet text-white scale-110' 
                      : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-white/5 text-slate-400 hover:text-accent-violet'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isFilterOpen ? (
                      <motion.div key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div key="filter" initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -45 }}>
                        <Filter size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Sidebar Search Bar */}
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent-violet transition-colors" size={16} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..." 
                  className="w-full pl-14 pr-6 py-4 rounded-full bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 outline-none focus:ring-1 focus:ring-accent-violet/30 transition-all text-sm font-medium text-slate-900 dark:text-white shadow-sm"
                />
              </div>

              {/* Advanced Filter Panel */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -20, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 rounded-[2.5rem] bg-slate-50/50 dark:bg-[#0f0f0f] border border-slate-200/60 dark:border-white/10 backdrop-blur-xl shadow-2xl space-y-8">
                      {/* Sort Section */}
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 px-2">Sort By</h4>
                        <div className="flex flex-col gap-1">
                          {sortItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setSortOption(item.id)}
                              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all w-full group ${
                                sortOption === item.id
                                  ? 'bg-zinc-900/10 dark:bg-white/10 text-slate-900 dark:text-white'
                                  : 'text-slate-500 dark:text-zinc-500 hover:bg-zinc-900/5 dark:hover:bg-white/5'
                              }`}
                            >
                              <div className={`transition-colors ${sortOption === item.id ? 'text-accent-violet' : 'text-slate-400'}`}>
                                {item.icon}
                              </div>
                              <span className="text-sm font-bold tracking-tight">
                                {item.label}
                              </span>
                              {sortOption === item.id && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-violet" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="pt-4 border-t border-slate-200/50 dark:border-white/5">
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4 px-2">Categories</h4>
                        <div className="flex flex-wrap gap-2 px-2">
                          {categories.map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setActiveCategory(cat)}
                              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${
                                activeCategory === cat
                                  ? 'bg-accent-violet text-white shadow-md'
                                  : 'bg-white dark:bg-zinc-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-zinc-700'
                              }`}
                            >
                              {activeCategory === cat && <Check size={12} />}
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-8">
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-accent-violet/5 to-accent-purple/10 dark:from-accent-violet/[0.03] dark:to-accent-purple/[0.05] border border-accent-violet/20 dark:border-accent-violet/10 shadow-sm backdrop-blur-sm">
                  <p className="text-sm font-medium text-slate-600 dark:text-zinc-300 leading-relaxed italic">
                    "I write about things I find interesting in the world of web engineering, distributed systems, and modern design."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Scrollable Post List */}
          <div className="lg:col-span-8 space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative cursor-pointer"
                    onClick={() => onNavigate('blog-detail', post.id)}
                  >
                    {/* Fixed Height Card for Consistency */}
                    <div className="relative flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50/50 dark:bg-white/[0.03] backdrop-blur-3xl border border-slate-200/60 dark:border-white/10 hover:bg-slate-100/50 dark:hover:bg-white/[0.06] transition-all duration-700 shadow-xl overflow-hidden min-h-[340px]">
                      
                      {/* Content Section (Left side of card) */}
                      <div className="flex-1 flex flex-col justify-between py-2 relative z-10">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-accent-violet bg-accent-violet/10 px-3 py-1 rounded-full">
                              {post.date}
                            </span>
                            <span className="text-[9px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-widest">
                              {post.readingTime || '8 MIN READ'}
                            </span>
                            <span className="text-[9px] font-black text-slate-300 dark:text-zinc-700 uppercase tracking-widest border-l border-slate-200 dark:border-zinc-800 pl-4">
                              {post.category}
                            </span>
                          </div>

                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight group-hover:text-accent-violet transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-base md:text-lg text-slate-500 dark:text-zinc-400 leading-relaxed font-medium mb-8 line-clamp-3 pr-4">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center gap-6 mt-auto">
                          <button className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center text-slate-900 dark:text-white group/btn">
                            Read Story
                            <div className="ml-3 p-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black group-hover/btn:translate-x-1 transition-all">
                              <ArrowRight size={12} />
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Image Section - Fixed Aspect Ratio for Consistency */}
                      <div className="md:w-1/3 lg:w-[38%] aspect-video md:aspect-[4/3] shrink-0 relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-slate-200/50 dark:border-white/10 shadow-inner">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                        
                        <div className="absolute top-5 right-5 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                           <Sparkles size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="size-16 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center mb-6">
                    <X size={24} className="text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">No articles found</h3>
                  <p className="text-slate-500 dark:text-zinc-500 font-medium">Try adjusting your search or category filter.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); setSortOption('newest'); }}
                    className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-accent-violet"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* End of Collection Status */}
            <div className="pt-24 pb-12 flex flex-col items-center text-center">
              <div className="w-12 h-px bg-slate-200 dark:bg-zinc-800 mb-8" />
              <p className="text-[10px] font-black text-slate-300 dark:text-zinc-800 uppercase tracking-[0.8em] mb-4">END OF COLLECTION</p>
              <p className="text-slate-400 dark:text-zinc-500 text-sm font-medium italic">New entries added as life happens.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
