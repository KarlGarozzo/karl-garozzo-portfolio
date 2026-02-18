import { ChevronRight, MapPin, BriefcaseBusiness, CalendarClock } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimations";
import { useLanguage } from "@/components/LanguageProvider";

type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  impacts: string[];
};

export function Experience() {
  const { t } = useLanguage();

  const experiences: ExperienceEntry[] = [
    {
      id: "webellian",
      title: t("experience.items.webellian.title"),
      company: t("experience.items.webellian.company"),
      period: t("experience.items.webellian.period"),
      duration: t("experience.items.webellian.duration"),
      location: t("experience.items.webellian.location"),
      impacts: [
        t("experience.items.webellian.impact1"),
        t("experience.items.webellian.impact2"),
        t("experience.items.webellian.impact3"),
      ],
    },
    {
      id: "fdg",
      title: t("experience.items.fdg.title"),
      company: t("experience.items.fdg.company"),
      period: t("experience.items.fdg.period"),
      duration: t("experience.items.fdg.duration"),
      location: t("experience.items.fdg.location"),
      impacts: [
        t("experience.items.fdg.impact1"),
        t("experience.items.fdg.impact2"),
        t("experience.items.fdg.impact3"),
      ],
    },
    {
      id: "superprof",
      title: t("experience.items.superprof.title"),
      company: t("experience.items.superprof.company"),
      period: t("experience.items.superprof.period"),
      duration: t("experience.items.superprof.duration"),
      location: t("experience.items.superprof.location"),
      impacts: [
        t("experience.items.superprof.impact1"),
        t("experience.items.superprof.impact2"),
        t("experience.items.superprof.impact3"),
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollAnimation animation="fadeInUp">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {t("experience.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                {t("experience.subtitle")}
              </p>
            </div>
          </ScrollAnimation>

          <div className="overflow-hidden rounded-3xl border border-border/30 bg-card/25 backdrop-blur-sm">
            {experiences.map((experience, index) => (
              <ScrollAnimation key={experience.id} animation="fadeInUp" delay={index * 120}>
                <article className="group grid grid-cols-1 gap-6 border-b border-border/30 px-4 py-7 transition-colors duration-300 last:border-b-0 hover:bg-primary/5 sm:px-6 md:grid-cols-12 md:gap-8">
                  <div className="space-y-3 text-sm text-muted-foreground md:col-span-3">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4" />
                      <p className="font-medium">{experience.period}</p>
                    </div>
                    <p className="pl-6 text-xs uppercase tracking-[0.14em] text-muted-foreground/90">
                      {experience.duration}
                    </p>
                    <div className="flex items-center gap-2 pl-6 text-xs">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <div className="md:col-span-9">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                        {experience.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <BriefcaseBusiness className="h-3.5 w-3.5" />
                        {experience.company}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {experience.impacts.map((impact, impactIndex) => (
                        <li
                          key={`${experience.id}-impact-${impactIndex}`}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/70 transition-colors duration-300 group-hover:text-primary" />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
