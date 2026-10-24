import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { tasks } from "@/lib/civic";
import { t, type CopyKey } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

const PAGES: { href: string; key: CopyKey; keywords: string[] }[] = [
  { href: "/town", key: "nav.town", keywords: ["history", "town", "dorp", "toropo", "idolophu", "madikgetla", "merino", "chronicle"] },
  { href: "/council", key: "nav.council", keywords: ["mayor", "council", "raad", "lekgotla", "ibhunga", "mokomela", "tseletsele"] },
  { href: "/engage", key: "nav.engage", keywords: ["contact", "phone", "office", "skakel", "kopanya", "nxibelelana", "louw"] },
  { href: "/brief", key: "brief.nav", keywords: ["quotation", "quote", "proposal", "brief", "tender", "price", "kwotasie", "pak"] },
];

export function SearchField({ id }: { id: string }) {
  const { lang } = usePrefs();
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listId = `${id}-list`;

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const taskHits = tasks
      .filter((task) => {
        if (!needle) return true;
        const hay = [task.keywords.join(" "), ...Object.values(task.label), ...Object.values(task.summary)]
          .join(" ")
          .toLowerCase();
        return needle.split(/\s+/).every((part) => hay.includes(part));
      })
      .slice(0, 6)
      .map((task) => ({
        href: `/services#${task.id}`,
        label: task.label[lang],
        summary: task.summary[lang],
      }));

    const pageHits = PAGES.filter(
      (page) => !needle || page.keywords.some((k) => k.includes(needle) || needle.includes(k)),
    )
      .slice(0, 3)
      .map((page) => ({
        href: page.href,
        label: t(lang, page.key),
        summary: page.href,
      }));

    return needle ? [...taskHits, ...pageHits].slice(0, 7) : taskHits.slice(0, 5);
  }, [q, lang]);

  function go(href: string) {
    setOpen(false);
    setQ("");
    const [path, hash] = href.split("#");
    void navigate({ to: path || "/", hash: hash || undefined });
  }

  return (
    <div className="relative min-w-0 flex-1">
      <label htmlFor={id} className="sr-only">
        {t(lang, "search.label")}
      </label>
      <input
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        value={q}
        placeholder={t(lang, "search.placeholder")}
        className="h-12 w-full border border-line bg-paper px-3 text-base text-ink placeholder:text-muted"
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          setActive(0);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          window.setTimeout(() => setOpen(false), 160);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            setActive((n) => Math.min(n + 1, Math.max(results.length - 1, 0)));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((n) => Math.max(n - 1, 0));
          } else if (e.key === "Enter" && open && results[active]) {
            e.preventDefault();
            go(results[active].href);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
      />
      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={t(lang, "search.results")}
          className="absolute z-30 mt-1 max-h-80 w-full overflow-auto border border-line bg-surface"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-muted">{t(lang, "search.empty")}</li>
          ) : (
            results.map((item, i) => (
              <li key={item.href + item.label} role="option" aria-selected={i === active}>
                <button
                  type="button"
                  className={"block w-full px-3 py-3 text-left " + (i === active ? "bg-paper" : "bg-surface")}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => go(item.href)}
                >
                  <span className="block text-sm font-bold text-ink">{item.label}</span>
                  <span className="block text-sm text-muted">{item.summary}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
