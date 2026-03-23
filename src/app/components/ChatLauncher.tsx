"use client";

import { useEffect, useId, useState } from "react";
import { isLiveChatConfigured } from "@/lib/chatConfig";
import { primaryButtonClasses } from "./Button";

declare global {
  interface Window {
    $crisp?: Array<unknown[] | string>;
    Tawk_API?: {
      onLoad?: () => void;
      hideWidget?: () => void;
      maximize?: () => void;
      showWidget?: () => void;
    };
  }
}

function openProviderChat() {
  if (typeof window === "undefined") return;
  if (window.$crisp) {
    window.$crisp.push(["do", "chat:open"]);
    return;
  }
  if (window.Tawk_API?.showWidget) window.Tawk_API.showWidget();
  window.Tawk_API?.maximize?.();
}

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const chatReady = isLiveChatConfigured();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-[90] bg-black/35 backdrop-blur-[2px]"
          aria-label="Close chat panel"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div className="fixed bottom-4 right-4 z-[100] flex w-[min(100vw-2rem,380px)] flex-col items-end gap-3 md:bottom-6 md:right-6">
        {open ? (
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${panelId}-title`}
            className="w-full overflow-hidden rounded-[var(--ds-radius-xl)] border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-border bg-muted/15 px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2
                    id={`${panelId}-title`}
                    className="font-sans text-lg font-semibold text-foreground"
                  >
                    Chat with us
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {chatReady
                      ? "Open the live chat window to message us in real time—we’ll answer from the chat app."
                      : "Add your Crisp or Tawk credentials in .env.local to enable live chat (see LiveChat.tsx)."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="shrink-0 rounded-[var(--ds-radius-md)] p-1.5 text-muted transition hover:bg-foreground/[0.08] hover:text-foreground"
                  aria-label="Close"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-5 py-5">
              {chatReady ? (
                <button
                  type="button"
                  onClick={() => {
                    openProviderChat();
                    setOpen(false);
                  }}
                  className={`${primaryButtonClasses} w-full min-h-12 py-3.5`}
                >
                  Open live chat
                </button>
              ) : (
                <p className="text-center text-sm text-muted">
                  Set{" "}
                  <code className="rounded-[var(--ds-radius-sm)] bg-muted/40 px-1.5 py-0.5 text-xs">
                    NEXT_PUBLIC_CRISP_WEBSITE_ID
                  </code>{" "}
                  in{" "}
                  <code className="rounded-[var(--ds-radius-sm)] bg-muted/40 px-1.5 py-0.5 text-xs">
                    .env.local
                  </code>
                  , restart the dev server,
                  and reload.
                </p>
              )}
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-brand-white shadow-lg ring-2 ring-brand-white/35 transition hover:bg-brand-gold-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
