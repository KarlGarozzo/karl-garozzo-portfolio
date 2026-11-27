import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const langs = ['fr', 'en', 'pl'] as const
export type Lang = (typeof langs)[number]

/** A piece of content in the three languages. Plain strings are the same everywhere (names, brands). */
export type Text = string | Record<Lang, string>

const fr = {
  docTitle: 'Karl-Anthony Garozzo — Portfolio',
  skip: 'Aller au contenu',
  switchLabel: 'Langue',
  nav: { label: 'Navigation principale', projects: 'Projets', about: 'À propos', magic: 'Magie', contact: 'Contact' },
  cover: {
    title: 'Portfolio de Karl-Anthony Garozzo',
    intro: 'Étudiant ingénieur à l’EFREI Paris, je conçois et je code des sites web, de l’idée à la mise en ligne.',
    fluent: 'parlés couramment',
    role: 'Développeur web & magicien',
  },
  hello: {
    title: 'Hello',
    kicker: 'Je m’appelle Karl-Anthony',
    bioBefore:
      'Étudiant ingénieur à l’EFREI Paris, j’ai vécu en France, en Pologne, à Dubaï et à Toronto, et je parle couramment ',
    bioStrong: 'polonais, français et anglais',
    bioAfter:
      '. Je conçois et je code des sites et des outils web, de l’idée jusqu’à la mise en ligne. Et quand je ne code pas, je fais de la magie.',
    cv: 'Télécharger mon CV',
    education: 'Formation',
    skills: 'Compétences',
    experience: 'Expérience',
    cardHint: 'K♠ · survole la carte',
    cardAlt: 'Karl-Anthony Garozzo en roi de pique',
  },
  passport: {
    eyebrow: 'Trilingue',
    title: 'Je parle couramment polonais, français et anglais',
    level: 'courant',
    note: 'trois langues, quatre pays',
    livedIn: 'J’ai vécu à',
  },
  spotlight: {
    eyebrow: 'Projet phare',
    visit: 'Visiter',
    live: 'En direct',
    preview: 'Aperçu',
    explore: 'Explorer le site ici',
    liveTitle: 'le site en direct',
    note: 'un de mes plus gros projets',
  },
  wall: {
    title: 'Mes projets',
    hintDesktop: 'clique sur une photo',
    hintMobile: 'fais glisser',
    more: 'D’autres projets arrivent au fur et à mesure.',
    open: 'Ouvrir la fiche',
    close: 'Fermer la fiche',
    discover: 'Découvrir le site',
  },
  magic: {
    eyebrow: 'En dehors du code',
    title: 'Aussi magicien',
    intro: 'La magie est ma grande passion. Je pratique surtout avec des cartes, au plus près des gens.',
    note: 'choisis une carte',
    flip: 'Retourner la carte',
  },
  contact: {
    title: 'On en parle',
    question: ' ?',
    note: 'écris-moi',
    mail: 'M’écrire',
    copied: 'Adresse copiée',
    location: 'Paris, France',
    callLabel: 'Appel vidéo',
    callAlt: 'Karl-Anthony à son bureau, devant son ordinateur',
    callMail: 'M’écrire un e-mail',
  },
  dock: { label: 'Navigation rapide', profile: 'Profil', projects: 'Projets', magic: 'Magie', contact: 'Contact' },
  common: { techs: 'Technologies utilisées', newTab: '(nouvel onglet)' },
}

export type Dict = typeof fr

const en: Dict = {
  docTitle: 'Karl-Anthony Garozzo — Portfolio',
  skip: 'Skip to content',
  switchLabel: 'Language',
  nav: { label: 'Main navigation', projects: 'Projects', about: 'About', magic: 'Magic', contact: 'Contact' },
  cover: {
    title: 'Karl-Anthony Garozzo’s portfolio',
    intro: 'Engineering student at EFREI Paris. I design and build websites, from the first idea all the way to launch.',
    fluent: 'spoken fluently',
    role: 'Web developer & magician',
  },
  hello: {
    title: 'Hello',
    kicker: 'My name is Karl-Anthony',
    bioBefore: 'Engineering student at EFREI Paris. I’ve lived in France, Poland, Dubai and Toronto, and I speak ',
    bioStrong: 'Polish, French and English fluently',
    bioAfter:
      '. I design and build websites and web tools, from the first idea all the way to launch. And when I’m not coding, I do magic.',
    cv: 'Download my CV',
    education: 'Education',
    skills: 'Skills',
    experience: 'Experience',
    cardHint: 'K♠ · hover the card',
    cardAlt: 'Karl-Anthony Garozzo as the King of Spades',
  },
  passport: {
    eyebrow: 'Trilingual',
    title: 'I speak Polish, French and English fluently',
    level: 'fluent',
    note: 'three languages, four countries',
    livedIn: 'I’ve lived in',
  },
  spotlight: {
    eyebrow: 'Featured project',
    visit: 'Visit',
    live: 'Live',
    preview: 'Preview',
    explore: 'Explore the site here',
    liveTitle: 'the live site',
    note: 'one of my biggest projects',
  },
  wall: {
    title: 'My projects',
    hintDesktop: 'click a photo',
    hintMobile: 'swipe',
    more: 'More projects are on their way.',
    open: 'Open',
    close: 'Close',
    discover: 'Visit the site',
  },
  magic: {
    eyebrow: 'Beyond code',
    title: 'Also a magician',
    intro: 'Magic is my big passion. I mostly perform with cards, up close with people.',
    note: 'pick a card',
    flip: 'Flip card',
  },
  contact: {
    title: 'Let’s talk',
    question: '?',
    note: 'write to me',
    mail: 'Email me',
    copied: 'Address copied',
    location: 'Paris, France',
    callLabel: 'Video call',
    callAlt: 'Karl-Anthony at his desk, in front of his laptop',
    callMail: 'Send me an email',
  },
  dock: { label: 'Quick navigation', profile: 'Profile', projects: 'Projects', magic: 'Magic', contact: 'Contact' },
  common: { techs: 'Technologies used', newTab: '(new tab)' },
}

