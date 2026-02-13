/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Mail, Github, Linkedin, Send, AlertCircle, 
  CheckCircle2, Wifi, Coffee, X, Copy, Check, Wallet 
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
  const router = useRouter()


  const wallets = [
  { currency: 'BITCOIN', symbol: 'BTC', address: 'bc1qn3elluy6w0rlfj5zda3zag4wfsefq4knan2p93' },
  { currency: 'ETHEREUM', symbol: 'ETH', address: '0xfCf9437dF2b5A73728b840222F77F2D80D7AD2BE' },
  { currency: 'SOLANA', symbol: 'SOL', address: 'L5f8pZD3iPiVALCwhVEprXCk3zB3iMfz8fgmBXJHhFG' }, 
  {currency: 'BNB CHAIN', symbol: 'BNB', address: '0xfCf9437dF2b5A73728b840222F77F2D80D7AD2BE' },
  {currency: 'TRON', symbol: 'TRX', address: 'TAMVc7wE73TPmkVnMzGZmxjeWGkEzjcFVo'},
  {currency: 'POLYGON', symbol: 'MATIC', address: '0xfCf9437dF2b5A73728b840222F77F2D80D7AD2BE' },
  // {currency: 'USDT', symbol: 'USDT', address: 'TR5cxtuqWKNhLDJWXscZwig1un81wQQ41S' },
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
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-black text-green-500 font-mono py-20 px-4 md:px-10 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Matrix-like Rain (Optional simplified version) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_90%,black_100%),linear-gradient(to_right,#00ff00_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="w-full max-w-5xl z-10">
        
        {/* Terminal Header */}
        <div className="bg-zinc-900 border-t border-x border-zinc-800 rounded-t-lg p-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div onClick={()=>router.push('/')} className="w-3 h-3 cursor-pointer rounded-full bg-red-500/50"></div>
            <div onClick={()=>router.push('/projects')} className="w-3 cursor-pointer h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="text-xs text-zinc-500 flex items-center gap-2">
            <Wifi size={12} className="text-green-500 animate-pulse" />
            SECURE_UPLINK_V2.0
          </div>
        </div>

        {/* Terminal Body */}
        <div className="bg-black/80 backdrop-blur-sm border border-zinc-800 rounded-b-lg shadow-2xl overflow-hidden grid md:grid-cols-[300px_1fr]">
          
          {/* LEFT PANEL: Social "Ports" */}
          <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-6 bg-zinc-900/30">
            <h3 className="text-zinc-400 text-xs font-bold mb-6 tracking-widest uppercase">
              // Open_Ports
            </h3>

            <div className="space-y-4">
              {/* GitHub */}
              <a href="https://github.com/Urex014" target="_blank" className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-green-400 transition-colors cursor-pointer">
                <Github size={16} />
                <span className="group-hover:translate-x-1 transition-transform">ssh github.com</span>
                <span className="ml-auto text-[10px] text-zinc-700 opacity-0 group-hover:opacity-100">22</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/amarachukwu-dev" target="_blank" className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-blue-400 transition-colors cursor-pointer">
                <Linkedin size={16} />
                <span className="group-hover:translate-x-1 transition-transform">https linkedin.com</span>
                <span className="ml-auto text-[10px] text-zinc-700 opacity-0 group-hover:opacity-100">443</span>
              </a>

              {/* Email */}
              <a href="mailto:amarachukwuonuoha22@gmail.com" className="group flex items-center gap-3 text-sm text-zinc-500 hover:text-yellow-400 transition-colors cursor-pointer">
                <Mail size={16} />
                <span className="group-hover:translate-x-1 transition-transform">mailto:amarachukwuonuoha...</span>
                <span className="ml-auto text-[10px] text-zinc-700 opacity-0 group-hover:opacity-100">25</span>
              </a>
            </div>

            {/* System Status Mock */}
            
          <div className="mt-auto pt-6 border-t border-zinc-800">
            
            {/* Header */}
            <div className="mb-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              // System_Resources
            </div>

            <div className="bg-black/40 border border-zinc-800 p-4 rounded-md relative overflow-hidden group">
              
              {/* Scanline effect for this box specifically */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>

              {/* Status Text */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-amber-500 font-mono flex items-center gap-2">
                  <AlertCircle size={12} />
                  CAFFEINE_LEVEL
                </span>
                <span className="text-xs text-amber-500 animate-pulse">CRITICAL</span>
              </div>

              {/* Progress Bar Visual */}
              <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-amber-500 w-[15%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              </div>

              {/* The Button */}
              <a 
                href="#" 
                
                aria-disabled
                rel="noopener noreferrer"
                className="flex items-center line-through justify-center gap-2 w-full py-2 bg-amber-500/10 border  border-amber-500/50 text-amber-500 text-xs font-bold  transition-all duration-300 uppercase tracking-wide"
              >
                <Coffee size={14} />
                <span>[ SUPPORT_MY_WORK]</span>
              </a>
              <a 
                onClick={()=>setShowCrypto(true)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-amber-500/10 border border-amber-500/50 text-amber-500 text-xs font-bold hover:bg-amber-500 hover:text-black transition-all duration-300 uppercase tracking-wide"
              >
                <Coffee size={14} />
                <span>[ SUPPORT_WITH_CRYPTO ]</span>
              </a>

            </div>

            {/* Existing Status Lines (Moved below) */}
            <div className="mt-6 text-[10px] text-zinc-600 space-y-2 font-mono">
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
          <div className="p-6 md:p-10 relative">
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              
              {/* Header Text */}
              <div className="mb-8 font-mono text-sm text-zinc-400">
                <p> INITIATING HANDSHAKE PROTOCOL...</p>
                <p> ESTABLISHING SECURE CONNECTION...</p>
                <p className="text-green-500"> ACCESS GRANTED.</p>
              </div>

              {/* Name Input */}
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500">➜</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">sender_identity</span>
                </div>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-green-500 py-2 text-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-700"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500">➜</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">return_address</span>
                </div>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-green-500 py-2 text-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-700"
                  placeholder="name@domain.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500">➜</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">transmission_payload</span>
                </div>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-zinc-800 focus:border-green-500 py-2 text-zinc-300 focus:outline-none transition-colors placeholder:text-zinc-700 resize-none"
                  placeholder="Enter your message data..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === 'sending' || status === 'success'}
                className="relative group w-full overflow-hidden mt-4 px-6 py-3 bg-zinc-900 border border-zinc-700 text-green-500 hover:text-black hover:bg-green-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wider">
                    {status === 'idle' && (
                      <>
                        <span>[ EXECUTE_TRANSMISSION ]</span>
                        <Send size={16} />
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <span>UPLOADING_PACKETS...</span>
                        <Wifi size={16} className="animate-spin" />
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <span>TRANSMISSION_COMPLETE</span>
                        <CheckCircle2 size={16} />
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
                  className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-green-500 font-mono z-20"
                >
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="border-2 border-green-500 p-8 rounded-lg text-center"
                  >
                    <CheckCircle2 size={48} className="mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">SUCCESS</h3>
                    <p className="text-sm text-green-400/80">Packet received by server.</p>
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowCrypto(false);
          }}
        >
          {/* Modal Window */}
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            // CHANGED: Added 'flex flex-col' and 'max-h-[85vh]'
            className="w-full max-w-md bg-zinc-950 border border-amber-500/50 rounded-lg shadow-[0_0_30px_rgba(245,158,11,0.2)] overflow-hidden flex flex-col max-h-[85vh]"
          >
            
            {/* Modal Header (Stays Fixed at Top) */}
            <div className="bg-amber-500/10 border-b border-amber-500/20 p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 text-amber-500">
                <Terminal size={16} />
                <span className="text-sm font-bold tracking-widest">SECURE_WALLET_UPLINK</span>
              </div>
              <button 
                onClick={() => setShowCrypto(false)}
                className="text-amber-500 hover:text-amber-300 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            {/* CHANGED: Added 'overflow-y-auto' */}
            <div className="p-6 space-y-4 overflow-y-auto">
              <p className="text-xs text-zinc-500 font-mono mb-4">
                 SELECT_CURRENCY_PROTOCOL<br/>
                 INITIATING_TRANSFER_SEQUENCE...
              </p>

              {wallets.map((wallet) => (
                <div key={wallet.symbol} className="bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/50 rounded p-3 transition-colors group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-amber-500 transition-colors">
                      {wallet.currency} <span className="text-[10px] bg-zinc-800 px-1 rounded ml-1 text-zinc-500">{wallet.symbol}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-black rounded border border-zinc-800 p-2">
                    <code className="text-[10px] md:text-xs text-zinc-400 font-mono truncate flex-1 select-all">
                      {wallet.address}
                    </code>
                    
                    <button
                      onClick={() => copyToClipboard(wallet.address, wallet.symbol)}
                      className="p-1.5 hover:bg-zinc-800 rounded transition-colors text-zinc-500 hover:text-white shrink-0"
                      title="Copy Address"
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

              <div className="mt-6 pt-4 border-t border-zinc-800 text-center">
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