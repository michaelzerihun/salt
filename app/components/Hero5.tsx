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
            transform: `scaleX(-1) translateY(${-scrollY * 0.1 + 400}px)`,
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

      <section ref={communityRef} className="relative z-10 py-24 min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-400/20 to-transparent"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
              Join our community and harvest $SALT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Join our community
              </h3>

              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Join us on our mission to to the moon & revolutionize open
                source AI development so that we can build a permissionless,
                democratized, and decentralized AI.
              </p>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Let the fate of AI be in our hands and not that of big tech
                companies.
              </p>

              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
                  <TelegramLogo width="24" height="24" className="text-black" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 relative overflow-hidden">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-500 shadow-inner">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                     radial-gradient(circle at 70% 20%, rgba(0,0,0,0.2) 0%, transparent 30%),
                                     radial-gradient(circle at 20% 80%, rgba(0,0,0,0.1) 0%, transparent 40%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center border-t border-white/10 pt-8">
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
                  <TelegramLogo width="20" height="20" className="text-black" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-8">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Buy Salt AI
                </a>
              </div>

              <div className="flex gap-6 text-sm text-white/40">
                <a href="#" className="hover:text-white/60 transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-white/60 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white/60 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
