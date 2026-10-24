import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  SAMPLE_ACCOUNTS,
  SAMPLE_ROSTER,
  makeRef,
  tasks,
  type TaskGroup,
} from "@/lib/civic";
import { t, type CopyKey } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export const Route = createFileRoute("/services")({ component: Services });

const GROUPS: { id: TaskGroup; key: CopyKey }[] = [
  { id: "money", key: "group.money" },
  { id: "water", key: "group.water" },
  { id: "waste", key: "group.waste" },
  { id: "land", key: "group.land" },
  { id: "social", key: "group.social" },
];

function Services() {
  const { lang } = usePrefs();
  const hash = useRouterState({ select: (s) => s.location.hash }).replace(/^#/, "");
  const initial = tasks.some((task) => task.id === hash) ? hash : tasks[0].id;
  const [current, setCurrent] = useState(initial);

  useEffect(() => {
    if (tasks.some((task) => task.id === hash)) setCurrent(hash);
  }, [hash]);

  const task = tasks.find((item) => item.id === current) ?? tasks[0];

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-12 lg:py-12">
      <div className="lg:col-span-4">
        <h1 className="font-serif text-4xl">{t(lang, "services.title")}</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t(lang, "services.lede")}</p>
        <div className="mt-6">
          <p className="text-sm font-bold">{t(lang, "services.pick")}</p>
          {GROUPS.map((group) => (
            <div key={group.id} className="mt-4">
              <h2 className="text-sm font-bold tracking-wide text-wheat uppercase">{t(lang, group.key)}</h2>
              <ul className="mt-1">
                {tasks
                  .filter((item) => item.group === group.id)
                  .map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setCurrent(item.id);
                          history.replaceState(null, "", `#${item.id}`);
                        }}
                        aria-current={item.id === task.id ? "true" : undefined}
                        className={
                          "block w-full px-2 py-3 text-left text-sm " +
                          (item.id === task.id ? "bg-navy text-navy-ink" : "hover:bg-surface")
                        }
                      >
                        {item.label[lang]}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-line bg-surface p-5 lg:col-span-8">
        <p className="text-sm font-bold text-wheat">{t(lang, "services.demo")}</p>
        <h2 className="mt-2 font-serif text-3xl">{task.label[lang]}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{task.summary[lang]}</p>
        <div className="mt-6">
          <TaskBody id={task.id} />
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="block text-sm font-bold">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = "mt-1 h-12 w-full border border-line bg-paper px-3 text-base text-ink";

function TaskBody({ id }: { id: string }) {
  if (id === "account") return <AccountTask />;
  if (id === "fault") return <FaultTask />;
  if (id === "refuse") return <RefuseTask />;
  if (id === "indigent") return <IndigentTask />;
  if (id === "notice") return <NoticeTask />;
  if (id === "plans") return <PlansTask />;
  if (id === "burial") return <BurialTask />;
  return <PaiaTask />;
}

function AccountTask() {
  const [no, setNo] = useState("");
  const [looked, setLooked] = useState("");
  const hit = useMemo(
    () => SAMPLE_ACCOUNTS.find((a) => a.no === looked.replace(/\s/g, "")),
    [looked],
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLooked(no.trim());
      }}
    >
      <Field id="acc" label="Account number">
        <input id="acc" value={no} onChange={(e) => setNo(e.target.value)} className={inputCls} inputMode="numeric" />
      </Field>
      <p className="mt-2 text-sm text-muted">Try sample 1842 or 0904. Any other number returns “not on the sample book”.</p>
      <button type="submit" className="mt-4 h-12 bg-navy px-4 text-sm text-navy-ink">
        Look up sample
      </button>
      {looked && hit && (
        <dl className="mt-6 grid grid-cols-2 gap-3 border border-line p-4 text-sm">
          <dt className="text-muted">Name</dt>
          <dd>{hit.name}</dd>
          <dt className="text-muted">Stand</dt>
          <dd>{hit.stand}</dd>
          <dt className="text-muted">Services</dt>
          <dd>{hit.services}</dd>
          <dt className="text-muted">Sample balance</dt>
          <dd>R {hit.balance}</dd>
          <dt className="col-span-2 text-muted">{hit.note} A live figure waits until Finance can stand behind the book. The 2024/25 audit was a disclaimer.</dt>
        </dl>
      )}
      {looked && !hit && (
        <p className="mt-4 text-sm" role="status">
          {looked} is not on the sample book. In production this would say “we cannot show a balance until Finance confirms the account”, not a guessed amount.
        </p>
      )}
    </form>
  );
}

function FaultTask() {
  const [area, setArea] = useState("Matlakeng");
  const [kind, setKind] = useState("No water");
  const [detail, setDetail] = useState("");
  const [ref, setRef] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const next = makeRef("ZTN");
        setRef(next);
        const prev = JSON.parse(localStorage.getItem("tbg-faults") || "[]") as unknown[];
        prev.unshift({ ref: next, area, kind, detail, at: new Date().toISOString() });
        localStorage.setItem("tbg-faults", JSON.stringify(prev.slice(0, 20)));
      }}
    >
      <Field id="area" label="Area">
        <select id="area" value={area} onChange={(e) => setArea(e.target.value)} className={inputCls}>
          {["Zastron dorp", "Matlakeng", "Rouxville", "Smithfield"].map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </Field>
      <Field id="kind" label="What is wrong">
        <select id="kind" value={kind} onChange={(e) => setKind(e.target.value)} className={inputCls}>
          {["No water", "Dirty water", "Sewer spill", "No power", "Street light", "Illegal dumping"].map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </Field>
      <Field id="detail" label="Where, in a sentence">
        <textarea
          id="detail"
          required
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="mt-1 min-h-28 w-full border border-line bg-paper p-3 text-base"
        />
      </Field>
      <button type="submit" className="mt-4 h-12 bg-navy px-4 text-sm text-navy-ink">
        Log sample fault
      </button>
      {ref && (
        <p className="mt-4 text-sm" role="status">
          Reference <strong>{ref}</strong>. Stored on this device only. A live desk would route the fault to technical services in the right town and send the number by SMS.
        </p>
      )}
    </form>
  );
}

