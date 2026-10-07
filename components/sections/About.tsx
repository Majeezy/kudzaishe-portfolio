import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

const JOURNEY = [
  "IT Education",
  "Networking & Cybersecurity",
  "Teaching & IT Support",
  "Software Development",
];

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
        About
      </h2>
      <div className="mt-6 max-w-2xl space-y-5 text-muted">
        <p>
          I hold a BSc and BSc (Hons) in Information Technology from
          Richfield Graduate Institute of Technology. My path started in
          networking and cybersecurity — Cisco Networking Academy coursework
          and hands-on labs in LAN configuration, routing, NAT, and
          vulnerability assessment through a structured mentorship program —
          alongside IT support work troubleshooting hardware, software, and
          systems for real users.
        </p>
        <p>
          Tutoring Mathematics and Networking to students sharpened how I
          explain technical ideas clearly, which turned out to matter as
          much as the technical skills themselves.
        </p>
        <p>
          I&apos;m now applying that foundation to software development —
          building full applications instead of academic exercises, and
          learning to treat code the way I was taught to treat networks:
          understand the problem first, then design something that actually
          works.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {JOURNEY.map((step) => (
          <Tag key={step}>{step}</Tag>
        ))}
      </div>
    </Section>
  );
}
