import { Button } from '@/components/ui/button'
import { Download, FileText, Linkedin, Mail, ExternalLink, ArrowRight, Code2, BrainCircuit, Layers, CheckCircle2, TrendingUp, Sparkles, Lightbulb, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ParticleSystem } from '@/components/ParticleSystem'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import karlpicture from '@/assets/karl-picture-about.jpg'

// --- DATA ---
const techFocus = [
  { icon: Code2, label: "Fullstack Eng.", desc: "React, Node, Python" },
  { icon: BrainCircuit, label: "AI Integration", desc: "LLMs, Automation" },
  { icon: Layers, label: "UI/UX & Product", desc: "Modern Interfaces" },
]

const personalityTags = [
  { icon: TrendingUp, label: "Analytical", color: "text-blue-400", glow: "hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] hover:border-blue-500/50" },
  { icon: Sparkles, label: "Innovator", color: "text-purple-400", glow: "hover:shadow-[0_0_15px_rgba(192,132,252,0.4)] hover:border-purple-500/50" },
  { icon: Lightbulb, label: "Problem Solver", color: "text-orange-400", glow: "hover:shadow-[0_0_15px_rgba(251,146,60,0.4)] hover:border-orange-500/50" },
  { icon: Users, label: "Team Player", color: "text-emerald-400", glow: "hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:border-emerald-500/50" }
]

const recommendations = [
  {
    name: "Luc De Smet",
    role: "Supervisor — FDG Group",
    flag: "🇫🇷",
    text: "Karl-Anthony demonstrated exceptional motivation and professionalism throughout his internship. His ability to quickly adapt and learn new technologies is remarkable.",
    file: "Luc_De_Smet.pdf"
  },
  {
    name: "NSI Professor",
    role: "Academic Supervisor — EFREI Paris",
    flag: "🇫🇷",
    text: "Karl-Anthony is a brilliant and autonomous student with a strong sense of logic and creativity. His technical precision and curiosity make him stand out.",
    file: "Prof_NSI.pdf"
  }
]

export default function Card() {
  const [showRecommendations, setShowRecommendations] = useState<any | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Animation d'apparition en cascade
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  return (
    <div className="min-h-screen relative bg-background text-foreground selection:bg-primary/30 py-12 px-4 sm:px-6 flex flex-col items-center overflow-x-hidden">
      
      {/* --- BACKGROUND ANIMÉ (Halos lumineux) --- */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>
      
      <div className="fixed inset-0 -z-10 opacity-30">
        <ParticleSystem />
      </div>

      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-3xl relative z-10">
        
        {/* --- EN-TÊTE --- */}
        <div className={cn("text-center mb-10 transition-all duration-1000 ease-out", isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Available for projects
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Karl-Anthony Garozzo
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Engineering Student & Creative Technologist
          </p>
        </div>

        {/* --- CARTE PRINCIPALE (Avec Hover Glow) --- */}
        <div className={cn("group bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/40 rounded-[2rem] p-8 mb-10 shadow-xl hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)] transition-all duration-700 delay-150 ease-out", isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* PHOTO */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={karlpicture}
                alt="Karl-Anthony Garozzo"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* BIO & CALL TO ACTIONS */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-base text-foreground/90 leading-relaxed mb-6 font-light">
                Building the bridge between complex engineering and intuitive user experiences. Specialized in crafting robust, scalable, and intelligent digital solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all duration-300">
                  <Download className="w-4 h-4" /> Download Resume
                </Button>
                
                <Link to="/" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full gap-2 rounded-full bg-background/50 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300">
                    Full Portfolio <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <hr className="border-border/50 mb-8" />

          {/* TECH FOCUS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {techFocus.map((tech) => {
              const Icon = tech.icon
              return (
                <div key={tech.label} className="flex items-center gap-3 p-3 rounded-2xl bg-secondary/30 border border-border/30 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{tech.label}</h4>
                    <p className="text-xs text-muted-foreground">{tech.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* KEY STRENGTHS (Personnalité - Le retour avec Glow) */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4 text-center md:text-left">Key Strengths</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {personalityTags.map((tag) => {
                const Icon = tag.icon
                return (
                  <div key={tag.label} className={cn("flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-border/50 cursor-default transition-all duration-300 hover:-translate-y-1", tag.glow)}>
                    <Icon className={`w-4 h-4 ${tag.color}`} />
                    <span className="text-sm font-medium text-foreground/90">{tag.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div className="flex justify-center md:justify-start gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/karl-anthony-garozzo-278728301/", hoverGlow: "hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] hover:text-[#0a66c2]" },
              { icon: Mail, href: "mailto:karl.anthony.garozzo@gmail.com", hoverGlow: "hover:shadow-[0_0_15px_rgba(234,67,53,0.5)] hover:text-[#ea4335]" },
              { icon: ExternalLink, href: "https://karl-anthony-garozzo.com", hoverGlow: "hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] hover:text-primary" }
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn("flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 border border-border/50 hover:-translate-y-1 transition-all duration-300 text-muted-foreground", social.hoverGlow)}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* --- RECOMMENDATIONS --- */}
        <div className={cn("transition-all duration-1000 delay-300 ease-out", isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-border flex-1"></div>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Trusted By
            </span>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {recommendations.map((rec) => (
              <div
                key={rec.name}
                onClick={() => setShowRecommendations(rec)}
                className="group bg-card/40 backdrop-blur-sm border border-border/50 p-5 rounded-2xl cursor-pointer hover:bg-card/80 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors">{rec.name}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{rec.role}</p>
                  </div>
                  <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{rec.flag}</span>
                </div>
                <p className="text-sm text-foreground/80 italic leading-relaxed line-clamp-2 mb-3">
                  "{rec.text}"
                </p>
                <div className="flex items-center gap-2 text-primary/80 font-medium text-xs group-hover:text-primary transition-colors">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Full Letter</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- MODALE --- */}
      <Dialog open={!!showRecommendations} onOpenChange={() => setShowRecommendations(null)}>
        <DialogContent className="sm:max-w-2xl bg-background/95 backdrop-blur-xl border-border">
          {showRecommendations && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> {showRecommendations.name}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {showRecommendations.role} {showRecommendations.flag}
                </DialogDescription>
              </DialogHeader>

              <div className="rounded-xl border border-border bg-secondary/30 p-6 my-4">
                <p className="text-foreground/90 leading-relaxed italic">
                  "{showRecommendations.text}"
                </p>
              </div>

              <div className="flex justify-end">
                <Button asChild className="gap-2 rounded-full hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] transition-all">
                  <a href={`/letters/${showRecommendations.file}`} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}