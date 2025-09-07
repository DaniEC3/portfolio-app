'use client';

import { Eclipse } from 'lucide-react';

import { useState, useEffect } from 'react';



export default function ThemeToggleComponent() {
  const [isDark, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true; // ✅ Default to dark


    document.documentElement.classList.toggle('dark', isDark);
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2  text-sm font-medium  "
    >
      <Eclipse className="text-gray-400 hover:scale-110 transition-transform
              w-6 h-6 cursor-crosshair hover:text-white" />
    </button>
  );
}
