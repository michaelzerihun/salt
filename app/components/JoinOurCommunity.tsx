"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function JoinOurCommunity() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // BACKGROUND: Earth surface appears much earlier
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["90%", "-80%"] // 300% = starts much lower, -80% = ends high up
  );

  // MOON HORIZONTAL POSITION: Moves from off-screen left to far right with symmetric gap
  const moonX = useTransform(
    scrollYProgress,
    [0, 0.15], // 0 = scroll start, 0.15 = 15% through scroll
    ["-120%", "15%"] // -120% = off-screen left, 75% = far right with gap like text
  );

  // MOON VISIBILITY: Fades in early and stays visible
  const moonOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1], // 0 = scroll start, 0.1 = 10% scroll, 0.5 = 50% scroll, 1 = scroll end
    [0, 1, 1, 0] // 0 = invisible, 1 = fully visible
  );

  // FIRST TEXT VISIBILITY: Appears early and stays longer
  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.5], // 0 = scroll start, 0.1 = 10% scroll, 0.4 = 40% scroll, 0.5 = 50% scroll
    [0, 1, 1, 0] // 0 = invisible, 1 = fully visible
  );

  // FIRST TEXT HORIZONTAL SLIDE: Slides in from left
  const firstTextX = useTransform(
    scrollYProgress,
    [0, 0.15], // 0 = scroll start, 0.15 = 15% scroll
    ["-10%", "0%"] // -10% = slightly left, 0% = normal position
  );

  // SECOND TEXT VISIBILITY: Appears when first section transitions out
  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 1], // 0.4 = 40% scroll, 0.5 = 50% scroll, 1 = scroll end
    [0, 1, 1] // 0 = invisible, 1 = fully visible
  );

  // SECOND TEXT VERTICAL SLIDE: Slides up slightly as it appears
  const secondTextY = useTransform(
    scrollYProgress,
    [0.4, 0.5], // 0.4 = 40% scroll, 0.5 = 50% scroll
    ["20px", "0px"] // 20px = slightly down, 0px = normal position
  );

  return (
    <div className="bg-black font-sans overflow-x-hidden">
      {/* Combined Parallax Container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: "200vh" }} // Double height for smooth scroll
      >
        {/* Shared Parallax Background - Fixed positioned for smooth parallax */}
        <motion.div
          className="fixed inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/images/space.png')`,
            y: backgroundY,
          }}
        />

        {/* First Section - Join our community with moon */}
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden p-4 sm:pt-8 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
            {/* First section text */}
            <motion.div
              className="flex-1 text-center md:text-left md:pr-12"
              style={{
                x: firstTextX,
                opacity: firstTextOpacity,
              }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4 font-clash-grotesk leading-tight">
                Join our community
              </h2>
              <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
                Join us on our mission to to the moon & revolutionize open
                source AI development so that we can build a permissionless,
                democratized, and decentralized AI.
                <br />
                Let the fate of AI be in our hands and not that of big tech
                companies.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  {/* Telegram icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  {/* X/Twitter icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Moon animation */}
            <motion.div
              className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end"
              style={{
                x: moonX,
                opacity: moonOpacity,
              }}
            >
              <img
                src="images/moon.png"
                alt="The Moon"
                className="w-full max-w-sm lg:max-w-md rounded-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Second Section - Join our community and harvest $SALT */}
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden p-4 z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            style={{
              opacity: secondTextOpacity,
              y: secondTextY,
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-clash-grotesk leading-tight">
              Join our community and harvest $SALT
            </h2>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                How It Works
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
                Buy Salt AI
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative bg-black text-gray-400 pb-8 px-4 md:px-16 lg:px-24 z-20">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <span className="font-semibold text-lg">Salt AI</span>
            <p className="mt-1 text-sm">© 2024 Salt AI. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