const pl: Dict = {
  docTitle: 'Karl-Anthony Garozzo — Portfolio',
  skip: 'Przejdź do treści',
  switchLabel: 'Język',
  nav: { label: 'Nawigacja główna', projects: 'Projekty', about: 'O mnie', magic: 'Magia', contact: 'Kontakt' },
  cover: {
    title: 'Portfolio — Karl-Anthony Garozzo',
    intro: 'Student inżynierii w EFREI Paris. Projektuję i koduję strony internetowe — od pomysłu aż po wdrożenie.',
    fluent: 'mówię płynnie',
    role: 'Web developer i iluzjonista',
  },
  hello: {
    title: 'Cześć',
    kicker: 'Mam na imię Karl-Anthony',
    bioBefore:
      'Studiuję inżynierię w EFREI Paris. Mieszkałem we Francji, w Polsce, w Dubaju i w Toronto, i mówię płynnie ',
    bioStrong: 'po polsku, francusku i angielsku',
    bioAfter:
      '. Projektuję i koduję strony oraz narzędzia internetowe — od pomysłu aż po wdrożenie. A kiedy nie programuję, zajmuję się magią.',
    cv: 'Pobierz moje CV',
    education: 'Wykształcenie',
    skills: 'Umiejętności',
    experience: 'Doświadczenie',
    cardHint: 'K♠ · najedź na kartę',
    cardAlt: 'Karl-Anthony Garozzo jako król pik',
  },
  passport: {
    eyebrow: 'Trzy języki',
    title: 'Mówię płynnie po polsku, francusku i angielsku',
    level: 'płynnie',
    note: 'trzy języki, cztery kraje',
    livedIn: 'Gdzie mieszkałem',
  },
  spotlight: {
    eyebrow: 'Główny projekt',
    visit: 'Odwiedź',
    live: 'Na żywo',
    preview: 'Podgląd',
    explore: 'Przeglądaj stronę tutaj',
    liveTitle: 'strona na żywo',
    note: 'jeden z moich największych projektów',
  },
  wall: {
    title: 'Moje projekty',
    hintDesktop: 'kliknij zdjęcie',
    hintMobile: 'przesuń',
    more: 'Kolejne projekty już wkrótce.',
    open: 'Otwórz projekt',
    close: 'Zamknij',
    discover: 'Zobacz stronę',
  },
  magic: {
    eyebrow: 'Poza kodem',
    title: 'Także iluzjonista',
    intro: 'Magia to moja wielka pasja. Występuję głównie z kartami, z bliska, tuż przy widzach.',
    note: 'wybierz kartę',
    flip: 'Odwróć kartę',
  },
  contact: {
    title: 'Daj znać',
    question: '!',
    note: 'napisz do mnie',
    mail: 'Napisz',
    copied: 'Skopiowano adres',
    location: 'Paryż, Francja',
    callLabel: 'Rozmowa wideo',
    callAlt: 'Karl-Anthony przy biurku, przed laptopem',
    callMail: 'Napisz do mnie e-mail',
  },
  dock: { label: 'Szybka nawigacja', profile: 'Profil', projects: 'Projekty', magic: 'Magia', contact: 'Kontakt' },
  common: { techs: 'Użyte technologie', newTab: '(nowa karta)' },
}

const dictionaries: Record<Lang, Dict> = { fr, en, pl }
const STORAGE_KEY = 'pf-lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && (langs as readonly string[]).includes(saved)) return saved as Lang
  } catch {
    /* storage unavailable: fall back to the browser language */
  }
  const browser = (navigator.language || 'fr').slice(0, 2).toLowerCase()
  if (browser === 'pl') return 'pl'
  if (browser === 'fr') return 'fr'
  return 'en'
}

type LangState = { lang: Lang; setLang: (lang: Lang) => void }
const LangContext = createContext<LangState>({ lang: 'fr', setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = dictionaries[lang].docTitle
  }, [lang])

  const value = useMemo<LangState>(
    () => ({
      lang,
      setLang: (next) => {
        setLangState(next)
        try {
          localStorage.setItem(STORAGE_KEY, next)
        } catch {
          /* not saved: the choice still applies to this visit */
        }
      },
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

/** Current language, its dictionary, and `tx` to pick the right version of a piece of content. */
export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return useMemo(
    () => ({
      lang,
      setLang,
      t: dictionaries[lang],
      tx: (text: Text) => (typeof text === 'string' ? text : text[lang]),
    }),
    [lang, setLang],
  )
}

/** FR / EN / PL pill switch. */
export function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLang()
  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t.switchLabel}>
      {langs.map((code) => (
        <button key={code} type="button" aria-pressed={lang === code} lang={code} onClick={() => setLang(code)}>
          {lang === code && (
            <motion.span
              className="lang-switch-pill"
              layoutId={`lang-pill-${className}`}
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            />
          )}
          <span className="lang-switch-code">{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}
