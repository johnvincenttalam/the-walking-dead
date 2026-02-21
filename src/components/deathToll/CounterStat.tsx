import { useState, useEffect, useRef, memo } from "react"
import type { DeathTollStat } from "../../data/deathTollStats"

interface Props {
  stat: DeathTollStat
  index: number
  inView: boolean
}

export default memo(function CounterStat({ stat, index, inView }: Props) {
  const [displayValue, setDisplayValue] = useState(0)
  const animatedRef = useRef(false)

  useEffect(() => {
    if (!inView || animatedRef.current) return
    animatedRef.current = true

    const duration = 2000
    const target = stat.value
    let startTime: number | null = null
    let rafId: number

    function animate(currentTime: number) {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(eased * target))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(target)
      }
    }

    const delayMs = 400 + index * 150
    const timeout = setTimeout(() => {
      rafId = requestAnimationFrame(animate)
    }, delayMs)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(rafId)
    }
  }, [inView, stat.value, index])

  return (
    <div
      className={`group text-center rounded-2xl bg-background/60 border border-white/[0.04] hover:border-blood/30 p-8 md:p-10 transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: inView ? `${400 + index * 150}ms` : "0ms" }}
    >
      {/* Animated number */}
      <p className="font-display text-4xl md:text-5xl text-white tracking-[1px] mb-3 overflow-hidden whitespace-nowrap">
        {displayValue.toLocaleString()}
        {stat.suffix && <span className="text-blood-light">{stat.suffix}</span>}
      </p>

      {/* Label */}
      <p className="text-body/40 text-sm tracking-[0.2em] uppercase font-body font-light">
        {stat.label}
      </p>

      {/* Blood-red accent underline on hover */}
      <div className="w-8 h-px bg-blood/0 group-hover:bg-blood/40 mx-auto mt-4 transition-all duration-500 group-hover:w-12" />
    </div>
  )
})
