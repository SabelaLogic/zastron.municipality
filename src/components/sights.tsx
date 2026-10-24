import { Pause, Play } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import type { Lang } from "@/lib/prefs";

type Line = Record<Lang, string>;

export type Sight = {
  id: string;
  image: string;
  video?: string;
  title: Line;
  place: Line;
};

export const sights: Sight[] = [
  {
    id: "eye",
    image: "/sights/eye-poster.jpg",
    video: "/sights/eye.mp4",
    title: {
      en: "The Eye of Zastron",
      af: "Die Oog van Zastron",
      st: "Leihlo la Zastron",
      xh: "Iliso laseZastron",
    },
    place: {
      en: "Aasvoëlberg · the cliff is moving",
      af: "Aasvoëlberg · die krans beweeg",
      st: "Aasvoëlberg · lefika lea sisinyeha",
      xh: "Aasvoëlberg · ilitye liyahamba",
    },
  },
  {
    id: "street",
    image: "/sights/street.jpg",
    title: {
      en: "Under the mountain",
      af: "Onder die berg",
      st: "Tlasa thaba",
      xh: "Phantsi kwentaba",
    },
    place: {
      en: "Illustration · sandstone town, not a survey of Hoofd Street",
      af: "Illustrasie · sandsteendorp, nie ’n opmeting van Hoofdstraat nie",
      st: "Setshwantsho · toropo ya sandstone, eseng tekanyo ya Hoofd Street",
      xh: "Umfanekiso · idolophu yelitye, hayi uvavanyo lweHoofd Street",
    },
  },
  {
    id: "veld",
    image: "/sights/veld.jpg",
    title: {
      en: "Toward the Caledon",
      af: "Na die Caledon",
      st: "Ho ya Caledon",
      xh: "Ukuya eCaledon",
    },
    place: {
      en: "Illustration · Mohokare country, sheep and the escarpment",
      af: "Illustrasie · Mohokare-wêreld, skape en die platorand",
      st: "Setshwantsho · naha ya Mohokare, dinku le thaba",
      xh: "Umfanekiso · ilizwe laseMohokare, iigusha kunye nentaba",
    },
  },
];

const stripTitle: Line = {
  en: "Sights of the seat",
  af: "Gesigte van die setel",
  st: "Dibonwa tsa setulo",
  xh: "Imbonakalo yesihlalo",
};

const pauseLabel: Line = {
  en: "Pause",
  af: "Wag",
  st: "Emisa",
  xh: "Misa",
};

const playLabel: Line = {
  en: "Play",
  af: "Speel",
  st: "Bapala",
  xh: "Dlala",
};

export function SightStage({
  lang,
  index,
  paused,
  onSelect,
  onPause,
  children,
}: {
  lang: Lang;
  index: number;
  paused: boolean;
  onSelect: (index: number) => void;
  onPause: () => void;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const current = sights[index] ?? sights[0];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (current.video && !paused && !reduce) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [current.video, paused, index]);

  return (
    <section className="sight-hero relative overflow-hidden bg-navy" aria-roledescription="carousel">
      {sights.map((sight, i) => {
        const on = i === index;
        const cls =
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 " +
          (on ? "sight-on opacity-100" : "pointer-events-none opacity-0");
        if (sight.video) {
          return (
            <video
              key={sight.id}
              ref={videoRef}
              className={cls}
              src={sight.video}
              poster={sight.image}
              muted
              playsInline
              loop
              aria-hidden="true"
            />
          );
        }
        return <img key={sight.id} src={sight.image} alt="" className={cls} />;
      })}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-4 px-4 py-8 pb-24 md:grid-cols-12 md:py-14 md:pb-28">
        {children}
      </div>
      <div className="sight-panel absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-center gap-3 px-4 py-2">
        <p className="min-w-0 flex-1 text-sm text-ink">
          <span className="font-bold">{current.title[lang]}</span>
          <span className="text-muted"> · {current.place[lang]}</span>
        </p>
        <div className="flex items-center gap-1" role="tablist" aria-label={stripTitle[lang]}>
          {sights.map((sight, i) => (
            <button
              key={sight.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={sight.title[lang]}
              onClick={() => onSelect(i)}
              className="inline-flex h-11 w-10 items-center justify-center"
            >
              <span className={"block h-2 w-7 " + (i === index ? "bg-navy" : "bg-line")} />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={onPause}
          aria-pressed={paused}
          className="inline-flex h-11 items-center gap-2 border border-line bg-paper px-3 text-sm text-ink"
        >
          {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
          {paused ? playLabel[lang] : pauseLabel[lang]}
        </button>
      </div>
    </section>
  );
}

export function SightStrip({
  lang,
  index,
  onSelect,
}: {
  lang: Lang;
  index: number;
  onSelect: (index: number) => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="font-serif text-3xl text-ink">{stripTitle[lang]}</h2>
      <ul className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {sights.map((sight, i) => (
          <li key={sight.id}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-current={i === index ? "true" : undefined}
              className={
                "block w-full text-left " + (i === index ? "ring-2 ring-navy ring-offset-2 ring-offset-paper" : "")
              }
            >
              <img src={sight.image} alt="" className="aspect-video w-full object-cover" />
              <span className="mt-2 block text-sm font-bold text-ink">{sight.title[lang]}</span>
              <span className="block text-sm text-muted">{sight.place[lang]}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
