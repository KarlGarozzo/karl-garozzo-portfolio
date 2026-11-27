import { motion } from 'framer-motion'
import { Mic, Phone, Video } from 'lucide-react'
import deskPhoto from './assets/karl-desk.webp'
import { email } from './content'
import { easeOutExpo } from './motion'
import { useLang } from './i18n'

/** The desk photo framed as an incoming video call, next to "On en parle ?". */
export function CallWindow() {
  const { t } = useLang()
  return (
    <motion.figure
      className="call"
      initial={{ opacity: 0, y: 60, rotate: 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.1, ease: easeOutExpo }}
    >
      <div className="call-bar" aria-hidden="true">
        <span className="call-live" />
        <span>{t.contact.callLabel}</span>
        <span className="call-time">00:42</span>
      </div>
      <div className="call-screen">
        <img src={deskPhoto} alt={t.contact.callAlt} loading="lazy" />
        <span className="call-name" aria-hidden="true">
          Karl-Anthony
        </span>
      </div>
      <div className="call-controls">
        <span className="call-btn" aria-hidden="true">
          <Mic size={18} />
        </span>
        <span className="call-btn" aria-hidden="true">
          <Video size={18} />
        </span>
        <a className="call-btn call-btn--answer" href={`mailto:${email}`} aria-label={t.contact.callMail}>
          <Phone size={18} aria-hidden="true" />
        </a>
      </div>
    </motion.figure>
  )
}
