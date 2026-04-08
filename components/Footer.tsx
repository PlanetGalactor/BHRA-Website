import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2c2d2e] text-white pt-16 pb-6 border-t border-[#f7f9f9]/10">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: About BHRA */}
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
              <img
                src="https://buttonwoodhillresidents.com/wp-content/uploads/2019/10/whitetransparent-300x131.png"
                alt="Buttonwood Hill Residents Association Logo"
                className="h-[60px] w-auto"
              />
            </Link>
            <p className="text-[#ffffff] font-sans text-[14px] leading-[1.7em] mb-6 opacity-90 text-left">
              Fostering our community together. We bring the community together to advocate and stay informed about local events and issues impacting our residents.
            </p>
            <Link
              href="/get-involved"
              className="bg-transparent text-white font-ui font-bold uppercase tracking-[1px] text-[14px] px-[24px] py-[10px] rounded-[4px] border-2 border-white hover:bg-white hover:text-[#2c2d2e] transition-all duration-300"
              style={{ color: '#ffffff' }}
            >
              Get Involved
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col text-left">
            <h3 className="font-ui font-bold uppercase tracking-[2px] text-[16px] text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 font-sans text-[16px]">
              <li>
                <Link href="/about" className="text-white hover:opacity-70 transition-opacity duration-300 inline-block" style={{ color: '#ffffff' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white hover:opacity-70 transition-opacity duration-300 inline-block" style={{ color: '#ffffff' }}>
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:opacity-70 transition-opacity duration-300 inline-block" style={{ color: '#ffffff' }}>
                  Projects & Developments
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white hover:opacity-70 transition-opacity duration-300 inline-block" style={{ color: '#ffffff' }}>
                  Join The Association
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col text-left">
            <h3 className="font-ui font-bold uppercase tracking-[2px] text-[16px] text-white mb-6">Contact & Social</h3>
            <div className="space-y-4 font-sans text-[16px] mb-8">
              <div className="flex items-start">
                <span className="font-bold w-16 opacity-90 inline-block">Email:</span>
                <a href="mailto:Buttonwoodhillresidents@gmail.com" className="text-white hover:opacity-70 transition-opacity duration-300 break-all inline-block hover:underline" style={{ color: '#ffffff' }}>
                  Buttonwoodhillresidents@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="font-bold w-16 opacity-90 inline-block">Phone:</span>
                <span className="opacity-90 inline-block text-white" style={{ color: '#ffffff' }}>416-436-2675</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/buttonwoodhillresidents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity duration-300 inline-block"
                aria-label="Facebook"
                style={{ color: '#ffffff' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/buttonwoodresidentsassociation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity duration-300 inline-block"
                aria-label="Instagram"
                style={{ color: '#ffffff' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-white/20 text-center">
          <p className="text-white opacity-70 font-sans text-[14px]" style={{ color: '#ffffff' }}>
            &copy; {new Date().getFullYear()} Buttonwood Hill Residents Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
