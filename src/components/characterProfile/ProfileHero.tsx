import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { Character } from "../../types/character"
import { statusBadge, FALLBACK_IMAGE } from "../../utils/statusStyles"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

interface Props {
  character: Character
}

export default function ProfileHero({ character }: Props) {
  const { spoilerShield } = useSpoilerShield()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let rafId = 0
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        rafId = 0
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const maxScroll = typeof window !== "undefined" ? window.innerHeight : 1000
  const progress = Math.min(scrollY / maxScroll, 1)
  const bgTranslateY = progress * 120
  const bgScale = 1 + progress * 0.1
  const contentOpacity = 1 - progress * 1.8

  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden flex items-end">
      {/* Parallax background image */}
      <div
        className="absolute inset-[-15%] will-change-transform"
        style={{ transform: `translateY(${bgTranslateY}px) scale(${bgScale})` }}
      >
        <img
          src={character.image}
          alt={character.name}
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE }}
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.35) saturate(0.6)" }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

      {/* Atmosphere based on status */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background:
            character.status === "Deceased" && !spoilerShield
              ? "radial-gradient(ellipse at 50% 60%, rgba(139,30,30,0.4) 0%, transparent 55%)"
              : "radial-gradient(ellipse at 50% 60%, rgba(199,162,93,0.3) 0%, transparent 55%)",
        }}
      />

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-24 left-6 md:left-10 flex items-center gap-2 text-body/35 hover:text-accent transition-colors z-10 group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm tracking-wider font-body font-light">Back</span>
      </Link>

      {/* Content */}
      <div
        className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-20 will-change-transform"
        style={{ opacity: Math.max(contentOpacity, 0) }}
      >
        {/* Status + Actor + Seasons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4 flex-wrap"
        >
          <span
            className={`px-3 py-1 rounded-full text-xs font-body font-medium border ${
              spoilerShield ? "border-white/10 text-body/40" : statusBadge[character.status]
            }`}
          >
            {spoilerShield ? "???" : character.status}
          </span>
          <span className="text-body/40 text-sm font-body font-light">{character.actor}</span>
          <span className="text-body/20 text-sm font-body font-light">{character.seasons}</span>
        </motion.div>

        {/* Character name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] text-white tracking-[5px] leading-[1.2]"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 0 60px rgba(199,162,93,0.08)" }}
        >
          {character.name}
        </motion.h1>

        {/* Gold underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-24 h-[2px] bg-accent mt-6 origin-left"
        />
      </div>
    </section>
  )
}
