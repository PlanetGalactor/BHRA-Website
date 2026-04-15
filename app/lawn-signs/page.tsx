export default function LawnSignsPage() {
  return (
    <div className="py-20 bg-border/30 flex-grow flex items-center">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Order a Lawn Sign</h1>
          <p className="text-lg text-foreground font-sans mb-10 max-w-xl mx-auto">
            Show your support for our community initiatives. Request a lawn sign and one of our volunteers will drop it off at your property.
          </p>
          
          <form action="https://formspree.io/f/mnjlnryk" method="POST" className="space-y-6 max-w-md mx-auto text-left">
            <input type="hidden" name="_subject" value="New Lawn Sign Request" />
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Name</label>
              <input type="text" name="name" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Full Address</label>
              <input type="text" name="address" id="address" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="123 Example Street" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Email</label>
              <input type="email" name="_replyto" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
            </div>
            <button type="submit" className="w-full mt-4 bg-primary text-white font-sans font-bold uppercase tracking-[1px] px-8 py-3 rounded border-2 border-primary hover:opacity-90 hover:scale-[1.02] transition-all">
              Request Sign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
