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

// Helper to intelligently tag articles if Substack doesn't provide them
function deriveCategory(post: any) {
  if (post.categories && post.categories.length > 0) return post.categories[0];
  
  const title = post.title.toLowerCase();
  if (title.includes('ai') || title.includes('model') || title.includes('artificial intelligence')) return 'AI Strategy';
  if (title.includes('code') || title.includes('engineer') || title.includes('infrastructure')) return 'Engineering';
  if (title.includes('career') || title.includes('junior') || title.includes('developer')) return 'Career';
  if (title.includes('startup') || title.includes('valuation') || title.includes('founder') || title.includes('market')) return 'Venture';
  if (title.includes('tax') || title.includes('policy') || title.includes('capital')) return 'Policy';
  
  return 'Leadership'; // Default fallback
}

async function getPosts() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://codetolead.substack.com/feed",
      { next: { revalidate: 3600 } } 
    );
    
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    
    // Process the live posts to ensure they have tags
    const livePosts = data.items?.map((post: any) => ({
        ...post,
        categories: [deriveCategory(post)]
    })) || [];

    // Combine live posts with fallback
    const allPosts = [...livePosts, ...FALLBACK_POSTS];

    // FORCE SORT: Sort by publication date in descending order (Latest First)
    allPosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    // Deduplicate in case a fallback post is also currently in the live feed
    const uniquePosts = Array.from(new Map(allPosts.map(post => [post.link, post])).values());

    // Return the top 3 newest, unique posts
    return uniquePosts.slice(0, 3);
  } catch (error) {
    console.error("Feed fetch error:", error);
    
    // Ensure fallbacks are sorted latest first too, just in case it fails
    const sortedFallbacks = [...FALLBACK_POSTS].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
    return sortedFallbacks.slice(0, 3);
  }
}

export default async function CodeToLeadPage() {
  const posts = await getPosts();
  return <CodeToLeadView posts={posts} />;
}