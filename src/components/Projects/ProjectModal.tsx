

'use client';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProjectInfo {
  name?: string;
  description?: string;
  html_url?: string;
  homepage?: string;
  imageUrl?: string;
  hueA?: number;
  hueB?: number;
  goals?: string;
  role?: string;
  challenge?: string;
  primaryStakeholders: string;
  process?: string;
  topics?: string[];
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
  console.log('Project Modal Data:', project);

  return (
    <div
      className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4'
      onClick={isClosed}
    >
      <div
        className='relative w-full max-w-3xl border-4 rounded-xl overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - matching Skills section style */}
        <div 
          className="flex h-16 rounded-t-xl w-full items-center justify-between px-6"
          style={{
            background: project?.hueA && project?.hueB 
              ? `linear-gradient(115deg, hsl(${project.hueA}, 50%, 50%) 10%, hsl(${project.hueB}, 10%, 70%))`
              : 'linear-gradient(115deg, #4B5563 10%, #9CA3AF)'
          }}
        >
          <h2 className='text-xl font-bold text-white drop-shadow-lg'>{project?.name || 'Project Details'}</h2>
          <button
            className='text-white hover:text-gray-200 text-2xl transition-colors font-bold'
            onClick={isClosed}
            aria-label='Close modal'
          >
            ✕
          </button>
        </div>

        {/* Content area - matching Skills card style */}
        <div className='bg-white p-8 space-y-6 max-h-[70vh] overflow-y-auto'>
          {project?.imageUrl && (
            <div className='w-full rounded-lg shadow-md overflow-hidden mb-6'>
              <Image
                src={project.imageUrl}
                alt={project.name || 'Project Image'}
                width={800}
                height={400}
                className='w-full h-auto object-cover'
              />
            </div>
          )}

          {/* Description */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-sm font-bold text-gray-800 uppercase tracking-wide mb-2'>Description</h3>
            <p className='text-gray-700 text-sm leading-relaxed'>
              {project?.description || 'A comprehensive project description will go here.'}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Goal */}
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-sm font-bold text-gray-800 uppercase tracking-wide mb-2'>Goal</h3>
              <p className='text-gray-700 text-sm'>
                {project?.goals || 'Project goal and objectives will be displayed here.'}
              </p>
            </div>

            {/* Role */}
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-sm font-bold text-gray-800 uppercase tracking-wide mb-2'>Role</h3>
              <p className='text-gray-700 text-sm'>
                {project?.role || 'Full-Stack Developer'}
              </p>
            </div>

            {/* Challenge */}
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-sm font-bold text-gray-800 uppercase tracking-wide mb-2'>Challenge</h3>
              <p className='text-gray-700 text-sm'>
                {project?.challenge || 'Key challenges and constraints faced during development.'}
              </p>
            </div>

            {/* Primary Stakeholder */}
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-sm font-bold text-gray-800 uppercase tracking-wide mb-2'>Primary Stakeholder</h3>
              <p className='text-gray-700 text-sm'>
                {project?.primaryStakeholders || 'Stakeholder information will go here.'}
              </p>
            </div>
          </div>

          {/* Process */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-sm font-bold text-gray-800 uppercase tracking-wide mb-2'>Process</h3>
            <p className='text-gray-700 text-sm leading-relaxed'>
              {project?.process || 'Development process, methodology, and key milestones will be described here.'}
            </p>
          </div>

          {/* Tools Used */}
          <div className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-sm font-bold text-gray-800 uppercase tracking-wide mb-3'>Tools Used</h3>
            <div className='flex flex-wrap gap-2'>
              {project?.topics && project.topics.length > 0 ? (
                project.topics.map((tool, index) => (
                  <span key={index} className='px-3 py-1 bg-gray-700 text-white text-xs rounded-full'>{tool}</span>
                ))) : (
                <span className='text-gray-500 text-sm'>No tools information available.</span>
              )}

            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-wrap gap-3 pt-2'>
            {project?.homepage && (
              <a
                href={project.homepage}
                target='_blank'
                rel='noopener noreferrer'
                className='group px-5 py-2.5 text-white rounded-lg 
                font-medium transition-all duration-300 cursor-pointer
                hover:scale-105 hover:shadow-lg
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-white/10
                before:translate-x-[-100%] before:transition-transform before:duration-500
                hover:before:translate-x-[100%]'
                style={{
                  background: project?.hueA && project?.hueB
                    ? `hsl(${project.hueA}, 60%, 50%)`
                    : '#1F2937'
                }}
              >
                🌐 Live Demo
              </a>
            )}
            {project?.html_url && (
              <a
                href={project.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='group px-5 py-2.5 text-white rounded-lg 
                font-medium transition-all duration-300 cursor-pointer
                hover:scale-105 hover:shadow-lg
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-white/10
                before:translate-x-[-100%] before:transition-transform before:duration-500
                hover:before:translate-x-[100%]'
                style={{
                  background: project?.hueA && project?.hueB
                    ? `hsl(${project.hueA}, 60%, 50%)`
                    : '#374151'
                }}
              >
                🔗 View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
