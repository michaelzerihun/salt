"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

// Due to the single-file constraint, the App component is the only one exported.
// The content that was previously in a separate component is now included directly.
export default function JoinOurCommunity() {
  const moonRef = useRef(null);
  const { scrollYProgress: moonScrollYProgress } = useScroll({
    target: moonRef,
    offset: ["start end", "end start"],
  });

  // The moon's X position animates from off-screen left to a position on the right.
  const moonX = useTransform(moonScrollYProgress, [0, 1], ["-100%", "45%"]);

  // The background image moves up as the user scrolls down, creating a parallax effect.
  const backgroundY = useTransform(
    moonScrollYProgress,
    [0, 1],
    ["200%", "-40%"]
  );

  // The text fades in as the user scrolls.
  const textOpacity = useTransform(moonScrollYProgress, [0.4, 0.6], [0, 1]);

  // The text slides slightly from the left as it fades in.
  const textX = useTransform(moonScrollYProgress, [0.3, 0.7], ["-5%", "0%"]);

  return (
    <div className="bg-black font-sans overflow-x-hidden">
      {/* Join Our Community Section */}
      <div
        ref={moonRef}
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden p-4 sm:pt-8"
      >
        {/* Parallax Background with adjusted starting position */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/space.png')`,
            y: backgroundY,
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
          {/* Text starts off-screen and animates into view */}
          <motion.div
            className="flex-1 text-center md:text-left md:pr-12"
            style={{ x: textX, opacity: textOpacity }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-clash-grotesk leading-tight">
              Join our community
            </h2>
            <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
              Join us on our mission to to the moon & revolutionize open source
              AI development so that we can build a permissionless,
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 10l-4 4-4-4" />
                  <path d="M15 14l-4 4-4-4" />
                  <line x1="11" y1="2" x2="11" y2="18" />
                  <path d="M21 16.5c0 1.9-1.6 3.5-3.5 3.5h-8c-1.9 0-3.5-1.6-3.5-3.5" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </motion.div>
          {/* Moon starts off-screen left and animates to its position */}
          <motion.div
            className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end"
            style={{ x: moonX }}
          >
            <img
              src="images/moon.png"
              alt="The Moon"
              className="w-full max-w-sm lg:max-w-md rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-400 pb-8 px-4 md:px-16 lg:px-24">
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
