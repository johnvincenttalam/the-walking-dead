import { useInView } from "react-intersection-observer"

const stats = [
  { value: "11", label: "Seasons" },
  { value: "177", label: "Episodes" },
  { value: "2010-22", label: "Original Run" },
  { value: "17.3M", label: "Peak Viewers" },
]

export default function SeriesOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="relative lg:h-screen py-28 md:py-36 px-6 bg-background overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/Walking-Dead.png')",
          backgroundPosition: "center top",
          filter: "saturate(0.2) brightness(0.12)", 
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      <div
        className={`max-w-max lg:px-20 mx-auto transition-all duration-[1200ms] ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-body font-light">
              The Series
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.3] lg:leading-24 tracking-[3px]">
              A World
              <br />
              <span className="text-fog/60">Forever Changed</span>
            </h2>
            <div className="w-12 h-px bg-accent/40" />
            <p className="text-body/70 leading-[1.9] text-base md:text-lg font-body font-light">
              Based on the comic book series by Robert Kirkman, Tony Moore, and
              Charlie Adlard, The Walking Dead tells the story of the months and
              years after a zombie apocalypse. It follows a group of survivors
              led by former sheriff's deputy Rick Grimes, who travel in search
              of a safe and secure home.
            </p>
            <p className="text-body/40 leading-[1.9] text-base md:text-lg font-body font-light">
              Across 11 seasons and 177 episodes, the series redefined
              television horror and proved that the greatest threats in an
              apocalypse aren't the dead — they're the living.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`group bg-surface rounded-2xl p-7 border border-white/[0.04] hover:border-accent/20 transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: inView ? `${400 + i * 100}ms` : "0ms" }}
              >
                <p className="text-3xl md:text-4xl font-display text-accent mb-2 tracking-[2px]">
                  {stat.value}
                </p>
                <p className="text-body/40 text-sm tracking-[0.2em] uppercase font-body font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
