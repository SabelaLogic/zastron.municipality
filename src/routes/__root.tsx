import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PrefsProvider } from "@/lib/prefs";
import { Shell } from "@/components/shell";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zastron Civic — Mohokare" },
      {
        name: "description",
        content:
          "Presentation concept for a constituent portal for Zastron, seat of Mohokare Local Municipality, Free State.",
      },
      { name: "theme-color", content: "#1E3A5F" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,650;1,6..72,500&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <PrefsProvider>
            <Shell>
              <Outlet />
            </Shell>
          </PrefsProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
