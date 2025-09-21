"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Change = {
  status: "up" | "down" | "same";
  value: number;
};

// Defines the structure for each entry in the leaderboard data.
type LeaderboardEntry = {
  id: number;
  name: string;
  change: Change;
  average: string;
  arc: string;
  hellaswap: string;
  mmlu: string;
  truthfulqa: string;
  winogrande: string;
  gsm8k: string;
  usage: string;
};

const leaderboardData: LeaderboardEntry[] = [
  {
    id: 1,
    name: "davidkim205/Rhea-72b-v0.5",
    change: { status: "up", value: 0.12 },
    average: "81.22",
    arc: "76.78",
    hellaswap: "91.15",
    mmlu: "77.95",
    truthfulqa: "74.90",
    winogrande: "67.65",
    gsm8k: "76.12",
    usage: "1,284,193",
  },
  {
    id: 2,
    name: "MTSAI/MultiVerse_70B",
    change: { status: "up", value: 0.05 },
    average: "81.00",
    arc: "76.57",
    hellaswap: "90.77",
    mmlu: "78.22",
    truthfulqa: "75.18",
    winogrande: "67.53",
    gsm8k: "76.65",
    usage: "1,319,156",
  },
  {
    id: 3,
    name: "SF-Foundation/Eir-72b-v0.11",
    change: { status: "down", value: 0.08 },
    average: "80.81",
    arc: "76.79",
    hellaswap: "89.02",
    mmlu: "77.20",
    truthfulqa: "79.02",
    winogrande: "64.06",
    gsm8k: "79.77",
    usage: "1,258,529",
  },
  {
    id: 4,
    name: "abacusai/Smaug-72b-v0.1",
    change: { status: "up", value: 0.1 },
    average: "80.48",
    arc: "76.02",
    hellaswap: "89.27",
    mmlu: "77.15",
    truthfulqa: "76.67",
    winogrande: "65.06",
    gsm8k: "78.70",
    usage: "1,255,720",
  },
  {
    id: 5,
    name: "l3vi/l3vi/alpaca-dragon-72b-v1",
    change: { status: "down", value: 0.03 },
    average: "79.30",
    arc: "73.99",
    hellaswap: "86.16",
    mmlu: "77.40",
    truthfulqa: "72.89",
    winogrande: "66.03",
    gsm8k: "77.63",
    usage: "1,235,060",
  },
  {
    id: 6,
    name: "mistralai/Mistral-8x22B-Instruct-v0.1",
    change: { status: "same", value: 0.0 },
    average: "75.15",
    arc: "72.7",
    hellaswap: "89.06",
    mmlu: "77.77",
    truthfulqa: "68.14",
    winogrande: "65.16",
    gsm8k: "82.03",
    usage: "1,208,482",
  },
  {
    id: 7,
    name: "moreh/Momo-72b-lora-1.8.7-DPO",
    change: { status: "up", value: 0.07 },
    average: "73.55",
    arc: "70.92",
    hellaswap: "85.08",
    mmlu: "77.13",
    truthfulqa: "74.71",
    winogrande: "64.06",
    gsm8k: "78.62",
    usage: "1,205,577",
  },
  {
    id: 8,
    name: "cloudyu/Tomore_FusionNet_14Bx2_MoE_v0.1",
    change: { status: "up", value: 0.02 },
    average: "77.91",
    arc: "74.06",
    hellaswap: "86.74",
    mmlu: "76.85",
    truthfulqa: "72.24",
    winogrande: "63.35",
    gsm8k: "74.45",
    usage: "1,199,621",
  },
  {
    id: 9,
    name: "meta-llama/Llama-3-70B-Instruct",
    change: { status: "down", value: 0.02 },
    average: "77.88",
    arc: "71.42",
    hellaswap: "85.59",
    mmlu: "90.06",
    truthfulqa: "61.81",
    winogrande: "82.67",
    gsm8k: "85.44",
    usage: "1,190,580",
  },
  {
    id: 10,
    name: "saliux/luxia-21.4B-alignment-v1.0",
    change: { status: "same", value: 0.0 },
    average: "77.74",
    arc: "77.47",
    hellaswap: "91.88",
    mmlu: "68.10",
    truthfulqa: "79.17",
    winogrande: "87.37",
    gsm8k: "71.11",
    usage: "1,185,294",
  },
  {
    id: 11,
    name: "zhengj/MixtAO-7B-Instruct",
    change: { status: "up", value: 0.01 },
    average: "77.50",
    arc: "73.91",
    hellaswap: "89.22",
    mmlu: "64.92",
    truthfulqa: "78.57",
    winogrande: "87.37",
    gsm8k: "71.11",
    usage: "1,178,889",
  },
  {
    id: 12,
    name: "yunconglong/Truthful_DPO_TomGrc_Fusion",
    change: { status: "down", value: 0.04 },
    average: "77.44",
    arc: "74.91",
    hellaswap: "89.30",
    mmlu: "64.67",
    truthfulqa: "78.02",
    winogrande: "88.24",
    gsm8k: "99.52",
    usage: "1,177,065",
  },
  {
    id: 13,
    name: "JaeyeonKang/CDX_Asura_v1",
    change: { status: "up", value: 0.03 },
    average: "77.43",
    arc: "73.89",
    hellaswap: "99.07",
    mmlu: "75.44",
    truthfulqa: "71.75",
    winogrande: "86.35",
    gsm8k: "68.08",
    usage: "1,170,954",
  },
  {
    id: 14,
    name: "fbtgt/YUNA-SimpleSmaug-34b-v1beta",
    change: { status: "down", value: 0.02 },
    average: "77.41",
    arc: "74.57",
    hellaswap: "86.74",
    mmlu: "76.68",
    truthfulqa: "70.17",
    winogrande: "83.82",
    gsm8k: "72.48",
    usage: "1,162,959",
  },
  {
    id: 15,
    name: "TomGrc/FusionNet_34Bx2_MoE_v0.1",
    change: { status: "up", value: 0.05 },
    average: "77.38",
    arc: "73.72",
    hellaswap: "96.46",
    mmlu: "76.72",
    truthfulqa: "71.01",
    winogrande: "83.35",
    gsm8k: "73.01",
    usage: "1,144,223",
  },
  {
    id: 16,
    name: "migisera/lisa-72B-v1.5b",
    change: { status: "up", value: 0.01 },
    average: "77.30",
    arc: "71.25",
    hellaswap: "85.53",
    mmlu: "81.22",
    truthfulqa: "71.99",
    winogrande: "81.45",
    gsm8k: "75.95",
    usage: "1,129,110",
  },
];

