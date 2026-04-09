import Image from "next/image";
import Link from "next/link";
import { User, Calendar, MapPin, Building, Activity, Users } from "lucide-react";

export default function AboutPage() {
  const team = [
    { name: "Christina", role: "Executive Member" },
    { name: "Ela", role: "Executive Member" },
    { name: "Shabnam", role: "Executive Member" },
    { name: "Pauline", role: "Executive Member" },
  ];

  const timelineSteps = [
    {
      year: "2003",
      title: "The Beginning",
      content: "Buttonwood Hill Residents Association was formed when our neighbourhood became aware of a proposed development at 75 Lemonwood Drive. It was clear that our neighbours were concerned about the proposed height, density and increased traffic in the area.",
      icon: <Building className="w-5 h-5 text-white" />
    },
    {
      year: "The Action",
      title: "Getting Organized",
      content: "A group of 6 residents began to meet regularly. We talked to neighbours; attended public meetings; prepared petitions; became part of a working group with our City Councillor, the developer and City Staff.",
      icon: <Users className="w-5 h-5 text-white" />
    },
    {
      year: "The Result",
      title: "A Community Win",
      content: "We were advised that the builder was proposing a seniors’ retirement residence with reduced height. We happily welcomed seniors into our neighbourhood and approved the revised proposal. We also secured Section 37 funds of $150,000 for the improvement of Buttonwood Park.",
      icon: <Activity className="w-5 h-5 text-white" />
    },
    {
      year: "2017 & Beyond",
      title: "Continued Advocacy",
      content: "We fought to support the sale of Buttonwood School to a board and supported Friends of Silver Creek. It was a win/win outcome for both schools! We continually organize informative, well-attended community meetings for the continued vibrancy of Buttonwood Hill.",
      icon: <MapPin className="w-5 h-5 text-white" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero banner */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/hero-park.jpg" 
          alt="Buttonwood Hill Park" 
          fill 
          priority 
          className="object-cover object-center absolute inset-0 z-0 opacity-80 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-[#9b287b] mix-blend-multiply opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#9b287b] to-transparent z-10"></div>
        
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-wider mb-6 border border-white/20 backdrop-blur-sm">
            Est. 2003
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif font-bold text-white mb-6 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-lg md:text-[22px] text-white/90 font-sans max-w-3xl mx-auto leading-[1.6em] drop-shadow-md font-light">
            Bringing the community together to advocate, stay informed, and maintain a safe, thriving neighbourhood.
          </p>
        </div>
      </section>

      {/* 2. Timeline Journey */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background flair */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[48px] font-serif font-bold text-[#2c2d2e] mb-4">The BHRA Journey</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-12 md:space-y-24">
              {timelineSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex items-center md:justify-between flex-col md:flex-row group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Center Icon */}
                    <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-primary rounded-full flex items-center justify-center md:-translate-x-1/2 border-4 border-white shadow-md z-10 group-hover:scale-110 group-hover:bg-[#a3107c] transition-all duration-300 -translate-x-[24px]">
                      {step.icon}
                    </div>
                    
                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="bg-[#f7f9f9] p-8 rounded-2xl shadow-sm border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="text-primary font-ui font-bold uppercase tracking-widest text-[13px] mb-2 block">{step.year}</span>
                        <h3 className="text-[24px] font-serif font-bold text-[#2c2d2e] mb-4">{step.title}</h3>
                        <p className="text-[#666666] font-sans leading-[1.8em]">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Memory Strip */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 mt-8">
            <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-[#2c2d2e] mb-4">Our Community In Action</h2>
            <p className="text-[18px] text-[#666666] font-sans max-w-2xl mx-auto">
              Memories from our annual neighborhood picnics and gatherings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative h-[280px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-primary/20">
              <Image src="/images/about/picnic1.jpg" alt="BHRA Picnic Gathering" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#9b287b]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative h-[280px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-primary/20">
              <Image src="/images/about/picnic2.jpg" alt="BHRA Picnic Attendees" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#9b287b]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative h-[280px] md:h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-primary/20">
              <Image src="/images/about/picnic3.jpg" alt="BHRA Picnic Family" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#9b287b]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 21st Dev Inspired Executive Team */}
      <section className="bg-[#f7f9f9] py-24 md:py-32 relative">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[48px] font-serif font-bold text-[#2c2d2e] mb-4">Our Executive Team</h2>
            <p className="text-[18px] text-[#666666] font-sans max-w-2xl mx-auto mb-10">
              Dedicated neighbors volunteering their time and energy to advocate for Buttonwood Hill.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
              >
                {/* Background wave animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-primary/10 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                {/* Member Avatar */}
                <div
                  className="relative z-10 h-[100px] w-[100px] overflow-hidden rounded-full border-[4px] border-transparent bg-[#f7f9f9] transition-all duration-500 ease-out group-hover:border-primary group-hover:scale-105 flex items-center justify-center mb-6"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <User className="w-10 h-10 text-primary opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="relative z-10 text-[20px] font-serif font-bold text-[#2c2d2e] mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="relative z-10 text-[12px] font-ui uppercase tracking-widest text-[#666666] font-bold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Link to Community Projects */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-[36px] md:text-[48px] font-serif font-bold text-white mb-6">Explore Our Community Projects</h2>
          <p className="text-[18px] text-white/90 font-sans max-w-2xl mx-auto mb-10">
            We actively monitor local developments ranging from the Buttonwood Hill property out to the Eglinton West LRT. See what we are fighting for today.
          </p>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-3 bg-white text-primary font-ui font-bold uppercase tracking-[1px] px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Review Projects Data
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
