import { memo, useMemo } from "react"
import { motion } from "framer-motion"
import type { CharacterStats } from "../../types/characterProfile"

interface Props {
  stats: CharacterStats
}

export default memo(function ProfileQuickStats({ stats }: Props) {
  const items = useMemo(() => [
    { label: "First Appearance", value: stats.firstAppearance },
    { label: "Last Appearance", value: stats.lastAppearance },
    { label: "Weapon of Choice", value: stats.weaponOfChoice },
    { label: "Kill Count", value: stats.killCountEstimate },
    { label: "Episodes", value: `${stats.episodeCount} Episodes` },
  ], [stats])

  return (
    <section className="relative bg-surface border-y border-accent/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="text-center md:text-left"
            >
              <p className="text-xs text-body/25 uppercase tracking-[0.2em] mb-1.5 font-body">
                {item.label}
              </p>
              <p className="text-accent text-sm md:text-base font-body font-light">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})
