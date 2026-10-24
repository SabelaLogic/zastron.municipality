import type { Lang } from "@/lib/prefs";

type L10n = Record<Lang, string>;
const L = (en: string, af: string, st: string, xh: string): L10n => ({ en, af, st, xh });

export type Answer = { id: string; q: L10n; a: L10n; source: string; keywords: string[] };

export const answers: Answer[] = [
  {
    id: "water",
    q: L("Is the water restricted?", "Is die water beperk?", "Na metsi a thibetswe?", "Ingaba amanzi athintelwe?"),
    a: L(
      "There is no published live reservoir reading on this portal. Phone 051 673 9600, or log a fault, if nothing comes out of the tap. A capital line budgets about R11.2 million for a sewer network in Refengkhotso, Zastron/Matlakeng. That is a project, not today’s water level.",
      "Daar is geen gepubliseerde lewendige reservoirlesing op hierdie portaal nie. Bel 051 673 9600, of meld ’n fout, as niks uit die kraan kom nie.",
      "Ha ho na tekanyo ya jwale ya letamo e phatlaladitsweng. Letsa 051 673 9600, kapa tlaleha bothata, ha metsi a sa tswa pompong.",
      "Akukho fundo yangoku yedamu epapashiweyo. Tsalela u-051 673 9600, okanye xela isiphene, ukuba akukho nto iphuma empompini.",
    ),
    source: "Municipal contact directory; Municipal Money capital project note",
    keywords: ["water", "restriction", "metsi", "amanzi", "beperk", "thibelo"],
  },
  {
    id: "account",
    q: L("How do I query my municipal account?", "Hoe vra ek my munisipale rekening?", "Ke botsa jwang ka akhaonto ya masepala?", "Ndibuza njani nge-akhawunti kamasipala?"),
    a: L(
      "Use Pay or query an account to see the pattern. In this presentation the balance is a sample. The Auditor-General disclaimed the 2024/25 statements, so a live balance must wait until Finance can stand behind a figure. Until then, bring the account number to the Civic Centre, Hoofd Street, or call 051 673 9600. Do not pay into an account number copied from a WhatsApp forward.",
      "Gebruik Betaal of vra ’n rekening om die patroon te sien. Die balans is ’n monster. Bel 051 673 9600 of bring die rekeningnommer na die Burgersentrum, Hoofdstraat.",
      "Sebedisa Lefa kapa botsa ka akhaonto. Balanse ke sampole. Letsa 051 673 9600 kapa tlisa nomoro ya akhaonto Civic Centre, Hoofd Street.",
      "Sebenzisa Hlawula okanye buza nge-akhawunti. Ibhalansi ngummelo. Tsalela u-051 673 9600 okanye zisa inombolo kwiCivic Centre, Hoofd Street.",
    ),
    source: "Auditor-General report, 17 February 2026; mohokare.gov.za notices",
    keywords: ["account", "bill", "pay", "rekening", "akhaonto", "iakhawunti", "balance"],
  },
  {
    id: "who",
    q: L("Who is the mayor, and where is the office?", "Wie is die burgemeester, en waar is die kantoor?", "Ramotse ke mang, mme ofisi e kae?", "Ngubani usodolophu, kwaye iphi iofisi?"),
    a: L(
      "Mr L. Mkhwane is the municipal manager. The seat is the Civic Centre, Hoofd Street, Zastron, 9950. PO Box 20. Telephone 051 673 9600. Do not treat a mayor’s name as settled: gov.za lists Cllr Teboho Daniel Mochechepa, while an August 2024 profile lists Cllr Zingisa Mgauli. M. Mohale signed the 2024/25 statements on 31 August 2025.",
      "Mnr. L. Mkhwane is die munisipale bestuurder. Burgersentrum, Hoofdstraat, Zastron, 9950. Telefoon 051 673 9600. ’n Burgemeester se naam is nog nie afgehandel nie.",
      "Mr L. Mkhwane ke motsamaisi wa masepala. Civic Centre, Hoofd Street, Zastron, 9950. Mohala 051 673 9600. Lebitso la ramotse ha le so tiiswe.",
      "UMnu L. Mkhwane ngumphathi kamasipala. ICivic Centre, Hoofd Street, eZastron, 9950. Umnxeba 051 673 9600. Igama likasodolophu aligqitywanga.",
    ),
    source: "gov.za directory; audited financial statements signed 31 August 2025",
    keywords: ["mayor", "office", "mohale", "mkhwane", "phone", "burgemeester", "ramotse", "usodolophu", "address"],
  },
  {
    id: "indigent",
    q: L("How does indigent support work?", "Hoe werk indigent-steun?", "Tshehetso ya ba futsanehileng e sebetsa jwang?", "Isebenza njani inkxaso yabangabinamali?"),
    a: L(
      "Households that qualify are written into an indigent register and receive free basic services. mohokare.gov.za already carries a public notice for application and re-registration. Bring an identity document, proof of income, and proof of residence to the Civic Centre. Do not pay a runner to fix the register. This page stores a sample only.",
      "Huishoudings wat kwalifiseer kom op ’n indigent-register en ontvang gratis basiese dienste. Bring identiteit, bewys van inkomste en verblyf na die Burgersentrum.",
      "Malapa a tshwanelehang a ngodiswa bukeng ya ba futsanehileng. Tlisa boitsebiso, bopaki ba lekeno le bodulo Civic Centre.",
      "Amakhaya afanelekileyo abhalwa kwirejista yabangabinamali. Zisa isazisi, ubungqina bemali engenayo nendawo yokuhlala kwiCivic Centre.",
    ),
    source: "Indigent notice listed on mohokare.gov.za",
    keywords: ["indigent", "free basic", "deernis", "futsanehileng", "ngodiso", "bhalisa", "subsidy"],
  },
  {
    id: "refuse",
    q: L("When is refuse collected?", "Wanneer word vullis verwyder?", "Ditshila di nkwa neng?", "Inkunkuma ithathwa nini?"),
    a: L(
      "The presentation shows a sample roster so Council can see the pattern. It is not the technical department’s live round. In the Auditor-General’s 2023–24 tables, weekly removal reached 66.4% of Mohokare households. Confirm the day at 051 673 9600 before you put a bin out.",
      "Die rooster is ’n monster, nie die tegniese ronde nie. Bevestig die dag by 051 673 9600.",
      "Lenane ke sampole, eseng potoloho ya nnete. Netefatsa letsatsi ho 051 673 9600.",
      "Ishedyuli ngummelo, ayiyomjikelo wokwenene. Qinisekisa usuku ku-051 673 9600.",
    ),
    source: "AGSA 2023–24 service-access tables for Mohokare",
    keywords: ["refuse", "trash", "vullis", "ditshila", "inkunkuma", "bin", "landfill"],
  },
  {
    id: "languages",
    q: L("Which languages should the municipality use?", "Watter tale moet die munisipaliteit gebruik?", "Masepala o lokela ho sebedisa dipuo dife?", "Ngoluphi ulwimi olufanele lusetyenziswe ngumasipala?"),
    a: L(
      "Sesotho, Afrikaans and isiXhosa cover more than nine in ten households in the last published language count, with English as the language of records. This portal keeps all four one tap from the header.",
      "Sesotho, Afrikaans en isiXhosa dek meer as nege uit tien huishoudings. Engels bly die taal van rekords.",
      "Sesotho, Afrikaans le isiXhosa di koahela malapa a fetang a robong ho a leshome. Senyesemane ke puo ya direkoto.",
      "IsiSuthu, isiBhulu nesiXhosa zigubungela amakhaya angaphezu kwethoba kwishumi. IsiNgesi silulwimi lweerekhodi.",
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
      const hay = [item.keywords.join(" "), ...Object.values(item.q), ...Object.values(item.a)].join(" ").toLowerCase();
      let score = 0;
      for (const part of q.split(/\s+/)) if (part && hay.includes(part)) score += 1;
      return { item, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score);
  return (scored.length ? scored : answers.map((item) => ({ item, score: 0 }))).slice(0, 3).map((row) => row.item);
}

export const SAMPLE_ACCOUNTS = [
  { no: "1842", name: "M. Molehe", stand: "Stand 18, Matlakeng", services: "Water, sanitation, refuse", balance: "1 240.00", note: "Sample household. Not a real balance." },
  { no: "0904", name: "P. Venter", stand: "Erf 42, Hoofd Street", services: "Refuse, sewer", balance: "860.00", note: "Sample household. Not a real balance." },
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
