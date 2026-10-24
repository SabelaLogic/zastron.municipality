import type { Lang } from "@/lib/prefs";

export type L10n = Record<Lang, string>;

const L = (en: string, af: string, st: string, xh: string): L10n => ({ en, af, st, xh });

export type TaskGroup = "money" | "water" | "waste" | "land" | "social";

export type Task = {
  id: string;
  group: TaskGroup;
  label: L10n;
  summary: L10n;
  keywords: string[];
};

export const tasks: Task[] = [
  {
    id: "account",
    group: "money",
    label: L(
      "Pay or query an account",
      "Betaal of vra \u2019n rekening",
      "Lefa kapa botsa ka akhaonto",
      "Hlawula okanye buza nge-akhawunti",
    ),
    summary: L(
      "See what an account enquiry should feel like. Sample data only.",
      "Sien hoe \u2019n rekeningnavraag moet voel. Slegs monsterdata.",
      "Bona hore na potso ya akhaonto e lokela ho utlwahala jwang. Disampole feela.",
      "Bona indlela imibuzo ye-akhawunti emele ibe yiyo. Ummiselo kuphela.",
    ),
    keywords: ["pay", "account", "bill", "balance", "rekening", "betaal", "akhaonto", "iakhawunti", "bili", "hlawula"],
  },
  {
    id: "fault",
    group: "water",
    label: L(
      "Report a water or power fault",
      "Meld \u2019n water- of kragfout",
      "Tlaleha bothata ba metsi kapa motlakase",
      "Xela isiphene samanzi okanye umbane",
    ),
    summary: L(
      "Log a fault and take a reference. It stays on this device.",
      "Teken \u2019n fout aan en kry \u2019n verwysing. Dit bly op hierdie toestel.",
      "Ngola bothata mme o fumane referense. E sala sesebelisoa sena.",
      "Bhala isiphene ufumane ireferensi. Ihlala kwesi sixhobo.",
    ),
    keywords: ["fault", "water", "burst", "outage", "electricity", "power", "metsi", "amanzi", "krag", "umbane", "fout", "lekage"],
  },
  {
    id: "refuse",
    group: "waste",
    label: L(
      "See the refuse day",
      "Sien die vullisdag",
      "Bona letsatsi la ditshila",
      "Jonga usuku lwenkunkuma",
    ),
    summary: L(
      "A roster pattern for Zastron, Matlakeng, Rouxville and Smithfield. Days shown are samples.",
      "\u2019n Roosterpatroon vir Zastron, Matlakeng, Rouxville en Smithfield. Dae is monsters.",
      "Mokgwa wa lenane la Zastron, Matlakeng, Rouxville le Smithfield. Matsatsi ke disampole.",
      "Ummiselo weshitshuli yaseZastron, eMatlakeng, eRouxville naseSmithfield. Iintsuku ngummelo.",
    ),
    keywords: ["refuse", "trash", "waste", "vullis", "ditshila", "inkunkuma", "madikgetla", "noordmanville", "collection"],
  },
  {
    id: "indigent",
    group: "social",
    label: L(
      "Register for indigent support",
      "Registreer vir indigent-steun",
      "Ngodisa bakeng sa tshehetso ya ba futsanehileng",
      "Bhalisa kwinkxaso yabangabinamali",
    ),
    summary: L(
      "The municipal site already asks households to apply and re-register for the indigent subsidy. This is the counter that notice describes.",
      "Die munisipale webwerf vra reeds huishoudings om aansoek te doen en weer te registreer vir die indigent-subsidie. Dit is die toonbank wat die kennisgewing beskryf.",
      "Sebaka sa masepala se se se kopa malapa ho etsa kopo le ho ngodisa bocha bakeng sa tshehetso ya ba futsanehileng. Ena ke khaontara eo tsebiso e e hlalosang.",
      "Iwebhusayithi kamasipala sele icela amakhaya ukuba afake isicelo kwaye abhalise kwakhona kwinkxaso-mali yabangabinamali. Le yidesika lelo saziso lisichazayo.",
    ),
    keywords: ["indigent", "free basic", "subsidy", "deernis", "futsanehileng", "ngodisa", "bhalisa", "support"],
  },
  {
    id: "notice",
    group: "social",
    label: L(
      "Read a council notice",
      "Lees \u2019n raadsberig",
      "Bala tsebiso ya lekgotla",
      "Funda isaziso sebhunga",
    ),
    summary: L(
      "Notices drawn from documents already tabled, not invented resolutions.",
      "Berigte uit dokumente wat reeds voorgel\u00ea is, nie verdigte besluite nie.",
      "Ditsebiso di tswa ditokomaneng tse se di hlahisitsweng, eseng diqeto tse iqapilweng.",
      "Izaziso zivela kumaxwebhu asele ebekiwe, hayi izigqibo eziqanjiweyo.",
    ),
    keywords: ["notice", "council", "berig", "tsebiso", "isaziso", "idp", "tariff", "report"],
  },
  {
    id: "plans",
    group: "land",
    label: L(
      "Apply for a stand or building plan",
      "Doen aansoek om \u2019n erf of bouplan",
      "Etsa kopo ya setsha kapa moralo wa moaho",
      "Faka isicelo sesiza okanye isicwangciso sokwakha",
    ),
    summary: L(
      "What to bring. Fees stay unpublished until Finance tables a current tariff.",
      "Wat om saam te bring. Fooie bly ongepubliseer totdat Finansies \u2019n huidige tarief voorl\u00ea.",
      "Seo o lokelang ho se tlisa. Ditjhelete di sa phatlalatswe ho fihlela Ditjhelete di hlahisa tarifi ya jwale.",
      "Into omaze uyizise. Iintlawulo azishicilelwanga de lifike iSebe lezeMali labe ixabiso langoku.",
    ),
    keywords: ["plan", "stand", "erf", "building", "zoning", "setsha", "isiza", "bouplan", "permit"],
  },
  {
    id: "burial",
    group: "land",
    label: L(
      "Book a burial",
      "Bespreek \u2019n begrafnis",
      "Ngwetsa lepato",
      "Bhukisha umngcwabo",
    ),
    summary: L(
      "Burial bookings are taken at the Civic Centre, Hoofd Street. The portal tells you the papers.",
      "Begrafnisbesprekings word by die Burgersentrum, Hoofdstraat, geneem. Die portaal s\u00ea watter papiere.",
      "Dikopo tsa lepato di amohelwa Civic Centre, Hoofd Street. Portala e bolella dipampiri.",
      "Iibhukisho zomngcwabo zithathwa kwiCivic Centre, Hoofd Street. Iphothali ixelela amaphepha.",
    ),
    keywords: ["burial", "cemetery", "begrafnis", "lepato", "umngcwabo", "death", "grave"],
  },
  {
    id: "paia",
    group: "social",
    label: L(
      "Ask for a record (PAIA)",
      "Vra \u2019n rekord (PAIA)",
      "Kopa rekoto (PAIA)",
      "Cela irekhodi (PAIA)",
    ),
    summary: L(
      "Address the request to the municipal manager, Mr L. Mkhwane.",
      "Rig die versoek aan die munisipale bestuurder, mnr. L. Mkhwane.",
      "Romela kopo ho motsamaisi wa masepala, Mr L. Mkhwane.",
      "Yalathisa isicelo kumphathi kamasipala, uMnu L. Mkhwane.",
    ),
    keywords: ["paia", "record", "information", "rekord", "rekoto", "irekhodi", "information officer"],
  },
];

