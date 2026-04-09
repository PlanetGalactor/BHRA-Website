import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight, Building2, MapPin } from "lucide-react";
import { getSortedPostsData } from "@/lib/markdown";

const PROJECTS = [
  { name: "Buttonwood Hill Property", category: "Buttonwood Hill Property", slug: "buttonwood-property", desc: "Latest info and hearings regarding the Buttonwood Hill local development initiatives.", ldesc: "The Buttonwood Hill Property represents the core of our neighborhood focus. Most recently, the City of Toronto is undertaking significant improvements to Buttonwood Park. The park design will be determined through extensive community engagement.", image: "/images/projects/buttonwood.png" },
  { name: "Plant World", category: "Other Developments", slug: "plant-world", desc: "Updates on the Plant World site development and rezoning applications.", ldesc: "The former Plant World site is undergoing a major development proposal aimed at integrating new residential units and commercial spaces. Our association actively tracks committee hearings and community feedback sessions to ensure neighbourhood scale is respected.", image: "/images/projects/plant-world.png" },
  { name: "Humbertown Plaza", category: "Humbertown Plaza", slug: "humbertown-plaza", desc: "Redevelopment plans and resident feedback regarding local commercial hubs.", ldesc: "Humbertown Plaza is the commercial heart of the neighbourhood. Recent planning applications propose large-scale intensification and mixed-use structures. We are engaged with the developers to ensure local infrastructure can support the added density.", image: "/images/projects/humbertown.jpg" },
  { name: "Eglinton West LRT", category: "Eglinton West LRT", slug: "eglinton-west-lrt", desc: "Transit expansion updates and community impact on our local infrastructure.", ldesc: "The Eglinton Crosstown West Extension (Line 5) will bring essential rapid transit closer to Buttonwood Hill. However, we are fiercely monitoring the stop placements, traffic impacts, and years of localized construction disruptions affecting residents.", image: "/images/projects/eglinton-west.png" },
  { name: "Richview Square", category: "Richview Square", slug: "richview-square", desc: "Upcoming commercial and residential changes in the Richview footprint.", ldesc: "Richview Square is poised for a massive phased redevelopment including multi-block mixed-use towers. We advocate heavily for appropriate setbacks, maximized parkland dedication, and the preservation of crucial local retail spaces.", image: "/images/projects/richview-square.jpg" },
  { name: "La Rose Apartments", category: "La Rose Apartments", slug: "la-rose-apartments", desc: "Details on ongoing proposals and high-rise density conversations.", ldesc: "Infill development proposals at the existing La Rose Apartments footprint raise concerns about local density ceilings, environmental impact, and traffic flow. We keep a close eye on all city planning meetings regarding these applications.", image: "/images/projects/la-rose.jpg" }
];

export async function generateStaticParams() {
  return [
    { slug: "plant-world" },
    { slug: "humbertown-plaza" },
    { slug: "eglinton-west-lrt" },
    { slug: "richview-square" },
    { slug: "la-rose-apartments" },
  ];
}

export default function DynamicProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) notFound();

  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(p => p.category === project.category || p.title.includes(project.name)).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={project.name} 
            fill 
            className="object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/60 z-10"></div>
        <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 mt-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-ui font-bold uppercase tracking-wider text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="bg-[#2ea3f2] text-white font-ui font-bold uppercase tracking-widest text-[12px] px-3 py-1.5 rounded-full shadow-sm">
              Monitored Development
            </span>
          </div>
          <h1 className="text-[40px] md:text-[56px] font-serif font-bold text-white mb-6 leading-[1.1]">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-20">
          
          {/* Main Description */}
          <div className="space-y-8 text-[#4a4a4a] font-sans text-[18px] leading-[1.8em]">
            <h2 className="text-[32px] font-serif font-bold text-primary mb-6">About the Project</h2>
            <p className="text-[20px] font-medium text-[#2c2d2e] leading-relaxed">
              {project.desc}
            </p>
            <p>
              {project.ldesc}
            </p>
            <p>
              The Buttonwood Hill Residents Association is actively involved in civic engagement regarding this project. We mobilize community feedback, attend related city council planning meetings, and represent the best interests of our neighbourhood&apos;s infrastructure, traffic volume, and green spaces.
            </p>
            
            <Link 
              href="/get-involved"
              className="inline-flex items-center gap-3 bg-primary text-white font-ui font-bold uppercase tracking-[1px] px-8 py-4 rounded-[4px] shadow-sm hover:bg-[#a3107c] hover:-translate-y-1 transition-all duration-300 mt-6"
            >
              Get Involved & Support Us
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Sidebar News */}
          <div className="bg-[#f7f9f9] rounded-2xl p-8 border border-gray-100 self-start sticky top-32">
            <h3 className="text-[24px] font-serif font-bold text-[#2c2d2e] mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
              <Building2 className="text-primary" /> Related News
            </h3>
            
            {relatedPosts.length > 0 ? (
              <div className="space-y-6">
                {relatedPosts.map((post, idx) => (
                  <Link key={idx} href={`/news/${post.slug}`} className="block group">
                    <span className="block text-primary font-ui font-bold uppercase tracking-wider text-[11px] mb-1 group-hover:text-[#2ea3f2] transition-colors">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                    <h4 className="text-[#2c2d2e] font-serif font-bold text-[16px] leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>
                ))}
                
                <Link href="/news" className="inline-block mt-4 text-[13px] text-primary font-ui font-bold uppercase tracking-wider hover:opacity-80">
                  View All News &rarr;
                </Link>
              </div>
            ) : (
              <p className="text-gray-500 font-sans text-sm italic">
                There are no recent news updates available for this specific project at the moment.
              </p>
            )}
            
          </div>
          
        </div>
      </section>
    </div>
  );
}
