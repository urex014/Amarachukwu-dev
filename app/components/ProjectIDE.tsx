/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Github, ExternalLink, ChevronRight, ChevronDown, Menu, ArrowLeft, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export interface Project {
  id: string;
  filename: string;
  title: string;
  description: string;
  tech?: string[];
  link?: string;
  github?: string;
  image?: string;
}

// --- DATA: Your Projects ---
const projects: Project[] = [
  {
    id: 'proj1',
    filename: 'Resumify.tsx',
    title: 'Automated Job Applications',
    description: 'A tool to automate job applications by sending emails to recruiters while you sleep',
    tech: ['Next.js', 'TypeScript', 'Express', 'Tailwind'],
    link: 'https://resumify-teal.vercel.app',
    image: '/Resumify.png' 
  },
  {
    id: 'proj2',
    filename: 'Cryptic.tsx',
    title: 'VTU',
    description: 'Buy utilities with crypto and fiat. No need for exchanges',
    tech: ['Next.js', 'TypeScript'],
    link: 'https://cryptic-rho-ten.vercel.app/',
    image: '/cryptic.png'
  },
  {
    id: 'proj3',
    filename: 'Kollab.tsx',
    title: 'A home for content creators',
    description: 'Find local Content Creators to promote your business at a low price',
    tech: ['Next.js', 'TypeScript'],
    link: 'kollab.name.ng',
    image: '/kollab.png'
  },
  // {
  //   id: 'proj3',
  //   filename: 'PeerLink.tsx',
  //   title: ' p2p market Place',
  //   description: 'A p2p Marketplace with flexibility.',
  //   tech: ['Next.js', 'Typescript', 'Express', 'Supabase'],
  //   image: '/peerLink.png'
  // },
  // {
  //   id:'proj4',
  //   filename:'cephas.tsx',
  //   title: 'Brand Page',
  //   image: '/cephas.png',
  //   description:'A website for a cloth brand',
  //   tech: ['Next.js', 'Typescript']
  // },
  {
    id:'proj5',
    filename:'SentryGuard.sol',
    title: 'Solidity Smart Contract',
    image: '/sentryGuard.png',
    github: 'https://github.com/urex014/sentry-guard.git',
    description: `A decentralized "dead man's switch" that automatically transfers digital assets to a beneficiary if the owner's wallet is inactive for 180 days.`,
    tech: ['Solidity, foundry, react&typescript, wagmi&viem, connectkit']
  },
  {
    id:"proj6",
    filename:"RecEng.py",
    title:"AI Recommendation Engine",
    image:"/RecEng.png",
    description:"An AI-native e-commerce backend utilizing a Python FastAPI vision model (ONNX/ResNet50) to extract image vectors, orchestrated by Node.js, and queried via PostgreSQL (pgvector) for real-time cosine similarity search.",
    github:"https://github.com/urex014/RecEng.git",
    tech:['python, nodejs, nextjs, onnx, resnet50, pgvector']
  },
  {
    id:"proj7",
    filename:"Zerogate.sol",
    image:"/zerogate.png",
    title:"Zerogate - Marketplace for all",
    description: "ZeroGate is a next-generation Web3 marketplace that combines AI-powered visual search with secure, smart-contract escrow for trading physical and digital assets.",
    github:"https://github.com/urex014/zerogate.git",
    tech: ["Next.js", "Node", "Python", "Solidity", "PostgreSQL" + "pgvector"]
  }
];

