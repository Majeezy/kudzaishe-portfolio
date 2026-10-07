import { Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        Contact
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        Open to conversations about internships, freelance work, or just
        talking through an idea.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="mailto:kmajeza619@gmail.com" icon={<Mail size={16} />}>
          Email
        </Button>
        <Button
          href="https://www.linkedin.com/in/kudzi-majeza-98460521b/"
          variant="secondary"
          external
          icon={<LinkedinIcon size={16} />}
        >
          LinkedIn
        </Button>
        <Button
          href="https://github.com/Majeezy"
          variant="secondary"
          external
          icon={<GithubIcon size={16} />}
        >
          GitHub
        </Button>
      </div>
    </Section>
  );
}
