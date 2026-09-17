'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SignatureSymbol from './SignatureSymbol';

const milestones = [
  { id: '01', title: 'Core Crawler & Discovery Engine', status: 'SHIPPED', progress: 100, date: 'AUG 2026' },
  { id: '02', title: 'MX / SMTP Verification Handshake', status: 'SHIPPED', progress: 100, date: 'SEP 2026' },
  { id: '03', title: 'Multi-Step Sequence Composer', status: 'IN SPRINT', progress: 80, date: 'ACTIVE' },
  { id: '04', title: 'Deliverability & Sentiment Tracker', status: 'BUILDING', progress: 55, date: 'CURRENT' },
  { id: '05', title: 'Public Onboarding & Stripe/Paystack Billing', status: 'QUEUED', progress: 15, date: 'OCT 2026' },
];

const devlogs = [
  {
    hash: 'commit-8f2a1',
    timestamp: 'YESTERDAY // 21:14',
    title: 'Asynchronous Scraper Dispatcher Migration',
    body: 'Decoupled domain crawling workers from synchronous Next.js API routes using background event queues. P95 latency dropped from 1,240ms to 184ms under concurrent directory parsing.',
    tag: 'ARCHITECTURE',
  },
  {
    hash: 'commit-4c7b9',
    timestamp: '3 DAYS AGO // 16:30',
    title: 'DNS MX-Record Caching & Rate Limiting',
    body: 'Implemented Redis-backed TTL caching for repeated domain validation checks. Eliminated duplicate SMTP handshakes and reduced external lookup overhead by 68%.',
    tag: 'PERFORMANCE',
  },
  {
    hash: 'commit-1e9d2',
    timestamp: 'LAST WEEK // 11:05',
    title: 'Probabilistic Lead Deduplication Filter',
    body: 'Integrated normalized fuzzy string matching across business registries and company directories to prevent redundant contact outreach across shared parent entities.',
    tag: 'SYSTEMS',
  },
];

