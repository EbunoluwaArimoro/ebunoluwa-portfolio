"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Link to your Google Calendar Appointment Schedule
  const bookingLink = "https://calendar.app.google/7MTBuWDHwZNwZVQv7";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY > 10 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`relative flex justify-between items-center px-6 md:px-8 py-3 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isScrolled ? 'bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-[2rem] w-[90%] md:w-auto md:min-w-[700px]' : 'bg-transparent w-full md:w-[90%] border-transparent'}`}>
        
        {/* LOGO */}
        <Link href="/" className="font-serif tracking-widest font-bold uppercase text-white mr-8 z-20">
          Ebun.
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-xs font-medium text-gray-300 uppercase tracking-wide">
          <Link href="/jobapay" className="hover:text-white transition-colors">Jobapay</Link>
          <Link href="/engineering" className="hover:text-white transition-colors">Engineering</Link>
          <Link href="/community" className="hover:text-white transition-colors">Community</Link>
          <Link href="/code-to-lead" className="hover:text-white transition-colors">Code to Lead</Link>
        </div>
        
        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4 z-20">
          <Link 
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all border ${isScrolled ? 'bg-white text-charcoal hover:bg-gray-200 border-transparent' : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-charcoal'}`}
          >
            {isScrolled ? "Connect" : "Let's Talk"}
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-white p-2" 
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: -20, scale: 0.95 }} 
              className="absolute top-full left-0 right-0 mt-4 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 text-sm font-medium text-gray-300 uppercase tracking-wide text-center">
                <Link href="/jobapay" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Jobapay</Link>
                <Link href="/engineering" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Engineering</Link>
                <Link href="/community" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Community</Link>
                <Link href="/code-to-lead" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Code to Lead</Link>
                
                <Link 
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-charcoal py-3 rounded-xl font-bold mt-2"
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}