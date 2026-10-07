export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
