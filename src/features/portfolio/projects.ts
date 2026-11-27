import type { Text } from './i18n'
import academicTracker from './assets/projects/academic-tracker.webp'
import amorea from './assets/projects/amorea.webp'
import theMillionMap from './assets/projects/the-million-map.webp'

export type PortfolioProject = {
  id: string
  title: string
  category: Text
  summary: Text
  details: Text
  stack: readonly Text[]
  image?: { src: string; alt: Text }
  /** Optional looping clip (mp4/webm), e.g. for motion design work. The image is used as poster. */
  video?: string
  /** Shown as a small badge on the card, e.g. a paused product. */
  status?: Text
  /**
   * Live version of the site shown in a browser frame. The site must allow being framed
   * (no `X-Frame-Options: DENY`, `frame-ancestors` including the portfolio domain).
   */
  embed?: string
  featured?: boolean
  /** Gets its own large section instead of a polaroid. */
  spotlight?: boolean
  link?: string
}

export const projects: readonly PortfolioProject[] = [
  {
    id: 'the-million-map',
    title: 'The Million Map',
    category: { fr: 'Globe interactif', en: 'Interactive globe', pl: 'Interaktywny globus' },
    summary: {
      fr: 'Un globe à explorer et à personnaliser, parcelle par parcelle.',
      en: 'A globe to explore and make your own, one plot at a time.',
      pl: 'Globus do odkrywania i personalizowania, działka po działce.',
    },
    details: {
      fr: 'Tout part d’une question assez simple pour finir en gros chantier. Et si chacun pouvait laisser sa marque sur un coin du globe ? La carte permet de chercher un lieu, de s’en approcher et de découvrir les parcelles autour.',
      en: 'It started with a simple question and turned into a big build. What if everyone could leave their mark on a corner of the globe? The map lets you search for a place, zoom in and discover the plots around it.',
      pl: 'Wszystko zaczęło się od prostego pytania, a skończyło na dużym projekcie. A gdyby każdy mógł zostawić swój ślad na kawałku globu? Mapa pozwala wyszukać miejsce, przybliżyć je i odkryć działki wokół.',
    },
    stack: ['Next.js', 'Three.js'],
    image: {
      src: theMillionMap,
      alt: {
        fr: 'Le globe de The Million Map, centré sur l’Europe et l’Afrique',
        en: 'The Million Map globe, centred on Europe and Africa',
        pl: 'Globus The Million Map, wycentrowany na Europie i Afryce',
      },
    },
    featured: true,
    link: 'https://jointhemillionmap.com/',
  },
  {
    id: 'amorea',
    title: 'Amorea',
    category: { fr: 'Sites de mariage', en: 'Wedding websites', pl: 'Strony ślubne' },
    summary: {
      fr: 'Des faire-part qui s’ouvrent à l’écran et un espace privé pour organiser le mariage.',
      en: 'Wedding invitations that open on screen, plus a private space to plan the big day.',
      pl: 'Zaproszenia ślubne, które otwierają się na ekranie, i prywatna przestrzeń do planowania wesela.',
    },
    details: {
      fr: 'J’ai exploré plusieurs directions artistiques et travaillé le geste d’ouvrir un faire-part en 3D. Derrière l’invitation, les mariés peuvent suivre les réponses, le budget et le plan de table.',
      en: 'I explored several art directions and crafted the gesture of opening an invitation in 3D. Behind the invitation, the couple can track RSVPs, the budget and the seating plan.',
      pl: 'Przetestowałem kilka kierunków artystycznych i dopracowałem gest otwierania zaproszenia w 3D. Za zaproszeniem para młoda może śledzić odpowiedzi gości, budżet i plan stołów.',
    },
    stack: ['Next.js', 'Three.js'],
    image: {
      src: amorea,
      alt: {
        fr: 'Faire-part Palazzo sur un téléphone, à côté de son enveloppe cachetée',
        en: 'The Palazzo invitation on a phone, next to its sealed envelope',
        pl: 'Zaproszenie Palazzo na telefonie, obok zapieczętowanej koperty',
      },
    },
    link: 'https://www.amorea.love/',
    spotlight: true,
    // Uncomment once amorea.love allows https://karl-anthony-garozzo.com in `frame-ancestors`.
    // embed: 'https://www.amorea.love/',
  },
  {
    id: 'academic-tracker',
    title: 'Academic Tracker',
    category: { fr: 'Outil étudiant', en: 'Student tool', pl: 'Narzędzie dla studentów' },
    summary: {
      fr: 'Un tableau de bord pour savoir si « ça passe » sans ressortir la calculette.',
      en: 'A dashboard to see if you’ll pass without reaching for the calculator.',
      pl: 'Panel, który pokazuje, czy „zdasz”, bez wyciągania kalkulatora.',
    },
    details: {
      fr: 'On renseigne ses notes, on calcule sa moyenne de semestre et on peut partager la simulation par lien ou par QR code. Pratique quand il reste une note à recevoir et qu’on veut tester plusieurs scénarios.',
      en: 'You enter your grades, get your semester average and can share the simulation by link or QR code. Handy when one grade is still missing and you want to test a few scenarios.',
      pl: 'Wpisujesz oceny, liczysz średnią z semestru i możesz udostępnić symulację linkiem lub kodem QR. Przydatne, gdy brakuje jeszcze jednej oceny i chcesz sprawdzić kilka scenariuszy.',
    },
    stack: ['React', 'TypeScript'],
    image: {
      src: academicTracker,
      alt: {
        fr: 'Vue du tableau de bord d’Academic Tracker, avec des notes de démonstration',
        en: 'The Academic Tracker dashboard, with demo grades',
        pl: 'Panel Academic Tracker z przykładowymi ocenami',
      },
    },
  },
  {
    id: 'somehow-life',
    title: 'Somehow',
    category: { fr: 'SaaS · génération d’images', en: 'SaaS · image generation', pl: 'SaaS · generowanie obrazów' },
    summary: {
      fr: 'Un SaaS de génération d’images par IA, lancé de bout en bout.',
      en: 'An AI image generation SaaS, built and launched end to end.',
      pl: 'SaaS do generowania obrazów przez AI, zbudowany i wdrożony od A do Z.',
    },
    details: {
      fr: 'J’ai conçu et mis en ligne le produit de bout en bout, de l’interface à la génération d’images. Le service est en pause pour le moment, mais le site est toujours en ligne.',
      en: 'I designed and shipped the product end to end, from the interface to the image generation. The service is paused for now, but the site is still online.',
      pl: 'Zaprojektowałem i wdrożyłem produkt od A do Z, od interfejsu po generowanie obrazów. Usługa jest na razie wstrzymana, ale strona wciąż działa.',
    },
    stack: ['Supabase', { fr: 'IA générative', en: 'Generative AI', pl: 'Generatywna AI' }, 'SaaS'],
    status: { fr: 'En pause', en: 'Paused', pl: 'Wstrzymany' },
    link: 'https://www.somehow.life/',
  },
  {
    id: 'motion-from-zero',
    title: 'Motion From Zero',
    category: { fr: 'Formation motion design', en: 'Motion design course', pl: 'Kurs motion designu' },
    summary: {
      fr: 'Une formation pour apprendre le motion design en partant de zéro.',
      en: 'A course to learn motion design starting from zero.',
      pl: 'Kurs, który uczy motion designu od zera.',
    },
    details: {
      fr: 'J’ai créé cette formation pour transmettre ce que j’ai appris en motion design : les bases de l’animation, le rythme et les outils, étape par étape.',
      en: 'I created this course to pass on what I’ve learned in motion design: animation basics, rhythm and tools, step by step.',
      pl: 'Stworzyłem ten kurs, aby przekazać to, czego nauczyłem się w motion designie: podstawy animacji, rytm i narzędzia, krok po kroku.',
    },
    stack: ['Motion design', { fr: 'Pédagogie', en: 'Teaching', pl: 'Dydaktyka' }],
  },
]
