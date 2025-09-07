'use client';
import { useEffect, useState } from 'react';

import ScrollAnimation from '@/animations/ScrollAnimation';

import Card from './Styles/CardProject';

import { getFeaturedProject } from './ProjectData';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  imageUrl?: string;
  hueA: number;
  hueB: number;
  liveDemo?: string;


}
interface ExtraInfo {
  image: string;
  hueA: number;
  hueB: number;
  logo: string;
  liveDemo?: string;
}

export default function ProjectsComponent() {
  const [featuredProject, setFeaturedProject] = useState<Repo[]>([]);

  useEffect(() => {
    const extraInfo: ExtraInfo[] = [
      {
        image: '/ProjectsSS/TacosElPuebla.png',
        hueA: 580,
        hueB: 90,
        logo: '/ProjectLogos/MyFlix4.png',
        liveDemo: 'https://tacoselpuebla.com/'

      },
      {
        image: '/ProjectsSS/MyFlixAngular.png',
        hueA: 555,
        hueB: 9000,
        logo: '/ProjectLogos/MyFlix4.png',
        liveDemo: 'https://myflix-angular-daniel.netlify.app/'
      },
      {
        image: '/ProjectsSS/MyFlixReact.png',
        hueA: 455,
        hueB: 40,
        logo: '/ProjectLogos/MyFlix1.png',
        liveDemo: 'https://myflixsiteapp.netlify.app/'
      },
      
      
      
    ];
    getFeaturedProject().then((data) => {
      data.forEach((project, index) => {
        // Assign imageUrl, hueA, and hueB from cardProject to each project
        project.imageUrl = extraInfo[index]?.image;
        project.hueA = extraInfo[index]?.hueA;
        project.hueB = extraInfo[index]?.hueB;
        project.liveDemo = extraInfo[index].liveDemo; // Example live demo link for the third project
      });
      setFeaturedProject(data);
    }).catch((error) => {
      console.error('Error fetching featured projects:', error);
    });
  }, []);

  return (
    <div className='relative'>
      <section className="bg-gray-900 flex flex-col items-center justify-center p-8 text-gray-900">

        <div className=" text-gray-200 text-3xl md:text-4xl font-bold mb-6">Featured Projects!!</div>
        <div className="mx-auto my-[100px] w-full max-w-[500px] pb-[100px]">
          {featuredProject.map((card, i) => (
            <ScrollAnimation delay={i * 0.5} key={card.name}>
              <Card img={card.imageUrl ?? ''} i={i} hueA={card.hueA} hueB={card.hueB} key={card.name}
              >
                <div className='flex flex-col w-full justify-center items-center'>
                  <div className='w-full flex flex-col justify-center items-center h-full'>
                    <div className='text-3xl p-4 text-shadow-md'>
                      {featuredProject[i]?.name}
                    </div>
                    <div className=' text-center text-xl text-shadow-xs py-1 px-4 w-full line-clamp-6'>
                      {card.description}
                    </div>
                    <a
                      href={featuredProject[i]?.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm p-2 font-medium text-shadow-2xs text-blue-600 dark:text-blue-400 hover:underline text-center
                      hover:cursor-pointer"
                    >
                      🔗 View on GitHub
                    </a>
                    <a
                      href={featuredProject[i]?.liveDemo}
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

