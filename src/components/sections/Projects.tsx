import { useLanguage } from '@/components/LanguageProvider'
import { SectionReveal } from '@/components/SectionReveal'
import { ProjectModal } from '@/components/ProjectModal'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import karlpicture from '@/assets/karl-picture.jpg' // Tu pourras remplacer par de vrais screenshots

export function Projects() {
  const { t } = useLanguage()

  // Seulement 2 projets majeurs (Featured Work) pour un impact maximal
  const projects = [
    {
      title: t('projects.bmp.title') || "C Image Processing Engine",
      description: t('projects.bmp.desc') || "A high-performance bitmap image processing application built in C.",
      fullDescription: "A comprehensive bitmap image processing application built in C, featuring advanced filtering algorithms and an intuitive user interface. This project demonstrates low-level memory management and complex algorithmic logic.",
      tags: ['C Programming', 'Algorithms', 'Memory Management'],
      stack: ['C', 'GTK+', 'LibPNG', 'OpenCV'],
      image: karlpicture,
      github: 'https://github.com/ton-profil', // Mets tes vrais liens
      demo: '#',
      features: [
        'Real-time image filtering and custom effects',
        'Direct manipulation of pixel matrices in memory',
        'Custom filter creation tools',
        'Zero-dependency core processing engine'
      ],
      challenges: [
        'Preventing memory leaks while handling 4K+ image resolutions',
        'Optimizing matrix convolution algorithms for speed',
        'Building a GUI using C and GTK+ without modern frameworks'
      ]
    },
    {
      title: t('projects.ai.title') || "AI Automation Platform",
      description: t('projects.ai.desc') || "Intelligent workflow engine leveraging Large Language Models.",
      fullDescription: "An enterprise-grade automation platform that bridges unstructured data with structured databases. Using OpenAI's APIs and custom Python backends, it parses, cleans, and routes data with 99% accuracy.",
      tags: ['Artificial Intelligence', 'Python', 'FastAPI'],
      stack: ['Python', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
      image: karlpicture,
      github: 'https://github.com/ton-profil',
      demo: '#',
      features: [
        'Automated unstructured data parsing using LLMs',
        'Real-time processing dashboard and monitoring',
        'Machine learning model integration',
        'Asynchronous task queuing'
      ],
      challenges: [
        'Managing OpenAI API rate limits and token costs',
        'Ensuring data privacy and PII redaction before processing',
        'Implementing robust fallback mechanisms for AI hallucinations'
      ]
    }
  ]

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* --- HEADER DE LA SECTION --- */}
        <SectionReveal animation="fadeInUp">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase">
                {t('projects.badge') || "Featured Case Studies"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {t('projects.title') || "Selected Work"}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Showcasing engineering precision and product vision. Click on a project to read the full technical case study.
            </p>
          </div>
        </SectionReveal>

        {/* --- GRILLE DES 2 PROJETS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <SectionReveal 
              key={index} 
              animation="fadeInUp"
              delay={index * 150}
            >
              <ProjectModal project={project}>
                {/* LA CARTE ENTIÈRE EST LE BOUTON. 
                  Plus de GlassCard complexe, on utilise du CSS pur et luxueux. 
                */}
                <div className="group cursor-pointer relative rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border/50 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(var(--primary-rgb),0.15)] flex flex-col h-full">
                  
                  {/* ZONE IMAGE (Avec effet Slow Zoom) */}
                  <div className="relative h-64 sm:h-80 overflow-hidden bg-muted/50 border-b border-border/50">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Badge flottant au survol */}
                    <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-background/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-foreground shadow-lg">
                        View Study <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* ZONE TEXTE */}
                  <div className="p-8 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-semibold bg-secondary/50 text-foreground/80 rounded-full border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Titre & Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                </div>
              </ProjectModal>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}