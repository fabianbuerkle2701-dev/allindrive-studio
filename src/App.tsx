import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

/**
 * Die Reihenfolge ist die Argumentation: erst wer wir sind, dann der Beweis
 * in Bildschirmfotos, dann warum, dann was, dann wie es aussieht, dann die
 * eine Handlung.
 *
 * overflowX 'clip' statt 'hidden': 'hidden' erzeugt einen Scroll-Container
 * und damit wuerden die stapelnden Karten im Einblick nicht mehr kleben.
 */
export default function App() {
  // Nur in der Entwicklung: ?shift=2400 zieht die Seite um 2400 Pixel nach
  // oben. Das ist Werkzeug fuer Aufnahmen weiter unten liegender Abschnitte,
  // weil ein kopfloser Browser vor dem Bild nicht scrollt. Im Produktionsbau
  // faellt der ganze Zweig weg.
  const verschiebung =
    import.meta.env.DEV
      ? Number(new URLSearchParams(window.location.search).get('shift') || 0)
      : 0

  return (
    <main
      className="bg-ink"
      style={{ overflowX: 'clip', marginTop: verschiebung ? -verschiebung : undefined }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
