import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { easterEggs } from "../../data/easterEggs"
import SectionHeader from "../SectionHeader"

export default function EasterEggAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="easter-eggs" ref={ref} className="relative py-28 md:py-36 px-6 bg-surface overflow-hidden">
      {/* Background image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/badass-rick-grimes-v0-29u9alcjre.png')",
          filter: "saturate(0.2) brightness(0.1)",
        }}
      /> */}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Hidden Details"
          title="Easter Eggs"
          description="Hidden references, secret connections, and behind-the-scenes stories that most fans never catch."
          inView={inView}
          className="mb-14"
        />

        <div className="space-y-2">
          {easterEggs.map((egg, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={egg.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`rounded-xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-surface-light border-accent/15"
                    : "bg-transparent border-white/[0.04] hover:border-accent/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-base md:text-lg pr-4 transition-colors duration-300 font-body font-light ${
                      isOpen ? "text-accent" : "text-body/60 group-hover:text-body/80"
                    }`}
                  >
                    {egg.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-4 h-4 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-body/50 leading-[1.9] text-base font-body font-light">
                          {egg.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
