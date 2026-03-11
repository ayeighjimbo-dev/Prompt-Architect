import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Download, Music } from "lucide-react";
import { BackToTop } from "@/components/BackToTop";

/**
 * DigitalBook page embeds the interactive digital edition of The Prompt Architect.
 */
export default function DigitalBook() {
  const { t } = useLanguage();
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

      <section className="pt-28 pb-6 bg-gradient-luxury border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-display-lg text-accent mb-2 glow-gold">
            {t("digitalSectionTitle")}
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-4">
            {t("digitalSectionDescription")}
          </p>
          <a
            href="/prompts.pdf"
            className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20"
            download
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </section>
      <section className="flex-1">
        <iframe
          src="/prompts.html"
          title="The Prompt Architect Digital Book"
          className="w-full h-[80vh] border-0"
          loading="lazy"
        />
      </section>

      <BackToTop />
    </main>
  );
}
