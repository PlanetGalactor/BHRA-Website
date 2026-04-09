import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, FileText } from "lucide-react";

export default function NewslettersPage() {
  const newsletters = [
    {
      title: "Buttonwood Hill Residents Association Newsletter — Issue #1",
      date: "March 2026",
      description: "Buttonwood Park Improvements Update, Upcoming Community Engagement, Stay Connected",
      pdfFile: "/newsletters/BHRA_March_2026_Newsletter.pdf",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary py-[80px] max-md:py-[48px] relative text-center">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0"></div>
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-[48px] max-md:text-[36px] font-serif font-bold text-white mb-6">
            BHRA Newsletters
          </h1>
          <p className="text-[18px] text-white/90 font-sans max-w-2xl mx-auto leading-[1.7em]">
            Stay informed with our community newsletters. Browse our archive below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f7f9f9] py-[80px] max-md:py-[48px] flex-grow">
        <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsletters.map((newsletter, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                
                {/* Icon Column */}
                <div className="hidden md:flex flex-shrink-0 w-20 h-20 bg-primary/10 rounded-full items-center justify-center text-primary">
                  <FileText size={40} />
                </div>

                {/* Content Column */}
                <div className="flex-grow">
                  <span className="text-primary font-ui font-bold uppercase tracking-widest text-[13px] block mb-2">
                    {newsletter.date}
                  </span>
                  <h2 className="text-[26px] font-serif font-bold text-[#2c2d2e] mb-4">
                    {newsletter.title}
                  </h2>
                  <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] mb-8">
                    {newsletter.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={newsletter.pdfFile} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white font-ui font-bold uppercase tracking-[1px] text-[14px] px-6 py-3 rounded-[4px] hover:bg-[#a3107c] hover:-translate-y-1 transition-all shadow-sm"
                    >
                      <ExternalLink size={18} />
                      Read Online
                    </a>
                    
                    <a 
                      href={newsletter.pdfFile} 
                      download
                      className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary font-ui font-bold uppercase tracking-[1px] text-[14px] px-6 py-3 rounded-[4px] hover:bg-primary/5 hover:-translate-y-1 transition-all shadow-sm"
                    >
                      <Download size={18} />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
