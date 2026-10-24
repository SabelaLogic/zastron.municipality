import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "af" | "st" | "xh";

export const LANGS: { id: Lang; endonym: string }[] = [
  { id: "en", endonym: "English" },
  { id: "af", endonym: "Afrikaans" },
  { id: "st", endonym: "Sesotho" },
  { id: "xh", endonym: "isiXhosa" },
];

type Prefs = {
  lang: Lang;
  contrast: boolean;
  large: boolean;
  banner: boolean;
};

const DEFAULTS: Prefs = {
  lang: "en",
  contrast: false,
  large: false,
  banner: true,
};

const KEY = "trompsburg-civic-prefs";

type Ctx = Prefs & {
  setLang: (lang: Lang) => void;
  toggleContrast: () => void;
  toggleLarge: () => void;
  dismissBanner: () => void;
};

const PrefsContext = createContext<Ctx | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Prefs>;
        setPrefs({ ...DEFAULTS, ...parsed });
      }
    } catch {
      /* keep defaults */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = prefs.lang;
    document.documentElement.dataset.contrast = prefs.contrast ? "high" : "normal";
    document.documentElement.dataset.text = prefs.large ? "lg" : "md";
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      /* private mode */
    }
  }, [prefs]);

  const value = useMemo<Ctx>(
    () => ({
      ...prefs,
      setLang: (lang) => setPrefs((p) => ({ ...p, lang })),
      toggleContrast: () => setPrefs((p) => ({ ...p, contrast: !p.contrast })),
      toggleLarge: () => setPrefs((p) => ({ ...p, large: !p.large })),
      dismissBanner: () => setPrefs((p) => ({ ...p, banner: false })),
    }),
    [prefs],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs outside provider");
  return ctx;
}
