'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SignatureSymbol from './SignatureSymbol';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const email = 'amarachukwuonuoha22@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#121212] text-[#F4F2EB] pt-24 sm:pt-32 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Top Editorial Index Ribbon */}
      <div className="max-w-7xl mx-auto border-b border-[#2A2A2A] pb-6 mb-16 sm:mb-24 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#888888]">
        <div className="flex items-center gap-2">
          <SignatureSymbol size={14} className="text-[#F4F2EB]" />
          <span>FINAL SCENE // ACT IV</span>
        </div>
        <div>COMMUNICATION CHANNEL</div>
        <div className="text-[#10B981] font-semibold">DIRECT DISPATCH</div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Giant Monolithic Statement */}
        <div className="space-y-2 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5vw] font-black uppercase tracking-[-0.04em] leading-[0.88] text-[#F4F2EB]"
          >
            HAVE SOMETHING
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5vw] font-black uppercase tracking-[-0.04em] leading-[0.88] text-[#888888]"
          >
            WORTH BUILDING?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5vw] font-black uppercase tracking-[-0.04em] leading-[0.88] text-[#10B981]">
              LET&apos;S TALK.
            </span>
          </motion.div>
        </div>

        {/* Action Grid */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-[#2A2A2A] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Fast Copy */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-lg">
              Available for full-stack engineering, high-signal product architecture, and venture incubation. Whether you have an explicit specification or an unformed concept, my inbox is open.
            </p>

            {/* Email Contact Block with Copy Feedback */}
            <div className="p-5 sm:p-6 bg-[#1A1A1A] border border-[#2E2E2E] space-y-3 font-mono text-xs">
              <span className="text-[10px] text-[#777777] uppercase tracking-widest block">
                DIRECT INBOX
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${email}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-[#10B981] transition-colors truncate"
                  data-cursor="MAIL"
                >
                  {email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-1.5 bg-[#2A2A2A] hover:bg-[#10B981] hover:text-white text-[#D4D4D4] transition-all font-mono text-[10px] uppercase tracking-wider font-bold shrink-0 text-center"
                  data-cursor="COPY"
                >
                  {copied ? '✓ COPIED TO CLIPBOARD' : 'COPY ADDRESS'}
                </button>
              </div>
            </div>

            {/* Public Links Index */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <a
                href="https://github.com/Urex014"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#10B981] hover:bg-[#202020] transition-all group"
                data-cursor="GITHUB"
              >
                <div className="flex justify-between items-center text-[#777777] text-[10px] uppercase mb-1">
                  <span>CODE REPOSITORIES</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#10B981]">↗</span>
                </div>
                <div className="font-bold text-white text-sm">GITHUB</div>
                <div className="text-[10px] text-[#888888] mt-1">@Urex014</div>
              </a>

              <a
                href="https://www.linkedin.com/in/amarachukwu-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#10B981] hover:bg-[#202020] transition-all group"
                data-cursor="LINKEDIN"
              >
                <div className="flex justify-between items-center text-[#777777] text-[10px] uppercase mb-1">
                  <span>PROFESSIONAL</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#10B981]">↗</span>
                </div>
                <div className="font-bold text-white text-sm">LINKEDIN</div>
                <div className="text-[10px] text-[#888888] mt-1">/in/amarachukwu-dev</div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Transmission */}
          <div className="lg:col-span-6 bg-[#181818] border border-[#2E2E2E] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A] font-mono text-[10px] text-[#888888] mb-6">
              <span className="text-white font-bold uppercase">FAST INQUIRY FORM</span>
              <span>DIRECT DISPATCH</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label htmlFor="contact-name" className="block text-[10px] text-[#888888] uppercase tracking-wider mb-1">
                  YOUR NAME / ORGANIZATION
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Maya Chen"
                  className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#10B981] text-white px-3 py-2.5 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[10px] text-[#888888] uppercase tracking-wider mb-1">
                  REPLY-TO ADDRESS <span className="text-[#10B981]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="maya@studio.com"
                  className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#10B981] text-white px-3 py-2.5 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[10px] text-[#888888] uppercase tracking-wider mb-1">
                  PROJECT / INQUIRY DETAILS <span className="text-[#10B981]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about what you are building, timeline expectations, or system requirements..."
                  className="w-full bg-[#121212] border border-[#2E2E2E] focus:border-[#10B981] text-white px-3 py-2.5 outline-none transition-colors resize-none font-sans text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'sent'}
                className="w-full py-3 bg-[#F4F2EB] text-[#121212] hover:bg-[#10B981] hover:text-white transition-all font-mono text-xs font-bold uppercase tracking-widest disabled:opacity-50"
                data-cursor="TRANSMIT"
              >
                {status === 'submitting' && 'DISPATCHING TRANSMISSION...'}
                {status === 'sent' && '✓ INQUIRY DISPATCHED SUCCESSFULLY'}
                {status === 'idle' && 'SEND DIRECT MESSAGE →'}
              </button>
            </form>
          </div>

        </div>

        {/* Editorial Colophon & Bottom Credits */}
        <div className="mt-24 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[10px] text-[#777777]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 text-white font-bold">
              <SignatureSymbol size={14} className="text-white" />
              <span>AMARACHUKWU ONUOHA</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>LAGOS / NIGERIA (06°31′N 003°23′E)</span>
            <span className="hidden sm:inline">•</span>
            <span>EDITION 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span>GEIST SANS × GEIST MONO</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#F4F2EB] hover:text-[#10B981] transition-colors uppercase tracking-wider font-semibold cursor-pointer"
              data-cursor="TOP"
            >
              [ TOP ↑ ]
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
