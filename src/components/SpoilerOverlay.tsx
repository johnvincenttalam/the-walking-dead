import { motion, AnimatePresence } from "framer-motion"
import { useSpoilerShield } from "../contexts/SpoilerContext"

interface Props {
  sectionId: string
  title?: string
  message?: string
  children: React.ReactNode
}

export default function SpoilerOverlay({
  sectionId,
  title = "Spoiler Warning",
  message = "Click to reveal",
  children,
}: Props) {
  const { spoilerShield, revealedSections, revealSection } = useSpoilerShield()
  const isRevealed = revealedSections.has(sectionId)
  const shouldBlur = spoilerShield && !isRevealed

  return (
    <div className="relative">
      <div
        className={`transition-all duration-700 ${shouldBlur ? "blur-lg select-none pointer-events-none" : ""}`}
      >
        {children}
      </div>

      <AnimatePresence>
        {shouldBlur && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group z-20"
            onClick={() => revealSection(sectionId)}
          >
            <div className="text-center px-6">
              {/* Shield icon */}
              <div className="mb-5">
                <svg
                  className="w-12 h-12 mx-auto text-accent/50 group-hover:text-accent transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" strokeWidth={1.2} />
                  <line x1="4" y1="20" x2="20" y2="4" strokeWidth={1.2} />
                </svg>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-accent/80 tracking-[3px] mb-3">
                {title}
              </h3>

              <p className="text-body/40 text-sm font-body font-light tracking-wider mb-6 max-w-sm mx-auto">
                {message}
              </p>

              <div className="inline-flex items-center gap-2 text-accent/50 text-xs uppercase tracking-[0.2em] font-body group-hover:text-accent transition-colors duration-300">
                <span>Click to reveal</span>
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
