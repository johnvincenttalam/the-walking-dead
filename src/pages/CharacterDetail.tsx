import { useEffect, useState, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { characters } from "../data/characters"
import { getCharacterProfile } from "../data/characterProfiles"
import { statusBadge, statusText, FALLBACK_IMAGE } from "../utils/statusStyles"
import CharacterProfilePage from "../components/characterProfile/CharacterProfilePage"
import Footer from "../components/layout/Footer"

export default function CharacterDetail() {
  const { id } = useParams<{ id: string }>()
  const prevIdRef = useRef(id)
  const [transitioning, setTransitioning] = useState(false)
  const [displayId, setDisplayId] = useState(id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  useEffect(() => {
    if (id !== prevIdRef.current) {
      setTransitioning(true)
      const fadeIn = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
        setDisplayId(id)
      }, 600)
      const fadeOut = setTimeout(() => {
        setTransitioning(false)
      }, 1200)
      prevIdRef.current = id
      return () => { clearTimeout(fadeIn); clearTimeout(fadeOut) }
    }
  }, [id])

  const character = characters.find((c) => c.id === displayId)
  const profile = character ? getCharacterProfile(character.id) : undefined
  const incomingCharacter = characters.find((c) => c.id === id)

  const transitionOverlay = (
    <AnimatePresence>
      {transitioning && (
        <motion.div
          key="scene-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center"
          >
            <div className="w-12 h-px bg-accent/40 mx-auto mb-6" />
            <h2
              className="font-display text-5xl md:text-7xl text-white/90 tracking-[6px]"
              style={{ textShadow: "0 4px 30px rgba(199,162,93,0.15)" }}
            >
              {incomingCharacter?.name}
            </h2>
            <div className="w-12 h-px bg-accent/40 mx-auto mt-6" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-5">
          <h1 className="text-3xl font-display text-white tracking-[2px]">
            Character Not Found
          </h1>
          <p className="text-body/40 text-base font-body font-light">
            The survivor you're looking for didn't make it.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#2a2a2a] border border-accent text-accent hover:text-accent-glow px-6 py-3 rounded-lg text-base font-body tracking-wider transition-all hover:shadow-[0_0_15px_rgba(199,162,93,0.1)]"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  if (profile) {
    return (
      <>
        {transitionOverlay}
        <CharacterProfilePage character={character} profile={profile} />
      </>
    )
  }

  return (
    <>
      {transitionOverlay}
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="relative h-[45vh] md:h-[55vh]">
          <img
            src={character.image}
            alt={character.name}
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE }}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5) saturate(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/30" />

          <Link
            to="/"
            className="absolute top-24 left-6 md:left-10 flex items-center gap-2 text-body/45 hover:text-accent transition-colors z-10 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm tracking-wider font-body font-light">Back</span>
          </Link>

          <div className="absolute bottom-10 left-6 md:left-10 right-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-body font-medium border ${statusBadge[character.status]}`}>
                  {character.status}
                </span>
                <span className="text-body/30 text-sm font-body font-light">{character.actor}</span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-6xl md:text-8xl text-white tracking-[4px]"
                style={{ textShadow: "0 2px 15px rgba(60, 40, 10, 0.4)" }}
              >
                {character.name}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 space-y-14">
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="border-l-2 border-accent pl-6"
          >
            <p className="text-2xl md:text-3xl font-heading italic text-accent leading-snug">
              "{character.quote}"
            </p>
          </motion.blockquote>

          {/* About */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <h2 className="text-xs uppercase tracking-[0.2em] text-body/30 mb-3 font-body font-medium">About</h2>
            <p className="text-body/60 leading-[1.9] text-base md:text-lg font-body font-light">{character.description}</p>
          </motion.div>

          {/* Traits */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <h2 className="text-xs uppercase tracking-[0.2em] text-body/30 mb-3 font-body font-medium">Character Traits</h2>
            <div className="flex flex-wrap gap-2">
              {character.traits.map((trait) => (
                <span key={trait} className="px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/15 text-sm font-body">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Arc */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
            <h2 className="text-xs uppercase tracking-[0.2em] text-body/30 mb-3 font-body font-medium">Character Arc</h2>
            <p className="text-body/60 leading-[1.9] text-base md:text-lg font-body font-light">{character.arc}</p>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-accent/[0.06]"
          >
            {[
              { label: "Portrayed By", value: character.actor },
              { label: "Appearances", value: character.seasons },
              {
                label: "Status",
                value: character.status,
                color: statusText[character.status],
              },
            ].map((meta) => (
              <div key={meta.label} className="bg-surface rounded-xl p-5 border border-accent/[0.05]">
                <p className="text-xs text-body/20 uppercase tracking-[0.2em] mb-1.5 font-body">{meta.label}</p>
                <p className={`text-base font-body font-light ${"color" in meta && meta.color ? meta.color : "text-white/80"}`}>
                  {meta.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
