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

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [logosVisible, setLogosVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [spaceParallax, setSpaceParallax] = useState(0);
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

      const communitySection = communityRef.current;
      if (communitySection) {
        const communityTop = communitySection.offsetTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (currentScrollY + windowHeight >= communityTop) {
          const scrollProgress =
            (currentScrollY + windowHeight - communityTop) /
            (documentHeight - communityTop);
          const parallaxValue = Math.max(50, 100 - scrollProgress * 50);
          setSpaceParallax(parallaxValue);
        } else {
          setSpaceParallax(100);
        }
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
            transform: `scaleX(-1) translateY(${scrollY * 0.5}px)`,
            height: "1016px",
            width: "1016px",
            right: "-200px",
            top: "0%",
            willChange: "transform",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black/80" />
      </div>

      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/images/space.jpg')",
            backgroundPosition: `center ${spaceParallax}%`,
            willChange: "background-position",
            display: spaceParallax < 100 ? "block" : "none",
          }}
        />
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

      <section className="relative z-10 py-24" ref={logosRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16 text-balance">
            Projects integrated into the Arrakis AI Ecosystem
          </h2>

          <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto overflow-hidden">
            {logos.map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <div
                  key={index}
                  className={`flex items-center transition-all duration-1000 ease-out ${
                    logosVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <LogoComponent
                    width={logo.width}
                    height={logo.height}
                    alt={logo.alt}
                    className="max-w-full h-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={crowdsourcingRef} className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 text-balance leading-tight">
              Crowdsourcing our collective intelligence to build the best AI
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Open source AI has been lagging behind the likes of Google and
              OpenAI by billions of dollars.
            </p>

            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Salt aims to solve that by rewarding open source developers who
              contribute to the democratization of AI. We run competitions
              between AI models to find and reward the best AI models. As a
              result, our users will be able to access the latest cutting edge
              AI models.
            </p>

            <Button
              size="lg"
              className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-8 py-4 text-lg font-semibold"
            >
              Use The Cutting Edge AI
            </Button>
          </div>
        </div>
      </section>

      <section ref={leaderboardRef} className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              LLM Leaderboard
            </h2>
            <Button
              size="lg"
              className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-8 py-4 text-lg font-semibold"
            >
              Submit your model
            </Button>
          </div>

          <p className="text-lg text-white/80 mb-12 max-w-4xl">
            We evaluate LLMs on key benchmarks using the Eleuther AI, a
            framework to test LLMs on a large number of different evaluation
            tasks. The higher the score, the better the LLM.
          </p>

          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white/60 font-medium">
                      #
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      Model Name
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      Average
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      ARC
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      HellaSwag
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      MMLU
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      TruthfulQA
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      Winogrande
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      GSM8K
                    </th>
                    <th className="text-left p-4 text-white/60 font-medium">
                      Usage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      rank: 1,
                      name: "davidkim205/Rhea-72b-v0.5",
                      avg: "81.22",
                      arc: "79.78",
                      hella: "91.15",
                      mmlu: "77.95",
                      truth: "74.50",
                      wino: "87.85",
                      gsm: "76.12",
                      usage: "1,384,193",
                      trend: "—",
                    },
                    {
                      rank: 2,
                      name: "MTSAIR/MultiVerse_70B",
                      avg: "81.00",
                      arc: "78.67",
                      hella: "89.77",
                      mmlu: "78.22",
                      truth: "75.18",
                      wino: "87.53",
                      gsm: "76.65",
                      usage: "1,319,156",
                      trend: "↑",
                    },
                    {
                      rank: 3,
                      name: "SF-Foundation/Ein-72B-v0.11",
                      avg: "80.81",
                      arc: "76.79",
                      hella: "89.02",
                      mmlu: "77.20",
                      truth: "79.02",
                      wino: "84.06",
                      gsm: "78.77",
                      usage: "1,298,529",
                      trend: "—",
                    },
                    {
                      rank: 4,
                      name: "abacusai/Smaug-72B-v0.1",
                      avg: "80.48",
                      arc: "76.02",
                      hella: "89.27",
                      mmlu: "77.15",
                      truth: "76.67",
                      wino: "85.08",
                      gsm: "78.70",
                      usage: "1,255,720",
                      trend: "↑",
                    },
                    {
                      rank: 5,
                      name: "ibivibiv/alpaca-dragon-72b-v1",
                      avg: "79.30",
                      arc: "73.89",
                      hella: "88.16",
                      mmlu: "77.40",
                      truth: "72.69",
                      wino: "86.03",
                      gsm: "77.63",
                      usage: "1,239,060",
                      trend: "↓",
                    },
                    {
                      rank: 6,
                      name: "mistralai/Mixtral-8x22B-Instruct-v0.1",
                      avg: "79.15",
                      arc: "72.7",
                      hella: "89.08",
                      mmlu: "77.77",
                      truth: "68.14",
                      wino: "85.16",
                      gsm: "82.03",
                      usage: "1,208,482",
                      trend: "—",
                    },
                    {
                      rank: 7,
                      name: "moreh/MoMo-72B-lora-1.8.7-DPO",
                      avg: "78.55",
                      arc: "70.82",
                      hella: "85.96",
                      mmlu: "77.13",
                      truth: "74.71",
                      wino: "84.06",
                      gsm: "78.62",
                      usage: "1,205,577",
                      trend: "↑",
                    },
                    {
                      rank: 8,
                      name: "cloudyu/TomGrc_FusionNet_34Bx2_MoE_v0.1",
                      avg: "77.91",
                      arc: "74.06",
                      hella: "86.74",
                      mmlu: "76.65",
                      truth: "72.24",
                      wino: "83.35",
                      gsm: "74.45",
                      usage: "1,199,621",
                      trend: "↑",
                    },
                  ].map((row) => (
                    <tr
                      key={row.rank}
                      className="border-b border-white/5 hover:bg-white/5"
                    >
                      <td className="p-4 text-white/60 flex items-center gap-2">
                        {row.trend === "↑" && (
                          <span className="text-green-400">↑</span>
                        )}
                        {row.trend === "↓" && (
                          <span className="text-red-400">↓</span>
                        )}
                        {row.trend === "—" && (
                          <span className="text-white/40">—</span>
                        )}
                        {row.rank}
                      </td>
                      <td className="p-4 text-white font-medium">{row.name}</td>
                      <td className="p-4 text-white">{row.avg}</td>
                      <td className="p-4 text-white/80">{row.arc}</td>
                      <td className="p-4 text-white/80">{row.hella}</td>
                      <td className="p-4 text-white/80">{row.mmlu}</td>
                      <td className="p-4 text-white/80">{row.truth}</td>
                      <td className="p-4 text-white/80">{row.wino}</td>
                      <td className="p-4 text-white/80">{row.gsm}</td>
                      <td className="p-4 text-white/60">{row.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center p-6">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={communityRef} className="relative z-10 py-24 min-h-screen">
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
              <div className="w-80 h-80 rounded-full relative overflow-hidden">
                <img
                  src="/images/moon.png"
                  alt="Moon"
                  className="w-full h-full object-cover rounded-full"
                />
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
