import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <div className="py-20 bg-border/30">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="mb-16">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Join Our Community</h1>
          <p className="text-lg text-foreground font-sans leading-relaxed mb-8">
            Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods. Regular meetings are hosted to discuss and stay updated on important community topics. Social events and gatherings with food, live music and other entertainment, are also frequently organized to bring the community together.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-serif font-bold text-primary text-xl mb-4">Contact Information</h3>
            <p className="text-foreground mb-2">
              <strong>Email:</strong> <a href="mailto:Buttonwoodhillresidents@gmail.com" className="text-accent hover:text-primary transition-colors">Buttonwoodhillresidents@gmail.com</a>
            </p>
            <p>
              <a href="/membership-form.pdf" className="text-accent font-bold hover:text-primary transition-colors flex items-center gap-2">
                ↓ Download Membership Form
              </a>
            </p>
          </div>
        </div>
        
        {/* Form */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Membership Application</h2>
          
          <form action="https://formspree.io/f/REPLACE_WITH_ID" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">First Name *</label>
                <input type="text" name="firstName" id="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Last Name *</label>
                <input type="text" name="lastName" id="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Email *</label>
                <input type="email" name="_replyto" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Phone</label>
                <input type="text" name="phone" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Address</label>
              <input type="text" name="address" id="address" className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-3">
                Can you volunteer your time to help with community initiatives?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="volunteer" value="Yes" className="w-4 h-4 text-primary focus:ring-primary" />
                  <span className="text-foreground">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="volunteer" value="No" className="w-4 h-4 text-primary focus:ring-primary" />
                  <span className="text-foreground">No</span>
                </label>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-sans font-bold uppercase tracking-[1px] px-8 py-4 rounded border-2 border-primary hover:opacity-90 hover:scale-[1.02] transition-all"
              >
                JOIN BUTTONWOOD HILL RESIDENTS COMMUNITY
              </button>
            </div>
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 italic bg-gray-50 py-4 px-6 rounded border border-gray-200">
              Annual suggested $20 membership / household can be made by e-transfer to buttonwoodhillresidents@gmail.com
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
