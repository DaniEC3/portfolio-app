'use client'

import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import ScrollAnimation from '@/animations/ScrollAnimation'
import { Brain, Code2, LucideIcon, ServerCog } from 'lucide-react'
import SkillCard from './SkillCard'
import { AnimatedBackground } from './Styles/AnimatedBackground'
import GlitchIconWrapper from './Styles/GlitchIconWrapper'

interface Skill {
  name: string;
  color: string;
  level: number; // percentage (0–100)
}

type Tab = { icon: LucideIcon; label: string }

const frontend: Skill[] = [
  { name: "HTML", color: "#E34F26", level: 95 },        // orange-red
  { name: "CSS", color: "#1572B6", level: 90 },         // blue
  { name: "JavaScript", color: "#F7DF1E", level: 85 },  // yellow
  { name: "TypeScript", color: "#3178C6", level: 80 },  // blue
  { name: "React", color: "#61DAFB", level: 85 },       // cyan
  { name: "Next.js", color: "#000000", level: 80 },     // black
  { name: "Angular", color: "#DD0031", level: 70 },     // red
  { name: "Tailwind CSS", color: "#06B6D4", level: 85 },// teal
  { name: "Framer Motion", color: "#E83E8C", level: 75 }// pink
];

const backend: Skill[] = [
  { name: "Node.js", color: "#339933", level: 80 },
  { name: "Express", color: "#000000", level: 75 },
  { name: "REST APIs", color: "#4B5563", level: 85 },
  { name: "MongoDB", color: "#47A248", level: 80 },
  { name: "Firebase", color: "#FFCA28", level: 70 },       // yellow-orange
  { name: "Auth (JWT/OAuth)", color: "#FBBF24", level: 75 },
  { name: "Testing", color: "#6B7280", level: 65 }
];

const soft: Skill[] = [
  { name: "Communication", color: "#3B82F6", level: 90 },
  { name: "Teamwork", color: "#10B981", level: 85 },
  { name: "Problem Solving", color: "#FACC15", level: 80 },
  { name: "Adaptability", color: "#8B5CF6", level: 85 },
  { name: "Time Management", color: "#EC4899", level: 80 },
  { name: "Leadership", color: "#6366F1", level: 75 },
  { name: "Creativity", color: "#EF4444", level: 85 },
  { name: "Attention to Detail", color: "#9CA3AF", level: 80 }
];

const skillsTable: Tab[] = [
  { icon: Code2, label: 'Front-End' },
  { icon: ServerCog, label: 'Back-End' },
  { icon: Brain, label: 'Soft-Skills' },
]

const [frontS, backS, softS] = skillsTable
const tabs: Tab[] = [frontS, backS, softS]

export default function SkillsComponent() {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0])

  return (
    <div className='relative w-screen h-full md:h-screen flex flex-col items-center justify-center gap-5 px-10'>
      <div className='font-bold text-3xl text-center p-4 mb-5'>My skills</div>

      <div className="relative w-full h-full md:h-screen">
        {/* Frontend - Top Left */}
        <div className="flex flex-col w-full md:w-1/2 md:h-1/2 h-[550px] border-4 border-gray-800 rounded-t-xl 
                    md:absolute md:top-0 md:left-0 mb-8 md:mb-0 group/table">
          <div className="flex h-16 bg-gray-200 rounded-2xl w-full">
            <motion.div
              initial={false}
              className="w-full h-16 px-4 py-2.5 cursor-pointer flex rounded-t-md items-center bg-gray-800 text-gray-200"
              onClick={() => setSelectedTab(skillsTable[0])}
            >
              <Code2 className="w-5 h-5 mr-2" />
              Front end
            </motion.div>
          </div>
          <main className="w-full h-full max-h-[500px] flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                {selectedTab.label === 'Front-End' ? (
                  <SkillCard
                    frontend={frontend}
                    backend={backend}
                    soft={soft}
                    selectedTab={selectedTab}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    onClick={() => setSelectedTab(skillsTable[0])}
                  >
                    <GlitchIconWrapper
                      icon={Code2}
                      className="w-full h-full md:max-h-[270px] text-gray-500 p-4 bg-gray-400/50
                      group-hover/table:cursor-crosshair"
                      aria-label="Front-End Skills"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Backend - Middle Center */}
        <div className="flex flex-col w-full md:w-1/2 md:h-1/2 h-[550px] border-4 border-gray-800 rounded-t-xl 
                    md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 mb-8 md:mb-0 group/table">
          <div className="flex h-16 bg-gray-200 rounded-2xl w-full">
            <motion.div
              initial={false}
              className="w-full h-16 px-4 py-2.5 cursor-pointer flex rounded-t-md items-center bg-gray-800 text-gray-200"
              onClick={() => setSelectedTab(skillsTable[1])}
            >
              <ServerCog className="w-5 h-5 mr-2" />
              Back end
            </motion.div>
          </div>
          <main className="w-full h-full max-h-[500px] flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                {selectedTab.label === 'Back-End' ? (
                  <SkillCard
                    frontend={frontend}
                    backend={backend}
                    soft={soft}
                    selectedTab={selectedTab}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    onClick={() => setSelectedTab(skillsTable[1])}
                  >
                    <GlitchIconWrapper
                      icon={ServerCog}
                      className="w-full h-full md:max-h-[270px] text-gray-500 p-4 bg-gray-400/50
                      group-hover/table:cursor-crosshair"
                      aria-label="Back-End Skills"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        {/* Soft Skills - Bottom Right */}
        <div className="flex flex-col w-full md:w-1/2 md:h-1/2 h-[550px] border-4 border-gray-800 rounded-t-xl 
                    md:absolute md:bottom-0 md:right-0 group/table">
          <div className="flex h-16 bg-gray-200 rounded-2xl w-full">
            <motion.div
              initial={false}
              className="w-full h-16 px-4 py-2.5 cursor-pointer flex rounded-t-md items-center bg-gray-800 text-gray-200"
              onClick={() => setSelectedTab(skillsTable[2])}
            >
              <Brain className="w-5 h-5 mr-2" />
              Soft Skills
            </motion.div>
          </div>
          <main className="w-full h-full max-h-[500px] flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                {selectedTab.label === 'Soft-Skills' ? (
                  <SkillCard
                    frontend={frontend}
                    backend={backend}
                    soft={soft}
                    selectedTab={selectedTab}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    onClick={() => setSelectedTab(skillsTable[2])}
                  >
                    <GlitchIconWrapper
                      icon={Brain}
                      className="w-full h-full md:max-h-[270px] text-gray-500 p-4 bg-gray-400/50
                      group-hover/table:cursor-crosshair"
                      aria-label="Soft Skills"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}