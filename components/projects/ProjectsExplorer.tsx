"use client";

import { useMemo, useState } from "react";
import { Project, ProjectCategory, ProjectStatus } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FilterPills } from "@/components/projects/FilterPills";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [projects],
  );
  const statuses = useMemo(
    () => Array.from(new Set(projects.map((p) => p.status))),
    [projects],
  );

  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [status, setStatus] = useState<ProjectStatus | "All">("All");

  const filtered = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (status === "All" || p.status === status),
  );

  if (projects.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted">
        No projects published yet. Follow progress on{" "}
        <a
          href="https://github.com/Majeezy"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          GitHub
        </a>
        .
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
        <FilterPills
          label="Category"
          value={category}
          options={categories}
          onChange={setCategory}
        />
        <FilterPills
          label="Status"
          value={status}
          options={statuses}
          onChange={setStatus}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted">
          No projects match these filters.
        </p>
      )}
    </div>
  );
}
