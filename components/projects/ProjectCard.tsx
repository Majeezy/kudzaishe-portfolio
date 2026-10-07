import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { Tag } from "@/components/ui/Tag";
import { StatusBadge } from "@/components/projects/StatusBadge";
import { FOCUS_RING } from "@/lib/styles";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-hover ${FOCUS_RING}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-muted">{project.category}</p>
          <h3 className="mt-1 font-medium">{project.name}</h3>
        </div>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-muted transition-colors group-hover:text-foreground"
        />
      </div>
      <p className="mt-3 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <StatusBadge status={project.status} />
        {project.tech.slice(0, 3).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Link>
  );
}
