import { getPageContent } from "@/lib/markdown";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export default async function GetInvolvedPage() {
  const pageData = getPageContent('get-involved') || getPageContent('volunteer');
  
  let contentHtml = "";
  let title = "Get Involved";

  if (pageData) {
    const processedContent = await remark().use(html).process(pageData.content || "");
    contentHtml = processedContent.toString();
    title = pageData.title || title;
  } else {
    contentHtml = `
      <p>Buttonwood Hill Residents Association is powered by its community members. Volunteers and new members are always welcome.</p>
      <h2>Join the Association</h2>
      <p>By joining BHRA, you stay informed and have a voice in local developments, community safety, and local events.</p>
      <h2>Volunteer Opportunities</h2>
      <p>We routinely need help with:</p>
      <ul>
        <li>Community event planning and execution.</li>
        <li>Distributing flyers and newsletters.</li>
        <li>Reviewing local development proposals.</li>
      </ul>
    `;
  }

  return (
    <div className="py-20">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif font-bold text-primary mb-12">{title}</h1>
        <div 
          className="prose prose-lg max-w-none text-foreground font-sans prose-headings:font-serif prose-headings:text-primary prose-a:text-accent hover:prose-a:text-primary prose-li:text-foreground mb-12"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <div className="bg-border/30 p-8 rounded-lg border border-gray-100 text-center">
          <h3 className="text-2xl font-serif text-primary mb-4">Ready to reach out?</h3>
          <Link href="/contact" className="inline-block bg-primary hover:bg-[#a3107c] text-white font-sans font-bold uppercase tracking-[1px] px-8 py-4 rounded text-base transition-colors">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
