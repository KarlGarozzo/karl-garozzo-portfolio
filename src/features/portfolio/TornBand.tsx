import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import portrait from './assets/karl-portrait.webp'
import { Glyphs, tornPolygon } from './motion'

// Two slightly different tears: a pale paper fringe under the black sheet.
const fringe = tornPolygon(7, 0, 14)
const sheet = tornPolygon(21, 8, 16)

/** Black torn-paper band with a sticker-style cut-out portrait. */
export function TornBand() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const wordX = useTransform(scrollYProgress, [0, 1], ['12%', '-22%'])
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -30])
  const photoRotate = useTransform(scrollYProgress, [0, 1], [-4, 3])

  return (
    <section ref={ref} className="band" aria-label="Karl-Anthony Garozzo">
      <div className="band-fringe" style={{ clipPath: fringe }} aria-hidden="true" />
      <div className="band-sheet" style={{ clipPath: sheet }}>
        <Glyphs className="band-glyphs" />
        <motion.p className="band-word" style={{ x: wordX }} aria-hidden="true">
          Garozzo Garozzo
        </motion.p>
        <motion.img
          className="band-portrait"
          src={portrait}
          alt=""
          loading="lazy"
          style={{ y: photoY, rotate: photoRotate }}
        />
      </div>
    </section>
  )
}
