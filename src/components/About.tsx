import React from 'react'

export default function AboutComponent() {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-red-500' },
    { name: 'CSS', level: 90, color: 'bg-pink-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 80, color: 'bg-blue-500' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
    { name: 'Tailwind CSS', level: 75, color: 'bg-teal-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' },
    { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
    { name: 'Git', level: 70, color: 'bg-gray-400' },
  ]
  return (
    <section className='h-96 bg-gray-200 p-8 text-gray-900 flex items-center justify-center w-full'>
      <div className='flex flex-col flex-wrap  justify-center max-w-2xl'>
        {skills.map((skill) => (
          <div key={skill.name} className='mb-4'>
            
            <div className='w-35 bg-gray-300 rounded-full h-9 dark:bg-gray-700'>
              <div className='absolute font-bold flex w-35 justify-center'>{skill.name}</div>
              <div
                className={`${skill.color} h-full rounded-l-full`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
