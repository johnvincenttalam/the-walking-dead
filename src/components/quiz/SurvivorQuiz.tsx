import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { questions, results } from "../../data/quizData"
import type { ResultData } from "../../data/quizData"
import SectionHeader from "../SectionHeader"

export default function SurvivorQuiz() {
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [result, setResult] = useState<ResultData | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  function handleAnswer(type: string) {
    const newScores = { ...scores, [type]: (scores[type] || 0) + 1 }
    setScores(newScores)

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      const entries = Object.entries(newScores)
      const maxScore = Math.max(...entries.map(([, s]) => s))
      const tied = entries.filter(([, s]) => s === maxScore)
      const winner = tied[Math.floor(Math.random() * tied.length)][0]
      setResult(results[winner])
    }
  }

  function reset() {
    setStarted(false)
    setCurrentQ(0)
    setScores({})
    setResult(null)
  }

  return (
    <section id="quiz" ref={ref} className="relative py-28 md:py-36 px-6 bg-background overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      {/* Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(199,162,93,0.6) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Interactive"
          title="Which Survivor Are You?"
          description="Answer six questions. Discover which character matches your survival instinct."
          inView={inView}
        />

        {/* Quiz body */}
        <AnimatePresence mode="wait">
          {!started && !result && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <button
                onClick={() => setStarted(true)}
                className="bg-[#2a2a2a]/80 backdrop-blur-sm border border-accent hover:border-accent-glow px-10 py-4 rounded-lg text-accent text-base font-body font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(199,162,93,0.2)] hover:text-accent-glow"
              >
                Begin the Quiz
              </button>
            </motion.div>
          )}

          {started && !result && (
            <motion.div
              key={`q-${currentQ}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-px bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent/40"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <span className="text-accent/40 text-xs font-body font-light tracking-wider">
                  {currentQ + 1}/{questions.length}
                </span>
              </div>

              {/* Question */}
              <h3 className="font-heading text-2xl md:text-3xl text-white mb-8 leading-snug font-semibold">
                {questions[currentQ].question}
              </h3>

              {/* Answers */}
              <div className="space-y-3">
                {questions[currentQ].answers.map((answer, i) => (
                  <motion.button
                    key={answer.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleAnswer(answer.type)}
                    className="w-full text-left px-6 py-4 rounded-xl bg-surface/60 border border-white/[0.04] hover:border-accent/20 hover:bg-surface transition-all duration-300 group"
                  >
                    <span className="text-body/60 group-hover:text-body/90 text-base font-body font-light transition-colors">
                      {answer.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <div className="rounded-2xl bg-surface/60 border border-accent/15 p-8 md:p-12">
                <p className="text-accent/50 text-xs tracking-[0.3em] uppercase font-body mb-6">
                  Your Survivor Match
                </p>

                <h3 className="font-display text-4xl md:text-6xl text-accent mb-2 tracking-[3px]">
                  {result.name}
                </h3>

                <p className="text-white/50 text-sm uppercase tracking-[0.2em] font-body font-medium mb-8">
                  {result.title}
                </p>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mb-8" />

                <p className="text-body/60 text-base md:text-lg leading-[1.9] font-body font-light max-w-lg mx-auto mb-8">
                  {result.description}
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/15 mb-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-accent text-sm font-body font-medium tracking-wider">
                    {result.trait}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={reset}
                    className="text-body/30 hover:text-accent text-sm font-body font-light tracking-wider uppercase transition-colors duration-300"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
