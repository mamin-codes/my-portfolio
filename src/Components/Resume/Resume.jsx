import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900/50 via-purple-900/10 to-slate-900/50 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-6 py-3 rounded-full border border-purple-500/20 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span className="text-purple-400 text-sm font-medium">Professional Resume</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-violet-600 animate-gradient">
            Download My Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Get my comprehensive resume showcasing frontend development expertise, 
            modern technologies, and professional experience
          </p>
        </div>

        {/* Enhanced Buttons Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto"
        >
          {/* Download CV - Enhanced */}
          <a
            href="https://drive.google.com/file/d/1Kiw6hrazXDgMkLz2CLeZiDMhNx13KHHJ/view"
            download="https://drive.google.com/file/d/1Kiw6hrazXDgMkLz2CLeZiDMhNx13KHHJ/view"
            target="_blank"
            className="group relative overflow-hidden w-full sm:w-auto"
          >
            {/* Animated Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <button className="cursor-pointer relative w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-5 px-10 rounded-xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-4 backdrop-blur-sm">
              {/* Icon Container */}
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-xl group-hover:scale-110 transition-transform duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg>
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              <span className="text-lg font-bold">Download CV</span>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Pulse Ring */}
              <div className="absolute inset-0 border-2 border-purple-400 rounded-xl opacity-0 group-hover:opacity-100 animate-ping-slow"></div>
            </button>
          </a>

          {/* Preview CV - Enhanced */}
          <button className="group relative overflow-hidden w-full sm:w-auto">
            {/* Animated Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-5 px-10 rounded-xl shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-4 backdrop-blur-sm border border-gray-700/50">
              {/* Icon Container */}
              <div className="relative">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  className="text-xl text-red-400 group-hover:scale-110 transition-transform duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"></path>
                </svg>
                <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              <span className="text-lg font-bold">Preview CV</span>
              
              {/* Shine Effect */}
              <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </button>
        </div>

        {/* Enhanced Footer Info */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 px-6 py-4 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">PDF Format</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-blue-400 text-sm font-medium">Updated October 2025</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-purple-400 text-sm font-medium">Professional Resume</span>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="200" className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300">
            <div className="text-2xl mb-3">📄</div>
            <h4 className="text-white font-semibold mb-2">Comprehensive</h4>
            <p className="text-gray-400 text-sm">Detailed frontend development skills and experience</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300" className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-indigo-500/30 transition-all duration-300">
            <div className="text-2xl mb-3">⚡</div>
            <h4 className="text-white font-semibold mb-2">Modern Tech</h4>
            <p className="text-gray-400 text-sm">Latest frontend technologies and best practices</p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400" className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30 hover:border-violet-500/30 transition-all duration-300">
            <div className="text-2xl mb-3">🎯</div>
            <h4 className="text-white font-semibold mb-2">Professional</h4>
            <p className="text-gray-400 text-sm">Industry-standard format and presentation</p>
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.1); opacity: 0; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Resume;