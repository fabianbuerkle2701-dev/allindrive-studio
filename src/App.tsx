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
  return (
    <main className="bg-ink" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
