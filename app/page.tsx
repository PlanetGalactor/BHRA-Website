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
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
            {/* Left side 60% */}
            <div className="w-full md:w-[60%]">
              <h2 className="text-[48px] font-serif font-bold text-[#9b287b] mb-6">Our Story</h2>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7]">
                Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods. Regular meetings are hosted to discuss and stay updated on important community topics. Social events and gatherings with food, live music and other entertainment, are also frequently organized to bring the community together.
              </p>
            </div>
            {/* Right side 40% */}
            <div className="w-full md:w-[40%] flex flex-col space-y-6 pt-0 md:pt-[76px]">
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

      {/* NEW Section - Image Break */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <Image 
          src="/images/event-break.jpg" 
          alt="BHRA Picnic Event" 
          fill 
          className="object-cover object-center absolute inset-0 z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b287b]/80 to-[#9b287b]/40 mix-blend-multiply z-10 transition-opacity duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
             {/* Optional text or logo here if desired */}
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
                  <h3 className="text-[26px] font-serif font-bold mb-4 leading-[1.2] line-clamp-2">
                    <Link href={`/news/${post.slug}`} className="text-[#2c2d2e] hover:text-[#9b287b] transition-colors duration-300">
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

      {/* Premium Section 4 - Get In Touch */}
      <section className="relative py-24 px-4 bg-[#f7f9f9] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-[#9b287b]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-[#2ea3f2]/5 blur-3xl"></div>
        
        <div className="relative max-w-[1200px] w-full mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#9b287b]/10 text-[#9b287b] text-sm font-bold uppercase tracking-wider mb-6 border border-[#9b287b]/20">
            Get In Touch
          </div>
          <h2 className="text-[40px] md:text-[56px] font-serif font-bold text-[#2c2d2e] mb-6 leading-tight">
            Let's Start a <span className="text-[#9b287b]">Conversation</span>
          </h2>
          <p className="text-lg text-[#666666] font-sans max-w-2xl mx-auto">
            Have any questions or concerns regarding our community? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="relative max-w-[1200px] w-full mx-auto shadow-2xl shadow-[#2c2d2e]/5 rounded-3xl overflow-hidden bg-white border border-[#f7f9f9]">
          <div className="grid lg:grid-cols-5 items-stretch">
            
            {/* Premium Left Column */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#9b287b] to-[#7a1f60] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between">
              {/* Subtle decorative circles */}
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-48 h-48 bg-[#2ea3f2]/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="font-serif font-bold text-[36px] mb-4">Contact Information</h3>
                <p className="text-white/80 font-sans text-[16px] leading-[1.7em] mb-12">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
                
                <div className="space-y-8">
                  {/* Item */}
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-white/70 text-[13px] font-bold uppercase tracking-widest mb-1">Email Us</h4>
                      <a href="mailto:Buttonwoodhillresidents@gmail.com" className="text-[16px] font-sans hover:underline underline-offset-4 decoration-white/50 break-all">
                        Buttonwoodhillresidents@<wbr/>gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-white/70 text-[13px] font-bold uppercase tracking-widest mb-1">Call Us</h4>
                      <div className="text-[16px] font-sans">
                        416-436-2675
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="relative z-10 mt-16 pt-10 border-t border-white/20">
                <Link 
                  href="/get-involved" 
                  className="inline-flex items-center gap-3 text-white font-ui font-bold text-[14px] uppercase tracking-[1px] group"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-[#9b287b] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                  </div>
                  Become a Member Today
                </Link>
              </div>
            </div>

            {/* Premium Right Column Form */}
            <div className="lg:col-span-3 p-10 md:p-14 bg-white relative">
              <form action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID" method="POST" className="space-y-8 flex flex-col h-full justify-center">
                {/* Replace REPLACE_WITH_FORMSPREE_ID with your actual Formspree form ID */}
                <div dangerouslySetInnerHTML={{ __html: "<!-- Replace REPLACE_WITH_FORMSPREE_ID with your actual Formspree form ID -->" }}></div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="Full Name"
                      id="name"
                      required
                      className="peer w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-[#2c2d2e] font-sans placeholder-transparent focus:outline-none focus:border-[#9b287b] transition-all"
                      placeholder="John Doe"
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-0 -top-3.5 text-[12px] font-bold uppercase tracking-widest text-[#666666] transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[12px] peer-focus:text-[#9b287b]"
                    >
                      Full Name *
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="Email Address"
                      id="email"
                      required
                      className="peer w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-[#2c2d2e] font-sans placeholder-transparent focus:outline-none focus:border-[#9b287b] transition-all"
                      placeholder="john@example.com"
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-0 -top-3.5 text-[12px] font-bold uppercase tracking-widest text-[#666666] transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[12px] peer-focus:text-[#9b287b]"
                    >
                      Email Address *
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="tel"
                      name="Phone Number"
                      id="phone"
                      className="peer w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-[#2c2d2e] font-sans placeholder-transparent focus:outline-none focus:border-[#9b287b] transition-all"
                      placeholder="416-555-0123"
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-0 -top-3.5 text-[12px] font-bold uppercase tracking-widest text-[#666666] transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[12px] peer-focus:text-[#9b287b]"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="Subject"
                      id="subject"
                      required
                      className="peer w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-[#2c2d2e] font-sans placeholder-transparent focus:outline-none focus:border-[#9b287b] transition-all"
                      placeholder="How can we help?"
                    />
                    <label 
                      htmlFor="subject" 
                      className="absolute left-0 -top-3.5 text-[12px] font-bold uppercase tracking-widest text-[#666666] transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[12px] peer-focus:text-[#9b287b]"
                    >
                      Subject *
                    </label>
                  </div>
                </div>

                <div className="relative group pt-4">
                  <textarea
                    name="Message"
                    id="message"
                    required
                    placeholder="Tell us what's on your mind..."
                    rows={4}
                    className="peer w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-[#2c2d2e] font-sans placeholder-transparent focus:outline-none focus:border-[#9b287b] transition-all resize-none"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 top-0 text-[12px] font-bold uppercase tracking-widest text-[#666666] transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-7 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#9b287b]"
                  >
                    Your Message *
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-[#2c2d2e] text-white font-ui font-bold uppercase tracking-[1.5px] text-[14px] px-10 py-5 rounded-full hover:bg-[#9b287b] transition-all duration-500 w-full md:w-auto"
                  >
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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
