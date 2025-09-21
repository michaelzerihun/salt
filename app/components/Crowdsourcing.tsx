"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

export default function Crowdsourcing() {
  return (
    <div className="relative z-10 min-h-screen w-full text-white flex flex-col justify-center px-4 md:px-16 lg:px-24">
      <motion.div
        className="max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl mb-4 leading-tight font-['ClashGrotesk'] max-w-2xl">
          Crowdsourcing our collective intelligence to build the best AI
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Open source AI has been lagging behind the likes of Google and OpenAI
          by billions of dollars.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Salt aims to solve that by rewarding open source developers who
          contribute to the democratization of AI. We run competitions between
          AI models to find and reward the best AI models. As a result, our
          users will be able to access the latest cutting edge AI models.
        </p>

        <Button size={"lg"} variant={"outline"} className="rounded-full">
          Use The Cutting Edge AI
        </Button>
      </motion.div>
    </div>
  );
}
