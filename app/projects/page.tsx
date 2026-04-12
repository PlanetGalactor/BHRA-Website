import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    { name: "New School", slug: "new-school", desc: "Construction of the New Catholic Elementary School in Ward 2 (Former Buttonwood Hill Public School Site) is currently underway and will accommodate 600 students with 5-room childcare. The anticipated Opening Date is September 1, 2027 (construction completion — Winter 2026).", image: "/images/projects/buttonwood.png" },
    { name: "Lanterra Developments — Notting Hill Condos, 4000 Eglinton Avenue West (Plant World)", slug: "plant-world", desc: "Plant World closed its doors at 4000 Eglinton Avenue West on September 30, 2019. Lanterra Developments are building \"Notting Hill Condos\" on this site featuring five residential towers in two Phases.", image: "/images/projects/notting-hill.jpg" },
    { name: "Humbertown Plaza", slug: "humbertown-plaza", desc: "First Capital are currently revitalizing Humbertown Mall and some shops will remain open during this process. First Capital anticipates the unveiling of the new and improved Humbertown Mall in 2026.", image: "/images/projects/humbertown.jpg" },
    { name: "Eglinton Crosstown LRT", slug: "eglinton-west-lrt", desc: "Transit expansion updates and community impact on our local infrastructure.", image: "/images/projects/eglinton-west.png" },
    { name: "Richview Square", slug: "richview-square", desc: "Upcoming commercial and residential changes in the Richview footprint.", image: "/images/projects/richview-square.jpg" },
    { name: "La Rose Apartments", slug: "la-rose-apartments", desc: "Details on ongoing proposals and high-rise density conversations.", image: "/images/projects/la-rose.jpg" }
  ];

  return (
    <div className="py-20 min-h-screen bg-[#f7f9f9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Projects & Developments</h1>
          <p className="text-xl text-foreground font-ui leading-relaxed">
            We actively monitor and advocate for the community regarding new building developments, transit expansions, and urban planning initiatives in Buttonwood Hill.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <Link href="/projects/new-school" className="group block bg-white rounded-2xl border-2 border-primary/20 flex flex-col md:flex-row overflow-hidden shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300">
            <div className="relative h-[250px] md:h-auto md:w-2/5 overflow-hidden bg-primary/10 flex-shrink-0">
              <Image 
                src="/images/ButtonwoodParkImprovements.jpg"
                alt="New School" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 bg-[#2ea3f2] text-white font-ui font-bold uppercase tracking-widest text-[11px] px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                <Star size={12} className="fill-white" /> Featured Active Project
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
              <h2 className="text-[24px] sm:text-[32px] font-serif font-bold text-primary mb-4 group-hover:text-[#a3107c] transition-colors">
                Buttonwood Park Improvements Project (City of Toronto)
              </h2>
              <p className="text-foreground text-[16px] leading-relaxed mb-8 flex-grow">
                The park design will be determined through community engagement and is proposed to include upgraded pathways, a shade structure, seating and lighting.
              </p>
              <div className="inline-flex items-center gap-2 bg-primary text-white font-ui font-bold uppercase tracking-[1px] text-[13px] px-6 py-3 rounded-[4px] self-start group-hover:bg-[#a3107c] transition-colors">
                View Project Details <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>

        {/* Other Projects Grid */}
        <h2 className="text-3xl font-serif font-bold text-[#2c2d2e] mb-8 border-b-2 border-primary/20 pb-4 inline-block">
          Monitored Developments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <Link key={proj.name} href={`/projects/${proj.slug}`} className="bg-white rounded-[8px] border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group block">
              <div className="relative h-[240px] w-full bg-primary/10 overflow-hidden">
                <Image 
                  src={proj.image} 
                  alt={proj.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{proj.name}</h3>
                <p className="text-foreground mb-8 flex-grow leading-relaxed">{proj.desc}</p>
                <div className="mt-auto">
                  <span className="text-primary font-bold font-ui uppercase tracking-widest text-sm hover:opacity-80 transition-opacity inline-flex items-center gap-2">
                    View Project Details <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
