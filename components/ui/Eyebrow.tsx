export function Eyebrow({ children }: { children: string }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
      {children}
    </span>
  );
}
