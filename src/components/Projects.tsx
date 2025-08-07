'use client';
import { useEffect, useState } from 'react';
import { fetchGitHubProjects } from '@/app/lib/github';
import Image from 'next/image';
import ScrollAnimation from '@/animations/ScrollAnimation';
import { AnimatedBackground } from './Styles/AnimatedBackground';


interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  imageUrl?: string;
}

export default function ProjectsComponent() {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [isLeft, setLeft] = useState<boolean>(false);
  const [featuredProject, setFeaturedProject] = useState<Repo[]>([]);
  const images: { [key: string]: string } = {
    '5': '/ProjectsSS/MyFlixAngular.png',
    '6': '/ProjectsSS/MyFlixReact.png',
    '11': '/ProjectsSS/TacosElPuebla.png',
  };


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
      const index = [5, 6, 11]
      const feature = index.map(i => ({
        ...projects[i],
        imageUrl: images[i] || '/images/default.png', // fallback image
      }));
      setFeaturedProject(feature);
    }
  }, [projects]);

  return (
    <div className='relative'>
      <AnimatedBackground />
      <section className="bg-gray-200 flex flex-col items-center justify-center p-8 text-gray-900">

        <div className="text-2xl font-semibold mb-6">Featured Projects!!</div>
        {featuredProject.map((project: Repo, index) => (
          <ScrollAnimation delay={index * 0.5} key={project.id}>
            <div className="flex flex-col sm:flex-row 
          p-6 mb-6 w-full">
              <div className='w-full'>
                <Image
                  src={project.imageUrl || '/images/default.png'}
                  alt={project.name}
                  width={500}
                  height={500}
                  className=""></Image>
              </div>
              <div className="flex flex-col justify-between h-60 w-full max-w-md p-6 ml-5">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-center">
                  {project.description || 'No description available'}
                </p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline text-center"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </section>
    </div>
  )
}

