'use client';
import { BriefcaseBusiness, Contact, House } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

import { useEffect, useState } from 'react';

import ThemeToggleComponent from './ThemeToggle';

export default function HeaderComponent() {
  const [isAtTop, setIsAtTop] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atTop = scrollY < 10;
      setIsAtTop(atTop);
      console.log('Scroll position:', scrollY, 'Is at top:', atTop); // Debugging line
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={clsx(
        ' text-gray-800 bg-gradient-to-b flex flex-col items-center gap-4',
        ' w-full z-50 transition-all duration-500 fixed top-0 left-0',
        'from-gray-800 from-16% via-gray-700  to-gray-200 group/header',
        isAtTop ? 'h-80-sm h-60 opacity-100 py-4 h-50-s' : 'opacity-60 py-2 h-30 backdrop-blur-md hover:opacity-90',

      )}>
        <div className='w-full justify-end'>
          <ThemeToggleComponent />
        </div>

        <div className={clsx(
          'flex justify-center overflow-hidden rounded-lg',
          'transition-all duration-300 w-full ',
          isAtTop ? '-mt-8 opacity-100' : 'opacity-0'

        )}>
          <Image
            src={'/logo/LogoName-W-nb.png'}
            width={400}
            height={400}
            className={clsx(
              'object-cover',
              'transition-all duration-300',
              isAtTop ? 'h-25 opacity-100' : 'h-50 opacity-0',
              'hover:animate-glitch'
            )}
            alt='Logo'
          />
        </div>

        <nav className='flex justify-center'>
          <ul className={clsx(
            "flex gap-6 text-gray-400 transition-all duration-300 ",
            isAtTop ? 'p-4' : 'pt-1 pb-1 -mt-30'
          )}>
            <li className='flex justify-center items-center'>
              <a href="#about" className='flex items-center flex-col gap-1 
              group/icons relative transition-all
              duration-200 group-hover/header:scale-115 group-hover/header:opacity-100'>
                <House className={clsx(
                  'cursor-crosshair hover:scale-125 size-8 hover:text-white',
                  'transition-transform',
                  isAtTop ? 'group-hover/header:text-gray-400' : 'group-hover/header:text-gray-100',
                  'group-hover/header:opacity-100 ',
                )}
                />
                <span className='opacity-0 pointer-events-none 
               group-hover/icons:text-white group-hover/icons:opacity-100 transition-opacity duration-200 absolute mt-9 '>Home</span>
              </a></li >
            <li className='flex justify-center items-center group relative'>
              <a href="#projects" className='flex items-center flex-col gap-1 
              group/icons relative transition-all
              duration-200 group-hover/header:scale-115 group-hover/header:opacity-100'>
                <BriefcaseBusiness className={clsx(
                  'cursor-crosshair hover:scale-125 size-8 hover:text-white',
                  'transition-transform',
                  isAtTop ? 'group-hover/header:text-gray-400' : 'group-hover/header:text-gray-100',
                  'group-hover/header:opacity-100',
                )}
                />
                <span className='opacity-0 pointer-events-none 
               group-hover/icons:text-white group-hover/icons:opacity-100 transition-opacity duration-200 absolute mt-9 '>Projects</span>
              </a>
            </li>
            <li className='flex justify-center items-center group relative'>
              <a href="#contact" className='flex items-center flex-col gap-1 
              group/icons relative transition-all
              duration-200 group-hover/header:scale-115 group-hover/header:opacity-100'>
                <Contact className={clsx(
                  'cursor-crosshair hover:scale-125 size-8 hover:text-white',
                  'transition-transform',
                  isAtTop ? 'group-hover/header:text-gray-400' : 'group-hover/header:text-gray-100',
                  'group-hover/header:opacity-100',
                )}
                />
                <span className='opacity-0 pointer-events-none 
               group-hover/icons:text-white group-hover/icons:opacity-100 transition-opacity duration-200 absolute mt-9 '>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={clsx("transition-all h-25 duration-500 bg-gray-200")}></div>
      
    </div>
  )
}