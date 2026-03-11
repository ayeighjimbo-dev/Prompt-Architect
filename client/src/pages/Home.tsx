import { Button } from "@/components/ui/button";
import { ChevronRight, Music, Sparkles, Gift, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParticleField } from "@/components/ParticleField";
import { BackToTop } from "@/components/BackToTop";
import { AudioPreview } from "@/components/AudioPreview";
import { StatsCounter } from "@/components/StatsCounter";

/**
 * Design Philosophy: Maximalist Luxury with Kinetic Energy
 * - Dark foundation (#0a0a0a) with strategic gold (#d4af37) and crimson (#8b1a1a) accents
 * - Asymmetric layouts with generous whitespace
 * - Scroll-triggered animations for engaging reveal effects
 * - Playfair Display for bold, elegant typography
 * - Glowing effects reinforcing premium, tech-forward brand
 *
 * Content Focus: Music Generation Prompts for AI Tools (Suno, Udio, Riffusion)
 * - Main Book: The Prompt Architect
 * - 2 Free Bonus Books: The Seduction Protocols + Blueprint (1000 prompts)
 * - Optional Add-on: Blueprint Two (500 prompts)
 * - Total: 2500+ prompts across 4 books
 */

export default function Home() {
  const [activeBookId, setActiveBookId] = useState<number | undefined>(undefined);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const books = [
    {
      id: 1,
      title: "The Prompt Architect",
      subtitle: "The Award-Winning AI Music Prompt Book",
      description:
        "The definitive guide to AI music generation. Complete with sound design blueprints, artist/label references, advanced production techniques, and comprehensive genre coverage for Suno, Udio, and Riffusion.",
      image: "/assets/bundle-preorder.jpg",
      tag: "MAIN BOOK",
      isFeatured: true,
    },
    {
      id: 2,
      title: "The Seduction Protocols",
      subtitle: "Advanced Techniques & Experimental Fusion",
      description:
        "Advanced prompts covering erotic/experimental soundscapes, healing frequencies, binaural beats, and hybrid genre fusions. Includes neural lyric mutation engines and live performance templates.",
      image: "/assets/the-protocols.png",
      tag: "FREE BONUS",
      isFeatured: false,
    },
    {
      id: 3,
      title: "Blueprint",
      subtitle: "1000 Production Templates & Prompts",
      description:
        "1000 specialized production prompts with complete templates covering arrangement, instrumentation, mixing, sound design, and live performance. The ultimate production reference.",
      image: "/assets/blueprint-one.png",
      tag: "FREE BONUS",
      isFeatured: false,
    },
  ];

  const bonusBook = {
    id: 4,
    title: "Blueprint Two",
    subtitle: "500 Advanced Production Techniques",
    description:
      "500 additional advanced production prompts and techniques. Expand your production toolkit with specialized templates for mixing, mastering, and experimental sound design.",
    image: "/assets/blueprint-two.png",
    tag: "OPTIONAL ADD-ON",
  };

  const featureItems = [
    {
      titleKey: "genreMasteryTitle",
      descKey: "genreMasteryDesc",
      icon: "🎵",
    },
    {
      titleKey: "productionTemplatesTitle",
      descKey: "productionTemplatesDesc",
      icon: "🎛️",
    },
    {
      titleKey: "artistBlueprintsTitle",
      descKey: "artistBlueprintsDesc",
      icon: "🎤",
    },
    {
      titleKey: "advancedTechniquesTitle",
      descKey: "advancedTechniquesDesc",
      icon: "⚡",
    },
    {
      titleKey: "soundDesignTitle",
      descKey: "soundDesignDesc",
      icon: "✨",
    },
    {
      titleKey: "aiIntegrationTitle",
      descKey: "aiIntegrationDesc",
      icon: "🤖",
    },
  ];

  const creatorItems = [
    { roleKey: "roleProducers", descKey: "roleProducersDesc" },
    { roleKey: "roleSongwriters", descKey: "roleSongwritersDesc" },
    { roleKey: "rolePerformers", descKey: "rolePerformersDesc" },
    { roleKey: "roleEngineers", descKey: "roleEngineersDesc" },
    { roleKey: "roleAI", descKey: "roleAIDesc" },
    { roleKey: "roleEducators", descKey: "roleEducatorsDesc" },
  ];

  return (
    <main id="main-content" role="main" className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Skip navigation link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-0 top-0 m-2 z-50 bg-accent text-accent-foreground px-3 py-1 rounded"
      >
        {t("skipToContent")}
      </a>

      {/* Navigation */}
      <nav
        role="navigation"
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-display font-bold text-accent glow-gold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Music aria-hidden="true" className="w-6 h-6" />
            {t("footerAboutTitle")}
          </a>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="w-6 h-6" />
            ) : (
              <Menu aria-hidden="true" className="w-6 h-6" />
            )}
          </button>
          {/* Navigation links and language selector */}
          <div
            className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex gap-4 md:gap-8 items-center flex-col md:flex-row absolute md:static top-16 left-0 right-0 md:right-auto bg-background/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-b md:border-0 border-border p-6 md:p-0`}
          >
            <a href="#books" className="hover:text-accent transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              {t("navBooks")}
            </a>
            <a href="#features" className="hover:text-accent transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              {t("navFeatures")}
            </a>
            <a href="#about" className="hover:text-accent transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              {t("navAbout")}
            </a>
            <a href="/blog" className="hover:text-accent transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              {t("navBlog")}
            </a>
            <a href="/digital-book" className="hover:text-accent transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              {t("navDigital")}
            </a>
            {/* Language selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "ja" | "ar")}
              className="border border-border rounded-md px-2 py-1 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Language selector"
            >
              <option value="en">EN</option>
              <option value="ja">日本語</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Particle Field */}
        <ParticleField className="absolute inset-0 z-[1]" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm animate-fade-in">
            <Sparkles aria-hidden="true" className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">
              {t("heroTagline")}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-accent glow-gold animate-fade-in-up leading-tight">
            {t("heroTitle")}
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
            {t("heroSubtitle")}
          </p>

          <p className="text-base md:text-lg text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
            {t("heroDescription")}
          </p>

          {/* Audio Preview */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <AudioPreview src="/assets/audio-preview.mp3" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
            >
              <a href="#bundle">
                {t("heroButtonPrimary")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105"
            >
              <a href="#books">
                {t("heroButtonSecondary")}
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-accent/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-accent/60 rounded-full animate-scroll-dot" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-t border-border/50">
        <ScrollReveal>
          <StatsCounter />
        </ScrollReveal>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background border-t border-border/50">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-display-lg text-accent mb-6 glow-gold">
              {t("welcomeTitle")}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {t("welcomeDescription")}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Books Showcase Section */}
      <section id="books" className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-display-lg text-accent mb-4 glow-gold">
                {t("completeCollectionTitle")}
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                {t("completeCollectionDescription")}
              </p>
            </div>
          </ScrollReveal>

          {/* Main Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {books.map((book, index) => (
              <ScrollReveal key={book.id} delay={index * 150}>
                <div
                  id={`book-${book.id}`}
                  className="group relative focus:outline-none"
                  tabIndex={0}
                  role="button"
                  onMouseEnter={() => setActiveBookId(book.id)}
                  onMouseLeave={() => setActiveBookId(undefined)}
                  onFocus={() => setActiveBookId(book.id)}
                  onBlur={() => setActiveBookId(undefined)}
                >
                  {/* Tag Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {book.tag === "MAIN BOOK" ? t("mainBookTag") : t("freeBonusTag")}
                  </div>

                  <div className="relative h-96 rounded-xl overflow-hidden border border-border/50 hover-glow transition-all duration-500 group-hover:border-accent/30">
                    <img
                      loading="lazy"
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                        activeBookId === book.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <h3 className="text-2xl font-display font-bold text-accent mb-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                        {book.description}
                      </p>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        {t("optionalLearnMore")}
                      </Button>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="mt-4">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {book.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">{book.subtitle}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Optional Add-On Section */}
          <div className="mt-20 pt-20 border-t border-border/50">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h3 className="text-display-md text-accent mb-4 glow-gold">
                  {t("expandToolkitTitle")}
                </h3>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  {t("expandToolkitDescription")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="max-w-2xl mx-auto">
                <div
                  id={`book-${bonusBook.id}`}
                  className="group relative focus:outline-none"
                  tabIndex={0}
                  role="button"
                  onMouseEnter={() => setActiveBookId(bonusBook.id)}
                  onMouseLeave={() => setActiveBookId(undefined)}
                  onFocus={() => setActiveBookId(bonusBook.id)}
                  onBlur={() => setActiveBookId(undefined)}
                >
                  <div className="absolute top-4 right-4 z-20 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {t("optionalAddOnTag")}
                  </div>

                  <div className="relative h-80 rounded-xl overflow-hidden border border-border/50 hover-glow transition-all duration-500 group-hover:border-accent/30">
                    <img
                      loading="lazy"
                      src={bonusBook.image}
                      alt={bonusBook.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                        activeBookId === bonusBook.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <h3 className="text-2xl font-display font-bold text-accent mb-2">
                        {bonusBook.title}
                      </h3>
                      <p className="text-sm text-foreground/80 mb-4">
                        {bonusBook.description}
                      </p>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        {t("optionalAddOnButton")}
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {bonusBook.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">{bonusBook.subtitle}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bundle Offer */}
          <ScrollReveal>
            <div
              id="bundle"
              className="mt-20 p-8 md:p-12 rounded-2xl border-2 border-accent/50 bg-gradient-to-br from-accent/5 via-background to-secondary/5 glow-accent animate-glow-pulse"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Gift aria-hidden="true" className="w-8 h-8 text-accent" />
                    <h3 className="text-display-md text-accent glow-gold">
                      {t("bundleTitle")}
                    </h3>
                  </div>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("bundleDescription")}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[t("bundleList1"), t("bundleList2"), t("bundleList3"), t("bundleList4")].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent mt-1 font-bold">✓</span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
                  >
                    <a href="#bundle" className="inline-flex items-center">
                      {t("bundleButton")}
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>

                {/* Bundle Visual */}
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <img
                    loading="lazy"
                    src="/assets/hero-bg.png"
                    alt="The complete Prompt Architect bundle"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-display-lg text-accent mb-4 glow-gold">
                {t("featuresTitle")}
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                {t("featuresSubtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {featureItems.map((feature, index) => (
              <ScrollReveal key={feature.titleKey} delay={index * 100}>
                <div className="p-8 rounded-xl border border-border/50 bg-card hover-glow transition-all duration-500 hover:border-accent/30 hover:-translate-y-1 group">
                  <span
                    role="img"
                    aria-label={`${t(feature.titleKey)} icon`}
                    className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300"
                  >
                    {feature.icon}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{t(feature.descKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Types Section */}
      <section id="about" className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-display-lg text-accent mb-4 glow-gold">
                {t("creatorTitle")}
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                {t("creatorSubtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {creatorItems.map((item, index) => (
              <ScrollReveal key={item.roleKey} delay={index * 100}>
                <div className="p-8 rounded-xl border border-border/50 bg-card hover-glow transition-all duration-500 hover:border-accent/30 hover:-translate-y-1">
                  <h3 className="text-xl font-display font-semibold text-accent mb-3">
                    {t(item.roleKey)}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{t(item.descKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="py-20 bg-background border-t border-border/50">
        <ScrollReveal>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 max-w-4xl">
            <img
              src="/author.png"
              alt="The Prompt Architect author"
              className="w-32 h-32 rounded-full object-cover border-2 border-accent/30 shadow-lg shadow-accent/10"
            />
            <div className="text-center md:text-left">
              <h2 className="text-display-md text-accent mb-4 glow-gold">
                {t("aboutAuthorTitle")}
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t("aboutAuthorDescription")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Digital Book Section */}
      <section className="py-20 bg-gradient-luxury border-t border-border/50">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-display-lg text-accent mb-6 glow-gold">
              {t("digitalSectionTitle")}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t("digitalSectionDescription")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
            >
              <a href="/digital-book">
                {t("digitalSectionButton")}
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 border-y border-border/50 relative overflow-hidden">
        <ParticleField className="absolute inset-0 z-0" />
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-display-lg text-accent mb-6 glow-gold">
              {t("ctaTitle")}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("ctaDescription")}
            </p>
            {/* Email capture form */}
            <form
              action="#"
              className="mb-8 max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder={t("ctaNotifyPlaceholder")}
                aria-label="Email address"
                className="flex-1 w-full px-4 py-3 border border-border rounded-lg bg-background/80 backdrop-blur-sm text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 whitespace-nowrap">
                {t("ctaNotifyButton")}
              </Button>
            </form>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-105"
              >
                <a href="#bundle" className="inline-flex items-center">
                  {t("ctaPrimaryButton")}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105"
              >
                <a href="/digital-book">
                  {t("ctaSecondaryButton")}
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-display font-bold text-accent mb-4 flex items-center gap-2">
                <Music aria-hidden="true" className="w-5 h-5" />
                {t("footerAboutTitle")}
              </h4>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {t("footerAboutDesc")}
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{t("footerBooksTitle")}</h5>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>
                  <a href="#books" className="hover:text-accent transition-colors">
                    {t("footerBookPrompt")}
                  </a>
                </li>
                <li>
                  <a href="#books" className="hover:text-accent transition-colors">
                    {t("footerBookSeduction")}
                  </a>
                </li>
                <li>
                  <a href="#books" className="hover:text-accent transition-colors">
                    {t("footerBookBlueprint")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{t("footerResourcesTitle")}</h5>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>
                  <a href="/digital-book" className="hover:text-accent transition-colors">
                    {t("footerResourcesGuide")}
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-accent transition-colors">
                    {t("footerResourcesTips")}
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-accent transition-colors">
                    {t("footerResourcesCommunity")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{t("footerLegalTitle")}</h5>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>
                  <a href="/blog" className="hover:text-accent transition-colors">
                    {t("footerLegalPrivacy")}
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-accent transition-colors">
                    {t("footerLegalTerms")}
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-accent transition-colors">
                    {t("footerLegalContact")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2025 {t("footerAboutTitle")}. {t("footerCopy")}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                {t("footerSocialTwitter")}
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Discord">
                {t("footerSocialDiscord")}
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="YouTube">
                {t("footerSocialYouTube")}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <BackToTop />
    </main>
  );
}
