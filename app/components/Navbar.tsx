'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SignatureSymbol from './SignatureSymbol';

const navItems = [
  { label: 'WORK', href: '#work', index: '01' },
  { label: 'ABOUT', href: '#about', index: '02' },
  { label: 'LAB', href: '#lab', index: '03' },
  { label: 'CONTACT', href: '#contact', index: '04' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lagosTime, setLagosTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setLagosTime(`${timeStr} WAT`);
      } catch {
        setLagosTime('LAGOS, NG');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090909]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_1px_0_rgba(0,0,0,0.03)]'
            : 'bg-[#090909]/80 backdrop-blur-sm border-b border-[#222222]/10 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[#F2F2F0] transition-colors"
            data-cursor="HOME"
          >
            <SignatureSymbol size={18} className="text-[#F2F2F0] group-hover:text-[#E8E8E6] transition-colors" />
            <span className="font-bold text-xs sm:text-sm tracking-[-0.02em] uppercase">
              AMARACHUKWU ONUOHA
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5 ml-3 pl-3 border-l border-white/10 font-mono text-[10px] tracking-widest text-[#8A8A8A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E6] animate-pulse" />
              {lagosTime || 'LAGOS, NG'} • AVAILABLE FOR Q4
            </span>
          </Link>

          {/* Right Desktop Editorial Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex items-baseline gap-1.5 text-xs font-mono uppercase tracking-widest text-[#F2F2F0] hover:text-[#E8E8E6] transition-colors py-1"
                data-cursor={item.label}
              >
                <span className="text-[9px] text-[#8A8A8A] group-hover:text-[#E8E8E6] transition-colors">
                  {item.index}
                </span>
                <span className="font-bold">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E8E6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 px-2.5 py-1.5 border border-white/10 text-[#F2F2F0] font-mono text-xs uppercase tracking-widest hover:border-[#222222] active:bg-[#171717] active:text-[#090909] transition-all"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span>{mobileMenuOpen ? 'CLOSE' : 'INDEX'}</span>
            <span className="text-[10px] text-[#8A8A8A]">[{mobileMenuOpen ? '×' : '+'}]</span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[57px] bottom-0 z-40 bg-[#090909] border-b border-white/10 flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#8A8A8A] pb-3 border-b border-[#222222]/10 flex justify-between">
                <span>DIRECTORY NAVIGATION</span>
                <span>04 DESTINATIONS</span>
              </div>
              <div className="flex flex-col divide-y divide-[#F5F5F5]/10">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-5 flex items-baseline justify-between text-2xl font-bold tracking-tight text-[#F2F2F0] hover:text-[#E8E8E6] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[#8A8A8A]">[{item.index}]</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-[#222222]/10 font-mono text-[11px] text-[#8A8A8A] space-y-2">
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-[#F2F2F0]">LAGOS / NIGERIA (6°31&apos;N 3°23&apos;E)</span>
              </div>
              <div className="flex justify-between">
                <span>LOCAL TIME:</span>
                <span className="text-[#F2F2F0]">{lagosTime}</span>
              </div>
              <div className="flex justify-between">
                <span>CURRENT INITIATIVE:</span>
                <span className="text-[#E8E8E6] font-semibold">OUTREACHLY</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
