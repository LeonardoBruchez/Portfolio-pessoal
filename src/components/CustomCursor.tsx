import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const INTERACTIVE_SELECTOR = 'a, button, .project-entry, .site-nav-item';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('has-custom-cursor');

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const handleMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(INTERACTIVE_SELECTOR)) {
        gsap.to(ring, { scale: 2.2, duration: 0.25, ease: 'power2.out' });
        gsap.to(dot, { scale: 0, duration: 0.2, ease: 'power2.out' });
      }
    };

    const handleOut = (e: MouseEvent) => {
      if ((e.target as Element).closest?.(INTERACTIVE_SELECTOR)) {
        gsap.to(ring, { scale: 1, duration: 0.25, ease: 'power2.out' });
        gsap.to(dot, { scale: 1, duration: 0.2, ease: 'power2.out' });
      }
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
