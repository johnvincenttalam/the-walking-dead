import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSpoilerShield } from "../contexts/SpoilerContext"

export default function SpoilerBanner() {
  const { toggleSpoilerShield, spoilerShield } = useSpoilerShield()
  const [dismissed, setDismissed] = useState(false)

  // Reset dismissed state whenever shield is turned OFF
  useEffect(() => {
    if (!spoilerShield) setDismissed(false)
  }, [spoilerShield])

  const dismiss = () => setDismissed(true)

  const enableShield = () => {
    if (!spoilerShield) toggleSpoilerShield()
  }

  const visible = !spoilerShield && !dismissed

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 200, delay: 2 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }}
          className="fixed bottom-0 left-0 right-0 md:left-auto md:bottom-6 md:right-6 z-[9997] p-4 md:p-0 pointer-events-none"
        >
          <div className="max-w-2xl md:max-w-md mx-auto md:mx-0 pointer-events-auto rounded-2xl bg-surface/95 backdrop-blur-xl border border-accent/10 shadow-[0_-4px_40px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Gold accent top line */}
            <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="p-5 md:p-6">
              <div className="flex items-start gap-4">
                {/* Shield icon */}
                <div className="hidden sm:flex shrink-0 w-10 h-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/15">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg md:text-xl text-white tracking-[2px] mb-1.5">
                    Spoiler Warning
                  </h3>
                  <p className="text-body/50 text-sm leading-relaxed font-body font-light mb-4">
                    This site contains major plot reveals from The Walking Dead.
                    Haven't caught up yet? Enable the Spoiler Shield to browse safely.
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={enableShield}
                      className="inline-flex items-center justify-center gap-2 bg-accent/15 border border-accent/30 hover:border-accent/50 px-5 py-2.5 rounded-lg text-accent text-sm font-body font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(199,162,93,0.15)]"
                    >
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span className="whitespace-nowrap">Enable Shield</span>
                    </button>
                    <button
                      onClick={dismiss}
                      className="px-5 py-2.5 rounded-lg text-body/40 hover:text-body/60 text-sm font-body font-medium tracking-wider uppercase transition-colors duration-300 whitespace-nowrap"
                    >
                      I'm caught up
                    </button>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={dismiss}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-body/30 hover:text-body/60 hover:bg-white/5 transition-all duration-200"
                  aria-label="Dismiss"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
