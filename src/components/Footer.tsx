'use client'

import { useEffect, useState } from "react";

export default function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 50; // 🛑 Less sensitive

      if (scrollPosition >= threshold) {
        setIsAtBottom(true);
      } else if (scrollPosition < document.body.offsetHeight - 150) {
        // Only shrink if user scrolls far from bottom
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer>
      {isAtBottom ? (
        <div className="h-12"> Full Footer with links</div>
      ) : (
        <div className="fixed bottom-0 w-full h-14 bg-black"> Contact Me ! </div>
      )}
    </footer>
  );
}