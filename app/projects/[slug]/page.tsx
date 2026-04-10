import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight, Building2, MapPin } from "lucide-react";
import { getSortedPostsData } from "@/lib/markdown";

const PROJECTS = [
  { name: "Buttonwood Hill Property", category: "Buttonwood Hill Property", slug: "buttonwood-property", desc: "Latest info and hearings regarding the Buttonwood Hill local development initiatives.", ldesc: "The Buttonwood Hill Property represents the core of our neighbourhood focus. Most recently, the City of Toronto is undertaking significant improvements to Buttonwood Park. The park design will be determined through extensive community engagement.", image: "/images/projects/buttonwood.png" },
  { name: "Plant World", category: "Other Developments", slug: "plant-world", desc: "Updates on the Plant World site development and rezoning applications.", ldesc: "Plant World closed its doors as of September 30, 2019. Four new towers are planned for this site, 3 buildings of 25-storeys and a 21-storey building, with a total of 1360 units. Address: 4000 Eglinton Ave W, Etobicoke, ON M9A 4M2", image: "/images/projects/plant-world.png" },
  { name: "Humbertown Plaza", category: "Humbertown Plaza", slug: "humbertown-plaza", desc: "Redevelopment plans and resident feedback regarding local commercial hubs.", ldesc: "This development has been approved. As of December 2019, the sales office is now open for the new condominium units that will be built at the site. First Capital confirmed that they have submitted a site plan amendment this spring in regard to changes to what is known as Block 5—where the LCBO and Bulk Barn are currently located. The construction of Block 5 will span 2-3 years.", image: "/images/projects/humbertown.jpg" },
  { name: "Eglinton West LRT", category: "Eglinton West LRT", slug: "eglinton-west-lrt", desc: "Transit expansion updates and community impact on our local infrastructure.", ldesc: "The Eglinton West LRT is part of a mass transit plan between the City of Toronto and the Province of Ontario. The Eglinton West LRT expansion is expected to be underground for much of the area between Mount Dennis to the airport.", image: "/images/projects/eglinton-west.png" },
  { name: "Richview Square", category: "Richview Square", slug: "richview-square", desc: "Upcoming commercial and residential changes in the Richview footprint.", ldesc: "Trinity Development Group and CreateTO (formerly Build Toronto) filed their zoning development application for the proposed buildings at Richview Square. The zoning by-law amendment application was submitted to permit the development of three new mixed-use buildings of 22, 22 and 11 storeys. Many modifications have been made by the developer after listening to community comments. Review continues.", image: "/images/projects/richview-square.jpg" },
  { name: "La Rose Apartments", category: "La Rose Apartments", slug: "la-rose-apartments", desc: "Details on ongoing proposals and high-rise density conversations.", ldesc: "On May 4, 2018 our office received a notice from the Local Planning Appeal Tribunal (LPAT) concerning the hearing of 45 La Rose Ave that took place in April. The notice of decision will grant a zoning by-law amendment to permit an infill apartment building at the proposed location of 45 La Rose Avenue. Several changes to the original plan have been made to specifically address concerns of local area residents. The application is still in the very early stages of planning.", image: "/images/projects/la-rose.jpg" }
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

export default async function DynamicProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find(p => p.slug === resolvedParams.slug);
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
