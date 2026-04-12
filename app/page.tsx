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
                  Est. 2003 in our community
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
      <section className="bg-[#f7f9f9] pt-[80px] pb-[160px] max-md:pt-[48px] max-md:pb-[80px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#f7f9f9] text-[#9b287b] rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-[#9b287b] mb-4">Who We Are</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em]">
                A dedicated group of neighbours working together to build a vibrant community in Buttonwood Hill.
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#f7f9f9] text-[#9b287b] rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-[#9b287b] mb-4">What We Do</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em]">
                Advocate for local issues, host events, and keep our residents informed and deeply connected.
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#f7f9f9] text-[#9b287b] rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                <ArrowRight size={32} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-[#9b287b] mb-4">Get Involved</h3>
              <p className="text-[#666666] font-sans text-[16px] leading-[1.7em]">
                Become a member, attend our meetings, and volunteer to make our neighbourhood even better.
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b287b]/40 to-[#9b287b]/10 mix-blend-multiply z-10 transition-opacity duration-500"></div>
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

      {/* Premium Section 4 - Contact Us */}
      <section className="relative py-24 lg:py-32 bg-[#9b287b] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-white/5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
        
        <div className="max-w-[1200px] relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 rounded-full">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-white">Let's Start a Conversation</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-white/90 font-sans">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-serif font-bold text-[#2c2d2e] mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f7f9f9] flex items-center justify-center group-hover:bg-[#9b287b]/10 transition-colors">
                      <svg className="w-5 h-5 text-[#9b287b]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <p className="text-[12px] font-bold uppercase tracking-widest text-[#666666] mb-1">Email</p>
                      <a href="mailto:Buttonwoodhillresidents@gmail.com" className="text-base font-medium text-[#2c2d2e] hover:text-[#9b287b] break-all transition-colors">
                        Buttonwoodhillresidents@<wbr/>gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f7f9f9] flex items-center justify-center group-hover:bg-[#9b287b]/10 transition-colors">
                      <svg className="w-5 h-5 text-[#9b287b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <p className="text-[12px] font-bold uppercase tracking-widest text-[#666666] mb-1">Phone</p>
                      <p className="text-base font-medium text-[#2c2d2e]">
                        416-436-2675
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-[20px] font-serif font-bold text-[#2c2d2e] mb-5">Why Join Us?</h3>
                <ul className="space-y-4 text-[15px] text-[#2c2d2e]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#9b287b] font-bold mt-0.5">✓</span>
                    <span>Stay informed on local developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#9b287b] font-bold mt-0.5">✓</span>
                    <span>Make your community voice heard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#9b287b] font-bold mt-0.5">✓</span>
                    <span>Attend our neighborhood events</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="p-8 lg:p-12 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                <div className="mb-10">
                  <h3 className="text-3xl lg:text-[32px] font-serif font-bold text-[#2c2d2e] mb-3">Send us a message</h3>
                  <p className="text-[#666666]">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID" method="POST" className="space-y-8">
                  <div dangerouslySetInnerHTML={{ __html: "<!-- Replace REPLACE_WITH_FORMSPREE_ID with your actual Formspree form ID -->" }}></div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label htmlFor="firstName" className="text-[12px] font-bold uppercase tracking-widest text-[#2c2d2e]">First Name *</label>
                      <input id="firstName" name="First Name" required className="w-full h-12 rounded-lg border border-gray-200 bg-[#f7f9f9] px-4 font-sans text-base transition-colors focus:border-[#9b287b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9b287b]/20" placeholder="John" />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="lastName" className="text-[12px] font-bold uppercase tracking-widest text-[#2c2d2e]">Last Name *</label>
                      <input id="lastName" name="Last Name" required className="w-full h-12 rounded-lg border border-gray-200 bg-[#f7f9f9] px-4 font-sans text-base transition-colors focus:border-[#9b287b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9b287b]/20" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <label htmlFor="email" className="text-[12px] font-bold uppercase tracking-widest text-[#2c2d2e]">Email Address *</label>
                      <input id="email" name="Email" type="email" required className="w-full h-12 rounded-lg border border-gray-200 bg-[#f7f9f9] px-4 font-sans text-base transition-colors focus:border-[#9b287b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9b287b]/20" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="phone" className="text-[12px] font-bold uppercase tracking-widest text-[#2c2d2e]">Phone Number</label>
                      <input id="phone" name="Phone" type="tel" className="w-full h-12 rounded-lg border border-gray-200 bg-[#f7f9f9] px-4 font-sans text-base transition-colors focus:border-[#9b287b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9b287b]/20" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label htmlFor="subject" className="text-[12px] font-bold uppercase tracking-widest text-[#2c2d2e]">Subject *</label>
                    <input id="subject" name="Subject" required className="w-full h-12 rounded-lg border border-gray-200 bg-[#f7f9f9] px-4 font-sans text-base transition-colors focus:border-[#9b287b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9b287b]/20" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2.5">
                    <label htmlFor="message" className="text-[12px] font-bold uppercase tracking-widest text-[#2c2d2e]">Message *</label>
                    <textarea id="message" name="Message" required rows={5} className="w-full rounded-lg border border-gray-200 bg-[#f7f9f9] p-4 font-sans text-base transition-colors resize-none focus:border-[#9b287b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9b287b]/20" placeholder="Tell us what's on your mind..."></textarea>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full sm:w-auto h-14 bg-[#9b287b] px-10 text-white font-ui font-bold uppercase tracking-[2px] text-[15px] rounded-lg border border-transparent hover:bg-[#a3107c] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      Send Message
                    </button>
                  </div>
                  
                  <p className="text-xs text-[#666666]">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
