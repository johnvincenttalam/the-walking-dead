import { useState, useEffect, useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useSpoilerShield } from "../../contexts/SpoilerContext"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Characters", href: "/#characters" },
  { label: "Scenes", href: "/#iconic-scenes" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Memorial", href: "/#memorial" },
  { label: "Quotes", href: "/#quotes" },
  { label: "Quiz", href: "/#quiz" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { spoilerShield, toggleSpoilerShield } = useSpoilerShield()

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const isMobile = mobileOpen
    setMobileOpen(false)
    const hash = href.replace("/", "")
    const sectionId = hash.replace("#", "")
    const scrollDelay = isMobile ? 350 : 0

    if (href === "/") {
      if (location.pathname === "/") {
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), scrollDelay)
      } else {
        navigate("/")
        setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 100)
      }
      return
    }

    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, scrollDelay)
    } else {
      navigate("/")
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }, scrollDelay + 100)
    }
  }, [location.pathname, navigate, mobileOpen])

  useEffect(() => {
    let rafId = 0
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60)
        rafId = 0
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-700 ${
        scrolled || mobileOpen
          ? "bg-background/90 backdrop-blur-xl border-accent/[0.08] shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-full mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 group"
          >
            <span className="font-display text-2xl text-accent group-hover:text-accent-glow transition-colors tracking-wider">
              TWD
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-body/40 hover:text-accent transition-colors duration-300 text-sm uppercase font-body font-medium tracking-[2px]"
              >
                {link.label}
              </a>
            ))}

            {/* Spoiler Shield toggle */}
            <button
              onClick={toggleSpoilerShield}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-all duration-300 ${
                spoilerShield
                  ? "bg-accent/10 border-accent/30 text-accent shadow-[0_0_15px_rgba(199,162,93,0.15)]"
                  : "bg-transparent border-white/10 text-body/30 hover:text-body/50 hover:border-white/15"
              }`}
              aria-label="Toggle spoiler shield"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                {spoilerShield && <line x1="4" y1="20" x2="20" y2="4" strokeWidth={1.5} />}
              </svg>
              <span className="text-[11px] uppercase tracking-[2px] font-body font-medium">
                {spoilerShield ? "ON" : "OFF"}
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center items-center w-5 h-5">
              <span
                className={`block w-full h-[1.5px] bg-accent transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`block w-full h-[1.5px] bg-accent transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-full h-[1.5px] bg-accent transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-[3px]"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

    </nav>

      {/* Mobile menu — outside nav to avoid nested fixed/backdrop-filter issues */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-16 z-[49] bg-background/95 backdrop-blur-xl border-t border-accent/[0.08] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {/* Mobile Spoiler Shield toggle */}
              <motion.button
                onClick={toggleSpoilerShield}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                className={`flex items-center justify-between py-3.5 px-4 rounded-lg border mb-3 transition-all duration-300 ${
                  spoilerShield
                    ? "bg-accent/10 border-accent/30 text-accent shadow-[0_0_15px_rgba(199,162,93,0.1)]"
                    : "bg-transparent border-white/10 text-body/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    {spoilerShield && <line x1="4" y1="20" x2="20" y2="4" strokeWidth={1.5} />}
                  </svg>
                  <span className="text-sm uppercase tracking-[2px] font-body font-medium">
                    Spoiler Shield
                  </span>
                </div>
                <span className={`text-xs font-light uppercase tracking-wider ${spoilerShield ? "text-accent" : "text-body/40"}`}>
                  {spoilerShield ? "ON" : "OFF"}
                </span>
              </motion.button>

              <div className="h-px bg-white/5 mb-2" />

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 1) * 0.05 }}
                  className="text-body/50 hover:text-accent transition-colors py-3 text-lg tracking-wider font-body font-light"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
