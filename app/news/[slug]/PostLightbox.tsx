"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface PostLightboxProps {
  imageSrc: string;
  title: string;
}

export default function PostLightbox({ imageSrc, title }: PostLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="mb-16 cursor-pointer group" onClick={() => setIsOpen(true)}>
        <div className="relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm border-[2px] border-[#9b287b]">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span className="bg-white/90 text-primary font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg text-sm uppercase tracking-wider">
              Click to Expand
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#9b287b] transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X size={40} />
          </button>
          
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
