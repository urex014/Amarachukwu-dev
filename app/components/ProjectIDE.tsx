/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Github, ExternalLink, ChevronRight, ChevronDown, Menu, ArrowLeft, Router } from 'lucide-react';
import {useRouter} from 'next/navigation';

// --- DATA: Your Projects ---
const projects = [
  {
    id: 'proj1',
    filename: 'Resumify.tsx',
    title: 'Automated Job Applications',
    description: 'A tool to automate job applications by sending emails to recruiters while you sleep',
    tech: ['Next.js', 'TypeScript', 'Express', 'Tailwind'],
    link: '#',
    github: 'https://github.com/urex014',
    image: '/Resumify.png' 
  },
  {
    id: 'proj2',
    filename: 'Cryptic',
    title: 'VTU',
    description: 'Buy utilities with crypto and fiat. No need for exchanges',
    tech: ['Next.js', 'Typescript'],
    link: 'https://cryptic-rho-ten.vercel.app/',
    github: 'https://github.com/urex014',
    image: '/cryptic.png'
  },
  {
    id: 'proj3',
    filename: 'PeerLink',
    title: ' p2p market Place',
    description: 'A p2p Marketplace with flexibility.',
    tech: ['Next.js', 'Typescript', 'Express', 'Supabase'],
    link: '#',
    github: 'https://github.com/urex014',
    image: '/peerLink.png'
  },
  {
    id:'proj4',
    filename:'cephas',
    title: 'Brand Page',
    image: '/cephas.png',
    description:'A website for a cloth brand',
    tech: ['Next.js', 'Typescript']
  }
];

