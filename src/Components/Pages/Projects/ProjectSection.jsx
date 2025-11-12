// src/components/ProjectsSection.jsx
import React, { useState } from 'react';
import BackgroundEffects from './ProjectComponents/BackGroundEffects';
import ProjectCard from './ProjectComponents/ProjectCard';
import StatsSection from './ProjectComponents/StatsSection';
import { projectsData } from './ProjectComponents/projectsData';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleFilterChange = (filter) => setActiveFilter(filter);

  const filteredProjects = (() => {
    if (activeFilter === 'all') {
      return projectsData.filter(p => p.status !== 'development');
    } else if (activeFilter === 'ongoing') {
      return projectsData.filter(p => p.status === 'development');
    }
    return projectsData;
  })();

  const allCount = projectsData.filter(p => p.status !== 'development').length;
  const ongoingCount = projectsData.filter(p => p.status === 'development').length;

  return (
    <section id="projects" className="relative min-h-screen py-10 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden w-full">
      <BackgroundEffects />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* ENHANCED HEADER SECTION */}
        <div className="text-center mb-16">
          <div data-aos="fade-down" data-aos-delay="100" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-sm font-medium">Frontend Portfolio</span>
          </div>

          <h1 data-aos="fade-down" data-aos-delay="200" className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
              Featured
            </span>
            <span className="text-white"> Projects</span>
          </h1>

          <p data-aos="fade-down" data-aos-delay="300" className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Immersive collection of <span className="text-purple-400">modern frontend applications</span> showcasing cutting-edge technologies,
            <span className="text-pink-400"> interactive user experiences</span>, and <span className="text-cyan-400">pixel-perfect implementations</span>.
          </p>

          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: '✨', text: 'React Ecosystem', color: 'from-purple-500 to-pink-500' },
              { icon: '🎨', text: 'UI/UX Design', color: 'from-cyan-500 to-blue-500' },
              { icon: '⚡', text: 'Performance', color: 'from-green-500 to-emerald-500' },
              { icon: '📱', text: 'Responsive', color: 'from-orange-500 to-red-500' }
            ].map((badge, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative inline-flex items-center space-x-2 bg-slate-800/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-600/50 group-hover:border-transparent transition-all duration-300">
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors duration-300">
                    {badge.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ENHANCED FILTER BUTTONS */}
        <div data-aos="zoom-in" data-aos-delay="150" className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <EnhancedFilterButton
              active={activeFilter === 'all'}
              onClick={() => handleFilterChange('all')}
              label="All Projects"
              count={allCount}
              gradient="from-purple-500 to-pink-500"
            />
            <EnhancedFilterButton
              active={activeFilter === 'ongoing'}
              onClick={() => handleFilterChange('ongoing')}
              label="In Development"
              count={ongoingCount}
              gradient="from-cyan-500 to-blue-500"
            />
          </div>
        </div>

        {/* PROJECTS GRID - USING YOUR EXISTING PROJECTCARD */}
        <div className="grid gap-8 lg:grid-cols-2 auto-rows-fr">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                className="h-full"
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
                data-aos-once="true"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <EnhancedNoProjectsMessage activeFilter={activeFilter} />
          )}
        </div>

        {/* ENHANCED CALL TO ACTION */}
        <EnhancedCallToActionSection />

        {/* STATS SECTION */}
        <StatsSection />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// ENHANCED FILTER BUTTON COMPONENT
const EnhancedFilterButton = ({ active, onClick, label, count, gradient }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden px-8 py-4 rounded-full font-semibold transition-all duration-500 ${active
        ? `text-white shadow-2xl transform scale-105`
        : 'text-gray-400 hover:text-white bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 border border-slate-600/50'
      }`}
  >
    {/* Animated gradient background for active state */}
    {active && (
      <>
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full`}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </>
    )}

    <span className="relative z-10 flex items-center">
      {label}
      <span className={`ml-2 text-sm ${active ? 'text-white/90' : 'text-gray-500 group-hover:text-gray-300'
        } transition-colors duration-300`}>
        ({count})
      </span>
    </span>

    {/* Ripple effect */}
    <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
  </button>
);

// ENHANCED NO PROJECTS MESSAGE
const EnhancedNoProjectsMessage = ({ activeFilter }) => (
  <div data-aos="flip-left" className="text-center py-12 col-span-2">
    <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700/30 p-12 max-w-md mx-auto overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="text-6xl mb-4 animate-float">{activeFilter === 'ongoing' ? '🚧' : '🌟'}</div>
        <h3 className="text-2xl font-bold text-white mb-3">
          {activeFilter === 'ongoing' ? 'Projects in Progress' : 'Discover More Soon'}
        </h3>
        <p className="text-gray-300 mb-6">
          {activeFilter === 'ongoing'
            ? 'Exciting new frontend projects are currently under development!'
            : 'Amazing frontend projects are being prepared for showcase.'}
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </div>
    </div>
  </div>
);

// ENHANCED CALL TO ACTION SECTION
const EnhancedCallToActionSection = () => (
  <div data-aos="fade-up" className="text-center mt-20">
    <div className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-800/80 rounded-3xl border border-slate-700/30 p-8 md:p-12 max-w-6xl mx-auto overflow-hidden backdrop-blur-xl">
      {/* Advanced Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left space-y-6" data-aos="fade-right">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Available for frontend projects</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's Create
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient block">
              Digital Magic
            </span>
          </h3>

          <p className="text-xl text-gray-300 leading-relaxed">
            Transforming your vision into <span className="text-purple-400">stunning web experiences</span> with
            modern frontend technologies and <span className="text-pink-400">exceptional user interfaces</span>.
          </p>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-4 ">
            {[
              { number: '50+', label: 'Components', gradient: 'from-purple-400 to-pink-400' },
              { number: '5+', label: 'Projects', gradient: 'from-cyan-400 to-blue-400' },
              { number: '95%', label: 'Performance', gradient: 'from-green-400 to-emerald-400' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group text-center py-4 lg:p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-transparent transition-all duration-500 backdrop-blur-sm "
              >
                <div className={`text-2xl font-bold text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-xs lg:text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6" data-aos="fade-left">
          {/* Enhanced Feature Cards */}
          <div className="grid gap-4">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized React apps with modern performance techniques', gradient: 'from-purple-500 to-pink-500' },
              { icon: '🎨', title: 'Pixel Perfect', desc: 'Responsive designs with smooth animations & interactions', gradient: 'from-cyan-500 to-blue-500' },
              { icon: '🚀', title: 'Modern Stack', desc: 'React, Next.js, TypeScript & cutting-edge technologies', gradient: 'from-green-500 to-emerald-500' }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative flex items-start gap-4 p-4 bg-slate-800/40 rounded-xl border border-slate-700/30 group-hover:border-transparent transition-all duration-500 backdrop-blur-sm">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-white font-bold text-lg">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative flex-1 px-8 py-4 overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                Start Project
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>

            <button className="group relative flex-1 px-8 py-4 border-2 border-slate-600 text-gray-300 rounded-xl transition-all duration-500 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-0.5">
                <div className="absolute inset-0 bg-slate-900 rounded-xl m-0.5"></div>
              </div>
              <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
                View Portfolio
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsSection;