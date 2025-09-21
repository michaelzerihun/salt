"use client";

import { useEffect, useState } from "react";

export function ParallaxSpace() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax offset - space background moves up as user scrolls
  const parallaxOffset = Math.min(scrollY * 0.3, 300); // Max 300px movement

  return (
    <div className="relative overflow-hidden">
      {/* Community Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black to-transparent">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
              Join our community
            </h2>
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              Join us on our mission to to the moon & revolutionize open source
              AI development so that we can build a permissionless,
              democratized, and decentralized AI.
            </p>
            <p className="text-lg text-white/70 mb-8">
              Let the fate of AI be in our hands and not that of big tech
              companies.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 9.728-.896 9.728-.379 2.655-1.407 3.119-2.896 1.627-1.024-.982-1.784-1.78-2.896-2.807-1.027-.982-1.784-1.78-2.896-2.807-.379-.379-.758-.758-.758-1.137 0-.379.379-.758.758-1.137l7.728-7.728c.379-.379.758-.379 1.137 0s.379.758 0 1.137l-6.592 6.592 8.865-3.448c.758-.379 1.516.379 1.137 1.137z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/moon.png"
              alt="Moon"
              className="w-96 h-96 lg:w-[484px] lg:h-[484px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Harvest Section with Parallax Background */}
      <section className="relative min-h-screen flex flex-col justify-between">
        {/* Parallax Space Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/space.png)",
            transform: `translateY(${parallaxOffset}px)`,
            height: "120%", // Make background taller for parallax effect
            top: "-10%",
          }}
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Join our community and harvest $SALT
            </h2>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Links */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors text-lg"
              >
                How It Works
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors text-lg"
              >
                Buy Salt AI
              </a>
            </div>

            {/* Bottom Footer */}
            <div className="flex justify-between items-center pt-8 border-t border-white/20">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 9.728-.896 9.728-.379 2.655-1.407 3.119-2.896 1.627-1.024-.982-1.784-1.78-2.896-2.807-1.027-.982-1.784-1.78-2.896-2.807-.379-.379-.758-.758-.758-1.137 0-.379.379-.758.758-1.137l7.728-7.728c.379-.379.758-.379 1.137 0s.379.758 0 1.137l-6.592 6.592 8.865-3.448c.758-.379 1.516.379 1.137 1.137z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-white/60">
                <a href="#" className="hover:text-white/80 transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
