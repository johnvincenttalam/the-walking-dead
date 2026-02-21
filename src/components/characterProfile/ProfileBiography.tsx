import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { Character } from "../../types/character"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

interface Props {
  biography: string[]
  character: Character
  memorial?: { causeOfDeath: string; deathSeason: string; deathEpisode: string }
}

export default function ProfileBiography({ biography, character, memorial }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { spoilerShield } = useSpoilerShield()
  const firstName = character.name.split(" ")[0]

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Fixed cinematic background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${character.image}')`,
          filter: "saturate(0.15) brightness(0.08)",
        }}
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-body font-light mb-5">
            Biography
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-[3px] leading-[1.2] mb-12">
            {firstName}'s Story
          </h2>

          <div className="space-y-6">
            {biography.map((paragraph, i) => {
              const isLastForDeceased = character.status === "Deceased" && i === biography.length - 1
              return (
                <p
                  key={i}
                  className={`text-body/60 leading-[2] text-base md:text-lg font-body font-light transition-all duration-500 ${
                    i === 0 ? "drop-cap" : ""
                  } ${spoilerShield && isLastForDeceased ? "blur-[6px] select-none" : ""}`}
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Memorial box for deceased characters */}
          {memorial && (
            <div
              className={`mt-12 p-6 rounded-xl border border-blood/20 bg-blood/5 transition-all duration-500 ${
                spoilerShield ? "blur-[6px] select-none" : ""
              }`}
            >
              <p className="text-blood-light text-sm tracking-[0.3em] uppercase font-body font-light mb-2">
                Cause of Death
              </p>
              <p className="text-body/60 font-body font-light">{memorial.causeOfDeath}</p>
              <p className="text-body/30 text-sm font-body font-light mt-2">
                {memorial.deathSeason} &middot; {memorial.deathEpisode}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
