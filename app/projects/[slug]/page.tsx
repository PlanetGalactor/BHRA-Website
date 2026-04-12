import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight, Building2, ExternalLink } from "lucide-react";
import { getSortedPostsData } from "@/lib/markdown";

type ProjectLink = { label: string; href: string };

const PROJECTS: {
  name: string;
  category: string;
  slug: string;
  desc: string;
  ldesc: string;
  image: string;
  links?: ProjectLink[];
  hideBoilerplate?: boolean;
}[] = [
  {
    name: "Buttonwood Hill Property",
    category: "Buttonwood Hill Property",
    slug: "buttonwood-property",
    desc: "Latest info and hearings regarding the Buttonwood Hill local development initiatives.",
    ldesc: "The Buttonwood Hill Property represents the core of our neighbourhood focus. Most recently, the City of Toronto is undertaking significant improvements to Buttonwood Park. The park design will be determined through extensive community engagement.",
    image: "/images/projects/buttonwood.png",
  },
  {
    name: "Lanterra Developments \u2014 Notting Hill Condos, 4000 Eglinton Avenue West (Plant World)",
    category: "Other Developments",
    slug: "plant-world",
    desc: "Plant World closed its doors at 4000 Eglinton Avenue West on September 30, 2019. Lanterra Developments are building \u201cNotting Hill Condos\u201d on this site featuring five residential towers in two Phases.",
    ldesc: "Plant World closed its doors at 4000 Eglinton Avenue West on September 30, 2019. Lanterra Developments are building \u201cNotting Hill Condos\u201d on this site featuring five residential towers in two Phases. According to the developers\u2019 official plans, Notting Hill Condominiums will include a total of five high-rise towers: The project is designed with a high-rise tower of 33 storeys as its central peak along with surrounding towers of 30, 27, 24 and 18. Total units 1,360. Features retail space and shared amenity areas including a public park.\n\nThe Buttonwood Hill Residents Association was actively involved in civic engagement regarding this project. We mobilized community feedback, attended related city council planning meetings, and represented the best interests of our neighbourhood\u2019s infrastructure, traffic volume, and green spaces.",
    image: "/images/projects/notting-hill.jpg",
    hideBoilerplate: true,
    links: [
      { label: "Notting Hill Condominiums by Lanterra Developments \u2014 Official Website", href: "https://nottinghillcondominiums.com/" },
      { label: "New Park at 4000 Eglinton Avenue West (City of Toronto)", href: "https://www.toronto.ca/city-government/planning-development/construction-new-facilities/new-parks-facilities/new-park-at-4000-eglinton-avenue-west/" },
    ],
  },
  {
    name: "Humbertown Plaza",
    category: "Humbertown Plaza",
    slug: "humbertown-plaza",
    desc: "First Capital are currently revitalizing Humbertown Mall and some shops will remain open during this process. First Capital anticipates the unveiling of the new and improved Humbertown Mall in 2026.",
    ldesc: "First Capital are currently revitalizing Humbertown Mall and some shops will remain open during this process. First Capital anticipates the unveiling of the new and improved Humbertown Mall in 2026.\n\nThe Humbertown Redevelopment is a partnership between Humbertown Mall owner and operator First Capital Realty and Tridel. The pre-construction plan is to build in and around the currently standing Humbertown Mall, located at 270 The Kingsway in the Etobicoke neighbourhood of Edenbridge-Humber Valley. At this address, three residential towers will be constructed to stand at a height of 9, 10, and 21 storeys.",
    image: "/images/projects/humbertown.jpg",
    hideBoilerplate: true,
    links: [
      { label: "Humbertown Mall Renovations", href: "https://www.humbertown.com/2025/09/30/renovations/" },
      { label: "Loblaws Humbertown Update", href: "https://www.facebook.com/loblaws1174/posts/1475096497736688/" },
    ],
  },
  {
    name: "Eglinton Crosstown LRT",
    category: "Eglinton West LRT",
    slug: "eglinton-west-lrt",
    desc: "Transit expansion updates and community impact on our local infrastructure.",
    ldesc: "The Eglinton Crosstown LRT is part of a mass transit plan between the City of Toronto and the Province of Ontario. The expansion is expected to be underground for much of the area between Mount Dennis to the airport.",
    image: "/images/projects/eglinton-west.png",
    links: [
      { label: "Eglinton Crosstown LRT \u2014 Metrolinx", href: "https://www.metrolinx.com/en/projects-and-programs/eglinton-crosstown-lrt" },
    ],
  },
  {
    name: "Richview Square",
    category: "Richview Square",
    slug: "richview-square",
    desc: "Upcoming commercial and residential changes in the Richview footprint.",
    ldesc: "Trinity Development Group and CreateTO (formerly Build Toronto) filed their zoning development application for the proposed buildings at Richview Square. The zoning by-law amendment application was submitted to permit the development of three new mixed-use buildings of 22, 22 and 11 storeys. Many modifications have been made by the developer after listening to community comments. Review continues.",
    image: "/images/projects/richview-square.jpg",
  },
  {
    name: "La Rose Apartments",
    category: "La Rose Apartments",
    slug: "la-rose-apartments",
    desc: "Details on ongoing proposals and high-rise density conversations.",
    ldesc: "On May 4, 2018 our office received a notice from the Local Planning Appeal Tribunal (LPAT) concerning the hearing of 45 La Rose Ave that took place in April. The notice of decision will grant a zoning by-law amendment to permit an infill apartment building at the proposed location of 45 La Rose Avenue. Several changes to the original plan have been made to specifically address concerns of local area residents. The application is still in the very early stages of planning.",
    image: "/images/projects/la-rose.jpg",
  },
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
            {project.ldesc.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {!project.hideBoilerplate && (
              <p>
                The Buttonwood Hill Residents Association is actively involved in civic engagement regarding this project. We mobilize community feedback, attend related city council planning meetings, and represent the best interests of our neighbourhood&apos;s infrastructure, traffic volume, and green spaces.
              </p>
            )}

            {project.links && project.links.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-[18px] font-serif font-bold text-[#2c2d2e]">Project Links</h3>
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary font-ui font-bold text-[15px] hover:underline hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={16} className="flex-shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            
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