export default function ProjectIDE() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [isTreeOpen, setIsTreeOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const getFileIconColor = (filename: string) => {
    if (filename.endsWith('tsx') || filename.endsWith('ts')) return 'text-blue-400';
    if (filename.endsWith('py')) return 'text-yellow-400';
    if (filename.endsWith('sol')) return 'text-purple-400';
    if (filename.endsWith('js') || filename.endsWith('jsx')) return 'text-yellow-300';
    return 'text-orange-400';
  };

  return (
    <section className="min-h-[100dvh] bg-black text-gray-400 font-mono py-4 sm:py-8 md:py-16 px-2 sm:px-6 md:px-10 flex flex-col items-center justify-center">
      
      {/* SECTION HEADER */}
      <div className="w-full max-w-6xl mb-3 sm:mb-6 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-green-400 hover:border-green-500/40 text-xs sm:text-sm active:scale-95 transition-all cursor-pointer"
            aria-label="Back to home"
          >
            <ArrowLeft size={16} className="text-green-500 shrink-0" />
            <span className="font-mono font-semibold">cd ..</span>
          </button>
          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-200 font-bold tracking-tight">~/projects</h2>
        </div>

        <button 
          onClick={() => router.push('/contact')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-green-400 hover:border-green-500/40 text-xs sm:text-sm active:scale-95 transition-all cursor-pointer"
        >
          <span className="hidden min-[450px]:inline">./contact_me.sh</span>
          <span className="min-[450px]:hidden">contact</span>
        </button>
      </div>

      {/* IDE WINDOW CONTAINER */}
      <div className="w-full max-w-6xl min-h-[560px] h-[84dvh] md:h-[650px] bg-[#1e1e1e] border border-zinc-800 rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
        
        {/* --- LEFT SIDEBAR (Desktop: Always visible) --- */}
        <div className="hidden md:flex w-64 flex-col border-r border-zinc-800 bg-[#181818] shrink-0">
          <div className="p-3 text-xs font-bold text-gray-500 uppercase tracking-wider select-none">Explorer</div>
          
          <div 
            className="flex items-center gap-1 px-3 py-1.5 text-gray-300 hover:bg-zinc-800 cursor-pointer select-none"
            onClick={() => setIsTreeOpen(!isTreeOpen)}
          >
            {isTreeOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span className="text-sm font-bold text-blue-400">MY-PORTFOLIO</span>
          </div>

          <AnimatePresence>
            {isTreeOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col mt-1">
                  {projects.map((project) => (
                    <div 
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className={`
                        flex items-center gap-2 px-6 py-2 cursor-pointer text-xs md:text-sm transition-colors select-none
                        ${activeProject.id === project.id 
                          ? 'bg-[#37373d] text-white border-l-2 border-green-500' 
                          : 'text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200 border-l-2 border-transparent'}
                      `}
                    >
                      <FileCode size={14} className={getFileIconColor(project.filename)} />
                      <span className="truncate">{project.filename}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- MOBILE FILE EXPLORER DRAWER OVERLAY --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-[41px] left-0 right-0 z-30 bg-[#181818] border-b border-zinc-700 shadow-2xl p-3"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-xs text-zinc-400">
                <span className="font-semibold uppercase tracking-wider text-green-500">// SELECT_FILE</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-zinc-500 hover:text-white p-1 cursor-pointer"
                  aria-label="Close file picker"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="flex flex-col gap-1 max-h-[50vh] overflow-y-auto">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => {
                      setActiveProject(project);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      flex items-center justify-between p-2.5 rounded text-xs cursor-pointer active:bg-zinc-800
                      ${activeProject.id === project.id ? 'bg-zinc-800 text-white border-l-2 border-green-500' : 'text-zinc-400 hover:bg-zinc-800/50'}
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <FileCode size={14} className={getFileIconColor(project.filename)} />
                      <span className="font-medium">{project.filename}</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 truncate max-w-[130px]">{project.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MAIN EDITOR AREA --- */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          
          {/* Top Bar: Mobile files toggle + Scrollable Tabs */}
          <div className="flex items-center bg-[#181818] border-b border-zinc-800 overflow-hidden">
            {/* Mobile File Tree Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center gap-1.5 px-3 py-2.5 bg-zinc-900 text-zinc-300 border-r border-zinc-800 text-xs shrink-0 hover:text-white cursor-pointer active:bg-zinc-800 select-none"
              aria-label="Toggle file explorer"
            >
              <Menu size={14} className="text-green-500" />
              <span>Files</span>
            </button>

            {/* Scrollable Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide w-full overscroll-x-contain">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setActiveProject(project);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm shrink-0 border-r border-zinc-800 cursor-pointer select-none
                    ${activeProject.id === project.id 
                      ? 'bg-[#1e1e1e] text-white border-t-2 border-t-green-500 font-medium' 
                      : 'text-zinc-500 hover:bg-[#2a2d2e] hover:text-zinc-300'}
                  `}
                >
                  <FileCode size={14} className={getFileIconColor(project.filename)} />
                  <span>{project.filename}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Breadcrumbs (Hidden on small mobile) */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 text-xs text-gray-500 border-b border-zinc-800/80 bg-zinc-900/30">
            <span>portfolio</span>
            <ChevronRight size={10} />
            <span>src</span>
            <ChevronRight size={10} />
            <span className="text-gray-300">{activeProject.filename}</span>
          </div>

          {/* Code Content */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 md:p-6 font-mono text-xs sm:text-sm leading-relaxed">
            
            {/* Line 1 */}
            <div className="flex gap-2 sm:gap-4">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">1</span>
              <span className="text-green-600">/**</span>
            </div>
            
            {/* Line 2 */}
            <div className="flex gap-2 sm:gap-4">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">2</span>
              <span className="text-green-600 flex flex-wrap gap-1">
                * <span className="text-white font-bold break-words">{activeProject.title}</span>
              </span>
            </div>
            
            {/* Line 3: Description (With Word Break) */}
            <div className="flex gap-2 sm:gap-4">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">3</span>
              <p className="text-green-600 break-words flex-1 min-w-0">
                * {activeProject.description}
              </p>
            </div>
            
            {/* Line 4 */}
            <div className="flex gap-2 sm:gap-4">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">4</span>
              <span className="text-green-600">*/</span>
            </div>

            <div className="h-3 sm:h-4"></div>

            {/* Line 6: Imports (Responsive Wrap) */}
            <div className="flex gap-2 sm:gap-4">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">6</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center min-w-0">
                <span className="text-purple-400">import</span>
                <span className="text-yellow-300 break-words">{`{ ${(activeProject.tech || []).join(', ')} }`}</span>
                <span className="text-purple-400">from</span>
                <span className="text-orange-300">'@tech-stack'</span>;
              </div>
            </div>

            <div className="h-4 sm:h-6"></div>

            {/* Line 9: Export Statement */}
            <div className="flex gap-2 sm:gap-4">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">9</span>
              <span className="text-purple-400 flex flex-wrap gap-x-1 items-center">
                export default <span className="text-blue-400">function</span> <span className="text-yellow-300">Preview</span>() {'{'}
              </span>
            </div>

            {/* Rendered Project Preview */}
            <div className="flex gap-2 sm:gap-4 mt-2">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">10</span>
              
              {/* Responsive Container for Image & Links */}
              <div className="ml-0 sm:ml-4 md:ml-6 p-2.5 sm:p-4 rounded-lg bg-zinc-900 border border-zinc-700/80 w-full max-w-2xl">
                
                {/* Image / Preview */}
                <div className="relative aspect-video w-full bg-zinc-800 rounded mb-3 overflow-hidden group">
                  {activeProject.image ? (
                    <Image 
                      src={activeProject.image} 
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 650px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-zinc-500 font-mono text-center">
                      <FileCode size={36} className="text-zinc-600 mb-2" />
                      <span className="text-xs text-zinc-400">[Project Preview: {activeProject.title}]</span>
                    </div>
                  )}
                  
                  {/* Desktop Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center gap-4">
                    {activeProject.link && (
                      <a 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        href={activeProject.link} 
                        className="p-2.5 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                    {activeProject.github && (
                      <a 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        href={activeProject.github} 
                        className="p-2.5 bg-zinc-800 text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                        title="View GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Mobile & Touch Action Buttons (Always clearly accessible) */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
                    <span className="text-[11px] text-zinc-400">build: success</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {activeProject.link && (
                      <a 
                        href={activeProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-green-500/15 text-green-400 hover:bg-green-500/25 border border-green-500/30 text-xs font-semibold active:scale-95 transition-all"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {activeProject.github && (
                      <a 
                        href={activeProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 text-xs font-semibold active:scale-95 transition-all"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Closing Brace */}
            <div className="flex gap-2 sm:gap-4 mt-2">
              <span className="text-zinc-700 select-none w-4 sm:w-5 text-right shrink-0">11</span>
              <span className="text-purple-400">{'}'}</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}