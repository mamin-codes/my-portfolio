import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Data for dynamic rendering
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Frontend Development',
    'Responsive Web Design',
    'React.js Development',
    'UI/UX Implementation',
    'Performance Optimization',
    'Cross-browser Compatibility'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:mominulmg2233@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2000ms'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4000ms'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column - Brand & Contact */}
            <div className="space-y-8">
              {/* Brand Section */}
              <div 
                className="space-y-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">MM</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-900"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Maniruzzaman Mamin
                    </h2>
                    <p className="text-purple-300 font-medium">Frontend Developer</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Crafting digital experiences with modern frontend technologies. 
                  Passionate about building responsive web applications and creating amazing user interfaces.
                </p>
              </div>

              {/* Contact Info */}
              <div 
                className="space-y-4"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <a 
                  href="mailto:mominulmg2233@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-purple-900 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">mominulmg2233@gmail.com</span>
                </a>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">+880 1992 916505</span>
                </div>
              </div>

              {/* Social Links */}
              <div 
                className="pt-4"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} hover:bg-gray-700`}
                      aria-label={social.name}
                      data-aos="zoom-in"
                      data-aos-delay={400 + (index * 100)}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Quick Links */}
              <div 
                className="space-y-6"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-bold text-white flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <Link
                        to={link.id}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={1200}
                        className="text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center group py-2 w-full text-left cursor-pointer"
                        data-aos="fade-left"
                        data-aos-delay={300 + (index * 50)}
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 transform group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div 
                className="space-y-6"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h3 className="text-xl font-bold text-white flex items-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                  Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={service}>
                      <div 
                        className="text-gray-300 hover:text-pink-300 transition-all duration-300 flex items-center group py-2 cursor-pointer"
                        data-aos="fade-left"
                        data-aos-delay={400 + (index * 50)}
                      >
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 transform group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {service}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Banner */}
        <div 
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-6 mb-8 transform hover:scale-[1.02] transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div>
                <h4 className="text-lg font-semibold text-white">Available for Opportunities</h4>
                <p className="text-purple-200 text-sm">Open for freelance projects and full-time frontend roles</p>
              </div>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1200}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Bottom Section - FIXED COPYRIGHT */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Copyright Section - Fixed Layout */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Maniruzzaman Mamin. All rights reserved.
              </p>
              <div className="hidden sm:flex text-gray-400">•</div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Built with</span>
                <span className="text-red-400">❤️</span>
                <span>&</span>
                <span className="text-purple-400 font-semibold">React</span>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                Terms of Service
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Powered by</span>
                <span className="text-green-400 font-semibold">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110 z-50 border-2 border-white/20 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;