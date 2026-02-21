import { memo } from "react"
import { motion } from "framer-motion"
import { FALLBACK_IMAGE } from "../../utils/statusStyles"
import type { Character } from "../../types/character"

interface MemorialCharacter extends Character {
  causeOfDeath: string
  deathEpisode: string
  deathSeason: string
}

interface Props {
  character: MemorialCharacter
  index: number
}

export default memo(function MemorialCard({ character, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-background"
    >
      {/* Image — permanently grayscale for somber tone */}
      <img
        src={character.image}
        alt={`In memory of ${character.name}`}
        loading="lazy"
        onError={(e) => {
          ;(e.target as HTMLImageElement).src = FALLBACK_IMAGE
        }}
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:brightness-[0.35] transition-all duration-700"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

      {/* Candle flame at top center */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="memorial-flame w-2 h-4 rounded-full bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-200 opacity-80" />
        <div className="w-px h-3 bg-body/20 mt-0.5" />
      </div>

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="font-heading text-xl md:text-2xl leading-tight mb-1 text-white font-semibold tracking-[1px]">
          {character.name}
        </h3>
        <p className="text-blood-light text-sm font-body font-light tracking-wider">
          {character.deathSeason} &middot; {character.deathEpisode}
        </p>

        {/* Hover reveal: cause of death */}
        <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-out">
          <p className="text-body/50 text-sm leading-relaxed mt-3 font-body font-light">
            {character.causeOfDeath}
          </p>
          <p className="text-body/25 text-xs mt-2 font-body font-light italic">
            Portrayed by {character.actor}
          </p>
        </div>
      </div>

      {/* Blood-red accent underline on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blood/0 via-blood-light to-blood/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
    </motion.div>
  )
})
