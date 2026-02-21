import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { survivalRules } from "../../data/survivalRules"
import type { SurvivalRule } from "../../data/survivalRules"
import SectionHeader from "../SectionHeader"

export default function SurvivalGuide() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="survival-guide"
      ref={ref}
      className="relative py-28 md:py-36 px-6 bg-background overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/LAND_16_9.png')",
          filter: "saturate(0.2) brightness(0.1)",
        }}
      />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      {/* Subtle atmospheric layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(199,162,93,0.5) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Wisdom of the Apocalypse"
          title="Rules to Survive"
          description="Hard-earned lessons written in blood. The rules nobody teaches you — because the teachers didn't make it."
          inView={inView}
          className="mb-20"
        />

        {/* Rules list */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/10 via-accent/5 to-accent/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-20 md:space-y-24">
            {survivalRules.map((rule) => (
              <RuleItem key={rule.id} rule={rule} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RuleItem({ rule }: { rule: SurvivalRule }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center relative"
    >
      {/* Rule number */}
      <p
        className="font-display text-8xl md:text-9xl text-accent/80 leading-none tracking-[5px] mb-3"
        aria-hidden="true"
      >
        {String(rule.number).padStart(2, "0")}
      </p>

      {/* Rule text */}
      <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-[3px] mb-4 leading-[1.1]">
        {rule.rule}
      </h3>

      {/* Decorative divider */}
      <div className="w-10 h-px bg-accent/30 mx-auto mb-4" />

      {/* Subtext */}
      <p className="text-body/40 text-base md:text-lg leading-relaxed font-body font-light max-w-md mx-auto">
        {rule.subtext}
      </p>
    </motion.div>
  )
}
