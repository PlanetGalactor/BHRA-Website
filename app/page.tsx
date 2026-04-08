import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/markdown";
import { format } from "date-fns";

export default function Home() {
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 min-h-[500px] flex items-center relative overflow-hidden">
        <Image src="/images/hero-park.jpg" alt="Buttonwood Park" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
        <div className="max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6">
            Buttonwood Hill Residents Association
          </h1>
          <p className="text-xl md:text-2xl text-white font-ui mb-4 max-w-3xl mx-auto">
            Fostering our community together
          </p>
          <p className="text-lg text-white max-w-4xl mx-auto mb-10 leading-relaxed font-sans shadow-sm">
            Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/get-involved"
              className="bg-primary text-white font-sans font-bold uppercase tracking-[1px] px-8 py-3 rounded border-2 border-primary hover:opacity-90 hover:scale-[1.02] transition-all inline-block"
            >
              Get Involved
            </Link>
            <Link
              href="/projects"
              className="bg-transparent text-white border-2 border-white font-sans font-bold uppercase tracking-[1px] px-8 py-3 rounded transition-all hover:bg-white hover:text-primary inline-block"
            >
              Projects & Developments
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
              className="hidden sm:inline-flex text-primary hover:text-[#a3107c] font-ui font-bold uppercase tracking-[1px] transition-colors"
            >
              View All News →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-md border border-border overflow-hidden flex flex-col h-full group">
                <div className="h-48 bg-primary relative flex items-center justify-center p-6">
                  {/* Default fallback image with logo */}
                  <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image 
                      src="https://buttonwoodhillresidents.com/wp-content/uploads/2019/10/whitetransparent-300x131.png"
                      alt="BHRA Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary font-ui">{post.category || 'News'}</span>
                    <span className="text-sm text-gray-500">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3 line-clamp-2">
                    <Link href={`/news/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-foreground mb-6 line-clamp-3 flex-grow text-sm">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-primary font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity mt-auto inline-block"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Get In Touch */}
      <section className="bg-[#f7f9f9] py-20">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Contact Us</h3>
              <p className="text-foreground text-lg mb-6">
                <strong>Email:</strong> <a href="mailto:Buttonwoodhillresidents@gmail.com" className="text-primary hover:underline">Buttonwoodhillresidents@gmail.com</a><br/>
                <strong>Phone:</strong> 416-436-2675
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Get Involved</h3>
              <p className="text-foreground text-lg mb-6">Have any questions or concerns regarding our community?</p>
              <Link 
                href="/get-involved"
                className="bg-primary text-white font-sans font-bold uppercase tracking-[1px] px-8 py-3 rounded border-2 border-primary hover:opacity-90 hover:scale-[1.02] transition-all inline-block"
              >
                GET INVOLVED →
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
