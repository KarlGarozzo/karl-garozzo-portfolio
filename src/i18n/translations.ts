export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const languageMeta = {
  en: { code: "en", flag: "EN", name: "English" },
  fr: { code: "fr", flag: "FR", name: "Français" },
  pl: { code: "pl", flag: "PL", name: "Polski" },
} as const;

const messages = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Karl-Anthony Garozzo",
      tagline: "Future Engineer | Creative Technologist",
      subtitle:
        "Computer Science Engineering student at EFREI Paris. I combine technical rigor with product thinking to build meaningful digital experiences.",
      cta: "Contact Me",
      available: "Available for internships & opportunities",
      cv: "Download CV",
    },
    about: {
      title: "About",
      bio: "Computer Science engineering student at EFREI Paris, with international experience in Dubai and Warsaw. I bridge engineering depth, product intuition, and design quality.",
      tagline: "Let's connect and build something meaningful.",
    },
    education: {
      title: "Education",
      efrei: {
        title: "EFREI Paris - Digital Engineering School",
        degree: "Computer Science & Digital Technologies",
        period: "Sept. 2024 - Jul. 2029",
        location: "Paris, France",
        desc: "Ranked among the top post-bac engineering schools in France.",
      },
      lfigp: {
        title: "Lycée Français International Georges Pompidou",
        degree: "French Baccalauréat - Math & Computer Science",
        period: "Sept. 2021 - Jul. 2024",
        location: "Dubai, UAE",
        desc: "Graduated with honors in a multicultural environment.",
      },
      lfv: {
        title: "Lycée Français de Varsovie",
        degree: "Secondary Education",
        period: "Until Jul. 2021",
        location: "Warsaw, Poland",
        desc: "French curriculum in an international context.",
      },
    },
    projects: {
      title: "Selected Projects",
      subtitle:
        "Case studies that combine engineering, UX thinking, and measurable outcomes.",
      view: "View",
      bmp: {
        title: "BMP Image Filter App",
        desc: "C-based image processing tool with a focused desktop interface.",
      },
      logistics: {
        title: "FDG Logistics Tool",
        desc: "Python + Excel automation tool for logistics workflows.",
      },
      portfolio: {
        title: "Modern Portfolio",
        desc: "Responsive portfolio built with React, TypeScript, and motion.",
      },
      ai: {
        title: "AI & Automation Projects",
        desc: "AI-powered assistants and workflow automation experiments.",
      },
    },
    projectModal: {
      caseStudy: "Case study",
      overview: "Project Overview",
      stack: "Technology Stack",
      features: "Key Features",
      challenges: "Challenges & Solutions",
      code: "View Code",
      demo: "Live Demo",
      noCode: "Private repository",
      noDemo: "Demo unavailable",
    },
    experience: {
      title: "Experience",
      subtitle: "Focused experience highlights with measurable impact.",
      items: {
        webellian: {
          title: "Software Engineering Intern",
          company: "Webellian",
          period: "Jun 2025 - Sep 2025",
          duration: "4 months",
          location: "Paris, France",
          impact1: "Built and shipped internal product features with clean, maintainable frontend code.",
          impact2: "Collaborated with engineering stakeholders to refine requirements and improve delivery quality.",
          impact3: "Reduced repetitive workflow friction through pragmatic UI and automation improvements.",
        },
        fdg: {
          title: "Project Management & Process Improvement",
          company: "FDG Group",
          period: "Summer 2025",
          duration: "2 months",
          location: "Paris, France",
          impact1: "Coordinated operational tasks across teams to keep execution aligned with deadlines.",
          impact2: "Structured reporting workflows to improve visibility on project progress.",
          impact3: "Supported process optimization with data-backed recommendations.",
        },
        superprof: {
          title: "Computer Science Tutor",
          company: "Superprof",
          period: "Oct 2024 - Present",
          duration: "Part-time",
          location: "Paris, Hybrid",
          impact1: "Designed personalized tutoring paths for high school CS students.",
          impact2: "Improved student confidence and exam readiness through structured coaching.",
          impact3: "Translated complex technical concepts into clear, practical explanations.",
        },
      },
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Tools and capabilities I use to ship high-quality products.",
      programming: "Languages & Programming",
      tools: "Tools & Platforms",
      soft: "Soft Skills",
      languages: "Spoken Languages",
      "problem-solving": "Problem Solving",
      leadership: "Leadership",
      adaptability: "Adaptability",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Reach me directly - no forms, just fast contact.",
      quickActions: "Quick Actions",
      quickActionsDesc: "Get in touch in one click",
      emailMe: "Email Me",
      callMe: "Call Me",
      linkedIn: "LinkedIn",
      copyAll: "Copy All Contacts",
      copied: "Copied!",
      copyDescription: "copied to clipboard",
      copyFailed: "Copy failed",
      copyManually: "Please copy manually",
      name: "Name",
      email: "Email",
      phone: "Phone",
      location: "Paris, France",
      locationValue: "Paris, France",
      emailValue: "karl.anthony.garozzo@gmail.com",
      phoneValue: "+33 6 80 45 37 97",
      linkedInValue: "Karl-Anthony Garozzo",
      openLabel: "Open",
      copyLabel: "Copy",
      connect: "Let's connect and build something meaningful.",
      qrStep1: "Scan the QR code with your phone.",
      qrStep2: "Add the contact card when prompted.",
      qrStep3: "Call directly from your contacts app.",
    },
    footer: {
      designed: "Designed & coded by Karl-Anthony",
      version: "v1.0.0 - 2025",
      cv: "Download CV",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      greeting: "Karl-Anthony Garozzo",
      tagline: "Futur Ingénieur | Technologue Créatif",
      subtitle:
        "Étudiant en ingénierie informatique à EFREI Paris. Je combine rigueur technique et vision produit pour créer des expériences numériques utiles.",
      cta: "Me contacter",
      available: "Disponible pour stages & opportunités",
      cv: "Télécharger CV",
    },
    about: {
      title: "À propos",
      bio: "Étudiant en ingénierie informatique à EFREI Paris, avec une expérience internationale à Dubaï et Varsovie. Je relie expertise technique, sens produit et qualité d'exécution.",
      tagline: "Échangeons et construisons quelque chose de fort.",
    },
    education: {
      title: "Formation",
      efrei: {
        title: "EFREI Paris - École d'ingénieurs du numérique",
        degree: "Ingénierie Informatique & Technologies Numériques",
        period: "Sept. 2024 - Juil. 2029",
        location: "Paris, France",
        desc: "Classée parmi les meilleures écoles post-bac en France.",
      },
      lfigp: {
        title: "Lycée Français International Georges Pompidou",
        degree: "Baccalauréat Français - Mathématiques & NSI",
        period: "Sept. 2021 - Juil. 2024",
        location: "Dubaï, EAU",
        desc: "Diplômé avec mention dans un environnement multiculturel.",
      },
      lfv: {
        title: "Lycée Français de Varsovie",
        degree: "Enseignement secondaire",
        period: "Jusqu'à Juil. 2021",
        location: "Varsovie, Pologne",
        desc: "Parcours français dans un cadre académique international.",
      },
    },
    projects: {
      title: "Projets Sélectionnés",
      subtitle:
        "Des études de cas qui combinent ingénierie, UX et impact concret.",
      view: "Voir",
      bmp: {
        title: "Application de Filtres BMP",
        desc: "Outil de traitement d'images en C avec interface desktop.",
      },
      logistics: {
        title: "Outil Logistique FDG",
        desc: "Automatisation Python + Excel pour les workflows logistiques.",
      },
      portfolio: {
        title: "Portfolio Moderne",
        desc: "Portfolio responsive réalisé avec React, TypeScript et motion.",
      },
      ai: {
        title: "Projets IA & Automatisation",
        desc: "Assistants IA et expérimentations autour de l'automatisation.",
      },
    },
    projectModal: {
      caseStudy: "Étude de cas",
      overview: "Vue d'ensemble",
      stack: "Stack technique",
      features: "Fonctionnalités clés",
      challenges: "Défis & solutions",
      code: "Voir le code",
      demo: "Démo en ligne",
      noCode: "Repository privé",
      noDemo: "Démo indisponible",
    },
    experience: {
      title: "Experience",
      subtitle: "Un resume executif de mes experiences les plus pertinentes.",
      items: {
        webellian: {
          title: "Stagiaire en ingenierie logicielle",
          company: "Webellian",
          period: "Juin 2025 - Sept. 2025",
          duration: "4 mois",
          location: "Paris, France",
          impact1: "Developpement et livraison de fonctionnalites produit avec un code frontend maintenable.",
          impact2: "Collaboration avec les parties prenantes techniques pour clarifier les besoins et fiabiliser la livraison.",
          impact3: "Reduction des frictions operationnelles via des ameliorations UI et automatisation ciblee.",
        },
        fdg: {
          title: "Gestion de projet et amelioration des processus",
          company: "FDG Group",
          period: "Ete 2025",
          duration: "2 mois",
          location: "Paris, France",
          impact1: "Coordination des taches transverses pour tenir les delais de livraison.",
          impact2: "Structuration des reportings pour une meilleure visibilite projet.",
          impact3: "Appui a l'optimisation des processus avec des recommandations basees sur les donnees.",
        },
        superprof: {
          title: "Professeur particulier en informatique",
          company: "Superprof",
          period: "Oct. 2024 - Aujourd'hui",
          duration: "Temps partiel",
          location: "Paris, Hybride",
          impact1: "Conception de parcours pedagogiques personnalises pour des lyceens.",
          impact2: "Renforcement de la confiance et de la preparation aux examens.",
          impact3: "Vulgarisation de notions techniques complexes de maniere claire et actionnable.",
        },
      },
    },
    skills: {
      title: "Compétences",
      subtitle:
        "Outils et capacités que j'utilise pour livrer des produits robustes.",
      programming: "Langages & Développement",
      tools: "Outils & Plateformes",
      soft: "Soft Skills",
      languages: "Langues Parlées",
      "problem-solving": "Résolution de problèmes",
      leadership: "Leadership",
      adaptability: "Adaptabilité",
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Un contact direct - sans formulaire, sans friction.",
      quickActions: "Actions rapides",
      quickActionsDesc: "Entrer en contact en un clic",
      emailMe: "M'envoyer un email",
      callMe: "M'appeler",
      linkedIn: "LinkedIn",
      copyAll: "Copier tous les contacts",
      copied: "Copié !",
      copyDescription: "copié dans le presse-papiers",
      copyFailed: "Échec de la copie",
      copyManually: "Veuillez copier manuellement",
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      location: "Paris, France",
      locationValue: "Paris, France",
      emailValue: "karl.anthony.garozzo@gmail.com",
      phoneValue: "+33 6 80 45 37 97",
      linkedInValue: "Karl-Anthony Garozzo",
      openLabel: "Ouvrir",
      copyLabel: "Copier",
      connect: "Connectons-nous et construisons quelque chose de solide.",
      qrStep1: "Scanne le QR code avec ton téléphone.",
      qrStep2: "Ajoute la fiche contact lorsqu'elle s'ouvre.",
      qrStep3: "Appelle directement depuis ta liste de contacts.",
    },
    footer: {
      designed: "Conçu & codé par Karl-Anthony",
      version: "v1.0.0 - 2025",
      cv: "Télécharger CV",
    },
  },
  pl: {
    nav: {
      about: "O mnie",
      projects: "Projekty",
      experience: "Doświadczenie",
      skills: "Umiejętności",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Karl-Anthony Garozzo",
      tagline: "Przyszły Inżynier | Kreatywny Technolog",
      subtitle:
        "Student informatyki na EFREI Paris. Łączę dyscyplinę inżynierską z myśleniem produktowym, aby budować wartościowe doświadczenia cyfrowe.",
      cta: "Skontaktuj się",
      available: "Dostępny na staże i nowe możliwości",
      cv: "Pobierz CV",
    },
    about: {
      title: "O mnie",
      bio: "Student inżynierii informatycznej na EFREI Paris, z międzynarodowym doświadczeniem w Dubaju i Warszawie. Łączę głębię techniczną z podejściem produktowym.",
      tagline: "Połączmy się i stwórzmy coś wartościowego.",
    },
    education: {
      title: "Edukacja",
      efrei: {
        title: "EFREI Paris - Szkoła Inżynierii Cyfrowej",
        degree: "Informatyka i Technologie Cyfrowe",
        period: "Wrz. 2024 - Lip. 2029",
        location: "Paryż, Francja",
        desc: "Jedna z czołowych szkół inżynierskich we Francji.",
      },
      lfigp: {
        title: "Lycée Français International Georges Pompidou",
        degree: "Matura Francuska - Matematyka i Informatyka",
        period: "Wrz. 2021 - Lip. 2024",
        location: "Dubaj, ZEA",
        desc: "Ukończone z wyróżnieniem w środowisku międzynarodowym.",
      },
      lfv: {
        title: "Lycée Français de Varsovie",
        degree: "Edukacja średnia",
        period: "Do Lip. 2021",
        location: "Warszawa, Polska",
        desc: "Francuski program nauczania w międzynarodowym otoczeniu.",
      },
    },
    projects: {
      title: "Wybrane Projekty",
      subtitle:
        "Studia przypadku łączące inżynierię, UX i mierzalne rezultaty.",
      view: "Zobacz",
      bmp: {
        title: "Aplikacja Filtrów BMP",
        desc: "Narzędzie do przetwarzania obrazów w C z interfejsem desktop.",
      },
      logistics: {
        title: "Narzędzie Logistyczne FDG",
        desc: "Automatyzacja Python + Excel dla procesów logistycznych.",
      },
      portfolio: {
        title: "Nowoczesne Portfolio",
        desc: "Responsywne portfolio stworzone w React + TypeScript.",
      },
      ai: {
        title: "Projekty AI i Automatyzacji",
        desc: "Asystenci AI i automatyzacje przepływów pracy.",
      },
    },
    projectModal: {
      caseStudy: "Studium przypadku",
      overview: "Opis projektu",
      stack: "Stack technologiczny",
      features: "Najważniejsze funkcje",
      challenges: "Wyzwania i rozwiązania",
      code: "Zobacz kod",
      demo: "Zobacz demo",
      noCode: "Repozytorium prywatne",
      noDemo: "Demo niedostępne",
    },
    experience: {
      title: "Doswiadczenie",
      subtitle: "Krotkie, konkretne podsumowanie najwazniejszych doswiadczen.",
      items: {
        webellian: {
          title: "Stazysta Software Engineering",
          company: "Webellian",
          period: "Cze 2025 - Wrz 2025",
          duration: "4 miesiace",
          location: "Paryz, Francja",
          impact1: "Tworzenie i wdrazanie funkcji produktowych z naciskiem na jakosc kodu frontend.",
          impact2: "Wspolpraca z interesariuszami technicznymi przy doprecyzowaniu wymagan.",
          impact3: "Usprawnienie codziennych workflow dzieki konkretnym poprawkom UI i automatyzacji.",
        },
        fdg: {
          title: "Project Management i usprawnianie procesow",
          company: "FDG Group",
          period: "Lato 2025",
          duration: "2 miesiace",
          location: "Paryz, Francja",
          impact1: "Koordynacja zadan miedzyzespolowych dla terminowej realizacji.",
          impact2: "Uporzadkowanie raportowania i lepsza widocznosc postepu prac.",
          impact3: "Wsparcie optymalizacji procesow na podstawie danych.",
        },
        superprof: {
          title: "Korepetytor informatyki",
          company: "Superprof",
          period: "Paz 2024 - Obecnie",
          duration: "Niepelny etat",
          location: "Paryz, Hybrydowo",
          impact1: "Projektowanie indywidualnych sciezek nauki dla uczniow szkol srednich.",
          impact2: "Poprawa przygotowania do egzaminow i pewnosci uczniow.",
          impact3: "Przekladanie zlozonych tematow technicznych na praktyczne wyjasnienia.",
        },
      },
    },
    skills: {
      title: "Umiejętności",
      subtitle:
        "Narzędzia i kompetencje, których używam do budowy jakościowych produktów.",
      programming: "Języki i Programowanie",
      tools: "Narzędzia i Platformy",
      soft: "Umiejętności Miękkie",
      languages: "Znajomość Języków",
      "problem-solving": "Rozwiązywanie Problemów",
      leadership: "Przywództwo",
      adaptability: "Adaptacyjność",
    },
    contact: {
      title: "Skontaktuj się",
      subtitle: "Bezpośredni kontakt - bez formularzy i zbędnych kroków.",
      quickActions: "Szybkie akcje",
      quickActionsDesc: "Skontaktuj się jednym kliknięciem",
      emailMe: "Napisz do mnie",
      callMe: "Zadzwoń do mnie",
      linkedIn: "LinkedIn",
      copyAll: "Skopiuj wszystkie kontakty",
      copied: "Skopiowano!",
      copyDescription: "skopiowano do schowka",
      copyFailed: "Kopiowanie nie powiodło się",
      copyManually: "Skopiuj ręcznie",
      name: "Imię i nazwisko",
      email: "Email",
      phone: "Telefon",
      location: "Paryż, Francja",
      locationValue: "Paryż, Francja",
      emailValue: "karl.anthony.garozzo@gmail.com",
      phoneValue: "+33 6 80 45 37 97",
      linkedInValue: "Karl-Anthony Garozzo",
      openLabel: "Otwórz",
      copyLabel: "Kopiuj",
      connect: "Połączmy się i stwórzmy coś wartościowego.",
      qrStep1: "Zeskanuj kod QR telefonem.",
      qrStep2: "Dodaj nowy kontakt po wyświetleniu karty.",
      qrStep3: "Zadzwoń bezpośrednio z aplikacji kontaktów.",
    },
    footer: {
      designed: "Projekt i kod: Karl-Anthony",
      version: "v1.0.0 - 2025",
      cv: "Pobierz CV",
    },
  },
} as const;

