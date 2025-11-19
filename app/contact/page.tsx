"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    nombreProyecto: "",
    mensaje: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          nombre: "",
          mail: "",
          nombreProyecto: "",
          mensaje: ""
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Contactanos</h1>
        <p className="text-lg text-neutral-300 mb-12">Transformemos tu idea en una realidad digital. Contactanos</p>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              type="text" 
              name="nombre"
              placeholder="Nombre" 
              value={formData.nombre}
              onChange={handleChange}
              required
              className="bg-[#1a1a1a] border-neutral-700 text-white" 
            />
            <Input 
              type="email" 
              name="mail"
              placeholder="Mail" 
              value={formData.mail}
              onChange={handleChange}
              required
              className="bg-[#1a1a1a] border-neutral-700 text-white" 
            />
          </div>
          <Input 
            type="text" 
            name="nombreProyecto"
            placeholder="Nombre del proyecto" 
            value={formData.nombreProyecto}
            onChange={handleChange}
            required
            className="bg-[#1a1a1a] border-neutral-700 text-white" 
          />
          <Textarea 
            name="mensaje"
            placeholder="Contanos sobre tu proyecto" 
            rows={6} 
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="bg-[#1a1a1a] border-neutral-700 text-white" 
          />
          {submitStatus === "success" && (
            <div className="text-center text-green-400 text-sm">
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="text-center text-red-400 text-sm">
              Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
            </div>
          )}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-white text-black hover:bg-neutral-200 font-bold text-lg px-10 py-6 disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
