"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

  // Earth transition - appears in later sections
  const earthOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const earthY = useTransform(scrollYProgress, [0.6, 1], [100, 0]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('/placeholder-9o8tu.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      />

      {/* Fixed Earth Background */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none z-0"
        style={{
          opacity: earthOpacity,
          y: earthY,
          backgroundImage: `url('/placeholder-isun7.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white font-bold text-xl">SALT</div>
          <div className="flex gap-6">
            <Button variant="ghost" className="text-white hover:text-white/80">
              How It Works
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-500 rounded-full px-6">
              Buy Salt AI
            </Button>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="min-h-screen bg-slate-900/80 backdrop-blur-sm text-white flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Crowdsourcing our collective intelligence to build the best AI
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Open source AI has been lagging behind the likes of Google and
              OpenAI by billions of dollars.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Salt aims to solve that by rewarding open source developers who
              contribute to the democratization of AI. We run competitions
              between AI models to find and reward the best AI models. As a
              result, our users will be able to access the latest cutting edge
              AI models.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-500 rounded-full px-8 py-3">
              Use The Cutting Edge AI
            </Button>
          </motion.div>
          <div className="relative">
            {/* Content space for moon background */}
          </div>
        </div>
      </section>

      {/* Section 2: Economic Primitive */}
      <section className="min-h-screen bg-slate-900/80 backdrop-blur-sm text-white flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-balance">
              <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                A new economic primitive for funding decentralized AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We track, rank and pay for the best open source decentralized LLMs
              to compete against OpenAI
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-500 rounded-full px-8 py-3">
                Buy Salt AI
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-white/80 px-8 py-3"
              >
                Try Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">1,873</div>
              <div className="text-gray-300">LLM models</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">$326,734</div>
              <div className="text-gray-300">Paid to data scientists</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-3xl p-8 text-center">
              <div className="text-4xl font-bold mb-2">6,557</div>
              <div className="text-gray-300">Developers</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: LLM Leaderboard */}
      <section className="min-h-screen bg-slate-900/80 backdrop-blur-sm text-white flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold">LLM Leaderboard</h2>
              <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-500 rounded-full px-6">
                Submit your model
              </Button>
            </div>
            <p className="text-gray-300 mb-12">
              We evaluate LLMs on key benchmarks using the Eleuther AI, a
              framework to test LLMs on a large number of different evaluation
              tasks. The higher the score, the better the LLM.
            </p>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="grid grid-cols-9 gap-4 p-4 border-b border-slate-700 text-sm font-medium text-gray-400">
                <div>#</div>
                <div className="col-span-2">Model Name</div>
                <div>Average</div>
                <div>ARC</div>
                <div>HellaSwag</div>
                <div>MMLU</div>
                <div>TruthfulQA</div>
                <div>Usage</div>
              </div>

              {[
                {
                  rank: 1,
                  name: "davidkim205/Rhea-72b-v0.5",
                  avg: "81.22",
                  arc: "79.78",
                  hella: "91.15",
                  mmlu: "77.95",
                  truth: "74.50",
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
                  usage: "1,239,060",
                  trend: "↓",
                },
              ].map((model) => (
                <motion.div
                  key={model.rank}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: model.rank * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-9 gap-4 p-4 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm ${
                        model.trend === "↑"
                          ? "text-green-400"
                          : model.trend === "↓"
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      {model.trend}
                    </span>
                    <span>{model.rank}</span>
                  </div>
                  <div className="col-span-2 font-medium">{model.name}</div>
                  <div>{model.avg}</div>
                  <div>{model.arc}</div>
                  <div>{model.hella}</div>
                  <div>{model.mmlu}</div>
                  <div>{model.truth}</div>
                  <div className="text-gray-400">{model.usage}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Ecosystem Partners */}
      <section className="min-h-screen bg-slate-900/80 backdrop-blur-sm text-white flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-16">
              Projects integrated into the Arrakis AI Ecosystem
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
              {[
                { name: "SOLANA", color: "from-purple-400 to-blue-500" },
                { name: "arweave", color: "from-gray-400 to-gray-600" },
                { name: "bitensor", color: "from-gray-300 to-gray-500" },
                { name: "RDT", color: "from-red-500 to-red-600" },
                { name: "SALT", color: "from-blue-400 to-blue-600" },
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${partner.color} mr-4`}
                  />
                  <span className="text-2xl font-bold">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Community (with Moon background still visible) */}
      <section className="min-h-screen bg-slate-900/80 backdrop-blur-sm text-white flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join our community
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Join us on our mission to to the moon & revolutionize open source
              AI development so that we can build a permissionless,
              democratized, and decentralized AI.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Let the fate of AI be in our hands and not that of big tech
              companies.
            </p>

            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-12 h-12 p-0">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 9.728-.896 9.728-.635 4.387-2.367 5.148-2.367 5.148s-1.732.761-2.367-5.148c0 0-.727-7.87-.896-9.728C10.87 6.3 12 5.4 12 5.4s1.13.9.958 2.76z" />
                </svg>
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-12 h-12 p-0">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
            </div>
          </motion.div>

          <div className="relative">
            {/* Moon background is visible here */}
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA (with Earth) */}
      <section className="min-h-screen bg-gradient-to-b from-slate-900/80 to-slate-800/80 backdrop-blur-sm text-white flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Join our community and harvest $SALT
            </h2>

            <div className="flex gap-6 justify-center mt-16">
              <Button
                variant="ghost"
                className="text-white hover:text-white/80 text-lg"
              >
                How It Works
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white border border-red-500 rounded-full px-8 py-3 text-lg">
                Buy Salt AI
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-10 h-10 p-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 9.728-.896 9.728-.635 4.387-2.367 5.148-2.367 5.148s-1.732.761-2.367-5.148c0 0-.727-7.87-.896-9.728C10.87 6.3 12 5.4 12 5.4s1.13.9.958 2.76z" />
                </svg>
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full w-10 h-10 p-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
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

            <Button className="bg-slate-700 hover:bg-slate-600 text-white rounded-full w-10 h-10 p-0">
              <ChevronDown className="w-5 h-5 rotate-180" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
