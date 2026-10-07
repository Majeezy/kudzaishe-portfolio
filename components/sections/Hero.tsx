import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function Hero() {
  return (
    <Section className="pt-28 md:pt-36">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        IT graduate, now building real software
      </p>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
        I build practical technology for real-world problems.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        BSc (Hons) in Information Technology, with a background in
        networking, cybersecurity, and IT support. Now turning that
        foundation into software, AI tools, and automation that small
        businesses can actually use.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/projects" icon={<ArrowRight size={16} />}>
          View Projects
        </Button>
        <Button
          href="https://github.com/Majeezy"
          variant="secondary"
          external
          icon={<GithubIcon size={16} />}
        >
          GitHub
        </Button>
        <Button href="#contact" variant="secondary">
          Contact
        </Button>
      </div>
    </Section>
  );
}
