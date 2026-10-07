import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-widest text-muted">
        Stage 1 — Layout &amp; design system
      </p>
      <h1 className="mt-4 text-3xl font-semibold">
        Hero section lands in Stage 2.
      </h1>
    </Container>
  );
}
