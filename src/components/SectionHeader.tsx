interface Props {
  subtitle: string
  title: string
  description: string
  inView: boolean
  className?: string
}

import { memo } from "react"

export default memo(function SectionHeader({
  subtitle,
  title,
  description,
  inView,
  className = "mb-16",
}: Props) {
  return (
    <div
      className={`text-center ${className} transition-all duration-[1200ms] ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <p className="text-accent text-sm tracking-[0.3em] uppercase font-body font-light mb-5">
        {subtitle}
      </p>
      <h2
        className="font-display text-5xl md:text-6xl mb-5 text-white leading-[1.2] tracking-[3px]"
        style={{ textShadow: "0 2px 10px rgba(60, 40, 10, 0.3)" }}
      >
        {title}
      </h2>
      <p className="text-body/50 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-body font-light">
        {description}
      </p>
    </div>
  )
})
