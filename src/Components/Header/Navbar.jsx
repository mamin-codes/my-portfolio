import React, { useState, useEffect, useRef } from "react";
import './Nav.css'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isScrolling = useRef(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setNavOpen(!navOpen);

  const navItems = [
    { name: "Homeee", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Calculate active indicator position
  const getActiveIndicatorStyle = () => {
    const activeIndex = navItems.findIndex(item => item.id === activeSection);
    return {
      width: `${100 / navItems.length}%`,
      transform: `translateX(${activeIndex * 100}%)`,
      height: 'calc(100% - 24px)',
      top: '12px',
      left: '0'
    };
  };

  // ✅ Super smooth scroll
  const smoothScroll = (targetId) => {
    setActiveSection(targetId);
    isScrolling.current = true;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80;
    const extraOffset = window.innerWidth < 768 ? 40 : 0;
    const totalOffset = headerHeight + extraOffset;

    const targetPosition = targetElement.offsetTop - totalOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(1200, Math.max(800, Math.abs(distance) * 0.8));

    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = easeOutQuart(progress);
      const run = startPosition + distance * ease;

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setTimeout(() => {
          isScrolling.current = false;
        }, 150);
      }
    }

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    requestAnimationFrame(animation);
    setNavOpen(false);
  };

  const isActive = (id) => activeSection === id;

  // ✅ Smooth scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollY = window.scrollY;
      lastScrollY.current = scrollY;

      const scrollPosition = scrollY + 100;

      let current = "home";
      let closestDistance = Infinity;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionMiddle = sectionTop + sectionHeight / 3;

          const distance = Math.abs(scrollPosition - sectionMiddle);

          if (distance < closestDistance) {
            closestDistance = distance;
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    let ticking = false;
    const updateScroll = () => {
      handleScroll();
      ticking = false;
    };

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [navItems]);

  return (
    <header className="bg-gradient-to-r from-gray-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-xl text-white top-0 left-0 w-full z-50 sticky border-b border-white/10 shadow-2xl shadow-purple-500/10">
      <nav className="max-w-7xl mx-auto lg:px-0 px-8 py-2 lg:py-4">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div
            onClick={() => smoothScroll("home")}
            className="flex flex-col group focus:outline-none rounded-lg px-3 py-2 cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 group-hover:from-purple-600/15 group-hover:to-blue-600/10 rounded-lg transition-all duration-300"></div>

            {/* Main Logo */}
            <div className="relative z-10 flex items-center gap-1">
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                &lt;
              </span>

              <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                Mamin
              </span>

              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                /&gt;
              </span>
            </div>

            {/* Frontend Developer Text */}
            <span className="relative z-10 text-xs bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text text-transparent group-hover:from-gray-300 group-hover:to-blue-300 transition-all duration-300 mt-0.5">
              Frontend Developer
            </span>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="relative bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 p-3 shadow-lg">
              {/* Single Smooth Active Background */}
              <div
                className="absolute bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-500 ease-out"
                style={getActiveIndicatorStyle()}
              ></div>

              <ul className="flex items-center relative z-10  lg:space-x-6 lg:px-2">
                {navItems.map((item) => (
                  <li key={item.id} className="flex-1 min-w-0">
                    <button
                      onClick={() => smoothScroll(item.id)}
                      className={`relative w-full px-8 py-3 text-sm font-medium transition-all duration-300 cursor-pointer flex items-center justify-center min-w-0 ${isActive(item.id)
                        ? "text-white font-semibold"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <span className="whitespace-nowrap text-center">
                        {item.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-3 rounded-xl transition-all duration-500 ${navOpen
              ? "bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-white shadow-lg shadow-purple-500/30"
              : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-500 ${navOpen ? "rotate-45 top-3" : "top-1"
                }`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-500 ${navOpen ? "opacity-0" : "opacity-100"
                }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-500 ${navOpen ? "-rotate-45 top-3" : "top-5"
                }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-4 right-4 transition-all duration-500 ease-out ${navOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
            }`}
        >
          <div className="bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl shadow-purple-500/20">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl border border-white/20 transition-all duration-500 ${isActive(item.id)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                      }`}
                  ></div>

                  <button
                    onClick={() => smoothScroll(item.id)}
                    className={`relative w-full px-5 py-4 text-base font-medium rounded-xl transition-all duration-500 flex items-center space-x-4 cursor-pointer z-10 ${isActive(item.id)
                      ? "text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive(item.id)
                      ? "bg-gradient-to-r from-purple-400 to-blue-400 scale-125"
                      : "bg-gray-500 group-hover:bg-gray-400"
                      }`}></div>

                    <span className="flex-1 text-left">{item.name}</span>

                    <div className={`transition-transform duration-500 ${isActive(item.id) ? "translate-x-1 opacity-100" : "opacity-0"
                      }`}>
                      →
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;