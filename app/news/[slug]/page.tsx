import { getPostBySlug, getSortedPostsData } from "@/lib/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostLightbox from "./PostLightbox";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const hasFeaturedImage = post.has_image || post.image_url_fallback;
  const imageSrc = post.image || post.image_url_fallback;

  return (
    <article className="py-20 bg-[#f7f9f9] min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Back to News link */}
        <div className="mb-12">
          <Link href="/news" className="text-primary hover:text-[#9b287b] font-ui uppercase tracking-widest text-[13px] font-bold flex items-center transition-colors">
            <span className="mr-2 text-lg">←</span> All News & Media
          </Link>
        </div>

        {/* 2. Category badge */}
        <div className="mb-6">
          <span className="bg-primary text-white font-bold font-ui uppercase tracking-wider text-[11px] px-3 py-1.5 rounded-[4px]">
            {post.category || "News"}
          </span>
        </div>

        {/* 3. Title (H1) */}
        <h1 className="text-[42px] md:text-[60px] font-serif font-bold text-primary mb-6 leading-[1.1] tracking-tight">
          {post.title}
        </h1>

        {/* 4. Date */}
        <div className="mb-12">
          <time className="text-[#555] font-sans text-lg font-medium">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
        </div>

        {/* 5. Featured image with Lightbox */}
        {hasFeaturedImage && imageSrc && (
          <PostLightbox imageSrc={imageSrc} title={post.title} />
        )}


        {/* 6. Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          {post.pdf_url && (
            <a 
              href={post.pdf_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#9b287b] text-white font-ui font-bold uppercase tracking-[2px] text-[14px] px-10 py-5 rounded-[4px] hover:bg-[#801e65] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              View Document
            </a>
          )}
          
          {post.external_link && (
            <a 
              href={post.external_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#2ea3f2] text-white font-ui font-bold uppercase tracking-[2px] text-[14px] px-10 py-5 rounded-[4px] hover:bg-[#1a8cd8] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Learn More
            </a>
          )}
        </div>

        {/* 8. Back to News button at bottom */}
        <div className="border-t border-gray-200 pt-16 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-primary font-ui font-bold uppercase tracking-[2px] text-[13px] hover:text-[#9b287b] transition-colors group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to All News & Events
          </Link>
        </div>

      </div>
    </article>
  );
}
