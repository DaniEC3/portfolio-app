import React from 'react'

export default function AboutComponent() {
  return (
    <section className='h-96 bg-gray-200 p-8 text-gray-900 flex items-center justify-center'>
      <div>
        <div className='grid grid-cols-3 gap-4 mt-4 bg-black p-4'>
          <div className='bg-white p-4 rounded shadow'>Skills</div>
          <div className='bg-white p-4 rounded shadow'>JavaScript</div>

          <div className='bg-white p-4 rounded shadow'>React</div>
          <div className='bg-white p-4 rounded shadow'>Next.js</div>
          <div className='bg-white p-4 rounded shadow'>Tailwind CSS</div>
        </div>
      </div>
    </section>
  )
}
