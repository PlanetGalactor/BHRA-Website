import { getPostBySlug, getSortedPostsData } from "@/lib/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  // Extract the first image URL from the content body using regex
  const imageRegex = /src="(https?:\/\/[^"]+\.(?:jpg|jpeg|png|gif|webp))"/i;
  const imageMatch = post.content?.match(imageRegex);
  const featuredImage = imageMatch ? imageMatch[1] : null;

  return (
    <article className="py-20 min-h-screen bg-[#f7f9f9]">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/news" className="text-primary hover:opacity-80 font-ui uppercase tracking-widest text-[13px] font-bold flex items-center mb-10 transition-opacity">
            <span className="mr-2">←</span> Back to News & Media
          </Link>
          
          <div className="flex gap-4 items-center mb-6">
            <span className="bg-primary text-white font-bold font-ui uppercase tracking-wider text-[11px] px-3 py-1.5 rounded-[4px]">
              {post.category || "News"}
            </span>
            <time className="text-[#555] font-sans text-sm font-medium">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          
          <h1 className="text-[40px] md:text-[54px] font-serif font-bold text-primary mb-8 leading-[1.15] tracking-tight">
            {post.title}
          </h1>
        </div>

        {featuredImage && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl border border-gray-100 bg-white">
            <img 
              src={featuredImage} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-gray-100 mb-16">
          <p className="text-[20px] md:text-[22px] text-foreground font-sans leading-[1.8] font-light">
            {post.excerpt}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-12 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 bg-primary text-white font-ui font-bold uppercase tracking-[1px] text-[13px] px-8 py-4 rounded-[4px] hover:bg-[#a3107c] transition-colors shadow-md"
          >
            View More News & Events
          </Link>
        </div>
      </div>
    </article>
  );
}

