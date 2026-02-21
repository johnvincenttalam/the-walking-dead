import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import type { CharacterRelationship } from "../../types/characterProfile"
import { characters } from "../../data/characters"
import { hasCharacterProfile } from "../../data/characterProfiles"
import { FALLBACK_IMAGE } from "../../utils/statusStyles"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

interface Props {
  relationships: CharacterRelationship[]
}

export default function ProfileRelationships({ relationships }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const { spoilerShield } = useSpoilerShield()

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-[1200ms] ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-body font-light mb-5">
            Bonds & Rivalries
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-[3px] leading-[1.2]">
            Connections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {relationships.map((rel, i) => {
            const relCharacter = characters.find((c) => c.id === rel.characterId)
            const shouldBlur = spoilerShield && rel.revealsDeath
            const hasProfile = hasCharacterProfile(rel.characterId)

            return (
              <motion.div
                key={rel.characterId}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: "easeOut" }}
                className="group rounded-2xl bg-surface/60 border border-accent/[0.06] hover:border-accent/15 p-6 transition-[border-color] duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  {relCharacter && (
                    <img
                      src={relCharacter.image}
                      alt={rel.name}
                      onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE }}
                      className="w-14 h-14 rounded-full object-cover grayscale-[70%] group-hover:grayscale-0 transition-all duration-500 border border-white/[0.06]"
                      style={{ filter: "brightness(0.7)" }}
                    />
                  )}
                  <div>
                    <h3 className="text-white font-heading text-lg font-semibold">{rel.name}</h3>
                    <span className="text-accent text-xs uppercase tracking-[0.2em] font-body">{rel.type}</span>
                  </div>
                </div>

                <div className="relative">
                  <p className={`text-body/50 text-sm leading-[1.8] font-body font-light transition-all duration-500 ${
                    shouldBlur ? "blur-[6px] select-none" : ""
                  }`}>
                    {rel.description}
                  </p>
                  {shouldBlur && (
                    <span className="text-accent/40 text-xs uppercase tracking-[0.2em] font-body mt-2 block">
                      [Contains Spoilers]
                    </span>
                  )}
                </div>

                {hasProfile && (
                  <Link
                    to={`/characters/${rel.characterId}`}
                    className="inline-flex items-center gap-1.5 text-accent/40 hover:text-accent text-xs uppercase tracking-[0.2em] mt-4 font-body transition-colors"
                  >
                    View Profile
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
