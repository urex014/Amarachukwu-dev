'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SignatureSymbol from './SignatureSymbol';

export default function SelectedWork() {
  // Real-time decay timer simulation for Project 04 (Attendance System)
  const [secondsLeft, setSecondsLeft] = useState(28);
  const [qrToken, setQrToken] = useState('0x9F4A...B821');

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          // Generate new token on expiration
          const randHex = Math.random().toString(16).substring(2, 6).toUpperCase();
          setQrToken(`0x${randHex}...${Math.random().toString(16).substring(2, 6).toUpperCase()}`);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="work" className="py-20 sm:py-28 lg:py-36 border-b border-[#121212]/15 relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="flex items-center justify-between border-b border-[#121212]/15 pb-4 font-mono text-[11px] uppercase tracking-widest text-[#5C5A53]">
          <div className="flex items-center gap-2">
            <SignatureSymbol size={14} className="text-[#121212]" />
            <span>PORTFOLIO SELECTION</span>
          </div>
          <div>PRODUCTION RELEASES</div>
          <div className="text-right text-[#10B981] font-semibold">01 — 04</div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C887D] block mb-2">
              [ INDEX OF WORKS ]
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] leading-none text-[#121212]">
              SELECTED WORK
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#5C5A53] leading-relaxed">
            A curated archive of full-stack products, web platforms, and automated software architectures built for scale and tactile utility.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36 lg:space-y-44">
        
        {/* ======================================================== */}
        {/* PROJECT 01: RESUMIFY */}
        {/* ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#121212]/15 bg-[#FAF9F5] p-6 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Dossier */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8C887D] pb-3 border-b border-[#121212]/10">
                  <span>PROJECT NO. 01</span>
                  <span>2024 • SAAS / AI PIPELINE</span>
                </div>

                <h3 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-[-0.03em] text-[#121212]">
                  RESUMIFY
                </h3>

                <p className="mt-4 text-base sm:text-lg text-[#121212] font-medium leading-snug">
                  An AI-assisted platform for discovering opportunities and automating job applications.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#5C5A53] leading-relaxed">
                  Engineered to eliminate repetitive application friction. Resumify pairs intelligent semantic matching with automated cover letter synthesis and a Paystack payment processing gateway.
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-[#121212]/10 space-y-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C887D]">
                  ENGINEERING STACK
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#121212]">
                  {['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Paystack'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#ECE8E0] border border-[#121212]/10 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-[11px]">
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#121212]/10">
                    <span className="text-[#8C887D] block text-[9px] uppercase tracking-wider">OUTPUT</span>
                    <span className="font-bold text-[#121212]">AUTO-DISPATCH</span>
                  </div>
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#121212]/10">
                    <span className="text-[#8C887D] block text-[9px] uppercase tracking-wider">TELEMETRY</span>
                    <span className="font-bold text-[#10B981]">10K+ PROCESSED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-7">
              <div className="border border-[#121212]/15 bg-[#121212] shadow-xl overflow-hidden group">
                {/* Visual Header Chrome */}
                <div className="px-4 py-2.5 bg-[#1B1B1B] border-b border-[#333333] flex items-center justify-between font-mono text-[10px] text-[#888888]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 text-[#CCCCCC]">resumify.io/dashboard</span>
                  </div>
                  <span className="text-[#27C93F] hidden sm:inline">● PIPELINE_ACTIVE</span>
                </div>

                {/* Screenshot Frame with Reveal */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer" data-cursor="VIEW">
                  <Image
                    src="/Resumify.png"
                    alt="Resumify Platform Interface"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </motion.article>


        {/* ======================================================== */}
        {/* PROJECT 02: OUTREACHLY */}
        {/* ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#121212]/15 bg-[#FAF9F5] p-6 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left High-Fidelity UI Engine Viewport */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="border border-[#121212]/15 bg-[#F4F2EB] shadow-xl overflow-hidden">
                {/* Interface Control Bar */}
                <div className="px-4 py-3 bg-[#EAE6DD] border-b border-[#121212]/15 flex items-center justify-between font-mono text-[10px] text-[#5C5A53]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#121212]">OUTREACHLY ENGINE</span>
                    <span className="text-[#8C887D]">v0.8.4-beta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[#121212] font-semibold">SIGNAL STREAMING</span>
                  </div>
                </div>

                {/* Interactive Simulated Interface */}
                <div className="p-4 sm:p-6 space-y-4 bg-white font-mono">
                  {/* Discovery Query Input */}
                  <div className="p-3 bg-[#F4F2EB] border border-[#121212]/15 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[#10B981] font-bold">QUERY:</span>
                      <span className="text-[#121212] font-medium truncate">
                        B2B SaaS / Growth Marketing / Seed to Series A
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#10B981] text-white text-[9px] font-bold uppercase tracking-wider shrink-0">
                      FILTERED
                    </span>
                  </div>

                  {/* Simulated Dynamic Stream Records */}
                  <div className="space-y-2">
                    {[
                      {
                        company: 'Veloce Dynamics',
                        domain: 'veloce.io',
                        decisionMaker: 'Elena Rostova (Head of Growth)',
                        status: 'VERIFIED',
                        tag: 'SAAS',
                      },
                      {
                        company: 'Kinetix Labs',
                        domain: 'kinetix.ai',
                        decisionMaker: 'Marcus Vance (Founder & CEO)',
                        status: 'DISPATCH READY',
                        tag: 'AI INFRA',
                      },
                    ].map((item) => (
                      <div
                        key={item.company}
                        className="p-3 border border-[#121212]/10 bg-[#FAF9F5] hover:border-[#10B981] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#121212]">{item.company}</span>
                            <span className="text-[9px] text-[#8C887D]">{item.domain}</span>
                          </div>
                          <div className="text-[10px] text-[#5C5A53]">{item.decisionMaker}</div>
                        </div>
                        <div className="flex items-center gap-2 sm:text-right">
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#10B981]/15 text-[#047857] font-semibold border border-[#10B981]/30">
                            {item.status}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#10B981]/10 text-[#047857] font-semibold border border-[#10B981]/20">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Telemetry Footer */}
                  <div className="pt-2 border-t border-[#121212]/10 flex items-center justify-between text-[10px] text-[#8C887D]">
                    <span>SYSTEM LATENCY: 142ms</span>
                    <span className="text-[#10B981] font-semibold">1,480 VERIFIED LEADS DISCOVERED TODAY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Editorial Dossier */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 order-1 lg:order-2">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8C887D] pb-3 border-b border-[#121212]/10">
                  <span>PROJECT NO. 02</span>
                  <span className="text-[#10B981] font-bold">CURRENT PRIORITY</span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-[-0.03em] text-[#121212]">
                    OUTREACHLY
                  </h3>
                </div>

                <p className="mt-4 text-base sm:text-lg text-[#121212] font-medium leading-snug">
                  A platform for discovering businesses and helping people turn targeted outreach into conversations.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#5C5A53] leading-relaxed">
                  Conceived around targeted business discovery, email verification handshakes, and conversational automation. Outreachly replaces bloated, manual prospecting workflows with a precision engine built for founders and growth operators.
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-[#121212]/10 space-y-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C887D]">
                  ENGINEERING STACK
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#121212]">
                  {['Next.js', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#ECE8E0] border border-[#121212]/10 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#currently-building"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#10B981] hover:text-[#059669] font-bold group"
                    data-cursor="DEVLOG"
                  >
                    <span>VIEW LIVE DEVELOPMENT LOG</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.article>


        {/* ======================================================== */}
        {/* PROJECT 03: LOVE AMORI */}
        {/* ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#121212]/15 bg-[#FAF9F5] p-6 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Dossier */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8C887D] pb-3 border-b border-[#121212]/10">
                  <span>PROJECT NO. 03</span>
                  <span>2025 • E-COMMERCE / D2C</span>
                </div>

                <h3 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-[-0.03em] text-[#121212]">
                  LOVE AMORI
                </h3>

                <p className="mt-4 text-base sm:text-lg text-[#121212] font-medium leading-snug">
                  A minimalist ecommerce experience for a modern clothing brand.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#5C5A53] leading-relaxed">
                  Tailored around elevated visual editorial pacing, instantaneous product filtering, and a resilient, sub-second checkout pipeline integrating Paystack gateway APIs.
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-[#121212]/10 space-y-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8C887D]">
                  ENGINEERING STACK
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#121212]">
                  {['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Paystack'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#ECE8E0] border border-[#121212]/10 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-[11px]">
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#121212]/10">
                    <span className="text-[#8C887D] block text-[9px] uppercase tracking-wider">ARCHITECTURE</span>
                    <span className="font-bold text-[#121212]">SSR / ISR ENGINE</span>
                  </div>
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#121212]/10">
                    <span className="text-[#8C887D] block text-[9px] uppercase tracking-wider">CHECKOUT</span>
                    <span className="font-bold text-[#121212]">PAYSTACK SECURE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-7">
              <div className="border border-[#121212]/15 bg-white shadow-xl overflow-hidden group">
                <div className="px-4 py-2.5 bg-[#FAF9F5] border-b border-[#121212]/10 flex items-center justify-between font-mono text-[10px] text-[#5C5A53]">
                  <span className="uppercase tracking-widest text-[#121212] font-semibold">
                    LOOKBOOK CATALOGUE // EDITORIAL SPECIMEN
                  </span>
                  <span>COLLECTION 01</span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF9F5] cursor-pointer" data-cursor="VIEW">
                  <Image
                    src="/cephas.png"
                    alt="Love Amori Minimalist E-Commerce Platform"
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#121212] text-white font-mono text-[10px] px-3 py-1.5 uppercase tracking-widest">
                    LAGOS DIRECT CATALOGUE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>


        {/* ======================================================== */}
        {/* PROJECT 04: ATTENDANCE SYSTEM */}
        {/* ======================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#121212]/15 bg-[#121212] text-[#F4F2EB] p-6 sm:p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Real-time QR Verification Apparatus */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="border border-[#333333] bg-[#181818] p-5 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A] font-mono text-[10px] text-[#888888]">
                  <span className="text-[#F4F2EB] font-bold">SESSION CONTROL: ACTIVE</span>
                  <span className="text-[#10B981]">● CRYPTOGRAPHIC NONCE VERIFIED</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  {/* Dynamic QR Visualizer Frame */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center p-5 bg-[#0F0F0F] border border-[#2D2D2D]">
                    {/* Simulated High-Density QR Pattern */}
                    <div className="w-36 h-36 bg-white p-2.5 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="w-8 h-8 border-4 border-black p-0.5"><div className="w-full h-full bg-black" /></div>
                        <div className="w-4 h-4 bg-black" />
                        <div className="w-8 h-8 border-4 border-black p-0.5"><div className="w-full h-full bg-black" /></div>
                      </div>
                      <div className="flex justify-around items-center py-2">
                        <div className="w-3 h-3 bg-black" />
                        <div className="w-4 h-4 border-2 border-black" />
                        <div className="w-3 h-3 bg-black" />
                        <div className="w-2 h-6 bg-black" />
                      </div>
                      <div className="flex justify-between">
                        <div className="w-8 h-8 border-4 border-black p-0.5"><div className="w-full h-full bg-black" /></div>
                        <div className="w-3 h-3 bg-black" />
                        <div className="w-4 h-4 bg-black" />
                      </div>
                    </div>

                    <div className="mt-3 font-mono text-[10px] text-[#A0A0A0] text-center">
                      HASH: <span className="text-[#F4F2EB] font-bold">{qrToken}</span>
                    </div>
                  </div>

                  {/* Real-time Decay Timer & Ledger */}
                  <div className="sm:col-span-7 space-y-3 font-mono text-xs">
                    <div className="p-3 bg-[#1F1F1F] border border-[#333333]">
                      <div className="flex justify-between text-[10px] text-[#9E9E9E] mb-1">
                        <span>SESSION DECAY INTERVAL</span>
                        <span className="text-[#10B981] font-bold">{secondsLeft}s REMAINING</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#333333] overflow-hidden">
                        <div
                          className="h-full bg-[#10B981] transition-all duration-1000 ease-linear"
                          style={{ width: `${(secondsLeft / 30) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-[11px] space-y-1.5 text-[#B5B5B5]">
                      <div className="flex justify-between py-1 border-b border-[#2A2A2A]">
                        <span>SESSION ID:</span>
                        <span className="text-white">SES-9481-QK</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#2A2A2A]">
                        <span>LAT / LNG GEOFENCE:</span>
                        <span className="text-white">ENFORCED (±15m)</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>PROXY REJECTION RATE:</span>
                        <span className="text-[#10B981]">100% SECURE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#2A2A2A] font-mono text-[10px] text-[#777777] flex justify-between">
                  <span>PRISMA RELATIONAL LEDGER</span>
                  <span>TIME-LIMITED SESSION ARCHITECTURE</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Dossier */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 order-1 lg:order-2">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#888888] pb-3 border-b border-[#2A2A2A]">
                  <span>PROJECT NO. 04</span>
                  <span>2024 • SYSTEM UTILITY</span>
                </div>

                <h3 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-[-0.03em] text-[#F4F2EB]">
                  ATTENDANCE SYSTEM
                </h3>

                <p className="mt-4 text-base sm:text-lg text-[#EAE6DD] font-medium leading-snug">
                  A QR-based attendance platform designed around time-limited attendance sessions.
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#9E9E9E] leading-relaxed">
                  Designed to eliminate proxy check-ins in high-density academic and organizational settings. Incorporates rolling cryptographic session tokens, automated time-decay validation, and relational database integrity via Prisma ORM.
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-4 border-t border-[#2A2A2A] space-y-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                  ENGINEERING STACK
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-white">
                  {['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#222222] border border-[#3A3A3A] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-[11px]">
                  <div className="p-2.5 bg-[#181818] border border-[#2D2D2D]">
                    <span className="text-[#888888] block text-[9px] uppercase tracking-wider">PROTOCOL</span>
                    <span className="font-bold text-white">ROTATING TOKENS</span>
                  </div>
                  <div className="p-2.5 bg-[#181818] border border-[#2D2D2D]">
                    <span className="text-[#888888] block text-[9px] uppercase tracking-wider">DATABASE</span>
                    <span className="font-bold text-[#10B981]">PRISMA SCHEMA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  );
}