export const notices = [
  {
    date: "17 Feb 2026",
    title: "Auditor-General: disclaimer on the 2024/25 statements",
    body: "The Auditor-General did not express an opinion on Mohokare\u2019s financial statements for the year ended 30 June 2025. Property, plant and equipment could not be confirmed, including an amount stated at R638.9 million. A resident cannot be shown a live balance until that book is trustworthy.",
    href: "https://lg.treasury.gov.za/supportingdocs/FS163/FS163_Audit%20Report_2025_Y_20260217T102325Z_tsoho.pdf",
  },
  {
    date: "31 Aug 2025",
    title: "Acting accounting officer signed the statements",
    body: "M. Mohale, acting, approved the 2024/25 annual financial statements. They record the registered office as the Civic Centre, Hoofd Street, Zastron, 9950, and cash and cash equivalents of R2.24 million.",
    href: "https://lg.treasury.gov.za/supportingdocs/FS163/FS163_Audited%20Annual%20Financial%20Statement_2025_Y_20260216T123804Z_tsoho.pdf",
  },
  {
    date: "On mohokare.gov.za",
    title: "Indigent re-registration is a notice, not a counter",
    body: "The official site publishes an indigent subsidy application and re-registration notice, a valuation-roll inspection, new banking details, and a consumer-portal notice. \u201cHow do I\u201d is still a heading. The tasks live as PDFs.",
    href: "https://mohokare.gov.za/",
  },
];

