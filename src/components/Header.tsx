'use client';
import { BriefcaseBusiness, Contact, House } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

import { useEffect, useState } from 'react';

import ThemeToggleComponent from './ThemeToggle';

export default function HeaderComponent() {
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atTop = scrollY < 10;
      setIsAtTop(atTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className={clsx(
        ' text-gray-800 bg-gradient-to-b from-gray-200 to-gray-600 flex flex-col items-center gap-4',
        ' w-full z-50 transition-all duration-300',
        isAtTop ? 'h-60 opacity-80 py-4' : 'opacity-80 py-2 h-20 fixed top-0 left-0 right-0',

      )}>
        <div className='w-full justify-end'>
          <ThemeToggleComponent />
        </div>
        {isAtTop && (
          <div className='flex justify-center overflow-hidden rounded-lg'>
            <Image
              src={'/logo/LogoName-W-nb.png'}
              width={200}
              height={200}
              className="object-cover scale-125 max-h-20 hover:animate-shake hover:scale-150 transition-all duration-300"
              alt='Logo'
            />
          </div>
        )}
        <nav className='flex justify-center'>
          <ul className={clsx(
            "flex gap-5 text-gray-400 transition-all duration-300 ",
            isAtTop ? 'p-4' : 'pt-1 pb-1 -mt-12'
          )}>
            <li className='flex justify-center items-center'>
              <a href="#about" className='flex items-center flex-col gap-1 group relative'>
                <House className='cursor-crosshair hover:scale-125
             hover:text-white transition-transform'/>
                <span className='opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 absolute mt-7 '>Home</span>
              </a></li >
            <li className='flex justify-center items-center group relative'>
              <a href="#projects" className='flex items-center flex-col gap-1 group relative'>
                <BriefcaseBusiness className='cursor-crosshair hover:scale-125
             hover:text-white transition-transform' />
                <span className='opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 absolute mt-7 '>Projects</span>
              </a>
            </li>
            <li className='flex justify-center items-center group relative'>
              <a href="#contact" className='flex items-center flex-col gap-1 group relative'>
                <Contact className='cursor-crosshair hover:scale-125
             hover:text-white transition-transform' />
                <span className='opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 absolute mt-7 '>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
  )
}