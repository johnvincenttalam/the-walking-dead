import { memo } from "react"
import { useInView } from "react-intersection-observer"
import type { IconicScene } from "../../data/iconicScenes"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

interface Props {
  scene: IconicScene
  index: number
}

export default memo(function ScenePanel({ scene, index }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { spoilerShield } = useSpoilerShield()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className="relative h-screen flex items-end pointer-events-none"
    >
      {/* Text content at bottom */}
      <div
        className={`relative z-10 w-full px-6 md:px-16 lg:px-24 pb-20 md:pb-28 max-w-5xl transition-all duration-1200 ease-out pointer-events-auto ${
          isEven ? "mr-auto text-left" : "ml-auto text-right"
        } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      >
        {/* Season / Episode tag */}
        <p className="text-accent/70 text-sm md:text-md tracking-[0.3em] uppercase font-body font-light mb-3">
          {scene.season} &middot; {scene.episode}
        </p>

        {/* Scene title */}
        <h3 className="font-display text-4xl md:text-6xl lg:text-8xl text-white lg:leading-28 tracking-[3px] mb-5 drop-shadow-lg">
          {scene.title}
        </h3>

        {/* Accent divider */}
        <div
          className={`w-16 h-px bg-accent/50 mb-5 ${isEven ? "" : "ml-auto"}`}
        />

        {/* Context line */}
        <div className={`relative ${isEven ? "" : "ml-auto"} max-w-lg`}>
          <p
            className={`text-body/70 text-base md:text-xl leading-[1.8] font-body font-light drop-shadow-md transition-all duration-500 ${
              spoilerShield ? "blur-[6px] select-none" : ""
            }`}
          >
            {scene.context}
          </p>
          {spoilerShield && (
            <span className="absolute inset-0 flex items-center justify-center text-accent/40 text-xs uppercase tracking-[0.2em] font-body pointer-events-none">
              [Spoiler Hidden]
            </span>
          )}
        </div>
      </div>
    </div>
  )
})