export type Timeline = { year: string; title: string; body: string };

export const timeline: Timeline[] = [
  {
    year: "Before the towns",
    title: "San country between two rivers",
    body: "The sandstone between the Caledon and the Orange was San country long before a grid of streets. Rock paintings, including those in the Hippopotamus Cave, are still on the farms. A portal that starts in 1875 starts too late.",
  },
  {
    year: "1848 and 1863",
    title: "Smithfield, then Rouxville",
    body: "Smithfield was founded in 1848, named for Sir Harry Smith, north of the Orange. Rouxville was founded in 1863 by Petrus Wepenaar on the farm Zuurbult, on the road that is now the N6, with the Maluti behind it. Both are Mohokare towns. Neither is an annex of Zastron.",
  },
  {
    year: "1875\u20131881",
    title: "Verliesfontein becomes Zastron",
    body: "The town was founded in 1875 on Jan Hendrik de Winnaar\u2019s farm Verliesfontein and laid out in 1876. It was named for Johanna Sibella Zastron, wife of President J. H. Brand. Rouxville opposed the new town so firmly that the Volksraad waited years. Municipal status came in 1881.",
  },
  {
    year: "The mountain",
    title: "Aasvo\u00eblberg and the Eye",
    body: "Aasvo\u00eblberg, 2,207 metres, is the highest peak in the Free State, named for the Cape vulture colony on its cliffs. A hole about nine metres across is Die Oog, the Eye, the town\u2019s unofficial emblem. The legend says De Winnaar blew the devil\u2019s head through the rock. The township below is Matlakeng \u2014 the place of vultures.",
  },
  {
    year: "2011",
    title: "Zastron and Matlakeng, counted together",
    body: "The 2011 census counted 15,607 people in Zastron including Matlakeng, on 22.7 square kilometres. First languages: Sesotho 69.2%, isiXhosa 22.4%, Afrikaans 5.1%. A site that speaks only English, or only to the dorp, misses the town.",
  },
  {
    year: "2000",
    title: "Mohokare \u2014 the Caledon, as a municipality",
    body: "Wall-to-wall local government made Zastron the seat of Mohokare Local Municipality, with Rouxville and Smithfield. Mohokare is the Sesotho name of the Caledon. The district is Xhariep. Code: FS163. Area: about 8,785 square kilometres. The civic centre is on Hoofd Street.",
  },
  {
    year: "2024\u20132026",
    title: "The years that make a website urgent",
    body: "The Auditor-General disclaimed the 2024/25 financial statements, and published compilations record disclaimers for the two years before that. The official site, mohokare.gov.za, is in English and arranged by department. Its \u201cHow do I\u201d menu does not complete a task. zastron.co.za is a visitor directory: stays, food, and a list of emergency numbers. Neither lets a resident of Matlakeng finish a job in Sesotho.",
  },
];

export const facts: { label: string; value: string; note: string }[] = [
  { label: "Mohokare population", value: "34,146", note: "Municipal Money, Aug 2024" },
  { label: "Municipal area", value: "8,785 km\u00b2", note: "Three towns, Xhariep" },
  { label: "Zastron & Matlakeng", value: "15,607", note: "Census 2011" },
  { label: "Sesotho in Zastron", value: "69.2%", note: "First language, 2011" },
  { label: "isiXhosa", value: "22.4%", note: "First language, 2011" },
  { label: "Afrikaans", value: "5.1%", note: "First language, 2011" },
  { label: "Water inside dwelling", value: "91.9%", note: "AGSA 2023\u201324 tables" },
  { label: "Weekly refuse", value: "66.4%", note: "AGSA 2023\u201324 tables" },
  { label: "Electricity for light", value: "93.0%", note: "AGSA 2023\u201324 tables" },
  { label: "Audit opinion", value: "Disclaimer", note: "2024/25, and the years before" },
  { label: "Aasvo\u00eblberg", value: "2,207 m", note: "Highest peak in the Free State" },
  { label: "To the Lesotho border", value: "\u00b130 km", note: "From the seat" },
];

