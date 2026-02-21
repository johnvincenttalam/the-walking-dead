import { motion } from "framer-motion"

interface Props {
  onComplete: () => void
}

export default function Preloader({ onComplete }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] bg-background flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Subtle blood drip line */}
        {/* <motion.div
          className="w-px h-0 bg-gradient-to-b from-transparent via-blood to-transparent mx-auto mb-8"
          animate={{ height: 60 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        /> */}

        {/* Title reveal */}
        {/* <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-accent text-xs uppercase font-body font-medium tracking-widest mb-4"
        >
          Cinematic Universe Experience
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <p className="font-display text-xl md:text-3xl text-white uppercase tracking-[0.3em] mb-1 md:mb-4">
            The
          </p>
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl text-white uppercase tracking-normal leading-[1.2]">
            Walking Dead
          </h1>
        </motion.div>

        {/* Accent underline */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-body text-sm font-body font-light mt-5 tracking-[3px]"
          onAnimationComplete={onComplete}
        >
          FIGHT THE DEAD. FEAR THE LIVING.
        </motion.p>
      </div>
    </motion.div>
  )
}
