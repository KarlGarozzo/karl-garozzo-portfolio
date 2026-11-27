import { motion } from "framer-motion";
import portrait from "./assets/karl-portrait.webp";
import { Glyphs, easeOutExpo } from "./motion";
import { LangSwitch, useLang } from "./i18n";

const first = "PORT".split("");
const after = "LIO".split("");

function Letter({ char, index }: { char: string; index: number }) {
  return (
    <span className="cover-letter-mask">
      <motion.span
        className="cover-letter"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1,
          delay: 0.15 + index * 0.05,
          ease: easeOutExpo,
        }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export function CoverSection() {
  const { t } = useLang();
  return (
    <section className="cover shell" id="accueil" aria-labelledby="cover-title">
      <header className="topbar">
        <a href="#accueil" className="topbar-name">
          Karl-Anthony <span>Garozzo</span>
        </a>
        <nav aria-label={t.nav.label}>
          <a href="#projets">{t.nav.projects}</a>
          <a href="#hello">{t.nav.about}</a>
          <a href="#magie">{t.nav.magic}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <LangSwitch className="topbar-langs" />
      </header>

      <motion.div
        className="cover-intro"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: easeOutExpo }}
      >
        <p>{t.cover.intro}</p>
        <p className="cover-langs">
          <span>PL</span>
          <span>FR</span>
          <span>EN</span>
          <em>{t.cover.fluent}</em>
        </p>
      </motion.div>

      <motion.div
        className="cover-meta"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05, ease: easeOutExpo }}
      >
        <span>{t.cover.role}</span>
        <span>2026</span>
      </motion.div>

      <h1
        className="cover-word"
        id="cover-title"
        aria-label={t.cover.title}
      >
        <span className="cover-word-row" aria-hidden="true">
          <span className="cover-part">
            {first.map((c, i) => (
              <Letter key={i} char={c} index={i} />
            ))}
          </span>
          <span className="cover-part">
            <Letter char="F" index={4} />
            <motion.span
              className="cover-badge"
              initial={{ scale: 0, rotate: -160 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 15,
                delay: 0.55,
              }}
            >
              <img src={portrait} alt="" />
            </motion.span>
            {after.map((c, i) => (
              <Letter key={i} char={c} index={i + 6} />
            ))}
          </span>
        </span>
      </h1>

      <div className="cover-signature" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none">
          <motion.path
            d="M8 56C10 38 20 22 42 8M42 8l-12 1M42 8l-3 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
          />
        </svg>
        <motion.span
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.1, delay: 1.6, ease: "easeInOut" }}
        >
          Karl-Anthony G.
        </motion.span>
      </div>

      <Glyphs className="cover-glyphs" />
    </section>
  );
}
