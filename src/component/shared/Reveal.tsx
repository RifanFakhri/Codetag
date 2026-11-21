'use client';
import { motion, type HTMLMotionProps } from 'framer-motion';

// Fade + slide + unblur in once when scrolled into view. Reduced motion is handled by MotionConfig in _app.
export default function Reveal({ delay = 0, y = 48, x = 0, ...p }: { delay?: number; y?: number; x?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale: 0.94, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...p}
    />
  );
}
