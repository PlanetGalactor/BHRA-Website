"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Post } from "@/lib/markdown";

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
    <div className="py-16">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">News & Media</h1>
          <p className="text-xl text-foreground font-ui max-w-2xl mx-auto">
            Latest updates, community news, and active developments in Buttonwood Hill.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`px-4 py-2 rounded font-ui font-bold text-sm tracking-wider uppercase transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-20 text-center text-foreground font-ui">Loading posts...</div>
        )}

        {/* Posts Grid */}
        {!loading && paginatedPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full group">
                <div className="h-48 bg-primary relative flex items-center justify-center p-6 bg-[#9b287b]">
                  <div className="relative w-full h-full opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image 
                      src="https://buttonwoodhillresidents.com/wp-content/uploads/2019/10/whitetransparent-300x131.png"
                      alt="BHRA Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-ui bg-primary/10 px-2 py-1 rounded">
                      {post.category || 'News'}
                    </span>
                    <span className="text-xs text-gray-500 font-sans">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">
                    <Link href={`/news/${post.slug}`} className="hover:text-primary/80 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-foreground text-sm font-sans mb-4 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-primary font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity mt-auto inline-block"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && paginatedPosts.length === 0 && (
          <div className="py-20 text-center bg-border/30 rounded-lg border border-gray-100">
            <h3 className="text-2xl font-serif text-primary mb-2">No posts found</h3>
            <p className="text-foreground">We couldn't find any news items in this category.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 py-8 border-t border-gray-100">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 border-2 border-primary text-primary font-bold uppercase tracking-wider font-sans text-sm rounded hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary"
            >
              Previous
            </button>
            <span className="text-gray-500 font-sans text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-6 py-2 border-2 border-primary text-primary font-bold uppercase tracking-wider font-sans text-sm rounded hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary"
            >
              Next
            </button>
          </div>
        )}

        {/* Media & Photos Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Media & Photos</h2>
            <p className="text-foreground font-ui">Photo albums from past community events.</p>
          </div>
          
          <div className="bg-border/30 p-16 rounded-xl border-2 border-dashed border-gray-200 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-white object-contain rounded-full flex items-center justify-center shadow-sm mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-2xl font-serif text-gray-600 mb-2">Photo Galleries Coming Soon</h3>
            <p className="text-gray-500 max-w-md mx-auto">We are currently gathering our event photos to showcase our vibrant community here. Check back soon!</p>
          </div>
        </div>

      </div>
    </div>
  );
}
