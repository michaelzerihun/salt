"use client";

import { Button } from "@/components/ui/button";
import { TelegramLogo } from "@/lib/svg";
import { useEffect, useState } from "react";
import Image from "next/image";

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
          <h2 className="text-5xl lg:text-6xl text-white font-['ClashGrotesk']">
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
