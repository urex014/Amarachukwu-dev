'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TerminalHero() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  
  // State for the typing effect
  const [text, setText] = useState('');
  const fullText = "Full Stack Engineer | Next.js Enthusiast | AI/ML | Web3 | Web Automations | Mobile Apps";
  const [showCursor, setShowCursor] = useState(true);
  const router = useRouter();

  // 1. Mouse & Touch Tracking
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const updateTouchPosition = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition, { passive: true });
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
    };
  }, []);

  // 2. Typing Logic
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 40); // Speed of typing
      return () => clearTimeout(timeout);
    }
  }, [text]);

  // 3. Blinking Cursor Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center bg-black py-8 sm:py-12 px-3 sm:px-6 overflow-x-hidden font-mono">
      
      {/* --- BACKGROUND LAYER --- */}
      
      {/* 1. Subtle Grid (Darker for terminal feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      {/* 2. The Glow (Follows cursor on desktop/touch, fallback center ambient on mobile) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden sm:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 80%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)] sm:hidden" />

      {/* --- TERMINAL WINDOW LAYER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="z-10 w-full max-w-3xl my-auto"
      >
        
        {/* Window Header */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-t-lg px-3 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[11px] sm:text-xs text-zinc-500 truncate max-w-[210px] sm:max-w-md select-none">
            amarachukwuonuoha22@gmail.com:~
          </span>
          <span className="hidden sm:inline-block text-[10px] text-zinc-600 font-mono select-none">
            bash
          </span>
        </div>

        {/* Window Body */}
        <div className="w-full bg-black/90 border-x border-b border-zinc-800 rounded-b-lg p-4 sm:p-8 md:p-10 backdrop-blur-sm shadow-2xl min-h-[300px] flex flex-col justify-between">
          
          <div>
            {/* Command 1 */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-green-500 text-xs sm:text-sm mb-1.5 sm:mb-2">
                <span>➜</span>
                <span className="text-blue-400">~</span>
                <span>whoami</span>
              </div>
              <h1 className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight break-words">
                Amarachukwu<span className="text-zinc-500">Dev</span>
              </h1>
            </div>

            {/* Command 2 (Animated) */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-green-500 text-xs sm:text-sm mb-1.5 sm:mb-2">
                <span>➜</span>
                <span className="text-blue-400">~</span>
                <span>cat role.txt</span>
              </div>
              {/* Flexible container that adapts to multi-line text without cutoffs or overlapping */}
              <div className="min-h-[4.5rem] sm:min-h-[3.2rem] md:min-h-[2.5rem]">
                <p className="text-xs sm:text-base md:text-xl text-zinc-300 leading-relaxed break-words">
                  {text}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-green-500 font-bold ml-0.5`}>
                    _
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons (Styled as commands) */}
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button 
              onClick={()=>router.push('/projects')} 
              className="group relative w-full sm:w-auto px-5 py-3 bg-zinc-900 border border-zinc-700 text-green-400 hover:border-green-500 hover:bg-green-500/10 active:scale-[0.98] transition-all rounded text-center justify-center flex items-center text-xs sm:text-sm cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded"></span>
              ./view_projects.sh
            </button>
            
            <button 
              onClick={()=>router.push('/contact')} 
              className="group relative w-full sm:w-auto px-5 py-3 bg-transparent border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900/50 active:scale-[0.98] transition-all rounded text-center justify-center flex items-center text-xs sm:text-sm cursor-pointer"
            >
              ./contact_me.sh
            </button>
          </div>

        </div>
      </motion.div>
      
    </section>
  );
}