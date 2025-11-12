import React, { useState } from 'react';

const ProjectCard = ({ project, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={delay} 
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Border Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
      
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-600/30 overflow-hidden 
                      transition-all duration-500 group-hover:shadow-xl group-hover:shadow-cyan-500/10 group-hover:border-cyan-400/30 flex flex-col h-full">

        {/* IMAGE WITH SUBTLE EFFECTS */}
        <div className="relative overflow-hidden h-64 md:h-72">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
          />

          {/* Minimal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>

          {/* STATUS */}
          <div className="absolute top-4 left-4">
            <MinimalProjectStatus status={project.status} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-7 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
              <MinimalCategoryTag category={project.category} />
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300 mb-4">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2.5 py-1 bg-slate-700/40 text-cyan-300 rounded-md text-xs font-medium border border-slate-600/50 
                              group-hover:border-cyan-400/50 group-hover:bg-slate-600/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2.5 py-1 bg-slate-700/30 text-gray-400 rounded-md text-xs group-hover:text-gray-300 transition-colors duration-300">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {project.features.slice(0, 4).map((feature, index) => (
                <MinimalFeaturePill key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS WITH FLASHING EFFECT */}
          <div className="mt-4 flex gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="group relative flex-1 text-center px-4 py-2 overflow-hidden rounded-lg transition-all duration-300 font-medium">
                
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-lg animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
                
                {/* Main Button Background */}
                <div className="absolute inset-0.5 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors duration-300"></div>
                
                {/* Animated Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
                
                <span className="relative z-10 text-cyan-300 group-hover:text-white font-medium flex items-center justify-center gap-2 transition-colors duration-300">
                  🌐 Live Demo
                </span>
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-slate-600/30 text-gray-300 rounded-lg border border-slate-500/30 
                          hover:bg-slate-500/40 hover:border-slate-400/60 hover:text-white transition-all duration-300 font-medium">
                💻 GitHub
              </a>
            )}
          </div>
        </div>

        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// MINIMAL SUB-COMPONENTS
const MinimalProjectStatus = ({ status }) => {
  const statusConfig = {
    live: { color: 'bg-green-500', text: 'Live', icon: '🟢' },
    development: { color: 'bg-blue-500', text: 'In Progress', icon: '🔄' },
    planning: { color: 'bg-yellow-500', text: 'Planning', icon: '📋' }
  };
  const config = statusConfig[status] || statusConfig.live;
  
  return (
    <div className="backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-500/30 group-hover:border-cyan-400/30 transition-colors duration-300">
      <div className="flex items-center space-x-2">
        <span className="text-xs">{config.icon}</span>
        <span className="text-white text-xs font-medium">{config.text}</span>
      </div>
    </div>
  );
};

const MinimalCategoryTag = ({ category }) => (
  <span className="px-2.5 py-1 bg-slate-700/40 text-cyan-300 rounded-full text-xs font-medium border border-slate-600/50 
                   group-hover:border-cyan-400/50 group-hover:bg-slate-600/50 transition-all duration-300">
    {category}
  </span>
);

const MinimalFeaturePill = ({ feature, index }) => (
  <div className="flex items-center space-x-2 bg-slate-700/30 rounded-lg px-3 py-2 border border-slate-600/30 
                 group-hover:border-cyan-400/30 transition-all duration-300"
       style={{transitionDelay: `${index * 50}ms`}}>
    <span className="text-cyan-400 text-xs">✓</span>
    <span className="text-gray-300 text-xs truncate group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
  </div>
);

export default ProjectCard;