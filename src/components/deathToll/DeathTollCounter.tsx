import { useInView } from "react-intersection-observer"
import { deathTollStats } from "../../data/deathTollStats"
import SectionHeader from "../SectionHeader"
import CounterStat from "./CounterStat"
import SpoilerOverlay from "../SpoilerOverlay"

export default function DeathTollCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="death-toll" ref={ref} className="relative py-28 md:py-36 px-6 bg-surface overflow-hidden">
      {/* Background image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/gwwmw70hyr54aphoauz5.png')",
          filter: "saturate(0.15) brightness(0.1)",
        }}
      /> */}

      {/* Top separator — blood-red themed */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood/20 to-transparent" />

      {/* Blood splatter overlay */}
      <img
        src="/images/overlays/blood-splatter-png-44472.png"
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/2 opacity-[0.09] pointer-events-none"
      />

      {/* Fog overlay */}
      <img
        src="/images/overlays/isolate-realistic-white-fog-on-t.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full opacity-[0.03] pointer-events-none"
      />

      {/* Blood-red atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,30,30,0.8) 0%, transparent 60%)",
        }}
      />

      {/* Subtle gold secondary tint */}
      {/* <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgba(199,162,93,0.6) 0%, transparent 50%)",
        }}
      /> */}

      <div className="max-w-max mx-auto">
        <SectionHeader
          subtitle="The Cost of Survival"
          title="Death Toll"
          description="Numbers that quantify the unquantifiable. Every digit represents a story, a loss, a world forever changed."
          inView={inView}
        />

        <SpoilerOverlay
          sectionId="death-toll-stats"
          title="Death Toll"
          message="Death statistics reveal plot details"
        >
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {deathTollStats.map((stat, i) => (
              <CounterStat key={stat.id} stat={stat} index={i} inView={inView} />
            ))}
          </div>
        </SpoilerOverlay>
      </div>
    </section>
  )
}
