import { motion } from "motion/react";
import type { Variants } from 'motion/react';


interface CardProps {
  img: string;
  hueA: number;
  hueB: number;
  i: number;
  children: React.ReactNode
}



export default function Card({ hueA, hueB, i, children }: CardProps) {
  const cardVariants: Variants = {
    offscreen: { y: 300 },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: { type: 'spring', bounce: 0.4, duration: 0.8 },
    },
  };

  const hue = (h: number) => `hsl(${h}, 60%, 60%)`;

  const background = `linear-gradient(306deg, ${hue(hueA)}, black)`;

  return (
    <motion.div
      className={`relative overflow-hidden flex justify-center items-center pt-5 -mb-[50px] card-container-${i}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* Dynamic splash background */}
      <div
        className="absolute inset-0 [clip-path:path('M_0_303.5_C_0_292.454_8.995_285.101_20_283.5_L_460_219.5_C_470.085_218.033_480_228.454_480_239.5_L_500_430_C_500_441.046_491.046_450_480_450_L_20_450_C_8.954_450_0_441.046_0_430_Z')]"
        style={{ background }}
      />

      <motion.div
        variants={cardVariants}
        className="card flex flex-col items-center justify-center w-[300px] h-[430px] rounded-[20px] bg-gray-100 text-[164px]
                   [transform-origin:10%_60%] border-4 border-gray-700
                   [box-shadow:0_0_1px_hsl(0_0%_0%_/_0.075),0_0_2px_hsl(0_0%_0%_/_0.075),0_0_4px_hsl(0_0%_0%_/_0.075),0_0_8px_hsl(0_0%_0%_/_0.075),0_0_16px_hsl(0_0%_0%_/_0.075)]"
      >
        
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
      
    </motion.div>
  );
}