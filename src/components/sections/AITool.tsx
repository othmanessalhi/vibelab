import CampaignThemeGenerator from './CampaignThemeGenerator';

export default function AITool() {
  return (
    <section id="ai-tool" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">AI Campaign Idea Generator</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/80">
            Stuck for ideas? Use our AI tool to brainstorm campaign themes for any target audience.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <CampaignThemeGenerator />
        </div>
      </div>
    </section>
  );
}
