'use client';

import { ComponentType } from 'react';
import clsx from 'clsx';

interface GlitchIconWrapperProps {
  icon: ComponentType<{ className?: string }>;
  className?: string;
}

export default function GlitchIconWrapper({
  icon: Icon,
  className = '',
}: GlitchIconWrapperProps) {
  return (
    <div className="relative flex justify-center items-center group/icon">
      {/* Glitch Red */}
      <Icon
        className={clsx(
          'absolute size-8 text-red-500 opacity-0 translate-x-0.5',
          'group-hover/icon:opacity-80 group-hover/icon:animate-[rgb-shift_1s_infinite_ease-in-out]',
          'hover:-translate-x-0.5 group-hover/header:scale-115 pointer-events-none'
        )}
      />
      {/* Glitch Blue */}
      <Icon
        className={clsx(
          'absolute size-8 text-blue-500 opacity-0 translate-x-0.5',
          'group-hover/icon:opacity-80 group-hover/icon:animate-[rgb-shift_1.2s_infinite_ease-in-out]',
          'hover:-translate-x-0.5 group-hover/header:scale-115 pointer-events-none'
        )}
      />
      {/* Main icon */}
      <Icon className={clsx('size-8 transition-transform', className)} />
    </div>
  );
}
