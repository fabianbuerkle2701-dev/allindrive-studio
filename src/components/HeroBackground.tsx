import { useEffect, useRef } from 'react'

/**
 * Dezenter, animierter Hero-Hintergrund: eine naechtliche Strasse in
 * Zentralperspektive, deren Mittelmarkierungen auf den Betrachter zulaufen
 * (Fahrgefuehl nach vorn), plus ein weicher Orange-Glow am Horizont in der
 * Markenfarbe. Bewusst dunkel und ruhig, damit Wortmarke und iPhone im
 * Vordergrund klar bleiben.
 *
 * Original (kein Stock), performant (Canvas + requestAnimationFrame, dpr
 * gedeckelt), pausiert ausserhalb des Sichtfelds und im Hintergrund-Tab und
 * steht still, wenn `prefers-reduced-motion` gesetzt ist.
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (reduce) draw(0)
    }

    const DASHES = 16
    let offset = 0
    let scrollUnits = 0 // vom Scrollen getriebener Vorlauf
    let last = 0
    let raf = 0
    let running = false

    const draw = (time: number) => {
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0
      last = time
      // Ruhiger Eigenlauf, damit es auch ohne Scrollen lebt ...
      if (!reduce) offset = (offset + dt * 0.05) % 1
      // ... der Hauptvorlauf kommt aber vom Scrollen (das „Video spielt mit").
      const flow = offset + scrollUnits

      const horizonY = h * 0.4
      const vpX = w * 0.5

      // Grund
      const bg = ctx.createLinearGradient(0, 0, 0, h)
      bg.addColorStop(0, '#0a0a0c')
      bg.addColorStop(0.4, '#0c0c0e')
      bg.addColorStop(1, '#060607')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      // Horizont-Glow in Markenorange
      const glowR = Math.max(w, h) * 0.36
      const glow = ctx.createRadialGradient(vpX, horizonY, 0, vpX, horizonY, glowR)
      glow.addColorStop(0, 'rgba(255,147,0,0.13)')
      glow.addColorStop(0.5, 'rgba(255,115,0,0.05)')
      glow.addColorStop(1, 'rgba(255,115,0,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, w, h)

      // Zwei aeussere Fahrbahnraender (statisch, nur Struktur).
      ctx.lineWidth = 1.4
      for (const s of [-1, 1]) {
        const g = ctx.createLinearGradient(0, horizonY, 0, h)
        g.addColorStop(0, 'rgba(200,210,225,0)')
        g.addColorStop(0.5, 'rgba(200,210,225,0.045)')
        g.addColorStop(1, 'rgba(200,210,225,0.12)')
        ctx.strokeStyle = g
        ctx.beginPath()
        ctx.moveTo(vpX + s * w * 0.016, horizonY)
        ctx.lineTo(vpX + s * w * 0.52, h + 4)
        ctx.stroke()
      }

      // Laufende Markierungen auf mehreren Spuren – bewusst NEBEN dem iPhone
      // (Mitte ist verdeckt), damit die Bewegung sichtbar bleibt. Jede Spur
      // laeuft vom Fluchtpunkt nach aussen-unten, in Perspektive beschleunigend.
      const lanes = [-0.46, -0.28, 0.28, 0.46]
      for (let li = 0; li < lanes.length; li++) {
        const frac = lanes[li]
        const hx = vpX + frac * w * 0.035 // am Horizont eng beieinander
        const bx = vpX + frac * w // am unteren Rand aufgefaechert
        const angle = Math.atan2(h - horizonY, bx - hx) - Math.PI / 2
        for (let k = 0; k < DASHES; k++) {
          const phase = (flow + li * 0.11 + k / DASHES) % 1
          const p = Math.pow(phase, 1.8) // beschleunigt nach unten
          const x = hx + (bx - hx) * p
          const y = horizonY + (h - horizonY) * p
          const size = 1 + p * 5.5
          const len = 4 + p * 44
          const alpha = 0.04 + p * 0.2
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(angle)
          ctx.fillStyle = `rgba(255,170,80,${alpha})`
          if (ctx.roundRect) {
            ctx.beginPath()
            ctx.roundRect(-size / 2, -len / 2, size, len, size / 2)
            ctx.fill()
          } else {
            ctx.fillRect(-size / 2, -len / 2, size, len)
          }
          ctx.restore()
        }
      }

      if (!reduce && running) raf = requestAnimationFrame(draw)
    }

    const start = () => {
      if (running || reduce) return
      running = true
      last = 0
      raf = requestAnimationFrame(draw)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    if (reduce) {
      draw(0)
    } else {
      // Nur laufen lassen, solange der Hero sichtbar ist.
      const io = new IntersectionObserver(
        (entries) => (entries[0]?.isIntersecting ? start() : stop()),
        { threshold: 0 },
      )
      io.observe(canvas)

      const onVis = () => (document.hidden ? stop() : start())
      document.addEventListener('visibilitychange', onVis)

      // Scroll-Position -> Vorlauf der Strasse. Ein Bildschirm Scrollen laesst
      // die Markierungen mehrfach durchlaufen, das Fahrgefuehl „spielt" also mit.
      const onScroll = () => {
        scrollUnits = window.scrollY * 0.004
      }
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })

      return () => {
        stop()
        ro.disconnect()
        io.disconnect()
        document.removeEventListener('visibilitychange', onVis)
        window.removeEventListener('scroll', onScroll)
      }
    }

    return () => {
      stop()
      ro.disconnect()
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Abdunkeln, damit der Vordergrund (Wortmarke, iPhone, Claim) klar bleibt:
          oben und unten kraeftiger, in der Mitte laesst es die Strasse dezent durch. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(12,12,12,0.72) 0%, rgba(12,12,12,0.34) 30%, rgba(12,12,12,0.26) 55%, rgba(12,12,12,0.62) 100%)',
        }}
      />
    </div>
  )
}
