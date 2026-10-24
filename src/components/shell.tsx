import { Link, useRouterState } from "@tanstack/react-router";
import { Contrast, Menu, Search, Type, X } from "lucide-react";
import { useEffect, useId, useState, type ReactNode } from "react";
import { Desk } from "@/components/desk";
import { SearchField } from "@/components/search-field";
import { t } from "@/lib/copy";
import { LANGS, usePrefs } from "@/lib/prefs";

const NAV = [
  { to: "/", key: "nav.home" as const, exact: true },
  { to: "/services", key: "nav.services" as const, exact: false },
  { to: "/town", key: "nav.town" as const, exact: false },
  { to: "/council", key: "nav.council" as const, exact: false },
  { to: "/engage", key: "nav.engage" as const, exact: false },
];

function Mark() {
  return (
    <svg viewBox="0 0 48 48" className="size-9 shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" fill="var(--color-navy)" />
      <path d="M8 36 V16 H16 L24 28 L32 16 H40 V36 H33 V24 L24 36 L15 24 V36 Z" fill="var(--color-paper)" />
      <rect x="8" y="39" width="32" height="2" fill="var(--color-wheat)" />
    </svg>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const { lang, setLang, contrast, toggleContrast, large, toggleLarge, banner, dismissBanner } =
    usePrefs();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [desk, setDesk] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:bg-navy focus:px-4 focus:py-3 focus:text-navy-ink"
      >
        {t(lang, "skip")}
      </a>

      {banner && (
        <div className="no-print border-b border-line bg-navy text-navy-ink">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2 text-sm">
            <p className="min-w-0 flex-1">{t(lang, "banner.body")}</p>
            <Link to="/brief" className="underline underline-offset-2">
              {t(lang, "banner.pack")}
            </Link>
            <button type="button" onClick={dismissBanner} className="underline underline-offset-2">
              {t(lang, "banner.dismiss")}
            </button>
          </div>
        </div>
      )}

      <header className="no-print border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <Mark />
            <span className="min-w-0">
              <span className="block font-serif text-xl leading-none text-ink">Zastron</span>
              <span className="block text-sm text-muted">Mohokare · FS163</span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = item.exact ? path === item.to : path.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={
                    "px-3 py-2 text-sm " + (active ? "bg-navy text-navy-ink" : "text-ink hover:bg-paper")
                  }
                >
                  {t(lang, item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <label className="sr-only" htmlFor="lang">
              {t(lang, "lang.label")}
            </label>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value as typeof lang)}
              className="h-11 border border-line bg-paper px-2 text-sm text-ink"
            >
              {LANGS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.endonym}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={toggleContrast}
              aria-pressed={contrast}
              className="inline-flex size-11 items-center justify-center border border-line bg-paper text-ink"
              title={contrast ? t(lang, "contrast.on") : t(lang, "contrast")}
            >
              <Contrast className="size-5" aria-hidden="true" />
              <span className="sr-only">
                {contrast ? t(lang, "contrast.on") : t(lang, "contrast")}
              </span>
            </button>
            <button
              type="button"
              onClick={toggleLarge}
              aria-pressed={large}
              className="inline-flex size-11 items-center justify-center border border-line bg-paper text-ink"
              title={large ? t(lang, "text.size.on") : t(lang, "text.size")}
            >
              <Type className="size-5" aria-hidden="true" />
              <span className="sr-only">{large ? t(lang, "text.size.on") : t(lang, "text.size")}</span>
            </button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-line bg-paper text-ink lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">{open ? t(lang, "nav.close") : t(lang, "nav.menu")}</span>
            </button>
          </div>

          {path !== "/" && (
            <div className="hidden w-full items-center gap-2 lg:flex">
              <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
              <SearchField id="header-search" />
              <button
                type="button"
                onClick={() => setDesk(true)}
                className="h-11 shrink-0 border border-navy bg-navy px-4 text-sm text-navy-ink"
              >
                {t(lang, "hero.ask")}
              </button>
            </div>
          )}
        </div>
        {path !== "/" && (
          <div className="mx-auto flex max-w-6xl gap-2 px-4 pb-3 lg:hidden">
            <SearchField id="header-search-mobile" />
            <button
              type="button"
              onClick={() => setDesk(true)}
              className="h-12 shrink-0 bg-navy px-3 text-sm text-navy-ink"
            >
              {t(lang, "desk.ask")}
            </button>
          </div>
        )}

        {open && (
          <div id={menuId} className="border-t border-line px-4 py-3 lg:hidden">
            <nav className="grid gap-1" aria-label="Primary">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className="px-2 py-3 text-base">
                  {t(lang, item.key)}
                </Link>
              ))}
              <Link to="/brief" className="px-2 py-3 text-base">
                {t(lang, "brief.nav")}
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main id="content">{children}</main>

      <footer className="no-print mt-16 border-t border-line bg-navy text-navy-ink">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">Zastron</p>
            <p className="mt-2 text-sm opacity-90">
              Civic Centre · Hoofd Street · 9950
              <br />
              051 673 9600
            </p>
            <p className="mt-4 font-serif text-lg">Matlakeng</p>
          </div>
          <div className="text-sm leading-relaxed opacity-90">
            <p>{t(lang, "footer.prepared")}</p>
            <p className="mt-3">{t(lang, "footer.sources")}</p>
          </div>
          <div className="text-sm">
            <Link to="/brief" className="underline underline-offset-2">
              {t(lang, "footer.brief")}
            </Link>
            <p className="mt-3 opacity-80">Sabela Logic Holdings · Zastron specimen</p>
            <p className="mt-1 opacity-80">Research shown 24 October 2026 · not a supply-chain bid</p>
          </div>
        </div>
      </footer>

      {desk && <Desk onClose={() => setDesk(false)} />}
    </div>
  );
}
