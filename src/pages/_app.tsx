import '@/styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import type { AppProps } from 'next/app';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <MotionConfig reducedMotion="user">
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-indigo-600 z-[100]" />
      <Component {...pageProps} />
    </MotionConfig>
  );
}
