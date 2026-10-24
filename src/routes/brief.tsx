import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/brief")({ component: Brief });

const DOCS = [
  { id: "cat", label: "Catalogue" },
  { id: "chronicle", label: "DOC-01 Chronicle" },
  { id: "case", label: "DOC-02 The case" },
  { id: "work", label: "DOC-03 What it must do" },
] as const;

type DocId = (typeof DOCS)[number]["id"];

function Brief() {
  const [doc, setDoc] = useState<DocId>("cat");

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-12 lg:py-12">
      <aside className="no-print lg:col-span-3">
        <p className="text-sm font-bold tracking-wide text-wheat uppercase">For Council</p>
        <h1 className="mt-2 font-serif text-3xl">Briefing pack</h1>
        <p className="mt-2 text-sm text-muted">Zastron specimen · 24 October 2026</p>
        <nav className="mt-4 grid" aria-label="Documents">
          {DOCS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setDoc(item.id)}
              aria-current={doc === item.id ? "true" : undefined}
              className={
                "px-3 py-3 text-left text-sm " + (doc === item.id ? "bg-navy text-navy-ink" : "hover:bg-surface")
              }
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button type="button" onClick={() => window.print()} className="mt-4 h-12 w-full border border-navy text-sm">
          Print this pack
        </button>
      </aside>
      <article className="border border-line bg-surface p-5 sm:p-8 lg:col-span-9">
        {doc === "cat" && <Catalogue />}
        {doc === "chronicle" && <Chronicle />}
        {doc === "case" && <CaseDoc />}
        {doc === "work" && <WorkDoc />}
      </article>
    </div>
  );
}

function Catalogue() {
  return (
    <div>
      <p className="text-sm font-bold text-wheat">Document stack</p>
      <h2 className="mt-2 font-serif text-4xl">Zastron, and why Mohokare needs a constituent portal</h2>
      <p className="mt-4 text-sm leading-relaxed">
        Prepared by Sabela Logic Holdings from public records, for the attention of the executive mayor, the acting
        municipal manager, and the head of communications at Mohokare Local Municipality. This is a research specimen.
        It is not a bid under the supply-chain rules, and it does not name a price.
      </p>
      <ol className="mt-8 divide-y divide-line border-y border-line">
        <li className="py-4">
          <h3 className="font-serif text-2xl">DOC-01 — Chronicle</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            From San rock art between the Caledon and the Orange, through Verliesfontein, the Eye, Matlakeng, Rouxville
            and Smithfield, to a disclaimer of audit opinion in February 2026.
          </p>
        </li>
        <li className="py-4">
          <h3 className="font-serif text-2xl">DOC-02 — The case</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Two websites already exist. One is official and department-shaped. One is a visitor directory. Neither lets
            a resident finish a task in Sesotho.
          </p>
        </li>
        <li className="py-4">
          <h3 className="font-serif text-2xl">DOC-03 — What the portal must do</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            The working pages in this specimen: tasks, languages, contrast, a plain-language desk that will not invent
            a balance, and the records a resident should be able to open.
          </p>
        </li>
      </ol>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        Office-bearer names in public directories do not agree. Nothing in this pack should be printed on a letterhead
        until Council confirms them. Nothing in the demonstration writes to a municipal system.
      </p>
    </div>
  );
}

function Chronicle() {
  return (
    <div className="text-sm leading-relaxed">
      <p className="font-bold text-wheat">DOC-01</p>
      <h2 className="mt-2 font-serif text-4xl">How the seat got here</h2>
      <p className="mt-4">
        Zastron sits at the foot of Aasvoëlberg, 2,207 metres, the highest peak in the Free State, about 30 kilometres
        from Lesotho. The mountain is named for the Cape vulture. The township under it is Matlakeng, Sesotho for the
        place of vultures. A hole about nine metres across in the cliff is Die Oog, the Eye, the town’s unofficial
        emblem. The legend belongs to Jan Hendrik de Winnaar. The rock is older than the legend.
      </p>
      <p className="mt-4">
        San communities used the caves between the Caledon and the Orange long before a town. Rock paintings, including
        those of the Hippopotamus Cave, are still on the farms. Smithfield was founded in 1848. Rouxville was founded in
        1863 on Zuurbult. Zastron was founded in 1875 on De Winnaar’s farm Verliesfontein, laid out in 1876, and named
        for Johanna Sibella Zastron, wife of President J. H. Brand. Rouxville opposed the new town. Municipal status
        came in 1881.
      </p>
      <p className="mt-4">
        The 2011 census counted 15,607 people in Zastron including Matlakeng. First languages there: Sesotho 69.2%,
        isiXhosa 22.4%, Afrikaans 5.1%. From 2000 the seat has carried three towns — Zastron, Rouxville and Smithfield —
        as Mohokare Local Municipality, FS163, in Xhariep. Mohokare is the Sesotho name of the Caledon. Municipal Money’s
        August 2024 profile puts the municipality at 34,146 people across about 8,785 square kilometres. An AGSA table
        for 2023–24 prints 36,968. The portal shows both, and does not pretend they are the same count.
      </p>
      <p className="mt-4">
        The registered office on the signed 2024/25 financial statements is the Civic Centre, Hoofd Street, Zastron,
        9950, PO Box 20. M. Mohale, acting, signed those statements on 31 August 2025. Cash and cash equivalents were
        stated at R2.24 million. On 17 February 2026 the Auditor-General disclaimed an opinion. Property, plant and
        equipment could not be confirmed, including an amount stated at R638.9 million. Published compilations also
        record disclaimers for 2022/23 and 2023/24. A website that offers a live account balance, on that book, would
        be a fiction.
      </p>
    </div>
  );
}

