import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Kudzaishe Majeza",
  description:
    "Software, AI, and automation projects built by Kudzaishe Majeza.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Section className="pt-28 md:pt-32">
      <h1 className="text-3xl font-semibold md:text-4xl">Projects</h1>
      <p className="mt-4 max-w-xl text-muted">
        Everything here is something I actually built — academic,
        independent, or client work, clearly labeled as such.
      </p>
      <ProjectsExplorer projects={projects} />
    </Section>
  );
}
