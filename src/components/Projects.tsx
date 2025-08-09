'use client';
import { useEffect, useState } from 'react';
import { fetchGitHubProjects } from '@/app/lib/github';

import ScrollAnimation from '@/animations/ScrollAnimation';
import { AnimatedBackground } from './Styles/AnimatedBackground';

import Image from 'next/image';

import Card from './Styles/CardProject';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  imageUrl?: string;
  hueA: number;
  hueB: number;
}

interface CardProject {
  image: string;
  hueA: number;
  hueB: number;
  logo: string;
  title: string;
}

export default function ProjectsComponent() {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [featuredProject, setFeaturedProject] = useState<Repo[]>([]);
  const cardProject: CardProject[] = [
    {
      image: '/ProjectsSS/MyFlixAngular.png',
      hueA: 340,
      hueB: 10,
      logo: '/ProjectLogos/MyFlix1.png',
      title: 'MyFlix Angular',
    },
    {
      image: '/ProjectsSS/MyFlixReact.png',
      hueA: 205,
      hueB: 40,
      logo: '/ProjectLogos/MyFlix1.png',
      title: 'MyFlix React'
    },
    {
      image: '/ProjectsSS/TacosElPuebla.png',
      hueA: 60,
      hueB: 90,
      logo: '/ProjectLogos/myFlix3.png',
      title: 'Tacos El Puebla'
    }
  ];

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
        ...projects[i]

      }));
      setFeaturedProject(feature);
    }
  }, [projects]);

  return (
    <div className='relative'>
      <AnimatedBackground />
      <section className="bg-gray-900 flex flex-col items-center justify-center p-8 text-gray-900">

        <div className="text-2xl font-semibold mb-6">Featured Projects!!</div>
        <div className="mx-auto my-[100px] w-full max-w-[500px] pb-[100px]">
          {/* Div before iteration in frame Motion Docs
          // <div className="mx-auto my-[100px] w-full max-w-[500px] pb-[100px]">
          //   ))}
          // </div>
          */}
          {cardProject.map((card, i) => (
            <ScrollAnimation delay={i * 0.5} key={card.title}>
              <Card i={i} img={card.image} hueA={card.hueA} hueB={card.hueB} key={card.image}
              ><div>
                  {/* {featuredProject.} */}
                  <Image
                    src={card.image}
                    width={200}
                    height={200}
                    alt={card.title}>

                  </Image>
                  <div>
                    {featuredProject[i]?.name}
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
        {/* {featuredProject.map((project: Repo, index) => (
          
          
            <div className="flex flex-col sm:flex-row  relative justify-center
              p-6 mb-6 md:w-3xl xl:w-4xl w-full bg-gray-700/50 rounded-2xl border-2 border-gray-800">
              <div className=''>
                <Image
                  src={project.imageUrl || '/images/default.png'}
                  alt={project.name}
                  width={500}
                  height={500}
                  className="mask-linear-130 mask-linear-from-55% mask-linear-to-80%"></Image>
              </div>
              <div className="relative flex flex-col justify-between h-60 w-full max-w-md p-6 ml-5">
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
                <div
                  className="absolute opacity-30 h-full w-full flex justify-center 
                     top-16"
                >
                  <Image
                    src={logos[index]}
                    alt={project.name}
                    width={200}
                    height={200}
                    className=' '
                  >

                  </Image>
                </div>
              </div>
            </div>


        ))} */}
      </section>
    </div>
  )
}

