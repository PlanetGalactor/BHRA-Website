import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="">
      {/* 1. About Us (Hero/Banner Section) */}
      <section className="bg-border/30 py-20 relative text-center">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">About Us</h1>
          <p className="text-xl text-foreground font-ui">
            Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-20">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-primary mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none text-foreground font-sans">
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
      <section className="bg-border/30 py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Executive Team</h2>
            <p className="text-foreground font-ui text-lg">
              Thank you to our team of dedicated volunteers from the community who support our efforts and help drive change
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Christina Manulak", role: "President" },
              { name: "Ela Tkach", role: "Director" },
              { name: "Shabnam Ayough", role: "Director" },
              { name: "Pauline Saliba", role: "Director" },
              { name: "Nancy Roper", role: "Director" },
            ].map((member, i) => (
              <div key={i} className="bg-primary p-6 rounded-lg text-center text-white shadow-sm border border-[#a3107c]">
                <h3 className="text-xl font-serif font-bold mb-2">{member.name}</h3>
                <p className="font-ui uppercase tracking-widest text-xs opacity-90">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Community Projects */}
      <section className="py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Community Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
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
            ].map((proj) => (
              <div key={proj.name} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{proj.name}</h3>
                <p className="text-foreground text-sm font-sans mb-6 flex-grow">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
