'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import CinematicCanvas from './CinematicCanvas';
import HeroScene from './HeroScene';
import SignatureSymbol from './SignatureSymbol';
import Link from 'next/link';

// Lightweight isolated HUD scrubber to prevent re-rendering the whole 3D stage on scroll
function ScrubberBar({ progress }: { progress: MotionValue<number> }) {
  const scaleX = useTransform(progress, [0, 1], [0, 1]);
  return (
    <div className="w-20 sm:w-44 h-1.5 bg-[#131313]/15 rounded-full overflow-hidden relative">
      <motion.div
        style={{ scaleX, transformOrigin: '0% 50%' }}
        className="h-full bg-[#E8E8E6] shadow-[0_0_10px_rgba(232, 232, 230,0.8)] border border-white/10"
      />
    </div>
  );
}

export default function CinematicExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [activeLabIndex, setActiveLabIndex] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'transmitting' | 'complete'>('idle');

  // Master Continuous Timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('amarachukwuonuoha22@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatchStatus('transmitting');
    setTimeout(() => {
      setDispatchStatus('complete');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setDispatchStatus('idle'), 3500);
    }, 1100);
  };

  // Chapter Navigation Trigger
  const jumpTo = (progress: number) => {
    if (!containerRef.current) return;
    const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: progress * totalHeight,
      behavior: 'smooth',
    });
  };

  // ========================================================
  // 3D VIRTUAL CAMERA SPATIAL TRANSFORMS (60fps DOM Style Bindings)
  // ========================================================

  
  // SCENE 02: PROJECT 01 — KOLLAB (0.07 -> 0.22)
  const p1Opacity = useTransform(scrollYProgress, [0.06, 0.10, 0.17, 0.22], [0, 1, 1, 0]);
  const p1Scale = useTransform(scrollYProgress, [0.06, 0.11, 0.17, 0.22], [0.55, 1, 1.02, 2.2]);
  const p1Z = useTransform(scrollYProgress, [0.06, 0.11, 0.17, 0.22], [-900, 0, 60, 700]);
  const p1RotateY = useTransform(scrollYProgress, [0.06, 0.12, 0.18, 0.22], [-12, 0, 0, 10]);
  const p1RotateX = useTransform(scrollYProgress, [0.06, 0.12, 0.18, 0.22], [8, 0, 0, -8]);
  const p1CardTilt = useTransform(scrollYProgress, [0.08, 0.20], [-3, 3]);

  // SCENE 03: PROJECT 02 — OUTREACHLY (0.20 -> 0.35)
  const p2Opacity = useTransform(scrollYProgress, [0.19, 0.23, 0.31, 0.35], [0, 1, 1, 0]);
  const p2Scale = useTransform(scrollYProgress, [0.19, 0.24, 0.30, 0.35], [0.5, 1, 1.03, 2.3]);
  const p2Z = useTransform(scrollYProgress, [0.19, 0.24, 0.30, 0.35], [-1000, 0, 80, 750]);
  const p2RotateY = useTransform(scrollYProgress, [0.19, 0.24, 0.31, 0.35], [12, 0, 0, -12]);
  const p2RotateX = useTransform(scrollYProgress, [0.19, 0.24, 0.31, 0.35], [-6, 0, 0, 8]);
  const p2LaptopY = useTransform(scrollYProgress, [0.22, 0.32], [20, -20]);

  // SCENE 04: PROJECT 03 — CEPHAS TOUCH (0.33 -> 0.48)
  const p3Opacity = useTransform(scrollYProgress, [0.32, 0.36, 0.44, 0.48], [0, 1, 1, 0]);
  const p3Scale = useTransform(scrollYProgress, [0.32, 0.37, 0.43, 0.48], [0.55, 1, 1.02, 2.0]);
  const p3Z = useTransform(scrollYProgress, [0.32, 0.37, 0.43, 0.48], [-850, 0, 60, 650]);
  const p3RotateY = useTransform(scrollYProgress, [0.32, 0.37, 0.44, 0.48], [-10, 0, 0, 10]);

  // SCENE 04.1: PROJECT 04 — PEERLINK (0.46 -> 0.61)
  const p4Opacity = useTransform(scrollYProgress, [0.45, 0.49, 0.57, 0.61], [0, 1, 1, 0]);
  const p4Scale = useTransform(scrollYProgress, [0.45, 0.50, 0.56, 0.61], [0.55, 1, 1.02, 2.0]);
  const p4Z = useTransform(scrollYProgress, [0.45, 0.50, 0.56, 0.61], [-900, 0, 60, 700]);
  const p4RotateY = useTransform(scrollYProgress, [0.45, 0.50, 0.57, 0.61], [10, 0, 0, -10]);

  // SCENE 04.2: PROJECT 05 — ZEROGATE (0.59 -> 0.74)
  const p5Opacity = useTransform(scrollYProgress, [0.58, 0.62, 0.70, 0.74], [0, 1, 1, 0]);
  const p5Scale = useTransform(scrollYProgress, [0.58, 0.63, 0.69, 0.74], [0.55, 1, 1.02, 2.0]);
  const p5Z = useTransform(scrollYProgress, [0.58, 0.63, 0.69, 0.74], [-850, 0, 60, 650]);
  const p5RotateX = useTransform(scrollYProgress, [0.58, 0.63, 0.70, 0.74], [-8, 0, 0, 8]);

  // SCENE 05: CURRENTLY BUILDING (0.72 -> 0.84)
  const buildOpacity = useTransform(scrollYProgress, [0.71, 0.75, 0.81, 0.84], [0, 1, 1, 0]);
  const buildScale = useTransform(scrollYProgress, [0.71, 0.76, 0.81, 0.84], [0.65, 1, 1.03, 1.9]);
  const buildZ = useTransform(scrollYProgress, [0.71, 0.76, 0.81, 0.84], [-800, 0, 40, 600]);
  const buildRotate = useTransform(scrollYProgress, [0.72, 0.82], [-2, 2]);

  // SCENE 06: THE LAB (0.82 -> 0.92)
  const labOpacity = useTransform(scrollYProgress, [0.81, 0.84, 0.90, 0.92], [0, 1, 1, 0]);
  const labScale = useTransform(scrollYProgress, [0.81, 0.85, 0.90, 0.92], [0.7, 1, 1.02, 1.8]);
  const labZ = useTransform(scrollYProgress, [0.81, 0.85, 0.90, 0.92], [-750, 0, 50, 600]);

  // SCENE 07: ABOUT (0.90 -> 0.97)
  const aboutOpacity = useTransform(scrollYProgress, [0.89, 0.92, 0.95, 0.97], [0, 1, 1, 0]);
  const aboutScale = useTransform(scrollYProgress, [0.89, 0.93, 0.95, 0.97], [0.75, 1, 1.02, 1.5]);
  const aboutZ = useTransform(scrollYProgress, [0.89, 0.93, 0.95, 0.97], [-600, 0, 40, 450]);

  // SCENE 08: CONTACT (0.95 -> 1.00)
  const contactOpacity = useTransform(scrollYProgress, [0.94, 0.97, 1.0], [0, 1, 1]);
  const contactScale = useTransform(scrollYProgress, [0.94, 0.98, 1.0], [0.8, 1, 1]);
  const contactZ = useTransform(scrollYProgress, [0.94, 0.98, 1.0], [-500, 0, 0]);

  // Interactive Lab Exploration Assets
  const labItems = [
    {
      title: 'KOLLAB',
      tagline: 'Transparent Creator Marketplace for Brands',
      category: 'CREATOR ECONOMY',
      image: '/kollab.png',
      color: '#FF5722',
      tech: 'Next.js • Tailwind • Escrow Flow',
      desc: 'Connects businesses with emerging content creators for UGC ads at honest prices with zero agency markups and safe escrow protection.',
    },
    {
      title: 'PEERLINK',
      tagline: 'Student Campus Marketplace & Exchange',
      category: 'CAMPUS P2P',
      image: '/peerLink.png',
      color: '#2563EB',
      tech: 'Next.js • TypeScript • Realtime Sync',
      desc: 'A flexible, zero-fee student marketplace enabling verified campus trade for textbooks, electronics, and peer exchanges.',
    },
    {
      title: 'ZEROGATE',
      tagline: 'Visual Search for Verified Digital Assets',
      category: 'AI / COMPUTER VISION',
      image: '/zerogate.png',
      color: '#E8E8E6',
      tech: 'Vision API • Embeddings • Web3',
      desc: 'Snap a photo to discover digital twins on-chain. Bridging visual recognition with trustless ownership records.',
    },
    {
      title: 'RECENG',
      tagline: 'AI-Powered Visual Search & Recommendation Engine',
      category: 'RECOMMENDATION AI',
      image: '/RecEng.png',
      color: '#A855F7',
      tech: 'Python • Vector Search • FastEmbed',
      desc: 'Snap & Shop customer visual discovery portal paired with automated catalog tagging and visual affinity clustering.',
    },
    {
      title: 'SENTRYGUARD',
      tagline: 'Trustless On-Chain Digital Inheritance Vault',
      category: 'SMART CONTRACTS',
      image: '/sentryGuard.png',
      color: '#E8E8E6',
      tech: 'Solidity • Heartbeat Cryptography',
      desc: 'If a wallet stays inactive for 180 days, designated beneficiaries can claim assets without intermediaries.',
    },
    {
      title: 'CRYPTIC',
      tagline: 'Instant Airtime, Data & Utility Bill Platform',
      category: 'FINTECH INFRA',
      image: '/cryptic.png',
      color: '#F59E0B',
      tech: 'Node.js • VTU Gateway • Webhooks',
      desc: 'High-speed automated utility bill processing and micro-transactions designed for the Nigerian market.',
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[900vh] bg-[#070707] text-[#F2F2F0] overflow-x-clip">
      
      {/* Background Three.js WebGL Spatial Depth Layer */}
      <CinematicCanvas scrollProgress={0} />

      {/* Ambient Playful Color Blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Outreachly Lime Aura */}
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[#E8E8E6]/18 blur-[150px]" />
        {/* Poppy Orange Glow */}
        <div className="absolute top-1/2 -right-[15%] w-[50vw] h-[50vw] rounded-full bg-[#FF5722]/10 blur-[160px]" />
        {/* Soft Lavender / Blue Aura */}
        <div className="absolute -bottom-[10%] left-1/3 w-[50vw] h-[50vw] rounded-full bg-[#2563EB]/10 blur-[150px]" />
      </div>

      {/* Subtle Editorial Grain Texture Overlay */}
      <div 
        className="editorial-grain pointer-events-none fixed inset-0 z-10 opacity-[0.035] mix-blend-multiply" 
        aria-hidden="true" 
      />

      {/* ======================================================== */}
      {/* PLAYFUL FIXED HUD & FLOATING STUDIO NAVIGATION */}
      {/* ======================================================== */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 p-3 sm:p-6 lg:p-8 flex items-center justify-between select-none">
        
        {/* Left Monogram Brand Stamp */}
        <div className="pointer-events-auto flex items-center gap-2.5 bg-[#070707]/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-white/10 rounded-full shadow-[2px_2px_0px_#000000]">
          <SignatureSymbol size={16} />
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-tight uppercase">
            AMARA ONUOHA
          </span>
          <span className="hidden sm:inline text-[9px] bg-[#E8E8E6] text-[#070707] font-bold px-1.5 py-0.2 rounded-full border border-white/10">
            CREATIVE DEV
          </span>
        </div>

        {/* Center Chapter Jump Navigation (Pill Capsule) */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-[#070707]/90 backdrop-blur-md px-2 py-1 border border-white/10 rounded-full shadow-[2px_2px_0px_#000000] font-mono text-[10px] font-bold">
          {[
            { label: 'INTRO', pos: 0.0 },
            { label: 'KOLLAB', pos: 0.14 },
            { label: 'OUTREACHLY', pos: 0.27 },
            { label: 'CEPHAS', pos: 0.40 },
            { label: 'PEERLINK', pos: 0.53 },
            { label: 'ZEROGATE', pos: 0.66 },
            { label: 'BUILDING', pos: 0.77 },
            { label: 'LAB', pos: 0.86 },
            { label: 'ABOUT', pos: 0.93 },
            { label: 'CONTACT', pos: 0.98 },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => jumpTo(item.pos)}
              className="px-2.5 py-1 rounded-full hover:bg-[#E8E8E6] hover:text-[#F2F2F0] transition-colors cursor-pointer uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Status Capsule */}
        <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 bg-[#070707]/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 border border-white/10 rounded-full shadow-[2px_2px_0px_#000000] font-mono text-[10px] sm:text-[11px]">
          <span className="text-[#FF5722] font-bold">LAGOS</span>
          <span className="text-[#F2F2F0]/40">•</span>
          <span className="text-[#F2F2F0] font-semibold hidden sm:inline">06°31′N 003°23′E</span>
          <span className="text-[#F2F2F0] font-semibold sm:hidden">06°31′N</span>
        </div>
      </header>

      {/* Bottom Timeline Footer HUD */}
      <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 sm:p-6 lg:p-8 flex items-center justify-between select-none font-mono text-[9px] sm:text-[10px]">
        <div className="pointer-events-auto hidden sm:flex items-center gap-2 bg-[#070707]/95 backdrop-blur-md px-3 py-1 border border-white/10 rounded-full shadow-[2px_2px_0px_#000000]">
          <SignatureSymbol size={13} className="text-[#F2F2F0]" />
          <span className="font-bold">CREATIVE DIGITAL PLAYGROUND</span>
        </div>

        {/* Real-time Visual Scrubber */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 bg-[#070707]/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 border border-white/10 rounded-full shadow-[2px_2px_0px_#000000] ml-auto sm:ml-0">
          <span className="font-bold text-[#F2F2F0]">TIMELINE</span>
          <ScrubberBar progress={scrollYProgress} />
        </div>
      </footer>

      {/* ======================================================== */}
      {/* 3D PINNED CINEMATIC STAGE (60fps Perspective Viewport) */}
      {/* ======================================================== */}
      <div 
        className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-x-clip"
        style={{
          perspective: '1300px',
          perspectiveOrigin: '50% 50%',
          transformStyle: 'preserve-3d',
        }}
      >

        {/* ======================================================== */}
        {/* BEAT 01: HERO / PLAYFUL CREATIVE ENTRANCE (0.00 -> 0.12) */}
        {/* ======================================================== */}
        <HeroScene scrollYProgress={scrollYProgress} jumpTo={jumpTo} />


        {/* ======================================================== */}
        {/* BEAT 02: PROJECT 01 — KOLLAB (0.09 -> 0.28) */}
        {/* ======================================================== */}
        <motion.article
          style={{
            opacity: p1Opacity,
            scale: p1Scale,
            z: p1Z,
            rotateY: p1RotateY,
            rotateX: p1RotateX,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 lg:p-12 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-5xl max-h-[82vh] overflow-y-auto sm:overflow-visible bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] relative">
            
            {/* Top Playful Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10 mb-4 font-mono text-[10px] sm:text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#2563EB] text-white font-black rounded-full text-[9px] uppercase">
                  PROJECT 01
                </span>
                <span className="font-bold text-[#F2F2F0]">Kollab</span>
              </div>
              <span className="text-[#8A8A8A] text-[10px]">NEXT.JS • TS • FRAMER</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              
              {/* Left Editorial Text */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F2F2F0] leading-none">
                  Kollab
                </h2>

                <div className="text-sm sm:text-base font-bold text-[#F2F2F0] leading-snug">
                  Transparent Creator Marketplace for Brands
                </div>

                <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                  Connects businesses with emerging content creators for UGC ads at honest prices with zero agency markups. 
                </p>

                {/* Playful Feature Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 font-mono text-[9px] sm:text-[10px]">
                  <span className="px-2 py-0.5 sm:py-1 bg-[#E8E8E6] text-[#070707] font-bold rounded-md border border-white/10 shadow-[2px_2px_0px_#000000]">
                    ⚡ CLEAN ANIMATIONS
                  </span>
                  <span className="px-2 py-0.5 sm:py-1 bg-[#070707] text-[#F2F2F0] font-bold rounded-md border border-white/10">
                    RESPONSIVE UI
                  </span>
                  <span className="px-2 py-0.5 sm:py-1 bg-[#070707] text-[#F2F2F0] font-bold rounded-md border border-white/10">
                    CUSTOMIZABLE
                  </span>
                </div>
              </div>

              {/* Right Real 3D Project Screenshot */}
              <div className="lg:col-span-7">
                <motion.div
                  style={{ rotate: p1CardTilt }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white/10 overflow-hidden bg-black shadow-[4px_4px_0px_#E8E8E6] sm:shadow-[6px_6px_0px_#E8E8E6] relative group cursor-pointer"
                >
                  <div className="px-3 py-1.5 sm:py-2 bg-[#1A1A1A] border-b border-[#333] flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#888]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2 cursor-pointer h-2 rounded-full bg-[#27C93F]" />
                      <Link href='#'><span className="ml-2 text-white font-bold">kollab.network</span></Link>
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <Image
                      src="/kollab.png"
                      alt="Kollab Platform UI"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.article>


        {/* ======================================================== */}
        {/* BEAT 03: PROJECT 02 — OUTREACHLY (FLAGSHIP CENTERPIECE) */}
        {/* ======================================================== */}
        <motion.article
          style={{
            opacity: p2Opacity,
            scale: p2Scale,
            z: p2Z,
            rotateY: p2RotateY,
            rotateX: p2RotateX,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 lg:p-12 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-5xl max-h-[82vh] overflow-y-auto sm:overflow-visible bg-[#131313] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#10B981] sm:shadow-[10px_10px_0px_#10B981] relative">
            
            {/* Top Floating Pill Badge */}
            <div className="flex justify-between items-center pb-2 mb-2 sm:mb-4 border-b border-white/15">
              <span className="bg-[#10B981] text-[#F7F5F0] font-mono text-[9px] sm:text-xs font-black px-2.5 sm:px-3 py-0.5 rounded-full border border-white/10 shadow-[2px_2px_0px_#000000] uppercase tracking-wider flex items-center gap-1">
                <span>★</span> FLAGSHIP INITIATIVE • BETA 2026
              </span>
              <span className="font-mono text-[9px] text-[#FF5722] font-black uppercase">
                PROJECT NO. 02
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              
              {/* Left Editorial Copy with Iconic Headline */}
              <div className="lg:col-span-5 space-y-3 text-left order-2 lg:order-1">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
                  OUTREACHLY
                </h2>

                {/* The Signature Punchy Value Statement */}
                <div className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                  <p>You don&apos;t need</p>
                  <p>
                    <span className="bg-[#10B981] text-[#F7F5F0] px-2 py-0.5 rounded-md border border-white/10 inline-block -rotate-1">
                      more followers.
                    </span>
                  </p>
                  <p className="text-base sm:text-xl text-[#F2F2F0] font-bold mt-1">
                    Find businesses. Get clients.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                  A platform engineered to transform cold business prospecting into high-signal conversational outreach. Automated contact verification, targeted discovery, and instant list extraction.
                </p>

                {/* Stack Pills */}
                <div className="pt-1 flex flex-wrap gap-1.5 font-mono text-[9px] sm:text-[10px]">
                  {['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redis'].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#101010] text-[#F2F2F0] font-bold rounded-md border border-white/10 shadow-[1.5px_1.5px_0px_#000000]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Real Floating Laptop Mockup Asset */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <motion.div
                  style={{ y: p2LaptopY }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10] rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white/10 shadow-[5px_5px_0px_#000000] overflow-hidden bg-[#101010] group cursor-pointer"
                >
                  <Image
                    src="/outreachly.png"
                    alt="Outreachly Laptop Mockup"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                  
                  {/* Floating Action Pill */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 bg-[#10B981] text-[#F7F5F0] font-mono text-[9px] sm:text-xs font-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/10 shadow-[2px_2px_0px_#000000] uppercase tracking-wider flex items-center gap-1">
                    <span>FIND YOUR PREVIEW</span>
                    <span>→</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.article>


        {/* ======================================================== */}
        {/* BEAT 04: PROJECT 03 — CEPHAS TOUCH / LOVE AMORI */}
        {/* ======================================================== */}
        <motion.article
          style={{
            opacity: p3Opacity,
            scale: p3Scale,
            z: p3Z,
            rotateY: p3RotateY,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 lg:p-12 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-5xl max-h-[82vh] overflow-y-auto sm:overflow-visible bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#FF5722] sm:shadow-[8px_8px_0px_#FF5722] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              
              {/* Left Real Lookbook Visual */}
              <div className="lg:col-span-7">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10] rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white/10 shadow-[4px_4px_0px_#000000] overflow-hidden bg-[#131313] group cursor-pointer"
                >
                  <Image
                    src="/cephas.png"
                    alt="Cephas Touch Lookbook"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#101010]/95 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold border border-white/10 rounded-full shadow-[1.5px_1.5px_0px_#000000]">
                    LAGOS FASHION COMMERCE
                  </div>
                </motion.div>
              </div>

              {/* Right Editorial Dossier */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <div className="font-mono text-[10px] sm:text-xs font-bold text-[#FF5722] uppercase tracking-widest">
                  PROJECT NO. 03 // DIGITAL COMMERCE
                </div>

                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F2F2F0] leading-tight">
                  CEPHAS TOUCH
                </h2>

                <div className="text-lg sm:text-2xl font-bold text-[#F2F2F0]">
                  &ldquo;Define Your Style.&rdquo;
                </div>

                <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                  A modern, minimalist ecommerce experience crafted for a contemporary clothing label. Zero-layout-shift catalog architecture, instant lookbook browsing, and direct Paystack checkout.
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 font-mono text-[9px] sm:text-[10px]">
                  <span className="px-2 py-0.5 sm:py-1 bg-[#FF5722] text-white font-bold rounded-md border border-white/10 shadow-[1.5px_1.5px_0px_#000000]">
                    HIGH-PERFORMANCE SSR
                  </span>
                  <span className="px-2 py-0.5 sm:py-1 bg-[#070707] text-[#F2F2F0] font-bold rounded-md border border-white/10">
                    PAYSTACK CHECKOUT
                  </span>
                  <span className="px-2 py-0.5 sm:py-1 bg-[#070707] text-[#F2F2F0] font-bold rounded-md border border-white/10">
                    TAILWIND CSS
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.article>


        {/* ======================================================== */}
        
        {/* ======================================================== */}
        {/* BEAT 04.1: PROJECT 04 — PEERLINK */}
        {/* ======================================================== */}
        <motion.article
          style={{
            opacity: p4Opacity,
            scale: p4Scale,
            z: p4Z,
            rotateY: p4RotateY,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 lg:p-12 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-5xl max-h-[82vh] overflow-y-auto sm:overflow-visible bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#9C27B0] sm:shadow-[8px_8px_0px_#9C27B0] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              
              {/* Left Editorial Text */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-2">
                  <span className="px-2 py-0.5 bg-[#9C27B0] text-white font-black rounded-full text-[9px] uppercase">
                    PROJECT 04
                  </span>
                  <span className="font-bold text-[#F2F2F0]">PeerLink</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F2F2F0] leading-none">
                  PeerLink
                </h2>

                <div className="text-sm sm:text-base font-bold text-[#F2F2F0] leading-snug">
                  Student Campus Marketplace & Exchange.
                </div>

                <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                  A flexible, zero-fee student marketplace enabling verified campus trade for textbooks, electronics, and peer exchanges.
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[9px] sm:text-[10px]">
                  {['Next.js', 'PostgreSQL', 'Realtime', 'WebSockets'].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#1A1A1A] text-[#F2F2F0] font-bold rounded-md border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-7">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10] rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white/10 shadow-[4px_4px_0px_#000000] overflow-hidden bg-[#131313] group cursor-pointer"
                >
                  <Image
                    src="/peerLink.png"
                    alt="PeerLink App"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ======================================================== */}
        {/* BEAT 04.2: PROJECT 05 — ZEROGATE */}
        {/* ======================================================== */}
        <motion.article
          style={{
            opacity: p5Opacity,
            scale: p5Scale,
            z: p5Z,
            rotateX: p5RotateX,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 lg:p-12 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-5xl max-h-[82vh] overflow-y-auto sm:overflow-visible bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#00BCD4] sm:shadow-[8px_8px_0px_#00BCD4] relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
              
              {/* Left Visual */}
              <div className="lg:col-span-7">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10] rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white/10 shadow-[4px_4px_0px_#000000] overflow-hidden bg-[#131313] group cursor-pointer"
                >
                  <Image
                    src="/zerogate.png"
                    alt="ZeroGate"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Right Editorial Text */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-2">
                  <span className="px-2 py-0.5 bg-[#00BCD4] text-white font-black rounded-full text-[9px] uppercase">
                    PROJECT 05
                  </span>
                  <span className="font-bold text-[#F2F2F0]">ZeroGate</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F2F2F0] leading-none">
                  ZeroGate
                </h2>

                <div className="text-sm sm:text-base font-bold text-[#F2F2F0] leading-snug">
                  Authentication & Access Gateway.
                </div>

                <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                  A high-performance security layer providing seamless single sign-on and decentralized identity verification for modern distributed networks.
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[9px] sm:text-[10px]">
                  {['Rust', 'WebAuthn', 'Cryptography', 'Next.js'].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#1A1A1A] text-[#F2F2F0] font-bold rounded-md border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.article>

        {/* ======================================================== */}
        {/* BEAT 05: CURRENTLY BUILDING (OUTREACHLY LIVE LAB) */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: buildOpacity,
            scale: buildScale,
            z: buildZ,
            rotateZ: buildRotate,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 z-20 pointer-events-auto text-center"
        >
          <div className="w-full max-w-4xl max-h-[82vh] overflow-y-auto sm:overflow-visible bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-[8px_8px_0px_#E8E8E6] space-y-4 sm:space-y-6">
            
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] sm:text-xs">
              <span className="px-2.5 py-0.5 sm:py-1 bg-[#E8E8E6] text-[#070707] font-black rounded-full border border-white/10 shadow-[1.5px_1.5px_0px_#000000] uppercase">
                ⚡ SPRINT LOG • ACTIVE INITIATIVE
              </span>
              <span className="px-2.5 py-0.5 sm:py-1 bg-[#131313] text-white font-bold rounded-full border border-white/10 uppercase">
                78% COMPLETE
              </span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tight text-[#F2F2F0]">
                CURRENTLY BUILDING
              </h2>
              <div className="text-xl sm:text-3xl font-black text-[#FF5722] tracking-tight">
                OUTREACHLY B2B PLATFORM
              </div>
            </div>

            {/* Bouncy Progress Bar in Outreachly Lime */}
            <div className="max-w-xl mx-auto space-y-1.5 font-mono text-[10px] sm:text-xs">
              <div className="flex justify-between font-bold text-[#F2F2F0]">
                <span>CORE PIPELINE</span>
                <span className="text-[#F2F2F0]">12,480 PROSPECTS PARSED</span>
              </div>
              <div className="w-full h-3.5 sm:h-4 bg-[#070707] border-2 border-white/10 rounded-full overflow-hidden p-0.5 shadow-[2px_2px_0px_#000000]">
                <div className="h-full w-[78%] bg-[#E8E8E6] rounded-full border-r-2 border-white/10" />
              </div>
            </div>

            {/* Playful Sprint Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 text-left font-mono text-xs">
              <div className="p-3 sm:p-4 bg-[#131313] border-2 border-white/10 rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#000000]">
                <div className="text-[9px] sm:text-[10px] text-[#FF5722] font-black uppercase">CURRENT SPRINT</div>
                <div className="font-bold text-[#F2F2F0] text-xs sm:text-sm mt-0.5">Multi-Touch Sequences</div>
                <div className="text-[10px] text-[#8A8A8A] mt-0.5">Automated conversational followup flows.</div>
              </div>

              <div className="p-3 sm:p-4 bg-[#E8E8E6]/25 border-2 border-white/10 rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#000000]">
                <div className="text-[9px] sm:text-[10px] text-[#F2F2F0] font-black uppercase">NEXT MILESTONE</div>
                <div className="font-bold text-[#F2F2F0] text-xs sm:text-sm mt-0.5">AI Lead Enrichment</div>
                <div className="text-[10px] text-[#8A8A8A] mt-0.5">Instant role detection &amp; direct email discovery.</div>
              </div>

              <div className="p-3 sm:p-4 bg-[#131313] border-2 border-white/10 rounded-xl sm:rounded-2xl shadow-[2px_2px_0px_#000000]">
                <div className="text-[9px] sm:text-[10px] text-[#2563EB] font-black uppercase">LAUNCH TARGET</div>
                <div className="font-bold text-[#F2F2F0] text-xs sm:text-sm mt-0.5">Private Beta Access</div>
                <div className="text-[10px] text-[#8A8A8A] mt-0.5">Q4 2026 invite-only release for founders.</div>
              </div>
            </div>

          </div>
        </motion.div>


        {/* ======================================================== */}
        {/* BEAT 06: THE LAB — CREATIVE DIGITAL PLAYGROUND (0.69 -> 0.84) */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: labOpacity,
            scale: labScale,
            z: labZ,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-6xl max-h-[84vh] overflow-y-auto sm:overflow-visible bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[8px_8px_0px_#000000] text-left">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 border-b border-white/10 gap-2 mb-4">
              <div>
                <span className="bg-[#E8E8E6] text-[#070707] font-mono text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full border border-white/10 uppercase tracking-wider">
                  ✦ EXPERIMENTAL R&amp;D
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F2F2F0] mt-1 leading-none">
                  THE LAB
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-[#8A8A8A] font-mono max-w-md">
                A playground of real prototypes, marketplaces, computer vision tools, and Web3 smart contracts.
              </p>
            </div>

            {/* Responsive Playground Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* Exploration Selector: Horizontal pills on mobile, vertical stack on desktop */}
              <div className="lg:col-span-5 flex lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0 shrink-0">
                {labItems.map((item, idx) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveLabIndex(idx)}
                    className={`p-2 sm:p-2.5 rounded-xl border-2 transition-all text-left flex items-center justify-between cursor-pointer shrink-0 sm:shrink ${
                      activeLabIndex === idx
                        ? 'bg-[#131313] text-white border-white/10 shadow-[2px_2px_0px_#E8E8E6]'
                        : 'bg-transparent text-[#F2F2F0] border-white/10/20 hover:border-white/10 hover:bg-[#131313]/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-white/10 shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <div className="font-black text-xs sm:text-sm uppercase leading-none">{item.title}</div>
                        <div className="font-mono text-[9px] opacity-70 mt-0.5 hidden sm:block">{item.category}</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold ml-2 hidden lg:inline">→</span>
                  </button>
                ))}
              </div>

              {/* Live Visual Monolith Preview */}
              <div className="lg:col-span-7">
                <motion.div
                  key={labItems[activeLabIndex].title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#131313] border-2 sm:border-3 border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-[4px_4px_0px_#000000] space-y-2.5 sm:space-y-3"
                >
                  <div className="relative aspect-[16/9] rounded-lg border-2 border-white/10 overflow-hidden bg-black shadow-inner">
                    <Image
                      src={labItems[activeLabIndex].image}
                      alt={labItems[activeLabIndex].title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#8A8A8A]">
                      <span className="font-black uppercase text-[#F2F2F0]">
                        {labItems[activeLabIndex].category}
                      </span>
                      <span className="hidden sm:inline">{labItems[activeLabIndex].tech}</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-black text-[#F2F2F0] uppercase mt-0.5">
                      {labItems[activeLabIndex].tagline}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#8A8A8A] mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {labItems[activeLabIndex].desc}
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </motion.div>


        {/* ======================================================== */}
        {/* BEAT 07: ABOUT (ETHOS & PERSONA) (0.81 -> 0.92) */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: aboutOpacity,
            scale: aboutScale,
            z: aboutZ,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-4xl max-h-[82vh] overflow-y-auto sm:overflow-visible bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-[8px_8px_0px_#E8E8E6] space-y-4 sm:space-y-6 text-left">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[10px] sm:text-xs">
              <span className="bg-[#131313] text-white font-bold px-2.5 py-0.5 rounded-full uppercase">
                PHILOSOPHY
              </span>
              <span className="text-[#8A8A8A]">AMARACHUKWU ONUOHA</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F2F2F0] leading-tight">
                &ldquo;I like turning ideas into things people can actually use.&rdquo;
              </h2>
              <p className="text-xs sm:text-base text-[#8A8A8A] leading-relaxed">
                Most of my time goes into building full-stack products, experimenting with tactile interfaces, and figuring out how to make complicated systems feel effortless.
              </p>
            </div>

            {/* Playful Interactive Skill Tags */}
            <div className="pt-1 space-y-2 font-mono">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#F2F2F0] block">
                MY CORE:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  { name: 'TypeScript & Next.js', color: '#E8E8E6', text: '#000' },
                  { name: 'Node.js & Microservices', color: '#2563EB', text: '#fff' },
                  { name: 'MongoDB & Redis', color: '#FF5722', text: '#fff' },
                  { name: '3D Motion & WebGL (Three.js)', color: '#F2F2F0', text: '#000' },
                  { name: 'Paystack Payment Flows', color: '#E8E8E6', text: '#000' },
                  { name: 'Headless Browser Automation', color: '#A855F7', text: '#fff' },
                ].map((s) => (
                  <span
                    key={s.name}
                    className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl border border-white/10 shadow-[1.5px_1.5px_0px_#000000]"
                    style={{ backgroundColor: s.color, color: s.text }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>


        {/* ======================================================== */}
        {/* BEAT 08: CONTACT — GRAND FINALE (0.90 -> 1.00) */}
        {/* ======================================================== */}
        <motion.div
          style={{
            opacity: contactOpacity,
            scale: contactScale,
            z: contactZ,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 flex items-center justify-center p-3 sm:p-8 z-20 pointer-events-auto"
        >
          <div className="w-full max-w-5xl max-h-[84vh] overflow-y-auto sm:overflow-visible bg-[#131313] text-white border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 shadow-[8px_8px_0px_#E8E8E6] sm:shadow-[12px_12px_0px_#E8E8E6] space-y-4 sm:space-y-6 text-left">
            
            <div className="space-y-1">
              <span className="bg-[#E8E8E6] text-[#070707] font-mono text-[9px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                LET&apos;S COLLABORATE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5vw] font-black uppercase tracking-tighter leading-[0.9] text-white">
                HAVE SOMETHING
              </h2>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5vw] font-black uppercase tracking-tighter leading-[0.9] text-[#888888]">
                WORTH BUILDING?
              </h2>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5vw] font-black uppercase tracking-tighter leading-[0.9] text-[#E8E8E6]">
                LET&apos;S TALK.
              </h2>
            </div>

            {/* Quick Contact & Dispatch Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 pt-3 sm:pt-4 border-t border-[#333]">
              
              {/* Left Column: Direct Links & Fast Copy */}
              <div className="lg:col-span-6 space-y-3 font-mono text-xs">
                <p className="text-xs sm:text-sm text-[#CCCCCC] font-sans leading-relaxed">
                  Available for full-stack engineering, interactive product architecture, and venture incubation. Reach out directly or dispatch a note.
                </p>

                {/* Email Box with One-Click Copy */}
                <div className="p-3 sm:p-4 bg-[#1F1F1F] border border-[#333] rounded-xl sm:rounded-2xl space-y-1.5">
                  <div className="text-[9px] sm:text-[10px] text-[#888] uppercase font-bold">DIRECT TRANSMISSION</div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <a
                      href="mailto:amarachukwuonuoha22@gmail.com"
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#E8E8E6] transition-colors truncate"
                    >
                      amarachukwuonuoha22@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="px-2.5 sm:px-3 py-1 bg-[#E8E8E6] text-[#070707] font-black uppercase text-[10px] sm:text-[11px] rounded-lg border border-black shadow-[1.5px_1.5px_0px_#000] hover:bg-[#101010] hover:text-[#F2F2F0] transition-all cursor-pointer text-center shrink-0"
                    >
                      {copied ? '✓ COPIED!' : 'COPY EMAIL'}
                    </button>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href="https://github.com/Urex014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-[#1F1F1F] border border-[#333] hover:border-[#E8E8E6] rounded-xl transition-all group cursor-pointer"
                  >
                    <div className="flex justify-between text-[#888] text-[9px] font-bold uppercase">
                      <span>GITHUB</span>
                      <span className="group-hover:text-[#E8E8E6] group-hover:translate-x-0.5 transition-transform">↗</span>
                    </div>
                    <div className="text-xs sm:text-sm font-black text-white mt-0.5">@Urex014</div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/amarachukwu-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-[#1F1F1F] border border-[#333] hover:border-[#E8E8E6] rounded-xl transition-all group cursor-pointer"
                  >
                    <div className="flex justify-between text-[#888] text-[9px] font-bold uppercase">
                      <span>LINKEDIN</span>
                      <span className="group-hover:text-[#E8E8E6] group-hover:translate-x-0.5 transition-transform">↗</span>
                    </div>
                    <div className="text-xs sm:text-sm font-black text-white mt-0.5">/amarachukwu-dev</div>
                  </a>
                </div>
              </div>

              {/* Right Column: Direct Transmission Form */}
              <div className="lg:col-span-6 bg-[#1A1A1A] border border-[#333] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 font-mono text-xs">
                <form onSubmit={handleFormSubmit} className="space-y-2.5 sm:space-y-3">
                  <div>
                    <label htmlFor="name" className="text-[9px] text-[#888] uppercase block mb-0.5 font-bold">
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Maya Chen"
                      className="w-full bg-[#111] border border-[#333] text-white px-2.5 py-1.5 rounded-lg outline-none focus:border-[#E8E8E6] font-sans text-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[9px] text-[#888] uppercase block mb-0.5 font-bold">
                      YOUR EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#111] border border-[#333] text-white px-2.5 py-1.5 rounded-lg outline-none focus:border-[#E8E8E6] font-sans text-xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[9px] text-[#888] uppercase block mb-0.5 font-bold">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={2}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="What are we building?"
                      className="w-full bg-[#111] border border-[#333] text-white px-2.5 py-1.5 rounded-lg outline-none focus:border-[#E8E8E6] resize-none font-sans text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={dispatchStatus !== 'idle'}
                    className="w-full py-2.5 bg-[#E8E8E6] text-[#070707] hover:bg-[#101010] font-black uppercase tracking-widest text-[11px] rounded-lg border border-black shadow-[2px_2px_0px_#000] transition-all cursor-pointer"
                  >
                    {dispatchStatus === 'transmitting' && 'SENDING...'}
                    {dispatchStatus === 'complete' && '✓ MESSAGE RECEIVED'}
                    {dispatchStatus === 'idle' && 'SEND INQUIRY →'}
                  </button>
                </form>
              </div>

            </div>

            {/* Colophon Credits */}
            <div className="pt-3 pb-3 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[9px] text-[#777] uppercase">
              <div>© 2026 AMARACHUKWU ONUOHA • CREATIVE DIGITAL PLAYGROUND</div>
              <button
                type="button"
                onClick={() => jumpTo(0.0)}
                className="hover:text-[#E8E8E6] transition-colors cursor-pointer text-[#AAA] font-bold"
              >
                [ RETURN TO TOP ↑ ]
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
