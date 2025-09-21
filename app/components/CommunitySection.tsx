"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function CommunitySection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MOON ANIMATION CONTROLS - Adjust these values to change moon behavior
  const moonStartX = -900; // Moon starts 600px to the left (hiding text)
  const moonEndX = 0; // Moon ends at normal position (0px)
  const animationStartScroll = 3200; // Animation starts at 3000px scroll
  const animationDuration = 1500; // Animation happens over 1500px of scroll

  // Calculate moon position based on scroll
  const scrollProgress = Math.max(
    0,
    Math.min(1, (scrollY - animationStartScroll) / animationDuration)
  );
  const moonX = moonStartX + (moonEndX - moonStartX) * scrollProgress;

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Join our community
          </h2>

          <div className="space-y-6 text-lg text-white/80">
            <p>
              Join us on our mission to to the moon & revolutionize open source
              AI development so that we can build a permissionless,
              democratized, and decentralized AI.
            </p>
            <p>
              Let the fate of AI be in our hands and not that of big tech
              companies.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full w-16 h-16 p-0"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
              </svg>
            </Button>

            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full w-16 h-16 p-0"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/moon.png"
            alt="Moon"
            className="w-[484px] h-[484px] object-contain transition-transform duration-100 ease-out"
            style={{
              transform: `translateX(${moonX}px)`,
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </section>
  );
}
