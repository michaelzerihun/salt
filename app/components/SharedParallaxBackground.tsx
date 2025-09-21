"use client";

import { useEffect, useState } from "react";

export function SharedParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PARALLAX SPEED CONTROLS - Adjust these values to change animation behavior
  const parallaxSpeed = 0.3; // How fast space background moves (0.1 = slow, 0.5 = fast)
  const startOffset = 85; // When space starts appearing (80vh from bottom initially)
  const maxOffset = 50; // Maximum space coverage (50vh = half screen)

  const scrollTrigger = 4500; // Space background only starts moving after 2000px of scroll

  // Calculate parallax offset with scroll trigger
  const effectiveScroll = Math.max(0, scrollY - scrollTrigger);
  const parallaxOffset = Math.min(
    effectiveScroll * parallaxSpeed,
    window.innerHeight * (maxOffset / 100)
  );
  const translateY = startOffset - (parallaxOffset / window.innerHeight) * 100;

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