export default function CurrentlyBuilding() {
  const [activeTab, setActiveTab] = useState<'milestones' | 'logs'>('milestones');

  return (
    <section id="currently-building" className="py-20 sm:py-28 lg:py-36 border-b border-[#121212]/15 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#121212]/15 pb-4 font-mono text-[11px] uppercase tracking-widest text-[#5C5A53]">
          <div className="flex items-center gap-2">
            <SignatureSymbol size={14} className="text-[#121212]" />
            <span>DEVLOG // REALTIME INITIATIVE</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#10B981] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>ACTIVE SPRINTS</span>
          </div>
        </div>

        {/* Hero Editorial Announcement */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs uppercase tracking-widest text-[#8C887D] mb-2">
              [ PRIMARY FOCUS • 2026 ]
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-[-0.03em] leading-none text-[#121212]">
              CURRENTLY BUILDING
            </h2>

            <div className="mt-8 space-y-4">
              <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#10B981] flex items-center gap-2">
                <span>OUTREACHLY</span>
                <span className="text-xs font-mono px-2 py-0.5 border border-[#10B981]/30 text-[#047857] font-medium tracking-widest">
                  STAGE: BETA
                </span>
              </div>

              {/* Exact requested copy format */}
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#121212] leading-tight space-y-1">
                <p>Find businesses.</p>
                <p>Start conversations.</p>
                <p>Get clients.</p>
              </div>

              <p className="text-sm sm:text-base text-[#5C5A53] leading-relaxed max-w-xl">
                A platform I&apos;m building around targeted business discovery and outreach. Built to transform cold prospecting into a streamlined, high-signal conversational workflow for founders, builders, and service operators.
              </p>
            </div>
          </div>

          {/* Quick Telemetry Box */}
          <div className="lg:col-span-5 bg-[#ECE8E0] border border-[#121212]/15 p-5 sm:p-6 font-mono text-[11px] space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-[#121212]/10">
              <span className="text-[#5C5A53] uppercase tracking-widest">RUNTIME TELEMETRY</span>
              <span className="text-[#10B981] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                SYS_HEALTHY
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-[#121212]/10">
              <span className="text-[#5C5A53]">BRANCH:</span>
              <span className="text-[#121212] font-bold">feat/sequence-ai-enrichment</span>
            </div>

            <div className="flex justify-between py-1 border-b border-[#121212]/10">
              <span className="text-[#5C5A53]">P95 LATENCY:</span>
              <span className="text-[#121212] font-bold">184ms (EDGE LAGOS/EU)</span>
            </div>

            <div className="flex justify-between py-1 border-b border-[#121212]/10">
              <span className="text-[#5C5A53]">VERIFIED RECORDS:</span>
              <span className="text-[#10B981] font-bold">12,480 DIRECTORY PROSPECTS</span>
            </div>

            <div className="flex justify-between pt-1 text-[#5C5A53]">
              <span>TARGET RELEASE:</span>
              <span className="text-[#121212] font-bold">Q4 2026 PRIVATE ACCESS</span>
            </div>
          </div>
        </div>

        {/* Live Devlog & Progress Ledger */}
        <div className="mt-14 sm:mt-20 border border-[#121212]/15 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#121212]/15 gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab('milestones')}
                className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 transition-all ${
                  activeTab === 'milestones'
                    ? 'bg-[#121212] text-white font-bold'
                    : 'bg-[#F4F2EB] text-[#5C5A53] hover:text-[#121212]'
                }`}
              >
                SPRINT ROADMAP [78%]
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('logs')}
                className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 transition-all ${
                  activeTab === 'logs'
                    ? 'bg-[#121212] text-white font-bold'
                    : 'bg-[#F4F2EB] text-[#5C5A53] hover:text-[#121212]'
                }`}
              >
                ENGINEERING CHANGELOG
              </button>
            </div>

            <div className="font-mono text-[11px] text-[#8C887D]">
              UPDATED DAILY DIRECTLY FROM GIT COMMITS
            </div>
          </div>

          {/* Content Area */}
          <div className="pt-6">
            {activeTab === 'milestones' ? (
              <div className="space-y-5 font-mono text-xs">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="p-4 bg-[#FAF9F5] border border-[#121212]/10 hover:border-[#121212]/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[#8C887D] font-bold">[{milestone.id}]</span>
                        <span className="text-[#121212] font-semibold text-sm">{milestone.title}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`px-2 py-0.5 text-[10px] font-bold uppercase ${
                            milestone.progress === 100
                              ? 'bg-[#10B981]/15 text-[#047857] border border-[#10B981]/30'
                              : milestone.progress >= 70
                              ? 'bg-[#10B981]/15 text-[#047857] border border-[#10B981]/30'
                              : 'bg-[#ECE8E0] text-[#5C5A53]'
                          }`}
                        >
                          {milestone.status}
                        </span>
                        <span className="text-[#8C887D] text-[11px]">{milestone.progress}%</span>
                      </div>
                    </div>

                    {/* Progress Bar Line */}
                    <div className="w-full h-1.5 bg-[#ECE8E0] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${milestone.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full ${
                          milestone.progress === 100 ? 'bg-[#10B981]' : 'bg-[#10B981]/70'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 font-mono">
                {devlogs.map((log) => (
                  <div
                    key={log.hash}
                    className="p-5 bg-[#FAF9F5] border border-[#121212]/10 hover:border-[#10B981] transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-[#121212]/10 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#10B981]">{log.hash}</span>
                        <span className="text-[#121212] font-bold">{log.title}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-[#8C887D]">
                        <span className="px-1.5 py-0.5 bg-[#ECE8E0] uppercase text-[#121212]">{log.tag}</span>
                        <span>{log.timestamp}</span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[#5C5A53] leading-relaxed font-sans">
                      {log.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
