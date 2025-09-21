"use client";
import {
  ArweaveLogo,
  BittensorLogo,
  CryptoLogo,
  SolanaLogo,
  TelegramLogo,
} from "@/lib/svg";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function EcosystemLogos() {
  const logosRef = useRef(null);
  const { scrollYProgress: logosScrollYProgress } = useScroll({
    target: logosRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(logosScrollYProgress, [0, 1], ["-85%", "100%"]);

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
  return (
    <div className="relative z-10 h-screen text-white flex flex-col justify-center items-center text-center py-20 px-4 md:px-16 lg:px-24 gap-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-white mb-16 text-balance font-['ClashGrotesk']">
        Projects integrated into the Arrakis AI Ecosystem
      </h2>
      <motion.div
        className="flex flex-row justify-center items-center space-x-8 md:space-x-[120px]"
        ref={logosRef}
        style={{ x: x }}
      >
        {logos.map((logo, index) => {
          const LogoComponent = logo.component;
          return (
            <LogoComponent
              key={index}
              width={logo.width}
              height={logo.height}
              fill="currentColor"
              className="text-white flex-shrink-0"
            />
          );
        })}
      </motion.div>
    </div>
  );
}
