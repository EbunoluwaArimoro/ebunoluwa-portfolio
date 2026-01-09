import { Terminal, Cpu, Layout, Server, Cloud, CheckCircle2 } from "lucide-react";

export default function Engineering() {
  return (
    <section id="engineering" className="py-12 px-6 md:px-12 bg-sand text-charcoal">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl mb-4">Engineering.</h2>
        <div className="h-1 w-20 bg-charcoal"></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-charcoal text-white p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Terminal size={140} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={28} className="text-brand-pink"/>
              <h3 className="font-serif text-3xl">System Design.</h3>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed z-10 relative text-sm">
              I build resilient systems at the intersection of complex operations and user needs. My stack is designed for resilience and scale.
            </p>
          </div>

          <div className="bg-black/30 rounded-xl p-4 border border-white/10 z-10 relative backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">System_Status</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-green-500">Operational</span>
              </div>
            </div>
            <div className="space-y-3">
              <TechBar icon={<Layout size={16} className="text-brand-pink" />} label="Frontend" tech="Next.js / React" progress="w-[95%]" color="bg-brand-pink" />
              <TechBar icon={<Server size={16} className="text-blue-400" />} label="Backend" tech="Node / Python" progress="w-[90%]" color="bg-blue-400" />
              <TechBar icon={<Cloud size={16} className="text-purple-400" />} label="Infra" tech="AWS / Azure" progress="w-[85%]" color="bg-purple-400" />
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-gray-200 flex flex-col justify-center group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
          <h3 className="font-serif text-2xl mb-4 group-hover:text-brand-pink transition-colors">Philosophy</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "I value clarity over cleverness. In the African market, your code isn't just processing data; it's navigating infrastructure constraints, trust deficits, and operational realities."
          </p>
          <div className="flex flex-col gap-3">
            <CertificationBadge label="Microsoft Certified AI Engineer" />
            <CertificationBadge label="AWS Certified" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechBar({ icon, label, tech, progress, color }: any) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="flex-1">
        <div className="flex justify-between text-xs mb-1">
          <span className="font-bold text-gray-300">{label}</span>
          <span className="text-gray-500 font-mono">{tech}</span>
        </div>
        <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
          <div className={`h-full ${color} ${progress}`}></div>
        </div>
      </div>
    </div>
  );
}

function CertificationBadge({ label }: { label: string }) {
  return (
    <span className="text-sm font-bold bg-charcoal text-white px-4 py-2 rounded-full border border-white/20 shadow-md self-start flex items-center gap-2">
      <CheckCircle2 size={14}/> {label}
    </span>
  );
}