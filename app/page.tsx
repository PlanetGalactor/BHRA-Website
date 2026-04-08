import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/markdown";
import { format } from "date-fns";
import { Users, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 1 - Hero */}
      <section className="relative w-full min-h-[560px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/hero-park.jpg" 
          alt="Buttonwood Park" 
          fill 
          priority 
          className="object-cover object-center absolute inset-0 z-0" 
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.45)] z-10"></div>
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center py-20">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold font-serif text-white mb-6 leading-[1.1] drop-shadow-md">
            Fostering Our Community Together
          </h1>
          <p className="text-lg md:text-[18px] text-white font-sans font-normal mb-10 max-w-3xl mx-auto leading-[1.7em] drop-shadow">
            Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/get-involved"
              className="bg-primary text-white font-sans font-bold uppercase tracking-[1px] px-[32px] py-[12px] rounded-[4px] border-2 border-primary hover:scale-[1.02] hover:opacity-95 transition-all duration-300 text-[16px] shadow-lg flex items-center justify-center"
              style={{ color: '#ffffff' }}
            >
              Get Involved
            </Link>
            <Link
              href="/about"
              className="bg-transparent text-white font-sans font-bold uppercase tracking-[1px] px-[32px] py-[12px] rounded-[4px] border-2 border-white hover:bg-white hover:text-primary hover:scale-[1.02] transition-all duration-300 text-[16px] shadow-lg flex items-center justify-center"
              style={{ color: '#ffffff' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 - About Strip */}
      <section className="bg-white py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-[#f7f9f9]">
              <div className="w-16 h-16 bg-[#f7f9f9] text-primary rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-primary mb-4">Who We Are</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] line-clamp-2">
                A dedicated group of neighbors working together to build a vibrant community in Buttonwood Hill.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-[#f7f9f9]">
              <div className="w-16 h-16 bg-[#f7f9f9] text-primary rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-primary mb-4">What We Do</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] line-clamp-2">
                Advocate for local issues, host events, and keep our residents informed and deeply connected.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-[#f7f9f9]">
              <div className="w-16 h-16 bg-[#f7f9f9] text-primary rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                <ArrowRight size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-primary mb-4">Get Involved</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] line-clamp-2">
                Become a member, attend our meetings, and volunteer to make our neighborhood even better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Latest News & Updates */}
      <section className="bg-[#f7f9f9] py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary">Latest News & Updates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
            {latestPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-[8px] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group border border-transparent hover:border-gray-100">
                <div className="h-[200px] bg-primary relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                  <div className="relative w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-0 flex items-center justify-center">
                    <img 
                      src="https://buttonwoodhillresidents.com/wp-content/uploads/2019/10/whitetransparent-300x131.png"
                      alt="BHRA Logo"
                      className="object-contain w-3/4 max-h-full"
                    />
                  </div>
                  <div className="absolute top-4 right-4 z-20 bg-primary text-white text-[12px] font-bold font-sans uppercase tracking-[1px] px-3 py-1 rounded-[4px] shadow-sm">
                    {post.category || 'News'}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[14px] text-[#666666] font-sans mb-3 block">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </span>
                  <h3 className="text-[26px] font-serif font-bold text-primary mb-4 leading-[1.2] group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    <Link href={`/news/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/news"
              className="bg-transparent text-primary font-sans font-bold uppercase tracking-[1px] px-[32px] py-[12px] rounded-[4px] border-2 border-primary hover:bg-primary hover:text-white hover:scale-[1.02] transition-all duration-300 text-[16px] inline-flex items-center justify-center"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 - Get In Touch */}
      <section className="bg-white py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0">
            
            {/* Left Column */}
            <div className="flex-1 md:pr-16 lg:pr-24 flex flex-col w-full">
              <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary mb-8">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-[#666666] font-sans text-[18px] w-20 flex-shrink-0 font-bold">Email:</span>
                  <a href="mailto:Buttonwoodhillresidents@gmail.com" className="text-accent hover:text-primary transition-colors duration-300 text-[18px] font-sans break-all">
                    Buttonwoodhillresidents@gmail.com
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="text-[#666666] font-sans text-[18px] w-20 flex-shrink-0 font-bold">Phone:</span>
                  <span className="text-[#666666] font-sans text-[18px]">
                    416-436-2675
                  </span>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1px] bg-[#f7f9f9] self-stretch mx-4"></div>

            {/* Right Column */}
            <div className="flex-1 md:pl-16 lg:pl-24 flex flex-col w-full">
              <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary mb-8">Get Involved</h2>
              <p className="text-[#666666] font-sans text-[18px] leading-[1.7em] mb-10">
                Have any questions or concerns regarding our community?
              </p>
              <div>
                <Link 
                  href="/get-involved"
                  className="bg-primary text-white font-sans font-bold uppercase tracking-[1px] px-[32px] py-[12px] rounded-[4px] border-2 border-primary hover:bg-[#a3107c] hover:border-[#a3107c] hover:scale-[1.02] transition-all duration-300 text-[16px] inline-flex items-center justify-center shadow-md"
                  style={{ color: '#ffffff' }}
                >
                  Get Involved
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
