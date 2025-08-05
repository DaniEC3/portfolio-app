'use client';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: boolean;
}


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ScrollAnimation({
  children,
  delay = 0,
  stagger = false
}: ScrollAnimationProps) {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={
        isInView
          ? 'visible'
          : 'hidden'
      }
      transition={{ duration: 1, delay }}
    >
      {/* If stagger is true, children must have child variants */}
      {stagger
        ? (
          // Apply variants to each child if stagger is true
          (Array.isArray(children) ? children : [children]).map((child, i) => (
            <motion.div key={i} variants={childVariants}>
              {child}
            </motion.div>
          ))
        )
        : (
          // If not stagger, animate the whole block
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay }}
          >
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}