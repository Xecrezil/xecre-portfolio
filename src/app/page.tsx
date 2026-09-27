"use client";

import { useState } from "react";
import Background from "@/components/background/Background";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Playground from "@/components/Playground";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Leadership from "@/components/sections/Leadership";
import Observatory from "@/components/sections/Observatory";

export default function Home() {
  const [identityMode, setIdentityMode] = useState<"xecre" | "bazil">("xecre");

  const isBazil = identityMode === "bazil";
  return (
    <main
    className={`
        min-h-screen
        transition-colors
        duration-1000
        ${isBazil ? "identity-bazil" : "identity-xecre"}
      `}
      >

      <Background />
      <Navbar />
      <Hero identityMode={identityMode}
        onToggleIdentity={() =>
          setIdentityMode(isBazil ? "xecre" : "bazil")
        } />
      <FeaturedWork/>
      <Leadership/>
      <Observatory/>
      <Playground />

    </main>
  );
} 