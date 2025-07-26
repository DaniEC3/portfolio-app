import { BriefcaseBusiness, Contact, House } from 'lucide-react';
import Image from 'next/image';

import ThemeToggleComponent from './ThemeToggle';

export default function HeaderComponent() {
  return (
    <div className=" p-4 text-gray-800 bg-primary 
      mask-b-from-85%  
       " >
      <div className='w-full justify-end'>
        <ThemeToggleComponent />
      </div>
      <div className='flex justify-center overflow-hidden rounded-lg'>
        <Image src={'/logo/LogoName-W-nb.png'}
          width={200}
          height={200}
          className="object-cover scale-125 max-h-20 hover:animate-shake
           hover:scale-150 transition-all duration-300
         " alt='Logo'

        ></Image>
      </div>

      <nav className='flex justify-center'>
        <ul className="flex gap-5 p-4 text-gray-400">
          <li className='flex justify-center items-center'>
            <a href="#about">
              <House className='cursor-crosshair hover:scale-125
             hover:text-white transition-transform'/>
            </a></li >
          <li className='flex justify-center items-center'><a href="#projects">
            <BriefcaseBusiness className='cursor-crosshair hover:scale-125
             hover:text-white transition-transform' />
          </a></li>
          <li className='flex justify-center items-center'><a href="#contact">
            <Contact className='cursor-crosshair hover:scale-125
             hover:text-white transition-transform' />
          </a></li>
        </ul>
      </nav>
    </div>
  )
}