"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Terminal, 
  Cloud, 
  Target, 
  ShieldAlert, 
  GitMerge, 
  Zap, 
  Layout, 
  Network, 
  Cpu, 
  Layers, 
  ExternalLink, 
  ArrowRight,
  PenTool,
  Briefcase 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-charcoal text-sand font-sans selection:bg-brand-pink selection:text-white">
      
      {/* --- 1. NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 md:px-12 flex justify-between items-center bg-charcoal/90 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="font-serif font-bold tracking-widest uppercase text-white hover:opacity-70 transition-opacity">
          Ebun.
        </Link>
        <Link href="/" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wide border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-charcoal transition-all text-white">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
        </Link>
      </nav>

      {/* --- HERO --- */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-brand-pink mb-6">
            <Terminal size={12}/>
            <span className="text-[10px] uppercase tracking-widest font-bold">System Architecture</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-white">
            Building for <br/>
            <span className="text-gray-500">Constraint.</span>
          </h1>
          
          <div className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl space-y-6">
            <p>
              Silicon Valley engineering assumes infinite bandwidth and 100% uptime. <br/>
              <strong>African engineering assumes nothing.</strong>
            </p>
            <p>
              I build systems designed to survive. My engineering philosophy prioritizes offline-first architectures, optimistic UI updates, and rigorous error handling. I don't just optimize for speed; I optimize for continuity.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- THE STACK --- */}
      <section className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-white mb-12">Stack.</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-white text-charcoal shadow-2xl relative overflow-hidden group">
                    <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                        <div className="w-12 h-12 bg-brand-pink/10 flex items-center justify-center rounded-lg text-brand-pink">
                            <Layout size={24}/>
                        </div>
                        <h3 className="text-2xl font-serif font-bold">Frontend Systems</h3>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-lg">Next.js / React</span>
                                <span className="px-2 py-1 bg-gray-100 text-[10px] font-mono uppercase tracking-wide rounded text-gray-500">Expert</span>
                            </div>
                            <p className="text-sm text-gray-600">Server Components, SSR, Optimized Bundles.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-lg">Tailwind / Framer</span>
                                <span className="px-2 py-1 bg-gray-100 text-[10px] font-mono uppercase tracking-wide rounded text-gray-500">Architect</span>
                            </div>
                            <p className="text-sm text-gray-600">Design Systems, Micro-interactions, Responsive Layouts.</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-2xl bg-white text-charcoal shadow-2xl relative overflow-hidden group">
                    <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                        <div className="w-12 h-12 bg-brand-purple/10 flex items-center justify-center rounded-lg text-brand-purple">
                            <Cloud size={24}/>
                        </div>
                        <h3 className="text-2xl font-serif font-bold">Cloud & AI</h3>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-lg">AWS & Azure</span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-mono uppercase tracking-wide rounded flex items-center gap-1">Certified</span>
                            </div>
                            <p className="text-sm text-gray-600">Serverless Architecture, Lambda, Cognitive Services.</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-lg">Python / Node.js</span>
                                <span className="px-2 py-1 bg-gray-100 text-[10px] font-mono uppercase tracking-wide rounded text-gray-500">Backend</span>
                            </div>
                            <p className="text-sm text-gray-600">API Design, Data Processing Pipelines, Auth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- CORE PRINCIPLES --- */}
      <section className="py-24 px-6 md:px-12 bg-sand text-charcoal">
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3">
                    <h2 className="font-serif text-4xl mb-4">Core Principles.</h2>
                    <p className="text-gray-500 text-sm">How I make decisions when the PRD is blank.</p>
                </div>
                <div className="md:w-2/3 space-y-12">
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[40px] h-10 flex items-center justify-center rounded-lg bg-charcoal text-white">
                            <ShieldAlert size={20}/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Defensive by Default</h3>
                            <p className="text-gray-600 leading-relaxed">I assume the network will fail. I assume the API will time out. My code handles the "unhappy path" first. This is how you build trust in low-trust markets.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[40px] h-10 flex items-center justify-center rounded-lg bg-charcoal text-white">
                            <GitMerge size={20}/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Clarity over Cleverness</h3>
                            <p className="text-gray-600 leading-relaxed">Complex code is a liability. I write code that can be read, maintained, and scaled by junior engineers 6 months from now.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 min-w-[40px] h-10 flex items-center justify-center rounded-lg bg-charcoal text-white">
                            <Zap size={20}/>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Performance as UX</h3>
                            <p className="text-gray-600 leading-relaxed">In Africa, a 3MB bundle size isn't just slow; it's expensive for the user. I obsess over bundle optimization and caching strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-charcoal border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: VISUAL PROOF */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-pink to-brand-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-[16/10] bg-white/10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="/portfolio-img.png" 
                  alt="Infrastructure & Interface Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-sand text-charcoal px-4 py-2 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider shadow-xl">
                Live Deployments
              </div>
            </motion.div>

            {/* RIGHT: STRATEGIC COPY */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-brand-pink mb-6">
                <Cpu size={16}/>
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Technical Craft & Execution</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                Crafting Digital <br/>
                <span className="text-gray-500 italic text-3xl md:text-4xl">Distinction.</span>
              </h2>
              
              <div className="space-y-6 text-sand/80 text-lg font-light leading-relaxed mb-10">
                <p>
                  Engineering is my foundation; execution is my craft. I operate at the intersection of <strong>high-stakes design</strong> and <strong>technical performance</strong>.
                </p>
                <p>
                  I don't just build websites; I design digital identities. From boutique retail to industrial SaaS, I deliver the visual precision and operational rigor that modern brands demand.
                </p>
              </div>

              <Link 
                href="https://ebunoluwa-arimoro-portfolio-website.webflow.io/" 
                target="_blank"
                className="group px-8 py-4 border border-white/20 text-white font-bold rounded-full flex items-center gap-4 hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                View Full Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- FOOTER --- */}
      <footer className="bg-charcoal text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10 relative z-20">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-10 block">Explore</span>
          <div className="flex flex-col items-center md:grid md:grid-cols-5 md:items-start gap-8 mb-16">
            <Link href="/" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Layout size={20}/> Home</Link>
            <Link href="/about" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Target size={20}/> About</Link>
            <Link href="/jobapay" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Layers size={20}/> Jobapay</Link>
            <Link href="/community" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Network size={20}/> Community</Link>
            <Link href="/code-to-lead" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><PenTool size={20}/> Code to Lead</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-12">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white">
               <Link href="mailto:ebunarimoro@gmail.com" className="hover:text-brand-pink transition-colors font-bold">EMAIL</Link>
               <Link href="https://linkedin.com/in/ebunoluwa-arimoro" target="_blank" className="hover:text-brand-pink transition-colors font-bold">LINKEDIN</Link>
               <Link href="https://github.com/EbunoluwaArimoro/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">GITHUB</Link>
               <Link href="https://ebunoluwa-arimoro-portfolio-website.webflow.io/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">PORTFOLIO</Link>
            </div>
            <div className="text-[9px] text-white font-mono tracking-widest uppercase md:ml-auto">© 2026 Ebunoluwa Arimoro.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}