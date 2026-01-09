"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Target, Zap, ShieldCheck, Mail, Linkedin, Github, Layout, Layers, Terminal, Network, PenTool } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sand text-charcoal font-sans selection:bg-brand-pink selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 md:px-12 flex justify-between items-center bg-sand/90 backdrop-blur-md border-b border-charcoal/5">
        <Link href="/" className="font-serif font-bold tracking-widest uppercase text-charcoal">
          Ebun.
        </Link>
        <Link href="/" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wide border border-charcoal/20 px-5 py-2 rounded-full hover:bg-charcoal hover:text-white transition-all">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
        </Link>
      </nav>

      {/* --- HERO: THE NARRATIVE --- */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4 block">The Origin Story</span>
                <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 tracking-tighter">
                  From Auditing <br/>
                  to <span className="text-brand-pink">Architecting.</span>
                </h1>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  I didn’t start in tech. I started in <strong>Accounting</strong>—learning the language of operational integrity and risk. 
                </p>
            </motion.div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                 <Image 
                    src="/image_0.png" 
                    alt="Ebunoluwa Arimoro" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
      </section>

      {/* --- PHILOSOPHY: WHY IT MATTERS --- */}
      <section className="py-20 px-6 md:px-12 bg-white border-y border-charcoal/5">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl italic">"Accounting taught me that systems are only as good as their smallest control."</h2>
                <p className="text-lg text-gray-500 leading-relaxed font-light">
                    When I transitioned into Engineering, I brought that auditor's mindset with me. While most builders focus on the 'clean UI,' I focus on the <strong>operational plumbing</strong>. 
                </p>
                <p className="text-lg text-gray-500 leading-relaxed font-light">
                    Technology isn't just about code; it's about solving for infrastructure deficits and trust gaps. My background allows me to bridge the gap between business logic and technical execution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
                <div className="space-y-3">
                    <Target className="text-brand-pink" size={24}/>
                    <h3 className="font-bold uppercase tracking-widest text-xs">Mission</h3>
                    <p className="text-sm text-gray-500">To build the 'Operating Systems for Trust' that allow African ventures to scale without friction.</p>
                </div>
                <div className="space-y-3">
                    <Zap className="text-brand-purple" size={24}/>
                    <h3 className="font-bold uppercase tracking-widest text-xs">Method</h3>
                    <p className="text-sm text-gray-500">High-agency leadership combined with defensive, offline-first system architecture.</p>
                </div>
                <div className="space-y-3">
                    <ShieldCheck className="text-charcoal" size={24}/>
                    <h3 className="font-bold uppercase tracking-widest text-xs">Standard</h3>
                    <p className="text-sm text-gray-500">Reliability as the ultimate user experience. If it doesn't work under constraint, it doesn't work.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
              <h2 className="font-serif text-3xl md:text-5xl mb-8">Let’s build something inevitable.</h2>
              <p className="text-gray-400 mb-10 text-lg">Whether it's AI architecture, operational strategy, or leadership—I’m always open to high-impact collaborations.</p>
              <Link href="mailto:ebunarimoro@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pink text-white font-bold rounded-full hover:bg-white hover:text-charcoal transition-all">
                  Get in Touch <ArrowRight size={20}/>
              </Link>
          </div>
      </section>

      {/* --- FOOTER: WITH ABOUT ADDED --- */}
      {/* --- REFINED STACKED FOOTER (Light) --- */}
        <footer className="bg-white text-charcoal pt-20 pb-10 px-6 md:px-12 border-t border-charcoal/10 relative z-20">
  <div className="max-w-6xl mx-auto text-center md:text-left">
    <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-10 block">Explore</span>
    <div className="flex flex-col items-center md:grid md:grid-cols-5 md:items-start gap-8 mb-16">
      <Link href="/" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Layout size={20}/> Home</Link>
      <Link href="/jobapay-ai" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Layers size={20}/> Jobapay AI</Link>
      <Link href="/engineering" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Terminal size={20}/> Engineering</Link>
      <Link href="/community" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Network size={20}/> Community</Link>
      <Link href="/code-to-lead" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><PenTool size={20}/> Code to Lead</Link>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-charcoal/10 pt-12">
      <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-charcoal">
         <Link href="mailto:ebunarimoro@gmail.com" className="hover:text-brand-pink transition-colors font-bold">EMAIL</Link>
         <Link href="https://linkedin.com/in/ebunoluwa-arimoro" target="_blank" className="hover:text-brand-pink transition-colors font-bold">LINKEDIN</Link>
         <Link href="https://github.com/EbunoluwaArimoro/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">GITHUB</Link>
         <Link href="https://ebunoluwa-arimoro-portfolio-website.webflow.io/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">PORTFOLIO</Link>
      </div>
      <div className="text-[9px] text-charcoal font-mono tracking-widest uppercase md:ml-auto">© 2026 Ebunoluwa Arimoro.</div>
    </div>
  </div>
</footer>
    </main>
  );
}