'use client';

import { motion, useTransform, type MotionValue } from 'framer-motion';

export default function HeroScene({ scrollYProgress, jumpTo }: { scrollYProgress: MotionValue<number>, jumpTo: (p: number) => void }) {
  // Cinematic scroll transforms
  const heroScale = useTransform(scrollYProgress, [0.0, 0.08, 0.15], [1, 1.2, 2]);
  const heroOpacity = useTransform(scrollYProgress, [0.0, 0.08, 0.12], [1, 0.8, 0]);
  
  // Parallax elements
  const leftParallax = useTransform(scrollYProgress, [0.0, 0.15], [0, -80]);
  const rightParallax = useTransform(scrollYProgress, [0.0, 0.15], [0, -30]);

  return (
    <motion.div
      style={{
        scale: heroScale,
        opacity: heroOpacity,
      }}
      className="relative w-full max-w-[100vw] overflow-x-hidden min-h-screen flex flex-col justify-center pt-24 pb-12 sm:pt-32 px-4 sm:px-8 md:px-12 lg:px-16 selection:bg-[#E8E8E6] selection:text-[#070707] z-30"
    >
      {/* Subtle obsidian gradient/noise backplate */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row relative z-10 gap-8 lg:gap-0 lg:min-h-[60vh] lg:items-center">
        
        {/* LEFT COMPONENT: Huge Identity */}
        <motion.div 
          style={{ y: leftParallax }}
          className="flex-1 flex flex-col justify-center min-w-0 pr-0 lg:pr-12 xl:pr-16"
        >
          <h1 
            className="font-black tracking-tighter uppercase text-[#F2F2F0] leading-[0.85] break-words hyphens-auto"
            style={{ fontSize: 'clamp(2rem, 6.5vw, 7rem)' }}
          >
            AMARA<br />
            ONUOHA
          </h1>
        </motion.div>

        {/* DIVIDER: Vertical on Desktop, Horizontal on Mobile */}
        <div className="shrink-0 w-full lg:w-px h-px lg:h-[50vh] bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />

        {/* RIGHT COMPONENT: Description & Role */}
        <motion.div 
          style={{ y: rightParallax }}
          className="flex-1 flex flex-col justify-center min-w-0 pl-0 lg:pl-12 xl:pl-16 pt-4 lg:pt-0"
        >
          <h2 className="text-[#8A8A8A] font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 break-words">
            FULL-STACK SOFTWARE ENGINEER <span className="hidden sm:inline">&</span><br className="sm:hidden" /> PRODUCT BUILDER
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-[clamp(1.5rem,2.5vw,2.5rem)] font-medium leading-[1.3] text-[#F2F2F0] tracking-tight max-w-2xl mb-8 sm:mb-12">
            I build digital products from idea to production. Working across frontend, backend systems, APIs, databases, AI integrations, and product interfaces.
          </p>

          <div className="flex flex-col gap-4 font-mono text-[10px] sm:text-xs text-[#707070] tracking-[0.15em] uppercase">
            <div className="flex items-center gap-4">
              <span className="w-6 h-[1px] bg-[rgba(255,255,255,0.1)]" />
              <span className="min-w-0 break-words">CURRENTLY BUILDING <span className="text-[#E8E8E6] font-bold tracking-widest ml-1">OUTREACHLY</span></span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-[1px] bg-[rgba(255,255,255,0.1)]" />
              <span className="min-w-0 break-words">BUILT SO FAR <span className="text-[#E8E8E6] font-bold tracking-widest ml-1">KOLLAB / PEERLINK</span></span>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 pointer-events-auto w-max">
             <button
                type="button"
                onClick={() => jumpTo(0.16)}
                className="group inline-flex items-center gap-3 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#8A8A8A] hover:text-[#F2F2F0] transition-colors cursor-pointer"
              >
                <span>ENTER WORKSPACE</span>
                <span className="group-hover:translate-y-1 transition-transform">↓</span>
              </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
