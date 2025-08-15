
'use client'

import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import ScrollAnimation from '@/animations/ScrollAnimation'
import { Brain, Code2, LucideIcon, ServerCog } from 'lucide-react'
import SkillCard from './SkillCard'

type Skill = {
  name: string;
  color: string; // Tailwind class or custom CSS class
};

type Tab = { icon:LucideIcon ; label: string }

const frontend: Skill[] = [
  { name: "HTML", color: "#E34F26" },      // orange-red
  { name: "CSS", color: "#1572B6" },       // blue
  { name: "JavaScript", color: "#F7DF1E" },// yellow
  { name: "TypeScript", color: "#3178C6" },// blue
  { name: "React", color: "#61DAFB" },     // cyan
  { name: "Next.js", color: "#000000" },   // black
  { name: "Tailwind CSS", color: "#06B6D4" }, // teal
  { name: "Redux", color: "#764ABC" },     // purple
  { name: "Vite", color: "#646CFF" },      // violet
  { name: "Accessibility", color: "#34D399" }, // green
];

const backend: Skill[] = [
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#000000" },
  { name: "REST APIs", color: "#4B5563" },
  { name: "GraphQL", color: "#E10098" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Auth (JWT/OAuth)", color: "#FBBF24" },
  { name: "Caching", color: "#F87171" },
  { name: "Testing", color: "#6B7280" },
];

const soft: Skill[] = [
  { name: "Communication", color: "#3B82F6" },
  { name: "Teamwork", color: "#10B981" },
  { name: "Problem Solving", color: "#FACC15" },
  { name: "Adaptability", color: "#8B5CF6" },
  { name: "Time Management", color: "#EC4899" },
  { name: "Leadership", color: "#6366F1" },
  { name: "Mentoring", color: "#14B8A6" },
  { name: "Ownership", color: "#F97316" },
  { name: "Creativity", color: "#EF4444" },
  { name: "Attention to Detail", color: "#9CA3AF" },
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
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-6 px-10'>
      <ScrollAnimation>
        <div className='font-bold text-3xl w-full text-center p-4 mb-5'>My skills</div>
        <div className="w-full h-full rounded-lg bg-gray-600 overflow-hidden shadow-xl flex flex-col">
          <nav className="bg-gray-400  rounded-t-lg border-b ">
            <ul className="flex w-full list-none p-0 m-0 font-medium text-sm">
              {tabs.map((item) => (
                <motion.li
                  key={item.label}
                  initial={false}
                  animate={{
                    backgroundColor: item === selectedTab ? '#eee' : '#eee0',
                  }}
                  className="relative rounded-t-md w-full px-4 py-2.5 cursor-pointer flex  items-center flex-1 min-w-0 select-none text-[#0f1115] bg-white"
                  onClick={() => setSelectedTab(item)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {`$ ${item.label}`}
                  {item === selectedTab ? (
                    <motion.div
                      layoutId="underline"
                      id="underline"
                      className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[--accent]"
                    />
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </nav>
          <main className="w-full h-full flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                <SkillCard 
                frontend={frontend}
                backend={backend}
                soft={soft}
                selectedTab={selectedTab}
                 />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </ScrollAnimation>
    </div>
  )
}
