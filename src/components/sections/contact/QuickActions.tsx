import { useEffect, useMemo, useState } from 'react'
import { Mail, Phone, Linkedin, Copy, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import QRCode from 'react-qr-code'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

interface QuickActionsProps {
  prefersReducedMotion: boolean
  onCopyAllContacts: () => void
}

export function QuickActions({ prefersReducedMotion, onCopyAllContacts }: QuickActionsProps) {
  const { t } = useLanguage()
  const [openQR, setOpenQR] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Desktop = pointeur fin (souris). Évite de bloquer l’action sur mobile.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(pointer: fine)')
      setIsDesktop(mq.matches)
      const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
      mq.addEventListener?.('change', handler)
      return () => mq.removeEventListener?.('change', handler)
    }
  }, [])

  // vCard minimaliste pour le QR (ajout contact)
  const vcard = useMemo(() => {
    const fullName = 'Karl-Anthony Garozzo'
    const phone = '+33680453797'
    const email = 'karl.anthony.garozzo@gmail.com'
    const url = 'https://karl-anthony-garozzo.com'
    // vCard 3.0 — ADR: PO Box; Extended; Street; Locality; Region; PostalCode; Country
    // Ici: Locality = Paris, Country = France
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Garozzo;Karl-Anthony;;;',
      `FN:${fullName}`,
      `TEL;TYPE=CELL:${phone}`,
      `EMAIL;TYPE=INTERNET:${email}`,
      `URL:${url}`,
      'ADR;TYPE=HOME:;;;;Paris;;France',
      'END:VCARD',
    ].join('\n')
  }, [])


  const handleCallClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (isDesktop && !prefersReducedMotion) {
      // Sur desktop, on bloque l’ouverture du tel: et on affiche le QR
      e.preventDefault()
      setOpenQR(true)
    }
    // sinon, comportement natif (tel:) sur mobile/tablette
  }

  return (
    <>
      <div
        className={cn(
          'backdrop-blur-2xl bg-gradient-to-br from-card/80 to-card/40',
          'border border-border/50 rounded-2xl p-6 sm:p-8 shadow-card',
          'space-y-6 animate-scale-in animate-delay-300'
        )}
      >
        <div className="text-center">
          <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto mb-4 animate-bounce-gentle" />
          <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
            {t('contact.quickActions')}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t('contact.quickActionsDesc')}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* Email Me */}
          <Button
            className={cn(
              'w-full group relative overflow-hidden min-h-[48px] sm:min-h-[52px]',
              'bg-gradient-primary hover:shadow-glow',
              'transition-all duration-500 hover:scale-[1.02]',
              'touch-manipulation text-sm sm:text-base',
              !prefersReducedMotion && 'magnetic'
            )}
            asChild
          >
            <a href="mailto:karl.anthony.garozzo@gmail.com">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('contact.emailMe')}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>

          {/* Call Me — sur desktop: ouvre QR animé */}
          <Button
            variant="outline"
            className={cn(
              'w-full group relative overflow-hidden min-h-[48px] sm:min-h-[52px]',
              'border-primary/30 hover:border-primary',
              'hover:bg-primary/5 transition-all duration-500',
              'hover:scale-[1.02] touch-manipulation text-sm sm:text-base',
              !prefersReducedMotion && 'magnetic'
            )}
            asChild
          >
            <a href="tel:+33680453797" onClick={handleCallClick}>
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('contact.callMe')}
            </a>
          </Button>

          {/* LinkedIn */}
          <Button
            variant="outline"
            className={cn(
              'w-full group relative overflow-hidden min-h-[48px] sm:min-h-[52px]',
              'border-accent/30 hover:border-accent',
              'hover:bg-accent/5 transition-all duration-500',
              'hover:scale-[1.02] touch-manipulation text-sm sm:text-base',
              !prefersReducedMotion && 'magnetic'
            )}
            asChild
          >
            <a
              href="https://www.linkedin.com/in/karl-anthony-garozzo-278728301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('contact.linkedIn')}
            </a>
          </Button>

          {/* Copy All Contacts */}
          <Button
            variant="ghost"
            className={cn(
              'w-full group relative overflow-hidden min-h-[48px] sm:min-h-[52px]',
              'border border-dashed border-muted-foreground/30',
              'hover:border-solid hover:border-accent',
              'hover:bg-accent/5 transition-all duration-500',
              'hover:scale-[1.02] touch-manipulation text-sm sm:text-base',
              !prefersReducedMotion && 'magnetic'
            )}
            onClick={onCopyAllContacts}
          >
            <Copy className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
            {t('contact.copyAll')}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>

      {/* Modal QR — animée */}
      <Dialog open={openQR} onOpenChange={setOpenQR}>
        <DialogContent className="sm:max-w-md border border-border/60 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {t('contact.callMe')}
            </DialogTitle>
            <DialogDescription>
              <ol className="list-decimal ml-5 space-y-1">
               <li>{t('contact.qrStep1')}</li>
              <li>{t('contact.qrStep2')}</li>
              <li>{t('contact.qrStep3')}</li>
              </ol>
            </DialogDescription>
          </DialogHeader>

          <div
            className={cn(
              'flex flex-col items-center py-4',
              // Animation d’entrée unique (désactivée si prefersReducedMotion)
              prefersReducedMotion ? '' : 'animate-in fade-in-0 zoom-in-95 duration-300'
            )}
          >
            {/* QR — pas d’animation continue, rendu net */}
            <div className="p-4 rounded-xl bg-background border shadow-sm">
              <QRCode value={vcard} size={192} />
            </div>
          </div>
        </DialogContent>
      </Dialog>


    </>
  )
}
