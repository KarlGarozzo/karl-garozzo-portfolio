import { useState, useEffect } from 'react'

interface ParallaxBlob {
  id: string
  x: number
  y: number
  scale: number
  color: string
  blur: number
}

interface ParallaxBackgroundProps {
  sectionRef: React.RefObject<HTMLElement>
  prefersReducedMotion: boolean
}

export function ParallaxBackground({ sectionRef, prefersReducedMotion }: ParallaxBackgroundProps) {
  const [parallaxBlobs, setParallaxBlobs] = useState<ParallaxBlob[]>([])

  // Initialize parallax blobs
  useEffect(() => {
    const blobs: ParallaxBlob[] = [
      {
        id: 'blob1',
        x: 20,
        y: 30,
        scale: 1.2,
        color: 'hsl(230 65% 35% / 0.1)',
        blur: 60
      },
      {
        id: 'blob2',
        x: 80,
        y: 70,
        scale: 0.8,
        color: 'hsl(235 70% 45% / 0.15)',
        blur: 80
      },
      {
        id: 'blob3',
        x: 50,
        y: 10,
        scale: 1.0,
        color: 'hsl(189 100% 60% / 0.08)',
        blur: 100
      }
    ]
    setParallaxBlobs(blobs)
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    if (prefersReducedMotion) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate if section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight)
        
        setParallaxBlobs(prevBlobs => 
          prevBlobs.map(blob => ({
            ...blob,
            y: blob.y + scrollProgress * 10 * (blob.id === 'blob2' ? -1 : 1)
          }))
        )
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prefersReducedMotion, sectionRef])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {parallaxBlobs.map(blob => (
        <div
          key={blob.id}
          className="absolute rounded-full opacity-60 transition-all duration-1000 ease-out"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: `${200 * blob.scale}px`,
            height: `${200 * blob.scale}px`,
            background: blob.color,
            filter: `blur(${blob.blur}px)`,
            transform: prefersReducedMotion ? 'none' : `scale(${blob.scale})`
          }}
        />
      ))}
    </div>
  )
}