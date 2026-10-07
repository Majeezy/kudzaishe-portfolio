import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>&copy; 2026 Kudzaishe Majeza</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Majeezy"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kudzi-majeza-98460521b/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:kmajeza619@gmail.com"
            className="hover:text-foreground"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
