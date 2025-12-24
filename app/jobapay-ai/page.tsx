"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, Server, ShieldCheck, Target, CheckCircle2, 
  ArrowRight, Cpu, Network, PenTool, Layout, Terminal, 
  ExternalLink, Layers 
} from "lucide-react";
import Link from "next/link";

export default function JobapayPage() {
  return (
    <main className="min-h-screen bg-sand text-charcoal font-sans selection:bg-brand-pink selection:text-white">
      
      {/* --- 1. NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 md:px-12 flex justify-between items-center bg-sand/90 backdrop-blur-md border-b border-charcoal/5">
        <Link href="/" className="font-serif font-bold tracking-widest uppercase text-charcoal hover:opacity-70 transition-opacity">
          Ebun.
        </Link>
        <Link href="/" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wide border border-charcoal/20 px-5 py-2 rounded-full hover:bg-charcoal hover:text-white transition-all">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
        </Link>
      </nav>

      {/* --- 2. HERO --- */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-charcoal/20 bg-white mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Active Venture</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-charcoal">
            The Operating System <br/>
            for <span className="text-gray-400">Service Trust.</span>
          </h1>
          
          <div className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl space-y-6">
            <p>
              <strong>The Reality:</strong> In 2025, I built a B2C marketplace connecting homeowners to artisans. The interface was clean, but the system failed.
            </p>
            <p>
              <strong>The Lesson:</strong> In Africa, "connecting" people isn't enough. The lack of standardized training and identity verification meant trust was impossible to automate via a simple UI.
            </p>
            <p>
              <strong>The Pivot:</strong> We pivoted to <strong>Infrastructure</strong>. We moved from B2C to B2B. We don't just connect service providers; we train, vet, and manage them using internal AI tools for large-scale Facility Managers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- 3. COMPARISON --- */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-300 bg-gray-100 opacity-70 grayscale hover:opacity-100 transition-opacity">
                <h3 className="font-serif text-2xl mb-4 text-gray-500 line-through">The Marketplace (Old)</h3>
                <ul className="space-y-3 text-gray-500">
                    <li className="flex items-center gap-2">❌ Open Listings</li>
                    <li className="flex items-center gap-2">❌ High Leakage (Bypassing Platform)</li>
                    <li className="flex items-center gap-2">❌ Inconsistent Quality</li>
                </ul>
            </div>

            <div className="p-8 rounded-2xl border border-brand-pink bg-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldCheck size={100}/>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-charcoal">The Infrastructure (New)</h3>
                <ul className="space-y-4 text-charcoal">
                    <li className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-green-600"/> 
                        <span><strong>Vertical Operations:</strong> We employ & train the staff.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-green-600"/> 
                        <span><strong>B2B Contracts:</strong> Targeting Facility Managers.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-green-600"/> 
                        <span><strong>AI Vetting:</strong> Automated background & reliability scoring.</span>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* --- 4. TECH STACK --- */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl mb-12">Engineered for Leakage-Proof Ops.</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl border border-gray-200 hover:border-brand-pink/30 transition-colors">
                    <Server size={32} className="text-brand-pink mb-4"/>
                    <h3 className="font-bold mb-2">Multi-Tenant SaaS</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Custom dashboard for Facility Managers to track deployed crews in real-time.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 hover:border-brand-pink/30 transition-colors">
                    <Cpu size={32} className="text-brand-purple mb-4"/>
                    <h3 className="font-bold mb-2">Internal AI Vetting</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Algorithms that parse artisan history to assign a "Reliability Score" before deployment.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 hover:border-brand-pink/30 transition-colors">
                    <ShieldCheck size={32} className="text-charcoal mb-4"/>
                    <h3 className="font-bold mb-2">Escrow Logic</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Leakage-proof payment flows where funds are held until job completion verification.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- 5. CONCLUSION --- */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">The Result.</h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                "We stopped trying to fix the market with a UI. We built the infrastructure to fix the service. Today, Jobapay powers facility operations for businesses that demand certainty."
            </p>
            <Link href="https://jobapay.ai" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-pink text-white font-bold rounded-full hover:bg-white hover:text-charcoal transition-all shadow-lg">
                See the Platform <ArrowRight size={20}/>
            </Link>
        </div>
      </section>

      {/* --- 6. CORRECTED FOOTER --- */}
      <footer className="bg-white text-charcoal pt-20 pb-10 px-6 md:px-12 border-t border-charcoal/10 relative z-20">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-10 block">Explore</span>
          
          <div className="flex flex-col items-center md:grid md:grid-cols-5 md:items-start gap-8 mb-16">
            <Link href="/" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Layout size={20}/> Home
            </Link>
            <Link href="/about" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Target size={20}/> About
            </Link>
            <Link href="/engineering" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Terminal size={20}/> Engineering
            </Link>
            <Link href="/community" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Network size={20}/> Community
            </Link>
            <Link href="/code-to-lead" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <PenTool size={20}/> Code to Lead
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-charcoal/10 pt-12">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-charcoal">
               <Link href="mailto:ebunarimoro@gmail.com" className="hover:text-brand-pink transition-colors font-bold">EMAIL</Link>
               <Link href="https://linkedin.com/in/ebunoluwa-arimoro" target="_blank" className="hover:text-brand-pink transition-colors font-bold">LINKEDIN</Link>
               <Link href="https://github.com/EbunoluwaArimoro/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">GITHUB</Link>
            </div>
            <div className="text-[9px] text-charcoal font-mono tracking-widest uppercase md:ml-auto">
              © 2026 Ebunoluwa Arimoro.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}