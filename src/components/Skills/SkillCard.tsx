import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  image: string;
}

interface ProjectsSectionProps {
  selectedSkill: string | null;
  onClearFilter: () => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management with drag-and-drop functionality.',
    skills: ['React', 'TypeScript', 'Express', 'MongoDB', 'Redux'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics across platforms.',
    skills: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts.',
    skills: ['React', 'JavaScript', 'REST APIs', 'HTML/CSS'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'Content management system with markdown support and SEO optimization.',
    skills: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Modern portfolio site with animations and responsive design.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
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
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-white mb-2">Projects</h2>
          <p className="text-gray-400">
            {selectedSkill 
              ? `Showing projects using ${selectedSkill}`
              : 'All projects'
            }
          </p>
        </div>
        
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
                <div className="h-48 overflow-hidden bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-md text-sm ${
                          selectedSkill && skill.toLowerCase() === selectedSkill.toLowerCase()
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