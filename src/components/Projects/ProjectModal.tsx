

'use client';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProjectInfo {
  name?: string;
  description?: string;
  html_url?: string;
  homepage?: string;
  imageUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  isClosed: () => void;
  project?: ProjectInfo;
}

export default function ProjectModal({ isOpen, isClosed, project }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isClosed();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, isClosed]);

  if (!isOpen) return null;
  if (!project) return "No project data available.";

  return (
    <div
      className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4'
      onClick={isClosed}
    >
      <div
        className='relative w-full max-w-3xl border-4 border-gray-800 rounded-t-xl bg-gray-100 overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - matching Skills section style */}
        <div className="flex h-16 bg-gray-200 rounded-t-xl w-full items-center justify-between px-6">
          <h2 className='text-xl font-bold text-gray-800'>{project?.name || 'Project Details'}</h2>
          <button
            className='text-gray-600 hover:text-gray-800 text-2xl transition-colors font-bold'
            onClick={isClosed}
            aria-label='Close modal'
          >
            ✕
          </button>
        </div>

        {/* Content area - matching Skills card style */}
        <div className='bg-white p-6 space-y-4 max-h-[70vh] overflow-y-auto'>
          {project?.imageUrl && (
            <div className='w-full rounded shadow overflow-hidden mb-4'>
              <Image
                src={project.imageUrl}
                alt={project.name || 'Project Image'}
                width={800}
                height={400}
                className='w-full h-auto object-cover'
              />
            </div>
          )}

          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Description</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              {project?.description || 'No description available.'}
            </p>
          </div>

          <div className='flex flex-wrap gap-3 pt-4'>
            {project?.html_url && (
              <a
                href={project.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded transition-colors font-medium'
              >
                🔗 View on GitHub
              </a>
            )}
            {project?.homepage && (
              <a
                href={project.homepage}
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded transition-colors font-medium'
              >
                🌐 Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
