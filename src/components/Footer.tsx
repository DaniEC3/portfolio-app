'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import clsx from 'clsx';

export default function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 50;

      if (scrollPosition >= threshold) {
        setIsAtBottom(true);
      } else if (scrollPosition < document.body.offsetHeight - 150) {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      className={clsx(
        'fixed bottom-0 w-full transition-all duration-300 overflow-hidden bg-gradient-to-b  text-white shadow-lg',
        isAtBottom ? 'h-56 from-gray-200 from-5% via-gray-700 to-gray-800' : 'h-32 from-gray-200 via-gray-600 to-gray-800'
      )}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mt-20 text-lg font-semibold">Contact Me!</div>

        <nav
          className={clsx(
            'flex flex-col items-center mt-2 transition-opacity duration-500',
            isAtBottom ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <p className="text-sm text-gray-300">daniel@email.com</p>
          <ul className="flex gap-4 mt-2">
            <li>
              <a
                className="hover:text-white transition-transform hover:scale-110"
                href="https://github.com/DaniEC3"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                className="hover:text-white transition-transform hover:scale-110"
                href="https://www.linkedin.com/in/daniel-estrada-a98309300/"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
