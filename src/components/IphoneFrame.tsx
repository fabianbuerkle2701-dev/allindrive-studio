import type { CSSProperties } from 'react'

type IphoneFrameProps = {
  src: string
  alt: string
  /** Wird von aussen gesetzt: die Hoehe bestimmt die Groesse, die Breite folgt
   *  aus dem Seitenverhaeltnis. */
  className?: string
  style?: CSSProperties
}

/**
 * Ein iPhone als Rahmen um einen App-Screenshot. Die Rundungen sind in Prozent
 * angegeben, damit die Ecken bei jeder Groesse dieselbe Kurve behalten wie am
 * echten Geraet. Der Screenshot sitzt randlos im Bildschirm, darueber liegt die
 * Dynamic Island.
 *
 * Seitenverhaeltnis 9:19.5 entspricht dem iPhone 15/16. Der Screenshot darf ein
 * leicht abweichendes Format haben, object-cover faengt das ab.
 */
export default function IphoneFrame({ src, alt, className = '', style }: IphoneFrameProps) {
  return (
    <div className={`relative aspect-[9/19.5] ${className}`} style={style}>
      {/* Seitentasten: nur angedeutet, damit der Rand nicht tot wirkt. */}
      <span className="absolute left-[-1.5%] top-[22%] h-[7%] w-[1.6%] rounded-l-full bg-[#1a1a1c]" aria-hidden="true" />
      <span className="absolute left-[-1.5%] top-[32%] h-[11%] w-[1.6%] rounded-l-full bg-[#1a1a1c]" aria-hidden="true" />
      <span className="absolute left-[-1.5%] top-[45%] h-[11%] w-[1.6%] rounded-l-full bg-[#1a1a1c]" aria-hidden="true" />
      <span className="absolute right-[-1.5%] top-[36%] h-[15%] w-[1.6%] rounded-r-full bg-[#1a1a1c]" aria-hidden="true" />

      {/* Geraetekoerper aus Titan: der helle Verlauf sitzt an den Kanten. */}
      <div
        className="absolute inset-0 rounded-[15%/6.9%] p-[3%]"
        style={{
          background:
            'linear-gradient(145deg, #3a3a3f 0%, #101012 40%, #2c2c31 70%, #0d0d0f 100%)',
          boxShadow:
            '0 40px 90px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)',
        }}
      >
        {/* Der Bildschirm. bg-black, damit vor dem Laden nichts durchscheint. */}
        <div className="relative h-full w-full overflow-hidden rounded-[12.5%/5.6%] bg-black">
          <img
            src={src}
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />

          {/* Dynamic Island. */}
          <span
            className="absolute left-1/2 top-[1.5%] h-[3.4%] w-[30%] -translate-x-1/2 rounded-full bg-black"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
