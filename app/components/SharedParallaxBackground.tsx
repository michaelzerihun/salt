"use client";

import { useEffect, useState } from "react";

export function SharedParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0); // State to store window.innerHeight

  useEffect(() => {
    // Update windowHeight on mount and resize
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial height
    updateWindowHeight();

    // Update height on window resize
    window.addEventListener("resize", updateWindowHeight);

    // Update scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", updateWindowHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // PARALLAX SPEED CONTROLS
  const parallaxSpeed = 0.3; // How fast space background moves
  const startOffset = 85; // When space starts appearing (80vh from bottom initially)
  const maxOffset = 50; // Maximum space coverage (50vh = half screen)
  const scrollTrigger = 4500; // Space background starts moving after 2000px of scroll

  // Use a fallback height for SSR (e.g., 1080px or another reasonable default)
  const effectiveHeight = windowHeight || 1080;

  // Calculate parallax offset with scroll trigger
  const effectiveScroll = Math.max(0, scrollY - scrollTrigger);
  const parallaxOffset = Math.min(
    effectiveScroll * parallaxSpeed,
    effectiveHeight * (maxOffset / 100)
  );
  const translateY = startOffset - (parallaxOffset / effectiveHeight) * 100;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: "url(/images/space.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transform: `translateY(${translateY}vh)`,
        willChange: "transform",
      }}
    />
  );
}
