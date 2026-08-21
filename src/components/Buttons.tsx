import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

const APP_URL = 'https://allindrive.netlify.app'

type ButtonProps = {
  href?: string
  children?: ReactNode
  className?: string
}

/**
 * Die Hauptaktion der Seite. Der Verlauf laeuft von Tinte ueber ein tiefes
 * Orange in die Markenfarbe. Die hellen Stufen sitzen bewusst am aeusseren
 * Rand: In der Mitte, wo die Schrift steht, bleibt der Grund dunkel genug,
 * dass Weiss darauf lesbar ist.
 */
export function ContactButton({
  href = '#kontakt',
  children = 'Zugang anfragen',
  className = '',
}: ButtonProps) {
  return (
    <a
      href={href}
      className={
        'inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white ' +
        'px-8 py-3 text-xs sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ' +
        'transition-transform duration-200 ease-out active:scale-[0.97] ' +
        className
      }
      style={{
        background:
          'linear-gradient(123deg, #1F1206 7%, #B84A00 37%, #8F3A00 72%, #FF9300 100%)',
        boxShadow:
          '0px 4px 4px rgba(255, 147, 0, 0.25), 4px 4px 12px #C4590A inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {children}
    </a>
  )
}

/** Der ruhige Zwilling: gleiche Form, nur Umriss statt Flaeche. */
export function LiveProjectButton({
  href = APP_URL,
  children = 'In der App ansehen',
  className = '',
}: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        'inline-flex items-center justify-center rounded-full border-2 border-chalk text-chalk ' +
        'font-medium uppercase tracking-widest ' +
        'px-8 py-3 text-sm sm:px-10 sm:py-3.5 sm:text-base ' +
        'gap-2 transition-colors duration-200 ease-out hover:bg-chalk/10 active:scale-[0.97] ' +
        className
      }
    >
      {children}
      <ArrowUpRight aria-hidden="true" strokeWidth={2} className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
  )
}

export { APP_URL }
