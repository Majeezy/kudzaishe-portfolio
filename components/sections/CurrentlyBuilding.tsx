import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const CURRENTLY_BUILDING = {
  title: "This Portfolio",
  description:
    "A Next.js site with a dark, type-safe design system, built stage by stage and documented through its own commit history — the same process shown in the Approach section above.",
  href: "https://github.com/Majeezy/kudzaishe-portfolio",
};

export function CurrentlyBuilding() {
  return (
    <Section id="currently-building" className="border-t border-border">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        Currently Building
      </h2>
      <div className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="text-xs text-muted">In progress</p>
        <h3 className="mt-2 text-xl font-medium">
          {CURRENTLY_BUILDING.title}
        </h3>
        <p className="mt-3 max-w-xl text-muted">
          {CURRENTLY_BUILDING.description}
        </p>
        <div className="mt-6">
          <Button
            href={CURRENTLY_BUILDING.href}
            variant="secondary"
            external
            icon={<ArrowRight size={16} />}
          >
            Watch progress on GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
}
