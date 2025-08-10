'use client';
import { BriefcaseBusiness, Contact, House } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

import { useEffect, useState } from 'react';

import ThemeToggleComponent from './ThemeToggle';
import GlitchIconWrapper from './Styles/GlitchIconWrapper';


export default function HeaderComponent() {
  const [isAtTop, setIsAtTop] = useState(true);
  const navItems = [
    {
      label: 'Home',
      href: '#home',
      icon: House,
    },
    {
      label: 'Projects',
      href: '#projects',
      icon: BriefcaseBusiness,
    },
    {
      label: 'Contact',
      href: '#contact',
      icon: Contact,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atTop = scrollY < 10;
      setIsAtTop(atTop);
      // console.log('Scroll position:', scrollY, 'Is at top:', atTop); // Debugging line
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={clsx(
        'text-gray-800 bg-gradient-to-b flex flex-col items-center gap-4',
        'w-full z-50 transition-all duration-500 fixed top-0 left-0',
        'from-gray-800 from-16% via-gray-700  to-gray-200 group/header',
        'mask-b-from-80% mask-b-to-100%',
        isAtTop ? 'h-80-sm h-60 opacity-100 py-4 h-50-s hover:h-65' : 'opacity-60 py-2 h-30 backdrop-blur-md hover:opacity-90 hover:h-35',


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
              isAtTop ? 'h-25 opacity-100 cursor-crosshair' : 'h-50 opacity-0',
              'hover:animate-glitch'
            )}
            alt='Logo'
          />
        </div>

        <nav className='flex justify-center'>
          <ul className={clsx(
            "flex gap-10 text-gray-200 transition-all duration-300",
            isAtTop ? 'p-4 -mt-5' : 'pt-1 pb-1 -mt-30'
          )}>
            {navItems.map(({ label, href, icon: Icon }) => (
              <li key={label} className='flex justify-center items-center group/icon relative'>
                <a href={href} className='flex items-center flex-col  
              group/icons relative transition-all 
              duration-200  group-hover/header:opacity-100'>
                  <GlitchIconWrapper icon={Icon} className={clsx("cursor-crosshair z-3 group-hover/header:scale-125",

                    isAtTop ? 'group-hover/header:text-gray-200' : 'group-hover/header:text-gray-100',
                    'group-hover/header:opacity-100',
                  )}
                  />
                  <span className='opacity-0 pointer-events-none 
               group-hover/icons:text-white group-hover/icons:opacity-100 transition-opacity duration-200 absolute mt-10 '>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={clsx("transition-all h-25 duration-500 bg-gray-200")}></div>

    </div>
  )
}