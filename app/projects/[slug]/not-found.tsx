import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function ProjectNotFound() {
  return (
    <Section className="pt-28 text-center md:pt-32">
      <h1 className="text-2xl font-semibold">Project not found</h1>
      <p className="mt-4 text-muted">
        This project doesn&apos;t exist, or hasn&apos;t been published yet.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/projects" variant="secondary">
          Back to Projects
        </Button>
      </div>
    </Section>
  );
}
