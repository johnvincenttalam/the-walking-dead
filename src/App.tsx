import { useState, lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { SpoilerProvider } from "./contexts/SpoilerContext"
import Navbar from "./components/layout/Navbar"
import Preloader from "./components/Preloader"
import ScrollProgress from "./components/ScrollProgress"
import BackToTop from "./components/BackToTop"
import SpoilerBanner from "./components/SpoilerBanner"

const Home = lazy(() => import("./pages/Home"))
const CharacterDetail = lazy(() => import("./pages/CharacterDetail"))
const NotFound = lazy(() => import("./pages/NotFound"))

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      <SpoilerProvider>
      <AnimatePresence>
        {loading && (
          <Preloader onComplete={() => setTimeout(() => setLoading(false), 600)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <Navbar />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters/:id" element={<CharacterDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <BackToTop />
          <SpoilerBanner />
        </>
      )}
    </SpoilerProvider>
    </BrowserRouter>
  )
}

export default App
