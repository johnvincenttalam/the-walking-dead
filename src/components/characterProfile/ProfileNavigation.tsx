import { Link, useNavigate } from "react-router-dom"
import { characters } from "../../data/characters"
import { characterProfiles } from "../../data/characterProfiles"

interface Props {
  currentId: string
}

export default function ProfileNavigation({ currentId }: Props) {
  const navigate = useNavigate()
  const profileIds = characterProfiles.map((p) => p.characterId)
  const currentIndex = profileIds.indexOf(currentId)
  const prevId = currentIndex > 0 ? profileIds[currentIndex - 1] : profileIds[profileIds.length - 1]
  const nextId = currentIndex < profileIds.length - 1 ? profileIds[currentIndex + 1] : profileIds[0]

  const prevChar = characters.find((c) => c.id === prevId)
  const nextChar = characters.find((c) => c.id === nextId)

  return (
    <section className="border-t border-accent/[0.06] bg-surface">
      <div className="max-w-5xl mx-auto px-6 py-12 flex items-center justify-between">
        {/* Previous */}
        <Link
          to={`/characters/${prevId}`}
          className="group flex items-center gap-3 text-body/40 hover:text-accent transition-colors"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body text-body/25">Previous</p>
            <p className="font-heading text-lg text-white/80 group-hover:text-accent transition-colors">
              {prevChar?.name}
            </p>
          </div>
        </Link>

        {/* Center */}
        <button
          onClick={() => {
            navigate("/")
            setTimeout(() => {
              document.getElementById("characters")?.scrollIntoView({ behavior: "smooth" })
            }, 100)
          }}
          className="hidden sm:block text-accent/40 hover:text-accent text-sm uppercase tracking-[0.2em] font-body transition-colors cursor-pointer"
        >
          All Characters
        </button>

        {/* Next */}
        <Link
          to={`/characters/${nextId}`}
          className="group flex items-center gap-3 text-body/40 hover:text-accent transition-colors text-right"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-body text-body/25">Next</p>
            <p className="font-heading text-lg text-white/80 group-hover:text-accent transition-colors">
              {nextChar?.name}
            </p>
          </div>
          <svg
            className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
