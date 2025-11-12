// src/components/BackgroundEffects.jsx
import React from 'react';

/**
 * BACKGROUND EFFECTS COMPONENT
 * Creates animated background elements with floating orbs and pulsing circles
 * This enhances the visual appeal with dynamic effects
 */
const BackgroundEffects = () => {
  return (
    <>
      {/* ANIMATED GRADIENT CIRCLES SECTION */}
      {/* These create the colorful blurry circles in the background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* FLOATING PING DOTS SECTION */}
      {/* Small animated dots that create a星空 (starry sky) effect */}
      <div className="absolute inset-0">
        <FloatingDot left="23.9577%" top="3.39241%" delay="0s" duration="3.22341s" />
        <FloatingDot left="57.6565%" top="29.1565%" delay="0.5s" duration="2.37986s" />
        <FloatingDot left="63.9398%" top="81.0299%" delay="1s" duration="2.58265s" />
        <FloatingDot left="22.1541%" top="39.9319%" delay="1.5s" duration="3.19812s" />
        <FloatingDot left="89.1332%" top="87.1139%" delay="2s" duration="2.80781s" />
        <FloatingDot left="53.7106%" top="85.9432%" delay="2.5s" duration="2.5288s" />
        <FloatingDot left="66.1296%" top="6.4272%" delay="3s" duration="3.6515s" />
        <FloatingDot left="96.5342%" top="5.10756%" delay="3.5s" duration="3.54606s" />
      </div>
    </>
  );
};

/**
 * FLOATING DOT COMPONENT
 * Individual animated dot with custom positioning and timing
 */
const FloatingDot = ({ left, top, delay, duration }) => (
  <div 
    className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
    style={{
      left,
      top,
      animationDelay: delay,
      animationDuration: duration
    }}
  ></div>
);

export default BackgroundEffects;