import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function GithubCta() {
  return (
    <Section id="github" className="border-t border-border text-center">
      <GithubIcon size={28} />
      <h2 className="mt-4 text-2xl font-semibold">
        Most of my work happens in the open
      </h2>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Every project here has a repository behind it — commit history,
        documentation, and the occasional work-in-progress. If you want to
        see how something was actually built, GitHub is the place to look.
      </p>
      <div className="mt-6 flex justify-center">
        <Button
          href="https://github.com/Majeezy"
          external
          icon={<GithubIcon size={16} />}
        >
          github.com/Majeezy
        </Button>
      </div>
    </Section>
  );
}
