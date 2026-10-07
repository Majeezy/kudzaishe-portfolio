import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/lib/projects";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { StatusBadge } from "@/components/projects/StatusBadge";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { FOCUS_RING } from "@/lib/styles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.name} — Kudzaishe Majeza`,
    description: project.description,
  };
}

export default function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">,
) {
  return (
    <Suspense
      fallback={
        <Section className="pt-28 md:pt-32">
          <p className="text-sm text-muted">Loading project…</p>
        </Section>
      }
    >
      <ProjectDetail params={props.params} />
    </Suspense>
  );
}

async function ProjectDetail({
  params,
}: Pick<PageProps<"/projects/[slug]">, "params">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <Section className="pt-28 md:pt-32">
      <Link
        href="/projects"
        className={`inline-flex items-center gap-2 rounded-sm text-sm text-muted hover:text-foreground ${FOCUS_RING}`}
      >
        <ArrowLeft size={16} />
        All Projects
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <StatusBadge status={project.status} />
        <Tag>{project.category}</Tag>
      </div>

      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
        {project.name}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.github && (
          <Button
            href={project.github}
            variant="secondary"
            external
            icon={<GithubIcon size={16} />}
          >
            Code
          </Button>
        )}
        {project.demo && (
          <Button
            href={project.demo}
            variant="secondary"
            external
            icon={<ExternalLink size={16} />}
          >
            Live Demo
          </Button>
        )}
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Problem
          </h2>
          <p className="mt-3 text-muted">{project.problem}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Solution
          </h2>
          <p className="mt-3 text-muted">{project.solution}</p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Technologies
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-14">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Screenshots
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={`${project.name} screenshot`}
                className="rounded-xl border border-border"
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
