import NexusHero from "./NexusHero";
import Background from "@/components/background/Background";
import ExecutiveSummary from "./ExecutiveSummary";
import Origin from "./Origin";
import ProductVision from "./ProductVision";
import CurrentStatus from "./CurrentStatus";

export default function NexusPage() {
  return (
    <>
      <Background />
      <NexusHero />
      <ExecutiveSummary/>
    </>
  );
}