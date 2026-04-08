import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { name: "Buttonwood Hill Property", desc: "Latest info and hearings." },
    { name: "Eglinton West LRT", desc: "Transit expansion updates and community impact." },
    { name: "Humbertown Plaza", desc: "Redevelopment plans and resident feedback." },
    { name: "Richview Square", desc: "Upcoming commercial and residential changes." },
    { name: "La Rose Apartments", desc: "Details on ongoing proposals." }
  ];

  return (
    <div className="py-20">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Projects & Developments</h1>
          <p className="text-xl text-foreground font-ui">
            We actively monitor and advocate for the community regarding new building developments, transit expansions, and urban planning initiatives in Buttonwood Hill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((proj) => (
            <div key={proj.name} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">{proj.name}</h3>
              <p className="text-foreground mb-6 flex-grow">{proj.desc}</p>
              <Link href="/news" className="text-accent font-bold font-ui uppercase tracking-widest text-sm hover:text-primary transition-colors">
                View Related News →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
