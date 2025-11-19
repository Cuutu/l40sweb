import QuantumScene from "@/components/project/quantum-scene"
import FeatureCard from "@/components/project/feature-card"
import ProjectHeader from "@/components/project/project-header"
import ProjectNavigation from "@/components/project/project-navigation"

const features = [
  {
    icon: "Atom",
    title: "Particle Physics",
    description:
      "A GPU-accelerated particle system simulating quantum foam, with millions of points rendered in real-time.",
  },
  {
    icon: "Zap",
    title: "Interactive Field",
    description:
      "Your cursor acts as a gravitational force, warping the particle field and creating dynamic visual effects.",
  },
  {
    icon: "Infinity",
    title: "Endless Possibilities",
    description:
      "The simulation is non-deterministic, ensuring that every interaction creates a unique and unrepeatable pattern.",
  },
]

const QuantumLeapPage = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <QuantumScene />
        {/* Logo de fondo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/logo-fantaseeds.svg" 
              alt="Fantaseeds Logo" 
              className="max-w-2xl w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectHeader
            title="Fantaseeds"
            description="Diseñamos y desarrollamos la página web oficial de Fantaseeds, una marca argentina enfocada en la cultura cannábica."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>

      <ProjectNavigation href="/portfolio/project-cyberscape" projectName="Project Cyberscape" />
    </div>
  )
}

export default QuantumLeapPage
