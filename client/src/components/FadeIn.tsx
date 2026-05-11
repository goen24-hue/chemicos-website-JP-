import { useFadeIn } from "@/hooks/useFadeIn";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

/**
 * 스크롤 시 자식 요소를 페이드인+슬라이드업으로 등장시키는 래퍼 컴포넌트.
 *
 * 사용 예:
 *   <FadeIn delay={100}>
 *     <SomeSection />
 *   </FadeIn>
 */
export default function FadeIn({
  children,
  delay = 0,
  threshold = 0.1,
  className,
  as: Tag = "div",
}: FadeInProps) {
  const { ref, style } = useFadeIn<HTMLDivElement>({ delay, threshold });

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} style={style} className={className}>
      {children}
    </Tag>
  );
}
