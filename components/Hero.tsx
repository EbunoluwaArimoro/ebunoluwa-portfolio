"use client";

import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  y: MotionValue<string>;
}

export default function Hero({ y }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-32 pb-10 md:pb-20">
      {/* SOUL GRADIENTS */}
      <motion.div style={{ y }} className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/50 rounded-full blur-[120px]" />
      <motion.div style={{ y }} className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[120px]" />

      <div className="container px-6 md:px-12 z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 md:order-1 -mt-10 md:-mt-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-white/60">System Online</span>
            </div>
              
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6 text-white">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Trust at Scale.</span>
            </h1>
              
            <p className="font-sans text-lg text-gray-400 font-light leading-relaxed max-w-md mb-8">
              I develop <strong>resilient systems</strong> and <strong>AI-powered solutions</strong> that solve for trust deficits and infrastructure constraints in emerging markets.
            </p>

            <div className="flex gap-4 mb-12">
              <Link href="#jobapayAI" className="px-8 py-3 bg-white text-charcoal font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                View My Work <ArrowRight size={16}/>
              </Link>
            </div>
          </motion.div>

          {/* VISUAL SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center items-end h-[300px] md:h-[450px] order-1 md:order-2 mt-23 md:mt-25" 
          >
            <div className="group relative w-full max-w-[80%] h-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:border-brand-pink/30 md:-translate-y-[19.5%] -translate-y-8">
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

        {/* RECOGNITION SECTION - Optimized for mobile layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-white/10 pt-8  -mt-5 md:-mt-12 mb-10 md:mb-0 w-full"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-4">Trusted & Recognized By</p>
          <div className="flex flex-wrap items-center justify-between md:justify-start gap-x-6 md:gap-x-12 gap-y-4 opacity-50 grayscale">
              <span className="font-serif text-white font-bold text-base md:text-lg tracking-tighter">Founders Institute</span>
              <span className="font-serif text-white font-bold text-base md:text-lg tracking-tighter">Aurora Tech Awards</span>
              <span className="font-serif text-white font-bold text-base md:text-lg tracking-tighter">BusinessDay</span>
              <span className="font-serif text-white font-bold text-base md:text-lg tracking-tighter">YALI</span>
              <span className="font-serif text-white font-bold text-base md:text-lg tracking-tighter">Crest Africa</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}