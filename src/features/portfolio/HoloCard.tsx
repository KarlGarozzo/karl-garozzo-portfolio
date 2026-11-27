import { useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import {
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import portrait from './assets/karl-portrait.webp'
import { useLang } from './i18n'

/** Degrees per millisecond: one full turn every ~9 seconds. */
const SPIN_SPEED = 0.04

/**
 * Karl as a playing card (K♠) that slowly turns on itself.
 * On hover it faces the viewer, tilts towards the pointer and a holographic foil follows the light.
 */
export function HoloCard() {
  const card = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [held, setHeld] = useState(false)
  const { t } = useLang()

  const spin = useMotionValue(0)
  const tiltX = useSpring(0, { stiffness: 180, damping: 18 })
  const tiltY = useSpring(0, { stiffness: 180, damping: 18 })
  const rotateY = useTransform(() => spin.get() + tiltY.get())

  useAnimationFrame((_, delta) => {
    if (!held && !reduceMotion) spin.set(spin.get() + delta * SPIN_SPEED)
  })

  // While spinning, the foil sweeps across with the angle.
  useMotionValueEvent(spin, 'change', (angle) => {
    if (held || !card.current) return
    const turn = (((angle % 360) + 360) % 360) / 360
    card.current.style.setProperty('--mx', `${turn * 100}%`)
    card.current.style.setProperty('--my', `${30 + Math.sin(turn * Math.PI * 2) * 20}%`)
  })

  const hold = () => {
    setHeld(true)
    // Settle on the nearest front-facing angle.
    animate(spin, Math.round(spin.get() / 360) * 360, { type: 'spring', stiffness: 90, damping: 16 })
  }

  const release = () => {
    setHeld(false)
    tiltX.set(0)
    tiltY.set(0)
  }

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = card.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    tiltX.set((0.5 - py) * 22)
    tiltY.set((px - 0.5) * 26)
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
  }

  return (
    <div
      className="holo-stage"
      onPointerEnter={hold}
      onPointerMove={onMove}
      onPointerLeave={release}
      onPointerCancel={release}
    >
      <motion.div ref={card} className={`holo-card${held ? ' is-held' : ''}`} style={{ rotateX: tiltX, rotateY }}>
        {/* Front: a court card with Karl in both halves */}
        <div className="holo-face holo-front">
          <span className="holo-index">
            K<span>♠</span>
          </span>
          <span className="holo-index holo-index--bottom" aria-hidden="true">
            K<span>♠</span>
          </span>
          <div className="holo-court">
            <div className="holo-half">
              <img src={portrait} alt={t.hello.cardAlt} />
            </div>
            <div className="holo-half holo-half--mirror" aria-hidden="true">
              <img src={portrait} alt="" />
            </div>
            <span className="holo-ribbon" aria-hidden="true">
              Karl-Anthony
            </span>
          </div>
          <span className="holo-sheen" aria-hidden="true" />
          <span className="holo-glare" aria-hidden="true" />
        </div>

        {/* Back: the same red back as the magic deck */}
        <div className="holo-face holo-back" aria-hidden="true">
          <span className="magic-back-pattern" />
          <span className="magic-back-mark">K·G</span>
          <span className="holo-sheen" />
        </div>
      </motion.div>
    </div>
  )
}
