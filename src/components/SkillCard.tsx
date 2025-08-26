'use client';
import { useEffect, useMemo, useState } from 'react';
import { type LucideIcon } from 'lucide-react';
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

type Skill = { name: string; color: string; level: number };
type Tab = { icon: LucideIcon; label: string };
interface SkillCardProps {
  frontend: Skill[];
  backend: Skill[];
  soft: Skill[];
  selectedTab: Tab;
  onSkillClick?: (skillName: string) => void;
  activeSkills?: string[] | null;
}



export default function SkillCard({ frontend, backend, soft, selectedTab, onSkillClick, activeSkills }: SkillCardProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // for slide direction
  const [PAGE_SIZE, setPageSize] = useState(8); // items per page
  console.log('Active Skills',activeSkills)
  const list =
    selectedTab.label === 'Front-End' ? frontend :
      selectedTab.label === 'Back-End' ? backend :
        soft;

  const totalPages = Math.max(1, Math.ceil((list?.length ?? 0) / PAGE_SIZE));

  // Slice the skills for the current page
  const pageItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return list?.slice(start, start + PAGE_SIZE) ?? [];
  }, [list, page, PAGE_SIZE]);

  // When the tab changes, reset pagination and active fill
  useEffect(() => {
    setPage(0);
    // setActiveSkill(null);
  }, [selectedTab.label]);

  // Handle page navigation
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleScreenChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setPageSize(4);
      } else {
        setPageSize(8);
      }
    };

    // Set initial value by checking mediaQuery.matches directly
    if (mediaQuery.matches) {
      setPageSize(4);
    } else {
      setPageSize(8);
    }

    mediaQuery.addEventListener('change', handleScreenChange);

    return () => mediaQuery.removeEventListener('change', handleScreenChange);
  }, []);


  const goNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      // setActiveSkill(null);
      setPage(p => p + 1);
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setDirection(-1);
      // setActiveSkill(null);
      setPage(p => p - 1);
    }
  };

  // Keyboard arrows for convenience
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPages]);

  return (
    <div className="flex w-full h-full flex-col items-center gap-4">
      {/* Window */}
      <div className="w-full h-full bg-gray-600/50 shadow-xl p-4 flex flex-col">
        {/* 1) This grows to fill space above the controls */}
        <div className="relative overflow-hidden w-full flex-1">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`${selectedTab.label}-page-${page}`}
              custom={direction}
              // The magic: take the page out of normal flow
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              initial={{ x: direction === 1 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Review the w-75% for responsiveness */}
              <div className="w-[75%] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-3">
                {pageItems.map((S) => {
                  // const isActive = activeSkills === S.name;
                  return (
                    <button
                      key={S.name}
                      onClick={() => onSkillClick ? onSkillClick(S.name) : null}
                      className="relative w-full group md:h-12 h-16 border rounded-lg overflow-hidden bg-gray-200 
                      hover:cursor-pointer text-left"
                    // aria-pressed={isActive}
                    >
                      <motion.div
                        className="h-full absolute inset-y-0 group-hover:bg-amber-700 left-0 z-0
                        pointer-events-none"
                        style={{ backgroundColor: S.color }}
                        initial={{ width: 0 }}
                        // animate={{ width: isActive ? `${S.level}%` : 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                      <span className="relative z-10 text-gray-800 font-bold px-3">
                        {/* {S.name} {isActive ? `– ${S.level}%` : ''} */}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* 2) Sibling of the grid wrapper, pushed to bottom */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 p-4 mt-auto">
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="px-3 py-1 rounded-md border disabled:opacity-40 disabled:cursor-not-allowed hover:cursor-pointer"
              aria-label="Previous page"
            >
              Prev
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > page ? 1 : -1);
                    // setActiveSkill(null);
                    setPage(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full ${i === page ? 'bg-gray-800' : 'bg-gray-500/40'}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              className="px-3 py-1 rounded-md border disabled:opacity-40 disabled:cursor-not-allowed hover:cursor-pointer"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}
      </div>



    </div>
  );
}
