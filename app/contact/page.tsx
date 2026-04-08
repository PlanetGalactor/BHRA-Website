export default function ContactPage() {
  return (
    <div className="py-20 bg-border/30">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-serif font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-xl text-foreground font-ui mb-8">
              Have a question or want to get involved with the Buttonwood Hill Residents Association? Reach out using the form.
            </p>
            
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-serif text-primary mb-2">Our Neighborhood</h3>
                <p className="text-foreground">Buttonwood Hill<br/>Etobicoke, ON</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <form action="https://formspree.io/f/placeholder-replace-me" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Name</label>
                <input type="text" name="name" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" name="_replyto" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 font-ui uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" id="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-[#a3107c] text-white font-sans font-bold uppercase tracking-[1px] py-4 rounded transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
