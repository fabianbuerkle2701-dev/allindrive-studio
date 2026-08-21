import { useEffect, useRef, useState, type ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  /** Abstand in Pixeln um das Element, ab dem es dem Zeiger folgt. */
  padding?: number
  /** Je groesser, desto weniger bewegt sich das Element. */
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  wrapperClassName?: string
}

/**
 * Zieht das Kind leicht in Richtung Mauszeiger, sobald der in die Naehe
 * kommt, und laesst es beim Verlassen langsamer zuruecklaufen als es
 * gekommen ist. Der Effekt ist reine Zierde und deshalb an einen echten
 * Zeiger gebunden: Auf einem Touchgeraet passiert nichts.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  wrapperClassName,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const feinerZeiger = window.matchMedia('(hover: hover) and (pointer: fine)')
    const wenigerBewegung = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!feinerZeiger.matches || wenigerBewegung.matches) return

    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

      const imFeld =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding

      if (imFeld) {
        setActive(true)
        setOffset({ x: dx / strength, y: dy / strength })
      } else {
        setActive(false)
        setOffset({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div ref={ref} className={wrapperClassName}>
      <div
        className={className}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
