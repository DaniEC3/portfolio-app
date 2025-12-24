'use client'

import { useEffect, useState } from 'react'
import { Code, Server, Users } from 'lucide-react';
import SkillCard from './SkillCard';
import { getProjectsData, filteredProjectsBySkill } from '../utils/ProjectData'

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


// const frontend: Skill[] = [
//   { name: "HTML", color: "#E34F26", level: 95 },        // orange-red
//   { name: "CSS", color: "#1572B6", level: 90 },         // blue
//   { name: "JavaScript", color: "#F7DF1E", level: 85 },  // yellow
//   { name: "TypeScript", color: "#3178C6", level: 80 },  // blue
//   { name: "React", color: "#61DAFB", level: 85 },       // cyan
//   { name: "Next.js", color: "#000000", level: 80 },     // black
//   { name: "Angular", color: "#DD0031", level: 70 },     // red
//   { name: "Tailwind CSS", color: "#06B6D4", level: 85 },// teal
//   { name: "Framer Motion", color: "#E83E8C", level: 75 }// pink
// ];

// const backend: Skill[] = [
//   { name: "Node.js", color: "#339933", level: 80 },
//   { name: "Express", color: "#000000", level: 75 },
//   { name: "REST APIs", color: "#4B5563", level: 85 },
//   { name: "MongoDB", color: "#47A248", level: 80 },
//   { name: "Firebase", color: "#FFCA28", level: 70 },       // yellow-orange
//   { name: "Auth (JWT/OAuth)", color: "#FBBF24", level: 75 },
//   { name: "Testing", color: "#6B7280", level: 65 }
// ];

// const soft: Skill[] = [
//   { name: "Communication", color: "#3B82F6", level: 90 },
//   { name: "Teamwork", color: "#10B981", level: 85 },
//   { name: "Problem Solving", color: "#FACC15", level: 80 },
//   { name: "Adaptability", color: "#8B5CF6", level: 85 },
//   { name: "Time Management", color: "#EC4899", level: 80 },
//   { name: "Leadership", color: "#6366F1", level: 75 },
//   { name: "Creativity", color: "#EF4444", level: 85 },
//   { name: "Attention to Detail", color: "#9CA3AF", level: 80 }
// ];



export default function SkillsComponent() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const skills = {
    frontend: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
      'JavaScript', 'HTML/CSS', 'Redux', 'Vue.js'
    ],
    backend: [
      'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
      'REST APIs', 'GraphQL', 'Python', 'Docker'
    ],
    soft: [
      'Team Collaboration', 'Problem Solving', 'Communication',
      'Time Management', 'Adaptability', 'Critical Thinking'
    ]
  };


  const handleSkillClick = (skill: string, category: string) => {
    if (category === 'soft') return;

    if (selectedSkill === skill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    <div className='relative w-screen h-screen md:h-screen flex flex-col items-center justify-center gap-5 px-10 mb-120'>
      <div className='font-bold text-3xl text-center p-4 mb-5'>My skills</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-gray-800 rounded-lg overflow-hidden">
        {/* Frontend Skills */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillClick(skill, 'frontend')}
                className={`px-4 py-2 rounded-md transition-all ${selectedSkill === skill
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-600 rounded-lg">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillClick(skill, 'backend')}
                className={`px-4 py-2 rounded-md transition-all ${selectedSkill === skill
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/50'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-600 rounded-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-700/50 text-gray-400 rounded-md border border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mt-8">
        <SkillCard selectedSkill={selectedSkill} onClearFilter={() => setSelectedSkill(null)} />
      </div>

    </div>

  )
}