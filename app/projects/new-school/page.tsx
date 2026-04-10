import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, ExternalLink, CalendarClock, MapPin, Building2, Star } from "lucide-react";
import { getSortedPostsData } from "@/lib/markdown";

export default function ButtonwoodPropertyProjectPage() {
  const timeline = [
    { date: "Summer 2025", event: "Hire a design team" },
    { date: "Fall 2025 to Spring 2026", event: "Community engagement and design development" },
    { date: "Spring to Summer 2026", event: "Detailed design" },
    { date: "Summer 2026", event: "Hire a construction team" },
    { date: "Fall 2026", event: "Construction starts" },
    { date: "Fall 2026", event: "Construction complete" }
  ];

  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(p => p.category === "New School").slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/buttonwood.png" 
            alt="New School" 
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
            <span className="bg-[#2ea3f2] text-white font-ui font-bold uppercase tracking-widest text-[12px] px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
              <Star size={12} className="fill-white" /> Featured Monitored Development
            </span>
          </div>
          <h1 className="text-[40px] md:text-[56px] font-serif font-bold text-white mb-6 leading-[1.1]">
            New School
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
              The New School is our neighbourhood&apos;s focal point. Currently, the most active initiative is the Buttonwood Park Improvements Project.
            </p>
            <p>
              The City of Toronto is undertaking significant improvements to Buttonwood Park, located near Royal York Road and Eglinton Avenue West. As our neighbourhood expands, ensuring our local green space serves the diverse needs of families, children, and seniors is a top priority.
            </p>
            <p>
              The park design is actively being determined through community engagement. The finalized improvements are proposed to include upgraded accessible pathways, a closed-roof shade structure, increased diverse seating (including accessible seating and tables), and enhanced safety lighting.
            </p>
            <p>
              The vision statement co-created with the community establishes that the space will remain a peaceful, natural, and inclusive family-friendly environment that supports health and well-being.
            </p>
            
            <a 
              href="https://www.toronto.ca/city-government/planning-development/construction-new-facilities/park-facility-projects/buttonwood-park-improvements"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white font-ui font-bold uppercase tracking-[1px] px-8 py-4 rounded-[4px] shadow-sm hover:bg-[#a3107c] hover:-translate-y-1 transition-all duration-300 mt-6"
            >
              View City of Toronto Official Page
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 self-start sticky top-32">
            
            {/* Timeline Widget */}
            <div className="bg-[#f7f9f9] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-[20px] font-serif font-bold text-[#2c2d2e] mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">
                <CalendarClock className="text-primary" /> Active Timeline: Park Imprvs
              </h3>
              <div className="space-y-6">
                {timeline.map((step, idx) => (
                  <div key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                    {idx !== timeline.length - 1 && (
                      <div className="absolute left-[3px] top-4 w-[2px] h-[calc(100%+8px)] bg-primary/20"></div>
                    )}
                    <span className="block text-primary font-ui font-bold uppercase tracking-wider text-[12px] mb-1">
                      {step.date}
                    </span>
                    <p className="text-[#2c2d2e] font-sans text-[15px] leading-snug">
                      {step.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* News Widget */}
            <div className="bg-[#f7f9f9] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-[20px] font-serif font-bold text-[#2c2d2e] mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">
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
          
        </div>
      </section>
    </div>
  );
}
