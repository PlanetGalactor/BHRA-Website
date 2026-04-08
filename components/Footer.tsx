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
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/news" className="hover:text-accent transition-colors">News & Media</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/community" className="hover:text-accent transition-colors">Community</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4 text-white">Get Involved</h3>
            <p className="text-gray-300 font-sans text-sm mb-4">
              Help maintain safe and thriving neighbourhoods. Volunteers and new members are always welcome.
            </p>
            <Link
              href="/get-involved"
              className="inline-block bg-primary hover:bg-[#a3107c] text-white font-sans font-bold uppercase tracking-[1px] px-6 py-2 rounded text-sm transition-colors border-2 border-primary"
            >
              Join BHRA
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Buttonwood Hill Residents Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
