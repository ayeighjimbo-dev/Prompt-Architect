import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

/**
 * Animated counter that counts up from 0 to the target value when it
 * enters the viewport. Used for social proof statistics.
 */
function AnimatedStat({ value, suffix = "", label, duration = 2000 }: StatProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-accent glow-gold">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-foreground/60 mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <AnimatedStat value={2500} suffix="+" label="Prompts" />
      <AnimatedStat value={4} label="Books" />
      <AnimatedStat value={50} suffix="+" label="Genres" />
      <AnimatedStat value={1000} suffix="+" label="Templates" />
    </div>
  );
}
