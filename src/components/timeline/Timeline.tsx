import { useInView } from "react-intersection-observer"
import { timelineEvents } from "../../data/timeline"
import TimelineItem from "./TimelineItem"
import SectionHeader from "../SectionHeader"

export default function Timeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="timeline" ref={ref} className="relative py-28 md:py-36 px-6 bg-surface overflow-hidden">
      {/* Background image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/zbshcij6bwd81.png')",
          backgroundPosition: "center top",
          filter: "saturate(0) brightness(0.1)",
        }}
      /> */}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      {/* Subtle background atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(199,162,93,0.5) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="The Journey"
          title="Story Timeline"
          description="From Atlanta to the Commonwealth — trace the epic journey through every era of the apocalypse."
          inView={inView}
          className="mb-20"
        />

        {/* Vertical timeline */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={event.id}
              era={event.era}
              year={event.year}
              title={event.title}
              description={event.description}
              highlight={event.highlight}
              index={index}
              isLast={index === timelineEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
