'use client';

import { motion } from 'framer-motion';
import SignatureSymbol from './SignatureSymbol';

const timelineEvents = [
  {
    period: '2026 — PRESENT',
    role: 'FOUNDING ENGINEER & PRODUCT BUILDER',
    entity: 'OUTREACHLY',
    summary: 'Directing full-stack engineering, domain signal discovery algorithms, and automated conversational outreach pipelines.',
    current: true,
  },
  {
    period: '2025',
    role: 'FULL-STACK ENGINEER',
    entity: 'LOVE AMORI & CLIENT ARCHITECTURES',
    summary: 'Delivered resilient e-commerce infrastructure with Paystack payments, zero-layout-shift catalogs, and automated data bridges.',
    current: false,
  },
  {
    period: '2024',
    role: 'PRODUCT ARCHITECT',
    entity: 'RESUMIFY & ATTENDANCE SYSTEMS',
    summary: 'Shipped AI-powered job application dispatcher and cryptographically verified QR session attendance infrastructure.',
    current: false,
  },
  {
    period: '2023',
    role: 'SYSTEMS DEVELOPER',
    entity: 'DISTRIBUTED SYSTEMS & CORE APIS',
    summary: 'Constructed high-concurrency Node.js microservices, relational schemas, and asynchronous background worker queues.',
    current: false,
  },
];

const toolkit = [
  { category: 'LANGUAGES & RUNTIMES', items: ['TypeScript', 'JavaScript', 'Node.js', 'Python', 'SQL', 'Bash'] },
  { category: 'FRAMEWORKS & LIBS', items: ['Next.js (App Router)', 'React 19', 'Express', 'Tailwind CSS', 'Framer Motion','ThreeJs'] },
  { category: 'DATA & STORAGE', items: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Redis', 'Vector DBs'] },
  { category: 'TOOLING & INFRA', items: ['Docker', 'Git', 'Paystack API', 'Puppeteer', 'Linux (Ubuntu/Arch)'] },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 border-b border-[#121212]/15 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#121212]/15 pb-4 font-mono text-[11px] uppercase tracking-widest text-[#5C5A53]">
          <div className="flex items-center gap-2">
            <SignatureSymbol size={14} className="text-[#121212]" />
            <span>BIO &amp; TRAJECTORY</span>
          </div>
          <div>EDITORIAL PROFILE</div>
          <div className="text-right text-[#121212] font-semibold">ABOUT</div>
        </div>

        {/* Section Headline */}
        <div className="mt-8 mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C887D] block mb-2">
            [ PERSONA &amp; ETHOS ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-[-0.03em] leading-none text-[#121212]">
            ABOUT
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Human statement & philosophy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6 text-lg sm:text-xl font-medium tracking-tight text-[#121212] leading-relaxed">
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#121212] border-l-2 border-[#10B981] pl-5 sm:pl-6">
                &ldquo;I like turning ideas into things people can actually use.&rdquo;
              </p>
              
              <p className="text-base sm:text-lg text-[#5C5A53] leading-relaxed">
                Most of my time goes into building full-stack products, experimenting with new technology and figuring out how to make complicated things feel simple.
              </p>

              <p className="text-base sm:text-lg text-[#5C5A53] leading-relaxed">
                I&apos;m interested in the space between software, automation, AI and products. When not deploying code, I am dissecting interface ergonomcs, testing systems, and exploring modern digital distribution.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="pt-6 border-t border-[#121212]/10 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8C887D] block">
                ENGINEERING PILLARS
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 bg-[#F4F2EB] border border-[#121212]/10">
                  <span className="text-[#10B981] font-bold block mb-1">01 / VELOCITY &amp; TACTILITY</span>
                  <p className="text-[11px] text-[#5C5A53] font-sans">
                    Software should respond with physical immediacy. Latency is the primary design bug.
                  </p>
                </div>

                <div className="p-4 bg-[#F4F2EB] border border-[#121212]/10">
                  <span className="text-[#10B981] font-bold block mb-1">02 / UNCOMPLICATED SYSTEMS</span>
                  <p className="text-[11px] text-[#5C5A53] font-sans">
                    Prefer transparent architectures and solid primitives over fragile abstraction layers.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Toolkit Monospace Matrix */}
            <div className="pt-6 border-t border-[#121212]/10 space-y-3 font-mono text-xs">
              <span className="text-xs uppercase tracking-widest text-[#8C887D] block">
                EVERYDAY INSTRUMENTS &amp; PRIMITIVES
              </span>
              <div className="space-y-3">
                {toolkit.map((item) => (
                  <div key={item.category} className="pb-2 border-b border-[#121212]/5">
                    <div className="text-[10px] text-[#8C887D] uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-[#121212]">
                      {item.items.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-[#ECE8E0] border border-[#121212]/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tight Timeline Ledger */}
          <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#121212]/15 p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#121212]/10 font-mono text-xs text-[#8C887D]">
              <span className="uppercase tracking-widest font-bold text-[#121212]">TIMELINE ARCHIVE</span>
              <span>2023 — 2026</span>
            </div>

            <div className="mt-8 space-y-8 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-[#121212]/15 hidden sm:block" />

              {timelineEvents.map((evt, idx) => (
                <motion.div
                  key={evt.period}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative sm:pl-9 space-y-1.5"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 hidden sm:flex items-center justify-center bg-[#FAF9F5] ${
                      evt.current
                        ? 'border-[#10B981] text-[#10B981]'
                        : 'border-[#121212]/30 text-[#121212]'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${evt.current ? 'bg-[#10B981]' : 'bg-[#121212]'}`} />
                  </div>

                  <div className="flex flex-wrap items-baseline gap-2 font-mono text-xs">
                    <span className="font-bold text-[#10B981]">{evt.period}</span>
                    <span className="text-[#8C887D]">/</span>
                    <span className="text-[#121212] font-semibold tracking-wider">{evt.entity}</span>
                    {evt.current && (
                      <span className="px-1.5 py-0.2 bg-[#10B981]/15 text-[#047857] border border-[#10B981]/30 text-[9px] uppercase font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <div className="font-mono text-[11px] text-[#5C5A53] uppercase tracking-wider font-semibold">
                    {evt.role}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5A53] leading-relaxed pt-1">
                    {evt.summary}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Availability Footer Card */}
            <div className="mt-10 pt-6 border-t border-[#121212]/10 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F4F2EB] p-4 border">
              <div>
                <span className="text-[#8C887D] block text-[10px] uppercase">STATUS</span>
                <span className="font-bold text-[#121212]">CONSULTING &amp; HIGH-LEVERAGE BUILDS</span>
              </div>
              <a
                href="#contact"
                className="px-3 py-1.5 bg-[#121212] text-white hover:bg-[#10B981] transition-colors font-bold uppercase text-[10px] tracking-widest text-center"
                data-cursor="CONNECT"
              >
                INITIATE CONTACT →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
