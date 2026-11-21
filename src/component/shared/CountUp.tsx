'use client';
import { animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    const c = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: (v) => { el.textContent = Math.round(v) + suffix; } });
    return () => c.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}
