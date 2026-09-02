/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Mail, Github, Linkedin, Send, AlertCircle, 
  CheckCircle2, Wifi, X, Copy, Check, ArrowLeft, Wallet
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactTerminal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showCrypto, setShowCrypto] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const router = useRouter();

  const wallets = [
    { currency: 'BITCOIN', symbol: 'BTC', address: 'bc1qn3elluy6w0rlfj5zda3zag4wfsefq4knan2p93' },
    { currency: 'ETHEREUM', symbol: 'ETH', address: '0xfCf9437dF2b5A73728b840222F77F2D80D7AD2BE' },
    { currency: 'SOLANA', symbol: 'SOL', address: 'L5f8pZD3iPiVALCwhVEprXCk3zB3iMfz8fgmBXJHhFG' }, 
    { currency: 'BNB CHAIN', symbol: 'BNB', address: '0xfCf9437dF2b5A73728b840222F77F2D80D7AD2BE' },
    { currency: 'TRON', symbol: 'TRX', address: 'TAMVc7wE73TPmkVnMzGZmxjeWGkEzjcFVo' },
    { currency: 'POLYGON', symbol: 'MATIC', address: '0xfCf9437dF2b5A73728b840222F77F2D80D7AD2BE' },
  ];

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Simulate form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    
    // Simulate network delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="min-h-[100dvh] bg-black text-green-500 font-mono py-6 sm:py-10 md:py-16 px-3 sm:px-6 md:px-10 flex flex-col items-center justify-center relative overflow-x-hidden">
      
      {/* Background Matrix-like Rain */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_90%,black_100%),linear-gradient(to_right,#00ff00_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* TOP NAVIGATION BAR */}
      <div className="w-full max-w-5xl mb-3 sm:mb-6 flex items-center justify-between px-1 z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-green-400 hover:border-green-500/40 text-xs sm:text-sm active:scale-95 transition-all cursor-pointer"
            aria-label="Back to home"
          >
            <ArrowLeft size={16} className="text-green-500 shrink-0" />
            <span className="font-mono font-semibold">cd ..</span>
          </button>
          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-200 font-bold tracking-tight">~/contact</h2>
        </div>

        <button 
          onClick={() => router.push('/projects')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-green-400 hover:border-green-500/40 text-xs sm:text-sm active:scale-95 transition-all cursor-pointer"
        >
          <span className="hidden min-[450px]:inline">./view_projects.sh</span>
          <span className="min-[450px]:hidden">projects</span>
        </button>
      </div>

      <div className="w-full max-w-5xl z-10">
        
        {/* Terminal Header */}
        <div className="bg-zinc-900 border-t border-x border-zinc-800 rounded-t-lg px-3 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => router.push('/')} 
              className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-80 transition-opacity cursor-pointer"
              title="Return home (cd ~)"
              aria-label="Return to home"
            />
            <button 
              onClick={() => router.push('/projects')} 
              className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-80 transition-opacity cursor-pointer"
              title="View projects (cd ~/projects)"
              aria-label="View projects"
            />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[11px] sm:text-xs text-zinc-400 flex items-center gap-2">
            <Wifi size={12} className="text-green-500 animate-pulse" />
            <span className="tracking-wide">SECURE_UPLINK_V2.0</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-b-lg shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[310px_1fr]">
          
          {/* LEFT PANEL: Social "Ports" */}
          <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-4 sm:p-6 bg-zinc-900/30 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-zinc-400 text-xs font-bold mb-4 sm:mb-6 tracking-widest uppercase">
                // Open_Ports
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {/* GitHub */}
                <a 
                  href="https://github.com/Urex014" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-xs sm:text-sm text-zinc-400 hover:text-green-400 transition-colors cursor-pointer py-1"
                >
                  <Github size={16} className="shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">ssh github.com</span>
                  <span className="ml-auto text-[10px] text-zinc-600 sm:opacity-0 group-hover:opacity-100 shrink-0">22</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/amarachukwu-dev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 text-xs sm:text-sm text-zinc-400 hover:text-blue-400 transition-colors cursor-pointer py-1"
                >
                  <Linkedin size={16} className="shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">https linkedin.com</span>
                  <span className="ml-auto text-[10px] text-zinc-600 sm:opacity-0 group-hover:opacity-100 shrink-0">443</span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:amarachukwuonuoha22@gmail.com" 
                  className="group flex items-center gap-3 text-xs sm:text-sm text-zinc-400 hover:text-yellow-400 transition-colors cursor-pointer py-1 min-w-0"
                >
                  <Mail size={16} className="shrink-0" />
                  <span className="truncate group-hover:translate-x-1 transition-transform">mailto:amarachukwu...</span>
                  <span className="ml-auto text-[10px] text-zinc-600 sm:opacity-0 group-hover:opacity-100 shrink-0">25</span>
                </a>
              </div>
            </div>

            {/* System Status Mock */}
            <div className="pt-4 border-t border-zinc-800/80">
              <div className="mb-3 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                // System_Resources
              </div>

              <div className="bg-black/40 border border-zinc-800 p-3 sm:p-4 rounded-md relative overflow-hidden group">
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>

                {/* Status Text */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-amber-500 font-mono flex items-center gap-1.5">
                    <AlertCircle size={12} />
                    CAFFEINE_LEVEL
                  </span>
                  <span className="text-xs text-amber-500 animate-pulse font-semibold">CRITICAL</span>
                </div>

                {/* Progress Bar Visual */}
                <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-3.5 overflow-hidden">
                  <div className="h-full bg-amber-500 w-[15%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                </div>

                {/* Support Button */}
                <button 
                  onClick={() => setShowCrypto(true)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-amber-500/10 border border-amber-500/50 text-amber-500 text-xs font-bold hover:bg-amber-500 hover:text-black active:scale-[0.98] transition-all duration-200 uppercase tracking-wide cursor-pointer rounded"
                >
                  <Wallet size={14} />
                  <span>[ SUPPORT_WITH_CRYPTO ]</span>
                </button>
              </div>

              {/* Status Lines */}
              <div className="mt-4 text-[10px] text-zinc-600 space-y-1 font-mono">
                <div className="flex justify-between">
                  <span>UPTIME:</span>
                  <span className="text-zinc-400">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>LOCATION:</span>
                  <span className="text-zinc-400">EARTH-1</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Input Stream */}
          <div className="p-4 sm:p-8 md:p-10 relative flex flex-col justify-center">
            
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 max-w-lg w-full">
              
              {/* Header Text */}
              <div className="font-mono text-xs sm:text-sm text-zinc-400 space-y-1">
                <p>INITIATING HANDSHAKE PROTOCOL...</p>
                <p>ESTABLISHING SECURE CONNECTION...</p>
                <p className="text-green-500 font-semibold">ACCESS GRANTED.</p>
              </div>

              {/* Name Input - text-base on mobile prevents automatic iOS Safari zoom */}
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500 text-xs">➜</span>
                  <label htmlFor="sender-name" className="text-xs text-zinc-500 uppercase tracking-wider cursor-pointer">
                    sender_identity
                  </label>
                </div>
                <input 
                  id="sender-name"
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-green-500 py-2 text-base sm:text-sm text-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-700"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500 text-xs">➜</span>
                  <label htmlFor="sender-email" className="text-xs text-zinc-500 uppercase tracking-wider cursor-pointer">
                    return_address
                  </label>
                </div>
                <input 
                  id="sender-email"
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-green-500 py-2 text-base sm:text-sm text-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-700"
                  placeholder="name@domain.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500 text-xs">➜</span>
                  <label htmlFor="sender-msg" className="text-xs text-zinc-500 uppercase tracking-wider cursor-pointer">
                    transmission_payload
                  </label>
                </div>
                <textarea 
                  id="sender-msg"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-green-500 py-2 text-base sm:text-sm text-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-700 resize-none"
                  placeholder="Enter your message data..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="relative group w-full overflow-hidden mt-2 sm:mt-4 px-6 py-3.5 bg-zinc-900 border border-zinc-700 text-green-500 hover:text-black hover:bg-green-500 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded text-xs sm:text-sm"
              >
                <div className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wider">
                  {status === 'idle' && (
                    <>
                      <span>[ EXECUTE_TRANSMISSION ]</span>
                      <Send size={15} />
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <span>UPLOADING_PACKETS...</span>
                      <Wifi size={15} className="animate-spin" />
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <span>TRANSMISSION_COMPLETE</span>
                      <CheckCircle2 size={15} />
                    </>
                  )}
                </div>
              </button>

            </form>

            {/* Success Overlay Animation */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center text-green-500 font-mono z-20 p-4"
                >
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="border border-green-500 p-6 sm:p-8 rounded-lg text-center max-w-xs"
                  >
                    <CheckCircle2 size={40} className="mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-1">SUCCESS</h3>
                    <p className="text-xs text-green-400/80">Packet received by server.</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* --- CRYPTO MODAL OVERLAY --- */}
      <AnimatePresence>
        {showCrypto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowCrypto(false);
            }}
          >
            {/* Modal Window */}
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="w-full max-w-md bg-zinc-950 border border-amber-500/50 rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.2)] overflow-hidden flex flex-col max-h-[85dvh]"
            >
              
              {/* Modal Header */}
              <div className="bg-amber-500/10 border-b border-amber-500/20 p-3 sm:p-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 text-amber-500">
                  <Terminal size={16} />
                  <span className="text-xs sm:text-sm font-bold tracking-widest">SECURE_WALLET_UPLINK</span>
                </div>
                <button 
                  onClick={() => setShowCrypto(false)}
                  className="text-amber-500 hover:text-amber-300 p-1 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-y-auto">
                <p className="text-[11px] sm:text-xs text-zinc-500 font-mono mb-2">
                   SELECT_CURRENCY_PROTOCOL<br/>
                   INITIATING_TRANSFER_SEQUENCE...
                </p>

                {wallets.map((wallet) => (
                  <div key={wallet.symbol} className="bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 rounded p-2.5 sm:p-3 transition-colors group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-zinc-300 group-hover:text-amber-500 transition-colors">
                        {wallet.currency} <span className="text-[10px] bg-zinc-800 px-1 rounded ml-1 text-zinc-400">{wallet.symbol}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-black rounded border border-zinc-800 p-2">
                      <code className="text-[10px] sm:text-xs text-zinc-400 font-mono truncate flex-1 select-all">
                        {wallet.address}
                      </code>
                      
                      <button
                        onClick={() => copyToClipboard(wallet.address, wallet.symbol)}
                        className="p-1.5 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white shrink-0 active:scale-90 cursor-pointer"
                        title="Copy Address"
                        aria-label={`Copy ${wallet.currency} address`}
                      >
                        {copiedKey === wallet.symbol ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}

                <div className="mt-4 pt-3 border-t border-zinc-800 text-center">
                  <p className="text-[10px] text-zinc-600 font-mono">
                    // TRANSACTIONS_ARE_IRREVERSIBLE<br/>
                    // VERIFY_ADDRESS_BEFORE_SENDING
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}