function CaseDoc() {
  return (
    <div className="text-sm leading-relaxed">
      <p className="font-bold text-wheat">DOC-02</p>
      <h2 className="mt-2 font-serif text-4xl">Two sites, and the sentence neither answers</h2>
      <p className="mt-4">
        mohokare.gov.za is the official site. It is in English. Navigation follows the organogram: About, Council,
        Procurement, Public Documents, then a department for the municipal manager, corporate services, community
        services, finance and technical services. “How do I” is a heading — Apply for, Pay for, Suppliers, Register for
        — without the tasks under it. What a resident can actually open is a pile of PDFs and one spreadsheet: the
        integrated development plan, valuation rolls, tariff lists spelled “tarrifs” in more than one title, meeting
        schedules, an indigent re-registration notice, new banking details, a consumer-portal notice, employment forms,
        and a PAIA manual. Duplicate notices sit in the same list. There is no language switch and no high-contrast
        path.
      </p>
      <p className="mt-4">
        zastron.co.za is not the municipality. It is a town directory for visitors: things to do, where to stay, where
        to eat, and a page of important numbers (police 051 673 9700, municipality 051 673 9600, hospital 051 673 1211,
        Centlec 086 007 6937, ambulance 10177, Eskom 051 673 1003, traffic 051 673 1155). It describes sandstone, San
        rock art and farming. It does not take an account query, an indigent application, or a fault in Matlakeng.
      </p>
      <p className="mt-4">
        The sentence a resident arrives with is not “Corporate Service Department”. It is “I want to pay, report,
        register, or read.” Seven in ten people in the Zastron count speak Sesotho at home. An English menu of PDFs is
        a noticeboard, not a service. Data on a prepaid phone at the Lesotho border is expensive, so the working pages
        lead with type and tasks. The mountain is in the hero because the town is under it, not because the site is a
        tourism reel.
      </p>
      <p className="mt-4">
        Service levels published in the 2023–24 audit tables: piped water inside the dwelling 91.9%, electricity for
        lighting 93.0%, a flush toilet 86.6%, weekly refuse removal 66.4%. The last of those is the one a roster must
        not hide. A capital note budgets about R11.2 million for a sewer network in Refengkhotso, Zastron/Matlakeng.
        That is a project on a profile, not a promise that the truck came on Monday.
      </p>
    </div>
  );
}

function WorkDoc() {
  return (
    <div className="text-sm leading-relaxed">
      <p className="font-bold text-wheat">DOC-03</p>
      <h2 className="mt-2 font-serif text-4xl">What these pages already do, and what they refuse to fake</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li>Eight tasks, reached from “I want to…”, not from a department name: account, fault, refuse day, indigent support, a council notice, a stand or building plan, a burial, and a PAIA request.</li>
        <li>English, Afrikaans, Sesotho and isiXhosa on one control in the header. Larger text and high contrast on the same bar.</li>
        <li>Search that suggests a task as the resident types, including the words metsi, vullis, amanzi and indigent.</li>
        <li>A plain-language desk that answers only from the published record, and says so. It will not invent a tariff.</li>
        <li>Sample balances, a sample refuse roster and sample reference numbers, labelled as samples, stored on the phone only.</li>
        <li>The Eye in the hero, with the cliff moving, and a smaller strip of sights underneath. The street and the veld are illustrations. The cliff photograph is the one published by South African History Online, and rights must be cleared before go-live.</li>
      </ul>
      <p className="mt-4">
        A production portal, after an award, would send the fault to a real desk, publish the technical department’s
        real refuse day, and show a balance only when Finance can defend it. Until then the honest sentence on every
        form is the one already on the page: sample only, not a live municipal transaction.
      </p>
      <p className="mt-4">
        Contacts used here, all public: 051 673 9600; Civic Centre, Hoofd Street, Zastron 9950; PO Box 20;
        info@mohokare.gov.za. Mayor: not settled in this pack. gov.za lists Cllr Teboho Daniel Mochechepa. An August
        2024 profile lists Cllr Zingisa Mgauli. Communications: Letlhogonolo Mafatman on the government directory; the
        municipal site also names Mr L. Mafatman and webmaster Mr F. Mhlafu.
      </p>
    </div>
  );
}
