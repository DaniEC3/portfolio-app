
'use client'

import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import ScrollAnimation from '@/animations/ScrollAnimation'
import { Brain, Code2, LucideIcon, ServerCog } from 'lucide-react'
import SkillCard from './SkillCard'


type Tab = { icon:LucideIcon ; label: string }

const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "Vite",
    "Accessibility",
  ];

  const backend = [
    "Node.js",
    "Express",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Auth (JWT/OAuth)",
    "Caching",
    "Testing",
  ];

  const soft = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Leadership",
    "Mentoring",
    "Ownership",
    "Creativity",
    "Attention to Detail",
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
    <div className='w-full h-screen flex flex-col items-center justify-center gap-6'>
      <ScrollAnimation>
        <div className="w-full h-full rounded-lg bg-gray-600 overflow-hidden shadow-xl flex flex-col">
          <nav className="bg-gray-400] px-[5px]  pb-0 rounded-t-lg border-b border-[#eeeeee] h-11">
            <ul className="flex w-full list-none p-0 m-0 font-medium text-sm">
              {tabs.map((item) => (
                <motion.li
                  key={item.label}
                  initial={false}
                  animate={{
                    backgroundColor: item === selectedTab ? '#eee' : '#eee0',
                  }}
                  className="relative rounded-t-md w-full px-4 py-2.5 cursor-pointer flex justify-between items-center flex-1 min-w-0 select-none text-[#0f1115] bg-white"
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
