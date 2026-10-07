import Link from "next/link";
import {
  Bot,
  Globe,
  Workflow,
  Store,
  ListChecks,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

type Category = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    icon: Bot,
    title: "AI Applications",
    description:
      "Tools that use AI to analyze documents, generate content, or assist with decisions.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full web apps with real functionality — accounts, data, and workflows, not just static pages.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Systems that remove repetitive manual work — bookings, invoicing, lead management.",
  },
  {
    icon: Store,
    title: "Business Websites",
    description:
      "Websites built for small businesses — clear, fast, and built around what the business sells.",
  },
  {
    icon: ListChecks,
    title: "Productivity Tools",
    description:
      "Small focused tools that solve one specific everyday problem well.",
  },
  {
    icon: ShieldCheck,
    title: "IT & Cybersecurity Projects",
    description:
      "Networking and security work — lab environments, threat analysis, and secure configuration.",
  },
];

export function WhatIBuild() {
  return (
    <Section id="what-i-build" className="border-t border-border">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        What I Build
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        I&apos;m actively building across these categories. Not every category has
        a shipped project yet — the{" "}
        <Link
          href="/projects"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Projects page
        </Link>{" "}
        shows exactly what&apos;s real today.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover"
          >
            <Icon size={22} className="text-accent" />
            <h3 className="mt-4 font-medium">{title}</h3>
            <p className="mt-2 text-sm text-muted">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
