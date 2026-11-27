import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, MousePointerClick } from 'lucide-react'
import type { PortfolioProject } from './projects'
import { Reveal, RevealWords } from './motion'
import { useLang } from './i18n'

/** Width the live site is rendered at before being scaled down into the frame. */
const DESKTOP_WIDTH = 1280
const MOBILE_WIDTH = 390

/** A browser window showing the real site (when it allows framing) or its screenshot. */
function LiveWindow({ project }: { project: PortfolioProject }) {
  const { t, tx } = useLang()
  const viewport = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [siteWidth, setSiteWidth] = useState(DESKTOP_WIDTH)
  const [interactive, setInteractive] = useState(false)
  const host = project.link ? new URL(project.link).host.replace(/^www\./, '') : ''

  useEffect(() => {
    const el = viewport.current
    if (!el || !project.embed) return
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width
      const base = width < 520 ? MOBILE_WIDTH : DESKTOP_WIDTH
      setSiteWidth(base)
      setScale(width / base)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [project.embed])

  return (
    <div className="live-window">
      <div className="live-bar" aria-hidden="true">
        <span className="live-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="live-url">
          <span className="live-lock">●</span> {host}
        </span>
        <span className="live-badge">{project.embed ? t.spotlight.live : t.spotlight.preview}</span>
      </div>

      <div ref={viewport} className={project.embed ? 'live-viewport live-viewport--embed' : 'live-viewport'}>
        {project.embed ? (
          <>
            <iframe
              src={project.embed}
              title={`${project.title}, ${t.spotlight.liveTitle}`}
              loading="lazy"
              tabIndex={interactive ? 0 : -1}
              style={{
                width: siteWidth,
                height: `${100 / scale}%`,
                transform: `scale(${scale})`,
                pointerEvents: interactive ? 'auto' : 'none',
              }}
            />
            {!interactive && (
              <button type="button" className="live-activate" onClick={() => setInteractive(true)}>
                <MousePointerClick size={18} aria-hidden="true" /> {t.spotlight.explore}
              </button>
            )}
          </>
        ) : (
          project.image && <img src={project.image.src} alt={tx(project.image.alt)} loading="lazy" />
        )}
      </div>
    </div>
  )
}

export function Spotlight({ project }: { project: PortfolioProject }) {
  const { t, tx } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const tilt = useTransform(scrollYProgress, [0, 0.45], [8, 0])
  const lift = useTransform(scrollYProgress, [0, 0.45], [80, 0])

  return (
    <section ref={ref} className="spotlight shell" id="amorea" aria-labelledby="spotlight-title">
      <div className="spotlight-copy">
        <p className="eyebrow">{t.spotlight.eyebrow} · {tx(project.category)}</p>
        <h2 className="big-title spotlight-title" id="spotlight-title" aria-label={project.title}>
          <RevealWords text={project.title} />
        </h2>
        <Reveal delay={0.1}>
          <p className="spotlight-summary">{tx(project.summary)}</p>
          <p className="spotlight-details">{tx(project.details)}</p>
          <ul className="tags" aria-label={t.common.techs}>
            {project.stack.map((tech) => (
              <li key={tx(tech)}>{tx(tech)}</li>
            ))}
          </ul>
          {project.link && (
            <a className="button" href={project.link} target="_blank" rel="noreferrer">
              {t.spotlight.visit} {new URL(project.link).host.replace(/^www\./, '')}
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only">{t.common.newTab}</span>
            </a>
          )}
        </Reveal>
      </div>

      <motion.div className="spotlight-stage" style={{ rotateX: tilt, y: lift }}>
        <LiveWindow project={project} />
        <p className="hand-note spotlight-note" aria-hidden="true">
          {t.spotlight.note}&nbsp;↑
        </p>
      </motion.div>
    </section>
  )
}
