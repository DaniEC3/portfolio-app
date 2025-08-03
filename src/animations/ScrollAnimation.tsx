'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollAnimation({children, delay = 0}:ScrollAnimationProps) {  

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0,y: 50 }}
      animate={
        isInView 
        ? { opacity: 1, y: 0 } 
        : { opacity: 0, y: 50 }
      }
      transition={{ duration: 4, delay }}
    >
      {children}
    </motion.div>
  );
}
