import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import { HoloCard } from "./HoloCard";
import { cv, education, experience, skills } from "./content";
import { Reveal, RevealWords, easeOutExpo } from "./motion";
import { useLang } from "./i18n";

const handles = ["tl", "tc", "tr", "ml", "mr", "bl", "bc", "br"];


/** The photo sits in a design-tool selection box, as if it were being edited. */
function SelectedPhoto() {
  const { t } = useLang();
  return (
    <motion.figure
      className="selected"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      <motion.span
        className="selected-tag"
        variants={{ hidden: { opacity: 0, y: 6 }, shown: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        karl.card
      </motion.span>
      <motion.div
        className="selected-photo"
        variants={{
          hidden: { opacity: 0, scale: 1.08 },
          shown: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 1.1, ease: easeOutExpo }}
      >
        <HoloCard />
      </motion.div>
      <motion.span
        className="selected-frame"
        aria-hidden="true"
        variants={{
          hidden: { clipPath: "inset(0 100% 100% 0)" },
          shown: { clipPath: "inset(0 0% 0% 0)" },
        }}
        transition={{ duration: 0.7, delay: 0.25, ease: easeOutExpo }}
      />
      {handles.map((h, i) => (
        <motion.span
          key={h}
          className={`selected-handle selected-handle--${h}`}
          aria-hidden="true"
          variants={{ hidden: { scale: 0 }, shown: { scale: 1 } }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            delay: 0.55 + i * 0.04,
          }}
        />
      ))}
      <motion.span
        className="selected-size"
        aria-hidden="true"
        variants={{
          hidden: { opacity: 0, y: -6 },
          shown: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        {t.hello.cardHint}
      </motion.span>
    </motion.figure>
  );
}

function SmallTitle({ children }: { children: string }) {
  return (
    <h3 className="small-title" aria-label={children}>
      <RevealWords text={children} />
    </h3>
  );
}

export function HelloSection() {
  const { t, tx } = useLang();
  return (
    <section className="hello shell" id="hello" aria-labelledby="hello-title">
      <SelectedPhoto />

      <div className="hello-main">
        <h2 className="big-title" id="hello-title" aria-label={t.hello.title}>
          <RevealWords text={t.hello.title} />
        </h2>
        <Reveal delay={0.1}>
          <p className="hello-kicker">{t.hello.kicker}</p>
          <p className="hello-bio">
            {t.hello.bioBefore}
            <strong>{t.hello.bioStrong}</strong>
            {t.hello.bioAfter}
          </p>
          <a className="text-link" href={cv} target="_blank" rel="noreferrer">
            <ArrowDownToLine size={16} aria-hidden="true" /> {t.hello.cv}
          </a>
        </Reveal>

        <div className="hello-block">
          <SmallTitle>{t.hello.education}</SmallTitle>
          <Reveal delay={0.1}>
            <ul className="timeline">
              {education.map((item) => (
                <li key={tx(item.title)}>
                  <span className="timeline-period">{tx(item.period)}</span>
                  <strong>{tx(item.title)}</strong>
                  <span>{tx(item.org)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="hello-side">
        <div className="hello-block">
          <SmallTitle>{t.hello.skills}</SmallTitle>
          <ul className="skill-dock">
            {skills.map((skill, i) => (
              <motion.li
                key={skill.code}
                title={tx(skill.name)}
                initial={{ opacity: 0, y: 14, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 20,
                  delay: 0.15 + i * 0.05,
                }}
                whileHover={{ y: -4 }}
              >
                <span
                  className="skill-tile"
                  style={{
                    background: skill.bg,
                    color: skill.fg,
                    borderColor: skill.fg,
                  }}
                >
                  {skill.code}
                </span>
                <span className="skill-name">{tx(skill.name)}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="hello-block">
          <SmallTitle>{t.hello.experience}</SmallTitle>
          <Reveal delay={0.1}>
            <ul className="timeline">
              {experience.map((item) => (
                <li key={tx(item.title)}>
                  <span className="timeline-period">{tx(item.period)}</span>
                  <strong>{tx(item.title)}</strong>
                  <span>{tx(item.org)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