function RefuseTask() {
  return (
    <div>
      <table className="w-full text-left text-sm">
        <caption className="mb-2 text-left text-muted">
          Illustrative roster. Do not put a bin out on the strength of this table.
        </caption>
        <thead>
          <tr className="border-b border-line">
            <th className="py-2 font-bold">Area</th>
            <th className="py-2 font-bold">Sample day</th>
            <th className="py-2 font-bold">Status</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_ROSTER.map((row) => (
            <tr key={row.area} className="border-b border-line">
              <td className="py-3">{row.area}</td>
              <td className="py-3">{row.day}</td>
              <td className="py-3 text-muted">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm leading-relaxed">
        In the Auditor-General’s 2023–24 tables, weekly removal reached 66.4% of Mohokare households. The live portal should publish the technical department’s real round, and say when a truck did not come.
      </p>
    </div>
  );
}

function IndigentTask() {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
        <li>South African identity document of the applicant.</li>
        <li>Proof of household income, or a sworn statement if there is none.</li>
        <li>Proof of residence in Mohokare — a letter, a statement, or the ward councillor’s confirmation.</li>
        <li>The municipal account number, if one exists. Many qualifying households are not on the current book.</li>
      </ol>
      <Field id="who" label="Applicant name">
        <input id="who" required className={inputCls} name="who" />
      </Field>
      <Field id="place" label="Where you live">
        <input id="place" required className={inputCls} name="place" placeholder="Matlakeng, Zastron, Rouxville, Smithfield" />
      </Field>
      <button type="submit" className="mt-4 h-12 bg-navy px-4 text-sm text-navy-ink">
        Save sample application
      </button>
      {done && (
        <p className="mt-4 text-sm" role="status">
          Saved on this device. It was not sent to the municipality. The official site already asks households to apply and to re-register. A live counter would send this list to that desk, not keep it in the phone.
        </p>
      )}
    </form>
  );
}

function NoticeTask() {
  return (
    <p className="text-sm leading-relaxed">
      Notices on the home page are taken from the audit report, the signed financial statements, and the notices already listed on mohokare.gov.za. They are not sample press releases. A production notices desk lets communications publish, date, translate and expire a notice without calling a developer. Council records stay in English; the alert can go out in four languages.
    </p>
  );
}

function PlansTask() {
  return (
    <div className="text-sm leading-relaxed">
      <p>For a house plan or a stand enquiry, the counter still needs:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>The applicant’s identity document and contact number.</li>
        <li>The property description — erf, farm, or township stand.</li>
        <li>A site plan and, for building work, drawings signed by a competent person.</li>
        <li>The current tariff. It is not printed here, because a wrong fee on a public site is worse than no fee.</li>
      </ul>
      <p className="mt-3">
        Lodge at the Civic Centre, Hoofd Street, or start the paper trail under Speak to us. Zoning and land-use decisions stay with Council.
      </p>
    </div>
  );
}

function BurialTask() {
  return (
    <div className="text-sm leading-relaxed">
      <p>Burial bookings are taken at the Civic Centre, Hoofd Street, not online in this phase. Bring:</p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>The death certificate, or the notice from the hospital or police.</li>
        <li>The identity document of the deceased and of the person arranging the burial.</li>
        <li>The place the family asks for — Zastron, Matlakeng, Rouxville or Smithfield — and the day.</li>
      </ul>
      <p className="mt-3">Telephone 051 673 9600 if the family is travelling in. Do not let a funeral wait on a website.</p>
    </div>
  );
}

function PaiaTask() {
  const [ref, setRef] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setRef(makeRef("PAIA"));
      }}
    >
      <p className="text-sm leading-relaxed">
        The request goes to the municipal manager, Mr L. Mkhwane. Name the record, the years, and how you want it. Acknowledgement is a statutory duty. This form stores a sample reference only.
      </p>
      <Field id="record" label="Which record">
        <input id="record" required className={inputCls} placeholder="Example: indigent policy currently in force" />
      </Field>
      <button type="submit" className="mt-4 h-12 bg-navy px-4 text-sm text-navy-ink">
        Create sample PAIA reference
      </button>
      {ref && (
        <p className="mt-4 text-sm" role="status">
          Reference <strong>{ref}</strong>. Not lodged with the municipality.
        </p>
      )}
    </form>
  );
}
