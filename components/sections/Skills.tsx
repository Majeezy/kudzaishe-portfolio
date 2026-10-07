import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

const SKILL_GROUPS: { category: string; items: string[] }[] = [
  {
    category: "Programming",
    items: ["Java", "C++", "Python"],
  },
  {
    category: "Web Development",
    items: ["JavaScript", "HTML", "CSS"],
  },
  {
    category: "Databases",
    items: ["SQL", "Database Management"],
  },
  {
    category: "Networking",
    items: [
      "LAN Configuration",
      "IP Addressing & Subnetting",
      "Routing & NAT",
      "DHCP",
      "FTP/SFTP",
      "Telnet/SSH",
      "Network Troubleshooting",
      "Cisco Packet Tracer / CML",
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      "Threat Identification",
      "Vulnerability Assessment",
      "Network Traffic Analysis",
      "Security Controls",
    ],
  },
  {
    category: "Data Analysis",
    items: ["Data Analysis", "Tableau"],
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "Microsoft Office", "Google Workspace"],
  },
  {
    category: "Professional Skills",
    items: [
      "Problem Solving",
      "Technical Documentation",
      "Teaching & Mentoring",
      "Communication",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        Skills
      </h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {SKILL_GROUPS.map(({ category, items }) => (
          <div key={category}>
            <h3 className="font-medium">{category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
