import { useInView } from "react-intersection-observer"
import { assetUrl } from "../utils/assetUrl"

interface Props {
  quote?: string
  author?: string
}

export default function CinematicDivider({ quote, author }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background — fixed attachment for the cinematic scroll effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${assetUrl("/images/bg.png")}')`,
          filter: "saturate(0.35) brightness(0.3)",
        }}
      />

      {/* Heavy overlays for depth */}
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Gold atmosphere tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(199,162,93,0.3) 0%, transparent 60%)",
        }}
      />

      {/* Optional quote content */}
      {quote && (
        <div
          className={`relative z-10 text-center px-8 max-w-3xl mx-auto transition-all duration-[1500ms] ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white/90 tracking-[2px]"
            style={{
              textShadow: "0 4px 30px rgba(10,10,10,0.9)",
            }}
          >
            "{quote}"
          </blockquote>
          {author && (
            <p className="mt-6 text-accent/50 text-base tracking-wider font-body font-light">
              — {author}
            </p>
          )}
        </div>
      )}

      {/* If no quote, show a subtle decorative element */}
      {!quote && (
        <div
          className={`relative z-10 flex flex-col items-center gap-4 transition-all duration-[1500ms] ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-accent/30" />
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
        </div>
      )}
    </section>
  )
}
