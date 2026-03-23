import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import type { SimpleIcon } from "simple-icons";
import {
  siAstro,
  siCloudflare,
  siDocker,
  siDjango,
  siFigma,
  siFlutter,
  siGit,
  siGraphql,
  siJavascript,
  siKubernetes,
  siLaravel,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNuxt,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRedis,
  siSvelte,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVuedotjs,
  siWordpress,
} from "simple-icons";

const tools: SimpleIcon[] = [
  siReact,
  siNextdotjs,
  siNuxt,
  siVuedotjs,
  siWordpress,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siTailwindcss,
  siVite,
  siDocker,
  siGit,
  siGraphql,
  siPostgresql,
  siMysql,
  siMongodb,
  siRedis,
  siPrisma,
  siLaravel,
  siPhp,
  siPython,
  siDjango,
  siNestjs,
  siSvelte,
  siAstro,
  siFlutter,
  siKubernetes,
  siCloudflare,
  siVercel,
  siFigma,
];

function ToolIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden>
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

export default async function ToolsSection() {
  const t = await getTranslations("Home.tools");

  return (
    <section
      id="tools"
      className="relative border-t border-border bg-background py-16 md:py-24"
      aria-labelledby="tools-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
        aria-hidden
      />
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="ds-eyebrow">{t("eyebrow")}</p>
          <h2 id="tools-heading" className="ds-heading-2">
            {t("title")}
          </h2>
          <p className="mt-6 text-muted leading-relaxed">{t("body")}</p>
        </div>

        <ul
          className="mx-auto mt-14 flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:gap-4 md:mt-16"
          role="list"
        >
          {tools.map((icon, i) => (
            <li key={icon.slug}>
              <div
                className="tools-float-chip group flex items-center gap-2.5 rounded-[var(--ds-radius-xl)] border border-border bg-card/80 px-3.5 py-3 shadow-ds-card backdrop-blur-sm transition-[box-shadow,background-color] duration-200 hover:bg-card hover:shadow-ds-card-hover sm:gap-3 sm:px-4 sm:py-3.5"
                style={
                  {
                    "--tools-float-i": i,
                  } as CSSProperties
                }
              >
                <span className="text-foreground/90 transition-colors group-hover:text-primary">
                  <ToolIcon icon={icon} />
                </span>
                <span className="max-w-[9.5rem] text-left text-sm font-medium leading-snug tracking-tight text-foreground sm:max-w-none sm:text-[0.9375rem]">
                  {icon.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
