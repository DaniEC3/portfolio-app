'use client';
import { useEffect, useState } from 'react';
import { fetchGitHubProjects } from '@/app/lib/github';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function ProjectsComponent() {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [featuredProject, setFeaturedProject] = useState<Repo[]>([]);

  useEffect(() => {
    const getProjects = async () => { 
      try {
        const data = await fetchGitHubProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    getProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const index = [5,6,11]
      const feature = index.map(i => projects[i]);
      setFeaturedProject(feature);
    }
  }, [projects]);

  return (
    <section className="bg-gray-200 h-[50em] flex items-center justify-center p-8 text-gray-900">
      {featuredProject.map((project: Repo) => (
        <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg m-4">
          <h2 className="text-xl font-bold mb-2">{project.name}</h2>
          <p className="text-gray-700 mb-4">{project.description || 'No description available'}</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View on GitHub
          </a>
        </div>
      ))}
    </section>
  )
}

