'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import ScrollAnimation from '@/animations/ScrollAnimation'
import { Brain, Code2, LucideIcon, ServerCog } from 'lucide-react'
import SkillCard from './SkillCard'
import { AnimatedBackground } from './Styles/AnimatedBackground'
import GlitchIconWrapper from './Styles/GlitchIconWrapper'

import { getProjectsData, filteredProjectsBySkill } from './ProjectData'


interface GitHubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    // ... other owner properties
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  // ... other repository properties
}

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
  { name: "ReactNative", color: "#61DAFB", level: 75 }, // light cyan (same React branding)
  { name: "Nextjs", color: "#000000", level: 85 },      // black
  { name: "Angular", color: "#DD0031", level: 70 },     // red
  { name: "TailwindCSS", color: "#06B6D4", level: 85 }, // teal
  { name: "Bootstrap", color: "#7952B3", level: 75 },   // purple
  { name: "Vite", color: "#646CFF", level: 70 },        // violet
  { name: "FramerMotion", color: "#E83E8C", level: 80 } // pink
];

const backend: Skill[] = [
  { name: "Nodejs", color: "#339933", level: 80 },
  { name: "Express", color: "#000000", level: 70 },
  { name: "APIs", color: "#4B5563", level: 80 },
  { name: "MongoDB", color: "#47A248", level: 80 },
  { name: "Firebase", color: "#FFCA28", level: 75 },       // yellow-orange
  { name: "Auth", color: "#FBBF24", level: 70 },
  { name: "Testing", color: "#6B7280", level: 65 },
  { name: "Vercel", color: "#000000", level: 80 }          // black (Vercel branding)
];

const soft: Skill[] = [
  { name: "Communication", color: "#3B82F6", level: 90 },
  { name: "Teamwork", color: "#10B981", level: 85 },
  { name: "Problem Solving", color: "#FACC15", level: 90 },
  { name: "Adaptability", color: "#8B5CF6", level: 95 },
  { name: "Time Management", color: "#EC4899", level: 85 },
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
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState<GitHubRepo[]>([]);
  const skillSections = [
    {
      tab: skillsTable[0],
      icon: Code2,
      label: 'Front end',
      skills: frontend,
      aria: 'Front-End Skills',
    },
    {
      tab: skillsTable[1],
      icon: ServerCog,
      label: 'Back end',
      skills: backend,
      aria: 'Back-End Skills',
    },
    {
      tab: skillsTable[2],
      icon: Brain,
      label: 'Soft Skills',
      skills: soft,
      aria: 'Soft Skills',
    },
  ];

  // Fetch or filter projects based on selected skills  

  useEffect(() => {
    // console.log('Selected Skills changed:', selectedSkills);
    if (selectedSkills.length > 0) {
      filteredProjectsBySkill(selectedSkills).then((data) => {
        // console.log('Projects matching selected skills:', data);
        setFilteredProjects(data);
      }).catch((error) => {
        console.error('Error fetching filtered projects:', error);
      });
    } else {

      getProjectsData().then((data) => {
        setFilteredProjects(data);
      }).catch((error) => {
        console.error('Error fetching all projects:', error);
      });
    }
  }, [selectedSkills]);
  useEffect(() => {
    // console.log('Filtered Projects updated:', filteredProjects);
  }, [filteredProjects]);

  return (
    <div className='relative w-screen h-full md:h-full flex flex-col items-center justify-center gap-5 px-10 mb-120'>
      <AnimatedBackground />
      <div className='font-bold text-3xl text-center p-4 mb-5'>My skills</div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-6 gap-x-10 w-full h-full md:h-screen">
        {skillSections.map((section) => (
          <div key={section.label} className="relative w-full h-full">
            <ScrollAnimation>
              <div
                key={section.label}
                className="flex flex-col w-full h-[530px] md:h-[400px]  border-4 border-gray-800 rounded-t-xl group/table"
              >
                <div className="flex h-16  bg-gray-200 rounded-2xl w-full">
                  <motion.div
                    initial={false}
                    className="w-full h-16 px-4 py-2.5 cursor-pointer flex rounded-t-md items-center bg-gray-800 text-gray-200"
                    onClick={() => setSelectedTab(section.tab)}
                  >
                    <section.icon className="w-5 h-5 mr-2" />
                    {section.label}
                  </motion.div>
                </div>
                <main className="w-full h-full max-h-[460px] flex-1 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedTab ? selectedTab.label : 'empty'}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {selectedTab.label === section.tab.label ? (
                        <SkillCard
                          frontend={frontend}
                          backend={backend}
                          soft={soft}
                          selectedTab={selectedTab}
                          onSkillClick={selectedTab.label === 'Soft-Skills' ? undefined : (skillName: string) => {
                            setSelectedSkills(prev =>
                              prev.includes(skillName)
                                ? prev.filter(s => s !== skillName)
                                : [...prev, skillName]
                            );
                          }}
                          activeSkills={selectedSkills}
                          filteredProjects={filteredProjects}
                        />
                      ) : (
                        <div className="w-full h-full md:max-h-[330px] flex items-center justify-center"
                          onClick={() => setSelectedTab(section.tab)}
                        >
                          <GlitchIconWrapper
                            icon={section.icon}
                            className="w-full h-full  text-gray-500 p-4 bg-gray-400/50 group-hover/table:cursor-crosshair"
                            aria-label={section.aria}
                          />
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </main>
              </div>
            </ScrollAnimation>
          </div>
        ))}
        {/* Fourth grid cell: Filtered Projects */}
        <div className="flex flex-col w-full h-[550px] md:h-[400px] border-4 border-gray-800 rounded-t-xl group/table bg-gray-100">
          <div className="flex h-16 bg-gray-200 rounded-2xl w-full items-center justify-center font-bold text-xl text-gray-800">Filtered Projects</div>
          <main className="w-full h-full max-h-[460px] flex-1 flex flex-col items-start justify-start p-4 overflow-y-auto">
            {filteredProjects.map((project: GitHubRepo) => (
              <div key={project.name} className="flex flex-col items-center justify-center mb-6 p-4 bg-white rounded shadow w-full">
                <div className="font-semibold text-lg mb-1 text-center">{project.name ? project.name : 'No name available.'}</div>
                <div className="text-gray-600 text-sm mb-2 text-center">{project.description ? project.description : 'No description available.'}</div>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  {/* Show up to 3 skills, truncate if more */}
                  {/* {(project.skillsUsed ? project.skillsUsed.slice(0,3) : []).map((skill, idx) => (
                      <span key={skill + idx} className="px-2 py-1 bg-gray-200 rounded text-xs text-gray-800">{skill}</span>
                    ))}
                    {project.skillsUsed && project.skillsUsed.length > 3 && (
                      <span className="px-2 py-1 bg-gray-300 rounded text-xs text-gray-500">...</span>
                    )} */}
                </div>
              </div>
            )
            )}

            {selectedSkills.length > 0 && (
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setSelectedSkills([])}>
                Clear Filters
              </button>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}