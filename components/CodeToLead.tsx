"use client";

import { PenTool, ExternalLink, Code2, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Fallback data just in case the API takes too long or fails
const FALLBACK_POST = {
  title: "The End of the 'Junior' Developer",
  description: "A 2026 career survival guide on navigating the shift from writing syntax to architecting solutions in an AI-first world.",
  link: "https://www.linkedin.com/pulse/end-junior-developer-your-2026-career-survival-guide-ebunoluwa-arimoro/"
};

export default function CodeToLead() {
  const [latestPost, setLatestPost] = useState(FALLBACK_POST);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestPost() {
      try {
        const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://codetolead.substack.com/feed");
        const data = await res.json();
        
        if (data.items && data.items.length > 0) {
          // Get the most recent post
          const livePost = data.items[0];
          
          // Substack descriptions contain HTML tags. We strip them out.
          let cleanDesc = livePost.description.replace(/<[^>]+>/g, '').trim();
          
          // NEW: Remove "TLDR", "TL;DR", "TLDR:", etc. from the beginning of the text
          cleanDesc = cleanDesc.replace(/^TL;?DR\s*[:\-]?\s*/i, '').trim();

          // Truncate the text so it fits the card beautifully.
          if (cleanDesc.length > 130) {
            cleanDesc = cleanDesc.substring(0, 130) + "...";
          }

          setLatestPost({
            title: livePost.title,
            description: cleanDesc || "Read the latest insights on operations, engineering leadership, and scalable technology.",
            link: livePost.link
          });
        }
      } catch (error) {
        console.error("Failed to fetch latest Code to Lead post:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestPost();
  }, []);

  return (
    <section id="codetolead" className="py-12 md:py-24 px-6 md:px-12 bg-white text-charcoal border-t border-gray-200 relative z-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <Link 
          href="https://codetolead.substack.com/" 
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
        {/* DYNAMIC LATEST ARTICLE CARD */}
        <ArticleCard 
          tag="Latest Article" 
          title={isLoading ? "Loading..." : latestPost.title} 
          description={isLoading ? "Fetching the latest insights..." : latestPost.description} 
          href={latestPost.link}
        />
        
        {/* STATIC CASE STUDY CARD */}
        <ArticleCard 
          tag="Case Study" 
          title="Why 'Always Online' Doesn’t Work" 
          description="A deep dive into building resilient software that survives the infrastructure constraints and connectivity realities of the African market." 
          href="https://www.linkedin.com/pulse/why-always-online-doesnt-work-africa-ebunoluwa-arimoro-rjxtf"
        />
      </div>

      <div className="text-center mt-16">
        <Link 
          href="https://codetolead.substack.com/" 
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
    <Link href={href} target="_blank" className="group block p-8 bg-sand rounded-2xl transition-colors border border-transparent hover:border-gray-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-charcoal uppercase tracking-wide">{tag}</span>
          <Code2 size={20} className="text-gray-400 group-hover:text-charcoal transition-colors"/>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-3 group-hover:underline decoration-charcoal">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      </div>
      <span className="text-sm font-medium text-charcoal flex items-center gap-2 mt-auto pt-4">Read Article <ArrowRight size={16}/></span>
    </Link>
  );
}