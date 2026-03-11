import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * A floating "back to top" button that appears after the user scrolls
 * past a threshold. Smoothly scrolls back to the top of the page.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent text-accent-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-accent/40 hover:shadow-xl ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
