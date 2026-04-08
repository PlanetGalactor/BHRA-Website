import { getSortedPostsData } from "@/lib/markdown";
import Link from "next/link";
import { format } from "date-fns";

export default function NewsPage() {
  const posts = getSortedPostsData();

  return (
    <div className="py-16">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif font-bold text-primary mb-6">News & Media</h1>
        <p className="text-xl text-foreground font-ui mb-12">
          Latest updates, events, and community news for Buttonwood Hill.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                  <span className="font-ui uppercase font-bold tracking-widest">{post.category || 'News'}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent font-ui">{post.category || 'News'}</span>
                  <span className="text-sm text-gray-500">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  <Link href={`/news/${post.slug}`} className="hover:text-accent transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-foreground mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/${post.slug}`}
                  className="text-primary hover:text-accent font-bold text-sm tracking-wide transition-colors mt-auto inline-block"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
