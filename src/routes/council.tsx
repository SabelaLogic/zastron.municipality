import { createFileRoute } from "@tanstack/react-router";
import { deskQuote, leaders, publicDocs } from "@/lib/civic";
import { t } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export const Route = createFileRoute("/council")({ component: Council });

const towns = ["Zastron (seat, with Matlakeng)", "Rouxville", "Smithfield"];

function Council() {
  const { lang } = usePrefs();
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <h1 className="max-w-3xl font-serif text-4xl md:text-5xl">{t(lang, "council.title")}</h1>
      <p className="mt-4 max-w-3xl text-base leading-relaxed">{t(lang, "council.lede")}</p>

      <figure className="mt-8 grid items-start gap-6 border border-line bg-surface p-4 md:grid-cols-5 md:p-6">
        <img
          src="/people/mkhwane.webp"
          alt="Mr L. Mkhwane, municipal manager"
          className="aspect-[3/4] w-full border border-line object-cover object-top md:col-span-2"
        />
        <figcaption className="md:col-span-3">
          <p className="text-sm font-bold tracking-wide text-wheat uppercase">From the desk</p>
          <blockquote className="mt-3 font-serif text-2xl leading-snug text-ink">“{deskQuote.text[lang]}”</blockquote>
          <p className="mt-4 text-sm font-bold">Mr L. Mkhwane</p>
          <p className="text-sm text-muted">Municipal Manager</p>
        </figcaption>
      </figure>

      <ul className="mt-8 grid gap-px bg-line md:grid-cols-2">
        {leaders.map((person) => (
          <li key={person.role} className="bg-surface p-5">
            <p className="text-sm font-bold text-wheat">{person.role}</p>
            <h2 className="mt-1 font-serif text-2xl">{person.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{person.note}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="font-serif text-3xl">{t(lang, "council.docs")}</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {publicDocs.map((doc) => (
              <li key={doc.name} className="py-4">
                <a href={doc.href} className="font-bold text-navy underline" target="_blank" rel="noreferrer">
                  {doc.name}
                </a>
                <p className="mt-1 text-sm text-muted">{doc.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-2">
          <h2 className="font-serif text-3xl">Three towns, one pattern</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            This presentation is cut for the seat. The same tasks travel to Rouxville and Smithfield. A portal that only knows Hoofd Street is unfinished.
          </p>
          <ul className="mt-4 columns-2 text-sm">
            {towns.map((name) => (
              <li key={name} className="py-1">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed">
            Party numbers are not printed here. The official site has a Council page; this specimen does not invent a composition.
          </p>
        </aside>
      </section>
    </div>
  );
}
