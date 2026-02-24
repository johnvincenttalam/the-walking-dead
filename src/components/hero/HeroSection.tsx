import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { assetUrl } from "../../utils/assetUrl"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
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

  // Only apply parallax while hero is visible (first ~100vh)
  const maxScroll = typeof window !== "undefined" ? window.innerHeight : 1000
  const progress = Math.min(scrollY / maxScroll, 1)

  // Video: drifts down slowly + zooms slightly
  const videoTranslateY = progress * 150
  const videoScale = 1 + progress * 0.15

  // Content: rises faster + fades out
  const contentTranslateY = progress * -200
  const contentOpacity = 1 - progress * 1.5

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-background text-white overflow-hidden"
    >
      {/* Parallax background video — oversized container */}
      <div
        className="absolute inset-[-15%] will-change-transform"
        style={{
          transform: `translateY(${videoTranslateY}px) scale(${videoScale})`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.5) brightness(0.4)" }}
        >
          <source
            src={assetUrl("/video/Zombie Invasion Live Wallpaper _ 4K Ultra HD Desktop Background (FREE Download).mp4")}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Center readability zone */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Top fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />

      {/* Warm gold tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(199,162,93,0.35) 0%, transparent 50%)",
        }}
      />

      {/* Content — parallax: rises + fades */}
      <div
        className="relative z-10 text-center px-6 max-w-7xl mx-auto will-change-transform"
        style={{
          transform: `translateY(${contentTranslateY}px)`,
          opacity: Math.max(contentOpacity, 0),
        }}
      >
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-accent uppercase text-sm md:text-base mb-4 font-body font-medium tracking-[4px]"
        >
          Cinematic Universe Experience
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-4"
          style={{
            textShadow:
              "0 4px 30px rgba(0, 0, 0, 0.95), 0 0 80px rgba(199, 162, 93, 0.1)",
          }}
        >
          <p className="font-display text-2xl md:text-4xl text-white uppercase tracking-[0.3em] mb-1">
            The
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] text-white uppercase tracking-normal leading-[1.2]">
            Walking <span className="text-accent">Dead</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-body/60 text-sm  md:text-md max-w-lg mx-auto leading-relaxed uppercase font-body font-light mb-12 tracking-[2px]"
        >
          Fight the dead. Fear the living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#characters"
            className="bg-[#2a2a2a]/80 backdrop-blur-sm border border-accent hover:border-accent-glow px-8 py-4 rounded-lg text-accent text-base font-body font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(199,162,93,0.2)] hover:text-accent-glow"
          >
            Explore Characters
          </a>
          <a
            href="#timeline"
            className="bg-[#2a2a2a]/80 backdrop-blur-sm border border-white/20 hover:border-accent/50 px-8 py-4 rounded-lg text-body text-base font-body font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(199,162,93,0.12)] hover:text-accent"
          >
            View Timeline
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: Math.max(contentOpacity, 0) }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-accent/40 text-xs uppercase tracking-[0.25em] font-body">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
