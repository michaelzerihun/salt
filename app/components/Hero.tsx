"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform for moving hero content up to make room for stats
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

  // Transform for stats appearing from bottom (earlier and closer)
  const statsY = useTransform(scrollYProgress, [0.1, 0.4], [50, 0]);
  const statsOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <div className="bg-black text-white font-sans">
      {/* Navigation Header - Sticky throughout entire page */}
      <header className="sticky top-0 left-0 right-0 z-50 flex justify-center items-center px-4 md:px-16 lg:px-24 py-8 bg-black/80 backdrop-blur-sm">
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
      <div className="min-h-[120vh] relative" ref={containerRef}>
        {/* Hero Content */}
        <motion.div
          className="sticky top-0 flex flex-col justify-center items-center min-h-screen px-4 md:px-16 lg:px-24 pt-20"
          style={{ y: heroY }}
        >
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
        </motion.div>

        {/* Stats Section - Appears as user scrolls */}
        <motion.div
          className="absolute bottom-32 left-0 right-0 px-4 md:px-16 lg:px-24"
          style={{
            y: statsY,
            opacity: statsOpacity,
          }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Stat Card 1 */}
            <div className="w-full md:w-auto flex-1 h-[190px] p-8 rounded-[91px] bg-gray-800 flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-bold">1,873</span>
                <span className="mt-2 text-lg">LLM models</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="w-full md:w-auto flex-1 h-[190px] p-8 rounded-[91px] bg-gray-800 flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-bold">$326,734</span>
                <span className="mt-2 text-lg">Paid to data scientists</span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="w-full md:w-auto flex-1 h-[190px] p-8 rounded-[91px] bg-gray-800 flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-bold">6,557</span>
                <span className="mt-2 text-lg">Developers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
