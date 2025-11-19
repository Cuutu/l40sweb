import CyberscapeScene from "@/components/project/cyberscape-scene"
import FeatureCard from "@/components/project/feature-card"
import ProjectHeader from "@/components/project/project-header"
import ProjectNavigation from "@/components/project/project-navigation"

const features = [
  {
    icon: "Cpu",
    title: "Procedural Generation",
    description: "A dynamic, ever-changing digital landscape generated in real-time using custom GLSL shaders.",
  },
  {
    icon: "Code",
    title: "Interactive Glitch Effects",
    description: "Mouse movements trigger visual distortions, simulating a fluctuating data stream.",
  },
  {
    icon: "Share2",
    title: "Optimized Performance",
    description: "High-performance rendering achieved by offloading complex calculations to the GPU.",
  },
]

const ProjectCyberscapePage = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <CyberscapeScene />
        {/* Logo de fondo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src="/logo-nahuel.svg" 
              alt="Nahuel Lozano Logo" 
              className="max-w-2xl w-full h-auto"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectHeader
            title="Nahuel – Landing Page Personal"
            description="Diseñamos y desarrollamos su landing profesional, optimizada para performance y conversión."
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

      <ProjectNavigation href="/portfolio/ethereal-threads" projectName="Ethereal Threads" />
    </div>
  )
}

export default ProjectCyberscapePage
