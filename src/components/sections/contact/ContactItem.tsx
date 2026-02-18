import { useState } from 'react'
import { ExternalLink, Copy } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>
  labelKey: string
  valueKey: string
  href?: string
  copyValue?: string
  index: number
  prefersReducedMotion: boolean
}

export function ContactItem({ 
  icon: Icon, 
  labelKey, 
  valueKey, 
  href, 
  copyValue, 
  index,
  prefersReducedMotion
}: ContactItemProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [isHovered, setIsHovered] = useState(false)

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      
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
        description: `${label} ${t('contact.copyDescription')}`,
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
    <div
      className={cn(
        "group/item flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl",
        "transition-all duration-300 hover:bg-background/50",
        "hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1",
        "border border-transparent hover:border-border/30",
        "touch-manipulation min-h-[60px] sm:min-h-[70px]",
        !prefersReducedMotion && `animate-slide-in-right animate-delay-${(index + 1) * 100}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className={cn(
        "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0",
        "bg-gradient-primary shadow-lg transition-all duration-300",
        "group-hover/item:scale-110 group-hover/item:rotate-12"
      )}>
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors">
          {t(labelKey)}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground truncate">
          {t(valueKey)}
        </p>
        
        {/* Animated underline */}
        <div className="h-0.5 bg-gradient-primary w-0 group-hover/item:w-full transition-all duration-300 mt-1" />
      </div>

      {/* Actions */}
      <div className="flex gap-1 sm:gap-2 shrink-0">
        {href && (
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "opacity-0 group-hover/item:opacity-100 transition-all duration-300",
              "hover:bg-primary/10 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]",
              "touch-manipulation"
            )}
            asChild
          >
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={`${t('contact.openLabel')} ${t(labelKey)}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        
        {copyValue && (
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "opacity-0 group-hover/item:opacity-100 transition-all duration-300",
              "hover:bg-accent/10 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px]",
              "touch-manipulation"
            )}
            onClick={() => copyToClipboard(copyValue, t(labelKey))}
            aria-label={`${t('contact.copyLabel')} ${t(labelKey)}`}
          >
            <Copy className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}