'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TerminalHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // State for the typing effect
  const [text, setText] = useState('');
  const fullText = "Full Stack Engineer | Next.js Enthusiast | AI/ML | Web3 |  Web Automations | Mobile Apps";
  const [showCursor, setShowCursor] = useState(true);
  const router = useRouter()

  // 1. Mouse Tracking (Same as before)
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // 2. Typing Logic
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 50); // Speed of typing
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
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden font-mono">
      
      {/* --- BACKGROUND LAYER --- */}
      
      {/* 1. Subtle Grid (Darker for terminal feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* 2. The Glow (Green tint for terminal vibe) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 197, 94, 0.15), transparent 80%)`,
        }}
      />

      {/* --- TERMINAL WINDOW LAYER --- */}
      <div className="z-10 w-full max-w-3xl px-4">
        
        {/* Window Header */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-t-lg p-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-zinc-500">amarachukwuonuoha22@gmail.com:~</span>
        </div>

        {/* Window Body */}
        <div className="w-full bg-black/90 border-x border-b border-zinc-800 rounded-b-lg p-6 md:p-10 backdrop-blur-sm shadow-2xl min-h-[300px]">
          
          {/* Command 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-green-500 mb-2">
              <span>➜</span>
              <span className="text-blue-400">~</span>
              <span>whoami</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight">
              Amarachukwu<span className="text-zinc-600">Dev</span>
            </h1>
          </div>

          {/* Command 2 (Animated) */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-green-500 mb-2">
              <span>➜</span>
              <span className="text-blue-400">~</span>
              <span>cat role.txt</span>
            </div>
            <p className="text-lg md:text-xl text-zinc-400 h-8">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-green-500`}>
                _
              </span>
            </p>
          </div>

          {/* Action Buttons (Styled as commands) */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button onClick={()=>router.push('/projects')} className="group relative px-6 py-3 bg-zinc-900 border border-zinc-700 text-green-500 hover:border-green-500 hover:bg-green-500/10 transition-all">
              <span className="absolute inset-0 w-full h-full bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              ./view_projects.sh
            </button>
            
            <button onClick={()=>router.push('/contact')} className="group relative px-6 py-3 bg-transparent border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 transition-all">
              ./contact_me.sh
            </button>
          </div>

        </div>
      </div>
      
    </section>
  );
}