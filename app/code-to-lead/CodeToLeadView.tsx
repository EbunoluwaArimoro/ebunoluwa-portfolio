"use client";

import { motion } from "framer-motion";
// ADDED: Layout, Layers, Terminal, Network to the imports below
import { 
  ArrowLeft, PenTool, ExternalLink, Target, Cpu, Award, Globe, 
  Instagram, Newspaper, Mail, Send, ArrowRight, Layout, Layers, Terminal, Network 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define the shape of a Post so TypeScript is happy
interface Post {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
}

export default function CodeToLeadView({ posts }: { posts: Post[] }) {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen bg-white text-charcoal font-sans selection:bg-brand-pink selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 md:px-12 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-charcoal/5">
        <Link href="/" className="font-serif font-bold tracking-widest uppercase text-charcoal">Ebun.</Link>
        <Link href="/" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wide border border-charcoal/20 px-5 py-2 rounded-full hover:bg-charcoal hover:text-white transition-all">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
        </Link>
      </nav>

      {/* --- HERO --- */}
      <section className="pt-40 pb-12 md:pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-pink/20 bg-brand-pink/5 text-brand-pink mb-6">
            <PenTool size={12}/>
            <span className="text-[10px] uppercase tracking-widest font-bold">Weekly Newsletter</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-8 text-charcoal tracking-tighter">Code to <br/><span className="text-brand-pink">Lead.</span></h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mt-12 border-t border-gray-100 pt-12">
            <div className="space-y-6">
                <p className="text-xl md:text-2xl text-charcoal font-light leading-relaxed">
                  "The transition from writing code to leading people is often treated as a promotion. <strong>I treat it as a re-engineering of the self.</strong>"
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Most technical leadership advice is imported. Code to Lead explores how to build high-performance engineering cultures within the specific operational constraints of the African continent.
                </p>
            </div>

            {/* --- SUBSCRIPTION FORM --- */}
            <div className="w-full max-w-md bg-sand/30 p-8 rounded-3xl border border-charcoal/5 mt-4 md:mt-0">
                <h3 className="font-serif text-xl mb-4">Join the community.</h3>
                <form 
                  action="https://codetolead.substack.com/subscribe" 
                  method="GET" 
                  target="_blank"
                  className="relative flex flex-col gap-3"
                >
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-pink transition-colors" size={18}/>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="your@email.com" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white border border-charcoal/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-charcoal text-white font-bold py-4 rounded-2xl hover:bg-brand-pink transition-all shadow-lg hover:shadow-brand-pink/20 flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]"
                    >
                        Subscribe Now <Send size={14}/>
                    </button>
                    <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest mt-2">Zero spam. High agency insights only.</p>
                </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- THE WEEKLY FEED (DATA PASSED VIA PROPS) --- */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-10">Latest Journal Entries</h2>
            <div className="divide-y divide-gray-100">
                {posts.map((post, i) => (
                    <Link key={i} href={post.link} target="_blank" className="group flex flex-col md:flex-row md:items-center justify-between py-8 first:pt-0 hover:px-4 transition-all">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-gray-400 uppercase">
                              {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <h3 className="font-serif text-2xl group-hover:text-brand-pink transition-colors">{post.title}</h3>
                        </div>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-sand px-3 py-1 rounded-full text-gray-500">
                              {post.categories?.[0] || 'Leadership'}
                            </span>
                            <ArrowRight size={18} className="text-gray-200 group-hover:text-brand-pink transform group-hover:translate-x-1 transition-all"/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* --- THE CORE VOLUMES --- */}
      <section className="py-20 px-6 md:px-12 bg-sand border-y border-charcoal/5">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-16">The Archive Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <Link href="https://www.linkedin.com/pulse/when-america-taxes-talent-who-wins-policy-capital-people-arimoro-5q8if" target="_blank" className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 group hover:-translate-y-1 transition-all flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink"><Target size={20}/></div>
                            <span className="font-mono text-[10px] font-bold text-gray-400">VOL. 28</span>
                        </div>
                        <h3 className="font-serif text-3xl mb-4 group-hover:text-brand-pink transition-colors">When America Taxes Talent</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">An analysis of global policy, capital, and the movement of African technical talent.</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">Read Article <ExternalLink size={12}/></span>
                </Link>

                <Link href="https://www.linkedin.com/pulse/beyond-model-what-building-ai-actually-looks-like-ebunoluwa-arimoro-gobtf" target="_blank" className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 group hover:-translate-y-1 transition-all flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-charcoal/5 flex items-center justify-center text-charcoal"><Cpu size={20}/></div>
                            <span className="font-mono text-[10px] font-bold text-gray-400">VOL. 32</span>
                        </div>
                        <h3 className="font-serif text-3xl mb-4 group-hover:text-brand-pink transition-colors">Beyond the AI Model</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">What "building" in AI actually looks like beyond the hype and high-level wrappers.</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">Read Article <ExternalLink size={12}/></span>
                </Link>
            </div>
        </div>
      </section>

      {/* --- BEYOND THE SCREEN --- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl mb-20 text-center md:text-left">Beyond the Screen.</h2>
            
            <div className="mb-24">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pink mb-10 border-b border-brand-pink/10 pb-4">Recognition</h3>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-brand-pink mb-2"><Award size={20}/> <span className="font-bold uppercase tracking-widest text-[10px]">Award</span></div>
                        <h4 className="font-serif text-3xl md:text-4xl">Top 50 Voices in African Tech</h4>
                        <p className="text-gray-500 leading-relaxed">Crest Africa & Business Day innovator spotlight.</p>
                        <div className="flex gap-4 pt-2">
                            <Link href="https://crestafrica.com/top-50-voices-in-african-tech-2025/" target="_blank" className="text-xs font-bold underline underline-offset-4 hover:text-brand-pink">Crest Africa</Link>
                            <Link href="https://businessday.ng/brands-advertising/article/crest-africa-celebrates-top-50-voices-in-african-tech-2025-bold-innovators-shaping-africas-tomorrow/" target="_blank" className="text-xs font-bold underline underline-offset-4 hover:text-brand-pink">Business Day</Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-brand-purple mb-2"><Globe size={20}/> <span className="font-bold uppercase tracking-widest text-[10px]">Founder Series</span></div>
                        <h4 className="font-serif text-3xl md:text-4xl">Aurora Tech Awards Feature</h4>
                        <p className="text-gray-500 leading-relaxed">A strategic feature on my leadership at Jobapay.</p>
                        <div className="flex gap-4 pt-2">
                            <Link href="https://www.linkedin.com/posts/aurora-tech-award_a-day-with-the-boldest-founder-activity-7401915187232079872-Age1" target="_blank" className="text-xs font-bold flex items-center gap-1 hover:text-brand-pink">LinkedIn <ExternalLink size={12}/></Link>
                            <Link href="https://www.instagram.com/p/DRy-KqxjKlZ/" target="_blank" className="text-xs font-bold flex items-center gap-1 hover:text-brand-pink">Instagram <Instagram size={12}/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-24">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-10 border-b border-gray-100 pb-4 text-left">Keynotes & Appearances</h3>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 text-left">
                    {[
                        { org: "Global Data & AI", title: "Empowering Leaders with AI", link: "https://www.linkedin.com/posts/dataglobal-hub_gdai2025-aiforstartups-techleadership-activity-7344652341737840641-VB_9" },
                        { org: "Tech Naija FM", title: "Trust and Adoption", link: "https://www.youtube.com/live/8ZIxeDff3_w" },
                        { org: "GDG OOU", title: "Accelerate Action", link: "https://www.linkedin.com/posts/sca-oou-760b15289_iwd2025-womenintech-accelerateaction-activity-7311705640832319488-vU8W" },
                        { org: "Utiva Masterclass", title: "Why Careers Need Tech Skills", link: "https://www.linkedin.com/posts/Source-itiva_utivamasterclass-techskills-futureofwork-activity-7349137084516839426-_LLZ" }
                    ].map((talk, i) => (
                        <Link key={i} href={talk.link} target="_blank" className="group border-l-2 border-gray-100 pl-6 hover:border-brand-pink transition-colors">
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{talk.org}</span>
                            <h4 className="font-serif text-xl md:text-2xl mt-2 group-hover:text-brand-pink transition-colors">{talk.title}</h4>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-sand p-8 md:p-12 rounded-2xl border border-charcoal/5">
                <div className="flex items-center gap-2 text-brand-pink mb-4"><Newspaper size={20}/> <span className="font-bold uppercase tracking-widest text-[10px]">Publication</span></div>
                <h4 className="font-serif text-3xl mb-4 text-left leading-tight">How Infrastructure Shortfalls are Crushing the AI Revolution</h4>
                <Link href="https://www.techcityng.com/how-infrastructure-shortfalls-are-crushing-nigerias-ai-revolution/" target="_blank" className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest border border-charcoal/20 px-6 py-3 rounded-full hover:bg-charcoal hover:text-white transition-all">Read in Tech City <ExternalLink size={14}/></Link>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white text-charcoal pt-20 pb-10 px-6 md:px-12 border-t border-charcoal/10 relative z-20">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-10 block">Explore</span>
          <div className="flex flex-col items-center md:grid md:grid-cols-5 md:items-start gap-8 mb-16">
            <Link href="/" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Layout size={20}/> Home</Link>
            <Link href="/about" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Target size={20}/> About</Link>
            <Link href="/jobapay" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Layers size={20}/> Jobapay</Link>
            <Link href="/engineering" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Terminal size={20}/> Engineering</Link>
            <Link href="/community" className="group flex items-center gap-3 text-charcoal font-bold hover:text-brand-pink transition-colors"><Network size={20}/> Community</Link>
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