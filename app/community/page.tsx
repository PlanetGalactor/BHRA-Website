export default function CommunityPage() {
  return (
    <div className="py-20">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-serif font-bold text-primary mb-6">Our Community</h1>
        <p className="text-xl text-foreground font-ui mb-12">
          Buttonwood Hill is a vibrant residential community. We pride ourselves on green spaces, safety, and a strong sense of neighborhood resilience.
        </p>

        <div className="prose prose-lg max-w-none text-foreground font-sans prose-headings:font-serif prose-headings:text-primary">
          <h2>Local Parks & Green Spaces</h2>
          <p>Buttonwood Park is the heart of our community, hosting seasonal events, sports, and family gatherings. Preserving these spaces is one of our primary commitments.</p>

          <h2>Neighborhood Resources</h2>
          <ul>
            <li><strong>Emergency Services:</strong> 911 (for non-emergencies, contact the local division).</li>
            <li><strong>City Services:</strong> 311 for municipal inquiries and local maintenance requests.</li>
            <li><strong>Public Transit:</strong> Serviced by TTC bus routes connecting to the Bloor-Danforth subway.</li>
          </ul>

          <h2>Community Safety</h2>
          <p>We work with local law enforcement and city officials to ensure traffic calming measures are respected and that our streets remain safe for pedestrians and children.</p>
        </div>
      </div>
    </div>
  );
}
