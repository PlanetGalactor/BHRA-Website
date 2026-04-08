import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";
import { format } from "date-fns";

export default function Home() {
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-border py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-primary mb-6">
            Buttonwood Hill Residents Association
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-ui mb-4 max-w-3xl mx-auto">
            Fostering our community together
          </p>
          <p className="text-lg text-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
            Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/get-involved"
              className="bg-primary hover:bg-[#a3107c] text-white font-sans font-bold uppercase tracking-[1px] px-8 py-4 rounded text-base transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/lawn-signs"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-sans font-bold uppercase tracking-[1px] px-8 py-4 rounded text-base transition-colors"
            >
              Order Lawn Signs
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-2">Latest News & Updates</h2>
              <p className="text-foreground">Stay informed about developments in our neighbourhood.</p>
            </div>
            <Link
              href="/news"
              className="hidden sm:inline-flex text-accent hover:text-primary font-ui font-bold uppercase tracking-[1px] transition-colors"
            >
              View All News →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="h-48 bg-gray-200 relative">
                  {/* Placeholder for featured image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                    <span className="font-ui uppercase font-bold tracking-widest">{post.category || 'News'}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent font-ui">{post.category || 'News'}</span>
                    <span className="text-sm text-gray-500">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 line-clamp-2">
                    <Link href={`/news/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-foreground mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-primary hover:text-accent font-bold text-sm tracking-wide transition-colors mt-auto inline-block"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/news"
              className="text-accent hover:text-primary font-ui font-bold uppercase tracking-[1px] transition-colors"
            >
              View All News →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="bg-border py-20 pb-32">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "About Us", href: "/about", desc: "Learn about our committee, history, and mission." },
              { title: "Developments", href: "/projects", desc: "Track active building projects in the area." },
              { title: "Our Community", href: "/community", desc: "Local resources and neighbourhood info." }
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col text-center">
                <h3 className="text-2xl font-serif text-primary mb-3">{link.title}</h3>
                <p className="text-foreground mb-4">{link.desc}</p>
                <span className="text-accent font-bold mt-auto group-hover:text-primary transition-colors">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
