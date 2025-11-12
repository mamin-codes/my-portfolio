import React from "react";
import "./Skill.css"

const SkillSection = () => {
    const skillCategories = [
        {
            title: "Frontend Technologies",
            skills: [
                {
                    name: "ReactJS",
                    proficiency: 90,
                    icon: "https://i.ibb.co.com/BhsVdNj/imgi-14-reactjs-ae2c1e90-2.webp",
                    link: "",
                    gradient: "from-cyan-400 to-blue-500",
                    barColor: "from-cyan-400 to-blue-500",
                    textColor: "text-transparent"
                },
                {
                    name: "NextJS",
                    proficiency: 85,
                    icon: "https://i.ibb.co.com/SXn44Y4T/imgi-15-nextjs-d670abd9-1.png",
                    link: "https://nextjs.org/",
                    gradient: "from-gray-800 to-gray-900",
                    barColor: "from-gray-400 to-gray-600", // Lighter bar for dark background
                    textColor: "text-white" // Force white text
                },
                {
                    name: "JavaScript",
                    proficiency: 88,
                    icon: "https://i.ibb.co.com/G4zYsxjC/imgi-16-js-d59ec02f-1.png",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    gradient: "from-yellow-400 to-amber-500",
                    barColor: "from-yellow-400 to-amber-500",
                    textColor: "text-transparent"
                },
                {
                    name: "HTML5",
                    proficiency: 95,
                    icon: "https://i.ibb.co.com/KzxbfJKH/imgi-17-html5-a03f0234-1.png",
                    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
                    gradient: "from-orange-500 to-red-500",
                    barColor: "from-orange-500 to-red-500",
                    textColor: "text-transparent"
                },
                {
                    name: "CSS3",
                    proficiency: 90,
                    icon: "https://i.ibb.co.com/JwHL0wjF/imgi-18-css3-afa81714-1.png",
                    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    gradient: "from-blue-500 to-indigo-600",
                    barColor: "from-blue-500 to-indigo-600",
                    textColor: "text-transparent"
                },
                {
                    name: "Tailwind CSS",
                    proficiency: 92,
                    icon: "https://i.ibb.co.com/nNFzc06P/imgi-19-tailwind-be709ed9-1.png",
                    link: "https://tailwindcss.com/",
                    gradient: "from-cyan-400 to-teal-500",
                    barColor: "from-cyan-400 to-teal-500",
                    textColor: "text-transparent"
                },
            ],
        },
        {
            title: "Development Tools",
            skills: [
                {
                    name: "VS Code",
                    proficiency: 95,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-9-vscode-1e8c1c1e.png",
                    link: "https://code.visualstudio.com/",
                    gradient: "from-blue-500 to-purple-600",
                    barColor: "from-blue-500 to-purple-600",
                    textColor: "text-transparent"
                },
                {
                    name: "Git",
                    proficiency: 88,
                    icon: "https://i.ibb.co.com/0CxY1Q1L/imgi-10-git-f14e32c1.png",
                    link: "https://git-scm.com/",
                    gradient: "from-orange-500 to-red-500",
                    barColor: "from-orange-500 to-red-500",
                    textColor: "text-transparent"
                },
                {
                    name: "GitHub",
                    proficiency: 90,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-11-github-1e8c1c1e.png",
                    link: "https://github.com/",
                    gradient: "from-gray-700 to-gray-900",
                    barColor: "from-gray-400 to-gray-600", // Lighter bar for visibility
                    textColor: "text-white" // Force white text
                },
                {
                    name: "Figma",
                    proficiency: 80,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-12-figma-1e8c1c1e.png",
                    link: "https://figma.com/",
                    gradient: "from-purple-500 to-pink-600",
                    barColor: "from-purple-500 to-pink-600",
                    textColor: "text-transparent"
                },
                {
                    name: "Chrome DevTools",
                    proficiency: 85,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-13-chrome-1e8c1c1e.png",
                    link: "https://developer.chrome.com/docs/devtools/",
                    gradient: "from-yellow-400 to-green-500",
                    barColor: "from-yellow-400 to-green-500",
                    textColor: "text-transparent"
                },
            ],
        },
        {
            title: "AI Tools",
            skills: [
                {
                    name: "OpenAI",
                    proficiency: 85,
                    icon: "https://i.ibb.co.com/Tx5GVxD6/imgi-4-openai-2c659f7d.webp",
                    link: "https://openai.com/",
                    gradient: "from-emerald-400 to-green-500",
                    barColor: "from-emerald-400 to-green-500",
                    textColor: "text-transparent"
                },
                {
                    name: "GitHub Copilot",
                    proficiency: 90,
                    icon: "https://i.ibb.co.com/4GwT418/imgi-7-copilot-a9443ce1.jpg",
                    link: "",
                    gradient: "from-purple-400 to-indigo-500",
                    barColor: "from-purple-400 to-indigo-500",
                    textColor: "text-transparent"
                },
                {
                    name: "Cursor",
                    proficiency: 85,
                    icon: "https://i.ibb.co.com/8n4KD2wm/imgi-8-cursor-9d39173d-1.webp",
                    link: "https://cursor.sh/",
                    gradient: "from-blue-400 to-cyan-500",
                    barColor: "from-blue-400 to-cyan-500",
                    textColor: "text-transparent"
                },
                {
                    name: "Claude AI",
                    proficiency: 80,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-23-claude-1e8c1c1e.png",
                    link: "https://claude.ai/",
                    gradient: "from-orange-400 to-amber-500",
                    barColor: "from-orange-400 to-amber-500",
                    textColor: "text-transparent"
                },
                {
                    name: "ChatGPT",
                    proficiency: 88,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-24-chatgpt-1e8c1c1e.png",
                    link: "https://chatgpt.com/",
                    gradient: "from-green-400 to-emerald-500",
                    barColor: "from-green-400 to-emerald-500",
                    textColor: "text-transparent"
                },
            ],
        },
        {
            title: "UI Frameworks & Libraries",
            skills: [
                {
                    name: "Bootstrap",
                    proficiency: 85,
                    icon: "https://i.ibb.co.com/KpjFTXL0/imgi-20-bootstrap-32fd9c91-1.png",
                    link: "",
                    gradient: "from-purple-500 to-pink-600",
                    barColor: "from-purple-500 to-pink-600",
                    textColor: "text-transparent"
                },
                {
                    name: "Material UI",
                    proficiency: 80,
                    icon: "/assets/mui-icon.png",
                    link: "https://mui.com/",
                    gradient: "from-blue-500 to-cyan-500",
                    barColor: "from-blue-500 to-cyan-500",
                    textColor: "text-transparent"
                },
                {
                    name: "Framer Motion",
                    proficiency: 75,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-21-framer-1e8c1c1e.png",
                    link: "https://www.framer.com/motion/",
                    gradient: "from-pink-500 to-rose-500",
                    barColor: "from-pink-500 to-rose-500",
                    textColor: "text-transparent"
                },
                {
                    name: "TypeScript",
                    proficiency: 82,
                    icon: "https://i.ibb.co.com/0jZ1Q1qL/imgi-22-typescript-1e8c1c1e.png",
                    link: "https://www.typescriptlang.org/",
                    gradient: "from-blue-500 to-indigo-600",
                    barColor: "from-blue-500 to-indigo-600",
                    textColor: "text-transparent"
                },
            ],
        },
    ];

    const getAnimationDelay = (index) => index * 100;

    return (
        <section
            
            className="relative pt-8 pb-16 sm:pt-10 sm:pb-20 w-full bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 min-h-screen overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
                {/* Enhanced Header */}
                <div className="flex flex-col justify-center items-center mb-16 sm:mb-20">
                    <div 
                        data-aos="fade-down"
                        className="inline-flex items-center space-x-2 bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/20 mb-6"
                    >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                        <span className="text-cyan-400 text-sm font-medium">Frontend Expertise</span>
                    </div>
                    
                    <h2
                        data-aos="fade-down"
                        className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient"
                    >
                        Technical Skills
                    </h2>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"
                    ></div>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 text-center max-w-3xl leading-relaxed"
                    >
                        Mastering modern frontend technologies to build fast, responsive, and user-friendly web applications
                    </p>
                </div>

                {/* Enhanced Categories */}
                {skillCategories.map((category, categoryIndex) => (
                    <div
                        key={category.title}
                        className="mb-20"
                        data-aos="fade-up"
                        data-aos-delay={categoryIndex * 200}
                    >
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-12 text-white">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 md:px-4">
                            {category.skills.map((skill, skillIndex) => (
                                <div
                                    key={`${category.title}-${skill.name}`}
                                    data-aos="zoom-in"
                                    data-aos-delay={getAnimationDelay(skillIndex)}
                                    onClick={() => skill.link && window.open(skill.link, "_blank")}
                                    className={`group relative cursor-pointer ${skill.link ? 'hover:scale-105' : ''}`}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={skill.link ? `Open ${skill.name} in new tab` : skill.name}
                                >
                                    {/* Animated Border */}
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                                    
                                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/50 transition-all duration-500 group-hover:border-transparent">
                                        {/* Background Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                        {/* Icon Container */}
                                        <div className="relative flex justify-center items-center mb-4 sm:mb-6">
                                            <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${skill.gradient} p-1 shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500`}>
                                                <div className="w-full h-full rounded-full bg-slate-900 p-3 flex items-center justify-center">
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            e.target.style.display = "none";
                                                            e.target.nextSibling.classList.remove("hidden");
                                                        }}
                                                    />
                                                    <div className="hidden w-full h-full flex items-center justify-center text-lg font-bold text-white">
                                                        {skill.name.charAt(0)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Name with Fixed Text Color */}
                                        <h4 className={`${skill.textColor} bg-gradient-to-r ${skill.gradient} bg-clip-text text-base sm:text-lg md:text-xl font-bold text-center mb-3 sm:mb-4 flex items-center justify-center gap-2`}>
                                            {skill.name}
                                            {skill.link && (
                                                <svg
                                                    className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    />
                                                </svg>
                                            )}
                                        </h4>

                                        {/* Enhanced Proficiency Bar */}
                                        <div className="relative">
                                            <div className="flex justify-between items-center mb-2 sm:mb-3">
                                                <span className="text-xs sm:text-sm text-gray-400">
                                                    Skill Level
                                                </span>
                                                <span className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${skill.barColor} bg-clip-text text-transparent`}>
                                                    {skill.proficiency}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-slate-700/50 rounded-full h-2 sm:h-3 overflow-hidden backdrop-blur-sm">
                                                <div
                                                    className={`relative h-full rounded-full shadow-lg transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: `${skill.proficiency}%`,
                                                        background: `linear-gradient(to right, ${getGradientColors(skill.barColor)})`,
                                                    }}
                                                >
                                                    {/* Animated Shine */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Dots */}
                                        <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                                        <div className="absolute bottom-3 left-3 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-purple-500/5 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Custom CSS for Animations */}
            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes shine {
                    0% { transform: translateX(-100%) skewX(-12deg); }
                    100% { transform: translateX(200%) skewX(-12deg); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 6s ease infinite;
                }
                .animate-shine {
                    animation: shine 2s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

// Helper function to convert gradient classes to colors
const getGradientColors = (gradientClass) => {
    const colorMap = {
        'from-cyan-400 to-blue-500': '#22d3ee, #3b82f6',
        'from-gray-800 to-gray-900': '#1f2937, #111827',
        'from-gray-400 to-gray-600': '#9ca3af, #4b5563', // Lighter gray for bars
        'from-yellow-400 to-amber-500': '#fbbf24, #f59e0b',
        'from-orange-500 to-red-500': '#f97316, #ef4444',
        'from-blue-500 to-indigo-600': '#3b82f6, #4f46e5',
        'from-cyan-400 to-teal-500': '#22d3ee, #14b8a6',
        'from-emerald-400 to-green-500': '#34d399, #10b981',
        'from-purple-400 to-indigo-500': '#a855f7, #6366f1',
        'from-blue-400 to-cyan-500': '#60a5fa, #06b6d4',
        'from-blue-500 to-purple-600': '#3b82f6, #9333ea',
        'from-orange-500 to-red-500': '#f97316, #ef4444',
        'from-purple-500 to-pink-600': '#a855f7, #db2777',
        'from-blue-500 to-cyan-500': '#3b82f6, #06b6d4',
        'from-pink-500 to-rose-500': '#ec4899, #f43f5e',
        'from-gray-700 to-gray-900': '#374151, #111827',
        'from-yellow-400 to-green-500': '#fbbf24, #10b981',
        'from-orange-400 to-amber-500': '#fb923c, #f59e0b',
        'from-green-400 to-emerald-500': '#34d399, #10b981'
    };
    return colorMap[gradientClass] || '#a855f7, #6366f1';
};

export default SkillSection;