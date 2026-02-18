import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/components/LanguageProvider";
import {
  ExternalLink,
  Github,
  Layers3,
  ListChecks,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    image: string;
    github: string;
    demo: string;
    features?: string[];
    challenges?: string[];
    stack?: string[];
  };
  children: React.ReactNode;
}

function DetailSection({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}) {
  if (!items.length) return null;

  return (
    <section className="space-y-3 rounded-2xl border border-border/40 bg-background/45 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectModal({ project, children }: ProjectModalProps) {
  const { t } = useLanguage();

  const stack = project.stack ?? [];
  const features = project.features ?? [];
  const challenges = project.challenges ?? [];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[92vh] w-[96vw] max-w-6xl overflow-hidden border-white/10 bg-background/70 p-0 shadow-[0_35px_120px_-30px_rgba(0,0,0,0.65)] backdrop-blur-[32px]">
        <div className="grid max-h-[92vh] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[280px] overflow-hidden border-b border-border/40 lg:min-h-[92vh] lg:border-b-0 lg:border-r">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/10" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-primary/90">
                {t("projectModal.caseStudy")}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/80">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-primary/30 bg-background/55 text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <ScrollArea className="max-h-[92vh]">
            <div className="space-y-5 p-5 sm:p-6">
              <DialogHeader className="space-y-2">
                <DialogTitle className="text-left text-xl sm:text-2xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-left text-sm leading-relaxed text-muted-foreground">
                  {project.fullDescription || project.description}
                </DialogDescription>
              </DialogHeader>

              <section className="space-y-3 rounded-2xl border border-border/40 bg-background/45 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">
                    {t("projectModal.overview")}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.fullDescription || project.description}
                </p>
              </section>

              <DetailSection
                icon={Layers3}
                title={t("projectModal.stack")}
                items={stack}
              />
              <DetailSection
                icon={ListChecks}
                title={t("projectModal.features")}
                items={features}
              />
              <DetailSection
                icon={TriangleAlert}
                title={t("projectModal.challenges")}
                items={challenges}
              />

              <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                <Button
                  asChild
                  className="group bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!project.github || project.github === "#"}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
                    {project.github && project.github !== "#"
                      ? t("projectModal.code")
                      : t("projectModal.noCode")}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="group border-primary/30 bg-background/60 hover:bg-primary/10"
                  disabled={!project.demo || project.demo === "#"}
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
                    {project.demo && project.demo !== "#"
                      ? t("projectModal.demo")
                      : t("projectModal.noDemo")}
                  </a>
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
