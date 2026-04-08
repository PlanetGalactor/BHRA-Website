"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Projects", href: "/projects" },
  { name: "Community", href: "/community" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-border">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="https://demo.buttonwoodhillresidents.com/wp-content/uploads/2019/05/BlackButtonwoodHill.png"
                alt="BHRA Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#2c2d2e] hover:text-accent font-ui font-bold uppercase tracking-[2px] text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/lawn-signs"
              className="bg-primary hover:bg-[#a3107c] text-white font-sans font-bold uppercase tracking-[1px] px-6 py-3 rounded text-sm transition-col"
            >
              Order Signs
            </Link>
          </div>
          
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#2c2d2e] hover:text-accent block px-3 py-2 rounded-md font-ui font-bold uppercase tracking-[2px] text-sm"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/lawn-signs"
              onClick={() => setIsOpen(false)}
              className="bg-primary hover:bg-[#a3107c] text-white font-sans font-bold uppercase tracking-[1px] block text-center px-3 py-2 rounded-md text-sm mt-4"
            >
              Order Signs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
