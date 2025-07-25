import { BriefcaseBusiness, Contact, Eclipse, House } from 'lucide-react';
import Image from 'next/image';

export default function HeaderComponent() {
  return (
    <div className=" p-4 bg-gray-800 h-35 text-gray-300">
      <div className='w-full justify-end'>
        <Eclipse className='text-gray-300 cursor-crosshair hover:scale-125
             hover:text-white hover:box-shadow-white'/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/logo/LogoName-W-nb.png'} width={100} height={100} alt='Logo'
        className='object-center'
        ></Image>
      </div>

      <nav className='flex justify-center h-full'>
        <ul className="flex align-middle gap-5">
          <li className='flex justify-center items-center'>
            <a href="#about">
              <House className='cursor-crosshair hover:scale-125
             hover:text-white hover:box-shadow-white'/>
            </a></li >
          <li className='flex justify-center items-center'><a href="#projects">
            <BriefcaseBusiness className='cursor-crosshair hover:scale-125
             hover:text-white hover:box-shadow-white' />
          </a></li>
          <li className='flex justify-center items-center'><a href="#contact">
            <Contact className='cursor-crosshair hover:scale-125
             hover:text-white hover:box-shadow-white'/>
          </a></li>
        </ul>
      </nav>
    </div>
  )
}