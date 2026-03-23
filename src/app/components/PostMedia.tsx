import type { BlogMediaItem } from "@/data/blog";

function embedUrl(raw: string): string {
  const t = raw.trim();
  if (t.includes("youtube.com/embed/")) return t;
  const ytWatch = t.match(/[?&]v=([^&]+)/);
  if (ytWatch) return `https://www.youtube.com/embed/${ytWatch[1]}`;
  const ytShort = t.match(/youtu\.be\/([^?]+)/);
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`;
  const vimeo = t.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return t;
}

export default function PostMedia({ items }: { items: BlogMediaItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => {
        if (item.type === "image") {
          return (
            <figure key={i} className="my-0">
              <div className="overflow-hidden rounded-[var(--ds-radius-lg)] border border-border bg-muted/20">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              {item.caption ? (
                <figcaption className="mt-3 text-center text-sm text-muted">{item.caption}</figcaption>
              ) : null}
            </figure>
          );
        }

        if (item.type === "video") {
          return (
            <figure key={i} className="my-0">
              <div className="overflow-hidden rounded-[var(--ds-radius-lg)] border border-border bg-brand-black">
                <video
                  src={item.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                  className="aspect-video w-full bg-black object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              {item.caption ? (
                <figcaption className="mt-3 text-center text-sm text-muted">{item.caption}</figcaption>
              ) : null}
            </figure>
          );
        }

        const url = embedUrl(item.src);
        return (
          <figure key={i} className="my-0">
            <div className="aspect-video w-full overflow-hidden rounded-[var(--ds-radius-lg)] border border-border bg-brand-black">
              <iframe
                src={url}
                title={item.caption || "Embedded video"}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            {item.caption ? (
              <figcaption className="mt-3 text-center text-sm text-muted">{item.caption}</figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
