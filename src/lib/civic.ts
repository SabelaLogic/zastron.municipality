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

export type Answer = {
  id: string;
  q: L10n;
  a: L10n;
  source: string;
  keywords: string[];
};

export const answers: Answer[] = [
  {
    id: "water",
    q: L(
      "Is the water restricted?",
      "Is die water beperk?",
      "Na metsi a thibetswe?",
      "Ingaba amanzi athintelwe?",
    ),
    a: L(
      "There is no published live reservoir reading on this portal. Phone 051 673 9600, or log a fault, if nothing comes out of the tap. A capital line on the municipal profile budgets R11.2 million for a sewer network in Refengkhotso, Zastron/Matlakeng. That is a project, not today\u2019s water level.",
      "Daar is geen gepubliseerde lewendige reservoirlesing op hierdie portaal nie. Bel 051 673 9600, of meld \u2019n fout, as niks uit die kraan kom nie. \u2019n Kapitaallyn op die munisipale profiel begroot R11,2 miljoen vir \u2019n rioolnetwerk in Refengkhotso, Zastron/Matlakeng. Dit is \u2019n projek, nie vandag se watervlak nie.",
      "Ha ho na tekanyo ya jwale ya letamo e phatlaladitsweng portalong ena. Letsa 051 673 9600, kapa tlaleha bothata, ha metsi a sa tswa pompong. Mola wa capital profaeleng ya masepala o beile R11.2 milione bakeng sa marangrang a dikgwerekgwere Refengkhotso, Zastron/Matlakeng. Ke projeke, eseng boemo ba metsi ba kajeno.",
      "Akukho fundo yangoku yedamu epapashiweyo kule phothali. Tsalela u-051 673 9600, okanye xela isiphene, ukuba akukho nto iphuma empompini. Umgca we-capital kwiprofayili kamasipala ubeka i-R11.2 yezigidi kuthungelwano lwelindle eRefengkhotso, eZastron/Matlakeng. Le yiprojekthi, hayi iqondo lamanzi lanamhlanje.",
    ),
    source: "Municipal contact directory; Municipal Money capital project note",
    keywords: ["water", "restriction", "metsi", "amanzi", "vaal", "beperk", "thibelo"],
  },
  {
    id: "account",
    q: L(
      "How do I query my municipal account?",
      "Hoe vra ek my munisipale rekening?",
      "Ke botsa jwang ka akhaonto ya masepala?",
      "Ndibuza njani nge-akhawunti kamasipala?",
    ),
    a: L(
      "Use \u201cPay or query an account\u201d to see the pattern. In this presentation the balance is a sample. The Auditor-General disclaimed the 2024/25 statements, including property and the revenue book, so a live balance must wait until Finance can stand behind a figure. Until then, bring your account number to the Civic Centre, Hoofd Street, or call 051 673 9600. A notice on the municipal site points to a consumer portal and to new banking details \u2014 open those on mohokare.gov.za, and do not pay into an account number copied from a WhatsApp forward.",
      "Gebruik \u201cBetaal of vra \u2019n rekening\u201d om die patroon te sien. In hierdie aanbieding is die balans \u2019n monster. Die Ouditeur-generaal het die 2024/25-state van mening weerhou, insluitend eiendom en die inkomsteboek, so \u2019n lewendige balans moet wag tot Finansies agter \u2019n syfer kan staan. Tot dan, bring jou rekeningnommer na die Burgersentrum, Hoofdstraat, of bel 051 673 9600. \u2019n Kennisgewing op die munisipale webwerf wys na \u2019n verbruikersportaal en nuwe bankbesonderhede \u2014 maak dit op mohokare.gov.za oop, en moenie in \u2019n rekeningnommer betaal wat van \u2019n WhatsApp-stuur af kom nie.",
      "Sebedisa \u201cLefa kapa botsa ka akhaonto\u201d ho bona mohlala. Pontsheng ena, balanse ke sampole. Mohlahlobi-kakaretso o hanne ho fana ka maikutlo ditlalehong tsa 2024/25, ho kenyeletswa thepa le buka ya lekeno, kahoo balanse ya nnete e tlameha ho ema ho fihlela Ditjhelete di ka ema ka palo. Ho fihlela moo, tlisa nomoro ya akhaonto Civic Centre, Hoofd Street, kapa letsetsa 051 673 9600. Tsebiso sebakeng sa masepala e supa portal ya bareki le dintlha tse ntjha tsa banka \u2014 di bule mohokare.gov.za, mme o se ke wa lefa nomotong e tswang ho WhatsApp.",
      "Sebenzisa \u201cHlawula okanye buza nge-akhawunti\u201d ukubona umzekelo. Kule ntetho ibhalansi ngummelo. UMphicothi-zincwadi jikelele akazange anike luvo ngeengxelo zika-2024/25, kubandakanya ipropati nencwadi yengeniso, ngoko ibhalansi yokwenene kufuneka ilinde de iSebe lezeMali linokuma nenani. Kude kube njalo, zisa inombolo ye-akhawunti kwiCivic Centre, Hoofd Street, okanye tsalela u-051 673 9600. Isaziso kwiwebhusayithi kamasipala sikhomba iphothali yabathengi kunye neenkcukacha ezintsha zebhanki \u2014 zivule ku-mohokare.gov.za, ungahlawuli kwinombolo evela ku-WhatsApp.",
    ),
    source: "Auditor-General report, 17 February 2026; mohokare.gov.za notices",
    keywords: ["account", "bill", "pay", "rekening", "akhaonto", "iakhawunti", "balance"],
  },
  {
    id: "who",
    q: L(
      "Who is the mayor, and where is the office?",
      "Wie is die burgemeester, en waar is die kantoor?",
      "Ramotse ke mang, mme ofisi e kae?",
      "Ngubani usodolophu, kwaye iphi iofisi?",
    ),
    a: L(
      "Mr L. Mkhwane is the municipal manager. The seat is the Civic Centre, Hoofd Street, Zastron, 9950. Postal address PO Box 20. Telephone 051 673 9600. Do not treat a mayor\u2019s name as settled: gov.za lists Cllr Teboho Daniel Mochechepa, while an August 2024 profile lists Cllr Zingisa Mgauli. M. Mohale signed the 2024/25 statements on 31 August 2025.",
      "Mnr. L. Mkhwane is die munisipale bestuurder. Die setel is die Burgersentrum, Hoofdstraat, Zastron, 9950. Posadres Posbus 20. Telefoon 051 673 9600. Moenie \u2019n burgemeester se naam as afgehandel beskou nie: gov.za noem rdl. Teboho Daniel Mochechepa, terwyl \u2019n Augustus 2024-profiel rdl. Zingisa Mgauli noem. M. Mohale het die 2024/25-state op 31 Augustus 2025 onderteken.",
      "Mr L. Mkhwane ke motsamaisi wa masepala. Setulo ke Civic Centre, Hoofd Street, Zastron, 9950. Aterese ya poso ke PO Box 20. Mohala 051 673 9600. Se nke lebitso la ramotse e le le tiileng: gov.za e thathamisa Cllr Teboho Daniel Mochechepa, ha profaele ya Phato 2024 e thathamisa Cllr Zingisa Mgauli. M. Mohale o saenne ditlaleho tsa 2024/25 ka 31 Phato 2025.",
      "UMnu L. Mkhwane ngumphathi kamasipala. Isihlalo yiCivic Centre, Hoofd Street, eZastron, 9950. Idilesi yeposi yi-PO Box 20. Umnxeba 051 673 9600. Musa ukuthatha igama likasodolophu njengeligqityiweyo: u-gov.za udwelisa uCllr Teboho Daniel Mochechepa, ngelixa iprofayili ka-Agasti 2024 idwelisa uCllr Zingisa Mgauli. U-M. Mohale utyikitye iingxelo zika-2024/25 nge-31 Agasti 2025.",
    ),
    source: "gov.za directory; audited financial statements signed 31 August 2025",
    keywords: ["mayor", "office", "mohale", "mkhwane", "phone", "burgemeester", "ramotse", "usodolophu", "address"],
  },
  {
    id: "indigent",
    q: L(
      "How does indigent support work?",
      "Hoe werk indigent-steun?",
      "Tshehetso ya ba futsanehileng e sebetsa jwang?",
      "Isebenza njani inkxaso yabangabinamali?",
    ),
    a: L(
      "Households that qualify are written into an indigent register and receive free basic services. mohokare.gov.za already carries a public notice for indigent subsidy application and re-registration, which means the register is a repeating civic task, not a once-off form in a drawer. Bring an identity document, proof of income, and proof of residence to the Civic Centre. Do not pay a runner to \u201cfix\u201d the register. This page stores a sample only.",
      "Huishoudings wat kwalifiseer word op \u2019n indigent-register gesit en ontvang gratis basiese dienste. mohokare.gov.za dra reeds \u2019n openbare kennisgewing vir aansoek en herregistrasie van die indigent-subsidie, wat beteken die register is \u2019n herhalende burgerlike taak, nie \u2019n eenmalige vorm in \u2019n laai nie. Bring \u2019n identiteitsdokument, bewys van inkomste, en bewys van verblyf na die Burgersentrum. Moenie \u2019n loper betaal om die register te \u201cre\u00ebl\u201d nie. Hierdie bladsy b\u00eare slegs \u2019n monster.",
      "Malapa a tshwanelehang a ngodiswa bukeng ya ba futsanehileng mme a fumana ditshebeletso tsa motheo mahala. mohokare.gov.za e se e na le tsebiso ya setjhaba bakeng sa kopo le ngodiso bocha ya tshehetso, ho bolelang hore ngodiso ke mosebetsi o phetahetseng, eseng foromo ya hanngwe. Tlisa tokomane ya boitsebiso, bopaki ba lekeno, le bopaki ba bodulo Civic Centre. Se lefe motho ya tsamayang hore a \u201clokise\u201d ngodiso. Leqephe lena le boloka sampole feela.",
      "Amakhaya afanelekileyo abhalwa kwirejista yabangabinamali kwaye afumana iinkonzo ezisisiseko simahla. i-mohokare.gov.za sele inesaziso soluntu sesicelo nokubhalisa kwakhona kwinkxaso, nto ethetha ukuba irejista ngumsebenzi ophindaphindwayo, hayi ifom enye kwikhabhathi. Zisa uxwebhu lwesazisi, ubungqina bemali engenayo, nobungqina bendawo yokuhlala kwiCivic Centre. Musa ukuhlawula umntu ohambayo ukuba \u201calungise\u201d irejista. Eli phepha ligcina ummiselo kuphela.",
    ),
    source: "Indigent notice listed on mohokare.gov.za",
    keywords: ["indigent", "free basic", "deernis", "futsanehileng", "ngodiso", "bhalisa", "subsidy"],
  },
  {
    id: "refuse",
    q: L(
      "When is refuse collected?",
      "Wanneer word vullis verwyder?",
      "Ditshila di nkwa neng?",
      "Inkunkuma ithathwa nini?",
    ),
    a: L(
      "The presentation shows a sample roster so Council can see the pattern. It is not the technical department\u2019s live round. In the Auditor-General\u2019s 2023\u201324 service tables, weekly removal reached 66.4% of Mohokare households. Confirm the day at 051 673 9600 before you put a bin out.",
      "Die aanbieding wys \u2019n monsterrooster sodat die Raad die patroon kan sien. Dit is nie die tegniese departement se lewendige ronde nie. In die Ouditeur-generaal se 2023\u201324-dienstetabelle het weeklikse verwydering 66,4% van Mohokare-huishoudings bereik. Bevestig die dag by 051 673 9600 voor jy \u2019n drom uitgesit.",
      "Pontsho e bontsha lenane la sampole hore Lekgotla le bone mokgwa. Ha se potoloho ya nnete ya lefapha la setegeniki. Ditafoleng tsa ditshebeletso tsa Mohlahlobi-kakaretso tsa 2023\u201324, ho ntsha ditshila beke le beke ho fihletse malapa a 66.4% a Mohokare. Netefatsa letsatsi ho 051 673 9600 pele o ntsha emere.",
      "Le ntetho ibonisa ishedyuli yommelo ukuze iBhunga libone umzekelo. Ayiyomjikelo wokwenene wesebe lobuchwepheshe. Kwiitheyibhile zeenkonzo zika-2023\u201324 zoMphicothi-zincwadi, ukususwa kwenkunkuma ngeveki kufikelele kumakhaya angama-66.4% eMohokare. Qinisekisa usuku ku-051 673 9600 phambi kokuba ukhuphe umgqomo.",
    ),
    source: "AGSA 2023\u201324 service-access tables for Mohokare",
    keywords: ["refuse", "trash", "vullis", "ditshila", "inkunkuma", "bin", "landfill"],
  },
  {
    id: "languages",
    q: L(
      "Which languages should the municipality use?",
      "Watter tale moet die munisipaliteit gebruik?",
      "Masepala o lokela ho sebedisa dipuo dife?",
      "Ngoluphi ulwimi olufanele lusetyenziswe ngumasipala?",
    ),
    a: L(
      "Sesotho, Afrikaans and isiXhosa cover more than nine in ten households in the last published language count, with English as the language of records and of many younger residents. This portal keeps all four one tap from the header, which is the WCAG and Batho Pele test, not a decoration.",
      "Sesotho, Afrikaans en isiXhosa dek meer as nege uit tien huishoudings in die laaste gepubliseerde taaltelling, met Engels as die taal van rekords en van baie jonger inwoners. Hierdie portaal hou al vier een tik van die kopskrif, wat die WCAG- en Batho Pele-toets is, nie \u2019n versiering nie.",
      "Sesotho, Afrikaans le isiXhosa di koahela malapa a fetang a robong ho a leshome palong ya ho qetela e phatlaladitsweng, mme Senyesemane ke puo ya direkoto. Portala ena e boloka tsona tse nne ho kopa e le nngwe ho tswa hloohong, e leng teko ya WCAG le Batho Pele, eseng mokgabiso.",
      "IsiSuthu, isiBhulu nesiXhosa zigubungela amakhaya angaphezu kwethoba kwishumi kubalo lolwimi olupapashiweyo, isiNgesi silulwimi lweerekhodi. Le phothali igcina zone zine ukucofa okukodwa kwihloko, oyimvavanyo ye-WCAG neBatho Pele, hayi umhombiso.",
    ),
    source: "Census 2011 language tables for Zastron including Matlakeng",
    keywords: ["language", "sesotho", "afrikaans", "xhosa", "english", "puo", "ulwimi", "taal"],
  },
];

