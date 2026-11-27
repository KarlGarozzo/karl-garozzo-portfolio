import { useState } from 'react'
import { motion } from 'framer-motion'
import { magicCards, type MagicCard } from './content'
import { RevealWords } from './motion'
import { useLang } from './i18n'

const red = (suit: MagicCard['suit']) => suit === '♥' || suit === '♦'

function PlayingCard({ card, index, total }: { card: MagicCard; index: number; total: number }) {
  const [revealed, setRevealed] = useState(false)
  const { t, tx } = useLang()
  const title = tx(card.title)
  const text = tx(card.text)
  // Fan the deck around its centre: angle, sideways spread and a slight arc.
  const offset = index - (total - 1) / 2
  const fan = {
    '--rot': `${offset * 8}deg`,
    '--x': `${offset * 62}%`,
    '--y': `${offset * offset * 0.9}rem`,
  } as React.CSSProperties

  return (
    <motion.li
      className="magic-slot"
      style={fan}
      initial={{ opacity: 0, y: 140 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ type: 'spring', stiffness: 110, damping: 16, delay: 0.15 + index * 0.12 }}
    >
      <button
        type="button"
        className={`magic-card${red(card.suit) ? ' magic-card--red' : ''}`}
        aria-pressed={revealed}
        aria-label={revealed ? `${title}: ${text}` : `${t.magic.flip} ${index + 1}`}
        onClick={() => setRevealed((v) => !v)}
      >
        <span className="magic-card-inner">
          <span className="magic-back" aria-hidden="true">
            <span className="magic-back-pattern" />
            <span className="magic-back-mark">K·G</span>
          </span>
          <span className="magic-face" aria-hidden="true">
            <span className="magic-index">
              {card.rank}
              <span>{card.suit}</span>
            </span>
            {card.video ? (
              <video className="magic-video" src={card.video} muted loop playsInline autoPlay />
            ) : (
              <span className="magic-pip">{card.suit}</span>
            )}
            <span className="magic-title">{title}</span>
            <span className="magic-text">{text}</span>
            <span className="magic-index magic-index--bottom">
              {card.rank}
              <span>{card.suit}</span>
            </span>
          </span>
        </span>
      </button>
    </motion.li>
  )
}

export function MagicSection() {
  const { t } = useLang()
  return (
    <section className="magic" id="magie" aria-labelledby="magic-title">
      <div className="shell magic-head">
        <p className="eyebrow">{t.magic.eyebrow}</p>
        <h2 className="big-title" id="magic-title" aria-label={t.magic.title}>
          <RevealWords text={t.magic.title} />
        </h2>
        <p className="magic-intro">{t.magic.intro}</p>
        <p className="hand-note magic-note" aria-hidden="true">
          {t.magic.note}&nbsp;↓
        </p>
      </div>

      <ul className="magic-deck">
        {magicCards.map((card, i) => (
          <PlayingCard key={card.rank + card.suit} card={card} index={i} total={magicCards.length} />
        ))}
      </ul>
    </section>
  )
}
