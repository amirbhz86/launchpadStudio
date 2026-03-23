const DEFAULT_STATS: { value: string; label: string }[] = [
  { value: "50+", label: "Client projects delivered" },
  { value: "8+", label: "Years building for teams & brands" },
  { value: "< 24h", label: "Typical first reply on new inquiries" },
];

type StatsStripProps = {
  stats?: typeof DEFAULT_STATS;
  disclaimer?: string;
};

export default function StatsStrip({
  stats = DEFAULT_STATS,
  disclaimer = "Figures are representative—replace with your verified numbers when you publish.",
}: StatsStripProps) {
  return (
    <section
      className="relative border-t border-border py-14 md:py-16"
      aria-label="Track record"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent-soft),transparent_55%)] opacity-90 dark:opacity-100"
        aria-hidden
      />
      <div className="relative container mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center overflow-hidden rounded-[var(--ds-radius-xl)] border border-border/60 bg-card/50 p-6 text-center shadow-[var(--ds-shadow-card)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[var(--ds-shadow-card-hover)] motion-reduce:transform-none sm:items-stretch sm:text-left md:p-8 dark:border-border/40 dark:bg-card/35"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/[0.07] blur-2xl transition duration-500 group-hover:bg-primary/[0.12] dark:bg-primary/10"
                aria-hidden
              />
              <span
                className="relative mb-5 inline-block h-1 w-10 rounded-full bg-gradient-to-r from-primary via-primary/70 to-primary/25 mx-auto sm:mx-0"
                aria-hidden
              />
              <p className="relative font-sans text-4xl font-semibold tabular-nums tracking-tight text-foreground md:text-[2.65rem] md:leading-none">
                {stat.value}
              </p>
              <p className="relative mt-3 max-w-[16rem] text-[0.9375rem] leading-snug text-muted sm:max-w-none">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-lg text-center text-[0.8125rem] leading-relaxed text-muted/90">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
