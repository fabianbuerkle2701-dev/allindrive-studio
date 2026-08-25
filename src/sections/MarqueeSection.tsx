import { useEffect, useRef, useState } from 'react'
import { FOOTNOTE, MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/content'

type MarqueeImage = { src: string; alt: string }

/** Drei Durchlaeufe derselben Liste, damit an den Raendern keine Luecke entsteht. */
const PASSES = [0, 1, 2]

function MarqueeRow({
  images,
  translate,
}: {
  images: readonly MarqueeImage[]
  translate: number
}) {
  return (
    <div
      className="flex w-max gap-3"
      style={{ transform: `translateX(${translate}px)`, willChange: 'transform' }}
    >
      {PASSES.map((pass) =>
        images.map((image, index) => (
          <img
            key={`${pass}-${index}`}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="h-[270px] w-[420px] flex-none rounded-2xl object-cover"
            style={{ border: '1px solid rgba(36,26,18,0.10)', boxShadow: '0 10px 30px rgba(36,26,18,0.08)' }}
          />
        )),
      )}
    </div>
  )
}

/**
 * Zwei Bilderreihen, die beim Scrollen gegeneinander laufen.
 * Der Versatz haengt an der Scrollposition, nicht an einer Dauer: Die Reihen
 * stehen still, sobald der Nutzer still steht.
 */
export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Dokumentposition der Section, einmal gemessen und bei Resize erneut.
    let sectionTop = 0
    const measure = () => {
      const el = sectionRef.current
      if (!el) return
      sectionTop = el.getBoundingClientRect().top + window.scrollY
    }
    const update = () => {
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    const handleResize = () => {
      measure()
      update()
    }

    measure()
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const shift = offset - 200

  return (
    <section id="galerie" ref={sectionRef} className="overflow-hidden bg-paper pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={MARQUEE_ROW_1} translate={shift} />
        <MarqueeRow images={MARQUEE_ROW_2} translate={-shift} />
      </div>

      <p className="mx-auto max-w-3xl px-6 pt-10 text-center text-xs text-ink/55 sm:text-sm">
        {FOOTNOTE}
      </p>
    </section>
  )
}
