import { memo } from "react"
import { motion } from "framer-motion"
import type { Character } from "../../types/character"
import { statusDot, statusText, FALLBACK_IMAGE } from "../../utils/statusStyles"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

interface Props {
  character: Character
  index: number
  onClick: () => void
}

export default memo(function CharacterCard({ character, index, onClick }: Props) {
  const { spoilerShield } = useSpoilerShield()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${character.name} details`}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-surface"
    >
      {/* Image — grayscale by default, color on hover */}
      <img
        src={character.image}
        alt={character.name}
        loading="lazy"
        onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE }}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out grayscale-[90%] group-hover:grayscale-0 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* Hover darken */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

      {/* Status badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-medium backdrop-blur-md bg-black/30 border border-white/[0.08] ${
            spoilerShield ? "text-body/40" : statusText[character.status]
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${spoilerShield ? "bg-body/30" : statusDot[character.status]}`} />
          {spoilerShield ? "???" : character.status}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h3 className="font-heading text-xl md:text-2xl leading-tight mb-1 text-white font-semibold tracking-[1px]">
          {character.name}
        </h3>

        <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-out">
          <p className="text-body/50 text-sm leading-relaxed line-clamp-2 mt-2 mb-3 font-body font-light">
            {character.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {character.traits.slice(0, 3).map((trait) => (
              <span
                key={trait}
                className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/15 font-body"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gold accent underline */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-center" />

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_-40px_40px_-20px_rgba(199,162,93,0.08)]" />
    </motion.div>
  )
})
