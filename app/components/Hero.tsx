'use client';

import { motion, type Variants } from 'framer-motion';
import SignatureSymbol from './SignatureSymbol';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      {/* Top Editorial System Dossier Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-b border-white/10 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8A8A8A]"
      >
        <div className="flex items-center gap-2">
          <SignatureSymbol size={13} className="text-[#F2F2F0]" />
          <span>PORTFOLIO // VOL. 26</span>
        </div>
        <div className="hidden sm:block">
          <span>06°31′N 003°23′E</span>
        </div>
        <div className="text-right sm:text-left">
          <span>INDEX: 01 — 04</span>
        </div>
        <div className="text-right text-[#F2F2F0] font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-[#E8E8E6] mr-1.5 animate-pulse" />
          AVAILABLE FOR BUILD
        </div>
      </motion.div>

      {/* Main Center Typographic Hero */}
      <div className="w-full max-w-7xl mx-auto my-auto py-8 sm:py-12 lg:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Oversized Name Display */}
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.2vw] font-black uppercase tracking-[-0.04em] leading-[0.85] text-[#F2F2F0] select-none"
            >
              AMARACHUKWU
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.2vw] font-black uppercase tracking-[-0.04em] leading-[0.85] text-[#F2F2F0] select-none flex items-baseline justify-between flex-wrap gap-x-4"
            >
              <span>ONUOHA</span>
              <span className="text-xs sm:text-sm md:text-base font-mono font-normal tracking-widest text-[#707070] self-end pb-2 hidden md:inline">
                [ FULL-STACK / PRODUCT BUILDER ]
              </span>
            </motion.h1>
          </div>

          {/* Statement & Structured Metadata Grid */}
          <motion.div
            variants={itemVariants}
            className="pt-8 sm:pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Statement */}
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-snug text-[#F2F2F0] max-w-2xl">
                Software engineer building digital products, interfaces and systems for the web.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#8A8A8A] leading-relaxed max-w-xl">
                Crafting robust web architectures with deliberate design sensibility. Turning complex mechanical backends into frictionless, tactile digital tools.
              </p>
            </div>

            {/* Right Technical Metadata Column */}
            <div className="lg:col-span-5 bg-[#131313] border border-white/10 p-5 sm:p-6 space-y-3 font-mono text-[11px] sm:text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/10 text-[#8A8A8A]">
                <span className="uppercase tracking-widest">SYSTEM PROFILE</span>
                <span className="text-[#F2F2F0] font-semibold">AO-014</span>
              </div>

              <div className="flex justify-between items-baseline py-1">
                <span className="text-[#8A8A8A] tracking-wider uppercase">LOCATION</span>
                <span className="font-semibold text-[#F2F2F0] text-right">LAGOS / NIGERIA</span>
              </div>

              <div className="flex justify-between items-baseline py-1">
                <span className="text-[#8A8A8A] tracking-wider uppercase">DISCIPLINE</span>
                <span className="font-semibold text-[#F2F2F0] text-right">FULL-STACK ENGINEER</span>
              </div>

              <div className="flex justify-between items-baseline pt-2 border-t border-white/10">
                <span className="text-[#8A8A8A] tracking-wider uppercase">CURRENTLY BUILDING</span>
                <a
                  href="#currently-building"
                  className="font-bold text-[#E8E8E6] hover:underline flex items-center gap-1 group"
                  data-cursor="INSPECT"
                >
                  <span>→ OUTREACHLY</span>
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Ledger & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-7xl mx-auto pt-4 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#707070] tracking-widest uppercase border-t border-white/10"
      >
        <div className="flex items-center gap-3">
          <span>EDITORIAL MONOGRAPH</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">PRECISION WEB ENGINEERING</span>
        </div>

        <a
          href="#work"
          className="group flex items-center gap-2 text-[#F2F2F0] hover:text-[#E8E8E6] transition-colors py-1 cursor-pointer"
          data-cursor="SCROLL"
        >
          <span className="tracking-widest">SCROLL TO EXPLORE</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="inline-block text-[#E8E8E6]"
          >
            ↓
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}