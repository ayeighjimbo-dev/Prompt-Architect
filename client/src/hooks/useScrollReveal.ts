import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that detects when an element enters the viewport using
 * IntersectionObserver. Returns a ref to attach to the target element
 * and a boolean indicating visibility. Once visible, it stays visible
 * (one-shot reveal) unless `once` is set to false.
 */
export function useScrollReveal(options?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options ?? {};
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
