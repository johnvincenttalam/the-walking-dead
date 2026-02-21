import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from "react"

interface SpoilerContextType {
  spoilerShield: boolean
  toggleSpoilerShield: () => void
  revealedSections: Set<string>
  revealSection: (id: string) => void
}

const SpoilerContext = createContext<SpoilerContextType | undefined>(undefined)

const STORAGE_KEY = "twd-spoiler-shield"

export function SpoilerProvider({ children }: { children: ReactNode }) {
  const [spoilerShield, setSpoilerShield] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored === "true"
    } catch {
      return false
    }
  })

  const [revealedSections, setRevealedSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(spoilerShield))
  }, [spoilerShield])

  const toggleSpoilerShield = useCallback(() => {
    setSpoilerShield((prev) => !prev)
    setRevealedSections(new Set())
  }, [])

  const revealSection = useCallback((id: string) => {
    setRevealedSections((prev) => new Set(prev).add(id))
  }, [])

  const value = useMemo(
    () => ({ spoilerShield, toggleSpoilerShield, revealedSections, revealSection }),
    [spoilerShield, toggleSpoilerShield, revealedSections, revealSection],
  )

  return <SpoilerContext.Provider value={value}>{children}</SpoilerContext.Provider>
}

export function useSpoilerShield() {
  const context = useContext(SpoilerContext)
  if (!context) throw new Error("useSpoilerShield must be used within SpoilerProvider")
  return context
}