export type Language = keyof typeof messages;

type Primitive = string | number | boolean | null | undefined;
type DotPrefix<TPrefix extends string, TKey extends string> =
  `${TPrefix}.${TKey}`;
type NestedKeyOf<TObject extends object> = {
  [Key in keyof TObject & string]: TObject[Key] extends Primitive
    ? Key
    : DotPrefix<Key, NestedKeyOf<TObject[Key]>>;
}[keyof TObject & string];

export type TranslationKey = NestedKeyOf<(typeof messages)["en"]>;

export const fallbackLanguage: Language = "en";
export const availableLanguages = Object.keys(messages) as Language[];
export const translations = messages;

function getNestedValue(source: unknown, path: string): string | undefined {
  if (!source || typeof source !== "object") return undefined;

  return path
    .split(".")
    .reduce<unknown>((acc, key) => {
      if (!acc || typeof acc !== "object") return undefined;
      return (acc as Record<string, unknown>)[key];
    }, source) as string | undefined;
}

function interpolate(
  template: string,
  variables?: Record<string, string | number>
): string {
  if (!variables) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = variables[key];
    return value === undefined ? `{{${key}}}` : String(value);
  });
}

export function resolveLanguage(value: string | null | undefined): Language {
  if (!value) return fallbackLanguage;
  const normalized = value.toLowerCase().split("-")[0];
  if ((availableLanguages as string[]).includes(normalized)) {
    return normalized as Language;
  }
  return fallbackLanguage;
}

export function translate(
  language: Language,
  key: string,
  variables?: Record<string, string | number>
): string {
  const localized = getNestedValue(translations[language], key);
  if (localized) return interpolate(localized, variables);

  const fallback = getNestedValue(translations[fallbackLanguage], key);
  if (fallback) return interpolate(fallback, variables);

  return key;
}

