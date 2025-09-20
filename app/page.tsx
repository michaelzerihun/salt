import Hero from "./components/Hero";
import EcosystemLogos from "./components/EcosystemLogos";
import Crowdsourcing from "./components/Crowdsourcing";
import LLMLeaderboard from "./components/LLMLeaderboard";
import JoinOurCommunity from "./components/JoinOurCommunity";

export default function Home() {
  return (
    <div>
      <Hero />
      <EcosystemLogos />
      <Crowdsourcing />
      <LLMLeaderboard />
      <JoinOurCommunity />
    </div>
  );
}
