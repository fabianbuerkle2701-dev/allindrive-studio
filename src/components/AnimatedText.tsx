import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = Array.from(text)

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
