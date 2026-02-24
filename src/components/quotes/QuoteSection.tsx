import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { assetUrl } from "../../utils/assetUrl"

const quotes = [
  { text: "We are the walking dead.", author: "Rick Grimes" },
  { text: "I ain't nobody's bitch.", author: "Daryl Dixon" },
  { text: "Look at the flowers.", author: "Carol Peletier" },
  { text: "I am everywhere.", author: "Negan" },
  { text: "I'm still here.", author: "Michonne" },
  { text: "The pain doesn't go away. You just make room for it.", author: "Andrea" },
  { text: "In this life now, you kill or you die. Or you die and you kill.", author: "The Governor" },
]

export default function QuoteSection() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { ref: animRef, inView: animInView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const { ref: timerRef, inView: timerInView } = useInView({ threshold: 0.2 })

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length)
    }, 5500)
  }, [])

  // Only run interval when section is in view
  useEffect(() => {
    if (timerInView) {
      startInterval()
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [timerInView, startInterval])

  // Reset interval on manual dot click
  const goToQuote = (i: number) => {
    setCurrent(i)
    if (timerInView) startInterval()
  }

  // Merge refs for the section element
  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      animRef(node)
      timerRef(node)
    },
    [animRef, timerRef],
  )

  return (
    <section
      id="quotes"
      ref={setRefs}
      className="relative md:h-screen py-20 md:py-0z px-6 overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${assetUrl("/images/hero-bg.png")}')`,
          filter: "saturate(0.25) brightness(0.2)",
        }}
      />

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Edge fades */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Fog animation layers */}
      <div
        className="fog-layer-1 absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(199,162,93,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="fog-layer-2 absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(199,162,93,0.06) 0%, transparent 55%)",
        }}
      />

      {/* Gold glow at center */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(199,162,93,0.8) 0%, transparent 55%)",
        }}
      />

      <div
        className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-[1200ms] ${
          animInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <p className="text-accent text-sm tracking-[0.3em] uppercase font-body font-light mb-16">
          Iconic Lines
        </p>

        <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <blockquote
                className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-display leading-[1.1] text-white/95 tracking-[3px]"
                style={{
                  textShadow: "0 4px 30px rgba(10, 10, 10, 0.9), 0 0 60px rgba(199, 162, 93, 0.08)",
                }}
              >
                "{quotes[current].text}"
              </blockquote>
              <p className="mt-8 text-accent/60 text-base tracking-wider font-body font-light">
                — {quotes[current].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2.5 mt-14">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => goToQuote(i)}
              className={`rounded-full transition-all duration-400 ${
                i === current ? "bg-accent w-6 h-2" : "bg-accent/15 w-2 h-2 hover:bg-accent/30"
              }`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
