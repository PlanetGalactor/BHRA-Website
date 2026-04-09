import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    { name: "Buttonwood Hill Property", desc: "Latest info and hearings regarding the Buttonwood Hill local development initiatives.", image: "/images/projects/buttonwood.png" },
    { name: "Plant World", desc: "Updates on the Plant World site development and rezoning applications.", image: "/images/projects/plant-world.png" },
    { name: "Humbertown Plaza", desc: "Redevelopment plans and resident feedback regarding local commercial hubs.", image: "/images/projects/humbertown.jpg" },
    { name: "Eglinton West LRT", desc: "Transit expansion updates and community impact on our local infrastructure.", image: "/images/projects/eglinton-west.png" },
    { name: "Richview Square", desc: "Upcoming commercial and residential changes in the Richview footprint.", image: "/images/projects/richview-square.jpg" },
    { name: "La Rose Apartments", desc: "Details on ongoing proposals and high-rise density conversations.", image: "/images/projects/la-rose.jpg" }
  ];

  return (
    <div className="py-20 min-h-screen bg-[#f7f9f9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Projects & Developments</h1>
          <p className="text-xl text-foreground font-ui">
            We actively monitor and advocate for the community regarding new building developments, transit expansions, and urban planning initiatives in Buttonwood Hill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.name} className="bg-white rounded-[8px] border border-gray-100 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-[240px] w-full bg-primary/10 overflow-hidden">
                <Image 
                  src={proj.image} 
                  alt={proj.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{proj.name}</h3>
                <p className="text-foreground mb-8 flex-grow leading-relaxed">{proj.desc}</p>
                <div className="mt-auto">
                  <Link href="/news" className="text-primary font-bold font-ui uppercase tracking-widest text-sm hover:opacity-80 transition-opacity inline-flex items-center gap-2">
                    View Related News <span className="text-lg leading-none">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
