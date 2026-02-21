import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { motion } from "framer-motion"
import type { Character } from "../../types/character"
import { statusBadge, FALLBACK_IMAGE } from "../../utils/statusStyles"
import { useSpoilerShield } from "../../contexts/SpoilerContext"
import { hasCharacterProfile } from "../../data/characterProfiles"

interface Props {
  character: Character | null
  isOpen: boolean
  onClose: () => void
}

export default function CharacterModal({ character, isOpen, onClose }: Props) {
  const { spoilerShield } = useSpoilerShield()

  if (!character) return null

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 md:p-8">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-[0.97] translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-[0.97]"
            >
              <DialogPanel className="w-full max-w-2xl bg-surface rounded-2xl overflow-hidden border border-accent/[0.08]">
                {/* Banner */}
                <div className="relative h-56 md:h-72">
                  <img src={character.image} alt={character.name} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE }} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="absolute bottom-5 left-7 right-7">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-body font-medium border ${
                        spoilerShield ? "border-white/10 text-body/40" : statusBadge[character.status]
                      }`}>
                        {spoilerShield ? "???" : character.status}
                      </span>
                      <span className="text-body/40 text-sm font-body font-light">{character.actor}</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-white tracking-[2px]">
                      {character.name}
                    </h2>
                  </div>
                </div>

                <div className="p-7 space-y-7">
                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="border-l-2 border-accent pl-5"
                  >
                    <p className="text-xl md:text-2xl font-heading italic text-accent leading-snug">
                      "{character.quote}"
                    </p>
                  </motion.blockquote>

                  {/* About */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-body/30 mb-3 font-body font-medium">About</h3>
                    <p className="text-body/60 leading-[1.9] text-base font-body font-light">{character.description}</p>
                  </div>

                  {/* Traits */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-body/30 mb-3 font-body font-medium">Traits</h3>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/15 text-sm font-body"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arc */}
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-body/30 mb-3 font-body font-medium">Character Arc</h3>
                    <p className="text-body/60 leading-[1.9] text-base font-body font-light">{character.arc}</p>
                  </div>

                  {/* Meta */}
                  <div className="flex gap-8 pt-5 border-t border-accent/[0.06]">
                    <div>
                      <p className="text-xs text-body/25 uppercase tracking-[0.2em] mb-1.5 font-body">Portrayed By</p>
                      <p className="text-white/90 text-base font-body font-light">{character.actor}</p>
                    </div>
                    <div>
                      <p className="text-xs text-body/25 uppercase tracking-[0.2em] mb-1.5 font-body">Appearances</p>
                      <p className="text-white/90 text-base font-body font-light">{character.seasons}</p>
                    </div>
                  </div>

                  {/* View Full Profile */}
                  {hasCharacterProfile(character.id) && (
                    <Link
                      to={`/characters/${character.id}`}
                      onClick={onClose}
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(199,162,93,0.1)] transition-all duration-300 font-body text-sm uppercase tracking-[0.2em]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Full Profile
                    </Link>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
