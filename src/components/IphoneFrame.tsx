import { useEffect, useRef, useState, type CSSProperties } from 'react'

type IphoneFrameProps = {
  /** Standbild, das vor dem Start (und als Poster) im Bildschirm liegt. */
  src: string
  alt: string
  /** Optional: URL der echten, klickbaren App. Ist sie gesetzt, erscheint ein
   *  Start-Overlay; erst beim Antippen wird der iframe geladen (schneller Hero). */
  demoUrl?: string
  /** Breite bestimmt die Groesse; die Hoehe folgt aus dem 9:19.5-Format. */
  className?: string
  style?: CSSProperties
}

// Logische iPhone-Breite, in der die eingebettete App rendert. Der iframe wird
// von dieser Breite auf die tatsaechliche Bildschirmbreite herunterskaliert,
// damit das mobile Layout scharf bleibt statt gequetscht.
const LOGICAL_W = 390
const LOGICAL_H = Math.round((LOGICAL_W * 19.5) / 9) // 845, passt zum Rahmen-Format

/**
 * Ein iPhone als Rahmen um einen App-Screenshot – optional mit echter,
 * klickbarer App darin. Die Rundungen sind in Prozent angegeben, damit die
 * Ecken bei jeder Groesse dieselbe Kurve behalten wie am echten Geraet.
 */
export default function IphoneFrame({ src, alt, demoUrl, className = '', style }: IphoneFrameProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [scale, setScale] = useState(0)

  // Der iframe rendert in fester Logikbreite und wird auf die reale
  // Bildschirmbreite skaliert. scale = Bildschirmbreite / 390.
  useEffect(() => {
    if (!active) return
    const el = screenRef.current
    if (!el) return
    const messen = () => setScale(el.clientWidth / LOGICAL_W)
    messen()
    const ro = new ResizeObserver(messen)
    ro.observe(el)
    return () => ro.disconnect()
  }, [active])

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
        <div ref={screenRef} className="relative h-full w-full overflow-hidden rounded-[12.5%/5.6%] bg-black">
          {/* Standbild – bleibt als Unterlage liegen, bis die App geladen ist. */}
          <img
            src={src}
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />

          {/* Die echte App, skaliert von 390px Logikbreite auf die Bildschirmbreite. */}
          {demoUrl && active && scale > 0 && (
            <iframe
              title="Allindrive – klickbare Vorschau"
              src={demoUrl}
              loading="lazy"
              className="absolute left-0 top-0 border-0"
              style={{
                width: LOGICAL_W,
                height: LOGICAL_H,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            />
          )}

          {/* Start-Overlay: nur solange die App noch nicht laeuft. */}
          {demoUrl && !active && (
            <button
              type="button"
              onClick={() => setActive(true)}
              className="group absolute inset-0 flex flex-col items-center justify-end gap-[4%] pb-[14%] text-white"
              style={{ background: 'linear-gradient(180deg, rgba(12,12,12,0) 45%, rgba(12,12,12,0.72) 100%)' }}
              aria-label="Klickbare Vorschau starten"
            >
              <span
                className="flex items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95"
                style={{
                  width: '22%',
                  aspectRatio: '1',
                  background: '#FF9300',
                  boxShadow: '0 8px 30px rgba(255,147,0,0.5)',
                }}
              >
                {/* Play-Dreieck */}
                <svg viewBox="0 0 24 24" className="w-[42%]" fill="#0C0C0C" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="px-[8%] text-center font-medium uppercase leading-tight tracking-wide"
                style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.8rem)' }}>
                Tippen und durch die App klicken
              </span>
            </button>
          )}

          {/* Dynamic Island – liegt ueber allem. Bewusst schmal und dicht am
              oberen Rand, damit sie den App-Header (Wetter/Logo) nicht verdeckt. */}
          <span
            className="pointer-events-none absolute left-1/2 top-[0.9%] z-10 h-[2.7%] w-[24%] -translate-x-1/2 rounded-full bg-black"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
