"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function JoinOurCommunity() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set window height on mount
    setWindowHeight(window.innerHeight);

    // Handle scroll
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Update window height on resize
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black font-sans overflow-x-hidden relative">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/space.png')`,
          transform: `translateY(${scrollY * -0.3 + windowHeight * 2}px)`,
          willChange: "transform",
        }}
      />

      {/* Combined Container for both sections */}
      <div className="relative" style={{ height: "200vh" }}>
        {/* First Section - Join our community with moon and text */}
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 z-10">
          <div className="flex items-center justify-between w-full max-w-7xl gap-8">
            <div
              className="text-left flex flex-col"
              style={{ width: "941px", height: "319px" }}
            >
              <h2
                className="font-bold mb-8 leading-tight font-['ClashGrotesk']"
                style={{ fontSize: "64px" }}
              >
                Join our community
              </h2>

              <p
                className="text-gray-300 mb-8 leading-relaxed"
                style={{ fontSize: "24px" }}
              >
                Join us on our mission to to the moon & revolutionize open
                source AI development so that we can build a permissionless,
                democratized, and decentralized AI.
                <br />
                Let the fate of AI be in our hands and not that of big tech
                companies.
              </p>

              <div className="flex gap-8">
                <Image
                  src="/images/telegram.png"
                  alt="Telegram"
                  width={64}
                  height={64}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                <Image
                  src="/images/x.png"
                  alt="X/Twitter"
                  width={64}
                  height={64}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>

            <div style={{ width: "32px" }} />

            <div>
              <Image
                src="/images/moon.png"
                alt="The Moon"
                width={484}
                height={484}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Second Section - Join our community and harvest $SALT */}
        <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-bold" style={{ fontSize: "32px" }}>
              Join our community and harvest $SALT
            </h2>
          </div>
        </div>

        <footer className="relative text-gray-400 pb-8 px-4 md:px-16 lg:px-24 z-20 backdrop-blur-sm">
          <div className="flex flex-col gap-8">
            {/* Navigation Links */}
            <div className="flex justify-center items-center gap-12">
              <Button
                variant="ghost"
                className="text-white hover:text-orange-500 transition-colors"
              >
                How It Works
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-orange-500 transition-colors"
              >
                Buy Salt AI
              </Button>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 w-full"></div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Icons */}
              <div className="flex gap-4">
                <Image
                  src="/images/telegram.png"
                  alt="Telegram"
                  width={36}
                  height={36}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
                <Image
                  src="/images/x.png"
                  alt="X/Twitter"
                  width={36}
                  height={36}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
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
          </div>
        </footer>
      </div>
    </div>
  );
}
