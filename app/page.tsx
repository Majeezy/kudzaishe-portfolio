import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Skills } from "@/components/sections/Skills";
import { Approach } from "@/components/sections/Approach";
import { GithubCta } from "@/components/sections/GithubCta";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIBuild />
      <FeaturedProjects />
      <CurrentlyBuilding />
      <Skills />
      <Approach />
      <GithubCta />
      <Experience />
      <Contact />
    </>
  );
}
