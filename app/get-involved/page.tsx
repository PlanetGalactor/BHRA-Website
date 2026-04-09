import Link from "next/link";
import { Download } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Intro Section */}
      <section className="bg-[#f7f9f9] py-[80px] max-md:py-[48px] border-b border-gray-200">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary mb-6">
              Join Our Community
            </h1>
            <p className="text-[#666666] font-sans text-[18px] leading-[1.8em] mb-10">
              Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods. Regular meetings are hosted to discuss and stay updated on important community topics. Social events and gatherings with food, live music and other entertainment, are also frequently organized to bring the community together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="mailto:Buttonwoodhillresidents@gmail.com" 
                className="bg-primary text-white font-ui font-bold uppercase tracking-[1px] text-[16px] px-8 py-4 rounded-md shadow-md hover:bg-[#a3107c] hover:shadow-lg transition-all"
                style={{ color: '#ffffff' }}
              >
                Email Us
              </a>
              <a 
                href="/get-involved"
                className="flex items-center bg-transparent text-primary font-ui font-bold uppercase tracking-[1px] text-[16px] px-8 py-4 rounded-md border-2 border-primary hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <Download size={18} className="mr-2" /> Download Membership Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="bg-primary py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[640px] mx-auto bg-white p-8 md:p-12 rounded-[8px] shadow-lg border border-[#f7f9f9]">
            
            <form action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#2c2d2e] font-ui font-bold uppercase tracking-[1px] text-[12px] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="First Name"
                    required
                    className="w-full bg-[#f7f9f9] border border-gray-200 rounded-[4px] px-4 py-3 text-[#2c2d2e] font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[#2c2d2e] font-ui font-bold uppercase tracking-[1px] text-[12px] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="Last Name"
                    required
                    className="w-full bg-[#f7f9f9] border border-gray-200 rounded-[4px] px-4 py-3 text-[#2c2d2e] font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[#2c2d2e] font-ui font-bold uppercase tracking-[1px] text-[12px] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  className="w-full bg-[#f7f9f9] border border-gray-200 rounded-[4px] px-4 py-3 text-[#2c2d2e] font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#2c2d2e] font-ui font-bold uppercase tracking-[1px] text-[12px] mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="Phone"
                  className="w-full bg-[#f7f9f9] border border-gray-200 rounded-[4px] px-4 py-3 text-[#2c2d2e] font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-[#2c2d2e] font-ui font-bold uppercase tracking-[1px] text-[12px] mb-2">
                  Address (Optional)
                </label>
                <input
                  type="text"
                  id="address"
                  name="Address"
                  className="w-full bg-[#f7f9f9] border border-gray-200 rounded-[4px] px-4 py-3 text-[#2c2d2e] font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div className="pt-2">
                <p className="block text-[#2c2d2e] font-ui font-bold uppercase tracking-[1px] text-[12px] mb-3">
                  Can you volunteer your time?
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center text-[#666666] font-sans text-[16px] cursor-pointer">
                    <input type="radio" name="Volunteer" value="Yes" className="mr-2 w-4 h-4 text-primary bg-[#f7f9f9] border-gray-300 focus:ring-primary" /> Yes
                  </label>
                  <label className="flex items-center text-[#666666] font-sans text-[16px] cursor-pointer">
                    <input type="radio" name="Volunteer" value="No" className="mr-2 w-4 h-4 text-primary bg-[#f7f9f9] border-gray-300 focus:ring-primary" defaultChecked /> No
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-ui font-bold uppercase tracking-[1px] text-[16px] py-[16px] rounded-[4px] border-2 border-primary hover:bg-[#a3107c] hover:border-[#a3107c] transition-all shadow-md hover:shadow-lg"
                  style={{ color: '#ffffff' }}
                >
                  JOIN BUTTONWOOD HILL RESIDENTS COMMUNITY
                </button>
              </div>
            </form>

            <div className="mt-8 p-4 bg-[#f7f9f9] border-l-4 border-primary rounded-r-[4px]">
              <p className="text-[#666666] font-sans text-[14px] italic leading-[1.6em]">
                Annual suggested $20 membership / household can be made by e-transfer to <a href="mailto:buttonwoodhillresidents@gmail.com" className="text-primary hover:underline font-bold not-italic">buttonwoodhillresidents@gmail.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
