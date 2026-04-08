import { getPostBySlug, getSortedPostsData } from "@/lib/markdown";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

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

  const processedContent = await remark()
    .use(html)
    .process(post.content || "");
  const contentHtml = processedContent.toString();

  return (
    <article className="py-16">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/news" className="text-accent hover:text-primary font-ui uppercase tracking-widest text-sm font-bold flex items-center mb-6">
            ← Back to News
          </Link>
          <div className="flex gap-4 items-center mb-4">
            <span className="bg-primary/10 text-primary font-semibold font-ui uppercase tracking-wider text-xs px-3 py-1 rounded-full">
              {post.category || "News"}
            </span>
            <time className="text-gray-500 font-sans text-sm">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>
        </div>
        
        <div 
          className="prose prose-lg max-w-none text-foreground font-sans prose-headings:font-serif prose-headings:text-primary prose-a:text-accent hover:prose-a:text-primary prose-img:rounded-md mt-8 pb-16"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </article>
  );
}
