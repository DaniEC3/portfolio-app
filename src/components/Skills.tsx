import ScrollAnimation from '@/animations/ScrollAnimation'
import React from 'react'

export default function SkillsComponent() {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-red-500' },
    { name: 'CSS', level: 90, color: 'bg-pink-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 80, color: 'bg-blue-500' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
    { name: 'Tailwind', level: 75, color: 'bg-teal-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' },
    { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
    { name: 'Git', level: 70, color: 'bg-gray-400' },
  ]
  return (
    <section className='h-screen bg-gray-200 p-8 text-gray-900 flex flex-col items-center
    justify-center w-full'>
      <div className='p-4 text-2xl font-semibold'>My Skills!!</div>
      <div className='grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 
      gap-2 w-full max-w-4xl'>
        {skills.map((skill, index) => (
          <ScrollAnimation key={skill.name} delay={0.5*index}>
            <div  className='mb-4 flex justify-center'>

              <div className=' w-full m-5 bg-gray-300 rounded-full h-12 dark:bg-gray-700 group flex items-center
             relative overflow-hidden border-2 border-gray-600 hover:cursor-pointer'>
                <div className='absolute font-bold flex w-35 justify-center ml-5 
              transition-transform duration-300 group-hover:-translate-x-10'>{skill.name}</div>
                <div className='absolute justify-end hidden group-hover:block transition-transform duration-300
              group-hover:translate-x-35 font-bold'>{skill.level}%</div>
                <div
                  className={`${skill.color} h-full rounded-l-full w-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
                <span className="bubble-animation absolute inset-0 -z-10"></span>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
