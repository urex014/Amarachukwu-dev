'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SignatureSymbol from './SignatureSymbol';

interface LabItem {
  id: string;
  number: string;
  title: string;
  status: string;
  statusColor: string;
  tagline: string;
  stack: string[];
  notes: string;
  parameters: { key: string; val: string }[];
}

const labExperiments: LabItem[] = [
  {
    id: 'trading',
    number: '01',
    title: 'TRADING SYSTEMS',
    status: 'ACTIVE RESEARCH',
    statusColor: '#E8E8E6',
    tagline: 'Algorithmic liquidity imbalance detection and low-latency order execution pipelines.',
    stack: ['Python', 'WebSockets', 'Rust FFI', 'Binance API'],
    notes: 'Investigating order-book micro-depth telemetry and slippage limits under high-frequency volatility spikes. Analyzing order flow toxicity indicators (VPIN) on perpetual futures markets.',
    parameters: [
      { key: 'EXECUTION TARGET', val: '< 12ms round-trip' },
      { key: 'ALGORITHM', val: 'Order Flow Imbalance (OFI)' },
      { key: 'DATA FEED', val: 'L2 Real-time WebSocket' },
    ],
  },
  {
    id: 'ai',
    number: '02',
    title: 'AI EXPERIMENTS',
    status: 'INTERNAL BENCHMARK',
    statusColor: '#E8E8E6',
    tagline: 'Context-aware autonomous scraping agents and localized vector embeddings.',
    stack: ['Ollama', 'TypeScript', 'Vector DB', 'Puppeteer'],
    notes: 'Benchmarking autonomous LLM workers capable of inspecting dynamic SPA document trees without hardcoded CSS selectors. Generates resilient retrieval heuristics on structural mutations.',
    parameters: [
      { key: 'EMBEDDING MODEL', val: 'BGE-Large-EN v1.5' },
      { key: 'INFERENCE', val: 'Local Ollama Instance' },
      { key: 'RECOVERY RATE', val: '97.2% on DOM shifts' },
    ],
  },
  {
    id: 'automation',
    number: '03',
    title: 'AUTOMATION',
    status: 'DEPLOYED HARNESS',
    statusColor: '#E8E8E6',
    tagline: 'Headless browser job application orchestration and cross-platform syncing.',
    stack: ['Node.js', 'Playwright', 'Redis Queues', 'Docker'],
    notes: 'Orchestrating resilient headless browser workers to automate form submissions, document attachments, and multi-tier authentication flows with automated retry policies.',
    parameters: [
      { key: 'CONCURRENCY', val: '32 parallel headless nodes' },
      { key: 'ANTI-BOT', val: 'TLS fingerprint randomization' },
      { key: 'RETRY BACKOFF', val: 'Exponential + Jitter' },
    ],
  },
  {
    id: 'products',
    number: '04',
    title: 'PRODUCT IDEAS',
    status: 'INCUBATING',
    statusColor: '#F59E0B',
    tagline: 'Micro-SaaS instruments for indie developers, creators, and operators.',
    stack: ['Next.js', 'PostgreSQL', 'Tailwind', 'Stripe'],
    notes: 'Designing hyper-focused, single-purpose software utilities with zero configuration friction. Emphasizing keyboard-first ergonomics, zero bloat, and lightning speed.',
    parameters: [
      { key: 'PROTOTYPE 01', val: 'Snippet-to-Monograph' },
      { key: 'PROTOTYPE 02', val: 'B2B Signal Scanner' },
      { key: 'TIMELINE', val: 'Continuous Incubation' },
    ],
  },
  {
    id: 'interfaces',
    number: '05',
    title: 'INTERFACE EXPERIMENTS',
    status: 'LAB CANVAS',
    statusColor: '#8C887D',
    tagline: 'Kinetic typography, tactile spatial physics, and minimalist web interactions.',
    stack: ['Canvas API', 'Framer Motion', 'Web Audio', 'CSS Custom Props'],
    notes: 'Exploring the tactile intersection between Swiss editorial typography and digital interactivity. Emphasizing micro-friction, spring dynamics, and subtle audio cues on user interactions.',
    parameters: [
      { key: 'SPRING PHYSICS', val: 'Damping: 28 / Stiffness: 350' },
      { key: 'TYPOGRAPHY', val: 'Geist Sans / Monospace' },
      { key: 'PRINCIPLE', val: 'Frictionless Tactility' },
    ],
  },
];

