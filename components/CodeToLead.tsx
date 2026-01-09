"use client";

import { PenTool, ExternalLink, Code2, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CodeToLead() {
  return (
    <section id="codetolead" className="py-12 md:py-24 px-6 md:px-12 bg-white text-charcoal border-t border-gray-200 relative z-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Link 
          href="https://www.linkedin.com/newsletters/code-to-lead-7066361906940248064/" 
          target="_blank" 
          className="inline-flex items-center gap-3 mb-4 text-charcoal hover:text-brand-pink transition-colors group"
        >
          <PenTool size={28}/> 
          <h2 className="font-serif text-4xl underline decoration-transparent group-hover:decoration-brand-pink underline-offset-4 transition-all">Code to Lead.</h2>
          <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
        </Link>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          The Future of AI and Software, through an African Lens. Thinking out loud on operations, engineering leadership, and scalable technology.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <ArticleCard 
          tag="Latest Article" 
          title="The End of the 'Junior' Developer" 
          description="A 2026 career survival guide on navigating the shift from writing syntax to architecting solutions in an AI-first world." 
          href="https://www.linkedin.com/pulse/end-junior-developer-your-2026-career-survival-guide-arimoro-yni5e"
        />
        <ArticleCard 
          tag="Case Study" 
          title="Why 'Always Online' Doesn’t Work" 
          description="A deep dive into building resilient software that survives the infrastructure constraints and connectivity realities of the African market." 
          href="https://www.linkedin.com/pulse/why-always-online-doesnt-work-africa-ebunoluwa-arimoro-rjxtf"
        />
      </div>

      <div className="text-center mt-16">
        <Link 
          href="https://www.linkedin.com/newsletters/code-to-lead-7066361906940248064/" 
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl"
        >
          <Mail size={20}/> Subscribe to the Newsletter
        </Link>
      </div>
    </section>
  );
}

function ArticleCard({ tag, title, description, href }: any) {
  return (
    <Link href={href} target="_blank" className="group block p-8 bg-sand rounded-2xl transition-colors border border-transparent hover:border-gray-300">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono text-charcoal uppercase tracking-wide">{tag}</span>
        <Code2 size={20} className="text-gray-400 group-hover:text-charcoal transition-colors"/>
      </div>
      <h3 className="font-serif text-2xl font-bold mb-3 group-hover:underline decoration-charcoal">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      <span className="text-sm font-medium text-charcoal flex items-center gap-2">Read Article <ArrowRight size={16}/></span>
    </Link>
  );
}