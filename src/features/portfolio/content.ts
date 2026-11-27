import type { Text } from './i18n'

export const email = 'karl.anthony.garozzo@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/karl-anthony-garozzo-278728301/'
export const github = 'https://github.com/KarlGarozzo'
export const cv = '/Karl-Anthony-Garozzo-CV.pdf'

/** App-icon style tiles: two letters on a dark square, like a design-tool dock. */
export const skills: { code: string; name: Text; bg: string; fg: string }[] = [
  { code: 'Ts', name: 'TypeScript', bg: '#0c1f3d', fg: '#4f9dff' },
  { code: 'Re', name: 'React', bg: '#08262e', fg: '#61dafb' },
  { code: 'Nx', name: 'Next.js', bg: '#161616', fg: '#f2f2f2' },
  { code: 'Th', name: 'Three.js', bg: '#1d1d24', fg: '#c9c9ff' },
  { code: 'Py', name: 'Python', bg: '#262009', fg: '#ffd43b' },
  { code: 'Ja', name: 'Java', bg: '#2b1604', fg: '#f89820' },
  { code: 'C', name: 'C / C++', bg: '#0f1e33', fg: '#8fb3ff' },
  { code: 'Ia', name: { fr: 'IA & OpenAI', en: 'AI & OpenAI', pl: 'AI i OpenAI' }, bg: '#0c2a22', fg: '#3fe0a5' },
]

type Entry = { period: Text; title: Text; org: Text }

export const experience: Entry[] = [
  {
    period: '2025',
    title: {
      fr: 'Stagiaire en ingénierie logicielle',
      en: 'Software engineering intern',
      pl: 'Stażysta, inżynieria oprogramowania',
    },
    org: { fr: 'Webellian, Paris', en: 'Webellian, Paris', pl: 'Webellian, Paryż' },
  },
  {
    period: '2025',
    title: {
      fr: 'Gestion de projet & processus',
      en: 'Project & process management',
      pl: 'Zarządzanie projektami i procesami',
    },
    org: { fr: 'FDG Group, Paris', en: 'FDG Group, Paris', pl: 'FDG Group, Paryż' },
  },
  {
    period: { fr: '2024 – auj.', en: '2024 – now', pl: '2024 – obecnie' },
    title: {
      fr: 'Professeur particulier en informatique',
      en: 'Private computer science tutor',
      pl: 'Korepetytor z informatyki',
    },
    org: 'Superprof',
  },
]

export const education: Entry[] = [
  {
    period: '2024 – 2029',
    title: {
      fr: 'Cycle ingénieur, informatique',
      en: 'Engineering degree, computer science',
      pl: 'Studia inżynierskie, informatyka',
    },
    org: 'EFREI Paris',
  },
  {
    period: '2021 – 2024',
    title: {
      fr: 'Bac maths & NSI, avec mention',
      en: 'French baccalaureate, maths & CS, with honours',
      pl: 'Matura francuska, matematyka i informatyka, z wyróżnieniem',
    },
    org: {
      fr: 'Lycée Français International, Dubaï',
      en: 'Lycée Français International, Dubai',
      pl: 'Lycée Français International, Dubaj',
    },
  },
]

/** Spoken fluently: shown big, as the first thing people learn about me. */
export const languages: { code: string; name: Text }[] = [
  { code: 'PL', name: { fr: 'Polonais', en: 'Polish', pl: 'Polski' } },
  { code: 'FR', name: { fr: 'Français', en: 'French', pl: 'Francuski' } },
  { code: 'EN', name: { fr: 'Anglais', en: 'English', pl: 'Angielski' } },
]

/** Places I have lived, drawn as passport stamps. */
export const places: { city: Text; country: Text; ink: string; shape: 'round' | 'rect' | 'oval' }[] = [
  {
    city: { fr: 'Varsovie', en: 'Warsaw', pl: 'Warszawa' },
    country: { fr: 'Pologne', en: 'Poland', pl: 'Polska' },
    ink: '#c8302a',
    shape: 'round',
  },
  {
    city: { fr: 'Paris', en: 'Paris', pl: 'Paryż' },
    country: { fr: 'France', en: 'France', pl: 'Francja' },
    ink: '#1f3fb0',
    shape: 'rect',
  },
  {
    city: { fr: 'Dubaï', en: 'Dubai', pl: 'Dubaj' },
    country: { fr: 'Émirats arabes unis', en: 'United Arab Emirates', pl: 'Zjednoczone Emiraty Arabskie' },
    ink: '#11704a',
    shape: 'oval',
  },
  {
    city: 'Toronto',
    country: { fr: 'Canada', en: 'Canada', pl: 'Kanada' },
    ink: '#7a2c8f',
    shape: 'rect',
  },
]

/**
 * Magic cards. Each one is dealt face down and flips when clicked.
 * Add `video: '/videos/mon-tour.mp4'` (file in /public) to play a clip on the card face.
 */
export type MagicCard = {
  rank: string
  suit: '♠' | '♥' | '♦' | '♣'
  title: Text
  text: Text
  video?: string
}

export const magicCards: MagicCard[] = [
  {
    rank: 'A',
    suit: '♠',
    title: 'Close-up',
    text: {
      fr: 'Des tours à quelques centimètres des gens, cartes en main.',
      en: 'Tricks performed inches away from people, cards in hand.',
      pl: 'Sztuczki kilka centymetrów od widzów, z kartami w dłoni.',
    },
  },
  {
    rank: 'K',
    suit: '♥',
    title: { fr: 'Cartomagie', en: 'Card magic', pl: 'Karciana magia' },
    text: {
      fr: 'Manipulations, contrôles et effets avec un simple jeu de cartes.',
      en: 'Sleights, controls and effects with an ordinary deck of cards.',
      pl: 'Manipulacje, kontrole i efekty ze zwykłą talią kart.',
    },
  },
  {
    rank: 'Q',
    suit: '♦',
    title: { fr: 'Le même goût du détail', en: 'The same eye for detail', pl: 'Ta sama dbałość o szczegóły' },
    text: {
      fr: 'La magie m’apprend ce que le code demande aussi : la précision, le timing et l’effet sur le public.',
      en: 'Magic teaches me what code demands too: precision, timing and the effect on the audience.',
      pl: 'Magia uczy mnie tego, czego wymaga też kod: precyzji, wyczucia czasu i wrażenia na odbiorcach.',
    },
  },
  {
    rank: 'J',
    suit: '♣',
    title: { fr: 'Vidéos à venir', en: 'Videos coming soon', pl: 'Wkrótce filmy' },
    text: {
      fr: 'Je prépare des vidéos de mes tours. Elles arriveront ici.',
      en: 'I’m filming videos of my tricks. They’ll land right here.',
      pl: 'Przygotowuję filmy z moimi sztuczkami. Pojawią się właśnie tutaj.',
    },
  },
]
