import {
  GraduationCap,
  Wrench,
  ShieldCheck,
  FolderGit2,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

type ExperienceEntry = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    icon: GraduationCap,
    title: "Online Tutor — Mathematics & Networks",
    description:
      "Teaching Mathematics 511 and Networks 511, helping students work through problems and networking concepts. Explaining the same idea five different ways until it clicks is exactly the skill I now rely on to document my own projects clearly.",
  },
  {
    icon: Wrench,
    title: "IT Support",
    description:
      "Hands-on troubleshooting across hardware, software, networks, system upgrades, and antivirus solutions. Built the habit of diagnosing a problem systematically instead of guessing — the same instinct I use debugging code today.",
  },
  {
    icon: ShieldCheck,
    title: "Networking & Cybersecurity Mentorship",
    description:
      "Structured labs in LAN configuration, routing, NAT, DHCP, and vulnerability identification using Cisco Packet Tracer and CML. Gave me a real foundation in how systems communicate and fail, which now shapes how I think about securing what I build.",
  },
  {
    icon: FolderGit2,
    title: "Academic Technical Projects",
    description:
      "Built systems end to end as a student — a hospital/resident portal, an AR educational app, and Cisco Packet Tracer labs. Early practice turning a brief into something that actually runs, which is the same process I use now, just with real users in mind.",
  },
];

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        Experience
      </h2>
      <div className="mt-10 space-y-8">
        {EXPERIENCE.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface">
              <Icon size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1 max-w-2xl text-sm text-muted">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
