'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SignatureSymbol from '../components/SignatureSymbol';

export default function BrandIdentityPage() {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark' | 'mono' | 'green'>('light');
  const [symbolScale, setSymbolScale] = useState<number>(140);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const assets = [
    {
      title: 'PRIMARY SYMBOL',
      desc: 'Dual-tone signature mark with black stroke and neon green keystone on transparent ground.',
      file: '/brand/logo-symbol.svg',
      bg: 'bg-[#070707]',
      badge: 'DEFAULT // PRODUCTION',
      colors: ['#F2F2F0', '#39FF14'],
    },
    {
      title: 'DARK MODE SYMBOL',
      desc: 'High-contrast white stroke with neon green keystone for dark surfaces.',
      file: '/brand/logo-symbol-dark.svg',
      bg: 'bg-[#F2F2F0]',
      badge: 'DARK SURFACES',
      colors: ['#FFFFFF', '#39FF14'],
    },
    {
      title: 'MONOCHROME INK',
      desc: 'Single-color 100% ink mark for print, stamping, embroidery, and single-pass rendering.',
      file: '/brand/logo-symbol-mono.svg',
      bg: 'bg-[#FFFFFF]',
      badge: '100% INK // MONO',
      colors: ['#F2F2F0'],
    },
    {
      title: 'MONOCHROME WHITE',
      desc: 'Single-color knockout white for dark photography backgrounds and monochrome overlays.',
      file: '/brand/logo-symbol-white.svg',
      bg: 'bg-[#181818]',
      badge: 'KNOCKOUT WHITE',
      colors: ['#FFFFFF'],
    },
    {
      title: 'ELECTRIC NEON',
      desc: 'Vivid Outreachly green body with crisp white keystone for accent cards and stickers.',
      file: '/brand/logo-symbol-green.svg',
      bg: 'bg-[#F2F2F0]',
      badge: 'ACCENT // STICKER',
      colors: ['#39FF14', '#FFFFFF'],
    },
    {
      title: 'PRIMARY WORDMARK',
      desc: 'Full horizontal lockup with interlocking monogram, grotesk nameplate, and engineering subtitle.',
      file: '/brand/logo-wordmark-horizontal.svg',
      bg: 'bg-[#070707]',
      badge: 'PRIMARY HORIZONTAL',
      colors: ['#F2F2F0', '#39FF14', '#666666'],
    },
    {
      title: 'DARK MODE WORDMARK',
      desc: 'Horizontal lockup optimized for dark terminal headers and presentation decks.',
      file: '/brand/logo-wordmark-dark.svg',
      bg: 'bg-[#F2F2F0]',
      badge: 'DARK LOCKUP',
      colors: ['#FFFFFF', '#39FF14', '#A0A0A0'],
    },
    {
      title: 'COMPACT LOCKUP',
      desc: 'Editorial square lockup featuring monogram with bold first name and builder subtitle.',
      file: '/brand/logo-compact.svg',
      bg: 'bg-[#070707]',
      badge: 'SQUARE // SOCIAL',
      colors: ['#F2F2F0', '#39FF14', '#555555'],
    },
  ];

  const copySvg = async (filePath: string, index: number) => {
    try {
      const res = await fetch(filePath);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
    }
  };

  const themeConfig = {
    light: { bg: 'bg-[#070707]', bodyColor: '#F2F2F0', accentColor: '#39FF14', mono: false },
    dark: { bg: 'bg-[#F2F2F0]', bodyColor: '#FFFFFF', accentColor: '#39FF14', mono: false },
    mono: { bg: 'bg-[#FFFFFF]', bodyColor: '#F2F2F0', accentColor: '#F2F2F0', mono: true },
    green: { bg: 'bg-[#181818]', bodyColor: '#39FF14', accentColor: '#FFFFFF', mono: false },
  };

  const currentTheme = themeConfig[activeTheme];

  return (
    <div className="min-h-screen bg-[#070707] text-[#F2F2F0] font-sans antialiased selection:bg-[#E8E8E6] selection:text-white">
      {/* Top Brand Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#070707]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-2.5 py-1 bg-[#101010] border border-white/10 rounded-full shadow-[2px_2px_0px_#000000] hover:bg-[#E8E8E6] transition-colors font-mono text-xs font-bold"
          >
            <span>←</span>
            <span>BACK TO PORTFOLIO</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-3 font-mono text-xs text-[#8A8A8A]">
            <span className="font-bold text-[#F2F2F0]">AMARACHUKWU ONUOHA</span>
            <span>/</span>
            <span>BRAND IDENTITY SYSTEM</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] bg-[#E8E8E6] text-[#070707] font-black px-2.5 py-0.5 rounded-full border border-white/10">
            SPEC V1.0 • 2026
          </span>
          <a
            href="/brand/logo-symbol.svg"
            download="amarachukwu-symbol.svg"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2F2F0] text-white hover:bg-[#E8E8E6] hover:text-[#F2F2F0] transition-colors font-mono text-xs font-bold rounded-full border border-white/10"
          >
            <span>DOWNLOAD SVG</span>
            <span>↓</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* Title & Introduction */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#8A8A8A]">
            <span className="px-2 py-0.5 bg-black text-white font-bold rounded">IDENTITY ARCHITECTURE</span>
            <span>•</span>
            <span>MONOGRAM SPECIFICATION</span>
            <span>•</span>
            <span className="text-[#E8E8E6] font-bold">PRODUCTION READY</span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tight text-[#F2F2F0] leading-none">
            THE INTERLOCKING KEYSTONE
          </h1>

          <p className="text-base sm:text-xl text-[#8A8A8A] max-w-3xl leading-relaxed">
            The bespoke visual mark for <strong className="text-[#F2F2F0]">Amarachukwu Onuoha</strong>. 
            An architectural fusion of the letters <strong className="text-[#F2F2F0]">A</strong> and <strong className="text-[#F2F2F0]">O</strong> into a singular, sculptural symbol. Designed to express engineering rigour, product craft, and playful modern energy.
          </p>
        </section>

        {/* Interactive Master Inspection Stage */}
        <section className="bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8E8E6]" />
              <span className="font-bold uppercase">INTERACTIVE INSPECTOR VIEWPORT</span>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Theme toggles */}
              <div className="flex items-center bg-[#070707] p-1 rounded-lg border border-white/10">
                {(['light', 'dark', 'mono', 'green'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTheme(t)}
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                      activeTheme === t
                        ? 'bg-[#F2F2F0] text-white shadow-sm'
                        : 'text-[#8A8A8A] hover:text-[#F2F2F0]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Grid Toggle */}
              <button
                type="button"
                onClick={() => setShowGrid(!showGrid)}
                className={`px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-bold uppercase ${
                  showGrid ? 'bg-[#E8E8E6] text-[#070707] border-white/10' : 'bg-[#070707] text-[#8A8A8A]'
                }`}
              >
                GRID {showGrid ? 'ON' : 'OFF'}
              </button>

              {/* Size Slider */}
              <div className="flex items-center gap-2 bg-[#070707] px-3 py-1 rounded-lg border border-white/10">
                <span className="text-[10px] text-[#8A8A8A] font-bold">SIZE: {symbolScale}px</span>
                <input
                  type="range"
                  min="24"
                  max="280"
                  value={symbolScale}
                  onChange={(e) => setSymbolScale(Number(e.target.value))}
                  className="w-20 accent-[#F2F2F0] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Canvas Preview Area */}
          <div
            className={`relative min-h-[380px] sm:min-h-[460px] rounded-xl sm:rounded-2xl border-2 border-white/10 flex items-center justify-center transition-colors duration-500 overflow-hidden ${currentTheme.bg}`}
          >
            {/* Geometric Grid Overlay */}
            {showGrid && (
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]">
                {/* Center crosshair */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#39FF14] opacity-70" />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#39FF14] opacity-70" />
              </div>
            )}

            {/* Live Rendered Symbol */}
            <div className="relative z-10 transition-all duration-200">
              <SignatureSymbol
                size={symbolScale}
                color={currentTheme.bodyColor}
                accentColor={currentTheme.accentColor}
                mono={currentTheme.mono}
              />
            </div>

            {/* Coordinate Pill */}
            <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur text-white font-mono text-[9px] px-2.5 py-1 rounded-md border border-white/20">
              VIEWBOX: 200 × 200 // STROKE: 20px (10%) // RATIO: 1:1
            </div>

            {/* Favicon Optical Check */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#101010]/95 text-[#F2F2F0] font-mono text-[9px] px-2.5 py-1 rounded-md border border-white/10 shadow-[2px_2px_0px_#000000]">
              <span>FAVICON (16PX):</span>
              <SignatureSymbol
                size={16}
                color={currentTheme.bodyColor === '#FFFFFF' ? '#F2F2F0' : currentTheme.bodyColor}
                accentColor="#39FF14"
              />
            </div>
          </div>

          {/* Description of current render */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-mono text-xs">
            <div className="p-3 bg-[#070707] rounded-lg border border-white/10">
              <span className="text-[#707070] block text-[10px] uppercase">ALPHA KEYWAY MASK</span>
              <span className="font-bold text-[#F2F2F0]">100% Vector Transparency</span>
            </div>
            <div className="p-3 bg-[#070707] rounded-lg border border-white/10">
              <span className="text-[#707070] block text-[10px] uppercase">WEAVE GEOMETRY</span>
              <span className="font-bold text-[#F2F2F0]">Left Over / Right Under</span>
            </div>
            <div className="p-3 bg-[#070707] rounded-lg border border-white/10">
              <span className="text-[#707070] block text-[10px] uppercase">ACCENT ELEMENT</span>
              <span className="font-bold text-[#E8E8E6]">Floating Keystone Crossbar</span>
            </div>
          </div>
        </section>

        {/* The 8 Official Production Assets */}
        <section className="space-y-6">
          <div className="space-y-1">
            <div className="font-mono text-xs text-[#707070] uppercase tracking-wider">
              PRODUCTION ARTIFACTS
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F2F2F0]">
              OFFICIAL ASSET LOCKUPS
            </h2>
            <p className="text-xs sm:text-base text-[#8A8A8A]">
              Every vector asset is optimized, SVGO-cleansed, and ready for responsive embedding, high-DPI retina displays, and favicons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {assets.map((asset, idx) => (
              <div
                key={asset.title}
                className="bg-[#101010] border-2 border-white/10 rounded-xl sm:rounded-2xl p-4 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-4 group hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000000] transition-all"
              >
                {/* Visual Header */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center font-mono text-[9px]">
                    <span className="bg-[#F2F2F0] text-white px-2 py-0.5 rounded-full font-bold">
                      {asset.badge}
                    </span>
                    <span className="text-[#707070]">SVG VECTOR</span>
                  </div>

                  {/* Asset Preview Box */}
                  <div
                    className={`h-40 rounded-xl border border-white/10 flex items-center justify-center p-4 relative overflow-hidden ${asset.bg}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset.file}
                      alt={asset.title}
                      className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="font-black text-sm uppercase tracking-tight text-[#F2F2F0]">
                      {asset.title}
                    </h3>
                    <p className="text-[11px] text-[#8A8A8A] mt-1 leading-snug">
                      {asset.desc}
                    </p>
                  </div>
                </div>

                {/* Color dots & Actions */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#707070]">
                    <span>PALETTE:</span>
                    <div className="flex items-center gap-1">
                      {asset.colors.map((c) => (
                        <span
                          key={c}
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <a
                      href={asset.file}
                      download
                      className="px-2.5 py-1.5 bg-[#F2F2F0] text-white hover:bg-[#E8E8E6] hover:text-[#F2F2F0] text-center font-bold rounded-lg border border-white/10 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>DOWNLOAD</span>
                      <span>↓</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copySvg(asset.file, idx)}
                      className="px-2.5 py-1.5 bg-[#070707] hover:bg-[#101010] text-[#F2F2F0] font-bold rounded-lg border border-white/10 transition-colors"
                    >
                      {copiedIndex === idx ? '✓ COPIED' : 'COPY CODE'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Geometric Blueprint & Design Logic */}
        <section className="bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-8">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-[#707070] uppercase tracking-wider">
              GEOMETRIC DERIVATION &amp; LOGIC
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F2F2F0]">
              ANATOMY OF THE MARK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            {/* Step 1: Chevron Arch A */}
            <div className="p-5 bg-[#070707] rounded-xl border border-white/10 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-sm text-[#F2F2F0]">01 / THE ARCH (A)</span>
                <span className="text-[10px] px-2 py-0.5 bg-[#F2F2F0] text-white rounded font-bold">STRUCTURE</span>
              </div>
              <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed">
                Formed by an architectural chevron rising from base coordinates <code className="bg-[#101010] px-1 border border-black/10">y=170</code> to a truncated flat cap at <code className="bg-[#101010] px-1 border border-black/10">y=32</code> with a steep 67.5° slope. Communicates structural stability and forward momentum.
              </p>
              <div className="pt-2 border-t border-white/10 text-[10px] text-[#707070]">
                <span>COORDINATES: (44,170) → (94,32) → (106,32) → (156,170)</span>
              </div>
            </div>

            {/* Step 2: Torus Ring O */}
            <div className="p-5 bg-[#070707] rounded-xl border border-white/10 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-sm text-[#F2F2F0]">02 / THE LENS (O)</span>
                <span className="text-[10px] px-2 py-0.5 bg-[#F2F2F0] text-white rounded font-bold">CONTINUITY</span>
              </div>
              <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed">
                A circle centered at <code className="bg-[#101010] px-1 border border-black/10">(100, 112)</code> with radius 48px and stroke width 20px. Centered optically within the lower aperture of the A-frame, giving the mark human balance rather than purely rigid mathematical centering.
              </p>
              <div className="pt-2 border-t border-white/10 text-[10px] text-[#707070]">
                <span>CENTER: (100, 112) // RADIUS: 48px // STROKE: 20px</span>
              </div>
            </div>

            {/* Step 3: Keystone Bar */}
            <div className="p-5 bg-[#070707] rounded-xl border border-white/10 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-black text-sm text-[#E8E8E6]">03 / THE KEYSTONE</span>
                <span className="text-[10px] px-2 py-0.5 bg-[#E8E8E6] text-[#070707] rounded font-bold">BUILDER ACCENT</span>
              </div>
              <p className="font-sans text-xs text-[#8A8A8A] leading-relaxed">
                A floating horizontal keystone (<code className="bg-[#101010] px-1 border border-black/10">60px × 18px</code>, 4px corner radius) in neon green (<strong className="text-[#E8E8E6]">#39FF14</strong>). Acts as the bridge of the A and the heart of the O, anchoring the composition.
              </p>
              <div className="pt-2 border-t border-white/10 text-[10px] text-[#707070]">
                <span>RECT: x=70, y=103, w=60, h=18, rx=4 // HEX: #39FF14</span>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Palette Tokens */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#707070] uppercase tracking-wider">
              COLOR ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F2F2F0]">
              CANVAS &amp; ACCENT PALETTE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 font-mono">
            {[
              { name: 'WARM PAPER', hex: '#070707', rgb: '247, 245, 240', text: '#F2F2F0', role: 'Default Background' },
              { name: 'DEEP INK', hex: '#F2F2F0', rgb: '17, 17, 17', text: '#FFFFFF', role: 'Primary Typography' },
              { name: 'KEYSTONE GREEN', hex: '#39FF14', rgb: '57, 255, 20', text: '#000000', role: 'Signature Mark Accent' },
              { name: 'OUTREACHLY LIME', hex: '#E8E8E6', rgb: '184, 255, 0', text: '#000000', role: 'Product Highlight' },
              { name: 'EMERALD GREEN', hex: '#E8E8E6', rgb: '16, 185, 129', text: '#FFFFFF', role: 'Status & Badges' },
              { name: 'STUDIO WHITE', hex: '#FFFFFF', rgb: '255, 255, 255', text: '#F2F2F0', role: 'Card Grounds' },
            ].map((swatch) => (
              <div
                key={swatch.hex}
                className="bg-[#101010] border-2 border-white/10 rounded-xl p-3 shadow-[3px_3px_0px_#000000] space-y-2"
              >
                <div
                  className="h-16 rounded-lg border border-white/10 flex items-end p-2"
                  style={{ backgroundColor: swatch.hex, color: swatch.text }}
                >
                  <span className="font-bold text-[10px]">{swatch.hex}</span>
                </div>
                <div>
                  <div className="font-black text-[11px] text-[#F2F2F0] uppercase">{swatch.name}</div>
                  <div className="text-[9px] text-[#707070]">{swatch.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography System */}
        <section className="bg-[#101010] border-2 sm:border-3 border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-[#707070] uppercase tracking-wider">
              TYPOGRAPHIC HIERARCHY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F2F2F0]">
              EDITORIAL GROTESK + TECHNICAL MONO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#E8E8E6] font-bold uppercase">
                01 / PRIMARY DISPLAY: GEIST SANS (BLACK)
              </span>
              <div className="text-2xl sm:text-5xl font-black uppercase tracking-tighter text-[#F2F2F0] leading-none">
                AMARACHUKWU ONUOHA
              </div>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                Tight letterspacing (-0.03em to -0.04em), monumental scale, uncompromising structure. Used for high-impact editorial headlines and hero section titles.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs text-[#E8E8E6] font-bold uppercase">
                02 / TECHNICAL RUNNER: GEIST MONO (BOLD)
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold uppercase tracking-widest text-[#F2F2F0]">
                FULL-STACK ENGINEER • PRODUCT BUILDER
              </div>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                Wide tracking (+0.08em), bracketed indices, and precision uppercase. Used for telemetry readouts, navigation indices, and project metadata.
              </p>
            </div>
          </div>
        </section>

        {/* 3D Motion & Scroll Roadmap */}
        <section className="p-6 sm:p-8 bg-[#F2F2F0] text-white rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-white/10 shadow-[8px_8px_0px_#E8E8E6] space-y-4 font-mono">
          <div className="flex items-center gap-2 text-[#E8E8E6] text-xs font-bold uppercase">
            <span>⚡</span>
            <span>CINEMATIC TIMELINE INTEGRATION (3D MORPHING ROADMAP)</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            SCULPTURAL DECOMPOSITION
          </h3>

          <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-sans max-w-3xl">
            Because the monogram is constructed from three distinct, mathematically pure geometric primitives (Arch, Torus, and Keystone Bar), it can be converted into independent Three.js extruded meshes (`ExtrudeGeometry`).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-[11px]">
            <div className="p-3 bg-[#101010]/5 border border-white/10 rounded-lg">
              <span className="text-[#E8E8E6] block font-bold">STAGE 01: SEPARATION</span>
              <span className="text-[#888888]">Scroll progress 0.0 → 0.15 pulls the O lens forward on the Z-axis while the A arch retreats.</span>
            </div>
            <div className="p-3 bg-[#101010]/5 border border-white/10 rounded-lg">
              <span className="text-[#E8E8E6] block font-bold">STAGE 02: ORTHOGONAL ROTATION</span>
              <span className="text-[#888888]">Scroll progress 0.15 → 0.35 spins the torus ring along the Y-axis revealing the keyway aperture.</span>
            </div>
            <div className="p-3 bg-[#101010]/5 border border-white/10 rounded-lg">
              <span className="text-[#E8E8E6] block font-bold">STAGE 03: KEYSTONE LOCK</span>
              <span className="text-[#39FF14] block font-bold">Scroll snaps the keystone bar into place with spring physics as user arrives at Resumify.</span>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Colophon */}
      <footer className="border-t border-white/10 bg-[#101010] py-8 px-4 sm:px-8 font-mono text-[10px] text-[#707070]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#F2F2F0] font-bold">
            <SignatureSymbol size={16} />
            <span>AMARACHUKWU ONUOHA IDENTITY MONOGRAPH</span>
          </div>
          <div className="flex items-center gap-4">
            <span>DESIGNED &amp; ENGINEERED IN LAGOS, NIGERIA</span>
            <span>•</span>
            <Link href="/" className="hover:text-[#F2F2F0] underline">
              RETURN TO MAIN STAGE →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
