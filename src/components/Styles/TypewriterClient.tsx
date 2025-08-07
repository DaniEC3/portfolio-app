'use client';

import Typewriter from 'typewriter-effect';

interface TypewriterClientProps {
  word: string;
}


export default function TypewriterClient({ word }: TypewriterClientProps) {
  return (
    <span className='inline-block'>
      <Typewriter
        options={{
          strings: word,
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 75,
        }}
      />
    </span>
  )
}
