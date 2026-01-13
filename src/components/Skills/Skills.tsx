'use client'

import { useEffect, useState } from 'react'
import { Code, Server, Users } from 'lucide-react';
import SkillCard from './SkillCard';

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

export default function SkillsComponent() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const skills = {
    frontend: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
      'JavaScript', 'HTML/CSS', 'Angular.js', 'Bootstrap',
      'SCSS'
    ],
    backend: [
      'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
      'REST APIs', 'SQL', 'Python', 'Django','Azure',
      'AWS', 'Serverless','Netlify','Vercel'

    ],
    soft: [
      'Adaptability', 'Problem Solving', 'Recursivity',
      'Time Management', 'Creativity', 'Critical Thinking',
      'Leadership', 'Teamwork'
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
    <div className='relative w-full h-full flex flex-col items-center justify-center gap-5 px-10 mb-120'>
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
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="text-2xl md:text-3xl text-gray-800 font-bold">Projects</h2>
              <span className="text-sm md:text-base text-gray-800">
                {selectedSkill ? `Filter: ${selectedSkill}` : 'No filter applied'}
              </span>
            </div>
        <SkillCard selectedSkill={selectedSkill} onClearFilter={() => setSelectedSkill(null)} />
      </div>

    </div>

  )
}