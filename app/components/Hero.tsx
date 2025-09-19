"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transform for the celestial body
  const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-center items-center px-4 md:px-16 lg:px-24 py-8">
        <nav className="flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </a>
          <button className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            Buy Salt AI
          </button>
        </nav>
      </header>

      {/* Hero Section Container */}
      <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
        {/* Parallax Celestial Body */}
        <motion.div
          className="absolute right-0 bottom-[-50%] transform translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 opacity-80"
          style={{
            y: planetY,
            background:
              "url(https://4kwallpapers.com/images/walls/thumbs_3t/19153.jpg)",
          }}
        >
          {/* Subtle texture/crater effect using a data URL for SVG noise */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "url(https://4kwallpapers.com/images/walls/thumbs_3t/19153.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-start min-h-screen px-4 md:px-16 lg:px-24">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold font-['ClashGrotesk'] leading-tight space-x-4">
            <span className="bg-gradient-to-r from-[#B53EA4] to-[#FC6F32] bg-clip-text text-transparent">
              A new economic primitive
            </span>
            <span className="bg-gradient-to-r from-[#FC6F32] to-[#FF4A59] bg-clip-text text-transparent">
              for funding decentralized AI
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            We track, rank and pay for the best open source decentralized LLMs
            to compete against OpenAI
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200 transition-colors">
              Buy Salt AI
            </button>
            <button className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
