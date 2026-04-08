import { getPageContent } from "@/lib/markdown";
import { remark } from "remark";
import html from "remark-html";

export default async function AboutPage() {
  const pageData = getPageContent('about') || getPageContent('about-us');
  
  let contentHtml = "";
  let title = "About Buttonwood Hill Residents Association";

  if (pageData) {
    const processedContent = await remark().use(html).process(pageData.content || "");
    contentHtml = processedContent.toString();
    title = pageData.title || title;
  } else {
    // Fallback if not found in migrated docs
    contentHtml = `
      <h2>Our Mission</h2>
      <p>Buttonwood Hill Residents Association (BHRA) brings the community together to advocate and stay informed about local events and issues impacting our residents, in order to maintain safe and thriving neighbourhoods.</p>
      <h2>History</h2>
      <p>The Buttonwood Hill area has a rich history of community involvement and advocacy. The association was formed to ensure residents have a unified voice regarding developments, transit, and community resources.</p>
      <h2>Committee Members</h2>
      <p>We are a dedicated group of volunteers living in the neighborhood.</p>
    `;
  }

  return (
    <div className="py-20">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif font-bold text-primary mb-12">{title}</h1>
        <div 
          className="prose prose-lg max-w-none text-foreground font-sans prose-headings:font-serif prose-headings:text-primary prose-a:text-accent hover:prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}
