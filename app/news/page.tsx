"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Post } from "@/lib/markdown";
import { ImageIcon } from "lucide-react";

const CATEGORIES = [
  "All",
  "Buttonwood Hill Property",
  "Eglinton West LRT",
  "Humbertown Plaza",
  "Richview Square",
  "La Rose Apartments",
  "Other Developments"
];

const POSTS_PER_PAGE = 9;

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

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

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-white py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[48px] max-md:text-[36px] font-serif font-bold text-primary mb-6">
            News & Media
          </h1>
          <p className="text-[18px] text-[#666666] font-sans max-w-2xl mx-auto leading-[1.7em]">
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
                <div key={post.slug} className="bg-white rounded-[8px] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group border border-transparent hover:border-gray-100">
                  <div className="h-[200px] bg-primary relative flex items-center justify-center p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <div className="relative w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-0 flex items-center justify-center">
                      <img 
                        src="https://buttonwoodhillresidents.com/wp-content/uploads/2019/10/whitetransparent-300x131.png"
                        alt="BHRA Logo"
                        className="object-contain w-3/4 max-h-full"
                      />
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-primary text-white text-[12px] font-bold font-sans uppercase tracking-[1px] px-3 py-1 rounded-[4px] shadow-sm">
                      {post.category || 'News'}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[14px] text-[#666666] font-sans mb-3 block">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                    <h3 className="text-[26px] font-serif font-bold text-primary mb-4 leading-[1.2] group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      <Link href={`/news/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[#666666] font-sans text-[16px] leading-[1.7em] mb-6 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/news/${post.slug}`}
                        className="text-primary font-ui font-bold text-[14px] uppercase tracking-[1px] hover:text-accent transition-colors duration-300 flex items-center"
                      >
                        Read more <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
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
      <section className="bg-primary py-[80px] max-md:py-[48px]">
        <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[48px] max-md:text-[36px] font-serif font-bold text-white mb-4">Media & Photos</h2>
            <p className="text-[18px] text-white/90 font-sans mb-10">
              Photo albums from past community events.
            </p>
            
            <div className="bg-white/10 p-16 rounded-[8px] border-2 border-dashed border-white/20 text-center flex flex-col items-center justify-center max-w-3xl mx-auto backdrop-blur-sm">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
                <ImageIcon size={40} />
              </div>
              <h3 className="text-[26px] font-serif font-bold text-white mb-4">Coming Soon</h3>
              <p className="text-white/90 text-[16px] leading-[1.7em] max-w-md mx-auto">
                We are currently gathering our event photos to showcase our vibrant community here. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
