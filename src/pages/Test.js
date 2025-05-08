import React, { useState, useEffect } from "react";

// Import images if they're inside 'src' folder
import fraImage from '../../src/asset/fra.png';
import ctImage from '../../src/asset/ct.png';
import testImage from '../../src/asset/test.png';
import rtImage from '../../src/asset/rt.png';
import hsImage from '../../src/asset/hs.png';

function Test() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scrollY on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background image styles
  const backgroundStyles = {
    transform: `translateY(${scrollY * 0.2}px)`,
    opacity: Math.max(1 - scrollY / 500, 0.5), // Fade background as you scroll
  };

  // Stacking images effect
  const imageStyles = (index) => {
    return {
      transform: `translateY(${scrollY * (index + 1) * 0.3}px)`, // Adjust for smoother scroll movement
      opacity: Math.max(1 - (scrollY - index * 400) / 500, 0), // Fade images in/out smoothly
      zIndex: 10 - index, // Ensure images stack properly
    };
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${fraImage})`, // Use the imported image here
          ...backgroundStyles,
        }}
      ></div>

      {/* First stacked image */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${ctImage})`,
          ...imageStyles(0),
        }}
      ></div>

      {/* Second stacked image */}
      <div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${testImage})`,
          ...imageStyles(1),
        }}
      ></div>

      {/* Third stacked image */}
      <div
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${rtImage})`,
          ...imageStyles(2),
        }}
      ></div>

      {/* Fourth stacked image */}
      <div
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${hsImage})`,
          ...imageStyles(3),
        }}
      ></div>
    </section>
  );
}

export default Test;
