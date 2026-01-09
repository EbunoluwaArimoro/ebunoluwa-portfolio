"use client";

import { useRef } from "react";
import { Network, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <Link 
      href="https://herdacity.com/events" 
      target="_blank"
      className="aspect-video relative rounded-lg overflow-hidden shadow-sm bg-charcoal block group"
    >
      <div className="md:hidden w-full h-full relative">
        <video src={videoSource} className="w-full h-full object-cover" autoPlay loop muted playsInline />
      </div>
      <div 
        className="hidden md:block w-full h-full relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full grayscale group-hover:grayscale-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out absolute inset-0 z-10">
          <video ref={videoRef} src={videoSource} className="w-full h-full object-cover" loop muted playsInline />
        </div>
        <div className="absolute inset-0 z-0 group-hover:opacity-0 transition-opacity duration-700">
          <Image src="/herdacity-video-keyframe.jpg" alt="Community Video Keyframe" fill className="object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center z-20 pointer-events-none">
             <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest group-hover:opacity-0 transition-opacity">
                Hover to Play
             </div>
        </div>
      </div>
    </Link>
  );
};

export default function Community() {
  return (
    <section id="community" className="pt-12 pb-24 md:py-24 px-6 md:px-12 bg-sand text-charcoal">
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
            <VideoCard />
            <Link 
              href="https://herdacity.com/events" 
              target="_blank"
              className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative group/img shadow-sm block"
            >
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}