export function matchAnswers(query: string): Answer[] {
  const q = query.trim().toLowerCase();
  if (!q) return answers.slice(0, 4);
  const scored = answers
    .map((item) => {
      const hay = [item.keywords.join(" "), ...Object.values(item.q), ...Object.values(item.a)]
        .join(" ")
        .toLowerCase();
      let score = 0;
      for (const part of q.split(/\s+/)) {
        if (part && hay.includes(part)) score += 1;
      }
      return { item, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score);
  return (scored.length ? scored : answers.map((item) => ({ item, score: 0 })))
    .slice(0, 3)
    .map((row) => row.item);
}

export type QuoteLine = {
  phase: "A" | "B" | "C";
  no: string;
  item: string;
  detail: string;
  hours: number;
  rate: number;
  amount: number;
};

export const quoteLines: QuoteLine[] = [
  {
    phase: "A",
    no: "01",
    item: "Discovery workshops",
    detail:
      "Two days in Zastron with communications, finance enquiries, technical services, and residents from the dorp, Matlakeng, Rouxville and Smithfield. Task inventory, not an organogram.",
    hours: 40,
    rate: 1600,
    amount: 64000,
  },
  {
    phase: "A",
    no: "02",
    item: "Audit of the two existing sites",
    detail:
      "Gap register against kopanong.fs.gov.za and kopanonglm.gov.za: broken tasks, English-only pages, missing tariffs, duplicate news.",
    hours: 20,
    rate: 1400,
    amount: 28000,
  },
  {
    phase: "A",
    no: "03",
    item: "Intention architecture",
    detail:
      "The resident sentence (\u201cI want to\u2026\u201d) becomes the navigation. Departments stay in the footer, where auditors look, not where pensioners look.",
    hours: 24,
    rate: 1500,
    amount: 36000,
  },
  {
    phase: "A",
    no: "04",
    item: "Civic design system",
    detail:
      "One type, one colour set, one form pattern. High contrast and larger text built in. WCAG 2.2 AA as the acceptance test. Not a second visual language per town.",
    hours: 48,
    rate: 1625,
    amount: 78000,
  },
  {
    phase: "A",
    no: "05",
    item: "Five production templates",
    detail:
      "Home, Do it, The town, Council, Speak to us \u2014 the pages in this presentation, built to ship, not as pictures of pages.",
    hours: 110,
    rate: 1500,
    amount: 165000,
  },
  {
    phase: "A",
    no: "06",
    item: "Search with municipal suggestions",
    detail:
      "Auto-suggest across English, Afrikaans, Sesotho and isiXhosa terms. Residents skip menus. The search bar is the front door.",
    hours: 28,
    rate: 1500,
    amount: 42000,
  },
  {
    phase: "A",
    no: "07",
    item: "Plain-language desk",
    detail:
      "Curated answers with a source line. It refuses to invent a tariff or a balance. A live language model is optional, and only after the document library is clean.",
    hours: 32,
    rate: 1500,
    amount: 48000,
  },
  {
    phase: "A",
    no: "08",
    item: "Four-language interface",
    detail:
      "English, Afrikaans, Sesotho, isiXhosa on every primary task. Council records stay in English. Legal certification of translations is excluded.",
    hours: 86,
    rate: 1000,
    amount: 86000,
  },
  {
    phase: "A",
    no: "09",
    item: "Accessibility pass",
    detail:
      "Keyboard-only journey, contrast, focus, screen-reader labels, skip link. Remediation of what the pass finds.",
    hours: 20,
    rate: 1600,
    amount: 32000,
  },
  {
    phase: "A",
    no: "10",
    item: "Content: notices, tasks, chronicle",
    detail:
      "Writing in plain language from documents Council already owns. The chronicle in the briefing pack is the seed.",
    hours: 40,
    rate: 1100,
    amount: 44000,
  },
  {
    phase: "A",
    no: "11",
    item: "Training in Zastron",
    detail:
      "Two days with the communications desk: publish a notice, correct a translation, retire a page. No developer required for ordinary updates.",
    hours: 12,
    rate: 1500,
    amount: 18000,
  },
  {
    phase: "A",
    no: "12",
    item: "Launch and 30-day hypercare",
    detail:
      "DNS advice, redirects from the thin pages worth keeping, and a month of same-week fixes after go-live.",
    hours: 16,
    rate: 1375,
    amount: 22000,
  },
  {
    phase: "B",
    no: "13",
    item: "Account lookup, read-only",
    detail:
      "Only after a billing data cleanse. The Auditor-General could not confirm electricity and water sales from the billing reports. We will not put a false balance on a public screen.",
    hours: 50,
    rate: 1900,
    amount: 95000,
  },
  {
    phase: "B",
    no: "14",
    item: "Fault desk with ward routing",
    detail:
      "Reference number, area (Zastron, Matlakeng, Rouxville, Smithfield), category, status. SMS-ready; airtime and the gateway are excluded.",
    hours: 48,
    rate: 1500,
    amount: 72000,
  },
  {
    phase: "B",
    no: "15",
    item: "Indigent registration workflow",
    detail:
      "Application, document checklist, status, and an export the register clerk can reconcile. Aimed at the finding that the register is stale.",
    hours: 40,
    rate: 1700,
    amount: 68000,
  },
  {
    phase: "B",
    no: "16",
    item: "Document library",
    detail:
      "IDP, SDBIP, tariffs, by-laws, AG action plan, indigent policy. One place. Dated. With the file that is actually in force.",
    hours: 20,
    rate: 1900,
    amount: 38000,
  },
  {
    phase: "B",
    no: "17",
    item: "Notices desk for communications",
    detail:
      "Solly Phama\u2019s team publishes, expires and translates a notice without a developer. Old notices do not linger.",
    hours: 16,
    rate: 1750,
    amount: 28000,
  },
  {
    phase: "C",
    no: "18",
    item: "Billing integration specification",
    detail:
      "A written join between the public portal and the financial system, after Finance can explain the billing report. Specification and a thin pilot, not a new ERP.",
    hours: 50,
    rate: 1700,
    amount: 85000,
  },
  {
    phase: "C",
    no: "19",
    item: "Water and outage board",
    detail:
      "A page a technician can update when a line is closed or a town is on restriction. Time-stamped, so yesterday\u2019s restriction does not become today\u2019s rumour.",
    hours: 40,
    rate: 1150,
    amount: 46000,
  },
  {
    phase: "C",
    no: "20",
    item: "PAIA channel",
    detail:
      "A tracked request to the municipal manager, Mr L. Mkhwane, with the statutory acknowledgement.",
    hours: 16,
    rate: 1375,
    amount: 22000,
  },
];

export const CARE_MONTH = 7400;
export const CARE_MONTHS = 12;
export const CARE_TOTAL = CARE_MONTH * CARE_MONTHS;
export const TOWN_ROLLOUT = 18500;
export const OTHER_TOWNS = 8;
export const LLM_OPTION = 64000;
export const DISBURSE = 14800;

export function phaseTotal(phase: "A" | "B" | "C") {
  return quoteLines.filter((l) => l.phase === phase).reduce((s, l) => s + l.amount, 0);
}

export const PHASE_A = phaseTotal("A");
export const PHASE_B = phaseTotal("B");
export const PHASE_C = phaseTotal("C");
export const PROGRAMME = PHASE_A + PHASE_B + PHASE_C + CARE_TOTAL;
export const RECOMMENDED = PHASE_A + CARE_TOTAL;

export function zar(n: number) {
  return `R\\u00a0${n.toLocaleString("en-ZA")}`;
}

export const SAMPLE_ACCOUNTS = [
  {
    no: "1842",
    name: "M. Molehe",
    stand: "Stand 18, Matlakeng",
    services: "Water, sanitation, refuse",
    balance: "1 240.00",
    note: "Sample household. Not a real balance.",
  },
  {
    no: "0904",
    name: "P. Venter",
    stand: "Erf 42, Hoofd Street",
    services: "Refuse, sewer",
    balance: "860.00",
    note: "Sample household. Not a real balance.",
  },
];

export const SAMPLE_ROSTER = [
  { area: "Matlakeng", day: "Monday", note: "Sample round only" },
  { area: "Zastron dorp", day: "Tuesday", note: "Sample round only" },
  { area: "Rouxville", day: "Wednesday", note: "Sample round only" },
  { area: "Smithfield", day: "Thursday", note: "Sample round only" },
];

export function makeRef(prefix: string) {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${new Date().getFullYear()}-${n}`;
}
