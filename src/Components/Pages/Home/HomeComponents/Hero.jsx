import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFolderOpen, FaWhatsapp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';
import { Link } from "react-scroll";

const roles = [
    "FRONTEND DEVELOPER",
    "UI ENGINEER",
    "REACT SPECIALIST",
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [typing, setTyping] = useState(true);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    // WhatsApp integration
    const handleStartProject = () => {
        const phoneNumber = "1234567890";
        const message = "Hello! I'm interested in starting a project with you.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleViewPortfolio = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socialLinks = {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        portfolio: "https://yourportfolio.com"
    };

    const handleSocialClick = (platform) => {
        const url = socialLinks[platform];
        if (url) {
            window.open(url, "_blank");
        }
    };

    // Typewriter effect
    useEffect(() => {
        let typingInterval;

        if (typing) {
            const fullText = roles[roleIndex];
            let charIndex = 0;

            typingInterval = setInterval(() => {
                setDisplayedText(fullText.slice(0, charIndex + 1));
                charIndex++;
                if (charIndex === fullText.length) {
                    clearInterval(typingInterval);
                    setTimeout(() => setTyping(false), 800);
                }
            }, 100);
        } else {
            setDisplayedText("");
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setTyping(true);
            }, 500);
        }

        return () => clearInterval(typingInterval);
    }, [typing, roleIndex]);

    const socialItems = [
        {
            name: "GitHub",
            icon: <FaGithub className="text-lg" />,
            color: "from-gray-600 to-gray-800",
            platform: "github"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="text-lg" />,
            color: "from-blue-500 to-blue-700",
            platform: "linkedin"
        },
        {
            name: "Twitter",
            icon: <FaTwitter className="text-lg" />,
            color: "from-cyan-500 to-blue-500",
            platform: "twitter"
        },
        {
            name: "Portfolio",
            icon: <FaFolderOpen className="text-lg" />,
            color: "from-purple-500 to-pink-500",
            platform: "portfolio"
        }
    ];

    return (
        <section
            
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
        >
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

            {/* Enhanced Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 90}%`,
                            top: `${Math.random() * 90}%`,
                            animationDelay: `${i * 0.7}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Hero Content */}
            <div className="mx-auto lg:px-20 flex flex-col-reverse lg:flex-row justify-between items-center relative z-10 min-h-screen py-16 lg:py-20 px-4 sm:px-6">
                {/* Left Section - Enhanced with AOS */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 text-center lg:text-left mt-16 lg:mt-0">
                    <div className="space-y-6">
                        {/* Availability Badge with AOS */}
                        <div 
                            data-aos="fade-down"
                            data-aos-delay="100"
                            className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse"></span>
                            <span className="text-purple-400 text-sm font-medium">Available for Frontend Projects</span>
                        </div>

                        {/* Enhanced Headline with AOS */}
                        <div className="space-y-4">
                            <h1 
                                data-aos="fade-right"
                                data-aos-delay="200"
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight"
                            >
                                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text drop-shadow-lg">Hello, I'm</span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text lg:text-4xl text-transparent font-black tracking-tight">
                                    MANIRUZZAMAN MAMIN
                                </span>
                            </h1>
                        </div>

                        {/* Enhanced Typewriter Text with AOS */}
                        <div 
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className="h-16 flex items-center justify-center lg:justify-start"
                        >
                            <p className="text-lg md:text-2xl font-semibold text-gray-300 flex items-center">
                                <span className="text-transparent bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text">Professional</span>&nbsp;
                                <span className="typewriter inline-flex text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold">
                                    {displayedText}
                                </span>
                                <span className="typewriter-cursor inline-flex text-purple-400 ml-1">|</span>
                            </p>
                        </div>
                    </div>

                    {/* Professional Description with AOS */}
                    <div 
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="group relative overflow-hidden"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative  text-gray-300 text-lg leading-relaxed max-w-2xl backdrop-blur-xl bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 transition-all duration-500 group-hover:border-transparent mx-auto lg:mx-0">
                            <p>
                                I specialize in crafting <span className="text-purple-400 font-semibold">high-performance web applications</span> with
                                modern frontend technologies. With expertise in <span className="text-cyan-400 font-semibold">React.js, Next.js, and TypeScript</span>,
                                I build <span className="text-pink-400 font-semibold">scalable, responsive, and user-centric interfaces</span> that deliver
                                exceptional digital experiences.
                            </p>
                            <p className="mt-4">
                                Passionate about <span className="text-blue-400 font-semibold">clean code architecture</span> and
                                <span className="text-green-400 font-semibold"> performance optimization</span>, I transform complex requirements
                                into intuitive, accessible, and maintainable solutions.
                            </p>
                        </div>
                    </div>

                    {/* Enhanced Action Buttons with AOS */}
                   {/* Enhanced Action Buttons with AOS */}
<div 
    data-aos="fade-up"
    data-aos-delay="500"
    className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
>
    <button
        onClick={handleStartProject}
        className="group relative px-8 py-4 overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 w-full sm:w-auto min-w-[160px]"
        aria-label="Start a project via WhatsApp"
    >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <span className="relative z-10 text-white font-semibold flex items-center justify-center gap-2">
            <FaWhatsapp className="text-lg" />
            Hire Me
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
    </button>

    <Link to="projects" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto">
        <button
            onClick={handleViewPortfolio}
            className="group relative px-8 py-4 overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 w-full min-w-[160px]"
            aria-label="View my portfolio projects"
        >
            <div className="absolute inset-0 border border-purple-400/50 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <span className="relative z-10 text-white font-semibold flex items-center justify-center gap-2">
                <FaFolderOpen className="text-lg" />
                View My Work
            </span>
        </button>
    </Link>
</div>
                    {/* Enhanced Social Links with AOS */}
                    <div 
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="flex justify-center lg:justify-start space-x-4 pt-6"
                    >
                        {socialItems.map((social, i) => (
                            <button
                                key={i}
                                onClick={() => handleSocialClick(social.platform)}
                                className="group cursor-pointer focus:outline-none"
                                aria-label={`Visit my ${social.name}`}
                                data-aos="zoom-in"
                                data-aos-delay={700 + (i * 100)}
                            >
                                <div className={`relative w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/25 backdrop-blur-sm`}>
                                    <div className="text-white">
                                        {social.icon}
                                    </div>
                                    <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Section - Clean Professional Design with AOS */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mb-12 lg:mb-0">
                    <div 
                        className="relative group"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    >
                        {/* Main Profile Container with Perfect Gradient Border */}
                        <div className="relative">
                            {/* Animated Gradient Border */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-sm opacity-80 group-hover:opacity-100 transition-all duration-500 animate-spin-slow"></div>

                            {/* Inner Container to hide gradient overflow */}
                            <div className="relative rounded-2xl p-1 bg-slate-900">
                                {/* Profile Image Container */}
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 backdrop-blur-sm">
                                    <img
                                        src="https://i.ibb.co.com/ZpsHBzt6/Gemini-Generated-Image-4dega94dega94deg.png"
                                        alt="Maniruzzaman Mamin - Frontend Developer"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Tech Cards with AOS */}
                        <div 
                            className="absolute -top-6 -left-6"
                            data-aos="fade-down-right"
                            data-aos-delay="600"
                        >
                            <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl p-3 border border-slate-700/50 shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                <div className="text-cyan-400 text-sm font-mono font-bold">{'</>'}</div>
                                <div className="text-white text-xs mt-1">Clean Code</div>
                            </div>
                        </div>

                        <div 
                            className="absolute -bottom-6 -right-6"
                            data-aos="fade-up-left"
                            data-aos-delay="600"
                        >
                            <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl p-3 border border-slate-700/50 shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                <div className="text-purple-400 text-sm font-mono font-bold">{'{}'}</div>
                                <div className="text-white text-xs mt-1">Modern JS</div>
                            </div>
                        </div>

                        {/* Frontend Developer Badge with AOS */}
                        <div 
                            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-2xl backdrop-blur-sm animate-smooth-bounce">
                                🚀 Frontend Developer
                            </div>
                        </div>

                        {/* Connection Dots with AOS */}
                        <div 
                            className="absolute top-1/2 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                            data-aos="fade-right"
                            data-aos-delay="700"
                        ></div>
                        <div 
                            className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" 
                            style={{ animationDelay: '1s' }}
                            data-aos="fade-left"
                            data-aos-delay="700"
                        ></div>
                    </div>
                </div>

                {/* Enhanced Scroll Indicator with AOS */}
                <div 
                    className="absolute bottom-0 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div 
                        className="group cursor-pointer" 
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        role="button"
                        tabIndex={0}
                        aria-label="Scroll to about section"
                    >
                        <div className="w-8 h-12 border-2 border-purple-400/50 rounded-full flex justify-center backdrop-blur-sm bg-slate-800/30">
                            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"></div>
                        </div>
                        <div className="text-xs text-purple-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Scroll Down
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;