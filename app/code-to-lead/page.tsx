import CodeToLeadView from "./CodeToLeadView";

// --- THE FALLBACK DATA ---
const FALLBACK_POSTS = [
  {
    title: "Your 2026 Blueprint: From AI Tools to AI Strategy",
    link: "https://www.linkedin.com/pulse/your-2026-blueprint-from-ai-tools-strategy-ebunoluwa-arimoro-c9wkf",
    pubDate: "2025-11-05",
    categories: ["Strategy"]
  },
  {
    title: "Your Codebase Is Quietly Negotiating Your Next Valuation",
    link: "https://www.linkedin.com/pulse/your-codebase-quietly-negotiating-next-valuation-ebunoluwa-arimoro-av74f",
    pubDate: "2025-11-19",
    categories: ["Engineering"]
  },
  {
    title: "The End of the 'Junior' Developer: Career Survival Guide",
    link: "https://www.linkedin.com/pulse/end-junior-developer-your-2026-career-survival-guide-ebunoluwa-arimoro/",
    pubDate: "2025-09-20",
    categories: ["Leadership"]
  }
];

async function getPosts() {
  try {
    // This fetch runs on the server and caches the result for 1 hour (3600s)
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://codetolead.substack.com/feed",
      { next: { revalidate: 3600 } } 
    );
    
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    const livePosts = data.items || [];
    // Combine live posts with fallback, limiting to 3
    return [...livePosts, ...FALLBACK_POSTS].slice(0, 3);
  } catch (error) {
    console.error("Feed fetch error:", error);
    return FALLBACK_POSTS;
  }
}

export default async function CodeToLeadPage() {
  const posts = await getPosts();
  return <CodeToLeadView posts={posts} />;
}