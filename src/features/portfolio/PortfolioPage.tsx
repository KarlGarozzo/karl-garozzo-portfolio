import { useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { MotionConfig, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDownToLine,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { CoverSection } from "./CoverSection";
import { HelloSection } from "./HelloSection";
import { TornBand } from "./TornBand";
import { ProjectWall } from "./ProjectWall";
import { PassportSection } from "./PassportSection";
import { Spotlight } from "./Spotlight";
import { MagicSection } from "./MagicSection";
import { MobileDock } from "./MobileDock";
import { CallWindow } from "./CallWindow";
import { projects } from "./projects";
import { cv, email, github, linkedin } from "./content";
import { Glyphs, RevealWords } from "./motion";
import { LangProvider, useLang } from "./i18n";
import "./portfolio.css";

/** Pulls its child a little towards the pointer. */
function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.4);
  };

  return (
    <motion.div
      ref={ref}
      className="magnetic"
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function CopyEmail() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button type="button" className="copy" onClick={copy}>
      {copied ? (
        <Check size={16} aria-hidden="true" />
      ) : (
        <Copy size={16} aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? t.contact.copied : email}</span>
    </button>
  );
}

const spotlight = projects.find((p) => p.spotlight);

export function PortfolioPage() {
  return (
    <LangProvider>
      <Portfolio />
    </LangProvider>
  );
}

function Portfolio() {
  const { lang, t } = useLang();
  return (
    <MotionConfig reducedMotion="user">
      <div className="pf" lang={lang}>
        <a className="skip" href="#hello">
          {t.skip}
        </a>
        <main>
          <CoverSection />
          <HelloSection />
          <PassportSection />
          <TornBand />
          {spotlight && <Spotlight project={spotlight} />}
          <ProjectWall />
          <MagicSection />
        </main>

        <footer
          className="contact shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-grid">
            <div className="contact-main">
              <h2
                className="big-title contact-title"
                id="contact-title"
                aria-label={`${t.contact.title}${t.contact.question}`}
              >
                <RevealWords text={t.contact.title} accent={t.contact.question} />
              </h2>
              <div className="contact-row">
                <p className="hand-note" aria-hidden="true">
                  {t.contact.note}&nbsp;→
                </p>
                <Magnetic>
                  <a className="button" href={`mailto:${email}`}>
                    <Mail size={18} aria-hidden="true" /> {t.contact.mail}
                  </a>
                </Magnetic>
                <CopyEmail />
              </div>
              <div className="contact-links">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} aria-hidden="true" /> LinkedIn
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <Github size={17} aria-hidden="true" /> GitHub
                </a>
                <a href={cv} target="_blank" rel="noreferrer">
                  <ArrowDownToLine size={17} aria-hidden="true" /> CV
                </a>
              </div>
            </div>
            <CallWindow />
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Karl-Anthony Garozzo</span>
            <Glyphs className="footer-glyphs" animate={false} />
            <span>{t.contact.location}</span>
          </div>
        </footer>
        <MobileDock />
      </div>
    </MotionConfig>
  );
}
