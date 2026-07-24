import Background from "@/components/background/Background";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Playground from "@/components/Playground";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Leadership from "@/components/sections/Leadership";
import Observatory from "@/components/sections/Observatory";

export default function Home() {
  return (
    <main>

      <Background />
      <Navbar />
      <Hero />
      <FeaturedWork/>
      <Leadership/>
      <Observatory/>
      <Playground />

    </main>
  );
} 