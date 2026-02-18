import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import { ContactItem } from './ContactItem'
import { cn } from '@/lib/utils'

interface ContactCardProps {
  prefersReducedMotion: boolean
}

export function ContactCard({ prefersReducedMotion }: ContactCardProps) {
  const { t } = useLanguage()
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const contactItems = [
    {
      icon: Mail,
      labelKey: 'contact.email',
      valueKey: 'contact.emailValue',
      href: 'mailto:karl.anthony.garozzo@gmail.com',
      copyValue: 'karl.anthony.garozzo@gmail.com'
    },
    {
      icon: Phone,
      labelKey: 'contact.phone',
      valueKey: 'contact.phoneValue',
      href: 'tel:+33612345678',
      copyValue: '+33612345678'
    },
    {
      icon: MapPin,
      labelKey: 'contact.location',
      valueKey: 'contact.locationValue',
      copyValue: t('contact.locationValue')
    },
    {
      icon: Linkedin,
      labelKey: 'contact.linkedIn',
      valueKey: 'contact.linkedInValue',
      href: 'https://www.linkedin.com/in/karl-anthony-garozzo-278728301/',
      copyValue: 'https://www.linkedin.com/in/karl-anthony-garozzo-278728301/'
    }
  ]

  // 3D tilt effect
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / centerY * -6
      const rotateY = (x - centerX) / centerX * 6

      setMousePosition({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
      setIsHovered(false)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
      card.addEventListener('mouseenter', handleMouseEnter)

      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
        card.removeEventListener('mouseenter', handleMouseEnter)
      }
    }
  }, [prefersReducedMotion])

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative group transition-all duration-500 ease-out",
        "backdrop-blur-2xl bg-gradient-to-br from-card/80 to-card/40",
        "border border-border/50 rounded-2xl p-6 sm:p-8 shadow-card",
        !prefersReducedMotion && "perspective-1000",
        isHovered && !prefersReducedMotion && "shadow-floating"
      )}
      style={
        !prefersReducedMotion
          ? {
              transform: `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
              transformStyle: 'preserve-3d'
            }
          : undefined
      }
    >
      {/* Ambient glow */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
          "bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10",
          isHovered && "opacity-100"
        )}
      />

      {/* Contact Items */}
      <div className="space-y-4 sm:space-y-6 relative z-10">
        {contactItems.map((item, index) => (
          <ContactItem
            key={item.labelKey}
            icon={item.icon}
            labelKey={item.labelKey}
            valueKey={item.valueKey}
            href={item.href}
            copyValue={item.copyValue}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </div>
  )
}