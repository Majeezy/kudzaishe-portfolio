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
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <WhatIBuild />
      </FadeIn>
      <FadeIn>
        <FeaturedProjects />
      </FadeIn>
      <FadeIn>
        <CurrentlyBuilding />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Approach />
      </FadeIn>
      <FadeIn>
        <GithubCta />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
