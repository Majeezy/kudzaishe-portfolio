import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Approach } from "@/components/sections/Approach";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIBuild />
      <FeaturedProjects />
      <Skills />
      <Approach />
    </>
  );
}