export default function ProjectIDE() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isTreeOpen, setIsTreeOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter()

  return (
    <section className="min-h-screen bg-black text-gray-400 font-mono py-10 md:py-20 px-2 md:px-10 flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="w-full max-w-6xl mb-4 md:mb-8 flex items-center justify-between px-2">
        <div className="flex items-center gap-2 md:gap-4">
          <span onClick={()=>router.push('/')} className="text-green-500 text-lg md:text-xl"><ArrowLeft className='w-20 h-10' /></span>
          <h2 className="text-xl md:text-3xl text-gray-200 font-bold">~/projects</h2>
        </div>
      </div>

      {/* IDE WINDOW CONTAINER */}
      <div className="w-full max-w-6xl h-[85vh] md:h-[600px] bg-[#1e1e1e] border border-zinc-800 rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
        
        {/* --- LEFT SIDEBAR (Desktop: Always visible | Mobile: Hidden) --- */}
        <div className="hidden md:flex w-64 flex-col border-r border-zinc-800 bg-[#181818]">
          <div className="p-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Explorer</div>
          
          <div 
            className="flex items-center gap-1 px-3 py-1 text-gray-300 hover:bg-zinc-800 cursor-pointer select-none"
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
                        flex items-center gap-2 px-6 py-1.5 cursor-pointer text-sm transition-colors
                        ${activeProject.id === project.id 
                          ? 'bg-[#37373d] text-white border-l-2 border-green-500' 
                          : 'text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200 border-l-2 border-transparent'}
                      `}
                    >
                      <FileCode size={14} className={
                        project.filename.endsWith('tsx') ? 'text-blue-400' :
                        project.filename.endsWith('py') ? 'text-yellow-400' : 
                        'text-orange-400'
                      } />
                      {project.filename}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- MAIN EDITOR AREA --- */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          
          {/* Scrollable Tabs for Mobile & Desktop */}
          <div className="flex bg-[#181818] overflow-x-auto scrollbar-hide border-b border-zinc-800">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`
                  flex items-center gap-2 px-4 py-3 md:py-2.5 text-xs md:text-sm min-w-fit md:min-w-[140px] border-r border-zinc-800 cursor-pointer select-none whitespace-nowrap
                  ${activeProject.id === project.id ? 'bg-[#1e1e1e] text-white border-t-2 border-t-green-500' : 'text-gray-500 hover:bg-[#2a2d2e]'}
                `}
              >
                <FileCode size={14} className={
                    project.filename.endsWith('tsx') ? 'text-blue-400' :
                    project.filename.endsWith('py') ? 'text-yellow-400' : 
                    'text-orange-400'
                  } />
                {project.filename}
              </div>
            ))}
          </div>

          {/* Breadcrumbs (Hidden on tiny screens) */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs text-gray-500 border-b border-zinc-800">
            <span>portfolio</span>
            <ChevronRight size={10} />
            <span>src</span>
            <ChevronRight size={10} />
            <span className="text-gray-300">{activeProject.filename}</span>
          </div>

          {/* Code Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-xs md:text-sm leading-relaxed">
            
            {/* Line 1 */}
            <div className="flex gap-2 md:gap-4">
              <span className="text-zinc-700 select-none w-4 text-right">1</span>
              <span className="text-green-600">/**</span>
            </div>
            
            {/* Line 2 */}
            <div className="flex gap-2 md:gap-4">
              <span className="text-zinc-700 select-none w-4 text-right">2</span>
              <span className="text-green-600 flex flex-wrap gap-1">
                * <span className="text-white font-bold">{activeProject.title}</span>
              </span>
            </div>
            
            {/* Line 3: Description (With Word Break) */}
            <div className="flex gap-2 md:gap-4">
              <span className="text-zinc-700 select-none w-4 text-right">3</span>
              <span className="text-green-600 break-words w-full">
                * {activeProject.description}
              </span>
            </div>
            
            {/* Line 4 */}
            <div className="flex gap-2 md:gap-4">
              <span className="text-zinc-700 select-none w-4 text-right">4</span>
              <span className="text-green-600">*/</span>
            </div>

            <div className="h-4"></div>

            {/* Line 6: Imports (Responsive Wrap) */}
            <div className="flex gap-2 md:gap-4">
              <span className="text-zinc-700 select-none w-4 text-right">6</span>
              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                <span className="text-purple-400">import</span>
                <span className="text-yellow-300">{`{ ${activeProject.tech.join(', ')} }`}</span>
                <span className="text-purple-400">from</span>
                <span className="text-orange-300">'@tech-stack'</span>;
              </div>
            </div>

            <div className="h-6 md:h-8"></div>

            {/* Line 9: Export Statement */}
            <div className="flex gap-2 md:gap-4">
              <span className="text-zinc-700 select-none w-4 text-right">9</span>
              <span className="text-purple-400 whitespace-nowrap">
                export default <span className="text-blue-400">function</span> <span className="text-yellow-300">Preview</span>() {'{'}
              </span>
            </div>

            {/* Rendered Project Preview */}
            <div className="flex gap-2 md:gap-4 mt-2">
              <span className="text-zinc-700 select-none w-4 text-right">10</span>
              
              {/* Responsive Container for Image */}
              <div className="ml-2 md:ml-8 p-2 md:p-4 rounded-lg bg-zinc-900 border border-zinc-700 w-full max-w-2xl">
                
                {/* Image Placeholder */}
                <div className="relative aspect-video w-full bg-zinc-800 rounded mb-4 overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                     {/* Use Next.js Image component here */}
                     <Image 
                      src={activeProject.image} 
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                    />
                     
                     [Project Screenshot: {activeProject.title}]
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={activeProject.link} className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                    <a href={activeProject.github} className="p-2 bg-zinc-800 text-white rounded-full hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <button className="text-xs bg-green-600/20 text-green-400 px-3 py-1 rounded hover:bg-green-600/30 transition-colors">
                    npm run start
                  </button>
                </div>

              </div>
            </div>

            {/* Closing Brace */}
            <div className="flex gap-2 md:gap-4 mt-2">
              <span className="text-zinc-700 select-none w-4 text-right">11</span>
              <span className="text-purple-400">{'}'}</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}