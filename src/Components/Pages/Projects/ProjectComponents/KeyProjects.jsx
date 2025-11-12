import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KeyProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const keyProjects = [
    {
      id: 1,
      emoji: '⚡',
      title: 'React Dashboard UI',
      description: 'Modern admin dashboard with real-time analytics, built with React, Chart.js, and Tailwind CSS',
      gradient: 'from-purple-500/20 via-pink-500/10 to-blue-500/20',
      borderGradient: 'from-purple-500 to-pink-500',
      glow: 'hover:shadow-purple-500/30'
    },
    {
      id: 2,
      emoji: '🎨',
      title: 'E-commerce Frontend',
      description: 'Responsive online store with product filtering, cart functionality, and smooth animations',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-emerald-500/20',
      borderGradient: 'from-cyan-500 to-blue-500',
      glow: 'hover:shadow-cyan-500/30'
    },
    {
      id: 3,
      emoji: '📱',
      title: 'Mobile-First Web App',
      description: 'Progressive Web App with offline functionality and native-like user experience',
      gradient: 'from-emerald-500/20 via-green-500/10 to-teal-500/20',
      borderGradient: 'from-emerald-500 to-green-500',
      glow: 'hover:shadow-emerald-500/30'
    },
    {
      id: 4,
      emoji: '🚀',
      title: 'Portfolio Website',
      description: 'Interactive portfolio with 3D animations, smooth scrolling, and dark/light theme',
      gradient: 'from-orange-500/20 via-red-500/10 to-amber-500/20',
      borderGradient: 'from-orange-500 to-red-500',
      glow: 'hover:shadow-orange-500/30'
    },
    {
      id: 5,
      emoji: '🎯',
      title: 'Task Management App',
      description: 'Drag & drop task board with real-time updates and local storage persistence',
      gradient: 'from-indigo-500/20 via-purple-500/10 to-violet-500/20',
      borderGradient: 'from-indigo-500 to-purple-500',
      glow: 'hover:shadow-indigo-500/30'
    },
    {
      id: 6,
      emoji: '✨',
      title: 'UI Component Library',
      description: 'Custom component library with Storybook documentation and theme system',
      gradient: 'from-rose-500/20 via-pink-500/10 to-fuchsia-500/20',
      borderGradient: 'from-rose-500 to-pink-500',
      glow: 'hover:shadow-rose-500/30'
    },
  ];

  return (
    <div className="mt-10 lg:mt-20 py-10 lg:py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Enhanced Header */}
      <div data-aos="fade-down" className="text-center mb-16">
        <div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3 mb-6">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          <span className="text-gray-300 text-sm font-medium">Featured Work</span>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-white">Key </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Crafting digital experiences with modern technologies and innovative solutions
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {keyProjects.map((project, index) => (
          <div 
            key={project.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="group relative"
          >
            {/* Animated Border */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.borderGradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
            
            {/* Main Card */}
            <div className={`relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700/30 p-8
                       transition-all duration-500 group-hover:scale-105 group-hover:${project.glow} group-hover:shadow-2xl h-full
                       flex flex-col justify-between`}>
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Floating Particles Effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
                  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>

              <div className="relative z-10">
                {/* Animated Emoji Container */}
                <div className="relative inline-block mb-6">
                  <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {project.emoji}
                  </div>
                  <div className="absolute inset-0 text-5xl opacity-0 group-hover:opacity-100 blur-md group-hover:blur-0 transition-all duration-500">
                    {project.emoji}
                  </div>
                </div>
                
                {/* Project Title with Gradient Shine */}
                <h4 className="text-xl font-bold text-white mb-4 relative inline-block">
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                    {project.title}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 group-hover:w-full transition-all duration-500"></span>
                </h4>
                
                {/* Project Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Keep only the border without text */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-700/50 group-hover:border-white/20 transition-colors duration-300">
                {/* Empty div to maintain spacing and border */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-tilt {
          animation: tilt 10s linear infinite;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
      `}</style>
    </div>
  );
};

export default KeyProjects;