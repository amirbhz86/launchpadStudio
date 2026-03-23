"use client";

import { useEffect } from "react";
import { getTawkIds } from "@/lib/chatConfig";

/**
 * Loads Crisp or Tawk (same embed as Tawk’s “before </body>” snippet). Widget starts hidden
 * so <ChatLauncher /> opens it—no duplicate bubbles.
 *
 * Tawk defaults match your dashboard embed; override via .env.local if the widget changes.
 * Crisp wins if NEXT_PUBLIC_CRISP_WEBSITE_ID is set.
 */

declare global {
  interface Window {
    $crisp?: Array<unknown[] | string>;
    CRISP_WEBSITE_ID?: string;
    Tawk_API?: {
      onLoad?: () => void;
      hideWidget?: () => void;
      maximize?: () => void;
      showWidget?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export default function LiveChat() {
  useEffect(() => {
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    const { property: tawkProperty, widget: tawkWidget } = getTawkIds();

    if (crispId) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = crispId;
      const s = document.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      s.onload = () => {
        window.$crisp?.push(["do", "chat:hide"]);
      };
      document.getElementsByTagName("head")[0].appendChild(s);
      return;
    }

    if (document.getElementById("tawkto-embed-script")) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function () {
      window.Tawk_API?.hideWidget?.();
    };
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.id = "tawkto-embed-script";
    s1.async = true;
    s1.src = `https://embed.tawk.to/${tawkProperty}/${tawkWidget}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    const s0 = document.getElementsByTagName("script")[0];
    if (s0?.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.body.appendChild(s1);
    }
  }, []);

  return null;
}
