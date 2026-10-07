import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <Section id="featured-projects" className="border-t border-border">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Projects
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            {featured.length > 0
              ? "A selection of what I&apos;ve built."
              : "Nothing published here yet — the first real projects are in progress."}
          </p>
        </div>
        <Button
          href="/projects"
          variant="secondary"
          icon={<ArrowRight size={16} />}
        >
          View All Projects
        </Button>
      </div>

      {featured.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
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
      )}
    </Section>
  );
}
