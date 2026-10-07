import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>&copy; 2026 Kudzaishe Majeza</p>
        <a
          href="https://github.com/Majeezy"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-foreground"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </Container>
    </footer>
  );
}
