export function FilterPills<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T | "All";
  options: T[];
  onChange: (value: T | "All") => void;
}) {
  const allOptions: (T | "All")[] = ["All", ...options];

  return (
    <div>
      <p className="text-xs text-muted">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {allOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              value === option
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
