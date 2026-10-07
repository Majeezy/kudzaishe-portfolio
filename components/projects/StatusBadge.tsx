import { ProjectStatus } from "@/types/project";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  "Academic Project": "border-border text-muted",
  "Independent Project": "border-accent/40 text-accent",
  "Client Project": "border-emerald-500/40 text-emerald-400",
  "Personal Product": "border-violet-500/40 text-violet-400",
  Experimental: "border-amber-500/40 text-amber-400",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}
