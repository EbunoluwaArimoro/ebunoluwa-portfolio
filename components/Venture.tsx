"use client";

import { motion } from "framer-motion";
import { Layers, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Venture() {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
                transition={{ default: { duration: 0.4 } }}
                className="bg-[#1e1e1e] border border-white/10 p-6 rounded-xl shadow-2xl w-full h-full"
              >
                <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-brand-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-xs text-gray-500 font-mono">infrastructure.tsx</div>
                </div>
                  
                <div className="font-mono text-xs md:text-sm space-y-3">
                  <div className="flex text-gray-400"><span className="w-8 select-none opacity-30">1</span><span><span className="text-brand-pink">const</span> <span className="text-white">Jobapay</span> = <span className="text-brand-pink">new</span> <span className="text-blue-400">Infrastructure</span>();</span></div>
                  <div className="flex text-gray-400"><span className="w-8 select-none opacity-30">2</span><span className="text-gray-500 italic">// AI-Driven B2B Services</span></div>
                  <div className="flex text-gray-400"><span className="w-8 select-none opacity-30">3</span><span><span className="text-brand-pink">await</span> <span className="text-white">Jobapay</span>.<span className="text-blue-300">verticallyIntegrate</span>({`{`}</span></div>
                  <div className="flex text-gray-400 pl-4"><span className="w-8 select-none opacity-30">4</span><span><span className="text-gray-500">ai_model:</span> <span className="text-green-400">'Certified'</span>,</span></div>
                  <div className="flex text-gray-400 pl-4"><span className="w-8 select-none opacity-30">5</span><span><span className="text-gray-500">compliance:</span> <span className="text-green-400">'100%'</span>,</span></div>
                  <div className="flex text-gray-400"><span className="w-8 select-none opacity-30">6</span><span>{`}`});</span></div>
                </div>
              </motion.div>
              <div className="absolute -inset-10 bg-gradient-to-r from-brand-purple to-brand-pink opacity-10 blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}