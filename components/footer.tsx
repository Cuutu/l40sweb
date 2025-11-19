"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { GlowScene } from "./glow-scene"
import { TransitionLink } from "./transition-link"

export function Footer() {
  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <GlowScene />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Tenes un proyecto en mente?     </h2>
        <p className="text-lg text-neutral-300 mb-8">Construyamoslo en conjunto  </p>
        <TransitionLink href="/contact">
          <button className="bg-white text-black font-bold py-4 rounded-full text-lg transition-transform hover:scale-105 border-0 px-5">
            Contactar
          </button>
        </TransitionLink>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 mx-auto">
            &copy; {new Date().getFullYear()} L40S Dev Studio. Digital solutions crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
