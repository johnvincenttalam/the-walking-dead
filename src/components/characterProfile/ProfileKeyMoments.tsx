import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { KeyMoment } from "../../types/characterProfile"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

interface Props {
  moments: KeyMoment[]
  characterName: string
}

export default function ProfileKeyMoments({ moments, characterName }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 bg-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(199,162,93,0.5) 0%, transparent 55%)" }}
      />

      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-[1200ms] ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-body font-light mb-5">
            Defining Moments
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-[3px] leading-[1.3]">
            {characterName.split(" ")[0]}'s Journey
          </h2>
        </div>

        <div className="relative mt-16">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-accent/20 -translate-x-px" />

          {moments.map((moment, index) => (
            <MomentCard key={index} moment={moment} index={index} isLast={index === moments.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MomentCard({ moment, index, isLast }: { moment: KeyMoment; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { spoilerShield } = useSpoilerShield()
  const isLeft = index % 2 === 0
  const shouldBlur = spoilerShield && moment.isSpoiler

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-10">
      {/* Center spine — desktop */}
      <div className="hidden md:flex flex-col items-center col-start-2 row-start-1">
        <div className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-700 ${
          inView
            ? "bg-accent border-accent shadow-[0_0_14px_rgba(199,162,93,0.5)] timeline-node-pulse"
            : "bg-surface border-white/10"
        }`} />
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-accent/20 via-accent/10 to-accent/20" />}
      </div>

      {/* Left content */}
      <div className={`hidden md:flex col-start-1 row-start-1 ${isLeft ? "justify-end" : ""}`}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full pb-16"
          >
            <CardContent moment={moment} align="right" shouldBlur={shouldBlur} />
          </motion.div>
        ) : <div className="pb-16" />}
      </div>

      {/* Right content */}
      <div className={`hidden md:flex col-start-3 row-start-1 ${!isLeft ? "justify-start" : ""}`}>
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full pb-16"
          >
            <CardContent moment={moment} align="left" shouldBlur={shouldBlur} />
          </motion.div>
        ) : <div className="pb-16" />}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-5">
        <div className="flex flex-col items-center">
          <div className={`relative z-10 w-3 h-3 rounded-full border-2 mt-1.5 transition-all duration-700 ${
            inView
              ? "bg-accent border-accent shadow-[0_0_10px_rgba(199,162,93,0.4)] timeline-node-pulse"
              : "bg-surface border-white/10"
          }`} />
          {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-accent/15 to-accent/5" />}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="pb-12 flex-1"
        >
          <CardContent moment={moment} align="left" shouldBlur={shouldBlur} />
        </motion.div>
      </div>
    </div>
  )
}

function CardContent({ moment, align, shouldBlur }: { moment: KeyMoment; align: "left" | "right"; shouldBlur: boolean }) {
  return (
    <div className={`group rounded-2xl bg-surface/60 border border-accent/15 hover:border-accent/30 p-6 md:p-7 transition-all duration-500 hover:bg-surface ${
      align === "right" ? "md:text-right" : "md:text-left"
    }`}>
      <p className={`text-accent/60 text-xs tracking-[0.2em] uppercase font-body font-light mb-2 ${
        align === "right" ? "md:text-right" : ""
      }`}>
        S{moment.season} E{moment.episode} — {moment.episodeTitle}
      </p>
      <h3 className="font-heading text-xl md:text-2xl font-bold leading-snug mb-3 text-white">
        {moment.title}
      </h3>
      <div className={`w-8 h-px mb-4 bg-accent/40 group-hover:bg-accent/60 group-hover:w-12 transition-all duration-500 ${
        align === "right" ? "md:ml-auto" : ""
      }`} />
      <div className="relative">
        <p className={`text-body/45 text-sm md:text-base leading-[1.85] font-body font-light transition-all duration-500 ${
          shouldBlur ? "blur-[6px] select-none" : ""
        }`}>
          {moment.description}
        </p>
        {shouldBlur && (
          <span className={`absolute inset-0 flex items-center text-accent/40 text-xs uppercase tracking-[0.2em] font-body pointer-events-none ${
            align === "right" ? "md:justify-end" : "justify-start"
          }`}>
            [Spoiler Hidden]
          </span>
        )}
      </div>
    </div>
  )
}
