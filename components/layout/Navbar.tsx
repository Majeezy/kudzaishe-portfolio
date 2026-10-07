"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { FOCUS_RING } from "@/lib/styles";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className={`rounded-sm font-semibold tracking-tight ${FOCUS_RING}`}
        >
          Kudzaishe Majeza
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-sm text-sm text-muted transition-colors hover:text-foreground ${FOCUS_RING}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Majeezy"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm transition-colors hover:bg-surface-hover ${FOCUS_RING}`}
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </nav>

        <button
          className={`rounded-sm md:hidden ${FOCUS_RING}`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-sm py-2 text-sm text-muted hover:text-foreground ${FOCUS_RING}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/Majeezy"
            target="_blank"
            rel="noreferrer"
            className={`rounded-sm py-2 text-sm text-muted hover:text-foreground ${FOCUS_RING}`}
          >
            GitHub ↗
          </a>
        </nav>
      )}
    </header>
  );
}
