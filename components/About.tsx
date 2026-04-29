
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Linkedin, Instagram } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  alt: string;       
  description: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  { 
    id: 0, 
    image: 'Images/fazil-rm.png',
    title: 'I Code', 
    alt: ' Fazil RM - Software Developer and Automation Specialist',
    description: 'Portrait of Mohamed Fazil RM,'
  },
  { 
    id: 1, 
    image: 'https://ik.imagekit.io/fazil/Mancity%20FC%20post.png', 
    title: 'I Design',
    alt: 'Manchester City FC Poster Design by Mohamed Fazil RM',
    description: 'A custom sports poster design created by Fazil RM.'
  },
  { 
    id: 2, 
    image: 'https://kolukkumalaijeepsafari.com/wp-content/uploads/2024/09/28c91cc5-8c65-4750-8874-f4716b5d9b98.jpg', 
    title: 'I Lead',
    alt: 'Fazil RM - Founder of LearnEzily.',
    description: 'Co-founding and managing technical architecture for automation projects and student-led tech initiatives.' 
  }
];

const About: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextCard = useCallback(() => {
    setIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  }, []);

  const prevCard = useCallback(() => {
    setIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, [nextCard, isPaused]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.x < -40) {
      nextCard();
    } else if (info.offset.x > 40) {
      prevCard();
    }
  };

  const getCardPosition = (cardIndex: number) => {
    const diff = (cardIndex - index + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length;
    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Mohamed-Fazil-RM', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/mohamedfazil2005', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/__fazil_rm__/', label: 'Instagram' },
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-4 text-center lg:text-left"
          >
            <div className="flex flex-col mb-8 md:mb-10 items-center lg:items-start">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-4 block">About Me</span>
              <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                I'm <span className="text-gradient">Mohamed Fazil RM</span>, a Software Developer and Data Analyst
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">
              <p>
                I'm a proactive Software Developer and Data Analyst passionate about creating dynamic solutions and uncovering meaningful insights. From building robust applications to interpreting complex datasets, I thrive on solving problems with clean, efficient code and analytical precision.
              </p>
              <p>
                My expertise spans software engineering and data analytics. When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
              </p>
              <p className="font-bold text-slate-900 dark:text-white">
                I believe in waking up each day eager to make a difference!
              </p>

              {/* Social Icons Section */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-6 pt-6"
              >
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-slate-400 hover:text-accent-violet transition-colors duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <div 
            className="relative flex flex-col items-center justify-start pt-8 md:pt-12 lg:pt-24 min-h-[420px] md:min-h-[500px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[4/5] flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {CAROUSEL_ITEMS.map((item, i) => {
                  const position = getCardPosition(i);
                  const isCenter = position === 'center';
                  
                  return (
                    <motion.div
                      key={item.id}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={handleDragEnd}
                      animate={{
                        x: position === 'center' ? 0 : position === 'right' ? 50 : -50,
                        scale: isCenter ? 1 : 0.85,
                        rotateY: position === 'center' ? 0 : position === 'right' ? -15 : 15,
                        zIndex: isCenter ? 20 : 10,
                        opacity: isCenter ? 1 : 0.3,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute w-full h-full cursor-grab active:cursor-grabbing transform-gpu"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="relative w-full h-full rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 isolation-auto bg-slate-100 dark:bg-black">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover pointer-events-none rounded-[3rem] md:rounded-[4rem]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-[3rem] md:rounded-[4rem]" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Dynamic Caption */}
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 md:mt-12 text-center"
            >
              <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {CAROUSEL_ITEMS[index].title}
              </h3>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-4 md:mt-6">
              {CAROUSEL_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === i ? 'w-8 bg-accent-violet' : 'w-2 bg-slate-300 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
