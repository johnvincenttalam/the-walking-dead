import HeroSection from "../components/hero/HeroSection"
import SeriesOverview from "../components/overview/SeriesOverview"
import CharacterGrid from "../components/characters/CharacterGrid"
import CinematicDivider from "../components/CinematicDivider"
import IconicScenesGallery from "../components/iconicScenes/IconicScenesGallery"
import Timeline from "../components/timeline/Timeline"
import DeathTollCounter from "../components/deathToll/DeathTollCounter"
import QuoteSection from "../components/quotes/QuoteSection"
import SurvivalGuide from "../components/survivalGuide/SurvivalGuide"
import EasterEggAccordion from "../components/easterEggs/EasterEggAccordion"
import MemorialWall from "../components/memorial/MemorialWall"
import SurvivorQuiz from "../components/quiz/SurvivorQuiz"
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SeriesOverview />
      <CharacterGrid />
      <CinematicDivider
        quote="The ones who survive, they're not the strong ones. They're the ones willing to do what it takes."
        author="Rick Grimes"
      />
      <IconicScenesGallery />
      <Timeline />
      <DeathTollCounter />
      <QuoteSection />
      <SurvivalGuide />
      <EasterEggAccordion />
      <MemorialWall />
      <SurvivorQuiz />
      <Footer />
    </main>
  )
}
