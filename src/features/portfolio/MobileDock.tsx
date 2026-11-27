import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useLang, type Dict } from './i18n'

const links: { id: string; label: keyof Dict['dock'] }[] = [
  { id: 'hello', label: 'profile' },
  { id: 'projets', label: 'projects' },
  { id: 'magie', label: 'magic' },
  { id: 'contact', label: 'contact' },
]

/** Floating bottom navigation for phones, shown once the cover is scrolled past. */
export function MobileDock() {
  const { scrollY } = useScroll()
  const { t } = useLang()
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('')

  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > window.innerHeight * 0.6))

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="dock"
          aria-label={t.dock.label}
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'true' : undefined}>
              {active === link.id && (
                <motion.span className="dock-pill" layoutId="dock-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span className="dock-label">{t.dock[link.label]}</span>
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
