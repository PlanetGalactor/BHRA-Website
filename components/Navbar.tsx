"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "News & Media", href: "/news" },
  { name: "Projects & Developments", href: "/projects" },
  { name: "Get Involved", href: "/get-involved" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-[#f7f9f9] shadow-sm">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-24">
          {/* Logo Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
              <img
                src="https://demo.buttonwoodhillresidents.com/wp-content/uploads/2019/05/BlackButtonwoodHill.png"
                alt="BHRA Logo"
                className="h-[77px] w-auto"
              />
            </Link>
          </div>
          
          {/* Center Links */}
          <div className="hidden lg:flex items-center justify-center gap-[24px] xl:gap-[40px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-ui font-bold uppercase tracking-[2px] text-[14px] transition-colors duration-300 relative group
                    ${isActive ? "text-primary" : "text-[#2c2d2e] hover:text-primary"}
                  `}
                >
                  {link.name}
                  {/* Subtle underline hover effect */}
                  <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${isActive ? "scale-x-100" : ""}`}></span>
                </Link>
              );
            })}
          </div>
          
          {/* Right Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact"
              className="bg-primary text-white font-ui font-bold uppercase tracking-[2px] text-[14px] px-[24px] py-[10px] rounded-[4px] border-2 border-primary hover:bg-[#a3107c] hover:border-[#a3107c] hover:scale-[1.02] transition-all duration-300 shadow-sm"
              style={{ color: '#ffffff' }}
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2c2d2e] hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#f7f9f9] shadow-lg absolute w-full left-0 origin-top animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md font-ui font-bold uppercase tracking-[2px] text-sm transition-colors border-l-4
                    ${isActive ? "text-primary border-primary bg-[#f7f9f9]" : "text-[#2c2d2e] border-transparent hover:text-primary hover:bg-[#f7f9f9] hover:border-primary"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 px-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white font-ui font-bold uppercase tracking-[2px] block text-center px-[24px] py-[12px] rounded-[4px] border-2 border-primary hover:bg-[#a3107c] transition-colors shadow-sm"
                style={{ color: '#ffffff' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
