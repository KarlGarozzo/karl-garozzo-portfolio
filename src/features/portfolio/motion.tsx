import { Fragment } from 'react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const easeOutExpo = [0.16, 1, 0.3, 1] as const

/**
 * Words that rise from behind a mask when scrolled into view.
 * `accent` is appended to the last word in the accent colour (e.g. "?").
 */
export function RevealWords({ text, accent, delay = 0 }: { text: string; accent?: string; delay?: number }) {
  const words = text.split(' ')
  return (
    <motion.span
      key={text}
      className="reveal"
      aria-hidden="true"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="reveal-mask">
            <motion.span
              className="reveal-word"
              variants={{ hidden: { y: '115%' }, shown: { y: '0%' } }}
              transition={{ duration: 0.95, delay: delay + i * 0.07, ease: easeOutExpo }}
            >
              {word}
              {i === words.length - 1 && accent ? <span className="accent">{accent}</span> : null}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </motion.span>
  )
}

/** Fades and lifts its children once, when they enter the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  )
}

/** The three ornaments from the cover: a chunky asterisk, a sparkle and a club. */
export function Glyphs({ className, animate = true }: { className?: string; animate?: boolean }) {
  const pop = (i: number) =>
    animate
      ? {
          initial: { scale: 0, rotate: -45 },
          whileInView: { scale: 1, rotate: 0 },
          viewport: { once: true },
          transition: { type: 'spring' as const, stiffness: 380, damping: 16, delay: 0.1 + i * 0.1 },
        }
      : {}

  return (
    <span className={`glyphs ${className ?? ''}`} aria-hidden="true">
      <motion.svg viewBox="0 0 24 24" {...pop(0)}>
        <g fill="currentColor">
          {[0, 45, 90, 135].map((r) => (
            <rect key={r} x="10" y="1" width="4" height="22" rx="2" transform={`rotate(${r} 12 12)`} />
          ))}
        </g>
      </motion.svg>
      <motion.svg viewBox="0 0 24 24" {...pop(1)}>
        <path fill="currentColor" d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z" />
      </motion.svg>
      <motion.svg viewBox="0 0 24 24" {...pop(2)}>
        <g fill="currentColor">
          <circle cx="12" cy="6.5" r="5" />
          <circle cx="6.5" cy="13.5" r="5" />
          <circle cx="17.5" cy="13.5" r="5" />
          <path d="M10.6 13h2.8l1.8 10H8.8z" />
        </g>
      </motion.svg>
    </span>
  )
}

/** Deterministic jagged edge for torn-paper clip paths. */
export function tornPolygon(seed: number, depth: number, jitter: number, steps = 48) {
  let s = seed
  const rand = () => {
    s |= 0
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const top: string[] = []
  const bottom: string[] = []
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100
    top.push(`${x.toFixed(2)}% ${(depth + rand() * jitter).toFixed(1)}px`)
    bottom.unshift(`${x.toFixed(2)}% calc(100% - ${(depth + rand() * jitter).toFixed(1)}px)`)
  }
  return `polygon(${[...top, ...bottom].join(', ')})`
}
