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
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] z-10"></div>
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
              className="bg-[#9b287b] text-white font-sans font-bold uppercase tracking-[1px] px-[32px] py-[12px] rounded-[4px] border-2 border-[#9b287b] hover:scale-[1.02] hover:opacity-95 transition-all duration-300 text-[16px] shadow-lg flex items-center justify-center"
              style={{ color: '#ffffff' }}
            >
              Get Involved
            </Link>
            <Link
              href="/about"
              className="bg-transparent text-white font-sans font-bold uppercase tracking-[1px] px-[32px] py-[12px] rounded-[4px] border-2 border-white hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 text-[16px] shadow-lg flex items-center justify-center"
              style={{ color: '#ffffff' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* NEW Section - Our Story */}
      <section className="bg-white py-[80px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side 60% */}
            <div className="w-full md:w-[60%]">
              <h2 className="text-[48px] font-serif font-bold text-[#9b287b] mb-6">Our Story</h2>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7]">
                Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods. Regular meetings are hosted to discuss and stay updated on important community topics. Social events and gatherings with food, live music and other entertainment, are also frequently organized to bring the community together.
              </p>
            </div>
            {/* Right side 40% */}
            <div className="w-full md:w-[40%] flex flex-col space-y-6">
              <div className="border-l-4 border-[#9b287b] pl-6 py-2">
                <p className="text-[#9b287b] font-ui font-bold text-[18px] uppercase tracking-wide">
                  Est. in our community
                </p>
              </div>
              <div className="border-l-4 border-[#9b287b] pl-6 py-2">
                <p className="text-[#9b287b] font-ui font-bold text-[18px] uppercase tracking-wide">
                  Regular meetings & events
                </p>
              </div>
              <div className="border-l-4 border-[#9b287b] pl-6 py-2">
                <p className="text-[#9b287b] font-ui font-bold text-[18px] uppercase tracking-wide">
                  Advocating for residents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - About Strip */}
      <section className="bg-[#f7f9f9] py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#f7f9f9] text-[#9b287b] rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-[#9b287b] mb-4">Who We Are</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] line-clamp-2">
                A dedicated group of neighbors working together to build a vibrant community in Buttonwood Hill.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#f7f9f9] text-[#9b287b] rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-[#9b287b] mb-4">What We Do</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] line-clamp-2">
                Advocate for local issues, host events, and keep our residents informed and deeply connected.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#f7f9f9] text-[#9b287b] rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                <ArrowRight size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-[#9b287b] mb-4">Get Involved</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] line-clamp-2">
                Become a member, attend our meetings, and volunteer to make our neighborhood even better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Latest News & Updates */}
      <section className="bg-white py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-[#9b287b]">Latest News & Updates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
            {latestPosts.map((post) => (
              <div key={post.slug} className="bg-[#f7f9f9] rounded-[8px] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group border border-transparent hover:border-gray-200">
                <div className="h-[200px] bg-[#9b287b] relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[#9b287b] mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                  <div className="relative w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-0 flex items-center justify-center">
                    <img 
                      src="https://buttonwoodhillresidents.com/wp-content/uploads/2019/10/whitetransparent-300x131.png"
                      alt="BHRA Logo"
                      className="object-contain w-3/4 max-h-full"
                    />
                  </div>
                  <div className="absolute top-4 right-4 z-20 bg-[#9b287b] text-white text-[12px] font-bold font-sans uppercase tracking-[1px] px-3 py-1 rounded-[4px] shadow-sm">
                    {post.category || 'News'}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[14px] text-[#666666] font-sans mb-3 block">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </span>
                  <h3 className="text-[26px] font-serif font-bold text-[#9b287b] mb-4 leading-[1.2] group-hover:opacity-80 transition-opacity duration-300 line-clamp-2">
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
              className="bg-transparent text-[#9b287b] font-sans font-bold uppercase tracking-[1px] px-[32px] py-[12px] rounded-[4px] border-2 border-[#9b287b] hover:bg-[#9b287b] hover:text-white hover:scale-[1.02] transition-all duration-300 text-[16px] inline-flex items-center justify-center"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* NEW Section 4 - Get In Touch */}
      <section className="bg-[#9b287b] py-[80px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 md:gap-12">
            
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="text-[40px] font-serif font-bold text-white mb-6 leading-tight">
                Get In Touch. Get Involved.
              </h2>
              <p className="text-white font-sans text-[16px] leading-[1.7em] mb-8 opacity-90">
                Have any questions or concerns regarding our community?
              </p>
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:Buttonwoodhillresidents@gmail.com" 
                  className="block text-white font-sans text-[16px] hover:underline"
                >
                  <span className="font-bold opacity-100 uppercase tracking-widest text-[14px]">Email:</span><br/>Buttonwoodhillresidents@gmail.com
                </a>
                <div className="block text-white font-sans text-[16px]">
                  <span className="font-bold opacity-100 uppercase tracking-widest text-[14px]">Call Us:</span><br/>416-436-2675
                </div>
              </div>
              <div>
                <a 
                  href="/get-involved" 
                  className="text-white font-ui font-bold uppercase tracking-[1px] text-[14px] underline hover:opacity-80 transition-opacity"
                >
                  Download Membership Form
                </a>
              </div>
            </div>

            {/* Right Column - Inline Form */}
            <div className="w-full md:w-1/2">
              <form action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID" method="POST" className="space-y-5 bg-[#8a1f6a] p-8 rounded-xl shadow-inner border border-white/10">
                {/* Replace REPLACE_WITH_FORMSPREE_ID with your actual Formspree form ID */}
                <div dangerouslySetInnerHTML={{ __html: "<!-- Replace REPLACE_WITH_FORMSPREE_ID with your actual Formspree form ID -->" }}></div>
                <div>
                  <input
                    type="text"
                    name="Full Name"
                    placeholder="Full Name *"
                    required
                    className="w-full bg-white rounded-full px-5 py-3 text-[#9b287b] font-sans placeholder-[#9b287b]/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[15px]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="Phone Number"
                    placeholder="Phone Number (Optional)"
                    className="w-full bg-white rounded-full px-5 py-3 text-[#9b287b] font-sans placeholder-[#9b287b]/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[15px]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="Email Address"
                    placeholder="Email Address *"
                    required
                    className="w-full bg-white rounded-full px-5 py-3 text-[#9b287b] font-sans placeholder-[#9b287b]/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[15px]"
                  />
                </div>
                <div>
                  <textarea
                    name="Message"
                    placeholder="Message (Optional)"
                    rows={3}
                    className="w-full bg-white rounded-[20px] px-5 py-4 text-[#9b287b] font-sans placeholder-[#9b287b]/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[15px] resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-white text-[#9b287b] font-ui font-bold uppercase tracking-[1px] text-[15px] py-4 rounded-full hover:bg-gray-50 hover:scale-[1.02] transition-all duration-300 shadow-md"
                  >
                    JOIN MEMBERSHIP
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
