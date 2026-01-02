import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
}

interface ProjectsSectionProps {
  selectedSkill: string | null;
  onClearFilter: () => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Jango Recipes',
    description: 'Full-stack recipe management application with user authentication, recipe creation, and structured data handling.',
    skills: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript','Azure','SQL'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects, skills, and experience with responsive design and modern UI.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS','Vercel','Firebase' ],
  },
  {
    id: 3,
    title: 'MyFlix Angular',
    description: 'Movie database client built with Angular consuming a RESTful API for browsing, filtering, and managing movies.',
    skills: ['Angular.js', 'TypeScript', 'REST APIs', 'Netlify',"MongoDB",'Node.js','Express' ],
  },
  {
    id: 4,
    title: 'MyFlix React',
    description: 'Single-page movie application built with React, featuring user authentication and API-driven data.',
    skills: ['React', 'JavaScript', 'REST APIs', 'SCSS','Netlify','MongoDB','Node.js','Express'],
  },
  {
    id: 5,
    title: 'Tacos El Puebla',
    description: 'Business website for a local restaurant featuring menu display, contact information, and responsive layout.',
    skills: ['HTML/CSS', 'JavaScript', 'Bootstrap','Cloudflare' ],
  },
  {
    id: 6,
    title: 'Chat App',
    description: 'Real-time chat application with user authentication and cloud-based data storage.',
    skills: ['React', 'Firebase', 'JavaScript','React Native','Node.js' ],
  },
  {
    id: 7,
    title: 'Meet App',
    description: 'Serverless event management app with offline support, data visualization, and API integration.',
    skills: ['React', 'AWS', 'REST APIs', 'JavaScript','Serverless'],
  },
  {
    id: 8,
    title: 'Pokédex App',
    description: 'Interactive Pokédex application consuming an external API to display Pokémon data and details.',
    skills: ['React', 'JavaScript', 'REST APIs', 'HTML/CSS'],
  }
];

export default function SkillCard({ selectedSkill, onClearFilter }: ProjectsSectionProps) {
  const filteredProjects = selectedSkill
    ? projects.filter(project =>
      project.skills.some(skill =>
        skill.toLowerCase() === selectedSkill.toLowerCase()
      )
    )
    : projects;

  return (
    <div >
      <div className="flex items-center justify-between mb-8">
        {selectedSkill && (
          <button
            onClick={onClearFilter}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
            Clear Filter
          </button>
        )}
      </div>

      <div className="h-[600px] overflow-y-auto bg-gray-800/30 rounded-lg p-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {filteredProjects.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <p className="text-gray-400">
              No projects found using {selectedSkill}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/50"
              >
                <div className="p-6">
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-md text-sm ${selectedSkill && skill.toLowerCase() === selectedSkill.toLowerCase()
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300'
                          }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}