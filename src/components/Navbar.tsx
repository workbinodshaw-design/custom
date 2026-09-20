"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ease: [number, number, number, number] = [0.85, 0, 0.15, 1];

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease }}
        className="w-full flex items-center justify-between px-6 lg:px-16 py-6 absolute top-0 left-0 right-0 z-50"
      >
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm transition-transform duration-500 group-hover:scale-95">T</div>
            <span className="font-serif text-[22px] font-medium tracking-tight">TailorFind</span>
          </div>
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-black/70">
          <Link href="/" className="hover:text-black transition-colors">Find a Tailor</Link>
          <Link href="#" className="hover:text-black transition-colors">Services</Link>
          <Link href="/vendor" className="hover:text-black font-bold text-black transition-colors">For Tailors</Link>
          <Link href="#" className="hover:text-black transition-colors">How It Works</Link>
          <Link href="#" className="hover:text-black transition-colors">Stories</Link>
        </div>

        {/* Mobile Right Actions */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="text-black hover:opacity-70 transition"><Search className="w-5 h-5" strokeWidth={1.5} /></button>
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-black hover:opacity-70 transition"><Menu className="w-6 h-6" strokeWidth={1.5} /></button>
        </div>

        {/* Right Actions Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-[13px] font-medium text-black/70 cursor-pointer hover:text-black transition-colors">
            <Globe className="w-3.5 h-3.5" /> EN
          </div>
          <div className="w-[1px] h-4 bg-black/20 mx-1"></div>
          <button className="text-black/70 hover:text-black transition-colors"><Search className="w-4 h-4" strokeWidth={2} /></button>
          <div className="w-[1px] h-4 bg-black/20 mx-1"></div>
          <a href="#" className="text-[13px] font-medium text-black hover:opacity-70 transition">Sign In</a>
          <button className="bg-[#1C1A17] text-white px-6 py-2.5 rounded-full text-[13px] font-medium flex items-center gap-2 hover:bg-[#2A2825] hover:scale-[1.02] active:scale-95 transition-all duration-300 ml-1 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#F5F4F0] z-[100] flex flex-col p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1C1A17] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm">T</div>
                <span className="font-serif text-[22px] font-medium tracking-tight">TailorFind</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-black/5 rounded-full"><X className="w-5 h-5" /></button>
            </div>
            
            <div className="flex flex-col gap-6 text-[24px] font-serif font-medium mb-auto">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-black/5 pb-4">Find a Tailor</Link>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-black/5 pb-4">Services</Link>
              <Link href="/vendor" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-black/5 pb-4">For Tailors</Link>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-black/5 pb-4">How It Works</Link>
              <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-black/5 pb-4">Stories</Link>
            </div>
            
            <div className="flex flex-col gap-4 mt-8">
              <button className="w-full py-4 border border-black/10 rounded-full text-[14px] font-bold">Sign In</button>
              <button className="w-full py-4 bg-[#1C1A17] text-white rounded-full text-[14px] font-bold shadow-lg">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
