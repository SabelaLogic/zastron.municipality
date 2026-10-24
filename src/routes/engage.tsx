import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { makeRef } from "@/lib/civic";
import { t } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export const Route = createFileRoute("/engage")({ component: Engage });

function Engage() {
  const { lang } = usePrefs();
  const [ref, setRef] = useState("");

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-8 md:grid-cols-2 md:py-12">
      <div>
        <h1 className="font-serif text-4xl md:text-5xl">{t(lang, "engage.title")}</h1>
        <p className="mt-4 text-base leading-relaxed">{t(lang, "engage.lede")}</p>
        <h2 className="mt-8 font-serif text-2xl">{t(lang, "engage.channels")}</h2>
        <dl className="mt-4 text-sm">
          <div className="grid grid-cols-3 gap-2 border-t border-line py-3">
            <dt className="text-muted">Visit</dt>
            <dd className="col-span-2">Civic Centre, Hoofd Street, Zastron, 9950</dd>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-line py-3">
            <dt className="text-muted">Post</dt>
            <dd className="col-span-2">PO Box 20, Zastron, 9950</dd>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-line py-3">
            <dt className="text-muted">Phone</dt>
            <dd className="col-span-2">
              <a className="text-navy underline" href="tel:+27516739600">
                051 673 9600
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-b border-line py-3">
            <dt className="text-muted">Write</dt>
            <dd className="col-span-2">info@mohokare.gov.za</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Published resident-query mobiles on third-party directories were not copied here. They go stale, and a wrong emergency number is a harm. Council should publish one maintained list.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/services" hash="fault" className="inline-flex h-12 items-center bg-navy px-4 text-sm text-navy-ink">
            Report a fault
          </Link>
          <Link to="/services" hash="indigent" className="inline-flex h-12 items-center border border-navy px-4 text-sm">
            Indigent support
          </Link>
        </div>
      </div>

      <form
        className="border border-line bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          const next = makeRef("NOTE");
          setRef(next);
          const form = e.currentTarget;
          const data = Object.fromEntries(new FormData(form).entries());
          const prev = JSON.parse(localStorage.getItem("tbg-notes") || "[]") as unknown[];
          prev.unshift({ ref: next, ...data, at: new Date().toISOString() });
          localStorage.setItem("tbg-notes", JSON.stringify(prev.slice(0, 20)));
          form.reset();
        }}
      >
        <h2 className="font-serif text-2xl">{t(lang, "engage.send")}</h2>
        <label className="mt-4 block text-sm font-bold" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required className="mt-1 h-12 w-full border border-line bg-paper px-3" />
        <label className="mt-4 block text-sm font-bold" htmlFor="place">
          Place
        </label>
        <input id="place" name="place" required className="mt-1 h-12 w-full border border-line bg-paper px-3" placeholder="Matlakeng" />
        <label className="mt-4 block text-sm font-bold" htmlFor="about">
          What it is about
        </label>
        <select id="about" name="about" className="mt-1 h-12 w-full border border-line bg-paper px-3">
          <option>Account</option>
          <option>Water</option>
          <option>Electricity</option>
          <option>Refuse</option>
          <option>Indigent support</option>
          <option>Something else</option>
        </select>
        <label className="mt-4 block text-sm font-bold" htmlFor="message">
          Message
        </label>
        <textarea id="message" name="message" required className="mt-1 min-h-32 w-full border border-line bg-paper p-3" />
        <button type="submit" className="mt-4 h-12 bg-navy px-4 text-sm text-navy-ink">
          Keep a sample reference
        </button>
        {ref && (
          <p className="mt-4 text-sm" role="status">
            {t(lang, "engage.sent")} <strong>{ref}</strong>.
          </p>
        )}
        <p className="mt-4 text-sm text-muted">
          Nothing on this form leaves the browser. A live channel needs a named official, a retention rule, and POPIA wording Council has approved.
        </p>
      </form>
    </div>
  );
}
