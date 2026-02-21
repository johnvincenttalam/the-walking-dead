import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { characters } from "../../data/characters"
import type { Character } from "../../types/character"
import CharacterCard from "./CharacterCard"
import CharacterModal from "./CharacterModal"
import SectionHeader from "../SectionHeader"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

type StatusFilter = "All" | "Alive" | "Deceased" | "Unknown"
const filters: StatusFilter[] = ["All", "Alive", "Deceased", "Unknown"]
const PAGE_SIZE = 10

export default function CharacterGrid() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [filter, setFilter] = useState<StatusFilter>("All")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const { spoilerShield } = useSpoilerShield()

  // Reset to "All" when spoiler shield turns ON
  useEffect(() => {
    if (spoilerShield && filter !== "All") setFilter("All")
  }, [spoilerShield])

  const filteredCharacters =
    filter === "All" ? characters : characters.filter((c) => c.status === filter)

  const visibleCharacters = filteredCharacters.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCharacters.length
  const remaining = filteredCharacters.length - visibleCount

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [filter])

  return (
    <section id="characters" ref={ref} className="relative py-28 md:py-36 px-6 bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      <div className="max-w-full mx-auto md:px-20">
        <SectionHeader
          subtitle="The Survivors"
          title="Meet the Characters"
          description="The heart of The Walking Dead lies in its characters — flawed, fierce, and forever changed by the world around them."
          inView={inView}
        />

        {/* Filters */}
        <div
          className={`flex justify-center flex-wrap gap-2 mb-14 transition-all duration-[1200ms] delay-200 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filters.map((f) => {
            if (spoilerShield && f !== "All") return null
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-lg text-sm font-body font-medium tracking-wider uppercase transition-all duration-300 border ${
                  filter === f
                    ? "bg-[#2a2a2a] border-accent text-accent shadow-[0_0_15px_rgba(199,162,93,0.1)]"
                    : "bg-transparent border-transparent text-body/30 hover:text-body/60"
                }`}
              >
                {f}
                <span className="ml-1.5 text-xs opacity-50">
                  {f === "All" ? characters.length : characters.filter((c) => c.status === f).length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {visibleCharacters.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              index={index}
              onClick={() => setSelectedCharacter(character)}
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
              className="group inline-flex items-center gap-3 bg-[#2a2a2a]/60 backdrop-blur-sm border border-accent/20 hover:border-accent/40 px-8 py-3.5 rounded-lg text-accent/70 hover:text-accent text-sm font-body font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,162,93,0.1)]"
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

        {filteredCharacters.length === 0 && (
          <div className="text-center py-24">
            <p className="text-body/30 text-base font-body font-light">
              No characters found with status "{filter}".
            </p>
          </div>
        )}
      </div>

      <CharacterModal
        character={selectedCharacter}
        isOpen={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </section>
  )
}
