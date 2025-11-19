import EtherealScene from "@/components/project/ethereal-scene"
import FeatureCard from "@/components/project/feature-card"
import ProjectHeader from "@/components/project/project-header"
import ProjectNavigation from "@/components/project/project-navigation"

const features = [
  {
    icon: "Wind",
    title: "Fluid Dynamics",
    description: "A real-time simulation of flowing, smoke-like threads using multi-layered noise algorithms.",
  },
  {
    icon: "Palette",
    title: "Generative Color",
    description:
      "Colors are blended and shifted procedurally, creating an endless palette of unique visual compositions.",
  },
  {
    icon: "Brush",
    title: "Interactive Flow",
    description: "Influence the direction and intensity of the threads with your cursor, becoming part of the artwork.",
  },
]

const EtherealThreadsPage = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <EtherealScene />
        {/* Logo de fondo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/logo-mentoring.svg" 
              alt="Mentoring Logo" 
              className="max-w-2xl w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectHeader
            title="Nahuel – Mentoring"
            description="Diseño y desarrollo de su sitio de cursos, con enfoque en experiencia de usuario y rendimiento."
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

      <ProjectNavigation href="/portfolio/quantum-leap" projectName="Quantum Leap" />
    </div>
  )
}

export default EtherealThreadsPage
