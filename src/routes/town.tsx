import { createFileRoute, Link } from "@tanstack/react-router";
import { facts, timeline } from "@/lib/civic";
import { t } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export const Route = createFileRoute("/town")({ component: Town });

function Town() {
  const { lang } = usePrefs();
  return (
    <article>
      <header className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          <div>
            <p className="text-sm font-bold tracking-wide text-wheat uppercase">{t(lang, "town.kicker")}</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl">{t(lang, "town.title")}</h1>
            <p className="mt-4 text-base leading-relaxed">{t(lang, "town.lede")}</p>
          </div>
          <figure>
            <img
              src="/sights/eye-poster.jpg"
              alt="Sandstone cliffs of Aasvoëlberg above Zastron, with the opening known as the Eye"
              className="w-full border border-line"
            />
            <figcaption className="mt-2 text-sm text-muted">{t(lang, "town.photo")}</figcaption>
          </figure>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-serif text-3xl">{t(lang, "town.facts")}</h2>
        <dl className="mt-6 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-surface p-4">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="mt-1 font-serif text-2xl">{f.value}</dd>
              <dd className="text-sm text-muted">{f.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-4">
        <h2 className="font-serif text-3xl">Chronicle</h2>
        <p className="mt-2 text-sm text-muted">
          Written for Council in English, the language of the record. The research stack — chronicle, the gap between the two websites, and what a resident must be able to finish — is in the briefing pack.
        </p>
        <ol className="mt-8 border-l border-line">
          {timeline.map((item) => (
            <li key={item.year + item.title} className="py-4 pl-6">
              <p className="text-sm font-bold text-wheat">{item.year}</p>
              <h3 className="mt-1 font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ol>
        <Link to="/brief" className="mt-6 inline-flex h-12 items-center bg-navy px-4 text-sm text-navy-ink">
          {t(lang, "footer.brief")}
        </Link>
      </section>
    </article>
  );
}
