import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { projects, type PortfolioProject } from './projects'
import { Glyphs, RevealWords, easeOutExpo } from './motion'
import { useLang } from './i18n'

// Hand-placed feel: each polaroid gets its own tilt and vertical offset.
const layout = [
  { rotate: -5, y: 10 },
  { rotate: 3.5, y: 46 },
  { rotate: -2, y: 0 },
  { rotate: 5, y: 34 },
]

function ProjectMedia({ project }: { project: PortfolioProject }) {
  const { tx } = useLang()
  const alt = project.image ? tx(project.image.alt) : undefined
  if (project.video) {
    return <video src={project.video} poster={project.image?.src} autoPlay muted loop playsInline aria-label={alt} />
  }
  if (project.image) {
    return <img src={project.image.src} alt={alt} loading="lazy" decoding="async" />
  }
  // No visual yet: a typographic poster in the project's colours.
  return (
    <span className="poster" aria-hidden="true">
      <span className="poster-title">{project.title}</span>
      <Glyphs className="poster-glyphs" animate={false} />
    </span>
  )
}

function Polaroid({ project, index }: { project: PortfolioProject; index: number }) {
  const { rotate, y } = layout[index % layout.length]
  const { lang, t, tx } = useLang()

  return (
    <Dialog.Root>
      <motion.li
        className="polaroid-slot"
        style={{ '--offset': `${y}px` } as React.CSSProperties}
        initial={{ opacity: 0, y: -120, rotate: rotate * 3 }}
        whileInView={{ opacity: 1, y: 0, rotate }}
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        transition={{ type: 'spring', stiffness: 90, damping: 14, delay: index * 0.12 }}
        whileHover={{ rotate: 0, scale: 1.04, zIndex: 5, transition: { duration: 0.35, ease: easeOutExpo } }}
      >
        <Dialog.Trigger className="polaroid" aria-label={`${t.wall.open} ${project.title}`}>
          <span className="polaroid-tape" aria-hidden="true" />
          <span className={`polaroid-photo polaroid-photo--${project.id}`}>
            <ProjectMedia project={project} />
          </span>
          <span className="polaroid-caption">{project.title}</span>
          <span className="polaroid-category">{tx(project.category)}</span>
          {project.status && <span className="polaroid-status">{tx(project.status)}</span>}
        </Dialog.Trigger>
      </motion.li>

      <Dialog.Portal>
        <Dialog.Overlay className="sheet-backdrop" />
        <Dialog.Content className="sheet" lang={lang}>
          <Dialog.Close className="sheet-close" aria-label={t.wall.close}>
            <X size={20} aria-hidden="true" />
          </Dialog.Close>
          <p className="sheet-category">
            {tx(project.category)}
            {project.status && <span className="sheet-status">{tx(project.status)}</span>}
          </p>
          <Dialog.Title className="sheet-title">{project.title}</Dialog.Title>
          <Dialog.Description className="sheet-summary">{tx(project.summary)}</Dialog.Description>
          <div className={`sheet-media polaroid-photo--${project.id}`}>
            <ProjectMedia project={project} />
          </div>
          <p>{tx(project.details)}</p>
          <ul className="tags" aria-label={t.common.techs}>
            {project.stack.map((tech) => (
              <li key={tx(tech)}>{tx(tech)}</li>
            ))}
          </ul>
          {project.link && (
            <a className="button" href={project.link} target="_blank" rel="noreferrer">
              {t.wall.discover} <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only">{t.common.newTab}</span>
            </a>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function ProjectWall() {
  const wall = projects.filter((p) => !p.spotlight)
  const { t } = useLang()
  return (
    <section className="wall shell" id="projets" aria-labelledby="projects-title">
      <header className="wall-heading">
        <Glyphs className="wall-glyphs" />
        <h2 className="big-title" id="projects-title" aria-label={t.wall.title}>
          <RevealWords text={t.wall.title} />
        </h2>
        <p className="hand-note wall-note" aria-hidden="true">
          <span className="only-desktop">{t.wall.hintDesktop}&nbsp;↓</span>
          <span className="only-mobile">{t.wall.hintMobile}&nbsp;→</span>
        </p>
      </header>

      <ul className="polaroids">
        {wall.map((project, i) => (
          <Polaroid key={project.id} project={project} index={i} />
        ))}
      </ul>
      <p className="wall-more">{t.wall.more}</p>
    </section>
  )
}