export default function Lab() {
  const [selectedId, setSelectedId] = useState<string>('trading');

  const activeItem = labExperiments.find((item) => item.id === selectedId) || labExperiments[0];

  return (
    <section id="lab" className="py-20 sm:py-28 lg:py-36 border-b border-white/10 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[11px] uppercase tracking-widest text-[#8A8A8A]">
          <div className="flex items-center gap-2">
            <SignatureSymbol size={14} className="text-[#F2F2F0]" />
            <span>R&amp;D ARCHIVE // VOL. 26</span>
          </div>
          <div>EXPLORATIONS &amp; PROTOTYPES</div>
          <div className="text-right text-[#F2F2F0] font-semibold">05 ITEMS</div>
        </div>

        {/* Section Intro */}
        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#707070] block mb-2">
              [ UNFINISHED IDEAS &amp; HARD PROBLEMS ]
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-[-0.03em] leading-none text-[#F2F2F0]">
              LAB
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8A8A8A] leading-relaxed">
            Where curiosity precedes formal products. A technical playground of unfinished software, algorithmic experiments, and exploratory systems.
          </p>
        </div>

        {/* Interactive Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Typography List */}
          <div className="lg:col-span-7 border-t border-white/10">
            {labExperiments.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  onMouseEnter={() => setSelectedId(item.id)}
                  className={`group relative border-b border-white/10 py-5 sm:py-7 px-3 sm:px-4 cursor-pointer transition-all duration-300 ${
                    isSelected ? 'bg-[#131313]' : 'hover:bg-[#ECE8E0]/50'
                  }`}
                  data-cursor="INSPECT"
                >
                  {/* Left Active Accent Indicator */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                      isSelected ? 'bg-[#E8E8E6]' : 'bg-transparent group-hover:bg-[#F2F2F0]/30'
                    }`}
                  />

                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
                      <span className="font-mono text-xs text-[#707070] font-semibold">
                        [{item.number}]
                      </span>
                      <h3
                        className={`text-xl sm:text-3xl font-black uppercase tracking-tight transition-colors truncate ${
                          isSelected ? 'text-[#E8E8E6]' : 'text-[#F2F2F0] group-hover:text-[#F2F2F0]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 font-mono text-[10px] sm:text-[11px]">
                      <span
                        className="px-2 py-0.5 uppercase tracking-wider font-semibold border"
                        style={{
                          borderColor: `${item.statusColor}30`,
                          backgroundColor: `${item.statusColor}10`,
                          color: item.statusColor,
                        }}
                      >
                        {item.status}
                      </span>
                      <span
                        className={`transition-transform duration-300 ${
                          isSelected ? 'translate-x-1 text-[#E8E8E6]' : 'text-[#707070]'
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-[#8A8A8A] pl-7 sm:pl-9 line-clamp-1">
                    {item.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Laboratory Inspection Dossier */}
          <div className="lg:col-span-5 bg-[#131313] border border-white/10 p-6 sm:p-8 sticky top-24 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Dossier Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[10px] text-[#707070]">
                  <span>EXP-NO: {activeItem.number} {'//'} 05</span>
                  <span className="text-[#F2F2F0] font-bold uppercase">{activeItem.status}</span>
                </div>

                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-[#F2F2F0]">
                    {activeItem.title}
                  </h4>
                  <p className="mt-2 text-sm text-[#F2F2F0] font-medium leading-snug">
                    {activeItem.tagline}
                  </p>
                </div>

                {/* Technical Brief */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#707070] block">
                    ARCHITECTURAL HYPOTHESIS
                  </span>
                  <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed">
                    {activeItem.notes}
                  </p>
                </div>

                {/* Key Technical Parameters */}
                <div className="p-3 bg-[#ECE8E0] border border-white/10 space-y-2 font-mono text-[11px]">
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8A8A] block border-b border-white/10 pb-1">
                    LIVE SYSTEM TELEMETRY
                  </span>
                  {activeItem.parameters.map((p) => (
                    <div key={p.key} className="flex justify-between items-baseline">
                      <span className="text-[#8A8A8A]">{p.key}:</span>
                      <span className="font-bold text-[#F2F2F0]">{p.val}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Tags */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#707070] block">
                    TECHNOLOGY COMPOSITION
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {activeItem.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-[#101010] border border-white/10 text-[#F2F2F0]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
