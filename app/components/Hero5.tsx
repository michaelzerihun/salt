"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import {
  ArweaveLogo,
  BittensorLogo,
  CryptoLogo,
  SolanaLogo,
  TelegramLogo,
} from "@/lib/svg";
import EcosystemLogos from "./EcosystemLogos";
import Crowdsourcing from "./Crowdsourcing";
import LLMLeaderboard from "./LLMLeaderboard";
import JoinOurCommunity from "./JoinOurCommunity";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [logosVisible, setLogosVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const logosRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const crowdsourcingRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  const logos = [
    { component: SolanaLogo, alt: "Solana Logo", width: "334", height: "50" },
    {
      component: ArweaveLogo,
      alt: "Arweave Logo",
      width: "421",
      height: "100",
    },
    {
      component: BittensorLogo,
      alt: "Bittensor Logo",
      width: "328",
      height: "58",
    },
    { component: CryptoLogo, alt: "Logo 4", width: "102", height: "102" },
    { component: TelegramLogo, alt: "Logo 5", width: "102", height: "102" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const threshold = 200; // Show stats after scrolling 200px
      setStatsVisible(currentScrollY > threshold);

      const statsSection = statsRef.current;
      if (statsSection) {
        const statsBottom = statsSection.offsetTop + statsSection.offsetHeight;
        setHeaderVisible(currentScrollY < statsBottom + 200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLogosVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white relative">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute bg-cover bg-no-repeat opacity-40 hue-rotate"
          style={{
            backgroundImage: "url('/images/moon1.jpg')",
            backgroundPosition: "center",
            transform: `scaleX(-1) translateY(${-scrollY * 0.5 + 400}px)`,
            height: "1016px",
            width: "1016px",
            right: "-200px",
            top: "-20%",
            willChange: "transform",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black/80" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-8 pt-8 pb-4 transition-opacity duration-500 ${
          headerVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#"
          className="text-white/80 hover:text-white transition-colors"
        >
          How It Works
        </a>
        <Button
          variant="outline"
          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors bg-transparent"
        >
          Buy Salt AI
        </Button>
      </nav>

      <section ref={heroRef} className="relative z-10 min-h-screen">
        <div
          className="flex items-center justify-center min-h-screen transition-all duration-700 ease-out"
          style={{
            transform: statsVisible ? "translateY(-80px)" : "translateY(0)",
          }}
        >
          <div className="pr-8 pl-16 text-start">
            <div className="max-w-[2000px]">
              <h1 className="text-5xl md:text-7xl lg:text-[128px] font-black text-balance bg-gradient-to-r from-pink-400 via-orange-500 to-red-500 bg-clip-text text-transparent gradient-shift leading-tight">
                A new economic primitive for funding decentralized AI
              </h1>

              <p className="text-xl md:text-2xl text-white/80 text-pretty mb-12 max-w-3xl leading-relaxed text-start">
                We track, rank and pay for the best open source decentralized
                LLMs to compete against OpenAI
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-start">
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-8 py-4 text-lg font-semibold"
                >
                  Buy Salt AI
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:text-orange-500 transition-colors px-8 py-4 text-lg font-semibold"
                >
                  Try Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className={`absolute left-0 right-0 z-20 flex justify-center w-full ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            bottom: statsVisible ? "10px" : "50px",
            top: "auto",
          }}
        >
          <div className="flex gap-8 max-w-[1760px] justify-center items-center w-full">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-full p-8 text-center border border-white/10 h-[190px] w-[564px] flex items-center justify-center flex-col gap-5">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                1,873
              </div>
              <div className="text-white/70 text-lg">LLM models</div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-full p-8 text-center border border-white/10 h-[190px] w-[564px] flex items-center justify-center flex-col gap-5">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                $326,734
              </div>
              <div className="text-white/70 text-lg">
                Paid to data scientists
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-full p-8 text-center border border-white/10 h-[190px] w-[564px] flex items-center justify-center flex-col gap-5">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                6,557
              </div>
              <div className="text-white/70 text-lg">Developers</div>
            </div>
          </div>
        </div>
      </section>

      <EcosystemLogos />

      <Crowdsourcing />

      <LLMLeaderboard />
    </div>
  );
}
