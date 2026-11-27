import { motion } from 'framer-motion'
import { languages, places } from './content'
import { easeOutExpo } from './motion'
import { useLang } from './i18n'

// Each stamp lands at its own angle, like it was pressed by hand.
const tilts = [-8, 6, -4, 10]

function Stamp({ place, index }: { place: (typeof places)[number]; index: number }) {
  const { tx } = useLang()
  return (
    <motion.li
      className={`stamp stamp--${place.shape}`}
      style={{ '--stamp': place.ink } as React.CSSProperties}
      initial={{ opacity: 0, scale: 1.8, rotate: tilts[index % tilts.length] }}
      whileInView={{ opacity: 1, scale: 1, rotate: tilts[index % tilts.length] }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ type: 'spring', stiffness: 520, damping: 24, delay: 0.25 + index * 0.18 }}
    >
      <span className="stamp-ring">
        <span className="stamp-label">N° 0{index + 1}</span>
        <strong className="stamp-city">{tx(place.city)}</strong>
        <span className="stamp-country">{tx(place.country)}</span>
      </span>
    </motion.li>
  )
}

export function PassportSection() {
  const { t, tx } = useLang()
  return (
    <section className="passport shell" id="langues" aria-labelledby="passport-title">
      <div className="passport-langs">
        <p className="eyebrow">{t.passport.eyebrow}</p>
        <h2 className="sr-only" id="passport-title">
          {t.passport.title}
        </h2>
        <ul className="lang-list" aria-hidden="true">
          {languages.map((lang, i) => (
            <li key={lang.code}>
              <span className="lang-mask">
                <motion.span
                  className="lang-code"
                  initial={{ y: '110%' }}
                  whileInView={{ y: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: easeOutExpo }}
                >
                  {lang.code}
                </motion.span>
              </span>
              <span className="lang-name">
                {tx(lang.name)}
                <span className="lang-level">{t.passport.level}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="hand-note passport-note" aria-hidden="true">
          {t.passport.note}&nbsp;✱
        </p>
      </div>

      <div className="passport-places">
        <p className="eyebrow">{t.passport.livedIn}</p>
        <ul className="stamps">
          {places.map((place, i) => (
            <Stamp key={place.ink} place={place} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
