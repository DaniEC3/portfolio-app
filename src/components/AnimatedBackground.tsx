'use client';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Floating Circles */}
        <circle
          cx="200"
          cy="150"
          r="60"
          fill="url(#gradient1)"
          className="animate-float-slow"
        />
        <circle
          cx="800"
          cy="300"
          r="40"
          fill="url(#gradient2)"
          className="animate-float-medium"
        />
        <circle
          cx="1000"
          cy="100"
          r="80"
          fill="url(#gradient3)"
          className="animate-float-fast"
        />
        <circle
          cx="400"
          cy="500"
          r="35"
          fill="url(#gradient1)"
          className="animate-float-reverse"
        />
        <circle
          cx="700"
          cy="600"
          r="55"
          fill="url(#gradient2)"
          className="animate-float-slow"
        />
        
        {/* Floating Rectangles */}
        <rect
          x="100"
          y="400"
          width="70"
          height="70"
          rx="10"
          fill="url(#gradient3)"
          className="animate-float-medium"
          transform="rotate(45 135 435)"
        />
        <rect
          x="900"
          y="500"
          width="50"
          height="50"
          rx="8"
          fill="url(#gradient1)"
          className="animate-float-fast"
          transform="rotate(30 925 525)"
        />
        
        {/* Floating Triangles */}
        <polygon
          points="300,200 350,100 400,200"
          fill="url(#gradient2)"
          className="animate-float-reverse"
        />
        <polygon
          points="600,450 650,350 700,450"
          fill="url(#gradient3)"
          className="animate-float-slow"
        />
        
        {/* Abstract Paths */}
        <path
          d="M50,300 Q200,200 350,300 T650,300"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          className="animate-float-medium"
        />
        <path
          d="M850,200 Q1000,100 1150,200 T1450,200"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          className="animate-float-reverse"
        />
      </svg>
      
      {/* CSS Custom Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-30px) translateX(-15px) rotate(90deg); }
          50% { transform: translateY(0px) translateX(-30px) rotate(180deg); }
          75% { transform: translateY(30px) translateX(-15px) rotate(270deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-40px) translateX(20px) scale(1.1); }
          50% { transform: translateY(0px) translateX(40px) scale(0.9); }
          75% { transform: translateY(40px) translateX(20px) scale(1.1); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(30px) translateX(-20px); }
          50% { transform: translateY(0px) translateX(-40px); }
          75% { transform: translateY(-30px) translateX(-20px); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};