const getChangeIcon = (change: Change) => {
  switch (change.status) {
    case "up":
      return (
        <div className="flex items-center space-x-1 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">{change.value.toFixed(2)}</span>
        </div>
      );
    case "down":
      return (
        <div className="flex items-center space-x-1 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">{change.value.toFixed(2)}</span>
        </div>
      );
    case "same":
    default:
      return (
        <div className="flex items-center justify-center h-4 w-4">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
        </div>
      );
  }
};

export default function LLMLeaderboard() {
  const [showFirstTen, setShowFirstTen] = useState(true);
  const displayedData = showFirstTen
    ? leaderboardData.slice(0, 8)
    : leaderboardData.slice(8, 16);

  return (
    <div className="z-10 min-h-screen relative text-white flex flex-col justify-center gap-5 px-4 md:px-16 lg:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-col gap-4 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['ClashGrotesk'] leading-tight">
              LLM Leaderboard
            </h2>
            <Button size={"lg"} variant={"outline"} className="rounded-full">
              Submit your model
            </Button>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-[1320px]">
            We evaluate LLMs on key benchmarks using the Eleuther AI, a
            framework to test LLMs on a large number of different evaluation
            tasks. The higher the score, the better the LLM.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="w-full text-left">
            {/* Table Header */}
            <div className="flex text-gray-400 text-sm">
              <div className="w-16 py-2 px-4"></div>{" "}
              {/* Spacer for change icon */}
              <div className="w-16 py-2 px-4">#</div>
              <div className="flex-1 py-2 px-4">Model Name</div>
              <div className="w-36 py-2 px-4">Average</div>
              <div className="w-36 py-2 px-4">ARC</div>
              <div className="w-36 py-2 px-4">HellaSwap</div>
              <div className="w-36 py-2 px-4">MMLU</div>
              <div className="w-36 py-2 px-4">TruthfulQA</div>
              <div className="w-36 py-2 px-4">Winogrande</div>
              <div className="w-36 py-2 px-4">GSM8K</div>
              <div className="w-36 py-2 px-4">Usage</div>
            </div>

            {/* Table Rows */}
            <motion.div layout transition={{ duration: 0.5 }} className="mt-4">
              {displayedData.map((row) => (
                <div
                  key={row.id}
                  className={`flex items-center h-[72px] ${
                    row.id % 2 === 0 ? "bg-transparent" : "bg-[#C9D9FF14]"
                  }`}
                >
                  <div className="w-16 py-3 px-4 flex justify-center items-center">
                    {getChangeIcon(row.change)}
                  </div>
                  <div className="w-16 py-3 px-4">{row.id}</div>
                  <div className="flex-1 py-3 px-4">{row.name}</div>
                  <div className="w-36 py-3 px-4">{row.average}</div>
                  <div className="w-36 py-3 px-4">{row.arc}</div>
                  <div className="w-36 py-3 px-4">{row.hellaswap}</div>
                  <div className="w-36 py-3 px-4">{row.mmlu}</div>
                  <div className="w-36 py-3 px-4">{row.truthfulqa}</div>
                  <div className="w-36 py-3 px-4">{row.winogrande}</div>
                  <div className="w-36 py-3 px-4">{row.gsm8k}</div>
                  <div className="w-36 py-3 px-4">{row.usage}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center md:justify-end items-center mt-6 gap-8">
          {!showFirstTen && (
            <span className="text-lg text-gray-200">View full leaderboard</span>
          )}
          <button
            onClick={() => setShowFirstTen(!showFirstTen)}
            className="p-3 rounded-full border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showFirstTen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
