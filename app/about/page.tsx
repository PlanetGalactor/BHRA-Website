import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export default function AboutPage() {
  const team = [
    { name: "Christina", role: "Executive Member" },
    { name: "Ela", role: "Executive Member" },
    { name: "Shabnam", role: "Executive Member" },
    { name: "Pauline", role: "Executive Member" },
    { name: "Nancy", role: "Executive Member" },
  ];

  const projects = [
    { 
      name: "Buttonwood Hill Property", 
      desc: "Buttonwood Hill School was purchased by the Toronto Catholic District School Board on March 8, 2019. This site was recently ranked as #1 on the 2019-2020 Capital Priorities list... On October 2, 2019, our Board met with Trustee Markus de Domenico and confirmed our request for a community consultation meeting." 
    },
    { 
      name: "Plant World Development", 
      desc: "Plant World closed its doors as of September 30, 2019. Four new towers are planned for this site, 3 buildings of 25-storeys and a 21-storey building, with a total of 1360 units." 
    },
    { 
      name: "Humbertown Plaza", 
      desc: "This development’s been approved. A sales pavilion will likely appear this fall toward the end of 2018. Construction will take 2 ½ to 3 years. During construction, the LCBO will set up a trailer in the next parking lot... The construction of Block 5 will span 2-3 years." 
    },
    { 
      name: "Richview Square", 
      desc: "Trinity Development Group and CreateTO (formerly Build Toronto) filed their zoning development application for three new mixed-use buildings of 22, 22 and 11 storeys. Many modifications have been made by the developer after listening to community comments. In April of this year, Trinity Development Group and CreateTO filed for buildings of 22, 22, and 16 storeys. Concerns have been clear that 22 floor residential buildings will not be supported by the community." 
    },
    { 
      name: "Richview Square 2 (Shannex Development)", 
      desc: "This development has yielded $463,000 in Section 42 funds (rules governing parkland dedication) to be utilized for improvements to nearby parks." 
    },
    { 
      name: "St. Stevens Court", 
      desc: "Five buildings (6-9 storeys) will be constructed containing 523 units. Construction will get underway in the first half of 2019. Four buildings were approved (9, 6, 6 and 6 storeys)... Two buildings have rental units, two will be for-purchase condominiums." 
    },
    { 
      name: "La Rose Apartments", 
      desc: "A seven-storey rental apartment building has been proposed including 187 units adjacent to an existing 16 storey building. The decision will grant a zoning by-law amendment to permit an infill apartment building." 
    },
    { 
      name: "Eglinton West LRT", 
      desc: "Part of a mass transit plan between the City of Toronto and the Province of Ontario. Expansion is expected to be underground for much of the area between Mount Dennis and the airport." 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero banner */}
      <section className="bg-gradient-to-r from-primary to-[#851d68] py-[120px] relative text-center flex items-center justify-center border-b-[8px] border-accent">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-serif font-bold text-white mb-6 drop-shadow-sm">
            About Us
          </h1>
          <p className="text-lg md:text-[20px] text-white font-sans max-w-3xl mx-auto leading-[1.6em] opacity-90">
            Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="bg-white py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-[800px] mx-auto text-[#666666] font-sans text-[18px] leading-[1.8em] space-y-6">
            <p>
              Buttonwood Hill Residents Association was formed in 2003 when our neighbourhood became aware of a proposed development at 75 Lemonwood Drive. It was clear that our neighbours were concerned about the proposed height, density and increased traffic in the area.
            </p>
            <p>
              A group of 6 residents began to meet regularly. We talked to neighbours; attended public meetings; prepared petitions; became part of a working group with our City Councillor, the developer and City Staff.
            </p>
            <p>
              We were then advised that the builder was proposing to build a seniors’ retirement residence and would also reduce the height of the building. We were happy to welcome seniors into our neighbourhood and so approval to a revised proposal was given with the provision that the building would always remain a seniors’ residence or long term care facility. We also secured Section 37 funds from the developer of $150,000.00 to be used for the improvement of Buttonwood Park for everyone to enjoy.
            </p>
            <p>
              Most recently, in 2017, Buttonwood Hill Residents Association fought to support the sale of Buttonwood Hill Public School to a school board and provided support to Friends of Silver Creek to help Save Silver Creek School. Today, we are very happy to report that it was a win/win outcome for both schools. After working so well together, we partnered with Friends of Silver Creek this past March to present an informative and well-attended community meeting at Silver Creek School on the topic of Planning Section Funds.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Executive Team */}
      <section className="bg-[#f7f9f9] py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary mb-6">Executive Team</h2>
            <p className="text-[#666666] font-sans text-[18px] leading-[1.7em]">
              Thank you to our dedicated volunteers from the community who support our efforts and help drive change
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center group">
                <div className="w-[80px] h-[80px] bg-[#f7f9f9] rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                  <User size={36} />
                </div>
                <h3 className="text-[22px] font-serif font-bold text-primary mb-2">{member.name}</h3>
                <p className="font-ui uppercase tracking-[1px] text-[12px] text-[#666666] font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Community Projects */}
      <section className="bg-white py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary mb-16 text-center">Community Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((proj) => (
              <div key={proj.name} className="bg-[#f7f9f9] p-8 md:p-10 rounded-[8px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-transparent hover:border-gray-200">
                <h3 className="text-[26px] font-serif font-bold text-primary mb-4 leading-[1.3]">{proj.name}</h3>
                <p className="text-[#666666] text-[16px] leading-[1.7em] font-sans mb-8 flex-grow">{proj.desc}</p>
                <div className="mt-auto">
                  <Link href={`/projects#${proj.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-primary font-ui font-bold uppercase tracking-[1px] text-[14px] hover:text-accent transition-colors duration-300 flex items-center">
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
