import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { iconicScenes } from "../../data/iconicScenes"
import SectionHeader from "../SectionHeader"
import ScenePanel from "./ScenePanel"

export default function IconicScenesGallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress through the entire scenes section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section id="iconic-scenes" ref={ref} className="relative bg-background">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/[0.1] to-transparent" />

      {/* Header area with standard padding */}
      <div className="py-28 md:py-36 px-6">
        <SectionHeader
          subtitle="Defining Moments"
          title="Iconic Scenes"
          description="The moments that stopped the world. Each frame burned into the memory of every survivor who witnessed them."
          inView={inView}
          className="mb-0"
        />
      </div>

      {/* Scenes container with sticky backgrounds */}
      <div ref={containerRef} className="relative">
        {/* Fixed background container - stays in view while scrolling */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {iconicScenes.map((scene, index) => (
            <SceneBackground
              key={scene.id}
              scene={scene}
              index={index}
              totalScenes={iconicScenes.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-background/40 pointer-events-none" />
          {/* Bottom gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
        </div>

        {/* Scrollable text content - overlays the sticky background */}
        <div className="relative z-10" style={{ marginTop: "-100vh" }}>
          {iconicScenes.map((scene, index) => (
            <ScenePanel key={scene.id} scene={scene} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface SceneBackgroundProps {
  scene: (typeof iconicScenes)[number]
  index: number
  totalScenes: number
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}

function SceneBackground({ scene, index, totalScenes, scrollYProgress }: SceneBackgroundProps) {
  const isEven = index % 2 === 0

  // Calculate the scroll range for this specific scene
  const sceneStart = index / totalScenes
  const sceneEnd = (index + 1) / totalScenes
  const fadeRange = (sceneEnd - sceneStart) * 0.4 // 40% of each scene for fade transitions

  // Build opacity keyframes based on scene position
  let opacityInput: number[]
  let opacityOutput: number[]

  if (index === 0) {
    // First scene: start visible, fade out towards the end
    opacityInput = [0, sceneEnd - fadeRange, sceneEnd]
    opacityOutput = [1, 1, 0]
  } else if (index === totalScenes - 1) {
    // Last scene: fade in, stay visible
    opacityInput = [sceneStart, sceneStart + fadeRange, 1]
    opacityOutput = [0, 1, 1]
  } else {
    // Middle scenes: fade in, stay visible, fade out
    opacityInput = [sceneStart, sceneStart + fadeRange, sceneEnd - fadeRange, sceneEnd]
    opacityOutput = [0, 1, 1, 0]
  }

  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput)

  // Subtle scale animation
  const scale = useTransform(scrollYProgress, [sceneStart, sceneEnd], [1.1, 1.0])

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity }}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${scene.image}')`,
          backgroundPosition: "center top",
          filter: "saturate(0.3) brightness(0.4)",
          scale,
        }}
      />

      {/* Gold atmosphere tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background: isEven
            ? "radial-gradient(ellipse at 20% 70%, rgba(199,162,93,0.5) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 80% 70%, rgba(199,162,93,0.5) 0%, transparent 50%)",
        }}
      />
    </motion.div>
  )
}
