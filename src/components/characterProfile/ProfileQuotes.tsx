import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { assetUrl } from "../../utils/assetUrl"

interface Props {
  mainQuote: string
  additionalQuotes: string[]
  characterName: string
}

export default function ProfileQuotes({ mainQuote, additionalQuotes, characterName }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Fixed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('${assetUrl("/images/hero-bg.png")}')`,
          filter: "saturate(0.2) brightness(0.12)",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      {/* Gold atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse at center, rgba(199,162,93,0.8) 0%, transparent 55%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase font-body font-light mb-12">
            Memorable Words
          </p>

          {/* Primary quote */}
          <blockquote
            className="font-display text-3xl md:text-5xl lg:text-6xl text-white/95 tracking-[3px] leading-[1.1]"
            style={{ textShadow: "0 4px 30px rgba(10,10,10,0.9)" }}
          >
            "{mainQuote}"
          </blockquote>

          <p className="text-accent/50 text-sm mt-6 font-body font-light tracking-wider">
            — {characterName}
          </p>

          <div className="w-px h-12 bg-gradient-to-b from-accent/40 to-transparent mx-auto mt-12 mb-12" />
        </motion.div>

        {/* Additional quotes */}
        <div className="space-y-8">
          {additionalQuotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="border-l-2 border-accent/30 pl-6"
            >
              <p className="text-xl md:text-2xl font-heading italic text-accent/70 leading-snug">
                "{q}"
              </p>
              <p className="text-body/30 text-sm mt-3 font-body font-light">— {characterName}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
