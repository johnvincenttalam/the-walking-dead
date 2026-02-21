import { memo } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

interface Props {
  era: string
  year: string
  title: string
  description: string
  highlight?: boolean
  index: number
  isLast: boolean
}

export default memo(function TimelineItem({
  era,
  year,
  title,
  description,
  highlight,
  index,
  isLast,
}: Props) {
  const isLeft = index % 2 === 0
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-10">
      {/* ---- Center spine (visible on md+) ---- */}
      <div className="hidden md:flex flex-col items-center col-start-2 row-start-1">
        {/* Node */}
        <div
          className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-700 ${
            inView
              ? highlight
                ? "bg-accent border-accent shadow-[0_0_14px_rgba(199,162,93,0.5)] timeline-node-pulse"
                : "bg-surface-light border-accent/30"
              : "bg-surface border-white/10"
          }`}
        />
        {/* Connecting line */}
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-accent/20 via-accent/10 to-accent/20" />
        )}
      </div>

      {/* ---- Left content (even items) / empty (odd items) ---- */}
      <div
        className={`hidden md:flex col-start-1 row-start-1 ${
          isLeft ? "justify-end" : ""
        }`}
      >
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md w-full pb-16"
          >
            <CardContent
              year={year}
              era={era}
              title={title}
              description={description}
              highlight={highlight}
              align="right"
            />
          </motion.div>
        ) : (
          <div className="pb-16" />
        )}
      </div>

      {/* ---- Right content (odd items) / empty (even items) ---- */}
      <div
        className={`hidden md:flex col-start-3 row-start-1 ${
          !isLeft ? "justify-start" : ""
        }`}
      >
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md w-full pb-16"
          >
            <CardContent
              year={year}
              era={era}
              title={title}
              description={description}
              highlight={highlight}
              align="left"
            />
          </motion.div>
        ) : (
          <div className="pb-16" />
        )}
      </div>

      {/* ---- Mobile layout ---- */}
      <div className="md:hidden flex gap-5">
        {/* Mobile spine */}
        <div className="flex flex-col items-center">
          <div
            className={`relative z-10 w-3 h-3 rounded-full border-2 mt-1.5 transition-all duration-700 ${
              inView
                ? highlight
                  ? "bg-accent border-accent shadow-[0_0_10px_rgba(199,162,93,0.4)] timeline-node-pulse"
                  : "bg-surface-light border-accent/30"
                : "bg-surface border-white/10"
            }`}
          />
          {!isLast && (
            <div className="w-px flex-1 bg-gradient-to-b from-accent/15 to-accent/5" />
          )}
        </div>

        {/* Mobile content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pb-12 flex-1"
        >
          <CardContent
            year={year}
            era={era}
            title={title}
            description={description}
            highlight={highlight}
            align="left"
          />
        </motion.div>
      </div>
    </div>
  )
})

/* ---- Shared card content ---- */
function CardContent({
  year,
  era,
  title,
  description,
  highlight,
  align,
}: {
  year: string
  era: string
  title: string
  description: string
  highlight?: boolean
  align: "left" | "right"
}) {
  const { spoilerShield } = useSpoilerShield()

  return (
    <div
      className={`group rounded-2xl bg-surface/60 border p-6 md:p-7 transition-all duration-500 hover:bg-surface ${
        highlight
          ? "border-accent/15 hover:border-accent/30"
          : "border-white/[0.04] hover:border-accent/10"
      } ${align === "right" ? "md:text-right" : "md:text-left"}`}
    >
      {/* Year & era */}
      <div
        className={`flex items-baseline gap-3 mb-3 ${
          align === "right" ? "md:justify-end" : ""
        }`}
      >
        <span
          className={`font-display text-2xl md:text-3xl tracking-[1px] ${
            highlight ? "text-accent" : "text-accent/50"
          }`}
        >
          {year}
        </span>
        <span className="text-body/25 text-xs tracking-wider font-body font-light uppercase">
          {era}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-heading text-xl md:text-2xl font-bold leading-snug mb-3 ${
          highlight ? "text-white" : "text-white/70"
        }`}
      >
        {title}
      </h3>

      {/* Divider */}
      <div
        className={`w-8 h-px mb-4 transition-all duration-500 ${
          highlight
            ? "bg-accent/40 group-hover:bg-accent/60 group-hover:w-12"
            : "bg-white/10 group-hover:bg-accent/20"
        } ${align === "right" ? "md:ml-auto" : ""}`}
      />

      {/* Description */}
      <p className={`text-body/45 text-sm md:text-base leading-[1.85] font-body font-light transition-all duration-500 ${
        spoilerShield ? "blur-[6px] select-none" : ""
      }`}>
        {description}
      </p>
    </div>
  )
}
