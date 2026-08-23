import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'

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

// Unter dieser Breite ist das iPhone im Hero zu klein zum Bedienen: dort oeffnet
// der Tap die Vorschau im Vollbild, wo die App in echter Handybreite rendert.
const FULLSCREEN_BELOW = 700

/**
 * Ein iPhone als Rahmen um einen App-Screenshot – optional mit echter,
 * klickbarer App darin. Die Rundungen sind in Prozent angegeben, damit die
 * Ecken bei jeder Groesse dieselbe Kurve behalten wie am echten Geraet.
 */
export default function IphoneFrame({ src, alt, demoUrl, className = '', style }: IphoneFrameProps) {
  const screenRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [size, setSize] = useState({ w: 0, h: 0 })

  // Bildschirmmasse schon vor dem Paint messen (kein Flackern) und laufend
  // aktualisieren – Poster UND App werden identisch positioniert.
  useLayoutEffect(() => {
    const el = screenRef.current
    if (!el) return
    const messen = () => setSize({ w: el.clientWidth, h: el.clientHeight })
    messen()
    const ro = new ResizeObserver(messen)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Vollbild: Seite nicht mehr scrollen und mit Escape schliessbar.
  useEffect(() => {
    if (!fullscreen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [fullscreen])

  const starten = () => {
    if (typeof window !== 'undefined' && window.innerWidth < FULLSCREEN_BELOW) setFullscreen(true)
    else setActive(true)
  }

  // Kein schwarzer Balken oben: die App laeuft randlos bis zum oberen Rand
  // (wie auf einem echten iPhone laeuft der Inhalt unter der Dynamic Island
  // durch). Poster und App fuellen damit den ganzen Bildschirm.
  const TOP_INSET = 0
  const topPx = size.h * TOP_INSET
  const scale = size.h > 0 ? (size.h - topPx) / LOGICAL_H : 0
  const appW = LOGICAL_W * scale
  const leftPx = (size.w - appW) / 2
  const boxStyle: CSSProperties = {
    left: leftPx,
    top: topPx,
    width: LOGICAL_W,
    height: LOGICAL_H,
    // Ohne dies klemmt Tailwinds Preflight (img { max-width:100% }) das Poster
    // auf die Screenbreite, bevor der Transform greift -> Bild zu schmal, links.
    maxWidth: 'none',
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
  }

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
          {/* Standbild – exakt wie die spaetere App positioniert (unter der
              Statusleiste), damit beim Tap kein Versatz entsteht. */}
          <img
            src={src}
            alt={alt}
            fetchPriority="high"
            decoding="async"
            className={
              scale > 0
                ? 'absolute object-cover object-top'
                : 'absolute inset-0 h-full w-full object-cover object-top'
            }
            style={scale > 0 ? boxStyle : undefined}
          />

          {/* Die echte App im iPhone (Desktop): unter der Statusleiste, skaliert. */}
          {demoUrl && active && scale > 0 && (
            <iframe
              title="Allindrive – klickbare Vorschau"
              src={demoUrl}
              loading="lazy"
              className="absolute border-0"
              style={boxStyle}
            />
          )}

          {/* Start-Overlay: nur solange die App noch nicht laeuft. */}
          {demoUrl && !active && (
            <button
              type="button"
              onClick={starten}
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
              <span
                className="px-[8%] text-center font-medium uppercase leading-tight tracking-wide"
                style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.8rem)' }}
              >
                Tippen und ausprobieren
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

      {/* Vollbild-Vorschau (v.a. mobil): die App rendert in echter Handybreite
          und ist voll bedienbar. Per Portal an <body>, damit kein transformierter
          Vorfahre das Fixed-Layout einschraenkt. */}
      {fullscreen &&
        demoUrl &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex flex-col bg-ink/95"
            role="dialog"
            aria-modal="true"
            aria-label="Allindrive – klickbare Vorschau"
          >
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-xs font-medium uppercase tracking-widest text-chalk/70 sm:text-sm">
                Live-Vorschau
              </span>
              <button
                type="button"
                onClick={() => setFullscreen(false)}
                aria-label="Vorschau schließen"
                className="flex items-center gap-2 rounded-full border-2 border-chalk/40 px-4 py-2 text-xs font-medium uppercase tracking-wider text-chalk transition-colors duration-200 hover:bg-chalk/10 sm:text-sm"
              >
                Schließen
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <iframe
              title="Allindrive – klickbare Vorschau"
              src={demoUrl}
              className="mx-auto w-full max-w-md flex-1 border-0 bg-black"
            />
            <p className="px-4 pb-4 pt-2 text-center text-xs text-chalk/50">
              Demo-Ansicht · Änderungen werden nicht gespeichert
            </p>
          </div>,
          document.body,
        )}
    </div>
  )
}
