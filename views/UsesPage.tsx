
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Terminal, Code, Sparkles } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import SEO from '../components/SEO';

function Model() 
{
  const { scene } = useGLTF("/Models/gaming_desktop_pc.glb");
  return <primitive object={scene} scale={1.2} rotation={[0, Math.PI / -2, 0]} position={[2.1, 0, 0]} />;
}

const TechCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const particleCount = 40;
    let mouse = { x: 0, y: 0 };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.offsetWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.offsetHeight) this.vy *= -1;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.strokeStyle = document.documentElement.classList.contains('dark') 
        ? 'rgba(139, 92, 246, 0.15)' 
        : 'rgba(139, 92, 246, 0.1)';
      ctx.fillStyle = ctx.strokeStyle;

      particles.forEach((p, i) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.globalAlpha = 1 - dist / 150;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full opacity-60 dark:opacity-40" 
      style={{ maskImage: 'radial-gradient(circle, black, transparent 80%)' }}
    />
  );
};

const UsesPage: React.FC = () => {
  const stack = [
    {
      category: 'Workstation',
      icon: <Monitor />,
      items: [
        { name: 'MSI G2422C', desc: '23.6 Inch FHD Curved Gaming Monitor, 180Hz / 1ms' },
        { name: 'AMD Ryzen 5 5500GT', desc: 'Desktop Processor with Integrated Radeon Graphics 7, 6 cores 12 Threads' },
        { name: 'Dell Wired Keyboard and Mouse', desc: 'Durable, Robust key design, Smooth and accurate cursor control' },
        { name: 'Ant Esports GS350 Pro', desc: 'Stereo Gaming Speakers 15W with Woofer' },
      ]
    },
    {
      category: 'Software',
      icon: <Terminal />,
      items: [
        { name: 'VS Code', desc: 'Tokyo Night theme with Operator Mono' },
        { name: 'Figma', desc: 'Primary tool for UI design and prototyping' },
        { name: 'Docker & Postman', desc: 'Streamline the testing and deployment of APIs' },
        { name: 'Chrome Browser', desc: 'Managing the web with nested tabs and spaces' },
      ]
    },
    {
      category: 'Development',
      icon: <Code />,
      items: [
        { name: 'Next js', desc: 'React framework for high-performance apps' },
        { name: 'Tailwind CSS', desc: 'Utility-first CSS for rapid UI engineering' },
        { name: 'Framer Motion', desc: 'Production-ready motion system for React' },
        { name: 'Zustand', desc: 'Lightweight and scalable state management' },
      ]
    },
    {
      category: 'Data Science',
      icon: <Code />,
      items: [
        { name: 'Python', desc: 'Primary language for data analysis' },
        { name: 'Colab', desc: 'Cloud notebooks with GPU support' },
        { name: 'Jupyter', desc: 'Interactive environment for data exploration' },
        { name: 'Power Bi ', desc: 'Interactive data visualization and dashboards' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-black min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-accent-violet selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
    <SEO 
        title="My Tech Stack & Tools" 
        description="A look at the hardware, software, and development environment I use to build and automate."
        />

        {/* Header Section - Matches About Page Style */}
        <div className="mb-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-5 block">
              The Gear
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              What Powers <br /><span className="text-gradient">My Work.</span>
            </h1>
          </motion.div>
        </div>

        {/* 3D Visual Embed Container */}

<motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  // 1. Force Full Screen Width (Break out of parent container)
  className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] h-[600px] md:h-[700px] cursor-grab active:cursor-grabbing" 
> 
  {/* 2. Zoomed Out Camera (Z=18) so the desk fits nicely */}
  <Canvas shadows camera={{ position: [0, 5, 18], fov: 55 }}>
    
    {/* Clean Studio Lighting (Dimmed for Dark Mode compatibility) */}
    <Environment preset="studio" environmentIntensity={0.3}  />

    {/* Rotates the studio lighting 90 degrees on the Y axis */}
<Environment 
   preset="studio" 
   environmentIntensity={0.3} 
   environmentRotation={[0, Math.PI / 2, 0]} 
/>
    
    <directionalLight 
      position={[2, 5, 2]} 
      intensity={0.7} 
      castShadow 
      shadow-mapSize={1024} 
    />
    
    <ambientLight intensity={0.2} />

    <ContactShadows 
      position={[0, -0.01, 0]} 
      opacity={0.6} 
      scale={10} 
      blur={2} 
      far={4} 
    />

    <OrbitControls 
      enablePan={false}
      enableZoom={false}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2}
      target={[0, 0, 0]} 
      autoRotate={true}      // Enables the automatic spinning
      autoRotateSpeed={1.5}
    />

    <Model />
  </Canvas>
</motion.div>

        {/* Content Sections - Matches Experience Section Layout */}
        <div className="space-y-0 relative z-10">
          {stack.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start py-16 md:py-24 border-t border-slate-100 dark:border-white/5"
            >
              {/* Category Sidebar */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-white/5 text-accent-violet shadow-sm">
                    {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight uppercase">
                    {cat.category}
                  </h2>
                </div>
                <p className="text-sm font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-widest ml-1">
                  Daily Essentials
                </p>
              </div>

              {/* Items List Grid */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {cat.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-accent-violet transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing branding note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-slate-100 dark:border-white/5 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-accent-violet size-4" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Optimized for performance</span>
          </div>
          <p className="text-slate-500 dark:text-zinc-500 text-sm font-medium italic">
            I'm constantly refining this stack to ensure the highest quality of output.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default UsesPage;
