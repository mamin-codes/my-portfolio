import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const frontendTechs = [
    { name: "React.js", icon: "⚛️", category: "framework" },
    { name: "Next.js", icon: "▲", category: "framework" },
    { name: "JavaScript", icon: "🟨", category: "language" },
    { name: "TypeScript", icon: "🔷", category: "language" },
    { name: "HTML5", icon: "🌐", category: "markup" },
    { name: "CSS3", icon: "🎨", category: "styling" },
    { name: "TailwindCSS", icon: "💨", category: "styling" },
    { name: "Framer Motion", icon: "✨", category: "animation" },
    { name: "Redux", icon: "🗃️", category: "state" }
  ];

  const techDelays = frontendTechs.map((_, i) => i * 80);

  return (
    <section
      
      className="relative pt-20 pb-20 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden w-full"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-500/5 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20" data-aos="fade-down">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-400 text-sm font-medium">Frontend Developer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate <span className="text-cyan-400 font-semibold">Frontend Developer</span> crafting exceptional digital experiences with modern technologies.  
            Specialized in <span className="text-blue-400 font-semibold">React, Next.js, and responsive design</span> to create fast, accessible, and user-friendly web applications.
          </p>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            {/* Who I Am Card */}
            <div 
              data-aos="fade-right" 
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 transition-all duration-500 group-hover:border-transparent">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                    👨‍💻
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Who I Am</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a dedicated <span className="text-cyan-400 font-semibold">Frontend Developer</span> passionate about creating 
                    intuitive and engaging user interfaces that deliver exceptional digital experiences.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    With expertise in modern JavaScript frameworks and a keen eye for design, I transform 
                    complex requirements into clean, maintainable, and performant code.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I believe in writing code that's not just functional, but also scalable, accessible, 
                    and delightful to interact with.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div 
              data-aos="fade-right" 
              data-aos-delay="200"
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 transition-all duration-500 group-hover:border-transparent">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Tech Stack</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {frontendTechs.map((tech, i) => (
                    <div
                      key={i}
                      data-aos="zoom-in"
                      data-aos-delay={techDelays[i]}
                      className="group/tech bg-slate-700/30 rounded-lg p-3 text-center border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <div className="text-lg mb-1">{tech.icon}</div>
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                      <div className="text-xs text-cyan-400 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300">
                        {tech.category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile & Stats */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div 
              data-aos="fade-left" 
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 transition-all duration-500 group-hover:border-transparent text-center">
                {/* Profile Avatar */}
                <div className="relative mx-auto mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl mx-auto">
                    <span className="text-5xl">💻</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Frontend Developer</h3>
                <p className="text-gray-400 mb-6">Creating Modern Web Experiences</p>
                
                <div className="flex justify-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Next.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="group relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 text-center border border-slate-700/50 transition-all duration-500 group-hover:border-transparent">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    1.5+
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
                </div>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-delay="300"
                className="group relative overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 text-center border border-slate-700/50 transition-all duration-500 group-hover:border-transparent">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    12+
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Additional Skills */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="group relative overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50 transition-all duration-500 group-hover:border-transparent">
                <h4 className="text-lg font-bold text-white mb-4 text-center">What I Deliver</h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="text-cyan-400 text-sm">⚡ Fast Performance</div>
                  <div className="text-blue-400 text-sm">📱 Responsive Design</div>
                  <div className="text-purple-400 text-sm">🎨 Modern UI/UX</div>
                  <div className="text-pink-400 text-sm">🔧 Clean Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div 
          data-aos="fade-up" 
          className="text-center"
        >
          <div className="group relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 transition-all duration-500 group-hover:border-transparent">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-300 text-lg mb-6">Let's collaborate and create modern, responsive web applications together.</p>
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-10 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;