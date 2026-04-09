import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CalendarClock, MapPin } from "lucide-react";

export default function ButtonwoodParkProjectPage() {
  const timeline = [
    { date: "Summer 2025", event: "Hire a design team" },
    { date: "Fall 2025 to Spring 2026", event: "Community engagement and design development" },
    { date: "Spring to Summer 2026", event: "Detailed design" },
    { date: "Summer 2026", event: "Hire a construction team" },
    { date: "Fall 2026", event: "Construction starts" },
    { date: "Fall 2026", event: "Construction complete" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden bg-primary/95">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0"></div>
        <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 mt-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-ui font-bold uppercase tracking-wider text-sm">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="bg-[#2ea3f2] text-white font-ui font-bold uppercase tracking-widest text-[12px] px-3 py-1.5 rounded-full shadow-sm">
              In Progress
            </span>
            <span className="flex items-center gap-1.5 text-white/80 text-sm font-sans">
              <MapPin size={16} /> Royal York Rd & Eglinton Ave W
            </span>
          </div>
          <h1 className="text-[40px] md:text-[56px] font-serif font-bold text-white mb-6 leading-[1.1]">
            Buttonwood Park Improvements Project
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-20">
          
          {/* Main Description */}
          <div className="space-y-8 text-[#4a4a4a] font-sans text-[18px] leading-[1.8em]">
            <h2 className="text-[32px] font-serif font-bold text-primary mb-6">About the Project</h2>
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

          {/* Sidebar Timeline */}
          <div className="bg-[#f7f9f9] rounded-2xl p-8 border border-gray-100 self-start sticky top-32">
            <h3 className="text-[24px] font-serif font-bold text-[#2c2d2e] mb-8 flex items-center gap-3 border-b border-gray-200 pb-4">
              <CalendarClock className="text-primary" /> Project Timeline
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
            <p className="text-[12px] text-gray-400 font-sans italic mt-8 text-center">
              *Timeline is determined by the City of Toronto and is subject to change.
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
