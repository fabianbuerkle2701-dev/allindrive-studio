import { useEffect, useRef } from 'react'

// Selbst gerendertes Nacht-Fahrt-Video (kein Stock). Liegt in public/.
const SRC = import.meta.env.BASE_URL + 'hero-drive.mp4'
const POSTER = import.meta.env.BASE_URL + 'hero-drive-poster.webp'

/**
 * Hero-Hintergrundvideo, dessen Abspielposition am Scrollen haengt
 * („spielt beim Scrollen mit"): scrollt man durch den Hero, faehrt das Video
 * vor. Das Video wird als Blob geladen (volle Seekbarkeit auch auf statischen
 * Hosts), die Zeit per rAF sanft nachgezogen. Ein Abdunkel-Overlay haelt den
 * Vordergrund (Wortmarke, iPhone, Claim) lesbar. Bei prefers-reduced-motion
 * bleibt es beim Standbild.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let objectUrl: string | null = null
    let cancelled = false

    // Als Blob laden -> immer voll seekbar (kein Einfrieren bei fehlendem
    // HTTP-Range-Support). Fallback: direkte URL.
    fetch(SRC)
      .then((r) => r.blob())
      .then((b) => {
        if (cancelled) return
        objectUrl = URL.createObjectURL(b)
        v.src = objectUrl
        v.load()
      })
      .catch(() => {
        if (!cancelled) v.src = SRC
      })

    let duration = 6
    const onMeta = () => {
      duration = v.duration && isFinite(v.duration) ? v.duration : 6
    }
    v.addEventListener('loadedmetadata', onMeta)

    if (reduce) {
      return () => {
        cancelled = true
        v.removeEventListener('loadedmetadata', onMeta)
        if (objectUrl) URL.revokeObjectURL(objectUrl)
      }
    }

    let target = 0
    let current = 0
    let raf = 0
    let visible = true

    const onScroll = () => {
      // Fortschritt ueber knapp einen Bildschirm Scrollen.
      const p = Math.min(Math.max(window.scrollY / (window.innerHeight * 1.05), 0), 1)
      target = p * Math.max(0.1, duration - 0.05)
    }

    const tick = () => {
      current += (target - current) * 0.12 // sanftes Nachziehen
      if (Math.abs(target - current) < 0.001) current = target
      if (visible && v.readyState >= 1 && Math.abs(v.currentTime - current) > 0.008) {
        try {
          v.currentTime = current
        } catch {
          /* Seek noch nicht moeglich */
        }
      }
      raf = requestAnimationFrame(tick)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    raf = requestAnimationFrame(tick)

    const io = new IntersectionObserver((es) => (visible = !!es[0]?.isIntersecting), {
      threshold: 0,
    })
    io.observe(v)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      v.removeEventListener('loadedmetadata', onMeta)
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        className="h-full w-full object-cover opacity-90"
      />
      {/* Zwei leichte Ebenen statt einer kraeftigen: das reale Auto-Video bleibt
          sichtbar (heller Wunsch), aber links ist genug Abdunklung fuer die weisse
          Headline und oben/unten eine sanfte Vignette. Rechts (Himmel/Auto) bleibt
          es hell. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(12,12,12,0.78) 0%, rgba(12,12,12,0.45) 38%, rgba(12,12,12,0.12) 62%, rgba(12,12,12,0.30) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(12,12,12,0.45) 0%, rgba(12,12,12,0) 22%, rgba(12,12,12,0) 68%, rgba(12,12,12,0.55) 100%)',
        }}
      />
    </div>
  )
}
