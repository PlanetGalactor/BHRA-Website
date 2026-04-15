"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Post } from "@/lib/markdown";
import { ImageIcon, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const CATEGORIES = [
  "All",
  "Buttonwood Hill Property",
  "Eglinton West LRT",
  "Humbertown Plaza",
  "Richview Square",
  "La Rose Apartments",
  "Other Developments"
];

const ALBUMS = [
  {
    title: "Picnic in the Park 2025",
    date: "September 2025",
    cover: "/images/albums/picnic-in-the-park-2025/67ab7bbc.jpg",
    photos: [
      "/images/albums/picnic-in-the-park-2025/67ab7bbc.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_0016.jpg",
      "/images/albums/picnic-in-the-park-2025/3243d120.jpg",
      "/images/albums/picnic-in-the-park-2025/3a512a0e.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9681.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9684.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9685.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9686.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9687.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9688.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9690.jpg",
      "/images/albums/picnic-in-the-park-2025/IMG_9700.jpg"
    ]
  },
  {
    title: "Buttonwood Park Picnic 2024",
    date: "September 2024",
    cover: "/images/albums/buttonwood-park-picnic-2024/IMG_0213.jpg",
    photos: [
      "/images/albums/buttonwood-park-picnic-2024/IMG_0213.jpg",
      "/images/albums/buttonwood-park-picnic-2024/IMG_4286.jpg"
    ]
  },
  {
    title: "Save Buttonwood Park 2024",
    date: "August 2024",
    cover: "/images/albums/save-buttonwood-park-2024/IMG_3582.jpg",
    photos: [
      "/images/albums/save-buttonwood-park-2024/IMG_3582.jpg",
      "/images/albums/save-buttonwood-park-2024/IMG_3586.jpg"
    ]
  },
  {
    title: "Community BBQ 2019",
    date: "June 2019",
    cover: "/images/albums/bhra-community-bbq-june-2019/IMG_3769.jpg",
    photos: [
      "/images/albums/bhra-community-bbq-june-2019/IMG_3769.jpg",
      "/images/albums/bhra-community-bbq-june-2019/IMG_3782.jpg"
    ]
  },
  {
    title: "Stuff The Bus",
    date: "December 2023",
    cover: "/images/albums/stuff-the-bus/IMG_4189.jpg",
    photos: [
      "/images/albums/stuff-the-bus/IMG_4189.jpg"
    ]
  }
];

const POSTS_PER_PAGE = 9;

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Lightbox State
  const [activeAlbum, setActiveAlbum] = useState<{ title: string, photos: string[] } | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (err) {
        console.error("Failed to load posts", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Handle Lightbox Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeAlbum) return;
      if (e.key === 'Escape') setActiveAlbum(null);
      if (e.key === 'ArrowRight') setActivePhotoIndex(prev => (prev + 1) % activeAlbum.photos.length);
      if (e.key === 'ArrowLeft') setActivePhotoIndex(prev => (prev - 1 + activeAlbum.photos.length) % activeAlbum.photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeAlbum]);

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Lightbox Overlay */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-300">
          <button 
            onClick={() => setActiveAlbum(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X size={36} />
          </button>
          
          <div className="absolute top-6 left-6 text-white">
            <h3 className="font-serif font-bold text-2xl">{activeAlbum.title}</h3>
            <p className="opacity-70">{activePhotoIndex + 1} / {activeAlbum.photos.length}</p>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex(prev => (prev - 1 + activeAlbum.photos.length) % activeAlbum.photos.length);
            }}
            className="absolute left-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={activeAlbum.photos[activePhotoIndex]} 
            alt="Album Photo" 
            className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl rounded-sm"
          />

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex(prev => (prev + 1) % activeAlbum.photos.length);
            }}
            className="absolute right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto">
            {activeAlbum.photos.map((photo, i) => (
              <button 
                key={i} 
                onClick={() => setActivePhotoIndex(i)}
                className={`w-16 h-12 flex-shrink-0 relative rounded-sm overflow-hidden border-2 transition-all ${activePhotoIndex === i ? 'border-primary opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                <img src={photo} className="absolute inset-0 w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Header Section */}
      <section className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/news-hero.jpg" 
          alt="News and Media Hero" 
          fill 
          priority 
          className="object-cover object-center absolute inset-0 z-0" 
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)] z-10"></div>
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-[80px] max-md:py-[48px]">
          <h1 className="text-[48px] max-md:text-[36px] font-serif font-bold text-white mb-6 drop-shadow-md">
            News & Media
          </h1>
          <p className="text-[18px] text-white/90 font-sans max-w-2xl mx-auto leading-[1.7em] drop-shadow">
            Latest updates, community news, and active developments in Buttonwood Hill.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#f7f9f9] py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                  className={`px-6 py-[10px] rounded-full font-ui font-bold text-[14px] tracking-[1px] uppercase transition-all duration-300 border-2
                    ${isActive 
                      ? 'bg-primary border-primary text-white shadow-md scale-105' 
                      : 'bg-white border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-20 text-center text-[#666666] font-sans text-[18px]">Loading posts...</div>
          )}

          {/* Posts Grid */}
          {!loading && paginatedPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-16">
              {paginatedPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/news/${post.slug}`}
                  className="bg-white rounded-[8px] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group border border-transparent hover:border-gray-100 cursor-pointer"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={post.has_image && post.image ? post.image : "/images/hero-park.jpg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#9b287b]/80 to-transparent" />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[12px] font-bold font-sans uppercase tracking-[1px] px-3 py-1 rounded-[4px] shadow-sm">
                      {post.category || 'News'}
                    </div>
                    {/* Title over gradient */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-3">
                      <p className="text-white font-serif text-base font-semibold line-clamp-2 leading-snug">
                        {post.title}
                      </p>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[14px] text-[#666666] font-sans mb-3 block">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                    <p className="text-[#666666] font-sans text-[15px] leading-[1.6em] mb-6 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <span className="text-primary font-ui font-bold text-[13px] uppercase tracking-[1px] group-hover:text-accent transition-colors duration-300 flex items-center">
                        Read more <span className="ml-2">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}


          {!loading && paginatedPosts.length === 0 && (
            <div className="py-20 text-center bg-white rounded-[8px] shadow-sm border border-gray-100">
              <h3 className="text-[26px] font-serif font-bold text-primary mb-4">No posts found</h3>
              <p className="text-[#666666] text-[16px] font-sans">We couldn't find any news items in this category.</p>
            </div>
          )}

          {/* Pagination Controls */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 py-8">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="text-primary font-ui font-bold uppercase tracking-[1px] text-[14px] px-4 py-2 hover:text-[#a3107c] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center"
              >
                <span className="mr-2">←</span> Previous
              </button>
              <span className="text-[#666666] font-ui font-bold text-[14px]">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="text-primary font-ui font-bold uppercase tracking-[1px] text-[14px] px-4 py-2 hover:text-[#a3107c] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center"
              >
                Next <span className="ml-2">→</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Media & Photos Section */}
      <section className="bg-primary py-[80px] border-t border-primary/90">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-white mb-4">Media & Photos</h2>
            <div className="w-24 h-1.5 bg-white/30 mx-auto rounded-full mb-6"></div>
            <p className="text-[18px] text-white/90 font-sans mb-10 max-w-2xl mx-auto">
              Explore photo albums from our past community events, picnics, and townhalls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALBUMS.map((album, index) => (
              <button 
                key={index}
                onClick={() => {
                  setActiveAlbum(album);
                  setActivePhotoIndex(0);
                }}
                className="group text-left bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border-2 border-transparent hover:border-accent hover:-translate-y-1"
              >
                <div className="relative h-[250px] w-full overflow-hidden bg-gray-100">
                  <Image 
                    src={album.cover} 
                    alt={album.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#9b287b]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Photo Count Badge */}
                  <div className="absolute bottom-4 right-4 bg-primary/90 text-white backdrop-blur-sm shadow-md px-3 py-1.5 rounded-full flex items-center gap-2 font-ui font-bold text-[12px] tracking-wider z-10">
                    <Camera size={14} />
                    {album.photos.length} Photos
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-accent font-ui uppercase tracking-widest text-[12px] font-bold block mb-2">
                    {album.date}
                  </span>
                  <h3 className="text-[22px] font-serif font-bold text-[#2c2d2e] group-hover:text-primary transition-colors leading-[1.3]">
                    {album.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
