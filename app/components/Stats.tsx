import React from "react";

export default function Stats() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Stat Card 1 */}
        <div className="w-full md:w-auto flex-1 h-[190px] p-8 rounded-[91px] bg-gray-800 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center p-8">
            <span className="text-5xl lg:text-6xl font-bold">1,873</span>
            <span className="mt-2 text-xl">LLM models</span>
          </div>
        </div>
        {/* Stat Card 2 */}
        <div className="w-full md:w-auto flex-1 h-[190px] p-8 rounded-[91px] bg-gray-800 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center p-8">
            <span className="text-5xl lg:text-6xl font-bold">$326,734</span>
            <span className="mt-2 text-xl">Paid to data scientists</span>
          </div>
        </div>
        {/* Stat Card 3 */}
        <div className="w-full md:w-auto flex-1 h-[190px] p-8 rounded-[91px] bg-gray-800 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center p-8">
            <span className="text-5xl lg:text-6xl font-bold">6,557</span>
            <span className="mt-2 text-xl">Developers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
