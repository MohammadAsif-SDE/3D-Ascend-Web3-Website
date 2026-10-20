/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { ArrowRight, ChevronDown, Globe, Zap, Shield, Users, Mail, Github, Twitter } from 'lucide-react';
import Lenis from 'lenis';

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
  >
    <div className="text-xl font-serif font-bold tracking-tighter">Ascend.</div>
    <div className="hidden md:flex items-center gap-8 glass px-6 py-2 rounded-full text-sm font-medium">
      <a href="#" className="hover:text-white/70 transition-colors">About</a>
      <a href="#" className="hover:text-white/70 transition-colors">Clients</a>
      <a href="#" className="hover:text-white/70 transition-colors">Contact</a>
    </div>
    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all flex items-center gap-2">
      Get in Touch <ArrowRight size={14} />
    </button>
  </motion.nav>
);

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div style={{ y, opacity }} className="z-10 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tight mb-8"
        >
          Powering the <span className="italic font-normal">next generation</span> of web3 brands.
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            Get in Touch <ArrowRight size={18} />
          </button>
          <button className="glass px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs uppercase tracking-widest"
      >
        <span>Scroll down</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
};

const ContentSection = ({ title, description, side = 'left', index }: { title: string, description: string, side?: 'left' | 'right', index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center px-6 md:px-24 py-24 relative">
      <div className={`max-w-xl z-10 ${side === 'right' ? 'ml-auto text-right' : 'mr-auto'}`}>
        <motion.span 
          initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
          animate={isInView ? { opacity: 0.5, x: 0 } : {}}
          className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block"
        >
          0{index} / Our Agency
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif leading-tight mb-8"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.7, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-light leading-relaxed text-white/80"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

const ClientGrid = () => {
  const clients = [
    { name: 'Animoca Brands', icon: Globe },
    { name: 'Immutable', icon: Shield },
    { name: 'Sandbox', icon: Zap },
    { name: 'Seedify', icon: Users },
    { name: 'Monad', icon: Globe },
    { name: 'Abstract', icon: Shield },
    { name: 'Blur', icon: Zap },
    { name: 'Biptap', icon: Users },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 mb-4 block">03 / Clients</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Trusted by Leading Innovators in Web3.</h2>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 z-10">
            {clients.map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="glass p-8 rounded-xl flex flex-col items-center justify-center gap-4 text-center group"
              >
                <client.icon className="opacity-40 group-hover:opacity-100 transition-opacity" size={32} />
                <span className="text-sm font-medium opacity-60 group-hover:opacity-100">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
    <div className="z-10">
      <h2 className="text-5xl md:text-7xl font-serif mb-12">Ready to <span className="italic">ascend</span> your<br />web3 project?</h2>
      <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
        Get in Touch <ArrowRight size={20} />
      </button>
    </div>
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -z-10" />
  </section>
);

const Footer = () => (
  <footer className="px-6 md:px-12 py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <div className="text-2xl font-serif font-bold mb-6">Ascend.</div>
        <p className="text-white/50 max-w-xs mb-8">
          Speak to your new marketing team today.
          <br />
          <a href="mailto:contact@example.xyz" className="text-white hover:underline">contact@example.xyz</a>
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-all"><Twitter size={18} /></a>
          <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-all"><Github size={18} /></a>
          <a href="#" className="p-2 glass rounded-full hover:bg-white/10 transition-all"><Mail size={18} /></a>
        </div>
      </div>
      <div className="flex flex-col md:items-end justify-between">
        <div className="flex gap-12 text-sm uppercase tracking-widest font-bold opacity-50">
          <div className="flex flex-col gap-4">
            <span className="text-white opacity-100 mb-2">Discover</span>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Clients</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white opacity-100 mb-2">Social</span>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="mt-12 text-[10px] opacity-30 uppercase tracking-widest">
          © 2026 Ascend Marketing. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Scroll Animation Component ---

const ScrollVisual = () => {
  const { scrollYProgress } = useScroll();
  
  // Physics-based spring for smoother motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values for the FIRST component (Coil)
  // It moves to the right as we scroll towards the Clients section (around 0.6)
  const coilRotate = useTransform(smoothProgress, [0, 1], [0, 720]);
  const coilScale = useTransform(smoothProgress, [0, 0.5, 0.7, 1], [1, 1.4, 0.6, 0.4]);
  const coilX = useTransform(smoothProgress, [0, 0.4, 0.6, 1], ["0%", "20%", "40%", "50%"]);
  const coilOpacity = useTransform(smoothProgress, [0, 0.1, 0.7, 1], [0.6, 1, 0.8, 0.2]);

  // Transform values for the SECOND component (Orb/Prism)
  // It starts appearing around 0.6 (Clients section)
  const orbRotate = useTransform(smoothProgress, [0.5, 1], [0, -180]);
  const orbScale = useTransform(smoothProgress, [0.5, 0.7, 1], [0, 1.2, 1]);
  const orbX = useTransform(smoothProgress, [0.5, 0.7, 1], ["-50%", "-30%", "-40%"]);
  const orbOpacity = useTransform(smoothProgress, [0.5, 0.6, 1], [0, 1, 0.8]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Component 1: The Coil (Moves Right) */}
      <motion.div 
        style={{ 
          rotate: coilRotate, 
          scale: coilScale, 
          x: coilX,
          opacity: coilOpacity,
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
          <defs>
            <linearGradient id="coilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#444444" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.ellipse
              key={i}
              cx="200"
              cy="200"
              rx={180 - i * 4}
              ry={60 + i * 2}
              fill="none"
              stroke="url(#coilGrad)"
              strokeWidth="0.5"
              style={{
                rotate: i * 5,
                opacity: 1 - i * 0.02
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Component 2: The Orb/Prism (Starts from Clients section) */}
      <motion.div 
        style={{ 
          rotate: orbRotate, 
          scale: orbScale, 
          x: orbX,
          opacity: orbOpacity,
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px]"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_80px_rgba(255,255,255,0.05)]">
          <defs>
            <radialGradient id="orbGrad">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* A more geometric, crystalline structure for the second component */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.rect
              key={i}
              x="100"
              y="100"
              width="200"
              height="200"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.2"
              style={{
                rotate: i * 30,
                scale: 1 - i * 0.05,
                opacity: 0.3
              }}
            />
          ))}
          <circle cx="200" cy="200" r="80" fill="url(#orbGrad)" />
        </svg>
      </motion.div>

      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
    </div>
  );
};

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />
      <ScrollVisual />
      
      <div className="relative z-10">
        <Hero />
        
        <ContentSection 
          index={1}
          title="We specialize in marketing for the decentralized world."
          description="From launching token campaigns to building loyal communities, we connect Web3 projects with the audiences that matter most. Our approach combines data-driven strategy with creative storytelling."
        />
        
        <ContentSection 
          index={2}
          side="right"
          title="We help blockchain, crypto, NFT, and DeFi projects grow."
          description="Through community-first strategy, creative campaigns, and cutting-edge digital marketing, we ensure your project doesn't just launch—it ascends. We partner with forward-thinking startups shaping the future of the internet."
        />
        
        <ClientGrid />
        
        <CTA />
        
        <Footer />
      </div>
    </main>
  );
}
