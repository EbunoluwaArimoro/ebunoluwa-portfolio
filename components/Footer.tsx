import Link from "next/link";
import { Target, Layers, Terminal, Network, PenTool } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-10 block text-center md:text-left">Explore</span>
        <div className="flex flex-col items-center md:grid md:grid-cols-5 md:items-start gap-8 mb-16">
          <FooterLink href="/about" icon={<Target size={20}/>} label="About" />
          <FooterLink href="/jobapay-ai" icon={<Layers size={20}/>} label="Jobapay AI" />
          <FooterLink href="/engineering" icon={<Terminal size={20}/>} label="Engineering" />
          <FooterLink href="/community" icon={<Network size={20}/>} label="Community" />
          <FooterLink href="/code-to-lead" icon={<PenTool size={20}/>} label="Code to Lead" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 border-t border-white/10 pt-12">
          <div className="w-full md:w-auto text-center md:text-left">
            <h2 className="font-serif text-7xl md:text-8xl opacity-20 font-bold mb-8 md:mb-4 uppercase tracking-tighter text-white">EBUN.</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white">
               <Link href="mailto:ebunarimoro@gmail.com" className="hover:text-brand-pink transition-colors font-bold">EMAIL</Link>
               <Link href="https://linkedin.com/in/ebunoluwa-arimoro" target="_blank" className="hover:text-brand-pink transition-colors font-bold">LINKEDIN</Link>
               <Link href="https://github.com/EbunoluwaArimoro/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">GITHUB</Link>
              <Link href="https://ebunoluwa-arimoro-portfolio-website.webflow.io/" target="_blank" className="hover:text-brand-pink transition-colors font-bold">PORTFOLIO</Link>
            </div>
          </div>
          <div className="w-full md:w-auto text-center md:text-right text-[9px] text-white font-mono tracking-widest uppercase">© 2026 Ebunoluwa Arimoro.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, icon, label }: any) {
  return (
    <Link href={href} className="group flex items-center gap-3 text-white font-bold hover:text-brand-pink transition-colors">
      {icon} {label}
    </Link>
  );
}