import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Desk } from "@/components/desk";
import { SearchField } from "@/components/search-field";
import { SightStage, SightStrip, sights } from "@/components/sights";
import { deskQuote, notices, tasks } from "@/lib/civic";
import { t } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { lang } = usePrefs();
  const [desk, setDesk] = useState(false);
  const [sight, setSight] = useState(0);
  const [paused, setPaused] = useState(false);
  const lead = tasks.slice(0, 6);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setSight((n) => (n + 1) % sights.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused, sight]);

  function choose(next: number) {
    setSight(next);
    document.getElementById("sights")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <div id="sights">
        <SightStage
          lang={lang}
          index={sight}
          paused={paused}
          onSelect={setSight}
          onPause={() => setPaused((v) => !v)}
        >
          <div className="sight-panel p-5 md:col-span-7 md:p-8">
            <p className="text-sm font-bold tracking-wide text-wheat uppercase">{t(lang, "hero.kicker")}</p>
            <h1 className="mt-3 max-w-xl font-serif text-4xl text-ink md:text-5xl">{t(lang, "hero.title")}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink">{t(lang, "hero.lede")}</p>
          </div>
          <div className="sight-panel p-4 md:col-span-5">
            <p className="mb-2 text-sm font-bold text-ink">{t(lang, "search.label")}</p>
            <SearchField id="hero-search" />
            <p className="mt-2 text-sm text-muted">{t(lang, "search.hint")}</p>
            <button
              type="button"
              onClick={() => setDesk(true)}
              className="mt-4 h-12 w-full bg-navy text-sm text-navy-ink"
            >
              {t(lang, "hero.ask")}
            </button>
          </div>
        </SightStage>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-serif text-3xl">{t(lang, "home.tasks")}</h2>
        <ol className="mt-6 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {lead.map((task, i) => (
            <li key={task.id} className="bg-surface">
              <Link to="/services" hash={task.id} className="flex h-full flex-col p-5">
                <span className="font-serif text-2xl text-wheat">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-3 text-lg font-bold text-ink">{task.label[lang]}</span>
                <span className="mt-2 text-sm leading-relaxed text-muted">{task.summary[lang]}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <SightStrip lang={lang} index={sight} onSelect={choose} />

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-serif text-3xl">{t(lang, "status.title")}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">{t(lang, "status.note")}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {(["water", "power", "office"] as const).map((key) => (
              <article key={key} className="border-t-2 border-navy pt-3">
                <h3 className="font-serif text-xl">{t(lang, `status.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed">{t(lang, `status.${key}.body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 md:grid-cols-5">
        <img
          src="/people/mkhwane.webp"
          loading="lazy" decoding="async"
          alt="Mr L. Mkhwane, municipal manager"
          className="aspect-[3/4] w-full border border-line object-cover object-top md:col-span-2"
        />
        <div className="md:col-span-3">
          <p className="text-sm font-bold tracking-wide text-wheat uppercase">From the desk</p>
          <blockquote className="mt-3 font-serif text-2xl leading-snug">“{deskQuote.text[lang]}”</blockquote>
          <p className="mt-4 text-sm font-bold">Mr L. Mkhwane · Municipal Manager</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="font-serif text-3xl">{t(lang, "home.notices")}</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {notices.map((n) => (
              <li key={n.title} className="py-4">
                <p className="text-sm font-bold text-wheat">{n.date}</p>
                <h3 className="mt-1 text-lg font-bold">{n.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{n.body}</p>
                {n.href && (
                  <a href={n.href} className="mt-2 inline-block text-sm text-navy underline" target="_blank" rel="noreferrer">
                    Open the source
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-2">
          <h2 className="font-serif text-3xl">{t(lang, "home.why")}</h2>
          <p className="mt-3 text-sm leading-relaxed">{t(lang, "home.why.body")}</p>
          <p className="mt-6 font-serif text-2xl">{t(lang, "home.motto")}</p>
          <p className="text-sm text-muted">{t(lang, "home.motto.gloss")}</p>
          <Link to="/town" className="mt-6 inline-flex h-12 items-center bg-navy px-4 text-sm text-navy-ink">
            {t(lang, "nav.town")}
          </Link>
        </aside>
      </section>
      {desk && <Desk onClose={() => setDesk(false)} />}
    </div>
  );
}
