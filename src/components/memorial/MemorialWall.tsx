import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { characters } from "../../data/characters"
import { memorialEntries } from "../../data/memorialData"
import MemorialCard from "./MemorialCard"
import SpoilerOverlay from "../SpoilerOverlay"

const PAGE_SIZE = 4

export default function MemorialWall() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const deceasedWithDetails = characters
    .filter((c) => c.status === "Deceased")
    .map((character) => {
      const memorial = memorialEntries.find(
        (m) => m.characterId === character.id
      )
      return {
        ...character,
        causeOfDeath: memorial?.causeOfDeath ?? "Unknown",
        deathEpisode: memorial?.deathEpisode ?? "",
        deathSeason: memorial?.deathSeason ?? "",
      }
    })

  const visibleCharacters = deceasedWithDetails.slice(0, visibleCount)
  const hasMore = visibleCount < deceasedWithDetails.length
  const remaining = deceasedWithDetails.length - visibleCount

  return (
    <section id="memorial" ref={ref} className="relative py-28 md:py-36 px-6 bg-surface overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/TWDS11C_07_1280x720_AppTVOS_Swim.png')",
          filter: "saturate(0.1) brightness(0.08)",
        }}
      />

      {/* Top separator — blood-red themed */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood/20 to-transparent" />

      {/* Blood splatter overlay */}
      <img
        src="/images/overlays/blood-splatter-png-44464.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-1/3 opacity-[0.05] pointer-events-none"
      />
      <img
        src="/images/overlays/blood-png-7140.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-1/4 opacity-[0.04] pointer-events-none"
      />

      {/* Fog overlay */}
      {/* <img
        src="/images/overlays/—Pngtree—white fog smoke effect_9095056.png"
        alt=""
        aria-hidden="true"
        className="absolute top-1/4 left-0 w-full opacity-[0.03] pointer-events-none"
      /> */}

      {/* Deep blood-red atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(139,30,30,0.7) 0%, transparent 55%)",
        }}
      />

      <SpoilerOverlay
        sectionId="memorial-wall"
        title="Memorial Wall"
        message="This section reveals major character deaths"
      >
        <div className="max-w-7xl mx-auto">
          {/* Custom header with blood-red subtitle */}
          <div
            className={`text-center mb-16 transition-all duration-[1200ms] ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-blood-light text-sm tracking-[0.3em] uppercase font-body font-light mb-5">
              In Memoriam
            </p>
            <h2 className="font-display text-5xl md:text-6xl mb-5 text-white tracking-[3px]">
              Memorial Wall
            </h2>
            <p className="text-body/50 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body font-light">
              Those who fell so others could live. Their names are etched in the
              memory of every survivor who carries on.
            </p>
          </div>

          {/* Memorial grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visibleCharacters.map((character, index) => (
              <MemorialCard
                key={character.id}
                character={character}
                index={index}
              />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-14"
            >
              <button
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="group inline-flex items-center gap-3 bg-background/60 backdrop-blur-sm border border-blood/20 hover:border-blood/40 px-8 py-3.5 rounded-lg text-blood-light/70 hover:text-blood-light text-sm font-body font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,30,30,0.1)]"
              >
                Load More
                <span className="text-xs font-light opacity-50 group-hover:opacity-70 transition-opacity">
                  {remaining} remaining
                </span>
                <svg
                  className="w-4 h-4 opacity-40 group-hover:opacity-70 group-hover:translate-y-0.5 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </SpoilerOverlay>
    </section>
  )
}
