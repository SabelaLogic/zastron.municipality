import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { answers, matchAnswers } from "@/lib/civic";
import { t } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Desk({ onClose }: { onClose: () => void }) {
  const { lang } = usePrefs();
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState("");
  const hits = useMemo(() => (asked ? matchAnswers(asked) : answers.slice(0, 4)), [asked]);

  return (
    <div className="no-print fixed inset-0 z-40 flex items-end justify-center bg-ink/40 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="desk-title"
        className="flex max-h-[88vh] w-full max-w-xl flex-col border border-line bg-surface"
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
          <div>
            <h2 id="desk-title" className="font-serif text-2xl">
              {t(lang, "desk.title")}
            </h2>
            <p className="mt-1 text-sm text-muted">{t(lang, "desk.lede")}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center border border-line"
          >
            <X className="size-5" />
            <span className="sr-only">{t(lang, "desk.close")}</span>
          </button>
        </div>
        <form
          className="flex gap-2 border-b border-line p-4"
          onSubmit={(e) => {
            e.preventDefault();
            setAsked(q);
          }}
        >
          <label htmlFor="desk-q" className="sr-only">
            {t(lang, "desk.placeholder")}
          </label>
          <input
            id="desk-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t(lang, "desk.placeholder")}
            className="h-12 min-w-0 flex-1 border border-line bg-paper px-3 text-base"
          />
          <button type="submit" className="h-12 bg-navy px-4 text-sm text-navy-ink">
            {t(lang, "desk.ask")}
          </button>
        </form>
        <ul className="overflow-auto p-4">
          {hits.map((item) => (
            <li key={item.id} className="border-b border-line py-4 last:border-b-0">
              <button
                type="button"
                className="text-left font-bold text-navy"
                onClick={() => {
                  setQ(item.q[lang]);
                  setAsked(item.q.en);
                }}
              >
                {item.q[lang]}
              </button>
              <p className="mt-2 text-sm leading-relaxed">{item.a[lang]}</p>
              <p className="mt-2 text-sm text-muted">
                {t(lang, "desk.source")}: {item.source}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
