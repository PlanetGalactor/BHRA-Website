import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c2d2e] text-white py-12 mt-auto">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://buttonwoodhillresidents.com/wp-content/uploads/2019/10/whitetransparent-300x131.png"
              alt="BHRA Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 font-sans text-sm pr-4">
              Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 font-ui uppercase tracking-wider text-sm font-semibold">
              <li><Link href="/about" className="text-white hover:opacity-80 transition-opacity">About Us</Link></li>
              <li><Link href="/news" className="text-white hover:opacity-80 transition-opacity">News & Media</Link></li>
              <li><Link href="/projects" className="text-white hover:opacity-80 transition-opacity">Projects</Link></li>
              <li><Link href="/get-involved" className="text-white hover:opacity-80 transition-opacity">Get Involved</Link></li>
              <li><Link href="/contact" className="text-white hover:opacity-80 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4 text-white">Get Involved</h3>
            <p className="text-gray-300 font-sans text-sm mb-4">
              Help maintain safe and thriving neighbourhoods. Volunteers and new members are always welcome.
            </p>
            <Link
              href="/get-involved"
              className="inline-block bg-transparent text-white font-sans font-bold uppercase tracking-[1px] px-8 py-3 rounded text-[16px] transition-all border-2 border-white hover:bg-white hover:text-[#2c2d2e]"
            >
              GET INVOLVED
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Buttonwood Hill Residents Association. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/buttonwoodhillresidents" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/buttonwoodresidentsassociation/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
