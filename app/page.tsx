"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Layers, PenTool, Mail, CheckCircle2, Cpu, Target, Network, Code2, ExternalLink, Layout, Server, Cloud, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// --- HELPER COMPONENT: FIXED VIDEO CARD (Local File) ---
const VideoCard = () => {
  // Pointing to the file we just optimized and pushed
  const videoSource = "/herdacity-video.mp4"; 
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div className="aspect-video relative rounded-lg overflow-hidden shadow-sm bg-charcoal">
      
      {/* 1. MOBILE VERSION - Auto Plays Always */}
      <div className="md:hidden w-full h-full relative">
        <video
          src={videoSource}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline // CRITICAL for iOS
        />
      </div>

      {/* 2. DESKTOP VERSION - Plays on Hover */}
      <div 
        className="hidden md:block w-full h-full relative cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full grayscale group-hover:grayscale-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out absolute inset-0 z-10">
          <video
            ref={videoRef}
            src={videoSource}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          />
        </div>

        {/* Static Keyframe Image (Visible until hover) */}
        <div className="absolute inset-0 z-0 group-hover:opacity-0 transition-opacity duration-700">
          <Image 
              src="/herdacity-video-keyframe.jpg" 
              alt="Community Video Keyframe"
              fill
              className="object-cover grayscale"
          />
        </div>
        
        {/* Play Prompt Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center z-20 pointer-events-none">
             <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest group-hover:opacity-0 transition-opacity">
                Hover to Play
             </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    
  // STATE: Header Transparency & Mobile Menu
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50 && isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <main className="min-h-screen bg-charcoal text-sand relative selection:bg-brand-pink selection:text-white overflow-hidden font-sans">
        
      {/* GLOBAL NOISE TEXTURE */}
      <div className="fixed inset-0 bg-noise z-50 pointer-events-none mix-blend-overlay opacity-50"></div>

      {/* --- VARIABLE HEADER --- */}
      <nav 
        className={`
            fixed top-0 left-0 right-0 z-[100] flex justify-center 
            transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${isScrolled ? 'py-4' : 'py-8'}
        `}
      >
        <div 
          className={`
            relative flex justify-between items-center px-6 md:px-8 py-3 
            transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${isScrolled 
              ? 'bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-[2rem] w-[90%] md:w-auto md:min-w-[700px]' 
              : 'bg-transparent w-full md:w-[90%] border-transparent'
            }
          `}
        >
          {/* LOGO */}
          <div className="font-serif tracking-widest font-bold uppercase text-white mr-8 z-20">
            Ebun.
          </div>
            
          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 text-xs font-medium text-gray-300 uppercase tracking-wide">
            <Link href="/jobapay-ai" className="hover:text-white transition-colors">Jobapay AI</Link>
            <Link href="/engineering" className="hover:text-white transition-colors">Engineering</Link>
            <Link href="/community" className="hover:text-white transition-colors">Community</Link>
            <Link href="/code-to-lead" className="hover:text-white transition-colors">Code to Lead</Link>
          </div>
            
          {/* CONNECT BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center gap-4 z-20">
            <Link href="#contact" className={`
              hidden md:block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all border
              ${isScrolled 
                ? 'bg-white text-charcoal hover:bg-gray-200 border-transparent' 
                : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-charcoal'
              }
            `}>
              Connect
            </Link>

            {/* HAMBURGER (Mobile Only) */}
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 " aria-label="Toggle Menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="absolute top-full left-0 right-0 mt-4 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6 md:hidden overflow-hidden"
                >
                    <div className="flex flex-col gap-4 text-sm font-medium text-gray-300 uppercase tracking-wide text-center">
                        <Link href="/jobapay-ai" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Jobapay AI</Link>
                        <Link href="/engineering" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Engineering</Link>
                        <Link href="/community" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Community</Link>
                        <Link href="/code-to-lead" className="hover:text-brand-pink transition-colors py-2 border-b border-white/5">Code to Lead</Link>
                        <Link href="mailto:ebunarimoro@gmail.com" className="bg-white text-charcoal py-3 rounded-xl font-bold mt-2">Connect Now</Link>
                    </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 md:pb-20">
        
        {/* SOUL GRADIENTS */}
        <motion.div style={{ y }} className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/50 rounded-full blur-[120px]" />
        <motion.div style={{ y }} className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[120px]" />

        <div className="container px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center z-10 max-w-6xl">
            
          {/* TEXT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-white/60">System Online</span>
            </div>
              
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6 text-white">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Certainty.</span>
            </h1>
              
            <p className="font-sans text-lg text-gray-400 font-light leading-relaxed max-w-md mb-8">
              I build the infrastructure that makes trust possible. 
              From the <strong>React</strong> components users touch, to the <strong>operational pipelines</strong> that power Jobapay AI.
            </p>

            <div className="flex gap-4 mb-12">
              <Link href="#jobapayAI" className="px-8 py-3 bg-white text-charcoal font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                View My Work <ArrowRight size={16}/>
              </Link>
            </div>

            {/* --- REFINED RECOGNIZED SECTION (Restored Size) --- */}
            <div className="border-t border-white/10 pt-8">
                <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-4">Trusted & Recognized By</p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-50 grayscale whitespace-nowrap">
                    <span className="font-serif text-white font-bold text-lg tracking-tighter">Founders Institute</span>
                    <span className="font-serif text-white font-bold text-lg tracking-tighter">Aurora Tech Awards</span>
                    <span className="font-serif text-white font-bold text-lg tracking-tighter">BusinessDay</span>
                    <span className="font-serif text-white font-bold text-lg tracking-tighter">Crest Africa</span>
                </div>
            </div>
          </motion.div>

          {/* VISUAL SIDE: PROFILE PICTURE (Shifted up by changing translate-y from -16 to -19 ~30px) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center items-end h-[300px] md:h-[500px] order-1 md:order-2 mt-23" 
          >
            <div className="group relative w-full max-w-[80%] md:max-w-md h-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:border-brand-pink/30 md:-translate-y-[19.5%] -translate-y-8">
              <Image 
                src="/image_0.png" 
                alt="Ebunoluwa Arimoro"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- VENTURES (JOBAPAY) --- */}
      <section id="jobapayAI" className="py-12 md:py-24 px-6 md:px-12 bg-sand text-charcoal rounded-t-[3rem] -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl mb-4">Venture.</h2>
            <div className="h-1 w-20 bg-charcoal"></div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-charcoal text-white flex items-center justify-center rounded-lg">
                  <Layers size={24} />
                </div>
                  
                {/* JOBAPAY HEADER LINK */}
                <Link href="https://jobapay.ai/" target="_blank" className="inline-flex items-center gap-3 group/link">
                    <h3 className="text-3xl font-serif underline decoration-transparent group-hover/link:decoration-brand-pink underline-offset-4 transition-all group-hover/link:text-brand-pink">Jobapay AI</h3>
                    <ExternalLink size={24} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-brand-pink"/>
                </Link>
                  
                <h4 className="font-mono text-xs uppercase tracking-widest text-brand-pink">AI-Driven Service Infrastructure</h4>

                <p className="text-gray-600 leading-relaxed">
                  Jobapay is the <strong>Operating System for Service Trust</strong> in Africa.
                  <br/><br/>
                  We vertically integrate the entire service stack. We use internal AI tools to Train, Vet, and Manage the workforce, ensuring compliance and quality. We don't just facilitate the service; we own the output.
                </p>
                <ul className="space-y-2 font-mono text-xs uppercase tracking-wide text-gray-500 pt-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600"/> B2B Managed Contracts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-600"/> AI-Monitored Operations</li>
                </ul>
              </div>
                
              {/* VISUAL SIDE: 3D CODE CARD */}
              <div 
                className="relative perspective-1000 h-[400px] md:h-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div 
                  animate={{ 
                    rotateY: isHovered ? 5 : 0,
                    rotateX: isHovered ? -5 : 0,
                  }}
                  transition={{ 
                    default: { duration: 0.4 }
                  }}
                  className="bg-[#1e1e1e] border border-white/10 p-6 rounded-xl shadow-2xl w-full h-full"
                >
                  <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-brand-pink"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-auto text-xs text-gray-500 font-mono">infrastructure.tsx</div>
                  </div>
                    
                  <div className="font-mono text-xs md:text-sm space-y-3">
                    <div className="flex text-gray-400">
                      <span className="w-8 select-none opacity-30">1</span>
                      <span><span className="text-brand-pink">const</span> <span className="text-white">Jobapay</span> = <span className="text-brand-pink">new</span> <span className="text-blue-400">Infrastructure</span>();</span>
                    </div>
                    <div className="flex text-gray-400">
                      <span className="w-8 select-none opacity-30">2</span>
                      <span className="text-gray-500 italic">// AI-Driven B2B Services</span>
                    </div>
                    <div className="flex text-gray-400">
                      <span className="w-8 select-none opacity-30">3</span>
                      <span><span className="text-brand-pink">await</span> <span className="text-white">Jobapay</span>.<span className="text-blue-300">verticallyIntegrate</span>({`{`}</span>
                    </div>
                    <div className="flex text-gray-400 pl-4">
                      <span className="w-8 select-none opacity-30">4</span>
                      <span><span className="text-gray-500">ai_model:</span> <span className="text-green-400">'Certified'</span>,</span>
                    </div>
                    <div className="flex text-gray-400 pl-4">
                      <span className="w-8 select-none opacity-30">5</span>
                      <span><span className="text-gray-500">compliance:</span> <span className="text-green-400">'100%'</span>,</span>
                    </div>
                    <div className="flex text-gray-400">
                      <span className="w-8 select-none opacity-30">6</span>
                      <span>{`}`});</span>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -inset-10 bg-gradient-to-r from-brand-purple to-brand-pink opacity-10 blur-3xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ENGINEERING SECTION --- */}
      <section id="engineering" className="py-12 px-6 md:px-12 bg-sand text-charcoal">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">Engineering.</h2>
            <div className="h-1 w-20 bg-charcoal"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
            
            {/* CARD 1: ARCHITECT */}
            <div className="bg-charcoal text-white p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Terminal size={140} />
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <Cpu size={28} className="text-brand-pink"/>
                        <h3 className="font-serif text-3xl">Architect.</h3>
                    </div>
                    <p className="text-gray-400 mb-8 leading-relaxed z-10 relative text-sm">
                        I build resilient systems at the intersection of complex operations and user needs. My stack is designed for scale.
                    </p>
                </div>

                {/* TECH STACK VISUALIZER */}
                <div className="bg-black/30 rounded-xl p-4 border border-white/10 z-10 relative backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">System_Status</span>
                        <div className="flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-mono text-green-500">Operational</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Layout size={16} className="text-brand-pink" />
                            <div className="flex-1">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="font-bold text-gray-300">Frontend</span>
                                    <span className="text-gray-500 font-mono">Next.js / React</span>
                                </div>
                                <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-pink w-[95%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Server size={16} className="text-blue-400" />
                            <div className="flex-1">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="font-bold text-gray-300">Backend</span>
                                    <span className="text-gray-500 font-mono">Node / Python</span>
                                </div>
                                <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 w-[90%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Cloud size={16} className="text-purple-400" />
                            <div className="flex-1">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="font-bold text-gray-300">Infra</span>
                                    <span className="text-gray-500 font-mono">AWS / Azure</span>
                                </div>
                                <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-400 w-[85%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
            {/* CARD 2: PHILOSOPHY */}
             <div className="bg-white p-10 rounded-2xl border border-gray-200 flex flex-col justify-center group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                 <h3 className="font-serif text-2xl mb-4 group-hover:text-brand-pink transition-colors">Philosophy</h3>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                     "I value clarity over cleverness. In the African market, your code isn't just processing data; it's navigating infrastructure constraints, trust deficits, and operational realities."
                 </p>
                 <div className="flex flex-col gap-3">
                     <span className="text-sm font-bold bg-brand-pink text-white px-4 py-2 rounded-full border border-white/20 shadow-md self-start flex items-center gap-2">
                        <CheckCircle2 size={14}/> Microsoft Certified AI Engineer
                     </span>
                     <span className="text-sm font-bold bg-charcoal text-white px-4 py-2 rounded-full border border-white/20 shadow-md self-start flex items-center gap-2">
                        <CheckCircle2 size={14}/> AWS Certified
                     </span>
                 </div>
             </div>
        </div>
      </section>

      {/* --- COMMUNITY SECTION (BALANCED SYMMETRY) --- */}
      <section id="community" className="py-24 px-6 md:px-12 bg-sand text-charcoal">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl mb-4">Community.</h2>
            <div className="h-1 w-20 bg-charcoal"></div>
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-white p-10 rounded-2xl border border-gray-200 group hover:border-brand-pink/50 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <Network size={28} className="text-brand-pink"/>
                <Link href="https://herdacity.com/" target="_blank" className="group/link flex items-center gap-2">
                    <h3 className="font-serif text-3xl underline decoration-transparent group-hover/link:decoration-brand-pink underline-offset-4 transition-all group-hover/link:text-brand-pink">The HERdacity Network.</h3>
                    <ExternalLink size={24} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-brand-pink"/>
                </Link>
              </div>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl text-lg font-light">
              Founding a community for ambitious women in tech and beyond. We build the social capital, confidence, and leadership skills required to ascend in highflying careers.
            </p>
             
            <div className="grid md:grid-cols-2 gap-[30px] mt-4">
              {/* LEFT: SMART VIDEO CARD */}
              <VideoCard />

              {/* RIGHT: BALANCED IMAGE CARD (Full color on mobile) */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative group/img shadow-sm">
                <Image 
                  src="/herdacity-community.jpg" 
                  alt="Community Gathering" 
                  fill 
                  className="object-cover grayscale-0 md:grayscale md:group-hover/img:grayscale-0 transition-all duration-700 ease-in-out group-hover/img:scale-105" 
                  style={{ objectPosition: "50% 65%" }}
                /> 
                <div className="absolute inset-0 bg-black/20 md:group-hover/img:bg-transparent transition-colors duration-500 flex items-center justify-center z-10">
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest hidden md:block group-hover/img:opacity-0 transition-opacity">
                        View Gallery
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CODE TO LEAD --- */}
      <section id="codetolead" className="py-12 md:py-24 px-6 md:px-12 bg-white text-charcoal border-t border-gray-200 relative z-20">
         <div className="max-w-4xl mx-auto text-center mb-12">
             <Link href="https://www.linkedin.com/newsletters/code-to-lead-7066361906940248064/" target="_blank" className="inline-flex items-center gap-3 mb-4 text-charcoal hover:text-brand-pink transition-colors group">
                <PenTool size={28}/> 
                <h2 className="font-serif text-4xl underline decoration-transparent group-hover:decoration-brand-pink underline-offset-4 transition-all">Code to Lead.</h2>
                <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
             </Link>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                 Thinking out loud on operations, engineering leadership, and the realities of building scalable technology in Africa.
             </p>
         </div>

         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Link href="/codetolead" className="group block p-8 bg-sand rounded-2xl transition-colors border border-transparent hover:border-gray-300">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-charcoal uppercase tracking-wide">Latest Essay</span>
                    <Code2 size={20} className="text-gray-400 group-hover:text-charcoal transition-colors"/>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:underline decoration-charcoal">Why Infrastructure is the new UX</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    In emerging markets, reliability is the ultimate user experience. Moving beyond pixels to solve actual delivery problems.
                </p>
                <span className="text-sm font-medium text-charcoal flex items-center gap-2">Read Article <ArrowRight size={16}/></span>
            </Link>
             
            <Link href="/codetolead" className="group block p-8 bg-sand rounded-2xl transition-colors border border-transparent hover:border-gray-300">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wide">Opinion</span>
                    <Code2 size={20} className="text-gray-400 group-hover:text-charcoal transition-colors"/>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:underline decoration-charcoal">The Myth of the &quot;Clean&quot; Marketplace</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Why copy-pasting Silicon Valley models fails in Lagos, and why operational ownership is the only path to trust.
                </p>
                <span className="text-sm font-medium text-charcoal flex items-center gap-2">Read Article <ArrowRight size={16}/></span>
            </Link>
         </div>

         <div className="text-center mt-16">
            <Link href="https://www.linkedin.com/newsletters/code-to-lead-7066361906940248064/" className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl">
                <Mail size={20}/>
                Subscribe to the Newsletter
            </Link>
         </div>
      </section>

      {/* --- REFINED FOOTER --- */}
      <footer id="contact" className="bg-charcoal text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10 relative z-20">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-10 block text-center md:text-left">Explore</span>
          <div className="flex flex-col items-center md:grid md:grid-cols-5 md:items-start gap-8 mb-16">
            <Link href="/about" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Target size={20}/> About</Link>
            <Link href="/jobapay-ai" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Layers size={20}/> Jobapay AI</Link>
            <Link href="/engineering" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Terminal size={20}/> Engineering</Link>
            <Link href="/community" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><Network size={20}/> Community</Link>
            <Link href="/code-to-lead" className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors"><PenTool size={20}/> Code to Lead</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 border-t border-white/10 pt-12">
            <div className="w-full md:w-auto text-center md:text-left">
              <h2 className="font-serif text-7xl md:text-8xl opacity-20 font-bold mb-8 md:mb-4 uppercase tracking-tighter text-white">EBUN.</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white">
                 <Link href="mailto:ebunarimoro@gmail.com" className="hover:text-brand-pink transition-colors font-bold">EMAIL</Link>
                 <Link href="https://linkedin.com/in/ebunoluwa-arimoro" target="_blank" className="hover:text-brand-pink transition-colors font-bold">LINKEDIN</Link>
                 <Link href="https://github.com/EbunoluwaArimoro/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">GITHUB</Link>
              </div>
            </div>
            <div className="w-full md:w-auto text-center md:text-right text-[9px] text-white font-mono tracking-widest uppercase">© 2026 Ebunoluwa Arimoro.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}