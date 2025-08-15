'use client'

import { motion } from 'motion/react'

export function AnimatedBackgroundCard() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-lg ">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.03" />
          </linearGradient>
          <radialGradient id="radial1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated Circles */}
        <motion.circle
          cx="100"
          cy="80"
          r="40"
          fill="url(#grad1)"
          animate={{
            cx: [100, 120, 80, 100],
            cy: [80, 100, 60, 80],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle
          cx="320"
          cy="200"
          r="25"
          fill="url(#grad2)"
          animate={{
            cx: [320, 340, 300, 320],
            cy: [200, 180, 220, 200],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.circle
          cx="50"
          cy="220"
          r="60"
          fill="url(#radial1)"
          animate={{
            cx: [50, 70, 30, 50],
            cy: [220, 200, 240, 220],
            r: [60, 70, 50, 60]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Animated Path/Wave */}
        <motion.path
          d="M0,150 Q100,100 200,150 T400,150"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
          animate={{
            d: [
              "M0,150 Q100,100 200,150 T400,150",
              "M0,150 Q100,200 200,150 T400,150",
              "M0,150 Q100,100 200,150 T400,150"
            ]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Small floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={50 + i * 60}
            cy={50 + (i % 2) * 200}
            r="3"
            fill="rgb(99, 102, 241)"
            fillOpacity="0.4"
            animate={{
              cy: [
                50 + (i % 2) * 200,
                30 + (i % 2) * 200,
                70 + (i % 2) * 200,
                50 + (i % 2) * 200
              ],
              opacity: [0.4, 0.8, 0.2, 0.4]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}

        {/* Animated Rectangles */}
        <motion.rect
          x="250"
          y="50"
          width="80"
          height="40"
          rx="20"
          fill="url(#grad2)"
          animate={{
            rotate: [0, 5, -5, 0],
            x: [250, 260, 240, 250]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </svg>
    </div>
  )
}