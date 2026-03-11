import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Twitter, Youtube, Instagram, ArrowLeft, Music } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BackToTop } from "@/components/BackToTop";

/**
 * Blog page displaying a list of insights and tutorials about AI music generation.
 */
export default function Blog() {
  const { t, language } = useLanguage();
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      title: "5 Tips to Craft Better AI Music Prompts",
      excerpt:
        "Learn how to refine your prompts for more creative outputs with AI tools like Suno, Udio and Riffusion.",
      content:
        "Artificial intelligence tools for music creation are incredibly powerful, but they rely heavily on the quality of the input prompts. In this article, we'll explore five techniques to help you craft clearer, more evocative prompts that steer the AI toward the musical ideas you have in mind. We'll cover specificity, genre cues, emotion-driven language, production details, and iterative refinement, each illustrated with real examples.",
      image:
        "https://images.unsplash.com/photo-1454923634634-bd1614719a7b?auto=format&fit=crop&w=800&q=80&fm=webp",
      date: "2025-11-01",
      author: "Prompt Architect",
    },
    {
      id: 2,
      title: "Interview with an AI Music Pioneer",
      excerpt:
        "We sat down with one of the early adopters of AI music tools to discuss their workflow, inspirations, and predictions for the future of generative music.",
      content:
        "In this in-depth interview, pioneering artist and technologist Lina Mahmoud shares how she integrates AI into her creative process. From training custom models to blending traditional instruments with neural networks, Lina reveals her process, challenges, and what excites her most about the future. She also offers advice for newcomers and argues that human creativity remains central even as machines become more capable.",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80&fm=webp",
      date: "2025-12-15",
      author: "Prompt Architect",
    },
    {
      id: 3,
      title: "Tool Review: Comparing Suno, Udio & Riffusion",
      excerpt:
        "A side-by-side comparison of the leading AI music tools, highlighting strengths, limitations, and ideal use cases.",
      content:
        "Choosing the right AI tool can dramatically impact your workflow and the quality of your output. In this review, we compare three popular platforms: Suno, Udio, and Riffusion. We examine their user interfaces, control over musical parameters, output quality, pricing models, and community support. Whether you're a hobbyist or a professional producer, this guide will help you decide which tool fits your goals.",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80&fm=webp",
      date: "2026-01-20",
      author: "Prompt Architect",
    },
  ];

  function formatDate(dateStr: string): string {
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat(
        language === "ja" ? "ja-JP" : language === "ar" ? "ar-EG" : "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      ).format(date);
    } catch {
      return dateStr;
    }
  }

  return (
    <main id="main-content" role="main" className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-display font-bold text-accent glow-gold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Music aria-hidden="true" className="w-6 h-6" />
            {t("footerAboutTitle")}
          </a>
          <a href="/" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </nav>

      <section className="pt-28 pb-16 bg-gradient-luxury border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-display-lg text-accent mb-4 glow-gold">
            {t("blogTitle")}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("blogSubtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const isExpanded = expandedPostId === post.id;
            return (
              <ScrollReveal key={post.id} delay={index * 100}>
                <article className="border border-border/50 rounded-xl overflow-hidden hover-glow transition-all duration-500 hover:border-accent/30 bg-card">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col">
                    <p className="text-xs text-foreground/50 mb-2 uppercase tracking-wider">
                      {formatDate(post.date)}
                    </p>
                    <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-foreground/70 mb-4 flex-grow leading-relaxed">
                      {isExpanded ? post.content : post.excerpt}
                    </p>
                    <Button
                      onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                      size="sm"
                      className="self-start bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      {isExpanded ? t("blogReadLess") : t("blogReadMore")}
                    </Button>

                    {isExpanded && (
                      <div className="mt-6 border-t border-border/50 pt-4 flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <img
                            src="/author.png"
                            alt="The Prompt Architect author"
                            loading="lazy"
                            className="w-12 h-12 rounded-full object-cover border border-accent/30"
                          />
                          <div>
                            <p className="font-semibold text-foreground">
                              {t("footerAboutTitle")}
                            </p>
                            <p className="text-xs text-foreground/60">
                              AI Music Researcher & Producer
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <a href="#" aria-label="Twitter" className="text-accent hover:text-accent/70 transition-colors">
                            <Twitter className="w-5 h-5" aria-hidden="true" />
                          </a>
                          <a href="#" aria-label="YouTube" className="text-accent hover:text-accent/70 transition-colors">
                            <Youtube className="w-5 h-5" aria-hidden="true" />
                          </a>
                          <a href="#" aria-label="Instagram" className="text-accent hover:text-accent/70 transition-colors">
                            <Instagram className="w-5 h-5" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