export const deskQuote = {
  text: L(
    "A resident should not have to know which office owns the problem. Say it in Sesotho, isiXhosa, Afrikaans or English: pay, report, register, or read. If this office cannot stand behind a balance, it will say so, and it will not invent one. Matlakeng, Rouxville and Smithfield are the same municipality. The door is still the Civic Centre on Hoofd Street. This page should make the walk shorter.",
    "\u2019n Inwoner moenie weet watter kantoor die probleem besit nie. S\u00ea dit in Sesotho, isiXhosa, Afrikaans of Engels: betaal, meld aan, registreer, of lees. As hierdie kantoor nie agter \u2019n balans kan staan nie, sal dit so s\u00ea, en dit sal nie een uitdink nie. Matlakeng, Rouxville en Smithfield is dieselfde munisipaliteit. Die deur is steeds die Burgersentrum in Hoofdstraat. Hierdie bladsy moet die stap korter maak.",
    "Moahi ha a tlameha ho tseba hore na ofisi efe e na le bothata. E bolele ka Sesotho, isiXhosa, Afrikaans kapa Senyesemane: lefa, tlaleha, ngodisa, kapa bala. Haeba ofisi ena e sa kgone ho ema ka balanse, e tla re jwalo, mme e ke ke ya e iqapa. Matlakeng, Rouxville le Smithfield ke masepala o le mong. Monako o ntse o le Civic Centre ho Hoofd Street. Leqephe lena le lokela ho kgutsufatsa leeto.",
    "Umhlali akufuneki azi ukuba leliphi iofisi inengxaki. Yithethe ngesiSuthu, ngesiXhosa, ngesiBhulu okanye ngesiNgesi: hlawula, xela, bhalisa, okanye funda. Ukuba le ofisi ayinakuma nebhalansi, iya kutsho njalo, kwaye ayiyi kuyiqamba. iMatlakeng, iRouxville neSmithfield ngumasipala omnye. Umnyango useyiCivic Centre eHoofd Street. Eli phepha kufuneka lenze uhambo lufutshane.",
  ),
};

export const leaders = [
  {
    role: "Municipal Manager",
    name: "L. Mkhwane",
    note: "Current municipal manager, Civic Centre, Hoofd Street, Zastron. Telephone 051 673 9600.",
  },
  {
    role: "Executive Mayor \u2014 confirm",
    name: "Directories do not agree",
    note: "gov.za lists Cllr Teboho Daniel Mochechepa. Municipal Money (August 2024) and Wikipedia list Cllr Zingisa Mgauli. This portal will not pick a name for a letterhead.",
  },
  {
    role: "2024/25 statements signed by",
    name: "M. Mohale",
    note: "Signed the 2024/25 financial statements on 31 August 2025, then as acting accounting officer.",
  },
  {
    role: "Communications",
    name: "Letlhogonolo Mafatman",
    note: "Head of communications on gov.za. The municipal site also names Mr L. Mafatman (website@mohokare.gov.za) and webmaster Mr F. Mhlafu (fikile@mohokare.gov.za).",
  },
  {
    role: "The three towns",
    name: "Zastron, Rouxville, Smithfield",
    note: "Zastron, with Matlakeng, is the seat. Unit numbers published on the municipal site: Zastron 051 673 9700, Rouxville 051 663 6117, Smithfield 051 683 6216. Confirm before a go-live page treats them as switchboards.",
  },
];

export const publicDocs = [
  {
    name: "Audit report 2024/25 (PDF)",
    detail: "Disclaimer of opinion. National Treasury portal, filed 17 February 2026.",
    href: "https://lg.treasury.gov.za/supportingdocs/FS163/FS163_Audit%20Report_2025_Y_20260217T102325Z_tsoho.pdf",
  },
  {
    name: "Audited financial statements 2024/25",
    detail: "Signed by M. Mohale, acting, 31 August 2025. Civic Centre, Hoofd Street.",
    href: "https://lg.treasury.gov.za/supportingdocs/FS163/FS163_Audited%20Annual%20Financial%20Statement_2025_Y_20260216T123804Z_tsoho.pdf",
  },
  {
    name: "Official municipal site",
    detail: "mohokare.gov.za \u2014 English, department-shaped, \u201cHow do I\u201d still a placeholder.",
    href: "https://mohokare.gov.za/",
  },
  {
    name: "Zastron town directory",
    detail: "zastron.co.za \u2014 visitors, stays and a phone list. Not a constituent service.",
    href: "https://zastron.co.za/",
  },
  {
    name: "Contact directory",
    detail: "gov.za: 1 Hoofd Street, Zastron 9950. Telephone 051 673 9600.",
    href: "https://www.gov.za/about-government/contact-directory/fs-municipalities/mohokare-local-municipality",
  },
];
