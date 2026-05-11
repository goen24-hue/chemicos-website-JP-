import { useEffect, useRef, useState } from "react";

interface UseFadeInOptions {
  threshold?: number;
  once?: boolean;
  delay?: number;
}

export function useFadeIn<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  once = true,
  delay = 0,
}: UseFadeInOptions = {}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const t = setTimeout(() => setVisible(true), delay);
            if (once) observer.disconnect();
            return () => clearTimeout(t);
          }
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, delay]);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    // 미묘하게: 16px 슬라이드업 (기존 28px → 더 절제된 움직임)
    transform: visible ? "translateY(0)" : "translateY(16px)",
    // 빠르고 자연스러운 easing: 0.55s cubic-bezier (기존 0.75s ease)
    transition: `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return { ref, visible, style };
}
