'use client';
import { useEffect, useState } from 'react';

import ScrollAnimation from '@/animations/ScrollAnimation';
import { AnimatedBackground } from '../Styles/AnimatedBackground';

import Card from '../Styles/CardProject';

import { getProjectsData } from '../utils/ProjectData';
import ProjectModal from './ProjectModal';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  imageUrl?: string;
  hueA: number;
  hueB: number;
  homepage?: string;
  goals?: string;
  role?: string;
  challenge?: string;
  primaryStakeholders: string;
  process?: string;
  tools?: string[];
}

interface ExtraInfo {
  image: string;
  hueA: number;
  hueB: number;
  modalDescription: string;
  challengues: string;
  goals: string;
  features: string;
  role: string;
  primaryStakeholders: string;
  process: string;
  
}
interface Project {
  name: string;
}

export default function ProjectsComponent() {
  const [featuredProject, setFeaturedProject] = useState<Repo[]>([]);
  const keyWordsProjects = ['myflix-angular', 'tacoselpuebla', 'jangorecipes'];
  const [isOpen, setIsOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Repo | undefined>(undefined);
  const extraInfo: ExtraInfo[] = [
  {
    image: '/ProjectsSS/JangoRecipes.png',
    hueA: 20,
    hueB: 40,
    modalDescription:
      'A Django-based web application for browsing and managing recipes, featuring user authentication and dynamic recipe exploration.',
    challengues:
      'Designing relational database models, managing authentication, structuring reusable templates, and handling environment variables securely.',
    goals:
      'Build a full-stack Django application to practice backend logic, database relationships, and server-side rendering.',
    features:
      'User authentication, recipe browsing, detailed recipe views, Django ORM models, and server-rendered templates.',
    role:
      'Full-Stack Developer',
    primaryStakeholders:
      'Self-directed academic project (CareerFoundry curriculum)',
    process:
      'Designed data models with Django ORM, implemented CRUD functionality, built reusable templates, configured environment variables, and iteratively tested features.',
  },
  {
    image: '/ProjectsSS/MyFlixAngular.png',
    hueA: 555,
    hueB: 9000,
    modalDescription:
      'A full-stack movie application built with Angular and a RESTful API, allowing users to explore movies, genres, and directors.',
    challengues:
      'Connecting Angular to a custom API, managing authentication, structuring components and services, and deploying frontend and backend separately.',
    goals:
      'Create a complete full-stack application demonstrating REST architecture, authentication, and component-based UI design.',
    features:
      'RESTful API, Angular components and services, user authentication, protected routes, and profile management.',
    role:
      'Full-Stack Developer',
    primaryStakeholders:
      'CareerFoundry Full-Stack Web Development Program',
    process:
      'Built a REST API with Node.js and MongoDB, implemented Angular routing and services, integrated authentication, tested endpoints, and deployed both client and server.',
  },
  {
    image: '/ProjectsSS/TacosElPuebla.png',
    hueA: 580,
    hueB: 90,
    modalDescription:
      'A responsive business website created for a local restaurant to showcase menu items, location, and contact information.',
    challengues:
      'Translating business needs into a simple digital presence while ensuring responsiveness, performance, and accessibility.',
    goals:
      'Design and develop a clean, mobile-friendly website for a real business with a focus on usability and branding.',
    features:
      'Responsive layout, menu display, contact section, location details, and mobile-first design.',
    role:
      'Front-End Developer',
    primaryStakeholders:
      'Local restaurant owner',
    process:
      'Gathered requirements, designed a mobile-first layout, built reusable UI sections, optimized responsiveness, and tested across devices.',
  },
];

  useEffect(() => {
    getProjectsData().then((data) => {
      const filtered = data.filter(
        (project: Project) =>
          keyWordsProjects.includes(project.name.toLowerCase())
      );
      filtered.forEach((project: Repo, index: number) => {
        project.imageUrl = extraInfo[index]?.image;
        project.hueA = extraInfo[index]?.hueA;
        project.hueB = extraInfo[index]?.hueB;
        project.description = extraInfo[index]?.modalDescription;
        project.challenge = extraInfo[index]?.challengues;
        project.goals = extraInfo[index]?.goals;
        project.role = extraInfo[index]?.role;
        project.primaryStakeholders = extraInfo[index]?.primaryStakeholders;
        project.process = extraInfo[index]?.process;
        project.tools = extraInfo[index]?.features.split(', ');
      });
      setFeaturedProject(filtered);

    }).catch((error) => {
      console.error('Error fetching featured projects:', error);
    });

  }, []);

  console.log('Filtered projects:', featuredProject);

  return (
    <div className='relative'>
      <AnimatedBackground />
      <section className="bg-gray-900 flex flex-col items-center justify-center p-8 text-gray-900">
        <ProjectModal isOpen={isOpen} isClosed={() => setIsOpen(false)} project={modalProject}/>
        <div className="text-3xl md:text-4xl text-white font-bold mb-6 ">Featured Projects!!</div>
        <div className="mx-auto my-[100px] w-full max-w-[500px] pb-[100px]">
          {featuredProject.map((card, i) => (
            
            <ScrollAnimation delay={i * 0.5} key={card.name}>
              <Card i={i} hueA={card.hueA} key={card.name}
              >
                <div className='flex flex-col w-full justify-center items-center'>
                  <div className='w-full flex flex-col justify-center items-center h-full'>
                    <div className='text-3xl p-4 pt-0 text-shadow-md'>
                      {featuredProject[i]?.name}
                    </div>
                    <div className=' flex text-center text-xl text-shadow-xs py-1 px-4 w-full line-clamp-5 overflow-hidden'>
                      {card.description}
                    </div>
                    <div className='group flex bg-gray-700 justify-around w-full mt-4 p-3 hover:bg-gray-600 transition-colors duration-300 cursor-pointer'>
                      <button
                        className="w-full text-sm font-medium text-shadow-2xs text-white text-center 
                        transform transition-all duration-300 ease-out
                        group-hover:scale-110 group-hover:font-bold
                        relative overflow-hidden cursor-pointer
                        before:absolute before:inset-0 before:bg-white/20 
                        before:translate-x-[-100%] before:transition-transform before:duration-500
                        group-hover:before:translate-x-[100%]
                        "
                        onClick={() => { setIsOpen(true); setModalProject(card); }}
                      >
                        More Info
                      </button>

                    </div>
                    <div className='flex justify-around w-full mt-2 p-3 bg-gray-200 gap-4'>
                      <a
                        href={featuredProject[i]?.homepage || featuredProject[i]?.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-shadow-2xs text-gray-700 text-center cursor-pointer
                        transform transition-all duration-300 ease-out
                        hover:scale-110 hover:font-bold hover:text-gray-900
                        relative overflow-hidden
                        before:absolute before:inset-0 before:bg-gray-900/10
                        before:translate-x-[-100%] before:transition-transform before:duration-500
                        hover:before:translate-x-[100%]"
                      >
                        🔗 Live demo
                      </a>
                      <a
                        href={featuredProject[i]?.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-shadow-2xs text-gray-700 text-center cursor-pointer
                        transform transition-all duration-300 ease-out
                        hover:scale-110 hover:font-bold hover:text-gray-900
                        relative overflow-hidden
                        before:absolute before:inset-0 before:bg-gray-900/10
                        before:translate-x-[-100%] before:transition-transform before:duration-500
                        hover:before:translate-x-[100%]"
                      >
                        🔗 View on GitHub
                      </a>


                    </div>




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