import { ScrollAnimation } from "@/components/ScrollAnimations";
import {
  Terminal,
  Cpu,
  Sparkles,
  Globe2,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

const categoryAccents = [
  {
    icon: "text-cyan-500 dark:text-cyan-400",
    glow: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]",
    bar: "from-cyan-500 to-blue-500",
    title: "from-cyan-600 to-blue-600 dark:from-cyan-300 dark:to-blue-400",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
  },
  {
    icon: "text-indigo-500 dark:text-indigo-400",
    glow: "group-hover:border-indigo-500/50 group-hover:shadow-[0_0_25px_rgba(129,140,248,0.2)]",
    bar: "from-indigo-500 to-purple-500",
    title: "from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-400",
    badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400"
  },
  {
    icon: "text-emerald-500 dark:text-emerald-400",
    glow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(52,211,153,0.2)]",
    bar: "from-emerald-500 to-teal-500",
    title: "from-emerald-600 to-teal-600 dark:from-emerald-300 dark:to-teal-400",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
  },
];

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.programming"),
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Python", level: "90%" },
        { name: "Java", level: "85%" },
        { name: "C / C++", level: "75%" },
        { name: "TypeScript", level: "80%" },
        { name: "React / Next.js", level: "85%" },
      ],
    },
    {
      title: t("skills.tools"),
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: "Docker", level: "70%" },
        { name: "Git / GitHub", level: "95%" },
        { name: "PostgreSQL", level: "80%" },
        { name: "FastAPI", level: "85%" },
        { name: "Linux / Bash", level: "80%" },
      ],
    },
    {
      title: t("skills.soft"),
      icon: <Sparkles className="h-5 w-5" />,
      skills: [
        { name: t("skills.problem-solving"), level: "100%" },
        { name: "Cybersecurity Mindset", level: "90%" },
        { name: "Team Leadership", level: "85%" },
        { name: "Communication", level: "90%" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 transition-colors duration-500">
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollAnimation animation="fadeInUp">
            <div className="mb-20 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
                <Zap className="h-3.5 w-3.5 fill-current" />
                Technical Expertise
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {t("skills.title")}
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, idx) => {
              const accent = categoryAccents[idx % categoryAccents.length];
              return (
                <ScrollAnimation key={category.title} animation="fadeInUp" delay={idx * 100}>
                  <div className={cn(
                    "group relative h-full rounded-3xl border border-black/5 dark:border-white/10 p-8 transition-all duration-300",
                    "bg-white/40 dark:bg-white/[0.03] backdrop-blur-md",
                    accent.glow
                  )}>
                    <div className={cn("mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 dark:border-white/10 shadow-sm", accent.badge)}>
                      <span className={accent.icon}>{category.icon}</span>
                    </div>

                    <h3 className={cn("mb-8 bg-gradient-to-r bg-clip-text text-xl font-bold tracking-tight text-transparent", accent.title)}>
                      {category.title}
                    </h3>

                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-foreground/80">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}</span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                            <div 
                              className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-1000", accent.bar)}
                              style={{ width: skill.level }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="mt-12 rounded-3xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-8 backdrop-blur-md">
              <h3 className="mb-8 flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
                <Globe2 className="h-4 w-4" />
                {t("skills.languages")}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { code: "FR", lang: "Français", level: "Native" },
                  { code: "PL", lang: "Polski", level: "Native" },
                  { code: "EN", lang: "English", level: "Fluent" },
                  { code: "ES", lang: "Español", level: "Basic" },
                ].map((l) => (
                  <div key={l.code} className="flex items-center gap-4 rounded-2xl border border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/[0.02] p-4 transition-all hover:scale-[1.02]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-xs font-bold text-primary">
                      {l.code}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{l.lang}</div>
                      <div className="text-[11px] text-muted-foreground">{l.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}