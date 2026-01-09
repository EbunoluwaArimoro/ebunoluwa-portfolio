"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, Mic, Heart, Target, TrendingUp, ArrowRight, Layout, Terminal, PenTool, ExternalLink, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

// --- HELPER COMPONENT: BALANCED VIDEO CARD (Local File Version) ---
const VideoCard = () => {
  const videoSource = "/herdacity-video.mp4"; 
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <Link href="https://herdacity.com/events" target="_blank" className="block group">
      <div className="aspect-video relative rounded-lg overflow-hidden shadow-sm bg-charcoal">
        
        {/* 1. MOBILE VERSION (Full Color / No Bars) */}
        <div className="md:hidden w-full h-full relative">
          <video
            src={videoSource}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline 
          />
          {/* TEXT OVERLAY FOR MOBILE */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 z-10 pointer-events-none text-left">
              <span className="text-white text-xs font-mono uppercase tracking-widest mb-2 font-bold drop-shadow-md">Dec 2025</span>
              <h3 className="text-white font-serif text-2xl drop-shadow-md">Becoming Her</h3>
              <p className="text-gray-100 text-sm mt-2 leading-relaxed font-medium drop-shadow-md">
                  End of year strategic goal-setting session with our members in Lagos, Nigeria.
              </p>
          </div>
        </div>

        {/* 2. DESKTOP VERSION */}
        <div 
          className="hidden md:block w-full h-full relative cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out absolute inset-0 z-10">
            <video
              ref={videoRef}
              src={videoSource}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            />
          </div>

          {/* Static Keyframe Image */}
          <div className="absolute inset-0 z-0 group-hover:opacity-0 transition-opacity duration-700">
            <Image 
                src="/herdacity-video-keyframe.jpg" 
                alt="Community Video"
                fill
                className="object-cover"
            />
          </div>

          {/* EVENT TEXT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 z-10 pointer-events-none text-left">
              <span className="text-white text-xs font-mono uppercase tracking-widest mb-2 font-bold drop-shadow-md group-hover:text-brand-pink transition-colors">Dec 2025</span>
              <h3 className="text-white font-serif text-2xl drop-shadow-md group-hover:text-brand-pink transition-colors">Becoming Her</h3>
              <p className="text-gray-100 text-sm mt-2 leading-relaxed font-medium drop-shadow-md">
                  End of year strategic goal-setting session with our members in Lagos, Nigeria.
              </p>
              <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.2em] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                View Gallery <ArrowRight size={12}/>
              </div>
          </div>
        </div>
      </div>
    </Link>
  );
};


export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white text-charcoal font-sans selection:bg-brand-pink selection:text-white antialiased transform-gpu">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 md:px-12 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-charcoal/5 will-change-transform">
        <Link href="/" className="font-serif font-bold tracking-widest uppercase text-charcoal hover:opacity-70 transition-opacity">
          Ebun.
        </Link>
        <Link href="/" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wide border border-charcoal/20 px-5 py-2 rounded-full hover:bg-charcoal hover:text-white transition-all">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
        </Link>
      </nav>

      {/* --- HERO --- */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-pink/20 bg-brand-pink/5 text-brand-pink mb-6">
            <Heart size={12} className="fill-brand-pink"/>
            <span className="text-[10px] uppercase tracking-widest font-bold">The HERdacity Network</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-charcoal">
            Engineering <br/>
            <span className="text-brand-pink">Social Capital.</span>
          </h1>
          
          <div className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl space-y-6">
            <p>
              Talent is distributed, but opportunity is not. 
            </p>
            <p>
              We founded <strong>The HERdacity Network</strong> to bridge that gap. <br />
              We focus on the "Human Operating System": Confidence, Personal Branding, and Leadership Visibility.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- IMPACT METRICS --- */}
      <section className="py-20 px-6 md:px-12 bg-sand border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-left">
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-pink">
                        <TrendingUp size={24}/>
                    </div>
                    <h3 className="font-serif text-2xl">Career Velocity</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Technical skills get you in the room. Social capital keeps you there. We teach women how to navigate corporate politics and negotiate value.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-purple">
                        <Mic size={24}/>
                    </div>
                    <h3 className="font-serif text-2xl">Visibility</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        We push our members to speak, write, and publish. If you are building in the dark, you are not building authority.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-charcoal">
                        <Users size={24}/>
                    </div>
                    <h3 className="font-serif text-2xl">The Network</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Curated access to mentors, peers, and opportunities. A high-trust environment for high-performance women.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- RECENT EVENTS --- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12 text-left">
                <div>
                    <h2 className="font-serif text-4xl mb-2">IRL Experiences.</h2>
                </div>
                <Link href="https://herdacity.com/events" target="_blank" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:text-brand-pink transition-colors">
                    Explore Events <ExternalLink size={16}/>
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                
                {/* CARD 1: VIDEO (Wraps inside Component above) */}
                <VideoCard />

                {/* CARD 2: ONLINE ACADEMY (Full Color Image) */}
                <Link href="https://herdacity.com/academy" target="_blank" className="group relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg block">
                      <Image 
                        src="/herdacity-community.jpg" 
                        alt="HERdacity Online Academy"
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ objectPosition: "50% 65%" }}
                    />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-left">
                        <span className="text-white text-xs font-mono uppercase tracking-widest mb-2 font-bold drop-shadow-md group-hover:text-brand-pink transition-colors">Online Academy</span>
                        <h3 className="text-white font-serif text-2xl drop-shadow-md group-hover:text-brand-pink transition-colors">The Knowledge Hub</h3>
                        <p className="text-gray-100 text-sm mt-2 leading-relaxed font-medium drop-shadow-md">
                            Access to our exclusive courses, career playbooks, and leadership resources.
                        </p>
                        <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.2em] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore Academy <ArrowRight size={12}/>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-brand-pink text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Join the Movement.</h2>
            <p className="text-white/90 mb-10 max-w-xl mx-auto text-lg font-medium">
                We are building the table so you don't have to ask for a seat.
            </p>
            <Link href="https://herdacity.com" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-pink font-bold rounded-full hover:bg-charcoal hover:text-white transition-all shadow-xl">
                Visit HERdacity.com <ArrowRight size={20}/>
            </Link>
        </div>
      </section>

      {/* --- FOOTER MENU (Alignment Fixed) --- */}
      <footer className="bg-white text-charcoal pt-20 pb-10 px-6 md:px-12 border-t border-charcoal/10 relative z-20">
        <div className="max-w-6xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-10 block text-center">Explore</span>
          
          <div className="flex flex-col items-start md:grid md:grid-cols-5 md:items-start gap-8 mb-16 text-left">
            <Link href="/" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Layout size={20}/> Home
            </Link>
            <Link href="/about" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Target size={20}/> About
            </Link>
            <Link href="/jobapay" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Layers size={20}/> Jobapay
            </Link>
            <Link href="/engineering" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <Terminal size={20}/> Engineering
            </Link>
            <Link href="/code-to-lead" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors">
              <PenTool size={20}/> Code to Lead
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-t border-charcoal/10 pt-12">
            <div className="flex flex-wrap justify-start gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-charcoal font-bold">
               <Link href="mailto:ebunarimoro@gmail.com" className="hover:text-brand-pink transition-colors">EMAIL</Link>
               <Link href="https://linkedin.com/in/ebunoluwa-arimoro" target="_blank" className="hover:text-brand-pink transition-colors">LINKEDIN</Link>
               <Link href="https://github.com/EbunoluwaArimoro/" target="_blank" className="hover:text-brand-pink transition-colors">GITHUB</Link>
               <Link href="https://ebunoluwa-arimoro-portfolio-website.webflow.io/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">PORTFOLIO</Link>
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