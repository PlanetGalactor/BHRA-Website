import Link from "next/link";
import { ExternalLink, ArrowRight, Phone } from "lucide-react";

export default function QuickLinksPage() {
  const sections = [
    {
      title: "Follow BHRA",
      links: [
        { title: "Facebook", url: "https://www.facebook.com/buttonwoodhillresidents" },
        { title: "Instagram", url: "https://www.instagram.com/buttonwoodresidentsassociation" }
      ]
    },
    {
      title: "Local Developments",
      links: [
        { title: "Buttonwood Park Improvements Project (City of Toronto)", url: "https://www.toronto.ca/city-government/planning-development/construction-new-facilities/park-facility-projects/buttonwood-park-improvements" },
        { title: "Eglinton Crosstown LRT (Line 5)", url: "https://www.metrolinx.com/en/projects-and-programs/eglinton-crosstown-lrt" }
      ]
    },
    {
      title: "In the Neighbourhood",
      links: [
        { title: "New Catholic Elementary School in Ward 2", url: "https://www.tcdsb.org/o/corporateservices/page/new-schools" },
        { title: "Humbertown Shopping Centre", url: "https://www.humbertown.com/2025/09/30/renovations/" },
        { title: "Loblaws Humbertown", url: "https://www.facebook.com/loblaws1174/posts/1475096497736688/" }
      ]
    },
    {
      title: "Federal Government",
      links: [
        { title: "Parliament of Canada — House of Commons", url: "https://www.ourcommons.ca/en" },
        { title: "Current Members of Parliament", url: "https://www.ourcommons.ca/Members/en/" },
        { title: "Hon. Yvan Baker, MP Liberal (Etobicoke Centre)", url: "https://www.ourcommons.ca/Members/en/yvan-baker(105121)#contact" }
      ]
    },
    {
      title: "Provincial Government",
      links: [
        { title: "Legislative Assembly of Ontario", url: "https://www.ola.org/en/" },
        { title: "Hon. Doug Ford (Etobicoke North), Premier", url: "https://www.ola.org/en/members/all/doug-ford" },
        { title: "MPP Contact Information", url: "https://www.ola.org/en/members/current/contact-information" },
        { title: "Hon. Kinga Surma (Etobicoke Centre)", url: "https://www.ola.org/en/members/all/kinga-surma" }
      ]
    },
    {
      title: "City of Toronto",
      links: [
        { title: "City of Toronto", url: "https://www.toronto.ca/" },
        { title: "City Councillors", url: "https://www.toronto.ca/city-government/council/members-of-council/" },
        { title: "Councillor Stephen Holyday, Ward 2 — Etobicoke Centre", url: "https://www.toronto.ca/city-government/council/members-of-council/councillor-ward-2/" },
        { title: "Office of the Mayor", url: "https://www.toronto.ca/city-government/council/office-of-the-mayor/" }
      ]
    },
    {
      title: "Police & Safety",
      links: [
        { title: "Toronto Police Service 22 Division (Etobicoke)", url: "https://www.tps.ca/my-neighbourhood/22-division/" },
        { title: "Toronto Police Service", url: "https://www.tps.ca/" },
        { title: "Make the Right Call", url: "https://www.toronto.ca/home/311-toronto-at-your-service/make-the-right-call/" }
      ]
    },
    {
      title: "Mental Health",
      links: [
        { title: "Mental Health Resources, City of Toronto", url: "https://www.toronto.ca/community-people/health-wellness-care/health-programs-advice/mental-health-resources/" }
      ]
    }
  ];

  const emergencyNumbers = [
    { num: "911", label: "All Emergencies" },
    { num: "811", label: "Minor Medical Issues" },
    { num: "711", label: "Deaf or Hard of Hearing" },
    { num: "311", label: "City Services" },
    { num: "211", label: "Mental Health Support" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary py-[80px] max-md:py-[48px] relative text-center border-b-[8px] border-accent">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0"></div>
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-[48px] max-md:text-[36px] font-serif font-bold text-white mb-6">
            Quick Links & Community Resources
          </h1>
          <p className="text-[20px] text-white/90 font-sans max-w-2xl mx-auto leading-[1.7em]">
            Helpful links for Buttonwood Hill residents.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f7f9f9] py-[80px] max-md:py-[48px] flex-grow">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Emergency Numbers Pill Grid */}
          <div className="mb-16">
            <h2 className="text-[28px] font-serif font-bold text-[#2c2d2e] mb-6 flex items-center gap-3">
              <Phone className="text-primary" /> Emergency & Support Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {emergencyNumbers.map((em, idx) => (
                <div key={idx} className="bg-white border-2 border-primary/20 rounded-full px-6 py-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[28px] font-ui font-extrabold text-primary leading-none mb-1">{em.num}</span>
                  <span className="text-[12px] font-sans font-bold text-[#666666] uppercase tracking-wider">{em.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-200 mb-16"></div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                <h2 className="text-[24px] font-serif font-bold text-[#2c2d2e] border-b-2 border-primary/20 pb-3 inline-block">
                  {section.title}
                </h2>
                
                <div className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <a 
                      key={lIdx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {/* Left Accent Border */}
                      <div className="w-2 bg-primary self-stretch group-hover:bg-[#a3107c] transition-colors"></div>
                      
                      <div className="flex-grow p-5 pl-6">
                        <h3 className="text-[16px] font-serif font-bold text-[#2c2d2e] mb-1 group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-[13px] text-gray-500 font-sans truncate pr-4 max-w-[280px] sm:max-w-[400px]">
                          {link.url.replace(/^https?:\/\/(www\.)?/, '')}
                        </p>
                      </div>
                      
                      <div className="p-5 text-gray-400 group-hover:text-primary transition-colors group-hover:translate-x-1">
                        <ArrowRight size={20} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
