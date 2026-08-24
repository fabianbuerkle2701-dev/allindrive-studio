import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'

type AnimatedTextProps = {
  text: string
  className?: string
  style?: React.CSSProperties
}

/**
 * Der Satz hellt sich Zeichen fuer Zeichen auf, waehrend er durch das Bild
 * laeuft. Jedes Zeichen liegt doppelt da: einmal unsichtbar, damit der
 * Umbruch stimmt, und einmal darueber als bewegtes Zeichen. Ohne den
 * unsichtbaren Platzhalter wuerde die Zeile beim Scrollen springen.
 */
function Zeichen({
  char,
  progress,
  range,
}: {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-0" aria-hidden="true">
        {char}
      </span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduziert = useReducedMotion()
  // Die Aufhellung soll abgeschlossen sein, sobald der Absatz ungefaehr in der
  // Bildmitte steht (nicht erst, wenn er fast am oberen Rand angekommen ist).
  // Darum endet der Fortschritt schon, wenn die Unterkante ~60% der Viewporthoehe
  // erreicht - dann ist der Text mittig bereits vollstaendig weiss.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'end 0.7'],
  })

  const chars = Array.from(text)

  // Wer weniger Bewegung eingestellt hat, bekommt den Satz vollstaendig und
  // ruhig. Der Aufbau Zeichen fuer Zeichen laesst den Text sonst dauerhaft
  // halb sichtbar erscheinen, sobald jemand nicht durchscrollt.
  if (reduziert) {
    return (
      <p ref={ref} className={className} style={style}>
        {text}
      </p>
    )
  }

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      <span aria-hidden="true">
        {chars.map((char, i) => (
          <Zeichen
            key={`${char}-${i}`}
            char={char}
            progress={scrollYProgress}
            range={[i / chars.length, (i + 1) / chars.length]}
          />
        ))}
      </span>
    </p>
  )
}
