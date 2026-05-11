import { useEffect, useRef, useState } from "react";

interface UseFadeInOptions {
  /** 뷰포트에 진입하는 비율 (0~1). 기본 0.12 */
  threshold?: number;
  /** 한 번만 실행할지 여부. 기본 true */
  once?: boolean;
  /** 딜레이(ms). 기본 0 */
  delay?: number;
}

/**
 * IntersectionObserver 기반 페이드인 훅.
 * 반환된 ref를 대상 요소에 붙이고, style 객체를 인라인 스타일로 적용합니다.
 */
export function useFadeIn<T extends HTMLElement = HTMLElement>({
  threshold = 0.12,
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
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
    willChange: "opacity, transform",
  };

  return { ref, visible, style };
}
