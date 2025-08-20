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
      hueA: 555,
      hueB: 9000,
      logo: '/ProjectLogos/MyFlix4.png',
      title: 'MyFlix Angular',
    },
    {
      image: '/ProjectsSS/MyFlixReact.png',
      hueA: 455,
      hueB: 40,
      logo: '/ProjectLogos/MyFlix1.png',
      title: 'MyFlix React'
    },
    {
      image: '/ProjectsSS/TacosElPuebla.png',
      hueA: 580,
      hueB: 90,
      logo: '/ProjectLogos/MyFlix4.png',
      title: 'Tacos El Puebla'
    }
  ];

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchGitHubProjects();
        setProjects(data);
        console.log('Fetched projects:', data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    getProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const index = [5, 6, 12]
      // console.log(projects)
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
          {cardProject.map((card, i) => (
            <ScrollAnimation delay={i * 0.5} key={card.title}>
              <Card i={i} img={card.image} hueA={card.hueA} hueB={card.hueB} key={card.image}
              >
                <div className='flex flex-col w-full justify-center items-center'>
                  {/* <div className='w-full absolute opacity-50 pointer-events-none'>
                    <Image
                      src={card.logo}
                      width={400}
                      height={400}
                      alt={card.title}
                      className=''>
                    </Image>
                  </div> */}
                  {/* <Image
                    src={card.image}
                    width={200}
                    height={200}
                    alt={card.title}>
                  </Image> */}
                  <div className='w-full flex flex-col justify-center items-center h-full'>
                    <div className='text-3xl p-4 text-shadow-md'>
                      {featuredProject[i]?.name ?? card.title}
                    </div>
                    <div className=' flex text-center text-xl text-shadow-xs py-1 px-4 w-full line-clamp-5 overflow-hidden'>
                      {featuredProject[i]?.description}
                    </div>
                    <a
                      href={featuredProject[i]?.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm p-4 font-medium text-shadow-2xs text-blue-600 dark:text-blue-400 hover:underline text-center
                      hover:cursor-pointer"
                    >
                      🔗 View on GitHub
                    </a>
                    <a
                      href={featuredProject[i]?.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm  font-medium text-shadow-2xs text-blue-600 dark:text-blue-400 hover:underline text-center
                      hover:cursor-pointer"
                    >
                      🔗 Live demo
                    </a>
                   
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  )
}

