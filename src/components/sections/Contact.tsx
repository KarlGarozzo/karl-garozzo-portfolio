import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import { useToast } from '@/hooks/use-toast'
import { ContactCard } from './contact/ContactCard'
import { QuickActions } from './contact/QuickActions'
import { ParallaxBackground } from './contact/ParallaxBackground'
import { cn } from '@/lib/utils'

export function Contact() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const sectionRef = useRef<HTMLElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const copyAllContacts = async () => {
    const allContacts = [
      `${t('contact.email')}: ${t('contact.emailValue')}`,
      `${t('contact.phone')}: ${t('contact.phoneValue')}`,
      `${t('contact.location')}: ${t('contact.locationValue')}`,
      `${t('contact.linkedIn')}: ${t('contact.linkedInValue')}`
    ].join('\n')
    
    try {
      await navigator.clipboard.writeText(allContacts)
      
      // Confetti effect
      if (!prefersReducedMotion) {
        const confetti = document.createElement('div')
        confetti.className = 'fixed pointer-events-none z-50'
        confetti.style.left = '50%'
        confetti.style.top = '50%'
        confetti.innerHTML = '✨'
        confetti.style.animation = 'ping 0.5s ease-out'
        document.body.appendChild(confetti)
        setTimeout(() => document.body.removeChild(confetti), 500)
      }

      toast({
        title: t('contact.copied'),
        description: `${t('contact.copyAll')} ${t('contact.copyDescription')}`,
      })
    } catch (err) {
      toast({
        title: t('contact.copyFailed'),
        description: t('contact.copyManually'),
        variant: "destructive"
      })
    }
  }

  return (
    <section 
      id="contact" 
      className={cn(
        "min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden",
        "flex items-center justify-center",
        // Mobile safe areas
        "px-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]",
        "pt-[max(3rem,env(safe-area-inset-top))] pb-[max(3rem,env(safe-area-inset-bottom))]"
      )} 
      ref={sectionRef}
    >
      {/* Parallax Background */}
      <ParallaxBackground 
        sectionRef={sectionRef} 
        prefersReducedMotion={prefersReducedMotion} 
      />

      <div className={cn(
        "container-responsive relative z-10 w-full max-w-7xl",
        "px-4 sm:px-6 lg:px-8 xl:px-12"
      )}>
        {/* Animated Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className={cn(
            "font-display font-bold mb-4 sm:mb-6",
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
            "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
            "animate-delay-100",
            // Responsive font sizing with clamp
            "leading-tight tracking-tight"
          )}>
            {t('contact.title')}
          </h2>
          <p className={cn(
            "text-muted-foreground animate-delay-200",
            "text-base sm:text-lg md:text-xl",
            "max-w-2xl mx-auto leading-relaxed"
          )}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className={cn(
          "grid gap-6 sm:gap-8 lg:gap-12",
          "grid-cols-1 lg:grid-cols-2",
          "items-start lg:items-center",
          // Ensure proper spacing on all devices
          "max-w-6xl mx-auto"
        )}>
          {/* Contact Information Card */}
          <ContactCard prefersReducedMotion={prefersReducedMotion} />

          {/* Quick Actions Card */}
          <QuickActions 
            prefersReducedMotion={prefersReducedMotion}
            onCopyAllContacts={copyAllContacts}
          />
        </div>
      </div>
    </section>
  )
}