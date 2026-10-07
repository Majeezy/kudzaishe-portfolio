import {
  Search,
  ClipboardList,
  PenTool,
  Hammer,
  TestTube,
  Rocket,
  FileText,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: Search,
    title: "Problem",
    description: "Start with a real problem someone actually has.",
  },
  {
    icon: Search,
    title: "Research",
    description: "Understand how it's currently being solved, and why that falls short.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Scope what the first working version actually needs to do.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Design the data, the structure, and the interface before writing code.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Build it in stages, understanding every part as it's written.",
  },
  {
    icon: TestTube,
    title: "Test",
    description: "Use it the way a real user would, and fix what breaks.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Ship it somewhere real, not just on a local machine.",
  },
  {
    icon: FileText,
    title: "Document",
    description: "Write down what it does and why, while it's still fresh.",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Come back and make it better once it's actually being used.",
  },
];

export function Approach() {
  return (
    <Section id="approach" className="border-t border-border">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        My Approach
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        I treat every project as a systematic process, not a one-off output
        from a prompt.
      </p>
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map(({ icon: Icon, title, description }, index) => (
          <li
            key={title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-xs text-muted">
                {index + 1}
              </span>
              <Icon size={18} className="text-accent" />
            </div>
            <h3 className="mt-4 font-medium">{title}</h3>
            <p className="mt-2 text-sm text-muted">{description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
